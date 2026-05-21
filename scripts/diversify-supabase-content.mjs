/**
 * P1.1 — Batch LLM riscrittura content_html di seo_locations + seo_beaches
 * × 4 lingue (IT, EN, DE, FR) per portare similarity Jaccard < 0.10.
 *
 * Strategia:
 *   - Per ogni record, invia content_html attuale + slug + title + lang a Gemini
 *   - Chiede di riscrivere mantenendo informazioni ma:
 *       * stile editoriale unico (no template phrase)
 *       * inserire fatti specifici quella località (distanze esatte, riferimenti
 *         culturali locali, dettagli di scena specifici)
 *       * variare struttura, apertura, chiusura, transizioni
 *   - UPDATE su DB + set content_diversified_at_{lang} = now()
 *
 * Idempotente: salta record già processati (basato su timestamp marker).
 * Resume capability: si può fermare e ripartire.
 *
 * Uso:
 *   node scripts/diversify-supabase-content.mjs                     # processa tutti i mancanti
 *   node scripts/diversify-supabase-content.mjs --table locations   # solo seo_locations
 *   node scripts/diversify-supabase-content.mjs --table beaches     # solo seo_beaches
 *   node scripts/diversify-supabase-content.mjs --lang it           # solo lingua IT
 *   node scripts/diversify-supabase-content.mjs --slug porto-cervo  # solo uno slug
 *   node scripts/diversify-supabase-content.mjs --force             # rigenera anche già processati
 *   node scripts/diversify-supabase-content.mjs --dry-run           # mostra cosa farebbe senza UPDATE
 *   node scripts/diversify-supabase-content.mjs --limit 5           # processa solo primi 5 (debug)
 *
 * Richiede: GEMINI_API_KEY + SUPABASE_SERVICE_ROLE_KEY in .env.local
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createClient } from "@supabase/supabase-js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

async function loadEnv() {
  try {
    const env = await fs.readFile(path.join(ROOT, ".env.local"), "utf-8");
    for (const line of env.split("\n")) {
      const m = line.match(/^([A-Z_][A-Z0-9_]*)=(.*)$/);
      if (m) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
    }
  } catch {}
}
await loadEnv();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const SUPABASE_URL = process.env.SUPABASE_URL || "https://zgytnkimjpoosvshfopz.supabase.co";
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!GEMINI_API_KEY) { console.error("Missing GEMINI_API_KEY"); process.exit(1); }
if (!SUPABASE_KEY) { console.error("Missing SUPABASE_SERVICE_ROLE_KEY"); process.exit(1); }

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, { auth: { persistSession: false } });

const GEMINI_MODEL = "gemini-flash-latest";
const GEMINI_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

const LANG_NAMES = { it: "italiano", en: "inglese britannico", de: "tedesco", fr: "francese" };
const RATE_LIMIT_MS = 1500; // 1.5 sec tra chiamate (sicuro per Gemini free tier)

function getFieldNames(lang) {
  const suffix = lang === "it" ? "" : `_${lang}`;
  return {
    content: `content_html${suffix}`,
    title: `title${suffix}`,
    h1: `h1${suffix}`,
    marker: `content_diversified_at${suffix}`,
    backup: `content_html_backup${suffix}`,
  };
}

function buildPrompt({ table, slug, lang, title, h1, content }) {
  const entityType = table === "seo_locations" ? "localita" : "spiaggia";
  const langName = LANG_NAMES[lang] || lang;
  return `Sei un copywriter SEO esperto. Riscrivi il seguente contenuto HTML per la ${entityType} "${title}" (slug ${slug}) in ${langName}, mantenendo ESATTAMENTE le stesse informazioni essenziali ma trasformando lo stile per renderlo UNICO e non templated.

REGOLE TASSATIVE:
- Mantieni TUTTI i tag HTML esistenti (h2, h3, p, ul, li, strong, em, a). Non aggiungere classi.
- Mantieni la LUNGHEZZA approssimativa (+/-15%).
- Mantieni TUTTI i link href esistenti.
- NON aggiungere CTA promozionali nuove. NON inventare prezzi.
- NON tradurre in altre lingue: scrivi SOLO in ${langName}.
- Cambia l'APERTURA del primo paragrafo (no "${title} e una...", "Located in...", "Im Herzen...", "Au coeur...")
- Cambia le TRANSIZIONI tra sezioni (no "Inoltre," "Furthermore," "Daruber hinaus," "De plus,")
- Inserisci 2-3 DETTAGLI SPECIFICI di questa esatta ${entityType} (toponimi vicini, distanza km esatta da Olbia, riferimenti culturali locali, dettagli geografici granulari) per renderlo non scambiabile con altre ${entityType}.
- Varia la STRUTTURA: se l'originale aveva "intro + 3 sezioni", puoi fare "intro + 2 sezioni + conclusione" o "domanda iniziale + 3 mini-storie".
- Tono: editoriale, autorevole, specifico. NON da marketing aggressivo. NON da AI generico.

CONTENUTO ORIGINALE DA RISCRIVERE:
${content}

OUTPUT: SOLO l'HTML riscritto, senza commenti, senza markdown, senza spiegazioni. Inizia direttamente con il primo tag HTML.`;
}

async function callGemini(prompt) {
  const body = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: {
      temperature: 0.9,
      topK: 40,
      topP: 0.95,
      maxOutputTokens: 4096,
    },
  };
  const res = await fetch(`${GEMINI_ENDPOINT}?key=${GEMINI_API_KEY}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`Gemini ${res.status}: ${txt.slice(0, 200)}`);
  }
  const data = await res.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error("No text returned from Gemini");
  let cleaned = text.trim().replace(/^```html\s*\n?/i, "").replace(/\n?```\s*$/i, "").trim();
  // Estrai solo HTML: ricerca primo tag block valido e taglia tutto prima
  const firstTagMatch = cleaned.match(/<(p|h[1-6]|ul|ol|div|article|section|figure|blockquote|table)\b/i);
  if (firstTagMatch && firstTagMatch.index > 0) {
    cleaned = cleaned.slice(firstTagMatch.index);
  }
  return cleaned.trim();
}

function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

async function processTable({ table, langs, slugFilter, force, dryRun, limit }) {
  console.log(`\n📂 ${table}\n`);
  const fields = langs.map((l) => getFieldNames(l));
  const allFields = ["slug", ...fields.flatMap((f) => [f.content, f.title, f.h1, f.marker, f.backup])];

  let query = supabase.from(table).select(allFields.join(","));
  if (slugFilter) query = query.eq("slug", slugFilter);
  const { data, error } = await query;
  if (error) { console.error(error.message); return { ok: 0, ko: 0, skip: 0 }; }

  let ok = 0, ko = 0, skip = 0;
  let processed = 0;

  outer: for (const row of data || []) {
    for (let i = 0; i < langs.length; i++) {
      if (limit && processed >= limit) break outer;
      const lang = langs[i];
      const f = fields[i];
      const content = row[f.content];
      const title = row[f.title] || row.slug;
      const h1 = row[f.h1] || title;
      const marker = row[f.marker];

      if (!content || content.length < 100) { skip++; continue; }
      if (marker && !force) { skip++; continue; }

      processed++;
      const tag = `[${table.replace("seo_", "")}/${row.slug}/${lang}]`;
      if (dryRun) {
        console.log(`  🔍 ${tag} dry-run (${content.length} chars)`);
        ok++;
        continue;
      }

      try {
        const prompt = buildPrompt({ table, slug: row.slug, lang, title, h1, content });
        const newContent = await callGemini(prompt);
        if (!newContent || newContent.length < 100) throw new Error("Gemini returned too-short content");
        // Tolera anche apertura con whitespace o BOM prima del primo tag
        if (!newContent.match(/<(p|h[1-6]|ul|ol|div|article|section|figure|blockquote|table)\b/i)) {
          throw new Error(`Gemini returned non-HTML (first 80: ${newContent.slice(0, 80)})`);
        }
        // Safeguard: rigetta se Gemini ha tagliato troppo (< 60% lunghezza originale)
        if (newContent.length < content.length * 0.6) {
          throw new Error(`Output too short: ${newContent.length} vs ${content.length} (< 60%)`);
        }

        const update = { [f.content]: newContent, [f.marker]: new Date().toISOString() };
        // Backup originale solo se non già fatto (safe rollback)
        if (!row[f.backup]) update[f.backup] = content;
        const { error: upErr } = await supabase.from(table).update(update).eq("slug", row.slug);
        if (upErr) throw new Error(`UPDATE: ${upErr.message}`);

        const delta = newContent.length - content.length;
        console.log(`  ✅ ${tag} ${content.length} → ${newContent.length} chars (${delta > 0 ? "+" : ""}${delta})`);
        ok++;
        await sleep(RATE_LIMIT_MS);
      } catch (err) {
        console.error(`  ❌ ${tag}: ${err.message}`);
        ko++;
        await sleep(RATE_LIMIT_MS * 2); // backoff on error
      }
    }
  }
  return { ok, ko, skip };
}

async function main() {
  const args = process.argv.slice(2);
  const force = args.includes("--force");
  const dryRun = args.includes("--dry-run");
  const getArg = (name) => {
    const i = args.indexOf(name);
    return i >= 0 && args[i + 1] && !args[i + 1].startsWith("--") ? args[i + 1] : null;
  };
  const tableArg = getArg("--table");
  const langArg = getArg("--lang");
  const slugArg = getArg("--slug");
  const limitArg = getArg("--limit");
  const limit = limitArg ? parseInt(limitArg, 10) : 0;

  const tables = tableArg === "locations" ? ["seo_locations"]
    : tableArg === "beaches" ? ["seo_beaches"]
    : ["seo_locations", "seo_beaches"];

  const langs = langArg && ["it","en","de","fr"].includes(langArg) ? [langArg] : ["it","en","de","fr"];

  console.log(`\n🤖 Diversify Supabase content via Gemini`);
  console.log(`   tables: ${tables.join(", ")}`);
  console.log(`   langs:  ${langs.join(", ")}`);
  if (slugArg) console.log(`   slug:   ${slugArg}`);
  if (force) console.log(`   force:  yes`);
  if (dryRun) console.log(`   mode:   DRY RUN (no UPDATE)`);
  if (limit) console.log(`   limit:  ${limit}`);

  let totalOk = 0, totalKo = 0, totalSkip = 0;
  for (const table of tables) {
    const { ok, ko, skip } = await processTable({ table, langs, slugFilter: slugArg, force, dryRun, limit });
    totalOk += ok; totalKo += ko; totalSkip += skip;
    if (limit && (totalOk + totalKo) >= limit) break;
  }

  console.log(`\n✨ Totale: ${totalOk} riscritti, ${totalKo} errori, ${totalSkip} saltati (già processati o vuoti)\n`);
}

main().catch((err) => {
  console.error("Fatal:", err.message);
  process.exit(1);
});

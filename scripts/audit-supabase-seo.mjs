/**
 * Supabase SEO Audit
 * ──────────────────
 * Estrae title / h1 / meta_description / content_html dalle tabelle
 * `seo_locations` e `seo_beaches` e individua:
 *   1. Duplicati esatti (SHA1 identici tra slug diversi)
 *   2. Quasi-duplicati (Jaccard 5-grammi su content_html > 0.30)
 *   3. Title/meta_description identici tra slug
 *   4. Slug con content_html mancante o troppo corto (<150 parole)
 *
 * Usage:
 *   node scripts/audit-supabase-seo.mjs
 *
 * Output:
 *   reports/supabase-seo-audit.md
 *   reports/supabase-seo-audit.json
 */

import { createClient } from "@supabase/supabase-js";
import { mkdirSync, writeFileSync } from "fs";
import { resolve } from "path";
import { createHash } from "crypto";

const NGRAM = 5;
const MIN_WORDS = 150;
const SIM_THRESHOLD = 0.3;
const REPORTS_DIR = resolve("reports");

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || "https://zgytnkimjpoosvshfopz.supabase.co";
const SUPABASE_KEY =
  process.env.VITE_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpneXRua2ltanBvb3N2c2hmb3B6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIxMzgxNjIsImV4cCI6MjA4NzcxNDE2Mn0.aXADl6M5aQlZGEDDI3-5qXgE7gbVAds8hSH8qTFfPTk";

main().catch((err) => {
  console.error("❌", err);
  process.exit(2);
});

async function main() {
  mkdirSync(REPORTS_DIR, { recursive: true });

  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
  console.log(`🔌 Connessione a ${SUPABASE_URL}`);

  const [locRes, beachRes] = await Promise.all([
    supabase.from("seo_locations").select("slug,title,h1,meta_description,content_html"),
    supabase.from("seo_beaches").select("slug,title,h1,meta_description,content_html"),
  ]);
  if (locRes.error) throw new Error(`seo_locations: ${locRes.error.message}`);
  if (beachRes.error) throw new Error(`seo_beaches: ${beachRes.error.message}`);

  const records = [
    ...locRes.data.map((r) => ({ ...r, table: "seo_locations" })),
    ...beachRes.data.map((r) => ({ ...r, table: "seo_beaches" })),
  ];
  console.log(`📦 Record totali: ${records.length} (${locRes.data.length} location + ${beachRes.data.length} spiagge)`);

  const enriched = records.map((r) => {
    const text = stripHtml(r.content_html ?? "");
    const words = text.split(/\s+/).filter((w) => w.length >= 2);
    return {
      slug: r.slug,
      table: r.table,
      title: r.title ?? "",
      h1: r.h1 ?? "",
      meta_description: r.meta_description ?? "",
      contentSha: createHash("sha1").update(text).digest("hex"),
      contentText: text,
      wordCount: words.length,
      ngrams: buildNgrams(words, NGRAM),
    };
  });

  // 1. Duplicati esatti per content_html
  const byHash = new Map();
  for (const r of enriched) {
    if (!r.contentSha || r.wordCount === 0) continue;
    const arr = byHash.get(r.contentSha) ?? [];
    arr.push(r.slug);
    byHash.set(r.contentSha, arr);
  }
  const exactDuplicates = [...byHash.values()].filter((arr) => arr.length > 1);

  // 2. Quasi-duplicati su content_html (Jaccard > soglia)
  const nearDuplicates = [];
  for (let i = 0; i < enriched.length; i++) {
    for (let j = i + 1; j < enriched.length; j++) {
      const a = enriched[i];
      const b = enriched[j];
      if (a.wordCount === 0 || b.wordCount === 0) continue;
      const sim = jaccard(a.ngrams, b.ngrams);
      if (sim > SIM_THRESHOLD) {
        nearDuplicates.push({ a: a.slug, b: b.slug, sim });
      }
    }
  }
  nearDuplicates.sort((x, y) => y.sim - x.sim);

  // 3. Title / meta duplicati
  const titleDuplicates = findFieldDuplicates(enriched, "title");
  const metaDuplicates = findFieldDuplicates(enriched, "meta_description");

  // 4. Content troppo corto / mancante
  const tooShort = enriched
    .filter((r) => r.wordCount < MIN_WORDS)
    .sort((a, b) => a.wordCount - b.wordCount);

  // Output JSON + Markdown
  const report = {
    generatedAt: new Date().toISOString(),
    totalRecords: records.length,
    minWordsThreshold: MIN_WORDS,
    similarityThreshold: SIM_THRESHOLD,
    exactDuplicates,
    nearDuplicates: nearDuplicates.slice(0, 50),
    titleDuplicates,
    metaDuplicates,
    tooShort: tooShort.map((r) => ({ slug: r.slug, table: r.table, wordCount: r.wordCount })),
  };
  writeFileSync(resolve(REPORTS_DIR, "supabase-seo-audit.json"), JSON.stringify(report, null, 2), "utf-8");

  const md = renderMarkdown(report, enriched);
  writeFileSync(resolve(REPORTS_DIR, "supabase-seo-audit.md"), md, "utf-8");

  console.log("");
  console.log(`📊 Duplicati esatti content_html: ${exactDuplicates.length} gruppi`);
  console.log(`📊 Quasi-duplicati (sim > ${SIM_THRESHOLD}): ${nearDuplicates.length} coppie`);
  console.log(`📊 Title duplicati:                 ${titleDuplicates.length} gruppi`);
  console.log(`📊 Meta duplicati:                  ${metaDuplicates.length} gruppi`);
  console.log(`📊 Content < ${MIN_WORDS} parole:           ${tooShort.length} slug`);
  console.log(`📁 Report: reports/supabase-seo-audit.{md,json}`);

  if (exactDuplicates.length > 0 || titleDuplicates.length > 0 || metaDuplicates.length > 0) {
    console.error("\n⚠️  Duplicati esatti rilevati — eseguire UPDATE SQL prima del prossimo deploy.");
    process.exit(1);
  }
}

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&[a-z]+;/gi, " ")
    .toLowerCase()
    .replace(/[^a-zà-ÿ0-9\s]/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function buildNgrams(tokens, n) {
  const out = new Set();
  for (let i = 0; i <= tokens.length - n; i++) out.add(tokens.slice(i, i + n).join(" "));
  return out;
}

function jaccard(a, b) {
  if (a.size === 0 && b.size === 0) return 0;
  let inter = 0;
  for (const x of a) if (b.has(x)) inter++;
  return inter / (a.size + b.size - inter);
}

function findFieldDuplicates(records, field) {
  const byVal = new Map();
  for (const r of records) {
    const v = (r[field] ?? "").trim();
    if (!v) continue;
    const arr = byVal.get(v) ?? [];
    arr.push(r.slug);
    byVal.set(v, arr);
  }
  return [...byVal.entries()]
    .filter(([, arr]) => arr.length > 1)
    .map(([value, slugs]) => ({ value, slugs }));
}

function renderMarkdown(r, records) {
  const lines = [
    `# Supabase SEO Audit — ${r.generatedAt.slice(0, 10)}`,
    ``,
    `**Record totali:** ${r.totalRecords}`,
    `**Word-count minimo:** ${r.minWordsThreshold}`,
    `**Soglia near-duplicate:** Jaccard > ${r.similarityThreshold}`,
    ``,
    `## 1. Duplicati esatti di \`content_html\``,
    ``,
    r.exactDuplicates.length === 0
      ? `Nessun duplicato esatto rilevato. ✅`
      : r.exactDuplicates.map((g) => `- ${g.map((s) => `\`${s}\``).join(", ")}`).join("\n"),
    ``,
    `## 2. Title duplicati`,
    ``,
    r.titleDuplicates.length === 0
      ? `Tutti i title sono unici. ✅`
      : r.titleDuplicates
          .map((d) => `- **"${d.value}"** → ${d.slugs.map((s) => `\`${s}\``).join(", ")}`)
          .join("\n"),
    ``,
    `## 3. Meta description duplicate`,
    ``,
    r.metaDuplicates.length === 0
      ? `Tutte le meta description sono uniche. ✅`
      : r.metaDuplicates
          .map((d) => `- **"${d.value.slice(0, 100)}..."** → ${d.slugs.map((s) => `\`${s}\``).join(", ")}`)
          .join("\n"),
    ``,
    `## 4. Top 30 quasi-duplicati su \`content_html\` (Jaccard 5-gram)`,
    ``,
    r.nearDuplicates.length === 0
      ? `Nessuna coppia sopra la soglia. ✅`
      : [
          `| # | Jaccard | Slug A | Slug B |`,
          `|---|---|---|---|`,
          ...r.nearDuplicates.slice(0, 30).map((p, i) =>
            `| ${i + 1} | ${p.sim.toFixed(3)} | \`${p.a}\` | \`${p.b}\` |`,
          ),
        ].join("\n"),
    ``,
    `## 5. Pagine con \`content_html\` < ${r.minWordsThreshold} parole`,
    ``,
    r.tooShort.length === 0
      ? `Tutte le pagine hanno contenuto sufficiente. ✅`
      : [
          `| Slug | Tabella | Word count |`,
          `|---|---|---|`,
          ...r.tooShort.map((s) => `| \`${s.slug}\` | ${s.table} | ${s.wordCount} |`),
        ].join("\n"),
    ``,
    `## Statistiche word count`,
    ``,
    (() => {
      const counts = records.map((r) => r.wordCount).sort((a, b) => a - b);
      const sum = counts.reduce((s, x) => s + x, 0);
      const avg = sum / counts.length;
      const median = counts[Math.floor(counts.length / 2)];
      return [
        `- **Media:** ${avg.toFixed(0)} parole`,
        `- **Mediana:** ${median} parole`,
        `- **Min:** ${counts[0]} parole`,
        `- **Max:** ${counts[counts.length - 1]} parole`,
      ].join("\n");
    })(),
    ``,
  ];
  return lines.join("\n");
}

/**
 * Audit visivo + uniqueness sulle pagine buildate (dist/**\/*.html).
 *
 * Per ogni pagina:
 *  - conta <img>, <figure>, <picture>
 *  - conta parole nel testo visibile
 *  - calcola ratio testo/immagini
 *
 * Inoltre calcola similarità Jaccard (5-gram) tra coppie di pagine dello stesso
 * "gruppo" (es. tutte le pagine /flotta/[slug] tra loro, /[slug] location IT
 * tra loro) per stimare il rischio "thin / duplicate content" SEO.
 *
 * Uso:
 *   node scripts/audit-pages-visual.mjs
 *   node scripts/audit-pages-visual.mjs --group=locations
 *   node scripts/audit-pages-visual.mjs --top=20
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, "..", "dist");

const args = Object.fromEntries(
  process.argv
    .slice(2)
    .map((a) => a.replace(/^--/, "").split("="))
    .map(([k, v]) => [k, v ?? true]),
);
const TOP = Number(args.top || 25);

// ───────── helpers ─────────
function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, "")
    .replace(/<svg[\s\S]*?<\/svg>/gi, "")
    .replace(/<header[\s\S]*?<\/header>/gi, "")
    .replace(/<footer[\s\S]*?<\/footer>/gi, "")
    .replace(/<nav[\s\S]*?<\/nav>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function wordCount(text) {
  return text.split(/\s+/).filter((w) => w.length > 1).length;
}

function countTag(html, tag) {
  const re = new RegExp(`<${tag}\\b`, "gi");
  return (html.match(re) || []).length;
}

function ngrams(text, n = 5) {
  const words = text.split(/\s+/).filter(Boolean);
  const set = new Set();
  for (let i = 0; i + n <= words.length; i++) set.add(words.slice(i, i + n).join(" "));
  return set;
}

function jaccard(setA, setB) {
  if (setA.size === 0 || setB.size === 0) return 0;
  let inter = 0;
  for (const x of setA) if (setB.has(x)) inter++;
  return inter / (setA.size + setB.size - inter);
}

async function walk(dir, out = []) {
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) await walk(p, out);
    else if (e.name === "index.html") out.push(p);
  }
  return out;
}

function pageRoute(p) {
  return "/" + path.relative(DIST, p).replace(/\\/g, "/").replace(/\/?index\.html$/, "");
}

// ───────── gruppi per similarity ─────────
function groupOf(route) {
  if (/^\/(en|de|fr)?\/?flotta\/confronta\/[^/]+$/.test(route)) return "compare-pair";
  if (/^\/(en|de|fr)?\/?fleet\/compare\/[^/]+$/.test(route)) return "compare-pair";
  if (/^\/(en|de|fr)?\/?fuhrpark\/vergleich\/[^/]+$/.test(route)) return "compare-pair";
  if (/^\/(en|de|fr)?\/?flotte\/comparer\/[^/]+$/.test(route)) return "compare-pair";

  if (/^\/(en|de|fr)?\/?(flotta|fleet|fuhrpark|flotte)\/[^/]+$/.test(route)) return "vehicle";

  if (/^\/(en|de|fr)?\/guide\/[^/]+$/.test(route)) return "guide";

  // location/spiaggia: pattern noleggio-auto-X / car-hire-X / autovermietung-X / location-voiture-X
  if (/^\/[a-z][a-z0-9-]+$/.test(route) || /^\/(en|de|fr)\/[a-z][a-z0-9-]+$/.test(route)) {
    const stripped = route.replace(/^\/(en|de|fr)/, "");
    if (/(noleggio-auto-|car-hire-|autovermietung-|location-voiture-)/.test(stripped))
      return "location";
    if (
      /(spiaggia|spiagge|cala|porto-istana|porto-taverna|romazzino|capriccioli|liscia|pevero|principe|brandinchi|cinta|impostu|capo-testa|bados|pittulongu|marinella|rena-bianca|sabina|moresca|faro|celvia|bianca)/i.test(
        stripped,
      )
    )
      return "beach";
  }
  return null;
}

// ───────── main ─────────
const files = await walk(DIST);
console.log(`Analizzando ${files.length} pagine HTML…\n`);

const pages = [];
for (const f of files) {
  const html = await fs.readFile(f, "utf-8");
  const text = stripHtml(html);
  const route = pageRoute(f);
  pages.push({
    route,
    file: f,
    images: countTag(html, "img"),
    figures: countTag(html, "figure"),
    pictures: countTag(html, "picture"),
    words: wordCount(text),
    text,
    group: groupOf(route),
  });
}

// ───────── 1) Pagine con piu' testo e meno immagini ─────────
const pageReports = pages
  .filter((p) => p.words > 200)
  .map((p) => ({
    route: p.route,
    words: p.words,
    images: p.images,
    figures: p.figures,
    ratio: p.images === 0 ? Infinity : Math.round(p.words / p.images),
  }))
  .sort((a, b) => b.ratio - a.ratio);

console.log(`\n📊 TOP ${TOP} PAGINE PIU' "PIATTE" (parole / immagini)`);
console.log("─".repeat(100));
console.log("words  imgs ratio  route");
for (const r of pageReports.slice(0, TOP)) {
  const ratio = r.ratio === Infinity ? "∞" : String(r.ratio).padStart(5);
  console.log(
    `${String(r.words).padStart(5)} ${String(r.images).padStart(4)} ${ratio.padStart(5)}  ${r.route}`,
  );
}

// ───────── 2) Similarity Jaccard per gruppo ─────────
const byGroup = new Map();
for (const p of pages) {
  if (!p.group) continue;
  if (!byGroup.has(p.group)) byGroup.set(p.group, []);
  byGroup.get(p.group).push(p);
}

console.log(`\n\n📐 SIMILARITY (Jaccard 5-gram) per gruppo SEO`);
console.log("─".repeat(100));

const allPairs = [];

for (const [groupName, group] of byGroup) {
  if (group.length < 2) continue;
  // pre-compute n-grams
  for (const p of group) p._ng = ngrams(p.text);

  let sum = 0, count = 0, maxSim = 0, maxPair = null;
  const pairs = [];
  for (let i = 0; i < group.length; i++) {
    for (let j = i + 1; j < group.length; j++) {
      const s = jaccard(group[i]._ng, group[j]._ng);
      sum += s;
      count++;
      pairs.push({ a: group[i].route, b: group[j].route, sim: s });
      if (s > maxSim) {
        maxSim = s;
        maxPair = [group[i].route, group[j].route];
      }
    }
  }
  const avg = sum / count;
  console.log(
    `${groupName.padEnd(14)} pages=${String(group.length).padStart(3)}  pairs=${String(count).padStart(4)}  avg=${avg.toFixed(3)}  max=${maxSim.toFixed(3)}`,
  );
  if (maxPair) console.log(`               ↳ peggior coppia: ${maxPair[0]}\n                                ${maxPair[1]}`);
  allPairs.push(...pairs.map((p) => ({ ...p, group: groupName })));
}

// Top 10 coppie peggiori cross-group
const worst = allPairs.sort((a, b) => b.sim - a.sim).slice(0, 10);
console.log(`\n\n🚨 TOP 10 COPPIE PIU' SIMILI (rischio duplicate content > 0.70)`);
console.log("─".repeat(100));
for (const p of worst) {
  const flag = p.sim > 0.7 ? "❌" : p.sim > 0.5 ? "⚠️ " : "✅";
  console.log(`${flag} ${p.sim.toFixed(3)} [${p.group}] ${p.a}\n              ${p.b}`);
}

// ───────── 3) Totale immagini e ratio globale ─────────
const total = pages.reduce(
  (acc, p) => ({
    pages: acc.pages + 1,
    images: acc.images + p.images,
    words: acc.words + p.words,
  }),
  { pages: 0, images: 0, words: 0 },
);
console.log(`\n\n📈 GLOBALI`);
console.log("─".repeat(100));
console.log(`Pagine totali:      ${total.pages}`);
console.log(`Immagini totali:    ${total.images}`);
console.log(`Parole totali:      ${total.words.toLocaleString()}`);
console.log(`Avg img/pagina:     ${(total.images / total.pages).toFixed(1)}`);
console.log(`Avg parole/pagina:  ${Math.round(total.words / total.pages)}`);

/**
 * SEO Similarity Audit
 * ────────────────────
 * Misura la similarità (Jaccard su 5-grammi di parole) tra le pagine SEO
 * renderizzate dal sito ksrentsardinia.com.
 *
 * Usa Playwright (già installato come @playwright/test) per renderizzare le
 * pagine SPA in un browser reale, perché:
 *   - Prerender.io in produzione restituisce 503 senza X-Prerender-Token
 *   - Il fetch HTML grezzo restituisce solo l'HTML shell con <div id="root"/>
 *
 * Setup (una tantum):
 *   npx playwright install chromium
 *
 * Usage:
 *   npm run seo:check                                 # produzione
 *   npm run seo:check -- --base http://localhost:8080 # locale (vite preview)
 *   npm run seo:check:ci                              # exit 1 se sim > 0.5
 *
 * Output:
 *   reports/similarity-baseline.csv  — matrice completa
 *   reports/similarity-baseline.md   — top-30 coppie più simili + statistiche
 */

import { createClient } from "@supabase/supabase-js";
import { mkdirSync, writeFileSync } from "fs";
import { resolve } from "path";
import { chromium } from "@playwright/test";

const args = parseArgs(process.argv.slice(2));
const BASE = args.base ?? "https://www.ksrentsardinia.com";
const THRESHOLD = Number(args.threshold ?? 1.01); // default disabilitato — solo report
const NGRAM = 5;
const REPORTS_DIR = resolve("reports");

const STATIC_ROUTES = [
  "/",
  "/prenotaora",
  "/flotta",
  "/chisiamo",
  "/noleggio-auto-aeroporto-olbia",
  "/noleggio-auto-porto-olbia",
  "/noleggio-auto-costa-smeralda",
  "/noleggio-auto-senza-carta-di-credito-olbia",
];

main().catch((err) => {
  console.error("❌", err);
  process.exit(2);
});

async function main() {
  mkdirSync(REPORTS_DIR, { recursive: true });

  console.log(`🔍 Base URL: ${BASE}`);

  const dynamicSlugs = await fetchSlugsFromSupabase();
  const allPaths = [
    ...STATIC_ROUTES,
    ...dynamicSlugs.map((s) => `/${s}`),
  ];
  console.log(`📄 Pagine da analizzare: ${allPaths.length}`);

  console.log(`🎭 Avvio Chromium headless...`);
  const browser = await chromium.launch();
  const context = await browser.newContext();

  // Concurrency 4 — bilancia velocità e carico
  const docs = await mapWithConcurrency(allPaths, 4, async (path) => {
    const url = BASE + path;
    try {
      const page = await context.newPage();
      await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
      const text = await page.evaluate(() => {
        const clone = document.body.cloneNode(true);
        for (const sel of ["script", "style", "noscript", "nav", "footer", "header", "svg"]) {
          for (const el of clone.querySelectorAll(sel)) el.remove();
        }
        return clone.innerText || clone.textContent || "";
      });
      await page.close();
      const norm = normalizeText(text);
      const ngrams = buildNgrams(norm, NGRAM);
      console.log(`  ✓ ${path} (${norm.length} char, ${ngrams.size} 5-grams)`);
      return { path, url, text: norm, ngrams };
    } catch (err) {
      console.warn(`  ✗ ${path} — ${err.message}`);
      return { path, url, text: "", ngrams: new Set() };
    }
  });

  await browser.close();

  // Calcolo similarity matrix
  const pairs = [];
  for (let i = 0; i < docs.length; i++) {
    for (let j = i + 1; j < docs.length; j++) {
      const sim = jaccard(docs[i].ngrams, docs[j].ngrams);
      pairs.push({ a: docs[i].path, b: docs[j].path, sim });
    }
  }
  pairs.sort((x, y) => y.sim - x.sim);

  // Statistiche
  const stats = describe(pairs.map((p) => p.sim));
  const overThreshold = pairs.filter((p) => p.sim > THRESHOLD);

  // Output CSV
  const csvLines = ["pageA,pageB,jaccard"];
  for (const p of pairs) {
    csvLines.push(`${p.a},${p.b},${p.sim.toFixed(4)}`);
  }
  writeFileSync(resolve(REPORTS_DIR, "similarity-baseline.csv"), csvLines.join("\n"), "utf-8");

  // Output Markdown
  const md = renderReport({ base: BASE, total: docs.length, stats, pairs, threshold: THRESHOLD });
  writeFileSync(resolve(REPORTS_DIR, "similarity-baseline.md"), md, "utf-8");

  console.log("");
  console.log(`📊 Similarity media:  ${stats.mean.toFixed(3)}`);
  console.log(`📊 Similarity max:    ${stats.max.toFixed(3)} (${pairs[0]?.a} ↔ ${pairs[0]?.b})`);
  console.log(`📊 Similarity p90:    ${stats.p90.toFixed(3)}`);
  console.log(`📁 Report scritti in ${REPORTS_DIR}`);

  if (overThreshold.length > 0 && Number.isFinite(THRESHOLD) && THRESHOLD <= 1) {
    console.error(`\n❌ ${overThreshold.length} coppie con similarity > ${THRESHOLD}:`);
    for (const p of overThreshold.slice(0, 10)) {
      console.error(`   ${p.sim.toFixed(3)}  ${p.a}  ↔  ${p.b}`);
    }
    if (THRESHOLD < 1) process.exit(1);
  }
}

/* ───────── helpers ───────── */

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i++) {
    if (argv[i].startsWith("--")) {
      const key = argv[i].slice(2);
      const val = argv[i + 1] && !argv[i + 1].startsWith("--") ? argv[++i] : "true";
      out[key] = val;
    }
  }
  return out;
}

async function fetchSlugsFromSupabase() {
  const url = process.env.VITE_SUPABASE_URL || "https://zgytnkimjpoosvshfopz.supabase.co";
  const key =
    process.env.VITE_SUPABASE_ANON_KEY ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpneXRua2ltanBvb3N2c2hmb3B6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIxMzgxNjIsImV4cCI6MjA4NzcxNDE2Mn0.aXADl6M5aQlZGEDDI3-5qXgE7gbVAds8hSH8qTFfPTk";
  const supabase = createClient(url, key);
  const [loc, beach] = await Promise.all([
    supabase.from("seo_locations").select("slug"),
    supabase.from("seo_beaches").select("slug"),
  ]);
  const slugs = [
    ...(loc.data ?? []).map((r) => r.slug),
    ...(beach.data ?? []).map((r) => r.slug),
  ];
  return slugs;
}

function normalizeText(text) {
  return text
    .toLowerCase()
    .replace(/[^a-zà-ÿ0-9\s]/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function buildNgrams(text, n) {
  const tokens = text.split(" ").filter((t) => t.length >= 2);
  const out = new Set();
  for (let i = 0; i <= tokens.length - n; i++) {
    out.add(tokens.slice(i, i + n).join(" "));
  }
  return out;
}

function jaccard(a, b) {
  if (a.size === 0 && b.size === 0) return 0;
  let inter = 0;
  for (const x of a) if (b.has(x)) inter++;
  return inter / (a.size + b.size - inter);
}

function describe(nums) {
  if (nums.length === 0) return { mean: 0, max: 0, min: 0, p50: 0, p90: 0 };
  const sorted = [...nums].sort((a, b) => a - b);
  const sum = sorted.reduce((s, x) => s + x, 0);
  const q = (p) => sorted[Math.min(sorted.length - 1, Math.floor(p * sorted.length))];
  return {
    mean: sum / sorted.length,
    max: sorted[sorted.length - 1],
    min: sorted[0],
    p50: q(0.5),
    p90: q(0.9),
  };
}

async function mapWithConcurrency(items, concurrency, fn) {
  const results = new Array(items.length);
  let idx = 0;
  const workers = Array.from({ length: concurrency }, async () => {
    while (true) {
      const i = idx++;
      if (i >= items.length) return;
      results[i] = await fn(items[i]);
    }
  });
  await Promise.all(workers);
  return results;
}

function renderReport({ base, total, stats, pairs, threshold }) {
  const top = pairs.slice(0, 30);
  const lines = [
    `# SEO Similarity Baseline — ${new Date().toISOString().slice(0, 10)}`,
    ``,
    `**Base URL:** ${base}`,
    `**Pagine analizzate:** ${total}`,
    `**Coppie analizzate:** ${pairs.length}`,
    `**N-gram size:** ${NGRAM}`,
    ``,
    `## Statistiche Jaccard`,
    ``,
    `| Metrica | Valore | Differenza % |`,
    `|---|---|---|`,
    `| media | ${stats.mean.toFixed(4)} | ${((1 - stats.mean) * 100).toFixed(1)}% |`,
    `| mediana | ${stats.p50.toFixed(4)} | ${((1 - stats.p50) * 100).toFixed(1)}% |`,
    `| p90 | ${stats.p90.toFixed(4)} | ${((1 - stats.p90) * 100).toFixed(1)}% |`,
    `| max | ${stats.max.toFixed(4)} | ${((1 - stats.max) * 100).toFixed(1)}% |`,
    `| min | ${stats.min.toFixed(4)} | ${((1 - stats.min) * 100).toFixed(1)}% |`,
    ``,
    `**Target:** Jaccard < 0.10 su tutte le coppie (= differenza > 90%).`,
    threshold <= 1
      ? `**Threshold CI:** ${threshold} → ${pairs.filter((p) => p.sim > threshold).length} coppie sopra la soglia.`
      : ``,
    ``,
    `## Top 30 coppie più simili`,
    ``,
    `| # | Jaccard | Diff% | Pagina A | Pagina B |`,
    `|---|---|---|---|---|`,
    ...top.map((p, i) =>
      `| ${i + 1} | ${p.sim.toFixed(4)} | ${((1 - p.sim) * 100).toFixed(1)}% | \`${p.a}\` | \`${p.b}\` |`,
    ),
    ``,
  ];
  return lines.join("\n");
}

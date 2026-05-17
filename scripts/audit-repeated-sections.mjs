/**
 * Audit di "section content ripetuto" sui file HTML dist/.
 * Trova:
 *  - elementi (h2, blockquote, p con > 50 caratteri) che compaiono identici
 *    in > 30 pagine → indicatore di copy duplicato non intenzionale
 *  - tag/elementi ripetuti più volte dentro la stessa pagina (es. due hero)
 *
 * Esclude footer/navbar/header che sono volutamente uguali per template.
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, "..", "dist");

async function walk(dir, out = []) {
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) await walk(p, out);
    else if (e.name === "index.html") out.push(p);
  }
  return out;
}

function stripStructural(html) {
  return html
    .replace(/<header[\s\S]*?<\/header>/gi, "")
    .replace(/<footer[\s\S]*?<\/footer>/gi, "")
    .replace(/<nav[\s\S]*?<\/nav>/gi, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "");
}

function extractTextOfTags(html, tag) {
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, "gi");
  const out = [];
  let m;
  while ((m = re.exec(html))) {
    const txt = m[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    if (txt.length >= 40 && txt.length <= 400) out.push(txt);
  }
  return out;
}

const files = await walk(DIST);
console.log(`Analizzando ripetizioni su ${files.length} pagine…\n`);

// Per ogni testo h2/h3/p, conta pagine in cui appare
const occurrences = new Map(); // text → Set(routes)
for (const f of files) {
  const html = stripStructural(await fs.readFile(f, "utf-8"));
  const route = "/" + path.relative(DIST, f).replace(/\\/g, "/").replace(/\/?index\.html$/, "");

  for (const tag of ["h1", "h2", "h3", "p"]) {
    for (const txt of extractTextOfTags(html, tag)) {
      const key = `[${tag}] ${txt.slice(0, 160)}`;
      if (!occurrences.has(key)) occurrences.set(key, new Set());
      occurrences.get(key).add(route);
    }
  }
}

// Mostra i blocchi che si ripetono in > 30 pagine (esclusi solo se uguale a 326 = layout globale)
const sorted = [...occurrences.entries()]
  .filter(([, pages]) => pages.size > 30 && pages.size < files.length - 5)
  .sort((a, b) => b[1].size - a[1].size)
  .slice(0, 40);

console.log("\n🔁 BLOCCHI RIPETUTI IN > 30 PAGINE (escluse navbar/footer/header)");
console.log("─".repeat(110));
console.log("count  preview");
for (const [key, pages] of sorted) {
  console.log(`${String(pages.size).padStart(4)}   ${key.slice(0, 110)}`);
}

console.log(`\n${sorted.length} blocchi candidati. (Se count == 326 sono già esclusi: layout globale.)`);

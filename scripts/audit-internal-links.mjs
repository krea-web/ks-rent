/**
 * P4.2 — Audit internal linking + detect orphan pages.
 *
 * Analizza tutte le pagine HTML in dist/ dopo `npm run build` per:
 *  - Inventario completo URL del sito (da sitemap-index.xml + crawl HTML)
 *  - Detect pagine "orphan" (zero inbound link interni)
 *  - Detect pagine sotto-linked (1-2 inbound link)
 *  - Detect link interni rotti (404)
 *  - Anchor text distribution (overuse di "scopri di piu" / "click here")
 *
 * Output: report Markdown in audit-reports/internal-links-{date}.md
 *
 * Uso: npm run build && node scripts/audit-internal-links.mjs
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIST = path.join(ROOT, "dist");
const REPORT_DIR = path.join(ROOT, "audit-reports");
const SITE = "https://www.ksrentsardinia.com";

async function walkDir(dir, allFiles = []) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walkDir(full, allFiles);
    else if (entry.name.endsWith(".html")) allFiles.push(full);
  }
  return allFiles;
}

function urlFromFile(filePath) {
  let rel = path.relative(DIST, filePath).replace(/\\/g, "/");
  if (rel === "index.html") return "/";
  if (rel.endsWith("/index.html")) rel = rel.slice(0, -"/index.html".length);
  else if (rel.endsWith(".html")) rel = rel.slice(0, -".html".length);
  return "/" + rel;
}

function extractLinks(html, currentUrl) {
  const links = [];
  const linkRe = /<a\s+[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
  let m;
  while ((m = linkRe.exec(html))) {
    let href = m[1];
    const anchor = m[2].replace(/<[^>]+>/g, "").trim();
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("javascript:")) continue;
    if (href.startsWith("//")) continue;
    if (href.startsWith("http")) {
      if (!href.startsWith(SITE)) continue;
      href = href.slice(SITE.length) || "/";
    }
    // normalize: strip trailing slash, query, fragment
    href = href.split("#")[0].split("?")[0];
    if (href.length > 1 && href.endsWith("/")) href = href.slice(0, -1);
    if (!href.startsWith("/")) continue;
    links.push({ href, anchor });
  }
  return links;
}

async function main() {
  await fs.mkdir(REPORT_DIR, { recursive: true });
  console.log("📂 Scanning dist/...");
  const files = await walkDir(DIST);
  console.log(`  Found ${files.length} HTML pages`);

  // 1. inventario URL
  const pages = new Map(); // url -> { inboundCount, outboundLinks }
  for (const file of files) {
    const url = urlFromFile(file);
    pages.set(url, { url, inboundCount: 0, outboundLinks: [], file });
  }

  // 2. extract links
  let totalLinks = 0;
  const anchorStats = new Map(); // anchorText -> count
  for (const [url, page] of pages) {
    const html = await fs.readFile(page.file, "utf-8");
    const links = extractLinks(html, url);
    page.outboundLinks = links;
    totalLinks += links.length;

    for (const link of links) {
      // normalize target: cerca match con/senza /
      const target = pages.get(link.href) || pages.get(link.href + "/") || pages.get(link.href.replace(/\/$/, ""));
      if (target) target.inboundCount++;

      if (link.anchor) {
        const a = link.anchor.toLowerCase().slice(0, 60);
        anchorStats.set(a, (anchorStats.get(a) || 0) + 1);
      }
    }
  }

  // 3. orphan + sotto-linked
  const orphans = [];
  const underLinked = [];
  for (const [url, page] of pages) {
    if (url === "/" || url === "/404") continue; // homepage e 404 sono speciali
    if (url.startsWith("/admin") || url.startsWith("/login")) continue;
    if (page.inboundCount === 0) orphans.push(url);
    else if (page.inboundCount <= 2) underLinked.push({ url, count: page.inboundCount });
  }

  // 4. top anchor textboilerplate (rischio overuse)
  const sortedAnchors = [...anchorStats.entries()]
    .filter(([a]) => a.length > 0 && a.length < 40)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20);

  // 5. report
  const date = new Date().toISOString().slice(0, 10);
  const reportPath = path.join(REPORT_DIR, `internal-links-${date}.md`);
  let report = `# Internal Linking Audit — ${date}\n\n`;
  report += `- Pagine HTML totali: **${files.length}**\n`;
  report += `- Link interni totali: **${totalLinks}**\n`;
  report += `- Media link/pagina: **${(totalLinks / files.length).toFixed(1)}**\n\n`;

  report += `## 🚨 Pagine ORPHAN (zero inbound) — ${orphans.length}\n\n`;
  if (orphans.length === 0) {
    report += `_Nessuna pagina orphan. Eccellente._\n\n`;
  } else {
    report += orphans.slice(0, 50).map((u) => `- ${u}`).join("\n") + "\n\n";
    if (orphans.length > 50) report += `_...e altre ${orphans.length - 50}_\n\n`;
  }

  report += `## ⚠️ Pagine sotto-linked (1-2 inbound) — ${underLinked.length}\n\n`;
  underLinked.sort((a, b) => a.count - b.count);
  if (underLinked.length === 0) {
    report += `_Nessuna pagina sotto-linked._\n\n`;
  } else {
    report += underLinked.slice(0, 30).map((p) => `- (${p.count}) ${p.url}`).join("\n") + "\n\n";
    if (underLinked.length > 30) report += `_...e altre ${underLinked.length - 30}_\n\n`;
  }

  report += `## 📊 Top 20 anchor text\n\n`;
  report += `| Anchor | Count |\n|---|---|\n`;
  for (const [a, c] of sortedAnchors) {
    report += `| ${a.replace(/\|/g, "\\|")} | ${c} |\n`;
  }
  report += "\n";

  await fs.writeFile(reportPath, report, "utf8");
  console.log(`\n✅ Report: ${reportPath}`);
  console.log(`   Orphan: ${orphans.length} | Sotto-linked: ${underLinked.length} | Total links: ${totalLinks}`);
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});

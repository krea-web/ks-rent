/**
 * P4.3 — Genera sitemap dedicato per immagini hero delle pagine principali.
 * Output: dist/sitemap-images.xml + dist/sitemap-index.xml aggiornato.
 *
 * Pensato per:
 *  - 15 guide pillar (hero da Supabase)
 *  - 20 location pages (hero da Supabase)
 *  - 20 beach pages (hero da Supabase)
 *  - 7 vehicle pages (hero + gallery)
 *  - homepage + tariffe + flotta (OG image)
 *
 * Da eseguire dopo `npm run build`.
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createClient } from "@supabase/supabase-js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIST = path.join(ROOT, "dist");
const SITE = "https://www.ksrentsardinia.com";

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

const SUPABASE_URL = process.env.SUPABASE_URL || "https://zgytnkimjpoosvshfopz.supabase.co";
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(SUPABASE_URL, KEY, { auth: { persistSession: false } });

function xmlEscape(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

async function main() {
  const entries = []; // { loc, images: [{ url, title }] }

  // Locations
  const { data: locs } = await supabase.from("seo_locations").select("slug,title,hero_image_url");
  for (const l of locs || []) {
    if (!l.hero_image_url) continue;
    entries.push({ loc: `${SITE}/${l.slug}`, images: [{ url: l.hero_image_url, title: l.title }] });
  }
  // Beaches
  const { data: beaches } = await supabase.from("seo_beaches").select("slug,title,hero_image_url");
  for (const b of beaches || []) {
    if (!b.hero_image_url) continue;
    entries.push({ loc: `${SITE}/${b.slug}`, images: [{ url: b.hero_image_url, title: b.title }] });
  }
  // Vehicles
  const { data: vehs } = await supabase.from("seo_vehicles").select("group_slug,title");
  const { data: vehData } = await supabase
    .from("vehicles")
    .select("group_slug,transparent_image_url,image_url,gallery_urls")
    .eq("is_primary_variant", true)
    .or("is_archived.is.null,is_archived.eq.false");
  const seoByGroup = new Map(); for (const v of vehs || []) seoByGroup.set(v.group_slug, v.title);
  for (const v of vehData || []) {
    const slug = v.group_slug;
    if (!slug) continue;
    const heroUrl = v.transparent_image_url || v.image_url;
    const title = seoByGroup.get(slug) || slug;
    const images = [];
    if (heroUrl) images.push({ url: heroUrl, title });
    if (Array.isArray(v.gallery_urls)) {
      for (const g of v.gallery_urls) if (g) images.push({ url: g, title: `${title} — gallery` });
    }
    if (images.length) entries.push({ loc: `${SITE}/flotta/${slug}`, images });
  }

  // Guide hero (statici via guide-articles.ts — copiamo subset principali)
  const guideHeros = [
    { slug: "noleggio-auto-olbia-aeroporto-guida-pratica", title: "Guida noleggio aeroporto Olbia OLB" },
    { slug: "noleggio-auto-olbia-senza-carta-di-credito-guida-completa", title: "Noleggio senza carta di credito" },
    { slug: "itinerario-7-giorni-costa-smeralda-da-olbia", title: "Itinerario 7 giorni Costa Smeralda" },
    { slug: "come-arrivare-costa-smeralda-voli-traghetti", title: "Come arrivare in Costa Smeralda" },
    { slug: "quanto-costa-vacanza-costa-smeralda-budget-2026", title: "Budget vacanza Costa Smeralda" },
    { slug: "noleggio-auto-olbia-weekend-3-giorni", title: "Noleggio weekend 3 giorni" },
    { slug: "noleggio-auto-olbia-5-giorni", title: "Noleggio 5 giorni" },
    { slug: "noleggio-auto-olbia-settimana-7-giorni", title: "Noleggio settimanale" },
    { slug: "noleggio-auto-olbia-10-giorni", title: "Noleggio 10 giorni" },
    { slug: "noleggio-auto-olbia-14-giorni-due-settimane", title: "Noleggio 14 giorni" },
    { slug: "noleggio-auto-olbia-mensile-30-giorni", title: "Noleggio mensile 30 giorni" },
  ];
  for (const g of guideHeros) {
    entries.push({
      loc: `${SITE}/guide/${g.slug}`,
      images: [{ url: `${SUPABASE_URL}/storage/v1/object/public/seo_pages/guide/${g.slug}.webp`, title: g.title }],
    });
  }

  // OG images delle pagine top
  const ogPages = [
    { path: "/", name: "Homepage KS Rent Sardinia", og: "home" },
    { path: "/flotta", name: "Flotta veicoli", og: "flotta" },
    { path: "/tariffe", name: "Tariffe noleggio", og: "tariffe" },
    { path: "/guide", name: "Guide noleggio", og: "guide" },
    { path: "/chisiamo", name: "Chi siamo KS Rent", og: "chisiamo" },
    { path: "/noleggio-auto-aeroporto-olbia", name: "Noleggio aeroporto Olbia OLB", og: "aeroporto" },
    { path: "/noleggio-auto-porto-olbia", name: "Noleggio porto Olbia Isola Bianca", og: "porto" },
  ];
  for (const o of ogPages) {
    entries.push({
      loc: `${SITE}${o.path}`,
      images: [{ url: `${SUPABASE_URL}/storage/v1/object/public/asset/og/${o.og}.webp`, title: o.name }],
    });
  }

  // Build XML
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n';
  for (const e of entries) {
    xml += `  <url>\n    <loc>${xmlEscape(e.loc)}</loc>\n`;
    for (const img of e.images) {
      xml += `    <image:image>\n      <image:loc>${xmlEscape(img.url)}</image:loc>\n      <image:title>${xmlEscape(img.title)}</image:title>\n    </image:image>\n`;
    }
    xml += `  </url>\n`;
  }
  xml += "</urlset>\n";

  const outPath = path.join(DIST, "sitemap-images.xml");
  await fs.writeFile(outPath, xml, "utf8");
  console.log(`✅ ${outPath}`);
  console.log(`   ${entries.length} URL entries, ${entries.reduce((s, e) => s + e.images.length, 0)} images total`);

  // Append to sitemap-index.xml
  const indexPath = path.join(DIST, "sitemap-index.xml");
  let indexXml = await fs.readFile(indexPath, "utf8");
  if (!indexXml.includes("sitemap-images.xml")) {
    indexXml = indexXml.replace(
      "</sitemapindex>",
      `<sitemap><loc>${SITE}/sitemap-images.xml</loc></sitemap></sitemapindex>`
    );
    await fs.writeFile(indexPath, indexXml, "utf8");
    console.log(`✅ Appended sitemap-images.xml to sitemap-index.xml`);
  }
}

main().catch((err) => { console.error("Fatal:", err); process.exit(1); });

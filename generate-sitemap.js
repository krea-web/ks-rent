import { createClient } from "@supabase/supabase-js";
import { writeFileSync } from "fs";

const DOMAIN = "https://www.ksrentsardinia.com";

const supabaseUrl = process.env.VITE_SUPABASE_URL || "https://zgytnkimjpoosvshfopz.supabase.co";
const supabaseAnonKey =
  process.env.VITE_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpneXRua2ltanBvb3N2c2hmb3B6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIxMzgxNjIsImV4cCI6MjA4NzcxNDE2Mn0.aXADl6M5aQlZGEDDI3-5qXgE7gbVAds8hSH8qTFfPTk";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const STATIC_ROUTES = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/prenotaora", priority: "0.9", changefreq: "weekly" },
  { path: "/flotta", priority: "0.9", changefreq: "weekly" },
  { path: "/chisiamo", priority: "0.9", changefreq: "monthly" },
  { path: "/noleggio-auto-aeroporto-olbia", priority: "0.9", changefreq: "monthly" },
  { path: "/noleggio-auto-porto-olbia", priority: "0.9", changefreq: "monthly" },
  { path: "/noleggio-auto-costa-smeralda", priority: "0.9", changefreq: "monthly" },
  { path: "/noleggio-auto-senza-carta-di-credito-olbia", priority: "0.9", changefreq: "monthly" },
];

async function generate() {
  console.log("🗺️  Generating sitemap...");

  // Fetch dynamic slugs from both tables
  const [locRes, beachRes] = await Promise.all([
    supabase.from("seo_locations").select("slug"),
    supabase.from("seo_beaches").select("slug"),
  ]);

  if (locRes.error) console.warn("⚠️  seo_locations error:", locRes.error.message);
  if (beachRes.error) console.warn("⚠️  seo_beaches error:", beachRes.error.message);

  const locationSlugs = (locRes.data || []).map((r) => r.slug);
  const beachSlugs = (beachRes.data || []).map((r) => r.slug);

  const today = new Date().toISOString().split("T")[0];

  // Build URL entries
  const urls = [
    ...STATIC_ROUTES.map(
      (r) => `  <url>
    <loc>${DOMAIN}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
    ),
    ...locationSlugs.map(
      (slug) => `  <url>
    <loc>${DOMAIN}/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
    ),
    ...beachSlugs.map(
      (slug) => `  <url>
    <loc>${DOMAIN}/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
    ),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;

  writeFileSync("public/sitemap.xml", sitemap, "utf-8");
  console.log(`✅ Sitemap generated with ${urls.length} URLs (${STATIC_ROUTES.length} static + ${locationSlugs.length} locations + ${beachSlugs.length} beaches)`);
}

generate().catch((err) => {
  console.error("❌ Sitemap generation failed:", err);
  process.exit(1);
});

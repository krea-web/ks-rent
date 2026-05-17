/**
 * Upload public/seo-images/vehicles-context/*.webp → seo_pages/vehicles-context/
 * Aggiorna inoltre seo_vehicles.hero_image_url e og_image_url per i 7 veicoli
 * della flotta con le nuove foto contestuali.
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createClient } from "@supabase/supabase-js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SRC_DIR = path.join(ROOT, "public", "seo-images", "vehicles-context");

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
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!KEY) {
  console.error("Missing SUPABASE_SERVICE_ROLE_KEY in .env.local");
  process.exit(1);
}

const BUCKET = "seo_pages";
const PREFIX = "vehicles-context";

// Mappa nome-file → group_slug veicolo da aggiornare
const HERO_BY_VEHICLE = {
  "audi-rs3": "audi-rs3-porto-cervo.webp",
  "bmw-m2": "bmw-m2-costa-smeralda-road.webp",
  "jeep-avenger": "jeep-avenger-dirt-beach-road.webp",
  "mercedes-classe-a": "mercedes-a-olbia-port.webp",
  "fiat-panda": "fiat-panda-olbia-old-town.webp",
  "honda-sh": "honda-sh-pittulongu-beach-road.webp",
  "yamaha-quad-raptor": "yamaha-quad-gallura-trail.webp",
};

const supabase = createClient(SUPABASE_URL, KEY, { auth: { persistSession: false } });

// 1) Upload files
const files = (await fs.readdir(SRC_DIR)).filter((f) => f.endsWith(".webp"));
console.log(`\n📤 Uploading ${files.length} contextual photos to ${BUCKET}/${PREFIX}/\n`);
let ok = 0, ko = 0;
for (const file of files) {
  const buf = await fs.readFile(path.join(SRC_DIR, file));
  const remote = `${PREFIX}/${file}`;
  const { error } = await supabase.storage.from(BUCKET).upload(remote, buf, {
    contentType: "image/webp",
    cacheControl: "31536000, immutable",
    upsert: true,
  });
  if (error) {
    console.error(`  ❌ ${remote}: ${error.message}`);
    ko++;
  } else {
    console.log(`  ✅ ${remote}`);
    ok++;
  }
}
console.log(`\nUpload: ${ok} ok, ${ko} ko.\n`);

// 2) Update seo_vehicles.hero_image_url e og_image_url
console.log(`\n🗄️  Updating seo_vehicles.hero_image_url + og_image_url\n`);
for (const [groupSlug, fileName] of Object.entries(HERO_BY_VEHICLE)) {
  const url = `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${PREFIX}/${fileName}`;
  const { error } = await supabase
    .from("seo_vehicles")
    .update({ hero_image_url: url, og_image_url: url, updated_at: new Date().toISOString() })
    .eq("group_slug", groupSlug);
  if (error) {
    console.error(`  ❌ ${groupSlug}: ${error.message}`);
  } else {
    console.log(`  ✅ ${groupSlug} → ${fileName}`);
  }
}
console.log(`\n✨ Done.\n`);

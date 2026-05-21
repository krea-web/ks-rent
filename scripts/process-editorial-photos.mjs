/**
 * Converte le foto editoriali residue in public/gbp-photos/ (PNG) in
 * WebP ottimizzate e le carica su Supabase Storage bucket "asset" nella
 * sotto-cartella "editorial/".
 *
 * Output: URL pubblici stampati per inclusione nelle pagine sito.
 *
 * Uso:
 *   node scripts/process-editorial-photos.mjs
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { createClient } from "@supabase/supabase-js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SRC_DIR = path.join(ROOT, "public", "gbp-photos");
const OUT_DIR = path.join(ROOT, "public", "editorial-photos");

const MAX_WIDTH = 1600;
const QUALITY = 82;

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

const supabase = createClient(SUPABASE_URL, KEY, { auth: { persistSession: false } });
const BUCKET = "asset";
const PREFIX = "editorial";

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });
  const files = (await fs.readdir(SRC_DIR)).filter((f) => f.endsWith(".png"));
  if (files.length === 0) {
    console.log("No PNG files found in", SRC_DIR);
    return;
  }

  console.log(`\n🖼  Processing ${files.length} editorial photos\n`);

  const uploaded = [];
  for (const file of files) {
    const slug = file.replace(/\.png$/, "");
    const inPath = path.join(SRC_DIR, file);
    const outPath = path.join(OUT_DIR, `${slug}.webp`);

    // 1. Convert PNG → WebP
    await sharp(inPath)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true, fit: "inside" })
      .webp({ quality: QUALITY, effort: 6 })
      .toFile(outPath);
    const stat = await fs.stat(outPath);

    // 2. Upload to Supabase Storage bucket "asset"
    const buffer = await fs.readFile(outPath);
    const remotePath = `${PREFIX}/${slug}.webp`;
    const { error } = await supabase.storage
      .from(BUCKET)
      .upload(remotePath, buffer, {
        contentType: "image/webp",
        upsert: true,
      });

    if (error) {
      console.log(`  ❌ ${slug}: ${error.message}`);
      continue;
    }

    const publicUrl = `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${remotePath}`;
    uploaded.push({ slug, url: publicUrl, sizeKb: Math.round(stat.size / 1024) });
    console.log(`  ✅ ${slug} (${Math.round(stat.size / 1024)} KB) → ${publicUrl}`);
  }

  console.log(`\n✨ Done: ${uploaded.length} ok, ${files.length - uploaded.length} ko.`);
  console.log("\nURL mapping (copia in codice):");
  for (const u of uploaded) {
    console.log(`  "${u.slug}": "${u.url}",`);
  }
}

main().catch((err) => {
  console.error("Fatal:", err.message);
  process.exit(1);
});

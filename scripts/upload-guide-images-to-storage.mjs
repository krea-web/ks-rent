/**
 * Carica le 15 hero WebP da public/seo-images/guide/ al bucket Supabase
 * `seo_pages` nella sotto-cartella `guide/`. Richiede SUPABASE_SERVICE_ROLE_KEY
 * in .env.local.
 *
 * Idempotente: se il file esiste già su storage usa `upsert: true`.
 *
 * Uso:
 *   node scripts/upload-guide-images-to-storage.mjs
 *   node scripts/upload-guide-images-to-storage.mjs --dry-run
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createClient } from "@supabase/supabase-js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SRC_DIR = path.join(ROOT, "public", "seo-images", "guide");

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
const PREFIX = "guide";
const dryRun = process.argv.includes("--dry-run");

const supabase = createClient(SUPABASE_URL, KEY, { auth: { persistSession: false } });

const files = (await fs.readdir(SRC_DIR)).filter((f) => f.endsWith(".webp"));
console.log(`\n📤 Uploading ${files.length} file(s) to ${BUCKET}/${PREFIX}/ ${dryRun ? "(DRY RUN)" : ""}\n`);

let ok = 0, ko = 0;
for (const file of files) {
  const localPath = path.join(SRC_DIR, file);
  const remotePath = `${PREFIX}/${file}`;
  const bytes = await fs.readFile(localPath);

  if (dryRun) {
    console.log(`  → ${remotePath} (${(bytes.length / 1024).toFixed(0)} KB) [dry]`);
    ok++;
    continue;
  }

  const { error } = await supabase.storage
    .from(BUCKET)
    .upload(remotePath, bytes, {
      contentType: "image/webp",
      cacheControl: "31536000, immutable",
      upsert: true,
    });

  if (error) {
    console.error(`  ❌ ${remotePath}: ${error.message}`);
    ko++;
  } else {
    const { data } = supabase.storage.from(BUCKET).getPublicUrl(remotePath);
    console.log(`  ✅ ${remotePath} → ${data.publicUrl}`);
    ok++;
  }
}

console.log(`\n✨ Done: ${ok} ok, ${ko} ko.`);
console.log(`Public base URL: ${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${PREFIX}/<slug>.webp\n`);

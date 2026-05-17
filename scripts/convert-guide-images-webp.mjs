/**
 * Converte i PNG generati da generate-guide-images.mjs in WebP ottimizzati
 * (1600x900 max, quality 82, ~150-250 KB) e cancella i PNG sorgente.
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIR = path.resolve(__dirname, "..", "public", "seo-images", "guide");

const MAX_WIDTH = 1600;
const QUALITY = 82;

async function main() {
  const files = (await fs.readdir(DIR)).filter((f) => f.endsWith(".png"));
  if (files.length === 0) {
    console.log("No PNG files found in", DIR);
    return;
  }
  console.log(`\n🖼  Converting ${files.length} PNG → WebP (${MAX_WIDTH}px wide, q${QUALITY})\n`);

  let savedBytes = 0;
  for (const file of files) {
    const inPath = path.join(DIR, file);
    const outPath = path.join(DIR, file.replace(/\.png$/, ".webp"));
    const inStat = await fs.stat(inPath);

    await sharp(inPath)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true, fit: "inside" })
      .webp({ quality: QUALITY, effort: 6 })
      .toFile(outPath);

    const outStat = await fs.stat(outPath);
    savedBytes += inStat.size - outStat.size;
    console.log(
      `  ${file.replace(/\.png$/, "")} ${(inStat.size / 1024).toFixed(0)} KB → ${(outStat.size / 1024).toFixed(0)} KB`,
    );
    await fs.unlink(inPath);
  }

  console.log(`\n✨ Done. Saved ${(savedBytes / 1024 / 1024).toFixed(1)} MB total.\n`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

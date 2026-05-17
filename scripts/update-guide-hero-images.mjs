/**
 * Aggiorna `heroImage:` di tutti i 60 articoli pillar in src/data/guide-articles.ts
 * per puntare alle nuove immagini generate via Gemini.
 *
 * Logica:
 * - IT  → /seo-images/guide/{slug-it}.webp
 * - EN/DE/FR → stessa immagine dello slug IT (via itEquivalent)
 *
 * Strategia: parse del file come testo, individua blocchi articolo via lo slug
 * e sostituisce heroImage. Non modifica altri campi.
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(ROOT, "src", "data", "guide-articles.ts");
const IMAGES_DIR = path.join(ROOT, "public", "seo-images", "guide");

// Set degli slug IT per cui esiste un'immagine generata
const availableIt = new Set(
  (await fs.readdir(IMAGES_DIR)).filter((f) => f.endsWith(".webp")).map((f) => f.replace(/\.webp$/, "")),
);
console.log(`Immagini IT disponibili: ${availableIt.size}`);

let source = await fs.readFile(SRC, "utf-8");
const original = source;

// 1) Trova tutti i blocchi articolo
//    { slug: "X", ... heroImage: "..." ... [itEquivalent: "Y" |]}
// Approccio: estraggo i match e per ognuno calcolo l'URL target

// Match articolo + heroImage URL su 2 righe + opzionale itEquivalent
const ARTICLE_RE = /(\{\s*slug:\s*"([^"]+)",[\s\S]*?heroImage:\s*\n\s*)"([^"]+)"([\s\S]*?\})/g;

let touched = 0, skipped = 0;
source = source.replace(ARTICLE_RE, (full, prefix, slug, oldUrl, suffix) => {
  // Trova itEquivalent in suffix (dopo heroImage) se presente
  const itEqMatch = suffix.match(/itEquivalent:\s*"([^"]+)"/);
  const itSlug = itEqMatch ? itEqMatch[1] : slug;

  if (!availableIt.has(itSlug)) {
    skipped++;
    return full; // nessuna immagine generata per questo articolo, lascio invariato
  }

  const newUrl = `/seo-images/guide/${itSlug}.webp`;
  if (oldUrl === newUrl) {
    skipped++;
    return full;
  }

  touched++;
  return `${prefix}"${newUrl}"${suffix}`;
});

if (source === original) {
  console.log("Nessuna modifica necessaria.");
  process.exit(0);
}

await fs.writeFile(SRC, source, "utf-8");
console.log(`✅ Aggiornati ${touched} articoli (skip ${skipped}).`);

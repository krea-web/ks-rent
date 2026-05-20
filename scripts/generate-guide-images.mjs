/**
 * Genera con Gemini Image (nano-banana) un hero cinematic per ognuno dei 15
 * articoli pillar IT in /guide/. Salva in public/seo-images/guide/{slug-it}.webp.
 *
 * Le versioni EN/DE/FR riusano la stessa immagine IT (vedi
 * src/data/guide-articles.ts dopo l'esecuzione di questo script + sync-guide-images-refs.mjs).
 *
 * Uso:
 *   node scripts/generate-guide-images.mjs              # genera tutti i mancanti
 *   node scripts/generate-guide-images.mjs --force      # rigenera anche quelli esistenti
 *   node scripts/generate-guide-images.mjs <slug-it>    # genera solo lo slug indicato
 *
 * Richiede: GEMINI_API_KEY in .env.local
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "public", "seo-images", "guide");

// Carica .env.local
async function loadEnv() {
  try {
    const env = await fs.readFile(path.join(ROOT, ".env.local"), "utf-8");
    for (const line of env.split("\n")) {
      const m = line.match(/^([A-Z_][A-Z0-9_]*)=(.*)$/);
      if (m) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
    }
  } catch {
    // ignora se non esiste
  }
}

const PROMPTS = {
  "noleggio-auto-olbia-senza-carta-di-credito-guida-completa":
    "Cinematic editorial photograph: close-up of hands handing car keys with leather keychain to a customer at sunset, no faces visible, modern car rental counter in the background blurred, warm golden hour light, Mediterranean atmosphere. Photorealistic, professional travel magazine quality, 16:9 aspect ratio, no text or watermarks.",
  "itinerario-7-giorni-costa-smeralda-da-olbia":
    "Cinematic aerial drone shot of a winding coastal road in Costa Smeralda Sardinia, deep turquoise sea with hidden coves and granite rocks below, lush Mediterranean maquis, soft afternoon golden light, photorealistic editorial travel photography, 16:9 aspect ratio, no text or watermarks.",
  "come-muoversi-porto-cervo-parcheggi-navette":
    "Cinematic photograph of Porto Cervo marina at golden hour, luxury yachts moored alongside the iconic pastel-painted Mediterranean architecture, palm trees, soft warm light reflecting on the water, photorealistic travel editorial photography, 16:9 aspect ratio, no text or watermarks.",
  "spiagge-costa-smeralda-con-bambini":
    "Cinematic photograph of a shallow turquoise Sardinian beach with white powder sand, a small child silhouette playing in shallow water near granite boulders, parents in the distance, soft morning light, photorealistic family travel editorial photography, 16:9 aspect ratio, no text or watermarks.",
  "noleggio-auto-olbia-aeroporto-guida-pratica":
    "Cinematic photograph of a modern compact crossover SUV parked in front of Olbia Costa Smeralda airport terminal at dawn, soft light, a traveler approaching with rolling luggage from behind, photorealistic editorial travel photography, 16:9 aspect ratio, no text or watermarks.",
  "cosa-fare-a-olbia-3-giorni-itinerario":
    "Cinematic photograph of Corso Umberto pedestrian street in old town Olbia Sardinia at twilight, warm pink and gold sunset sky, traditional Sardinian honey-colored stone buildings, cozy outdoor restaurant tables with warm lights, photorealistic travel editorial photography, 16:9 aspect ratio, no text or watermarks.",
  "come-arrivare-costa-smeralda-voli-traghetti":
    "Cinematic photograph of a large white ferry approaching Olbia Isola Bianca port at sunrise, calm sea, Tavolara island silhouette in the background, dramatic morning sky with soft pink clouds, photorealistic editorial travel photography, 16:9 aspect ratio, no text or watermarks.",
  "quanto-costa-vacanza-costa-smeralda-budget-2026":
    "Cinematic flat-lay editorial photograph from above: a wooden cafe table with espresso cup, leather wallet, euro banknotes, sunglasses, a Sardinia map, and a small notebook, warm Mediterranean light, photorealistic, soft shadows, 16:9 aspect ratio, no text or watermarks.",
  "spiagge-nascoste-gallura-sterrati":
    "Cinematic aerial shot of a hidden secluded cove in Gallura Sardinia accessed by a dirt path through Mediterranean scrub, juniper trees, crystal-clear turquoise water lapping white sand between granite boulders, no people, soft afternoon light, photorealistic editorial travel photography, 16:9 aspect ratio, no text or watermarks.",
  "yacht-charter-vs-auto-noleggio-costa-smeralda":
    "Cinematic split editorial photograph showing on one side a sleek motor yacht cruising Costa Smeralda turquoise water and on the other side a luxury SUV driving a coastal road, golden hour light, photorealistic travel magazine quality, 16:9 aspect ratio, no text or watermarks.",
  "patente-internazionale-sardegna-serve-davvero":
    "Cinematic close-up editorial photograph of a driving licence card and a passport on a wooden dashboard of a car, soft window light, blurred Sardinian coastal road visible through the windshield, photorealistic travel editorial photography, 16:9 aspect ratio, no text or watermarks.",
  "noleggio-scooter-quad-sardegna-come-scegliere":
    "Cinematic photograph of a modern scooter and an off-road quad bike on a sandy coastal road overlooking Costa Smeralda turquoise sea, helmets resting on the seats, warm late afternoon light, photorealistic editorial travel photography, 16:9 aspect ratio, no text or watermarks.",
  "visitare-arcipelago-la-maddalena-guida-pratica":
    "Cinematic aerial drone shot of the La Maddalena Archipelago Sardinia, multiple white sand islands surrounded by gradients of turquoise and emerald sea, a small ferry boat creating a wake, soft midday light, photorealistic editorial travel photography, 16:9 aspect ratio, no text or watermarks.",
  "sagre-eventi-gallura-2026-calendario":
    "Cinematic photograph of an outdoor traditional Sardinian village festival at dusk in Gallura, warm string lights overhead, long wooden tables with families eating, stone village square, atmospheric warm golden light, photorealistic editorial travel photography, 16:9 aspect ratio, no text or watermarks.",
  "spiagge-piu-belle-sardegna-nord-orientale":
    "Cinematic aerial shot of Cala Brandinchi beach in north-east Sardinia, pure white sand crescent, gradient turquoise to deep blue water, lush Mediterranean pine trees, Tavolara island in the distance, soft midday light, photorealistic editorial travel photography, 16:9 aspect ratio, no text or watermarks.",
  // ─── Serie "Noleggio per X giorni" (6 articoli pillar duration-based) ───
  "noleggio-auto-olbia-weekend-3-giorni":
    "Cinematic editorial photograph: a small carry-on weekend suitcase and a set of car keys on a wooden cafe table at Olbia port at sunset, soft golden hour light, blurred yachts and Mediterranean architecture in the background, photorealistic travel magazine quality, 16:9 aspect ratio, no text or watermarks.",
  "noleggio-auto-olbia-5-giorni":
    "Cinematic photograph of a modern compact SUV parked next to a wooden welcome sign of a coastal village in Costa Smeralda Sardinia, a paper road map and an Italian espresso cup on the hood, mid-morning soft light, photorealistic editorial travel photography, 16:9 aspect ratio, no text or watermarks.",
  "noleggio-auto-olbia-settimana-7-giorni":
    "Cinematic aerial drone photograph of a single car driving on the panoramic coastal road of Costa Smeralda Sardinia, granite rocks and turquoise sea on one side, lush Mediterranean maquis on the other, late afternoon golden light, photorealistic travel editorial photography, 16:9 aspect ratio, no text or watermarks.",
  "noleggio-auto-olbia-10-giorni":
    "Cinematic photograph of a hand holding open paper road map of Sardinia spread on a car dashboard, sunglasses and Italian coffee thermos nearby, blurred coastal road through the windshield, soft morning light, photorealistic editorial travel photography, 16:9 aspect ratio, no text or watermarks.",
  "noleggio-auto-olbia-14-giorni-due-settimane":
    "Cinematic photograph of a vintage leather suitcase and a small backpack on the open boot of a modern car parked at a Sardinian beach overlook, gradient turquoise sea below, dramatic afternoon clouds, photorealistic editorial travel photography, 16:9 aspect ratio, no text or watermarks.",
  "noleggio-auto-olbia-mensile-30-giorni":
    "Cinematic editorial photograph: a laptop, an open notebook and a coffee mug on a wooden cafe table by a Sardinian harbor, a small car parked in the blurred background, late morning soft Mediterranean light, photorealistic remote work travel photography, 16:9 aspect ratio, no text or watermarks.",
};

const MODEL = "gemini-3.1-flash-image-preview"; // Nano Banana 2
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

async function generateOne(slug, prompt, force) {
  const outPath = path.join(OUT_DIR, `${slug}.png`);
  if (!force) {
    try {
      await fs.access(outPath);
      console.log(`  ⏭️  ${slug} already exists, skip`);
      return outPath;
    } catch {}
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("Missing GEMINI_API_KEY in .env.local");

  const body = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: {
      responseModalities: ["IMAGE"],
    },
  };

  const res = await fetch(`${ENDPOINT}?key=${apiKey}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`Gemini ${res.status}: ${txt.slice(0, 300)}`);
  }

  const data = await res.json();
  const parts = data?.candidates?.[0]?.content?.parts ?? [];
  const imgPart = parts.find((p) => p.inlineData?.data);
  if (!imgPart) {
    throw new Error(`No image returned: ${JSON.stringify(data).slice(0, 300)}`);
  }

  const buf = Buffer.from(imgPart.inlineData.data, "base64");
  await fs.mkdir(OUT_DIR, { recursive: true });
  await fs.writeFile(outPath, buf);
  console.log(`  ✅ ${slug} (${(buf.length / 1024).toFixed(0)} KB)`);
  return outPath;
}

async function main() {
  await loadEnv();
  const args = process.argv.slice(2);
  const force = args.includes("--force");
  const onlySlug = args.find((a) => !a.startsWith("--"));

  const entries = Object.entries(PROMPTS).filter(([s]) => !onlySlug || s === onlySlug);
  if (entries.length === 0) {
    console.error(`No matching slug "${onlySlug}". Available:\n${Object.keys(PROMPTS).join("\n")}`);
    process.exit(1);
  }

  console.log(`\n🎨 Generating ${entries.length} guide hero image(s) with ${MODEL}\n`);
  let ok = 0, ko = 0;
  for (const [slug, prompt] of entries) {
    try {
      await generateOne(slug, prompt, force);
      ok++;
    } catch (e) {
      console.error(`  ❌ ${slug}: ${e.message}`);
      ko++;
    }
    // small delay to be polite with rate limits
    await new Promise((r) => setTimeout(r, 800));
  }
  console.log(`\n✨ Done: ${ok} ok, ${ko} ko, output: public/seo-images/guide/\n`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

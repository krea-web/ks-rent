/**
 * Genera Open Graph images personalizzate (1200x630, aspect ratio 1.91:1)
 * via Gemini per le pagine top del sito:
 *   - homepage (/, /en/, /de/, /fr/)
 *   - /flotta
 *   - /tariffe
 *   - /guide
 *   - /chisiamo
 *   - /noleggio-auto-aeroporto-olbia
 *   - /noleggio-auto-porto-olbia
 *
 * Output: public/og/{slug}.png (1200x630). Upload manual su Supabase Storage
 * o tramite scripts/upload-og-images.mjs (creato in seguito).
 *
 * Uso:
 *   node scripts/generate-og-images.mjs
 *   node scripts/generate-og-images.mjs --force
 *   node scripts/generate-og-images.mjs <slug>
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "public", "og");

async function loadEnv() {
  try {
    const env = await fs.readFile(path.join(ROOT, ".env.local"), "utf-8");
    for (const line of env.split("\n")) {
      const m = line.match(/^([A-Z_][A-Z0-9_]*)=(.*)$/);
      if (m) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
    }
  } catch {}
}

/**
 * I prompt sono ottimizzati per OG image: composizione editoriale 1.91:1,
 * focus visivo singolo, soggetto orientato per essere leggibile a 300px
 * (size preview LinkedIn/WhatsApp/Twitter X).
 */
const PROMPTS = {
  "home":
    "Cinematic editorial photograph for social media share preview, 1.91:1 aspect ratio (1200x630), wide horizontal composition: a sleek modern car parked at a Costa Smeralda Sardinia panoramic overlook at golden hour, turquoise sea below, Mediterranean granite rocks, dramatic warm sunset light, photorealistic professional travel photography, no text or watermarks, clean composition leaving space on the right for visual breathing room.",
  "flotta":
    "Cinematic editorial wide-angle photograph 1.91:1 horizontal: three premium cars (sports car, SUV, city car) arranged in a stylish parking lot composition with Costa Smeralda mediterranean atmosphere in background, professional automotive commercial photography, soft afternoon light, photorealistic, no text or watermarks.",
  "tariffe":
    "Cinematic editorial flat-lay photograph 1.91:1 horizontal: a luxury car key with leather keychain, a few crisp euro banknotes, a small notebook with handwriting visible but unreadable, a cup of espresso, all arranged on a wooden mediterranean cafe table at warm afternoon light, photorealistic editorial commercial photography, no text or watermarks.",
  "guide":
    "Cinematic editorial photograph 1.91:1 horizontal: an open paper road map of Sardinia spread on a wooden cafe table next to a vintage compass and a glass of Vermentino wine, warm window light, professional travel editorial photography style, photorealistic, no text or watermarks.",
  "chisiamo":
    "Cinematic editorial wide-angle photograph 1.91:1 horizontal: two anonymous male silhouettes facing away from camera, looking at the Olbia harbor with ferries at sunset, mediterranean blue hour, premium business attire, photorealistic editorial portrait photography, no faces visible, no text or watermarks.",
  "aeroporto":
    "Cinematic editorial wide-angle photograph 1.91:1 horizontal: the modern terminal of Olbia Costa Smeralda Airport at dawn, glass facade reflecting morning golden light, a single compact car visible in the foreground parking, photorealistic professional travel architecture photography, no text or watermarks.",
  "porto":
    "Cinematic editorial wide-angle photograph 1.91:1 horizontal: a large white ferry docked at Olbia Isola Bianca port at sunrise, calm sea, Tavolara island silhouette in the distant background, soft pink morning sky, photorealistic editorial travel photography, no text or watermarks.",
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
    generationConfig: { responseModalities: ["IMAGE"] },
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
  if (!imgPart) throw new Error(`No image returned: ${JSON.stringify(data).slice(0, 300)}`);

  const buffer = Buffer.from(imgPart.inlineData.data, "base64");
  await fs.writeFile(outPath, buffer);
  return outPath;
}

async function main() {
  await loadEnv();
  await fs.mkdir(OUT_DIR, { recursive: true });

  const args = process.argv.slice(2);
  const force = args.includes("--force");
  const onlySlug = args.find((a) => !a.startsWith("--"));

  const entries = onlySlug
    ? Object.entries(PROMPTS).filter(([slug]) => slug === onlySlug)
    : Object.entries(PROMPTS);

  if (entries.length === 0) {
    console.log("No matching slug. Available:");
    for (const slug of Object.keys(PROMPTS)) console.log(`  - ${slug}`);
    return;
  }

  console.log(`🎨 Generating ${entries.length} OG image(s) with ${MODEL}\n`);

  let ok = 0;
  let ko = 0;
  for (const [slug, prompt] of entries) {
    try {
      const out = await generateOne(slug, prompt, force);
      try {
        const stat = await fs.stat(out);
        console.log(`  ✅ ${slug} (${Math.round(stat.size / 1024)} KB)`);
      } catch {
        console.log(`  ✅ ${slug}`);
      }
      ok++;
    } catch (err) {
      console.error(`  ❌ ${slug}: ${err.message}`);
      ko++;
    }
  }

  console.log(`\n✨ Done: ${ok} ok, ${ko} ko, output: public/og/`);
}

main().catch((err) => {
  console.error("Fatal:", err.message);
  process.exit(1);
});

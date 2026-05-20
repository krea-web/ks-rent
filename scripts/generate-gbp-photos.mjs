/**
 * Genera con Gemini Image (nano-banana) un set di foto editoriali per il
 * profilo Google Business KS Rent Sardinia.
 *
 * Le foto vengono salvate in public/gbp-photos/{slug}.png pronte per upload
 * manuale via Business Profile dashboard (ogni foto va caricata 1 per volta
 * dato che l'API GBP photo upload non e' esposta pubblicamente).
 *
 * Uso:
 *   node scripts/generate-gbp-photos.mjs              # genera tutti i mancanti
 *   node scripts/generate-gbp-photos.mjs --force      # rigenera anche esistenti
 *   node scripts/generate-gbp-photos.mjs <slug>       # genera solo lo slug
 *
 * Richiede: GEMINI_API_KEY in .env.local
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "public", "gbp-photos");

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
 * 18 foto editoriali per coprire le categorie GBP raccomandate:
 *  - 5 esterno/insegna (cover, ingresso, parcheggio)
 *  - 5 interno (reception, banco, attesa)
 *  - 8 fleet (foto veicoli flotta da angolazioni diverse)
 *  - 5 consegna/team (foto consegne in aeroporto/porto, mappe accessi)
 *
 * NOTE: queste sono SIMULAZIONI editoriali (no persone riconoscibili),
 * non sostituiscono foto reali della tua sede. Ideali come complemento
 * fotografico per riempire gap, NON come uniche foto del profilo.
 */
const PROMPTS = {
  // ─── ESTERNO / INSEGNA ───
  "01-cover-isola-bianca-sunset":
    "Cinematic editorial photograph of a clean modern car rental office facade at Viale Isola Bianca Olbia harbor at golden hour, professional minimal architecture with discreet gold lettering signage on dark stone wall, palm trees, photorealistic commercial photography, 16:9 aspect ratio, no readable text or watermarks.",
  "02-cover-aeroporto-arrivo":
    "Cinematic editorial photograph of the modern terminal of Olbia Costa Smeralda Airport at dawn with golden morning light on glass facade, mediterranean architecture, photorealistic professional travel photography, 16:9 aspect ratio, no text or watermarks.",
  "03-parcheggio-flotta-overview":
    "Cinematic aerial overhead photograph of a tidy car rental parking lot with 8-10 modern cars in neat rows, premium SUVs and city cars mixed with two scooters, clean asphalt, warm afternoon light, photorealistic commercial photography, 16:9 aspect ratio, no text or watermarks.",
  "04-ingresso-reception-esterno":
    "Cinematic editorial photograph of the entrance of a premium car rental office, glass doors, soft warm interior lighting visible through windows, evening blue hour, mediterranean architectural details, photorealistic professional commercial photography, 16:9 aspect ratio, no text or watermarks.",
  "05-mappa-accessi-aeroporto":
    "Cinematic top-down editorial photograph of an open city map of Olbia Sardinia on a wooden desk, a small toy car placed on the airport area, an espresso cup and reading glasses nearby, soft window light, photorealistic editorial photography, 16:9 aspect ratio, no text or watermarks.",

  // ─── INTERNO RECEPTION ───
  "06-reception-banco-pulito":
    "Cinematic editorial photograph of a modern minimalist car rental reception desk, wood and dark stone materials, a tablet and contract folder visible, no people, soft natural daylight, photorealistic professional interior photography, 16:9 aspect ratio, no text or watermarks.",
  "07-attesa-clienti-poltrone":
    "Cinematic editorial photograph of a small clean waiting area in a car rental office, two modern designer armchairs in dark leather, a low wooden coffee table with magazines, soft warm light, photorealistic editorial interior photography, 16:9 aspect ratio, no text or watermarks.",
  "08-firma-contratto-tablet":
    "Cinematic editorial close-up photograph of hands signing a digital contract on a black tablet at a modern wooden desk, blurred car rental office in background, soft natural light, photorealistic professional commercial photography, 16:9 aspect ratio, no text or watermarks.",

  // ─── FLOTTA VEICOLI ───
  "09-fiat-panda-hybrid":
    "Cinematic editorial photograph of a white Fiat Panda Hybrid 2024 city car parked in front of an Olbia Sardinia harbor view at sunset, slight three-quarter angle from front-left, soft golden light, photorealistic automotive commercial photography, 16:9 aspect ratio, no text or watermarks.",
  "10-jeep-avenger-suv":
    "Cinematic editorial photograph of a dark grey Jeep Avenger compact SUV parked on a panoramic coastal road of Costa Smeralda Sardinia, three-quarter angle from front-right, dramatic afternoon light, photorealistic automotive commercial photography, 16:9 aspect ratio, no text or watermarks.",
  "11-mercedes-classe-a":
    "Cinematic editorial photograph of a silver Mercedes Benz A-Class sedan parked in front of a luxury Mediterranean villa in Costa Smeralda Sardinia, side profile angle, soft late afternoon golden light, photorealistic automotive commercial photography, 16:9 aspect ratio, no text or watermarks.",
  "12-audi-rs3-verde-kyalami":
    "Cinematic editorial photograph of a Kyalami green Audi RS3 Sportback sports car parked at a Sardinia coastal overlook with turquoise sea in background, three-quarter angle from front, dramatic blue hour light, photorealistic automotive commercial photography, 16:9 aspect ratio, no text or watermarks.",
  "13-bmw-m2-coupe":
    "Cinematic editorial photograph of a Toronto red BMW M2 Coupe sports car parked on a deserted Sardinian coastal road at sunset, side profile dynamic angle, mountains in background, photorealistic automotive commercial photography, 16:9 aspect ratio, no text or watermarks.",
  "14-honda-sh-scooter":
    "Cinematic editorial photograph of a black Honda SH 125 scooter parked at a Sardinian beach access point, helmet on the seat, palm trees and turquoise sea behind, soft afternoon light, photorealistic commercial photography, 16:9 aspect ratio, no text or watermarks.",
  "15-yamaha-quad-raptor":
    "Cinematic editorial photograph of a black Yamaha Raptor off-road quad bike parked on a sandy Sardinian dirt road through Mediterranean maquis, helmet on the seat, soft warm light, photorealistic adventure commercial photography, 16:9 aspect ratio, no text or watermarks.",

  // ─── CONSEGNA / TEAM ───
  "16-consegna-aeroporto-parking":
    "Cinematic editorial photograph of a clean modern compact car ready for pickup in the arrivals parking area of an Italian airport at dawn, soft morning light, no people visible, photorealistic professional commercial photography, 16:9 aspect ratio, no text or watermarks.",
  "17-consegna-porto-isola-bianca":
    "Cinematic editorial photograph of a clean modern compact SUV parked next to a ferry terminal pedestrian exit at Olbia Isola Bianca harbor, large white ferry blurred in background, soft morning light, photorealistic commercial travel photography, 16:9 aspect ratio, no text or watermarks.",
  "18-chiavi-consegna":
    "Cinematic editorial close-up photograph of car keys with a leather keychain being handed over at golden hour, two hands visible but no faces, soft warm sunset light, blurred Mediterranean background, photorealistic professional commercial photography, 16:9 aspect ratio, no text or watermarks.",
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

  console.log(`🎨 Generating ${entries.length} GBP photo(s) with ${MODEL}\n`);

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

  console.log(`\n✨ Done: ${ok} ok, ${ko} ko, output: public/gbp-photos/`);
  console.log(`\n📤 Carica le foto su Google Business Profile:`);
  console.log(`   https://business.google.com/n/12345/photo (sostituisci 12345 con il tuo account ID)`);
  console.log(`   Categorie raccomandate: Cover (#01), Logo (#04), Interior (#06-08),`);
  console.log(`   Team (#18), Product (#09-15), Identity (#16-17).`);
}

main().catch((err) => {
  console.error("Fatal:", err.message);
  process.exit(1);
});

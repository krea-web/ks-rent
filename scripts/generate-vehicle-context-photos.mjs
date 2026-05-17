/**
 * Genera foto CONTESTUALI usando le trasparenze veicoli + Gemini 3.1 Flash Image
 * (image-to-image / vision-edit). Ogni foto fonde la trasparenza del veicolo
 * con uno scenario reale Costa Smeralda → asset SEO unico per pagina veicolo,
 * hero pagine località/Costa Smeralda, ecc.
 *
 * NB: USIAMO la trasparenza solo come reference visuale al modello, NON come
 *     sfondo della pagina (l'utente ha specificato di non usarle come bg).
 *
 * Uso:
 *   node scripts/generate-vehicle-context-photos.mjs
 *   node scripts/generate-vehicle-context-photos.mjs --force
 *   node scripts/generate-vehicle-context-photos.mjs <key>
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "public", "seo-images", "vehicles-context");

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

const KEY = process.env.GEMINI_API_KEY;
if (!KEY) {
  console.error("Missing GEMINI_API_KEY in .env.local");
  process.exit(1);
}

const TRASP = "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/Trasparenza";

// 9 combinazioni (veicolo + scenario) per coprire le pagine principali del sito
const COMBOS = [
  {
    key: "audi-rs3-porto-cervo",
    inputUrl: `${TRASP}/ksrent-audirs3supercar-verde.png`,
    prompt:
      "Use the provided green Audi RS3 sedan car (transparent background reference) and place it as the central subject of a cinematic editorial photograph: the Audi RS3 parked on the iconic Porto Cervo marina promenade in Costa Smeralda Sardinia at golden hour, luxury yachts moored in the background, pastel Mediterranean architecture, warm sunset light reflecting on the water, photorealistic travel magazine quality, 16:9 aspect ratio, no text or watermarks. Keep the car proportions and color exactly as in the reference.",
  },
  {
    key: "bmw-m2-costa-smeralda-road",
    inputUrl: `${TRASP}/ksrent-bmwm2-maschera.png`,
    prompt:
      "Use the provided BMW M2 Coupe car (transparent background reference) and place it as the central subject of a cinematic editorial photograph: the BMW M2 driving along the scenic coastal road SP59 between Porto Cervo and Baja Sardinia in Costa Smeralda, deep turquoise sea on one side, granite rocks and lush Mediterranean maquis on the other, low afternoon sun, dynamic shot, photorealistic editorial photography, 16:9 aspect ratio, no text or watermarks. Keep the car proportions and color (black/grey) exactly as in the reference.",
  },
  {
    key: "jeep-avenger-dirt-beach-road",
    inputUrl: `${TRASP}/ksrent-jeepsuvavenger.webp`,
    prompt:
      "Use the provided yellow Jeep Avenger SUV (transparent background reference) and place it as the central subject of a cinematic editorial photograph: the Jeep Avenger driving on a sandy dirt path through Mediterranean juniper trees leading to a hidden Sardinian beach with white sand and turquoise water visible at the end of the path, late morning warm sunlight, photorealistic travel photography, 16:9 aspect ratio, no text or watermarks. Keep the car shape and color exactly as in the reference.",
  },
  {
    key: "mercedes-a-olbia-port",
    inputUrl: `${TRASP}/ksrent-mercedessupercarclassea180d.png`,
    prompt:
      "Use the provided Mercedes A-Class sedan (transparent background reference) and place it as the central subject of a cinematic editorial photograph: the Mercedes A-Class parked in front of Olbia Isola Bianca ferry terminal at sunrise, the white ferry visible in the background, calm sea, soft pink and gold morning sky, photorealistic editorial travel photography, 16:9 aspect ratio, no text or watermarks. Keep the car proportions and silver/grey color exactly as in the reference.",
  },
  {
    key: "fiat-panda-olbia-old-town",
    inputUrl: `${TRASP}/ksrent-fiatpandacitycar.webp`,
    prompt:
      "Use the provided Fiat Panda city car (transparent background reference) and place it as the central subject of a cinematic editorial photograph: the Fiat Panda parked on Corso Umberto in the old town of Olbia at twilight, traditional Sardinian honey-colored stone buildings, outdoor restaurant tables with warm string lights in the background, photorealistic travel photography, 16:9 aspect ratio, no text or watermarks. Keep the car shape and color exactly as in the reference.",
  },
  {
    key: "honda-sh-pittulongu-beach-road",
    inputUrl: `${TRASP}/ksrent-hondascooter125.png`,
    prompt:
      "Use the provided Honda SH 125 scooter (transparent background reference) and place it as the central subject of a cinematic editorial photograph: the Honda SH scooter parked on a beachfront road at Pittulongu near Olbia, white sand and shallow turquoise water visible behind, Tavolara island silhouette on the horizon, warm afternoon light, two helmets resting on the seat, photorealistic editorial travel photography, 16:9 aspect ratio, no text or watermarks. Keep the scooter shape and color exactly as in the reference.",
  },
  {
    key: "yamaha-quad-gallura-trail",
    inputUrl: `${TRASP}/ksrent-yamahaquadraptor.png`,
    prompt:
      "Use the provided Yamaha Raptor 700 sport quad (transparent background reference) and place it as the central subject of a cinematic editorial photograph: the Yamaha quad on a dusty inland Gallura dirt trail surrounded by granite boulders and Mediterranean scrub, the sea visible far in the distance, late afternoon golden light, dynamic action shot, photorealistic adventure photography, 16:9 aspect ratio, no text or watermarks. Keep the quad shape and colors exactly as in the reference.",
  },
  {
    key: "audi-rs3-grey-airport",
    inputUrl: `${TRASP}/ksrent-audirs3supercar-grigia.png`,
    prompt:
      "Use the provided grey Audi RS3 sedan (transparent background reference) and place it as the central subject of a cinematic editorial photograph: the Audi RS3 parked in front of Olbia Costa Smeralda OLB airport terminal at dawn, a traveler with rolling luggage approaching from behind (silhouette only, no face), soft morning light, photorealistic editorial photography, 16:9 aspect ratio, no text or watermarks. Keep the car proportions and grey color exactly as in the reference.",
  },
  {
    key: "honda-sh350-villa-mediterranean",
    inputUrl: `${TRASP}/ksrent-hondascooter350.png`,
    prompt:
      "Use the provided Honda SH 350 scooter (transparent background reference) and place it as the central subject of a cinematic editorial photograph: the Honda SH 350 parked in the driveway of a luxury Mediterranean villa in Porto Rotondo, bougainvillea flowers cascading over a white wall in the background, terracotta floor, late afternoon warm light, photorealistic editorial travel photography, 16:9 aspect ratio, no text or watermarks. Keep the scooter shape and color exactly as in the reference.",
  },
];

const MODEL = "gemini-3.1-flash-image-preview";
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

async function fetchAsBase64(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Fetch ${url}: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const mime = res.headers.get("content-type") || (url.endsWith(".webp") ? "image/webp" : "image/png");
  return { data: buf.toString("base64"), mime };
}

async function generateOne(combo, force) {
  const outPath = path.join(OUT_DIR, `${combo.key}.png`);
  if (!force) {
    try {
      await fs.access(outPath);
      console.log(`  ⏭️  ${combo.key} esiste, skip`);
      return;
    } catch {}
  }

  console.log(`  🎨 ${combo.key} … (download input + Gemini)`);
  const { data: imgB64, mime } = await fetchAsBase64(combo.inputUrl);

  const body = {
    contents: [
      {
        parts: [
          { text: combo.prompt },
          { inline_data: { mime_type: mime, data: imgB64 } },
        ],
      },
    ],
    generationConfig: { responseModalities: ["IMAGE"] },
  };

  const res = await fetch(`${ENDPOINT}?key=${KEY}`, {
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
  const imgPart = parts.find((p) => p.inlineData?.data || p.inline_data?.data);
  if (!imgPart) {
    throw new Error(`No image returned: ${JSON.stringify(data).slice(0, 300)}`);
  }
  const buf = Buffer.from((imgPart.inlineData ?? imgPart.inline_data).data, "base64");
  await fs.mkdir(OUT_DIR, { recursive: true });
  await fs.writeFile(outPath, buf);
  console.log(`  ✅ ${combo.key} (${(buf.length / 1024).toFixed(0)} KB)`);
}

const args = process.argv.slice(2);
const force = args.includes("--force");
const onlyKey = args.find((a) => !a.startsWith("--"));

const combos = COMBOS.filter((c) => !onlyKey || c.key === onlyKey);
console.log(`\n🎨 Generating ${combos.length} contextual vehicle photo(s) with ${MODEL}\n`);

let ok = 0, ko = 0;
for (const combo of combos) {
  try {
    await generateOne(combo, force);
    ok++;
  } catch (e) {
    console.error(`  ❌ ${combo.key}: ${e.message}`);
    ko++;
  }
  await new Promise((r) => setTimeout(r, 1000));
}
console.log(`\n✨ Done: ${ok} ok, ${ko} ko.\n`);

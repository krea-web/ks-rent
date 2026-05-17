/**
 * Sostituisce TUTTI gli URL `vehicle_images/<MARCA>/...` non-Trasparenza nel
 * codice src/ con le versioni Trasparenza corrispondenti (esistenti in storage).
 *
 * Necessario perché molti file usavano nomi che NON esistono nel bucket
 * (broken images sul sito) e l'utente ha chiesto coerenza visiva con immagini
 * trasparenti per ogni reference ai veicoli.
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC_DIR = path.resolve(__dirname, "..", "src");

const BASE = "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images";
const T = `${BASE}/Trasparenza`;

// Replacement regex (pattern → trasparenza canonica)
const RULES = [
  // AUDI verde
  { from: /vehicle_images\/AUDI\/ksrent-(audirs3supercar-verde\.png|noleggio-audirs3-verde\.webp|audirs3verde\.webp)/g, to: "vehicle_images/Trasparenza/ksrent-audirs3supercar-verde.png" },
  // AUDI grigia
  { from: /vehicle_images\/AUDI\/ksrent-audirs3grigia\.webp/g, to: "vehicle_images/Trasparenza/ksrent-audirs3supercar-grigia.png" },
  // BMW
  { from: /vehicle_images\/BMW\/ksrent-(bmwm2-maschera\.webp|bmwm2\.webp|noleggio-bmwm2\.webp)/g, to: "vehicle_images/Trasparenza/ksrent-bmwm2-maschera.png" },
  // MERCEDES
  { from: /vehicle_images\/MERCEDES\/ksrent-(mercedessupercarclassea180d\.png|noleggio-mercedesclassea180d\.webp)/g, to: "vehicle_images/Trasparenza/ksrent-mercedessupercarclassea180d.png" },
  // JEEP
  { from: /vehicle_images\/JEEP\/ksrent-(jeepsuvavenger\.webp|jeepavenger\.webp)/g, to: "vehicle_images/Trasparenza/ksrent-jeepsuvavenger.webp" },
  // FIAT
  { from: /vehicle_images\/FIAT\/ksrent-(fiatpandacitycar\.webp|fiatpanda\.webp)/g, to: "vehicle_images/Trasparenza/ksrent-fiatpandacitycar.webp" },
  // HONDA 125
  { from: /vehicle_images\/HONDA\/ksrent-(hondash125\.webp|noleggio-hondash125-scooter\.webp)/g, to: "vehicle_images/Trasparenza/ksrent-hondascooter125.png" },
  // HONDA 350
  { from: /vehicle_images\/HONDA\/ksrent-(hondash350\.webp|noleggio-hondash350-scooter\.webp)/g, to: "vehicle_images/Trasparenza/ksrent-hondascooter350.png" },
  // YAMAHA quad
  { from: /vehicle_images\/YAMAHA\/ksrent-(quadyamaharaptor\.webp|quadyamaharaptor-sardegna\.webp)/g, to: "vehicle_images/Trasparenza/ksrent-yamahaquadraptor.png" },
];

async function walk(dir, out = []) {
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) await walk(p, out);
    else if (/\.(ts|tsx|astro|mjs|json)$/.test(e.name)) out.push(p);
  }
  return out;
}

const files = await walk(SRC_DIR);
let totalReplaced = 0, filesTouched = 0;

for (const f of files) {
  let src = await fs.readFile(f, "utf-8");
  const before = src;
  for (const { from, to } of RULES) {
    src = src.replace(from, to);
  }
  if (src !== before) {
    const matches = (before.match(/vehicle_images\/(AUDI|BMW|MERCEDES|JEEP|FIAT|HONDA|YAMAHA)\//g) || []).length;
    const after = (src.match(/vehicle_images\/(AUDI|BMW|MERCEDES|JEEP|FIAT|HONDA|YAMAHA)\//g) || []).length;
    const fixed = matches - after;
    totalReplaced += fixed;
    filesTouched++;
    console.log(`  ✅ ${path.relative(SRC_DIR, f).replace(/\\/g, "/")} (${fixed} URL fix)`);
    await fs.writeFile(f, src, "utf-8");
  }
}

console.log(`\n✨ ${totalReplaced} URL sostituite in ${filesTouched} file.`);

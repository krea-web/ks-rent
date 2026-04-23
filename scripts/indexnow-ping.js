/**
 * IndexNow Ping Script
 * Run after deploy to notify search engines of updated pages.
 * Usage: node scripts/indexnow-ping.js
 */

const DOMAIN = "https://www.ksrentsardinia.com";
const KEY = "de3b0311-3f82-41f3-ae0c-a04fc3586ed5";

const STATIC_URLS = [
  "/",
  "/prenotaora",
  "/flotta",
  "/chisiamo",
  "/noleggio-auto-aeroporto-olbia",
  "/noleggio-auto-porto-olbia",
  "/noleggio-auto-costa-smeralda",
  "/noleggio-auto-senza-carta-di-credito-olbia",
];

const LOCATION_SLUGS = [
  "noleggio-auto-san-teodoro",
  "noleggio-auto-porto-cervo",
  "noleggio-auto-baja-sardinia",
  "noleggio-auto-palau",
  "noleggio-auto-cannigione",
  "noleggio-auto-poltu-quatu",
  "noleggio-auto-puntaldia",
  "noleggio-auto-porto-rotondo",
  "noleggio-auto-golfo-aranci",
  "noleggio-auto-murta-maria",
  "noleggio-auto-porto-san-paolo",
  "noleggio-auto-arzachena",
  "noleggio-auto-santa-teresa-gallura",
  "noleggio-auto-budoni",
  "noleggio-auto-agrustos",
  "noleggio-auto-marinella",
  "noleggio-auto-pittulongu",
  "noleggio-auto-bados",
  "noleggio-auto-portisco",
  "noleggio-auto-capo-coda-cavallo",
];

const BEACH_SLUGS = [
  "spiaggia-del-principe",
  "liscia-ruja",
  "cala-brandinchi",
  "la-cinta",
  "lu-impostu",
  "capriccioli",
  "romazzino",
  "grande-pevero",
  "cala-moresca",
  "cala-sabina",
  "spiaggia-bianca",
  "porto-istana",
  "porto-taverna",
  "rena-bianca",
  "cala-del-faro",
  "la-celvia",
  "spiaggia-marinella",
  "spiaggia-bados",
  "spiaggia-pittulongu",
  "capo-testa",
];

async function ping() {
  const urlList = [
    ...STATIC_URLS.map((p) => `${DOMAIN}${p}`),
    ...LOCATION_SLUGS.map((s) => `${DOMAIN}/${s}`),
    ...BEACH_SLUGS.map((s) => `${DOMAIN}/${s}`),
  ];

  console.log(`📡 Pinging IndexNow with ${urlList.length} URLs...`);

  const body = JSON.stringify({
    host: "www.ksrentsardinia.com",
    key: KEY,
    keyLocation: `${DOMAIN}/${KEY}.txt`,
    urlList,
  });

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body,
  });

  if (res.ok || res.status === 202) {
    console.log(`✅ IndexNow accepted ${urlList.length} URLs (status ${res.status})`);
  } else {
    const text = await res.text();
    console.error(`❌ IndexNow error (status ${res.status}): ${text}`);
  }
}

ping().catch((err) => {
  console.error("❌ IndexNow ping failed:", err);
  process.exit(1);
});

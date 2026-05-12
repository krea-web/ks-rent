/**
 * Helpers pure (no React) condivisi tra il vecchio DynamicPage.tsx (Vite)
 * e la nuova pagina .astro `[slug].astro` (SSG). Estratti per evitare
 * di importare React nel rendering Astro server-side.
 */

export interface RecommendedVehicle {
  name: string;
  image: string;
  tagline: string;
  transmission: string;
  seats: number;
  fuel: string;
  category: string;
  /** group_slug del veicolo per linkare a /flotta/[groupSlug] */
  groupSlug: string;
}

export const VEHICLES: Record<string, RecommendedVehicle> = {
  luxury: {
    name: "Audi RS3 Sportback",
    image:
      "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/AUDI/ksrent-audirs3supercar-verde.png",
    tagline: "Potenza e prestigio sulla Costa Smeralda",
    transmission: "Automatico S-Tronic",
    seats: 5,
    fuel: "Benzina",
    category: "Supercar",
    groupSlug: "audi-rs3",
  },
  luxuryAlt: {
    name: "BMW M2 Coupé",
    image:
      "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/BMW/ksrent-bmwm2-maschera.webp",
    tagline: "Sportività pura per le strade della Gallura",
    transmission: "Automatico Steptronic",
    seats: 4,
    fuel: "Benzina",
    category: "Supercar",
    groupSlug: "bmw-m2",
  },
  elegant: {
    name: "Mercedes Classe A 180d",
    image:
      "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/MERCEDES/ksrent-mercedessupercarclassea180d.png",
    tagline: "Comfort ed eleganza per ogni percorso",
    transmission: "Automatico 7G-DCT",
    seats: 5,
    fuel: "Diesel",
    category: "Premium",
    groupSlug: "mercedes-classe-a",
  },
  offroad: {
    name: "Jeep Avenger",
    image:
      "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/JEEP/ksrent-jeepsuvavenger.webp",
    tagline: "Perfetto per spiagge nascoste e strade sterrate",
    transmission: "Automatico 6 marce",
    seats: 5,
    fuel: "Benzina",
    category: "SUV",
    groupSlug: "jeep-avenger",
  },
  city: {
    name: "Fiat Panda",
    image:
      "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/FIAT/ksrent-fiatpandacitycar.webp",
    tagline: "Agile e pratica, ideale per la città e il litorale",
    transmission: "Manuale 5 marce",
    seats: 5,
    fuel: "Benzina",
    category: "City Car",
    groupSlug: "fiat-panda",
  },
};

export const VEHICLE_BY_SLUG: Record<string, keyof typeof VEHICLES> = {
  // ─── LOCALITÀ ───
  "noleggio-auto-porto-cervo": "luxury",
  "noleggio-auto-baja-sardinia": "luxuryAlt",
  "noleggio-auto-poltu-quatu": "luxury",
  "noleggio-auto-porto-rotondo": "elegant",
  "noleggio-auto-portisco": "elegant",
  "noleggio-auto-marinella": "city",
  "noleggio-auto-pittulongu": "city",
  "noleggio-auto-bados": "offroad",
  "noleggio-auto-golfo-aranci": "city",
  "noleggio-auto-murta-maria": "city",
  "noleggio-auto-porto-san-paolo": "offroad",
  "noleggio-auto-puntaldia": "elegant",
  "noleggio-auto-capo-coda-cavallo": "offroad",
  "noleggio-auto-san-teodoro": "offroad",
  "noleggio-auto-budoni": "city",
  "noleggio-auto-agrustos": "offroad",
  "noleggio-auto-palau": "elegant",
  "noleggio-auto-cannigione": "elegant",
  "noleggio-auto-arzachena": "elegant",

  // ─── SPIAGGE ───
  "spiaggia-del-principe": "luxuryAlt",
  "liscia-ruja": "elegant",
  "cala-brandinchi": "offroad",
  "la-cinta": "city",
  "lu-impostu": "offroad",
  capriccioli: "luxury",
  romazzino: "luxury",
  "grande-pevero": "elegant",
  "cala-moresca": "offroad",
  "cala-sabina": "offroad",
  "spiaggia-bianca": "city",
  "porto-istana": "offroad",
  "porto-taverna": "offroad",
  "rena-bianca": "elegant",
  "cala-del-faro": "luxuryAlt",
  "la-celvia": "elegant",
  "spiaggia-marinella": "city",
  "spiaggia-bados": "offroad",
  "spiaggia-pittulongu": "city",
  "capo-testa": "offroad",
};

export function getRecommendedVehicle(slug: string): RecommendedVehicle {
  const key = VEHICLE_BY_SLUG[slug];
  if (key) return VEHICLES[key];
  return VEHICLES.city;
}

/* ───────── DETERMINISTIC VARIANT ROTATION (anti-duplicate-content) ───────── */

export function hashSlug(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) | 0;
  return Math.abs(h);
}

export function pickVariant<T>(slug: string, salt: string, options: readonly T[]): T {
  return options[hashSlug(slug + ":" + salt) % options.length];
}

export const EYEBROW_LOCATION = [
  "Punto di Ritiro & Consegna",
  "Costa & Entroterra",
  "Destinazione Premium",
  "Hub di Consegna",
  "Servizio in Loco",
] as const;

export const EYEBROW_BEACH = [
  "Guida KS Rent",
  "Spiaggia & Calette",
  "Mare di Sardegna",
  "Acqua e Granito",
  "Beach Guide",
] as const;

export const VEHICLE_EYEBROW = [
  "Scelto per te",
  "La nostra scelta",
  "Top pick",
  "Suggerito",
  "Best match",
] as const;

export const VEHICLE_HEADING = [
  "Il veicolo ideale per questa destinazione",
  "L'auto giusta per ogni curva",
  "La scelta dei nostri clienti qui",
  "Cosa noleggia chi viene qui",
  "Il modello più richiesto",
] as const;

export const MAP_EYEBROW = [
  "Posizione",
  "Itinerario",
  "Geografia",
  "Coordinate",
  "Sulla mappa",
] as const;

export const MAP_HEADING_LOCATION = [
  "Come raggiungerci",
  "Dalla nostra sede a casa tua",
  "Il percorso da Olbia",
  "Distanza & itinerario",
  "Quanto manca da Olbia",
] as const;

export const MAP_HEADING_BEACH = [
  "Dove si trova",
  "Sulla mappa",
  "Coordinate & accesso",
  "Localizzazione",
  "La spiaggia in posizione",
] as const;

export const MAP_INTRO_LOCATION = [
  "Distanza dalle nostre sedi di Olbia.",
  "Il tragitto dalle sedi KS Rent al tuo punto di consegna.",
  "Calcola il percorso dalla nostra sede operativa al porto Isola Bianca o legale in Viale Aldo Moro.",
  "Ecco la distanza che ci separa: arriviamo presto, anche con preavviso ridotto.",
  "Mappa con le nostre due sedi di Olbia e la destinazione finale.",
] as const;

export const MAP_INTRO_BEACH = [
  "Calcola il percorso dalle nostre sedi di Olbia a questa magnifica spiaggia.",
  "Dalla sede KS Rent fino al parcheggio della spiaggia: ecco l'itinerario consigliato.",
  "Il tragitto sulla mappa: scegli tu il punto di partenza dalle nostre due sedi.",
  "Quanto manca al mare? Ecco le coordinate esatte da Olbia.",
  "Visualizza il percorso e i tempi reali in alta stagione.",
] as const;

export const TIPS_EYEBROW = [
  "Insider Tips",
  "Sardi DOC",
  "Conoscenza locale",
  "Dietro le quinte",
  "Consigli on-the-ground",
] as const;

export const TIPS_HEADING_TPL = [
  "I consigli di KS Rent per {title}",
  "{title} secondo chi ci vive",
  "Sardegna autentica: {title}",
  "Le dritte vere su {title}",
  "{title}: gli insider tips",
] as const;

export const TIPS_INTRO_TPL = [
  "Non siamo solo un'agenzia di noleggio, siamo sardi DOC. Ecco i nostri suggerimenti per vivere al meglio la tua giornata a {title}:",
  "Conosciamo questo angolo di Sardegna come la nostra tasca. Quattro dritte che condividiamo solo con i clienti KS Rent:",
  "I nostri consigli arrivano da chi vive qui tutto l'anno. Quattro idee concrete per goderti {title}:",
  "Non leggerai questi suggerimenti su una guida: vengono dall'esperienza diretta del team KS Rent a {title}.",
  "Quattro consigli pratici da chi conosce {title} oltre la stagione turistica: spostamenti, orari, segreti.",
] as const;

export const HEADING_WHYUS_TPL = [
  "Perché scegliere KS Rent Sardinia per {title}?",
  "KS Rent Sardinia a {title}: il nostro vantaggio",
  "Cosa rende KS Rent diverso a {title}",
  "Il valore di KS Rent Sardinia per {title}",
  "{title}: perché i clienti scelgono KS Rent",
] as const;

export const HEADING_NCC_TPL = [
  "Noleggio senza carta di credito a {title}",
  "{title} senza carta di credito: come funziona",
  "Senza carta di credito anche a {title}",
  "Pagamenti flessibili per {title}",
  "{title}: bancomat, prepagate o contanti",
] as const;

export const HEADING_DELIVERY_TPL = [
  "Consegna su misura a {title}",
  "Come consegniamo l'auto a {title}",
  "{title}: dove ti portiamo l'auto",
  "Consegna a domicilio per {title}",
  "{title}: tempi e punti di consegna",
] as const;

export const HEADING_VACATION_TPL = [
  "La tua vacanza in Sardegna inizia da {title}",
  "{title}: il punto di partenza della vacanza",
  "Da {title} alla scoperta della Sardegna",
  "Esplorare la Sardegna con base a {title}",
  "{title} come hub della tua vacanza",
] as const;

export const CTA_EYEBROW = [
  "Prossimo passo",
  "Pronto?",
  "Last step",
  "Ci siamo",
  "Tocca a te",
] as const;

export const CTA_TITLE_TPL = [
  "Prenota ora la tua Auto",
  "L'auto ti aspetta a {title}",
  "Pronto a guidare a {title}?",
  "Prenota in pochi minuti",
  "Riserva il tuo veicolo per {title}",
] as const;

export const FAQ_HEADING_TPL = [
  "Domande frequenti — {title}",
  "Tu chiedi, KS Rent risponde — {title}",
  "{title}: le domande più comuni",
  "FAQ — Tutto sul noleggio a {title}",
  "Cose da sapere su {title}",
] as const;

export const PARKING_HEADING = [
  "Informazioni Parcheggio & Viabilità",
  "Come parcheggiare",
  "Accesso e sosta auto",
  "Parcheggio: dove e come",
  "Arrivo, parcheggio, viabilità",
] as const;

export const DISTANCE_LABEL = [
  "Distanza da Olbia:",
  "Da Olbia:",
  "Tempo di percorrenza:",
  "Quanto è lontana:",
  "Tragitto da Olbia:",
] as const;

export const CTA_SUBTITLE_TPL = [
  "Viaggia in prima classe con KS Rent. Scegli il tuo veicolo premium per esplorare {title} e tutta la Sardegna, anche senza carta di credito.",
  "{title} ti aspetta. Scegli ora la tua auto KS Rent: consegna a domicilio, deposito flessibile, zero burocrazia.",
  "Pochi click e l'auto è tua. Esplora {title} e la Gallura con la flotta KS Rent — bancomat, prepagate o contanti accettati.",
  "Pianifica la tua giornata a {title} con un'auto KS Rent: consegna in villa, hotel o porto, anche con preavviso ridotto.",
  "Non aspettare l'alta stagione: prenota ora il veicolo per {title} e fissa il prezzo prima del rialzo estivo.",
] as const;

export const FOOTER_TAGLINE = [
  "— KS Rent Sardinia, autonoleggio con consegna a domicilio in tutta la Gallura e Costa Smeralda.",
  "— KS Rent Sardinia: consegna ovunque tra Olbia, Costa Smeralda e costa orientale.",
  "— Autonoleggio KS Rent Sardinia, con sede a Olbia e servizio in tutta la Gallura.",
  "— KS Rent Sardinia, flotta premium con consegna a domicilio dalla sede di Olbia.",
  "— KS Rent Sardinia: il noleggio auto della Gallura, dalle calette di San Teodoro a Capo Testa.",
] as const;

export function tpl(s: string, title: string): string {
  return s.replace(/\{title\}/g, title);
}

/**
 * Versione HTML del renderTitleTpl di DynamicPage.tsx: spezza un template
 * "...{title}..." e wrappa il titolo in <span class="text-gold">{title}</span>.
 * Il chiamante è responsabile di aver già escapato il `title` se proviene
 * da fonte non fidata. Per i nostri dati Supabase è considerato safe.
 */
export function tplGoldHtml(template: string, title: string): string {
  return template
    .split("{title}")
    .map((part, i, arr) =>
      i < arr.length - 1
        ? `${part}<span class="text-gold">${title}</span>`
        : part,
    )
    .join("");
}

export const TIP_ICON_NAMES = [
  "clock",
  "wind",
  "road",
  "food",
  "camera",
  "swim",
  "mountain",
  "boat",
] as const;

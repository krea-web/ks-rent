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
      "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/Trasparenza/ksrent-audirs3supercar-verde.png",
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
      "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/Trasparenza/ksrent-bmwm2-maschera.png",
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
      "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/Trasparenza/ksrent-mercedessupercarclassea180d.png",
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
      "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/Trasparenza/ksrent-jeepsuvavenger.webp",
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
      "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/Trasparenza/ksrent-fiatpandacitycar.webp",
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
  "Località Servita",
  "Zona di Copertura",
  "Tappa della Gallura",
  "Punto Cardine",
  "Crocevia della Costa",
  "Roccaforte del Turismo",
  "Cuore della Sardegna",
  "Porta sulla Costa Smeralda",
  "Capolinea Premium",
  "Snodo Strategico",
] as const;

export const EYEBROW_BEACH = [
  "Guida KS Rent",
  "Spiaggia & Calette",
  "Mare di Sardegna",
  "Acqua e Granito",
  "Beach Guide",
  "Cala Iconica",
  "Sabbia Bianca & Mare",
  "Costa Cristallina",
  "Mare Smeraldo",
  "Tesoro Marino",
  "Paradiso Costiero",
  "Spot da Cartolina",
  "Litorale Selvaggio",
  "Sardegna Balneare",
  "Mediterraneo Allo Stato Puro",
] as const;

export const VEHICLE_EYEBROW = [
  "Scelto per te",
  "La nostra scelta",
  "Top pick",
  "Suggerito",
  "Best match",
  "Il preferito del team",
  "Hot pick di stagione",
  "Editor's choice",
  "Più richiesto",
  "Top rental locale",
  "Premium suggerito",
  "Il consigliato KS Rent",
] as const;

export const VEHICLE_HEADING = [
  "Il veicolo ideale per questa destinazione",
  "L'auto giusta per ogni curva",
  "La scelta dei nostri clienti qui",
  "Cosa noleggia chi viene qui",
  "Il modello più richiesto",
  "Il veicolo che funziona meglio in zona",
  "Pensato per le strade di questa zona",
  "Il match perfetto con la destinazione",
  "L'auto che conosce queste strade",
  "Costruito per le panoramiche della costa",
  "Il modello che tutti vogliono qui",
  "Performance e versatilità su misura",
] as const;

export const MAP_EYEBROW = [
  "Posizione",
  "Itinerario",
  "Geografia",
  "Coordinate",
  "Sulla mappa",
  "Dove siamo",
  "Localizzazione GPS",
  "Punto sulla mappa",
  "Riferimento geografico",
  "La posizione esatta",
  "GPS & accesso",
  "Mappa & accesso",
] as const;

export const MAP_HEADING_LOCATION = [
  "Come raggiungerci",
  "Dalla nostra sede a casa tua",
  "Il percorso da Olbia",
  "Distanza & itinerario",
  "Quanto manca da Olbia",
  "Tragitto consigliato da Olbia",
  "Tempi reali sulla mappa",
  "Da Olbia in pochi minuti",
  "Direzioni dalla nostra sede",
  "Distanza, percorso, parcheggio",
  "Itinerario stradale ottimizzato",
  "Mappa e tempi di percorrenza",
] as const;

export const MAP_HEADING_BEACH = [
  "Dove si trova",
  "Sulla mappa",
  "Coordinate & accesso",
  "Localizzazione",
  "La spiaggia in posizione",
  "Come arrivare in spiaggia",
  "GPS della cala",
  "Accesso & posizione",
  "Punto esatto sulla costa",
  "Coordinate spiaggia",
  "Mappa con accesso al mare",
  "Il punto sulla litoranea",
] as const;

export const MAP_INTRO_LOCATION = [
  "Distanza dalle nostre sedi di Olbia.",
  "Il tragitto dalle sedi KS Rent al tuo punto di consegna.",
  "Calcola il percorso dalla nostra sede operativa al porto Isola Bianca o legale in Viale Aldo Moro.",
  "Ecco la distanza che ci separa: arriviamo presto, anche con preavviso ridotto.",
  "Mappa con le nostre due sedi di Olbia e la destinazione finale.",
  "Visualizza il tracciato consigliato e i tempi reali, traffico estivo incluso.",
  "Coordinate, percorso ed eventuali deviazioni in alta stagione.",
  "Il percorso più rapido dalle nostre sedi al tuo punto di ritiro.",
  "Quanto tempo serve davvero da Olbia in questa stagione?",
  "Le opzioni di percorso da Olbia: superstrada vs litoranea.",
  "Distanze reali, non quelle teoriche: il nostro team le percorre ogni giorno.",
  "L'itinerario completo dalle sedi KS Rent al tuo punto di consegna.",
] as const;

export const MAP_INTRO_BEACH = [
  "Calcola il percorso dalle nostre sedi di Olbia a questa magnifica spiaggia.",
  "Dalla sede KS Rent fino al parcheggio della spiaggia: ecco l'itinerario consigliato.",
  "Il tragitto sulla mappa: scegli tu il punto di partenza dalle nostre due sedi.",
  "Quanto manca al mare? Ecco le coordinate esatte da Olbia.",
  "Visualizza il percorso e i tempi reali in alta stagione.",
  "Dalle sedi di Olbia al primo bagno: tempi, percorso, parcheggio.",
  "Il tragitto stradale verso questa cala, con punti di interesse lungo la via.",
  "Coordinate spiaggia e itinerario consigliato dalle nostre sedi.",
  "L'accesso alla spiaggia: strada principale, sterrato finale, parcheggio.",
  "Tempi reali da Olbia, ponderati con il traffico estivo.",
  "Mappa con sede di partenza, traffico e tempi previsti per la giornata.",
  "Da Olbia in costiera: itinerario completo per raggiungere la spiaggia.",
] as const;

export const TIPS_EYEBROW = [
  "Insider Tips",
  "Sardi DOC",
  "Conoscenza locale",
  "Dietro le quinte",
  "Consigli on-the-ground",
  "Local Knowledge",
  "Suggerimenti di chi vive qui",
  "Briefing del team KS Rent",
  "Tutto quello che le guide non dicono",
  "Dritte da locali",
  "Esperienza diretta",
  "Insider's view",
] as const;

export const TIPS_HEADING_TPL = [
  "I consigli di KS Rent per {title}",
  "{title} secondo chi ci vive",
  "Sardegna autentica: {title}",
  "Le dritte vere su {title}",
  "{title}: gli insider tips",
  "{title}: ciò che le guide non dicono",
  "Briefing locale su {title}",
  "I segreti del team KS Rent a {title}",
  "{title}: l'esperienza di chi conosce davvero la zona",
  "Cosa sapere prima di partire per {title}",
  "Trucchi e consigli per {title}",
  "{title}: l'angolo dei sardi DOC",
] as const;

export const TIPS_INTRO_TPL = [
  "Non siamo solo un'agenzia di noleggio, siamo sardi DOC. Ecco i nostri suggerimenti per vivere al meglio la tua giornata a {title}:",
  "Conosciamo questo angolo di Sardegna come la nostra tasca. Quattro dritte che condividiamo solo con i clienti KS Rent:",
  "I nostri consigli arrivano da chi vive qui tutto l'anno. Quattro idee concrete per goderti {title}:",
  "Non leggerai questi suggerimenti su una guida: vengono dall'esperienza diretta del team KS Rent a {title}.",
  "Quattro consigli pratici da chi conosce {title} oltre la stagione turistica: spostamenti, orari, segreti.",
  "Dietro a ogni nostro cliente che ritira l'auto, c'è una conversazione su {title}. Ecco cosa ne è uscito di più utile:",
  "Suggerimenti da chi a {title} ci va in bassa stagione, quando i locali si godono la zona senza folla:",
  "Le dritte che nascondiamo solo a chi noleggia con noi: orari migliori, parcheggi furbi, vicoli giusti a {title}.",
  "Da Olbia a {title} in 30 minuti, ma vale la pena conoscere prima questi 4 dettagli pratici.",
  "Quattro insights raccolti negli anni dai clienti del team KS Rent che hanno scelto {title}:",
  "Non sono trucchi turistici, sono accortezze locali per godersi {title} senza stress.",
  "L'esperienza dei fratelli Milo a {title}: ecco cosa consiglierebbero a un amico.",
] as const;

export const HEADING_WHYUS_TPL = [
  "Perché scegliere KS Rent Sardinia per {title}?",
  "KS Rent Sardinia a {title}: il nostro vantaggio",
  "Cosa rende KS Rent diverso a {title}",
  "Il valore di KS Rent Sardinia per {title}",
  "{title}: perché i clienti scelgono KS Rent",
  "{title}: cosa offriamo che gli altri non danno",
  "I plus del nostro servizio a {title}",
  "{title}: dove KS Rent fa la differenza",
  "L'esperienza KS Rent Sardinia a {title}",
  "Il nostro tocco a {title}",
  "{title}: il modo KS Rent di noleggiare",
  "Quello che cambia quando scegli noi per {title}",
] as const;

export const HEADING_NCC_TPL = [
  "Noleggio senza carta di credito a {title}",
  "{title} senza carta di credito: come funziona",
  "Senza carta di credito anche a {title}",
  "Pagamenti flessibili per {title}",
  "{title}: bancomat, prepagate o contanti",
  "{title} con la tua prepagata o bancomat",
  "Pagare il noleggio a {title} senza carta",
  "La nostra politica di pagamento per {title}",
  "{title}: opzioni di pagamento alternative",
  "Niente carta di credito? A {title} si può",
  "Pagamenti accettati per {title}",
  "{title}: contanti, prepagate, debito",
] as const;

export const HEADING_DELIVERY_TPL = [
  "Consegna su misura a {title}",
  "Come consegniamo l'auto a {title}",
  "{title}: dove ti portiamo l'auto",
  "Consegna a domicilio per {title}",
  "{title}: tempi e punti di consegna",
  "Il nostro servizio di delivery a {title}",
  "Punti di consegna a {title}",
  "{title}: dove preferisci ricevere l'auto",
  "Hotel, villa o porto? Consegniamo a {title}",
  "Il giorno della consegna a {title}",
  "{title}: orari e modalità di consegna",
  "Come arriva l'auto a {title}",
] as const;

export const HEADING_VACATION_TPL = [
  "La tua vacanza in Sardegna inizia da {title}",
  "{title}: il punto di partenza della vacanza",
  "Da {title} alla scoperta della Sardegna",
  "Esplorare la Sardegna con base a {title}",
  "{title} come hub della tua vacanza",
  "{title}: il quartier generale del tuo viaggio",
  "Una settimana in Sardegna partendo da {title}",
  "Tutto a portata d'auto da {title}",
  "{title}: la base perfetta per esplorare",
  "Da {title} alle calette più nascoste",
  "{title} come trampolino per la Costa Smeralda",
  "Il tour della Gallura ha base a {title}",
] as const;

export const CTA_EYEBROW = [
  "Prossimo passo",
  "Pronto?",
  "Last step",
  "Ci siamo",
  "Tocca a te",
  "Un click e parti",
  "Manca solo questo",
  "Verifica e prenota",
  "Avanti tutta",
  "Tempo di decidere",
  "Confermalo ora",
  "Ready to go",
] as const;

export const CTA_TITLE_TPL = [
  "Prenota ora la tua Auto",
  "L'auto ti aspetta a {title}",
  "Pronto a guidare a {title}?",
  "Prenota in pochi minuti",
  "Riserva il tuo veicolo per {title}",
  "Prendi posto al volante a {title}",
  "{title} ti aspetta: prenota ora",
  "La tua auto KS Rent per {title}",
  "Conferma il veicolo per {title}",
  "{title}: prenotalo prima che finisca",
  "Blocca il prezzo per {title}",
  "Inizia il viaggio verso {title}",
] as const;

export const FAQ_HEADING_TPL = [
  "Domande frequenti — {title}",
  "Tu chiedi, KS Rent risponde — {title}",
  "{title}: le domande più comuni",
  "FAQ — Tutto sul noleggio a {title}",
  "Cose da sapere su {title}",
  "{title}: dubbi e risposte rapide",
  "Il nostro Q&A su {title}",
  "Tutto chiaro su {title}?",
  "{title}: risposte ai tuoi dubbi",
  "Le risposte che cerchi su {title}",
  "{title}: domande tipiche dei clienti",
  "FAQ noleggio a {title}",
] as const;

export const PARKING_HEADING = [
  "Informazioni Parcheggio & Viabilità",
  "Come parcheggiare",
  "Accesso e sosta auto",
  "Parcheggio: dove e come",
  "Arrivo, parcheggio, viabilità",
  "Dove lasciare l'auto",
  "Sosta consigliata in zona",
  "Parcheggio & accesso pedonale",
  "Indicazioni per la sosta",
  "Tutto sul parcheggio",
  "Sosta auto in zona",
  "Parcheggio e tariffe",
] as const;

export const DISTANCE_LABEL = [
  "Distanza da Olbia:",
  "Da Olbia:",
  "Tempo di percorrenza:",
  "Quanto è lontana:",
  "Tragitto da Olbia:",
  "Tempo medio di viaggio:",
  "Quanto serve da Olbia:",
  "Distanza stradale:",
  "Da Olbia in auto:",
  "Tempo di guida:",
  "Tragitto reale:",
  "In quanto si arriva:",
] as const;

export const CTA_SUBTITLE_TPL = [
  "Viaggia in prima classe con KS Rent. Scegli il tuo veicolo premium per esplorare {title} e tutta la Sardegna, anche senza carta di credito.",
  "{title} ti aspetta. Scegli ora la tua auto KS Rent: consegna a domicilio, deposito flessibile, zero burocrazia.",
  "Pochi click e l'auto è tua. Esplora {title} e la Gallura con la flotta KS Rent — bancomat, prepagate o contanti accettati.",
  "Pianifica la tua giornata a {title} con un'auto KS Rent: consegna in villa, hotel o porto, anche con preavviso ridotto.",
  "Non aspettare l'alta stagione: prenota ora il veicolo per {title} e fissa il prezzo prima del rialzo estivo.",
  "Tra te e {title} ci sono solo pochi click. Scegli l'auto KS Rent che ti accompagnerà tra Olbia e la Gallura.",
  "Il tuo viaggio a {title} inizia oggi. Prenota con KS Rent: pagamento flessibile, consegna ovunque in Gallura.",
  "Riserva ora il veicolo per {title}: i nostri clienti tornano perché trovano sempre l'auto pronta al ritiro.",
  "Da {title} al resto della Sardegna senza pensieri: la flotta KS Rent è pronta a partire con te.",
  "Non ti chiediamo carta di credito né score bancari. Per {title} basta la tua patente e la voglia di scoprire.",
  "Conferma in 3 minuti la tua auto per {title}: deposito separato, consegna gratuita a Olbia, zero stress.",
  "L'auto giusta per {title}, consegnata dove vuoi: in hotel, in villa o direttamente al porto di Olbia.",
] as const;

export const FOOTER_TAGLINE = [
  "— KS Rent Sardinia, autonoleggio con consegna a domicilio in tutta la Gallura e Costa Smeralda.",
  "— KS Rent Sardinia: consegna ovunque tra Olbia, Costa Smeralda e costa orientale.",
  "— Autonoleggio KS Rent Sardinia, con sede a Olbia e servizio in tutta la Gallura.",
  "— KS Rent Sardinia, flotta premium con consegna a domicilio dalla sede di Olbia.",
  "— KS Rent Sardinia: il noleggio auto della Gallura, dalle calette di San Teodoro a Capo Testa.",
  "— Autonoleggio KS Rent Sardinia, indipendente, con sede operativa al porto Isola Bianca.",
  "— KS Rent Sardinia: flotta italiana premium per la tua Costa Smeralda.",
  "— KS Rent Sardinia, KS Rent SRL — autonoleggio sardo, aperti 7/7.",
  "— KS Rent Sardinia, consegna gratuita a Olbia e tariffe trasparenti tutto l'anno.",
  "— Autonoleggio KS Rent Sardinia: famiglia, esperienza locale, flotta moderna.",
  "— KS Rent Sardinia: dal porto di Olbia alle spiagge della Gallura in pochi minuti.",
  "— KS Rent Sardinia, il tuo punto fermo per il noleggio auto nel nord-est della Sardegna.",
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

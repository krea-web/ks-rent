/**
 * Metadata articoli del mini-blog /guide/ (IT) e /en/guide/ (EN).
 * Aggiungere qui ogni nuovo articolo creato in src/pages/guide/ o src/pages/en/guide/.
 * Usato dagli index per generare la lista e dai layout per related-links.
 */

export interface GuideArticleMeta {
  slug: string;
  title: string;
  excerpt: string;
  category: "Noleggio" | "Itinerari" | "Costa Smeralda" | "Aeroporto & Porto" | "Veicoli";
  publishedAt: string; // ISO YYYY-MM-DD
  updatedAt?: string;
  readingMinutes: number;
  heroImage: string;
  /** Author name(s) per E-E-A-T. */
  author: string;
  /** Related articles (per linking interno) — slug list. */
  related?: string[];
}

export interface GuideArticleMetaEn {
  slug: string;
  title: string;
  excerpt: string;
  category: "Car hire" | "Itineraries" | "Costa Smeralda" | "Airport & Port" | "Vehicles";
  publishedAt: string;
  updatedAt?: string;
  readingMinutes: number;
  heroImage: string;
  author: string;
  related?: string[];
  /** Slug IT corrispondente per hreflang. */
  itEquivalent?: string;
}

export const GUIDE_ARTICLES: GuideArticleMeta[] = [
  {
    slug: "noleggio-auto-olbia-senza-carta-di-credito-guida-completa",
    title: "Noleggio auto Olbia senza carta di credito: la guida completa 2026",
    excerpt:
      "Tutti i passaggi reali per noleggiare un'auto a Olbia senza carta di credito: pagamenti accettati, deposito, documenti, tempi. Aggiornato maggio 2026.",
    category: "Noleggio",
    publishedAt: "2026-05-13",
    readingMinutes: 8,
    heroImage:
      "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/AUDI/ksrent-audirs3supercar-verde.png",
    author: "Francesco Milo & Salvatore Milo",
    related: ["noleggio-auto-olbia-aeroporto-guida-pratica", "itinerario-7-giorni-costa-smeralda-da-olbia"],
  },
  {
    slug: "itinerario-7-giorni-costa-smeralda-da-olbia",
    title: "Itinerario 7 giorni in Costa Smeralda da Olbia: percorsi, spiagge, distanze",
    excerpt:
      "Il piano completo di una settimana in Costa Smeralda partendo da Olbia: tappe giorno per giorno, distanze, parcheggi, consigli sui veicoli per ogni tratto.",
    category: "Itinerari",
    publishedAt: "2026-05-13",
    readingMinutes: 12,
    heroImage:
      "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/JEEP/ksrent-jeepsuvavenger.webp",
    author: "Francesco Milo & Salvatore Milo",
    related: ["come-muoversi-porto-cervo-parcheggi-navette", "spiagge-costa-smeralda-con-bambini"],
  },
  {
    slug: "come-muoversi-porto-cervo-parcheggi-navette",
    title: "Come muoversi a Porto Cervo: parcheggi, navette, costi 2026",
    excerpt:
      "Guida pratica per arrivare e muoversi a Porto Cervo: parcheggi (P1, Centro Commerciale, Marina), navette gratuite, costi, orari, alternative. Aggiornato 2026.",
    category: "Costa Smeralda",
    publishedAt: "2026-05-13",
    readingMinutes: 9,
    heroImage:
      "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/MERCEDES/ksrent-mercedessupercarclassea180d.png",
    author: "Francesco Milo & Salvatore Milo",
    related: ["spiagge-costa-smeralda-con-bambini", "itinerario-7-giorni-costa-smeralda-da-olbia"],
  },
  {
    slug: "spiagge-costa-smeralda-con-bambini",
    title: "Spiagge della Costa Smeralda con bambini: le 10 migliori per famiglie",
    excerpt:
      "Le 10 spiagge piu' adatte alle famiglie con bambini in Costa Smeralda: acqua bassa, sabbia fine, parcheggio, servizi, ombra. Selezione 2026 di KS Rent Sardinia.",
    category: "Costa Smeralda",
    publishedAt: "2026-05-13",
    readingMinutes: 11,
    heroImage:
      "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/JEEP/ksrent-jeepsuvavenger.webp",
    author: "Francesco Milo & Salvatore Milo",
    related: ["itinerario-7-giorni-costa-smeralda-da-olbia", "come-muoversi-porto-cervo-parcheggi-navette"],
  },
  {
    slug: "noleggio-auto-olbia-aeroporto-guida-pratica",
    title: "Noleggio auto Olbia aeroporto: guida pratica per turisti 2026",
    excerpt:
      "Tutto sul noleggio auto all'aeroporto di Olbia Costa Smeralda (OLB): consegna agli arrivi, orari voli, fila ai banchi, alternative indipendenti, prezzi reali.",
    category: "Aeroporto & Porto",
    publishedAt: "2026-05-13",
    readingMinutes: 7,
    heroImage:
      "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/BMW/ksrent-bmwm2-maschera.webp",
    author: "Francesco Milo & Salvatore Milo",
    related: ["noleggio-auto-olbia-senza-carta-di-credito-guida-completa", "come-arrivare-costa-smeralda-voli-traghetti"],
  },
  {
    slug: "cosa-fare-a-olbia-3-giorni-itinerario",
    title: "Cosa fare a Olbia in 3 giorni: itinerario breve per il weekend",
    excerpt:
      "Itinerario di 3 giorni a Olbia: cosa vedere in città, spiagge vicine, dove mangiare, escursioni mezza giornata. Pensato per weekend lunghi e tappe brevi in Sardegna.",
    category: "Itinerari",
    publishedAt: "2026-05-13",
    readingMinutes: 9,
    heroImage:
      "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/FIAT/ksrent-fiatpandacitycar.webp",
    author: "Francesco Milo & Salvatore Milo",
    related: ["itinerario-7-giorni-costa-smeralda-da-olbia", "noleggio-auto-olbia-aeroporto-guida-pratica"],
  },
  {
    slug: "come-arrivare-costa-smeralda-voli-traghetti",
    title: "Come arrivare in Costa Smeralda: voli, traghetti, distanze 2026",
    excerpt:
      "La guida completa per arrivare in Costa Smeralda: voli aeroporto Olbia OLB, traghetti porto Isola Bianca, alternative Cagliari/Alghero, distanze, costi reali.",
    category: "Aeroporto & Porto",
    publishedAt: "2026-05-13",
    readingMinutes: 8,
    heroImage:
      "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/MERCEDES/ksrent-mercedessupercarclassea180d.png",
    author: "Francesco Milo & Salvatore Milo",
    related: ["noleggio-auto-olbia-aeroporto-guida-pratica", "cosa-fare-a-olbia-3-giorni-itinerario"],
  },
  {
    slug: "quanto-costa-vacanza-costa-smeralda-budget-2026",
    title: "Quanto costa una vacanza in Costa Smeralda? Budget reale 2026",
    excerpt:
      "Budget completo per una vacanza in Costa Smeralda nel 2026: hotel, ristoranti, spiagge, noleggio auto, attività. Stime reali per coppia, famiglia, gruppo.",
    category: "Costa Smeralda",
    publishedAt: "2026-05-13",
    readingMinutes: 10,
    heroImage:
      "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/AUDI/ksrent-audirs3supercar-verde.png",
    author: "Francesco Milo & Salvatore Milo",
    related: ["itinerario-7-giorni-costa-smeralda-da-olbia", "spiagge-costa-smeralda-con-bambini"],
  },
  {
    slug: "spiagge-nascoste-gallura-sterrati",
    title: "Spiagge nascoste della Gallura: 8 calette poco conosciute",
    excerpt:
      "8 spiagge nascoste della Gallura raggiungibili da sterrato o sentiero: dove sono, come arrivare, perché valgono il viaggio. Guida per chi cerca alternative al turismo di massa.",
    category: "Costa Smeralda",
    publishedAt: "2026-05-13",
    readingMinutes: 8,
    heroImage:
      "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/JEEP/ksrent-jeepsuvavenger.webp",
    author: "Francesco Milo & Salvatore Milo",
    related: ["spiagge-costa-smeralda-con-bambini", "itinerario-7-giorni-costa-smeralda-da-olbia"],
  },
  {
    slug: "yacht-charter-vs-auto-noleggio-costa-smeralda",
    title: "Yacht charter vs auto a noleggio in Costa Smeralda: confronto costi",
    excerpt:
      "Vacanza in Costa Smeralda con yacht charter o auto a noleggio? Confronto costi reali 2026, pro e contro, profili adatti, soluzioni miste. Tutti i numeri.",
    category: "Veicoli",
    publishedAt: "2026-05-13",
    readingMinutes: 9,
    heroImage:
      "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/BMW/ksrent-bmwm2-maschera.webp",
    author: "Francesco Milo & Salvatore Milo",
    related: ["quanto-costa-vacanza-costa-smeralda-budget-2026", "come-arrivare-costa-smeralda-voli-traghetti"],
  },
  {
    slug: "patente-internazionale-sardegna-serve-davvero",
    title: "Patente internazionale per noleggiare auto in Sardegna: serve davvero?",
    excerpt:
      "Quando serve la patente internazionale per noleggiare auto in Sardegna: regole UE, USA, UK, Cina, Russia. Documenti accettati, alternative, costi.",
    category: "Noleggio",
    publishedAt: "2026-05-13",
    readingMinutes: 6,
    heroImage:
      "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/MERCEDES/ksrent-mercedessupercarclassea180d.png",
    author: "Francesco Milo & Salvatore Milo",
    related: ["noleggio-auto-olbia-senza-carta-di-credito-guida-completa", "noleggio-auto-olbia-aeroporto-guida-pratica"],
  },
  {
    slug: "noleggio-scooter-quad-sardegna-come-scegliere",
    title: "Noleggio scooter o quad in Sardegna: come scegliere e quando usarli",
    excerpt:
      "Scooter Honda SH 125/350 o quad Yamaha Raptor in Sardegna? Quale serve la patente, quanto costa, dove conviene usarli. Confronto pratico per turisti.",
    category: "Veicoli",
    publishedAt: "2026-05-13",
    readingMinutes: 7,
    heroImage:
      "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/HONDA/ksrent-hondash125.webp",
    author: "Francesco Milo & Salvatore Milo",
    related: ["spiagge-nascoste-gallura-sterrati", "come-muoversi-porto-cervo-parcheggi-navette"],
  },
  {
    slug: "visitare-arcipelago-la-maddalena-guida-pratica",
    title: "Visitare l'Arcipelago di La Maddalena: guida pratica 2026",
    excerpt:
      "Come visitare l'Arcipelago di La Maddalena dalla Costa Smeralda: traghetti da Palau, escursioni in barca, spiagge top, isole, costi, prenotazione obbligatoria.",
    category: "Itinerari",
    publishedAt: "2026-05-13",
    readingMinutes: 9,
    heroImage:
      "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/JEEP/ksrent-jeepsuvavenger.webp",
    author: "Francesco Milo & Salvatore Milo",
    related: ["come-arrivare-costa-smeralda-voli-traghetti", "yacht-charter-vs-auto-noleggio-costa-smeralda"],
  },
  {
    slug: "sagre-eventi-gallura-2026-calendario",
    title: "Sagre e eventi in Gallura 2026: il calendario completo",
    excerpt:
      "Tutte le sagre, feste patronali ed eventi enogastronomici della Gallura nel 2026: Olbia, Arzachena, Tempio Pausania, San Pantaleo. Date, luoghi, accesso.",
    category: "Itinerari",
    publishedAt: "2026-05-13",
    readingMinutes: 8,
    heroImage:
      "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/FIAT/ksrent-fiatpandacitycar.webp",
    author: "Francesco Milo & Salvatore Milo",
    related: ["cosa-fare-a-olbia-3-giorni-itinerario", "itinerario-7-giorni-costa-smeralda-da-olbia"],
  },
  {
    slug: "spiagge-piu-belle-sardegna-nord-orientale",
    title: "Le 7 spiagge più belle della Sardegna nord-orientale",
    excerpt:
      "Le 7 spiagge più belle della Sardegna nord-orientale: Spiaggia del Principe, La Cinta, Cala Brandinchi, Liscia Ruja, Cala Coticcio, Capriccioli, Romazzino.",
    category: "Costa Smeralda",
    publishedAt: "2026-05-13",
    readingMinutes: 9,
    heroImage:
      "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/JEEP/ksrent-jeepsuvavenger.webp",
    author: "Francesco Milo & Salvatore Milo",
    related: ["spiagge-costa-smeralda-con-bambini", "spiagge-nascoste-gallura-sterrati"],
  },
];

export function findArticle(slug: string): GuideArticleMeta | undefined {
  return GUIDE_ARTICLES.find((a) => a.slug === slug);
}

/* ─── EN articles ─── */

export const GUIDE_ARTICLES_EN: GuideArticleMetaEn[] = [
  {
    slug: "car-hire-olbia-without-credit-card-complete-guide",
    title: "Car hire Olbia without credit card: the complete 2026 guide",
    excerpt:
      "How to rent a car in Olbia, Sardinia without a credit card: accepted payments, deposit, documents, real timings. Updated for 2026 by KS Rent Sardinia.",
    category: "Car hire",
    publishedAt: "2026-05-13",
    readingMinutes: 8,
    heroImage:
      "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/AUDI/ksrent-audirs3supercar-verde.png",
    author: "Francesco Milo & Salvatore Milo",
    related: ["car-hire-olbia-airport-practical-guide", "7-day-itinerary-costa-smeralda-from-olbia"],
    itEquivalent: "noleggio-auto-olbia-senza-carta-di-credito-guida-completa",
  },
  {
    slug: "7-day-itinerary-costa-smeralda-from-olbia",
    title: "7-day itinerary in Costa Smeralda from Olbia: routes, beaches, distances",
    excerpt:
      "The complete 7-day plan for Costa Smeralda starting from Olbia: day-by-day stops, distances, parking, vehicle tips for each leg of the trip.",
    category: "Itineraries",
    publishedAt: "2026-05-13",
    readingMinutes: 12,
    heroImage:
      "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/JEEP/ksrent-jeepsuvavenger.webp",
    author: "Francesco Milo & Salvatore Milo",
    related: ["car-hire-olbia-airport-practical-guide", "car-hire-olbia-without-credit-card-complete-guide"],
    itEquivalent: "itinerario-7-giorni-costa-smeralda-da-olbia",
  },
  {
    slug: "car-hire-olbia-airport-practical-guide",
    title: "Car hire Olbia Airport: practical guide for tourists 2026",
    excerpt:
      "Everything about car hire at Olbia Costa Smeralda Airport (OLB): airport delivery, flight times, queues at the desks, independent alternatives, real prices.",
    category: "Airport & Port",
    publishedAt: "2026-05-13",
    readingMinutes: 7,
    heroImage:
      "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/BMW/ksrent-bmwm2-maschera.webp",
    author: "Francesco Milo & Salvatore Milo",
    related: ["car-hire-olbia-without-credit-card-complete-guide", "7-day-itinerary-costa-smeralda-from-olbia"],
    itEquivalent: "noleggio-auto-olbia-aeroporto-guida-pratica",
  },
];

export function findArticleEn(slug: string): GuideArticleMetaEn | undefined {
  return GUIDE_ARTICLES_EN.find((a) => a.slug === slug);
}

/* ─── EN articles batch 2 ─── */

GUIDE_ARTICLES_EN.push(
  {
    slug: "how-to-get-to-costa-smeralda-flights-ferries",
    title: "How to get to Costa Smeralda: flights, ferries, distances 2026",
    excerpt:
      "Complete guide to reaching Costa Smeralda: flights to Olbia OLB airport, ferries to Isola Bianca port, alternatives Cagliari/Alghero, distances, real costs.",
    category: "Airport & Port",
    publishedAt: "2026-05-15",
    readingMinutes: 8,
    heroImage:
      "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/MERCEDES/ksrent-mercedessupercarclassea180d.png",
    author: "Francesco Milo & Salvatore Milo",
    related: ["car-hire-olbia-airport-practical-guide", "7-day-itinerary-costa-smeralda-from-olbia"],
    itEquivalent: "come-arrivare-costa-smeralda-voli-traghetti",
  },
  {
    slug: "costa-smeralda-holiday-cost-real-budget-2026",
    title: "How much does a Costa Smeralda holiday cost? Real budget 2026",
    excerpt:
      "Complete budget for a Costa Smeralda holiday in 2026: hotels, restaurants, beaches, car hire, activities. Real estimates for couple, family, group.",
    category: "Costa Smeralda",
    publishedAt: "2026-05-15",
    readingMinutes: 10,
    heroImage:
      "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/AUDI/ksrent-audirs3supercar-verde.png",
    author: "Francesco Milo & Salvatore Milo",
    related: ["7-day-itinerary-costa-smeralda-from-olbia", "how-to-get-to-costa-smeralda-flights-ferries"],
    itEquivalent: "quanto-costa-vacanza-costa-smeralda-budget-2026",
  },
  {
    slug: "visiting-la-maddalena-archipelago-practical-guide",
    title: "Visiting La Maddalena Archipelago: practical guide 2026",
    excerpt:
      "How to visit La Maddalena Archipelago from Costa Smeralda: ferries from Palau, boat tours, top beaches, islands, costs, mandatory booking.",
    category: "Itineraries",
    publishedAt: "2026-05-15",
    readingMinutes: 9,
    heroImage:
      "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/JEEP/ksrent-jeepsuvavenger.webp",
    author: "Francesco Milo & Salvatore Milo",
    related: ["how-to-get-to-costa-smeralda-flights-ferries", "7-day-itinerary-costa-smeralda-from-olbia"],
    itEquivalent: "visitare-arcipelago-la-maddalena-guida-pratica",
  },
);

/* ─── DE articles ─── */

export interface GuideArticleMetaDe {
  slug: string;
  title: string;
  excerpt: string;
  category: "Autovermietung" | "Reiserouten" | "Costa Smeralda" | "Flughafen & Hafen" | "Fahrzeuge";
  publishedAt: string;
  updatedAt?: string;
  readingMinutes: number;
  heroImage: string;
  author: string;
  related?: string[];
  itEquivalent?: string;
}

export const GUIDE_ARTICLES_DE: GuideArticleMetaDe[] = [
  {
    slug: "autovermietung-olbia-ohne-kreditkarte-vollstaendige-anleitung",
    title: "Autovermietung Olbia ohne Kreditkarte: die vollstaendige Anleitung 2026",
    excerpt:
      "Alle echten Schritte fuer die Autovermietung in Olbia ohne Kreditkarte: akzeptierte Zahlungen, Kaution, Dokumente, Zeiten. Aktualisiert Mai 2026.",
    category: "Autovermietung",
    publishedAt: "2026-05-13",
    readingMinutes: 8,
    heroImage:
      "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/AUDI/ksrent-audirs3supercar-verde.png",
    author: "Francesco Milo & Salvatore Milo",
    related: ["autovermietung-flughafen-olbia-praktische-anleitung", "7-tage-reiseroute-costa-smeralda-ab-olbia"],
    itEquivalent: "noleggio-auto-olbia-senza-carta-di-credito-guida-completa",
  },
  {
    slug: "7-tage-reiseroute-costa-smeralda-ab-olbia",
    title: "7-Tage-Reiseroute Costa Smeralda ab Olbia: Routen, Straende, Distanzen",
    excerpt:
      "Der komplette 7-Tage-Plan fuer die Costa Smeralda ab Olbia: Etappen Tag fuer Tag, Distanzen, Parkplaetze, Fahrzeug-Tipps fuer jeden Abschnitt.",
    category: "Reiserouten",
    publishedAt: "2026-05-13",
    readingMinutes: 12,
    heroImage:
      "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/JEEP/ksrent-jeepsuvavenger.webp",
    author: "Francesco Milo & Salvatore Milo",
    related: ["autovermietung-flughafen-olbia-praktische-anleitung", "autovermietung-olbia-ohne-kreditkarte-vollstaendige-anleitung"],
    itEquivalent: "itinerario-7-giorni-costa-smeralda-da-olbia",
  },
  {
    slug: "autovermietung-flughafen-olbia-praktische-anleitung",
    title: "Autovermietung Flughafen Olbia: praktische Anleitung fuer Touristen 2026",
    excerpt:
      "Alles ueber Autovermietung am Flughafen Olbia Costa Smeralda (OLB): Lieferung an den Ankuenften, Flugzeiten, Schalter-Schlangen, unabhaengige Alternativen.",
    category: "Flughafen & Hafen",
    publishedAt: "2026-05-13",
    readingMinutes: 7,
    heroImage:
      "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/BMW/ksrent-bmwm2-maschera.webp",
    author: "Francesco Milo & Salvatore Milo",
    related: ["autovermietung-olbia-ohne-kreditkarte-vollstaendige-anleitung", "7-tage-reiseroute-costa-smeralda-ab-olbia"],
    itEquivalent: "noleggio-auto-olbia-aeroporto-guida-pratica",
  },
];

export function findArticleDe(slug: string): GuideArticleMetaDe | undefined {
  return GUIDE_ARTICLES_DE.find((a) => a.slug === slug);
}

/* ─── DE articles batch 2 ─── */

GUIDE_ARTICLES_DE.push(
  {
    slug: "anfahrt-costa-smeralda-fluege-faehren",
    title: "Anfahrt Costa Smeralda: Fluege, Faehren, Distanzen 2026",
    excerpt:
      "Komplette Anleitung zur Anreise an die Costa Smeralda: Fluege zum Olbia OLB Flughafen, Faehren zum Isola Bianca Hafen, Alternativen Cagliari/Alghero.",
    category: "Flughafen & Hafen",
    publishedAt: "2026-05-15",
    readingMinutes: 8,
    heroImage:
      "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/MERCEDES/ksrent-mercedessupercarclassea180d.png",
    author: "Francesco Milo & Salvatore Milo",
    related: ["autovermietung-flughafen-olbia-praktische-anleitung", "7-tage-reiseroute-costa-smeralda-ab-olbia"],
    itEquivalent: "come-arrivare-costa-smeralda-voli-traghetti",
  },
  {
    slug: "kosten-urlaub-costa-smeralda-realistisches-budget-2026",
    title: "Wieviel kostet ein Costa Smeralda Urlaub? Realistisches Budget 2026",
    excerpt:
      "Komplettes Budget fuer einen Costa Smeralda Urlaub 2026: Hotels, Restaurants, Straende, Mietwagen, Aktivitaeten. Schaetzungen fuer Paar, Familie, Gruppe.",
    category: "Costa Smeralda",
    publishedAt: "2026-05-15",
    readingMinutes: 10,
    heroImage:
      "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/AUDI/ksrent-audirs3supercar-verde.png",
    author: "Francesco Milo & Salvatore Milo",
    related: ["7-tage-reiseroute-costa-smeralda-ab-olbia", "anfahrt-costa-smeralda-fluege-faehren"],
    itEquivalent: "quanto-costa-vacanza-costa-smeralda-budget-2026",
  },
  {
    slug: "la-maddalena-archipel-besuchen-praktische-anleitung",
    title: "La Maddalena Archipel besuchen: praktische Anleitung 2026",
    excerpt:
      "Wie La Maddalena Archipel von Costa Smeralda besuchen: Faehren ab Palau, Bootsausfluege, Top-Straende, Inseln, Kosten, obligatorische Buchung.",
    category: "Reiserouten",
    publishedAt: "2026-05-15",
    readingMinutes: 9,
    heroImage:
      "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/JEEP/ksrent-jeepsuvavenger.webp",
    author: "Francesco Milo & Salvatore Milo",
    related: ["anfahrt-costa-smeralda-fluege-faehren", "7-tage-reiseroute-costa-smeralda-ab-olbia"],
    itEquivalent: "visitare-arcipelago-la-maddalena-guida-pratica",
  },
);

/* ─── FR articles ─── */

export interface GuideArticleMetaFr {
  slug: string;
  title: string;
  excerpt: string;
  category: "Location" | "Itineraires" | "Costa Smeralda" | "Aeroport & Port" | "Vehicules";
  publishedAt: string;
  updatedAt?: string;
  readingMinutes: number;
  heroImage: string;
  author: string;
  related?: string[];
  itEquivalent?: string;
}

export const GUIDE_ARTICLES_FR: GuideArticleMetaFr[] = [
  {
    slug: "location-voiture-olbia-sans-carte-credit-guide-complet",
    title: "Location voiture Olbia sans carte de credit : le guide complet 2026",
    excerpt:
      "Toutes les etapes reelles pour louer une voiture a Olbia sans carte de credit : paiements acceptes, caution, documents, delais. Mis a jour mai 2026.",
    category: "Location",
    publishedAt: "2026-05-13",
    readingMinutes: 8,
    heroImage:
      "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/AUDI/ksrent-audirs3supercar-verde.png",
    author: "Francesco Milo & Salvatore Milo",
    related: ["location-voiture-aeroport-olbia-guide-pratique", "itineraire-7-jours-costa-smeralda-depuis-olbia"],
    itEquivalent: "noleggio-auto-olbia-senza-carta-di-credito-guida-completa",
  },
  {
    slug: "itineraire-7-jours-costa-smeralda-depuis-olbia",
    title: "Itineraire 7 jours en Costa Smeralda depuis Olbia : parcours, plages, distances",
    excerpt:
      "Le plan complet d'une semaine en Costa Smeralda depuis Olbia : etapes jour par jour, distances, parkings, conseils sur les vehicules pour chaque parcours.",
    category: "Itineraires",
    publishedAt: "2026-05-13",
    readingMinutes: 12,
    heroImage:
      "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/JEEP/ksrent-jeepsuvavenger.webp",
    author: "Francesco Milo & Salvatore Milo",
    related: ["location-voiture-aeroport-olbia-guide-pratique", "location-voiture-olbia-sans-carte-credit-guide-complet"],
    itEquivalent: "itinerario-7-giorni-costa-smeralda-da-olbia",
  },
  {
    slug: "location-voiture-aeroport-olbia-guide-pratique",
    title: "Location voiture aeroport Olbia : guide pratique pour touristes 2026",
    excerpt:
      "Tout sur la location voiture a l'aeroport Olbia Costa Smeralda (OLB) : livraison aux arrivees, horaires vols, file aux comptoirs, alternatives independantes.",
    category: "Aeroport & Port",
    publishedAt: "2026-05-13",
    readingMinutes: 7,
    heroImage:
      "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/BMW/ksrent-bmwm2-maschera.webp",
    author: "Francesco Milo & Salvatore Milo",
    related: ["location-voiture-olbia-sans-carte-credit-guide-complet", "itineraire-7-jours-costa-smeralda-depuis-olbia"],
    itEquivalent: "noleggio-auto-olbia-aeroporto-guida-pratica",
  },
];

export function findArticleFr(slug: string): GuideArticleMetaFr | undefined {
  return GUIDE_ARTICLES_FR.find((a) => a.slug === slug);
}

/* ─── FR articles batch 2 ─── */

GUIDE_ARTICLES_FR.push(
  {
    slug: "comment-arriver-costa-smeralda-vols-ferries",
    title: "Comment arriver en Costa Smeralda : vols, ferries, distances 2026",
    excerpt:
      "Guide complet pour arriver en Costa Smeralda : vols vers aeroport Olbia OLB, ferries vers port Isola Bianca, alternatives Cagliari/Alghero, distances.",
    category: "Aeroport & Port",
    publishedAt: "2026-05-15",
    readingMinutes: 8,
    heroImage:
      "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/MERCEDES/ksrent-mercedessupercarclassea180d.png",
    author: "Francesco Milo & Salvatore Milo",
    related: ["location-voiture-aeroport-olbia-guide-pratique", "itineraire-7-jours-costa-smeralda-depuis-olbia"],
    itEquivalent: "come-arrivare-costa-smeralda-voli-traghetti",
  },
  {
    slug: "budget-vacances-costa-smeralda-cout-reel-2026",
    title: "Combien coute un sejour en Costa Smeralda ? Budget reel 2026",
    excerpt:
      "Budget complet pour des vacances en Costa Smeralda en 2026 : hotels, restaurants, plages, location voiture, activites. Estimations pour couple, famille, groupe.",
    category: "Costa Smeralda",
    publishedAt: "2026-05-15",
    readingMinutes: 10,
    heroImage:
      "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/AUDI/ksrent-audirs3supercar-verde.png",
    author: "Francesco Milo & Salvatore Milo",
    related: ["itineraire-7-jours-costa-smeralda-depuis-olbia", "comment-arriver-costa-smeralda-vols-ferries"],
    itEquivalent: "quanto-costa-vacanza-costa-smeralda-budget-2026",
  },
  {
    slug: "visiter-archipel-la-maddalena-guide-pratique",
    title: "Visiter l'Archipel de La Maddalena : guide pratique 2026",
    excerpt:
      "Comment visiter l'Archipel de La Maddalena depuis la Costa Smeralda : ferries depuis Palau, excursions en bateau, plages top, iles, couts, reservation obligatoire.",
    category: "Itineraires",
    publishedAt: "2026-05-15",
    readingMinutes: 9,
    heroImage:
      "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/JEEP/ksrent-jeepsuvavenger.webp",
    author: "Francesco Milo & Salvatore Milo",
    related: ["comment-arriver-costa-smeralda-vols-ferries", "itineraire-7-jours-costa-smeralda-depuis-olbia"],
    itEquivalent: "visitare-arcipelago-la-maddalena-guida-pratica",
  },
);

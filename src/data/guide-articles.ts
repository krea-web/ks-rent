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
      "/seo-images/guide/noleggio-auto-olbia-senza-carta-di-credito-guida-completa.webp",
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
      "/seo-images/guide/itinerario-7-giorni-costa-smeralda-da-olbia.webp",
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
      "/seo-images/guide/come-muoversi-porto-cervo-parcheggi-navette.webp",
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
      "/seo-images/guide/spiagge-costa-smeralda-con-bambini.webp",
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
      "/seo-images/guide/noleggio-auto-olbia-aeroporto-guida-pratica.webp",
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
      "/seo-images/guide/cosa-fare-a-olbia-3-giorni-itinerario.webp",
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
      "/seo-images/guide/come-arrivare-costa-smeralda-voli-traghetti.webp",
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
      "/seo-images/guide/quanto-costa-vacanza-costa-smeralda-budget-2026.webp",
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
      "/seo-images/guide/spiagge-nascoste-gallura-sterrati.webp",
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
      "/seo-images/guide/yacht-charter-vs-auto-noleggio-costa-smeralda.webp",
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
      "/seo-images/guide/patente-internazionale-sardegna-serve-davvero.webp",
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
      "/seo-images/guide/noleggio-scooter-quad-sardegna-come-scegliere.webp",
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
      "/seo-images/guide/visitare-arcipelago-la-maddalena-guida-pratica.webp",
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
      "/seo-images/guide/sagre-eventi-gallura-2026-calendario.webp",
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
      "/seo-images/guide/spiagge-piu-belle-sardegna-nord-orientale.webp",
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
      "/seo-images/guide/noleggio-auto-olbia-senza-carta-di-credito-guida-completa.webp",
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
      "/seo-images/guide/itinerario-7-giorni-costa-smeralda-da-olbia.webp",
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
      "/seo-images/guide/noleggio-auto-olbia-aeroporto-guida-pratica.webp",
    author: "Francesco Milo & Salvatore Milo",
    related: ["car-hire-olbia-without-credit-card-complete-guide", "7-day-itinerary-costa-smeralda-from-olbia"],
    itEquivalent: "noleggio-auto-olbia-aeroporto-guida-pratica",
  },
];

export function findArticleEn(slug: string): GuideArticleMetaEn | undefined {
  return GUIDE_ARTICLES_EN.find((a) => a.slug === slug);
}

/* ─── EN articles batch 5 (final) ─── */

const _EN_BATCH_5: GuideArticleMetaEn[] = [
  {
    slug: "hidden-beaches-gallura-dirt-roads",
    title: "Hidden beaches of Gallura: 8 lesser-known coves",
    excerpt:
      "8 hidden beaches of Gallura reachable via dirt road or trail: where they are, how to get there, why they're worth the trip. For those seeking alternatives to mass tourism.",
    category: "Costa Smeralda",
    publishedAt: "2026-05-15",
    readingMinutes: 8,
    heroImage:
      "/seo-images/guide/spiagge-nascoste-gallura-sterrati.webp",
    author: "Francesco Milo & Salvatore Milo",
    related: ["family-beaches-costa-smeralda", "7-day-itinerary-costa-smeralda-from-olbia"],
    itEquivalent: "spiagge-nascoste-gallura-sterrati",
  },
  {
    slug: "scooter-quad-rental-sardinia-how-to-choose",
    title: "Scooter or quad rental in Sardinia: how to choose and when",
    excerpt:
      "Honda SH 125/350 scooter or Yamaha Raptor quad in Sardinia? Which licence you need, costs, when to use them. Practical comparison for tourists.",
    category: "Vehicles",
    publishedAt: "2026-05-15",
    readingMinutes: 7,
    heroImage:
      "/seo-images/guide/noleggio-scooter-quad-sardegna-come-scegliere.webp",
    author: "Francesco Milo & Salvatore Milo",
    related: ["hidden-beaches-gallura-dirt-roads", "getting-around-porto-cervo-parking-shuttles"],
    itEquivalent: "noleggio-scooter-quad-sardegna-come-scegliere",
  },
  {
    slug: "festivals-events-gallura-2026-calendar",
    title: "Festivals and events in Gallura 2026: the complete calendar",
    excerpt:
      "All festivals, saint's days and food events of Gallura in 2026: Olbia, Arzachena, Tempio Pausania, San Pantaleo. Dates, locations, access.",
    category: "Itineraries",
    publishedAt: "2026-05-15",
    readingMinutes: 8,
    heroImage:
      "/seo-images/guide/sagre-eventi-gallura-2026-calendario.webp",
    author: "Francesco Milo & Salvatore Milo",
    related: ["what-to-do-in-olbia-3-days-itinerary", "7-day-itinerary-costa-smeralda-from-olbia"],
    itEquivalent: "sagre-eventi-gallura-2026-calendario",
  },
];
GUIDE_ARTICLES_EN.push(..._EN_BATCH_5);

/* ─── EN articles batch 4 ─── */

const _EN_BATCH_4: GuideArticleMetaEn[] = [
  {
    slug: "getting-around-porto-cervo-parking-shuttles",
    title: "Getting around Porto Cervo: parking, shuttles, costs 2026",
    excerpt:
      "Practical guide to reach and move around Porto Cervo: car parks (P1, Shopping Centre, Marina), free shuttles, costs, opening hours, alternatives. 2026 update.",
    category: "Costa Smeralda",
    publishedAt: "2026-05-15",
    readingMinutes: 9,
    heroImage:
      "/seo-images/guide/come-muoversi-porto-cervo-parcheggi-navette.webp",
    author: "Francesco Milo & Salvatore Milo",
    related: ["family-beaches-costa-smeralda", "7-day-itinerary-costa-smeralda-from-olbia"],
    itEquivalent: "come-muoversi-porto-cervo-parcheggi-navette",
  },
  {
    slug: "yacht-charter-vs-car-hire-costa-smeralda",
    title: "Yacht charter vs car hire in Costa Smeralda: cost comparison",
    excerpt:
      "Costa Smeralda holiday with yacht charter or car hire? Real cost comparison 2026, pros and cons, suitable profiles, mixed solutions. All the numbers.",
    category: "Vehicles",
    publishedAt: "2026-05-15",
    readingMinutes: 9,
    heroImage:
      "/seo-images/guide/yacht-charter-vs-auto-noleggio-costa-smeralda.webp",
    author: "Francesco Milo & Salvatore Milo",
    related: ["costa-smeralda-holiday-cost-real-budget-2026", "how-to-get-to-costa-smeralda-flights-ferries"],
    itEquivalent: "yacht-charter-vs-auto-noleggio-costa-smeralda",
  },
  {
    slug: "what-to-do-in-olbia-3-days-itinerary",
    title: "What to do in Olbia in 3 days: short itinerary for the weekend",
    excerpt:
      "3-day itinerary in Olbia: what to see in town, nearby beaches, where to eat, half-day excursions. Designed for long weekends and short Sardinia stops.",
    category: "Itineraries",
    publishedAt: "2026-05-15",
    readingMinutes: 9,
    heroImage:
      "/seo-images/guide/cosa-fare-a-olbia-3-giorni-itinerario.webp",
    author: "Francesco Milo & Salvatore Milo",
    related: ["7-day-itinerary-costa-smeralda-from-olbia", "car-hire-olbia-airport-practical-guide"],
    itEquivalent: "cosa-fare-a-olbia-3-giorni-itinerario",
  },
];
GUIDE_ARTICLES_EN.push(..._EN_BATCH_4);

/* ─── EN articles batch 3 ─── */

const _EN_BATCH_3: GuideArticleMetaEn[] = [
  {
    slug: "international-driving-permit-sardinia-do-i-need-it",
    title: "International Driving Permit for Sardinia: do you really need it?",
    excerpt:
      "When you need an IDP to rent a car in Sardinia: rules for EU, UK, USA, Canada, Australia. Documents accepted, alternatives, costs.",
    category: "Car hire",
    publishedAt: "2026-05-15",
    readingMinutes: 6,
    heroImage:
      "/seo-images/guide/patente-internazionale-sardegna-serve-davvero.webp",
    author: "Francesco Milo & Salvatore Milo",
    related: ["car-hire-olbia-without-credit-card-complete-guide", "car-hire-olbia-airport-practical-guide"],
    itEquivalent: "patente-internazionale-sardegna-serve-davvero",
  },
  {
    slug: "most-beautiful-beaches-north-east-sardinia",
    title: "The 7 most beautiful beaches in north-east Sardinia",
    excerpt:
      "The 7 most beautiful beaches in north-east Sardinia: Spiaggia del Principe, La Cinta, Cala Brandinchi, Liscia Ruja, Cala Coticcio, Capriccioli, Romazzino.",
    category: "Costa Smeralda",
    publishedAt: "2026-05-15",
    readingMinutes: 9,
    heroImage:
      "/seo-images/guide/spiagge-piu-belle-sardegna-nord-orientale.webp",
    author: "Francesco Milo & Salvatore Milo",
    related: ["family-beaches-costa-smeralda", "visiting-la-maddalena-archipelago-practical-guide"],
    itEquivalent: "spiagge-piu-belle-sardegna-nord-orientale",
  },
  {
    slug: "family-beaches-costa-smeralda",
    title: "Costa Smeralda beaches with kids: the 10 best for families",
    excerpt:
      "The 10 most family-friendly beaches in Costa Smeralda: shallow water, fine sand, parking, services, shade. KS Rent Sardinia 2026 selection.",
    category: "Costa Smeralda",
    publishedAt: "2026-05-15",
    readingMinutes: 11,
    heroImage:
      "/seo-images/guide/spiagge-costa-smeralda-con-bambini.webp",
    author: "Francesco Milo & Salvatore Milo",
    related: ["most-beautiful-beaches-north-east-sardinia", "7-day-itinerary-costa-smeralda-from-olbia"],
    itEquivalent: "spiagge-costa-smeralda-con-bambini",
  },
];
GUIDE_ARTICLES_EN.push(..._EN_BATCH_3);

/* ─── EN articles batch 2 (legacy push pattern) ─── */

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
      "/seo-images/guide/come-arrivare-costa-smeralda-voli-traghetti.webp",
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
      "/seo-images/guide/quanto-costa-vacanza-costa-smeralda-budget-2026.webp",
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
      "/seo-images/guide/visitare-arcipelago-la-maddalena-guida-pratica.webp",
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
      "/seo-images/guide/noleggio-auto-olbia-senza-carta-di-credito-guida-completa.webp",
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
      "/seo-images/guide/itinerario-7-giorni-costa-smeralda-da-olbia.webp",
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
      "/seo-images/guide/noleggio-auto-olbia-aeroporto-guida-pratica.webp",
    author: "Francesco Milo & Salvatore Milo",
    related: ["autovermietung-olbia-ohne-kreditkarte-vollstaendige-anleitung", "7-tage-reiseroute-costa-smeralda-ab-olbia"],
    itEquivalent: "noleggio-auto-olbia-aeroporto-guida-pratica",
  },
];

export function findArticleDe(slug: string): GuideArticleMetaDe | undefined {
  return GUIDE_ARTICLES_DE.find((a) => a.slug === slug);
}

/* ─── DE articles batch 5 (final) ─── */

const _DE_BATCH_5: GuideArticleMetaDe[] = [
  {
    slug: "versteckte-straende-gallura-schotterpisten",
    title: "Versteckte Straende der Gallura: 8 wenig bekannte Buchten",
    excerpt:
      "8 versteckte Straende der Gallura ueber Schotterpisten oder Pfade erreichbar: wo sie sind, wie hinkommen, warum sie die Reise wert sind. Fuer alle, die Alternativen zum Massentourismus suchen.",
    category: "Costa Smeralda",
    publishedAt: "2026-05-15",
    readingMinutes: 8,
    heroImage:
      "/seo-images/guide/spiagge-nascoste-gallura-sterrati.webp",
    author: "Francesco Milo & Salvatore Milo",
    related: ["familienstraende-costa-smeralda", "7-tage-reiseroute-costa-smeralda-ab-olbia"],
    itEquivalent: "spiagge-nascoste-gallura-sterrati",
  },
  {
    slug: "roller-quad-mieten-sardinien-wie-waehlen",
    title: "Roller oder Quad mieten in Sardinien: wie waehlen und wann",
    excerpt:
      "Honda SH 125/350 Roller oder Yamaha Raptor Quad in Sardinien? Welcher Fuehrerschein noetig, Kosten, wann nutzen. Praktischer Vergleich fuer Touristen.",
    category: "Fahrzeuge",
    publishedAt: "2026-05-15",
    readingMinutes: 7,
    heroImage:
      "/seo-images/guide/noleggio-scooter-quad-sardegna-come-scegliere.webp",
    author: "Francesco Milo & Salvatore Milo",
    related: ["versteckte-straende-gallura-schotterpisten", "fortbewegung-porto-cervo-parkplaetze-shuttles"],
    itEquivalent: "noleggio-scooter-quad-sardegna-come-scegliere",
  },
  {
    slug: "feste-events-gallura-2026-kalender",
    title: "Feste und Events in der Gallura 2026: der komplette Kalender",
    excerpt:
      "Alle Feste, Patronatsfeste und gastronomischen Events in der Gallura 2026: Olbia, Arzachena, Tempio Pausania, San Pantaleo. Daten, Orte, Zugang.",
    category: "Reiserouten",
    publishedAt: "2026-05-15",
    readingMinutes: 8,
    heroImage:
      "/seo-images/guide/sagre-eventi-gallura-2026-calendario.webp",
    author: "Francesco Milo & Salvatore Milo",
    related: ["was-tun-in-olbia-3-tage-reiseroute", "7-tage-reiseroute-costa-smeralda-ab-olbia"],
    itEquivalent: "sagre-eventi-gallura-2026-calendario",
  },
];
GUIDE_ARTICLES_DE.push(..._DE_BATCH_5);

/* ─── DE articles batch 4 ─── */

const _DE_BATCH_4: GuideArticleMetaDe[] = [
  {
    slug: "fortbewegung-porto-cervo-parkplaetze-shuttles",
    title: "Fortbewegung in Porto Cervo: Parkplaetze, Shuttles, Kosten 2026",
    excerpt:
      "Praktische Anleitung zum Erreichen und Bewegen in Porto Cervo: Parkplaetze (P1, Einkaufszentrum, Marina), kostenlose Shuttles, Kosten, Oeffnungszeiten, Alternativen.",
    category: "Costa Smeralda",
    publishedAt: "2026-05-15",
    readingMinutes: 9,
    heroImage:
      "/seo-images/guide/come-muoversi-porto-cervo-parcheggi-navette.webp",
    author: "Francesco Milo & Salvatore Milo",
    related: ["familienstraende-costa-smeralda", "7-tage-reiseroute-costa-smeralda-ab-olbia"],
    itEquivalent: "come-muoversi-porto-cervo-parcheggi-navette",
  },
  {
    slug: "yacht-charter-vs-mietwagen-costa-smeralda",
    title: "Yacht-Charter vs Mietwagen in Costa Smeralda: Kostenvergleich",
    excerpt:
      "Costa Smeralda Urlaub mit Yacht-Charter oder Mietwagen? Realer Kostenvergleich 2026, Pro und Kontra, passende Profile, Mix-Loesungen. Alle Zahlen.",
    category: "Fahrzeuge",
    publishedAt: "2026-05-15",
    readingMinutes: 9,
    heroImage:
      "/seo-images/guide/yacht-charter-vs-auto-noleggio-costa-smeralda.webp",
    author: "Francesco Milo & Salvatore Milo",
    related: ["kosten-urlaub-costa-smeralda-realistisches-budget-2026", "anfahrt-costa-smeralda-fluege-faehren"],
    itEquivalent: "yacht-charter-vs-auto-noleggio-costa-smeralda",
  },
  {
    slug: "was-tun-in-olbia-3-tage-reiseroute",
    title: "Was tun in Olbia in 3 Tagen: Kurzreiseroute fuers Wochenende",
    excerpt:
      "3-Tage-Reiseroute in Olbia: was in der Stadt sehen, nahe Straende, wo essen, halbtaegige Ausfluege. Fuer lange Wochenenden und kurze Sardinien-Stopps gedacht.",
    category: "Reiserouten",
    publishedAt: "2026-05-15",
    readingMinutes: 9,
    heroImage:
      "/seo-images/guide/cosa-fare-a-olbia-3-giorni-itinerario.webp",
    author: "Francesco Milo & Salvatore Milo",
    related: ["7-tage-reiseroute-costa-smeralda-ab-olbia", "autovermietung-flughafen-olbia-praktische-anleitung"],
    itEquivalent: "cosa-fare-a-olbia-3-giorni-itinerario",
  },
];
GUIDE_ARTICLES_DE.push(..._DE_BATCH_4);

/* ─── DE articles batch 3 ─── */

const _DE_BATCH_3: GuideArticleMetaDe[] = [
  {
    slug: "internationaler-fuehrerschein-sardinien-ist-er-noetig",
    title: "Internationaler Fuehrerschein fuer Sardinien: ist er wirklich noetig?",
    excerpt:
      "Wann der internationale Fuehrerschein zum Mietwagen in Sardinien noetig ist: Regeln EU, USA, Schweiz, Russland. Akzeptierte Dokumente, Alternativen, Kosten.",
    category: "Autovermietung",
    publishedAt: "2026-05-15",
    readingMinutes: 6,
    heroImage:
      "/seo-images/guide/patente-internazionale-sardegna-serve-davvero.webp",
    author: "Francesco Milo & Salvatore Milo",
    related: ["autovermietung-olbia-ohne-kreditkarte-vollstaendige-anleitung", "autovermietung-flughafen-olbia-praktische-anleitung"],
    itEquivalent: "patente-internazionale-sardegna-serve-davvero",
  },
  {
    slug: "schoenste-straende-nordost-sardinien",
    title: "Die 7 schoensten Straende Nordost-Sardiniens",
    excerpt:
      "Die 7 schoensten Straende Nordost-Sardiniens: Spiaggia del Principe, La Cinta, Cala Brandinchi, Liscia Ruja, Cala Coticcio, Capriccioli, Romazzino.",
    category: "Costa Smeralda",
    publishedAt: "2026-05-15",
    readingMinutes: 9,
    heroImage:
      "/seo-images/guide/spiagge-piu-belle-sardegna-nord-orientale.webp",
    author: "Francesco Milo & Salvatore Milo",
    related: ["familienstraende-costa-smeralda", "la-maddalena-archipel-besuchen-praktische-anleitung"],
    itEquivalent: "spiagge-piu-belle-sardegna-nord-orientale",
  },
  {
    slug: "familienstraende-costa-smeralda",
    title: "Costa Smeralda Straende mit Kindern: die 10 besten fuer Familien",
    excerpt:
      "Die 10 familienfreundlichsten Straende der Costa Smeralda: flaches Wasser, feiner Sand, Parkplatz, Services, Schatten. KS Rent Sardinia Auswahl 2026.",
    category: "Costa Smeralda",
    publishedAt: "2026-05-15",
    readingMinutes: 11,
    heroImage:
      "/seo-images/guide/spiagge-costa-smeralda-con-bambini.webp",
    author: "Francesco Milo & Salvatore Milo",
    related: ["schoenste-straende-nordost-sardinien", "7-tage-reiseroute-costa-smeralda-ab-olbia"],
    itEquivalent: "spiagge-costa-smeralda-con-bambini",
  },
];
GUIDE_ARTICLES_DE.push(..._DE_BATCH_3);

/* ─── DE articles batch 2 (legacy push pattern) ─── */

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
      "/seo-images/guide/come-arrivare-costa-smeralda-voli-traghetti.webp",
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
      "/seo-images/guide/quanto-costa-vacanza-costa-smeralda-budget-2026.webp",
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
      "/seo-images/guide/visitare-arcipelago-la-maddalena-guida-pratica.webp",
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
      "/seo-images/guide/noleggio-auto-olbia-senza-carta-di-credito-guida-completa.webp",
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
      "/seo-images/guide/itinerario-7-giorni-costa-smeralda-da-olbia.webp",
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
      "/seo-images/guide/noleggio-auto-olbia-aeroporto-guida-pratica.webp",
    author: "Francesco Milo & Salvatore Milo",
    related: ["location-voiture-olbia-sans-carte-credit-guide-complet", "itineraire-7-jours-costa-smeralda-depuis-olbia"],
    itEquivalent: "noleggio-auto-olbia-aeroporto-guida-pratica",
  },
];

export function findArticleFr(slug: string): GuideArticleMetaFr | undefined {
  return GUIDE_ARTICLES_FR.find((a) => a.slug === slug);
}

/* ─── FR articles batch 5 (final) ─── */

const _FR_BATCH_5: GuideArticleMetaFr[] = [
  {
    slug: "plages-cachees-gallura-pistes-terre",
    title: "Plages cachees de la Gallura : 8 criques peu connues",
    excerpt:
      "8 plages cachees de la Gallura accessibles par piste de terre ou sentier : ou elles sont, comment y aller, pourquoi elles valent le voyage. Pour qui cherche des alternatives au tourisme de masse.",
    category: "Costa Smeralda",
    publishedAt: "2026-05-15",
    readingMinutes: 8,
    heroImage:
      "/seo-images/guide/spiagge-nascoste-gallura-sterrati.webp",
    author: "Francesco Milo & Salvatore Milo",
    related: ["plages-familles-costa-smeralda", "itineraire-7-jours-costa-smeralda-depuis-olbia"],
    itEquivalent: "spiagge-nascoste-gallura-sterrati",
  },
  {
    slug: "location-scooter-quad-sardaigne-comment-choisir",
    title: "Location scooter ou quad en Sardaigne : comment choisir et quand",
    excerpt:
      "Scooter Honda SH 125/350 ou quad Yamaha Raptor en Sardaigne ? Quel permis necessaire, couts, quand les utiliser. Comparaison pratique pour touristes.",
    category: "Vehicules",
    publishedAt: "2026-05-15",
    readingMinutes: 7,
    heroImage:
      "/seo-images/guide/noleggio-scooter-quad-sardegna-come-scegliere.webp",
    author: "Francesco Milo & Salvatore Milo",
    related: ["plages-cachees-gallura-pistes-terre", "se-deplacer-porto-cervo-parkings-navettes"],
    itEquivalent: "noleggio-scooter-quad-sardegna-come-scegliere",
  },
  {
    slug: "festivals-evenements-gallura-2026-calendrier",
    title: "Festivals et evenements en Gallura 2026 : le calendrier complet",
    excerpt:
      "Toutes les fetes, fetes patronales et evenements gastronomiques de la Gallura en 2026 : Olbia, Arzachena, Tempio Pausania, San Pantaleo. Dates, lieux, acces.",
    category: "Itineraires",
    publishedAt: "2026-05-15",
    readingMinutes: 8,
    heroImage:
      "/seo-images/guide/sagre-eventi-gallura-2026-calendario.webp",
    author: "Francesco Milo & Salvatore Milo",
    related: ["que-faire-a-olbia-3-jours-itineraire", "itineraire-7-jours-costa-smeralda-depuis-olbia"],
    itEquivalent: "sagre-eventi-gallura-2026-calendario",
  },
];
GUIDE_ARTICLES_FR.push(..._FR_BATCH_5);

/* ─── FR articles batch 4 ─── */

const _FR_BATCH_4: GuideArticleMetaFr[] = [
  {
    slug: "se-deplacer-porto-cervo-parkings-navettes",
    title: "Se deplacer a Porto Cervo : parkings, navettes, couts 2026",
    excerpt:
      "Guide pratique pour arriver et se deplacer a Porto Cervo : parkings (P1, Centre Commercial, Marina), navettes gratuites, couts, horaires, alternatives.",
    category: "Costa Smeralda",
    publishedAt: "2026-05-15",
    readingMinutes: 9,
    heroImage:
      "/seo-images/guide/come-muoversi-porto-cervo-parcheggi-navette.webp",
    author: "Francesco Milo & Salvatore Milo",
    related: ["plages-familles-costa-smeralda", "itineraire-7-jours-costa-smeralda-depuis-olbia"],
    itEquivalent: "come-muoversi-porto-cervo-parcheggi-navette",
  },
  {
    slug: "yacht-charter-vs-location-voiture-costa-smeralda",
    title: "Yacht charter vs location voiture en Costa Smeralda : comparaison couts",
    excerpt:
      "Vacances en Costa Smeralda avec yacht charter ou voiture en location ? Comparaison couts reels 2026, pour et contre, profils adaptes, solutions mixtes.",
    category: "Vehicules",
    publishedAt: "2026-05-15",
    readingMinutes: 9,
    heroImage:
      "/seo-images/guide/yacht-charter-vs-auto-noleggio-costa-smeralda.webp",
    author: "Francesco Milo & Salvatore Milo",
    related: ["budget-vacances-costa-smeralda-cout-reel-2026", "comment-arriver-costa-smeralda-vols-ferries"],
    itEquivalent: "yacht-charter-vs-auto-noleggio-costa-smeralda",
  },
  {
    slug: "que-faire-a-olbia-3-jours-itineraire",
    title: "Que faire a Olbia en 3 jours : itineraire court pour le week-end",
    excerpt:
      "Itineraire de 3 jours a Olbia : que voir en ville, plages proches, ou manger, excursions demi-journee. Pense pour week-ends longs et courts sejours en Sardaigne.",
    category: "Itineraires",
    publishedAt: "2026-05-15",
    readingMinutes: 9,
    heroImage:
      "/seo-images/guide/cosa-fare-a-olbia-3-giorni-itinerario.webp",
    author: "Francesco Milo & Salvatore Milo",
    related: ["itineraire-7-jours-costa-smeralda-depuis-olbia", "location-voiture-aeroport-olbia-guide-pratique"],
    itEquivalent: "cosa-fare-a-olbia-3-giorni-itinerario",
  },
];
GUIDE_ARTICLES_FR.push(..._FR_BATCH_4);

/* ─── FR articles batch 3 ─── */

const _FR_BATCH_3: GuideArticleMetaFr[] = [
  {
    slug: "permis-international-sardaigne-est-il-necessaire",
    title: "Permis international pour la Sardaigne : est-il vraiment necessaire ?",
    excerpt:
      "Quand le permis international est necessaire pour louer une voiture en Sardaigne : regles UE, USA, Suisse, Russie. Documents acceptes, alternatives, couts.",
    category: "Location",
    publishedAt: "2026-05-15",
    readingMinutes: 6,
    heroImage:
      "/seo-images/guide/patente-internazionale-sardegna-serve-davvero.webp",
    author: "Francesco Milo & Salvatore Milo",
    related: ["location-voiture-olbia-sans-carte-credit-guide-complet", "location-voiture-aeroport-olbia-guide-pratique"],
    itEquivalent: "patente-internazionale-sardegna-serve-davvero",
  },
  {
    slug: "plus-belles-plages-nord-est-sardaigne",
    title: "Les 7 plus belles plages du nord-est de la Sardaigne",
    excerpt:
      "Les 7 plus belles plages du nord-est de la Sardaigne : Spiaggia del Principe, La Cinta, Cala Brandinchi, Liscia Ruja, Cala Coticcio, Capriccioli, Romazzino.",
    category: "Costa Smeralda",
    publishedAt: "2026-05-15",
    readingMinutes: 9,
    heroImage:
      "/seo-images/guide/spiagge-piu-belle-sardegna-nord-orientale.webp",
    author: "Francesco Milo & Salvatore Milo",
    related: ["plages-familles-costa-smeralda", "visiter-archipel-la-maddalena-guide-pratique"],
    itEquivalent: "spiagge-piu-belle-sardegna-nord-orientale",
  },
  {
    slug: "plages-familles-costa-smeralda",
    title: "Plages de la Costa Smeralda avec enfants : les 10 meilleures pour familles",
    excerpt:
      "Les 10 plages les plus adaptees aux familles avec enfants en Costa Smeralda : eau peu profonde, sable fin, parking, services, ombre. Selection KS Rent 2026.",
    category: "Costa Smeralda",
    publishedAt: "2026-05-15",
    readingMinutes: 11,
    heroImage:
      "/seo-images/guide/spiagge-costa-smeralda-con-bambini.webp",
    author: "Francesco Milo & Salvatore Milo",
    related: ["plus-belles-plages-nord-est-sardaigne", "itineraire-7-jours-costa-smeralda-depuis-olbia"],
    itEquivalent: "spiagge-costa-smeralda-con-bambini",
  },
];
GUIDE_ARTICLES_FR.push(..._FR_BATCH_3);

/* ─── FR articles batch 2 (legacy push pattern) ─── */

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
      "/seo-images/guide/come-arrivare-costa-smeralda-voli-traghetti.webp",
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
      "/seo-images/guide/quanto-costa-vacanza-costa-smeralda-budget-2026.webp",
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
      "/seo-images/guide/visitare-arcipelago-la-maddalena-guida-pratica.webp",
    author: "Francesco Milo & Salvatore Milo",
    related: ["comment-arriver-costa-smeralda-vols-ferries", "itineraire-7-jours-costa-smeralda-depuis-olbia"],
    itEquivalent: "visitare-arcipelago-la-maddalena-guida-pratica",
  },
);

/* ─── i18n helpers per LanguageSwitcher / hreflang ─── */

export type GuideLocale = "it" | "en" | "de" | "fr";

/**
 * Risale allo slug IT di un articolo guide dato uno slug in qualsiasi lingua.
 * Permette al LanguageSwitcher e a getAlternateLinks di funzionare anche quando
 * l'utente si trova su /en/guide/[slug-en] e clicca su altre lingue.
 */
export function findItSlugForGuide(anySlug: string): string | undefined {
  if (GUIDE_ARTICLES.some((a) => a.slug === anySlug)) return anySlug;
  const en = GUIDE_ARTICLES_EN.find((a) => a.slug === anySlug);
  if (en?.itEquivalent) return en.itEquivalent;
  const de = GUIDE_ARTICLES_DE.find((a) => a.slug === anySlug);
  if (de?.itEquivalent) return de.itEquivalent;
  const fr = GUIDE_ARTICLES_FR.find((a) => a.slug === anySlug);
  if (fr?.itEquivalent) return fr.itEquivalent;
  return undefined;
}

/**
 * Dato uno slug IT e una lingua target, ritorna lo slug nella lingua richiesta.
 * Se non esiste traduzione, ritorna lo slug IT (così il LanguageSwitcher fa fallback
 * a /[lang]/guide/[slug-it] che almeno mostra index/404 friendly invece di pagina vuota).
 */
export function getGuideSlugForLocale(itSlug: string, locale: GuideLocale): string {
  if (locale === "it") return itSlug;
  const collection =
    locale === "en" ? GUIDE_ARTICLES_EN : locale === "de" ? GUIDE_ARTICLES_DE : GUIDE_ARTICLES_FR;
  const found = collection.find((a) => a.itEquivalent === itSlug);
  return found?.slug ?? itSlug;
}

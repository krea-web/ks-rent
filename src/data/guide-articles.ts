/**
 * Metadata articoli del mini-blog /guide/.
 * Aggiungere qui ogni nuovo articolo creato in src/pages/guide/.
 * Usato dall'index /guide/ per generare la lista e dai layout per related-links.
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
];

export function findArticle(slug: string): GuideArticleMeta | undefined {
  return GUIDE_ARTICLES.find((a) => a.slug === slug);
}

/**
 * Helper centralizzato per generare link interni contestuali in tutte
 * le pagine del sito. Costruisce URL gia' localizzate per la lingua
 * corrente usando gli helper di src/lib/i18n.ts.
 *
 * Uso tipico:
 *   - Pagine dinamiche /[slug] (località/spiagge): aggiungere sezione
 *     "Servizi consigliati" + "Esplora anche".
 *   - Pagine veicoli /flotta/[slug]: aggiungere "Servizi" + "Cross-sell veicoli".
 *   - Service pages: arricchire copertura interna.
 */

import {
  localizePath,
  localizeVehicleSlug,
  getFleetPath,
  type Locale,
} from "@/lib/i18n";

export interface InternalLink {
  href: string;
  label: string;
  /** Sotto-label opzionale (categoria/distanza/etichetta secondaria) */
  hint?: string;
  /** Immagine opzionale per rendere visivamente coinvolgente la card */
  image?: string;
  /** Hint per il rendering: "transparent" usa contain bg-card, "photo" usa cover */
  imageKind?: "transparent" | "photo";
}

/* ─── Service pages (le 5 rotte commerciali principali) ─── */

const SERVICE_PAGES_IT_PATHS = [
  "/noleggio-auto-olbia",
  "/noleggio-auto-aeroporto-olbia",
  "/noleggio-auto-porto-olbia",
  "/noleggio-auto-costa-smeralda",
  "/noleggio-auto-senza-carta-di-credito-olbia",
] as const;

const SERVICE_LABELS: Record<(typeof SERVICE_PAGES_IT_PATHS)[number], Record<Locale, string>> = {
  "/noleggio-auto-olbia": {
    it: "Noleggio Auto Olbia",
    en: "Car Hire Olbia",
    de: "Autovermietung Olbia",
    fr: "Location Voiture Olbia",
  },
  "/noleggio-auto-aeroporto-olbia": {
    it: "Noleggio Aeroporto Olbia",
    en: "Olbia Airport Car Hire",
    de: "Flughafen Olbia mieten",
    fr: "Aéroport Olbia",
  },
  "/noleggio-auto-porto-olbia": {
    it: "Noleggio Porto Olbia",
    en: "Olbia Port Car Hire",
    de: "Hafen Olbia mieten",
    fr: "Port Olbia",
  },
  "/noleggio-auto-costa-smeralda": {
    it: "Noleggio Costa Smeralda",
    en: "Costa Smeralda Car Hire",
    de: "Costa Smeralda mieten",
    fr: "Costa Smeralda",
  },
  "/noleggio-auto-senza-carta-di-credito-olbia": {
    it: "Senza carta di credito",
    en: "No credit card required",
    de: "Ohne Kreditkarte",
    fr: "Sans carte de crédit",
  },
};

const SERVICE_HINTS: Record<(typeof SERVICE_PAGES_IT_PATHS)[number], Record<Locale, string>> = {
  "/noleggio-auto-olbia": {
    it: "Sede + intera flotta",
    en: "Hub + full fleet",
    de: "Hauptsitz + Flotte",
    fr: "Siège + flotte complète",
  },
  "/noleggio-auto-aeroporto-olbia": {
    it: "Consegna ai voli",
    en: "Flight delivery",
    de: "Lieferung am Terminal",
    fr: "Livraison aux vols",
  },
  "/noleggio-auto-porto-olbia": {
    it: "Consegna ai traghetti",
    en: "Ferry pickup",
    de: "Lieferung am Hafen",
    fr: "Livraison aux ferries",
  },
  "/noleggio-auto-costa-smeralda": {
    it: "Consegna in villa/hotel",
    en: "Villa & hotel delivery",
    de: "Villa & Hotel",
    fr: "Livraison villas & hôtels",
  },
  "/noleggio-auto-senza-carta-di-credito-olbia": {
    it: "Bancomat, contanti, prepagate",
    en: "Cash, debit, prepaid",
    de: "Bargeld, Debit, Prepaid",
    fr: "Cash, débit, prépayée",
  },
};

/**
 * Ritorna le service pages diverse dalla corrente, gia' localizzate.
 * @param currentItPath path canonico IT della pagina corrente (per esclusione). Pass null se non serve.
 * @param lang lingua di output
 * @param max numero massimo di link (default tutte tranne current)
 */
export function getRelatedServices(
  currentItPath: string | null,
  lang: Locale,
  max?: number,
): InternalLink[] {
  const filtered = SERVICE_PAGES_IT_PATHS.filter((p) => p !== currentItPath);
  const sliced = max ? filtered.slice(0, max) : filtered;
  return sliced.map((itPath) => ({
    href: localizePath(itPath, lang),
    label: SERVICE_LABELS[itPath][lang],
    hint: SERVICE_HINTS[itPath][lang],
    image: SERVICE_IMAGES[itPath],
    imageKind: "photo" as const,
  }));
}

/* ─── Località principali (per cross-link) ─── */

const TOP_LOCATIONS_IT_SLUGS = [
  { slug: "noleggio-auto-porto-cervo", label: "Porto Cervo", hint: "~ 35 min" },
  { slug: "noleggio-auto-porto-rotondo", label: "Porto Rotondo", hint: "~ 20 min" },
  { slug: "noleggio-auto-baja-sardinia", label: "Baja Sardinia", hint: "~ 45 min" },
  { slug: "noleggio-auto-san-teodoro", label: "San Teodoro", hint: "~ 30 min" },
  { slug: "noleggio-auto-palau", label: "Palau", hint: "~ 50 min" },
  { slug: "noleggio-auto-golfo-aranci", label: "Golfo Aranci", hint: "~ 25 min" },
  { slug: "noleggio-auto-arzachena", label: "Arzachena", hint: "~ 40 min" },
  { slug: "noleggio-auto-cannigione", label: "Cannigione", hint: "~ 45 min" },
] as const;

/**
 * Ritorna le top location come InternalLink localizzati.
 * @param lang lingua
 * @param count numero massimo
 * @param excludeSlug slug IT da escludere (es. la pagina corrente)
 */
export function getTopLocations(
  lang: Locale,
  count: number = 6,
  excludeSlug?: string,
): InternalLink[] {
  const filtered = TOP_LOCATIONS_IT_SLUGS.filter((l) => l.slug !== excludeSlug);
  return filtered.slice(0, count).map((l) => ({
    href: lang === "it" ? `/${l.slug}` : `/${lang}/${slugForLocale(l.slug, lang)}`,
    label: l.label,
    hint: l.hint,
  }));
}

function slugForLocale(itSlug: string, lang: Locale): string {
  const stem = itSlug.replace(/^noleggio-auto-/, "");
  switch (lang) {
    case "en":
      return `car-hire-${stem}`;
    case "de":
      return `autovermietung-${stem}`;
    case "fr":
      return `location-voiture-${stem}`;
    default:
      return itSlug;
  }
}

/* ─── Veicoli top (cross-sell) ─── */

const TRASP = "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/Trasparenza";

const TOP_VEHICLES = [
  { groupSlug: "audi-rs3", label: "Audi RS3", image: `${TRASP}/ksrent-audirs3supercar-verde.png`, hint: { it: "Sportiva 400 CV", en: "Sport 400 HP", de: "Sport 400 PS", fr: "Sportive 400 CV" } },
  { groupSlug: "bmw-m2", label: "BMW M2", image: `${TRASP}/ksrent-bmwm2-maschera.png`, hint: { it: "Coupé sportiva", en: "Sport coupé", de: "Sport-Coupé", fr: "Coupé sport" } },
  { groupSlug: "mercedes-classe-a", label: "Mercedes Classe A", image: `${TRASP}/ksrent-mercedessupercarclassea180d.png`, hint: { it: "Premium compatta", en: "Premium compact", de: "Premium kompakt", fr: "Premium compacte" } },
  { groupSlug: "jeep-avenger", label: "Jeep Avenger", image: `${TRASP}/ksrent-jeepsuvavenger.webp`, hint: { it: "SUV compatto", en: "Compact SUV", de: "Kompakt-SUV", fr: "SUV compact" } },
  { groupSlug: "fiat-panda", label: "Fiat Panda Hybrid", image: `${TRASP}/ksrent-fiatpandacitycar.webp`, hint: { it: "City car", en: "City car", de: "Kleinwagen", fr: "Citadine" } },
  { groupSlug: "honda-sh", label: "Honda SH", image: `${TRASP}/ksrent-hondascooter125.png`, hint: { it: "Scooter 125/350", en: "Scooter 125/350", de: "Roller 125/350", fr: "Scooter 125/350" } },
  { groupSlug: "yamaha-quad-raptor", label: "Yamaha Raptor", image: `${TRASP}/ksrent-yamahaquadraptor.png`, hint: { it: "Quad off-road", en: "Off-road quad", de: "Off-road Quad", fr: "Quad tout-terrain" } },
] as const;

/** Foto contestuali AI (auto in scenari reali) per le service pages. */
const SEO_CTX = "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/seo_pages/vehicles-context";

const SERVICE_IMAGES: Record<string, string> = {
  "/noleggio-auto-olbia": `${SEO_CTX}/fiat-panda-olbia-old-town.webp`,
  "/noleggio-auto-aeroporto-olbia": `${SEO_CTX}/audi-rs3-grey-airport.webp`,
  "/noleggio-auto-porto-olbia": `${SEO_CTX}/mercedes-a-olbia-port.webp`,
  "/noleggio-auto-costa-smeralda": `${SEO_CTX}/audi-rs3-porto-cervo.webp`,
  "/noleggio-auto-senza-carta-di-credito-olbia": `${SEO_CTX}/honda-sh-pittulongu-beach-road.webp`,
};

/**
 * Ritorna i top veicoli come InternalLink localizzati per pagina /flotta/[slug].
 * @param excludeGroupSlug groupSlug del veicolo da escludere (es. la pagina corrente)
 */
export function getCrossSellVehicles(
  lang: Locale,
  count: number = 4,
  excludeGroupSlug?: string,
): InternalLink[] {
  const fleetBase = getFleetPath(lang);
  const filtered = TOP_VEHICLES.filter((v) => v.groupSlug !== excludeGroupSlug);
  return filtered.slice(0, count).map((v) => {
    const slug = localizeVehicleSlug(v.groupSlug, lang);
    const path = `${fleetBase}/${slug}`;
    return {
      href: lang === "it" ? path : `/${lang}${path}`,
      label: v.label,
      hint: v.hint[lang],
      image: v.image,
      imageKind: "transparent" as const,
    };
  });
}

/* ─── Etichette UI sezioni ─── */

export const INTERNAL_LINK_LABELS: Record<Locale, {
  servicesEyebrow: string;
  servicesTitle: string;
  servicesTitleVariants: readonly string[];
  locationsEyebrow: string;
  locationsTitle: string;
  vehiclesEyebrow: string;
  vehiclesTitle: string;
  vehiclesTitleVariants: readonly string[];
  exploreMore: string;
}> = {
  it: {
    servicesEyebrow: "Servizi consigliati",
    servicesTitle: "Esplora anche questi servizi di noleggio",
    servicesTitleVariants: [
      "Altri servizi che potrebbero servirti",
      "I servizi che usano i nostri clienti",
      "Punti di consegna e formule di noleggio",
      "Da Olbia ai porti, all'aeroporto, ovunque",
      "Esplora gli altri formati di consegna",
    ],
    locationsEyebrow: "Località servite",
    locationsTitle: "Consegniamo in tutta la Gallura",
    vehiclesEyebrow: "Altri veicoli",
    vehiclesTitle: "Cerchi qualcos'altro? Guarda gli altri veicoli",
    vehiclesTitleVariants: [
      "Forse cerchi un veicolo diverso",
      "Sfoglia il resto della flotta KS Rent",
      "Auto, scooter, quad: c'è la formula per te",
      "Altri modelli della nostra flotta",
      "Trova il veicolo perfetto per il tuo viaggio",
    ],
    exploreMore: "Tutta la flotta →",
  },
  en: {
    servicesEyebrow: "Recommended services",
    servicesTitle: "Explore our other car hire services",
    servicesTitleVariants: [
      "Other services you might need",
      "What our customers also use",
      "Delivery points and hire formats",
      "From Olbia to the ports and beyond",
      "Browse the other hire options",
    ],
    locationsEyebrow: "Service area",
    locationsTitle: "We deliver across Gallura",
    vehiclesEyebrow: "Other vehicles",
    vehiclesTitle: "Looking for something else? Browse other vehicles",
    vehiclesTitleVariants: [
      "Maybe you need a different vehicle",
      "See the rest of the KS Rent fleet",
      "Cars, scooters, quads — pick your style",
      "Other models in our fleet",
      "Find the perfect vehicle for your trip",
    ],
    exploreMore: "Full fleet →",
  },
  de: {
    servicesEyebrow: "Empfohlene Services",
    servicesTitle: "Entdecken Sie unsere anderen Autovermietungs-Services",
    servicesTitleVariants: [
      "Weitere Services, die Sie brauchen koennten",
      "Was unsere Kunden ebenfalls nutzen",
      "Lieferpunkte und Mietformate",
      "Von Olbia bis zu den Haefen, ueberall",
      "Stoebern Sie durch unsere anderen Optionen",
    ],
    locationsEyebrow: "Liefergebiet",
    locationsTitle: "Wir liefern in ganz Gallura",
    vehiclesEyebrow: "Andere Fahrzeuge",
    vehiclesTitle: "Suchen Sie etwas anderes? Andere Fahrzeuge ansehen",
    vehiclesTitleVariants: [
      "Vielleicht moechten Sie ein anderes Fahrzeug",
      "Sehen Sie sich die restliche KS Rent Flotte an",
      "Autos, Roller, Quads — finden Sie Ihren Stil",
      "Weitere Modelle unserer Flotte",
      "Finden Sie das perfekte Fahrzeug fuer Ihre Reise",
    ],
    exploreMore: "Komplette Flotte →",
  },
  fr: {
    servicesEyebrow: "Services recommandés",
    servicesTitle: "Découvrez nos autres services de location",
    servicesTitleVariants: [
      "D'autres services qui pourraient vous servir",
      "Ce que nos clients utilisent aussi",
      "Points de livraison et formules de location",
      "D'Olbia aux ports, à l'aéroport, partout",
      "Découvrez les autres options de location",
    ],
    locationsEyebrow: "Zone de livraison",
    locationsTitle: "Nous livrons dans toute la Gallura",
    vehiclesEyebrow: "Autres véhicules",
    vehiclesTitle: "Vous cherchez autre chose ? Voir les autres véhicules",
    vehiclesTitleVariants: [
      "Peut-être cherchez-vous un autre véhicule",
      "Parcourez le reste de la flotte KS Rent",
      "Voitures, scooters, quads — trouvez votre style",
      "D'autres modèles dans notre flotte",
      "Trouvez le véhicule parfait pour votre voyage",
    ],
    exploreMore: "Flotte complète →",
  },
};

/** Helper deterministico per scegliere una variante in base al slug della pagina. */
export function pickLabelVariant(slug: string, salt: string, variants: readonly string[]): string {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) | 0;
  return variants[Math.abs(h + salt.charCodeAt(0)) % variants.length];
}

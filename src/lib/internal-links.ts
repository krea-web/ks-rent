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

const TOP_VEHICLES = [
  { groupSlug: "audi-rs3", label: "Audi RS3", hint: { it: "Sportiva 400 CV", en: "Sport 400 HP", de: "Sport 400 PS", fr: "Sportive 400 CV" } },
  { groupSlug: "bmw-m2", label: "BMW M2", hint: { it: "Coupé sportiva", en: "Sport coupé", de: "Sport-Coupé", fr: "Coupé sport" } },
  { groupSlug: "mercedes-classe-a", label: "Mercedes Classe A", hint: { it: "Premium compatta", en: "Premium compact", de: "Premium kompakt", fr: "Premium compacte" } },
  { groupSlug: "jeep-avenger", label: "Jeep Avenger", hint: { it: "SUV compatto", en: "Compact SUV", de: "Kompakt-SUV", fr: "SUV compact" } },
  { groupSlug: "fiat-panda", label: "Fiat Panda Hybrid", hint: { it: "City car", en: "City car", de: "Kleinwagen", fr: "Citadine" } },
  { groupSlug: "honda-sh", label: "Honda SH", hint: { it: "Scooter 125/350", en: "Scooter 125/350", de: "Roller 125/350", fr: "Scooter 125/350" } },
  { groupSlug: "yamaha-quad-raptor", label: "Yamaha Raptor", hint: { it: "Quad off-road", en: "Off-road quad", de: "Off-road Quad", fr: "Quad tout-terrain" } },
] as const;

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
    };
  });
}

/* ─── Etichette UI sezioni ─── */

export const INTERNAL_LINK_LABELS: Record<Locale, {
  servicesEyebrow: string;
  servicesTitle: string;
  locationsEyebrow: string;
  locationsTitle: string;
  vehiclesEyebrow: string;
  vehiclesTitle: string;
  exploreMore: string;
}> = {
  it: {
    servicesEyebrow: "Servizi consigliati",
    servicesTitle: "Esplora anche questi servizi di noleggio",
    locationsEyebrow: "Località servite",
    locationsTitle: "Consegniamo in tutta la Gallura",
    vehiclesEyebrow: "Altri veicoli",
    vehiclesTitle: "Cerchi qualcos'altro? Guarda gli altri veicoli",
    exploreMore: "Tutta la flotta →",
  },
  en: {
    servicesEyebrow: "Recommended services",
    servicesTitle: "Explore our other car hire services",
    locationsEyebrow: "Service area",
    locationsTitle: "We deliver across Gallura",
    vehiclesEyebrow: "Other vehicles",
    vehiclesTitle: "Looking for something else? Browse other vehicles",
    exploreMore: "Full fleet →",
  },
  de: {
    servicesEyebrow: "Empfohlene Services",
    servicesTitle: "Entdecken Sie unsere anderen Autovermietungs-Services",
    locationsEyebrow: "Liefergebiet",
    locationsTitle: "Wir liefern in ganz Gallura",
    vehiclesEyebrow: "Andere Fahrzeuge",
    vehiclesTitle: "Suchen Sie etwas anderes? Andere Fahrzeuge ansehen",
    exploreMore: "Komplette Flotte →",
  },
  fr: {
    servicesEyebrow: "Services recommandés",
    servicesTitle: "Découvrez nos autres services de location",
    locationsEyebrow: "Zone de livraison",
    locationsTitle: "Nous livrons dans toute la Gallura",
    vehiclesEyebrow: "Autres véhicules",
    vehiclesTitle: "Vous cherchez autre chose ? Voir les autres véhicules",
    exploreMore: "Flotte complète →",
  },
};

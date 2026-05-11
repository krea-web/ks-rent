/**
 * i18n helpers per Astro + React.
 * Convenzione URL:
 *   IT (default): /noleggio-auto-porto-cervo
 *   EN:           /en/...
 *   DE:           /de/...
 *   FR:           /fr/...
 *
 * Le pagine top-level hanno path TRADOTTO per lingua (vantaggio SEO):
 *   /flotta                    → /en/fleet            /de/fuhrpark         /fr/flotte
 *   /flotta/audi-rs3           → /en/fleet/audi-rs3   /de/fuhrpark/...     /fr/flotte/...
 *   /tariffe                   → /en/rates            /de/preise           /fr/tarifs
 *   /chisiamo                  → /en/about-us         /de/uber-uns         /fr/a-propos
 *   /prenotaora                → /en/book-now         /de/jetzt-buchen     /fr/reserver
 *   /mappa-sito                → /en/site-map         /de/sitemap          /fr/plan-du-site
 *   /noleggio-auto-aeroporto-olbia            → /en/car-hire-olbia-airport ...
 *   /noleggio-auto-porto-olbia                → ...
 *   /noleggio-auto-costa-smeralda             → ...
 *   /noleggio-auto-senza-carta-di-credito-olbia → ...
 *
 * Le pagine SEO dinamiche (località, spiagge, veicoli) hanno slug per lingua
 * letto da Supabase (slug_en/de/fr). Lo switcher usa un fallback al slug IT
 * quando lo slug della lingua di destinazione non e' disponibile a render time.
 */

export const LOCALES = ["it", "en", "de", "fr"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "it";

export const LOCALE_NAMES: Record<Locale, { native: string; flag: string; htmlLang: string }> = {
  it: { native: "Italiano", flag: "🇮🇹", htmlLang: "it-IT" },
  en: { native: "English", flag: "🇬🇧", htmlLang: "en-GB" },
  de: { native: "Deutsch", flag: "🇩🇪", htmlLang: "de-DE" },
  fr: { native: "Français", flag: "🇫🇷", htmlLang: "fr-FR" },
};

const LOCALE_PREFIX_RE = /^\/(en|de|fr)(\/|$)/;

/**
 * Mappa path top-level IT -> path localizzati per le altre lingue.
 * Chiave: path IT esatto (senza prefisso lingua). Valore: path tradotto per ogni lingua.
 * Usata sia per generare alternate hreflang sia per il LanguageSwitcher.
 */
const PATH_MAP_FULL: Record<string, Record<Locale, string>> = {
  "/":                                             { it: "/",                                                en: "/",                                       de: "/",                                       fr: "/" },
  "/flotta":                                       { it: "/flotta",                                          en: "/fleet",                                  de: "/fuhrpark",                               fr: "/flotte" },
  "/tariffe":                                      { it: "/tariffe",                                         en: "/rates",                                  de: "/preise",                                 fr: "/tarifs" },
  "/chisiamo":                                     { it: "/chisiamo",                                        en: "/about-us",                               de: "/uber-uns",                               fr: "/a-propos" },
  "/prenotaora":                                   { it: "/prenotaora",                                      en: "/book-now",                               de: "/jetzt-buchen",                           fr: "/reserver" },
  "/mappa-sito":                                   { it: "/mappa-sito",                                      en: "/site-map",                               de: "/sitemap",                                fr: "/plan-du-site" },
  "/noleggio-auto-aeroporto-olbia":                { it: "/noleggio-auto-aeroporto-olbia",                   en: "/car-hire-olbia-airport",                 de: "/autovermietung-flughafen-olbia",         fr: "/location-voiture-aeroport-olbia" },
  "/noleggio-auto-porto-olbia":                    { it: "/noleggio-auto-porto-olbia",                       en: "/car-hire-olbia-port",                    de: "/autovermietung-hafen-olbia",             fr: "/location-voiture-port-olbia" },
  "/noleggio-auto-costa-smeralda":                 { it: "/noleggio-auto-costa-smeralda",                    en: "/car-hire-costa-smeralda",                de: "/autovermietung-costa-smeralda",          fr: "/location-voiture-costa-smeralda" },
  "/noleggio-auto-senza-carta-di-credito-olbia":   { it: "/noleggio-auto-senza-carta-di-credito-olbia",      en: "/car-hire-no-credit-card-olbia",          de: "/autovermietung-ohne-kreditkarte-olbia",  fr: "/location-voiture-sans-carte-credit-olbia" },
};

/** Path-prefix per `/flotta/[slug]` -> `/en/fleet/[slug]`, ecc. */
const FLEET_PREFIX: Record<Locale, string> = {
  it: "/flotta",
  en: "/fleet",
  de: "/fuhrpark",
  fr: "/flotte",
};

/**
 * Mappa slug veicoli per lingua. Estratta da sql/translations/13.
 * Chiave: group_slug (IT). Valore: slug localizzato per lingua.
 * Da aggiornare se l'admin cambia slug_en/de/fr di un seo_vehicle.
 */
const VEHICLE_SLUGS: Record<string, Record<Locale, string>> = {
  "audi-rs3":           { it: "audi-rs3",           en: "audi-rs3-hire-olbia",          de: "audi-rs3-mieten-olbia",          fr: "audi-rs3-location-olbia" },
  "bmw-m2":             { it: "bmw-m2",             en: "bmw-m2-coupe-hire-olbia",      de: "bmw-m2-coupe-mieten-olbia",      fr: "bmw-m2-coupe-location-olbia" },
  "mercedes-classe-a":  { it: "mercedes-classe-a",  en: "mercedes-a-class-hire-olbia",  de: "mercedes-a-klasse-mieten-olbia", fr: "mercedes-classe-a-location-olbia" },
  "jeep-avenger":       { it: "jeep-avenger",       en: "jeep-avenger-hire-olbia",      de: "jeep-avenger-mieten-olbia",      fr: "jeep-avenger-location-olbia" },
  "fiat-panda":         { it: "fiat-panda",         en: "fiat-panda-hire-olbia",        de: "fiat-panda-mieten-olbia",        fr: "fiat-panda-location-olbia" },
  "honda-sh":           { it: "honda-sh",           en: "honda-sh-hire-olbia",          de: "honda-sh-mieten-olbia",          fr: "honda-sh-location-olbia" },
  "yamaha-quad-raptor": { it: "yamaha-quad-raptor", en: "yamaha-raptor-quad-hire-sardinia", de: "yamaha-raptor-quad-mieten-sardinien", fr: "yamaha-raptor-quad-location-sardaigne" },
};

/** Mappa inversa per individuare il group_slug IT a partire da uno slug localizzato. */
const VEHICLE_SLUG_INVERSE: Record<string, string> = (() => {
  const m: Record<string, string> = {};
  for (const [it, langMap] of Object.entries(VEHICLE_SLUGS)) {
    for (const slug of Object.values(langMap)) m[slug] = it;
  }
  return m;
})();

/**
 * Traduce uno slug veicolo a partire dal group_slug (IT) verso la lingua target.
 * Fallback: ritorna il group_slug se non trovato (evita rottura su nuovi veicoli).
 */
export function localizeVehicleSlug(groupSlug: string, locale: Locale): string {
  return VEHICLE_SLUGS[groupSlug]?.[locale] ?? groupSlug;
}

const LOCATION_PREFIX_BY_LOCALE: Record<Locale, string> = {
  it: "noleggio-auto-",
  en: "car-hire-",
  de: "autovermietung-",
  fr: "location-voiture-",
};

/**
 * Traduce uno slug località tra le lingue applicando il pattern regolare:
 *   noleggio-auto-X  ↔  car-hire-X  ↔  autovermietung-X  ↔  location-voiture-X
 * Per le pagine top-level (aeroporto/porto/costa-smeralda/senza-carta) usa PATH_MAP_FULL.
 * Se lo slug non rispetta il pattern, ritorna lo slug invariato (es. spiagge: toponimi).
 */
export function localizeLocationSlug(slug: string, locale: Locale): string {
  for (const fromPrefix of Object.values(LOCATION_PREFIX_BY_LOCALE)) {
    if (slug.startsWith(fromPrefix)) {
      const stem = slug.slice(fromPrefix.length);
      return `${LOCATION_PREFIX_BY_LOCALE[locale]}${stem}`;
    }
  }
  return slug;
}

/** Estrae la locale dal pathname (gestisce sia `/en/...` che `/flotta` IT default). */
export function getLocaleFromPath(pathname: string): Locale {
  const match = pathname.match(LOCALE_PREFIX_RE);
  if (match) return match[1] as Locale;
  return DEFAULT_LOCALE;
}

/** Rimuove il prefisso `/en|de|fr` lasciando il path interno. */
export function stripLocalePrefix(pathname: string): string {
  return pathname.replace(LOCALE_PREFIX_RE, "/").replace(/\/{2,}/g, "/");
}

/**
 * Trova la chiave canonica IT del path corrente, indipendentemente dalla lingua.
 * Es. "/en/fleet/audi-rs3-hire-olbia" -> { itPath: "/flotta/audi-rs3", fleetGroupSlug: "audi-rs3" }
 * Ritorna null se il path non e' riconosciuto.
 */
function findCanonicalItPath(pathname: string): {
  itPath: string;
  /** group_slug IT del veicolo (se path /flotta/[slug] o equivalente per lingua) */
  fleetGroupSlug?: string;
  /** slug IT della location/spiaggia (se path /[slug] dinamico riconosciuto) */
  dynamicItSlug?: string;
} | null {
  const stripped = stripLocalePrefix(pathname);
  const currentLocale = getLocaleFromPath(pathname);

  // 1) Match esatto contro PATH_MAP_FULL
  for (const [itPath, langMap] of Object.entries(PATH_MAP_FULL)) {
    if (langMap[currentLocale] === stripped || langMap.it === stripped) {
      return { itPath };
    }
  }

  // 2) Match prefisso flotta/fleet/fuhrpark/flotte + slug (anche localizzato)
  for (const [, prefix] of Object.entries(FLEET_PREFIX) as [Locale, string][]) {
    if (stripped.startsWith(prefix + "/")) {
      const localSlug = stripped.slice(prefix.length + 1);
      // Risali al group_slug IT
      const groupSlug = VEHICLE_SLUG_INVERSE[localSlug] ?? localSlug;
      return { itPath: `/flotta/${groupSlug}`, fleetGroupSlug: groupSlug };
    }
  }

  // 3) Match pagina dinamica /[slug] (location o beach) — riconducibile a slug IT
  if (stripped.startsWith("/") && stripped.length > 1 && !stripped.slice(1).includes("/")) {
    const localSlug = stripped.slice(1);
    // Se rispetta il pattern di una location, risali allo slug IT
    for (const [loc, p] of Object.entries(LOCATION_PREFIX_BY_LOCALE) as [Locale, string][]) {
      if (loc !== "it" && localSlug.startsWith(p)) {
        const itSlug = `noleggio-auto-${localSlug.slice(p.length)}`;
        return { itPath: `/${itSlug}`, dynamicItSlug: itSlug };
      }
    }
    // Default: assumiamo già IT o toponimo invariato (spiagge)
    return { itPath: `/${localSlug}`, dynamicItSlug: localSlug };
  }

  return null;
}

/**
 * Localizza un path nella lingua target. Traduce:
 * - top-level note (flotta, tariffe, chisiamo, ...) tramite PATH_MAP_FULL
 * - veicoli /flotta/[slug] tramite VEHICLE_SLUGS
 * - location /[slug] tramite pattern algoritmico (noleggio-auto-X ↔ car-hire-X ↔ ...)
 * - spiagge /[slug]: toponimi invariati (slug uguale per tutte le lingue)
 */
export function localizePath(pathname: string, locale: Locale): string {
  const canonical = findCanonicalItPath(pathname);

  if (canonical) {
    if (canonical.fleetGroupSlug !== undefined) {
      const prefix = FLEET_PREFIX[locale];
      const slug = localizeVehicleSlug(canonical.fleetGroupSlug, locale);
      const path = `${prefix}/${slug}`;
      return locale === DEFAULT_LOCALE ? path : `/${locale}${path}`;
    }
    if (canonical.dynamicItSlug !== undefined) {
      const localizedSlug = localizeLocationSlug(canonical.dynamicItSlug, locale);
      return locale === DEFAULT_LOCALE ? `/${localizedSlug}` : `/${locale}/${localizedSlug}`;
    }
    const localizedPath = PATH_MAP_FULL[canonical.itPath]?.[locale];
    if (localizedPath !== undefined) {
      return locale === DEFAULT_LOCALE ? localizedPath : `/${locale}${localizedPath}`;
    }
  }

  // Fallback: prefissa la lingua mantenendo lo slug
  const stripped = stripLocalePrefix(pathname);
  if (locale === DEFAULT_LOCALE) return stripped;
  if (stripped === "/") return `/${locale}`;
  return `/${locale}${stripped}`;
}

/**
 * Ritorna le variant alternate hreflang.
 * @param alternateSlugs Mappa opzionale di slug per le pagine SEO dinamiche
 *                      (località/spiagge/veicoli). Se passato, sostituisce lo
 *                      slug della lingua di destinazione.
 */
export function getAlternateLinks(
  pathname: string,
  siteUrl: string,
  alternateSlugs?: Partial<Record<Locale, string>>,
): { hreflang: string; href: string }[] {
  const links = LOCALES.map((loc) => {
    let path = localizePath(pathname, loc);
    if (alternateSlugs && alternateSlugs[loc]) {
      // Override slug: presuppone che il path sia "/[slug]" o "/{lang}/[slug]" o "/flotta/[slug]"
      const slug = alternateSlugs[loc]!;
      const stripped = stripLocalePrefix(pathname);
      if (stripped.startsWith("/flotta/")) {
        path = loc === DEFAULT_LOCALE
          ? `${FLEET_PREFIX[loc]}/${slug}`
          : `/${loc}${FLEET_PREFIX[loc]}/${slug}`;
      } else {
        path = loc === DEFAULT_LOCALE ? `/${slug}` : `/${loc}/${slug}`;
      }
    }
    return {
      hreflang: LOCALE_NAMES[loc].htmlLang.toLowerCase(),
      href: `${siteUrl}${path}`,
    };
  });

  // x-default: versione IT
  const defaultPath = localizePath(pathname, DEFAULT_LOCALE);
  links.push({
    hreflang: "x-default",
    href: `${siteUrl}${defaultPath}`,
  });

  return links;
}

/** Helper esposto per il pages [lang]/flotta/[slug] e simili. */
export function getFleetPath(locale: Locale): string {
  return FLEET_PREFIX[locale];
}

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
 * Es. "/en/fleet/audi-rs3" -> { itPath: "/flotta/audi-rs3", isFleetSubpath: "audi-rs3" }
 * Ritorna null se il path non e' riconosciuto (es. pagina dinamica `/[slug]`).
 */
function findCanonicalItPath(pathname: string): {
  itPath: string;
  fleetSlug?: string;
} | null {
  const stripped = stripLocalePrefix(pathname);
  const currentLocale = getLocaleFromPath(pathname);

  // 1) Match esatto contro PATH_MAP_FULL
  for (const [itPath, langMap] of Object.entries(PATH_MAP_FULL)) {
    if (langMap[currentLocale] === stripped || langMap.it === stripped) {
      return { itPath };
    }
  }

  // 2) Match prefisso /flotta/[slug]
  for (const [loc, prefix] of Object.entries(FLEET_PREFIX) as [Locale, string][]) {
    if (stripped.startsWith(prefix + "/")) {
      const slug = stripped.slice(prefix.length + 1);
      return { itPath: `/flotta/${slug}`, fleetSlug: slug };
    }
  }

  return null;
}

/**
 * Localizza un path nella lingua target.
 * - Pagine top-level note: usa PATH_MAP_FULL per il path tradotto.
 * - Pagine /flotta/[slug]: usa FLEET_PREFIX per il prefisso, slug invariato.
 * - Pagine sconosciute (es. /[slug] dinamiche da DB): prefissa la lingua e basta
 *   (il fallback potrebbe 404 se il slug nella lingua target non esiste in DB —
 *   il LanguageSwitcher su pagine dinamiche dovrebbe ricevere alternate slug come prop).
 */
export function localizePath(pathname: string, locale: Locale): string {
  const canonical = findCanonicalItPath(pathname);

  if (canonical) {
    if (canonical.fleetSlug !== undefined) {
      const prefix = FLEET_PREFIX[locale];
      const path = `${prefix}/${canonical.fleetSlug}`;
      return locale === DEFAULT_LOCALE ? path : `/${locale}${path}`;
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

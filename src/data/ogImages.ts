/**
 * Registry delle immagini OG (anteprime social) usate sul sito.
 * Sono file statici nel bucket pubblico `asset` al path `og/<key>.webp`, referenziati
 * hardcoded nelle pagine .astro tramite la prop `ogImage` di BaseLayout.
 * Sostituendo il FILE allo stesso path, l'anteprima cambia ovunque senza toccare il codice.
 * Usato dal manager admin "Anteprime Social" (OgImagesSection).
 */
export const OG_BUCKET = "asset";
export const OG_PUBLIC_BASE =
  "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/asset/";

export interface OgImage {
  key: string; // path nel bucket SENZA prefisso bucket, es. "og/home.webp"
  label: string;
  pages: string; // descrizione delle pagine che la usano
}

export const OG_IMAGES: OgImage[] = [
  { key: "og/home.webp", label: "Home", pages: "Homepage — IT / EN / DE / FR" },
  { key: "og/flotta.webp", label: "Flotta", pages: "Flotta / Fleet / Fuhrpark / Flotte" },
  { key: "og/aeroporto.webp", label: "Aeroporto", pages: "Noleggio aeroporto Olbia — 4 lingue" },
  { key: "og/porto.webp", label: "Porto", pages: "Noleggio porto Olbia — 4 lingue" },
  { key: "og/chisiamo.webp", label: "Chi siamo", pages: "Chi siamo / About / Über uns / À propos" },
  { key: "og/tariffe.webp", label: "Tariffe", pages: "Tariffe / Rates / Preise / Tarifs" },
  { key: "og/guide.webp", label: "Guide", pages: "Indice guide — 4 lingue" },
];

/** URL pubblico di una OG con cache-bust opzionale (per vedere subito la sostituzione). */
export const ogUrl = (key: string, bust?: number | string) =>
  `${OG_PUBLIC_BASE}${key}${bust ? `?t=${bust}` : ""}`;

/**
 * Helper per generare srcset responsive su immagini Supabase Storage.
 *
 * Sfrutta le Supabase Image Transformations: aggiungendo `?width=N&quality=80`
 * a un URL del bucket `public` ottieni una versione ridotta on-the-fly,
 * cached al CDN. Mobile risparmia ~70% di peso vs immagine full-size desktop.
 *
 * Uso in componenti .astro:
 *   <img
 *     src={src}
 *     srcset={buildSrcset(src)}
 *     sizes={SIZES_HERO_FULL}
 *     width="1600"
 *     height="900"
 *     loading="eager"
 *     fetchpriority="high"
 *   />
 */

const SUPABASE_PUBLIC_PATTERN = "supabase.co/storage/v1/object/public/";

/**
 * Genera srcset 480/800/1200/1600w per un URL Supabase Storage.
 * Ritorna undefined se l'URL non è Supabase o ha già query params (evita override).
 */
export function buildSrcset(url: string | null | undefined, widths: number[] = [480, 800, 1200, 1600]): string | undefined {
  if (!url) return undefined;
  if (!url.includes(SUPABASE_PUBLIC_PATTERN)) return undefined;
  if (url.includes("?")) return undefined;
  return widths.map((w) => `${url}?width=${w}&quality=80 ${w}w`).join(", ");
}

/**
 * Variante srcset per immagini square/thumb (logo, avatar, card).
 */
export function buildSrcsetSquare(url: string | null | undefined): string | undefined {
  return buildSrcset(url, [120, 240, 360, 480]);
}

/**
 * Variante srcset per gallery / card medie (vehicle tile, beach tile).
 */
export function buildSrcsetCard(url: string | null | undefined): string | undefined {
  return buildSrcset(url, [320, 480, 640, 960]);
}

/** sizes attribute presets — match con il layout responsive di Tailwind. */
export const SIZES_HERO_FULL = "100vw";
export const SIZES_HERO_CONSTRAINED = "(min-width: 1280px) 1200px, 100vw";
export const SIZES_CARD_GRID_3 = "(min-width: 768px) 33vw, 100vw";
export const SIZES_CARD_GRID_4 = "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw";
export const SIZES_SQUARE_THUMB = "(min-width: 768px) 240px, 120px";

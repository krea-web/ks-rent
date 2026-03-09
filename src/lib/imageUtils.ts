/**
 * Ottimizza URL immagini Supabase Storage con trasformazione server-side (Piano Pro).
 * Aggiunge width, quality e format=webp. Fallback automatico su errore.
 */
const SUPABASE_STORAGE_HOST = "zgytnkimjpoosvshfopz.supabase.co";

export const getOptimizedImageUrl = (
  url: string | undefined | null,
  width: number = 800,
  quality: number = 75
): string => {
  if (!url) return "";
  if (!url.includes(SUPABASE_STORAGE_HOST)) return url;
  if (!url.includes("/storage/v1/object/public/")) return url;

  const renderUrl = url.replace(
    "/storage/v1/object/public/",
    "/storage/v1/render/image/public/"
  );
  return `${renderUrl}?width=${width}&quality=${quality}&format=webp`;
};

/**
 * Restituisce l'URL pubblico originale (senza trasformazioni) come fallback.
 */
export const getOriginalImageUrl = (url: string | undefined | null): string => {
  if (!url) return "";
  return url.replace("/storage/v1/render/image/public/", "/storage/v1/object/public/").split("?")[0];
};

/**
 * Genera srcSet per immagini responsive.
 */
export const getResponsiveSrcSet = (
  url: string | undefined | null,
  sizes: number[] = [400, 800, 1200]
): string => {
  if (!url) return "";
  return sizes
    .map((w) => `${getOptimizedImageUrl(url, w)} ${w}w`)
    .join(", ");
};

/**
 * Genera alt text SEO-friendly per veicoli.
 */
export const getVehicleAlt = (make?: string, model?: string): string => {
  if (make && model) return `Noleggio ${make} ${model} Olbia Costa Smeralda - KS Rent`;
  if (model) return `Noleggio ${model} Olbia - KS Rent`;
  return "Veicolo a noleggio KS Rent Olbia";
};

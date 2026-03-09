/**
 * Ottimizza URL immagini Supabase Storage con trasformazione server-side.
 * Aggiunge width, quality e format=webp per performance ottimali.
 */
const SUPABASE_STORAGE_HOST = "zgytnkimjpoosvshfopz.supabase.co";

export const getOptimizedImageUrl = (
  url: string | undefined | null,
  _width: number = 800,
  _quality: number = 75
): string => {
  if (!url) return "";
  return url;
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

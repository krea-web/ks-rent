/**
 * Restituisce l'URL pubblico diretto senza trasformazioni.
 * L'endpoint /render/image/ di Supabase restituisce errori 400,
 * quindi usiamo esclusivamente l'URL pubblico originale.
 */
export const getOptimizedImageUrl = (
  url: string | undefined | null,
  _width?: number,
  _quality?: number
): string => {
  if (!url) return "";
  // Strip any previous render/image transformation
  return url
    .replace("/storage/v1/render/image/public/", "/storage/v1/object/public/")
    .split("?")[0];
};

/**
 * Restituisce l'URL pubblico originale.
 */
export const getOriginalImageUrl = (url: string | undefined | null): string => {
  if (!url) return "";
  return url
    .replace("/storage/v1/render/image/public/", "/storage/v1/object/public/")
    .split("?")[0];
};

/**
 * Genera alt text SEO-friendly per veicoli.
 */
export const getVehicleAlt = (make?: string, model?: string): string => {
  if (make && model) return `Noleggio protetto ${make} ${model} Olbia Costa Smeralda - KS Rent`;
  if (model) return `Noleggio ${model} Olbia - KS Rent`;
  return "Veicolo a noleggio KS Rent Olbia";
};

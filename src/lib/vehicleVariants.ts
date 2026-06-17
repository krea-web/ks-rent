/**
 * vehicleVariants.ts — single source of truth per il raggruppamento delle varianti veicolo.
 *
 * Le varianti dello stesso modello (es. Honda SH 125 + SH 350, Audi RS3 Verde + Grigio)
 * condividono lo stesso `group_slug` nel DB. Questo helper le raggruppa in UN solo gruppo
 * per ridurre il numero di card e permettere lo switch variante/colore con aggiornamento
 * dell'immagine, sia in flotta che nel wizard di prenotazione.
 *
 * NB: lavora solo su colonne PUBBLICHE (vedi CLAUDE.md #18 — mai franchise_amount ecc. lato anon).
 */

export interface VehicleLike {
  id: string;
  make?: string | null;
  model?: string | null;
  color?: string | null;
  category?: string | null;
  group_slug?: string | null;
  is_primary_variant?: boolean | null;
  available?: boolean | null;
  daily_rate?: number | null;
  image_url?: string | null;
  transparent_image_url?: string | null;
  gallery_urls?: string[] | null;
  rate_april?: number | null;
  rate_may?: number | null;
  rate_june?: number | null;
  rate_july?: number | null;
  rate_august?: number | null;
  rate_september?: number | null;
  rate_october?: number | null;
}

export interface VehicleGroup<T extends VehicleLike = VehicleLike> {
  /** chiave interna di raggruppamento (group_slug oppure `${make}__${model}`) */
  key: string;
  /** slug del gruppo da usare nelle URL/?vehicle= (group_slug se presente) */
  groupSlug: string;
  /** variante rappresentativa (primary disponibile > disponibile > primary > prima) */
  representative: T;
  /** tutte le varianti del gruppo, ordinate (primary/disponibili prima) */
  variants: T[];
  /** true se il gruppo ha piu di una variante */
  hasVariants: boolean;
  /** true se almeno una variante e disponibile */
  isAvailable: boolean;
}

const RATE_KEYS = [
  "rate_april",
  "rate_may",
  "rate_june",
  "rate_july",
  "rate_august",
  "rate_september",
  "rate_october",
] as const;

function variantKey(v: VehicleLike): string {
  const g = v.group_slug && String(v.group_slug).trim();
  if (g) return g;
  return `${v.make ?? ""}__${v.model ?? ""}`;
}

/**
 * Raggruppa una lista di veicoli per `group_slug` (fallback `make__model`).
 * `onlyAvailable` filtra i gruppi senza nessuna variante disponibile.
 */
export function groupByVariant<T extends VehicleLike>(
  vehicles: T[],
  opts: { onlyAvailable?: boolean } = {},
): VehicleGroup<T>[] {
  const onlyAvailable = opts.onlyAvailable ?? false;
  const map = new Map<string, T[]>();
  const order: string[] = [];

  for (const v of vehicles) {
    const key = variantKey(v);
    if (!map.has(key)) {
      map.set(key, []);
      order.push(key);
    }
    map.get(key)!.push(v);
  }

  const groups: VehicleGroup<T>[] = [];
  for (const key of order) {
    const all = map.get(key)!;
    const variants = [...all].sort((a, b) => {
      const pa = a.is_primary_variant ? 0 : 1;
      const pb = b.is_primary_variant ? 0 : 1;
      if (pa !== pb) return pa - pb;
      const aa = a.available ? 0 : 1;
      const ab = b.available ? 0 : 1;
      if (aa !== ab) return aa - ab;
      return (
        String(a.model ?? "").localeCompare(String(b.model ?? "")) ||
        String(a.color ?? "").localeCompare(String(b.color ?? ""))
      );
    });

    const isAvailable = variants.some((v) => !!v.available);
    const representative =
      variants.find((v) => v.is_primary_variant && v.available) ||
      variants.find((v) => v.available) ||
      variants.find((v) => v.is_primary_variant) ||
      variants[0];
    const groupSlug = (representative.group_slug && String(representative.group_slug).trim()) || key;

    groups.push({
      key,
      groupSlug,
      representative,
      variants,
      hasVariants: variants.length > 1,
      isAvailable,
    });
  }

  return onlyAvailable ? groups.filter((g) => g.isAvailable) : groups;
}

const norm = (s: unknown): string => String(s ?? "").trim();

/**
 * Etichetta per il bottone di switch variante.
 * - Se le varianti del gruppo differiscono per COLORE -> usa il colore (RS3 "Verde"/"Grigio").
 * - Altrimenti, se differiscono per MODELLO -> usa il modello (Honda "SH 125"/"SH 350").
 * - Fallback: colore || modello.
 */
export function variantLabel(variant: VehicleLike, groupVariants: VehicleLike[]): string {
  const colors = new Set(groupVariants.map((v) => norm(v.color)).filter(Boolean));
  const models = new Set(groupVariants.map((v) => norm(v.model)).filter(Boolean));

  if (colors.size > 1 && norm(variant.color)) return norm(variant.color);
  if (models.size > 1 && norm(variant.model)) return norm(variant.model);
  return norm(variant.color) || norm(variant.model) || "Standard";
}

/** Costruisce una mappa id -> etichetta variante (comodo per render ripetuti). */
export function buildVariantLabels(groupVariants: VehicleLike[]): Map<string, string> {
  const labels = new Map<string, string>();
  for (const v of groupVariants) labels.set(v.id, variantLabel(v, groupVariants));
  return labels;
}

/** Nome completo della variante per messaggi/CTA, es. "Honda SH 350" o "Audi RS3 (Grigio)". */
export function variantFullName(variant: VehicleLike, groupVariants: VehicleLike[]): string {
  const base = `${norm(variant.make)} ${norm(variant.model)}`.trim();
  const colors = new Set(groupVariants.map((v) => norm(v.color)).filter(Boolean));
  const models = new Set(groupVariants.map((v) => norm(v.model)).filter(Boolean));
  // Se il modello e gia distintivo (es. SH 125 vs SH 350) basta il nome base.
  if (models.size > 1) return base;
  // Se distinguono per colore, appendi il colore.
  if (colors.size > 1 && norm(variant.color)) return `${base} (${norm(variant.color)})`;
  return base;
}

/** Immagine rappresentativa di una variante (preferisce il PNG trasparente). */
export function variantImage(variant: VehicleLike): string {
  return norm(variant.transparent_image_url) || norm(variant.image_url) || "";
}

/** Prezzo "a partire da" = minimo tra daily_rate e tariffe mensili di tutte le varianti. */
export function priceFromGroup(group: VehicleGroup): number | null {
  const rates: number[] = [];
  for (const v of group.variants) {
    for (const k of RATE_KEYS) {
      const r = v[k];
      if (typeof r === "number" && r > 0) rates.push(r);
    }
    if (typeof v.daily_rate === "number" && v.daily_rate > 0) rates.push(v.daily_rate);
  }
  return rates.length ? Math.min(...rates) : null;
}

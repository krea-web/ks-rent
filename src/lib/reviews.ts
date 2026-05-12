import { supabase } from "@/lib/supabase";

export interface AggregateRating {
  ratingValue: number;
  reviewCount: number;
}

const MIN_REVIEWS_FOR_SCHEMA = 5;

let cached: AggregateRating | null | undefined;

/**
 * Fetch dell'AggregateRating reale dalle reviews pubblicate su Supabase.
 * Il risultato e' cached a livello di modulo: durante un build SSG la query
 * viene eseguita una sola volta anche se invocata da N pagine.
 *
 * Ritorna null se ci sono meno di MIN_REVIEWS_FOR_SCHEMA recensioni
 * (evita JSON-LD con ratingCount basso o zero).
 */
export async function getAggregateRating(): Promise<AggregateRating | null> {
  if (cached !== undefined) return cached;

  const { data, error } = await supabase
    .from("reviews")
    .select("rating")
    .eq("is_published", true);

  if (error || !data || data.length < MIN_REVIEWS_FOR_SCHEMA) {
    cached = null;
    return cached;
  }

  const sum = data.reduce((s, r) => s + r.rating, 0);
  cached = {
    ratingValue: Number((sum / data.length).toFixed(1)),
    reviewCount: data.length,
  };
  return cached;
}

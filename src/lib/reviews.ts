import { supabase } from "@/lib/supabase";
import googleSnapshot from "@/data/google-rating-snapshot.json";

export interface AggregateRating {
  ratingValue: number;
  reviewCount: number;
}

const MIN_REVIEWS_FOR_SCHEMA = 5;

let cached: AggregateRating | null | undefined;

/**
 * Fetch dell'AggregateRating reale.
 *
 * Fonte autoritaria: `src/data/google-rating-snapshot.json`, popolato dallo
 * script `fetch-google-reviews.mjs` con `user_ratings_total` e `rating` da
 * Google Places API. Questi sono i numeri *reali* del GBP (es. 36 review
 * totali, media 5.0), mentre la tabella `reviews` su Supabase contiene solo
 * il subset (5-10) di review che Google espone via Place Details.
 *
 * Fallback: se lo snapshot e' assente o invalido, usa il count locale dalla
 * tabella `reviews` (legacy).
 */
export async function getAggregateRating(): Promise<AggregateRating | null> {
  if (cached !== undefined) return cached;

  // 1. Fonte primaria: snapshot Google API (totale GBP reale)
  if (
    googleSnapshot &&
    typeof googleSnapshot.ratingValue === "number" &&
    typeof googleSnapshot.reviewCount === "number" &&
    googleSnapshot.reviewCount >= MIN_REVIEWS_FOR_SCHEMA
  ) {
    cached = {
      ratingValue: Number(googleSnapshot.ratingValue.toFixed(1)),
      reviewCount: googleSnapshot.reviewCount,
    };
    return cached;
  }

  // 2. Fallback: count locale dalle review sincronizzate in Supabase
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

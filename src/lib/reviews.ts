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
 * Google Places API. Questi sono i numeri *reali* del GBP (es. 40 review
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

/**
 * Ritorna fino a `limit` review con testo (>50 caratteri) formattate come
 * Schema.org Review pronte per inserimento in jsonLd di LocalBusiness.
 *
 * NB: usare in combinazione con aggregateRating (NON solo le 5 review come
 * count totale): le 5 sono "exemplary" review specifiche, mentre il
 * count/rating reale viene dallo snapshot Google Places API (36/5.0).
 */
export interface ReviewSchemaItem {
  "@type": "Review";
  author: { "@type": "Person"; name: string };
  reviewRating: { "@type": "Rating"; ratingValue: number; bestRating: 5; worstRating: 1 };
  reviewBody: string;
  datePublished: string;
  inLanguage: string;
  publisher: { "@type": "Organization"; name: "Google" };
}

export async function getTopReviewsForSchema(limit = 5): Promise<ReviewSchemaItem[]> {
  const { data, error } = await supabase
    .from("reviews")
    .select("author_name, rating, text, published_at, language")
    .eq("source", "google")
    .eq("is_published", true)
    .not("text", "is", null)
    .order("published_at", { ascending: false })
    .limit(limit * 2); // fetch extra per filtrare per lunghezza testo

  if (error || !data) return [];

  return data
    .filter((r) => r.text && r.text.length >= 50)
    .slice(0, limit)
    .map((r) => ({
      "@type": "Review" as const,
      author: { "@type": "Person" as const, name: r.author_name || "Cliente Google" },
      reviewRating: {
        "@type": "Rating" as const,
        ratingValue: Math.max(1, Math.min(5, r.rating || 5)),
        bestRating: 5 as const,
        worstRating: 1 as const,
      },
      reviewBody: r.text,
      datePublished: r.published_at ? r.published_at.slice(0, 10) : new Date().toISOString().slice(0, 10),
      inLanguage: r.language || "it",
      publisher: { "@type": "Organization" as const, name: "Google" as const },
    }));
}

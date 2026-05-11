import { supabase } from "@/lib/supabase";

export type Lang = "it" | "en" | "de" | "fr";

export interface ReviewSchemaData {
  aggregateRating: { ratingValue: number; reviewCount: number } | null;
  reviews: { author: string; rating: number; text: string; datePublished: string }[];
}

const MIN_REVIEWS_FOR_AGGREGATE = 5;
const TOP_REVIEWS_IN_SCHEMA = 5;

interface RawReview {
  author_name: string | null;
  rating: number | null;
  text: string | null;
  text_en: string | null;
  text_de: string | null;
  text_fr: string | null;
  published_at: string | null;
  is_featured: boolean | null;
}

let cachedRows: RawReview[] | null = null;

async function loadRows(): Promise<RawReview[]> {
  if (cachedRows) return cachedRows;
  const { data, error } = await supabase
    .from("reviews")
    .select("author_name, rating, text, text_en, text_de, text_fr, published_at, is_featured")
    .eq("is_published", true)
    .order("is_featured", { ascending: false })
    .order("published_at", { ascending: false });

  if (error) {
    console.warn("[reviewSchemaData] reviews fetch error:", error.message);
    cachedRows = [];
    return cachedRows;
  }
  cachedRows = (data as RawReview[]) || [];
  return cachedRows;
}

export async function getReviewSchemaData(lang: Lang = "it"): Promise<ReviewSchemaData> {
  const rows = await loadRows();
  const valid = rows.filter((r) => typeof r.rating === "number" && r.rating > 0);
  const count = valid.length;
  const aggregateRating =
    count >= MIN_REVIEWS_FOR_AGGREGATE
      ? {
          ratingValue: valid.reduce((s, r) => s + (r.rating as number), 0) / count,
          reviewCount: count,
        }
      : null;

  const reviews = valid
    .map((r) => {
      const localized =
        lang === "en" ? r.text_en : lang === "de" ? r.text_de : lang === "fr" ? r.text_fr : null;
      const text = (localized || r.text || "").trim();
      const author = (r.author_name || "").trim();
      if (!text || !author || !r.published_at) return null;
      return {
        author,
        rating: r.rating as number,
        text,
        datePublished: r.published_at.slice(0, 10),
      };
    })
    .filter((x): x is NonNullable<typeof x> => x !== null)
    .slice(0, TOP_REVIEWS_IN_SCHEMA);

  return { aggregateRating, reviews };
}

#!/usr/bin/env node
/**
 * Sync Google Place reviews into Supabase `reviews` table.
 *
 * Eseguito al prebuild via npm script. Idempotente: usa upsert su google_review_id
 * (campo time = published_at, hashato in stringa univoca).
 *
 * Variabili ambiente richieste:
 *   - GOOGLE_PLACES_API_KEY  (Google Cloud > APIs > Places API enabled)
 *   - GOOGLE_PLACE_ID        (Place ID di KS Rent Sardinia)
 *   - PUBLIC_SUPABASE_URL    (gia' usato da astro.config)
 *   - SUPABASE_SERVICE_ROLE_KEY  (NB: service role per bypassare RLS)
 *
 * Senza queste variabili lo script termina con exit 0 (no-op),
 * cosi' i build su sviluppatori che non hanno le credenziali
 * non vengono bloccati.
 */

import { createClient } from "@supabase/supabase-js";

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const PLACE_ID = process.env.GOOGLE_PLACE_ID;
const SUPABASE_URL = process.env.PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!API_KEY || !PLACE_ID) {
  console.log("[fetch-google-reviews] Skip: GOOGLE_PLACES_API_KEY o GOOGLE_PLACE_ID non configurate.");
  process.exit(0);
}
if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
  console.log("[fetch-google-reviews] Skip: credenziali Supabase mancanti.");
  process.exit(0);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY, {
  auth: { persistSession: false },
});

async function main() {
  const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
  url.searchParams.set("place_id", PLACE_ID);
  url.searchParams.set("fields", "reviews,rating,user_ratings_total,name");
  url.searchParams.set("language", "it");
  url.searchParams.set("reviews_sort", "newest");
  url.searchParams.set("key", API_KEY);

  console.log("[fetch-google-reviews] Fetching place details...");
  const res = await fetch(url.toString());
  const json = await res.json();

  if (json.status !== "OK") {
    console.error(`[fetch-google-reviews] Google API error: ${json.status} ${json.error_message || ""}`);
    process.exit(1);
  }

  const placeName = json.result?.name;
  const aggregateRating = json.result?.rating;
  const totalCount = json.result?.user_ratings_total;
  const reviews = json.result?.reviews || [];

  console.log(`[fetch-google-reviews] ${placeName} — ${aggregateRating} (${totalCount} totali, ${reviews.length} fetchate)`);

  if (reviews.length === 0) {
    console.log("[fetch-google-reviews] Nessuna recensione restituita da Google.");
    process.exit(0);
  }

  let upserted = 0;
  let skipped = 0;

  for (const r of reviews) {
    // Google non da' un id stabile per le review; usiamo author_url + time come chiave univoca.
    const stableId = `gpid_${PLACE_ID}_${r.time || 0}_${(r.author_name || "anon").replace(/\s+/g, "-").toLowerCase()}`;

    // Verifica se esiste già una review manuale con lo stesso author/text per evitare duplicati
    const { data: existing } = await supabase
      .from("reviews")
      .select("id, source")
      .eq("google_review_id", stableId)
      .maybeSingle();

    const payload = {
      source: "google",
      google_review_id: stableId,
      author_name: r.author_name || "Cliente Google",
      author_photo_url: r.profile_photo_url || null,
      rating: Math.max(1, Math.min(5, r.rating || 5)),
      text: r.text || "",
      language: r.language || "it",
      published_at: r.time ? new Date(r.time * 1000).toISOString() : new Date().toISOString(),
      // is_published, is_featured: NON sovrascritti se già esistenti (preserve admin moderation)
    };

    if (existing) {
      // Update solo campi non-moderation
      const { error } = await supabase
        .from("reviews")
        .update({
          author_photo_url: payload.author_photo_url,
          rating: payload.rating,
          text: payload.text,
          language: payload.language,
        })
        .eq("id", existing.id);
      if (error) console.error(`  [update fail] ${stableId}: ${error.message}`);
      else { skipped++; }
    } else {
      const { error } = await supabase.from("reviews").insert({
        ...payload,
        is_published: true,
        is_featured: false,
      });
      if (error) console.error(`  [insert fail] ${stableId}: ${error.message}`);
      else { upserted++; }
    }
  }

  console.log(`[fetch-google-reviews] Done. Inserite: ${upserted}, aggiornate: ${skipped}.`);
}

main().catch((err) => {
  console.error("[fetch-google-reviews] Fatal:", err);
  process.exit(1);
});

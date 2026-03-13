import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Star, ExternalLink, Loader2 } from "lucide-react";
import { useJsApiLoader } from "@react-google-maps/api";

const GOOGLE_REVIEW_URL = "https://g.page/r/CZKdxnQ8w8GFEBM/review";
const PLACE_ID = "ChIJmVT6M26I0hIRm3Y69B_K68s";
const MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "";

interface Review {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description?: string;
  profile_photo_url?: string;
}

const Stars = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? "fill-current text-gray-900" : "text-black/20"}
      />
    ))}
  </div>
);

const ReviewCard = ({ review, index }: { review: Review; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="bg-black/5 backdrop-blur-sm rounded-2xl p-6 border border-black/10"
  >
    <Stars rating={review.rating} />
    <p className="text-sm leading-relaxed text-gray-900/80 mt-3 mb-4 line-clamp-4">
      "{review.text}"
    </p>
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-2">
        {review.profile_photo_url && (
          <img
            src={review.profile_photo_url}
            alt={review.author_name}
            className="w-7 h-7 rounded-full object-cover"
            loading="lazy"
          />
        )}
        <span className="font-bold text-sm text-black">{review.author_name}</span>
      </div>
      {review.relative_time_description && (
        <span className="text-xs text-black/50 shrink-0">{review.relative_time_description}</span>
      )}
    </div>
  </motion.div>
);

const GoogleReviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: MAPS_API_KEY,
    libraries: ["places"] as any,
  });

  const fetchReviews = useCallback(() => {
    if (!window.google?.maps?.places?.PlacesService) {
      setLoading(false);
      setError(true);
      return;
    }

    try {
      const service = new window.google.maps.places.PlacesService(
        document.createElement("div")
      );
      service.getDetails(
        { placeId: PLACE_ID, fields: ["reviews"] },
        (place, status) => {
          if (
            status === window.google.maps.places.PlacesServiceStatus.OK &&
            place?.reviews &&
            place.reviews.length > 0
          ) {
            const bestReviews = place.reviews
              .filter((r) => r.rating >= 4)
              .slice(0, 5)
              .map((r) => ({
                author_name: r.author_name || "Cliente",
                rating: r.rating || 5,
                text: r.text || "",
                relative_time_description: r.relative_time_description,
                profile_photo_url: r.profile_photo_url,
              }));
            setReviews(bestReviews);
          } else {
            setError(true);
          }
          setLoading(false);
        }
      );
    } catch {
      setLoading(false);
      setError(true);
    }
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    fetchReviews();
  }, [isLoaded, fetchReviews]);

  // Don't render the section at all if there's an error and no reviews
  if (!loading && error && reviews.length === 0) return null;

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-[#C8A135]">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star size={20} className="fill-current text-gray-900" />
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-black/70">
              Google Reviews
            </span>
            <Star size={20} className="fill-current text-gray-900" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-black tracking-tight mb-4">
            Dicono di Noi
          </h2>
          <p className="text-base md:text-lg text-black/70 max-w-2xl mx-auto">
            La soddisfazione dei nostri clienti è la nostra priorità. Ecco cosa dicono di noi.
          </p>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-16 gap-3">
            <Loader2 className="w-8 h-8 animate-spin text-black/60" />
            <p className="text-sm text-black/60 font-medium">Caricamento recensioni verificate...</p>
          </div>
        )}

        {/* Reviews Grid */}
        {!loading && reviews.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
              {reviews.slice(0, 3).map((review, i) => (
                <ReviewCard key={i} review={review} index={i} />
              ))}
            </div>
            {reviews.length > 3 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto mb-14">
                {reviews.slice(3, 5).map((review, i) => (
                  <ReviewCard key={i + 3} review={review} index={i + 3} />
                ))}
              </div>
            )}
          </>
        )}

        {/* CTA */}
        {!loading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-xl bg-black text-white text-sm md:text-base font-bold uppercase tracking-wider hover:scale-105 transition-transform shadow-[0_10px_40px_rgba(0,0,0,0.3)]"
            >
              <Star size={18} className="fill-current" />
              Condividi la Tua Esperienza
              <ExternalLink size={16} />
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default GoogleReviews;

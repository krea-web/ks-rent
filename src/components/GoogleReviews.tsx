import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";

const GOOGLE_REVIEW_URL = "https://g.page/r/CZKdxnQ8w8GFEBM/review";
const PLACE_ID = "ChIJmVT6M26I0hIRm3Y69B_K68s";

interface Review {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description?: string;
  profile_photo_url?: string;
}

const FALLBACK_REVIEWS: Review[] = [
  {
    author_name: "Marco R.",
    rating: 5,
    text: "Servizio impeccabile e auto in condizioni perfette. Ho noleggiato una Porsche 911 per il weekend in Costa Smeralda: esperienza indimenticabile. Consigliatissimo!",
    relative_time_description: "2 settimane fa",
  },
  {
    author_name: "Giulia M.",
    rating: 5,
    text: "Professionalità e cortesia ai massimi livelli. Consegna puntuale in aeroporto a Olbia, auto pulitissima e nessuna sorpresa sul prezzo. Top!",
    relative_time_description: "1 mese fa",
  },
  {
    author_name: "Alessandro P.",
    rating: 5,
    text: "Ho noleggiato una Mercedes AMG per le vacanze in Sardegna. Il team di KS Rent è stato eccezionale, disponibile e super professionale. Tornerò sicuramente!",
    relative_time_description: "3 settimane fa",
  },
  {
    author_name: "Francesca D.",
    rating: 5,
    text: "Esperienza di noleggio luxury perfetta. Auto consegnata al porto di Olbia, tutto liscio e senza intoppi. Prezzi trasparenti e nessun costo nascosto.",
    relative_time_description: "1 mese fa",
  },
  {
    author_name: "Luca B.",
    rating: 5,
    text: "La migliore agenzia di noleggio auto in Sardegna. Flotta incredibile, personale gentilissimo e processo di prenotazione semplicissimo. 5 stelle meritatissime!",
    relative_time_description: "2 mesi fa",
  },
];

const Stars = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? "fill-current text-foreground/80" : "text-foreground/20"}
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
    className="bg-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-foreground/10 hover:border-foreground/20 transition-colors"
  >
    <Stars rating={review.rating} />
    <p className="text-sm leading-relaxed text-foreground/70 mt-3 mb-4 line-clamp-4">
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
        <span className="font-bold text-sm text-foreground/90">{review.author_name}</span>
      </div>
      {review.relative_time_description && (
        <span className="text-xs text-foreground/40 shrink-0">{review.relative_time_description}</span>
      )}
    </div>
  </motion.div>
);

const GoogleReviews = () => {
  const [reviews, setReviews] = useState<Review[]>(FALLBACK_REVIEWS);

  const fetchReviews = useCallback(() => {
    if (!window.google?.maps?.places?.PlacesService) return;

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
            if (bestReviews.length > 0) {
              setReviews(bestReviews);
            }
          }
        }
      );
    } catch {
      // fallback already set
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(fetchReviews, 3000);
    return () => clearTimeout(timer);
  }, [fetchReviews]);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Gold gradient background using theme tokens */}
      <div className="absolute inset-0 gradient-gold" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.15),_transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star size={20} className="fill-current text-foreground/70" />
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/60">
              Google Reviews
            </span>
            <Star size={20} className="fill-current text-foreground/70" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight mb-4">
            I Nostri Clienti Parlano
          </h2>
          <p className="text-base md:text-lg text-foreground/60 max-w-2xl mx-auto">
            La soddisfazione dei nostri clienti è la nostra priorità. Ecco cosa dicono di noi.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {reviews.slice(0, 3).map((review, i) => (
            <ReviewCard key={i} review={review} index={i} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto mb-14">
          {reviews.slice(3, 5).map((review, i) => (
            <ReviewCard key={i + 3} review={review} index={i + 3} />
          ))}
        </div>

        {/* CTA */}
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
            className="inline-flex items-center gap-3 px-10 py-4 rounded-xl bg-background text-foreground text-sm md:text-base font-bold uppercase tracking-wider hover:scale-105 transition-transform shadow-[0_10px_40px_rgba(0,0,0,0.3)]"
          >
            <Star size={18} className="fill-current" />
            Condividi la Tua Esperienza
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GoogleReviews;

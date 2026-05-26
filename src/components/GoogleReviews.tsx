import { motion } from "framer-motion";
import { Star, ExternalLink, Quote } from "lucide-react";

const GOOGLE_REVIEW_URL = "https://g.page/r/CZKdxnQ8w8GFEBM/review";

export interface ReviewItem {
  author_name: string;
  author_photo_url?: string | null;
  rating: number;
  text: string;
  published_at?: string | null;
}

interface GoogleReviewsProps {
  reviews?: ReviewItem[];
  totalCount?: number;
  averageRating?: number;
}

const FALLBACK_REVIEWS: ReviewItem[] = [
  {
    author_name: "Monica Fodde",
    rating: 5,
    text: "Ho avuto un'esperienza davvero molto positiva con questo autonoleggio. Il personale è stato gentile, professionale e sempre disponibile. La procedura di ritiro e riconsegna dell'auto è stata veloce e senza complicazioni. Auto pulita, in perfette condizioni e prezzi onesti, ben spiegati fin dall'inizio.",
  },
  {
    author_name: "Giada Bianchi",
    rating: 5,
    text: "Servizio impeccabile! Ritiro e consegna velocissimi. Personale gentile e prezzi chiari, senza sorprese.",
  },
  {
    author_name: "Dario Deiana",
    rating: 5,
    text: "Professionalità e cortesia ai massimi livelli. Consegna puntuale in aeroporto a Olbia, auto pulitissima e nessuna sorpresa sul prezzo. Top!",
  },
];

const Stars = ({ rating }: { rating: number }) => (
  <div className="flex gap-1" role="img" aria-label={`Valutazione: ${rating} su 5 stelle`}>
    {Array.from({ length: 5 }, (_, i) => (
      <Star key={i} size={20} aria-hidden="true" className={i < rating ? "fill-gold text-gold" : "text-gray-300 dark:text-gray-700"} />
    ))}
  </div>
);

// Mesi IT hardcoded: formattazione deterministica identica su server (SSG) e
// client. toLocaleDateString + new Date() davano output diversi tra Node e
// browser (ICU/timezone) → hydration mismatch React #418/#425. Parsando la
// stringa ISO direttamente evitiamo Date object, timezone e locale runtime.
const MESI_IT = [
  "gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno",
  "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre",
];
function formatReviewDate(iso: string | null | undefined): string | null {
  if (!iso) return null;
  const datePart = String(iso).split("T")[0]; // "2026-05-18"
  const parts = datePart.split("-");
  if (parts.length < 2) return null;
  const year = parts[0];
  const monthIdx = parseInt(parts[1], 10) - 1;
  if (monthIdx < 0 || monthIdx > 11) return null;
  return `${MESI_IT[monthIdx]} ${year}`;
}

const ReviewCard = ({ review, index }: { review: ReviewItem; index: number }) => {
  const formattedDate = formatReviewDate(review.published_at);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.7, ease: "easeOut" }}
      className="relative bg-white dark:bg-[#0a0a0a] rounded-2xl p-8 md:p-10 border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex flex-col justify-between h-full group hover:border-gold/40 transition-all duration-500"
    >
      <div className="absolute top-8 right-8 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500">
        <Quote size={80} className="text-gold rotate-180" />
      </div>

      <div className="relative z-10 flex-grow">
        <Stars rating={review.rating} />
        <p className="mt-8 mb-10 text-gray-700 dark:text-white/90 text-sm md:text-base leading-relaxed">
          {review.text}
        </p>
      </div>

      <div className="flex items-center gap-4 pt-6 border-t border-gray-200 dark:border-white/10 relative z-10">
        {review.author_photo_url ? (
          <img
            src={review.author_photo_url}
            alt={review.author_name}
            className="w-12 h-12 rounded-full object-cover shadow-lg"
            loading="lazy"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-black flex items-center justify-center text-black font-black text-xl shadow-lg">
            {review.author_name.charAt(0)}
          </div>
        )}
        <div>
          <h3 className="font-bold text-lg text-gold tracking-wide">{review.author_name}</h3>
          <span className="text-xs text-gray-500 dark:text-white/65 uppercase tracking-wider">
            {formattedDate || "Cliente Verificato"}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const GoogleReviews = ({ reviews, totalCount, averageRating }: GoogleReviewsProps = {}) => {
  const list = (reviews && reviews.length > 0 ? reviews : FALLBACK_REVIEWS).slice(0, 3);
  const showRatingBadge = averageRating && totalCount && totalCount >= 5;

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gold">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-black/30"></div>
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-black/80">Esperienze Reali</span>
            <div className="h-[1px] w-12 bg-black/30"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-black tracking-tighter mb-6">Dicono di Noi</h2>
          {showRatingBadge ? (
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="flex gap-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} size={22} className={i < Math.round(averageRating!) ? "fill-black text-black" : "text-black/20"} />
                ))}
              </div>
              <span className="text-2xl font-black text-black">{averageRating!.toFixed(1)}</span>
              <span className="text-sm text-black/70 font-medium">su Google · {totalCount} recensioni</span>
            </div>
          ) : (
            <p className="text-lg md:text-xl text-black/80 max-w-2xl mx-auto font-medium">
              La fiducia dei nostri clienti è il nostro traguardo più grande.
            </p>
          )}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {list.map((review, i) => (
            <ReviewCard key={`${review.author_name}-${i}`} review={review} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 px-10 py-5 rounded-full bg-gray-900 dark:bg-[#0a0a0a] text-gold text-sm md:text-base font-bold uppercase tracking-[0.15em] hover:bg-black transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)] hover:-translate-y-1"
          >
            <Star size={20} className="fill-gold group-hover:scale-110 transition-transform duration-300" />
            Condividi la tua esperienza
            <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GoogleReviews;

import { motion } from "framer-motion";
import { Star, ExternalLink, Quote } from "lucide-react";

const GOOGLE_REVIEW_URL = "https://g.page/r/CZKdxnQ8w8GFEBM/review";

const reviews = [
  {
    author_name: "Monica Fodde",
    rating: 5,
    content: (
      <p className="text-gray-700 dark:text-white/90 text-sm md:text-base leading-relaxed">
        Ho avuto un'<span className="text-[#C8A135] font-semibold">esperienza davvero molto positiva</span> con questo
        autonoleggio. Il personale è stato <span className="text-[#C8A135] font-semibold">gentile, professionale</span>{" "}
        e sempre disponibile a rispondere a qualsiasi domanda. La procedura di ritiro e riconsegna dell'auto è stata{" "}
        <span className="text-[#C8A135] font-semibold">veloce e senza complicazioni</span>.<br />
        <br />
        L'auto che mi è stata consegnata era pulita,{" "}
        <span className="text-[#C8A135] font-semibold">in perfette condizioni</span> e molto confortevole da guidare.
        Anche <span className="text-[#C8A135] font-semibold">i prezzi mi sono sembrati onesti</span> e ben spiegati fin
        dall'inizio, <span className="text-[#C8A135] font-semibold">senza sorprese</span>.
      </p>
    ),
  },
  {
    author_name: "Giada Bianchi",
    rating: 5,
    content: (
      <p className="text-gray-700 dark:text-white/90 text-sm md:text-base leading-relaxed">
        <span className="text-[#C8A135] font-semibold">Servizio impeccabile!</span> Ritiro e consegna{" "}
        <span className="text-[#C8A135] font-semibold">velocissimi</span>. Personale gentile e{" "}
        <span className="text-[#C8A135] font-semibold">prezzi chiari, senza sorprese</span>.
      </p>
    ),
  },
  {
    author_name: "Dario Deiana",
    rating: 5,
    content: (
      <p className="text-gray-700 dark:text-white/90 text-sm md:text-base leading-relaxed">
        <span className="text-[#C8A135] font-semibold">Professionalità e cortesia ai massimi livelli</span>. Consegna
        puntuale in aeroporto a Olbia,{" "}
        <span className="text-[#C8A135] font-semibold">auto pulitissima e nessuna sorpresa</span> sul prezzo.{" "}
        <span className="text-[#C8A135] font-bold">Top!</span>
      </p>
    ),
  },
];

const Stars = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {Array.from({ length: 5 }, (_, i) => (
      <Star key={i} size={20} className={i < rating ? "fill-[#C8A135] text-[#C8A135]" : "text-gray-300 dark:text-gray-700"} />
    ))}
  </div>
);

const ReviewCard = ({ review, index }: { review: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2, duration: 0.7, ease: "easeOut" }}
    className="relative bg-white dark:bg-[#0a0a0a] rounded-2xl p-8 md:p-10 border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex flex-col justify-between h-full group hover:border-[#C8A135]/40 transition-all duration-500"
  >
    <div className="absolute top-8 right-8 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500">
      <Quote size={80} className="text-[#C8A135] rotate-180" />
    </div>

    <div className="relative z-10 flex-grow">
      <Stars rating={review.rating} />
      <div className="mt-8 mb-10">{review.content}</div>
    </div>

    <div className="flex items-center gap-4 pt-6 border-t border-gray-200 dark:border-white/10 relative z-10">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C8A135] to-black flex items-center justify-center text-black font-black text-xl shadow-lg">
        {review.author_name.charAt(0)}
      </div>
      <div>
        <h4 className="font-bold text-lg text-[#C8A135] tracking-wide">{review.author_name}</h4>
        <span className="text-xs text-gray-400 dark:text-white/40 uppercase tracking-wider">Cliente Verificato</span>
      </div>
    </div>
  </motion.div>
);

const GoogleReviews = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#C8A135]">
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
          <p className="text-lg md:text-xl text-black/80 max-w-2xl mx-auto font-medium">
            La fiducia dei nostri clienti è il nostro traguardo più grande.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {reviews.map((review, i) => (
            <ReviewCard key={i} review={review} index={i} />
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
            className="group flex items-center gap-4 px-10 py-5 rounded-full bg-gray-900 dark:bg-[#0a0a0a] text-[#C8A135] text-sm md:text-base font-bold uppercase tracking-[0.15em] hover:bg-black transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)] hover:-translate-y-1"
          >
            <Star size={20} className="fill-[#C8A135] group-hover:scale-110 transition-transform duration-300" />
            Condividi la tua esperienza
            <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GoogleReviews;

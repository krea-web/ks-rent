import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";

const GOOGLE_REVIEW_URL = "https://g.page/r/CZKdxnQ8w8GFEBM/review";

const Stars = () => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }, (_, i) => (
      <Star key={i} size={16} className="fill-current text-[#C8A135]" />
    ))}
  </div>
);

const reviews = [
  {
    name: "Monica Fodde",
    content: (
      <p className="text-white text-sm leading-relaxed">
        Ho avuto un'<span className="text-[#C8A135] font-semibold">esperienza davvero molto positiva</span> con questo autonoleggio. Il personale è stato <span className="text-[#C8A135] font-semibold">gentile, professionale</span> e sempre disponibile a rispondere a qualsiasi domanda. La procedura di ritiro e riconsegna dell'auto è stata <span className="text-[#C8A135] font-semibold">veloce e senza complicazioni</span>.<br /><br />
        L'auto che mi è stata consegnata era pulita, <span className="text-[#C8A135] font-semibold">in perfette condizioni</span> e molto confortevole da guidare. Anche <span className="text-[#C8A135] font-semibold">i prezzi mi sono sembrati onesti</span> e ben spiegati fin dall'inizio, <span className="text-[#C8A135] font-semibold">senza sorprese</span>.<br /><br />
        Consiglio sicuramente questo autonoleggio a chiunque abbia bisogno di un servizio affidabile e di qualità.
      </p>
    ),
  },
  {
    name: "Giada Bianchi",
    content: (
      <p className="text-white text-sm leading-relaxed">
        <span className="text-[#C8A135] font-semibold">Servizio impeccabile!</span> Ritiro e consegna <span className="text-[#C8A135] font-semibold">velocissimi</span>. Personale gentile e <span className="text-[#C8A135] font-semibold">prezzi chiari, senza sorprese</span>.
      </p>
    ),
  },
  {
    name: "Dario Deiana",
    content: (
      <p className="text-white text-sm leading-relaxed">
        <span className="text-[#C8A135] font-semibold">Professionalità e cortesia ai massimi livelli</span>. Consegna puntuale in aeroporto a Olbia, <span className="text-[#C8A135] font-semibold">auto pulitissima e nessuna sorpresa</span> sul prezzo. <span className="text-[#C8A135] font-bold">Top!</span>
      </p>
    ),
  },
];

const GoogleReviews = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-[#C8A135]">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star size={20} className="fill-current text-black" />
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-black/70">
              Google Reviews
            </span>
            <Star size={20} className="fill-current text-black" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-black tracking-tight mb-4">
            Dicono di Noi
          </h2>
          <p className="text-base md:text-lg text-black/70 max-w-2xl mx-auto">
            La soddisfazione dei nostri clienti è la nostra priorità. Ecco cosa dicono di noi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-black rounded-2xl p-6 shadow-2xl border border-white/10"
            >
              <Stars />
              <div className="mt-3 mb-4">{review.content}</div>
              <span className="font-bold text-sm text-[#C8A135]">{review.name}</span>
            </motion.div>
          ))}
        </div>

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
            className="inline-flex items-center gap-3 px-10 py-4 rounded-xl bg-black text-[#C8A135] text-sm md:text-base font-bold uppercase tracking-wider hover:bg-black/90 transition-colors shadow-2xl border border-white/10"
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

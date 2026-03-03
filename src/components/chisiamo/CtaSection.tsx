import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const CtaSection = () => (
  <section className="py-16 md:py-32 bg-gradient-to-br from-gold to-yellow-500 text-black text-center px-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-black/5 pointer-events-none" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)] pointer-events-none" />

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="max-w-3xl mx-auto relative z-10"
    >
      <span className="inline-block py-1.5 px-4 rounded-full bg-black/10 border border-black/20 text-black text-xs uppercase tracking-[0.3em] font-bold mb-6">
        Il tuo viaggio inizia qui
      </span>

      <h2 className="text-3xl sm:text-5xl md:text-7xl font-display font-black mb-6 leading-tight text-black break-words">
        Pronto a Partire?
      </h2>

      <p className="text-black/80 mb-10 md:mb-12 font-medium text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
        Scegli il tuo veicolo, seleziona le date e prenota in meno di due minuti. Nessun pagamento anticipato
        richiesto. L'asfalto sardo ti aspetta.
      </p>

      <Link
        to="/prenotaora"
        className="inline-flex items-center justify-center gap-3 md:gap-4 bg-[#050505] text-white px-12 sm:px-16 py-6 sm:py-8 rounded-full font-black uppercase tracking-widest text-base sm:text-xl hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 shadow-2xl group min-h-[48px] relative z-20"
      >
        Noleggia Ora
        <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform text-gold group-hover:text-black" />
      </Link>

      <p className="mt-6 text-black/50 text-sm font-medium">
        Conferma immediata, cancellazione gratuita.
      </p>
    </motion.div>
  </section>
);

export default CtaSection;

import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const StorySection = () => (
  <section className="py-16 md:py-32 px-4 md:px-12 lg:px-24 bg-[#050505] relative">
    <div className="max-w-3xl mx-auto text-center space-y-10 md:space-y-16">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight"
      >
        Siamo nati dall'asfalto sardo e dalla voglia di{" "}
        <span className="text-gold">cambiare le regole.</span>
      </motion.h2>

      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="text-base md:text-lg text-white/60 font-light leading-relaxed"
      >
        Abbiamo vissuto in prima persona la frustrazione dei noleggi tradizionali: code infinite,
        depositi bloccati e clausole nascoste.
      </motion.p>

      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="text-base md:text-lg text-white/60 font-light leading-relaxed"
      >
        KS Rent è la nostra risposta: un servizio basato sulla fiducia totale e sulla qualità
        assoluta. Atterri, prendi le chiavi, parti.
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="pt-6 md:pt-10"
      >
        <div className="mx-auto max-w-2xl border-l-2 border-gold pl-6 md:pl-8 py-4 text-left">
          <p className="text-white text-xl sm:text-2xl md:text-3xl font-display font-medium italic leading-snug">
            "Non affittiamo semplicemente veicoli, ma ti consegniamo la chiave per vivere l'isola
            esattamente come va vissuta: in totale libertà."
          </p>
          <span className="block mt-6 text-sm font-bold tracking-widest uppercase text-gold">
            I Fondatori
          </span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default StorySection;

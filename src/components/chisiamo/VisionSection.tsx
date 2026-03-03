import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const VisionSection = () => (
  <section className="py-16 md:py-24 bg-[#050505] relative overflow-hidden">
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

    <div className="w-full max-w-7xl mx-auto px-4 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="lg:col-span-5 relative"
        >
          <div className="aspect-[3/4] overflow-hidden rounded-[2rem] border border-white/5">
            <img
              src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80"
              alt="Strada Sarda"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 md:-bottom-8 md:-right-8 w-36 h-36 md:w-48 md:h-48 bg-[#0a0a0a] border border-white/10 rounded-3xl hidden md:flex items-center justify-center p-4 md:p-6 shadow-2xl">
            <p className="text-xs text-gold uppercase tracking-widest font-semibold text-center leading-loose">
              DAL 2025<br />In Sardegna
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="lg:col-span-7"
        >
          <h2 className="text-gold font-semibold tracking-[0.3em] uppercase text-xs mb-6 md:mb-8">La Nostra Visione</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 md:mb-8 break-words">
            Non siamo nati per essere l'ennesima agenzia.
          </h3>
          <div className="space-y-5 md:space-y-6 text-white/60 font-light text-base md:text-lg">
            <p>
              Siamo nati per essere il partner che avremmo sempre voluto incontrare nei nostri viaggi. KS Rent nasce
              da una frustrazione comune: la burocrazia infinita del noleggio tradizionale.
            </p>
            <p>
              Abbiamo deciso di cambiare le regole. Il nostro focus è la Costa Smeralda e il nostro obiettivo è
              farti iniziare la vacanza dal momento esatto in cui atterri a Olbia.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default VisionSection;

import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const HeroChiSiamo = () => (
  <section className="relative min-h-[70vh] md:min-h-[85vh] flex flex-col justify-end pb-16 md:pb-24 px-4 md:px-12 lg:px-24">
    <div className="absolute inset-0 z-0">
      <img
        src="https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/BMW%20M2%201.jpg"
        alt="Supercar posteriore"
        className="w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent pointer-events-none" />
    </div>

    <div className="relative z-10 max-w-full md:max-w-5xl">
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <div className="flex items-center gap-4 mb-6 md:mb-8">
          <div className="h-[1px] w-12 bg-gold" />
          <span className="text-gold text-xs sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.4em] font-semibold">
            KS Rent S.R.L.
          </span>
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-black leading-tight md:leading-[1.05] tracking-tight mb-6 md:mb-8 break-words">
          Redefiniamo <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">la Libertà.</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl font-light leading-relaxed">
          Oltre il semplice noleggio. Un'esperienza di pura libertà, disegnata per la Costa Smeralda.
        </p>
      </motion.div>
    </div>
  </section>
);

export default HeroChiSiamo;

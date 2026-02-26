import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />

    <div className="relative z-10 container mx-auto px-4 text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-gold text-sm uppercase tracking-[0.3em] font-semibold mb-4"
      >
        Autonoleggio Premium
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-5xl md:text-7xl lg:text-8xl font-black font-display leading-tight"
      >
        Guida il tuo <br />
        <span className="text-gradient-gold">stile di vita</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto"
      >
        Noleggia auto, moto e quad con la sicurezza e l'eleganza che meriti.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Link
          to="/prenotaora"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-md gradient-gold text-primary-foreground font-bold uppercase tracking-wider text-sm hover:opacity-90 transition-opacity glow-gold"
        >
          Prenota Ora <ArrowRight size={18} />
        </Link>
        <Link
          to="/chisiamo"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-md border border-gold text-gold font-bold uppercase tracking-wider text-sm hover:bg-gold/10 transition-colors"
        >
          Scopri di più
        </Link>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;

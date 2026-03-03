import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";
const HERO_VIDEO_URL = "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/asset/HERO.mp4";

const HeroSection = () => (
  <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden">
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
      src={HERO_VIDEO_URL}
    />

    <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background pointer-events-none" />

    <div className="relative z-10 w-full max-w-full px-4 md:px-8 text-center">
      <motion.img
        src={logo}
        alt="KS Rent"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="h-16 sm:h-20 md:h-28 w-auto mx-auto mb-6"
      />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-gold text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-semibold mb-4"
      >
        AUTONOLEGGIO IN COSTA SMERALDA
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2"
      >
        <Link
          to="/prenotaora"
          className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 rounded-md gradient-gold text-primary-foreground font-bold uppercase tracking-wider text-sm hover:opacity-90 transition-opacity glow-gold min-h-[48px] relative z-20"
        >
          Prenota Ora <ArrowRight size={18} />
        </Link>
        <Link
          to="/chisiamo"
          className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 rounded-md border border-gold text-gold font-bold uppercase tracking-wider text-sm hover:bg-gold/10 transition-colors min-h-[48px] relative z-20"
        >
          Scopri di più
        </Link>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;

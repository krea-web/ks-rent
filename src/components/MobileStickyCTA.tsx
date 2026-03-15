import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const MobileStickyCTA = () => (
  <motion.div
    initial={{ y: 100 }}
    animate={{ y: 0 }}
    transition={{ delay: 0.5, type: "spring", stiffness: 300, damping: 30 }}
    className="fixed bottom-0 left-0 w-full z-[9998] lg:hidden bg-black/80 backdrop-blur-xl border-t border-white/10 shadow-[0_-4px_20px_rgba(0,0,0,0.5)] pb-[env(safe-area-inset-bottom)]"
  >
    <div className="px-4 py-3">
      <Link
        to="/prenotaora"
        className="flex items-center justify-center gap-2 w-full py-4 rounded-lg bg-gold font-sans font-black text-sm uppercase tracking-[0.2em] text-primary-foreground hover:brightness-110 transition-all duration-300 shadow-[0_0_20px_hsl(var(--gold)/0.3)] min-h-[52px]"
      >
        <span className="pointer-events-none">Prenota Ora</span>
        <ArrowRight size={16} className="pointer-events-none" />
      </Link>
    </div>
  </motion.div>
);

export default MobileStickyCTA;

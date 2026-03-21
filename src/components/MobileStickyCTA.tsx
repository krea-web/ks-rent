import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CalendarDays, MessageCircle } from "lucide-react";

const MobileStickyCTA = () => (
  <motion.div
    initial={{ y: 100 }}
    animate={{ y: 0 }}
    transition={{ delay: 0.5, type: "spring", stiffness: 300, damping: 30 }}
    className="fixed bottom-0 left-0 w-full z-[9998] lg:hidden bg-black/80 backdrop-blur-xl border-t border-white/10 shadow-[0_-4px_20px_rgba(0,0,0,0.5)] pb-[env(safe-area-inset-bottom)]"
  >
    <div className="px-3 py-2.5 grid grid-cols-2 gap-[2px]">
      <Link
        to="/prenotaora"
        className="flex items-center justify-center gap-2 h-14 rounded-l-xl bg-gold font-sans font-black text-sm uppercase tracking-[0.15em] text-primary-foreground hover:brightness-110 transition-all duration-300"
      >
        <CalendarDays size={18} className="pointer-events-none" />
        <span className="pointer-events-none">Prenota</span>
      </Link>
      <a
        href="https://wa.me/393446107071?text=Ciao%2C%20vorrei%20prenotare%20un%20veicolo"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 h-14 rounded-r-xl bg-[#25D366] font-sans font-black text-sm uppercase tracking-[0.15em] text-white hover:bg-[#20bd5a] transition-all duration-300"
      >
        <MessageCircle size={18} className="pointer-events-none" />
        <span className="pointer-events-none">WhatsApp</span>
      </a>
    </div>
  </motion.div>
);

export default MobileStickyCTA;

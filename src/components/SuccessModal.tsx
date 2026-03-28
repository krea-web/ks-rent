import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Star, Home } from "lucide-react";
import { Link } from "react-router-dom";

const GOOGLE_REVIEW_URL = "https://g.page/r/CZKdxnQ8w8GFEBM/review";

interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
}

const SuccessModal = ({ open, onClose }: SuccessModalProps) => (
  <AnimatePresence>
    {open && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" onClick={onClose} />

        {/* Modal */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="relative z-10 w-full max-w-md bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-gold/30 rounded-2xl p-8 md:p-10 text-center shadow-[0_0_60px_rgba(212,175,55,0.15)]"
        >
          {/* Glow effect */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-gold/20 rounded-full blur-[80px] pointer-events-none" />

          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 400 }}
            className="mx-auto mb-6 w-20 h-20 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center"
          >
            <CheckCircle2 className="w-10 h-10 text-gold" />
          </motion.div>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-3 tracking-tight">
            Richiesta Ricevuta
          </h2>

          {/* Description */}
          <p className="text-sm md:text-base text-white/60 leading-relaxed mb-8">
            La tua prenotazione è confermata! Aiutaci a crescere lasciando una recensione su Google.
          </p>

          {/* Divider */}
          <div className="w-16 h-px bg-gold/40 mx-auto mb-8" />

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              onClick={onClose}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-white/70 text-sm font-semibold uppercase tracking-wider hover:border-white/30 hover:text-white transition-all"
            >
              <Home size={14} />
              Torna alla Home
            </Link>
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-gold to-[hsl(43,56%,65%)] text-black text-sm font-bold uppercase tracking-wider hover:scale-105 transition-transform"
            >
              <Star size={14} />
              Lascia una Recensione
            </a>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default SuccessModal;

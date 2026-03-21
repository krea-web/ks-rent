import { useRef, useState, useEffect, useCallback } from "react";
import SignatureCanvas from "react-signature-canvas";
import { motion, AnimatePresence } from "framer-motion";
import { X, PenTool, RotateCcw, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const N8N_BASE = "https://n8n.kreareweb.com/webhook/ksrent";

interface SignatureModalProps {
  open: boolean;
  bookingId: string;
  onClose: () => void;
  onSuccess: () => void;
}

const SignatureModal = ({ open, bookingId, onClose, onSuccess }: SignatureModalProps) => {
  const sigRef = useRef<SignatureCanvas>(null);
  const [signing, setSigning] = useState(false);
  const [hasSigned, setHasSigned] = useState(false);

  // Reset state when modal opens
  useEffect(() => {
    if (open) {
      setHasSigned(false);
      setSigning(false);
    }
  }, [open]);

  const handleEnd = useCallback(() => {
    if (sigRef.current && !sigRef.current.isEmpty()) {
      setHasSigned(true);
    }
  }, []);

  const handleClear = () => {
    sigRef.current?.clear();
    setHasSigned(false);
  };

  const handleConfirm = async () => {
    if (!sigRef.current || sigRef.current.isEmpty()) {
      toast.error("Inserisci la tua firma prima di confermare.");
      return;
    }

    const base64 = sigRef.current.getCanvas().toDataURL("image/png");
    setSigning(true);

    try {
      const res = await fetch(`${N8N_BASE}/sign`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ booking_id: bookingId, signature_image: base64 }),
      });

      if (!res.ok) throw new Error("Errore firma");

      toast.success("Contratto firmato e inviato!");
      onSuccess();
    } catch {
      toast.error("Errore durante l'invio della firma. Riprova.");
    } finally {
      setSigning(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-full max-w-lg bg-[#0a0a0a] border border-gold/30 rounded-2xl shadow-[0_0_60px_rgba(212,175,55,0.1)] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <PenTool className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-white">Firma Digitale</h3>
                  <p className="text-xs text-white/50">Firma qui per accettare il contratto</p>
                </div>
              </div>
              <button onClick={onClose} className="text-white/40 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Canvas */}
            <div className="p-6">
              <div className="bg-white rounded-xl overflow-hidden border-2 border-gold/20">
                <SignatureCanvas
                  ref={sigRef}
                  penColor="#000"
                  onEnd={handleEnd}
                  canvasProps={{
                    className: "w-full",
                    style: { width: "100%", height: 200 },
                  }}
                />
              </div>
              <p className={`text-center text-xs mt-2 italic ${hasSigned ? 'text-green-400/60' : 'text-red-400/70'}`}>
                {hasSigned ? "✓ Firma inserita" : "⚠ La firma è obbligatoria per procedere"}
              </p>
              <p className="text-center text-xs mt-1 text-white/30 italic">
                📷 La tua data e luogo di nascita verranno estratti automaticamente dalla foto della patente che hai caricato.
              </p>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between p-6 border-t border-white/10 gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={handleClear}
                className="border-white/10 text-white/60 hover:text-white hover:bg-white/5"
              >
                <RotateCcw size={14} className="mr-2" /> Cancella
              </Button>
              <Button
                type="button"
                onClick={handleConfirm}
                disabled={signing || !hasSigned}
                className={`font-bold uppercase tracking-wider px-8 transition-all ${
                  hasSigned
                    ? "bg-gold text-black hover:bg-yellow-400"
                    : "bg-white/10 text-white/30 cursor-not-allowed"
                }`}
              >
                {signing ? (
                  <Loader2 size={16} className="animate-spin mr-2" />
                ) : null}
                {signing ? "Invio..." : "Firma e Conferma"}
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SignatureModal;

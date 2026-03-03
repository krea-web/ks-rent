import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { Loader2, FileUp } from "lucide-react";

const STATUSES = [
  { value: "pending_signature", label: "In Attesa di Firma" },
  { value: "signed", label: "Firmato" },
  { value: "active", label: "Attivo" },
  { value: "completed", label: "Completato" },
  { value: "cancelled", label: "Annullato" },
];

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
  booking: any;
  onSaved: () => void;
}

const BookingModal = ({ open, onClose, booking, onSaved }: BookingModalProps) => {
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState(booking?.status || "pending_signature");

  const handleStatusChange = async (newStatus: string) => {
    setStatus(newStatus);
    setSaving(true);
    const { error } = await supabase.from("bookings").update({ status: newStatus }).eq("id", booking.id);
    setSaving(false);

    if (error) {
      toast.error("Errore: " + error.message);
      return;
    }
    toast.success("Stato aggiornato!");
    onSaved();
  };

  if (!booking) return null;

  const vehicleName = booking.vehicles
    ? `${booking.vehicles.make} ${booking.vehicles.model}`
    : "Veicolo eliminato";

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="bg-[#0a0a0a] border-white/10 text-white max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-gold font-display text-xl">Dettaglio Pratica</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* Read-only summary */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-white/40 block text-xs uppercase tracking-wider mb-1">Cliente</span>
              <span className="font-bold">{booking.customer_name} {booking.customer_surname}</span>
            </div>
            <div>
              <span className="text-white/40 block text-xs uppercase tracking-wider mb-1">Veicolo</span>
              <span className="font-bold">{vehicleName}</span>
            </div>
            <div>
              <span className="text-white/40 block text-xs uppercase tracking-wider mb-1">Periodo</span>
              <span>{booking.start_date ? new Date(booking.start_date).toLocaleDateString("it-IT") : "N/A"} — {booking.end_date ? new Date(booking.end_date).toLocaleDateString("it-IT") : "N/A"}</span>
            </div>
            <div>
              <span className="text-white/40 block text-xs uppercase tracking-wider mb-1">Totale</span>
              <span className="font-bold text-gold">€{(booking.total_price || 0).toLocaleString("it-IT")}</span>
            </div>
          </div>

          <div className="border-t border-white/10 pt-4 space-y-2">
            <Label className="text-white/60">Stato Contratto</Label>
            <Select value={status} onValueChange={handleStatusChange}>
              <SelectTrigger className="bg-white/5 border-white/10 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#0a0a0a] border-white/10 text-white">
                {STATUSES.map((s) => (
                  <SelectItem key={s.value} value={s.value} className="focus:bg-white/10 focus:text-gold">{s.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <DialogFooter className="flex-col sm:flex-row gap-2">
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-white/50 hover:text-white hover:border-white/20 transition-colors">
            <FileUp size={14} /> Carica Contratto PDF
          </button>
          <button onClick={onClose} className="px-5 py-2 bg-gold text-black rounded-full font-bold text-sm uppercase tracking-wider hover:bg-yellow-400 transition-colors shadow-[0_0_15px_rgba(212,175,55,0.3)]">
            {saving ? <Loader2 size={14} className="animate-spin" /> : "Chiudi"}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;

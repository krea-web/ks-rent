import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

interface MaintenanceModalProps {
  open: boolean;
  onClose: () => void;
  vehicle: any;
  onSaved: () => void;
}

const MaintenanceModal = ({ open, onClose, vehicle, onSaved }: MaintenanceModalProps) => {
  const [saving, setSaving] = useState(false);
  const [km, setKm] = useState(0);
  const [revDate, setRevDate] = useState("");

  useEffect(() => {
    if (vehicle) {
      setKm(vehicle.km_current || 0);
      setRevDate(vehicle.next_revision_date || "");
    }
  }, [vehicle, open]);

  const handleSubmit = async () => {
    setSaving(true);
    const { error } = await supabase.from("vehicles").update({
      km_current: Number(km),
      next_revision_date: revDate || null,
    }).eq("id", vehicle.id);
    setSaving(false);

    if (error) {
      toast.error("Errore: " + error.message);
      return;
    }
    toast.success(`Dati di ${vehicle.make} ${vehicle.model} aggiornati!`);
    onSaved();
    onClose();
  };

  if (!vehicle) return null;

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="bg-[#0a0a0a] border-white/10 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-gold font-display text-xl">
            Manutenzione — {vehicle.make} {vehicle.model}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label className="text-white/60">Chilometri Attuali</Label>
            <Input type="number" value={km} onChange={(e) => setKm(Number(e.target.value))}
              className="bg-white/5 border-white/10 text-white" />
          </div>
          <div className="space-y-2">
            <Label className="text-white/60">Prossima Revisione</Label>
            <Input type="date" value={revDate} onChange={(e) => setRevDate(e.target.value)}
              className="bg-white/5 border-white/10 text-white" />
          </div>
        </div>

        <DialogFooter>
          <button onClick={onClose} className="px-4 py-2 text-sm text-white/50 hover:text-white transition-colors">Annulla</button>
          <button onClick={handleSubmit} disabled={saving}
            className="flex items-center gap-2 bg-gold text-white px-5 py-2 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-yellow-400 transition-colors shadow-[0_0_15px_rgba(212,175,55,0.3)] disabled:opacity-50">
            {saving && <Loader2 size={14} className="animate-spin" />}
            Salva
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MaintenanceModal;

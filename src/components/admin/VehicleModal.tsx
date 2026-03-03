import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const CATEGORIES = ["City Car", "Supercar/Premium", "Scooter/Moto", "Quad"];

interface VehicleModalProps {
  open: boolean;
  onClose: () => void;
  vehicle?: any;
  onSaved: () => void;
}

const VehicleModal = ({ open, onClose, vehicle, onSaved }: VehicleModalProps) => {
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    make: "",
    model: "",
    category: "City Car",
    license_plate: "",
    daily_rate: 0,
    km_current: 0,
    next_revision_date: "",
    available: true,
  });

  useEffect(() => {
    if (vehicle) {
      setForm({
        make: vehicle.make || "",
        model: vehicle.model || "",
        category: vehicle.category || "City Car",
        license_plate: vehicle.license_plate || "",
        daily_rate: vehicle.daily_rate || 0,
        km_current: vehicle.km_current || 0,
        next_revision_date: vehicle.next_revision_date || "",
        available: vehicle.available ?? true,
      });
    } else {
      setForm({
        make: "", model: "", category: "City Car", license_plate: "",
        daily_rate: 0, km_current: 0, next_revision_date: "", available: true,
      });
    }
  }, [vehicle, open]);

  const handleSubmit = async () => {
    if (!form.make || !form.model) {
      toast.error("Marca e Modello sono obbligatori.");
      return;
    }
    setSaving(true);
    const payload = { ...form, daily_rate: Number(form.daily_rate), km_current: Number(form.km_current) };
    if (vehicle?.id) (payload as any).id = vehicle.id;

    const { error } = await supabase.from("vehicles").upsert(payload);
    setSaving(false);

    if (error) {
      toast.error("Errore nel salvataggio: " + error.message);
      return;
    }
    toast.success(vehicle ? "Veicolo aggiornato!" : "Veicolo aggiunto!");
    onSaved();
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="bg-[#0a0a0a] border-white/10 text-white max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-gold font-display text-xl">
            {vehicle ? "Modifica Veicolo" : "Aggiungi Veicolo"}
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-4 py-4">
          <div className="space-y-2">
            <Label className="text-white/60">Marca</Label>
            <Input value={form.make} onChange={(e) => setForm({ ...form, make: e.target.value })}
              className="bg-white/5 border-white/10 text-white" placeholder="Es. BMW" />
          </div>
          <div className="space-y-2">
            <Label className="text-white/60">Modello</Label>
            <Input value={form.model} onChange={(e) => setForm({ ...form, model: e.target.value })}
              className="bg-white/5 border-white/10 text-white" placeholder="Es. Serie 3" />
          </div>
          <div className="space-y-2">
            <Label className="text-white/60">Categoria</Label>
            <Select value={form.category} onValueChange={(v) => setForm({ ...form, category: v })}>
              <SelectTrigger className="bg-white/5 border-white/10 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#0a0a0a] border-white/10 text-white">
                {CATEGORIES.map((c) => (
                  <SelectItem key={c} value={c} className="focus:bg-white/10 focus:text-gold">{c}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label className="text-white/60">Targa</Label>
            <Input value={form.license_plate} onChange={(e) => setForm({ ...form, license_plate: e.target.value })}
              className="bg-white/5 border-white/10 text-white" placeholder="AB123CD" />
          </div>
          <div className="space-y-2">
            <Label className="text-white/60">Tariffa Giornaliera (€)</Label>
            <Input type="number" value={form.daily_rate} onChange={(e) => setForm({ ...form, daily_rate: Number(e.target.value) })}
              className="bg-white/5 border-white/10 text-white" />
          </div>
          <div className="space-y-2">
            <Label className="text-white/60">Chilometri Attuali</Label>
            <Input type="number" value={form.km_current} onChange={(e) => setForm({ ...form, km_current: Number(e.target.value) })}
              className="bg-white/5 border-white/10 text-white" />
          </div>
          <div className="space-y-2">
            <Label className="text-white/60">Data Revisione</Label>
            <Input type="date" value={form.next_revision_date} onChange={(e) => setForm({ ...form, next_revision_date: e.target.value })}
              className="bg-white/5 border-white/10 text-white" />
          </div>
          <div className="flex items-end gap-3 pb-1">
            <Switch checked={form.available} onCheckedChange={(v) => setForm({ ...form, available: v })}
              className="data-[state=checked]:bg-green-500" />
            <Label className="text-white/60">{form.available ? "Disponibile" : "Non disponibile"}</Label>
          </div>
        </div>

        <DialogFooter>
          <button onClick={onClose} className="px-4 py-2 text-sm text-white/50 hover:text-white transition-colors">Annulla</button>
          <button onClick={handleSubmit} disabled={saving}
            className="flex items-center gap-2 bg-gold text-black px-5 py-2 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-yellow-400 transition-colors shadow-[0_0_15px_rgba(212,175,55,0.3)] disabled:opacity-50">
            {saving && <Loader2 size={14} className="animate-spin" />}
            {vehicle ? "Salva Modifiche" : "Aggiungi"}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default VehicleModal;

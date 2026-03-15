import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const CATEGORIES = ["City Car", "SUV/Premium", "Supercar/Premium", "Scooter/Moto", "Quad"];
const MONTH_FIELDS = [
  { key: "rate_april", label: "Aprile" },
  { key: "rate_may", label: "Maggio" },
  { key: "rate_june", label: "Giugno" },
  { key: "rate_july", label: "Luglio" },
  { key: "rate_august", label: "Agosto" },
  { key: "rate_september", label: "Settembre" },
  { key: "rate_october", label: "Ottobre" },
] as const;

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
    image_url: "",
    available: true,
    rate_april: 0,
    rate_may: 0,
    rate_june: 0,
    rate_july: 0,
    rate_august: 0,
    rate_september: 0,
    rate_october: 0,
  });

  useEffect(() => {
    if (vehicle) {
      setForm({
        make: vehicle.make || "",
        model: vehicle.model || "",
        category: vehicle.category || "City Car",
        license_plate: vehicle.license_plate || "",
        daily_rate: vehicle.daily_rate || 0,
        image_url: vehicle.image_url || "",
        available: vehicle.available ?? true,
        rate_april: vehicle.rate_april || 0,
        rate_may: vehicle.rate_may || 0,
        rate_june: vehicle.rate_june || 0,
        rate_july: vehicle.rate_july || 0,
        rate_august: vehicle.rate_august || 0,
        rate_september: vehicle.rate_september || 0,
        rate_october: vehicle.rate_october || 0,
      });
    } else {
      setForm({
        make: "", model: "", category: "City Car", license_plate: "",
        daily_rate: 0, image_url: "", available: true,
        rate_april: 0, rate_may: 0, rate_june: 0, rate_july: 0,
        rate_august: 0, rate_september: 0, rate_october: 0,
      });
    }
  }, [vehicle, open]);

  const handleSubmit = async () => {
    if (!form.make || !form.model) {
      toast.error("Marca e Modello sono obbligatori.");
      return;
    }
    setSaving(true);

    const payload = {
      make: form.make,
      model: form.model,
      category: form.category,
      license_plate: form.license_plate,
      daily_rate: Number(form.daily_rate),
      image_url: form.image_url || null,
      available: form.available,
      rate_april: Number(form.rate_april) || null,
      rate_may: Number(form.rate_may) || null,
      rate_june: Number(form.rate_june) || null,
      rate_july: Number(form.rate_july) || null,
      rate_august: Number(form.rate_august) || null,
      rate_september: Number(form.rate_september) || null,
      rate_october: Number(form.rate_october) || null,
    };

    let error;
    if (vehicle?.id) {
      ({ error } = await supabase.from("vehicles").update(payload).eq("id", vehicle.id));
    } else {
      ({ error } = await supabase.from("vehicles").insert(payload));
    }
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
      <DialogContent className="bg-[#0a0a0a] border-white/10 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-[#C8A135] font-display text-xl">
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
                  <SelectItem key={c} value={c} className="focus:bg-white/10 focus:text-[#C8A135]">{c}</SelectItem>
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
            <Label className="text-white/60">Tariffa Base (€/giorno)</Label>
            <Input type="number" value={form.daily_rate} onChange={(e) => setForm({ ...form, daily_rate: Number(e.target.value) })}
              className="bg-white/5 border-white/10 text-white" />
          </div>
          <div className="space-y-2">
            <Label className="text-white/60">URL Immagine</Label>
            <Input value={form.image_url} onChange={(e) => setForm({ ...form, image_url: e.target.value })}
              className="bg-white/5 border-white/10 text-white" placeholder="https://..." />
          </div>
          <div className="flex items-end gap-3 pb-1">
            <Switch checked={form.available} onCheckedChange={(v) => setForm({ ...form, available: v })}
              className="data-[state=checked]:bg-green-500" />
            <Label className="text-white/60">{form.available ? "Disponibile" : "Non disponibile"}</Label>
          </div>
        </div>

        {/* Tariffe mensili */}
        <div className="border-t border-white/10 pt-4">
          <h4 className="text-[#C8A135] font-bold text-sm uppercase tracking-wider mb-3">Tariffe Mensili (€/giorno)</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {MONTH_FIELDS.map(({ key, label }) => (
              <div key={key} className="space-y-1">
                <Label className="text-white/40 text-xs">{label}</Label>
                <Input type="number" value={(form as any)[key]}
                  onChange={(e) => setForm({ ...form, [key]: Number(e.target.value) })}
                  className="bg-white/5 border-white/10 text-white h-9 text-sm" />
              </div>
            ))}
          </div>
        </div>

        <DialogFooter>
          <button onClick={onClose} className="px-4 py-2 text-sm text-white/50 hover:text-white transition-colors">Annulla</button>
          <button onClick={handleSubmit} disabled={saving}
            className="flex items-center gap-2 bg-[#C8A135] text-black px-5 py-2 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-yellow-400 transition-colors shadow-[0_0_15px_rgba(200,161,53,0.3)] disabled:opacity-50">
            {saving && <Loader2 size={14} className="animate-spin" />}
            {vehicle ? "Salva Modifiche" : "Aggiungi"}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default VehicleModal;

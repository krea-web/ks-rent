import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { Loader2, Upload, X, Image as ImageIcon } from "lucide-react";
import { uploadToBucket } from "@/lib/adminStorage";
import { logAdminAction } from "@/lib/audit";

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

function suggestGroupSlug(make: string, model: string): string {
  const raw = `${make} ${model}`.toLowerCase().trim();
  return raw.replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

const VehicleModal = ({ open, onClose, vehicle, onSaved }: VehicleModalProps) => {
  const [saving, setSaving] = useState(false);
  const [uploadingImg, setUploadingImg] = useState<"main" | "transparent" | "gallery" | null>(null);
  const [form, setForm] = useState({
    make: "",
    model: "",
    category: "City Car",
    license_plate: "",
    daily_rate: 0,
    color: "",
    image_url: "",
    transparent_image_url: "",
    gallery_urls: [] as string[],
    group_slug: "",
    is_primary_variant: false,
    is_archived: false,
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
        color: vehicle.color || "",
        image_url: vehicle.image_url || "",
        transparent_image_url: vehicle.transparent_image_url || "",
        gallery_urls: Array.isArray(vehicle.gallery_urls) ? vehicle.gallery_urls : [],
        group_slug: vehicle.group_slug || "",
        is_primary_variant: !!vehicle.is_primary_variant,
        is_archived: !!vehicle.is_archived,
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
        daily_rate: 0, color: "", image_url: "", transparent_image_url: "", gallery_urls: [],
        group_slug: "", is_primary_variant: false, is_archived: false, available: true,
        rate_april: 0, rate_may: 0, rate_june: 0, rate_july: 0,
        rate_august: 0, rate_september: 0, rate_october: 0,
      });
    }
  }, [vehicle, open]);

  const handleUpload = async (kind: "main" | "transparent" | "gallery", file: File) => {
    setUploadingImg(kind);
    try {
      const slug = form.group_slug || suggestGroupSlug(form.make, form.model);
      const url = await uploadToBucket("vehicles", file, slug);
      if (kind === "main") setForm((f) => ({ ...f, image_url: url }));
      else if (kind === "transparent") setForm((f) => ({ ...f, transparent_image_url: url }));
      else setForm((f) => ({ ...f, gallery_urls: [...f.gallery_urls, url] }));
      toast.success("Immagine caricata");
    } catch (err: any) {
      toast.error("Upload fallito: " + (err?.message || "controlla che il bucket 'vehicles' esista"));
    } finally {
      setUploadingImg(null);
    }
  };

  const removeGalleryImage = (url: string) => {
    setForm((f) => ({ ...f, gallery_urls: f.gallery_urls.filter((u) => u !== url) }));
  };

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
      license_plate: form.license_plate || null,
      daily_rate: Number(form.daily_rate) || null,
      color: form.color || null,
      image_url: form.image_url || null,
      transparent_image_url: form.transparent_image_url || null,
      gallery_urls: form.gallery_urls,
      group_slug: form.group_slug || suggestGroupSlug(form.make, form.model),
      is_primary_variant: form.is_primary_variant,
      is_archived: form.is_archived,
      available: form.available,
      rate_april: Number(form.rate_april) || null,
      rate_may: Number(form.rate_may) || null,
      rate_june: Number(form.rate_june) || null,
      rate_july: Number(form.rate_july) || null,
      rate_august: Number(form.rate_august) || null,
      rate_september: Number(form.rate_september) || null,
      rate_october: Number(form.rate_october) || null,
    };

    let error: any;
    let recordId: string | null = vehicle?.id ?? null;
    if (vehicle?.id) {
      ({ error } = await supabase.from("vehicles").update(payload).eq("id", vehicle.id));
    } else {
      const { data, error: insertErr } = await supabase.from("vehicles").insert(payload).select("id").single();
      error = insertErr;
      recordId = data?.id ?? null;
    }
    setSaving(false);

    if (error) {
      toast.error("Errore nel salvataggio: " + error.message);
      return;
    }
    await logAdminAction({
      action: vehicle?.id ? "update" : "create",
      table: "vehicles",
      recordId,
      diff: payload,
    });
    toast.success(vehicle ? "Veicolo aggiornato!" : "Veicolo aggiunto!");
    onSaved();
    onClose();
  };

  const groupSlugSuggestion = suggestGroupSlug(form.make, form.model);

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="bg-[#0a0a0a] border-white/10 text-white max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-[#C8A135] font-display text-xl">
            {vehicle ? "Modifica Veicolo" : "Aggiungi Veicolo"}
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
          <div className="space-y-2">
            <Label className="text-white/60">Marca</Label>
            <Input value={form.make} onChange={(e) => setForm({ ...form, make: e.target.value })}
              className="bg-white/5 border-white/10 text-white" placeholder="Es. Audi" />
          </div>
          <div className="space-y-2">
            <Label className="text-white/60">Modello</Label>
            <Input value={form.model} onChange={(e) => setForm({ ...form, model: e.target.value })}
              className="bg-white/5 border-white/10 text-white" placeholder="Es. RS3" />
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
            <Label className="text-white/60">Colore</Label>
            <Input
              value={form.color}
              onChange={(e) => setForm({ ...form, color: e.target.value })}
              className="bg-white/5 border-white/10 text-white"
              placeholder="Es. Grigia, Verde"
            />
          </div>
        </div>

        {/* Grouping & visibilita */}
        <div className="border-t border-white/10 pt-4 space-y-4">
          <h4 className="text-[#C8A135] font-bold text-sm uppercase tracking-wider">Pagina veicolo / Grouping</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-white/60">Group slug (rotta /flotta/[slug])</Label>
              <div className="flex gap-2">
                <Input
                  value={form.group_slug}
                  onChange={(e) => setForm({ ...form, group_slug: e.target.value })}
                  className="bg-white/5 border-white/10 text-white"
                  placeholder={groupSlugSuggestion || "es. audi-rs3"}
                />
                {groupSlugSuggestion && groupSlugSuggestion !== form.group_slug && (
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, group_slug: groupSlugSuggestion })}
                    className="text-xs text-[#C8A135] border border-[#C8A135]/30 px-3 rounded-lg whitespace-nowrap hover:bg-[#C8A135]/10"
                  >
                    Auto: {groupSlugSuggestion}
                  </button>
                )}
              </div>
              <p className="text-xs text-white/40">
                Veicoli con lo stesso group_slug condividono la stessa pagina (es. RS3 grigia + RS3 verde).
              </p>
            </div>
            <div className="flex flex-col gap-3 pt-2">
              <div className="flex items-center gap-3">
                <Switch checked={form.is_primary_variant} onCheckedChange={(v) => setForm({ ...form, is_primary_variant: v })}
                  className="data-[state=checked]:bg-[#C8A135]" />
                <Label className="text-white/60">Variante primaria del gruppo (immagine hero)</Label>
              </div>
              <div className="flex items-center gap-3">
                <Switch checked={form.available} onCheckedChange={(v) => setForm({ ...form, available: v })}
                  className="data-[state=checked]:bg-green-500" />
                <Label className="text-white/60">{form.available ? "Disponibile" : "Non disponibile"}</Label>
              </div>
              <div className="flex items-center gap-3">
                <Switch checked={form.is_archived} onCheckedChange={(v) => setForm({ ...form, is_archived: v })}
                  className="data-[state=checked]:bg-red-500" />
                <Label className="text-white/60">{form.is_archived ? "Archiviato (nascosto)" : "Attivo"}</Label>
              </div>
            </div>
          </div>
        </div>

        {/* Immagini */}
        <div className="border-t border-white/10 pt-4 space-y-4">
          <h4 className="text-[#C8A135] font-bold text-sm uppercase tracking-wider">Immagini</h4>

          <ImageField
            label="Immagine principale (in scena)"
            url={form.image_url}
            uploading={uploadingImg === "main"}
            onUrlChange={(url) => setForm({ ...form, image_url: url })}
            onUpload={(file) => handleUpload("main", file)}
          />

          <ImageField
            label="Immagine trasparente (PNG, hero pagina veicolo)"
            url={form.transparent_image_url}
            uploading={uploadingImg === "transparent"}
            onUrlChange={(url) => setForm({ ...form, transparent_image_url: url })}
            onUpload={(file) => handleUpload("transparent", file)}
          />

          <div className="space-y-2">
            <Label className="text-white/60">Galleria (varianti colore)</Label>
            <div className="flex flex-wrap gap-2 mb-2">
              {form.gallery_urls.map((url) => (
                <div key={url} className="relative group">
                  <img src={url} alt="" className="w-20 h-20 object-cover rounded-lg border border-white/10" />
                  <button
                    type="button"
                    onClick={() => removeGalleryImage(url)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition"
                  >
                    <X size={12} />
                  </button>
                </div>
              ))}
            </div>
            <label className="inline-flex items-center gap-2 px-3 py-2 bg-white/5 border border-dashed border-white/20 rounded-lg cursor-pointer hover:bg-white/10 text-sm">
              {uploadingImg === "gallery" ? <Loader2 size={14} className="animate-spin" /> : <Upload size={14} />}
              Aggiungi immagine
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleUpload("gallery", file);
                  e.target.value = "";
                }}
              />
            </label>
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

interface ImageFieldProps {
  label: string;
  url: string;
  uploading: boolean;
  onUrlChange: (url: string) => void;
  onUpload: (file: File) => void;
}

function ImageField({ label, url, uploading, onUrlChange, onUpload }: ImageFieldProps) {
  return (
    <div className="space-y-2">
      <Label className="text-white/60">{label}</Label>
      <div className="flex flex-col sm:flex-row gap-3 items-start">
        <div className="w-24 h-24 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center overflow-hidden shrink-0">
          {url ? (
            <img src={url} alt="" className="w-full h-full object-contain" />
          ) : (
            <ImageIcon size={28} className="text-white/20" />
          )}
        </div>
        <div className="flex-1 w-full space-y-2">
          <Input
            value={url}
            onChange={(e) => onUrlChange(e.target.value)}
            className="bg-white/5 border-white/10 text-white text-sm"
            placeholder="https://... oppure carica qui sotto"
          />
          <label className="inline-flex items-center gap-2 px-3 py-2 bg-white/5 border border-dashed border-white/20 rounded-lg cursor-pointer hover:bg-white/10 text-xs">
            {uploading ? <Loader2 size={12} className="animate-spin" /> : <Upload size={12} />}
            Carica file
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) onUpload(file);
                e.target.value = "";
              }}
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default VehicleModal;

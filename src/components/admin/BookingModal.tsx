import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { Loader2, FileUp, FileCheck2, ExternalLink } from "lucide-react";
import { uploadToBucket, getSignedUrlForPrivateBucket } from "@/lib/adminStorage";
import { logAdminAction } from "@/lib/audit";

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
  const [uploading, setUploading] = useState(false);
  const [status, setStatus] = useState(booking?.status || "pending_signature");
  const [signedPdfUrl, setSignedPdfUrl] = useState<string | null>(booking?.signed_pdf_url || null);

  useEffect(() => {
    setStatus(booking?.status || "pending_signature");
    setSignedPdfUrl(booking?.signed_pdf_url || null);
  }, [booking]);

  const handleStatusChange = async (newStatus: string) => {
    setStatus(newStatus);
    setSaving(true);
    const { error } = await supabase.from("bookings").update({ status: newStatus }).eq("id", booking.id);
    setSaving(false);

    if (error) {
      toast.error("Errore: " + error.message);
      return;
    }
    await logAdminAction({ action: "update", table: "bookings", recordId: booking.id, diff: { status: newStatus } });
    toast.success("Stato aggiornato!");
    onSaved();
  };

  const handleContractUpload = async (file: File) => {
    if (file.type !== "application/pdf") {
      toast.error("Carica un file PDF");
      return;
    }
    setUploading(true);
    try {
      const url = await uploadToBucket("contracts", file, booking.id);
      const updates: Record<string, any> = { signed_pdf_url: url };
      if (status === "pending_signature") {
        updates.status = "signed";
        updates.signed_at = new Date().toISOString();
        setStatus("signed");
      }
      const { error } = await supabase.from("bookings").update(updates).eq("id", booking.id);
      if (error) throw error;
      await logAdminAction({ action: "upload", table: "bookings", recordId: booking.id, diff: { signed_pdf_url: url } });
      setSignedPdfUrl(url);
      toast.success("Contratto firmato caricato");
      onSaved();
    } catch (err: any) {
      toast.error("Upload fallito: " + (err?.message || "verifica che il bucket 'contracts' esista"));
    } finally {
      setUploading(false);
    }
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
            <div className="col-span-2">
              <span className="text-white/40 block text-xs uppercase tracking-wider mb-1">Email / Telefono</span>
              <span className="text-sm">{booking.email || "—"} {booking.phone ? `· ${booking.phone}` : ""}</span>
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

          <div className="border-t border-white/10 pt-4 space-y-2">
            <Label className="text-white/60">Contratto Firmato (PDF)</Label>
            {signedPdfUrl ? (
              <div className="flex items-center gap-2 text-sm">
                <FileCheck2 size={18} className="text-green-500 shrink-0" />
                <button
                  type="button"
                  onClick={async () => {
                    // Il bucket "contracts" è privato: l'URL pubblico non funziona.
                    // Genero on-click un signed URL temporaneo (1h) gestendo sia
                    // path nuovi sia URL pubblici legacy salvati nel DB.
                    const url = await getSignedUrlForPrivateBucket("contracts", signedPdfUrl, 3600);
                    if (url) {
                      window.open(url, "_blank", "noopener,noreferrer");
                    } else {
                      toast.error("Impossibile generare il link al PDF (file non trovato nel bucket 'contracts').");
                    }
                  }}
                  className="text-[#C8A135] hover:underline flex items-center gap-1 truncate"
                >
                  Apri PDF firmato <ExternalLink size={12} />
                </button>
              </div>
            ) : (
              <p className="text-xs text-white/40">Nessun PDF firmato caricato.</p>
            )}
            <label className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-dashed border-white/20 rounded-xl text-sm cursor-pointer hover:bg-white/10 transition">
              {uploading ? <Loader2 size={14} className="animate-spin" /> : <FileUp size={14} />}
              {signedPdfUrl ? "Sostituisci PDF" : "Carica Contratto PDF"}
              <input
                type="file"
                accept="application/pdf"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleContractUpload(file);
                  e.target.value = "";
                }}
              />
            </label>
          </div>
        </div>

        <DialogFooter>
          <button onClick={onClose} className="px-5 py-2 bg-gold text-white rounded-full font-bold text-sm uppercase tracking-wider hover:bg-yellow-400 transition-colors shadow-[0_0_15px_rgba(212,175,55,0.3)]">
            {saving ? <Loader2 size={14} className="animate-spin" /> : "Chiudi"}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;

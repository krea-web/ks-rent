import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { logAdminAction } from "@/lib/audit";
import { UploadCloud, Loader2, Info, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { OG_BUCKET, OG_IMAGES, ogUrl } from "@/data/ogImages";

const OgImagesSection = () => {
  // bust per ogni key, per forzare il refresh della miniatura dopo l'upload
  const [bust, setBust] = useState<Record<string, number>>({});
  const [uploading, setUploading] = useState<string | null>(null);

  const handleReplace = async (key: string, file: File) => {
    if (!file.type.startsWith("image/")) {
      toast.error("Seleziona un file immagine (ideale 1200×630, .webp/.jpg/.png).");
      return;
    }
    setUploading(key);
    try {
      // Sostituisce il file allo STESSO path (upsert) → l'URL pubblico resta identico.
      const { error } = await supabase.storage.from(OG_BUCKET).upload(key, file, {
        upsert: true,
        contentType: file.type,
        cacheControl: "3600",
      });
      if (error) throw error;
      await logAdminAction({ action: "upload", table: "storage:asset", recordId: key });
      setBust((b) => ({ ...b, [key]: Date.now() }));
      toast.success("Immagine sostituita. Ricordati di ri-scrapare su Facebook Debugger.");
    } catch (e: any) {
      toast.error("Upload fallito: " + (e?.message || "errore"));
    } finally {
      setUploading(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-start gap-3 bg-[#C8A135]/5 border border-[#C8A135]/20 rounded-xl p-4">
        <Info size={18} className="text-[#C8A135] shrink-0 mt-0.5" />
        <div className="text-xs text-white/70 leading-relaxed">
          Queste sono le <strong>anteprime social (OG)</strong> mostrate quando si condivide una
          pagina su WhatsApp, Facebook, ecc. Carica un'immagine <strong>1200×630</strong> (.webp o
          .jpg) per sostituirne una: il cambio è immediato sul sito. Le piattaforme social però
          tengono in cache l'anteprima — per vederla aggiornata subito, ri-scrapa la pagina su{" "}
          <a
            href="https://developers.facebook.com/tools/debug/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C8A135] underline inline-flex items-center gap-1"
          >
            Facebook Sharing Debugger <ExternalLink size={11} />
          </a>
          .
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {OG_IMAGES.map((og) => (
          <div key={og.key} className="bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden flex flex-col">
            <div className="relative aspect-[1200/630] bg-black/40">
              <img
                src={ogUrl(og.key, bust[og.key])}
                alt={`OG ${og.label}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {uploading === og.key && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <Loader2 className="animate-spin text-[#C8A135]" size={28} />
                </div>
              )}
            </div>
            <div className="p-4 flex flex-col gap-3 flex-1">
              <div>
                <p className="font-bold text-sm">{og.label}</p>
                <p className="text-[11px] text-white/40 mt-0.5">{og.pages}</p>
              </div>
              <div className="mt-auto flex items-center gap-2">
                <label
                  className={cn(
                    "flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg border text-xs font-semibold cursor-pointer transition",
                    uploading === og.key
                      ? "bg-white/5 border-white/10 text-white/30 cursor-not-allowed"
                      : "bg-[#C8A135]/10 border-[#C8A135]/30 text-[#C8A135] hover:bg-[#C8A135]/20",
                  )}
                >
                  <UploadCloud size={14} /> Sostituisci immagine
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    disabled={uploading === og.key}
                    onChange={(e) => {
                      const f = e.target.files?.[0];
                      if (f) handleReplace(og.key, f);
                      e.target.value = "";
                    }}
                  />
                </label>
                <a
                  href={ogUrl(og.key, bust[og.key])}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-white/10 bg-white/5 text-white/60 hover:bg-white/10 transition"
                  title="Apri a dimensione piena"
                >
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OgImagesSection;

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { logAdminAction } from "@/lib/audit";
import { UploadCloud, Loader2, Info, ExternalLink, Link2, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { OG_BUCKET, OG_IMAGES, ogUrl } from "@/data/ogImages";

const OG_W = 1200;
const OG_H = 630;

/**
 * Normalizza una sorgente (File o URL) in un webp 1200×630 (cover) pronto per l'OG.
 * Passando sempre da un blob locale, il canvas non si "sporca" (no taint) anche per
 * URL Supabase. Se la conversione fallisce, ritorna il blob originale (fallback).
 */
async function toOgWebp(blob: Blob): Promise<Blob> {
  const objUrl = URL.createObjectURL(blob);
  try {
    const img = await new Promise<HTMLImageElement>((res, rej) => {
      const i = new window.Image();
      i.onload = () => res(i);
      i.onerror = () => rej(new Error("immagine non leggibile"));
      i.src = objUrl;
    });
    const canvas = document.createElement("canvas");
    canvas.width = OG_W;
    canvas.height = OG_H;
    const ctx = canvas.getContext("2d");
    if (!ctx) return blob;
    // cover: riempie 1200×630 mantenendo le proporzioni, centrato
    const scale = Math.max(OG_W / img.width, OG_H / img.height);
    const w = img.width * scale;
    const h = img.height * scale;
    ctx.drawImage(img, (OG_W - w) / 2, (OG_H - h) / 2, w, h);
    const out = await new Promise<Blob | null>((res) => canvas.toBlob(res, "image/webp", 0.85));
    return out || blob;
  } catch {
    return blob;
  } finally {
    URL.revokeObjectURL(objUrl);
  }
}

const OgImagesSection = () => {
  const [bust, setBust] = useState<Record<string, number>>({});
  const [busy, setBusy] = useState<string | null>(null);
  const [urls, setUrls] = useState<Record<string, string>>({});

  // Applica una sorgente (File | URL string) a una OG key: converte → carica al path canonico.
  const applyImage = async (key: string, source: File | string) => {
    setBusy(key);
    try {
      let blob: Blob;
      if (typeof source === "string") {
        const url = source.trim();
        if (!/^https?:\/\//i.test(url)) {
          toast.error("Inserisci un URL valido (https://...).");
          return;
        }
        const res = await fetch(url);
        if (!res.ok) throw new Error("URL non raggiungibile (HTTP " + res.status + ")");
        blob = await res.blob();
        if (!blob.type.startsWith("image/")) throw new Error("L'URL non punta a un'immagine");
      } else {
        if (!source.type.startsWith("image/")) {
          toast.error("Seleziona un file immagine.");
          return;
        }
        blob = source;
      }

      const webp = await toOgWebp(blob); // → 1200×630 webp (o fallback originale)
      // path canonico: l'URL pubblico referenziato dalle pagine resta identico → swap immediato
      const { error } = await supabase.storage.from(OG_BUCKET).upload(key, webp, {
        upsert: true,
        contentType: "image/webp",
        cacheControl: "3600",
      });
      if (error) throw error;

      await logAdminAction({ action: "upload", table: "storage:asset", recordId: key });
      setBust((b) => ({ ...b, [key]: Date.now() }));
      setUrls((u) => ({ ...u, [key]: "" }));
      toast.success("Immagine impostata (webp 1200×630). Ri-scrapa su Facebook Debugger per l'anteprima social.");
    } catch (e: any) {
      const msg = String(e?.message || e);
      if (/cors|failed to fetch|networkerror/i.test(msg)) {
        toast.error("URL non accessibile (CORS). Usa un URL pubblico Supabase o carica il file.");
      } else {
        toast.error("Operazione fallita: " + msg);
      }
    } finally {
      setBusy(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-start gap-3 bg-[#C8A135]/5 border border-[#C8A135]/20 rounded-xl p-4">
        <Info size={18} className="text-[#C8A135] shrink-0 mt-0.5" />
        <div className="text-xs text-white/70 leading-relaxed">
          Anteprime <strong>social (OG)</strong> mostrate quando si condivide una pagina (WhatsApp,
          Facebook…). Imposta una nuova immagine <strong>incollando l'URL</strong> (es. un file su
          Supabase) oppure caricando un file: in entrambi i casi viene <strong>convertita in webp
          1200×630</strong> e salvata al posto giusto, quindi il cambio è immediato sul sito. Le
          piattaforme tengono in cache l'anteprima — per vederla subito ri-scrapa su{" "}
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
              {busy === og.key && (
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

              {/* Imposta da URL */}
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <Link2 size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-white/30" />
                  <input
                    type="url"
                    value={urls[og.key] || ""}
                    onChange={(e) => setUrls((u) => ({ ...u, [og.key]: e.target.value }))}
                    placeholder="Incolla URL immagine…"
                    className="w-full pl-7 pr-2 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-white placeholder:text-white/30 focus:border-[#C8A135] focus:outline-none"
                    disabled={busy === og.key}
                  />
                </div>
                <button
                  onClick={() => applyImage(og.key, urls[og.key] || "")}
                  disabled={busy === og.key || !(urls[og.key] || "").trim()}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg border bg-[#C8A135]/10 border-[#C8A135]/30 text-[#C8A135] hover:bg-[#C8A135]/20 disabled:opacity-40 disabled:cursor-not-allowed text-xs font-semibold transition"
                  title="Imposta dall'URL"
                >
                  <Check size={14} /> Imposta
                </button>
              </div>

              <div className="flex items-center gap-2">
                <label
                  className={cn(
                    "flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg border text-xs font-semibold cursor-pointer transition",
                    busy === og.key
                      ? "bg-white/5 border-white/10 text-white/30 cursor-not-allowed"
                      : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10",
                  )}
                >
                  <UploadCloud size={14} /> …oppure carica file
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    disabled={busy === og.key}
                    onChange={(e) => {
                      const f = e.target.files?.[0];
                      if (f) applyImage(og.key, f);
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

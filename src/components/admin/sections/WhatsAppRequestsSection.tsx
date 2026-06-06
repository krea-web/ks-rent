import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { logAdminAction } from "@/lib/audit";
import {
  Loader2,
  RefreshCw,
  Car,
  CalendarDays,
  MapPin,
  Trash2,
  CheckCircle2,
  Archive,
  MessageCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface WhatsAppRequest {
  id: string;
  created_at: string;
  lang: string | null;
  vehicle_make: string | null;
  vehicle_model: string | null;
  group_slug: string | null;
  vehicle_id: string | null;
  start_date: string | null;
  end_date: string | null;
  days: number | null;
  price_estimate: number | null;
  pickup_type: string | null;
  pickup_location: string | null;
  pickup_time: string | null;
  dropoff_time: string | null;
  status: "nuova" | "gestita" | "archiviata";
}

type Filter = "tutte" | "nuova" | "gestita" | "archiviata";

const LANG_FLAG: Record<string, string> = { it: "🇮🇹", en: "🇬🇧", de: "🇩🇪", fr: "🇫🇷" };

const StatCard = ({ label, value, accent }: { label: string; value: string | number; accent?: boolean }) => (
  <div className={cn("rounded-xl p-4 border", accent ? "bg-[#C8A135]/10 border-[#C8A135]/30" : "bg-[#0a0a0a] border-white/10")}>
    <p className="text-[11px] uppercase tracking-wider text-white/50">{label}</p>
    <p className={cn("text-2xl font-black mt-1", accent ? "text-[#C8A135]" : "text-white")}>{value}</p>
  </div>
);

const fmtDate = (s: string | null) => {
  if (!s) return "—";
  const p = s.split("-");
  return p.length === 3 ? `${p[2]}/${p[1]}/${p[0]}` : s;
};

const WhatsAppRequestsSection = () => {
  const [requests, setRequests] = useState<WhatsAppRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<Filter>("tutte");

  const fetchRequests = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("whatsapp_requests")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) toast.error("Errore caricamento richieste: " + error.message);
    else setRequests((data as WhatsAppRequest[]) || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const setStatus = async (r: WhatsAppRequest, status: WhatsAppRequest["status"]) => {
    const { error } = await supabase.from("whatsapp_requests").update({ status }).eq("id", r.id);
    if (error) return toast.error(error.message);
    await logAdminAction({ action: "update", table: "whatsapp_requests", recordId: r.id, diff: { status } });
    fetchRequests();
  };

  const deleteRequest = async (r: WhatsAppRequest) => {
    if (!confirm("Eliminare questa richiesta?")) return;
    const { error } = await supabase.from("whatsapp_requests").delete().eq("id", r.id);
    if (error) return toast.error(error.message);
    await logAdminAction({ action: "delete", table: "whatsapp_requests", recordId: r.id });
    toast.success("Richiesta eliminata");
    fetchRequests();
  };

  const now = Date.now();
  const DAY = 86400000;
  const stats = {
    total: requests.length,
    oggi: requests.filter((r) => now - new Date(r.created_at).getTime() < DAY).length,
    settimana: requests.filter((r) => now - new Date(r.created_at).getTime() < 7 * DAY).length,
    nuove: requests.filter((r) => r.status === "nuova").length,
  };

  const filtered = requests.filter((r) => (filter === "tutte" ? true : r.status === filter));

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20 text-white/50">
        <Loader2 className="animate-spin text-[#C8A135]" size={28} />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <StatCard label="Richieste totali" value={stats.total} accent />
        <StatCard label="Oggi" value={stats.oggi} />
        <StatCard label="Ultimi 7 giorni" value={stats.settimana} />
        <StatCard label="Da gestire" value={stats.nuove} />
      </div>

      <p className="text-xs text-white/40 -mt-2">
        Ogni riga = una persona che ha completato il wizard e aperto WhatsApp. Nome e telefono
        compaiono solo quando ti scrive in chat (qui non sono tracciati).
      </p>

      {/* Toolbar */}
      <div className="flex flex-wrap gap-2 items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {(["tutte", "nuova", "gestita", "archiviata"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border transition-colors",
                filter === f
                  ? "bg-[#C8A135] text-black border-[#C8A135]"
                  : "bg-white/5 text-white/60 border-white/10 hover:bg-white/10",
              )}
            >
              {f}
            </button>
          ))}
        </div>
        <button
          onClick={fetchRequests}
          className="p-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 min-h-[40px] min-w-[40px] flex items-center justify-center"
          title="Aggiorna"
        >
          <RefreshCw size={16} className="text-[#C8A135]" />
        </button>
      </div>

      {/* List */}
      {filtered.length === 0 ? (
        <div className="text-center text-white/40 py-16 flex flex-col items-center gap-3">
          <MessageCircle size={32} className="text-white/20" />
          Nessuna richiesta {filter !== "tutte" ? `"${filter}"` : "ancora"}.
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {filtered.map((r) => (
            <div
              key={r.id}
              className={cn(
                "bg-[#0a0a0a] border rounded-xl p-4 flex flex-col gap-3 transition",
                r.status === "nuova"
                  ? "border-[#25D366]/30"
                  : r.status === "archiviata"
                    ? "border-white/10 opacity-60"
                    : "border-white/10",
              )}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-9 h-9 rounded-full bg-[#25D366]/15 text-[#25D366] flex items-center justify-center shrink-0">
                    <Car size={16} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-sm truncate">
                      {r.vehicle_make} {r.vehicle_model}
                    </p>
                    <p className="text-[11px] text-white/40">
                      {LANG_FLAG[r.lang || ""] || ""} {new Date(r.created_at).toLocaleString("it-IT")}
                    </p>
                  </div>
                </div>
                <span
                  className={cn(
                    "px-2 py-0.5 text-[10px] font-bold uppercase rounded-full border shrink-0",
                    r.status === "nuova"
                      ? "bg-[#25D366]/10 text-[#25D366] border-[#25D366]/20"
                      : r.status === "gestita"
                        ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                        : "bg-white/5 text-white/40 border-white/10",
                  )}
                >
                  {r.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-2 text-white/70">
                  <CalendarDays size={14} className="text-[#C8A135] shrink-0" />
                  <span>
                    {fmtDate(r.start_date)} → {fmtDate(r.end_date)}
                    {r.days ? ` · ${r.days}gg` : ""}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <MapPin size={14} className="text-[#C8A135] shrink-0" />
                  <span className="truncate">
                    {r.pickup_type === "custom"
                      ? r.pickup_location || "Consegna"
                      : r.pickup_type === "sede"
                        ? "Ritiro in sede"
                        : "Da concordare"}
                    {r.pickup_time ? ` · ${r.pickup_time}` : ""}
                  </span>
                </div>
                <div className="col-span-2 flex items-center gap-2">
                  <span className="text-white/40">Stima:</span>
                  <span className="font-bold text-[#C8A135]">
                    {r.price_estimate != null ? `€${r.price_estimate}` : "—"}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-white/5">
                {r.status !== "gestita" && (
                  <button
                    onClick={() => setStatus(r, "gestita")}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/20 text-xs font-semibold transition"
                    title="Segna come gestita"
                  >
                    <CheckCircle2 size={14} /> Gestita
                  </button>
                )}
                {r.status !== "archiviata" && (
                  <button
                    onClick={() => setStatus(r, "archiviata")}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border bg-white/5 text-white/60 border-white/10 hover:bg-white/10 text-xs font-semibold transition"
                    title="Archivia"
                  >
                    <Archive size={14} /> Archivia
                  </button>
                )}
                {r.status !== "nuova" && (
                  <button
                    onClick={() => setStatus(r, "nuova")}
                    className="px-3 py-1.5 rounded-lg border bg-[#25D366]/10 text-[#25D366] border-[#25D366]/20 hover:bg-[#25D366]/20 text-xs font-semibold transition"
                    title="Riporta a nuova"
                  >
                    ↺ Nuova
                  </button>
                )}
                <button
                  onClick={() => deleteRequest(r)}
                  className="ml-auto p-2 rounded-lg border bg-red-500/10 text-red-500 border-red-500/20 hover:bg-red-500/20 transition"
                  title="Elimina"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WhatsAppRequestsSection;

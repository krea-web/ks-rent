import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import {
  Calendar,
  Car,
  CircleDollarSign,
  Star,
  AlertTriangle,
  TrendingUp,
  Users,
  Loader2,
  MessageCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardData {
  bookingsThisMonth: number;
  revenueThisMonth: number;
  vehiclesAvailable: number;
  vehiclesTotal: number;
  unpublishedReviews: number;
  upcomingRevisions: { id: string; make: string; model: string; license_plate: string | null; next_revision_date: string }[];
  recentBookings: any[];
  occupancyByMonth: { month: string; count: number }[];
  funnel: { requests: number; bookings: number; confirmed: number; cancelled: number };
  requestsByMonth: { month: string; count: number }[];
  topVehicles: { label: string; count: number }[];
}

const DashboardSection = () => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setLoading(true);
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
    const in30Days = new Date(now);
    in30Days.setDate(now.getDate() + 30);

    const [bookingsMonth, vehicles, reviews, revisions, recent, allBookings, wrAll, bAll] = await Promise.all([
      supabase.from("bookings")
        .select("total_price")
        .gte("start_date", startOfMonth.toISOString().slice(0, 10))
        .lte("start_date", endOfMonth.toISOString().slice(0, 10)),
      supabase.from("vehicles").select("id, available, is_archived"),
      supabase.from("reviews").select("id").eq("is_published", false),
      supabase.from("vehicles")
        .select("id, make, model, license_plate, next_revision_date")
        .not("next_revision_date", "is", null)
        .lte("next_revision_date", in30Days.toISOString().slice(0, 10))
        .order("next_revision_date", { ascending: true }),
      supabase.from("bookings")
        .select("*, vehicles(make, model)")
        .order("created_at", { ascending: false })
        .limit(5),
      supabase.from("bookings")
        .select("start_date")
        .gte("start_date", new Date(now.getFullYear(), 0, 1).toISOString().slice(0, 10)),
      supabase.from("whatsapp_requests").select("created_at, group_slug, vehicle_make, vehicle_model"),
      supabase.from("bookings").select("status"),
    ]);

    // Funnel conversione: richieste WhatsApp → prenotazioni → confermate/firmate
    const allReq = wrAll.data || [];
    const allB = bAll.data || [];
    const funnel = {
      requests: allReq.length,
      bookings: allB.length,
      confirmed: allB.filter((b: any) => ["signed", "active", "completed"].includes(b.status)).length,
      cancelled: allB.filter((b: any) => b.status === "cancelled").length,
    };

    // Richieste per mese (anno corrente)
    const reqMap: Record<string, number> = {};
    for (const r of allReq) {
      const m = (r.created_at || "").slice(0, 7); // YYYY-MM
      if (m) reqMap[m] = (reqMap[m] || 0) + 1;
    }
    const requestsByMonth = Object.entries(reqMap)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([month, count]) => ({ month, count }));

    // Veicoli più richiesti (top 6)
    const vehMap: Record<string, number> = {};
    for (const r of allReq) {
      const label = `${r.vehicle_make || ""} ${r.vehicle_model || ""}`.trim() || r.group_slug || "—";
      vehMap[label] = (vehMap[label] || 0) + 1;
    }
    const topVehicles = Object.entries(vehMap)
      .map(([label, count]) => ({ label, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 6);

    const activeVehicles = (vehicles.data || []).filter((v) => !v.is_archived);

    // Aggrega prenotazioni per mese
    const occMap: Record<string, number> = {};
    for (const b of allBookings.data || []) {
      const m = b.start_date?.slice(0, 7); // YYYY-MM
      if (!m) continue;
      occMap[m] = (occMap[m] || 0) + 1;
    }
    const occupancyByMonth = Object.entries(occMap)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([month, count]) => ({ month, count }));

    setData({
      bookingsThisMonth: bookingsMonth.data?.length || 0,
      revenueThisMonth: (bookingsMonth.data || []).reduce((s, b) => s + (Number(b.total_price) || 0), 0),
      vehiclesAvailable: activeVehicles.filter((v) => v.available).length,
      vehiclesTotal: activeVehicles.length,
      unpublishedReviews: reviews.data?.length || 0,
      upcomingRevisions: (revisions.data as any) || [],
      recentBookings: recent.data || [],
      occupancyByMonth,
      funnel,
      requestsByMonth,
      topVehicles,
    });
    setLoading(false);
  }

  if (loading || !data) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="animate-spin text-[#C8A135]" size={32} />
      </div>
    );
  }

  const monthName = new Date().toLocaleDateString("it-IT", { month: "long", year: "numeric" });

  return (
    <div className="space-y-6">
      {/* KPI grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <KPICard
          icon={Calendar}
          label={`Noleggi ${monthName}`}
          value={data.bookingsThisMonth.toString()}
          accent
        />
        <KPICard
          icon={CircleDollarSign}
          label="Fatturato mese"
          value={`€${data.revenueThisMonth.toLocaleString("it-IT")}`}
          accent
        />
        <KPICard
          icon={Car}
          label="Veicoli disponibili"
          value={`${data.vehiclesAvailable}/${data.vehiclesTotal}`}
        />
        <KPICard
          icon={Star}
          label="Recensioni in attesa"
          value={data.unpublishedReviews.toString()}
          danger={data.unpublishedReviews > 0}
        />
      </div>

      {/* Funnel conversione: Richieste WhatsApp → Prenotazioni → Confermate */}
      <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-5">
        <div className="flex items-center gap-2 mb-1">
          <TrendingUp size={16} className="text-[#C8A135]" />
          <h3 className="font-bold text-sm uppercase tracking-wider">Funnel di conversione</h3>
        </div>
        <p className="text-[11px] text-white/40 mb-4">
          Quante richieste WhatsApp (lead) si trasformano in prenotazioni firmate. Totali storici.
        </p>
        {(() => {
          const f = data.funnel;
          const max = Math.max(f.requests, f.bookings, 1);
          const stages = [
            { label: "Richieste WhatsApp", value: f.requests, color: "#25D366" },
            { label: "Prenotazioni create", value: f.bookings, color: "#C8A135" },
            { label: "Confermate / firmate", value: f.confirmed, color: "#3b82f6" },
          ];
          const convRate = f.requests > 0 ? Math.round((f.confirmed / f.requests) * 100) : null;
          return (
            <div className="space-y-3">
              {stages.map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  <span className="w-40 text-xs text-white/70 shrink-0">{s.label}</span>
                  <div className="flex-1 bg-white/5 rounded-full h-6 overflow-hidden">
                    <div
                      className="h-full rounded-full flex items-center justify-end pr-2 transition-all"
                      style={{ width: `${Math.max((s.value / max) * 100, 8)}%`, backgroundColor: s.color }}
                    >
                      <span className="text-[11px] font-black text-black">{s.value}</span>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-4 pt-2 border-t border-white/5 text-xs">
                {convRate != null && (
                  <span className="text-white/70">
                    Conversione richiesta→firmata: <strong className="text-[#C8A135]">{convRate}%</strong>
                  </span>
                )}
                {f.cancelled > 0 && (
                  <span className="text-red-400/80">{f.cancelled} annullate</span>
                )}
              </div>
            </div>
          );
        })()}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revisioni in scadenza */}
        <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle size={18} className="text-yellow-500" />
            <h3 className="font-bold uppercase tracking-wider text-sm">Revisioni in scadenza (30 gg)</h3>
          </div>
          {data.upcomingRevisions.length === 0 ? (
            <p className="text-white/40 text-sm py-4">Nessuna revisione imminente</p>
          ) : (
            <div className="space-y-2">
              {data.upcomingRevisions.map((v) => {
                const days = Math.ceil((new Date(v.next_revision_date).getTime() - Date.now()) / (1000 * 60 * 60 * 24));
                return (
                  <div key={v.id} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                    <div>
                      <p className="font-bold text-sm">{v.make} {v.model}</p>
                      <p className="text-xs text-white/40 uppercase">{v.license_plate || "—"}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-white">{new Date(v.next_revision_date).toLocaleDateString("it-IT")}</p>
                      <p className={cn("text-xs", days < 7 ? "text-red-500" : days < 14 ? "text-yellow-500" : "text-white/40")}>
                        {days < 0 ? "scaduta" : `tra ${days} giorni`}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Prenotazioni recenti */}
        <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <Users size={18} className="text-[#C8A135]" />
            <h3 className="font-bold uppercase tracking-wider text-sm">Prenotazioni recenti</h3>
          </div>
          {data.recentBookings.length === 0 ? (
            <p className="text-white/40 text-sm py-4">Nessuna prenotazione</p>
          ) : (
            <div className="space-y-2">
              {data.recentBookings.map((b) => (
                <div key={b.id} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                  <div className="min-w-0">
                    <p className="font-bold text-sm truncate">{b.customer_name} {b.customer_surname}</p>
                    <p className="text-xs text-white/40 truncate">
                      {b.vehicles ? `${b.vehicles.make} ${b.vehicles.model}` : "Veicolo eliminato"}
                    </p>
                  </div>
                  <div className="text-right shrink-0 ml-3">
                    <p className="text-sm font-bold text-[#C8A135]">€{(b.total_price || 0).toLocaleString("it-IT")}</p>
                    <p className="text-xs text-white/40">
                      {b.start_date ? new Date(b.start_date).toLocaleDateString("it-IT", { day: "2-digit", month: "short" }) : "—"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Occupazione mensile */}
      <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-5">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp size={18} className="text-[#C8A135]" />
          <h3 className="font-bold uppercase tracking-wider text-sm">
            Andamento prenotazioni {new Date().getFullYear()}
          </h3>
        </div>
        {data.occupancyByMonth.length === 0 ? (
          <p className="text-white/40 text-sm py-4">Nessun dato</p>
        ) : (
          <BarChart data={data.occupancyByMonth} />
        )}
      </div>

      {/* Richieste WhatsApp + Veicoli più richiesti */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <MessageCircle size={18} className="text-[#25D366]" />
            <h3 className="font-bold uppercase tracking-wider text-sm">Andamento richieste WhatsApp</h3>
          </div>
          {data.requestsByMonth.length === 0 ? (
            <p className="text-white/40 text-sm py-4">Ancora nessuna richiesta.</p>
          ) : (
            <BarChart data={data.requestsByMonth} />
          )}
        </div>

        <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <Car size={18} className="text-[#C8A135]" />
            <h3 className="font-bold uppercase tracking-wider text-sm">Veicoli più richiesti</h3>
          </div>
          {data.topVehicles.length === 0 ? (
            <p className="text-white/40 text-sm py-4">Ancora nessun dato.</p>
          ) : (
            <div className="space-y-2.5">
              {(() => {
                const max = Math.max(...data.topVehicles.map((v) => v.count), 1);
                return data.topVehicles.map((v) => (
                  <div key={v.label} className="flex items-center gap-3">
                    <span className="w-32 text-xs text-white/70 truncate shrink-0">{v.label}</span>
                    <div className="flex-1 bg-white/5 rounded-full h-5 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-[#C8A135] flex items-center justify-end pr-2"
                        style={{ width: `${Math.max((v.count / max) * 100, 10)}%` }}
                      >
                        <span className="text-[10px] font-black text-black">{v.count}</span>
                      </div>
                    </div>
                  </div>
                ));
              })()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface KPICardProps {
  icon: typeof Car;
  label: string;
  value: string;
  accent?: boolean;
  danger?: boolean;
}

const KPICard = ({ icon: Icon, label, value, accent, danger }: KPICardProps) => (
  <div className={cn(
    "bg-[#0a0a0a] border rounded-xl p-4",
    danger ? "border-red-500/30" : accent ? "border-[#C8A135]/30" : "border-white/10",
  )}>
    <div className="flex items-center justify-between mb-2">
      <p className="text-xs uppercase tracking-wider text-white/40 leading-tight">{label}</p>
      <Icon size={18} className={cn(
        danger ? "text-red-500" : accent ? "text-[#C8A135]" : "text-white/30",
      )} />
    </div>
    <p className={cn(
      "text-2xl lg:text-3xl font-black",
      danger ? "text-red-500" : accent ? "text-[#C8A135]" : "text-white",
    )}>{value}</p>
  </div>
);

const BarChart = ({ data }: { data: { month: string; count: number }[] }) => {
  const max = Math.max(...data.map((d) => d.count), 1);
  return (
    <div className="flex items-end gap-2 h-40">
      {data.map((d) => {
        const h = (d.count / max) * 100;
        const [year, mon] = d.month.split("-");
        const monthLabel = new Date(Number(year), Number(mon) - 1, 1).toLocaleDateString("it-IT", { month: "short" });
        return (
          <div key={d.month} className="flex-1 flex flex-col items-center gap-1 min-w-0">
            <div className="text-[10px] text-white/60 font-bold">{d.count}</div>
            <div
              className="w-full bg-[#C8A135]/30 hover:bg-[#C8A135]/50 transition rounded-t border-t-2 border-[#C8A135]"
              style={{ height: `${h}%`, minHeight: "2px" }}
            />
            <div className="text-[10px] text-white/40 uppercase truncate">{monthLabel}</div>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardSection;

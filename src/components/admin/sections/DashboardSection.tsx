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

    const [bookingsMonth, vehicles, reviews, revisions, recent, allBookings] = await Promise.all([
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
    ]);

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

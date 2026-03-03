import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Car, Wrench, FileText, RefreshCw, LogOut, Loader2, Plus, Edit, AlertCircle, CheckCircle2 } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import VehicleModal from "@/components/admin/VehicleModal";
import MaintenanceModal from "@/components/admin/MaintenanceModal";
import BookingModal from "@/components/admin/BookingModal";

type Section = "flotta" | "manutenzione" | "contratti";

const sidebarItems: { title: string; icon: typeof Car; section: Section }[] = [
  { title: "Flotta & Prezzi", icon: Car, section: "flotta" },
  { title: "Manutenzione", icon: Wrench, section: "manutenzione" },
  { title: "Noleggi & Contratti", icon: FileText, section: "contratti" },
];

const Admin = () => {
  const navigate = useNavigate();
  const [authChecked, setAuthChecked] = useState(false);
  const [section, setSection] = useState<Section>("flotta");
  const [vehicles, setVehicles] = useState<any[]>([]);
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // Modal state
  const [vehicleModalOpen, setVehicleModalOpen] = useState(false);
  const [editingVehicle, setEditingVehicle] = useState<any>(null);
  const [maintenanceModalOpen, setMaintenanceModalOpen] = useState(false);
  const [maintenanceVehicle, setMaintenanceVehicle] = useState<any>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [editingBooking, setEditingBooking] = useState<any>(null);

  // Auth guard with admin check
  useEffect(() => {
    const checkAdmin = async (userId: string) => {
      const { data } = await supabase.from("profiles").select("is_admin").eq("id", userId).single();
      if (!data?.is_admin) {
        toast.error("Accesso non autorizzato. Area riservata.");
        await supabase.auth.signOut();
        navigate("/login", { replace: true });
        return;
      }
      setAuthChecked(true);
    };

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) { navigate("/login", { replace: true }); return; }
      checkAdmin(session.user.id);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) navigate("/login", { replace: true });
    });
    return () => subscription.unsubscribe();
  }, [navigate]);

  const fetchData = async () => {
    setLoading(true);
    const [vRes, bRes] = await Promise.all([
      supabase.from("vehicles").select("*").order("make", { ascending: true }),
      supabase.from("bookings").select("*, vehicles(make, model, license_plate)").order("created_at", { ascending: false }),
    ]);
    if (vRes.data) setVehicles(vRes.data);
    if (bRes.data) setBookings(bRes.data);
    setLoading(false);
  };

  useEffect(() => { if (authChecked) fetchData(); }, [authChecked]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success("Disconnesso con successo");
    navigate("/login", { replace: true });
  };

  const openAddVehicle = () => { setEditingVehicle(null); setVehicleModalOpen(true); };
  const openEditVehicle = (v: any) => { setEditingVehicle(v); setVehicleModalOpen(true); };
  const openMaintenance = (v: any) => { setMaintenanceVehicle(v); setMaintenanceModalOpen(true); };
  const openBooking = (b: any) => { setEditingBooking(b); setBookingModalOpen(true); };

  if (!authChecked) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin text-gold" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[999] bg-[#050505] text-white flex overflow-hidden font-sans">
      {/* SIDEBAR */}
      <aside className="w-64 bg-[#0a0a0a] border-r border-white/10 flex flex-col">
        <div className="p-6 border-b border-white/10">
          <h1 className="text-2xl font-black font-display tracking-widest">
            KS <span className="text-gold">ADMIN</span>
          </h1>
          <p className="text-white/40 text-xs mt-1 uppercase tracking-wider">Control Room</p>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {sidebarItems.map((item) => (
            <button key={item.section} onClick={() => setSection(item.section)}
              className={cn("w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-semibold tracking-wide",
                section === item.section ? "bg-gold/10 text-gold border border-gold/20" : "text-white/60 hover:bg-white/5 hover:text-white")}>
              <item.icon size={18} /> {item.title}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-white/10">
          <button onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-500/10 text-red-500 hover:bg-red-500/20 rounded-xl transition-colors text-sm font-bold">
            <LogOut size={16} /> Logout
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col h-full bg-[#050505] overflow-hidden">
        <header className="h-20 border-b border-white/10 flex items-center justify-between px-8 bg-[#0a0a0a]/50 backdrop-blur-md">
          <h2 className="text-2xl font-bold font-display text-white">
            {sidebarItems.find((s) => s.section === section)?.title}
          </h2>
          <div className="flex items-center gap-4">
            <button onClick={fetchData} className="p-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors">
              <RefreshCw size={18} className={cn("text-gold", loading && "animate-spin")} />
            </button>
            {section === "flotta" && (
              <button onClick={openAddVehicle}
                className="flex items-center gap-2 bg-gold text-black px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-yellow-400 transition-colors shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                <Plus size={16} /> Aggiungi
              </button>
            )}
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          {/* FLOTTA */}
          {section === "flotta" && (
            <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/5 text-white/50 text-xs uppercase tracking-widest border-b border-white/10">
                  <tr>
                    <th className="p-4">Veicolo</th><th className="p-4">Targa</th><th className="p-4">Categoria</th>
                    <th className="p-4">Tariffa Giornaliera</th><th className="p-4">Stato</th><th className="p-4 text-right">Azioni</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {vehicles.map((v) => (
                    <tr key={v.id} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 font-bold">{v.make} {v.model}</td>
                      <td className="p-4 text-white/60">{v.license_plate || "Da assegnare"}</td>
                      <td className="p-4 text-white/60">{v.category}</td>
                      <td className="p-4 text-gold font-bold">€{(v.daily_rate ?? 0).toLocaleString("it-IT")}</td>
                      <td className="p-4">
                        {v.available ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-bold border border-green-500/20">
                            <CheckCircle2 size={12} /> Disponibile
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-500/10 text-red-500 text-xs font-bold border border-red-500/20">
                            <AlertCircle size={12} /> In uso
                          </span>
                        )}
                      </td>
                      <td className="p-4 text-right">
                        <button onClick={() => openEditVehicle(v)} className="p-2 text-white/40 hover:text-gold transition-colors">
                          <Edit size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {vehicles.length === 0 && (
                    <tr><td colSpan={6} className="p-8 text-center text-white/40">Nessun veicolo nel database.</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          )}

          {/* CONTRATTI */}
          {section === "contratti" && (
            <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/5 text-white/50 text-xs uppercase tracking-widest border-b border-white/10">
                  <tr>
                    <th className="p-4">Cliente</th><th className="p-4">Veicolo</th><th className="p-4">Date</th>
                    <th className="p-4">Totale</th><th className="p-4">Stato</th><th className="p-4 text-right">Gestisci</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {bookings.map((b) => (
                    <tr key={b.id} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4">
                        <p className="font-bold">{b.customer_name} {b.customer_surname}</p>
                        <p className="text-xs text-white/40">{b.tax_code || b.email || "—"}</p>
                      </td>
                      <td className="p-4 text-white/80">
                        {b.vehicles ? `${b.vehicles.make} ${b.vehicles.model}` : "Veicolo Eliminato"}
                      </td>
                      <td className="p-4 text-white/60">
                        {b.start_date ? new Date(b.start_date).toLocaleDateString("it-IT") : "N/A"}<br />
                        {b.end_date ? new Date(b.end_date).toLocaleDateString("it-IT") : "N/A"}
                      </td>
                      <td className="p-4 text-gold font-bold">€{(b.total_price ?? 0).toLocaleString("it-IT")}</td>
                      <td className="p-4">
                        <span className={cn("inline-flex px-2.5 py-1 rounded-full text-xs font-bold border uppercase tracking-wider",
                          b.status === "pending_signature" ? "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
                            : b.status === "active" ? "bg-green-500/10 text-green-500 border-green-500/20"
                            : "bg-white/5 text-white/50 border-white/10")}>
                          {b.status?.replace("_", " ") || "—"}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <button onClick={() => openBooking(b)}
                          className="text-xs border border-white/10 hover:border-gold hover:text-gold px-3 py-1.5 rounded-lg transition-colors">
                          Apri Pratica
                        </button>
                      </td>
                    </tr>
                  ))}
                  {bookings.length === 0 && (
                    <tr><td colSpan={6} className="p-8 text-center text-white/40">Nessun contratto presente.</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          )}

          {/* MANUTENZIONE */}
          {section === "manutenzione" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vehicles.map((v) => (
                <div key={v.id} className="bg-[#0a0a0a] border border-white/10 p-6 rounded-2xl flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-lg">{v.make} {v.model}</h3>
                      <p className="text-white/40 text-xs uppercase tracking-wider">{v.license_plate || "Nessuna targa"}</p>
                    </div>
                    <Wrench className="text-white/20" />
                  </div>
                  <div className="space-y-3 mt-auto">
                    <div className="flex justify-between items-end border-b border-white/5 pb-2">
                      <span className="text-sm text-white/50">Chilometraggio</span>
                      <span className="font-bold text-gold">{(v.km_current ?? 0).toLocaleString("it-IT")} km</span>
                    </div>
                    <div className="flex justify-between items-end">
                      <span className="text-sm text-white/50">Revisione/Tagliando</span>
                      <span className="font-bold">{v.next_revision_date ? new Date(v.next_revision_date).toLocaleDateString("it-IT") : "—"}</span>
                    </div>
                  </div>
                  <button onClick={() => openMaintenance(v)}
                    className="w-full mt-6 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs uppercase tracking-widest font-bold transition-colors">
                    Aggiorna Dati
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* MODALS */}
      <VehicleModal open={vehicleModalOpen} onClose={() => setVehicleModalOpen(false)} vehicle={editingVehicle} onSaved={fetchData} />
      <MaintenanceModal open={maintenanceModalOpen} onClose={() => setMaintenanceModalOpen(false)} vehicle={maintenanceVehicle} onSaved={fetchData} />
      <BookingModal open={bookingModalOpen} onClose={() => setBookingModalOpen(false)} booking={editingBooking} onSaved={fetchData} />
    </div>
  );
};

export default Admin;

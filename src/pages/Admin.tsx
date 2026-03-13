import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Car,
  Wrench,
  FileText,
  RefreshCw,
  LogOut,
  Loader2,
  Plus,
  Edit,
  AlertCircle,
  CheckCircle2,
  Menu,
  X,
  Printer,
  Folder,
  Download,
} from "lucide-react";
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
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Modal state
  const [vehicleModalOpen, setVehicleModalOpen] = useState(false);
  const [editingVehicle, setEditingVehicle] = useState<any>(null);
  const [maintenanceModalOpen, setMaintenanceModalOpen] = useState(false);
  const [maintenanceVehicle, setMaintenanceVehicle] = useState<any>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [editingBooking, setEditingBooking] = useState<any>(null);

  // Auth guard
  useEffect(() => {
    const checkAdmin = async (userId: string) => {
      const { data } = await supabase.from("profiles").select("is_admin").eq("id", userId).single();
      if (!data?.is_admin) {
        toast.error("Accesso non autorizzato. Devi essere un Admin.");
        await supabase.auth.signOut();
        navigate("/login", { replace: true });
        return;
      }
      setAuthChecked(true);
    };

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate("/login", { replace: true });
        return;
      }
      checkAdmin(session.user.id);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) navigate("/login", { replace: true });
    });
    return () => subscription.unsubscribe();
  }, [navigate]);

  const fetchData = async () => {
    setLoading(true);
    const [vRes, bRes] = await Promise.all([
      supabase.from("vehicles").select("*").order("make", { ascending: true }),
      supabase
        .from("bookings")
        .select("*, vehicles(make, model, license_plate)")
        .order("created_at", { ascending: false }),
    ]);
    if (vRes.data) setVehicles(vRes.data);
    if (bRes.data) setBookings(bRes.data);
    setLoading(false);
  };

  useEffect(() => {
    if (authChecked) fetchData();
  }, [authChecked]);

  // Raggruppamento veicoli per marca (Per la sezione Manutenzione)
  const vehiclesByMake = useMemo(() => {
    const grouped: Record<string, typeof vehicles> = {};
    for (const vehicle of vehicles) {
      const make = vehicle.make || "Sconosciuta";
      if (!grouped[make]) grouped[make] = [];
      grouped[make].push(vehicle);
    }
    return grouped;
  }, [vehicles]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success("Disconnesso con successo");
    navigate("/login", { replace: true });
  };

  const openAddVehicle = () => {
    setEditingVehicle(null);
    setVehicleModalOpen(true);
  };
  const openEditVehicle = (v: any) => {
    setEditingVehicle(v);
    setVehicleModalOpen(true);
  };
  const openMaintenance = (v: any) => {
    setMaintenanceVehicle(v);
    setMaintenanceModalOpen(true);
  };
  const openBooking = (b: any) => {
    setEditingBooking(b);
    setBookingModalOpen(true);
  };

  const selectSection = (s: Section) => {
    setSection(s);
    setSidebarOpen(false);
  };

  const printBlankContract = () => {
    // Si aspetta che ci sia un file 'contratto-vuoto.pdf' nella cartella public del sito
    window.open("/contratto-vuoto.pdf", "_blank");
  };

  const openClientContract = (pdfUrl: string) => {
    if (pdfUrl) window.open(pdfUrl, "_blank");
    else toast.error("PDF del contratto non ancora generato per questo cliente.");
  };

  if (!authChecked) {
    return (
      <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center gap-4">
        <Loader2 className="h-10 w-10 animate-spin text-[#C8A135]" />
        <p className="text-[#C8A135] font-bold tracking-widest uppercase">Verifica permessi Admin...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white flex font-sans">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/60 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* SIDEBAR */}
      <aside
        className={cn(
          "fixed lg:sticky lg:top-0 z-50 h-screen w-64 bg-[#0a0a0a] border-r border-white/10 shrink-0 transition-transform duration-300 lg:translate-x-0 overflow-y-auto",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between shrink-0">
            <div className="min-w-0">
              <h1 className="text-xl font-black font-sans tracking-wide whitespace-nowrap">
                KS <span className="text-[#C8A135]">ADMIN</span>
              </h1>
              <p className="text-white/40 text-[10px] mt-1 uppercase tracking-widest font-sans">Control Room</p>
            </div>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden p-2 text-white/40 hover:text-white shrink-0 ml-2">
              <X size={20} />
            </button>
          </div>

          {/* Nav items */}
          <nav className="flex-1 p-4 flex flex-col gap-2 overflow-y-auto">
            {sidebarItems.map((item) => (
              <button
                key={item.section}
                onClick={() => selectSection(item.section)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-semibold tracking-wide shrink-0",
                  section === item.section
                    ? "bg-[#C8A135]/10 text-[#C8A135] border border-[#C8A135]/20"
                    : "text-white/60 hover:bg-white/5 hover:text-white",
                )}
              >
                <item.icon size={18} className="shrink-0" />
                <span className="truncate">{item.title}</span>
              </button>
            ))}
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-white/10 shrink-0">
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-500/10 text-red-500 hover:bg-red-500/20 rounded-xl transition-colors text-sm font-bold"
            >
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col min-h-screen bg-[#050505] overflow-hidden min-w-0">
        <header className="h-16 lg:h-20 border-b border-white/10 flex items-center justify-between px-4 lg:px-8 bg-[#0a0a0a]/50 backdrop-blur-md shrink-0">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 text-white/60 hover:text-white min-h-[48px] min-w-[48px] flex items-center justify-center"
            >
              <Menu size={22} />
            </button>
            <h2 className="text-lg lg:text-2xl font-bold font-sans text-white truncate">
              {sidebarItems.find((s) => s.section === section)?.title}
            </h2>
          </div>
          <div className="flex items-center gap-2 lg:gap-4">
            <button
              onClick={fetchData}
              className="p-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <RefreshCw size={18} className={cn("text-[#C8A135]", loading && "animate-spin")} />
            </button>

            {/* Tasti specifici per sezione */}
            {section === "flotta" && (
              <button
                onClick={openAddVehicle}
                className="flex items-center gap-2 bg-[#C8A135] text-black px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wider hover:scale-105 transition-all shadow-[0_0_15px_rgba(200,161,53,0.3)] min-h-[44px]"
              >
                <Plus size={16} /> <span className="hidden sm:inline">Aggiungi Veicolo</span>
              </button>
            )}

            {section === "contratti" && (
              <button
                onClick={printBlankContract}
                className="flex items-center gap-2 bg-white/10 text-white border border-white/20 px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-white/20 transition-all min-h-[44px]"
              >
                <Printer size={16} /> <span className="hidden sm:inline">Contratto Vuoto</span>
              </button>
            )}
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 lg:p-8 custom-scrollbar">
          {/* FLOTTA */}
          {section === "flotta" && (
            <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden">
              {/* Desktop table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-white/5 text-white/50 text-xs uppercase tracking-widest border-b border-white/10">
                    <tr>
                      <th className="p-4">Veicolo</th>
                      <th className="p-4">Targa</th>
                      <th className="p-4">Categoria</th>
                      <th className="p-4">Tariffa Base</th>
                      <th className="p-4">Stato</th>
                      <th className="p-4 text-right">Azioni</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {vehicles.map((v) => (
                      <tr key={v.id} className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold">{v.make} {v.model}</td>
                        <td className="p-4 text-white/60 uppercase">{v.license_plate || "Nessuna Targa"}</td>
                        <td className="p-4 text-white/60">{v.category}</td>
                        <td className="p-4 text-[#C8A135] font-bold">€{(v.daily_rate ?? 0).toLocaleString("it-IT")}</td>
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
                          <button onClick={() => openEditVehicle(v)} className="p-2 text-white/40 hover:text-[#C8A135] transition-colors">
                            <Edit size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile cards */}
              <div className="md:hidden divide-y divide-white/5">
                {vehicles.map((v) => (
                  <div key={v.id} className="p-4 flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-sm">{v.make} {v.model}</p>
                        <p className="text-white/40 text-xs uppercase">{v.license_plate || "No Targa"}</p>
                      </div>
                      {v.available ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/10 text-green-500 text-[10px] font-bold border border-green-500/20">
                          <CheckCircle2 size={10} /> OK
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-500/10 text-red-500 text-[10px] font-bold border border-red-500/20">
                          <AlertCircle size={10} /> In uso
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-white/50">{v.category}</span>
                      <span className="text-[#C8A135] font-bold">€{(v.daily_rate ?? 0).toLocaleString("it-IT")}/gg</span>
                    </div>
                    <button onClick={() => openEditVehicle(v)} className="mt-1 text-xs text-[#C8A135] font-bold uppercase tracking-wider self-end">
                      Modifica →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CONTRATTI */}
          {section === "contratti" && (
            <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden">
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-white/5 text-white/50 text-xs uppercase tracking-widest border-b border-white/10">
                    <tr>
                      <th className="p-4">Cliente</th>
                      <th className="p-4">Veicolo & Targa</th>
                      <th className="p-4">Date</th>
                      <th className="p-4">Totale</th>
                      <th className="p-4">Stato</th>
                      <th className="p-4 text-right">Azioni</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {bookings.map((b) => {
                      const pdfUrl = b.signed_pdf_url || b.contract_url;
                      return (
                        <tr key={b.id} className="hover:bg-white/[0.02] transition-colors">
                          <td className="p-4">
                            <p className="font-bold">
                              {b.customer_name} {b.customer_surname}
                            </p>
                            <p className="text-xs text-white/40">{b.email || "—"}</p>
                          </td>
                          <td className="p-4 text-white/80">
                            {b.vehicles ? (
                              <>
                                <span className="font-bold">
                                  {b.vehicles.make} {b.vehicles.model}
                                </span>{" "}
                                <br />
                                <span className="text-xs text-white/40 uppercase">{b.vehicles.license_plate}</span>
                              </>
                            ) : (
                              "Veicolo Eliminato"
                            )}
                          </td>
                          <td className="p-4 text-white/60">
                            {b.start_date ? new Date(b.start_date).toLocaleDateString("it-IT") : "N/A"} <br />
                            {b.end_date ? new Date(b.end_date).toLocaleDateString("it-IT") : "N/A"}
                          </td>
                          <td className="p-4 text-[#C8A135] font-bold">
                            €{(b.total_price ?? 0).toLocaleString("it-IT")}
                          </td>
                          <td className="p-4">
                            <span
                              className={cn(
                                "inline-flex px-2.5 py-1 rounded-full text-xs font-bold border uppercase tracking-wider",
                                b.status === "pending_signature"
                                  ? "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
                                  : b.status === "active"
                                    ? "bg-green-500/10 text-green-500 border-green-500/20"
                                    : "bg-white/5 text-white/50 border-white/10",
                              )}
                            >
                              {b.status?.replace("_", " ") || "—"}
                            </span>
                          </td>
                          <td className="p-4 text-right flex items-center justify-end gap-2">
                            {pdfUrl && (
                              <button
                                onClick={() => openClientContract(pdfUrl)}
                                title="Stampa PDF"
                                className="text-white/60 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-lg transition-colors"
                              >
                                <Download size={18} />
                              </button>
                            )}
                            <button
                              onClick={() => openBooking(b)}
                              className="text-xs font-bold uppercase tracking-wider border border-white/10 hover:border-[#C8A135] hover:text-[#C8A135] px-4 py-2 rounded-lg transition-colors"
                            >
                              Gestisci
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Mobile cards */}
              <div className="md:hidden divide-y divide-white/5">
                {bookings.map((b) => {
                  const pdfUrl = b.signed_pdf_url || b.contract_url;
                  return (
                    <div key={b.id} className="p-4 flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <div className="min-w-0">
                          <p className="font-bold text-sm truncate">{b.customer_name} {b.customer_surname}</p>
                          <p className="text-white/40 text-xs truncate">{b.vehicles ? `${b.vehicles.make} ${b.vehicles.model}` : "Veicolo Eliminato"}</p>
                        </div>
                        <span
                          className={cn(
                            "shrink-0 ml-2 inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold border uppercase",
                            b.status === "pending_signature"
                              ? "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
                              : b.status === "active"
                                ? "bg-green-500/10 text-green-500 border-green-500/20"
                                : "bg-white/5 text-white/50 border-white/10",
                          )}
                        >
                          {b.status?.replace("_", " ") || "—"}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-white/50">
                          {b.start_date ? new Date(b.start_date).toLocaleDateString("it-IT") : "N/A"} → {b.end_date ? new Date(b.end_date).toLocaleDateString("it-IT") : "N/A"}
                        </span>
                        <span className="text-[#C8A135] font-bold">€{(b.total_price ?? 0).toLocaleString("it-IT")}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1 justify-end">
                        {pdfUrl && (
                          <button onClick={() => openClientContract(pdfUrl)} className="text-white/60 hover:text-white bg-white/5 p-2 rounded-lg">
                            <Download size={14} />
                          </button>
                        )}
                        <button onClick={() => openBooking(b)} className="text-xs text-[#C8A135] font-bold uppercase tracking-wider">
                          Gestisci →
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* MANUTENZIONE (ORA DIVISA PER CARTELLA/MARCA) */}
          {section === "manutenzione" && (
            <div className="space-y-10">
              {Object.entries(vehiclesByMake).map(([make, cars]) => (
                <div key={make} className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                    <Folder className="text-[#C8A135]" size={28} />
                    <h3 className="text-2xl font-black tracking-widest uppercase">{make}</h3>
                    <span className="ml-auto bg-white/10 text-white/60 text-xs px-3 py-1 rounded-full font-bold">
                      {cars.length} Unità
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {cars.map((v) => (
                      <div
                        key={v.id}
                        className="bg-black border border-white/10 p-5 rounded-xl flex flex-col hover:border-[#C8A135]/40 transition-colors"
                      >
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h4 className="font-bold text-lg text-white">{v.model}</h4>
                            <p className="text-[#C8A135] text-sm uppercase tracking-widest font-bold mt-1">
                              {v.license_plate || "No Targa"}
                            </p>
                          </div>
                          <Wrench className="text-white/20" size={20} />
                        </div>
                        <div className="space-y-3 mt-auto">
                          <div className="flex justify-between items-end border-b border-white/5 pb-2">
                            <span className="text-xs text-white/50 uppercase">Chilometri</span>
                            <span className="font-bold text-white">
                              {(v.km_current ?? 0).toLocaleString("it-IT")} km
                            </span>
                          </div>
                          <div className="flex justify-between items-end border-b border-white/5 pb-2">
                            <span className="text-xs text-white/50 uppercase">Revisione</span>
                            <span className="font-bold text-white">
                              {v.next_revision_date ? new Date(v.next_revision_date).toLocaleDateString("it-IT") : "—"}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => openMaintenance(v)}
                          className="w-full mt-5 py-2.5 bg-white/5 hover:bg-[#C8A135] hover:text-black border border-white/10 hover:border-[#C8A135] rounded-lg text-xs uppercase tracking-widest font-bold transition-all"
                        >
                          Aggiorna KM
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* MODALS (Assicurati che questi componenti esistano e funzionino) */}
      <VehicleModal
        open={vehicleModalOpen}
        onClose={() => setVehicleModalOpen(false)}
        vehicle={editingVehicle}
        onSaved={fetchData}
      />
      <MaintenanceModal
        open={maintenanceModalOpen}
        onClose={() => setMaintenanceModalOpen(false)}
        vehicle={maintenanceVehicle}
        onSaved={fetchData}
      />
      <BookingModal
        open={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        booking={editingBooking}
        onSaved={fetchData}
      />
    </div>
  );
};

export default Admin;

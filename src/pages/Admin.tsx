import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Car, Wrench, FileText, RefreshCw, LogOut, Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { Vehicle, Booking } from "@/types/database";
import {
  SidebarProvider,
  SidebarTrigger,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { toast } from "sonner";

type Section = "flotta" | "manutenzione" | "contratti";

const sidebarItems: { title: string; icon: typeof Car; section: Section }[] = [
  { title: "Flotta", icon: Car, section: "flotta" },
  { title: "Manutenzione", icon: Wrench, section: "manutenzione" },
  { title: "Contratti", icon: FileText, section: "contratti" },
];

const Admin = () => {
  const navigate = useNavigate();
  const [authChecked, setAuthChecked] = useState(false);
  const [section, setSection] = useState<Section>("flotta");
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(false);

  // Auth guard
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        navigate("/login", { replace: true });
      }
      setAuthChecked(true);
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate("/login", { replace: true });
      }
      setAuthChecked(true);
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const fetchData = async () => {
    setLoading(true);
    const [vRes, bRes] = await Promise.all([
      supabase.from("vehicles").select("*"),
      supabase.from("bookings").select("*"),
    ]);
    if (vRes.data) setVehicles(vRes.data);
    if (bRes.data) setBookings(bRes.data);
    setLoading(false);
  };

  useEffect(() => {
    if (authChecked) fetchData();
  }, [authChecked]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success("Disconnesso con successo");
    navigate("/login", { replace: true });
  };

  const isRevisionSoon = (dateStr?: string | null) => {
    if (!dateStr) return false;
    const diff = new Date(dateStr).getTime() - Date.now();
    return diff < 30 * 24 * 60 * 60 * 1000;
  };

  if (!authChecked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-10 w-10 animate-spin text-gold" />
      </div>
    );
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full pt-16">
        <Sidebar collapsible="icon">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel className="text-gold">Admin Panel</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {sidebarItems.map((item) => (
                    <SidebarMenuItem key={item.section}>
                      <SidebarMenuButton
                        onClick={() => setSection(item.section)}
                        className={section === item.section ? "bg-muted text-gold" : ""}
                      >
                        <item.icon className="mr-2 h-4 w-4" />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <div className="flex-1 flex flex-col">
          <header className="h-12 flex items-center border-b border-border px-4">
            <SidebarTrigger className="mr-4" />
            <h2 className="text-sm font-bold uppercase tracking-wider text-gold">
              {sidebarItems.find((s) => s.section === section)?.title}
            </h2>
            <div className="ml-auto flex items-center gap-3">
              <button onClick={fetchData} className="text-muted-foreground hover:text-foreground">
                <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-destructive transition-colors"
              >
                <LogOut size={14} />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </header>

          <main className="flex-1 p-6 overflow-auto">
            {section === "flotta" && (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-left text-muted-foreground">
                      <th className="pb-3 pr-4">Modello</th>
                      <th className="pb-3 pr-4">Categoria</th>
                      <th className="pb-3 pr-4">KM</th>
                      <th className="pb-3 pr-4">Prossima Revisione</th>
                      <th className="pb-3">Disponibile</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vehicles.map((v) => (
                      <tr key={v.id} className="border-b border-border/50">
                        <td className="py-3 pr-4 font-medium">{v.make} {v.model}</td>
                        <td className="py-3 pr-4 text-muted-foreground">{v.category ?? "—"}</td>
                        <td className="py-3 pr-4">{(v.km_current ?? 0).toLocaleString()} km</td>
                        <td className="py-3 pr-4">{v.next_revision_date ?? "—"}</td>
                        <td className="py-3">
                          <span className={`text-xs font-bold uppercase ${v.available ? "text-green-400" : "text-destructive"}`}>
                            {v.available ? "Sì" : "No"}
                          </span>
                        </td>
                      </tr>
                    ))}
                    {vehicles.length === 0 && (
                      <tr><td colSpan={5} className="py-8 text-center text-muted-foreground">Nessun veicolo trovato.</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}

            {section === "manutenzione" && (
              <div className="space-y-4">
                {vehicles.map((v) => (
                  <div
                    key={v.id}
                    className={`p-4 rounded-lg border ${
                      isRevisionSoon(v.next_revision_date) ? "border-gold bg-gold/5" : "border-border bg-card"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-bold">{v.make} {v.model}</p>
                        <p className="text-sm text-muted-foreground">{(v.km_current ?? 0).toLocaleString()} km</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground uppercase">Revisione</p>
                        <p className={`font-bold text-sm ${isRevisionSoon(v.next_revision_date) ? "text-gold" : ""}`}>
                          {v.next_revision_date ?? "—"}
                        </p>
                        {isRevisionSoon(v.next_revision_date) && (
                          <span className="text-xs text-gold font-semibold">⚠ Prossima</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                {vehicles.length === 0 && (
                  <p className="text-center text-muted-foreground py-8">Nessun veicolo trovato.</p>
                )}
              </div>
            )}

            {section === "contratti" && (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-left text-muted-foreground">
                      <th className="pb-3 pr-4">Cliente</th>
                      <th className="pb-3 pr-4">CF</th>
                      <th className="pb-3 pr-4">Inizio</th>
                      <th className="pb-3 pr-4">Fine</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((b) => (
                      <tr key={b.id} className="border-b border-border/50">
                        <td className="py-3 pr-4 font-medium">{b.customer_fullname ?? "—"}</td>
                        <td className="py-3 pr-4 text-muted-foreground">{b.customer_cf ?? "—"}</td>
                        <td className="py-3 pr-4">{b.start_date ?? "—"}</td>
                        <td className="py-3 pr-4">{b.end_date ?? "—"}</td>
                      </tr>
                    ))}
                    {bookings.length === 0 && (
                      <tr><td colSpan={4} className="py-8 text-center text-muted-foreground">Nessuna prenotazione trovata.</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Admin;

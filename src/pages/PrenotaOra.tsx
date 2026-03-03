import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  CalendarIcon,
  User,
  CreditCard,
  MapPin,
  Car,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Zap,
  Bike,
  Settings2,
  Mail,
  Phone,
  Map,
  CalendarDays,
  UploadCloud,
  Users,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { format, differenceInDays } from "date-fns";
import { it } from "date-fns/locale";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";
import SignatureModal from "@/components/SignatureModal";

const N8N_BASE = "https://n8n.kreareweb.com/webhook/rent";

const initialDriverState = {
  name: "",
  surname: "",
  email: "",
  phone: "",
  cf: "",
  birthDate: "", // YYYY-MM-DD
  birthPlace: "",
  residence: "",
  city: "",
  licenseFront: null as File | null,
  licenseBack: null as File | null,
};

const PrenotaOra = () => {
  const [vehicles, setVehicles] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("Tutti");
  const [selectedVehicle, setSelectedVehicle] = useState<any>(null);
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  const [mainDriver, setMainDriver] = useState({ ...initialDriverState });
  const [hasSecondDriver, setHasSecondDriver] = useState(false);
  const [secondDriver, setSecondDriver] = useState({ ...initialDriverState });
  const [loading, setLoading] = useState(false);

  const [checkingAvailability, setCheckingAvailability] = useState(false);
  const [availabilityResult, setAvailabilityResult] = useState<{
    available: boolean;
    estimated_price?: number;
    days?: number;
    price_per_day?: number;
  } | null>(null);

  const [signatureOpen, setSignatureOpen] = useState(false);
  const [bookingId, setBookingId] = useState<string>("");

  const summaryRef = useRef<HTMLDivElement>(null);
  const [showStickyBar, setShowStickyBar] = useState(true);

  useEffect(() => {
    const el = summaryRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setShowStickyBar(!entry.isIntersecting), { threshold: 0.1 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const fetchVehicles = async () => {
      const { data, error } = await supabase
        .from("vehicles")
        .select("*")
        .eq("available", true)
        .order("category", { ascending: true });
      if (data) setVehicles(data);
    };
    fetchVehicles();
  }, []);

  const checkAvailability = useCallback(async () => {
    if (!selectedVehicle || !startDate || !endDate) {
      setAvailabilityResult(null);
      return;
    }

    setCheckingAvailability(true);
    try {
      const params = new URLSearchParams({
        vehicle_id: selectedVehicle.id,
        start_date: format(startDate, "yyyy-MM-dd"),
        end_date: format(endDate, "yyyy-MM-dd"),
      });

      const res = await fetch(`${N8N_BASE}/check-availability?${params}`);
      const data = await res.json();
      setAvailabilityResult(data);
      if (!data.available) toast.error("Veicolo non disponibile in queste date");
    } catch (err) {
      setAvailabilityResult(null);
    } finally {
      setCheckingAvailability(false);
    }
  }, [selectedVehicle, startDate, endDate]);

  useEffect(() => {
    checkAvailability();
  }, [checkAvailability]);

  const categories = useMemo(() => {
    const cats = new Set(vehicles.map((v) => v.category));
    return ["Tutti", ...Array.from(cats)];
  }, [vehicles]);

  const filteredVehicles = useMemo(() => {
    if (selectedCategory === "Tutti") return vehicles;
    return vehicles.filter((v) => v.category === selectedCategory);
  }, [vehicles, selectedCategory]);

  const days =
    availabilityResult?.days ?? (startDate && endDate ? Math.max(differenceInDays(endDate, startDate), 1) : 0);
  const total = availabilityResult?.estimated_price ?? days * (selectedVehicle?.daily_rate ?? 0);
  const isAvailable = availabilityResult === null ? true : availabilityResult.available;

  const uploadFile = async (file: File | null, path: string) => {
    if (!file) return null;
    const fileExt = file.name.split(".").pop();
    const fileName = `${path}-${Date.now()}.${fileExt}`;
    const { data, error } = await supabase.storage.from("licenses").upload(fileName, file);
    if (error) throw error;
    const { data: publicUrl } = supabase.storage.from("licenses").getPublicUrl(fileName);
    return publicUrl.publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // VALIDAZIONE BLOCCANTE CON FEEDBACK
    if (!selectedVehicle) return toast.error("Seleziona un veicolo");
    if (!startDate || !endDate) return toast.error("Seleziona le date");
    if (!isAvailable) return toast.error("Veicolo non disponibile");
    if (!mainDriver.name || !mainDriver.surname || !mainDriver.cf || !mainDriver.birthDate) {
      return toast.error("Completa i dati del guidatore (Data di nascita inclusa)");
    }
    if (!mainDriver.licenseFront || !mainDriver.licenseBack) {
      return toast.error("Carica le foto della patente");
    }

    setLoading(true);
    const toastId = toast.loading("Creazione prenotazione in corso...");

    try {
      const [mainFront, mainBack] = await Promise.all([
        uploadFile(mainDriver.licenseFront, `main-front-${mainDriver.cf}`),
        uploadFile(mainDriver.licenseBack, `main-back-${mainDriver.cf}`),
      ]);

      const bookingPayload = {
        vehicle_id: selectedVehicle.id,
        start_date: format(startDate, "yyyy-MM-dd"),
        end_date: format(endDate, "yyyy-MM-dd"),
        customer: {
          name: mainDriver.name,
          surname: mainDriver.surname,
          email: mainDriver.email,
          phone: mainDriver.phone,
          tax_code: mainDriver.cf,
          birth_date: mainDriver.birthDate,
          birth_place: mainDriver.birthPlace,
          residence_address: mainDriver.residence,
          city: mainDriver.city,
        },
        license_front_url: mainFront,
        license_back_url: mainBack,
        total_price: total,
        has_second_driver: hasSecondDriver,
      };

      const res = await fetch(`${N8N_BASE}/create-booking`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingPayload),
      });

      if (res.status === 409) {
        toast.error("Veicolo già prenotato per queste date. Scegli date diverse.", { id: toastId });
        return;
      }
      if (!res.ok) throw new Error();
      const result = await res.json();

      if (result.booking_id) {
        setBookingId(result.booking_id);
        setSignatureOpen(true);
        toast.success("Prenotazione creata! Procedi con la firma.", { id: toastId });
      }
    } catch (error) {
      toast.error("Errore di connessione. Riprova.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  // SMART BIRTH DATE COMPONENT
  const BirthDateInput = ({ value, onChange }: { value: string; onChange: (iso: string) => void }) => {
    const toDisplay = (iso: string) => {
      if (!iso) return "";
      const [y, m, d] = iso.split("-");
      return `${d}/${m}/${y}`;
    };

    const [display, setDisplay] = useState(toDisplay(value));
    const nativeRef = useRef<HTMLInputElement>(null);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      let v = e.target.value.replace(/\D/g, "").slice(0, 8);
      let fmt = v;
      if (v.length > 2) fmt = v.slice(0, 2) + "/" + v.slice(2);
      if (v.length > 4) fmt = fmt.slice(0, 5) + "/" + fmt.slice(5);
      setDisplay(fmt);

      if (v.length === 8) {
        const d = v.slice(0, 2),
          m = v.slice(2, 4),
          y = v.slice(4);
        onChange(`${y}-${m}-${d}`);
      }
    };

    return (
      <div className="relative group/birth">
        <CalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/30 group-focus-within/birth:text-gold transition-colors z-10" />
        <Input
          inputMode="numeric"
          placeholder="GG/MM/AAAA"
          value={display}
          onChange={handleInput}
          className="pl-12 h-14 bg-[#111] border-white/10 focus:border-gold rounded-xl font-mono"
        />
        <input
          type="date"
          ref={nativeRef}
          className="sr-only"
          onChange={(e) => {
            onChange(e.target.value);
            setDisplay(toDisplay(e.target.value));
          }}
        />
        <button
          type="button"
          onClick={() => nativeRef.current?.showPicker()}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-white/40 hover:text-gold uppercase font-bold"
        >
          Calendario
        </button>
      </div>
    );
  };

  const DriverFields = ({ driver, setDriver }: any) => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label className="text-[10px] uppercase tracking-[0.2em] text-white/40">Nome</Label>
          <Input
            value={driver.name}
            onChange={(e) => setDriver({ ...driver, name: e.target.value })}
            className="h-14 bg-[#111] border-white/10 rounded-xl"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-[10px] uppercase tracking-[0.2em] text-white/40">Cognome</Label>
          <Input
            value={driver.surname}
            onChange={(e) => setDriver({ ...driver, surname: e.target.value })}
            className="h-14 bg-[#111] border-white/10 rounded-xl"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label className="text-[10px] uppercase tracking-[0.2em] text-white/40">Data di Nascita</Label>
          <BirthDateInput value={driver.birthDate} onChange={(val) => setDriver({ ...driver, birthDate: val })} />
        </div>
        <div className="space-y-2">
          <Label className="text-[10px] uppercase tracking-[0.2em] text-white/40">Codice Fiscale</Label>
          <Input
            value={driver.cf}
            onChange={(e) => setDriver({ ...driver, cf: e.target.value.toUpperCase() })}
            className="h-14 bg-[#111] border-white/10 rounded-xl uppercase font-mono"
          />
        </div>
      </div>

      {/* SEZIONE DOCUMENTI */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
        <div className="space-y-2">
          <Label className="text-[10px] uppercase tracking-[0.2em] text-white/40">Patente Fronte</Label>
          <label className="flex flex-col items-center justify-center h-32 border-2 border-dashed border-white/10 rounded-xl hover:bg-gold/5 cursor-pointer transition-all">
            <input
              type="file"
              className="hidden"
              onChange={(e) => setDriver({ ...driver, licenseFront: e.target.files?.[0] })}
            />
            {driver.licenseFront ? <CheckCircle2 className="text-gold" /> : <UploadCloud className="text-white/20" />}
            <span className="text-[10px] mt-2 text-white/40">{driver.licenseFront?.name || "CARICA FILE"}</span>
          </label>
        </div>
        <div className="space-y-2">
          <Label className="text-[10px] uppercase tracking-[0.2em] text-white/40">Patente Retro</Label>
          <label className="flex flex-col items-center justify-center h-32 border-2 border-dashed border-white/10 rounded-xl hover:bg-gold/5 cursor-pointer transition-all">
            <input
              type="file"
              className="hidden"
              onChange={(e) => setDriver({ ...driver, licenseBack: e.target.files?.[0] })}
            />
            {driver.licenseBack ? <CheckCircle2 className="text-gold" /> : <UploadCloud className="text-white/20" />}
            <span className="text-[10px] mt-2 text-white/40">{driver.licenseBack?.name || "CARICA FILE"}</span>
          </label>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-[#050505] min-h-screen text-white pt-24 pb-32 selection:bg-gold selection:text-black">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <form id="booking-form" onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* COLONNA SINISTRA */}
          <div className="lg:col-span-8 space-y-8">
            <section className="bg-[#0a0a0a] p-8 rounded-[2rem] border border-white/5">
              <h2 className="text-2xl font-display font-bold mb-8 text-gold">1. Veicolo & Date</h2>

              {/* Selezione Veicoli Rapida */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {vehicles.slice(0, 6).map((v) => (
                  <div
                    key={v.id}
                    onClick={() => setSelectedVehicle(v)}
                    className={cn(
                      "p-4 rounded-2xl border transition-all cursor-pointer",
                      selectedVehicle?.id === v.id ? "border-gold bg-gold/5" : "border-white/5 bg-[#111]",
                    )}
                  >
                    <img src={v.image_url} className="w-full h-20 object-contain mb-2" />
                    <p className="text-xs font-bold text-center">
                      {v.make} {v.model}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-[10px] uppercase tracking-[0.2em] text-white/40">Inizio Noleggio</Label>
                  <Input
                    type="date"
                    className="h-14 bg-[#111] border-white/10"
                    onChange={(e) => setStartDate(new Date(e.target.value))}
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] uppercase tracking-[0.2em] text-white/40">Fine Noleggio</Label>
                  <Input
                    type="date"
                    className="h-14 bg-[#111] border-white/10"
                    onChange={(e) => setEndDate(new Date(e.target.value))}
                  />
                </div>
              </div>
            </section>

            <section className="bg-[#0a0a0a] p-8 rounded-[2rem] border border-white/5">
              <h2 className="text-2xl font-display font-bold mb-8 text-gold">2. Dati Anagrafici</h2>
              <DriverFields driver={mainDriver} setDriver={setMainDriver} />
            </section>
          </div>

          {/* COLONNA DESTRA (Sticky) */}
          <div className="lg:col-span-4" ref={summaryRef}>
            <div className="sticky top-28 bg-[#0a0a0a] border border-gold/20 rounded-[2rem] p-8">
              <h3 className="text-xl font-display font-bold mb-6 italic">Il Tuo Viaggio</h3>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-white/40">Veicolo</span>
                  <span className="text-gold">
                    {selectedVehicle ? `${selectedVehicle.make} ${selectedVehicle.model}` : "---"}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/40">Durata</span>
                  <span>{days} Giorni</span>
                </div>
                <div className="pt-4 border-t border-white/5 flex justify-between items-center">
                  <span className="text-lg">Totale</span>
                  <span className="text-3xl font-black text-gold">€{total}</span>
                </div>
              </div>

              <Button
                type="submit"
                disabled={loading || checkingAvailability}
                className="w-full h-16 bg-white text-black hover:bg-gold font-black uppercase tracking-widest rounded-xl shadow-xl transition-all"
              >
                {loading ? <Loader2 className="animate-spin" /> : "Conferma Prenotazione"}
              </Button>

              <p className="text-[9px] text-center text-white/20 mt-4 uppercase tracking-widest">
                Nessun pagamento anticipato richiesto
              </p>
            </div>
          </div>
        </form>
      </div>

      {/* MODALE FIRMA */}
      <SignatureModal
        open={signatureOpen}
        bookingId={bookingId}
        onClose={() => setSignatureOpen(false)}
        onSuccess={() => {
          setSignatureOpen(false);
          toast.success("Tutto pronto! Ti aspettiamo.");
        }}
      />
    </div>
  );
};

export default PrenotaOra;

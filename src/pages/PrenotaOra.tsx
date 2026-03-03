import { useState, useEffect, useMemo, useRef } from "react";
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

const FALLBACK_LABEL = "Prezzo su richiesta";

// Struttura dati guidatore
const initialDriverState = {
  name: "",
  surname: "",
  email: "",
  phone: "",
  cf: "",
  birthDate: "",
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

  // Dati Form
  const [mainDriver, setMainDriver] = useState({ ...initialDriverState });
  const [hasSecondDriver, setHasSecondDriver] = useState(false);
  const [secondDriver, setSecondDriver] = useState({ ...initialDriverState });
  const [loading, setLoading] = useState(false);

  // Mobile Sticky Bar
  const summaryRef = useRef<HTMLDivElement>(null);
  const [showStickyBar, setShowStickyBar] = useState(true);

  useEffect(() => {
    const el = summaryRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowStickyBar(!entry.isIntersecting),
      { threshold: 0.1 }
    );
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
      if (error) console.error("Errore recupero veicoli:", error);
    };
    fetchVehicles();
  }, []);

  const categories = useMemo(() => {
    const cats = new Set(vehicles.map((v) => v.category));
    return ["Tutti", ...Array.from(cats)];
  }, [vehicles]);

  const filteredVehicles = useMemo(() => {
    if (selectedCategory === "Tutti") return vehicles;
    return vehicles.filter((v) => v.category === selectedCategory);
  }, [vehicles, selectedCategory]);

  const days = startDate && endDate ? Math.max(differenceInDays(endDate, startDate), 1) : 0;
  const dailyRate = selectedVehicle?.daily_rate ?? 0;
  const total = days * dailyRate;

  // Funzione helper per l'upload file
  const uploadFile = async (file: File | null, path: string) => {
    if (!file) return null;
    const fileExt = file.name.split(".").pop();
    const fileName = `${path}-${Math.random()}.${fileExt}`;
    const { data, error } = await supabase.storage.from("licenses").upload(fileName, file);
    if (error) throw error;
    const { data: publicUrl } = supabase.storage.from("licenses").getPublicUrl(fileName);
    return publicUrl.publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedVehicle) {
      toast.error("Seleziona prima un veicolo.");
      return;
    }
    if (!startDate || !endDate) {
      toast.error("Seleziona le date di noleggio.");
      return;
    }
    if (!mainDriver.licenseFront || !mainDriver.licenseBack) {
      toast.error("Inserisci le foto della patente del guidatore principale.");
      return;
    }
    if (hasSecondDriver && (!secondDriver.licenseFront || !secondDriver.licenseBack)) {
      toast.error("Inserisci le foto della patente del secondo guidatore.");
      return;
    }

    setLoading(true);
    try {
      // 1. Upload File
      const mainFrontUrl = await uploadFile(mainDriver.licenseFront, `front-${mainDriver.cf}`);
      const mainBackUrl = await uploadFile(mainDriver.licenseBack, `back-${mainDriver.cf}`);

      let secondFrontUrl = null;
      let secondBackUrl = null;
      if (hasSecondDriver) {
        secondFrontUrl = await uploadFile(secondDriver.licenseFront, `front-${secondDriver.cf}`);
        secondBackUrl = await uploadFile(secondDriver.licenseBack, `back-${secondDriver.cf}`);
      }

      // 2. Insert into Database
      const { error } = await supabase.from("bookings").insert({
        vehicle_id: selectedVehicle.id,
        start_date: format(startDate, "yyyy-MM-dd"),
        end_date: format(endDate, "yyyy-MM-dd"),
        total_price: total,

        // Main Driver
        customer_name: mainDriver.name,
        customer_surname: mainDriver.surname,
        email: mainDriver.email,
        phone: mainDriver.phone,
        tax_code: mainDriver.cf,
        birth_date: mainDriver.birthDate,
        birth_place: mainDriver.birthPlace,
        residence_address: mainDriver.residence,
        city: mainDriver.city,
        license_front_url: mainFrontUrl,
        license_back_url: mainBackUrl,

        // Second Driver
        has_second_driver: hasSecondDriver,
        second_driver_name: hasSecondDriver ? secondDriver.name : null,
        second_driver_surname: hasSecondDriver ? secondDriver.surname : null,
        second_driver_email: hasSecondDriver ? secondDriver.email : null,
        second_driver_phone: hasSecondDriver ? secondDriver.phone : null,
        second_driver_cf: hasSecondDriver ? secondDriver.cf : null,
        second_driver_birth_date: hasSecondDriver ? secondDriver.birthDate : null,
        second_driver_birth_place: hasSecondDriver ? secondDriver.birthPlace : null,
        second_driver_residence: hasSecondDriver ? secondDriver.residence : null,
        second_driver_city: hasSecondDriver ? secondDriver.city : null,
        second_driver_license_front_url: secondFrontUrl,
        second_driver_license_back_url: secondBackUrl,
      });

      if (error) throw error;

      toast.success("Prenotazione confermata! Ti contatteremo per la firma del contratto.");
      // Reset Form
      setMainDriver({ ...initialDriverState });
      setSecondDriver({ ...initialDriverState });
      setHasSecondDriver(false);
      setStartDate(undefined);
      setEndDate(undefined);
      setSelectedVehicle(null);
    } catch (error) {
      toast.error("Errore durante la prenotazione. Riprova.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const getCategoryIcon = (category: string) => {
    if (category === "Scooter/Moto") return <Bike className="w-4 h-4" />;
    if (category === "Quad") return <Settings2 className="w-4 h-4" />;
    if (category === "Supercar/Premium") return <Zap className="w-4 h-4" />;
    return <Car className="w-4 h-4" />;
  };

  // Helper component for Driver Form
  const DriverFormFields = ({ driver, setDriver, prefix }: { driver: any; setDriver: any; prefix: string }) => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="space-y-2">
          <Label className="text-xs uppercase tracking-widest text-white/50">Nome</Label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/30" />
            <Input
              required
              value={driver.name}
              onChange={(e) => setDriver({ ...driver, name: e.target.value })}
              className="pl-12 h-14 bg-[#111] border-white/10 focus:border-gold focus:ring-1 focus:ring-gold rounded-xl text-white"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label className="text-xs uppercase tracking-widest text-white/50">Cognome</Label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/30" />
            <Input
              required
              value={driver.surname}
              onChange={(e) => setDriver({ ...driver, surname: e.target.value })}
              className="pl-12 h-14 bg-[#111] border-white/10 focus:border-gold focus:ring-1 focus:ring-gold rounded-xl text-white"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="space-y-2">
          <Label className="text-xs uppercase tracking-widest text-white/50">Data di Nascita</Label>
          <div className="relative">
            <CalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/30" />
            <Input
              required
              type="date"
              value={driver.birthDate}
              onChange={(e) => setDriver({ ...driver, birthDate: e.target.value })}
              className="pl-12 h-14 bg-[#111] border-white/10 focus:border-gold focus:ring-1 focus:ring-gold rounded-xl text-white appearance-none color-scheme-dark"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label className="text-xs uppercase tracking-widest text-white/50">Luogo di Nascita</Label>
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/30" />
            <Input
              required
              value={driver.birthPlace}
              onChange={(e) => setDriver({ ...driver, birthPlace: e.target.value })}
              className="pl-12 h-14 bg-[#111] border-white/10 focus:border-gold focus:ring-1 focus:ring-gold rounded-xl text-white"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="space-y-2">
          <Label className="text-xs uppercase tracking-widest text-white/50">Indirizzo Residenza</Label>
          <div className="relative">
            <Map className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/30" />
            <Input
              required
              value={driver.residence}
              onChange={(e) => setDriver({ ...driver, residence: e.target.value })}
              placeholder="Via Roma 1"
              className="pl-12 h-14 bg-[#111] border-white/10 focus:border-gold focus:ring-1 focus:ring-gold rounded-xl text-white"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label className="text-xs uppercase tracking-widest text-white/50">Città</Label>
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/30" />
            <Input
              required
              value={driver.city}
              onChange={(e) => setDriver({ ...driver, city: e.target.value })}
              placeholder="Roma"
              className="pl-12 h-14 bg-[#111] border-white/10 focus:border-gold focus:ring-1 focus:ring-gold rounded-xl text-white"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        <div className="space-y-2">
          <Label className="text-xs uppercase tracking-widest text-white/50">Codice Fiscale</Label>
          <div className="relative">
            <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/30" />
            <Input
              required
              maxLength={16}
              value={driver.cf}
              onChange={(e) => setDriver({ ...driver, cf: e.target.value.toUpperCase() })}
              className="pl-12 h-14 bg-[#111] border-white/10 focus:border-gold focus:ring-1 focus:ring-gold rounded-xl text-white uppercase"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label className="text-xs uppercase tracking-widest text-white/50">Email</Label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/30" />
            <Input
              required
              type="email"
              value={driver.email}
              onChange={(e) => setDriver({ ...driver, email: e.target.value })}
              className="pl-12 h-14 bg-[#111] border-white/10 focus:border-gold focus:ring-1 focus:ring-gold rounded-xl text-white"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label className="text-xs uppercase tracking-widest text-white/50">Telefono</Label>
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/30" />
            <Input
              required
              type="tel"
              value={driver.phone}
              onChange={(e) => setDriver({ ...driver, phone: e.target.value })}
              className="pl-12 h-14 bg-[#111] border-white/10 focus:border-gold focus:ring-1 focus:ring-gold rounded-xl text-white"
            />
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-white/5">
        <h3 className="text-sm font-bold text-gold mb-4 flex items-center gap-2">
          <ShieldCheck size={16} /> Documenti (Patente)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label className="text-xs uppercase tracking-widest text-white/50 mb-2 block">Foto Fronte</Label>
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-white/20 hover:border-gold hover:bg-gold/5 rounded-xl cursor-pointer transition-colors relative overflow-hidden">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                required
                onChange={(e) => setDriver({ ...driver, licenseFront: e.target.files?.[0] || null })}
              />
              {driver.licenseFront ? (
                <div className="text-center text-gold">
                  <CheckCircle2 className="mx-auto mb-2" size={24} />{" "}
                  <span className="text-xs font-bold">{driver.licenseFront.name}</span>
                </div>
              ) : (
                <div className="text-center text-white/40">
                  <UploadCloud className="mx-auto mb-2" size={24} />{" "}
                  <span className="text-xs uppercase font-semibold tracking-wider">Carica Fronte</span>
                </div>
              )}
            </label>
          </div>
          <div>
            <Label className="text-xs uppercase tracking-widest text-white/50 mb-2 block">Foto Retro</Label>
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-white/20 hover:border-gold hover:bg-gold/5 rounded-xl cursor-pointer transition-colors relative overflow-hidden">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                required
                onChange={(e) => setDriver({ ...driver, licenseBack: e.target.files?.[0] || null })}
              />
              {driver.licenseBack ? (
                <div className="text-center text-gold">
                  <CheckCircle2 className="mx-auto mb-2" size={24} />{" "}
                  <span className="text-xs font-bold">{driver.licenseBack.name}</span>
                </div>
              ) : (
                <div className="text-center text-white/40">
                  <UploadCloud className="mx-auto mb-2" size={24} />{" "}
                  <span className="text-xs uppercase font-semibold tracking-wider">Carica Retro</span>
                </div>
              )}
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-[#050505] min-h-screen text-white pt-24 pb-32 lg:pb-16 selection:bg-gold selection:text-black overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gold/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-white/5 rounded-full blur-[150px]" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 relative z-10">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-10 md:mb-12">
          <div className="flex items-center gap-3 md:gap-4 mb-4">
            <img src={logo} alt="KS Rent" className="h-8 md:h-10 w-auto" />
            <div className="w-6 md:w-8 h-[2px] bg-gold"></div>
            <span className="text-gold text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-semibold">
              Fast Booking
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-black leading-tight break-words">
            Prenota <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Ora.</span>
          </h1>
        </motion.div>

        <form id="booking-form" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* LEFT COLUMN */}
            <div className="lg:col-span-8 space-y-6 md:space-y-8">
              {/* STEP 1: VEICOLO */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="bg-[#0a0a0a] border border-white/10 rounded-2xl md:rounded-[2rem] p-5 sm:p-6 md:p-10 relative overflow-hidden group"
              >
                <h2 className="text-xl md:text-2xl font-display font-bold mb-5 md:mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 text-sm border border-white/10 text-gold">
                    1
                  </span>
                  Scegli il Veicolo
                </h2>
                {vehicles.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-5">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setSelectedCategory(cat)}
                        className={cn(
                          "px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all duration-300 relative z-20",
                          selectedCategory === cat
                            ? "bg-gold text-black"
                            : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white",
                        )}
                      >
                        {cat !== "Tutti" && getCategoryIcon(cat)} {cat}
                      </button>
                    ))}
                  </div>
                )}
                <div className="grid grid-cols-2 gap-3 md:gap-4 max-h-[500px] overflow-y-auto pr-2 pb-4">
                  {filteredVehicles.map((v) => {
                    const isSelected = selectedVehicle?.id === v.id;
                    return (
                      <div
                        key={v.id}
                        onClick={() => setSelectedVehicle(v)}
                        className={cn(
                          "p-3 rounded-xl md:rounded-2xl border cursor-pointer transition-all duration-300 flex flex-col group/card relative z-20",
                          isSelected
                            ? "bg-gold/5 border-gold shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                            : "bg-[#111] border-white/10 hover:border-white/30",
                        )}
                      >
                        <div className="relative w-full h-24 sm:h-32 mb-3 rounded-lg sm:rounded-xl overflow-hidden bg-black/50">
                          <img
                            src={v.image_url}
                            alt={v.model}
                            className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 pointer-events-none" />
                          {isSelected && (
                            <div className="absolute top-2 right-2 bg-gold text-black rounded-full p-1">
                              <CheckCircle2 size={14} />
                            </div>
                          )}
                        </div>
                        <span className="font-bold text-sm sm:text-base leading-tight px-1 group-hover/card:text-gold transition-colors">
                          {v.make} {v.model}
                        </span>
                        <span className="text-xs text-gold/80 font-semibold px-1 mt-1">€{v.daily_rate}/giorno</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* STEP 2: DATE */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="bg-[#0a0a0a] border border-white/10 rounded-2xl md:rounded-[2rem] p-5 sm:p-6 md:p-10 relative overflow-hidden group"
              >
                <h2 className="text-xl md:text-2xl font-display font-bold mb-5 md:mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 text-sm border border-white/10 text-gold">
                    2
                  </span>
                  Periodo di Noleggio
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-3">
                    <Label className="text-xs uppercase tracking-widest text-white/50">Ritiro</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left bg-[#111] border-white/10 hover:border-gold/50 hover:bg-[#151515] h-14 rounded-xl text-base relative z-20",
                            !startDate && "text-white/40",
                          )}
                        >
                          <CalendarIcon className="mr-3 h-5 w-5 text-gold" />
                          {startDate ? format(startDate, "dd MMM yyyy", { locale: it }) : "Seleziona Data"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-[#111] border-white/10 text-white rounded-2xl z-50">
                        <Calendar
                          mode="single"
                          selected={startDate}
                          onSelect={setStartDate}
                          disabled={(d) => d < new Date()}
                          className="p-4"
                          classNames={{ day_selected: "bg-gold text-black hover:bg-gold/80" }}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="space-y-3">
                    <Label className="text-xs uppercase tracking-widest text-white/50">Riconsegna</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left bg-[#111] border-white/10 hover:border-gold/50 hover:bg-[#151515] h-14 rounded-xl text-base relative z-20",
                            !endDate && "text-white/40",
                          )}
                        >
                          <CalendarIcon className="mr-3 h-5 w-5 text-gold" />
                          {endDate ? format(endDate, "dd MMM yyyy", { locale: it }) : "Seleziona Data"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-[#111] border-white/10 text-white rounded-2xl z-50">
                        <Calendar
                          mode="single"
                          selected={endDate}
                          onSelect={setEndDate}
                          disabled={(d) => d < (startDate || new Date())}
                          className="p-4"
                          classNames={{ day_selected: "bg-gold text-black hover:bg-gold/80" }}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              </motion.div>

              {/* STEP 3: DATI PRINCIPALI */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="bg-[#0a0a0a] border border-white/10 rounded-2xl md:rounded-[2rem] p-5 sm:p-6 md:p-10 relative overflow-hidden group"
              >
                <h2 className="text-xl md:text-2xl font-display font-bold mb-5 md:mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 text-sm border border-white/10 text-gold">
                    3
                  </span>
                  Dati Guidatore Principale
                </h2>
                <DriverFormFields driver={mainDriver} setDriver={setMainDriver} prefix="main" />
              </motion.div>

              {/* STEP 4: SECONDO GUIDATORE */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className={cn(
                  "bg-[#0a0a0a] border border-white/10 rounded-2xl md:rounded-[2rem] p-5 sm:p-6 md:p-10 relative overflow-hidden transition-all duration-500",
                  hasSecondDriver ? "ring-1 ring-gold/30" : "",
                )}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <h2 className="text-xl md:text-2xl font-display font-bold flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 text-sm border border-white/10 text-gold">
                      4
                    </span>
                    Secondo Guidatore <span className="text-white/40 text-sm font-normal">(Opzionale)</span>
                  </h2>
                  <button
                    type="button"
                    onClick={() => setHasSecondDriver(!hasSecondDriver)}
                    className={cn(
                      "px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all",
                      hasSecondDriver
                        ? "bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500/20"
                        : "bg-gold text-black shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:bg-yellow-400",
                    )}
                  >
                    {hasSecondDriver ? "Rimuovi" : "+ Aggiungi"}
                  </button>
                </div>

                {hasSecondDriver && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="pt-4 border-t border-white/5 mt-4"
                  >
                    <DriverFormFields driver={secondDriver} setDriver={setSecondDriver} prefix="second" />
                  </motion.div>
                )}
              </motion.div>
            </div>

            {/* RIGHT COLUMN: WIDGET RIEPILOGO */}
            <div className="lg:col-span-4 relative" ref={summaryRef}>
              <div className="lg:sticky lg:top-28 w-full bg-[#0a0a0a] border border-gold/20 shadow-[0_0_40px_rgba(212,175,55,0.05)] rounded-2xl md:rounded-[2rem] overflow-hidden">
                <div className="p-6 md:p-8 border-b border-white/5 bg-[#111] relative min-h-[140px] flex flex-col justify-end">
                  {selectedVehicle ? (
                    <>
                      <div className="absolute inset-0 z-0 pointer-events-none">
                        <img
                          src={selectedVehicle.image_url}
                          alt="Selected"
                          className="w-full h-full object-cover opacity-40"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/80 to-transparent" />
                      </div>
                      <div className="relative z-10">
                        <span className="text-gold text-xs font-semibold uppercase tracking-wider">
                          {selectedVehicle.category}
                        </span>
                        <h3 className="text-2xl font-display font-bold text-white">
                          {selectedVehicle.make} {selectedVehicle.model}
                        </h3>
                      </div>
                    </>
                  ) : (
                    <div className="relative z-10 flex flex-col justify-center h-full">
                      <span className="text-white/50 text-sm font-semibold uppercase tracking-wider mb-2">
                        Riepilogo Live
                      </span>
                      <h3 className="text-xl font-display font-bold text-white/30">Nessun veicolo</h3>
                    </div>
                  )}
                </div>

                <div className="p-6 md:p-8 space-y-6">
                  <div className="flex justify-between items-end pb-6 border-b border-white/5">
                    <div>
                      <p className="text-white/50 text-sm mb-1">Tariffa</p>
                      <p className="text-white text-lg">
                        {dailyRate > 0 ? `€${dailyRate}/gg` : <span className="text-white/40 text-sm">Seleziona</span>}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-white/50 text-sm mb-1">Durata</p>
                      <p className="text-gold font-bold text-xl">
                        {days} Giorn{days !== 1 ? "i" : "o"}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 py-2">
                    <div className="flex items-center gap-3 text-sm text-white/70">
                      <CheckCircle2 className="text-gold shrink-0" size={16} /> Guidatore principale
                    </div>
                    {hasSecondDriver && (
                      <div className="flex items-center gap-3 text-sm text-white/70">
                        <Users className="text-gold shrink-0" size={16} /> Secondo guidatore incluso
                      </div>
                    )}
                  </div>

                  <div className="pt-6 border-t border-white/5 flex justify-between items-center">
                    <span className="text-lg text-white/70">Totale stimato</span>
                    <span className="text-4xl font-black font-display text-gold">€{total}</span>
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full h-16 mt-4 bg-white text-black hover:bg-gold font-black uppercase tracking-widest rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] group text-sm relative z-20"
                  >
                    {loading ? (
                      "Caricamento dati..."
                    ) : (
                      <span className="flex items-center">
                        Conferma Prenotazione{" "}
                        <ArrowRight size={18} className="ml-3 group-hover:translate-x-1 transition-transform" />
                      </span>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </form>

        {/* MOBILE STICKY BOTTOM BAR */}
        <AnimatePresence>
          {showStickyBar && (
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed bottom-0 left-0 w-full z-[100] bg-[#0a0a0a]/90 backdrop-blur-xl border-t border-gold/20 p-4 pb-[env(safe-area-inset-bottom,16px)] shadow-[0_-10px_40px_rgba(0,0,0,0.5)] lg:hidden"
            >
              <div className="flex items-center justify-between gap-4 max-w-7xl mx-auto">
                <div className="flex flex-col">
                  <span className="text-[11px] uppercase tracking-widest text-white/50">Totale stimato</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black font-display text-gold">€{total}</span>
                    {days > 0 && (
                      <span className="text-xs text-white/40">
                        / {days} giorn{days !== 1 ? "i" : "o"}
                      </span>
                    )}
                  </div>
                </div>
                <Button
                  form="booking-form"
                  type="submit"
                  disabled={loading}
                  className="h-12 px-6 bg-black text-white border border-gold/40 hover:bg-gold hover:text-black font-bold uppercase tracking-wider rounded-xl transition-all duration-300 text-xs shrink-0"
                >
                  {loading ? "..." : (
                    <span className="flex items-center gap-2">
                      Conferma <ArrowRight size={14} />
                    </span>
                  )}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PrenotaOra;

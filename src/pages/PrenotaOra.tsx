import { useState, useEffect, useMemo } from "react";
import { motion, Variants } from "framer-motion";
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

const DAILY_RATE = 45; // Tariffa base fissa per ora

// ==========================================
// 📸 MAPPA DELLE IMMAGINI DEI VEICOLI
// Cambia questi link con le tue foto reali!
// ==========================================
const VEHICLE_IMAGES: Record<string, string> = {
  "Fiat Panda": "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/FIAT%20PANDA.jpg",
  "Jeep Avenger": "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/AVENGER.jpg",
  "Audi RS3 (Grigio)":
    "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/AUDI%20RS3%20GRIGIA.jpg",
  "Audi RS3 (Verde)":
    "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/AUDI%20RS3%20VERDE.jpg",
  "BMW M2": "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/BMW%20M2.avif",
  "Mercedes Classe A180d":
    "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/mercedes-classe-a.180d.webp",
  "Mercedes Classe A45s":
    "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/Mercedes-classea45s.webp",
  "Honda SH 125": "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/HONDA%20SH125.jpg",
  "Honda SH 350": "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/HONDA%20SH350.webp",
  "Yamaha Quad": "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/YAMAHA%20QUAD.jpg",
};

// Immagine di fallback se il nome non fa match
const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80";

const getVehicleImage = (vehicle: any) => {
  if (vehicle.image_url) return vehicle.image_url; // Se c'è un link nel DB, usa quello
  return VEHICLE_IMAGES[vehicle.model] || DEFAULT_IMAGE; // Altrimenti usa la mappa qui sopra
};

const PrenotaOra = () => {
  const [vehicles, setVehicles] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("Tutti");
  const [selectedVehicle, setSelectedVehicle] = useState<any>(null);

  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [form, setForm] = useState({ fullname: "", cf: "", license: "", residence: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchVehicles = async () => {
      const { data, error } = await supabase
        .from("vehicles")
        .select("*")
        .eq("is_available", true)
        .order("category", { ascending: true });

      if (data) setVehicles(data);
      if (error) console.error("Errore recupero veicoli:", error);
    };
    fetchVehicles();
  }, []);

  // Estrai categorie uniche dalla flotta
  const categories = useMemo(() => {
    const cats = new Set(vehicles.map((v) => v.category));
    return ["Tutti", ...Array.from(cats)];
  }, [vehicles]);

  // Filtra veicoli in base alla categoria scelta
  const filteredVehicles = useMemo(() => {
    if (selectedCategory === "Tutti") return vehicles;
    return vehicles.filter((v) => v.category === selectedCategory);
  }, [vehicles, selectedCategory]);

  const days = startDate && endDate ? Math.max(differenceInDays(endDate, startDate), 1) : 0;
  const total = days * DAILY_RATE;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedVehicle) {
      toast.error("Seleziona prima un veicolo dalla flotta.");
      return;
    }
    if (!startDate || !endDate) {
      toast.error("Seleziona le date di inizio e fine noleggio.");
      return;
    }

    setLoading(true);
    const { error } = await supabase.from("bookings").insert({
      vehicle_id: selectedVehicle.id,
      start_date: format(startDate, "yyyy-MM-dd"),
      end_date: format(endDate, "yyyy-MM-dd"),
      customer_fullname: form.fullname.trim(),
      customer_cf: form.cf.trim(),
      customer_license: form.license.trim(),
      customer_residence: form.residence.trim(),
    });
    setLoading(false);

    if (error) {
      toast.error("Errore durante la prenotazione. Riprova.");
      console.error(error);
    } else {
      toast.success("Prenotazione confermata! Ti contatteremo presto.");
      setForm({ fullname: "", cf: "", license: "", residence: "" });
      setStartDate(undefined);
      setEndDate(undefined);
      setSelectedVehicle(null);
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

  return (
    <div className="bg-[#050505] min-h-screen text-white pt-24 pb-16 selection:bg-gold selection:text-black">
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <img src={logo} alt="KS Rent" className="h-10 w-auto" />
            <div className="w-8 h-[2px] bg-gold"></div>
            <span className="text-gold text-sm uppercase tracking-[0.3em] font-semibold">Fast Booking</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-black tracking-tighter">
            Prenota <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Ora.</span>
          </h1>
        </motion.div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* LEFT COLUMN */}
            <div className="lg:col-span-7 space-y-8">
              {/* Step 1: Vehicle Selection with Categories & Photos */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 md:p-10 relative overflow-hidden group hover:border-white/20 transition-colors"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-gold/50 opacity-0 group-hover:opacity-100 transition-opacity" />

                <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 text-sm border border-white/10 text-gold">
                    1
                  </span>
                  Scegli il Veicolo
                </h2>

                {/* Categories Filter Tabs */}
                {vehicles.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setSelectedCategory(cat)}
                        className={cn(
                          "px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all duration-300",
                          selectedCategory === cat
                            ? "bg-gold text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                            : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white",
                        )}
                      >
                        {cat !== "Tutti" && getCategoryIcon(cat)}
                        {cat}
                      </button>
                    ))}
                  </div>
                )}

                {vehicles.length === 0 ? (
                  <div className="h-32 flex items-center justify-center text-white/40 border border-white/5 rounded-2xl bg-[#111]">
                    Caricamento flotta in corso...
                  </div>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-2 gap-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar pb-4">
                    {filteredVehicles.map((v) => {
                      const isSelected = selectedVehicle?.id === v.id;
                      const imageUrl = getVehicleImage(v);

                      return (
                        <div
                          key={v.id}
                          onClick={() => setSelectedVehicle(v)}
                          className={cn(
                            "p-3 rounded-2xl border cursor-pointer transition-all duration-300 flex flex-col group relative overflow-hidden",
                            isSelected
                              ? "bg-gradient-to-br from-gold/20 to-gold/5 border-gold shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                              : "bg-[#111] border-white/10 hover:border-white/30 hover:bg-[#151515]",
                          )}
                        >
                          {/* Vehicle Photo */}
                          <div className="relative w-full h-32 mb-3 rounded-xl overflow-hidden bg-black/50">
                            <img
                              src={imageUrl}
                              alt={v.model}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                            {isSelected && (
                              <div className="absolute top-2 right-2 bg-gold text-black rounded-full p-1 shadow-lg">
                                <CheckCircle2 size={16} />
                              </div>
                            )}
                            <div className="absolute bottom-2 left-2 flex items-center gap-1 text-[10px] uppercase font-bold text-white/80 tracking-wider">
                              {getCategoryIcon(v.category)} {v.category}
                            </div>
                          </div>

                          {/* Vehicle Info */}
                          <span className="font-bold text-base md:text-lg leading-tight px-1 group-hover:text-gold transition-colors">
                            {v.model}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </motion.div>

              {/* Step 2: Dates */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 md:p-10 relative overflow-hidden group hover:border-white/20 transition-colors"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-gold/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 text-sm border border-white/10 text-gold">
                    2
                  </span>
                  Periodo di Noleggio
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label className="text-xs uppercase tracking-widest text-white/50">Ritiro</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left bg-[#111] border-white/10 hover:border-gold/50 hover:bg-[#151515] h-14 rounded-xl text-base transition-all",
                            !startDate && "text-white/40",
                          )}
                        >
                          <CalendarIcon className="mr-3 h-5 w-5 text-gold" />
                          {startDate ? format(startDate, "dd MMM yyyy", { locale: it }) : "Seleziona Data"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-auto p-0 bg-[#111] border-white/10 text-white rounded-2xl overflow-hidden"
                        align="start"
                      >
                        <Calendar
                          mode="single"
                          selected={startDate}
                          onSelect={setStartDate}
                          disabled={(d) => d < new Date()}
                          className="p-4"
                          classNames={{
                            day_selected: "bg-gold text-black hover:bg-gold/80",
                            day_today: "bg-white/10 text-white",
                          }}
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
                            "w-full justify-start text-left bg-[#111] border-white/10 hover:border-gold/50 hover:bg-[#151515] h-14 rounded-xl text-base transition-all",
                            !endDate && "text-white/40",
                          )}
                        >
                          <CalendarIcon className="mr-3 h-5 w-5 text-gold" />
                          {endDate ? format(endDate, "dd MMM yyyy", { locale: it }) : "Seleziona Data"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-auto p-0 bg-[#111] border-white/10 text-white rounded-2xl overflow-hidden"
                        align="start"
                      >
                        <Calendar
                          mode="single"
                          selected={endDate}
                          onSelect={setEndDate}
                          disabled={(d) => d < (startDate || new Date())}
                          className="p-4"
                          classNames={{
                            day_selected: "bg-gold text-black hover:bg-gold/80",
                            day_today: "bg-white/10 text-white",
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              </motion.div>

              {/* Step 3: Customer Details */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 md:p-10 relative overflow-hidden group hover:border-white/20 transition-colors"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-gold/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 text-sm border border-white/10 text-gold">
                    3
                  </span>
                  I Tuoi Dati
                </h2>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label className="text-xs uppercase tracking-widest text-white/50">Nome Completo</Label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/30" />
                        <Input
                          required
                          maxLength={100}
                          value={form.fullname}
                          onChange={(e) => setForm({ ...form, fullname: e.target.value })}
                          placeholder="Mario Rossi"
                          className="pl-12 h-14 bg-[#111] border-white/10 focus:border-gold focus:ring-1 focus:ring-gold rounded-xl text-white placeholder:text-white/20"
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Label className="text-xs uppercase tracking-widest text-white/50">Codice Fiscale</Label>
                      <div className="relative">
                        <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/30" />
                        <Input
                          required
                          maxLength={16}
                          value={form.cf}
                          onChange={(e) => setForm({ ...form, cf: e.target.value.toUpperCase() })}
                          placeholder="RSSMRA80A01H501Z"
                          className="pl-12 h-14 bg-[#111] border-white/10 focus:border-gold focus:ring-1 focus:ring-gold rounded-xl text-white placeholder:text-white/20"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label className="text-xs uppercase tracking-widest text-white/50">N. Patente</Label>
                      <div className="relative">
                        <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/30" />
                        <Input
                          required
                          maxLength={20}
                          value={form.license}
                          onChange={(e) => setForm({ ...form, license: e.target.value })}
                          placeholder="AB1234567"
                          className="pl-12 h-14 bg-[#111] border-white/10 focus:border-gold focus:ring-1 focus:ring-gold rounded-xl text-white placeholder:text-white/20"
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Label className="text-xs uppercase tracking-widest text-white/50">Residenza</Label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/30" />
                        <Input
                          required
                          maxLength={200}
                          value={form.residence}
                          onChange={(e) => setForm({ ...form, residence: e.target.value })}
                          placeholder="Via Roma 1, 00100 Roma"
                          className="pl-12 h-14 bg-[#111] border-white/10 focus:border-gold focus:ring-1 focus:ring-gold rounded-xl text-white placeholder:text-white/20"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT COLUMN: STICKY LIVE SUMMARY WIDGET */}
            <div className="lg:col-span-5 relative">
              <div className="sticky top-28 w-full bg-gradient-to-b from-[#111] to-[#0a0a0a] border border-gold/20 shadow-[0_0_40px_rgba(212,175,55,0.05)] rounded-[2rem] overflow-hidden">
                {/* Visual Header with Car Image Background */}
                <div className="p-8 border-b border-white/5 bg-[#151515] relative overflow-hidden min-h-[160px] flex flex-col justify-end">
                  {selectedVehicle ? (
                    <>
                      <div className="absolute inset-0 z-0">
                        <img
                          src={getVehicleImage(selectedVehicle)}
                          alt="Selected"
                          className="w-full h-full object-cover opacity-30"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/80 to-transparent" />
                      </div>
                      <div className="relative z-10">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gold text-xs font-semibold uppercase tracking-wider">
                            {selectedVehicle.category}
                          </span>
                        </div>
                        <h3 className="text-3xl font-display font-bold text-white shadow-sm">
                          {selectedVehicle.model}
                        </h3>
                      </div>
                    </>
                  ) : (
                    <div className="relative z-10 h-full flex flex-col justify-center">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white/50 text-sm font-semibold uppercase tracking-wider">
                          Riepilogo Live
                        </span>
                        <Car className="text-gold" size={24} />
                      </div>
                      <h3 className="text-2xl font-display font-bold text-white/30">Nessun veicolo</h3>
                    </div>
                  )}
                </div>

                <div className="p-8 space-y-6">
                  <div className="flex justify-between items-end pb-6 border-b border-white/5">
                    <div>
                      <p className="text-white/50 text-sm mb-1">Tariffa Base</p>
                      <p className="text-white text-lg">
                        €{DAILY_RATE} <span className="text-white/40 text-sm">/giorno</span>
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
                      <CheckCircle2 className="text-gold/80" size={16} /> Nessuna carta di credito richiesta
                    </div>
                    <div className="flex items-center gap-3 text-sm text-white/70">
                      <CheckCircle2 className="text-gold/80" size={16} /> Cancellazione flessibile
                    </div>
                    <div className="flex items-center gap-3 text-sm text-white/70">
                      <CheckCircle2 className="text-gold/80" size={16} /> Assistenza H24 inclusa
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/5 flex justify-between items-center">
                    <span className="text-lg text-white/70">Totale stimato</span>
                    <motion.span
                      key={total}
                      initial={{ scale: 1.5, opacity: 0, color: "#fff" }}
                      animate={{ scale: 1, opacity: 1, color: "#D4AF37" }}
                      className="text-4xl font-black font-display text-gold"
                    >
                      €{total}
                    </motion.span>
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full h-16 mt-4 bg-white text-black hover:bg-gold font-black uppercase tracking-[0.2em] rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] group"
                  >
                    {loading ? (
                      "Invio in corso..."
                    ) : (
                      <span className="flex items-center">
                        Conferma Prenotazione
                        <ArrowRight size={20} className="ml-3 group-hover:translate-x-1 transition-transform" />
                      </span>
                    )}
                  </Button>

                  <p className="text-center text-xs text-white/30 mt-4">
                    Premendo conferma accetti i termini e le condizioni. Nessun pagamento verrà addebitato ora.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PrenotaOra;

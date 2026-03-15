import { useState, useEffect, useMemo, useRef, useCallback, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarIcon,
  X,
  User,
  CreditCard,
  MapPin,
  Car,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
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
  Check,
} from "lucide-react";
import { format, differenceInDays, eachDayOfInterval, getMonth } from "date-fns";
import { it } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";
import SEOHead from "@/components/SEOHead";
import SuccessModal from "@/components/SuccessModal";
import { trackBookingLead, trackBookingSuccess } from "@/lib/analytics";
import { localBusinessJsonLd, buildVehicleJsonLd } from "@/lib/jsonLd";
import OptimizedImage from "@/components/OptimizedImage";
import { getVehicleAlt } from "@/lib/imageUtils";
import { Skeleton } from "@/components/ui/skeleton";
import LocationStep from "@/components/LocationStep";
import { useJsApiLoader } from "@react-google-maps/api";
import { GOOGLE_MAPS_API_KEY, LIBRARIES } from "@/lib/googleMaps";

// Code splitting: lazy load heavy components
const Calendar = lazy(() => import("@/components/ui/calendar").then(m => ({ default: m.Calendar })));
const SignatureModal = lazy(() => import("@/components/SignatureModal"));

const N8N_BASE = "https://n8n.kreareweb.com/webhook/ksrent";

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

const STEP_LABELS = ["Veicolo", "Date", "Guidatore", "Secondo Guidatore", "Ritiro & Consegna"];

// Animated check mark for validated fields
const FieldCheck = ({ show }: { show: boolean }) => (
  <AnimatePresence>
    {show && (
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
      >
        <Check size={12} className="text-white" />
      </motion.div>
    )}
  </AnimatePresence>
);

// Step transition variants
const stepVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
  }),
};

const PrenotaOra = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [vehicles, setVehicles] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("Tutti");
  const [selectedVehicle, setSelectedVehicle] = useState<any>(null);
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  const [mainDriver, setMainDriver] = useState({ ...initialDriverState });
  const [hasSecondDriver, setHasSecondDriver] = useState<boolean | null>(null);
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
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const [pickupType, setPickupType] = useState<"sede" | "custom" | null>(null);
  const [pickupLocation, setPickupLocation] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [dropoffType, setDropoffType] = useState<"sede" | "custom" | null>(null);
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [dropoffTime, setDropoffTime] = useState("");

  const summaryRef = useRef<HTMLDivElement>(null);
  const [showStickyBar, setShowStickyBar] = useState(true);

  // Load Google Maps API at top level to prevent mount/unmount crashes
  const { isLoaded: isMapLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries: LIBRARIES,
  });

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
        .order("category", { ascending: true });
      if (data) setVehicles(data);
      if (error) console.error("Errore recupero veicoli:", error);
    };
    fetchVehicles();
  }, []);

  // Group vehicles by make+model for display (1 card per model)
  const groupedVehicles = useMemo(() => {
    const groups: Record<string, { representative: any; allVehicles: any[]; isAvailable: boolean }> = {};
    for (const v of vehicles) {
      const key = `${v.make}__${v.model}`;
      if (!groups[key]) {
        groups[key] = { representative: v, allVehicles: [], isAvailable: false };
      }
      groups[key].allVehicles.push(v);
      if (v.available) {
        groups[key].isAvailable = true;
        // Prefer an available vehicle as representative (for pricing)
        if (!groups[key].representative.available) {
          groups[key].representative = v;
        }
      }
    }
    return Object.values(groups);
  }, [vehicles]);

  // Check availability when dates are confirmed
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
      if (!res.ok) throw new Error("Errore verifica disponibilità");
      const data = await res.json();
      setAvailabilityResult(data);
      if (!data.available) {
        toast.error("Veicolo non disponibile per queste date.");
      }
    } catch (err) {
      console.error("Availability check failed:", err);
      setAvailabilityResult(null);
      toast.error("Impossibile verificare la disponibilità. Calcolo locale attivo.");
    } finally {
      setCheckingAvailability(false);
    }
  }, [selectedVehicle, startDate, endDate]);

  const categories = useMemo(() => {
    const cats = new Set(groupedVehicles.map((g) => g.representative.category));
    return ["Tutti", ...Array.from(cats)];
  }, [groupedVehicles]);

  const filteredGrouped = useMemo(() => {
    if (selectedCategory === "Tutti") return groupedVehicles;
    return groupedVehicles.filter((g) => g.representative.category === selectedCategory);
  }, [groupedVehicles, selectedCategory]);

  // Dynamic pricing engine
  const calculateDynamicPrice = useCallback((vehicle: any, start: Date, end: Date): number => {
    const monthRateMap: Record<number, string> = {
      3: 'rate_april',
      4: 'rate_may',
      5: 'rate_june',
      6: 'rate_july',
      7: 'rate_august',
      8: 'rate_september',
      9: 'rate_october',
    };
    const interval = eachDayOfInterval({ start, end: new Date(end.getTime() - 86400000) }); // exclude last day (return day)
    let sum = 0;
    for (const day of interval) {
      const m = getMonth(day);
      const rateKey = monthRateMap[m];
      const monthRate = rateKey ? vehicle[rateKey] : null;
      sum += (monthRate && monthRate > 0) ? monthRate : (vehicle.daily_rate || 0);
    }
    return Math.max(sum, 0);
  }, []);

  const days = availabilityResult?.days ?? (startDate && endDate ? Math.max(differenceInDays(endDate, startDate), 1) : 0);
  const total = availabilityResult?.estimated_price ?? (selectedVehicle && startDate && endDate ? calculateDynamicPrice(selectedVehicle, startDate, endDate) : 0);
  const isAvailable = availabilityResult === null ? true : availabilityResult.available;

  const uploadFile = async (file: File | null, path: string) => {
    if (!file) return null;
    const fileExt = file.name.split(".").pop();
    const fileName = `${path}-${Math.random()}.${fileExt}`;
    const { error } = await supabase.storage.from("licenses").upload(fileName, file);
    if (error) throw error;
    const { data: publicUrl } = supabase.storage.from("licenses").getPublicUrl(fileName);
    return publicUrl.publicUrl;
  };

  const goToStep = (step: number) => {
    setDirection(step > currentStep ? 1 : -1);
    setCurrentStep(step);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleVehicleSelect = (group: { representative: any; allVehicles: any[]; isAvailable: boolean }) => {
    if (!group.isAvailable) return;
    // Pick the first available physical vehicle from the group
    const physicalVehicle = group.allVehicles.find((v) => v.available) || group.representative;
    setSelectedVehicle(physicalVehicle);
    setTimeout(() => goToStep(2), 300);
  };

  const handleDatesConfirm = async () => {
    if (!startDate || !endDate) {
      toast.error("Seleziona entrambe le date.");
      return;
    }
    await checkAvailability();
  };

  // After availability check, allow user to continue
  useEffect(() => {
    // This effect handles the UI state after availability check completes
  }, [availabilityResult]);

  const handleSubmit = async () => {
    if (!selectedVehicle || !startDate || !endDate) return;
    if (!isAvailable) {
      toast.error("Veicolo non disponibile per queste date.");
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
      const mainFrontUrl = await uploadFile(mainDriver.licenseFront, `front-${mainDriver.cf}`);
      const mainBackUrl = await uploadFile(mainDriver.licenseBack, `back-${mainDriver.cf}`);

      let secondFrontUrl = null;
      let secondBackUrl = null;
      if (hasSecondDriver) {
        secondFrontUrl = await uploadFile(secondDriver.licenseFront, `front-${secondDriver.cf}`);
        secondBackUrl = await uploadFile(secondDriver.licenseBack, `back-${secondDriver.cf}`);
      }

      const bookingPayload = {
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
        vehicle_id: selectedVehicle.id,
        dates: {
          start_date: format(startDate, "yyyy-MM-dd"),
          end_date: format(endDate, "yyyy-MM-dd"),
        },
        license_urls: { front: mainFrontUrl, back: mainBackUrl },
        total_price: total,
        pickup_location: pickupLocation,
        pickup_time: pickupTime,
        dropoff_location: dropoffLocation,
        dropoff_time: dropoffTime,
        has_second_driver: !!hasSecondDriver,
        second_driver: hasSecondDriver
          ? {
              name: secondDriver.name,
              surname: secondDriver.surname,
              email: secondDriver.email,
              phone: secondDriver.phone,
              tax_code: secondDriver.cf,
              birth_date: secondDriver.birthDate,
              birth_place: secondDriver.birthPlace,
              residence_address: secondDriver.residence,
              city: secondDriver.city,
              license_urls: { front: secondFrontUrl, back: secondBackUrl },
            }
          : null,
      };

      const res = await fetch(`${N8N_BASE}/create-booking`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingPayload),
      });

      if (!res.ok) throw new Error("Errore creazione prenotazione");
      const result = await res.json();
      const newBookingId = result.booking_id;

      if (newBookingId) {
        setBookingId(newBookingId);
        setSignatureOpen(true);
      } else {
        setIsSuccessOpen(true);
        trackBookingLead();
        trackBookingSuccess(result.booking_id || "", selectedVehicle, total, days);
        resetForm();
      }
    } catch (error) {
      toast.error("Errore durante la prenotazione. Riprova.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setMainDriver({ ...initialDriverState });
    setSecondDriver({ ...initialDriverState });
    setHasSecondDriver(null);
    setStartDate(undefined);
    setEndDate(undefined);
    setSelectedVehicle(null);
    setAvailabilityResult(null);
    setBookingId("");
    setPickupType(null);
    setPickupLocation("");
    setPickupTime("");
    setDropoffType(null);
    setDropoffLocation("");
    setDropoffTime("");
    setCurrentStep(1);
  };

  const handleSignatureSuccess = () => {
    setSignatureOpen(false);
    setIsSuccessOpen(true);
    trackBookingLead();
    trackBookingSuccess(bookingId, selectedVehicle, total, days);
    resetForm();
  };

  const getCategoryIcon = (category: string) => {
    if (category === "Scooter/Moto") return <Bike className="w-4 h-4" />;
    if (category === "Quad") return <Settings2 className="w-4 h-4" />;
    if (category === "Supercar/Premium") return <Zap className="w-4 h-4" />;
    return <Car className="w-4 h-4" />;
  };

  // Progress percentage
  const progress = currentStep === 1 ? 0 : currentStep === 2 ? 20 : currentStep === 3 ? 40 : currentStep === 4 ? 60 : currentStep === 5 ? 100 : 0;

  // Driver validation helper
  const getDriverMissingFields = (driver: typeof initialDriverState): string[] => {
    const missing: string[] = [];
    if (!driver.name.trim()) missing.push("Nome");
    if (!driver.surname.trim()) missing.push("Cognome");
    if (!driver.birthDate) missing.push("Data di Nascita");
    if (!driver.birthPlace.trim()) missing.push("Luogo di Nascita");
    if (!driver.residence.trim()) missing.push("Indirizzo Residenza");
    if (!driver.city.trim()) missing.push("Città");
    if (driver.cf.length !== 16) missing.push("Codice Fiscale");
    if (!driver.email.includes("@") || !driver.email.includes(".")) missing.push("Email");
    if (driver.phone.length < 8) missing.push("Telefono");
    if (!driver.licenseFront) missing.push("Foto Patente Fronte");
    if (!driver.licenseBack) missing.push("Foto Patente Retro");
    return missing;
  };

  const isDriverComplete = (driver: typeof initialDriverState): boolean => {
    return getDriverMissingFields(driver).length === 0;
  };

  // Driver form fields helper
  const renderDriverFormFields = (driver: typeof initialDriverState, setDriver: (d: typeof initialDriverState) => void) => (
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
              className="pl-12 pr-12 h-14 bg-[#111] border-white/10 focus:border-gold focus:ring-1 focus:ring-gold rounded-xl text-white"
            />
            <FieldCheck show={driver.name.length > 1} />
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
              className="pl-12 pr-12 h-14 bg-[#111] border-white/10 focus:border-gold focus:ring-1 focus:ring-gold rounded-xl text-white"
            />
            <FieldCheck show={driver.surname.length > 1} />
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
              className="pl-12 pr-12 h-14 bg-[#111] border-white/10 focus:border-gold focus:ring-1 focus:ring-gold rounded-xl text-white appearance-none color-scheme-dark"
            />
            <FieldCheck show={!!driver.birthDate} />
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
              className="pl-12 pr-12 h-14 bg-[#111] border-white/10 focus:border-gold focus:ring-1 focus:ring-gold rounded-xl text-white"
            />
            <FieldCheck show={driver.birthPlace.length > 1} />
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
              className="pl-12 pr-12 h-14 bg-[#111] border-white/10 focus:border-gold focus:ring-1 focus:ring-gold rounded-xl text-white"
            />
            <FieldCheck show={driver.residence.length > 3} />
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
              className="pl-12 pr-12 h-14 bg-[#111] border-white/10 focus:border-gold focus:ring-1 focus:ring-gold rounded-xl text-white"
            />
            <FieldCheck show={driver.city.length > 1} />
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
              className="pl-12 pr-12 h-14 bg-[#111] border-white/10 focus:border-gold focus:ring-1 focus:ring-gold rounded-xl text-white uppercase"
            />
            <FieldCheck show={driver.cf.length === 16} />
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
              className="pl-12 pr-12 h-14 bg-[#111] border-white/10 focus:border-gold focus:ring-1 focus:ring-gold rounded-xl text-white"
            />
            <FieldCheck show={driver.email.includes("@") && driver.email.includes(".")} />
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
              className="pl-12 pr-12 h-14 bg-[#111] border-white/10 focus:border-gold focus:ring-1 focus:ring-gold rounded-xl text-white"
            />
            <FieldCheck show={driver.phone.length >= 8} />
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
            <label
              className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-white/20 hover:border-gold hover:bg-gold/5 rounded-xl cursor-pointer transition-colors relative overflow-hidden"
              onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }}
              onDrop={(e) => { e.preventDefault(); e.stopPropagation(); const file = e.dataTransfer.files?.[0]; if (file) setDriver({ ...driver, licenseFront: file }); }}
            >
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => setDriver({ ...driver, licenseFront: e.target.files?.[0] || null })}
              />
              {driver.licenseFront ? (
                <div className="text-center text-gold">
                  <CheckCircle2 className="mx-auto mb-2" size={24} />
                  <span className="text-xs font-bold">{driver.licenseFront.name}</span>
                </div>
              ) : (
                <div className="text-center text-white/40">
                  <UploadCloud className="mx-auto mb-2" size={24} />
                  <span className="text-xs uppercase font-semibold tracking-wider">Carica Fronte</span>
                </div>
              )}
            </label>
          </div>
          <div>
            <Label className="text-xs uppercase tracking-widest text-white/50 mb-2 block">Foto Retro</Label>
            <label
              className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-white/20 hover:border-gold hover:bg-gold/5 rounded-xl cursor-pointer transition-colors relative overflow-hidden"
              onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }}
              onDrop={(e) => { e.preventDefault(); e.stopPropagation(); const file = e.dataTransfer.files?.[0]; if (file) setDriver({ ...driver, licenseBack: file }); }}
            >
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => setDriver({ ...driver, licenseBack: e.target.files?.[0] || null })}
              />
              {driver.licenseBack ? (
                <div className="text-center text-gold">
                  <CheckCircle2 className="mx-auto mb-2" size={24} />
                  <span className="text-xs font-bold">{driver.licenseBack.name}</span>
                </div>
              ) : (
                <div className="text-center text-white/40">
                  <UploadCloud className="mx-auto mb-2" size={24} />
                  <span className="text-xs uppercase font-semibold tracking-wider">Carica Retro</span>
                </div>
              )}
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  // Mobile sticky bar action text
  const mobileActionLabel = () => {
    if (currentStep === 1) return "Scegli Auto";
    if (currentStep === 2) return startDate && endDate ? (availabilityResult?.available ? "Continua" : "Verifica") : "Scegli Date";
    if (currentStep === 3) return "Continua";
    if (currentStep === 4 && hasSecondDriver === null) return "Scegli";
    if (currentStep === 4) return "Continua";
    if (currentStep === 5) return "Conferma";
    return "Conferma";
  };

  const handleMobileAction = () => {
    if (currentStep === 2 && startDate && endDate && !availabilityResult) {
      handleDatesConfirm();
    } else if (currentStep === 2 && availabilityResult?.available) {
      goToStep(3);
    } else if (currentStep === 3) {
      const missing = getDriverMissingFields(mainDriver);
      if (missing.length > 0) {
        toast.error(`Compila tutti i campi: ${missing.join(", ")}`);
        return;
      }
      goToStep(4);
    } else if (currentStep === 4) {
      if (hasSecondDriver === false) {
        goToStep(5);
      } else if (hasSecondDriver === true) {
        const missing = getDriverMissingFields(secondDriver);
        if (missing.length > 0) {
          toast.error(`Compila tutti i campi del secondo guidatore: ${missing.join(", ")}`);
          return;
        }
        goToStep(5);
      }
    } else if (currentStep === 5) {
      handleSubmit();
    }
  };

  return (
    <div className="bg-[#050505] min-h-screen text-white pt-24 pb-40 lg:pb-16 selection:bg-gold selection:text-black overflow-x-hidden">
      <SEOHead
        title={
          selectedVehicle
            ? `Noleggia ${selectedVehicle.make} ${selectedVehicle.model} a Olbia — KS Rent`
            : "Prenota Noleggio Auto Olbia Aeroporto | KS Rent Costa Smeralda"
        }
        description={
          selectedVehicle
            ? `Noleggia ${selectedVehicle.make} ${selectedVehicle.model} in Costa Smeralda con protezione completa. Da €${selectedVehicle.daily_rate}/giorno con KS Rent Olbia.`
            : "Prenota in 2 minuti il tuo veicolo luxury a Olbia. Consegna in aeroporto o hotel. Deposito cauzionale trasparente e copertura assicurativa completa."
        }
        canonical="https://www.ksrentsardinia.com/prenotaora"
        keywords="noleggio auto olbia, autonoleggio olbia, noleggio moto olbia, rent olbia, noleggio senza carta di credito costa smeralda, noleggio auto costa smeralda, noleggio auto aeroporto olbia, noleggio quad olbia, noleggio auto sportive costa smeralda, noleggio senza carta di credito olbia, autonoleggio al porto olbia, noleggio auto lusso olbia, noleggio supercar olbia, rent a car olbia airport, noleggio auto senza carta di credito, luxury rent car olbia"
        jsonLd={selectedVehicle ? [localBusinessJsonLd, buildVehicleJsonLd(selectedVehicle)] : localBusinessJsonLd}
      />

      {/* PROGRESS BAR */}
      <div className="fixed top-0 left-0 w-full z-[9998] h-1 bg-white/5">
        <motion.div
          className="h-full bg-gradient-to-r from-gold via-yellow-300 to-gold"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>

      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gold/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-white/5 rounded-full blur-[150px]" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 md:mb-10"
        >
          <div className="flex items-center gap-3 md:gap-4 mb-4">
            <div className="w-6 md:w-8 h-[2px] bg-gold" />
            <span className="text-gold text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-semibold">
              Fast Booking
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-black leading-tight break-words">
            Prenota <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Ora.</span>
          </h1>

          {/* Step indicator */}
          <div className="flex items-center gap-2 mt-6">
            {STEP_LABELS.map((label, i) => {
              const stepNum = i + 1;
              const isActive = currentStep === stepNum;
              const isDone = currentStep > stepNum;
              return (
                <div key={label} className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => isDone && goToStep(stepNum)}
                    className={cn(
                      "flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all",
                      isActive
                        ? "bg-gold text-black"
                        : isDone
                        ? "bg-gold/20 text-gold cursor-pointer hover:bg-gold/30"
                        : "bg-white/5 text-white/30 cursor-default"
                    )}
                  >
                    {isDone ? <Check size={12} /> : <span>{stepNum}</span>}
                    <span className="hidden sm:inline">{label}</span>
                  </button>
                  {i < STEP_LABELS.length - 1 && (
                    <div className={cn("w-6 h-px", isDone ? "bg-gold/40" : "bg-white/10")} />
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* BACK BUTTON */}
        {currentStep > 1 && (
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            type="button"
            onClick={() => goToStep(currentStep - 1)}
            className="flex items-center gap-2 text-white/50 hover:text-gold text-sm mb-6 transition-colors"
          >
            <ArrowLeft size={16} /> Indietro
          </motion.button>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* LEFT COLUMN: STEP CONTENT */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait" custom={direction}>
              {/* STEP 1: VEICOLO */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  custom={direction}
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="bg-[#0a0a0a] border border-white/10 rounded-2xl md:rounded-[2rem] p-4 sm:p-6 md:p-10 relative overflow-hidden"
                >
                  <h2 className="text-xl md:text-2xl font-display font-bold mb-4 md:mb-6 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gold/10 text-sm border border-gold/30 text-gold">1</span>
                    Scegli il Veicolo
                  </h2>

                  {/* Horizontal swipeable filter pills */}
                  {vehicles.length > 0 && (
                    <div className="relative mb-5">
                      <div className="flex overflow-x-auto gap-2.5 pb-3 snap-x scrollbar-hide">
                        {categories.map((cat) => (
                          <button
                            key={cat}
                            type="button"
                            onClick={() => setSelectedCategory(cat)}
                            className={cn(
                              "flex-shrink-0 snap-start px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all duration-300 min-h-[44px] whitespace-nowrap",
                              selectedCategory === cat
                                ? "bg-gold text-black"
                                : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white border border-white/10"
                            )}
                          >
                            {cat !== "Tutti" && getCategoryIcon(cat)} {cat}
                          </button>
                        ))}
                      </div>
                      {/* Right fade hint */}
                      <div className="absolute right-0 top-0 bottom-3 w-10 bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none" />
                    </div>
                  )}

                  {/* Luxury edge-to-edge vehicle cards */}
                  <div className="space-y-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0 max-h-[600px] overflow-y-auto scrollbar-hide pb-4">
                    {filteredGrouped.map((group) => {
                      const v = group.representative;
                      const groupKey = `${v.make}__${v.model}`;
                      const isSelected = selectedVehicle && `${selectedVehicle.make}__${selectedVehicle.model}` === groupKey;
                      const soldOut = !group.isAvailable;
                      return (
                        <motion.div
                          key={groupKey}
                          whileTap={soldOut ? undefined : { scale: 0.97 }}
                          onClick={() => handleVehicleSelect(group)}
                          className={cn(
                            "relative rounded-2xl overflow-hidden transition-all duration-300 group/card",
                            soldOut
                              ? "opacity-50 cursor-not-allowed"
                              : isSelected
                              ? "ring-2 ring-gold shadow-[0_0_24px_rgba(212,175,55,0.25)] cursor-pointer"
                              : "cursor-pointer"
                          )}
                        >
                          {/* Full-bleed image */}
                          <div className="relative aspect-[16/9] w-full bg-black">
                            <OptimizedImage
                              src={v.image_url}
                              alt={getVehicleAlt(v.make, v.model)}
                              width={600}
                              showSkeleton
                              skeletonClassName="rounded-none"
                              className={cn(
                                "w-full h-full object-cover transition-transform duration-500",
                                !soldOut && "group-hover/card:scale-105"
                              )}
                            />
                            {/* Dark gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

                            {/* Sold out badge */}
                            {soldOut && (
                              <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                                <span className="bg-red-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">Esaurito</span>
                              </div>
                            )}

                            {/* Selected check */}
                            {isSelected && !soldOut && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="absolute top-3 right-3 bg-gold text-black rounded-full p-1.5 z-10"
                              >
                                <CheckCircle2 size={16} />
                              </motion.div>
                            )}

                            {/* Text overlay on image */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between z-10">
                              <div>
                                <h3 className="text-white font-black text-lg sm:text-xl leading-tight">
                                  {v.make} {v.model}
                                </h3>
                                <p className="text-gold font-bold text-sm mt-0.5">
                                  A partire da €{v.daily_rate}/gg
                                </p>
                              </div>
                              {!soldOut && (
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center group-hover/card:bg-gold group-hover/card:border-gold transition-all duration-300">
                                  <ArrowRight size={16} className="text-gold group-hover/card:text-black transition-colors" />
                                </div>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* STEP 2: DATE */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  custom={direction}
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="bg-[#0a0a0a] border border-white/10 rounded-2xl md:rounded-[2rem] p-5 sm:p-6 md:p-10 relative overflow-hidden"
                >
                  <h2 className="text-xl md:text-2xl font-display font-bold mb-5 md:mb-6 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gold/10 text-sm border border-gold/30 text-gold">2</span>
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
                              "w-full justify-start text-left bg-[#111] border-white/10 hover:border-gold/50 hover:bg-[#151515] h-14 rounded-xl text-base",
                              !startDate && "text-white/40"
                            )}
                          >
                            <CalendarIcon className="mr-3 h-5 w-5 text-gold" />
                            {startDate ? format(startDate, "dd MMM yyyy", { locale: it }) : "Seleziona Data"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-[#111] border-white/10 text-white rounded-2xl z-50">
                          <Suspense fallback={<div className="p-4"><Skeleton className="w-[280px] h-[280px]" /></div>}>
                            <Calendar
                              mode="single"
                              selected={startDate}
                              onSelect={setStartDate}
                              disabled={(d) => d < new Date()}
                              className="p-4 pointer-events-auto"
                              classNames={{ day_selected: "bg-gold text-black hover:bg-gold/80" }}
                            />
                          </Suspense>
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
                              "w-full justify-start text-left bg-[#111] border-white/10 hover:border-gold/50 hover:bg-[#151515] h-14 rounded-xl text-base",
                              !endDate && "text-white/40"
                            )}
                          >
                            <CalendarIcon className="mr-3 h-5 w-5 text-gold" />
                            {endDate ? format(endDate, "dd MMM yyyy", { locale: it }) : "Seleziona Data"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-[#111] border-white/10 text-white rounded-2xl z-50">
                          <Suspense fallback={<div className="p-4"><Skeleton className="w-[280px] h-[280px]" /></div>}>
                            <Calendar
                              mode="single"
                              selected={endDate}
                              onSelect={setEndDate}
                              disabled={(d) => d < (startDate || new Date())}
                              className="p-4 pointer-events-auto"
                              classNames={{ day_selected: "bg-gold text-black hover:bg-gold/80" }}
                            />
                          </Suspense>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  {/* Availability result */}
                  {startDate && endDate && (
                    <div className="mt-6 space-y-4">
                      {!availabilityResult && !checkingAvailability && (
                        <Button
                          type="button"
                          onClick={handleDatesConfirm}
                          className="w-full h-14 bg-gold text-black hover:bg-yellow-400 font-bold uppercase tracking-wider rounded-xl"
                        >
                          Verifica Disponibilità <ArrowRight size={16} className="ml-2" />
                        </Button>
                      )}

                      {checkingAvailability && (
                        <div className="flex items-center justify-center gap-3 py-6 text-white/50">
                          <Loader2 size={20} className="animate-spin text-gold" />
                          <span>Verifica disponibilità in tempo reale...</span>
                        </div>
                      )}

                      {availabilityResult && !availabilityResult.available && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6 text-center space-y-4"
                        >
                          <AlertCircle size={32} className="text-red-400 mx-auto" />
                          <p className="text-white/80">
                            Questa vettura è già impegnata per queste date, ma abbiamo altre soluzioni per te.
                          </p>
                          <div className="flex gap-3 justify-center">
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => { setAvailabilityResult(null); goToStep(1); }}
                              className="border-white/10 text-white/70 hover:text-white hover:bg-white/5 rounded-xl"
                            >
                              <Car size={14} className="mr-2" /> Cambia Auto
                            </Button>
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => { setAvailabilityResult(null); setStartDate(undefined); setEndDate(undefined); }}
                              className="border-white/10 text-white/70 hover:text-white hover:bg-white/5 rounded-xl"
                            >
                              <CalendarIcon size={14} className="mr-2" /> Cambia Date
                            </Button>
                          </div>
                        </motion.div>
                      )}

                      {availabilityResult?.available && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-green-500/5 border border-green-500/20 rounded-2xl p-6 space-y-4"
                        >
                          <div className="flex items-center gap-3">
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", stiffness: 400, damping: 15 }}
                              className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center"
                            >
                              <CheckCircle2 size={20} className="text-green-400" />
                            </motion.div>
                            <div>
                              <p className="text-green-400 font-bold">Disponibile!</p>
                              <p className="text-white/50 text-xs">Tariffa calcolata in tempo reale</p>
                            </div>
                          </div>
                          <div className="flex items-end justify-between pt-2 border-t border-white/5">
                            <div>
                              <p className="text-white/50 text-xs">Prezzo totale</p>
                              <p className="text-3xl font-black font-display text-gold">€{total}</p>
                            </div>
                            <p className="text-white/40 text-sm">{days} giorn{days !== 1 ? "i" : "o"} · Tariffa dinamica</p>
                          </div>
                          <Button
                            type="button"
                            onClick={() => goToStep(3)}
                            className="w-full h-14 bg-gold text-black hover:bg-yellow-400 font-bold uppercase tracking-wider rounded-xl"
                          >
                            Continua <ArrowRight size={16} className="ml-2" />
                          </Button>
                        </motion.div>
                      )}
                    </div>
                  )}
                </motion.div>
              )}

              {/* STEP 3: GUIDATORE PRINCIPALE */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  custom={direction}
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="bg-[#0a0a0a] border border-white/10 rounded-2xl md:rounded-[2rem] p-5 sm:p-6 md:p-10 relative overflow-hidden"
                >
                  <h2 className="text-xl md:text-2xl font-display font-bold mb-5 md:mb-6 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gold/10 text-sm border border-gold/30 text-gold">3</span>
                    Dati Guidatore Principale
                  </h2>
                  {renderDriverFormFields(mainDriver, setMainDriver)}

                  <div className="mt-8">
                    <Button
                      type="button"
                      onClick={() => {
                        const missing = getDriverMissingFields(mainDriver);
                        if (missing.length > 0) {
                          toast.error(`Compila tutti i campi: ${missing.join(", ")}`);
                          return;
                        }
                        goToStep(4);
                      }}
                      className="w-full h-14 bg-gold text-black hover:bg-yellow-400 font-bold uppercase tracking-wider rounded-xl"
                    >
                      Continua <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* STEP 4: SECONDO GUIDATORE + CONFERMA */}
              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  custom={direction}
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="space-y-6"
                >
                  {/* Ask about second driver */}
                  {(hasSecondDriver === null || hasSecondDriver === false) && (
                    <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl md:rounded-[2rem] p-5 sm:p-6 md:p-10 text-center space-y-6">
                      <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto">
                        <Users size={28} className="text-gold" />
                      </div>
                      <h2 className="text-xl md:text-2xl font-display font-bold">Viaggerai con un secondo guidatore?</h2>
                      <p className="text-white/50 max-w-md mx-auto">
                        Se prevedi di condividere la guida, aggiungi i dati del secondo guidatore.
                      </p>
                      <div className="flex gap-4 justify-center">
                        <Button
                          type="button"
                          onClick={() => setHasSecondDriver(true)}
                          className="h-14 px-8 bg-gold text-black hover:bg-yellow-400 font-bold uppercase tracking-wider rounded-xl"
                        >
                          Sì, Aggiungi
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => { setHasSecondDriver(false); goToStep(5); }}
                          className="h-14 px-8 border-white/10 text-white/70 hover:text-white hover:bg-white/5 rounded-xl font-bold uppercase tracking-wider"
                        >
                          No, Procedi
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Second driver form */}
                  {hasSecondDriver === true && (
                    <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl md:rounded-[2rem] p-5 sm:p-6 md:p-10">
                      <div className="flex items-center justify-between mb-5 md:mb-6">
                        <h2 className="text-xl md:text-2xl font-display font-bold flex items-center gap-3">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gold/10 text-sm border border-gold/30 text-gold">4</span>
                          Dati Secondo Guidatore
                        </h2>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="text-white/50 hover:text-red-400 hover:bg-red-400/10 gap-1.5"
                          onClick={() => {
                            setHasSecondDriver(null);
                            setSecondDriver({ ...initialDriverState });
                          }}
                        >
                          <X className="w-4 h-4" />
                          Annulla
                        </Button>
                      </div>
                      {renderDriverFormFields(secondDriver, setSecondDriver)}

                      <div className="mt-8">
                        <Button
                          type="button"
                          onClick={() => {
                            const missing = getDriverMissingFields(secondDriver);
                            if (missing.length > 0) {
                              toast.error(`Compila tutti i campi del secondo guidatore: ${missing.join(", ")}`);
                              return;
                            }
                            goToStep(5);
                          }}
                          className="w-full h-14 bg-gold text-black hover:bg-yellow-400 font-bold uppercase tracking-wider rounded-xl"
                        >
                          Continua <ArrowRight size={16} className="ml-2" />
                        </Button>
                      </div>
                    </div>
                  )}

                </motion.div>
              )}

              {/* STEP 5: RITIRO & CONSEGNA */}
              {currentStep === 5 && (
                <motion.div
                  key="step5"
                  custom={direction}
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="bg-[#0a0a0a] border border-white/10 rounded-2xl md:rounded-[2rem] p-5 sm:p-6 md:p-10 relative overflow-hidden"
                >
                  <h2 className="text-xl md:text-2xl font-display font-bold mb-5 md:mb-6 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gold/10 text-sm border border-gold/30 text-gold">5</span>
                    Ritiro & Consegna
                  </h2>

                  <LocationStep
                    pickupType={pickupType}
                    setPickupType={setPickupType}
                    pickupLocation={pickupLocation}
                    setPickupLocation={setPickupLocation}
                    pickupTime={pickupTime}
                    setPickupTime={setPickupTime}
                    dropoffType={dropoffType}
                    setDropoffType={setDropoffType}
                    dropoffLocation={dropoffLocation}
                    setDropoffLocation={setDropoffLocation}
                    dropoffTime={dropoffTime}
                    setDropoffTime={setDropoffTime}
                    isMapLoaded={isMapLoaded}
                    dropoffSedeOnly
                  />

                  {/* Validation warnings for incomplete driver data */}
                  {!isDriverComplete(mainDriver) && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 bg-red-500/5 border border-red-500/20 rounded-2xl p-5 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <AlertCircle size={20} className="text-red-400 shrink-0" />
                        <p className="text-sm text-white/70">Dati del guidatore principale incompleti</p>
                      </div>
                      <Button type="button" variant="outline" size="sm" onClick={() => goToStep(3)} className="border-red-500/30 text-red-400 hover:bg-red-500/10 rounded-xl shrink-0">
                        Completa Dati
                      </Button>
                    </motion.div>
                  )}
                  {hasSecondDriver && !isDriverComplete(secondDriver) && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-4 bg-red-500/5 border border-red-500/20 rounded-2xl p-5 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <AlertCircle size={20} className="text-red-400 shrink-0" />
                        <p className="text-sm text-white/70">Dati del secondo guidatore incompleti</p>
                      </div>
                      <Button type="button" variant="outline" size="sm" onClick={() => goToStep(4)} className="border-red-500/30 text-red-400 hover:bg-red-500/10 rounded-xl shrink-0">
                        Completa Dati
                      </Button>
                    </motion.div>
                  )}

                  {/* Riepilogo Finale */}
                  <div className="mt-8 bg-white/5 border border-gold/20 rounded-2xl p-5 sm:p-6 md:p-8 space-y-4">
                    <h3 className="text-lg font-display font-bold flex items-center gap-3">
                      <CheckCircle2 className="text-gold" size={20} />
                      Riepilogo Finale
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                      <div className="bg-white/5 rounded-xl p-4 min-w-0">
                        <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Veicolo</p>
                        <p className="font-bold truncate">{selectedVehicle?.make} {selectedVehicle?.model}</p>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4 min-w-0">
                        <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Periodo</p>
                        <p className="font-bold truncate">{startDate && format(startDate, "dd/MM")} — {endDate && format(endDate, "dd/MM/yyyy")}</p>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4 min-w-0">
                        <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Guidatore</p>
                        <p className="font-bold truncate">{mainDriver.name} {mainDriver.surname}</p>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4 min-w-0">
                        <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Totale</p>
                        <p className="font-bold text-gold text-lg sm:text-xl">€{total}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button
                      type="button"
                      onClick={handleSubmit}
                      disabled={loading || !pickupLocation || !pickupTime || !dropoffLocation || !dropoffTime || !isDriverComplete(mainDriver) || (hasSecondDriver === true && !isDriverComplete(secondDriver))}
                      className="w-full h-16 bg-white text-black hover:bg-gold font-black uppercase tracking-widest rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2"><Loader2 size={16} className="animate-spin" /> Caricamento dati...</span>
                      ) : (
                        <span className="flex items-center">Conferma Prenotazione <ArrowRight size={18} className="ml-3" /></span>
                      )}
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT COLUMN: RIEPILOGO STICKY */}
          <div className="hidden lg:block lg:col-span-4" ref={summaryRef}>
            <div className="lg:sticky lg:top-28">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full bg-[#0a0a0a] border border-gold/20 shadow-[0_0_40px_rgba(212,175,55,0.05)] rounded-2xl md:rounded-[2rem] overflow-hidden"
              >
                <div className="p-6 md:p-8 border-b border-white/5 bg-[#111] relative min-h-[140px] flex flex-col justify-end">
                  {selectedVehicle ? (
                    <>
                      <div className="absolute inset-0 z-0 pointer-events-none">
                        <img src={selectedVehicle.image_url} alt="Selected" className="w-full h-full object-cover opacity-40" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/80 to-transparent" />
                      </div>
                      <div className="relative z-10">
                        <span className="text-gold text-xs font-semibold uppercase tracking-wider">{selectedVehicle.category}</span>
                        <h3 className="text-2xl font-display font-bold text-white">{selectedVehicle.make} {selectedVehicle.model}</h3>
                      </div>
                    </>
                  ) : (
                    <div className="relative z-10 flex flex-col justify-center h-full">
                      <span className="text-white/50 text-sm font-semibold uppercase tracking-wider mb-2">Riepilogo Live</span>
                      <h3 className="text-xl font-display font-bold text-white/30">Nessun veicolo</h3>
                    </div>
                  )}
                </div>

                <div className="p-6 md:p-8 space-y-6">
                  <div className="flex justify-between items-end pb-6 border-b border-white/5">
                    <div>
                      <p className="text-white/50 text-sm mb-1">Tariffa</p>
                      <span className="text-white text-sm">Tariffa dinamica stagionale</span>
                    </div>
                    <div className="text-right">
                      <p className="text-white/50 text-sm mb-1">Durata</p>
                      <p className="text-gold font-bold text-xl">{days} Giorn{days !== 1 ? "i" : "o"}</p>
                    </div>
                  </div>

                  {checkingAvailability && (
                    <div className="flex items-center justify-center gap-2 py-2 text-white/40 text-sm">
                      <Loader2 size={14} className="animate-spin" /> Aggiornamento prezzo...
                    </div>
                  )}

                  {availabilityResult?.available && (
                    <div className="flex items-center gap-2 text-xs text-green-400/70 bg-green-500/5 rounded-lg px-3 py-2">
                      <Zap size={12} /> Tariffa calcolata in tempo reale
                    </div>
                  )}

                  <div className="space-y-3 py-2">
                    <div className="flex items-center gap-3 text-sm text-white/70">
                      <CheckCircle2 className="text-gold shrink-0" size={16} /> Guidatore principale
                      {mainDriver.name && <span className="text-white/40 text-xs ml-auto">{mainDriver.name} {mainDriver.surname}</span>}
                    </div>
                    {hasSecondDriver && (
                      <div className="flex items-center gap-3 text-sm text-white/70">
                        <Users className="text-gold shrink-0" size={16} /> Secondo guidatore incluso
                      </div>
                    )}
                  </div>

                  <div className="pt-6 border-t border-white/5 flex flex-wrap justify-between items-center gap-2">
                    <span className="text-lg text-white/70">Totale stimato</span>
                    <span className="text-2xl sm:text-3xl md:text-4xl font-black font-display text-gold min-w-0 break-words">€{total}</span>
                  </div>

                  {/* Step indicator in summary */}
                  <div className="pt-4 border-t border-white/5">
                    <p className="text-xs text-white/50 leading-relaxed mb-3">
                      Il deposito cauzionale e la franchigia verranno definiti in fase contrattuale in base al veicolo scelto.
                    </p>
                    <div className="flex items-center justify-between text-xs text-white/40">
                      <span>Step {currentStep} di 5</span>
                      <span className="text-gold">{STEP_LABELS[currentStep - 1]}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* MOBILE BOOKING SUMMARY BAR */}
        <AnimatePresence>
          {showStickyBar && (
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed bottom-0 left-0 w-full z-[100] bg-black/90 backdrop-blur-xl border-t border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.6)] lg:hidden"
            >
              <div className="flex items-center justify-between gap-3 px-4 py-3 pb-[max(12px,env(safe-area-inset-bottom))]">
                {/* LEFT: Vehicle + Price */}
                <div className="flex flex-col min-w-0">
                  <span className="text-xs text-white/50 truncate">
                    {selectedVehicle ? `${selectedVehicle.make} ${selectedVehicle.model}` : "Nessun veicolo"}
                  </span>
                  {total > 0 ? (
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xl font-black font-display text-gold">
                        €{total.toLocaleString("it-IT", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </span>
                      {days > 0 && (
                        <span className="text-[10px] text-white/40">per {days} giorn{days !== 1 ? "i" : "o"}</span>
                      )}
                    </div>
                  ) : (
                    <span className="text-sm text-white/30 italic">Seleziona date</span>
                  )}
                </div>

                {/* RIGHT: Dynamic action button */}
                <Button
                  type="button"
                  onClick={handleMobileAction}
                  disabled={loading || (currentStep === 2 && checkingAvailability)}
                  className="h-11 px-6 bg-gold text-black hover:bg-gold/90 font-bold uppercase tracking-wider rounded-full transition-all duration-300 text-xs shrink-0 shadow-[0_0_20px_hsl(var(--gold)/0.3)]"
                >
                  {loading || (currentStep === 2 && checkingAvailability) ? (
                    <Loader2 size={14} className="animate-spin" />
                  ) : (
                    <span className="flex items-center gap-2">
                      {mobileActionLabel()} <ArrowRight size={14} />
                    </span>
                  )}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* SIGNATURE MODAL */}
      <Suspense fallback={null}>
        <SignatureModal
          open={signatureOpen}
          bookingId={bookingId}
          onClose={() => setSignatureOpen(false)}
          onSuccess={handleSignatureSuccess}
        />
      </Suspense>

      <SuccessModal open={isSuccessOpen} onClose={() => setIsSuccessOpen(false)} />
    </div>
  );
};

export default PrenotaOra;

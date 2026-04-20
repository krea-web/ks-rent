import { useState, useRef, useCallback, useEffect, Component, type ReactNode, type ErrorInfo } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Building2, Navigation, CheckCircle2, AlertTriangle } from "lucide-react";
import { GoogleMap, Autocomplete } from "@react-google-maps/api";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import {
  SEDE_OPERATIVA,
  SEDE_LEGALE,
  DARK_MAP_STYLE,
  TIME_SLOTS,
} from "@/lib/googleMaps";

// ErrorBoundary to prevent full-page crash
class MapErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: Error, info: ErrorInfo) {
    console.warn("LocationStep error caught:", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center gap-3 bg-red-500/5 border border-red-500/20 rounded-xl p-4 text-sm text-red-400">
          <AlertTriangle size={16} />
          Errore nel caricamento della mappa. Ricarica la pagina.
        </div>
      );
    }
    return this.props.children;
  }
}

interface LocationStepProps {
  pickupType: "sede" | "custom" | null;
  setPickupType: (t: "sede" | "custom") => void;
  pickupLocation: string;
  setPickupLocation: (l: string) => void;
  pickupTime: string;
  setPickupTime: (t: string) => void;
  dropoffType: "sede" | "custom" | null;
  setDropoffType: (t: "sede" | "custom") => void;
  dropoffLocation: string;
  setDropoffLocation: (l: string) => void;
  dropoffTime: string;
  setDropoffTime: (t: string) => void;
  isMapLoaded: boolean;
  dropoffSedeOnly?: boolean;
}

// Dropoff time must match pickup time exactly.
const getAllowedDropoffSlots = (pickupTime: string): string[] => {
  if (!pickupTime) return TIME_SLOTS;
  const idx = TIME_SLOTS.indexOf(pickupTime);
  if (idx === -1) return TIME_SLOTS;
  return [TIME_SLOTS[idx]];
};

const mapContainerStyle = { width: "100%", height: "200px", borderRadius: "12px" };

const LocationStep = ({
  pickupType, setPickupType, pickupLocation, setPickupLocation, pickupTime, setPickupTime,
  dropoffType, setDropoffType, dropoffLocation, setDropoffLocation, dropoffTime, setDropoffTime,
  isMapLoaded, dropoffSedeOnly = false,
}: LocationStepProps) => {
  const isLoaded = isMapLoaded;

  const [pickupMapCenter, setPickupMapCenter] = useState<{ lat: number; lng: number } | null>(null);
  const [dropoffMapCenter, setDropoffMapCenter] = useState<{ lat: number; lng: number } | null>(null);

  const pickupAutoRef = useRef<google.maps.places.Autocomplete | null>(null);
  // Auto-select sede for dropoff when sede-only mode
  useEffect(() => {
    if (dropoffSedeOnly && dropoffType !== "sede") {
      setDropoffType("sede");
      setDropoffLocation("");
    }
  }, [dropoffSedeOnly, dropoffType, setDropoffType, setDropoffLocation]);

  const dropoffAutoRef = useRef<google.maps.places.Autocomplete | null>(null);

  // Enforce: dropoff time must equal pickup time. Auto-sync if different.
  useEffect(() => {
    if (!pickupTime) return;
    if (dropoffTime !== pickupTime) {
      setDropoffTime(pickupTime);
    }
  }, [pickupTime, dropoffTime, setDropoffTime]);

  const onPickupPlaceChanged = useCallback(() => {
    if (pickupAutoRef.current) {
      const place = pickupAutoRef.current.getPlace();
      if (place.formatted_address) {
        setPickupLocation(place.formatted_address);
      }
      if (place.geometry?.location) {
        setPickupMapCenter({ lat: place.geometry.location.lat(), lng: place.geometry.location.lng() });
      }
    }
  }, [setPickupLocation]);

  const onDropoffPlaceChanged = useCallback(() => {
    if (dropoffAutoRef.current) {
      const place = dropoffAutoRef.current.getPlace();
      if (place.formatted_address) {
        setDropoffLocation(place.formatted_address);
      }
      if (place.geometry?.location) {
        setDropoffMapCenter({ lat: place.geometry.location.lat(), lng: place.geometry.location.lng() });
      }
    }
  }, [setDropoffLocation]);

  const handleSedeSelect = (
    sede: string,
    type: "pickup" | "dropoff"
  ) => {
    const sedeData = sede === "operativa" ? SEDE_OPERATIVA : SEDE_LEGALE;
    if (type === "pickup") {
      setPickupLocation(sedeData.address);
      setPickupMapCenter({ lat: sedeData.lat, lng: sedeData.lng });
    } else {
      setDropoffLocation(sedeData.address);
      setDropoffMapCenter({ lat: sedeData.lat, lng: sedeData.lng });
    }
  };

  const renderLocationBlock = (
    label: string,
    icon: React.ReactNode,
    locationType: "sede" | "custom" | null,
    setLocationType: (t: "sede" | "custom") => void,
    location: string,
    setLocation: (l: string) => void,
    time: string,
    setTime: (t: string) => void,
    mapCenter: { lat: number; lng: number } | null,
    autoRef: React.MutableRefObject<google.maps.places.Autocomplete | null>,
    onPlaceChanged: () => void,
    type: "pickup" | "dropoff",
    sedeOnly?: boolean,
    timeSlots: string[] = TIME_SLOTS,
    timeHelper?: string
  ) => (
    <div className="space-y-4">
      <h3 className="text-sm font-bold text-gold flex items-center gap-2 uppercase tracking-widest">
        {icon} {label}
      </h3>

      {/* Type selection cards - show both options only if not sede-only */}
      {sedeOnly ? (
        <div className="bg-gold/5 border border-gold/30 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <Building2 size={20} className="text-gold" />
            <div>
              <p className="text-sm font-bold text-gray-900 dark:text-white">Riconsegna in Sede</p>
              <p className="text-xs text-gray-500 dark:text-white/40 mt-0.5">La riconsegna avviene presso le nostre sedi di Olbia</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => { setLocationType("sede"); setLocation(""); }}
            className={cn(
              "p-4 rounded-xl border text-left transition-all duration-300",
              locationType === "sede"
                ? "bg-gold/5 border-gold shadow-[0_0_15px_rgba(212,175,55,0.15)]"
                : "bg-white dark:bg-[#111] border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20"
            )}
          >
            <Building2 size={20} className={cn("mb-2", locationType === "sede" ? "text-gold" : "text-gray-400 dark:text-white/40")} />
            <p className={cn("text-sm font-bold", locationType === "sede" ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-white/60")}>
              {type === "pickup" ? "Ritiro in Sede" : "Consegna in Sede"}
            </p>
            <p className="text-xs text-gray-500 dark:text-white/40 mt-1">Sedi KS Rent Olbia</p>
          </button>
          <button
            type="button"
            onClick={() => { setLocationType("custom"); setLocation(""); }}
            className={cn(
              "p-4 rounded-xl border text-left transition-all duration-300",
              locationType === "custom"
                ? "bg-gold/5 border-gold shadow-[0_0_15px_rgba(212,175,55,0.15)]"
                : "bg-white dark:bg-[#111] border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20"
            )}
          >
            <Navigation size={20} className={cn("mb-2", locationType === "custom" ? "text-gold" : "text-gray-400 dark:text-white/40")} />
            <p className={cn("text-sm font-bold", locationType === "custom" ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-white/60")}>
              {type === "pickup" ? "Ritiro Personalizzato" : "Consegna Personalizzata"}
            </p>
            <p className="text-xs text-gray-500 dark:text-white/40 mt-1">Aeroporto, hotel, ecc.</p>
          </button>
        </div>
      )}

      {/* Sede select */}
      {locationType === "sede" && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
          <Select onValueChange={(v) => handleSedeSelect(v, type)}>
            <SelectTrigger className="h-14 bg-white dark:bg-[#111] border-gray-200 dark:border-white/10 focus:border-gold rounded-xl text-gray-900 dark:text-white">
              <SelectValue placeholder="Seleziona sede" />
            </SelectTrigger>
            <SelectContent className="bg-white dark:bg-[#111] border-gray-200 dark:border-white/10 text-gray-900 dark:text-white">
              <SelectItem value="operativa">
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-gold" />
                  Sede Operativa — Viale Isola Bianca 38
                </div>
              </SelectItem>
              <SelectItem value="legale">
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-gold" />
                  Sede Legale — Viale Aldo Moro 367
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
          {location && (
            <div className="flex items-center gap-2 text-xs text-green-400/80 bg-green-500/5 rounded-lg px-3 py-2">
              <CheckCircle2 size={12} /> {location}
            </div>
          )}
        </motion.div>
      )}

      {/* Custom autocomplete */}
      {locationType === "custom" && isLoaded && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
          <Autocomplete
            onLoad={(ac) => { autoRef.current = ac; }}
            onPlaceChanged={onPlaceChanged}
            restrictions={{ country: "it" }}
          >
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-white/30" />
              <Input
                placeholder="Cerca indirizzo, aeroporto, hotel..."
                className="pl-12 h-14 bg-white dark:bg-[#111] border-gray-200 dark:border-white/10 focus:border-gold focus:ring-1 focus:ring-gold rounded-xl text-gray-900 dark:text-white"
              />
            </div>
          </Autocomplete>
          {location && (
            <div className="flex items-center gap-2 text-xs text-green-400/80 bg-green-500/5 rounded-lg px-3 py-2">
              <CheckCircle2 size={12} /> {location}
            </div>
          )}
          {mapCenter && isLoaded && (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={mapCenter}
                zoom={15}
                options={{ mapId: "ee2520e4d399bf4fdb360162", styles: DARK_MAP_STYLE as google.maps.MapTypeStyle[], disableDefaultUI: true, zoomControl: true }}
              />
            </motion.div>
          )}
        </motion.div>
      )}

      {/* Loading state for custom when API not ready */}
      {locationType === "custom" && !isLoaded && (
        <div className="space-y-3">
          <Skeleton className="w-full h-14 rounded-xl" />
          <Skeleton className="w-full h-[200px] rounded-xl" />
        </div>
      )}

      {/* Time picker */}
      {locationType && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-2">
          <Label className="text-xs uppercase tracking-widest text-gray-500 dark:text-white/50 flex items-center gap-2">
            <Clock size={12} /> Orario
          </Label>
          <Select value={time} onValueChange={setTime}>
            <SelectTrigger className="h-14 bg-white dark:bg-[#111] border-gray-200 dark:border-white/10 focus:border-gold rounded-xl text-gray-900 dark:text-white">
              <SelectValue placeholder="Seleziona orario" />
            </SelectTrigger>
            <SelectContent className="bg-white dark:bg-[#111] border-gray-200 dark:border-white/10 text-gray-900 dark:text-white max-h-60">
              {timeSlots.map((slot) => (
                <SelectItem key={slot} value={slot}>{slot}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {timeHelper && (
            <p className="text-xs text-gold/80 flex items-center gap-1.5 mt-1">
              <AlertTriangle size={11} /> {timeHelper}
            </p>
          )}
        </motion.div>
      )}
    </div>
  );

  const allowedDropoffSlots = getAllowedDropoffSlots(pickupTime);

  return (
    <div className="space-y-8">
      {renderLocationBlock(
        "Luogo di Ritiro",
        <MapPin size={16} />,
        pickupType, setPickupType,
        pickupLocation, setPickupLocation,
        pickupTime, setPickupTime,
        pickupMapCenter,
        pickupAutoRef, onPickupPlaceChanged,
        "pickup"
      )}

      <div className="w-full h-px bg-gray-200 dark:bg-white/5" />

      {renderLocationBlock(
        "Luogo di Riconsegna",
        <Navigation size={16} />,
        dropoffType, setDropoffType,
        dropoffLocation, setDropoffLocation,
        dropoffTime, setDropoffTime,
        dropoffMapCenter,
        dropoffAutoRef, onDropoffPlaceChanged,
        "dropoff",
        dropoffSedeOnly,
        allowedDropoffSlots,
        pickupTime
          ? `La riconsegna deve avvenire allo stesso orario del ritiro (${pickupTime}).`
          : "Seleziona prima l'orario di ritiro."
      )}
    </div>
  );
};

const LocationStepWithBoundary = (props: LocationStepProps) => (
  <MapErrorBoundary>
    <LocationStep {...props} />
  </MapErrorBoundary>
);

export default LocationStepWithBoundary;

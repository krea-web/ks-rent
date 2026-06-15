import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { cn } from "@/lib/utils";
import { SEDE_OPERATIVA, SEDE_LEGALE, SEDE_LEGALE_MAPS_URL } from "@/lib/googleMaps";
import type { Locale } from "@/lib/i18n";

interface CompanyMapProps {
  targetLocation?: string;
  lang?: Locale;
}

// Etichette click-to-load (la mappa NON carica cookie Google finche l'utente non clicca).
const MAP_T: Record<Locale, { load: string; note: string }> = {
  it: { load: "Carica la mappa", note: "Cliccando carichi Google Maps e accetti i relativi cookie." },
  en: { load: "Load the map", note: "By clicking you load Google Maps and accept its cookies." },
  de: { load: "Karte laden", note: "Durch Klicken laden Sie Google Maps und akzeptieren dessen Cookies." },
  fr: { load: "Charger la carte", note: "En cliquant, vous chargez Google Maps et acceptez ses cookies." },
};

type SedeKey = "operativa" | "legale";

const SEDI: Record<SedeKey, { lat: number; lng: number; label: string; address: string }> = {
  operativa: SEDE_OPERATIVA,
  legale: SEDE_LEGALE,
};

function cleanLocationName(raw: string): string {
  return raw
    .split('|')[0]
    .split('-')[0]
    .replace(/noleggio auto/gi, '')
    .replace(/noleggio/gi, '')
    .replace(/rent a car/gi, '')
    .trim();
}

/** Override per località che Google Maps geolocalizza in modo errato */
const LOCATION_OVERRIDES: Record<string, string> = {
  romazzino: "Spiaggia del Romazzino, Arzachena, Sardegna, Italia",
  impostu: "Spiaggia di Lu Impostu, San Teodoro, Sardegna, Italia",
  "porto cervo": "Piazzetta, Porto Cervo, Arzachena, Sardegna, Italia",
  // "La Celvia" senza "Spiaggia" Google lo geocodifica come quartiere "La Celvia Centro".
  "la celvia": "Spiaggia La Celvia, Arzachena, Sardegna, Italia",
};

/** Termini che indicano "spiaggia" in IT/EN/DE/FR — usati per disambiguare il suffix geo. */
const BEACH_TERMS = ["spiaggia", "cala", "rena", "beach", "strand", "plage", "playa"];

function resolveLocationQuery(cleanLocation: string): string {
  const lower = cleanLocation.toLowerCase();
  for (const [key, override] of Object.entries(LOCATION_OVERRIDES)) {
    if (lower.includes(key)) return override;
  }
  const isBeach = BEACH_TERMS.some((term) => lower.includes(term));
  const geoSuffix = isBeach ? ", Sardegna, Italia" : ", Centro, Sardegna, Italia";
  return `${cleanLocation}${geoSuffix}`;
}

function buildEmbedUrl(sede: SedeKey, targetLocation?: string): string {
  const s = SEDI[sede];
  
  const destinationSede = sede === "legale" 
    ? encodeURIComponent("KS Rent Sardinia, Viale Aldo Moro 367, Olbia")
    : `${s.lat},${s.lng}`;

  if (targetLocation) {
    const cleanLocation = cleanLocationName(targetLocation);
    const startPoint = encodeURIComponent(resolveLocationQuery(cleanLocation));
    return `https://maps.google.com/maps?saddr=${startPoint}&daddr=${destinationSede}&output=embed`;
  }
  
  if (sede === "legale") {
    return `https://maps.google.com/maps?q=${destinationSede}&t=m&z=17&output=embed&iwloc=near`;
  }
  return `https://maps.google.com/maps?q=${s.lat},${s.lng}&z=15&output=embed`;
}

function buildDirectionsUrl(sede: SedeKey, targetLocation?: string): string {
  const s = SEDI[sede];
  
  const destinationSede = sede === "legale" 
    ? encodeURIComponent("KS Rent Sardinia, Viale Aldo Moro 367, Olbia")
    : `${s.lat},${s.lng}`;

  if (targetLocation) {
    const cleanLocation = cleanLocationName(targetLocation);
    const startPoint = encodeURIComponent(resolveLocationQuery(cleanLocation));
    return `https://maps.google.com/maps?saddr=${startPoint}&daddr=${destinationSede}`;
  }
  
  if (sede === "legale") {
    return SEDE_LEGALE_MAPS_URL;
  }
  return `https://maps.google.com/maps?daddr=${s.lat},${s.lng}`;
}

const CompanyMap = ({ targetLocation, lang = "it" }: CompanyMapProps) => {
  const [activeSede, setActiveSede] = useState<SedeKey>("operativa");
  const [mapLoaded, setMapLoaded] = useState(false);
  const mt = MAP_T[lang] ?? MAP_T.it;

  const embedUrl = buildEmbedUrl(activeSede, targetLocation);
  const directionsUrl = buildDirectionsUrl(activeSede, targetLocation);

  const displayLocation = targetLocation 
    ? cleanLocationName(targetLocation)
    : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }}
      viewport={{ once: true }}
      className="w-full"
    >
      <div className="flex justify-center gap-4 mb-4">
        {(["operativa", "legale"] as SedeKey[]).map((key) => (
          <button
            key={key}
            onClick={() => setActiveSede(key)}
            className={cn(
              "flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300",
              activeSede === key
                ? "bg-gold/90 text-background shadow-lg"
                : "bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-white/70 border border-gray-200 dark:border-white/10 hover:border-gray-400 dark:hover:border-white/30"
            )}
          >
            <MapPin size={12} />
            {SEDI[key].label}
          </button>
        ))}
      </div>

      <div className="relative rounded-[1.5rem] overflow-hidden border border-gray-200 dark:border-white/10 shadow-[0_0_40px_rgba(212,175,55,0.05)]">
        {mapLoaded ? (
          <iframe
            title={displayLocation ? `Percorso da ${displayLocation}` : `Mappa ${SEDI[activeSede].label}`}
            src={embedUrl}
            className="w-full h-[400px]"
            style={{ border: 0, borderRadius: "1.5rem", filter: "invert(90%) hue-rotate(180deg) contrast(0.9)" }}
            loading="lazy"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setMapLoaded(true)}
            className="w-full h-[400px] flex flex-col items-center justify-center gap-3 bg-gray-100 dark:bg-white/[0.03] hover:bg-gray-200/70 dark:hover:bg-white/[0.06] transition-colors text-center px-6"
            aria-label={mt.load}
          >
            <MapPin size={32} className="text-gold" />
            <span className="font-bold text-foreground">{SEDI[activeSede].label}</span>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gold text-background font-bold text-sm">
              {mt.load}
            </span>
            <span className="text-[11px] text-muted-foreground max-w-xs leading-relaxed">{mt.note}</span>
          </button>
        )}

        <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row gap-2 z-20">
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-sm border border-gray-200 dark:border-gold/20 rounded-xl px-4 py-3 hover:border-gold/50 transition-colors w-full sm:w-auto"
          >
            <Navigation size={14} className="text-gold shrink-0" />
            <div className="text-left">
              <p className="text-xs font-bold text-foreground">
                {displayLocation ? `Naviga da ${displayLocation}` : "Indicazioni stradali"}
              </p>
              <p className="text-[10px] text-muted-foreground">{SEDI[activeSede].address}</p>
            </div>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default CompanyMap;

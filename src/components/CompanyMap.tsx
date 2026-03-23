import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { cn } from "@/lib/utils";
import { SEDE_OPERATIVA, SEDE_LEGALE, GOOGLE_MAPS_API_KEY } from "@/lib/googleMaps";

interface CompanyMapProps {
  targetLocation?: string;
}

type SedeKey = "operativa" | "legale";

const SEDI: Record<SedeKey, { lat: number; lng: number; label: string; address: string }> = {
  operativa: SEDE_OPERATIVA,
  legale: SEDE_LEGALE,
};

// 1. Qui definiamo esattamente come l'API deve cercare le sedi
const BUSINESS_QUERIES: Record<SedeKey, string> = {
  operativa: "40.92301825421415,9.520169263266684", // Coordinate pure e spaccate al millimetro per il Porto
  legale: "KS Rent Sardinia, Viale Aldo Moro 367, Olbia", // Google Business Profile query per la Sede Legale
};

// 2. Costruzione sicura dell'URL per l'iframe
function cleanLocation(loc?: string): string | undefined {
  return loc ? loc.split('|')[0].split('-')[0].trim() : undefined;
}

function buildEmbedUrl(sede: SedeKey, targetLocation?: string): string {
  const destinationQuery = BUSINESS_QUERIES[sede];
  const cleanTarget = cleanLocation(targetLocation);

  const baseUrl = cleanTarget
    ? "https://www.google.com/maps/embed/v1/directions"
    : "https://www.google.com/maps/embed/v1/place";

  const params = new URLSearchParams();
  params.append("key", GOOGLE_MAPS_API_KEY);
  params.append("hl", "it");

  if (cleanTarget) {
    params.append("origin", `${cleanTarget}, Sardegna`);
    params.append("destination", destinationQuery);
  } else {
    params.append("q", destinationQuery);
    if (sede === "operativa") {
      params.append("zoom", "18");
    }
  }

  return `${baseUrl}?${params.toString()}`;
}

// 3. Costruzione del link esterno per aprire l'app di Google Maps sul telefono
function buildDirectionsUrl(sede: SedeKey, targetLocation?: string): string {
  const dest = encodeURIComponent(BUSINESS_QUERIES[sede]);
  const baseUrl = "https://www.google.com/maps/dir/?api=1";

  if (targetLocation) {
    const origin = encodeURIComponent(`${targetLocation}, Sardegna`);
    return `${baseUrl}&origin=${origin}&destination=${dest}`;
  }
  return `${baseUrl}&destination=${dest}`;
}

const CompanyMap = ({ targetLocation }: CompanyMapProps) => {
  const [activeSede, setActiveSede] = useState<SedeKey>("operativa");

  const embedUrl = buildEmbedUrl(activeSede, targetLocation);
  const directionsUrl = buildDirectionsUrl(activeSede, targetLocation);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }}
      viewport={{ once: true }}
      className="w-full"
    >
      {/* Bottoni posizionati in sicurezza SOPRA la mappa per non coprire i controlli */}
      <div className="flex justify-center gap-4 mb-4">
        {(["operativa", "legale"] as SedeKey[]).map((key) => (
          <button
            key={key}
            onClick={() => setActiveSede(key)}
            className={cn(
              "flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300",
              activeSede === key
                ? "bg-gold/90 text-background shadow-lg"
                : "bg-white/5 text-white/70 border border-white/10 hover:border-white/30",
            )}
          >
            <MapPin size={12} />
            {SEDI[key].label}
          </button>
        ))}
      </div>

      {/* Contenitore della Mappa */}
      <div className="rounded-[1.5rem] overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(212,175,55,0.05)] bg-background">
        <iframe
          title={targetLocation ? `Percorso verso ${targetLocation}` : `Mappa ${SEDI[activeSede].label}`}
          src={embedUrl}
          className="w-full h-[400px] bg-[#e5e3df]"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade" // Cruciale per far funzionare l'API KEY senza schermate grigie
        />

        {/* Legenda inferiore con link all'app vera e propria */}
        <div className="flex flex-col sm:flex-row gap-2 p-4 bg-background/80 backdrop-blur-sm">
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-gold/20 rounded-xl px-4 py-3 hover:border-gold/50 transition-colors w-full"
          >
            <Navigation size={14} className="text-gold shrink-0" />
            <div className="text-left">
              <p className="text-xs font-bold text-foreground">
                {targetLocation ? `Apri navigatore da ${targetLocation}` : "Apri in Google Maps"}
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

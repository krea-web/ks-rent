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

const BUSINESS_QUERIES: Record<SedeKey, string> = {
  operativa: "KS Rent Sardinia, Viale Isola Bianca 38, Olbia",
  legale: "KS Rent Sardinia, Viale Aldo Moro 367, Olbia",
};

function buildEmbedUrl(sede: SedeKey, targetLocation?: string): string {
  const destinationQuery = BUSINESS_QUERIES[sede];
  const baseUrl = targetLocation
    ? "https://www.google.com/maps/embed/v1/directions"
    : "https://www.google.com/maps/embed/v1/place";

  const params = new URLSearchParams();
  params.append("key", GOOGLE_MAPS_API_KEY);
  params.append("hl", "it");

  if (targetLocation) {
    params.append("origin", `${targetLocation}, Sardegna`);
    params.append("destination", destinationQuery);
  } else {
    params.append("q", destinationQuery);
  }

  return `${baseUrl}?${params.toString()}`;
}

function buildDirectionsUrl(sede: SedeKey, targetLocation?: string): string {
  const dest = encodeURIComponent(BUSINESS_QUERIES[sede]);
  if (targetLocation) {
    const origin = encodeURIComponent(`${targetLocation}, Sardegna`);
    return `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${dest}`;
  }
  return `https://www.google.com/maps/dir/?api=1&destination=${dest}`;
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
    >
      {/* Sede toggle buttons — ABOVE the map, not overlapping */}
      <div className="flex justify-center gap-4 mb-4">
        {(["operativa", "legale"] as SedeKey[]).map((key) => (
          <button
            key={key}
            onClick={() => setActiveSede(key)}
            className={cn(
              "flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300",
              activeSede === key
                ? "bg-gold/90 text-background shadow-lg"
                : "bg-white/5 text-white/70 border border-white/10 hover:border-white/30"
            )}
          >
            <MapPin size={12} />
            {SEDI[key].label}
          </button>
        ))}
      </div>

      {/* Map container */}
      <div className="rounded-[1.5rem] overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(212,175,55,0.05)]">
        <iframe
          title={targetLocation ? `Percorso verso ${targetLocation}` : `Mappa ${SEDI[activeSede].label}`}
          src={embedUrl}
          className="w-full h-[400px]"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
        />

        {/* Bottom legend */}
        <div className="flex flex-col sm:flex-row gap-2 p-4 bg-background/80 backdrop-blur-sm">
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-gold/20 rounded-xl px-4 py-3 hover:border-gold/50 transition-colors"
          >
            <Navigation size={14} className="text-gold shrink-0" />
            <div>
              <p className="text-xs font-bold text-foreground">
                {targetLocation ? `Percorso da ${SEDI[activeSede].label}` : "Indicazioni stradali"}
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

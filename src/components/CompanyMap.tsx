import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { cn } from "@/lib/utils";
import { SEDE_OPERATIVA, SEDE_LEGALE } from "@/lib/googleMaps";

interface CompanyMapProps {
  targetLocation?: string;
}

type SedeKey = "operativa" | "legale";

const SEDI: Record<SedeKey, { lat: number; lng: number; label: string; address: string; mapLabel: string }> = {
  operativa: { ...SEDE_OPERATIVA, mapLabel: "KS+RENT+Porto+Olbia" },
  legale: { ...SEDE_LEGALE, mapLabel: "KS+RENT+SARDINIA" },
};

function buildEmbedUrl(sede: SedeKey, targetLocation?: string): string {
  const s = SEDI[sede];
  const coords = `${s.lat},${s.lng}`;
  if (targetLocation) {
    const dest = encodeURIComponent(`${targetLocation}, Costa Smeralda, Sardegna`);
    return `https://maps.google.com/maps?saddr=${coords}+(${s.mapLabel})&daddr=${dest}&output=embed`;
  }
  return `https://maps.google.com/maps?q=${coords}+(${s.mapLabel})&z=15&output=embed`;
}

function buildDirectionsUrl(sede: SedeKey, targetLocation?: string): string {
  const s = SEDI[sede];
  const coords = `${s.lat},${s.lng}`;
  if (targetLocation) {
    return `https://www.google.com/maps/dir/?api=1&origin=${coords}&destination=${encodeURIComponent(`${targetLocation}, Costa Smeralda, Sardegna`)}`;
  }
  return `https://www.google.com/maps/dir/?api=1&destination=${coords}`;
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
      {/* Sede toggle buttons — OUTSIDE the map */}
      <div className="flex justify-center gap-3 mb-4">
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
      <div className="relative rounded-[1.5rem] overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(212,175,55,0.05)]">
        <iframe
          title={targetLocation ? `Percorso verso ${targetLocation}` : `Mappa ${SEDI[activeSede].label}`}
          src={embedUrl}
          className="w-full h-[400px]"
          style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(0.9)" }}
          loading="lazy"
          allowFullScreen
        />

        {/* Bottom legend */}
        <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row gap-2 z-20">
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#0a0a0a]/90 backdrop-blur-sm border border-gold/20 rounded-xl px-4 py-3 hover:border-gold/50 transition-colors"
          >
            <Navigation size={14} className="text-gold shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">
                {targetLocation ? `Percorso da ${SEDI[activeSede].label}` : "Indicazioni stradali"}
              </p>
              <p className="text-[10px] text-white/50">{SEDI[activeSede].address}</p>
            </div>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default CompanyMap;

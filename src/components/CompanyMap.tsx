import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { cn } from "@/lib/utils";
import { SEDE_OPERATIVA, SEDE_LEGALE, SEDE_LEGALE_MAPS_URL } from "@/lib/googleMaps";

interface CompanyMapProps {
  targetLocation?: string;
}

type SedeKey = "operativa" | "legale";

const SEDI: Record<SedeKey, { lat: number; lng: number; label: string; address: string }> = {
  operativa: SEDE_OPERATIVA,
  legale: SEDE_LEGALE,
};

function buildEmbedUrl(sede: SedeKey, targetLocation?: string): string {
  const s = SEDI[sede];

  // Per la Sede Legale forziamo la stringa esatta della scheda Google Business
  // Per la Sede Operativa usiamo le coordinate esatte (invariato)
  const originQuery =
    sede === "legale" ? encodeURIComponent("KS Rent Sardinia, Viale Aldo Moro 367, Olbia") : `${s.lat},${s.lng}`;

  if (targetLocation) {
    // Directions mode: from sede to target location
    const dest = encodeURIComponent(`${targetLocation}, Costa Smeralda, Sardegna`);
    return `https://maps.google.com/maps?saddr=${originQuery}&daddr=${dest}&output=embed`;
  }

  // Pin mode: show sede location
  if (sede === "legale") {
    return `https://maps.google.com/maps?q=${originQuery}&t=m&z=17&output=embed&iwloc=near`;
  }
  return `https://maps.google.com/maps?q=${s.lat},${s.lng}&z=15&output=embed`;
}

function buildDirectionsUrl(sede: SedeKey, targetLocation?: string): string {
  const s = SEDI[sede];

  const originQuery =
    sede === "legale" ? encodeURIComponent("KS Rent Sardinia, Viale Aldo Moro 367, Olbia") : `${s.lat},${s.lng}`;

  if (targetLocation) {
    const dest = encodeURIComponent(`${targetLocation}, Costa Smeralda, Sardegna`);
    return `https://maps.google.com/maps?saddr=${originQuery}&daddr=${dest}`;
  }
  if (sede === "legale") {
    return SEDE_LEGALE_MAPS_URL;
  }
  return `https://maps.google.com/maps?daddr=${s.lat},${s.lng}`;
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
      {/* Sede toggle buttons - Spostati SOPRA la mappa e non in absolute */}
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

      {/* Map Container */}
      <div className="relative rounded-[1.5rem] overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(212,175,55,0.05)]">
        {/* Iframe map */}
        <iframe
          title={targetLocation ? `Percorso verso ${targetLocation}` : `Mappa ${SEDI[activeSede].label}`}
          src={embedUrl}
          className="w-full h-[400px]"
          style={{ border: 0, borderRadius: "1.5rem", filter: "invert(90%) hue-rotate(180deg) contrast(0.9)" }}
          loading="lazy"
          allowFullScreen
        />

        {/* Bottom legend - Questa va bene in absolute in basso perché non copre nulla */}
        <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row gap-2 z-20">
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#0a0a0a]/90 backdrop-blur-sm border border-gold/20 rounded-xl px-4 py-3 hover:border-gold/50 transition-colors w-full sm:w-auto"
          >
            <Navigation size={14} className="text-gold shrink-0" />
            <div className="text-left">
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

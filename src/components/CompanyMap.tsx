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

// 1. Costruzione manuale e sicura degli URL per evitare l'errore 400 %2C
function buildEmbedUrl(sede: SedeKey, targetLocation?: string): string {
  // Puliamo aggressivamente il nome della località (rimuove tutto dopo | o -)
  const cleanLocation = targetLocation ? targetLocation.replace(/\|.*/, "").replace(/-.*/, "").trim() : "";

  // Usiamo 6 decimali massimi per evitare errori di precisione da Google
  const coordsOperativa = "40.923018,9.520169";

  if (cleanLocation) {
    // MODALITÀ PERCORSO (Directions API)
    const origin = encodeURIComponent(`${cleanLocation}, Sardegna`);
    // Per il percorso, Google preferisce l'indirizzo fisico o le coordinate pure, NON il nome del business
    const destination =
      sede === "operativa"
        ? coordsOperativa // Niente encodeURIComponent qui, la virgola deve restare pura!
        : encodeURIComponent("Viale Aldo Moro 367, Olbia, Sardegna");

    return `https://www.google.com/maps/embed/v1/directions?key=${GOOGLE_MAPS_API_KEY}&origin=${origin}&destination=${destination}&hl=it`;
  } else {
    // MODALITÀ PUNTO FISSO (Place API)
    // Qui possiamo usare la stringa aziendale perché l'endpoint Place la capisce
    const destination =
      sede === "operativa" ? coordsOperativa : encodeURIComponent("KS Rent Sardinia, Viale Aldo Moro 367, Olbia");

    const zoom = sede === "operativa" ? "&zoom=18" : "&zoom=17";
    return `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${destination}&hl=it${zoom}`;
  }
}

// 2. Link diretto per aprire l'app su Smartphone
function buildDirectionsUrl(sede: SedeKey, targetLocation?: string): string {
  const cleanLocation = targetLocation ? targetLocation.replace(/\|.*/, "").replace(/-.*/, "").trim() : "";

  const dest =
    sede === "operativa" ? "40.923018,9.520169" : encodeURIComponent("KS Rent Sardinia, Viale Aldo Moro 367, Olbia");

  if (cleanLocation) {
    const origin = encodeURIComponent(`${cleanLocation}, Sardegna`);
    return `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${dest}`;
  }
  return `https://www.google.com/maps/dir/?api=1&destination=${dest}`;
}

const CompanyMap = ({ targetLocation }: CompanyMapProps) => {
  const [activeSede, setActiveSede] = useState<SedeKey>("operativa");

  const embedUrl = buildEmbedUrl(activeSede, targetLocation);
  const directionsUrl = buildDirectionsUrl(activeSede, targetLocation);

  // Generiamo il nome pulito per la UI
  const displayLocation = targetLocation ? targetLocation.replace(/\|.*/, "").replace(/-.*/, "").trim() : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }}
      viewport={{ once: true }}
      className="w-full"
    >
      {/* Bottoni posizionati in sicurezza SOPRA la mappa */}
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
          title={displayLocation ? `Percorso verso ${displayLocation}` : `Mappa ${SEDI[activeSede].label}`}
          src={embedUrl}
          className="w-full h-[400px] bg-[#e5e3df]"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Legenda inferiore con link all'app */}
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
                {displayLocation ? `Apri navigatore da ${displayLocation}` : "Apri in Google Maps"}
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

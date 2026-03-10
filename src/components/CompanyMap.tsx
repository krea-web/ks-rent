import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { GOOGLE_MAPS_API_KEY, OLBIA_CENTER, SEDE_OPERATIVA, SEDE_LEGALE } from "@/lib/googleMaps";

const FAVICON_URL = "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/asset/ksrent-favicon.webp";
const MAP_ID = "ee2520e4d399bf4fdb360162";

const MapLoader = () => (
  <div className="w-full h-[400px] rounded-[1.5rem] bg-[#111] border border-white/10 flex items-center justify-center">
    <motion.img
      src={FAVICON_URL}
      alt="Caricamento..."
      className="w-12 h-12 object-contain"
      animate={{ opacity: [0.3, 1, 0.3], scale: [0.9, 1.05, 0.9] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

function loadGoogleMapsScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.google?.maps?.marker?.AdvancedMarkerElement) {
      resolve();
      return;
    }
    if (document.querySelector('script[src*="maps.googleapis.com"]')) {
      const check = setInterval(() => {
        if (window.google?.maps?.marker?.AdvancedMarkerElement) {
          clearInterval(check);
          resolve();
        }
      }, 100);
      return;
    }
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=marker&v=weekly`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      const check = setInterval(() => {
        if (window.google?.maps?.marker?.AdvancedMarkerElement) {
          clearInterval(check);
          resolve();
        }
      }, 100);
    };
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

const CompanyMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    loadGoogleMapsScript()
      .then(() => {
        if (cancelled || !mapRef.current) return;

        const map = new google.maps.Map(mapRef.current, {
          center: OLBIA_CENTER,
          zoom: 13,
          mapId: MAP_ID,
          disableDefaultUI: true,
          zoomControl: true,
          gestureHandling: "cooperative",
        });

        // Sede Operativa marker (Porto)
        const pinOperativa = new google.maps.marker.PinElement({
          background: "#d4af37",
          borderColor: "#b8941e",
          glyphColor: "#000",
          scale: 1.2,
        });
        new google.maps.marker.AdvancedMarkerElement({
          map,
          position: { lat: SEDE_OPERATIVA.lat, lng: SEDE_OPERATIVA.lng },
          title: `${SEDE_OPERATIVA.label} — ${SEDE_OPERATIVA.address}`,
          content: pinOperativa.element,
        });

        // Sede Legale marker
        const pinLegale = new google.maps.marker.PinElement({
          background: "#888",
          borderColor: "#666",
          glyphColor: "#fff",
          scale: 1.0,
        });
        new google.maps.marker.AdvancedMarkerElement({
          map,
          position: { lat: SEDE_LEGALE.lat, lng: SEDE_LEGALE.lng },
          title: `${SEDE_LEGALE.label} — ${SEDE_LEGALE.address}`,
          content: pinLegale.element,
        });

        setLoaded(true);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });

    return () => { cancelled = true; };
  }, []);

  if (error) return <MapLoader />;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }}
      viewport={{ once: true }}
      className="relative rounded-[1.5rem] overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(212,175,55,0.05)]"
    >
      {!loaded && (
        <div className="absolute inset-0 z-10">
          <MapLoader />
        </div>
      )}
      <div ref={mapRef} style={{ width: "100%", height: "400px", borderRadius: "1.5rem" }} />

      {/* Legend overlay */}
      <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row gap-2 z-20">
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${SEDE_OPERATIVA.lat},${SEDE_OPERATIVA.lng}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#0a0a0a]/90 backdrop-blur-sm border border-gold/20 rounded-xl px-4 py-3 hover:border-gold/50 transition-colors"
        >
          <MapPin size={14} className="text-gold shrink-0" />
          <div>
            <p className="text-xs font-bold text-white">Sede Operativa (Porto)</p>
            <p className="text-[10px] text-white/50">Viale Isola Bianca 38</p>
          </div>
        </a>
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${SEDE_LEGALE.lat},${SEDE_LEGALE.lng}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#0a0a0a]/90 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 hover:border-white/30 transition-colors"
        >
          <MapPin size={14} className="text-white/50 shrink-0" />
          <div>
            <p className="text-xs font-bold text-white/80">Sede Legale</p>
            <p className="text-[10px] text-white/50">Viale Aldo Moro 367</p>
          </div>
        </a>
      </div>
    </motion.div>
  );
};

export default CompanyMap;

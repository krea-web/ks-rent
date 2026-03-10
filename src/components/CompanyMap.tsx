import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { GOOGLE_MAPS_API_KEY, LIBRARIES, OLBIA_CENTER, SEDE_OPERATIVA, SEDE_LEGALE, DARK_MAP_STYLE } from "@/lib/googleMaps";

const containerStyle = { width: "100%", height: "400px", borderRadius: "1.5rem" };

const CompanyMap = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries: LIBRARIES,
  });

  if (loadError) {
    return (
      <div className="w-full h-[400px] rounded-[1.5rem] bg-[#111] border border-white/10 animate-pulse flex items-center justify-center">
        <MapPin className="text-white/20" size={32} />
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="w-full h-[400px] rounded-[1.5rem] bg-[#111] border border-white/10 animate-pulse flex items-center justify-center">
        <MapPin className="text-white/20" size={32} />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }}
      viewport={{ once: true }}
      className="relative rounded-[1.5rem] overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(212,175,55,0.05)]"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={OLBIA_CENTER}
        zoom={14}
        onLoad={() => console.log("Google Maps caricata con API Key e Map ID corretti")}
        options={{
          mapId: "ee2520e4d399bf4fdb360162",
          styles: DARK_MAP_STYLE as google.maps.MapTypeStyle[],
          disableDefaultUI: true,
          zoomControl: true,
          gestureHandling: "cooperative",
        }}
      >
        <MarkerF
          position={{ lat: SEDE_OPERATIVA.lat, lng: SEDE_OPERATIVA.lng }}
          title={`${SEDE_OPERATIVA.label} — ${SEDE_OPERATIVA.address}`}
        />
        <MarkerF
          position={{ lat: SEDE_LEGALE.lat, lng: SEDE_LEGALE.lng }}
          title={`${SEDE_LEGALE.label} — ${SEDE_LEGALE.address}`}
        />
      </GoogleMap>

      {/* Legend overlay */}
      <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row gap-2">
        <div className="flex items-center gap-2 bg-[#0a0a0a]/90 backdrop-blur-sm border border-gold/20 rounded-xl px-4 py-3">
          <MapPin size={14} className="text-gold shrink-0" />
          <div>
            <p className="text-xs font-bold text-white">Sede Operativa</p>
            <p className="text-[10px] text-white/50">Viale Isola Bianca 38</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-[#0a0a0a]/90 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3">
          <MapPin size={14} className="text-white/50 shrink-0" />
          <div>
            <p className="text-xs font-bold text-white/80">Sede Legale</p>
            <p className="text-[10px] text-white/50">Viale Aldo Moro 367</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CompanyMap;

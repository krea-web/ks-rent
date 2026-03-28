import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState, useMemo } from "react";
import { supabase } from "@/lib/supabase";
import OptimizedImage from "@/components/OptimizedImage";
import { getVehicleAlt } from "@/lib/imageUtils";

// Immagini di fallback per modello
const VEHICLE_IMAGES: Record<string, string> = {
  "Audi RS3":
    "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/AUDI/ksrent-audirs3verde.webp",
  "Jeep Avenger":
    "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/JEEP/ksrent-jeepavenger.webp",
  "BMW M2": "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/BMW/ksrent-bmwm2.webp",
  "Fiat Panda":
    "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/FIAT/ksrent-fiatpanda.webp",
  "Honda SH 125":
    "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/HONDA/ksrent-hondash125.webp",
  "Yamaha Quad":
    "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/YAMAHA/ksrent-quadyamaharaptor.webp",
};

const FleetShowcase = () => {
  const [fleet, setFleet] = useState<any[]>([]);

  useEffect(() => {
    const fetchFleet = async () => {
      const { data, error } = await supabase.from("vehicles").select("*").order("category");
      if (data) setFleet(data);
      if (error) console.error("Errore recupero flotta:", error);
    };
    fetchFleet();
  }, []);

  const groupedFleet = useMemo(() => {
    const groups: Record<string, { representative: any; isAvailable: boolean }> = {};
    for (const v of fleet) {
      const key = `${v.make}__${v.model}`;
      if (!groups[key]) {
        groups[key] = { representative: v, isAvailable: false };
      }
      if (v.available) {
        groups[key].isAvailable = true;
        if (!groups[key].representative.available) {
          groups[key].representative = v;
        }
      }
    }
    return Object.values(groups).filter((g) => g.isAvailable);
  }, [fleet]);

  const getImage = (v: any) =>
    v.image_url ||
    VEHICLE_IMAGES[v.model] ||
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80";

  return (
    <section className="py-16 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-gold/5 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20 px-2">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold text-sm uppercase tracking-[0.3em] font-semibold mb-4"
          >
            Esplora la Flotta
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-6xl font-display font-black mb-6 leading-tight break-words"
          >
            Scegli la tua <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-gold">
              Prossima Emozione
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Dalle city car perfette per le vie di Olbia alle supercar più esclusive. Ogni veicolo KS Rent è preparato
            per offrirti un'esperienza impeccabile.
          </motion.p>
        </div>

        {groupedFleet.length === 0 ? (
          <div className="text-center text-muted-foreground py-20">Caricamento flotta...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
            {groupedFleet.map((group, i) => {
              const v = group.representative;
              const isM2 = v.model?.includes("M2");
              const isRS3 = v.model?.includes("RS3");
              const isSupercar = isM2 || isRS3;

              return (
                <motion.div
                  key={`${v.make}__${v.model}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="group flex flex-col bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/5 border-b-[3px] border-b-gold/40 dark:border-b-transparent rounded-3xl overflow-hidden hover:border-gold/30 transition-all duration-500 shadow-[0_8px_30px_rgba(212,175,55,0.08)] dark:shadow-2xl"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-black/60 backdrop-blur-md text-white text-xs uppercase tracking-wider font-semibold py-2 px-4 rounded-full border border-white/10">
                        {v.category}
                      </span>
                    </div>
                    <OptimizedImage
                      src={getImage(v)}
                      alt={getVehicleAlt(v.make, v.model)}
                      width={800}
                      imgWidth={800}
                      imgHeight={500}
                      responsive
                      showSkeleton
                      skeletonClassName="rounded-none"
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-100 dark:from-[#0a0a0a] via-transparent to-transparent opacity-80 pointer-events-none" />
                  </div>

                  <div className="p-5 md:p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl md:text-3xl font-black font-display mb-2 group-hover:text-gold transition-colors duration-300">
                      {v.make ? `${v.make} ${v.model}` : v.model}
                    </h3>
                    <p className="text-gold font-bold text-lg mb-6">
                      {v.daily_rate && v.daily_rate > 0 ? `A partire da €${v.daily_rate}/gg` : "Prezzo su richiesta"}
                    </p>

                    {isSupercar ? (
                      <div className="grid grid-cols-3 gap-2 md:gap-4 mb-8 mt-auto">
                        <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-gray-200/50 dark:bg-white/5 border border-gray-200 dark:border-white/5">
                          <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-1">
                            Potenza
                          </span>
                          <span className="text-sm font-bold text-gold">{isM2 ? "460 CV" : "400 CV"}</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-gray-200/50 dark:bg-white/5 border border-gray-200 dark:border-white/5">
                          <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-1">
                            0-100 km/h
                          </span>
                          <span className="text-sm font-bold text-gold">{isM2 ? "4.1 sec" : "3.8 sec"}</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-gray-200/50 dark:bg-white/5 border border-gray-200 dark:border-white/5">
                          <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-1">
                            Vel. Max
                          </span>
                          <span className="text-sm font-bold text-gold">{isM2 ? "285 km/h" : "290 km/h"}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-3 gap-2 md:gap-4 mb-8 mt-auto">
                        <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-gray-200/50 dark:bg-white/5 border border-gray-200 dark:border-white/5">
                          <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-1">
                            Giugno
                          </span>
                          <span className="text-sm font-bold text-gold">
                            {v.rate_june ? `€${v.rate_june}/gg` : "-"}
                          </span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-gray-200/50 dark:bg-white/5 border border-gray-200 dark:border-white/5">
                          <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-1">
                            Luglio
                          </span>
                          <span className="text-sm font-bold text-gold">
                            {v.rate_july ? `€${v.rate_july}/gg` : "-"}
                          </span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-gray-200/50 dark:bg-white/5 border border-gray-200 dark:border-white/5">
                          <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-1">
                            Agosto
                          </span>
                          <span className="text-sm font-bold text-gold">
                            {v.rate_august ? `€${v.rate_august}/gg` : "-"}
                          </span>
                        </div>
                      </div>
                    )}

                    <Link
                      to="/prenotaora"
                      className="flex items-center justify-center gap-3 w-full bg-gold/10 hover:bg-gold text-gold hover:text-black py-4 rounded-full font-bold uppercase tracking-wider transition-all duration-300 group/btn min-h-[48px] relative z-10"
                    >
                      Noleggia Ora
                      <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      {/* SEO KEYWORD PARAGRAPH */}
      <div className="max-w-7xl mx-auto mt-12 text-gray-600 dark:text-white/70 font-light text-sm text-center leading-relaxed">
        <p>
          KS Rent vanta una flotta variegata per ogni esigenza. Dai brividi del <strong>noleggio supercar a Olbia</strong> con modelli iconici (prova il brivido del <strong>noleggio Audi RS3 a Olbia</strong> o BMW M2), fino alla mobilità agile. Se preferisci le due ruote, scopri il nostro <strong>noleggio moto a Olbia</strong> per evitare il traffico costiero, oppure divertiti in off-road con il nostro <strong>noleggio quad a Olbia</strong>.
        </p>
      </div>
    </section>
  );
};

export default FleetShowcase;

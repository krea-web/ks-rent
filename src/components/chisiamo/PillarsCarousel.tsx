import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, Key, MapPin } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Fiducia Vera",
    desc: "Abbiamo eliminato le barriere. Non richiediamo carte di credito o score bancari. Il nostro rapporto con il cliente si basa su trasparenza e stretta di mano.",
  },
  {
    icon: Key,
    title: "Flotta Premium",
    desc: "Dai SUV per le avventure fuoristrada, alle supercar per le notti in Costa Smeralda, fino agli scooter agili per la città. Ogni veicolo è perfetto.",
  },
  {
    icon: MapPin,
    title: "Sedi Strategiche",
    desc: "Presenti a Olbia con Sede Legale e Operativa. Vicinissimi all'aeroporto e al porto, per garantirti una consegna rapida e senza stress.",
  },
];

const PillarsCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.666%"]);

  return (
    <>
      {/* Desktop: sticky horizontal scroll */}
      <section ref={containerRef} className="hidden lg:block relative h-[300vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden bg-[#050505]">
          <motion.div style={{ x }} className="flex w-[300vw]">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="w-screen h-screen flex items-center justify-center px-12 lg:px-24"
              >
                <div className="max-w-2xl space-y-8">
                  <div className="w-20 h-20 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center">
                    <p.icon size={32} className="text-gold" />
                  </div>
                  <h3 className="text-4xl md:text-6xl font-display font-black tracking-tight">
                    {p.title}
                  </h3>
                  <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mobile: snap scroll */}
      <section className="lg:hidden bg-[#050505] py-16 px-0 overflow-hidden">
        <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-0">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="snap-center shrink-0 w-[85vw] mx-[7.5vw] first:ml-[7.5vw] last:mr-[7.5vw] flex flex-col justify-center px-6 py-12 bg-[#0a0a0a] border border-white/5 rounded-3xl"
            >
              <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mb-6">
                <p.icon size={28} className="text-gold" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-black tracking-tight mb-4">
                {p.title}
              </h3>
              <p className="text-base text-white/60 font-light leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default PillarsCarousel;

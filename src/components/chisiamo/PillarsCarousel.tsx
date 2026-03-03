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
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.666%"]);

  return (
    <>
      {/* Desktop */}
      <section ref={targetRef} className="relative h-[300vh] bg-[#050505] hidden lg:block">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex w-[300vw]">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="w-screen h-screen flex-shrink-0 flex flex-col items-center justify-center px-24"
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

      {/* Mobile */}
      <section className="lg:hidden bg-[#050505] py-16 overflow-hidden">
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 scrollbar-hide">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="snap-center shrink-0 w-[85vw] flex flex-col justify-center px-6 py-12 bg-[#0a0a0a] border border-white/5 rounded-3xl"
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

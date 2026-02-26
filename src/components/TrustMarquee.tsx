import { motion } from "framer-motion";
import { ShieldCheck, CreditCard, MapPin, BadgeEuro, Sparkles, Clock } from "lucide-react";

// Punti di forza (Unique Selling Propositions)
const usps = [
  { text: "Nessuna Carta di Credito", icon: CreditCard },
  { text: "No Score Bancario", icon: ShieldCheck },
  { text: "Olbia & Costa Smeralda", icon: MapPin },
  { text: "Nessun Deposito Nascosto", icon: BadgeEuro },
  { text: "Assistenza 24/7", icon: Clock },
  { text: "Flotta Premium", icon: Sparkles },
];

// Loghi Ufficiali Originali (Trasparenza pura)
const brands = [
  { name: "Audi", url: "https://upload.wikimedia.org/wikipedia/commons/9/92/Audi-Logo_2016.svg" },
  { name: "BMW", url: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg" },
  { name: "Mercedes", url: "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg" },
  { name: "Jeep", url: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Jeep_logo.svg" },
  { name: "Fiat", url: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Fiat_Logo_2006.svg" },
  { name: "Honda", url: "https://upload.wikimedia.org/wikipedia/commons/3/38/Honda.svg" },
  { name: "Yamaha", url: "https://upload.wikimedia.org/wikipedia/commons/0/01/Yamaha_Motor_Logo.svg" },
];

const duplicatedUsps = [...usps, ...usps, ...usps, ...usps];
const duplicatedBrands = [...brands, ...brands, ...brands, ...brands, ...brands];

const TrustMarquee = () => {
  return (
    <section className="relative py-12 bg-[#050505] border-y border-white/5 overflow-hidden flex flex-col gap-10">
      {/* Sfumature laterali per fondere il contenuto con lo sfondo */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#050505] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none" />

      {/* Stili per l'animazione continua */}
      <style>
        {`
          @keyframes marquee-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marquee-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-marquee-left {
            display: flex;
            width: fit-content;
            animation: marquee-left 35s linear infinite;
          }
          .animate-marquee-right {
            display: flex;
            width: fit-content;
            animation: marquee-right 45s linear infinite;
          }
          .pause-on-hover:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* RIGA 1: Punti di Forza (Scorre verso Sinistra) */}
      <div className="relative flex overflow-hidden group">
        <div className="animate-marquee-left pause-on-hover flex items-center gap-8 pl-8">
          {duplicatedUsps.map((usp, i) => (
            <div
              key={`usp-${i}`}
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-gold hover:bg-gold/5 transition-all duration-300 cursor-default whitespace-nowrap shadow-lg"
            >
              <usp.icon size={20} className="text-gold" />
              <span className="text-sm font-bold tracking-wider text-white uppercase">{usp.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* RIGA 2: Loghi Flotta Originali (Senza sfondo, scorre verso Destra) */}
      <div className="relative flex overflow-hidden group mt-2">
        <div className="animate-marquee-right pause-on-hover flex items-center gap-16 pl-16">
          {duplicatedBrands.map((brand, i) => (
            <div key={`brand-${i}`} className="flex items-center justify-center w-32 h-16 cursor-pointer">
              <img
                src={brand.url}
                alt={`${brand.name} logo ufficiale`}
                /* drop-shadow leggero bianco/grigio per far leggere le scritte scure (es. Jeep) sul nero, senza creare riquadri */
                className="w-full h-full object-contain opacity-80 hover:opacity-100 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] hover:drop-shadow-[0_0_12px_rgba(212,175,55,0.4)] transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustMarquee;

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

// Loghi Ufficiali (tramite SimpleIcons CDN - vettoriali bianchi per Dark Mode)
const brands = [
  { name: "Audi", url: "https://cdn.simpleicons.org/audi/white" },
  { name: "BMW", url: "https://cdn.simpleicons.org/bmw/white" },
  { name: "Mercedes-Benz", url: "https://cdn.simpleicons.org/mercedes/white" },
  { name: "Jeep", url: "https://cdn.simpleicons.org/jeep/white" },
  { name: "Fiat", url: "https://cdn.simpleicons.org/fiat/white" },
  { name: "Honda", url: "https://cdn.simpleicons.org/honda/white" },
  { name: "Yamaha", url: "https://cdn.simpleicons.org/yamahamotorcorporation/white" },
];

// Duplichiamo gli array per creare l'effetto infinito fluido (Seamless Loop)
const duplicatedUsps = [...usps, ...usps, ...usps, ...usps];
const duplicatedBrands = [...brands, ...brands, ...brands, ...brands, ...brands];

const TrustMarquee = () => {
  return (
    <section className="relative py-12 bg-background border-y border-white/5 overflow-hidden flex flex-col gap-8">
      {/* Sfumature laterali per fondere il testo con lo sfondo */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />

      {/* Stili per l'animazione personalizzata senza toccare tailwind.config */}
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
            animation: marquee-left 40s linear infinite;
          }
          .animate-marquee-right {
            display: flex;
            width: fit-content;
            animation: marquee-right 40s linear infinite;
          }
          /* Pausa all'hover */
          .pause-on-hover:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* RIGA 1: Punti di Forza (Scorre verso Sinistra) */}
      <div className="relative flex overflow-hidden group">
        <div className="animate-marquee-left pause-on-hover flex items-center gap-12 pl-12">
          {duplicatedUsps.map((usp, i) => (
            <div
              key={`usp-${i}`}
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-gold/50 hover:bg-gold/10 transition-colors duration-300 cursor-default whitespace-nowrap"
            >
              <usp.icon size={20} className="text-gold" />
              <span className="text-sm font-semibold tracking-wide text-white/90 uppercase">{usp.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* RIGA 2: Loghi Flotta (Scorre verso Destra) */}
      <div className="relative flex overflow-hidden mt-4">
        <div className="animate-marquee-right flex items-center gap-24 pl-24 opacity-60 hover:opacity-100 transition-opacity duration-500">
          {duplicatedBrands.map((brand, i) => (
            <img
              key={`brand-${i}`}
              src={brand.url}
              alt={`${brand.name} logo`}
              className="h-10 md:h-14 w-auto object-contain hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-lg filter hover:brightness-125 hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]"
              style={{ filter: "brightness(0) invert(1)" }} // Forza il bianco in caso di CDN non stilizzata
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustMarquee;

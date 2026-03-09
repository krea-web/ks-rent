import { ShieldCheck, CreditCard, MapPin, BadgeEuro, Sparkles, Clock } from "lucide-react";
import audiLogo from "@/assets/brands/audi.png";
import bmwLogo from "@/assets/brands/bmw.png";
import mercedesLogo from "@/assets/brands/mercedes.png";
import jeepLogo from "@/assets/brands/jeep.png";
import fiatLogo from "@/assets/brands/fiat.png";
import hondaLogo from "@/assets/brands/honda.png";
import yamahaLogo from "@/assets/brands/yamaha.png";

const usps = [
  { text: "Nessuna Carta di Credito", icon: CreditCard },
  { text: "No Score Bancario", icon: ShieldCheck },
  { text: "Olbia & Costa Smeralda", icon: MapPin },
  { text: "Nessun Deposito Nascosto", icon: BadgeEuro },
  { text: "Assistenza 24/7", icon: Clock },
  { text: "Flotta Premium", icon: Sparkles },
];

const brands = [
  { name: "Audi", logo: audiLogo },
  { name: "BMW", logo: bmwLogo },
  { name: "Mercedes", logo: mercedesLogo },
  { name: "Jeep", logo: jeepLogo },
  { name: "Fiat", logo: fiatLogo },
  { name: "Honda", logo: hondaLogo },
  { name: "Yamaha", logo: yamahaLogo },
];

const duplicatedUsps = [...usps, ...usps, ...usps, ...usps];
const duplicatedBrands = [...brands, ...brands, ...brands, ...brands, ...brands];

const TrustMarquee = () => {
  return (
    <section className="relative py-12 bg-[#050505] border-y border-white/5 overflow-hidden flex flex-col gap-10">
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#050505] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none" />

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

      {/* RIGA 1: Punti di Forza */}
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

      {/* RIGA 2: Loghi Brand Originali */}
      <div className="relative flex overflow-hidden group mt-2">
        <div className="animate-marquee-right pause-on-hover flex items-center gap-16 pl-16">
          {duplicatedBrands.map((brand, i) => (
            <div key={`brand-${i}`} className="flex items-center justify-center w-28 h-14 cursor-pointer">
              <img
                src={brand.logo}
                alt={`${brand.name} noleggio auto Olbia KS Rent`}
                width={112}
                height={56}
                loading="lazy"
                className="max-w-full max-h-full object-contain opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-300 drop-shadow-[0_0_6px_rgba(255,255,255,0.15)]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustMarquee;

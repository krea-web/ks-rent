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

// Inline SVG brand logos
const BrandLogos: Record<string, React.FC<{ className?: string }>> = {
  Audi: ({ className }) => (
    <svg viewBox="0 0 200 60" className={className} fill="currentColor">
      <g transform="translate(10, 5)">
        <circle cx="25" cy="25" r="23" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle cx="65" cy="25" r="23" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle cx="105" cy="25" r="23" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle cx="145" cy="25" r="23" fill="none" stroke="currentColor" strokeWidth="3"/>
      </g>
    </svg>
  ),
  BMW: ({ className }) => (
    <svg viewBox="0 0 120 60" className={className}>
      <circle cx="60" cy="30" r="28" fill="none" stroke="currentColor" strokeWidth="3"/>
      <circle cx="60" cy="30" r="24" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="60" y1="6" x2="60" y2="54" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="36" y1="30" x2="84" y2="30" stroke="currentColor" strokeWidth="1.5"/>
      <text x="60" y="14" textAnchor="middle" fill="currentColor" fontSize="7" fontWeight="800" fontFamily="Arial, sans-serif">BMW</text>
    </svg>
  ),
  Mercedes: ({ className }) => (
    <svg viewBox="0 0 120 60" className={className}>
      <circle cx="60" cy="30" r="27" fill="none" stroke="currentColor" strokeWidth="3"/>
      <circle cx="60" cy="30" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
      <line x1="60" y1="3" x2="60" y2="20" stroke="currentColor" strokeWidth="2.5"/>
      <line x1="60" y1="30" x2="36.6" y2="50.5" stroke="currentColor" strokeWidth="2.5"/>
      <line x1="60" y1="30" x2="83.4" y2="50.5" stroke="currentColor" strokeWidth="2.5"/>
    </svg>
  ),
  Jeep: ({ className }) => (
    <svg viewBox="0 0 140 50" className={className} fill="currentColor">
      <text x="70" y="38" textAnchor="middle" fontSize="32" fontWeight="900" fontFamily="'Trebuchet MS', Arial, sans-serif" letterSpacing="4">JEEP</text>
    </svg>
  ),
  Fiat: ({ className }) => (
    <svg viewBox="0 0 140 50" className={className} fill="currentColor">
      <rect x="10" y="5" width="120" height="40" rx="20" fill="none" stroke="currentColor" strokeWidth="2.5"/>
      <text x="70" y="33" textAnchor="middle" fontSize="20" fontWeight="700" fontFamily="Georgia, serif" letterSpacing="6">FIAT</text>
    </svg>
  ),
  Honda: ({ className }) => (
    <svg viewBox="0 0 120 60" className={className} fill="currentColor">
      <text x="60" y="38" textAnchor="middle" fontSize="26" fontWeight="800" fontFamily="Arial, sans-serif" letterSpacing="1">
        <tspan>H</tspan>
      </text>
      <path d="M30 14 L48 14 L48 8 L72 8 L72 14 L90 14 L90 46 L72 46 L72 52 L48 52 L48 46 L30 46 Z" fill="none" stroke="currentColor" strokeWidth="2.5"/>
    </svg>
  ),
  Yamaha: ({ className }) => (
    <svg viewBox="0 0 120 60" className={className} fill="currentColor">
      <circle cx="60" cy="30" r="27" fill="none" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M60 6 L48 24 L38 18 L52 34 L60 30 L68 34 L82 18 L72 24 L60 6 Z" fill="currentColor" stroke="currentColor" strokeWidth="0.5" strokeLinejoin="round"/>
      <path d="M52 34 L60 54 L68 34 L60 38 Z" fill="currentColor"/>
    </svg>
  ),
};

const brandKeys = Object.keys(BrandLogos);
const duplicatedUsps = [...usps, ...usps, ...usps, ...usps];
const duplicatedBrands = [...brandKeys, ...brandKeys, ...brandKeys, ...brandKeys, ...brandKeys, ...brandKeys];

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

      {/* RIGA 2: Loghi Brand SVG Inline (scorre verso Destra) */}
      <div className="relative flex overflow-hidden group mt-2">
        <div className="animate-marquee-right pause-on-hover flex items-center gap-14 pl-14">
          {duplicatedBrands.map((brand, i) => {
            const Logo = BrandLogos[brand];
            return (
              <div key={`brand-${i}`} className="flex items-center justify-center w-32 h-14 cursor-pointer">
                <Logo className="w-full h-full text-white/60 hover:text-gold transition-colors duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustMarquee;

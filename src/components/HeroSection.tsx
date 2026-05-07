import { Link } from "@/lib/router-shim";

import { ArrowRight } from "lucide-react";

const HERO_VIDEO_URL = "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/asset/HERO%20GIUSTA.mp4";
const LOGO_URL = "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/asset/KSRENTlogo.png";
// Poster: og-image.jpg trasformata on-the-fly da Supabase Image Transformation
// (1920x1080 cover, quality 70) → ~80 KB invece di 1.7 MB. Niente da
// ri-uploadare, basta che il bucket abbia "Enable image transformation" ON.
const HERO_POSTER_URL = "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/render/image/public/asset/og-image.jpg?width=1920&height=1080&resize=cover&quality=70";

const HeroSection = () => (
  <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden">
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      poster={HERO_POSTER_URL}
      // @ts-expect-error fetchpriority is a valid HTML attribute, types may lag
      fetchpriority="high"
      className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
    >
      <source src={HERO_VIDEO_URL} type="video/mp4" />
    </video>

    <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background pointer-events-none" />

    <div className="relative z-10 w-full max-w-full px-4 md:px-8 text-center">
      <img
        src={LOGO_URL}
        alt="KS Rent — Noleggio Auto Olbia e Costa Smeralda"
        width={280}
        height={112}
        className="h-16 sm:h-20 md:h-28 w-auto mx-auto mb-6 object-contain"
        fetchPriority="high"
        loading="eager"
        decoding="sync"
      />

      <h1 className="text-gold text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-semibold mb-4">
        Noleggio Auto Olbia e Costa Smeralda
      </h1>

      <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
        <Link
          to="/prenotaora"
          className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 rounded-md gradient-gold text-primary-foreground font-bold uppercase tracking-wider text-sm hover:opacity-90 transition-opacity glow-gold min-h-[48px] relative z-20"
        >
          Prenota Ora <ArrowRight size={18} />
        </Link>
        <Link
          to="/chisiamo"
          className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 rounded-md border border-gold text-gold font-bold uppercase tracking-wider text-sm hover:bg-gold/10 transition-colors min-h-[48px] relative z-20"
        >
          Scopri di più
        </Link>
      </div>
    </div>
  </section>
);

export default HeroSection;

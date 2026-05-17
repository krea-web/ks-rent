import { Link } from "@/lib/router-shim";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Instagram, Star } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import SEOHead from "@/components/SEOHead";
import { buildBreadcrumb } from "@/lib/jsonLd";
import GoldKeywordsMarquee from "@/components/GoldKeywordsMarquee";
import CompanyMap from "@/components/CompanyMap";
import type { Locale } from "@/lib/i18n";
import { getDict } from "@/i18n";

// Mark which FAQs should be highlighted in gold (kept stable across locales by index).
const FAQ_GOLD_FLAGS = [true, true, false, false, false] as const;

/** Build the FAQPage JSON-LD using a specific locale's FAQ content. */
export function buildChiSiamoFaqJsonLd(lang: Locale = "it") {
  const dict = getDict(lang);
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dict.about.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

// Backwards-compatible default export for the Italian version (used by Astro pages).
export const chiSiamoFaqJsonLd = buildChiSiamoFaqJsonLd("it");

const FLEET_VEHICLES = [
  { image: 'https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/Trasparenza/ksrent-audirs3supercar-grigia.png', text: 'Audi RS3 Grigia' },
  { image: 'https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/Trasparenza/ksrent-bmwm2-maschera.png', text: 'BMW M2 Coupe' },
  { image: 'https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/Trasparenza/ksrent-jeepsuvavenger.webp', text: 'Jeep Avenger' },
  { image: 'https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/Trasparenza/ksrent-mercedessupercarclassea180d.png', text: 'Mercedes Classe A' },
  { image: 'https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/Trasparenza/ksrent-audirs3supercar-verde.png', text: 'Audi RS3 Verde' },
  { image: 'https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/Trasparenza/ksrent-fiatpandacitycar.webp', text: 'Fiat Panda Hybrid' },
  { image: 'https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/Trasparenza/ksrent-hondascooter350.png', text: 'Honda SH 350' },
  { image: 'https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/Trasparenza/ksrent-hondascooter125.png', text: 'Honda SH 125' },
  { image: 'https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/Trasparenza/ksrent-yamahaquadraptor.png', text: 'Yamaha Raptor' },
];

/** Localised top-level paths used inside ChiSiamo's internal links. */
const LOCALISED_PATHS: Record<Locale, {
  home: string;
  about: string;
  airport: string;
  port: string;
  costaSmeralda: string;
  bookNow: string;
}> = {
  it: {
    home: "/",
    about: "/chisiamo",
    airport: "/noleggio-auto-aeroporto-olbia",
    port: "/noleggio-auto-porto-olbia",
    costaSmeralda: "/noleggio-auto-costa-smeralda",
    bookNow: "/prenotaora",
  },
  en: {
    home: "/en",
    about: "/en/about-us",
    airport: "/en/car-hire-olbia-airport",
    port: "/en/car-hire-olbia-port",
    costaSmeralda: "/en/car-hire-costa-smeralda",
    bookNow: "/en/book-now",
  },
  de: {
    home: "/de",
    about: "/de/uber-uns",
    airport: "/de/autovermietung-flughafen-olbia",
    port: "/de/autovermietung-hafen-olbia",
    costaSmeralda: "/de/autovermietung-costa-smeralda",
    bookNow: "/de/jetzt-buchen",
  },
  fr: {
    home: "/fr",
    about: "/fr/a-propos",
    airport: "/fr/location-voiture-aeroport-olbia",
    port: "/fr/location-voiture-port-olbia",
    costaSmeralda: "/fr/location-voiture-costa-smeralda",
    bookNow: "/fr/reserver",
  },
};

interface ChiSiamoProps {
  lang?: Locale;
}

const ChiSiamo = ({ lang = "it" }: ChiSiamoProps) => {
  const t = getDict(lang);
  const paths = LOCALISED_PATHS[lang];
  const canonical = `https://www.ksrentsardinia.com${paths.about}`;
  const faqJsonLd = buildChiSiamoFaqJsonLd(lang);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const scrollPrev = useCallback((e: React.MouseEvent) => { e.preventDefault(); e.stopPropagation(); emblaApi?.scrollPrev(); }, [emblaApi]);
  const scrollNext = useCallback((e: React.MouseEvent) => { e.preventDefault(); e.stopPropagation(); emblaApi?.scrollNext(); }, [emblaApi]);

  return (
    <div className="bg-gray-50 dark:bg-[#050505] text-foreground selection:bg-gold selection:text-black overflow-x-hidden font-sans">
      <SEOHead
        title={t.about.seoTitle}
        description={t.about.seoDescription}
        canonical={canonical}
        jsonLd={[faqJsonLd, buildBreadcrumb(t.about.breadcrumbTitle, paths.about)]}
      />

      {/* 1. HERO EDITORIALE */}
      <section className="relative min-h-[70vh] md:min-h-[85vh] flex flex-col justify-end pb-16 md:pb-24 px-4 md:px-12 lg:px-24">
        <div className="absolute inset-0 z-0">
          <img
            src="https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/asset/ksrent-noleggio-flottashowcase.webp"
            alt="Supercar Audi RS3 noleggio Costa Smeralda - KS Rent"
            className="w-full h-full object-cover opacity-40"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-50 dark:from-[#050505] via-gray-50/50 dark:via-[#050505]/50 to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center justify-center gap-4 mb-6 md:mb-8">
              <span className="text-gold text-xs sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.4em] font-semibold">
                {t.about.hero.eyebrow}
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-black leading-tight md:leading-[1.05] tracking-tight mb-6 md:mb-8 break-words">
              {t.about.hero.titlePart1} <span className="text-gradient-gold">{t.about.hero.titleAccent}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
              {t.about.hero.subtitle}
            </p>
            <div className="mt-8 w-full max-w-2xl h-[2px] relative overflow-hidden rounded-full mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
              <motion.div
                className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent rounded-full shadow-[0_0_20px_#D4AF37,0_0_40px_#D4AF37aa]"
                animate={{ x: ["-6rem", "calc(100% + 6rem)"] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. MISSION — Neon Gold Timeline */}
      <section className="py-24 md:py-40 px-4 md:px-12 lg:px-24 bg-stone-50 dark:bg-[#050505] relative">
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[2px] bg-gray-200 dark:bg-white/5 rounded-full">
            <motion.div
              className="absolute top-0 left-0 w-full rounded-full bg-gradient-to-b from-[#D4AF37] via-[#D4AF37] to-transparent shadow-[0_0_12px_#D4AF37,0_0_30px_#D4AF37aa,0_0_60px_#D4AF3755]"
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            />
          </div>

          <div className="space-y-16 md:space-y-20 pl-16 md:pl-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.2 } }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="absolute -left-[calc(2.5rem+5px)] md:-left-[calc(3rem+5px)] top-2 w-3 h-3 rounded-full bg-[#D4AF37] shadow-[0_0_10px_#D4AF37,0_0_20px_#D4AF37aa] border-2 border-[#D4AF37]" />
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold leading-tight">
                {t.about.mission.headingPart1} <span className="text-gold">{t.about.mission.headingAccent}</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.3 } }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="absolute -left-[calc(2.5rem+5px)] md:-left-[calc(3rem+5px)] top-2 w-3 h-3 rounded-full bg-[#D4AF37]/60 shadow-[0_0_8px_#D4AF37aa] border-2 border-[#D4AF37]/60" />
              <p className="text-lg md:text-2xl font-light text-gray-600 dark:text-white/70 leading-relaxed">
                {t.about.mission.p1}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.4 } }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="absolute -left-[calc(2.5rem+5px)] md:-left-[calc(3rem+5px)] top-2 w-3 h-3 rounded-full bg-[#D4AF37]/60 shadow-[0_0_8px_#D4AF37aa] border-2 border-[#D4AF37]/60" />
              <p className="text-lg md:text-2xl font-light text-gray-600 dark:text-white/70 leading-relaxed">
                {t.about.mission.p2}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.5 } }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative pt-4"
            >
              <div className="absolute -left-[calc(2.5rem+5px)] md:-left-[calc(3rem+5px)] top-6 w-4 h-4 rounded-full bg-[#D4AF37] shadow-[0_0_14px_#D4AF37,0_0_30px_#D4AF37aa] border-2 border-[#D4AF37]" />
              <blockquote className="border-l-0 pl-0">
                <p className="text-2xl md:text-4xl font-display font-medium italic text-gray-900 dark:text-white leading-snug">
                  {t.about.mission.quote}
                </p>
                <span className="block mt-8 text-sm md:text-base font-bold tracking-[0.2em] uppercase text-gold">
                  {t.about.mission.quoteAuthor}
                </span>
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. VISION */}
      <section className="py-16 md:py-32 bg-stone-50 dark:bg-[#050505] relative overflow-hidden border-t border-gray-200 dark:border-white/5">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-4 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-[2rem] border border-gray-200 dark:border-white/5">
                <img
                  src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80"
                  alt={t.about.vision.imgAlt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 md:-bottom-8 md:-right-8 w-36 h-36 md:w-48 md:h-48 bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-3xl flex items-center justify-center p-4 md:p-6 hidden md:flex shadow-2xl">
                <p className="text-xs text-gold uppercase tracking-widest font-semibold text-center leading-loose">
                  {t.about.vision.badgeYear}
                  <br />
                  {t.about.vision.badgeIn}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <span className="block text-gold font-semibold tracking-[0.3em] uppercase text-xs mb-6 md:mb-8">
                {t.about.vision.eyebrow}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 md:mb-8 break-words">
                {t.about.vision.heading}
              </h2>
              <div className="space-y-5 md:space-y-6 text-gray-600 dark:text-white/60 font-light text-base md:text-lg">
                <p>
                  {t.about.vision.p1}
                </p>
                <p>
                  {t.about.vision.p2Pre}
                  <Link to={paths.home} className="text-gold underline hover:text-gray-900 dark:hover:text-white transition-colors">{t.about.vision.p2Link1}</Link>
                  {t.about.vision.p2Mid1}
                  <Link to={paths.airport} className="text-gold underline hover:text-gray-900 dark:hover:text-white transition-colors">{t.about.vision.p2Link2}</Link>
                  {t.about.vision.p2Mid2}
                  <Link to={paths.port} className="text-gold underline hover:text-gray-900 dark:hover:text-white transition-colors">{t.about.vision.p2Link3}</Link>
                  {t.about.vision.p2Post}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <GoldKeywordsMarquee />

      {/* 3.5. MENZIONATI SU */}
      <section className="py-12 md:py-16 bg-white dark:bg-black border-t border-gray-200 dark:border-white/5">
        <div className="w-full max-w-5xl mx-auto px-4 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }}
            viewport={{ once: true }}
          >
            <span className="block text-gold font-semibold tracking-[0.3em] uppercase text-xs mb-4">
              {t.about.mentions.eyebrow}
            </span>
            <p className="text-gray-700 dark:text-white/70 text-base md:text-lg font-light leading-relaxed max-w-3xl mx-auto">
              {t.about.mentions.text1}
              <span className="font-semibold text-gray-900 dark:text-white">{t.about.mentions.portalName}</span>
              {t.about.mentions.text2}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. SOCIAL (Instagram) */}
      <section className="py-16 md:py-32 bg-gray-100 dark:bg-[#0a0a0a] border-t border-gray-200 dark:border-white/5 relative">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-8 mb-10 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center justify-center p-3 bg-gray-200 dark:bg-white/5 rounded-2xl mb-6 border border-gray-200 dark:border-white/10">
                <Instagram className="text-gold w-6 h-6" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 leading-tight">
                {t.about.social.heading}
              </h2>
              <p className="text-gray-500 dark:text-white/50 font-light text-base md:text-lg">
                {t.about.social.subtitle}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }}
              viewport={{ once: true }}
            >
              <a
                href="https://instagram.com/ksrentsardinia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 md:px-8 py-4 rounded-full bg-gray-200 dark:bg-white/5 border border-gray-300 dark:border-white/10 hover:border-gold/50 hover:bg-gold/10 text-gray-900 dark:text-white hover:text-gold transition-all duration-300 uppercase tracking-widest text-xs font-bold group min-h-[48px] relative z-20"
              >
                {t.about.social.followCta}{" "}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[220px] sm:auto-rows-[250px] md:auto-rows-[300px]">
            <motion.a
              href="https://instagram.com/ksrentsardinia"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }}
              viewport={{ once: true }}
              className="md:col-span-8 md:row-span-2 relative group overflow-hidden rounded-2xl md:rounded-[2rem] bg-gray-200 dark:bg-[#111] border border-gray-200 dark:border-white/5 block"
            >
              <img
                src="https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/seo_pages/vehicles-context/audi-rs3-grey-airport.webp"
                alt="KS Rent Audi RS3 noleggio supercar Olbia"
                loading="lazy"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-10 pointer-events-none">
                <Instagram className="text-gold mb-3" size={32} />
                <p className="text-white font-medium">{t.about.social.bigImageCaption}</p>
              </div>
            </motion.a>

            <motion.a
              href="https://instagram.com/ksrentsardinia"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }}
              viewport={{ once: true }}
              className="md:col-span-4 md:row-span-1 relative group overflow-hidden rounded-2xl md:rounded-[2rem] bg-gray-200 dark:bg-[#111] border border-gray-200 dark:border-white/5 block"
            >
              <img
                src="https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/seo_pages/vehicles-context/audi-rs3-porto-cervo.webp"
                alt="Audi RS3 verde noleggio Costa Smeralda KS Rent"
                loading="lazy"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm pointer-events-none">
                <Instagram className="text-white" size={28} />
              </div>
            </motion.a>

            <motion.a
              href="https://instagram.com/ksrentsardinia"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.4 } }}
              viewport={{ once: true }}
              className="md:col-span-4 md:row-span-1 relative group overflow-hidden rounded-2xl md:rounded-[2rem] bg-gray-200 dark:bg-[#111] border border-gray-200 dark:border-white/5 block"
            >
              <img
                src="https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/seo_pages/vehicles-context/bmw-m2-costa-smeralda-road.webp"
                alt="BMW M2 noleggio Olbia Sardegna KS Rent"
                loading="lazy"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm pointer-events-none">
                <Instagram className="text-white" size={28} />
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* MAPPA SEDI */}
      <section className="py-16 md:py-24 bg-stone-50 dark:bg-[#050505] border-t border-gray-200 dark:border-white/5">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="block text-gold font-semibold tracking-[0.3em] uppercase text-xs mb-4">{t.about.locations.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold">{t.about.locations.heading}</h2>
          </motion.div>
          <CompanyMap />
        </div>
      </section>

      {/* LA NOSTRA IDENTITÀ — Disambiguazione SEO */}
      <section className="py-16 md:py-24 bg-gray-100 dark:bg-[#050505] border-t border-gray-200 dark:border-white/5">
        <div className="w-full max-w-4xl mx-auto px-4 md:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-[2rem] border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.02] backdrop-blur-sm"
          >
            <span className="block text-gold font-semibold tracking-[0.3em] uppercase text-xs mb-4">
              {t.about.identity.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-6 leading-tight">
              {t.about.identity.heading}
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-white/60 font-light text-base md:text-lg leading-relaxed">
              <p>
                <strong className="text-gray-900 dark:text-white font-medium">{t.about.identity.companyName}</strong>
                {t.about.identity.p1Pre}
                <Link to={paths.costaSmeralda} className="text-gold underline hover:text-gray-900 dark:hover:text-white transition-colors">{t.about.identity.p1Link1}</Link>
                {t.about.identity.p1Mid}
                <Link to={paths.port} className="text-gold underline hover:text-gray-900 dark:hover:text-white transition-colors">{t.about.identity.p1Link2}</Link>
                {t.about.identity.p1Post}
              </p>
              <p>
                {t.about.identity.p2Pre}
                <strong className="text-gray-800 dark:text-white/80">{t.about.identity.p2Strong}</strong>
                {t.about.identity.p2Post}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ — AEO */}
      <section className="py-16 md:py-24 bg-stone-50 dark:bg-[#050505] border-t border-gray-200 dark:border-white/5">
        <div className="w-full max-w-4xl mx-auto px-4 md:px-12 lg:px-24">
          <div className="text-center mb-12">
            <span className="block text-gold font-semibold tracking-[0.3em] uppercase text-xs mb-4">{t.about.faqHeader.eyebrow}</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold leading-tight">
              {t.about.faqHeader.headingPart1} <span className="text-gold">{t.about.faqHeader.headingAccent}</span>
            </h2>
          </div>
          <div className="space-y-4">
            {t.about.faqs.map((f, i) => {
              const gold = FAQ_GOLD_FLAGS[i] ?? false;
              return (
                <details
                  key={i}
                  className={`group rounded-2xl md:rounded-[1.5rem] transition-all ${
                    gold
                      ? "bg-gold/10 border border-gold/30 shadow-[0_0_20px_rgba(212,175,55,0.1)]"
                      : "bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10"
                  }`}
                >
                  <summary
                    className={`px-8 py-6 cursor-pointer list-none text-left font-bold italic uppercase tracking-tight flex items-center justify-between ${
                      gold ? "text-gold" : "text-gray-900 dark:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {gold && <Star className="w-4 h-4 fill-gold text-gold" />}
                      {f.q}
                    </div>
                    <span className="text-gold transition-transform group-open:rotate-90 shrink-0 ml-4">›</span>
                  </summary>
                  <div className="px-10 pt-2 pb-8 text-gray-600 dark:text-white/50 leading-relaxed font-light text-base md:text-lg italic">
                    {f.a}
                  </div>
                </details>
              );
            })}
          </div>
        </div>
      </section>

      {/* RECENSIONI - PAGINE GIALLE */}
      <section className="py-20 px-4 md:px-12 bg-stone-50 dark:bg-[#050505] relative overflow-hidden border-t border-gray-200 dark:border-white/5">
        <div className="absolute inset-0 bg-gold/5 opacity-40 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }}
            viewport={{ once: true }}
            className="bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 rounded-[2rem] p-10 md:p-14 shadow-[0_0_60px_rgba(212,175,55,0.08)] w-full max-w-5xl relative overflow-hidden"
          >
            {/* Elemento Decorativo Top */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50"></div>

            <div className="flex justify-center mb-8">
              <div className="flex items-center gap-1.5 bg-gray-100 dark:bg-[#1a1a1a] px-5 py-2.5 rounded-full border border-gray-200 dark:border-white/5 shadow-inner">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="#ffcc00"
                    className="text-[#ffcc00]"
                    stroke="#ffcc00"
                    strokeWidth="1"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
                <span className="text-gray-700 dark:text-white/80 font-bold text-sm ml-2">{t.about.reviews.badgeText}</span>
              </div>
            </div>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-gold mb-6 leading-tight tracking-tight">
              {t.about.reviews.headingPart1} <span className="text-gray-900 dark:text-white">{t.about.reviews.headingAccent}</span>
            </h3>

            <p className="text-gray-600 dark:text-white/70 text-lg md:text-xl mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              {t.about.reviews.subtitle}
            </p>

            <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 md:p-8 mb-12 flex flex-col md:flex-row items-center gap-6 max-w-4xl mx-auto">
              <div className="bg-[#ffcc00] rounded-xl p-3 shadow-lg flex-shrink-0">
                <span className="text-black font-extrabold text-lg tracking-wider">PAGINEGIALLE</span>
              </div>
              <div className="text-center md:text-left flex-grow">
                <p className="text-gray-800 dark:text-white text-base md:text-lg mb-4 font-light">
                  {t.about.reviews.verifyText}
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="bg-gold/10 dark:bg-black/50 text-gold text-xs px-3 py-1 rounded-full border border-gold/20 font-medium">
                    {t.about.reviews.chip1}
                  </span>
                  <span className="bg-gold/10 dark:bg-black/50 text-gold text-xs px-3 py-1 rounded-full border border-gold/20 font-medium">
                    {t.about.reviews.chip2}
                  </span>
                </div>
              </div>
            </div>

            <a
              href="https://www.paginegialle.it/ksrentsardinia-olbia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-[#ffcc00] hover:bg-[#ffdb4d] text-black font-extrabold text-sm md:text-lg uppercase tracking-widest px-8 py-5 rounded-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] shadow-[0_10px_30px_rgba(255,204,0,0.2)] hover:shadow-[0_15px_40px_rgba(255,204,0,0.4)]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span>{t.about.reviews.cta}</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* 5. BANNER MANIFESTO */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-gold to-yellow-500 text-black text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/5 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative z-10 flex flex-col items-center"
        >
          <span className="inline-block py-2 px-6 rounded-full bg-black/10 border border-black/20 text-black text-xs md:text-sm uppercase tracking-[0.3em] font-bold mb-6 shadow-sm">
            {t.about.manifest.eyebrow}
          </span>

          <h2 className="text-4xl sm:text-6xl md:text-8xl font-display font-black mb-6 leading-tight text-black break-words">
            {t.about.manifest.heading}
          </h2>

          <p className="text-black/80 font-medium text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed">
            {t.about.manifest.subtitle}
          </p>
        </motion.div>
      </section>

      {/* 6. CTA LINK */}
      <Link
        to={paths.bookNow}
        className="relative block w-full group overflow-hidden cursor-pointer bg-gradient-to-br from-gold via-yellow-500 to-gold"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.25)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-black/5 pointer-events-none" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-12 lg:px-24 py-16 md:py-24 flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }}
            viewport={{ once: true }}
            className="flex-1 text-center lg:text-left"
          >
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black text-black mb-4 leading-tight">
              {t.about.ctaSection.heading}
            </h2>
            <p className="text-black/70 uppercase tracking-[0.3em] text-sm md:text-base font-bold mb-8">
              {t.about.ctaSection.subtitle}
            </p>
            <span className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-black text-gold uppercase tracking-widest text-xs font-bold group-hover:bg-black/80 transition-all duration-300">
              {t.about.ctaSection.button}{" "}
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-500" />
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut", delay: 0.2 } }}
            viewport={{ once: true }}
            className="flex-1 overflow-hidden relative"
          >
            <button
              aria-label={t.about.ctaSection.prevAria}
              onClick={scrollPrev}
              className="hidden lg:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center rounded-full bg-black/60 text-foreground hover:bg-black/80 transition-colors duration-300"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              aria-label={t.about.ctaSection.nextAria}
              onClick={scrollNext}
              className="hidden lg:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center rounded-full bg-black/60 text-foreground hover:bg-black/80 transition-colors duration-300"
            >
              <ArrowRight size={20} />
            </button>

            <div ref={emblaRef} className="overflow-hidden" onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
              <div className="flex">
                {FLEET_VEHICLES.map((vehicle, i) => (
                  <div key={i} className="flex-[0_0_100%] min-w-0 flex items-center justify-center py-4">
                    <img
                      src={vehicle.image}
                      alt={`${vehicle.text} ${t.about.ctaSection.vehicleAltSuffix}`}
                      loading="lazy"
                      className="max-h-[250px] md:max-h-[320px] w-auto object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.12)]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Link>

      {/* LINK HOMEPAGE SEO */}
      <div className="py-6 text-center bg-stone-50 dark:bg-[#050505]">
        <p className="text-foreground/40 text-sm font-light">
          <Link to={paths.home} className="text-gold/70 hover:text-gold underline underline-offset-4 transition-colors">
            {t.about.footer.link}
          </Link>
          {t.about.footer.tail}
        </p>
      </div>
    </div>
  );
};

export default ChiSiamo;

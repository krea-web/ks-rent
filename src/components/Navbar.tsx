import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "@/lib/router-shim";
import {
  Menu,
  X,
  ArrowRight,
  CalendarDays,
  Sun,
  Moon,
  ChevronDown,
  Plane,
  Anchor,
  Palmtree,
  CreditCard,
  MapPin,
  Waves,
  Car,
  Bike,
  Sparkles,
} from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme-provider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getDict } from "@/i18n";
import { localizePath, getFleetPath, localizeLocationSlug, localizeVehicleSlug, type Locale } from "@/lib/i18n";

const logo = "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/asset/KSRENTlogo.png";

// Compatibile sia con icone lucide (ForwardRefExoticComponent) sia con qualsiasi React.ComponentType
type LucideIcon = React.ComponentType<any>;
type DeliveryItem = { label: string; to: string; Icon?: LucideIcon };

interface NavbarProps {
  lang?: Locale;
}

/**
 * Costruisce l'URL della pagina location partendo dallo slug IT ("noleggio-auto-X").
 * Traduce lo slug per la lingua corrente (en: car-hire-X, de: autovermietung-X, fr: location-voiture-X).
 * Per le spiagge (toponimi invariati) restituisce lo slug originale prefisso lingua.
 */
const localizeSlug = (itSlug: string, lang: Locale) => {
  const slug = localizeLocationSlug(itSlug, lang);
  return lang === "it" ? `/${slug}` : `/${lang}/${slug}`;
};

const ThemeToggle = ({ lightLabel, darkLabel }: { lightLabel: string; darkLabel: string }) => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative z-50 p-2.5 bg-white/5 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-gold/10 hover:border-gold/30 transition-all duration-300"
      aria-label={isDark ? lightLabel : darkLabel}
    >
      {isDark ? (
        <Sun size={18} className="text-gold pointer-events-none" />
      ) : (
        <Moon size={18} className="text-gray-700 pointer-events-none" />
      )}
    </button>
  );
};

const MegaColumn = ({
  title,
  IconC,
  items,
  onItemClick,
  withIcons = false,
}: {
  title: string;
  IconC: LucideIcon;
  items: DeliveryItem[];
  onItemClick: () => void;
  withIcons?: boolean;
}) => (
  <div className="px-5 py-6 min-w-0">
    <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold mb-4 flex items-center gap-2">
      <IconC size={11} className="text-gold flex-shrink-0" />
      <span className="leading-tight">{title}</span>
    </h4>
    <ul className="space-y-0.5 max-h-[55vh] overflow-y-auto overflow-x-hidden pr-2 nav-mega-scroll">
      {items.map(({ label, to, Icon }) => (
        <li key={to}>
          <Link
            to={to}
            onClick={onItemClick}
            className="group/link flex items-center gap-2 px-2 py-1.5 -mx-2 rounded-lg text-[12.5px] font-medium text-gray-700 dark:text-white/75 hover:text-gold hover:bg-gold/5 transition-colors leading-tight"
          >
            {withIcons && Icon && <Icon size={14} className="text-gold/80 group-hover/link:text-gold flex-shrink-0" />}
            <span className="truncate">{label}</span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const MobileAccordion = ({
  id,
  title,
  IconC,
  active,
  onToggle,
  items,
  closeMenu,
  withIcons = false,
}: {
  id: string;
  title: string;
  IconC: LucideIcon;
  active: boolean;
  onToggle: (id: string) => void;
  items: DeliveryItem[];
  closeMenu: () => void;
  withIcons?: boolean;
}) => (
  <div className="border-b border-gray-200 dark:border-white/5 last:border-b-0">
    <button
      type="button"
      onClick={() => onToggle(id)}
      aria-expanded={active}
      className="w-full flex items-center justify-between gap-3 py-4 text-left min-h-[52px]"
    >
      <span className="flex items-center gap-2.5 text-sm font-bold tracking-wide uppercase text-gray-900 dark:text-white">
        <IconC size={14} className="text-gold flex-shrink-0" />
        {title}
      </span>
      <ChevronDown
        size={18}
        className={cn(
          "text-gold transition-transform duration-300 flex-shrink-0",
          active && "rotate-180",
        )}
      />
    </button>
    <AnimatePresence initial={false}>
      {active && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <ul className="pb-4 flex flex-col gap-0.5">
            {items.map(({ label, to, Icon }) => (
              <li key={to}>
                <Link
                  to={to}
                  onClick={closeMenu}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-base font-medium text-gray-700 dark:text-white/75 hover:bg-gold/10 hover:text-gold transition-colors min-h-[44px]"
                >
                  {withIcons && Icon && <Icon size={16} className="text-gold/80 flex-shrink-0" />}
                  <span>{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const Navbar = ({ lang = "it" }: NavbarProps) => {
  const t = getDict(lang);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [flottaOpen, setFlottaOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>("punti");
  const location = useLocation();
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const flottaTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Localized top-level paths
  const homeHref = localizePath("/", lang);
  const fleetHref = localizePath("/flotta", lang);
  const aboutHref = localizePath("/chisiamo", lang);
  const bookHref = localizePath("/prenotaora", lang);
  const siteMapHref = localizePath("/mappa-sito", lang);

  // Localized service landing paths
  const olbiaHref = localizePath("/noleggio-auto-olbia", lang);
  const airportHref = localizePath("/noleggio-auto-aeroporto-olbia", lang);
  const portHref = localizePath("/noleggio-auto-porto-olbia", lang);
  const costaSmeraldaHref = localizePath("/noleggio-auto-costa-smeralda", lang);
  const noCardHref = localizePath("/noleggio-auto-senza-carta-di-credito-olbia", lang);
  const motoScooterHref = localizePath("/noleggio-moto-scooter-olbia", lang);
  const motoScooterNavLabel: Record<Locale, string> = {
    it: "Scooter, Moto e Quad",
    en: "Scooter, Motorbike & Quad",
    de: "Roller, Motorrad & Quad",
    fr: "Scooter, Moto & Quad",
  };

  // Sezioni con presenza completa nelle 4 lingue dopo i18n batch.
  // Hub guide: /guide (IT), /en/guide, /de/guide, /fr/guide
  // Comparison hub: /flotta/confronta (IT), /en/fleet/compare, /de/fuhrpark/vergleich, /fr/flotte/comparer
  const hasGuides = true;
  const guideHref =
    lang === "it" ? "/guide" :
    lang === "en" ? "/en/guide" :
    lang === "de" ? "/de/guide" :
    "/fr/guide";
  const guideLabel =
    lang === "en" ? "Guides" :
    lang === "de" ? "Anleitungen" :
    lang === "fr" ? "Guides" :
    "Guide";
  const hasConfronti = true;
  const confrontiHref =
    lang === "it" ? "/flotta/confronta" :
    lang === "en" ? "/en/fleet/compare" :
    lang === "de" ? "/de/fuhrpark/vergleich" :
    "/fr/flotte/comparer";
  const confrontiLabel =
    lang === "en" ? "Compare" :
    lang === "de" ? "Vergleich" :
    lang === "fr" ? "Comparer" :
    "Confronti";

  // Fleet vehicle URLs
  const fleetBase = getFleetPath(lang);
  // `groupSlug` e' lo slug IT (es. "audi-rs3"); viene tradotto per la lingua corrente.
  const fleetVehicleHref = (groupSlug: string) => {
    const slug = localizeVehicleSlug(groupSlug, lang);
    return lang === "it" ? `${fleetBase}/${slug}` : `/${lang}${fleetBase}/${slug}`;
  };

  // Delivery main hubs (use localized service hrefs)
  const PUNTI_PRINCIPALI: DeliveryItem[] = [
    { label: t.nav.deliveryItems.olbia ?? "Olbia (sede)", to: olbiaHref, Icon: MapPin },
    { label: t.nav.deliveryItems.airport, to: airportHref, Icon: Plane },
    { label: t.nav.deliveryItems.port, to: portHref, Icon: Anchor },
    { label: t.nav.deliveryItems.costaSmeralda, to: costaSmeraldaHref, Icon: Palmtree },
    { label: t.nav.deliveryItems.noCard, to: noCardHref, Icon: CreditCard },
  ];

  const LOC_COSTA_SMERALDA: DeliveryItem[] = [
    { label: "Porto Cervo", to: localizeSlug("noleggio-auto-porto-cervo", lang) },
    { label: "Baja Sardinia", to: localizeSlug("noleggio-auto-baja-sardinia", lang) },
    { label: "Poltu Quatu", to: localizeSlug("noleggio-auto-poltu-quatu", lang) },
    { label: "Porto Rotondo", to: localizeSlug("noleggio-auto-porto-rotondo", lang) },
    { label: "Marinella", to: localizeSlug("noleggio-auto-marinella", lang) },
    { label: "Portisco", to: localizeSlug("noleggio-auto-portisco", lang) },
    { label: "Palau", to: localizeSlug("noleggio-auto-palau", lang) },
    { label: "Cannigione", to: localizeSlug("noleggio-auto-cannigione", lang) },
    { label: "Arzachena", to: localizeSlug("noleggio-auto-arzachena", lang) },
    { label: "San Teodoro", to: localizeSlug("noleggio-auto-san-teodoro", lang) },
  ];

  const LOC_COSTA_EST: DeliveryItem[] = [
    { label: "San Teodoro", to: localizeSlug("noleggio-auto-san-teodoro", lang) },
    { label: "Puntaldia", to: localizeSlug("noleggio-auto-puntaldia", lang) },
    { label: "Murta Maria", to: localizeSlug("noleggio-auto-murta-maria", lang) },
    { label: "Porto San Paolo", to: localizeSlug("noleggio-auto-porto-san-paolo", lang) },
    { label: "Budoni", to: localizeSlug("noleggio-auto-budoni", lang) },
    { label: "Agrustos", to: localizeSlug("noleggio-auto-agrustos", lang) },
    { label: "Capo Coda Cavallo", to: localizeSlug("noleggio-auto-capo-coda-cavallo", lang) },
    { label: "Pittulongu", to: localizeSlug("noleggio-auto-pittulongu", lang) },
    { label: "Bados", to: localizeSlug("noleggio-auto-bados", lang) },
    { label: "Golfo Aranci", to: localizeSlug("noleggio-auto-golfo-aranci", lang) },
  ];

  const SPIAGGE_COSTA_SMERALDA: DeliveryItem[] = [
    { label: "Spiaggia del Principe", to: localizeSlug("spiaggia-del-principe", lang) },
    { label: "Liscia Ruja", to: localizeSlug("liscia-ruja", lang) },
    { label: "Capriccioli", to: localizeSlug("capriccioli", lang) },
    { label: "Romazzino", to: localizeSlug("romazzino", lang) },
    { label: "Grande Pevero", to: localizeSlug("grande-pevero", lang) },
    { label: "La Celvia", to: localizeSlug("la-celvia", lang) },
    { label: "Cala del Faro", to: localizeSlug("cala-del-faro", lang) },
    { label: "Cala Moresca", to: localizeSlug("cala-moresca", lang) },
    { label: "Cala Sabina", to: localizeSlug("cala-sabina", lang) },
    { label: "Spiaggia Marinella", to: localizeSlug("spiaggia-marinella", lang) },
  ];

  const SPIAGGE_COSTA_EST_NORD: DeliveryItem[] = [
    { label: "La Cinta", to: localizeSlug("la-cinta", lang) },
    { label: "Cala Brandinchi", to: localizeSlug("cala-brandinchi", lang) },
    { label: "Lu Impostu", to: localizeSlug("lu-impostu", lang) },
    { label: "Porto Istana", to: localizeSlug("porto-istana", lang) },
    { label: "Porto Taverna", to: localizeSlug("porto-taverna", lang) },
    { label: "Spiaggia Bianca", to: localizeSlug("spiaggia-bianca", lang) },
    { label: "Spiaggia Pittulongu", to: localizeSlug("spiaggia-pittulongu", lang) },
    { label: "Spiaggia Bados", to: localizeSlug("spiaggia-bados", lang) },
    { label: "Rena Bianca", to: localizeSlug("rena-bianca", lang) },
    { label: "Capo Testa", to: localizeSlug("capo-testa", lang) },
  ];

  const VEICOLI_AUTO: DeliveryItem[] = [
    { label: "Audi RS3", to: fleetVehicleHref("audi-rs3"), Icon: Sparkles },
    { label: "BMW M2", to: fleetVehicleHref("bmw-m2"), Icon: Sparkles },
    { label: "Mercedes Classe A", to: fleetVehicleHref("mercedes-classe-a"), Icon: Car },
    { label: "Jeep Avenger", to: fleetVehicleHref("jeep-avenger"), Icon: Car },
    { label: "Fiat Panda", to: fleetVehicleHref("fiat-panda"), Icon: Car },
  ];

  const VEICOLI_DUE_RUOTE: DeliveryItem[] = [
    { label: motoScooterNavLabel[lang], to: motoScooterHref, Icon: Bike },
    { label: "Honda SH", to: fleetVehicleHref("honda-sh"), Icon: Bike },
    { label: "Yamaha Quad Raptor", to: fleetVehicleHref("yamaha-quad-raptor"), Icon: Bike },
  ];

  const ALL_DELIVERY_PATHS: string[] = [
    ...PUNTI_PRINCIPALI,
    ...LOC_COSTA_SMERALDA,
    ...LOC_COSTA_EST,
    ...SPIAGGE_COSTA_SMERALDA,
    ...SPIAGGE_COSTA_EST_NORD,
  ].map((l) => l.to);

  const isDeliveryActive = ALL_DELIVERY_PATHS.includes(location.pathname);
  const isFlottaActive =
    location.pathname === fleetHref || location.pathname.startsWith(`${fleetHref}/`);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
  }, [open]);

  useEffect(() => {
    setOpen(false);
    setMegaOpen(false);
    setFlottaOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMegaOpen(false);
        setFlottaOpen(false);
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const handleMegaEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setMegaOpen(true);
    setFlottaOpen(false);
  };
  const handleMegaLeave = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => setMegaOpen(false), 150);
  };

  const handleFlottaEnter = () => {
    if (flottaTimerRef.current) {
      clearTimeout(flottaTimerRef.current);
      flottaTimerRef.current = null;
    }
    setFlottaOpen(true);
    setMegaOpen(false);
  };
  const handleFlottaLeave = () => {
    if (flottaTimerRef.current) clearTimeout(flottaTimerRef.current);
    flottaTimerRef.current = setTimeout(() => setFlottaOpen(false), 150);
  };

  const renderSimpleLink = (l: { label: string; to: string }) => {
    const isActive = location.pathname === l.to;
    return (
      <Link
        key={l.to}
        to={l.to}
        className="relative flex items-center justify-center px-3 lg:px-4 py-2 text-[11px] font-bold tracking-[0.15em] uppercase rounded-full transition-colors group min-h-[40px]"
      >
        <span
          className={cn(
            "relative z-10 transition-colors duration-300 pointer-events-none",
            isActive ? "text-black" : "text-gray-500 dark:text-white/70 group-hover:text-gray-900 dark:group-hover:text-white",
          )}
        >
          {l.label}
        </span>
        {isActive && (
          <motion.div
            layoutId="nav-indicator"
            className="absolute inset-0 bg-gold rounded-full z-0 shadow-[0_0_15px_rgba(212,175,55,0.4)] pointer-events-none"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}
      </Link>
    );
  };

  const whatsappHref = `https://wa.me/393446107071?text=${encodeURIComponent(t.mobileStickyCta.whatsappPrefill)}`;

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-[100] pointer-events-auto transition-all duration-500 ease-in-out",
          scrolled
            ? "bg-white/80 dark:bg-[#050505]/80 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 py-2 md:py-3 shadow-[0_10px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent py-3 md:py-4 lg:py-5",
        )}
      >
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8">
          <Link to={homeHref} className="flex items-center group relative z-50">
            <img
              src={logo}
              alt={t.nav.logoAlt}
              width={120}
              height={48}
              className="h-7 sm:h-8 md:h-10 w-auto object-contain transition-transform group-hover:scale-105 pointer-events-none"
              loading="eager"
              fetchPriority="high"
              decoding="sync"
            />
          </Link>

          {/* DESKTOP NAV PILL */}
          <div className="hidden lg:flex items-center gap-0.5 bg-gray-100/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-1 rounded-full backdrop-blur-md">
            {renderSimpleLink({ label: t.nav.home, to: homeHref })}

            {/* Flotta trigger */}
            <button
              type="button"
              onMouseEnter={handleFlottaEnter}
              onMouseLeave={handleFlottaLeave}
              onClick={() => setFlottaOpen((v) => !v)}
              aria-expanded={flottaOpen}
              aria-haspopup="true"
              className="relative flex items-center justify-center gap-1.5 px-3 lg:px-4 py-2 text-[11px] font-bold tracking-[0.15em] uppercase rounded-full transition-colors group min-h-[40px]"
            >
              <span
                className={cn(
                  "relative z-10 transition-colors duration-300 pointer-events-none whitespace-nowrap",
                  isFlottaActive ? "text-black" : "text-gray-500 dark:text-white/70 group-hover:text-gray-900 dark:group-hover:text-white",
                )}
              >
                {t.nav.fleet}
              </span>
              <ChevronDown
                size={12}
                className={cn(
                  "relative z-10 transition-transform duration-300 pointer-events-none",
                  isFlottaActive ? "text-black" : "text-gray-500 dark:text-white/70 group-hover:text-gray-900 dark:group-hover:text-white",
                  flottaOpen && "rotate-180",
                )}
              />
              {isFlottaActive && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute inset-0 bg-gold rounded-full z-0 shadow-[0_0_15px_rgba(212,175,55,0.4)] pointer-events-none"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>

            {/* Dove Consegniamo trigger */}
            <button
              type="button"
              onMouseEnter={handleMegaEnter}
              onMouseLeave={handleMegaLeave}
              onClick={() => setMegaOpen((v) => !v)}
              aria-expanded={megaOpen}
              aria-haspopup="true"
              className="relative flex items-center justify-center gap-1.5 px-3 lg:px-4 py-2 text-[11px] font-bold tracking-[0.15em] uppercase rounded-full transition-colors group min-h-[40px]"
            >
              <span
                className={cn(
                  "relative z-10 transition-colors duration-300 pointer-events-none whitespace-nowrap",
                  isDeliveryActive ? "text-black" : "text-gray-500 dark:text-white/70 group-hover:text-gray-900 dark:group-hover:text-white",
                )}
              >
                {t.nav.deliveryWhere}
              </span>
              <ChevronDown
                size={12}
                className={cn(
                  "relative z-10 transition-transform duration-300 pointer-events-none",
                  isDeliveryActive ? "text-black" : "text-gray-500 dark:text-white/70 group-hover:text-gray-900 dark:group-hover:text-white",
                  megaOpen && "rotate-180",
                )}
              />
              {isDeliveryActive && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute inset-0 bg-gold rounded-full z-0 shadow-[0_0_15px_rgba(212,175,55,0.4)] pointer-events-none"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>

            {hasGuides && renderSimpleLink({ label: guideLabel, to: guideHref })}

            {renderSimpleLink({ label: t.nav.aboutUs, to: aboutHref })}
          </div>

          {/* DESKTOP CTA + THEME TOGGLE + LANGUAGE */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher variant="compact" />
            <ThemeToggle lightLabel={t.nav.themeLight} darkLabel={t.nav.themeDark} />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className="inline-flex items-center justify-center gap-2 px-5 lg:px-6 py-3 rounded-full bg-gray-900 dark:bg-white text-white dark:text-black text-xs font-black uppercase tracking-widest hover:bg-gold transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] group min-h-[44px]"
                >
                  <span className="pointer-events-none">{t.nav.bookNow}</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform pointer-events-none" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                sideOffset={8}
                className="w-56 bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 rounded-xl p-1.5 shadow-2xl backdrop-blur-xl"
              >
                <DropdownMenuItem asChild>
                  <Link
                    to={bookHref}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold text-gray-900 dark:text-white hover:bg-gold/10 hover:text-gold transition-colors cursor-pointer"
                  >
                    <CalendarDays size={18} className="text-gold" />
                    {t.cta.bookOnline}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold text-gray-900 dark:text-white hover:bg-[#25D366]/10 hover:text-[#25D366] transition-colors cursor-pointer"
                  >
                    <WhatsAppIcon size={18} className="fill-[#25D366]" />
                    {t.cta.bookWhatsapp}
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* MOBILE/TABLET: LANGUAGE + THEME TOGGLE + HAMBURGER */}
          <div className="lg:hidden flex items-center gap-2 relative z-50">
            <LanguageSwitcher variant="compact" />
            <ThemeToggle lightLabel={t.nav.themeLight} darkLabel={t.nav.themeDark} />
            <button
              className="text-gray-900 dark:text-white p-2.5 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full min-w-[44px] min-h-[44px] flex items-center justify-center"
              onClick={() => setOpen(!open)}
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            >
              {open ? <X size={20} className="text-gold pointer-events-none" /> : <Menu size={20} className="pointer-events-none" />}
            </button>
          </div>
        </div>

        {/* DESKTOP MEGA-MENU */}
        <AnimatePresence>
          {megaOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onMouseEnter={handleMegaEnter}
              onMouseLeave={handleMegaLeave}
              className="hidden lg:block absolute top-full left-0 right-0 mt-2 px-4 md:px-8"
            >
              <div className="relative max-w-7xl mx-auto bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent pointer-events-none" />

                {/* Header narrative */}
                <div className="px-7 pt-6 pb-5 border-b border-gray-200 dark:border-white/10">
                  <span className="block text-gold font-semibold tracking-[0.3em] uppercase text-[10px] mb-2">
                    {t.nav.deliveryWhere}
                  </span>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900 dark:text-white leading-tight">
                    {t.nav.deliveryTitle}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-white/60 mt-1.5 font-light">
                    {t.nav.deliverySubtitle}
                  </p>
                </div>

                {/* 3 colonne ariose: Hubs + Localita (unificate) + Spiagge (unificate) */}
                <div className="grid grid-cols-3 divide-x divide-gray-200 dark:divide-white/10">
                  <MegaColumn
                    title={t.nav.mainPoints}
                    IconC={MapPin}
                    items={PUNTI_PRINCIPALI}
                    onItemClick={() => setMegaOpen(false)}
                    withIcons
                  />
                  <MegaColumn
                    title={(t.nav as any).locationsAll || "Località"}
                    IconC={MapPin}
                    items={[...LOC_COSTA_SMERALDA, ...LOC_COSTA_EST]}
                    onItemClick={() => setMegaOpen(false)}
                  />
                  <MegaColumn
                    title={(t.nav as any).beachesAll || "Spiagge"}
                    IconC={Waves}
                    items={[...SPIAGGE_COSTA_SMERALDA, ...SPIAGGE_COSTA_EST_NORD]}
                    onItemClick={() => setMegaOpen(false)}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* DESKTOP FLOTTA MEGA-MENU */}
        <AnimatePresence>
          {flottaOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onMouseEnter={handleFlottaEnter}
              onMouseLeave={handleFlottaLeave}
              className="hidden lg:block absolute top-full left-0 right-0 mt-2 px-4 md:px-8"
            >
              <div className="relative max-w-4xl mx-auto bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent pointer-events-none" />

                <div className="px-7 pt-6 pb-5 border-b border-gray-200 dark:border-white/10 flex items-center justify-between gap-4">
                  <div>
                    <span className="block text-gold font-semibold tracking-[0.3em] uppercase text-[10px] mb-2">
                      {t.nav.fleet}
                    </span>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900 dark:text-white leading-tight">
                      {t.nav.fleetSubtitle}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-white/60 mt-1.5 font-light">
                      {t.nav.fleetDesc}
                    </p>
                  </div>
                  <div className="hidden md:flex items-center gap-4">
                    {hasConfronti && (
                      <Link
                        to={confrontiHref}
                        onClick={() => setFlottaOpen(false)}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-white/60 hover:text-gold whitespace-nowrap"
                      >
                        ⇄ {confrontiLabel}
                      </Link>
                    )}
                    <Link
                      to={fleetHref}
                      onClick={() => setFlottaOpen(false)}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold hover:text-gold/80 whitespace-nowrap"
                    >
                      {t.nav.seeAll} <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>

                <div className="grid grid-cols-2 divide-x divide-gray-200 dark:divide-white/10">
                  <MegaColumn
                    title={t.nav.cars}
                    IconC={Car}
                    items={VEICOLI_AUTO}
                    onItemClick={() => setFlottaOpen(false)}
                    withIcons
                  />
                  <MegaColumn
                    title={t.nav.twoWheels}
                    IconC={Bike}
                    items={VEICOLI_DUE_RUOTE}
                    onItemClick={() => setFlottaOpen(false)}
                    withIcons
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* DESKTOP MEGA-MENU BACKDROP (click to close) */}
      <AnimatePresence>
        {megaOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMegaOpen(false)}
            className="hidden lg:block fixed inset-0 z-[90] bg-black/30 backdrop-blur-[2px]"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* MOBILE FULL-SCREEN MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] bg-white dark:bg-[#050505] w-full h-full px-6 sm:px-8 pt-24 pb-8 overflow-y-auto overflow-x-hidden"
          >
            <div className="absolute top-[-10%] right-[-10%] w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] bg-gold/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative min-h-full flex flex-col">
              {/* Top simple links */}
              <div className="flex flex-col gap-1 w-full">
                {[{ label: t.nav.home, to: homeHref }, { label: t.nav.fleet, to: fleetHref }].map((l, i) => {
                  const isActive = location.pathname === l.to;
                  return (
                    <motion.div
                      key={l.to}
                      initial={{ opacity: 0, x: -24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -24 }}
                      transition={{ delay: 0.06 * i, duration: 0.3, ease: "easeOut" }}
                      className="w-full"
                    >
                      <Link
                        to={l.to}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "w-full flex items-center gap-3 text-2xl sm:text-3xl md:text-4xl font-display font-black leading-snug tracking-normal transition-colors min-h-[48px] py-2.5 pr-4 rounded-xl",
                          isActive ? "text-gold" : "text-gray-800 dark:text-white/75 hover:text-gray-900 dark:hover:text-white",
                        )}
                      >
                        {isActive && (
                          <span className="w-2.5 h-2.5 rounded-full bg-gold shadow-[0_0_10px_rgba(212,175,55,0.8)] pointer-events-none" />
                        )}
                        <span className="pointer-events-none break-words">{l.label}</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* FLOTTA section */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.35, ease: "easeOut" }}
                className="mt-6 pt-6 border-t border-gray-200 dark:border-white/10"
              >
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div>
                    <span className="block text-gold font-semibold tracking-[0.3em] uppercase text-[10px] mb-1.5">
                      {t.nav.fleet}
                    </span>
                    <p className="text-gray-600 dark:text-white/60 text-sm font-light leading-snug">
                      {t.nav.fleetMobileDesc}
                    </p>
                  </div>
                  <Link
                    to={fleetHref}
                    onClick={() => setOpen(false)}
                    className="text-xs font-bold uppercase tracking-wider text-gold hover:text-gold/80 whitespace-nowrap"
                  >
                    {t.nav.allShort} →
                  </Link>
                </div>

                <MobileAccordion
                  id="vei-auto"
                  title={t.nav.cars}
                  IconC={Car}
                  active={mobileSection === "vei-auto"}
                  onToggle={(id) => setMobileSection(mobileSection === id ? null : id)}
                  items={VEICOLI_AUTO}
                  closeMenu={() => setOpen(false)}
                  withIcons
                />
                <MobileAccordion
                  id="vei-due"
                  title={t.nav.twoWheels}
                  IconC={Bike}
                  active={mobileSection === "vei-due"}
                  onToggle={(id) => setMobileSection(mobileSection === id ? null : id)}
                  items={VEICOLI_DUE_RUOTE}
                  closeMenu={() => setOpen(false)}
                  withIcons
                />

                {hasConfronti && (
                  <Link
                    to={confrontiHref}
                    onClick={() => setOpen(false)}
                    className="mt-4 flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-gold/40 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-gold text-lg">⇄</span>
                      <span className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white">
                        {lang === "en" ? "Compare vehicles"
                          : lang === "de" ? "Fahrzeuge vergleichen"
                          : lang === "fr" ? "Comparer vehicules"
                          : "Confronti veicoli"}
                      </span>
                    </div>
                    <ArrowRight size={14} className="text-gold" />
                  </Link>
                )}
              </motion.div>

              {/* DOVE CONSEGNIAMO section (3 accordion invece di 5 per piu' snellezza) */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18, duration: 0.35, ease: "easeOut" }}
                className="mt-6 pt-6 border-t border-gray-200 dark:border-white/10"
              >
                <div className="mb-4">
                  <span className="block text-gold font-semibold tracking-[0.3em] uppercase text-[10px] mb-1.5">
                    {t.nav.deliveryWhere}
                  </span>
                </div>

                <MobileAccordion
                  id="punti"
                  title={t.nav.mainPoints}
                  IconC={MapPin}
                  active={mobileSection === "punti"}
                  onToggle={(id) => setMobileSection(mobileSection === id ? null : id)}
                  items={PUNTI_PRINCIPALI}
                  closeMenu={() => setOpen(false)}
                  withIcons
                />
                <MobileAccordion
                  id="loc-all"
                  title={(t.nav as any).locationsAll || "Località"}
                  IconC={MapPin}
                  active={mobileSection === "loc-all"}
                  onToggle={(id) => setMobileSection(mobileSection === id ? null : id)}
                  items={[...LOC_COSTA_SMERALDA, ...LOC_COSTA_EST]}
                  closeMenu={() => setOpen(false)}
                />
                <MobileAccordion
                  id="sp-all"
                  title={(t.nav as any).beachesAll || "Spiagge"}
                  IconC={Waves}
                  active={mobileSection === "sp-all"}
                  onToggle={(id) => setMobileSection(mobileSection === id ? null : id)}
                  items={[...SPIAGGE_COSTA_SMERALDA, ...SPIAGGE_COSTA_EST_NORD]}
                  closeMenu={() => setOpen(false)}
                />
              </motion.div>

              {/* GUIDE section (solo IT + EN dove esistono articoli) */}
              {hasGuides && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.22, duration: 0.35, ease: "easeOut" }}
                  className="mt-6 pt-6 border-t border-gray-200 dark:border-white/10"
                >
                  <Link
                    to={guideHref}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "w-full flex items-center gap-3 text-2xl sm:text-3xl md:text-4xl font-display font-black leading-snug tracking-normal transition-colors min-h-[48px] py-2.5 pr-4 rounded-xl",
                      location.pathname === guideHref
                        ? "text-gold"
                        : "text-gray-800 dark:text-white/75 hover:text-gray-900 dark:hover:text-white",
                    )}
                  >
                    {location.pathname === guideHref && (
                      <span className="w-2.5 h-2.5 rounded-full bg-gold shadow-[0_0_10px_rgba(212,175,55,0.8)] pointer-events-none" />
                    )}
                    <span className="pointer-events-none break-words">{guideLabel}</span>
                  </Link>
                  <p className="text-gray-600 dark:text-white/60 text-sm font-light mt-1">
                    {lang === "en" ? "Practical guides on car hire, itineraries, beaches, costs."
                      : lang === "de" ? "Praktische Anleitungen: Mietwagen, Reiserouten, Straende, Kosten."
                      : lang === "fr" ? "Guides pratiques sur location, itineraires, plages, couts."
                      : "Guide pratiche su noleggio, itinerari, spiagge, costi."}
                  </p>
                </motion.div>
              )}

              {/* Chi Siamo + Prenota */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, duration: 0.35 }}
                className="mt-6 pt-6 border-t border-gray-200 dark:border-white/10 flex flex-col gap-1"
              >
                <Link
                  to={aboutHref}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "w-full flex items-center gap-3 text-2xl sm:text-3xl md:text-4xl font-display font-black leading-snug tracking-normal transition-colors min-h-[48px] py-2.5 pr-4 rounded-xl",
                    location.pathname === aboutHref
                      ? "text-gold"
                      : "text-gray-800 dark:text-white/75 hover:text-gray-900 dark:hover:text-white",
                  )}
                >
                  {location.pathname === aboutHref && (
                    <span className="w-2.5 h-2.5 rounded-full bg-gold shadow-[0_0_10px_rgba(212,175,55,0.8)] pointer-events-none" />
                  )}
                  <span className="pointer-events-none break-words">{t.nav.aboutUs}</span>
                </Link>
                <Link
                  to={bookHref}
                  onClick={() => setOpen(false)}
                  className="mt-4 sm:mt-6 w-full flex items-center gap-3 text-2xl sm:text-3xl md:text-4xl font-display font-black leading-snug tracking-normal transition-colors min-h-[48px] py-2.5 pr-4 rounded-xl text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-500"
                >
                  <span className="break-words">{t.nav.bookNow}</span>
                </Link>
              </motion.div>

              {/* Footer info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-200 dark:border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                <div>
                  <p className="text-gray-400 dark:text-white/40 text-xs uppercase tracking-widest mb-2 pointer-events-none">{t.nav.support}</p>
                  <a href="tel:+393446107071" className="text-gold font-bold relative z-20 min-h-[48px] inline-flex items-center">
                    +39 344 610 7071
                  </a>
                </div>
                <div className="sm:text-right">
                  <p className="text-gray-400 dark:text-white/40 text-xs uppercase tracking-widest mb-2 pointer-events-none">Olbia, IT</p>
                  <p className="text-gray-700 dark:text-white text-sm pointer-events-none">Costa Smeralda</p>
                </div>
              </motion.div>

              {/* Mappa del sito link (discreto, in fondo) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
                className="mt-6 pt-4 border-t border-gray-200 dark:border-white/5 text-center"
              >
                <Link
                  to={siteMapHref}
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-gray-500 dark:text-white/50 hover:text-gold transition-colors min-h-[44px]"
                >
                  <MapPin size={12} className="text-gold/70" />
                  {t.nav.siteMapFull}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

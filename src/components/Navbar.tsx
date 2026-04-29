import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
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
} from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme-provider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const logo = "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/asset/KSRENTlogo.png";

type LucideIcon = React.ComponentType<{ size?: number; className?: string }>;
type DeliveryItem = { label: string; to: string; Icon?: LucideIcon };

const PUNTI_PRINCIPALI: DeliveryItem[] = [
  { label: "Aeroporto Olbia", to: "/noleggio-auto-aeroporto-olbia", Icon: Plane },
  { label: "Porto Olbia", to: "/noleggio-auto-porto-olbia", Icon: Anchor },
  { label: "Costa Smeralda", to: "/noleggio-auto-costa-smeralda", Icon: Palmtree },
  { label: "Senza Carta di Credito", to: "/noleggio-auto-senza-carta-di-credito-olbia", Icon: CreditCard },
];

const LOC_COSTA_SMERALDA: DeliveryItem[] = [
  { label: "Porto Cervo", to: "/noleggio-auto-porto-cervo" },
  { label: "Baja Sardinia", to: "/noleggio-auto-baja-sardinia" },
  { label: "Poltu Quatu", to: "/noleggio-auto-poltu-quatu" },
  { label: "Porto Rotondo", to: "/noleggio-auto-porto-rotondo" },
  { label: "Marinella", to: "/noleggio-auto-marinella" },
  { label: "Portisco", to: "/noleggio-auto-portisco" },
  { label: "Palau", to: "/noleggio-auto-palau" },
  { label: "Cannigione", to: "/noleggio-auto-cannigione" },
  { label: "Arzachena", to: "/noleggio-auto-arzachena" },
  { label: "Santa Teresa Gallura", to: "/noleggio-auto-santa-teresa-gallura" },
];

const LOC_COSTA_EST: DeliveryItem[] = [
  { label: "San Teodoro", to: "/noleggio-auto-san-teodoro" },
  { label: "Puntaldia", to: "/noleggio-auto-puntaldia" },
  { label: "Murta Maria", to: "/noleggio-auto-murta-maria" },
  { label: "Porto San Paolo", to: "/noleggio-auto-porto-san-paolo" },
  { label: "Budoni", to: "/noleggio-auto-budoni" },
  { label: "Agrustos", to: "/noleggio-auto-agrustos" },
  { label: "Capo Coda Cavallo", to: "/noleggio-auto-capo-coda-cavallo" },
  { label: "Pittulongu", to: "/noleggio-auto-pittulongu" },
  { label: "Bados", to: "/noleggio-auto-bados" },
  { label: "Golfo Aranci", to: "/noleggio-auto-golfo-aranci" },
];

const SPIAGGE_COSTA_SMERALDA: DeliveryItem[] = [
  { label: "Spiaggia del Principe", to: "/spiaggia-del-principe" },
  { label: "Liscia Ruja", to: "/liscia-ruja" },
  { label: "Capriccioli", to: "/capriccioli" },
  { label: "Romazzino", to: "/romazzino" },
  { label: "Grande Pevero", to: "/grande-pevero" },
  { label: "La Celvia", to: "/la-celvia" },
  { label: "Cala del Faro", to: "/cala-del-faro" },
  { label: "Cala Moresca", to: "/cala-moresca" },
  { label: "Cala Sabina", to: "/cala-sabina" },
  { label: "Spiaggia Marinella", to: "/spiaggia-marinella" },
];

const SPIAGGE_COSTA_EST_NORD: DeliveryItem[] = [
  { label: "La Cinta", to: "/la-cinta" },
  { label: "Cala Brandinchi", to: "/cala-brandinchi" },
  { label: "Lu Impostu", to: "/lu-impostu" },
  { label: "Porto Istana", to: "/porto-istana" },
  { label: "Porto Taverna", to: "/porto-taverna" },
  { label: "Spiaggia Bianca", to: "/spiaggia-bianca" },
  { label: "Spiaggia Pittulongu", to: "/spiaggia-pittulongu" },
  { label: "Spiaggia Bados", to: "/spiaggia-bados" },
  { label: "Rena Bianca", to: "/rena-bianca" },
  { label: "Capo Testa", to: "/capo-testa" },
];

const ALL_DELIVERY_PATHS: string[] = [
  ...PUNTI_PRINCIPALI,
  ...LOC_COSTA_SMERALDA,
  ...LOC_COSTA_EST,
  ...SPIAGGE_COSTA_SMERALDA,
  ...SPIAGGE_COSTA_EST_NORD,
].map((l) => l.to);

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative z-50 p-2.5 bg-white/5 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-gold/10 hover:border-gold/30 transition-all duration-300"
      aria-label={isDark ? "Attiva tema chiaro" : "Attiva tema scuro"}
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
  <div className="px-5 py-6">
    <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold mb-4 flex items-center gap-2">
      <IconC size={11} className="text-gold flex-shrink-0" />
      <span className="leading-tight">{title}</span>
    </h4>
    <ul className="space-y-0.5">
      {items.map(({ label, to, Icon }) => (
        <li key={to}>
          <Link
            to={to}
            onClick={onItemClick}
            className="group/link flex items-center gap-2 px-2 py-1.5 -mx-2 rounded-lg text-[12.5px] font-medium text-gray-700 dark:text-white/75 hover:text-gold hover:bg-gold/5 transition-colors leading-tight"
          >
            {withIcons && Icon && <Icon size={14} className="text-gold/80 group-hover/link:text-gold flex-shrink-0" />}
            <span>{label}</span>
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

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>("punti");
  const location = useLocation();
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isDeliveryActive = ALL_DELIVERY_PATHS.includes(location.pathname);

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
  }, [location.pathname]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMegaOpen(false);
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
  };
  const handleMegaLeave = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => setMegaOpen(false), 150);
  };

  const renderSimpleLink = (l: { label: string; to: string }) => {
    const isActive = location.pathname === l.to;
    return (
      <Link
        key={l.to}
        to={l.to}
        className="relative flex items-center justify-center px-4 lg:px-5 py-2.5 text-xs font-bold tracking-[0.2em] uppercase rounded-full transition-colors group min-h-[44px]"
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

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-[100] pointer-events-auto transition-all duration-500 ease-in-out",
          scrolled
            ? "bg-white/80 dark:bg-[#050505]/80 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 py-3 md:py-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent py-4 md:py-6 lg:py-8",
        )}
      >
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8">
          <Link to="/" className="flex items-center group relative z-50">
            <img
              src={logo}
              alt="KS Rent Noleggio Auto Olbia Costa Smeralda"
              width={120}
              height={48}
              className="h-8 sm:h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105 pointer-events-none"
              loading="eager"
              fetchPriority="high"
              decoding="sync"
            />
          </Link>

          {/* DESKTOP NAV PILL */}
          <div className="hidden lg:flex items-center gap-1 bg-gray-100/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-1.5 rounded-full backdrop-blur-md">
            {renderSimpleLink({ label: "Home", to: "/" })}
            {renderSimpleLink({ label: "Flotta", to: "/flotta" })}

            {/* Dove Consegniamo trigger */}
            <button
              type="button"
              onMouseEnter={handleMegaEnter}
              onMouseLeave={handleMegaLeave}
              onClick={() => setMegaOpen((v) => !v)}
              aria-expanded={megaOpen}
              aria-haspopup="true"
              className="relative flex items-center justify-center gap-1.5 px-4 lg:px-5 py-2.5 text-xs font-bold tracking-[0.2em] uppercase rounded-full transition-colors group min-h-[44px]"
            >
              <span
                className={cn(
                  "relative z-10 transition-colors duration-300 pointer-events-none whitespace-nowrap",
                  isDeliveryActive ? "text-black" : "text-gray-500 dark:text-white/70 group-hover:text-gray-900 dark:group-hover:text-white",
                )}
              >
                Dove Consegniamo
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

            {renderSimpleLink({ label: "Chi Siamo", to: "/chisiamo" })}
          </div>

          {/* DESKTOP CTA + THEME TOGGLE */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className="inline-flex items-center justify-center gap-2 px-5 lg:px-6 py-3 rounded-full bg-gray-900 dark:bg-white text-white dark:text-black text-xs font-black uppercase tracking-widest hover:bg-gold transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] group min-h-[44px]"
                >
                  <span className="pointer-events-none">Prenota Ora</span>
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
                    to="/prenotaora"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold text-gray-900 dark:text-white hover:bg-gold/10 hover:text-gold transition-colors cursor-pointer"
                  >
                    <CalendarDays size={18} className="text-gold" />
                    Prenota Online
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    href="https://wa.me/393446107071?text=Ciao%2C%20vorrei%20prenotare%20un%20veicolo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold text-gray-900 dark:text-white hover:bg-[#25D366]/10 hover:text-[#25D366] transition-colors cursor-pointer"
                  >
                    <WhatsAppIcon size={18} className="fill-[#25D366]" />
                    Prenota su WhatsApp
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* MOBILE/TABLET: THEME TOGGLE + HAMBURGER */}
          <div className="lg:hidden flex items-center gap-2 relative z-50">
            <ThemeToggle />
            <button
              className="text-gray-900 dark:text-white p-2.5 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full min-w-[44px] min-h-[44px] flex items-center justify-center"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Chiudi menu" : "Apri menu"}
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
                    Dove consegniamo
                  </span>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900 dark:text-white leading-tight">
                    Le nostre auto ovunque tu sia in Gallura.
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-white/60 mt-1.5 font-light">
                    Aeroporto, porto, hotel, ville e direttamente in spiaggia.
                  </p>
                </div>

                {/* 5 columns */}
                <div className="grid grid-cols-5 divide-x divide-gray-200 dark:divide-white/10">
                  <MegaColumn
                    title="Punti Principali"
                    IconC={MapPin}
                    items={PUNTI_PRINCIPALI}
                    onItemClick={() => setMegaOpen(false)}
                    withIcons
                  />
                  <MegaColumn
                    title="Loc. Costa Smeralda"
                    IconC={MapPin}
                    items={LOC_COSTA_SMERALDA}
                    onItemClick={() => setMegaOpen(false)}
                  />
                  <MegaColumn
                    title="Loc. Costa Est"
                    IconC={MapPin}
                    items={LOC_COSTA_EST}
                    onItemClick={() => setMegaOpen(false)}
                  />
                  <MegaColumn
                    title="Spiagge Costa Smer."
                    IconC={Waves}
                    items={SPIAGGE_COSTA_SMERALDA}
                    onItemClick={() => setMegaOpen(false)}
                  />
                  <MegaColumn
                    title="Spiagge Costa Est & Nord"
                    IconC={Waves}
                    items={SPIAGGE_COSTA_EST_NORD}
                    onItemClick={() => setMegaOpen(false)}
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
                {[{ label: "Home", to: "/" }, { label: "Flotta", to: "/flotta" }].map((l, i) => {
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

              {/* DOVE CONSEGNIAMO section */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18, duration: 0.35, ease: "easeOut" }}
                className="mt-6 pt-6 border-t border-gray-200 dark:border-white/10"
              >
                <div className="mb-4">
                  <span className="block text-gold font-semibold tracking-[0.3em] uppercase text-[10px] mb-1.5">
                    Dove consegniamo
                  </span>
                  <p className="text-gray-600 dark:text-white/60 text-sm font-light leading-snug">
                    Le nostre auto ovunque tu sia in Gallura.
                  </p>
                </div>

                <MobileAccordion
                  id="punti"
                  title="Punti Principali"
                  IconC={MapPin}
                  active={mobileSection === "punti"}
                  onToggle={(id) => setMobileSection(mobileSection === id ? null : id)}
                  items={PUNTI_PRINCIPALI}
                  closeMenu={() => setOpen(false)}
                  withIcons
                />
                <MobileAccordion
                  id="loc-cs"
                  title="Località Costa Smeralda"
                  IconC={MapPin}
                  active={mobileSection === "loc-cs"}
                  onToggle={(id) => setMobileSection(mobileSection === id ? null : id)}
                  items={LOC_COSTA_SMERALDA}
                  closeMenu={() => setOpen(false)}
                />
                <MobileAccordion
                  id="loc-est"
                  title="Località Costa Est"
                  IconC={MapPin}
                  active={mobileSection === "loc-est"}
                  onToggle={(id) => setMobileSection(mobileSection === id ? null : id)}
                  items={LOC_COSTA_EST}
                  closeMenu={() => setOpen(false)}
                />
                <MobileAccordion
                  id="sp-cs"
                  title="Spiagge Costa Smeralda"
                  IconC={Waves}
                  active={mobileSection === "sp-cs"}
                  onToggle={(id) => setMobileSection(mobileSection === id ? null : id)}
                  items={SPIAGGE_COSTA_SMERALDA}
                  closeMenu={() => setOpen(false)}
                />
                <MobileAccordion
                  id="sp-est"
                  title="Spiagge Costa Est & Nord"
                  IconC={Waves}
                  active={mobileSection === "sp-est"}
                  onToggle={(id) => setMobileSection(mobileSection === id ? null : id)}
                  items={SPIAGGE_COSTA_EST_NORD}
                  closeMenu={() => setOpen(false)}
                />
              </motion.div>

              {/* Chi Siamo + Prenota */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, duration: 0.35 }}
                className="mt-6 pt-6 border-t border-gray-200 dark:border-white/10 flex flex-col gap-1"
              >
                <Link
                  to="/chisiamo"
                  onClick={() => setOpen(false)}
                  className={cn(
                    "w-full flex items-center gap-3 text-2xl sm:text-3xl md:text-4xl font-display font-black leading-snug tracking-normal transition-colors min-h-[48px] py-2.5 pr-4 rounded-xl",
                    location.pathname === "/chisiamo"
                      ? "text-gold"
                      : "text-gray-800 dark:text-white/75 hover:text-gray-900 dark:hover:text-white",
                  )}
                >
                  {location.pathname === "/chisiamo" && (
                    <span className="w-2.5 h-2.5 rounded-full bg-gold shadow-[0_0_10px_rgba(212,175,55,0.8)] pointer-events-none" />
                  )}
                  <span className="pointer-events-none break-words">Chi Siamo</span>
                </Link>
                <Link
                  to="/prenotaora"
                  onClick={() => setOpen(false)}
                  className="mt-4 sm:mt-6 w-full flex items-center gap-3 text-2xl sm:text-3xl md:text-4xl font-display font-black leading-snug tracking-normal transition-colors min-h-[48px] py-2.5 pr-4 rounded-xl text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-500"
                >
                  <span className="break-words">Prenota Ora</span>
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
                  <p className="text-gray-400 dark:text-white/40 text-xs uppercase tracking-widest mb-2 pointer-events-none">Assistenza</p>
                  <a href="tel:+393446107071" className="text-gold font-bold relative z-20 min-h-[48px] inline-flex items-center">
                    +39 344 610 7071
                  </a>
                </div>
                <div className="sm:text-right">
                  <p className="text-gray-400 dark:text-white/40 text-xs uppercase tracking-widest mb-2 pointer-events-none">Olbia, IT</p>
                  <p className="text-gray-700 dark:text-white text-sm pointer-events-none">Costa Smeralda</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

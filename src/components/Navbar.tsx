import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, CalendarDays, Sun, Moon } from "lucide-react";
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

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Flotta", to: "/flotta" },
  { label: "Chi Siamo", to: "/chisiamo" },
];

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

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
  }, [open]);

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

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-2 bg-gray-100/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((l) => {
              const isActive = location.pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className="relative flex items-center justify-center px-5 lg:px-6 py-2.5 text-xs font-bold tracking-[0.2em] uppercase rounded-full transition-colors group min-h-[44px]"
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
            })}
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
      </nav>

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
              <div className="flex flex-col gap-3 sm:gap-4 w-full">
                {[...navLinks, { label: "Prenota Ora", to: "/prenotaora", special: true as const }].map((l, i) => {
                  const isActive = location.pathname === l.to;
                  const isSpecial = "special" in l && l.special;
                  return (
                    <motion.div
                      key={l.to}
                      initial={{ opacity: 0, x: -24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -24 }}
                      transition={{ delay: 0.08 * i, duration: 0.35, ease: "easeOut" }}
                      className="w-full"
                    >
                      <Link
                        to={l.to}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "w-full flex items-center gap-3 text-2xl sm:text-3xl md:text-4xl font-display font-black leading-snug tracking-normal transition-colors min-h-[48px] py-2.5 pr-4 rounded-xl",
                          isActive ? "text-gold" : "text-gray-800 dark:text-white/75 hover:text-gray-900 dark:hover:text-white",
                          isSpecial ? "text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-500 mt-4 sm:mt-6" : "",
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

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
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

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
const logo = "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/asset/KSRENTlogo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Chi Siamo", to: "/chisiamo" },
];

const routeLabels: Record<string, string> = {
  "/": "Home",
  "/chisiamo": "Chi Siamo",
  "/prenotaora": "Prenota Ora",
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
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out",
          scrolled
            ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/10 py-3 md:py-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
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
              className="h-8 sm:h-10 md:h-12 w-auto transition-transform group-hover:scale-105"
              loading="eager"
              fetchPriority="high"
            />
          </Link>

          {/* INLINE BREADCRUMB (SEO + GEO) */}
          {location.pathname !== "/" && (
            <nav
              aria-label="Breadcrumb"
              className="hidden sm:flex items-center gap-1.5 ml-3 md:ml-5"
              itemScope
              itemType="https://schema.org/BreadcrumbList"
            >
              <span
                className="flex items-center"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <Link
                  to="/"
                  className="text-[10px] md:text-xs uppercase tracking-widest text-white/40 hover:text-gold transition-colors"
                  itemProp="item"
                >
                  <span itemProp="name">Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </span>
              <ChevronRight size={10} className="text-white/20" />
              <span
                className="text-[10px] md:text-xs uppercase tracking-widest text-gold font-semibold"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <span itemProp="name">{routeLabels[location.pathname] || "Pagina"}</span>
                <meta itemProp="position" content="2" />
              </span>
            </nav>
          )}

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 p-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((l) => {
              const isActive = location.pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className="relative px-5 lg:px-6 py-2.5 text-xs font-bold tracking-[0.2em] uppercase rounded-full transition-colors group"
                >
                  <span
                    className={cn(
                      "relative z-10 transition-colors duration-300",
                      isActive ? "text-black" : "text-white/70 group-hover:text-white",
                    )}
                  >
                    {l.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 bg-gold rounded-full z-0 shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* DESKTOP CTA */}
          <div className="hidden md:block">
            <Link
              to="/prenotaora"
              className="inline-flex items-center gap-2 px-5 lg:px-6 py-3 rounded-full bg-white text-black text-xs font-black uppercase tracking-widest hover:bg-gold transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] group min-h-[44px]"
            >
              Prenota Ora
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden relative z-50 text-white p-2.5 bg-white/5 border border-white/10 rounded-full min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Chiudi menu" : "Apri menu"}
          >
            {open ? <X size={20} className="text-gold" /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* MOBILE FULL-SCREEN MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[90] bg-[#050505] flex flex-col justify-center px-6 sm:px-8 overflow-hidden"
          >
            <div className="absolute top-[-10%] right-[-10%] w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] bg-gold/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="flex flex-col gap-6 sm:gap-8 items-start">
              {[...navLinks, { label: "Prenota Ora", to: "/prenotaora", special: true as const }].map((l, i) => {
                const isActive = location.pathname === l.to;
                const isSpecial = "special" in l && l.special;
                return (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ delay: 0.1 * i, duration: 0.4, ease: "easeOut" }}
                  >
                    <Link
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight transition-colors flex items-center gap-3 sm:gap-4 min-h-[48px] relative z-20",
                        isActive ? "text-gold" : "text-white/60 hover:text-white",
                        isSpecial
                          ? "text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-500 mt-6 sm:mt-8"
                          : "",
                      )}
                    >
                      {isActive && (
                        <span className="w-3 h-3 rounded-full bg-gold shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
                      )}
                      {l.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-8 sm:bottom-12 left-6 right-6 sm:left-8 sm:right-8 flex justify-between items-end border-t border-white/10 pt-6 sm:pt-8"
            >
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-2">Assistenza</p>
                <a href="tel:+393446107071" className="text-gold font-bold relative z-20">
                  +39 344 610 7071
                </a>
              </div>
              <div className="text-right">
                <p className="text-white/40 text-xs uppercase tracking-widest mb-2">Olbia, IT</p>
                <p className="text-white text-sm">Costa Smeralda</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

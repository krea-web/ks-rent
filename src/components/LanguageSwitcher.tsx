/**
 * LanguageSwitcher React compatto (per Navbar).
 * Mostra SOLO la lingua corrente (icona globe + codice ISO), apre dropdown
 * con le altre 3 lingue. Gli <a> sono link puri con hreflang corretto, no
 * JS-driven redirect.
 */
import { useState, useRef, useEffect } from "react";
import { useLocation } from "@/lib/router-shim";
import { LOCALES, LOCALE_NAMES, getLocaleFromPath, localizePath, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Globe, ChevronDown } from "lucide-react";

interface Props {
  /** "compact" mostra solo icona + codice (default). "full" mostra anche il nome. */
  variant?: "compact" | "full";
}

const LanguageSwitcher = ({ variant = "compact" }: Props) => {
  const location = useLocation();
  const pathname = location.pathname;
  const currentLocale: Locale = getLocaleFromPath(pathname);
  const currentName = LOCALE_NAMES[currentLocale];

  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Lingua corrente: ${currentName.native}. Cambia lingua.`}
        className="flex items-center gap-1.5 px-2.5 py-1.5 min-h-[36px] bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-white/80 hover:border-gold/30 hover:text-gold transition-colors"
      >
        <Globe size={13} className="text-gold" />
        <span className="hidden sm:inline">{currentLocale.toUpperCase()}</span>
        <span className="sm:hidden text-base leading-none" aria-hidden="true">{currentName.flag}</span>
        <ChevronDown size={11} className={cn("transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute right-0 top-full mt-2 min-w-[160px] bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-xl shadow-2xl backdrop-blur-xl overflow-hidden z-50"
        >
          {LOCALES.map((loc) => {
            const isActive = loc === currentLocale;
            const target = localizePath(pathname, loc);
            const name = LOCALE_NAMES[loc];
            return (
              <a
                key={loc}
                href={target}
                hrefLang={name.htmlLang}
                aria-current={isActive ? "page" : undefined}
                role="option"
                aria-selected={isActive}
                className={cn(
                  "flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-gold/10 text-gold"
                    : "text-gray-700 dark:text-white/80 hover:bg-gold/5 hover:text-gold",
                )}
                onClick={() => setOpen(false)}
              >
                <span className="text-base leading-none" aria-hidden="true">{name.flag}</span>
                <span>{name.native}</span>
                {isActive && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
                )}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;

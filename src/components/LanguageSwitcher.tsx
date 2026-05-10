/**
 * LanguageSwitcher React (per Navbar React island).
 * Versione gemella di LanguageSwitcher.astro: stesso markup,
 * stessi attributi hreflang, ma utilizzabile dentro componenti React.
 *
 * Legge la lingua corrente da window.location.pathname
 * (no JS-driven redirect: ogni link e' un <a> puro).
 */
import { useLocation } from "@/lib/router-shim";
import { LOCALES, LOCALE_NAMES, getLocaleFromPath, localizePath, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

interface Props {
  variant?: "compact" | "full";
}

const LanguageSwitcher = ({ variant = "compact" }: Props) => {
  const location = useLocation();
  const pathname = location.pathname;
  const currentLocale: Locale = getLocaleFromPath(pathname);

  return (
    <div
      className="inline-flex items-center gap-1 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full p-1"
      role="group"
      aria-label="Language switcher"
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
            title={name.native}
            className={cn(
              "relative px-2.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full transition-colors flex items-center gap-1.5 min-h-[36px]",
              isActive
                ? "bg-gold text-black shadow-[0_0_10px_rgba(212,175,55,0.3)]"
                : "text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white hover:bg-white/10",
            )}
          >
            <span aria-hidden="true">{name.flag}</span>
            {variant === "full" && <span>{name.native}</span>}
            <span className="sr-only">{name.native}</span>
          </a>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;

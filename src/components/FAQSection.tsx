import { Link } from "@/lib/router-shim";
import { MessageSquare, Star, ShieldCheck, ArrowRight, MapPin } from "lucide-react";
import { getDict } from "@/i18n";
import { localizePath, type Locale } from "@/lib/i18n";

interface FAQSectionProps {
  lang?: Locale;
}

// Indices to highlight (gold) with their associated icons. Mirrors the previous
// hardcoded structure: items 0..3 are highlighted, the rest are standard.
const HIGHLIGHTED_ICONS = [Star, ShieldCheck, ShieldCheck, MapPin];

const FAQSection = ({ lang = "it" }: FAQSectionProps) => {
  const t = getDict(lang);
  const aboutHref = localizePath("/chisiamo", lang);

  return (
    <section className="relative bg-gray-50 dark:bg-[#050505] overflow-hidden">
      {/* PARTE 1: FAQ ACCORDION */}
      <div className="relative py-16 md:py-32 z-10">
        <div className="absolute top-0 right-0 w-[200px] md:w-[500px] h-[200px] md:h-[500px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[200px] md:w-[500px] h-[200px] md:h-[500px] bg-gray-200/50 dark:bg-white/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="w-full max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-10 md:mb-16">
            <div className="inline-flex items-center justify-center p-3 bg-gray-100 dark:bg-white/5 rounded-2xl mb-6 border border-gray-200 dark:border-white/10 shadow-lg">
              <MessageSquare className="text-gold w-6 h-6" />
            </div>

            <p className="text-gold text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-semibold mb-4">
              {t.faq.eyebrow}
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black mb-6 text-foreground leading-tight">
              {t.faq.headingPart1}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">
                {t.faq.headingAccent}
              </span>
            </h2>

            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              {t.faq.homepageSubtitle}
            </p>
          </div>

          <div className="space-y-3 md:space-y-4">
            {t.homepageFaqs.map((f, i) => {
              const isGold = i < HIGHLIGHTED_ICONS.length;
              const Icon = isGold ? HIGHLIGHTED_ICONS[i] : null;
              return (
                <details
                  key={i}
                  className={`group rounded-xl md:rounded-2xl px-3 sm:px-4 md:px-6 transition-all duration-300 border ${
                    isGold
                      ? "bg-gradient-to-br from-gold/10 to-transparent border-gold/40 shadow-[0_0_20px_rgba(212,175,55,0.1)]"
                      : "bg-gray-100 dark:bg-white/5 border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20"
                  }`}
                >
                  <summary
                    className={`text-left py-4 md:py-6 cursor-pointer list-none flex items-center justify-between ${
                      isGold ? "text-gold" : "text-foreground"
                    }`}
                  >
                    <div className="flex items-center gap-3 md:gap-4">
                      {isGold && Icon && (
                        <span className="flex-shrink-0 p-1.5 md:p-2 bg-gold/20 rounded-lg">
                          <Icon className="w-4 h-4 md:w-5 md:h-5 text-gold" />
                        </span>
                      )}
                      <span className="text-sm sm:text-base md:text-lg font-bold tracking-wide">{f.q}</span>
                    </div>
                    <span className="text-gold transition-transform group-open:rotate-90 shrink-0 ml-4">›</span>
                  </summary>
                  <div className="text-muted-foreground text-sm md:text-base leading-relaxed pb-4 md:pb-6 pt-1 md:pt-2 pl-0 md:pl-16">
                    <span>{f.a}</span>
                  </div>
                </details>
              );
            })}
          </div>
        </div>
      </div>

      {/* PARTE 2: FULL-WIDTH ROLL BANNER */}
      <div className="relative w-full py-16 md:py-32 bg-gray-100 dark:bg-[#0a0a0a] border-y border-gray-200 dark:border-white/10 overflow-hidden flex items-center justify-center">
        <style>{`
          @keyframes banner-roll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-banner-roll {
            display: flex;
            width: max-content;
            animation: banner-roll 40s linear infinite;
          }
        `}</style>

        <div className="absolute inset-0 z-0 pointer-events-none bg-gray-100 dark:bg-black">
          <div className="w-full h-full opacity-30 bg-gradient-to-r from-gray-100 dark:from-black via-gray-200 dark:via-gray-900 to-gray-100 dark:to-black"></div>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full z-0 opacity-20 pointer-events-none overflow-hidden">
          <div className="animate-banner-roll">
            <span className="text-[10vw] md:text-[12vw] font-black font-display uppercase whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-b from-gray-400 dark:from-white to-transparent">
              KS RENT • COSTA SMERALDA • LUXURY EXPERIENCE • PROTEZIONE TOTALE •&nbsp;
            </span>
            <span className="text-[10vw] md:text-[12vw] font-black font-display uppercase whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-b from-gray-400 dark:from-white to-transparent">
              KS RENT • COSTA SMERALDA • LUXURY EXPERIENCE • PROTEZIONE TOTALE •&nbsp;
            </span>
          </div>
        </div>

        <div className="absolute inset-0 z-0 bg-gradient-to-r from-gray-50 dark:from-[#050505] via-gray-50/70 dark:via-[#050505]/70 to-transparent pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-3 rounded-full bg-gray-200 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-gold text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold mb-4 md:mb-6 backdrop-blur-md">
              {t.faq.bottomEyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black mb-5 md:mb-6 leading-tight text-foreground drop-shadow-xl break-words">
              {t.faq.bottomHeadingPart1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">
                {t.faq.bottomHeadingAccent}
              </span>
            </h2>
            <p className="text-gray-600 dark:text-white/80 text-base md:text-xl mb-8 md:mb-10 max-w-lg leading-relaxed drop-shadow-md">
              {t.faq.bottomSubtitle}
            </p>

            <Link
              to={aboutHref}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-gold to-yellow-500 text-black px-6 md:px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300 group/btn min-h-[48px] relative z-20"
            >
              {t.faq.bottomCta}
              <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

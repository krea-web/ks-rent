import { ArrowRight, Car, BookOpen, Tag, Calendar, MessageCircle } from "lucide-react";
import { getDict } from "@/i18n";
import type { Locale } from "@/lib/i18n";

interface Props {
  lang?: Locale;
}

const NotFound = ({ lang = "it" }: Props) => {
  const t = getDict(lang);
  const errors = t.errors as typeof t.errors & {
    notFoundKicker?: string;
    notFoundHeading?: string;
    notFoundBody?: string;
    notFoundExploreTitle?: string;
    quickFleet?: string;
    quickFleetDesc?: string;
    quickGuides?: string;
    quickGuidesDesc?: string;
    quickRates?: string;
    quickRatesDesc?: string;
    quickBook?: string;
    quickBookDesc?: string;
    notFoundWhatsAppTitle?: string;
    notFoundWhatsAppDesc?: string;
    notFoundWhatsAppCta?: string;
  };

  const homePath = lang === "it" ? "/" : `/${lang}`;
  const fleetPath =
    lang === "it" ? "/flotta" : lang === "en" ? "/en/fleet" : lang === "de" ? "/de/fuhrpark" : "/fr/flotte";
  const guidePath = lang === "it" ? "/guide" : `/${lang}/guide`;
  const ratesPath =
    lang === "it" ? "/tariffe" : lang === "en" ? "/en/rates" : lang === "de" ? "/de/preise" : "/fr/tarifs";
  const bookPath =
    lang === "it" ? "/prenotaora" : lang === "en" ? "/en/book-now" : lang === "de" ? "/de/jetzt-buchen" : "/fr/reserver";

  const quickLinks = [
    {
      href: fleetPath,
      label: errors.quickFleet ?? "Flotta",
      desc: errors.quickFleetDesc ?? "",
      Icon: Car,
    },
    {
      href: guidePath,
      label: errors.quickGuides ?? "Guide",
      desc: errors.quickGuidesDesc ?? "",
      Icon: BookOpen,
    },
    {
      href: ratesPath,
      label: errors.quickRates ?? "Tariffe",
      desc: errors.quickRatesDesc ?? "",
      Icon: Tag,
    },
    {
      href: bookPath,
      label: errors.quickBook ?? "Prenota",
      desc: errors.quickBookDesc ?? "",
      Icon: Calendar,
    },
  ];

  return (
    <div className="bg-background">
      {/* HERO 404 */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--gold)/0.08),transparent_50%),radial-gradient(circle_at_70%_80%,hsl(var(--gold)/0.05),transparent_50%)] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 md:px-8 pt-28 md:pt-36 pb-16 md:pb-20 text-center">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.35em] font-bold text-gold mb-6">
            {errors.notFoundKicker ?? "Error 404"}
          </p>

          <h1 className="font-serif text-[80px] md:text-[160px] leading-none font-medium text-foreground/15 select-none">
            404
          </h1>

          <h2 className="font-serif text-2xl md:text-4xl text-foreground font-medium leading-tight mt-2 mb-5 max-w-2xl mx-auto">
            {errors.notFoundHeading ?? errors.pageNotFound}
          </h2>

          <p className="font-serif text-base md:text-lg text-foreground/65 leading-relaxed max-w-xl mx-auto mb-10">
            {errors.notFoundBody ?? errors.notFoundDesc}
          </p>

          <a
            href={homePath}
            className="inline-flex items-center gap-2 bg-gold text-background font-semibold tracking-wide text-sm px-7 py-3.5 rounded-full hover:scale-105 transition-transform shadow-lg"
          >
            {errors.backHome}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="border-b border-border py-14 md:py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h3 className="font-serif text-xl md:text-2xl text-foreground font-medium mb-8 text-center">
            {errors.notFoundExploreTitle ?? "Where to next?"}
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map(({ href, label, desc, Icon }) => (
              <a
                key={href}
                href={href}
                className="group flex flex-col p-5 bg-card border border-border rounded-xl hover:border-gold/50 transition-all hover:shadow-lg"
              >
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <p className="font-semibold text-foreground mb-2 group-hover:text-gold transition">{label}</p>
                <p className="text-sm text-foreground/60 leading-relaxed flex-1">{desc}</p>
                <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-foreground/70 group-hover:text-gold transition">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* WHATSAPP CTA */}
      <section className="py-14 md:py-20 px-4 md:px-8 bg-card/30 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366]/10 mb-5">
            <MessageCircle className="w-6 h-6 text-[#25D366]" />
          </div>
          <h3 className="font-serif text-2xl md:text-3xl text-foreground font-medium mb-3 leading-tight">
            {errors.notFoundWhatsAppTitle ?? "Need help?"}
          </h3>
          <p className="font-serif text-foreground/65 text-[16px] md:text-[17px] leading-relaxed mb-7">
            {errors.notFoundWhatsAppDesc ?? ""}
          </p>
          <a
            href="https://wa.me/393446107071"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold text-sm px-7 py-3.5 rounded-full hover:scale-105 transition-transform shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            {errors.notFoundWhatsAppCta ?? "WhatsApp"}
          </a>
        </div>
      </section>
    </div>
  );
};

export default NotFound;

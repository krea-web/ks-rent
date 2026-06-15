import { Link } from "@/lib/router-shim";
import { Phone, Mail, MapPin, Map, MessageCircle, Star, Clock } from "lucide-react";
import { getDict } from "@/i18n";
import { localizePath, getFleetPath, localizeLocationSlug, localizeVehicleSlug, type Locale } from "@/lib/i18n";

const logo = "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/asset/KSRENTlogo.png";

interface FooterProps {
  lang?: Locale;
}

/** Prefix a dynamic SEO slug (locality / beach) with the locale when needed. */
const localizeSlug = (slug: string, lang: Locale) =>
  lang === "it" ? `/${slug}` : `/${lang}/${slug}`;

const Footer = ({ lang = "it" }: FooterProps) => {
  const t = getDict(lang);

  const homeHref = localizePath("/", lang);
  const aboutHref = localizePath("/chisiamo", lang);
  const fleetHref = localizePath("/flotta", lang);
  const ratesHref = localizePath("/tariffe", lang);
  const bookHref = localizePath("/prenotaora", lang);
  const siteMapHref = localizePath("/mappa-sito", lang);
  // Admin is locale-agnostic
  const adminHref = "/admin";

  const fleetBase = getFleetPath(lang);
  // `groupSlug` e' lo slug IT (es. "audi-rs3"); viene tradotto per la lingua corrente.
  const fleetVehicleHref = (groupSlug: string) => {
    const slug = localizeVehicleSlug(groupSlug, lang);
    return lang === "it" ? `${fleetBase}/${slug}` : `/${lang}${fleetBase}/${slug}`;
  };
  // `itSlug` e' lo slug IT (es. "noleggio-auto-porto-cervo"); viene tradotto per la lingua corrente.
  const locationHref = (itSlug: string) => {
    const slug = localizeLocationSlug(itSlug, lang);
    return lang === "it" ? `/${slug}` : `/${lang}/${slug}`;
  };

  const olbiaHref = localizePath("/noleggio-auto-olbia", lang);
  const portHref = localizePath("/noleggio-auto-porto-olbia", lang);
  const airportHref = localizePath("/noleggio-auto-aeroporto-olbia", lang);
  const costaSmeraldaHref = localizePath("/noleggio-auto-costa-smeralda", lang);
  const noCardHref = localizePath("/noleggio-auto-senza-carta-di-credito-olbia", lang);
  const motoScooterHref = localizePath("/noleggio-moto-scooter-olbia", lang);
  const motoScooterLabel: Record<typeof lang, string> = {
    it: "Noleggio Scooter e Moto",
    en: "Scooter & Motorbike Hire",
    de: "Roller & Motorrad mieten",
    fr: "Location Scooter & Moto",
  };
  const termsHref = localizePath("/termini-e-condizioni", lang);
  const withdrawalHref = localizePath("/diritto-recesso", lang);
  const supplierInfoHref = localizePath("/informativa-fornitore", lang);
  const privacyHref = localizePath("/privacy-policy", lang);
  const cookieHref = localizePath("/cookie-policy", lang);

  const eastDestinations = [
    { label: "San Teodoro", slug: "noleggio-auto-san-teodoro" },
    { label: "Puntaldia", slug: "noleggio-auto-puntaldia" },
    { label: "Murta Maria", slug: "noleggio-auto-murta-maria" },
    { label: "Porto San Paolo", slug: "noleggio-auto-porto-san-paolo" },
    { label: "Budoni", slug: "noleggio-auto-budoni" },
    { label: "Agrustos", slug: "noleggio-auto-agrustos" },
    { label: "Capo Coda Cavallo", slug: "noleggio-auto-capo-coda-cavallo" },
    { label: "Pittulongu", slug: "noleggio-auto-pittulongu" },
    { label: "Bados", slug: "noleggio-auto-bados" },
    { label: "Golfo Aranci", slug: "noleggio-auto-golfo-aranci" },
  ];

  const csDestinations = [
    { label: "Porto Cervo", slug: "noleggio-auto-porto-cervo" },
    { label: "Baja Sardinia", slug: "noleggio-auto-baja-sardinia" },
    { label: "Poltu Quatu", slug: "noleggio-auto-poltu-quatu" },
    { label: "Porto Rotondo", slug: "noleggio-auto-porto-rotondo" },
    { label: "Marinella", slug: "noleggio-auto-marinella" },
    { label: "Portisco", slug: "noleggio-auto-portisco" },
    { label: "Palau", slug: "noleggio-auto-palau" },
    { label: "Cannigione", slug: "noleggio-auto-cannigione" },
    { label: "Arzachena", slug: "noleggio-auto-arzachena" },
    { label: "San Teodoro", slug: "noleggio-auto-san-teodoro" },
  ];

  const beaches = [
    { label: "Spiaggia del Principe", slug: "spiaggia-del-principe" },
    { label: "Liscia Ruja", slug: "liscia-ruja" },
    { label: "Cala Brandinchi", slug: "cala-brandinchi" },
    { label: "La Cinta", slug: "la-cinta" },
    { label: "Lu Impostu", slug: "lu-impostu" },
    { label: "Capriccioli", slug: "capriccioli" },
    { label: "Romazzino", slug: "romazzino" },
    { label: "Grande Pevero", slug: "grande-pevero" },
    { label: "Cala Moresca", slug: "cala-moresca" },
    { label: "Cala Sabina", slug: "cala-sabina" },
    { label: "Spiaggia Bianca", slug: "spiaggia-bianca" },
    { label: "Porto Istana", slug: "porto-istana" },
    { label: "Porto Taverna", slug: "porto-taverna" },
    { label: "Rena Bianca", slug: "rena-bianca" },
    { label: "Cala del Faro", slug: "cala-del-faro" },
    { label: "La Celvia", slug: "la-celvia" },
    { label: "Spiaggia Marinella", slug: "spiaggia-marinella" },
    { label: "Spiaggia Bados", slug: "spiaggia-bados" },
    { label: "Spiaggia Pittulongu", slug: "spiaggia-pittulongu" },
    { label: "Capo Testa", slug: "capo-testa" },
  ];

  return (
    <footer className="relative bg-gray-50 dark:bg-[#050505] pt-12 md:pt-24 pb-8 border-t border-gray-200 dark:border-white/5 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-gold/5 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-20">
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col">
            <img
              src={logo}
              alt={t.footer.logoAlt}
              width={120}
              height={48}
              className="h-12 w-auto mb-6 object-contain"
              loading="lazy"
            />
            <p className="text-sm text-muted-foreground leading-relaxed">{t.footer.tagline}</p>
          </div>

          {/* Link Rapidi & Aree Servite */}
          <div className="lg:col-span-4">
            <h3 className="text-foreground font-bold text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold"></span> {t.footer.explore}
            </h3>
            <div className="flex flex-wrap gap-2 mb-8">
              <Link
                to={homeHref}
                className="px-4 py-2 text-xs text-gray-600 dark:text-white/70 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl hover:bg-gold/10 hover:border-gold/30 hover:text-gold transition-all duration-300 relative z-20"
              >
                {t.nav.home}
              </Link>
              <Link
                to={aboutHref}
                className="px-4 py-2 text-xs text-gray-600 dark:text-white/70 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl hover:bg-gold/10 hover:border-gold/30 hover:text-gold transition-all duration-300 relative z-20"
              >
                {t.nav.aboutUs}
              </Link>
              <Link
                to={fleetHref}
                className="px-4 py-2 text-xs text-gray-600 dark:text-white/70 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl hover:bg-gold/10 hover:border-gold/30 hover:text-gold transition-all duration-300 relative z-20"
              >
                {t.nav.fleet}
              </Link>
              <Link
                to={ratesHref}
                className="px-4 py-2 text-xs text-gray-600 dark:text-white/70 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl hover:bg-gold/10 hover:border-gold/30 hover:text-gold transition-all duration-300 relative z-20"
              >
                {t.nav.rates}
              </Link>
              {lang === "it" && (
                <>
                  <Link
                    to="/flotta/confronta"
                    className="px-4 py-2 text-xs text-gray-600 dark:text-white/70 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl hover:bg-gold/10 hover:border-gold/30 hover:text-gold transition-all duration-300 relative z-20"
                  >
                    Confronti
                  </Link>
                  <Link
                    to="/guide"
                    className="px-4 py-2 text-xs text-gray-600 dark:text-white/70 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl hover:bg-gold/10 hover:border-gold/30 hover:text-gold transition-all duration-300 relative z-20"
                  >
                    Guide
                  </Link>
                </>
              )}
              <Link
                to={bookHref}
                className="px-4 py-2 text-xs font-bold text-gold bg-gold/5 border border-gold/20 rounded-xl hover:bg-gold hover:text-black transition-all duration-300 relative z-20"
              >
                {t.nav.bookNow}
              </Link>
              <Link
                to={siteMapHref}
                className="px-4 py-2 text-xs text-gray-600 dark:text-white/70 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl hover:bg-gold/10 hover:border-gold/30 hover:text-gold transition-all duration-300 relative z-20"
              >
                {t.nav.siteMap}
              </Link>
              <Link
                to={adminHref}
                className="px-4 py-2 text-xs text-gray-400 dark:text-white/50 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl hover:text-foreground transition-all duration-300 relative z-20"
              >
                {t.footer.privatearea}
              </Link>
            </div>

            <h3 className="text-foreground font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold"></span> {t.footer.vehicles}
            </h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                { label: "Audi RS3", slug: "audi-rs3" },
                { label: "BMW M2", slug: "bmw-m2" },
                { label: "Mercedes Classe A", slug: "mercedes-classe-a" },
                { label: "Jeep Avenger", slug: "jeep-avenger" },
                { label: "Fiat Panda", slug: "fiat-panda" },
                { label: "Honda SH", slug: "honda-sh" },
                { label: "Yamaha Quad", slug: "yamaha-quad-raptor" },
              ].map((v) => (
                <Link
                  key={v.slug}
                  to={fleetVehicleHref(v.slug)}
                  className="px-3 py-1.5 text-xs text-gray-600 dark:text-white/70 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg hover:bg-gold/10 hover:border-gold/30 hover:text-gold transition-all duration-300 relative z-20"
                >
                  {v.label}
                </Link>
              ))}
            </div>

            <h3 className="text-foreground font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold"></span> {t.footer.services}
            </h3>
            <div className="flex flex-col gap-2">
              {[
                { label: "Noleggio Auto Olbia", to: olbiaHref },
                { label: t.services.port.title, to: portHref },
                { label: t.services.airport.title, to: airportHref },
                { label: t.services.costaSmeralda.title, to: costaSmeraldaHref },
                { label: t.services.noCreditCard.title, to: noCardHref },
                { label: motoScooterLabel[lang], to: motoScooterHref },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="px-4 py-2.5 text-xs text-gray-600 dark:text-white/70 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl hover:bg-gold/10 hover:border-gold/30 hover:text-gold transition-all duration-300 relative z-20 flex items-center justify-between group"
                >
                  {link.label}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-gold">→</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Sedi & Contatti */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <h3 className="text-foreground font-bold text-sm uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold"></span> {t.footer.whereAndContact}
            </h3>

            <div className="flex flex-col gap-4">
              <div className="p-4 bg-gray-100 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-2xl flex items-start gap-3 hover:border-gold/30 transition-colors">
                <div className="p-2 bg-gold/10 rounded-xl shrink-0 mt-0.5">
                  <MapPin size={16} className="text-gold" />
                </div>
                <div className="text-sm">
                  <strong className="block text-foreground mb-0.5 font-medium">{t.footer.operationalSeat}</strong>
                  <span className="text-muted-foreground">
                    Viale Isola Bianca 38
                    <br />
                    07026, Olbia (SS)
                  </span>
                </div>
              </div>

              <div className="p-4 bg-gray-100 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/5 rounded-2xl flex items-start gap-3">
                <div className="p-2 bg-gray-200 dark:bg-white/5 rounded-xl shrink-0 mt-0.5">
                  <Map size={16} className="text-gray-500 dark:text-white/50" />
                </div>
                <div className="text-sm">
                  <strong className="block text-gray-600 dark:text-white/70 mb-0.5 font-medium">
                    {t.footer.legalSeat}
                  </strong>
                  <span className="text-muted-foreground">
                    Viale Aldo Moro 367
                    <br />
                    07026, Olbia (SS)
                  </span>
                </div>
              </div>

              <div className="p-4 bg-gray-100 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-2xl flex items-start gap-3 hover:border-gold/30 transition-colors">
                <div className="p-2 bg-gold/10 rounded-xl shrink-0 mt-0.5">
                  <Clock size={16} className="text-gold" />
                </div>
                <div className="text-sm">
                  <strong className="block text-foreground mb-0.5 font-medium">{t.footer.hours}</strong>
                  <span className="text-muted-foreground">
                    {t.footer.hoursOpen}
                    <br />
                    10:00–13:00 · 15:00–22:30
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-2">
                <a
                  href="tel:+393446107071"
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl hover:bg-gold hover:border-gold hover:text-black transition-all duration-300 group relative z-20 text-xs font-bold text-foreground tracking-wider"
                >
                  <Phone size={14} className="group-hover:animate-pulse" />
                  {t.footer.callNow}
                </a>
                <a
                  href="mailto:ksrentsrl@gmail.com"
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300 group relative z-20 text-xs font-bold text-foreground tracking-wider"
                >
                  <Mail size={14} />
                  {t.footer.emailBtn}
                </a>
                <a
                  href="https://wa.me/393446107071"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp KS Rent Sardinia"
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl hover:bg-[#25D366] hover:border-[#25D366] hover:text-white transition-all duration-300 group relative z-20 text-xs font-bold text-foreground tracking-wider"
                >
                  <MessageCircle size={14} className="group-hover:animate-pulse" />
                  WhatsApp
                </a>
                <a
                  href="https://www.tripadvisor.it/Attraction_Review-g187883-d34295915-Reviews-KS_RENT_SARDINIA-Olbia_Province_of_Olbia_Tempio_Sardinia.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="KS Rent Sardinia su Tripadvisor"
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl hover:bg-[#34E0A1] hover:border-[#34E0A1] hover:text-black transition-all duration-300 group relative z-20 text-xs font-bold text-foreground tracking-wider"
                >
                  <Star size={14} className="group-hover:animate-pulse" />
                  Tripadvisor
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Destinazioni & Spiagge — SEO Internal Linking */}
        <div className="mt-8 md:mt-12 pt-10 border-t border-gray-200 dark:border-white/5 space-y-10">
          <div>
            <h3 className="text-foreground font-bold text-xs uppercase tracking-[0.2em] mb-4 flex items-center gap-2 opacity-80">
              <MapPin size={12} className="text-gold" /> {t.footer.destinationsEast}
            </h3>
            <div className="flex flex-wrap gap-2">
              {eastDestinations.map((d) => (
                <Link
                  key={d.slug}
                  to={locationHref(d.slug)}
                  className="px-3 py-1.5 text-[11px] font-medium text-gray-800 dark:text-white/60 bg-gray-200 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-full hover:border-gold hover:text-gold dark:hover:bg-gold/10 transition-all duration-200 relative z-20 uppercase tracking-wider"
                >
                  {d.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-foreground font-bold text-xs uppercase tracking-[0.2em] mb-4 flex items-center gap-2 opacity-80">
              <MapPin size={12} className="text-gold" /> {t.footer.destinationsCS}
            </h3>
            <div className="flex flex-wrap gap-2">
              {csDestinations.map((d) => (
                <Link
                  key={d.slug}
                  to={locationHref(d.slug)}
                  className="px-3 py-1.5 text-[11px] font-medium text-gray-800 dark:text-white/60 bg-gray-200 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-full hover:border-gold hover:text-gold dark:hover:bg-gold/10 transition-all duration-200 relative z-20 uppercase tracking-wider"
                >
                  {d.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-foreground font-bold text-xs uppercase tracking-[0.2em] mb-4 flex items-center gap-2 opacity-80">
              <MapPin size={12} className="text-gold" /> {t.footer.bestBeaches}
            </h3>
            <div className="flex flex-wrap gap-2">
              {beaches.map((d) => (
                <Link
                  key={d.slug}
                  to={localizeSlug(d.slug, lang)}
                  className="px-3 py-1.5 text-[11px] font-medium text-gray-800 dark:text-white/60 bg-gray-200 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-full hover:border-gold hover:text-gold dark:hover:bg-gold/10 transition-all duration-200 relative z-20 uppercase tracking-wider"
                >
                  {d.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* HUGE BOLT TEXT */}
        <div className="w-full flex justify-center items-end mt-12 select-none pointer-events-none">
          <span
            className="text-[18vw] leading-[0.85] font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-gold/80 via-gold/20 to-transparent opacity-80 whitespace-nowrap"
            aria-hidden="true"
          >
            KS&nbsp;RENT
          </span>
        </div>

        {/* Dati Societari + Copyright */}
        <div className="relative z-10 border-t border-gray-200 dark:border-white/10 mt-6 md:mt-8 pt-8 pb-4">
          <div className="container mx-auto px-4 flex flex-col items-center gap-6 text-center">
            <div className="text-[11px] md:text-xs text-muted-foreground leading-relaxed max-w-5xl space-y-1.5">
              <p className="text-foreground/90 font-semibold tracking-widest uppercase text-xs mb-2">
                {t.footer.companyHeading}
              </p>
              <p>
                {t.footer.addressesLineLegalLabel} {t.footer.addressesLineLegal}
                <span className="hidden md:inline"> | </span>
                <br className="md:hidden" />
                {t.footer.addressesLineOperationalLabel} {t.footer.addressesLineOperational}
              </p>
              <p>
                {t.footer.taxIdLine}
                <span className="hidden md:inline"> | </span>
                <br className="md:hidden" />
                {t.footer.registryLine}
                <span className="hidden md:inline"> | </span>
                <br className="md:hidden" />
                {t.footer.reaLine}
              </p>
              <p>
                {t.footer.capitalLine}
                <span className="hidden md:inline"> | </span>
                <br className="md:hidden" />
                {t.footer.pecLine}{" "}
                <a href="mailto:ks.rent.srl@pec.it" className="hover:text-gold transition-colors relative z-20">
                  ks.rent.srl@pec.it
                </a>
              </p>
              <p className="text-muted-foreground/70 italic pt-2">{t.footer.disclaimer}</p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-4 text-[10px] md:text-xs text-muted-foreground border-t border-gray-200 dark:border-white/5 pt-5 w-full uppercase tracking-wider">
              <p>© {new Date().getFullYear()} KS Rent S.R.L.</p>
              <span className="hidden sm:inline opacity-30">•</span>
              <a
                href={privacyHref}
                className="hover:text-gold transition-colors relative z-20"
                title={t.footer.privacyPolicy}
              >
                {t.footer.privacyPolicy}
              </a>
              <span className="hidden sm:inline opacity-30">•</span>
              <a
                href={cookieHref}
                className="hover:text-gold transition-colors relative z-20"
                title={t.footer.cookiePolicy}
              >
                {t.footer.cookiePolicy}
              </a>
              <span className="hidden sm:inline opacity-30">•</span>
              <button
                type="button"
                data-cookie-preferences
                className="hover:text-gold transition-colors relative z-20 uppercase tracking-wider cursor-pointer"
                title={t.footer.cookiePreferences}
              >
                {t.footer.cookiePreferences}
              </button>
              <span className="hidden sm:inline opacity-30">•</span>
              <a
                href={termsHref}
                className="hover:text-gold transition-colors relative z-20"
                title={t.footer.termsConditions}
              >
                {t.footer.termsConditions}
              </a>
              <span className="hidden sm:inline opacity-30">•</span>
              <a
                href={withdrawalHref}
                className="hover:text-gold transition-colors relative z-20"
                title={t.footer.withdrawalRights}
              >
                {t.footer.withdrawalRights}
              </a>
              <span className="hidden sm:inline opacity-30">•</span>
              <a
                href={supplierInfoHref}
                className="hover:text-gold transition-colors relative z-20"
                title={t.footer.supplierInfo}
              >
                {t.footer.supplierInfo}
              </a>
              <span className="opacity-30">|</span>
              <span className="font-medium">
                {t.footer.poweredBy} <span className="text-foreground">KREA</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

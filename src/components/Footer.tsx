import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Map } from "lucide-react";
const logo = "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/asset/KSRENTlogo.png";

const Footer = () => (
  <footer className="relative bg-gray-50 dark:bg-[#050505] pt-12 md:pt-24 pb-8 border-t border-gray-200 dark:border-white/5 overflow-hidden">
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent pointer-events-none" />
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-gold/5 blur-[150px] pointer-events-none" />

    <div className="container mx-auto px-4 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-20">
        {/* Brand Info */}
        <div className="lg:col-span-4 flex flex-col">
          <img
            src={logo}
            alt="KS Rent Noleggio Auto Lusso Olbia"
            width={120}
            height={48}
            className="h-12 w-auto mb-6 object-contain"
            loading="lazy"
          />
          <p className="text-sm text-muted-foreground leading-relaxed">
            Noleggio d'eccellenza in Costa Smeralda con coperture assicurative complete, deposito cauzionale trasparente
            e termini contrattuali chiari. Libertà di esplorare, professionalità garantita.
          </p>
        </div>

        {/* Link Rapidi & Aree Servite */}
        <div className="lg:col-span-4">
          <h3 className="text-foreground font-bold text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold"></span> Esplora
          </h3>
          <div className="flex flex-wrap gap-2 mb-8">
            <Link
              to="/"
              className="px-4 py-2 text-xs text-gray-600 dark:text-white/70 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl hover:bg-gold/10 hover:border-gold/30 hover:text-gold transition-all duration-300 relative z-20"
            >
              Home
            </Link>
            <Link
              to="/chisiamo"
              className="px-4 py-2 text-xs text-gray-600 dark:text-white/70 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl hover:bg-gold/10 hover:border-gold/30 hover:text-gold transition-all duration-300 relative z-20"
            >
              Chi Siamo
            </Link>
            <Link
              to="/prenotaora"
              className="px-4 py-2 text-xs font-bold text-gold bg-gold/5 border border-gold/20 rounded-xl hover:bg-gold hover:text-black transition-all duration-300 relative z-20"
            >
              Prenota Ora
            </Link>
            <Link
              to="/admin"
              className="px-4 py-2 text-xs text-gray-400 dark:text-white/50 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl hover:text-foreground transition-all duration-300 relative z-20"
            >
              Area Riservata
            </Link>
          </div>

          <h3 className="text-foreground font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold"></span> I Nostri Servizi
          </h3>
          <div className="flex flex-col gap-2">
            {[
              { label: "Noleggio Auto Porto di Olbia", to: "/noleggio-auto-porto-olbia" },
              { label: "Noleggio Auto Aeroporto Olbia", to: "/noleggio-auto-aeroporto-olbia" },
              { label: "Noleggio Auto Costa Smeralda", to: "/noleggio-auto-costa-smeralda" },
              { label: "Noleggio Senza Carta di Credito", to: "/noleggio-auto-senza-carta-di-credito-olbia" },
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
            <span className="w-2 h-2 rounded-full bg-gold"></span> Dove Siamo & Contatti
          </h3>

          <div className="flex flex-col gap-4">
            <div className="p-4 bg-gray-100 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-2xl flex items-start gap-3 hover:border-gold/30 transition-colors">
              <div className="p-2 bg-gold/10 rounded-xl shrink-0 mt-0.5">
                <MapPin size={16} className="text-gold" />
              </div>
              <div className="text-sm">
                <strong className="block text-foreground mb-0.5 font-medium">Sede Operativa (Porto)</strong>
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
                <strong className="block text-gray-600 dark:text-white/70 mb-0.5 font-medium">Sede Legale</strong>
                <span className="text-muted-foreground">
                  Viale Aldo Moro 367
                  <br />
                  07026, Olbia (SS)
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-2">
              <a
                href="tel:+393446107071"
                className="flex items-center justify-center gap-2 py-3 px-4 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl hover:bg-gold hover:border-gold hover:text-black transition-all duration-300 group relative z-20 text-xs font-bold text-foreground tracking-wider"
              >
                <Phone size={14} className="group-hover:animate-pulse" />
                Chiama Ora
              </a>
              <a
                href="mailto:ksrentsrl@gmail.com"
                className="flex items-center justify-center gap-2 py-3 px-4 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300 group relative z-20 text-xs font-bold text-foreground tracking-wider"
              >
                <Mail size={14} />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Destinazioni & Spiagge — SEO Internal Linking */}
      <div className="mt-8 md:mt-12 pt-10 border-t border-gray-200 dark:border-white/5 space-y-10">
        <div>
          <h3 className="text-foreground font-bold text-xs uppercase tracking-[0.2em] mb-4 flex items-center gap-2 opacity-80">
            <MapPin size={12} className="text-gold" /> Destinazioni Costa Est
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
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
            ].map((d) => (
              <Link
                key={d.to}
                to={d.to}
                className="px-3 py-1.5 text-[11px] font-medium text-gray-800 dark:text-white/60 bg-gray-200 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-full hover:border-gold hover:text-gold dark:hover:bg-gold/10 transition-all duration-200 relative z-20 uppercase tracking-wider"
              >
                {d.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-foreground font-bold text-xs uppercase tracking-[0.2em] mb-4 flex items-center gap-2 opacity-80">
            <MapPin size={12} className="text-gold" /> Destinazioni Costa Smeralda
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
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
            ].map((d) => (
              <Link
                key={d.to}
                to={d.to}
                className="px-3 py-1.5 text-[11px] font-medium text-gray-800 dark:text-white/60 bg-gray-200 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-full hover:border-gold hover:text-gold dark:hover:bg-gold/10 transition-all duration-200 relative z-20 uppercase tracking-wider"
              >
                {d.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-foreground font-bold text-xs uppercase tracking-[0.2em] mb-4 flex items-center gap-2 opacity-80">
            <MapPin size={12} className="text-gold" /> Le Migliori Spiagge
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "Spiaggia del Principe", to: "/spiaggia-del-principe" },
              { label: "Liscia Ruja", to: "/liscia-ruja" },
              { label: "Cala Brandinchi", to: "/cala-brandinchi" },
              { label: "La Cinta", to: "/la-cinta" },
              { label: "Lu Impostu", to: "/lu-impostu" },
              { label: "Capriccioli", to: "/capriccioli" },
              { label: "Romazzino", to: "/romazzino" },
              { label: "Grande Pevero", to: "/grande-pevero" },
              { label: "Cala Moresca", to: "/cala-moresca" },
              { label: "Cala Sabina", to: "/cala-sabina" },
              { label: "Spiaggia Bianca", to: "/spiaggia-bianca" },
              { label: "Porto Istana", to: "/porto-istana" },
              { label: "Porto Taverna", to: "/porto-taverna" },
              { label: "Rena Bianca", to: "/rena-bianca" },
              { label: "Cala del Faro", to: "/cala-del-faro" },
              { label: "La Celvia", to: "/la-celvia" },
              { label: "Spiaggia Marinella", to: "/spiaggia-marinella" },
              { label: "Spiaggia Bados", to: "/spiaggia-bados" },
              { label: "Spiaggia Pittulongu", to: "/spiaggia-pittulongu" },
              { label: "Capo Testa", to: "/capo-testa" },
            ].map((d) => (
              <Link
                key={d.to}
                to={d.to}
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
            <p className="text-foreground/90 font-semibold tracking-widest uppercase text-xs mb-2">KS RENT S.R.L.</p>
            <p>
              Sede Legale: Viale Aldo Moro 367, 07026 Olbia (SS)
              <span className="hidden md:inline"> | </span>
              <br className="md:hidden" />
              Sede Operativa: Viale Isola Bianca 38 (Porto di Olbia)
            </p>
            <p>
              C.F. / P.IVA: 03028900904
              <span className="hidden md:inline"> | </span>
              <br className="md:hidden" />
              Iscrizione Registro Imprese di Sassari
              <span className="hidden md:inline"> | </span>
              <br className="md:hidden" />
              REA: SS - 224046
            </p>
            <p>
              Capitale Sociale: € 20.000,00 i.v.
              <span className="hidden md:inline"> | </span>
              <br className="md:hidden" />
              PEC:{" "}
              <a href="mailto:ks.rent.srl@pec.it" className="hover:text-gold transition-colors relative z-20">
                ks.rent.srl@pec.it
              </a>
            </p>
            <p className="text-muted-foreground/70 italic pt-2">
              Autonoleggio locale in Sardegna, totalmente indipendente e non affiliato ad altre società omonime sul
              territorio nazionale.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 text-[10px] md:text-xs text-muted-foreground border-t border-gray-200 dark:border-white/5 pt-5 w-full uppercase tracking-wider">
            <p>© {new Date().getFullYear()} KS Rent S.R.L.</p>
            <span className="hidden sm:inline opacity-30">•</span>
            <a
              href="https://www.iubenda.com/privacy-policy/36489583"
              className="iubenda-nostyle iubenda-noiframe iubenda-embed hover:text-gold transition-colors relative z-20"
              title="Privacy Policy"
            >
              Privacy Policy
            </a>
            <span className="hidden sm:inline opacity-30">•</span>
            <a
              href="https://www.iubenda.com/privacy-policy/36489583/cookie-policy"
              className="iubenda-nostyle iubenda-noiframe iubenda-embed hover:text-gold transition-colors relative z-20"
              title="Cookie Policy"
            >
              Cookie Policy
            </a>
            <span className="opacity-30">|</span>
            <span className="font-medium">
              Powered by <span className="text-foreground">KREA</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

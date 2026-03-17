import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Map, FileText } from "lucide-react";
const logo = "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/asset/KSRENTlogo.png";

const Footer = () => (
  <footer className="relative bg-[#050505] pt-12 md:pt-24 pb-8 border-t border-white/5 overflow-hidden">
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent pointer-events-none" />
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-gold/5 blur-[150px] pointer-events-none" />

    <div className="container mx-auto px-4 relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-20">
        {/* Brand Info */}
        <div className="flex flex-col">
          {/* Tag Immagine Corretto con width e height ALL'INTERNO del tag */}
          <img
            src={logo}
            alt="KS Rent Noleggio Auto Lusso Olbia"
            width={120}
            height={48}
            className="h-12 w-auto mb-4 object-contain"
            loading="lazy"
          />
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            Noleggio d'eccellenza in Costa Smeralda con coperture assicurative complete, deposito cauzionale trasparente
            e termini contrattuali chiari. Libertà di esplorare, professionalità garantita.
          </p>
          <div className="text-xs text-white/80 space-y-1">
            <p className="flex items-center gap-2">
              <FileText size={12} /> P. IVA: 03028900904
            </p>
            <p className="flex items-center gap-2">
              <FileText size={12} /> SDI: USAL8PV
            </p>
          </div>
        </div>

        {/* Link Rapidi */}
        <div>
          <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold"></span> Navigazione
          </h3>
          <div className="flex flex-col gap-4">
            <Link to="/" className="text-sm text-muted-foreground hover:text-gold transition-colors w-fit relative z-20">Home</Link>
            <Link to="/chisiamo" className="text-sm text-muted-foreground hover:text-gold transition-colors w-fit relative z-20">Chi Siamo</Link>
            <Link to="/prenotaora" className="text-sm text-muted-foreground hover:text-gold transition-colors w-fit relative z-20">Prenota Ora</Link>
            <Link to="/admin" className="text-sm text-muted-foreground hover:text-gold transition-colors w-fit relative z-20">Area Riservata</Link>
          </div>

          <h3 className="text-white font-bold text-sm uppercase tracking-widest mt-8 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold"></span> Aree Servite
          </h3>
          <div className="flex flex-col gap-3">
            <Link to="/noleggio-auto-porto-olbia" className="text-sm text-muted-foreground hover:text-gold transition-colors w-fit relative z-20">Noleggio Auto Porto di Olbia</Link>
            <Link to="/noleggio-auto-aeroporto-olbia" className="text-sm text-muted-foreground hover:text-gold transition-colors w-fit relative z-20">Noleggio Auto Aeroporto Olbia</Link>
            <Link to="/noleggio-auto-costa-smeralda" className="text-sm text-muted-foreground hover:text-gold transition-colors w-fit relative z-20">Noleggio Auto Costa Smeralda</Link>
            <Link to="/noleggio-auto-senza-carta-di-credito-olbia" className="text-sm text-muted-foreground hover:text-gold transition-colors w-fit relative z-20">Noleggio Senza Carta di Credito</Link>
          </div>
        </div>

        {/* Sedi */}
        <div>
          {/* Cambiato da h4 a h3 */}
          <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold"></span> Le Nostre Sedi
          </h3>
          <div className="flex flex-col gap-5 text-sm text-muted-foreground">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white mb-1">Sede Operativa</strong>
                Viale Isola Bianca 38
                <br />
                07026, Olbia (SS)
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Map size={18} className="text-gold/50 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white/70 mb-1">Sede Legale</strong>
                Viale Aldo Moro 367
                <br />
                07026, Olbia (SS)
              </div>
            </div>
          </div>
        </div>

        {/* Contatti */}
        <div>
          {/* Cambiato da h4 a h3 */}
          <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold"></span> Contatti
          </h3>
          <div className="flex flex-col gap-4 text-sm text-muted-foreground">
            <a
              href="tel:+393446107071"
              className="flex items-center gap-3 hover:text-gold transition-colors group relative z-20"
            >
              <div className="p-2 bg-white/5 rounded-full group-hover:bg-gold/10 transition-colors">
                <Phone size={16} className="text-gold" />
              </div>
              +39 344 610 7071
            </a>
            <a
              href="mailto:ksrentsrl@gmail.com"
              className="flex items-center gap-3 hover:text-gold transition-colors group relative z-20"
            >
              <div className="p-2 bg-white/5 rounded-full group-hover:bg-gold/10 transition-colors">
                <Mail size={16} className="text-gold" />
              </div>
              ksrentsrl@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>

      {/* Destinazioni & Spiagge — SEO Internal Linking */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="mt-8 md:mt-12 pt-8 border-t border-white/5 space-y-8">
          {/* Costa Est */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold"></span> Destinazioni Costa Est
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
                <Link key={d.to} to={d.to} className="px-3 py-1.5 text-xs text-white/60 bg-white/5 border border-white/10 rounded-full hover:bg-gold/10 hover:border-gold/30 hover:text-gold transition-all duration-200 relative z-20">
                  {d.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Costa Smeralda */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold"></span> Destinazioni Costa Smeralda
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
                <Link key={d.to} to={d.to} className="text-xs text-white/50 hover:text-gold transition-colors w-fit relative z-20">
                  {d.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Spiagge */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold"></span> Le Migliori Spiagge
            </h3>
            <div className="flex flex-col gap-2.5">
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
                <Link key={d.to} to={d.to} className="text-xs text-white/50 hover:text-gold transition-colors w-fit relative z-20">
                  {d.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

    {/* HUGE BOLT TEXT */}
    <div className="w-full flex justify-center items-end px-4 mt-6 md:mt-10 select-none pointer-events-none overflow-hidden">
      <span className="text-[13vw] sm:text-[15vw] md:text-[18vw] leading-[0.75] font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-gold/80 via-gold/20 to-transparent opacity-80" aria-hidden="true">
        KS RENT
      </span>
    </div>

    {/* Copyright Bottom Bar */}
    <div className="relative z-10 border-t border-white/10 mt-6 md:mt-8 pt-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} KS Rent S.R.L. — @KREA</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://www.iubenda.com/privacy-policy/36489583"
            className="iubenda-nostyle iubenda-noiframe iubenda-embed hover:text-gold transition-colors relative z-20"
            title="Privacy Policy"
          >
            Privacy Policy
          </a>
          <a
            href="https://www.iubenda.com/privacy-policy/36489583/cookie-policy"
            className="iubenda-nostyle iubenda-noiframe iubenda-embed hover:text-gold transition-colors relative z-20"
            title="Cookie Policy"
          >
            Cookie Policy
          </a>
          <span className="text-white/20">|</span>
          <span>Powered by KREA</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

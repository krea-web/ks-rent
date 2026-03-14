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

      {/* Zone di Consegna Rapida — SEO Gallura */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="mt-8 md:mt-12 pt-8 border-t border-white/5">
          <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold"></span> Zone di Consegna Rapida
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Olbia Aeroporto",
              "Porto Cervo",
              "Baja Sardinia",
              "San Teodoro",
              "Puntaldia",
              "Palau",
              "Arzachena",
              "Cannigione",
              "Golfo Aranci",
              "Porto Rotondo",
            ].map((zona) => (
              <span
                key={zona}
                className="text-xs text-white/50 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 hover:text-gold hover:border-gold/30 transition-colors"
              >
                {zona}
              </span>
            ))}
          </div>
        </div>
      </div>

    {/* HUGE BOLT TEXT */}
    <div className="w-full flex justify-center items-end px-4 mt-6 md:mt-10 select-none pointer-events-none overflow-hidden">
      <h1 className="text-[13vw] sm:text-[15vw] md:text-[18vw] leading-[0.75] font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-gold/80 via-gold/20 to-transparent opacity-80">
        KS RENT
      </h1>
    </div>

    {/* Copyright Bottom Bar */}
    <div className="relative z-10 border-t border-white/10 mt-6 md:mt-8 pt-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} KS Rent S.R.L. — @KREA</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="#" className="hover:text-gold transition-colors relative z-20">
            Privacy Policy
          </Link>
          <Link to="#" className="hover:text-gold transition-colors relative z-20">
            Termini di Servizio
          </Link>
          <span className="text-white/20">|</span>
          <span>Powered by KREA</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

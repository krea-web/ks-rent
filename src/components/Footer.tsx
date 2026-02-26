import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Map, FileText } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="relative bg-[#050505] pt-24 pb-8 border-t border-white/5 overflow-hidden">
    {/* Linea luminosa superiore */}
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

    {/* Bagliore di sfondo */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-gold/5 blur-[150px] pointer-events-none" />

    <div className="container mx-auto px-4 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        {/* Brand Info */}
        <div className="flex flex-col">
          <img src={logo} alt="KS Rent" className="h-12 w-auto mb-4" />
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            Non noleggiamo solo veicoli, consegniamo la libertà di esplorare la Costa Smeralda senza stress, senza carte
            di credito e senza burocrazia.
          </p>
          <div className="text-xs text-white/40 space-y-1">
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
          <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold"></span> Navigazione
          </h4>
          <div className="flex flex-col gap-4">
            <Link to="/" className="text-sm text-muted-foreground hover:text-gold transition-colors w-fit">
              Home
            </Link>
            <Link to="/chisiamo" className="text-sm text-muted-foreground hover:text-gold transition-colors w-fit">
              Chi Siamo
            </Link>
            <Link to="/prenotaora" className="text-sm text-muted-foreground hover:text-gold transition-colors w-fit">
              Prenota Ora
            </Link>
            <Link to="/admin" className="text-sm text-muted-foreground hover:text-gold transition-colors w-fit">
              Area Riservata
            </Link>
          </div>
        </div>

        {/* Sedi */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold"></span> Le Nostre Sedi
          </h4>
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
          <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold"></span> Contatti
          </h4>
          <div className="flex flex-col gap-4 text-sm text-muted-foreground">
            <a href="tel:+393446107071" className="flex items-center gap-3 hover:text-gold transition-colors group">
              <div className="p-2 bg-white/5 rounded-full group-hover:bg-gold/10 transition-colors">
                <Phone size={16} className="text-gold" />
              </div>
              +39 344 610 7071
            </a>
            <a
              href="mailto:ksrentsrl@gmail.com"
              className="flex items-center gap-3 hover:text-gold transition-colors group"
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

    {/* HUGE BOLT TEXT */}
    <div className="w-full flex justify-center items-end px-4 mt-10 select-none pointer-events-none overflow-hidden">
      <h1 className="text-[18vw] leading-[0.75] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-gold/80 via-gold/20 to-transparent opacity-80">
        KS RENT
      </h1>
    </div>

    {/* Copyright Bottom Bar */}
    <div className="relative z-10 border-t border-white/10 mt-8 pt-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} KS Rent S.R.L. — @KREA</p>
        <div className="flex gap-4">
          <Link to="#" className="hover:text-gold transition-colors">
            Privacy Policy
          </Link>
          <Link to="#" className="hover:text-gold transition-colors">
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

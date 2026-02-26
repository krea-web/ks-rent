import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <span className="text-2xl font-black tracking-wider font-display">
            KS <span className="text-gold">RENT</span>
          </span>
          <p className="mt-3 text-sm text-muted-foreground">
            Il tuo partner di fiducia per il noleggio veicoli premium.
          </p>
        </div>

        <div>
          <h4 className="text-gold font-semibold text-sm uppercase tracking-wider mb-4">Link Rapidi</h4>
          <div className="flex flex-col gap-2">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link>
            <Link to="/chisiamo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Chi Siamo</Link>
            <Link to="/prenotaora" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Prenota Ora</Link>
          </div>
        </div>

        <div>
          <h4 className="text-gold font-semibold text-sm uppercase tracking-wider mb-4">Contatti</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><Phone size={14} /> +39 XXX XXX XXXX</span>
            <span className="flex items-center gap-2"><Mail size={14} /> info@ksrent.it</span>
            <span className="flex items-center gap-2"><MapPin size={14} /> Italia</span>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} KS Rent S.R.L. — Tutti i diritti riservati.
      </div>
    </div>
  </footer>
);

export default Footer;

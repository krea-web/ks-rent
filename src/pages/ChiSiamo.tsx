import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Instagram } from "lucide-react";

const mockPosts = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  caption: `Post Instagram #${i + 1}`,
}));

const ChiSiamo = () => (
  <div className="pt-16">
    {/* Hero */}
    <section className="py-24 border-b border-border">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gold text-sm uppercase tracking-[0.3em] font-semibold mb-4"
        >
          La Nostra Filosofia
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-display font-black mb-6"
        >
          Passione per il <span className="text-gradient-gold">noleggio</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-lg leading-relaxed"
        >
          KS Rent nasce dalla volontà di offrire un servizio di autonoleggio che unisca
          qualità, trasparenza e un'esperienza cliente senza pari. Ogni veicolo della nostra
          flotta è curato nei minimi dettagli.
        </motion.p>
      </div>
    </section>

    {/* Social Feed */}
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-gold mb-3">
            <Instagram size={20} />
            <span className="text-sm font-semibold uppercase tracking-wider">@ksrent_srl</span>
          </div>
          <h2 className="text-3xl font-display font-black">Seguici su Instagram</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {mockPosts.map((p) => (
            <div
              key={p.id}
              className="aspect-square bg-muted rounded-lg flex items-center justify-center border border-border hover:border-gold/40 transition-colors"
            >
              <span className="text-muted-foreground text-xs">{p.caption}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 bg-card text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-black mb-6">
          Pronto a <span className="text-gradient-gold">partire</span>?
        </h2>
        <Link
          to="/prenotaora"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-md gradient-gold text-primary-foreground font-bold uppercase tracking-wider text-sm hover:opacity-90 transition-opacity glow-gold"
        >
          Prenota Ora <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  </div>
);

export default ChiSiamo;

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Instagram, ShieldCheck, Gem, MapPin } from "lucide-react";

const ChiSiamo = () => {
  return (
    <div className="bg-[#050505] min-h-screen selection:bg-gold selection:text-black pt-16">
      {/* 1. MEGA HERO */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80"
            alt="KS Rent Supercar"
            className="w-full h-full object-cover opacity-40 scale-105 transform origin-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/50 via-transparent to-[#050505]" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-gold text-xs uppercase tracking-[0.3em] font-bold mb-6 backdrop-blur-md">
              La Nostra Essenza
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white leading-[0.9] tracking-tighter mb-6">
              Oltre il <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-gold">
                Noleggio
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. BRAND IDENTITY PATH */}
      <section className="py-24 relative z-10 bg-[#050505]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
            {/* Pilastro 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-500">
                <ShieldCheck size={32} className="text-gold" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Fiducia Assoluta</h3>
              <p className="text-muted-foreground leading-relaxed">
                Nessuna carta di credito obbligatoria, nessuno score bancario. Crediamo in un rapporto umano e diretto
                con i nostri clienti.
              </p>
            </motion.div>

            {/* Pilastro 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-500">
                <Gem size={32} className="text-gold" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Flotta Impeccabile</h3>
              <p className="text-muted-foreground leading-relaxed">
                Dalle supercar per le notti in Costa Smeralda agli scooter per saltare il traffico. Veicoli nuovi,
                puliti e sempre pronti all'uso.
              </p>
            </motion.div>

            {/* Pilastro 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-500">
                <MapPin size={32} className="text-gold" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Radici Sarde</h3>
              <p className="text-muted-foreground leading-relaxed">
                Operiamo orgogliosamente da Olbia. Conosciamo il nostro territorio e ti offriamo assistenza dedicata
                24/7 ovunque tu sia.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. LA FILOSOFIA */}
      <section className="py-32 bg-[#0a0a0a] border-y border-white/5 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-gold font-semibold tracking-[0.3em] uppercase text-sm mb-8">Il Manifesto</h2>
            <p className="text-3xl md:text-5xl font-display font-bold text-white leading-[1.4] md:leading-[1.3]">
              "Abbiamo creato KS Rent perché eravamo stanchi delle{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-400">
                agenzie tradizionali
              </span>
              . Niente burocrazia nascosta, niente attese infinite in aeroporto. Solo tu, le chiavi in mano, e la
              libertà della Sardegna."
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. SOCIAL - IMAC CUT IN HALF */}
      <section className="pt-32 bg-[#050505] relative overflow-hidden flex flex-col items-center">
        <div className="container mx-auto px-4 text-center relative z-20 mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <a
              href="https://instagram.com/ksrent_srl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-gold/50 hover:bg-gold/10 transition-all duration-300 group mb-6"
            >
              <Instagram className="text-gold group-hover:scale-110 transition-transform" size={24} />
              <span className="text-white font-bold tracking-wider">@ksrent_srl</span>
            </a>
            <h2 className="text-4xl md:text-6xl font-display font-black text-white">
              Vivi la <span className="text-gold">Community</span>
            </h2>
          </motion.div>
        </div>

        {/* L'iMac Mockup (Tagliato a Metà / Emerge dal basso) */}
        <div className="relative w-full max-w-5xl mx-auto px-4 translate-y-[15%] md:translate-y-[20%] z-10">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full aspect-[16/10] bg-black rounded-t-[2rem] border-t-[16px] border-x-[16px] border-[#1a1a1a] shadow-[0_-30px_80px_rgba(212,175,55,0.15)] overflow-hidden"
          >
            {/* Vetro del monitor (Riflesso) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-20" />

            {/* Webcam dot */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#0a0a0a] border border-[#222] z-30 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-blue-500/30" />
            </div>

            {/* Contenuto dello Schermo (Immagine Instagram Profilo estetica) */}
            <div className="absolute inset-0 bg-[#0a0a0a] pt-8">
              <img
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80"
                alt="Instagram Mockup KS Rent"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. CTA FINALE */}
      <section className="py-32 bg-[#050505] text-center relative z-20 border-t border-white/5">
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-gradient-to-b from-[#0a0a0a] to-[#050505] p-12 md:p-20 rounded-[3rem] border border-white/10 shadow-[0_0_50px_rgba(212,175,55,0.05)]"
          >
            <h2 className="text-4xl md:text-5xl font-display font-black mb-8 text-white">
              Il Tuo Viaggio <br />
              <span className="text-gold">Inizia Da Qui.</span>
            </h2>
            <Link
              to="/prenotaora"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-gold to-yellow-500 text-black px-10 py-5 rounded-full font-black uppercase tracking-widest hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300 hover:scale-105 group"
            >
              Prenota Ora
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ChiSiamo;

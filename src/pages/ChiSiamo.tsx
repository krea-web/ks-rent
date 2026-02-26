import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Instagram, ShieldCheck, Key, MapPin } from "lucide-react";

const ChiSiamo = () => {
  // Animazioni standard morbide
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <div className="bg-[#050505] text-white selection:bg-gold selection:text-black pt-20">
      {/* 1. HERO EDITORIALE */}
      <section className="relative h-[85vh] flex flex-col justify-end pb-24 px-4 md:px-12 lg:px-24">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?auto=format&fit=crop&q=80"
            alt="Supercar posteriore"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-gold"></div>
              <span className="text-gold text-sm uppercase tracking-[0.4em] font-semibold">KS Rent S.R.L.</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black leading-[0.9] tracking-tighter mb-8">
              Redefiniamo <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">la Libertà.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl font-light leading-relaxed">
              Nessuna carta di credito. Nessuna coda. Solo tu, le chiavi in mano e le strade più belle della Sardegna.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. I PILASTRI (Minimalist Line Grid) */}
      <section className="py-24 px-4 md:px-12 lg:px-24 bg-[#050505]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 border-t border-white/10 pt-16"
        >
          {/* Feature 1 */}
          <motion.div variants={fadeUp} className="group">
            <ShieldCheck size={32} className="text-gold mb-6 group-hover:scale-110 transition-transform duration-500" />
            <h3 className="text-2xl font-display font-bold mb-4">Fiducia Vera</h3>
            <p className="text-white/50 leading-relaxed font-light">
              Abbiamo eliminato le barriere. Non richiediamo carte di credito o score bancari. Il nostro rapporto con il
              cliente si basa su trasparenza e stretta di mano.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div variants={fadeUp} className="group">
            <Key size={32} className="text-gold mb-6 group-hover:scale-110 transition-transform duration-500" />
            <h3 className="text-2xl font-display font-bold mb-4">Flotta Premium</h3>
            <p className="text-white/50 leading-relaxed font-light">
              Dai SUV per le avventure fuoristrada, alle supercar per le notti in Costa Smeralda, fino agli scooter
              agili per la città. Ogni veicolo è perfetto.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div variants={fadeUp} className="group">
            <MapPin size={32} className="text-gold mb-6 group-hover:scale-110 transition-transform duration-500" />
            <h3 className="text-2xl font-display font-bold mb-4">Sedi Strategiche</h3>
            <p className="text-white/50 leading-relaxed font-light">
              Presenti a Olbia con Sede Legale e Operativa. Vicinissimi all'aeroporto e al porto, per garantirti una
              consegna rapida e senza stress.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* 3. IL MANIFESTO (Asymmetrical Typography) */}
      <section className="py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-5 relative"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80"
                  alt="Strada Sarda"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Box decorativo sovrapposto */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#111] border border-white/10 flex items-center justify-center p-6 hidden md:flex">
                <p className="text-xs text-gold uppercase tracking-widest font-semibold text-center">
                  Dal 2024
                  <br />
                  In Sardegna
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-7"
            >
              <h2 className="text-gold font-semibold tracking-[0.3em] uppercase text-xs mb-8">La Nostra Visione</h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] mb-8">
                Non siamo nati per essere l'ennesima agenzia.
              </h3>
              <div className="space-y-6 text-white/60 font-light text-lg">
                <p>
                  Siamo nati per essere il partner che avremmo sempre voluto incontrare nei nostri viaggi. KS Rent nasce
                  da una frustrazione comune: la burocrazia infinita del noleggio tradizionale.
                </p>
                <p>
                  Abbiamo deciso di cambiare le regole. Il nostro focus è la Costa Smeralda e il nostro obiettivo è
                  farti iniziare la vacanza dal momento esatto in cui atterri a Olbia.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. INSTAGRAM (Editorial Gallery pulita) */}
      <section className="py-32 bg-[#050505]">
        <div className="px-4 md:px-12 lg:px-24 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Dietro le Quinte</h2>
            <p className="text-white/50 font-light max-w-md">
              Esplora la nostra flotta e i nostri clienti felici direttamente dal nostro feed ufficiale.
            </p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <a
              href="https://instagram.com/ksrent_srl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 pb-2 border-b border-gold text-gold hover:text-white hover:border-white transition-colors uppercase tracking-widest text-sm font-semibold"
            >
              <Instagram size={18} /> @ksrent_srl
            </a>
          </motion.div>
        </div>

        {/* Griglia Immagini Stile Editoriale */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-4 px-4 md:px-12 lg:px-24"
        >
          {[
            "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1599818817478-f60ae05bcbe4?auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80",
          ].map((src, idx) => (
            <motion.div key={idx} variants={fadeUp} className="group relative aspect-square overflow-hidden bg-[#111]">
              <img
                src={src}
                alt={`Instagram Post ${idx + 1}`}
                className="w-full h-full object-cover filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40">
                <Instagram className="text-white" size={32} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 5. CTA MINIMALE ED ELEGANTE */}
      <section className="py-32 bg-[#0a0a0a] border-t border-white/5 text-center px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-display font-black mb-8">Pronto a Partire?</h2>
          <p className="text-white/50 mb-12 font-light text-lg">
            Scegli il tuo veicolo, seleziona le date e prenota in meno di due minuti. Nessun pagamento anticipato
            richiesto.
          </p>
          <Link
            to="/prenotaora"
            className="inline-flex items-center justify-center gap-3 bg-white text-black px-12 py-5 font-bold uppercase tracking-widest hover:bg-gold transition-colors duration-300 group"
          >
            Noleggia Ora
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default ChiSiamo;

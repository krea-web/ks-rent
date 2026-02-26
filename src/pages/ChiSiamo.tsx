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
              <div className="aspect-[3/4] overflow-hidden rounded-[2rem] border border-white/5">
                <img
                  src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80"
                  alt="Strada Sarda"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Box decorativo sovrapposto */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#050505] border border-white/10 rounded-3xl flex items-center justify-center p-6 hidden md:flex shadow-2xl">
                <p className="text-xs text-gold uppercase tracking-widest font-semibold text-center leading-loose">
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

      {/* 4. INSTAGRAM (Asymmetric Editorial Grid) */}
      <section className="py-32 bg-[#050505] border-t border-white/5 relative">
        <div className="container mx-auto px-4 md:px-12 lg:px-24">
          {/* Header Social */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center justify-center p-3 bg-white/5 rounded-2xl mb-6 border border-white/10">
                <Instagram className="text-gold w-6 h-6" />
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Vivi l'Esperienza.</h2>
              <p className="text-white/50 font-light text-lg">
                Unisciti alla nostra community. Esplora le bellezze della Sardegna e scopri il dietro le quinte della
                nostra flotta esclusiva.
              </p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <a
                href="https://instagram.com/ksrent_srl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:border-gold/50 hover:bg-gold/10 text-white hover:text-gold transition-all duration-300 uppercase tracking-widest text-xs font-bold group"
              >
                Segui @ksrent_srl <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Griglia Asimmetrica */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]"
          >
            {/* Foto Principale (Grande) */}
            <motion.a
              href="https://instagram.com/ksrent_srl"
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              className="md:col-span-8 md:row-span-2 relative group overflow-hidden rounded-[2rem] bg-[#111] border border-white/5 block"
            >
              <img
                src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80"
                alt="KS Rent Supercar"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                <Instagram className="text-gold mb-3" size={32} />
                <p className="text-white font-medium">Esplora la Costa Smeralda con stile.</p>
              </div>
            </motion.a>

            {/* Foto Secondaria Alto */}
            <motion.a
              href="https://instagram.com/ksrent_srl"
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              className="md:col-span-4 md:row-span-1 relative group overflow-hidden rounded-[2rem] bg-[#111] border border-white/5 block"
            >
              <img
                src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80"
                alt="Dettaglio Auto"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                <Instagram className="text-white" size={28} />
              </div>
            </motion.a>

            {/* Foto Secondaria Basso */}
            <motion.a
              href="https://instagram.com/ksrent_srl"
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              className="md:col-span-4 md:row-span-1 relative group overflow-hidden rounded-[2rem] bg-[#111] border border-white/5 block"
            >
              <img
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80"
                alt="Panorama Sardegna"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                <Instagram className="text-white" size={28} />
              </div>
            </motion.a>
          </motion.div>
        </div>
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
            className="inline-flex items-center justify-center gap-3 bg-white text-black px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-gold transition-colors duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(212,175,55,0.3)] group"
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

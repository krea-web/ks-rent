import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Instagram, ShieldCheck, Key, MapPin } from "lucide-react";
import { useRef } from "react";

const ChiSiamo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.666%"]);

  // Removed explicit ': Variants' to fix TypeScript compatibility errors
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
    <div
      ref={containerRef}
      className="bg-[#050505] text-white selection:bg-gold selection:text-black pt-20 overflow-x-hidden font-sans"
    >
      {/* 1. HERO EDITORIALE */}
      <section className="relative min-h-[70vh] md:min-h-[85vh] flex flex-col justify-end pb-16 md:pb-24 px-4 md:px-12 lg:px-24">
        <div className="absolute inset-0 z-0">
          <img
            src="https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/BMW%20M2%201.jpg"
            alt="Supercar posteriore"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-full md:max-w-5xl">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="h-[1px] w-12 bg-gold"></div>
              <span className="text-gold text-xs sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.4em] font-semibold">
                KS Rent S.R.L.
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-black leading-tight md:leading-[1.05] tracking-tight mb-6 md:mb-8 break-words">
              Redefiniamo <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">la Libertà.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl font-light leading-relaxed">
              Oltre il semplice noleggio. Un'esperienza di pura libertà, disegnata per la Costa Smeralda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 1.5 LA NOSTRA STORIA (Storytelling Animato) */}
      <section className="py-24 md:py-40 px-4 md:px-12 lg:px-24 bg-[#050505] relative flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-6xl font-display font-bold leading-tight"
          >
            Siamo nati dall'asfalto sardo e dalla voglia di <span className="text-gold">cambiare le regole.</span>
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-lg md:text-2xl font-light text-white/70 leading-relaxed"
          >
            Abbiamo vissuto in prima persona la frustrazione dei noleggi tradizionali: code infinite, depositi bloccati
            e clausole nascoste.
          </motion.p>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-lg md:text-2xl font-light text-white/70 leading-relaxed"
          >
            KS Rent è la nostra risposta: un servizio basato sulla fiducia totale e sulla qualità assoluta. Atterri,
            prendi le chiavi, parti.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="pt-12 md:pt-16"
          >
            <p className="text-2xl md:text-4xl font-display font-medium italic text-white leading-snug">
              "Non affittiamo semplicemente veicoli, ma ti consegniamo la chiave per vivere l'isola esattamente come va
              vissuta: in totale libertà."
            </p>
            <span className="block mt-8 text-sm md:text-base font-bold tracking-[0.2em] uppercase text-gold">
              I Fondatori
            </span>
          </motion.div>
        </div>
      </section>

      {/* 2. I PILASTRI (Carosello Orizzontale a Scorrimento Verticale) */}
      <section ref={scrollRef} className="relative h-[300vh] bg-[#050505]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex w-[300vw]">
            {/* Slide 1 */}
            <div className="w-screen h-screen flex-shrink-0 flex flex-col items-center justify-center px-4 md:px-24">
              <div className="max-w-3xl text-center flex flex-col items-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(212,175,55,0.1)]">
                  <ShieldCheck size={40} className="text-gold" />
                </div>
                <h3 className="text-4xl md:text-6xl font-display font-black mb-6 tracking-tight">Fiducia Vera</h3>
                <p className="text-white/60 leading-relaxed font-light text-xl md:text-2xl">
                  Abbiamo eliminato le barriere. Non richiediamo carte di credito o score bancari. Il nostro rapporto
                  con il cliente si basa su trasparenza e stretta di mano.
                </p>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="w-screen h-screen flex-shrink-0 flex flex-col items-center justify-center px-4 md:px-24">
              <div className="max-w-3xl text-center flex flex-col items-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(212,175,55,0.1)]">
                  <Key size={40} className="text-gold" />
                </div>
                <h3 className="text-4xl md:text-6xl font-display font-black mb-6 tracking-tight">Flotta Premium</h3>
                <p className="text-white/60 leading-relaxed font-light text-xl md:text-2xl">
                  Dai SUV per le avventure fuoristrada, alle supercar per le notti in Costa Smeralda, fino agli scooter
                  agili per la città. Ogni veicolo è perfetto.
                </p>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="w-screen h-screen flex-shrink-0 flex flex-col items-center justify-center px-4 md:px-24">
              <div className="max-w-3xl text-center flex flex-col items-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(212,175,55,0.1)]">
                  <MapPin size={40} className="text-gold" />
                </div>
                <h3 className="text-4xl md:text-6xl font-display font-black mb-6 tracking-tight">Sedi Strategiche</h3>
                <p className="text-white/60 leading-relaxed font-light text-xl md:text-2xl">
                  Presenti a Olbia con Sede Legale e Operativa. Vicinissimi all'aeroporto e al porto, per garantirti una
                  consegna rapida e senza stress.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. IL MANIFESTO */}
      <section className="py-16 md:py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-4 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
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
              <div className="absolute -bottom-6 -right-4 md:-bottom-8 md:-right-8 w-36 h-36 md:w-48 md:h-48 bg-[#0a0a0a] border border-white/10 rounded-3xl flex items-center justify-center p-4 md:p-6 hidden md:flex shadow-2xl">
                <p className="text-xs text-gold uppercase tracking-widest font-semibold text-center leading-loose">
                  DAL 2025
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
              <h2 className="text-gold font-semibold tracking-[0.3em] uppercase text-xs mb-6 md:mb-8">
                La Nostra Visione
              </h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 md:mb-8 break-words">
                Non siamo nati per essere l'ennesima agenzia.
              </h3>
              <div className="space-y-5 md:space-y-6 text-white/60 font-light text-base md:text-lg">
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

      {/* 4. INSTAGRAM */}
      <section className="py-16 md:py-32 bg-[#0a0a0a] border-t border-white/5 relative">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-8 mb-10 md:mb-16">
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 leading-tight">
                Vivi l'Esperienza.
              </h2>
              <p className="text-white/50 font-light text-base md:text-lg">
                Unisciti alla nostra community. Esplora le bellezze della Sardegna e scopri il dietro le quinte della
                nostra flotta esclusiva.
              </p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <a
                href="https://instagram.com/ksrent_srl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 md:px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:border-gold/50 hover:bg-gold/10 text-white hover:text-gold transition-all duration-300 uppercase tracking-widest text-xs font-bold group min-h-[48px] relative z-20"
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
            className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[220px] sm:auto-rows-[250px] md:auto-rows-[300px]"
          >
            <motion.a
              href="https://instagram.com/ksrent_srl"
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              className="md:col-span-8 md:row-span-2 relative group overflow-hidden rounded-2xl md:rounded-[2rem] bg-[#111] border border-white/5 block"
            >
              <img
                src="https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/BMW%20M2.avif"
                alt="KS Rent Supercar"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-10 pointer-events-none">
                <Instagram className="text-gold mb-3" size={32} />
                <p className="text-white font-medium">Esplora la Costa Smeralda con stile.</p>
              </div>
            </motion.a>

            <motion.a
              href="https://instagram.com/ksrent_srl"
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              className="md:col-span-4 md:row-span-1 relative group overflow-hidden rounded-2xl md:rounded-[2rem] bg-[#111] border border-white/5 block"
            >
              <img
                src="https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/FIAT%20PANDA.jpg"
                alt="Dettaglio Auto"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm pointer-events-none">
                <Instagram className="text-white" size={28} />
              </div>
            </motion.a>

            <motion.a
              href="https://instagram.com/ksrent_srl"
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              className="md:col-span-4 md:row-span-1 relative group overflow-hidden rounded-2xl md:rounded-[2rem] bg-[#111] border border-white/5 block"
            >
              <img
                src="https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/AUDI%20RS3%20VERDE1.jpg"
                alt="Panorama Sardegna"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm pointer-events-none">
                <Instagram className="text-white" size={28} />
              </div>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* 5. CTA ESPLOSIVA IN ORO */}
      <section className="py-24 md:py-40 bg-gradient-to-br from-gold to-yellow-500 text-black text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/5 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)] pointer-events-none" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-4xl mx-auto relative z-10 flex flex-col items-center"
        >
          <span className="inline-block py-2 px-6 rounded-full bg-black/10 border border-black/20 text-black text-xs md:text-sm uppercase tracking-[0.3em] font-bold mb-8 shadow-sm">
            Il tuo viaggio inizia qui
          </span>

          <h2 className="text-4xl sm:text-6xl md:text-8xl font-display font-black mb-8 leading-tight text-black break-words">
            Pronto a Partire?
          </h2>

          <p className="text-black/80 mb-12 md:mb-16 font-medium text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed">
            Scegli il tuo veicolo, seleziona le date e prenota in meno di due minuti. Nessun pagamento anticipato
            richiesto. L'asfalto sardo ti aspetta.
          </p>

          <Link
            to="/prenotaora"
            className="inline-flex flex-col items-center justify-center gap-2 bg-[#050505] text-white px-12 md:px-16 py-6 md:py-8 rounded-full transition-all duration-300 shadow-[0_20px_40px_rgba(0,0,0,0.4)] group hover:bg-white hover:text-black hover:scale-105 min-w-[280px] md:min-w-[320px] relative z-20"
          >
            <div className="flex items-center gap-4">
              <span className="font-black uppercase tracking-[0.2em] text-lg md:text-xl">Noleggia Ora</span>
              <ArrowRight
                size={24}
                className="group-hover:translate-x-2 transition-transform text-gold group-hover:text-black"
              />
            </div>
            <span className="text-white/50 text-xs md:text-sm font-medium tracking-wide group-hover:text-black/50 transition-colors mt-2">
              Conferma immediata, cancellazione gratuita
            </span>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default ChiSiamo;

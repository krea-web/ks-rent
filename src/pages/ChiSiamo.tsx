import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Instagram } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { localBusinessJsonLd } from "@/lib/jsonLd";
import GoldKeywordsMarquee from "@/components/GoldKeywordsMarquee";

const ChiSiamo = () => {
  return (
    <div className="bg-[#050505] text-white selection:bg-gold selection:text-black pt-20 overflow-x-hidden font-sans">
      <SEOHead
        title="Chi Siamo — KS Rent | Noleggio Auto Olbia Costa Smeralda"
        description="Scopri KS Rent S.R.L.: noleggio auto e moto senza carta di credito in Sardegna. Nati dalla passione per la Costa Smeralda, offriamo fiducia totale e zero burocrazia."
        canonical="https://ksrent.it/chisiamo"
        jsonLd={localBusinessJsonLd}
      />
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
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }}
          >
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
            {/* Gold racing light trail */}
            <div className="mt-8 w-full max-w-2xl h-[2px] relative overflow-hidden rounded-full">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
              <motion.div
                className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent rounded-full shadow-[0_0_20px_#D4AF37,0_0_40px_#D4AF37aa]"
                animate={{ x: ["-6rem", "calc(100% + 6rem)"] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. MISSION (La Nostra Storia) */}
      <section className="py-24 md:py-40 px-4 md:px-12 lg:px-24 bg-[#050505] relative flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl sm:text-4xl md:text-6xl font-display font-bold leading-tight"
          >
            Siamo nati dall'asfalto sardo e dalla voglia di <span className="text-gold">cambiare le regole.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-lg md:text-2xl font-light text-white/70 leading-relaxed"
          >
            Abbiamo vissuto in prima persona la frustrazione dei noleggi tradizionali: code infinite, depositi bloccati
            e clausole nascoste.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.4 } }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-lg md:text-2xl font-light text-white/70 leading-relaxed"
          >
            KS Rent è la nostra risposta: un servizio basato sulla fiducia totale e sulla qualità assoluta. Atterri,
            prendi le chiavi, parti.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.6 } }}
            viewport={{ once: true, margin: "-100px" }}
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

      {/* 3. VISION (Il Manifesto) */}
      <section className="py-16 md:py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-4 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }}
              viewport={{ once: true }}
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
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }}
              viewport={{ once: true }}
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

      {/* GOLD KEYWORDS MARQUEE */}
      <GoldKeywordsMarquee />

      {/* 4. SOCIAL (Instagram) */}
      <section className="py-16 md:py-32 bg-[#0a0a0a] border-t border-white/5 relative">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-8 mb-10 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }}
              viewport={{ once: true }}
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

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }}
              viewport={{ once: true }}
            >
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

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[220px] sm:auto-rows-[250px] md:auto-rows-[300px]">
            <motion.a
              href="https://instagram.com/ksrent_srl"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }}
              viewport={{ once: true }}
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
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }}
              viewport={{ once: true }}
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
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.4 } }}
              viewport={{ once: true }}
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
          </div>
        </div>
      </section>

      {/* 5. BANNER MANIFESTO */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-gold to-yellow-500 text-black text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/5 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative z-10 flex flex-col items-center"
        >
          <span className="inline-block py-2 px-6 rounded-full bg-black/10 border border-black/20 text-black text-xs md:text-sm uppercase tracking-[0.3em] font-bold mb-6 shadow-sm">
            Il tuo viaggio inizia qui
          </span>

          <h2 className="text-4xl sm:text-6xl md:text-8xl font-display font-black mb-6 leading-tight text-black break-words">
            Pronto a Partire?
          </h2>

          <p className="text-black/80 font-medium text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed">
            Nessun pagamento anticipato richiesto. L'asfalto sardo ti aspetta.
          </p>
        </motion.div>
      </section>

      {/* 6. BEST CAR LINK EROICO ALLA PRENOTAZIONE */}
      <Link
        to="/prenotaora"
        className="relative block w-full h-[60vh] md:h-[80vh] group overflow-hidden cursor-pointer"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/AUDI%20RS3%20VERDE.jpg"
            alt="Noleggia la tua auto"
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
          />
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.8 } }}
            viewport={{ once: true }}
            className="text-center flex flex-col items-center"
          >
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-8 group-hover:bg-gold group-hover:border-gold group-hover:text-black transition-all duration-500 shadow-2xl">
              <ArrowRight size={40} className="transform group-hover:translate-x-2 transition-transform duration-500" />
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black text-white mb-4 drop-shadow-lg">
              Scegli la tua Auto
            </h2>
            <p className="text-white/80 uppercase tracking-[0.3em] text-sm md:text-base font-bold">
              Prenota in meno di 2 minuti
            </p>
          </motion.div>
        </div>
      </Link>
    </div>
  );
};

export default ChiSiamo;

import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Instagram, ShieldCheck, Gem, MapPin, Anchor, Compass } from "lucide-react";

const ChiSiamo = () => {
  // Configurazione per l'animazione scroll dell'iMac
  const imacContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imacContainerRef,
    offset: ["start start", "end end"],
  });

  // Trasforma lo scroll da 0 a 1 in un movimento Y da 100% (nascosto giù) a 0% (in posizione)
  const imacY = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  // Dissolvenza e ingrandimento del testo Instagram mentre si scrolla
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const imacScale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <div className="bg-[#050505] selection:bg-gold selection:text-black">
      {/* 1. HERO - STICKY CARD 1 */}
      <section className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden z-10 bg-black">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80"
            alt="KS Rent Supercar"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#050505]" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center mt-20">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <span className="inline-block py-1 px-4 rounded-full bg-white/5 border border-white/10 text-gold text-xs uppercase tracking-[0.4em] font-bold mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.2)]">
              La Nostra Essenza
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black text-white leading-[0.85] tracking-tighter mb-6 drop-shadow-2xl">
              Oltre il <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-gold">
                Noleggio
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. BRAND IDENTITY (BENTO GRID) - STICKY CARD 2 */}
      <section className="sticky top-0 h-screen w-full flex items-center justify-center z-20 bg-[#0a0a0a] shadow-[0_-25px_50px_rgba(0,0,0,0.8)] border-t border-white/5 overflow-hidden">
        {/* Sfondo decorativo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Main Card (Left) */}
            <div className="lg:col-span-7 bg-[#111] p-10 md:p-14 rounded-[2rem] border border-white/10 group hover:border-gold/30 transition-colors duration-500 relative overflow-hidden flex flex-col justify-end min-h-[400px]">
              <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700">
                <ShieldCheck size={120} className="text-gold" />
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                  Fiducia <br />
                  <span className="text-gold">Assoluta.</span>
                </h3>
                <p className="text-white/60 text-lg max-w-md">
                  Nessuna carta di credito obbligatoria, nessuno score bancario. Eliminiamo la burocrazia per darti solo
                  il piacere della guida.
                </p>
              </div>
            </div>

            {/* Right Cards */}
            <div className="lg:col-span-5 grid grid-rows-2 gap-6">
              {/* Top Right */}
              <div className="bg-[#111] p-8 md:p-10 rounded-[2rem] border border-white/10 group hover:border-gold/30 transition-colors duration-500 flex flex-col justify-center">
                <Gem size={40} className="text-gold mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-white mb-2">Flotta Premium</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Dalle supercar ruggenti agli scooter per saltare il traffico. Veicoli nuovi, puliti e sempre al top
                  della manutenzione.
                </p>
              </div>

              {/* Bottom Right */}
              <div className="bg-[#111] p-8 md:p-10 rounded-[2rem] border border-white/10 group hover:border-gold/30 transition-colors duration-500 flex flex-col justify-center">
                <MapPin size={40} className="text-gold mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-white mb-2">Radici Sarde</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Due sedi strategiche a Olbia. Assistenza dedicata 24/7 ovunque tu sia in Sardegna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NEW SECTION: IL TERRITORIO - STICKY CARD 3 */}
      <section className="sticky top-0 h-screen w-full flex items-center justify-center z-30 bg-[#050505] shadow-[0_-25px_50px_rgba(0,0,0,0.8)] border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1571597127113-d922ec01a43a?auto=format&fit=crop&q=80"
            alt="Costa Smeralda Mare"
            className="w-full h-full object-cover filter grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-3 text-gold">
              <Compass size={24} />
              <span className="uppercase tracking-[0.3em] font-bold text-sm">Il Territorio</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-black text-white leading-tight">
              Progettati per la <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-500">
                Costa Smeralda
              </span>
            </h2>
            <p className="text-lg text-white/70 leading-relaxed max-w-xl">
              Non siamo una multinazionale fredda. Siamo nati ad Olbia, respiriamo l'aria di questo mare e sappiamo
              esattamente di cosa hai bisogno per esplorare l'Isola Bianca, Porto Cervo e le calette più nascoste con
              stile e senza pensieri.
            </p>
          </div>
          <div className="flex-1 hidden md:flex justify-end">
            <div className="w-48 h-48 rounded-full border border-gold/30 flex items-center justify-center animate-[spin_20s_linear_infinite]">
              <Anchor size={64} className="text-gold/50" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. MANIFESTO - STICKY CARD 4 */}
      <section className="sticky top-0 h-screen w-full flex items-center justify-center z-40 bg-gold shadow-[0_-25px_50px_rgba(0,0,0,0.8)] overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-black/50 font-bold tracking-[0.4em] uppercase text-sm mb-12">Il Manifesto KS Rent</h2>
          <p className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-black leading-[1.2] md:leading-[1.2]">
            "Abbiamo creato questa azienda perché eravamo stanchi delle{" "}
            <span className="text-white drop-shadow-md">regole rigide</span>. Niente trappole, niente attese infinite in
            aeroporto. Solo tu, un motore acceso, e l'orizzonte."
          </p>
        </div>
      </section>

      {/* 5. INTERACTIVE IMAC SOCIAL SECTION (SCROLL-LINKED) */}
      <section
        ref={imacContainerRef}
        className="relative h-[200vh] z-50 bg-[#050505] shadow-[0_-25px_50px_rgba(0,0,0,0.8)] rounded-t-[3rem]"
      >
        {/* Sticky wrapper che "ferma" lo schermo mentre si consuma il 200vh */}
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-start overflow-hidden pt-24 md:pt-32">
          {/* Testo che sfuma e scompare scrollando */}
          <motion.div style={{ opacity: textOpacity }} className="text-center px-4 relative z-10">
            <a
              href="https://instagram.com/ksrent_srl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-gold hover:bg-gold/10 transition-all duration-300 group mb-6"
            >
              <Instagram className="text-gold group-hover:scale-110 transition-transform" size={24} />
              <span className="text-white font-bold tracking-wider">@ksrent_srl</span>
            </a>
            <h2 className="text-4xl md:text-6xl font-display font-black text-white">
              Unisciti al <span className="text-gold">Club</span>
            </h2>
            <p className="text-white/50 mt-4">Scrolla per scoprire il nostro feed</p>
          </motion.div>

          {/* L'iMac che sale in base allo scroll */}
          <motion.div
            style={{ y: imacY, scale: imacScale }}
            className="absolute bottom-0 w-full max-w-5xl px-4 flex justify-center origin-bottom z-20"
          >
            <div className="relative w-full aspect-[16/10] bg-black rounded-t-[2rem] border-t-[16px] border-x-[16px] border-[#1a1a1a] shadow-[0_-30px_80px_rgba(212,175,55,0.2)] overflow-hidden">
              {/* Vetro del monitor (Riflesso) */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none z-20" />

              {/* Webcam */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#0a0a0a] border border-[#222] z-30 flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-blue-500/30" />
              </div>

              {/* Interfaccia Instagram finta nell'iMac */}
              <div className="absolute inset-0 bg-[#0a0a0a] pt-12">
                <img
                  src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80"
                  alt="Instagram Feed KS Rent"
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. CTA FINALE - STICKY CARD 6 */}
      <section className="relative h-[80vh] w-full flex items-center justify-center z-60 bg-[#050505] border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-display font-black mb-8 text-white">
            La Chiave è <br />
            <span className="text-gold">Nel Quadro.</span>
          </h2>
          <Link
            to="/prenotaora"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-gold to-yellow-500 text-black px-12 py-6 rounded-full font-black uppercase tracking-widest hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] transition-all duration-300 hover:scale-105 group"
          >
            Prenota Ora
            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ChiSiamo;

import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Instagram, ShieldCheck, Zap, MapPin } from "lucide-react";

const ChiSiamo = () => {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="bg-[#050505] text-white selection:bg-gold selection:text-black">
      
      {/* 1. CINEMATIC HERO */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image/Video Placeholder */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80" 
            alt="Aggressive Supercar" 
            className="w-full h-full object-cover opacity-50 scale-105 animate-[pulse_10s_ease-in-out_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/60 to-[#050505]" />
        </div>
        
        {/* Giant Overlay Typography */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center pt-20 pointer-events-none">
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="text-gold font-bold tracking-[0.5em] uppercase text-sm mb-6 drop-shadow-lg"
          >
            L'Attitudine KS Rent
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
            className="text-[12vw] leading-none font-display font-black text-white/90 tracking-tighter text-center mix-blend-overlay drop-shadow-2xl"
          >
            DOMINA
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
            className="text-[12vw] leading-none font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-gold to-yellow-600 tracking-tighter text-center"
          >
            LA STRADA
          </motion.p>
        </div>
      </section>

      {/* 2. LE REGOLE D'ORO (Hover Accordion Gallery) */}
      <section className="py-24 bg-[#050505]">
        <div className="container mx-auto px-4 mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-black mb-6">Il Nostro <span className="text-gold">DNA</span></h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Nessun compromesso. Abbiamo distrutto le vecchie regole del noleggio per darti esattamente ciò che cerchi: pura libertà in Costa Smeralda.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="w-full max-w-[1400px] mx-auto h-[600px] md:h-[700px] flex flex-col md:flex-row gap-2 px-4">
          
          {/* Panel 1 */}
          <div className="relative flex-1 md:hover:flex-[3] transition-all duration-700 ease-in-out overflow-hidden rounded-3xl group cursor-crosshair">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700" alt="Fiducia" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            
            <div className="absolute bottom-0 left-0 p-8 w-full md:w-[600px] flex flex-col justify-end h-full">
              <ShieldCheck size={40} className="text-gold mb-6 md:scale-75 group-hover:scale-100 transition-transform duration-700 origin-bottom-left" />
              <h3 className="text-3xl md:text-5xl font-display font-black mb-4 whitespace-nowrap">Nessuna Carta.</h3>
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-700 ease-in-out">
                <p className="overflow-hidden text-white/70 text-lg">
                  La burocrazia è il nemico del viaggio. Da noi non serve la carta di credito. Non guardiamo il tuo score bancario. Lavoriamo sulla fiducia, per farti salire a bordo in 5 minuti netti.
                </p>
              </div>
            </div>
          </div>

          {/* Panel 2 */}
          <div className="relative flex-1 md:hover:flex-[3] transition-all duration-700 ease-in-out overflow-hidden rounded-3xl group cursor-crosshair">
            <img src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700" alt="Flotta" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            
            <div className="absolute bottom-0 left-0 p-8 w-full md:w-[600px] flex flex-col justify-end h-full">
              <Zap size={40} className="text-gold mb-6 md:scale-75 group-hover:scale-100 transition-transform duration-700 origin-bottom-left" />
              <h3 className="text-3xl md:text-5xl font-display font-black mb-4 whitespace-nowrap">Flotta Estrema.</h3>
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-700 ease-in-out">
                <p className="overflow-hidden text-white/70 text-lg">
                  Solo il meglio per la Costa Smeralda. Dalle auto compatte alle supercar fino ai quad aggressivi. Veicoli costantemente igienizzati, tagliandati e pronti a divorare l'asfalto.
                </p>
              </div>
            </div>
          </div>

          {/* Panel 3 */}
          <div className="relative flex-1 md:hover:flex-[3] transition-all duration-700 ease-in-out overflow-hidden rounded-3xl group cursor-crosshair">
            <img src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700" alt="Olbia" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            
            <div className="absolute bottom-0 left-0 p-8 w-full md:w-[600px] flex flex-col justify-end h-full">
              <MapPin size={40} className="text-gold mb-6 md:scale-75 group-hover:scale-100 transition-transform duration-700 origin-bottom-left" />
              <h3 className="text-3xl md:text-5xl font-display font-black mb-4 whitespace-nowrap">Sedi a Olbia.</h3>
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-700 ease-in-out">
                <p className="overflow-hidden text-white/70 text-lg">
                  Siamo radicati nel territorio. Con una sede legale e una sede operativa strategica a Olbia, ti offriamo un'assistenza fulminea 24 ore su 24, 7 giorni su 7, ovunque tu sia sull'isola.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. INSTAGRAM (The Film-Strip Marquee) */}
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden flex flex-col justify-center min-h-[70vh]">
        
        {/* CSS Animation for continuous scroll */}
        <style>
          {`
            @keyframes film-strip {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-film {
              display: flex;
              width: max-content;
              animation: film-strip 30s linear infinite;
            }
          `}
        </style>

        {/* Background Film Strip */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-[200vw] -rotate-3 scale-110 opacity-60">
          <div className="animate-film gap-4">
            {[
              "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1503376713217-495860714246?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1599818817478-f60ae05bcbe4?auto=format&fit=crop&q=80",
            ].map((img, i) => (
              <img key={i} src={img} alt="Insta" className="w-[300px] h-[400px] md:w-[400px] md:h-[500px] object-cover rounded-3xl filter grayscale hover:grayscale-0 transition-all duration-500" />
            ))}
            {/* Duplicated for infinite effect */}
            {[
              "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1503376713217-495860714246?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1599818817478-f60ae05bcbe4?auto=format&fit=crop&q=80",
            ].map((img, i) => (
              <img key={`dup-${i}`} src={img} alt="Insta" className="w-[300px] h-[400px] md:w-[400px] md:h-[500px] object-cover rounded-3xl filter grayscale hover:grayscale-0 transition-all duration-500" />
            ))}
          </div>
        </div>

        {/* Central Frosted Glass CTA */}
        <div className="relative z-10 container mx-auto px-4 flex justify-center">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="bg-black/40 backdrop-blur-xl border border-white/10 p-12 md:p-16 rounded-[3rem] text-center max-w-2xl shadow-2xl"
          >
            <div className="w-16 h-16 bg-gradient-to-tr from-gold to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(212,175,55,0.5)]">
              <Instagram size={32} className="text-black" />
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-black mb-4">Vivi il Momento.</h2>
            <p className="text-white/70 mb-10 text-lg">Entra nella nostra community. Guarda i nostri veicoli in azione e preparati alla tua prossima avventura sarda.</p>
            <a 
              href="https://instagram.com/ksrent_srl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-gold transition-colors duration-300 group"
            >
              @ksrent_srl <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 4. FINAL AGGRESSIVE CTA */}
      <section className="py-32 bg-[#050505] text-center px-4 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-gold/10 blur-[150px] pointer-events-none" />
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-display font-black mb-8 leading-none">
            IL QUADRO È <span className="text-transparent bg-clip-text bg-gradient-to-b from-gold to-yellow-600">ACCESO.</span>
          </h2>
          <p className="text-white/50 mb-12 text-xl font-light">
            Scegli il veicolo, blocca le date. Il tuo viaggio in Costa Smeralda inizia qui, senza burocrazia.
          </p>
          <Link
            to="/prenotaora"
            className="inline-flex items-center justify-center gap-4 bg-gradient-to-r from-gold to-yellow-600 text-black px-14 py-6 rounded-full font-black uppercase tracking-[0.2em] hover:scale-105 transition-transform duration-300 shadow-[0_0_50px_rgba(212,175,55,0.4)] group"
          >
            Prenota Ora
            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </section>

    </div>
  );
};

export default ChiSiamo;
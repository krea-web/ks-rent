import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Ship, ShieldCheck, CreditCard, Smartphone, Zap, Star, Gauge } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// FAQ con identificazione delle "Domande Oro" (f.gold) per risaltare visivamente
const faqs = [
  {
    q: "Dove ritirare l'auto al Porto di Olbia?",
    a: "La nostra sede operativa si trova in Viale Isola Bianca 38, esattamente al Porto di Olbia Isola Bianca. Appena sbarchi dal traghetto, il tuo veicolo sarà pronto ad aspettarti a pochi metri. Nessuna navetta, nessuna attesa, nessuna perdita di tempo.",
    gold: true,
  },
  {
    q: "Serve la carta di credito per noleggiare?",
    a: "No, KS Rent non impone l'obbligo di carta di credito tradizionale. Accettiamo carte prepagate, bancomat, carte di debito e contanti. Il deposito cauzionale è flessibile e varia in base al veicolo scelto.",
    gold: true,
  },
  {
    q: "Posso prenotare online in totale autonomia?",
    a: "Assolutamente sì. La nostra piattaforma è concepita per il Self-Booking 100% online. Scegli il veicolo, seleziona le date e conferma in pochi minuti. Riceverai subito la conferma e le istruzioni per il ritiro.",
    gold: false,
  },
  {
    q: "Come funziona il deposito cauzionale?",
    a: "Il deposito cauzionale viene gestito in modo chiaro e trasparente al momento del ritiro. L'importo, proporzionato alla categoria del veicolo scelto, serve a garantire la cura della nostra flotta premium.",
    gold: false,
  },
  {
    q: "Quali veicoli sono disponibili al Porto?",
    a: "Al Porto di Olbia offriamo l'intera gamma KS Rent: auto sportive, supercar, SUV premium, moto e quad. Ogni veicolo è perfetto per iniziare la tua avventura in Costa Smeralda dal momento del tuo sbarco.",
    gold: false,
  },
];

const NoleggioPortoOlbia = () => {
  // Varianti per animazioni staggered
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <div className="bg-[#050505] text-white selection:bg-gold selection:text-black overflow-x-hidden font-sans pt-24 md:pt-32">
      <SEOHead
        title="Noleggio Auto Porto Olbia Isola Bianca | Supercar e SUV | KS Rent"
        description="Arrivi in traghetto a Olbia? Noleggia la tua auto sportiva, SUV o moto direttamente al Porto Isola Bianca con KS Rent. Sede operativa allo sbarco, zero attese, nessun obbligo di carta di credito. Prenota online."
        canonical="https://www.ksrentsardinia.com/noleggio-auto-porto-olbia"
        keywords="noleggio auto porto olbia, autonoleggio porto olbia isola bianca, rent a car porto olbia, noleggio auto senza carta di credito olbia porto, noleggio SUV porto olbia, noleggio supercar porto olbia, ks rent porto olbia"
      />

      {/* HERO SECTION - REINVENTATA E "NAVBAR-SAFE" */}
      <section className="relative min-h-[80vh] flex flex-col justify-center pb-24 px-4 md:px-12 lg:px-24">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.35 }}
            transition={{ duration: 1.8 }}
            src="https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/MERCEDES/ksrent-noleggio-mercedesclassea180d.webp"
            alt="Noleggio Auto Lusso Porto Olbia Isola Bianca"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 max-w-6xl">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }}>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gold/10 border border-gold/30 mb-10 backdrop-blur-xl">
              <Ship className="text-gold w-5 h-5" />
              <span className="text-gold text-xs uppercase tracking-[0.5em] font-black">Porto Isola Bianca Olbia</span>
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-9xl font-display font-black leading-[0.85] tracking-tighter mb-10 italic uppercase outline-text">
              Sbarca e <br />
              <span className="text-white">Guida il Sogno</span>
            </h1>

            <p className="text-lg md:text-2xl text-white/80 font-light max-w-3xl mb-12 leading-relaxed">
              Dimentica code e navette. Con KS Rent la tua auto premium ti aspetta
              <span className="text-gold font-bold"> esattamente allo sbarco </span> del traghetto. Prenotazione 100%
              online, massima flessibilità.
            </p>

            <Link
              to="/prenotaora"
              className="inline-flex items-center gap-4 bg-gold text-black px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-white transition-all duration-500 shadow-[0_0_50px_rgba(212,175,55,0.4)] text-lg"
            >
              Verifica Disponibilità <ArrowRight size={22} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* INTRO TEXT SECTION - SEO & BRANDING */}
      <section className="py-24 px-4 md:px-12 lg:px-24 bg-[#050505] border-y border-white/5 relative">
        <div className="absolute inset-0 bg-gold/5 blur-[150px] rounded-full translate-x-1/2" />
        <div className="max-w-5xl mx-auto text-center md:text-left relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-6">
              La tua Chiave per la Sardegna
            </h2>
            <p className="text-2xl md:text-4xl font-light leading-snug text-white/90 mb-10">
              Benvenuto al Porto di Olbia. KS Rent è l'autonoleggio che ti libera dalle attese. Sede operativa in{" "}
              <strong className="text-gold">Viale Isola Bianca 38</strong>, a pochi metri dai traghetti.
            </p>
            <div className="h-px w-32 bg-gold mb-10 mx-auto md:mx-0" />
            <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-4xl">
              Offriamo un'esperienza premium con consegna del veicolo immediata al tuo sbarco. Risparmia tempo
              prenotando in <strong>totale autonomia dal nostro sito</strong>: gestiamo depositi cauzionali flessibili e
              accettiamo pagamenti <strong>senza obbligo di carta di credito</strong>. La nostra flotta al porto include
              supercar, SUV, sportive, moto e quad — tutto ciò che serve per vivere la Costa Smeralda dal primo istante.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FEATURED CAR SPOTLIGHT - MERCEDES CLASSE A */}
      <section className="py-28 relative px-4 md:px-12 lg:px-24 bg-[#0a0a0a] overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gold/10 blur-[130px] rounded-full scale-125 animate-pulse" />
            <motion.img
              initial={{ x: -120, opacity: 0, scale: 0.9 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              src="https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/MERCEDES/ksrent-mercedessupercarclassea180d.png"
              className="relative z-10 w-full h-auto drop-shadow-[0_40px_80px_rgba(0,0,0,0.9)]"
              alt="Noleggio Mercedes Classe A Olbia Porto KS Rent"
            />
          </div>
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="flex items-center gap-3 mb-5 justify-center lg:justify-start">
              <Zap className="text-gold w-6 h-6" />
              <span className="text-gold font-bold tracking-[0.4em] text-xs uppercase italic">Porto Spotlight</span>
            </div>
            <h3 className="text-4xl md:text-7xl font-black mb-8 italic uppercase tracking-tighter leading-none text-white outline-text-gold">
              Mercedes <br />
              <span className="text-white">Classe A Premium</span>
            </h3>
            <p className="text-white/60 text-xl mb-12 italic font-light leading-relaxed">
              "L'eleganza incontra la praticità. La compagna perfetta per esplorare le calette più nascoste della Costa
              Smeralda, pronta al tuo sbarco."
            </p>
            <div className="grid grid-cols-2 gap-8 mb-12 max-w-sm mx-auto lg:mx-0">
              <div className="flex items-center gap-4 justify-center lg:justify-start bg-white/5 p-4 rounded-xl border border-white/10">
                <Gauge className="text-gold w-7 h-7" />
                <div>
                  <p className="text-2xl font-black text-white italic">Sport</p>
                  <p className="text-[10px] uppercase text-gold tracking-widest font-bold">Driving Mode</p>
                </div>
              </div>
              <div className="flex items-center gap-4 justify-center lg:justify-start bg-white/5 p-4 rounded-xl border border-white/10">
                <Star className="text-gold w-7 h-7" />
                <div>
                  <p className="text-2xl font-black text-white italic">Premium</p>
                  <p className="text-[10px] uppercase text-gold tracking-widest font-bold">Interior</p>
                </div>
              </div>
            </div>
            <Link
              to="/prenotaora"
              className="inline-flex items-center gap-4 text-white font-black uppercase tracking-widest text-sm group"
            >
              Scopri la flotta{" "}
              <ArrowRight className="group-hover:translate-x-3 transition-transform text-gold duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* BEAUTIFIED SERVICE CARDS - GLASSMORPHISM */}
      <section className="py-28 px-4 md:px-12 lg:px-24 bg-[#050505]">
        <div className="text-center mb-16">
          <h2 className="text-gold font-bold tracking-[0.4em] uppercase text-xs mb-4 italic">KS Rent Advantage</h2>
          <h3 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-white">
            Noleggio Senza Compromessi
          </h3>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto"
        >
          {[
            {
              icon: Smartphone,
              title: "Self Booking",
              desc: "Prenotazione concepita per essere 100% online, rapida e autonoma.",
            },
            {
              icon: CreditCard,
              title: "Zero Vincoli",
              desc: "Nessun obbligo di carta di credito. Accettiamo prepagate, debito e contanti.",
            },
            {
              icon: ShieldCheck,
              title: "Cauzione Safe",
              desc: "Depositi cauzionali flessibili e proporzionati alla categoria del veicolo.",
            },
            {
              icon: Ship,
              title: "Sede allo Sbarco",
              desc: "Ufficio reale in Viale Isola Bianca 38. Ritiri l'auto in 5 minuti.",
            },
          ].map((s, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -12, borderColor: "hsl(var(--gold)/0.5)", backgroundColor: "hsl(var(--gold)/0.03)" }}
              className="relative p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/10 overflow-hidden group transition-all duration-500 backdrop-blur-sm"
            >
              <div className="absolute -right-6 -top-6 w-28 h-28 bg-gold/5 rounded-full blur-3xl group-hover:bg-gold/15 transition-all duration-500" />
              <s.icon className="text-gold w-14 h-14 mb-8 group-hover:scale-110 transition-transform duration-500" />
              <h4 className="text-2xl font-black mb-4 uppercase italic tracking-tighter text-white group-hover:text-gold transition-colors">
                {s.title}
              </h4>
              <p className="text-white/40 text-base leading-relaxed font-light group-hover:text-white/70 transition-colors">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FAQ SECTION - CON DOMANDE ORO */}
      <section className="py-28 px-4 md:px-12 lg:px-24 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-18">
            <h2 className="text-gold font-bold tracking-[0.4em] uppercase text-[10px] mb-4 italic">
              Concierge Desk Porto
            </h2>
            <h3 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-white">
              Domande Frequenti
            </h3>
          </div>

          <Accordion type="single" collapsible className="space-y-5">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-none">
                <AccordionTrigger
                  className={`
                  px-8 py-7 rounded-2xl md:rounded-[2rem] transition-all text-left font-bold italic uppercase tracking-tight
                  ${f.gold ? "bg-gold/10 border border-gold/40 text-gold shadow-[0_0_25px_rgba(212,175,55,0.15)]" : "bg-white/5 border border-white/10 text-white hover:bg-white/10"}
                `}
                >
                  <div className="flex items-center gap-5">
                    {f.gold && <Star className="w-5 h-5 fill-gold text-gold animate-pulse" />}
                    {f.q}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-10 pt-8 pb-10 text-white/60 leading-relaxed font-light text-base md:text-lg italic border-x border-b border-white/5 rounded-b-[2rem] -mt-5 bg-[#080808]/50">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA - MEMORABILE */}
      <section className="py-36 px-4 text-center bg-gradient-to-t from-gold/15 to-transparent relative overflow-hidden">
        <div className="absolute inset-0 bg-gold/5 blur-[150px] rounded-full translate-y-1/2" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <h2 className="text-6xl md:text-9xl font-black mb-12 italic uppercase tracking-tighter leading-none text-white outline-text">
            SBARCA E <br />
            <span className="text-gold">ACCENDI IL SOGNO</span>
          </h2>
          <p className="text-white/70 text-xl md:text-2xl max-w-2xl mx-auto mb-16 font-light leading-relaxed">
            La tua supercar è pronta a pochi metri dal tuo traghetto. Non farti aspettare.
          </p>
          <Link
            to="/prenotaora"
            className="inline-flex items-center gap-4 bg-white text-black px-14 py-6 rounded-full font-black uppercase tracking-widest hover:bg-gold transition-all duration-500 text-xl shadow-2xl hover:scale-105"
          >
            Scegli il Veicolo <ArrowRight size={24} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default NoleggioPortoOlbia;

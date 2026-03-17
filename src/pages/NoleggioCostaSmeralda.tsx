import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { ArrowRight, MapPin, ShieldCheck, CreditCard, Smartphone, Palmtree, Star, Zap, Gauge } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Consegnate l'auto in Hotel o in Villa privata?",
    a: "Assolutamente sì. KS Rent offre un servizio Concierge completo: consegniamo il veicolo su misura esattamente dove desideri, che sia il tuo Hotel, una Villa privata a Porto Cervo, o il Ristorante dove stai cenando. Massima comodità, zero stress.",
    gold: true,
  },
  {
    q: "Serve la carta di credito per noleggiare?",
    a: "No, non è obbligatoria. KS Rent abbatte le barriere del noleggio tradizionale accettando carte prepagate, bancomat, carte di debito e contanti. Il deposito cauzionale è flessibile e viene calcolato in base al veicolo.",
    gold: true,
  },
  {
    q: "Quali veicoli sono disponibili in Costa Smeralda?",
    a: "La nostra flotta premium comprende supercar, auto sportive, SUV di lusso e quad, ideali per esplorare Porto Cervo, San Pantaleo, Porto Rotondo e le spiagge più esclusive della costa.",
    gold: false,
  },
  {
    q: "In quali località della Costa Smeralda consegnate?",
    a: "Copriamo capillarmente la Costa Smeralda e la Gallura: da Porto Cervo a San Teodoro, passando per San Pantaleo, Porto Rotondo, Baja Sardinia, Cannigione, Arzachena e Palau. Arriviamo ovunque tu sia.",
    gold: false,
  },
  {
    q: "Come funziona la prenotazione online?",
    a: "Il nostro sistema di booking è progettato per essere autonomo e immediato. Scegli la tua supercar, seleziona date e location di consegna, e ricevi la conferma istantanea senza bisogno di telefonate.",
    gold: false,
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRental",
  name: "KS Rent — Noleggio Auto Costa Smeralda",
  description:
    "Noleggio auto di lusso in Costa Smeralda. Supercar, SUV e quad con consegna su misura in Hotel, Villa o Ristorante. Porto Cervo, San Pantaleo, Porto Rotondo.",
  url: "https://www.ksrentsardinia.com/noleggio-auto-costa-smeralda",
  telephone: "+393446107071",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Viale Isola Bianca 38",
    addressLocality: "Olbia",
    postalCode: "07026",
    addressRegion: "SS",
    addressCountry: "IT",
  },
  areaServed: [
    { "@type": "Place", name: "Costa Smeralda" },
    { "@type": "Place", name: "Porto Cervo" },
    { "@type": "Place", name: "San Pantaleo" },
    { "@type": "Place", name: "Porto Rotondo" },
    { "@type": "Place", name: "Baja Sardinia" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const NoleggioCostaSmeralda = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7 } },
  };

  return (
    <div className="bg-[#050505] text-white selection:bg-gold selection:text-black overflow-x-hidden font-sans pt-24 md:pt-32">
      <SEOHead
        title="Noleggio Auto Costa Smeralda | Porto Cervo | KS Rent"
        description="Noleggio supercar e SUV in Costa Smeralda. Consegna in hotel o villa a Porto Cervo, San Pantaleo e Porto Rotondo. Prenota online."
        canonical="https://www.ksrentsardinia.com/noleggio-auto-costa-smeralda"
        keywords="noleggio auto costa smeralda, noleggio auto porto cervo, noleggio supercar costa smeralda, noleggio SUV porto rotondo, rent a car costa smeralda, noleggio auto san pantaleo, luxury rent car sardegna, rent a car porto cervo, consegna auto porto cervo, noleggio auto lusso olbia, noleggio supercar olbia"
        jsonLd={[jsonLd, faqJsonLd]}
      />

      {/* HERO SECTION */}
      <section className="relative min-h-[80vh] flex flex-col justify-center pb-24 px-4 md:px-12 lg:px-24">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 1.8 }}
            src="https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/BMW/ksrent-noleggio-bmwm2.webp"
            alt="Noleggio Auto Lusso Costa Smeralda KS Rent"
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
              <Palmtree className="text-gold w-5 h-5" />
              <span className="text-gold text-xs uppercase tracking-[0.5em] font-black">Costa Smeralda Lifestyle</span>
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-9xl font-display font-black leading-[0.85] tracking-tighter mb-10 italic uppercase outline-text">
              Noleggio Auto <br />
              <span className="text-gold">Costa Smeralda</span>
            </h1>

            <p className="text-lg md:text-2xl text-white/80 font-light max-w-3xl mb-12 leading-relaxed">
              Esplora Porto Cervo e la Gallura a bordo di una Supercar. Te la consegniamo noi
              <span className="text-gold font-bold"> direttamente in Hotel o in Villa</span>.
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

      {/* INTRO TEXT SECTION */}
      <section className="py-24 px-4 md:px-12 lg:px-24 bg-[#050505] border-y border-white/5 relative">
        <div className="absolute inset-0 bg-gold/5 blur-[150px] rounded-full translate-x-1/2" />
        <div className="max-w-5xl mx-auto text-center md:text-left relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="block text-gold font-bold tracking-[0.3em] uppercase text-xs mb-6">Un Servizio Concierge</span>
            <h2 className="text-3xl md:text-5xl font-display font-black mb-8 italic uppercase tracking-tighter">
              Noleggio Auto di Lusso <span className="text-gold">in Costa Smeralda e Porto Cervo</span>
            </h2>
            <p className="text-2xl md:text-3xl font-light leading-snug text-white/90 mb-10">
              Vivi la vera essenza della <strong className="text-gold">Costa Smeralda</strong> senza compromessi. KS
              Rent ti offre un servizio di noleggio auto sartoriale.
            </p>
            <div className="h-px w-32 bg-gold mb-10 mx-auto md:mx-0" />
            <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-4xl">
              Che tu alloggi a <strong>Porto Cervo, San Pantaleo, o Porto Rotondo</strong>, un nostro addetto porterà il
              veicolo esattamente dove desideri: nella tua Villa, nel parcheggio del tuo Hotel o fuori dal tuo
              ristorante preferito. Prenota in totale autonomia dal nostro sito con{" "}
              <strong>depositi cauzionali flessibili e nessun obbligo di carta di credito</strong>. La vacanza inizia
              alle tue regole. Ritira anche al{" "}
              <Link to="/noleggio-auto-porto-olbia" className="text-gold underline hover:text-white transition-colors">Porto di Olbia</Link> o all'{" "}
              <Link to="/noleggio-auto-aeroporto-olbia" className="text-gold underline hover:text-white transition-colors">Aeroporto di Olbia</Link>.
              Scopri anche il nostro{" "}
              <Link to="/noleggio-auto-senza-carta-di-credito-olbia" className="text-gold underline hover:text-white transition-colors">noleggio senza carta di credito</Link>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FEATURED CAR SPOTLIGHT - BMW M2 */}
      <section className="py-28 relative px-4 md:px-12 lg:px-24 bg-[#0a0a0a] overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gold/10 blur-[130px] rounded-full scale-125 animate-pulse" />
            <motion.img
              initial={{ x: -120, opacity: 0, scale: 0.9 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true, amount: 0.3 }}
              src="https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/BMW/ksrent-bmwm2-maschera.webp"
              className="relative z-10 w-full h-auto drop-shadow-[0_40px_80px_rgba(0,0,0,0.9)]"
              alt="Noleggio BMW M2 Costa Smeralda KS Rent"
            />
          </div>
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="flex items-center gap-3 mb-5 justify-center lg:justify-start">
              <Zap className="text-gold w-6 h-6" />
              <span className="text-gold font-bold tracking-[0.4em] text-xs uppercase italic">
                Costa Smeralda Spotlight
              </span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black mb-8 italic uppercase tracking-tighter leading-none text-white outline-text-gold">
              Noleggio BMW M2 <br />
              <span className="text-white">Costa Smeralda</span>
            </h2>
            <p className="text-white/60 text-xl mb-12 italic font-light leading-relaxed">
              "Linee muscolose, trazione posteriore e pura adrenalina. L'auto perfetta per affrontare le curve
              panoramiche mozzafiato da Olbia a Porto Cervo."
            </p>
            <div className="grid grid-cols-2 gap-8 mb-12 max-w-sm mx-auto lg:mx-0">
              <div className="flex items-center gap-4 justify-center lg:justify-start bg-white/5 p-4 rounded-xl border border-white/10">
                <Gauge className="text-gold w-7 h-7" />
                <div>
                  <p className="text-2xl font-black text-white italic">460</p>
                  <p className="text-[10px] uppercase text-gold tracking-widest font-bold">Cavalli</p>
                </div>
              </div>
              <div className="flex items-center gap-4 justify-center lg:justify-start bg-white/5 p-4 rounded-xl border border-white/10">
                <Star className="text-gold w-7 h-7" />
                <div>
                  <p className="text-2xl font-black text-white italic">RWD</p>
                  <p className="text-[10px] uppercase text-gold tracking-widest font-bold">Trazione</p>
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

      {/* SERVICE CARDS */}
      <section className="py-28 px-4 md:px-12 lg:px-24 bg-[#050505]">
        <div className="text-center mb-16">
          <span className="block text-gold font-bold tracking-[0.4em] uppercase text-xs mb-4 italic">Standard KS Rent</span>
          <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-white">
            Servizi Noleggio Auto <span className="text-gold">Costa Smeralda</span>
          </h2>
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
              icon: MapPin,
              title: "Delivery VIP",
              desc: "Consegniamo e ritiriamo la tua auto direttamente in Villa o in Hotel.",
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
              icon: Smartphone,
              title: "Self Booking",
              desc: "Prenotazione concepita per essere 100% online, rapida e autonoma.",
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
              <h3 className="text-2xl font-black mb-4 uppercase italic tracking-tighter text-white group-hover:text-gold transition-colors">
                {s.title}
              </h3>
              <p className="text-white/40 text-base leading-relaxed font-light group-hover:text-white/70 transition-colors">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* LOCALITÀ PILLS */}
      <section className="py-16 px-4 md:px-12 lg:px-24 bg-[#050505]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto text-center"
        >
          <h2 className="text-xl md:text-3xl font-display font-bold mb-8 text-white/80 italic">
            Consegna Auto in Tutta la <span className="text-gold">Gallura e Costa Smeralda</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Porto Cervo",
              "San Pantaleo",
              "Porto Rotondo",
              "Baja Sardinia",
              "Cannigione",
              "Arzachena",
              "Palau",
              "San Teodoro",
            ].map((loc) => (
              <span
                key={loc}
                className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gold text-sm md:text-base font-bold uppercase tracking-widest hover:bg-gold/10 hover:border-gold/30 transition-all cursor-default"
              >
                {loc}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-28 px-4 md:px-12 lg:px-24 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-18">
            <span className="block text-gold font-bold tracking-[0.4em] uppercase text-[10px] mb-4 italic">
              Concierge Desk Costa Smeralda
            </span>
            <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-white">
              Domande Frequenti <span className="text-gold">Noleggio Costa Smeralda</span>
            </h2>
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

      {/* SEO RICH TEXT */}
      <section className="py-24 px-4 md:px-12 lg:px-24 bg-[#050505]">
        <div className="max-w-4xl mx-auto">
          <span className="block text-gold font-bold tracking-[0.3em] uppercase text-xs mb-6">Guida Completa</span>
          <h2 className="text-3xl md:text-5xl font-display font-black mb-10 italic uppercase tracking-tighter">
            Guida al Noleggio Auto <span className="text-gold">in Costa Smeralda</span>
          </h2>

          <div className="space-y-6 text-white/60 text-base md:text-lg leading-relaxed font-light">
            <p>
              La <strong className="text-white/80">Costa Smeralda</strong> è una delle destinazioni più esclusive del Mediterraneo. Fondata negli anni '60 dal Principe Aga Khan, questo tratto di costa nord-orientale della Sardegna si estende da Porto Rotondo fino a Baja Sardinia, passando per Porto Cervo, Cala di Volpe, Romazzino e Liscia Ruja. Le sue spiagge di sabbia bianchissima, le acque turchesi e i porti turistici di lusso attirano ogni anno migliaia di visitatori internazionali, celebrità e appassionati di lifestyle premium.
            </p>
            <p>
              <strong className="text-white/80">Perché noleggiare un'auto in Costa Smeralda?</strong> Semplice: molte delle spiagge e delle calette più belle non sono raggiungibili con i mezzi pubblici. La litoranea da Olbia a Palau è considerata una delle strade panoramiche più spettacolari d'Italia, con curve che si affacciano su baie nascoste e promontori di granito rosa. Guidare una supercar o una sportiva su queste strade è un'esperienza che trasforma una vacanza in un ricordo indimenticabile. Da Porto Cervo a San Pantaleo — il borgo hipster della Gallura con le sue boutique e i ristoranti stellati — ogni chilometro è un invito a scoprire qualcosa di nuovo.
            </p>
            <p>
              Il servizio <strong className="text-white/80">Concierge KS Rent</strong> è stato pensato per chi non vuole perdere neanche un minuto della propria vacanza. Ti consegniamo il veicolo esattamente dove ti trovi: nella hall del tuo Hotel a Porto Cervo, nel parcheggio della tua Villa privata ad Abbiadori, al ristorante dove stai cenando ad Arzachena o persino al marina di Poltu Quatu. Il ritiro avviene allo stesso modo: basta una chiamata e un nostro addetto verrà a prendere l'auto dove preferisci. Nessuno spostamento, nessun taxi, nessuna perdita di tempo.
            </p>
            <p>
              La nostra flotta dedicata alla Costa Smeralda include i veicoli più desiderati: dall'<strong className="text-white/80">Audi RS3</strong> alla <strong className="text-white/80">BMW M2</strong>, dai SUV di ultima generazione ai quad per le strade sterrate che portano alle spiagge segrete. Tutto disponibile <strong className="text-white/80">senza obbligo di carta di credito</strong> — una rarità nel mondo del noleggio auto di lusso. Accettiamo prepagate, bancomat e contanti. Prenota in autonomia dal sito e ricevi la conferma in pochi minuti. Per chi arriva in Sardegna, offriamo anche il ritiro all'{" "}
              <Link to="/noleggio-auto-aeroporto-olbia" className="text-gold underline hover:text-white transition-colors">Aeroporto di Olbia</Link> e al{" "}
              <Link to="/noleggio-auto-porto-olbia" className="text-gold underline hover:text-white transition-colors">Porto Isola Bianca</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* SEO KEYWORD SECTION */}
      <section className="py-16 px-4 md:px-12 max-w-7xl mx-auto text-white/80 font-light leading-relaxed">
        <h2 className="text-3xl font-bold text-white mb-6">Esplora con il nostro Noleggio Auto in Costa Smeralda</h2>
        <p className="mb-4">
          Vivi la magia del nord Sardegna a bordo di veicoli perfetti per l'occasione. Il nostro servizio di <strong>noleggio auto in Costa Smeralda</strong> ti accompagna dalle spiagge cristalline fino alle serate più glamour. Se soggiorni nel cuore della movida, approfitta del nostro esclusivo <strong>noleggio auto a Porto Cervo</strong>.
        </p>
        <p>
          Garantiamo la massima comodità con il servizio VIP di <strong>consegna auto a Porto Cervo</strong>: portiamo il veicolo direttamente alla tua villa, hotel o yacht. Per i nostri clienti internazionali, offriamo un servizio <strong>rent a car in Porto Cervo</strong> impareggiabile per qualità e discrezione.
        </p>
      </section>

      {/* FINAL CTA */}
      <section className="py-36 px-4 text-center bg-gradient-to-t from-gold/15 to-[#050505] relative overflow-hidden">
        <div className="absolute inset-0 bg-gold/5 blur-[150px] rounded-full translate-y-1/2" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <h2 className="text-6xl md:text-9xl font-black mb-12 italic uppercase tracking-tighter leading-none text-white outline-text">
            LA COSTA <br />
            <span className="text-gold">TI ASPETTA</span>
          </h2>
          <p className="text-white/70 text-xl md:text-2xl max-w-2xl mx-auto mb-16 font-light leading-relaxed">
            Prenota il tuo veicolo e ricevilo esattamente dove desideri. Massima libertà, zero pensieri.
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

export default NoleggioCostaSmeralda;

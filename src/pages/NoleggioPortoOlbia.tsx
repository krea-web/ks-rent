import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Ship, ShieldCheck, CreditCard, Smartphone, Zap, Star, Gauge } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { portoFaqJsonLd } from "@/lib/jsonLd";

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
  return (
    <div className="bg-[#050505] text-white selection:bg-gold selection:text-black overflow-x-hidden">
      <SEOHead
        title="Noleggio Auto Porto Olbia Isola Bianca | Supercar e SUV | KS Rent"
        description="Arrivi in traghetto a Olbia? Noleggia la tua auto sportiva, SUV o moto direttamente al Porto Isola Bianca con KS Rent. Sede operativa allo sbarco, zero attese, nessun obbligo di carta di credito. Prenota online."
        canonical="https://www.ksrentsardinia.com/noleggio-auto-porto-olbia"
        keywords="noleggio auto porto olbia, autonoleggio porto olbia isola bianca, rent a car porto olbia, noleggio auto senza carta di credito olbia porto, noleggio SUV porto olbia, noleggio supercar porto olbia, ks rent porto olbia"
        jsonLd={[portoFaqJsonLd]}
      />

      {/* HERO */}
      <section className="relative min-h-[85vh] flex flex-col justify-center pt-32 pb-16 px-4 md:px-12 lg:px-24">
        <div className="absolute inset-0 z-0">
          <img
            src="https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/MERCEDES/ksrent-noleggio-mercedesclassea180d.webp"
            alt="Noleggio Auto Lusso Porto Olbia Isola Bianca"
            className="w-full h-full object-cover opacity-40 scale-105"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="relative z-10 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-8 backdrop-blur-xl">
              <Ship className="text-gold w-4 h-4" />
              <span className="text-gold text-[10px] md:text-xs uppercase tracking-[0.4em] font-black">
                Porto Isola Bianca Olbia
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-9xl font-display font-black leading-[0.85] tracking-tighter mb-8 italic uppercase">
              SBARCA E <br />
              <span className="text-white">GUIDA IL SOGNO</span>
            </h1>

            <p className="text-lg md:text-2xl text-white/80 font-light max-w-2xl mb-12 leading-relaxed">
              Dimentica code e navette. Con KS Rent la tua auto premium ti aspetta
              <span className="text-gold font-bold"> esattamente allo sbarco </span> del traghetto.
            </p>

            <Link
              to="/prenotaora"
              className="inline-flex items-center gap-4 bg-gold text-black px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-white transition-all duration-500 shadow-[0_0_50px_rgba(212,175,55,0.4)]"
            >
              Verifica Disponibilità <ArrowRight size={22} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* INTRO TEXT */}
      <section className="py-20 px-4 md:px-12 lg:px-24 bg-[#050505]">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-6">La tua Chiave per la Sardegna</h2>
            <p className="text-xl md:text-3xl font-light leading-relaxed text-white/90 mb-8">
              Benvenuto al Porto di Olbia. KS Rent è l'autonoleggio che ti libera dalle attese. Sede operativa in{" "}
              <strong className="text-gold">Viale Isola Bianca 38</strong>, a pochi metri dai traghetti.
            </p>
            <div className="h-px w-24 bg-gold mb-8 mx-auto md:mx-0" />
            <p className="text-white/60 text-lg leading-relaxed">
              Offriamo un'esperienza premium con consegna del veicolo immediata al tuo sbarco. Risparmia tempo
              prenotando in <strong>totale autonomia dal nostro sito</strong>: gestiamo depositi cauzionali flessibili e
              accettiamo pagamenti <strong>senza obbligo di carta di credito</strong>. La nostra flotta al porto include
              supercar, SUV, sportive, moto e quad — tutto ciò che serve per vivere la Costa Smeralda dal primo istante.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SPOTLIGHT - MERCEDES CLASSE A */}
      <section className="py-24 relative px-4 md:px-12 lg:px-24 bg-[#050505] overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gold/10 blur-[120px] rounded-full scale-150 animate-pulse" />
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              src="https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/MERCEDES/ksrent-mercedessupercarclassea180d.png"
              className="relative z-10 w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
              alt="Noleggio Mercedes Classe A Olbia Porto KS Rent"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="text-gold w-5 h-5" />
              <span className="text-gold font-bold tracking-widest text-xs uppercase italic">Porto Spotlight</span>
            </div>
            <h3 className="text-4xl md:text-6xl font-black mb-6 italic uppercase tracking-tighter">
              Mercedes <br />
              <span className="text-gold">Classe A Premium</span>
            </h3>
            <p className="text-white/50 text-lg mb-10 italic font-light">
              "L'eleganza incontra la praticità. La compagna perfetta per esplorare le calette più nascoste della Costa
              Smeralda, pronta al tuo sbarco."
            </p>
            <div className="flex gap-8 mb-10">
              <div className="text-center">
                <p className="text-2xl font-black text-white italic">Sport</p>
                <p className="text-[10px] uppercase text-gold tracking-widest font-bold">Driving Mode</p>
              </div>
              <div className="text-center border-x border-white/10 px-8">
                <p className="text-2xl font-black text-white italic">Premium</p>
                <p className="text-[10px] uppercase text-gold tracking-widest font-bold">Interior</p>
              </div>
            </div>
            <Link
              to="/prenotaora"
              className="inline-flex items-center gap-3 text-white font-black uppercase tracking-widest text-sm group"
            >
              Scopri la flotta <ArrowRight className="group-hover:translate-x-2 transition-transform text-gold" />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="py-24 px-4 md:px-12 lg:px-24 bg-[#050505]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-7xl mx-auto">
          {[
            { icon: Smartphone, title: "Self Booking", desc: "Prenotazione concepita per essere 100% online, rapida e autonoma." },
            { icon: CreditCard, title: "Zero Vincoli", desc: "Nessun obbligo di carta di credito. Accettiamo prepagate, debito e contanti." },
            { icon: ShieldCheck, title: "Cauzione Safe", desc: "Depositi cauzionali flessibili e proporzionati alla categoria del veicolo." },
            { icon: Ship, title: "Sede allo Sbarco", desc: "Ufficio reale in Viale Isola Bianca 38. Ritiri l'auto in 5 minuti." },
          ].map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="relative p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 overflow-hidden group backdrop-blur-sm"
            >
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-gold/5 rounded-full blur-2xl group-hover:bg-gold/20 transition-all" />
              <s.icon className="text-gold w-12 h-12 mb-6" />
              <h4 className="text-xl font-bold mb-3 uppercase italic tracking-tighter">{s.title}</h4>
              <p className="text-white/40 text-sm leading-relaxed font-light">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 md:px-12 lg:px-24 bg-[#050505]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-gold font-bold tracking-[0.4em] uppercase text-[10px] mb-4 italic">Concierge Desk Porto</h2>
            <h3 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-white">
              Domande Frequenti
            </h3>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-none">
                <AccordionTrigger
                  className={`
                  px-8 py-6 rounded-2xl md:rounded-[1.5rem] transition-all text-left font-bold italic uppercase tracking-tight
                  ${f.gold ? "bg-gold/10 border border-gold/30 text-gold shadow-[0_0_20px_rgba(212,175,55,0.1)]" : "bg-white/5 border border-white/10 text-white hover:bg-white/10"}
                `}
                >
                  <div className="flex items-center gap-4">
                    {f.gold && <Star className="w-4 h-4 fill-gold text-gold" />}
                    {f.q}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-10 pt-6 pb-8 text-white/50 leading-relaxed font-light text-base md:text-lg italic">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 px-4 text-center bg-[#050505]">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-black mb-10 italic uppercase tracking-tighter leading-none">
            SBARCA E <br />
            <span className="text-gold">ACCENDI IL SOGNO</span>
          </h2>
          <Link
            to="/prenotaora"
            className="inline-flex items-center gap-4 bg-white text-black px-12 py-6 rounded-full font-black uppercase tracking-widest hover:bg-gold transition-all duration-500 text-lg shadow-2xl"
          >
            Scegli il Veicolo <ArrowRight />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default NoleggioPortoOlbia;

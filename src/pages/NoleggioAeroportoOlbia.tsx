import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Plane, ShieldCheck, CreditCard, Smartphone, MapPin, Star, Zap, Gauge } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { aeroportoFaqJsonLd } from "@/lib/jsonLd";

const faqs = [
  {
    q: "Come funziona la consegna in Aeroporto?",
    a: "Ti aspettiamo direttamente agli arrivi dell'Aeroporto Costa Smeralda. Niente file o navette: la tua auto è già pronta nel parcheggio dedicato, accesa e climatizzata.",
    gold: true,
  },
  {
    q: "È possibile noleggiare senza carta di credito?",
    a: "Certamente. Accettiamo carte di debito, prepagate e contanti per il deposito cauzionale. La flessibilità è il nostro marchio di fabbrica.",
    gold: true,
  },
  {
    q: "Quali metodi di pagamento accettate?",
    a: "Accettiamo tutti i principali circuiti: Visa, Mastercard, American Express, oltre a contanti e bonifici istantanei.",
    gold: false,
  },
  {
    q: "Come funziona il deposito cauzionale?",
    a: "Il deposito è proporzionato alla tipologia di veicolo. Grazie ai nostri depositi flessibili, rendiamo il noleggio di supercar accessibile e trasparente.",
    gold: false,
  },
  {
    q: "Posso cancellare la mia prenotazione?",
    a: "Sì, offriamo politiche di cancellazione trasparenti gestibili direttamente dal tuo profilo o contattando il nostro servizio concierge.",
    gold: false,
  },
];

const NoleggioAeroportoOlbia = () => {
  return (
    <div className="bg-[#050505] text-white selection:bg-gold selection:text-black overflow-x-hidden">
      <SEOHead
        title="Noleggio Auto Aeroporto Olbia | Senza Carta di Credito | KS Rent"
        description="Atterri a Olbia? Scegli l'esclusività di KS Rent. Supercar, SUV e moto con consegna immediata in aeroporto. Prenotazione online veloce e senza obbligo di carta di credito."
        canonical="https://www.ksrentsardinia.com/noleggio-auto-aeroporto-olbia"
        jsonLd={[aeroportoFaqJsonLd]}
      />

      {/* HERO */}
      <section className="relative min-h-[85vh] flex flex-col justify-center pt-32 pb-16 px-4 md:px-12 lg:px-24">
        <div className="absolute inset-0 z-0">
          <img
            src="https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/AUDI/ksrent-noleggio-audirs3-verde.webp"
            alt="Luxury Rent Olbia Airport"
            className="w-full h-full object-cover opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="relative z-10 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-8 backdrop-blur-xl">
              <Plane className="text-gold w-4 h-4" />
              <span className="text-gold text-[10px] md:text-xs uppercase tracking-[0.4em] font-black">
                Aeroporto Costa Smeralda
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-9xl font-display font-black leading-[0.85] tracking-tighter mb-8 italic uppercase">
              LIBERTÀ <br />
              <span className="text-white">AL DECOLLO</span>
            </h1>

            <p className="text-lg md:text-2xl text-white/80 font-light max-w-2xl mb-12 leading-relaxed">
              Atterra a Olbia e sali a bordo del tuo sogno. Consegna immediata,
              <span className="text-gold font-bold"> zero attese ai banconi </span> e flotta supercar pronta per te.
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
            <h2 className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-6">L'Eccellenza a Olbia</h2>
            <p className="text-xl md:text-3xl font-light leading-relaxed text-white/90 mb-8">
              Benvenuto al portale d'ingresso della <strong className="text-gold">Costa Smeralda</strong>. KS Rent
              rivoluziona il concetto di autonoleggio aeroportuale, trasformando l'attesa in piacere.
            </p>
            <div className="h-px w-24 bg-gold mb-8 mx-auto md:mx-0" />
            <p className="text-white/60 text-lg leading-relaxed">
              Offriamo un servizio premium con consegna del veicolo esattamente dove atterri. Risparmia tempo prenotando
              in <strong>totale autonomia dal nostro sito</strong>: gestiamo depositi cauzionali flessibili e accettiamo
              pagamenti <strong>senza obbligo di carta di credito</strong>. Che tu cerchi una supercar, un SUV per la
              famiglia o uno scooter per le spiagge, la nostra flotta è la tua chiave per la Sardegna.
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
              alt="Noleggio Mercedes Classe A Aeroporto Olbia KS Rent"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="text-gold w-5 h-5" />
              <span className="text-gold font-bold tracking-widest text-xs uppercase italic">Airport Spotlight</span>
            </div>
            <h3 className="text-4xl md:text-6xl font-black mb-6 italic uppercase tracking-tighter">
              Mercedes <br />
              <span className="text-gold">Classe A Premium</span>
            </h3>
            <p className="text-white/50 text-lg mb-10 italic font-light">
              "Non è solo un'auto, è una dichiarazione d'intenti. Eleganza e comfort per esplorare ogni angolo della Costa Smeralda."
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
            { icon: Smartphone, title: "Prenotazione Smart", desc: "Prenota in 4 step dal sito, ricevi conferma istantanea." },
            { icon: CreditCard, title: "Zero Vincoli", desc: "Accettiamo prepagate e contanti. Libertà totale." },
            { icon: ShieldCheck, title: "Safe Deposit", desc: "Cauzione flessibile in base al veicolo scelto." },
            { icon: MapPin, title: "Ufficio al Porto", desc: "La nostra base operativa è in Viale Isola Bianca 38." },
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
      <section className="py-24 px-4 md:px-12 lg:px-24 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-gold font-bold tracking-[0.4em] uppercase text-[10px] mb-4 italic">Concierge Desk</h2>
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
      <section className="py-32 px-4 text-center bg-gradient-to-t from-gold/10 to-transparent">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-black mb-10 italic uppercase tracking-tighter leading-none">
            PRENOTA IL <br />
            <span className="text-gold">TUO SOGNO</span>
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

export default NoleggioAeroportoOlbia;

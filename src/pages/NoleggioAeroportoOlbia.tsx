import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Plane, ShieldCheck, CreditCard, Smartphone, MapPin, Star, Gauge } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Come funziona la consegna in Aeroporto?",
    a: "Un nostro addetto ti aspetterà direttamente all'uscita degli arrivi dell'Aeroporto Costa Smeralda. Nessuna fila ai banconi, nessuna attesa. Ti accompagniamo noi alla tua auto, pronta e accesa nel parcheggio riservato a pochi passi dal terminal.",
  },
  {
    q: "Quali sono i metodi di pagamento accettati?",
    a: "Siamo i leader del noleggio flessibile: accettiamo carte di credito, carte prepagate, bancomat, carte di debito e contanti. Il deposito cauzionale è gestito in base al veicolo e non richiede necessariamente una carta di credito tradizionale.",
  },
  {
    q: "È possibile noleggiare senza carta di credito?",
    a: "Assolutamente sì. KS Rent nasce per abbattere le barriere dei noleggi standard. Accettiamo depositi cauzionali tramite carta di debito o contanti per permetterti di goderti la Sardegna in totale libertà.",
  },
  {
    q: "Posso prenotare direttamente dal sito?",
    a: "Certamente. Il nostro sistema di booking online è attivo 24/7. Scegli l'auto, inserisci i dati e ricevi la conferma immediata. È il metodo più veloce per garantirti la disponibilità della tua supercar preferita.",
  },
];

const NoleggioAeroportoOlbia = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-[#050505] text-white selection:bg-gold selection:text-black overflow-x-hidden font-sans">
      <SEOHead
        title="Noleggio Auto Aeroporto Olbia | Senza Carta di Credito | KS Rent"
        description="Atterri a Olbia? Scegli l'eccellenza di KS Rent. Noleggio SUV, supercar e moto direttamente in Aeroporto. Senza carta di credito e con consegna immediata."
        canonical="https://www.ksrentsardinia.com/noleggio-auto-aeroporto-olbia"
      />

      {/* HERO SECTION - FIXED OVERLAP */}
      <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-16 px-4 md:px-12 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 1.5 }}
            src="https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/AUDI/ksrent-noleggio-audirs3-verde.webp"
            alt="Noleggio Audi RS3 Olbia"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-8 backdrop-blur-md">
              <Plane className="text-gold w-4 h-4" />
              <span className="text-gold text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold">
                Aeroporto Costa Smeralda
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8 italic uppercase">
              Libertà <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">Al decollo</span>
            </h1>

            <p className="text-lg md:text-2xl text-white/70 font-light max-w-2xl mb-10 leading-relaxed">
              Dimentica le code ai banconi. Atterra a Olbia e sali a bordo della tua Supercar.
              <span className="text-gold block font-semibold mt-2">Nessun obbligo di carta di credito.</span>
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/prenotaora"
                className="bg-gold text-black px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-white transition-all duration-500 shadow-[0_0_40px_rgba(212,175,55,0.3)] hover:shadow-white/20 active:scale-95"
              >
                Inizia il viaggio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED CAR SPOTLIGHT - LA RS3 VERDE */}
      <section className="py-20 relative px-4 md:px-12 lg:px-24 overflow-hidden bg-gradient-to-b from-[#050505] to-[#0a0a0a]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
            <img
              src="https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/AUDI/ksrent-audirs3supercar-verde.png"
              alt="Audi RS3 Supercar Verde KS Rent"
              className="relative z-10 w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-4">Focus Flotta</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6 italic uppercase">
              Audi RS3 Sportback <br /> <span className="text-gold">Performance</span>
            </h3>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              Disponibile ora presso lo scalo di Olbia. 400CV di pura adrenalina per dominare le strade della Costa
              Smeralda. Scoprila insieme a tutta la nostra flotta di lusso.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex items-center gap-3">
                <Gauge className="text-gold w-5 h-5" />
                <span className="text-sm font-bold">0-100 in 3.8s</span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="text-gold w-5 h-5" />
                <span className="text-sm font-bold">Full Optionals</span>
              </div>
            </div>
            <Link
              to="/prenotaora"
              className="group text-white font-bold uppercase tracking-widest text-sm flex items-center gap-4 hover:text-gold transition-colors"
            >
              Vedi tutta la flotta <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SERVICE CARDS - GLASSMORPHISM STYLE */}
      <section className="py-24 px-4 md:px-12 lg:px-24 bg-[#0a0a0a]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { icon: Smartphone, title: "Self Booking", desc: "Prenota in 60 secondi direttamente dal tuo smartphone." },
            { icon: CreditCard, title: "Libertà Totale", desc: "Contanti o carte di debito accettate. Zero stress." },
            {
              icon: ShieldCheck,
              title: "Sicurezza Premium",
              desc: "Assicurazioni complete e assistenza 24/7 inclusa.",
            },
            { icon: MapPin, title: "Punto d'incontro", desc: "Sede reale al Porto di Olbia e consegna in Aeroporto." },
          ].map((s, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.08] hover:border-gold/30 transition-all duration-500 group"
            >
              <s.icon className="text-gold w-10 h-10 mb-6 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FAQ SECTION - CLEAN & ELEGANT */}
      <section className="py-24 px-4 md:px-12 lg:px-24 bg-[#050505]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-gold font-bold tracking-[0.4em] uppercase text-[10px] mb-4">Informazioni Utili</h2>
            <h3 className="text-3xl md:text-5xl font-black uppercase italic">
              Tutto quello che <br /> devi sapere
            </h3>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-b-0">
                <AccordionTrigger className="bg-white/5 px-6 md:px-10 py-6 rounded-2xl md:rounded-3xl hover:no-underline hover:bg-white/10 transition-all text-left text-sm md:text-lg font-bold">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="px-6 md:px-10 pt-6 pb-8 text-white/50 leading-relaxed text-sm md:text-base border-x border-b border-white/5 rounded-b-3xl -mt-4">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA - HIGH CONVERSION */}
      <section className="py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gold/10 blur-[150px] rounded-full -translate-y-1/2" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-4xl md:text-7xl font-black mb-8 italic uppercase tracking-tighter">
            Pronto a <span className="text-gold">guidare?</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12">
            La tua supercar ti aspetta all'uscita del terminal. Bloccala ora prima che sia troppo tardi.
          </p>
          <Link
            to="/prenotaora"
            className="inline-flex items-center gap-4 bg-white text-black px-12 py-6 rounded-full font-black uppercase tracking-[0.2em] hover:bg-gold transition-all duration-500"
          >
            Prenota il tuo Sogno <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default NoleggioAeroportoOlbia;

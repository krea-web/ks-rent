import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, ShieldCheck, CreditCard, Smartphone, Palmtree } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Consegnate l'auto in Hotel o in Villa privata?",
    a: "Assolutamente sì. Consegniamo il veicolo su misura dove desideri: direttamente in Hotel, Villa privata, Ristorante o qualsiasi altra location in Costa Smeralda. Un servizio pensato per la massima comodità.",
  },
  {
    q: "Quali veicoli sono disponibili in Costa Smeralda?",
    a: "La nostra flotta per la Costa Smeralda comprende supercar, auto sportive, SUV premium e quad, perfetti per esplorare Porto Cervo, San Pantaleo, Porto Rotondo e tutte le meraviglie della costa sarda.",
  },
  {
    q: "Serve la carta di credito per noleggiare?",
    a: "No, non è obbligatoria. Accettiamo carte prepagate, bancomat, carte di debito e contanti. Il deposito cauzionale è flessibile e varia in base al veicolo scelto.",
  },
  {
    q: "In quali località della Costa Smeralda consegnate?",
    a: "Copriamo tutta la Costa Smeralda e la Gallura: Porto Cervo, San Pantaleo, Porto Rotondo, Baja Sardinia, Cannigione, Arzachena, Palau, Santa Teresa di Gallura e molte altre. Contattaci per qualsiasi richiesta specifica.",
  },
  {
    q: "Come funziona la prenotazione online?",
    a: "È semplice e veloce: scegli il veicolo, seleziona le date e conferma la prenotazione direttamente dal nostro sito. 100% autonoma, senza telefonate obbligatorie.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRental",
  name: "KS Rent — Noleggio Auto Costa Smeralda",
  description: "Noleggio auto di lusso in Costa Smeralda. Supercar, SUV e quad con consegna su misura in Hotel, Villa o Ristorante. Porto Cervo, San Pantaleo, Porto Rotondo.",
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

const NoleggioCostaSmerlada = () => (
  <div className="bg-background text-foreground selection:bg-gold selection:text-black overflow-x-hidden font-sans">
    <SEOHead
      title="Noleggio Auto Costa Smeralda | Porto Cervo e Dintorni | KS Rent"
      description="Esplora Porto Cervo, San Pantaleo e Porto Rotondo. Consegna della tua supercar o SUV direttamente in hotel o villa. Noleggio senza carta di credito."
      canonical="https://www.ksrentsardinia.com/noleggio-auto-costa-smeralda"
      keywords="noleggio auto costa smeralda, noleggio auto porto cervo, noleggio supercar costa smeralda, noleggio SUV porto rotondo, rent a car costa smeralda, noleggio auto san pantaleo, noleggio auto lusso costa smeralda, noleggio auto senza carta di credito costa smeralda, luxury rent car sardegna"
      jsonLd={[jsonLd, faqJsonLd]}
    />

    {/* HERO */}
    <section className="relative min-h-[60vh] md:min-h-[75vh] flex flex-col justify-end pb-16 md:pb-24 px-4 md:px-12 lg:px-24">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80"
          alt="Noleggio auto lusso Costa Smeralda Porto Cervo KS Rent"
          className="w-full h-full object-cover opacity-35"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="flex items-center gap-3 mb-6">
            <Palmtree className="text-gold w-5 h-5" />
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">Costa Smeralda</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-black leading-tight tracking-tight mb-6">
            Noleggio Auto di Lusso
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-300">in Costa Smeralda</span>
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-white/60 font-light leading-relaxed max-w-2xl mb-8">
            Consegna su misura: Hotel, Villa o Ristorante
          </h2>
          <Link
            to="/prenotaora"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-gold to-yellow-500 text-black px-6 md:px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--gold)/0.4)] transition-all duration-300 group min-h-[48px]"
          >
            Verifica Disponibilità
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>

    {/* CONTENUTO */}
    <section className="py-16 md:py-28 px-4 md:px-12 lg:px-24 bg-[#050505]">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8 max-w-3xl">
            Vivi la <strong className="text-white">Costa Smeralda</strong> con il massimo della comodità. KS Rent consegna il tuo veicolo 
            direttamente dove desideri: <strong className="text-white">Hotel, Villa privata o Ristorante</strong>. 
            Perfetto per chi alloggia a <strong className="text-white">Porto Cervo, San Pantaleo o Porto Rotondo</strong> e vuole 
            esplorare la costa senza pensieri.
          </p>
          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-12 max-w-3xl">
            La nostra flotta top comprende <strong className="text-white">supercar, SUV premium, auto sportive e quad</strong> — veicoli 
            perfetti per le strade panoramiche della Sardegna. La prenotazione è <strong className="text-white">100% online</strong>, 
            il deposito cauzionale è flessibile in base al veicolo scelto e <strong className="text-white">non è richiesta la carta di credito</strong>. 
            La nostra sede fisica è al Porto di Olbia.
          </p>
        </motion.div>

        {/* SERVIZI CHIAVE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {[
            { icon: Smartphone, title: "Prenotazione 100% Online", desc: "Prenota in autonomia dal sito, in pochi minuti." },
            { icon: CreditCard, title: "Nessun Obbligo Carta di Credito", desc: "Bancomat, prepagate, contanti e carte di debito." },
            { icon: ShieldCheck, title: "Depositi Flessibili", desc: "Deposito cauzionale proporzionato al veicolo scelto." },
            { icon: MapPin, title: "Consegna su Misura", desc: "Hotel, Villa, Ristorante — in tutta la Costa Smeralda." },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-gold/30 transition-colors"
            >
              <s.icon className="text-gold w-6 h-6 mb-4" />
              <h3 className="text-white font-bold text-sm mb-2">{s.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* LOCALITÀ */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="text-gold font-semibold tracking-[0.3em] uppercase text-xs mb-4">Località Servite</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-6">Porto Cervo, San Pantaleo, Porto Rotondo e Dintorni</h3>
          <div className="flex flex-wrap gap-3">
            {["Porto Cervo", "San Pantaleo", "Porto Rotondo", "Baja Sardinia", "Cannigione", "Arzachena", "Palau", "Santa Teresa Gallura"].map((loc) => (
              <span key={loc} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-medium">
                {loc}
              </span>
            ))}
          </div>
        </motion.div>

        {/* FLOTTA */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="text-gold font-semibold tracking-[0.3em] uppercase text-xs mb-4">Flotta Disponibile</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-6">Supercar, SUV, Auto Sportive e Quad</h3>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mb-8">
            Dalla potenza di una supercar alla versatilità di un quad: il veicolo perfetto per ogni angolo della Costa Smeralda.
          </p>
          <Link
            to="/prenotaora"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-gold/50 hover:bg-gold/10 text-white hover:text-gold transition-all duration-300 uppercase tracking-widest text-xs font-bold group min-h-[48px]"
          >
            Scopri la Flotta <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* FAQ */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-gold font-semibold tracking-[0.3em] uppercase text-xs mb-4">Domande Frequenti</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-8">
            FAQ — Noleggio in Costa Smeralda
          </h3>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-xl px-4 md:px-6 bg-white/5 border border-white/10 hover:border-white/20 transition-all"
              >
                <AccordionTrigger className="text-left py-4 md:py-6 hover:no-underline text-white text-sm sm:text-base md:text-lg font-bold tracking-wide">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pb-4 md:pb-6">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA FINALE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 text-center py-16 md:py-20 bg-gradient-to-br from-gold/10 to-transparent border border-gold/20 rounded-3xl"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4">La Costa Smeralda ti Aspetta</h2>
          <p className="text-white/60 text-base md:text-lg mb-8 max-w-lg mx-auto">
            Prenota il tuo veicolo e ricevilo direttamente in Hotel, Villa o dove desideri. Massima libertà, zero pensieri.
          </p>
          <Link
            to="/prenotaora"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-gold to-yellow-500 text-black px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--gold)/0.4)] transition-all duration-300 group min-h-[48px]"
          >
            Prenota Ora
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  </div>
);

export default NoleggioCostaSmerlada;

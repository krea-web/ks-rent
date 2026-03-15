import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Plane, ShieldCheck, CreditCard, Smartphone, MapPin } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Come funziona la consegna in Aeroporto?",
    a: "Consegniamo il veicolo direttamente all'Aeroporto Costa Smeralda di Olbia. Prenoti online in autonomia, ci comunichi l'orario di atterraggio e il tuo veicolo sarà pronto ad aspettarti. Un servizio su misura, senza code ai banconi.",
  },
  {
    q: "Quali sono i metodi di pagamento accettati?",
    a: "Accettiamo carte di credito, carte prepagate, bancomat, carte di debito e contanti. Non è obbligatoria la carta di credito. Il deposito cauzionale è flessibile e varia in base alla categoria del veicolo scelto.",
  },
  {
    q: "Come funziona il deposito cauzionale?",
    a: "Il deposito cauzionale è previsto per garantire la cura della nostra flotta premium. L'importo è proporzionato al veicolo scelto e viene gestito in modo chiaro e trasparente al momento del ritiro.",
  },
  {
    q: "Posso prenotare direttamente dal sito?",
    a: "Sì, la prenotazione è 100% online e autonoma. Scegli il veicolo, seleziona le date e conferma in pochi minuti direttamente dal nostro sito.",
  },
  {
    q: "Quali veicoli posso noleggiare in aeroporto?",
    a: "Offriamo una flotta completa: auto sportive, supercar, SUV premium, moto e quad. Il veicolo perfetto per iniziare la tua vacanza in Costa Smeralda.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRental",
  name: "KS Rent — Noleggio Auto Aeroporto Olbia",
  description:
    "Autonoleggio all'Aeroporto Costa Smeralda di Olbia. Supercar, SUV, moto e quad con consegna direttamente in aeroporto. Prenotazione online, senza carta di credito.",
  url: "https://www.ksrentsardinia.com/noleggio-auto-aeroporto-olbia",
  telephone: "+393446107071",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Aeroporto Costa Smeralda",
    addressLocality: "Olbia",
    postalCode: "07026",
    addressRegion: "SS",
    addressCountry: "IT",
  },
  areaServed: { "@type": "City", name: "Olbia" },
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

const NoleggioAeroportoOlbia = () => (
  <div className="bg-background text-foreground selection:bg-gold selection:text-black overflow-x-hidden font-sans">
    <SEOHead
      title="Noleggio Auto Aeroporto Olbia | Senza Carta di Credito | KS Rent"
      description="Atterri all'Aeroporto Costa Smeralda? Noleggio SUV, supercar, quad e moto con consegna direttamente in aeroporto. Depositi flessibili e prenotazione online."
      canonical="https://www.ksrentsardinia.com/noleggio-auto-aeroporto-olbia"
      keywords="noleggio auto aeroporto olbia, autonoleggio aeroporto olbia, rent a car olbia airport, noleggio auto costa smeralda aeroporto, noleggio SUV aeroporto olbia, noleggio supercar olbia aeroporto, noleggio senza carta di credito aeroporto olbia, autonoleggio olbia"
      jsonLd={[jsonLd, faqJsonLd]}
    />

    {/* HERO */}
    <section className="relative min-h-[60vh] md:min-h-[75vh] flex flex-col justify-end pb-16 md:pb-24 px-4 md:px-12 lg:px-24">
      <div className="absolute inset-0 z-0">
        <img
          src="https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/BMW/BMW%20M2%201.jpghttps://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/AUDI/ksrent-noleggio-audirs3-verde.webpNoleggio auto sportive Aeroporto Olbia Costa Smeralda KS Rent"
          className="w-full h-full object-cover opacity-35"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="flex items-center gap-3 mb-6">
            <Plane className="text-gold w-5 h-5" />
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">Aeroporto Costa Smeralda</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-black leading-tight tracking-tight mb-6">
            Autonoleggio all'Aeroporto
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-300">
              di Olbia Costa Smeralda
            </span>
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-white/60 font-light leading-relaxed max-w-2xl mb-8">
            Atterra e parti subito con la tua Supercar o SUV
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8 max-w-3xl">
            Atterri all'<strong className="text-white">Aeroporto Costa Smeralda di Olbia</strong>? Con KS Rent il tuo
            veicolo ti aspetta direttamente in aeroporto. Consegniamo la tua auto esattamente dove atterri, così puoi
            iniziare la tua vacanza senza perdere un solo minuto. Risparmia tempo prenotando in{" "}
            <strong className="text-white">totale autonomia dal nostro sito</strong>.
          </p>
          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-12 max-w-3xl">
            <strong className="text-white">Nessun obbligo di carta di credito</strong>: accettiamo bancomat, prepagate,
            contanti e carte di debito. I depositi cauzionali sono flessibili e variano in base al veicolo scelto. La
            nostra flotta comprende
            <strong className="text-white"> auto sportive, supercar, SUV, moto e quad</strong> — tutto ciò che serve per
            vivere la Costa Smeralda.
          </p>
        </motion.div>

        {/* SERVIZI CHIAVE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {[
            {
              icon: Smartphone,
              title: "Prenotazione 100% Online",
              desc: "Prenota in autonomia dal sito, senza telefonate.",
            },
            {
              icon: CreditCard,
              title: "Nessun Obbligo Carta di Credito",
              desc: "Bancomat, prepagate, contanti e carte di debito.",
            },
            {
              icon: ShieldCheck,
              title: "Depositi Flessibili",
              desc: "Deposito cauzionale proporzionato al veicolo scelto.",
            },
            { icon: MapPin, title: "Sede al Porto di Olbia", desc: "Sede operativa in Viale Isola Bianca 38, Olbia." },
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

        {/* FLOTTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-gold font-semibold tracking-[0.3em] uppercase text-xs mb-4">Flotta Disponibile</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-6">
            Supercar, SUV, Sportive, Moto e Quad
          </h3>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mb-8">
            Dall'aeroporto alla Costa Smeralda in un istante. Scegli il veicolo perfetto per la tua avventura in
            Sardegna.
          </p>
          <Link
            to="/prenotaora"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-gold/50 hover:bg-gold/10 text-white hover:text-gold transition-all duration-300 uppercase tracking-widest text-xs font-bold group min-h-[48px]"
          >
            Scopri la Flotta <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-gold font-semibold tracking-[0.3em] uppercase text-xs mb-4">Domande Frequenti</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-8">
            FAQ — Noleggio Aeroporto Olbia
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4">Atterri a Olbia?</h2>
          <p className="text-white/60 text-base md:text-lg mb-8 max-w-lg mx-auto">
            Prenota il tuo veicolo e trovalo pronto all'uscita dell'aeroporto. Inizia la vacanza dal primo istante.
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

export default NoleggioAeroportoOlbia;

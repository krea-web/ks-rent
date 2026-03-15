import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Ship, ShieldCheck, CreditCard, Smartphone } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Dove ritirare l'auto al Porto di Olbia?",
    a: "La nostra sede operativa si trova in Viale Isola Bianca 38, esattamente al Porto di Olbia. Appena sbarchi dal traghetto, il tuo veicolo sarà pronto ad aspettarti. Nessuna navetta, nessuna attesa.",
  },
  {
    q: "Serve la carta di credito per noleggiare?",
    a: "No, non è obbligatoria la carta di credito. Accettiamo carte prepagate, bancomat, carte di debito e contanti. Il deposito cauzionale è flessibile e varia in base al veicolo scelto.",
  },
  {
    q: "Come funziona il deposito cauzionale?",
    a: "Per garantire la massima cura della nostra flotta premium, è previsto un deposito cauzionale il cui importo varia in base alla categoria del veicolo scelto. Viene gestito in modo chiaro e trasparente al momento del ritiro.",
  },
  {
    q: "Posso prenotare online in totale autonomia?",
    a: "Assolutamente sì. La prenotazione è 100% online dal nostro sito: scegli il veicolo, le date e conferma in pochi minuti. Nessuna telefonata obbligatoria.",
  },
  {
    q: "Quali veicoli sono disponibili al Porto di Olbia?",
    a: "La nostra flotta al Porto include auto sportive, supercar, SUV premium, moto e quad. Perfetti per esplorare la Costa Smeralda dal momento in cui sbarchi.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRental",
  name: "KS Rent — Noleggio Auto Porto di Olbia",
  description:
    "Noleggio auto sportive, SUV, supercar e moto al Porto di Olbia Isola Bianca. Sede operativa al porto, prenotazione online, nessun obbligo di carta di credito.",
  url: "https://www.ksrentsardinia.com/noleggio-auto-porto-olbia",
  telephone: "+393446107071",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Viale Isola Bianca 38",
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

const NoleggioPortoOlbia = () => (
  <div className="bg-background text-foreground selection:bg-gold selection:text-black overflow-x-hidden font-sans">
    <SEOHead
      title="Noleggio Auto al Porto di Olbia | Sportive e SUV | KS Rent"
      description="Arrivi in traghetto all'Isola Bianca? Noleggia la tua auto sportiva, SUV o moto al Porto di Olbia. Nessuna carta di credito richiesta, prenota online."
      canonical="https://www.ksrentsardinia.com/noleggio-auto-porto-olbia"
      keywords="noleggio auto porto olbia, autonoleggio porto olbia, rent a car porto olbia, noleggio auto isola bianca, noleggio moto porto olbia, noleggio SUV olbia, noleggio supercar olbia, noleggio auto senza carta di credito olbia"
      jsonLd={[jsonLd, faqJsonLd]}
    />

    {/* HERO */}
    <section className="relative min-h-[60vh] md:min-h-[75vh] flex flex-col justify-end pb-16 md:pb-24 px-4 md:px-12 lg:px-24">
      <div className="absolute inset-0 z-0">
        <img
          src="https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/MERCEDES/ksrent-noleggio-mercedesclassea180d.webp"
          alt="Auto sportiva noleggio Porto di Olbia Sardegna KS Rent"
          className="w-full h-full object-cover opacity-35"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="flex items-center gap-3 mb-6">
            <Ship className="text-gold w-5 h-5" />
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">Porto Isola Bianca</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-black leading-tight tracking-tight mb-6">
            Noleggio Auto e Moto
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-300">
              al Porto di Olbia
            </span>
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-white/60 font-light leading-relaxed max-w-2xl mb-8">
            La tua auto pronta al tuo sbarco all'Isola Bianca
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
            La sede operativa di KS Rent si trova esattamente al{" "}
            <strong className="text-white">Porto di Olbia, Viale Isola Bianca 38</strong>. Se arrivi in traghetto, il
            tuo veicolo sarà pronto ad aspettarti a pochi passi dallo sbarco. Nessuna coda, nessuna navetta: prenoti
            tutto online in totale autonomia e ritiri le chiavi in pochi minuti.
          </p>
          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-12 max-w-3xl">
            La nostra flotta premium comprende{" "}
            <strong className="text-white">auto sportive, supercar, SUV, moto e quad</strong>, perfetti per esplorare la
            Costa Smeralda dal primo istante. Il deposito cauzionale è flessibile e varia in base al veicolo scelto:{" "}
            <strong className="text-white">nessun obbligo di carta di credito</strong>.
          </p>
        </motion.div>

        {/* SERVIZI CHIAVE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {[
            {
              icon: Smartphone,
              title: "Prenotazione 100% Online",
              desc: "Prenota in autonomia dal sito, nessuna telefonata obbligatoria.",
            },
            {
              icon: CreditCard,
              title: "Nessun Obbligo Carta di Credito",
              desc: "Accettiamo bancomat, prepagate, contanti e carte di debito.",
            },
            {
              icon: ShieldCheck,
              title: "Depositi Flessibili",
              desc: "Deposito cauzionale proporzionato al veicolo scelto.",
            },
            {
              icon: MapPin,
              title: "Sede al Porto",
              desc: "Viale Isola Bianca 38 — a pochi passi dallo sbarco traghetti.",
            },
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
            Auto Sportive, Supercar, SUV, Quad e Moto
          </h3>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mb-8">
            Che tu voglia la potenza di una supercar o la praticità di un SUV per la tua vacanza in Sardegna, la nostra
            flotta è pronta al Porto di Olbia.
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
            FAQ — Noleggio al Porto di Olbia
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4">Arrivi al Porto di Olbia?</h2>
          <p className="text-white/60 text-base md:text-lg mb-8 max-w-lg mx-auto">
            Prenota ora il tuo veicolo e trovalo pronto al tuo sbarco. Zero attese, massima libertà.
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

export default NoleggioPortoOlbia;

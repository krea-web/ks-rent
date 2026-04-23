import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CreditCard, ShieldCheck, Banknote, Smartphone, Star, CheckCircle } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { buildBreadcrumb } from "@/lib/jsonLd";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Posso noleggiare davvero senza carta di credito?",
    a: "Sì, con KS Rent non è necessaria la carta di credito. Accettiamo carte prepagate (PostePay, Revolut, N26), bancomat, carte di debito e anche contanti. Il deposito cauzionale è flessibile e proporzionato al veicolo scelto.",
    gold: true,
  },
  {
    q: "Come funziona il deposito cauzionale senza carta di credito?",
    a: "Il deposito cauzionale viene gestito al momento del ritiro. L'importo varia in base alla categoria del veicolo (city car, SUV, supercar) e può essere versato in contanti o tramite carta prepagata/debito. L'importo viene sempre comunicato in anticipo durante la prenotazione, senza sorprese.",
    gold: true,
  },
  {
    q: "Quali metodi di pagamento accettate?",
    a: "Accettiamo Visa, Mastercard, American Express (credito e debito), carte prepagate di qualsiasi circuito, bancomat, contanti e bonifici istantanei. Sei libero di pagare come preferisci.",
    gold: false,
  },
  {
    q: "Il noleggio senza carta di credito costa di più?",
    a: "Assolutamente no. I nostri prezzi sono identici indipendentemente dal metodo di pagamento. Nessun sovrapprezzo per chi paga con prepagata o contanti.",
    gold: false,
  },
  {
    q: "Quali documenti servono per noleggiare?",
    a: "Patente di guida valida, codice fiscale e documento d'identità in corso di validità (carta d'identità o passaporto). Nessuno score bancario richiesto, nessuna burocrazia aggiuntiva.",
    gold: false,
  },
];

const senzaCCFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const senzaCCJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRental",
  name: "KS Rent — Noleggio Auto Senza Carta di Credito Olbia",
  description:
    "Noleggio auto a Olbia e Costa Smeralda senza obbligo di carta di credito. Accettiamo prepagate, bancomat e contanti. Supercar, SUV, moto e quad.",
  url: "https://www.ksrentsardinia.com/noleggio-auto-senza-carta-di-credito-olbia",
  telephone: "+393446107071",
  paymentAccepted: "Cash, Debit Card, Prepaid Card, Credit Card",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Viale Isola Bianca 38",
    addressLocality: "Olbia",
    postalCode: "07026",
    addressRegion: "SS",
    addressCountry: "IT",
  },
};

const NoleggioSenzaCartaCredito = () => {
  return (
    <div className="bg-gray-50 dark:bg-[#050505] text-foreground selection:bg-gold selection:text-black overflow-x-hidden">
      <SEOHead
        title="Noleggio Auto Senza Carta di Credito Olbia | KS Rent"
        description="Noleggia auto a Olbia senza carta di credito. Accettiamo prepagate, bancomat e contanti. Supercar, SUV e moto in Costa Smeralda. Prenota online."
        canonical="https://www.ksrentsardinia.com/noleggio-auto-senza-carta-di-credito-olbia"
        
        jsonLd={[senzaCCJsonLd, senzaCCFaqJsonLd, buildBreadcrumb("Noleggio Senza Carta di Credito", "/noleggio-auto-senza-carta-di-credito-olbia")]}
      />

      {/* HERO */}
      <section className="relative min-h-[85vh] flex flex-col justify-center pt-32 pb-16 px-4 md:px-12 lg:px-24 overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <img
            src="https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/JEEP/ksrent-noleggio-jeepavenger.webp"
            alt="Noleggio Auto Senza Carta di Credito Olbia KS Rent"
            className="w-full h-full object-cover opacity-40 scale-105"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/40 to-background" />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-background via-background/95 to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-8 backdrop-blur-xl">
              <CreditCard className="text-gold w-4 h-4" />
              <span className="text-gold text-[10px] md:text-xs uppercase tracking-[0.4em] font-black">
                Zero Vincoli — Massima Libertà
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-9xl font-display font-black leading-[0.85] tracking-tighter mb-8 italic uppercase text-gray-900 dark:text-white">
              Noleggio Auto <br />
              <span className="text-gold">Senza Carta di Credito</span>
            </h1>

            <p className="text-lg md:text-2xl text-gray-600 dark:text-white/80 font-light max-w-2xl mb-12 leading-relaxed">
              Con KS Rent noleggi la tua auto a Olbia e in Costa Smeralda
              <span className="text-gold font-bold"> senza obbligo di carta di credito</span>. Accettiamo prepagate, bancomat e contanti.
            </p>

            <Link
              to="/prenotaora"
              className="inline-flex items-center gap-4 bg-gold text-white px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 shadow-[0_0_50px_rgba(212,175,55,0.4)]"
            >
              Prenota Senza Carta di Credito <ArrowRight size={22} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* PAYMENT METHODS */}
      <section className="py-24 px-4 md:px-12 lg:px-24 bg-gray-50 dark:bg-[#050505]">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <span className="block text-gold font-bold tracking-[0.3em] uppercase text-xs mb-6">Pagamenti Flessibili</span>
            <h2 className="text-3xl md:text-5xl font-display font-black mb-10 italic uppercase tracking-tighter text-gray-900 dark:text-white">
              Come Noleggiare <span className="text-gold">Senza Carta di Credito a Olbia</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { icon: CreditCard, title: "Carte Prepagate", desc: "PostePay, Revolut, N26, Hype e tutte le prepagate Visa/Mastercard." },
                { icon: Banknote, title: "Contanti", desc: "Deposito cauzionale e pagamento in contanti direttamente in sede." },
                { icon: ShieldCheck, title: "Bancomat / Debito", desc: "Carte di debito di qualsiasi istituto bancario italiano o estero." },
                { icon: Smartphone, title: "Bonifico Istantaneo", desc: "Pagamento rapido tramite bonifico bancario istantaneo." },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="relative p-8 rounded-[2.5rem] bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 overflow-hidden group backdrop-blur-sm shadow-md dark:shadow-none border-b-[3px] border-b-gold/40 dark:border-b-transparent"
                >
                  <div className="absolute -right-4 -top-4 w-24 h-24 bg-gold/5 rounded-full blur-2xl group-hover:bg-gold/20 transition-all" />
                  <s.icon className="text-gold w-12 h-12 mb-6" />
                  <h3 className="text-xl font-bold mb-3 uppercase italic tracking-tighter text-gray-900 dark:text-white">{s.title}</h3>
                  <p className="text-gray-600 dark:text-white/40 text-sm leading-relaxed font-light">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-4 md:px-12 lg:px-24 bg-white dark:bg-[#0a0a0a] shadow-md dark:shadow-none border-b-[3px] border-b-gold/40 dark:border-b-transparent">
        <div className="max-w-4xl mx-auto">
          <span className="block text-gold font-bold tracking-[0.3em] uppercase text-xs mb-6 text-center">Come Funziona</span>
          <h2 className="text-3xl md:text-5xl font-display font-black mb-12 italic uppercase tracking-tighter text-center text-gray-900 dark:text-white">
            Noleggio Auto Olbia <span className="text-gold">in 4 Step Semplici</span>
          </h2>

          <div className="space-y-8">
            {[
              { step: "01", title: "Scegli il Veicolo Online", desc: "Sfoglia la nostra flotta di supercar, SUV, moto e quad. Seleziona date e luogo di ritiro dal nostro sito." },
              { step: "02", title: "Conferma la Prenotazione", desc: "Ricevi conferma istantanea via email e WhatsApp con tutti i dettagli, incluso l'importo del deposito cauzionale." },
              { step: "03", title: "Ritira con il Tuo Metodo di Pagamento", desc: "Presentati con patente e documento. Paga il deposito con prepagata, bancomat o contanti. Nessuna carta di credito richiesta." },
              { step: "04", title: "Parti alla Scoperta della Sardegna", desc: "In meno di 5 minuti sei al volante. Consegna al Porto, Aeroporto o in tutta la Costa Smeralda." },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 items-start p-6 rounded-2xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10"
              >
                <span className="text-gold font-black text-3xl italic">{s.step}</span>
                <div>
                  <h3 className="text-xl font-bold uppercase italic tracking-tighter mb-2 text-gray-900 dark:text-white">{s.title}</h3>
                  <p className="text-gray-600 dark:text-white/50 font-light leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 md:px-12 lg:px-24 bg-gray-50 dark:bg-[#050505]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="block text-gold font-bold tracking-[0.4em] uppercase text-[10px] mb-4 italic">Trasparenza Totale</span>
            <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-gray-900 dark:text-white">
              Domande Frequenti <span className="text-gold">Noleggio Senza Carta di Credito</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-none">
                <AccordionTrigger
                  className={`
                  px-8 py-6 rounded-2xl md:rounded-[1.5rem] transition-all text-left font-bold italic uppercase tracking-tight
                  ${f.gold ? "bg-gold/10 border border-gold/30 text-gold shadow-[0_0_20px_rgba(212,175,55,0.1)]" : "bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/10"}
                `}
                >
                  <div className="flex items-center gap-4">
                    {f.gold && <Star className="w-4 h-4 fill-gold text-gold" />}
                    {f.q}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-10 pt-6 pb-8 text-gray-600 dark:text-white/50 leading-relaxed font-light text-base md:text-lg italic">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* SEO RICH TEXT */}
      <section className="py-24 px-4 md:px-12 lg:px-24 bg-white dark:bg-[#050505] shadow-md dark:shadow-none border-b-[3px] border-b-gold/40 dark:border-b-transparent">
        <div className="max-w-4xl mx-auto">
          <span className="block text-gold font-bold tracking-[0.3em] uppercase text-xs mb-6">Guida Completa</span>
          <h2 className="text-3xl md:text-5xl font-display font-black mb-10 italic uppercase tracking-tighter text-gray-900 dark:text-white">
            Noleggio Auto Senza Carta di Credito <span className="text-gold">in Sardegna: Tutto Quello che Devi Sapere</span>
          </h2>

          <div className="space-y-6 text-gray-600 dark:text-white/60 text-base md:text-lg leading-relaxed font-light">
            <p>
              Uno dei problemi più comuni che i turisti incontrano quando cercano un <strong className="text-gray-800 dark:text-white/80">noleggio auto in Sardegna</strong> è l'obbligo della carta di credito. La maggior parte delle grandi compagnie internazionali — Hertz, Avis, Europcar, Sixt — richiede una carta di credito tradizionale con plafond elevato per poter bloccare il deposito cauzionale. Questo esclude automaticamente milioni di viaggiatori che utilizzano carte prepagate come PostePay, Revolut, N26 o Hype, oppure che preferiscono pagare in contanti.
            </p>
            <p>
              <strong className="text-gray-800 dark:text-white/80">KS Rent ha scelto una strada diversa.</strong> Crediamo che la flessibilità nel pagamento sia un diritto, non un lusso. Per questo accettiamo qualsiasi metodo di pagamento: carte prepagate di ogni circuito (Visa, Mastercard), bancomat, carte di debito, contanti e bonifici istantanei. Il deposito cauzionale — obbligatorio per garantire la cura del veicolo — può essere versato con uno qualsiasi di questi strumenti. Nessun blocco fondi sulla carta, nessuno score bancario, nessuna pre-autorizzazione incomprensibile.
            </p>
            <p>
              <strong className="text-gray-800 dark:text-white/80">Come funziona il deposito cauzionale senza carta di credito?</strong> L'importo varia in base alla categoria del veicolo: una city car come la Fiat Panda richiede un deposito contenuto, mentre una supercar come l'Audi RS3 o la BMW M2 prevede una cauzione più elevata, commisurata al valore del mezzo. L'importo esatto viene comunicato durante la prenotazione online, prima della conferma, così non ci sono mai sorprese. Al momento del ritiro, versi il deposito in contanti o con la tua prepagata, firmi il contratto e parti. Alla riconsegna, dopo una rapida verifica del veicolo, il deposito viene restituito immediatamente.
            </p>
            <p>
              Questa politica ci ha reso un punto di riferimento per il <strong className="text-gray-800 dark:text-white/80">noleggio auto senza carta di credito a Olbia e in Costa Smeralda</strong>. Serviamo clienti all'{" "}
              <Link to="/noleggio-auto-aeroporto-olbia" className="text-gold underline hover:text-gray-900 dark:hover:text-white transition-colors">Aeroporto di Olbia Costa Smeralda</Link>, al{" "}
              <Link to="/noleggio-auto-porto-olbia" className="text-gold underline hover:text-gray-900 dark:hover:text-white transition-colors">Porto di Olbia Isola Bianca</Link> e in tutta la{" "}
              <Link to="/noleggio-auto-costa-smeralda" className="text-gold underline hover:text-gray-900 dark:hover:text-white transition-colors">Costa Smeralda</Link> con consegna in Hotel, Villa o direttamente al ristorante. La nostra flotta include supercar, SUV, moto Honda SH 125 e quad Yamaha Raptor — tutti disponibili senza l'obbligo della carta di credito tradizionale.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 px-4 text-center bg-gray-50 dark:bg-[#050505]">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-black mb-10 italic uppercase tracking-tighter leading-none text-gray-900 dark:text-white">
            NESSUN VINCOLO <br />
            <span className="text-gold">SOLO LIBERTÀ</span>
          </h2>
          <Link
            to="/prenotaora"
            className="inline-flex items-center gap-4 bg-gold text-white px-12 py-6 rounded-full font-black uppercase tracking-widest hover:bg-black dark:hover:bg-white dark:hover:text-black transition-all duration-500 text-lg shadow-2xl"
          >
            Prenota Senza Carta di Credito <ArrowRight />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default NoleggioSenzaCartaCredito;
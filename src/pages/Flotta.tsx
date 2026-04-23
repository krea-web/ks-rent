import SEOHead from "@/components/SEOHead";
import CircularGallery from "@/components/CircularGallery";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Star } from "lucide-react";
import { motion } from "framer-motion";
import { flottaJsonLd } from "@/lib/jsonLd";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const flottaFaqs = [
  {
    q: "Quale auto noleggiare per la Costa Smeralda?",
    a: "Per le strade panoramiche della Costa Smeralda consigliamo l'Audi RS3 o la BMW M2: potenza, comfort e presenza scenica. Per chi viaggia in famiglia o vuole raggiungere spiagge con sterrato, il Jeep Avenger è la scelta perfetta. Per muoversi agilmente tra Porto Cervo e i borghi, la Mercedes Classe A 180d offre eleganza e consumi contenuti.",
    gold: true,
  },
  {
    q: "Posso noleggiare senza carta di credito?",
    a: "Sì. KS Rent Sardinia accetta carte prepagate (PostePay, Revolut, N26), bancomat, carte di debito e contanti per il deposito cauzionale. Nessun blocco sulla carta, nessuna pre-autorizzazione. I prezzi sono identici indipendentemente dal metodo di pagamento.",
    gold: true,
  },
  {
    q: "Come funziona la consegna a domicilio del veicolo?",
    a: "Consegniamo il veicolo direttamente dove ti trovi: aeroporto di Olbia, porto Isola Bianca, hotel, villa, B&B o ristorante. Il servizio è disponibile dalle 10:00 alle 22:30, 7 giorni su 7, in tutta la Gallura e Costa Smeralda.",
    gold: false,
  },
  {
    q: "Quali documenti servono per noleggiare?",
    a: "Patente di guida valida, codice fiscale e documento d'identità in corso di validità. Per moto e quad sopra i 125cc serve la patente A. Nessun requisito di età minima particolare per le city car.",
    gold: false,
  },
  {
    q: "Il deposito cauzionale è incluso nel prezzo?",
    a: "Il deposito cauzionale è separato dal costo del noleggio e varia in base alla categoria del veicolo. Viene restituito integralmente alla riconsegna del veicolo in buone condizioni. L'importo esatto viene comunicato in fase di prenotazione.",
    gold: false,
  },
];

const flottaFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: flottaFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const flottaBreadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ksrentsardinia.com" },
    { "@type": "ListItem", position: 2, name: "Flotta Veicoli", item: "https://www.ksrentsardinia.com/flotta" },
  ],
};

export default function Flotta() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-foreground">
      <SEOHead
        title="Flotta Veicoli KS Rent | Noleggio Auto e Moto Olbia Sardegna"
        description="Scopri la flotta premium di KS Rent: auto sportive, SUV, city car, scooter e quad. Noleggio senza carta di credito a Olbia e Costa Smeralda."
        canonical="https://www.ksrentsardinia.com/flotta"

        jsonLd={[flottaJsonLd, flottaFaqJsonLd, flottaBreadcrumbJsonLd]}
      />

      {/* Hero Intro */}
      <section className="relative pt-32 pb-8 px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-black tracking-tight bg-gradient-to-r from-gold to-yellow-400 bg-clip-text text-transparent"
        >
          Scegli il tuo stile in Sardegna
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 max-w-2xl mx-auto text-muted-foreground text-base md:text-lg"
        >
          Esplora la nostra flotta trascinando con il mouse o scivolando con il dito. Dalle prestazioni estreme alle passeggiate costiere, abbiamo il veicolo perfetto per te.
        </motion.p>
      </section>

      {/* WebGL Circular Gallery */}
      <section className="relative w-full h-[60vh] md:h-[70vh]">
        <div className="absolute inset-0 bg-gradient-to-b from-white dark:from-black/60 via-transparent to-white dark:to-black/60 pointer-events-none z-10" />
        <CircularGallery bend={3} textColor="#D4AF37" borderRadius={0.05} font="bold 30px sans-serif" />
      </section>

      {/* Contenuto SEO e Call to Action */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
              Eccellenza su strada, senza compromessi
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La flotta di KS Rent è rigorosamente selezionata per offrirti solo il meglio. Che tu voglia sfrecciare tra le curve della Costa Smeralda a bordo di una rombante Audi RS3 o di una BMW M2, oppure goderti la brezza marina su un Honda SH 350, garantiamo veicoli in perfette condizioni.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Viaggi in famiglia? I nostri SUV come la Jeep Avenger sono la scelta ideale. Cerchi praticità? La nostra Fiat Panda Hybrid ti porterà ovunque e potrai noleggiarla comodamente anche senza carta di credito.
            </p>
            <Link
              to="/prenotaora"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-white font-bold text-sm uppercase tracking-widest hover:bg-yellow-400 transition-all group"
            >
              Verifica Disponibilità{" "}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 md:p-8">
            <ShieldCheck className="text-gold mb-4" size={32} />
            <h3 className="text-xl font-bold mb-4 text-foreground">I vantaggi di KS Rent</h3>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li>✅ Nessuna fila al desk aeroportuale</li>
              <li>✅ Consegna su misura in Hotel o Villa</li>
              <li>✅ Parco auto e moto premium</li>
              <li>✅ Assistenza dedicata 24/7 in Sardegna</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Dettaglio categorie veicoli */}
      <section className="py-16 px-4 md:px-12 bg-gray-50 dark:bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-foreground text-center">
            La nostra flotta per ogni esigenza
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-3">Supercar e Sportive</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                <strong>Audi RS3 Sportback</strong> (400 CV, automatico S-Tronic) e <strong>BMW M2 Coupé</strong> (460 CV, trazione posteriore): le auto perfette per le panoramiche della Costa Smeralda. Ideali per chi cerca adrenalina senza rinunciare al comfort. Consegna anche a{" "}
                <Link to="/noleggio-auto-porto-cervo" className="text-gold underline hover:text-gold/80">Porto Cervo</Link> e{" "}
                <Link to="/noleggio-auto-baja-sardinia" className="text-gold underline hover:text-gold/80">Baja Sardinia</Link>.
              </p>
            </div>
            <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-3">SUV e Fuoristrada</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Il <strong>Jeep Avenger</strong> è il SUV compatto che domina sterrati e parcheggi stretti. Perfetto per raggiungere{" "}
                <Link to="/cala-brandinchi" className="text-gold underline hover:text-gold/80">Cala Brandinchi</Link>,{" "}
                <Link to="/spiaggia-del-principe" className="text-gold underline hover:text-gold/80">Spiaggia del Principe</Link> e tutte le calette con accesso su strada bianca. 5 posti, aria condizionata e bagagliaio capiente.
              </p>
            </div>
            <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-3">Premium e Comfort</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                La <strong>Mercedes Classe A 180d</strong> (automatico 7G-DCT, diesel) unisce eleganza e consumi ridotti. Ideale per soggiorni lunghi tra{" "}
                <Link to="/noleggio-auto-porto-rotondo" className="text-gold underline hover:text-gold/80">Porto Rotondo</Link>,{" "}
                <Link to="/noleggio-auto-arzachena" className="text-gold underline hover:text-gold/80">Arzachena</Link> e{" "}
                <Link to="/noleggio-auto-santa-teresa-gallura" className="text-gold underline hover:text-gold/80">Santa Teresa Gallura</Link>. Anche la <strong>Fiat Panda Hybrid</strong> è perfetta per muoversi agili in città e parcheggiare ovunque.
              </p>
            </div>
            <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-3">Scooter e Quad</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                <strong>Honda SH 125 e SH 350</strong> per muoversi con stile nel traffico estivo di Olbia e{" "}
                <Link to="/noleggio-auto-san-teodoro" className="text-gold underline hover:text-gold/80">San Teodoro</Link>. Il <strong>Yamaha Quad Raptor</strong> per avventure fuoristrada tra le colline della Gallura. Patente A richiesta per i modelli sopra i 125cc.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground text-center">
            Domande frequenti sulla nostra flotta
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {flottaFaqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-none">
                <AccordionTrigger
                  className={`px-6 py-5 rounded-xl transition-all text-left font-semibold ${
                    f.gold
                      ? "bg-gold/10 border border-gold/40 text-gold"
                      : "bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-foreground hover:bg-gray-100 dark:hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {f.gold && <Star className="w-4 h-4 fill-gold text-gold shrink-0" />}
                    {f.q}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pt-4 pb-6 text-muted-foreground leading-relaxed font-light">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}

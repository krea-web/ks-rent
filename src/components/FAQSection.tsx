import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Quali documenti servono per noleggiare?", a: "Patente di guida valida, codice fiscale e un documento d'identità in corso di validità." },
  { q: "Posso cancellare la prenotazione?", a: "Sì, la cancellazione è gratuita fino a 48 ore prima del ritiro." },
  { q: "Il chilometraggio è illimitato?", a: "Dipende dal pacchetto scelto. Contattaci per dettagli su ogni veicolo." },
  { q: "Accettate pagamenti con carta?", a: "Sì, accettiamo tutte le principali carte di credito e debito." },
];

const FAQSection = () => (
  <section className="py-24 bg-card">
    <div className="container mx-auto px-4 max-w-2xl">
      <div className="text-center mb-12">
        <p className="text-gold text-sm uppercase tracking-[0.3em] font-semibold mb-3">FAQ</p>
        <h2 className="text-4xl font-display font-black">Domande Frequenti</h2>
      </div>

      <Accordion type="single" collapsible className="space-y-2">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg px-4">
            <AccordionTrigger className="text-sm font-semibold hover:text-gold">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageSquare, Star, ShieldCheck, ArrowRight } from "lucide-react";

// Lista FAQ potenziata e strategica
const faqs = [
  {
    q: "Serve la carta di credito per noleggiare?",
    a: "Assolutamente no. Questo è il nostro punto di forza. Accettiamo carte prepagate, bancomat, carte di debito e contanti. Vogliamo renderti il noleggio più semplice possibile.",
    isHighlighted: true,
    icon: Star,
  },
  {
    q: "Fate controlli o richiedete uno Score Bancario?",
    a: "Nessuno Score Bancario e nessuna burocrazia infinita. Il nostro servizio si basa sulla fiducia e sulla trasparenza verso il cliente.",
    isHighlighted: true,
    icon: ShieldCheck,
  },
  {
    q: "Ci sono depositi cauzionali nascosti?",
    a: "No, le nostre condizioni sono chiare fin dal primo momento. Nessuna sorpresa o trattenuta ingiustificata a fine noleggio.",
    isHighlighted: true,
    icon: Star,
  },
  {
    q: "Dove posso ritirare il veicolo?",
    a: "Abbiamo due sedi strategiche a Olbia: la Sede Legale in Viale Aldo Moro 367 e la Sede Operativa in Viale Isola Bianca 38, perfette per chi arriva dal porto o dall'aeroporto. Operiamo in tutta la Costa Smeralda.",
    isHighlighted: false,
  },
  {
    q: "Quali documenti mi servono al momento del ritiro?",
    a: "Ti basterà presentare una Patente di guida valida, il tuo Codice Fiscale e un documento d'identità in corso di validità (Carta d'Identità o Passaporto).",
    isHighlighted: false,
  },
  {
    q: "È previsto il chilometraggio illimitato?",
    a: "I pacchetti chilometrici variano in base alla categoria del veicolo (City Car, Premium, Scooter o Quad). Contattaci per trovare la soluzione perfetta per il tuo itinerario in Sardegna.",
    isHighlighted: false,
  },
  {
    q: "Cosa succede in caso di guasto o incidente?",
    a: "Niente panico. Offriamo un'assistenza attiva 24 ore su 24, 7 giorni su 7. Ti basterà chiamare il nostro numero dedicato per ricevere supporto immediato.",
    isHighlighted: false,
  },
  {
    q: "Posso cancellare o modificare la mia prenotazione?",
    a: "Sì, offriamo opzioni di cancellazione flessibili. Contatta il nostro team su WhatsApp per gestire o modificare le date della tua prenotazione.",
    isHighlighted: false,
  },
];

const FAQSection = () => (
  <section className="relative py-32 bg-[#050505] overflow-hidden">
    {/* Decorazioni di sfondo */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px] pointer-events-none" />

    {/* PARTE 1: FAQ ACCORDION */}
    <div className="container mx-auto px-4 max-w-4xl relative z-10">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center p-3 bg-white/5 rounded-2xl mb-6 border border-white/10 shadow-lg"
        >
          <MessageSquare className="text-gold w-6 h-6" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gold text-sm uppercase tracking-[0.3em] font-semibold mb-4"
        >
          Trasparenza Totale
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-display font-black mb-6 text-white"
        >
          Domande{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">Frequenti</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-lg max-w-2xl mx-auto"
        >
          Abbiamo eliminato la burocrazia inutile. Leggi come abbiamo reso il noleggio in Sardegna rapido, sicuro e
          senza stress.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((f, i) => {
            const isGold = f.isHighlighted;
            return (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className={`
                  rounded-2xl px-2 md:px-6 transition-all duration-300 border
                  ${
                    isGold
                      ? "bg-gradient-to-br from-gold/10 to-transparent border-gold/40 shadow-[0_0_20px_rgba(212,175,55,0.1)]"
                      : "bg-white/5 border-white/10 hover:border-white/20"
                  }
                `}
              >
                <AccordionTrigger
                  className={`text-left py-6 hover:no-underline group ${isGold ? "text-gold" : "text-white"}`}
                >
                  <div className="flex items-center gap-4">
                    {isGold && f.icon && (
                      <span className="flex-shrink-0 p-2 bg-gold/20 rounded-lg">
                        <f.icon className="w-5 h-5 text-gold" />
                      </span>
                    )}
                    <span
                      className={`text-base md:text-lg font-bold tracking-wide ${isGold ? "" : "group-hover:text-gold transition-colors"}`}
                    >
                      {f.q}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6 pt-2 md:pl-16">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </motion.div>
    </div>

    {/* PARTE 2: BANNER EMOZIONALE INTEGRATO */}
    <div className="container mx-auto px-4 max-w-6xl relative z-10 mt-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative rounded-[2rem] overflow-hidden bg-[#0a0a0a] border border-white/10 group shadow-2xl"
      >
        {/* Immagine di Sfondo & Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80"
            alt="Costa Smeralda Road"
            className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent" />
        </div>

        {/* Contenuto del Banner */}
        <div className="relative z-10 p-10 md:p-16 lg:p-20 flex flex-col items-start max-w-2xl">
          <span className="text-gold text-sm uppercase tracking-[0.3em] font-semibold mb-4 drop-shadow-md">
            Dietro le Quinte
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black mb-6 leading-tight text-white">
            Non noleggiamo solo auto. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">
              Consegniamo Libertà.
            </span>
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
            Scopri la filosofia di KS Rent S.R.L. e perché siamo diventati il punto di riferimento per il noleggio
            premium, trasparente e senza stress a Olbia e in Costa Smeralda.
          </p>

          <Link
            to="/chisiamo"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-gold to-yellow-500 text-black px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all duration-300 group/btn"
          >
            La Nostra Filosofia
            <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;

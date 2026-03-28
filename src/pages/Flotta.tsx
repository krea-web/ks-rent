import SEOHead from "@/components/SEOHead";
import CircularGallery from "@/components/CircularGallery";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { flottaJsonLd } from "@/lib/jsonLd";

export default function Flotta() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-foreground">
      <SEOHead
        title="Flotta Veicoli KS Rent | Noleggio Auto e Moto Olbia Sardegna"
        description="Scopri la flotta premium di KS Rent: auto sportive, SUV, city car, scooter e quad. Noleggio senza carta di credito a Olbia e Costa Smeralda."
        canonical="https://www.ksrentsardinia.com/flotta"
        keywords="flotta noleggio auto olbia, noleggio moto sardegna, auto premium costa smeralda, suv noleggio olbia"
        jsonLd={flottaJsonLd}
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
        <div className="absolute inset-0 bg-gradient-to-b from-white dark:from-black via-transparent to-white dark:to-black pointer-events-none z-10" />
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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-black font-bold text-sm uppercase tracking-widest hover:bg-yellow-400 transition-all group"
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
    </div>
  );
}

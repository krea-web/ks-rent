import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Users, Settings2, Zap, Fuel } from "lucide-react";

// Dati della flotta aggiornati con i modelli reali del brief KS RENT
const fleet = [
  {
    model: "Audi RS3",
    category: "Supercar/Premium",
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80", // Placeholder Audi
    specs: { seats: "5 Posti", gear: "Automatico", power: "400 CV" },
    icon: Zap,
    description: "Adrenalina pura e design aggressivo. L'emozione di guida definitiva per le coste sarde.",
  },
  {
    model: "Jeep Avenger",
    category: "SUV Premium",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80", // Placeholder SUV
    specs: { seats: "5 Posti", gear: "Automatico", power: "Ibrida" },
    icon: Settings2,
    description: "Versatile, compatta e dal design inconfondibile. Perfetta per ogni terreno.",
  },
  {
    model: "BMW M2",
    category: "Supercar/Premium",
    image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80", // Placeholder BMW
    specs: { seats: "4 Posti", gear: "Automatico", power: "460 CV" },
    icon: Zap,
    description: "Trazione posteriore e pura potenza bavarese per chi non accetta compromessi.",
  },
  {
    model: "Fiat Panda Hybrid",
    category: "City Car",
    image: "https://images.unsplash.com/photo-1620021319088-307998244923?auto=format&fit=crop&q=80", // Placeholder compatta
    specs: { seats: "4 Posti", gear: "Manuale", power: "Ibrida" },
    icon: Fuel,
    description: "La compagna ideale per muoversi con agilità e stile nelle vie di Olbia.",
  },
  {
    model: "Honda SH 125/350",
    category: "Scooter",
    image: "https://images.unsplash.com/photo-1599818817478-f60ae05bcbe4?auto=format&fit=crop&q=80", // Placeholder Scooter
    specs: { seats: "2 Posti", gear: "Automatico", power: "Benzina" },
    icon: Zap,
    description: "Lo scooter per eccellenza per godersi il vento e saltare il traffico estivo.",
  },
  {
    model: "Yamaha Quad",
    category: "Quad",
    image: "https://images.unsplash.com/photo-1596483569476-6cb0df2a492f?auto=format&fit=crop&q=80", // Placeholder Quad
    specs: { seats: "2 Posti", gear: "Automatico", power: "4x4" },
    icon: Settings2,
    description: "Vivi l'avventura off-road esplorando gli angoli più nascosti della Sardegna.",
  },
];

const FleetShowcase = () => (
  <section className="py-32 bg-background relative overflow-hidden">
    {/* Decorazione sfondo */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-gold/5 blur-[120px]" />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gold text-sm uppercase tracking-[0.3em] font-semibold mb-4"
        >
          Esplora la Flotta
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-display font-black mb-6 leading-tight"
        >
          Scegli la tua <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-gold">
            Prossima Emozione
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-lg"
        >
          Dalle city car perfette per le vie di Olbia alle supercar più esclusive. Ogni veicolo KS Rent è preparato per
          offrirti un'esperienza impeccabile.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
        {fleet.map((v, i) => (
          <motion.div
            key={v.model}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="group flex flex-col bg-[#0a0a0a] border border-white/5 rounded-3xl overflow-hidden hover:border-gold/30 transition-all duration-500 shadow-2xl"
          >
            {/* Image Container with Zoom Effect */}
            <div className="relative aspect-[16/10] overflow-hidden bg-muted">
              <div className="absolute top-4 left-4 z-20">
                <span className="bg-black/60 backdrop-blur-md text-white text-xs uppercase tracking-wider font-semibold py-2 px-4 rounded-full border border-white/10">
                  {v.category}
                </span>
              </div>
              <img
                src={v.image}
                alt={v.model}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
            </div>

            {/* Content Container */}
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-3xl font-black font-display mb-3 group-hover:text-gold transition-colors duration-300">
                {v.model}
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">{v.description}</p>

              {/* Technical Specs */}
              <div className="grid grid-cols-3 gap-4 mb-8 mt-auto">
                <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white/5 border border-white/5">
                  <Users size={20} className="text-gold mb-2" />
                  <span className="text-xs text-center font-medium">{v.specs.seats}</span>
                </div>
                <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white/5 border border-white/5">
                  <Settings2 size={20} className="text-gold mb-2" />
                  <span className="text-xs text-center font-medium">{v.specs.gear}</span>
                </div>
                <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white/5 border border-white/5">
                  <v.icon size={20} className="text-gold mb-2" />
                  <span className="text-xs text-center font-medium">{v.specs.power}</span>
                </div>
              </div>

              {/* Call to Action */}
              <Link
                to="/prenotaora"
                className="flex items-center justify-center gap-3 w-full bg-gold/10 hover:bg-gold text-gold hover:text-black py-4 rounded-full font-bold uppercase tracking-wider transition-all duration-300 group/btn"
              >
                Noleggia Ora
                <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FleetShowcase;

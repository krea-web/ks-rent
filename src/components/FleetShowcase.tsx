import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Car, Bike, ArrowRight } from "lucide-react";

const fleet = [
  { model: "Fiat Panda", category: "City Car", icon: Car },
  { model: "Jeep Avenger", category: "SUV", icon: Car },
  { model: "Audi RS3", category: "Sportiva", icon: Car },
  { model: "Honda SH 125", category: "Scooter", icon: Bike },
  { model: "Yamaha Quad", category: "Quad", icon: Bike },
];

const FleetShowcase = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-gold text-sm uppercase tracking-[0.3em] font-semibold mb-3">La Nostra Flotta</p>
        <h2 className="text-4xl md:text-5xl font-display font-black">
          Veicoli per ogni <span className="text-gradient-gold">esigenza</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {fleet.map((v, i) => (
          <motion.div
            key={v.model}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative bg-card border border-border rounded-lg p-6 hover:border-gold/50 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <v.icon size={28} className="text-gold" />
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">{v.category}</span>
            </div>
            <h3 className="text-xl font-bold font-display mb-4">{v.model}</h3>
            <Link
              to="/prenotaora"
              className="inline-flex items-center gap-1 text-sm text-gold font-semibold group-hover:gap-2 transition-all"
            >
              Noleggia <ArrowRight size={14} />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FleetShowcase;

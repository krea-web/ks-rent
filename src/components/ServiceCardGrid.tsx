import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export interface ServiceCard {
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface ServiceCardGridProps {
  cards: ServiceCard[];
  /** Eyebrow opzionale sopra il titolo della sezione */
  eyebrow?: string;
  /** Titolo H2 opzionale (può contenere markup React, es. uno span gold) */
  heading?: React.ReactNode;
  /** Classe del wrapper <section> per consentire bg/padding diversi per pagina */
  sectionClassName?: string;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ServiceCardGrid = ({
  cards,
  eyebrow,
  heading,
  sectionClassName = "py-24 px-4 md:px-12 lg:px-24 bg-gray-50 dark:bg-[#050505]",
}: ServiceCardGridProps) => {
  return (
    <section className={sectionClassName}>
      {(eyebrow || heading) && (
        <div className="text-center mb-16">
          {eyebrow && (
            <span className="block text-gold font-bold tracking-[0.4em] uppercase text-xs mb-4 italic">
              {eyebrow}
            </span>
          )}
          {heading && (
            <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-gray-900 dark:text-white">
              {heading}
            </h2>
          )}
        </div>
      )}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto"
      >
        {cards.map((card, i) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={`${card.title}-${i}`}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="relative p-8 md:p-10 rounded-[2.5rem] bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 overflow-hidden group backdrop-blur-sm shadow-md dark:shadow-none border-b-[3px] border-b-gold/40 dark:border-b-transparent transition-colors"
            >
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-gold/5 rounded-full blur-2xl group-hover:bg-gold/20 transition-all" />
              <Icon className="text-gold w-12 h-12 md:w-14 md:h-14 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl md:text-2xl font-bold mb-3 uppercase italic tracking-tighter text-gray-900 dark:text-white group-hover:text-gold transition-colors">
                {card.title}
              </h3>
              <p className="text-gray-600 dark:text-white/40 text-sm md:text-base leading-relaxed font-light">
                {card.desc}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default ServiceCardGrid;

import { motion, Variants } from "framer-motion";
import { ArrowRight, Instagram } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const InstagramSection = () => (
  <section className="py-16 md:py-32 bg-[#0a0a0a] border-t border-white/5 relative">
    <div className="w-full max-w-7xl mx-auto px-4 md:px-12 lg:px-24">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-8 mb-10 md:mb-16">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-2xl">
          <div className="inline-flex items-center justify-center p-3 bg-white/5 rounded-2xl mb-6 border border-white/10">
            <Instagram className="text-gold w-6 h-6" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 leading-tight">Vivi l'Esperienza.</h2>
          <p className="text-white/50 font-light text-base md:text-lg">
            Unisciti alla nostra community. Esplora le bellezze della Sardegna e scopri il dietro le quinte della nostra flotta esclusiva.
          </p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <a
            href="https://instagram.com/ksrent_srl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 md:px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:border-gold/50 hover:bg-gold/10 text-white hover:text-gold transition-all duration-300 uppercase tracking-widest text-xs font-bold group min-h-[48px] relative z-20"
          >
            Segui @ksrent_srl <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[220px] sm:auto-rows-[250px] md:auto-rows-[300px]"
      >
        <motion.a href="https://instagram.com/ksrent_srl" target="_blank" rel="noopener noreferrer" variants={fadeUp} className="md:col-span-8 md:row-span-2 relative group overflow-hidden rounded-2xl md:rounded-[2rem] bg-[#111] border border-white/5 block">
          <img src="https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/BMW%20M2.avif" alt="KS Rent Supercar" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-10 pointer-events-none">
            <Instagram className="text-gold mb-3" size={32} />
            <p className="text-white font-medium">Esplora la Costa Smeralda con stile.</p>
          </div>
        </motion.a>

        <motion.a href="https://instagram.com/ksrent_srl" target="_blank" rel="noopener noreferrer" variants={fadeUp} className="md:col-span-4 md:row-span-1 relative group overflow-hidden rounded-2xl md:rounded-[2rem] bg-[#111] border border-white/5 block">
          <img src="https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/FIAT%20PANDA.jpg" alt="Dettaglio Auto" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm pointer-events-none">
            <Instagram className="text-white" size={28} />
          </div>
        </motion.a>

        <motion.a href="https://instagram.com/ksrent_srl" target="_blank" rel="noopener noreferrer" variants={fadeUp} className="md:col-span-4 md:row-span-1 relative group overflow-hidden rounded-2xl md:rounded-[2rem] bg-[#111] border border-white/5 block">
          <img src="https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/AUDI%20RS3%20VERDE1.jpg" alt="Panorama Sardegna" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm pointer-events-none">
            <Instagram className="text-white" size={28} />
          </div>
        </motion.a>
      </motion.div>
    </div>
  </section>
);

export default InstagramSection;

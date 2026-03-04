const keywords = [
  "Noleggio Senza Carta di Credito",
  "Costa Smeralda",
  "Flotta Premium",
  "Zero Burocrazia",
  "Olbia Sardegna",
  "Fiducia Totale",
  "Assistenza 24/7",
  "Nessun Deposito",
  "Auto & Moto",
  "Consegna in Aeroporto",
];

const duplicated = [...keywords, ...keywords, ...keywords, ...keywords];

const GoldKeywordsMarquee = () => {
  return (
    <section className="py-6 bg-gradient-to-r from-[#D4AF37] via-[#e6c84a] to-[#D4AF37] overflow-hidden relative">
      <style>
        {`
          @keyframes gold-marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-gold-marquee {
            display: flex;
            width: fit-content;
            animation: gold-marquee 30s linear infinite;
          }
        `}
      </style>
      <div className="flex overflow-hidden">
        <div className="animate-gold-marquee flex items-center gap-6">
          {duplicated.map((kw, i) => (
            <span
              key={i}
              className="whitespace-nowrap text-sm md:text-base font-black uppercase tracking-[0.2em] text-black/90 flex items-center gap-6"
            >
              {kw}
              <span className="text-black/30 text-lg">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoldKeywordsMarquee;

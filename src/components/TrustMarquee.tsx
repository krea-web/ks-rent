const items = [
  "FIAT", "JEEP", "AUDI", "HONDA", "YAMAHA", "BMW", "MERCEDES",
  "FIAT", "JEEP", "AUDI", "HONDA", "YAMAHA", "BMW", "MERCEDES",
];

const TrustMarquee = () => (
  <section className="py-8 border-y border-border overflow-hidden">
    <div className="flex animate-marquee whitespace-nowrap">
      {items.map((item, i) => (
        <span
          key={i}
          className="mx-8 text-xl font-bold text-muted-foreground/30 uppercase tracking-[0.2em]"
        >
          {item}
        </span>
      ))}
    </div>
  </section>
);

export default TrustMarquee;

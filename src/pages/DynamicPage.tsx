import { useEffect, useState, useMemo, useRef, useCallback } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import SEOHead from "@/components/SEOHead";
import NotFound from "./NotFound";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Info,
  ShieldCheck,
  Car,
  Navigation,
  Users,
  Gauge,
  Fuel,
  Star,
  Clock,
  Wind,
  AlertTriangle,
  Utensils,
} from "lucide-react";
import { buildLocationJsonLd, buildBeachJsonLd } from "@/lib/jsonLd";
import CompanyMap from "@/components/CompanyMap";

interface PageData {
  slug: string;
  title: string;
  h1: string;
  meta_description: string;
  hero_image_url?: string;
  content_html?: string;
  parking_info?: string;
  canonical_url?: string;
  og_image_url?: string;
}

/* ───────── VEHICLE RECOMMENDATION LOGIC ───────── */

interface RecommendedVehicle {
  name: string;
  image: string;
  tagline: string;
  transmission: string;
  seats: number;
  fuel: string;
  category: string;
}

const VEHICLES: Record<string, RecommendedVehicle> = {
  luxury: {
    name: "Audi RS3 Sportback",
    image:
      "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/AUDI/ksrent-audirs3supercar-verde.png",
    tagline: "Potenza e prestigio sulla Costa Smeralda",
    transmission: "Automatico S-Tronic",
    seats: 5,
    fuel: "Benzina",
    category: "Supercar",
  },
  luxuryAlt: {
    name: "BMW M2 Coupé",
    image:
      "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/BMW/ksrent-bmwm2-maschera.webp",
    tagline: "Sportività pura per le strade della Gallura",
    transmission: "Automatico Steptronic",
    seats: 4,
    fuel: "Benzina",
    category: "Supercar",
  },
  elegant: {
    name: "Mercedes Classe A 180d",
    image:
      "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/MERCEDES/ksrent-mercedessupercarclassea180d.png",
    tagline: "Comfort ed eleganza per ogni percorso",
    transmission: "Automatico 7G-DCT",
    seats: 5,
    fuel: "Diesel",
    category: "Premium",
  },
  offroad: {
    name: "Jeep Avenger",
    image:
      "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/JEEP/ksrent-jeepsuvavenger.webp",
    tagline: "Perfetto per spiagge nascoste e strade sterrate",
    transmission: "Automatico 6 marce",
    seats: 5,
    fuel: "Benzina",
    category: "SUV",
  },
  city: {
    name: "Fiat Panda",
    image:
      "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/FIAT/ksrent-fiatpandacitycar.webp",
    tagline: "Agile e pratica, ideale per la città e il litorale",
    transmission: "Manuale 5 marce",
    seats: 5,
    fuel: "Benzina",
    category: "City Car",
  },
};

const LUXURY_KEYWORDS = [
  "cervo",
  "quatu",
  "rotondo",
  "romazzino",
  "pevero",
  "celvia",
  "faro",
  "principe",
  "liscia",
  "capriccioli",
  "marinella",
  "portisco",
];

const OFFROAD_KEYWORDS = [
  "brandinchi",
  "impostu",
  "moresca",
  "taverna",
  "testa",
  "coda",
  "istana",
  "sabina",
  "agrustos",
];

const ELEGANT_KEYWORDS = [
  "arzachena",
  "cannigione",
  "baja",
  "teresa",
  "palau",
  "bianca",
  "bados",
  "rena",
];

function getRecommendedVehicle(slug: string): RecommendedVehicle {
  const s = slug.toLowerCase();
  if (LUXURY_KEYWORDS.some((k) => s.includes(k))) {
    // alternate between Audi and BMW for variety
    return s.includes("cervo") || s.includes("principe") || s.includes("romazzino")
      ? VEHICLES.luxury
      : VEHICLES.luxuryAlt;
  }
  if (OFFROAD_KEYWORDS.some((k) => s.includes(k))) return VEHICLES.offroad;
  if (ELEGANT_KEYWORDS.some((k) => s.includes(k))) return VEHICLES.elegant;
  // city / airport / generic
  return VEHICLES.city;
}

/* ───────── ANIMATION VARIANTS ───────── */

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const cardContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const LOCAL_TIPS = [
  {
    icon: Clock,
    title: "Gli orari migliori",
    text: (title: string) =>
      `In alta stagione, la Sardegna si sveglia presto. Arriva a ${title} prima delle 9:00 per assicurarti i parcheggi migliori e goderti l'acqua piatta e cristallina prima della folla.`,
  },
  {
    icon: Wind,
    title: "Occhio al vento",
    text: (title: string) =>
      `Il segreto dei sardi? Scegliere la spiaggia in base al vento! Controlla sempre se soffia Maestrale o Scirocco prima di guidare verso ${title}. Se il vento soffia da terra, il mare sarà una piscina.`,
  },
  {
    icon: AlertTriangle,
    title: "Strade e Parcheggi",
    text: (title: string) =>
      `Le perle più belle spesso nascondono strade sterrate. Se incontri tratti non asfaltati vicino a ${title}, procedi a passo d'uomo. E ricorda di parcheggiare sempre nelle strisce blu o aree autorizzate!`,
  },
  {
    icon: Utensils,
    title: "I sapori autentici",
    text: (title: string) =>
      `Dopo il mare a ${title}, evita le trappole per turisti. Cerca un agriturismo nell'entroterra o un ristorantino locale per assaggiare i veri malloreddus o una seadas calda al miele.`,
  },
];

/* ───────── COMPONENT ───────── */

export default function DynamicPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [data, setData] = useState<PageData | null>(null);
  const [type, setType] = useState<"location" | "beach" | null>(null);
  const [loading, setLoading] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  const vehicle = useMemo(() => getRecommendedVehicle(slug || ""), [slug]);

  // Intercetta click su link interni nel content_html
  const handleContentClick = useCallback((e: MouseEvent) => {
    const anchor = (e.target as HTMLElement).closest("a");
    if (!anchor) return;
    const href = anchor.getAttribute("href");
    if (!href) return;

    // Gestisci link interni che iniziano con /localita/ o /spiagge/ o /
    try {
      const url = new URL(href, window.location.origin);
      if (url.origin === window.location.origin) {
        if (url.pathname.startsWith("/localita/") || url.pathname.startsWith("/spiagge/") || url.pathname.startsWith("/")) {
          e.preventDefault();
          navigate(url.pathname);
        }
      }
    } catch {
      // href relativo
      if (href.startsWith("/")) {
        e.preventDefault();
        navigate(href);
      }
    }
  }, [navigate]);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    el.addEventListener("click", handleContentClick);
    return () => el.removeEventListener("click", handleContentClick);
  }, [handleContentClick, data]);

  useEffect(() => {
    async function fetchPageData() {
      setLoading(true);
      if (!slug) {
        setLoading(false);
        return;
      }

      const { data: locData } = await supabase
        .from("seo_locations")
        .select("*")
        .eq("slug", slug)
        .maybeSingle();

      if (locData) {
        setData(locData);
        setType("location");
        setLoading(false);
        return;
      }

      const { data: beachData } = await supabase
        .from("seo_beaches")
        .select("*")
        .eq("slug", slug)
        .maybeSingle();

      if (beachData) {
        setData(beachData);
        setType("beach");
        setLoading(false);
        return;
      }

      setType(null);
      setData(null);
      setLoading(false);
    }

    fetchPageData();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div
          className="w-12 h-12 rounded-full border-2 border-gold border-t-transparent"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
    );
  }

  if (!data) return <NotFound />;

  const locationName = data.title;
  return (
    <div className="bg-background min-h-screen">
      <SEOHead
        title={data.title}
        description={data.meta_description}
        canonical={data.canonical_url}
        ogImage={data.og_image_url}
        jsonLd={type === "beach" ? buildBeachJsonLd(data) : buildLocationJsonLd(data)}
      />

      {/* ════════════ 1. HERO SECTION ════════════ */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        {data.hero_image_url && (
          <div className="absolute inset-0">
            <img
              src={data.hero_image_url}
              alt={data.h1}
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
          </div>
        )}

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-12 pb-16 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 text-gold font-bold tracking-[0.3em] uppercase text-[10px] mb-4">
              <MapPin className="w-3.5 h-3.5" />
              {type === "location" ? "Punto di Ritiro & Consegna" : "Guida KS Rent"}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black italic uppercase tracking-tighter text-foreground leading-[0.95]">
              {data.h1}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-foreground/70 font-light max-w-2xl leading-relaxed">
              {data.meta_description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ════════════ 2. CONTENT HTML (prose pulita) ════════════ */}
      <section className="py-16 px-4 md:px-12 max-w-4xl mx-auto">
        {data.content_html ? (
          <div
            ref={contentRef}
            className="prose dark:prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground prose-p:text-foreground/80 prose-p:font-light prose-p:leading-relaxed prose-strong:text-foreground prose-strong:font-semibold prose-a:text-gold hover:prose-a:text-gold/80"
            dangerouslySetInnerHTML={{ __html: data.content_html }}
          />
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground font-light text-lg leading-relaxed max-w-xl mx-auto">
              Stiamo aggiornando questa pagina con i migliori consigli e percorsi. Puoi comunque
              prenotare il tuo veicolo per questa destinazione utilizzando il pulsante qui sotto.
            </p>
          </div>
        )}

        {/* INFO PARCHEGGIO (Solo per le Spiagge) */}
        {type === "beach" && data.parking_info && (
          <div className="mt-12 bg-card border border-border rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Info className="w-5 h-5 text-gold" />
              <h2 className="text-xl font-bold text-foreground">
                Informazioni Parcheggio &amp; Viabilità
              </h2>
            </div>
            <p className="text-foreground/70 font-light leading-relaxed">{data.parking_info}</p>
          </div>
        )}
      </section>

      {/* ════════════ 3. VEICOLO CONSIGLIATO ════════════ */}
      <motion.section
        className="py-20 px-4 md:px-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-gold font-bold tracking-[0.3em] uppercase text-[10px]">
              Scelto per te
            </span>
            <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-foreground mt-2">
              Il veicolo ideale per questa destinazione
            </h2>
          </div>

          <div className="relative bg-card border border-border rounded-[2rem] overflow-hidden">
            {/* Glow accent */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid md:grid-cols-2 gap-0">
              {/* Image side */}
              <div className="relative flex items-center justify-center p-8 md:p-12 bg-gradient-to-br from-card to-background min-h-[300px]">
                <motion.img
                  src={vehicle.image}
                  alt={`Noleggio ${vehicle.name} - KS Rent Olbia`}
                  className="w-full max-w-md object-contain drop-shadow-2xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                />
              </div>

              {/* Info side */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase">
                  {vehicle.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-black italic uppercase tracking-tight text-foreground mt-1">
                  {vehicle.name}
                </h3>
                <p className="text-foreground/60 font-light mt-3 leading-relaxed">
                  {vehicle.tagline}
                </p>

                {/* Specs grid */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="flex items-center gap-3">
                    <Gauge className="w-4 h-4 text-gold" />
                    <span className="text-foreground/70 text-sm">{vehicle.transmission}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-4 h-4 text-gold" />
                    <span className="text-foreground/70 text-sm">{vehicle.seats} Posti</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Fuel className="w-4 h-4 text-gold" />
                    <span className="text-foreground/70 text-sm">{vehicle.fuel}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-4 h-4 text-gold" />
                    <span className="text-foreground/70 text-sm">Assicurata</span>
                  </div>
                </div>

                <Link
                  to="/prenotaora"
                  className="mt-10 inline-flex items-center justify-center gap-3 bg-gold text-background font-bold uppercase tracking-wider text-sm px-8 py-4 rounded-full hover:scale-105 transition-transform"
                >
                  Prenota questo veicolo
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ════════════ 4. GOOGLE MAPS & DISTANZA ════════════ */}
      <motion.section
        className="py-20 px-4 md:px-12 bg-card"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-gold font-bold tracking-[0.3em] uppercase text-[10px]">
              <Navigation className="w-3.5 h-3.5 inline mr-2" />
              Posizione
            </span>
            <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-foreground mt-2">
              {type === "beach" ? "Dove si trova" : "Come raggiungerci"}
            </h2>
            <p className="text-foreground/60 font-light mt-4 max-w-xl mx-auto leading-relaxed">
              {type === "beach"
                ? "Calcola il percorso dalle nostre sedi di Olbia a questa magnifica spiaggia."
                : "Distanza dalle nostre sedi di Olbia."}
            </p>
          </div>

          <CompanyMap targetLocation={locationName} />
        </div>
      </motion.section>

      {/* ════════════ 5. CONSIGLI DEI LOCAL ════════════ */}
      <section className="py-20 px-4 md:px-12 bg-card/80">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <span className="text-gold font-bold tracking-[0.3em] uppercase text-[10px]">
              Insider Tips
            </span>
            <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-foreground mt-2">
              I consigli di KS Rent per{" "}
              <span className="text-gold">{data.title}</span>
            </h2>
            <p className="text-foreground/60 font-light mt-4 max-w-2xl mx-auto leading-relaxed">
              Non siamo solo un'agenzia di noleggio, siamo sardi DOC. Ecco i
              nostri suggerimenti per vivere al meglio la tua giornata a{" "}
              {data.title}:
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {LOCAL_TIPS.map((tip) => {
              const Icon = tip.icon;
              return (
                <motion.div
                  key={tip.title}
                  variants={cardItemVariants}
                  transition={{ duration: 0.5 }}
                  className="bg-white dark:bg-card border border-gray-200 dark:border-border border-b-[3px] border-b-gold/40 dark:border-b-transparent rounded-2xl p-6 hover:border-gold/40 transition-colors shadow-[0_8px_30px_rgba(212,175,55,0.08)] dark:shadow-none"
                >
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="text-foreground font-bold text-lg mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-foreground/60 text-sm font-light leading-relaxed">
                    {tip.text(data.title)}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ════════════ 6. SEO CONTENT BLOCKS ════════════ */}
      <motion.section
        className="py-20 px-4 md:px-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Block 1 */}
          <div>
            <h2 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter text-foreground mb-4">
              Perché scegliere il noleggio auto KS Rent per{" "}
              <span className="text-gold">{data.title}</span>?
            </h2>
            <p className="text-foreground/70 font-light leading-relaxed">
              KS Rent è il punto di riferimento per il noleggio auto a Olbia e in tutta la Costa
              Smeralda. Scegliendo il nostro servizio per {data.title}, avrai accesso a una flotta
              premium composta da city car, SUV, berline e supercar, sempre igienizzate, con
              pacchetti km flessibili e copertura assicurativa completa. Il nostro team è disponibile
              24 ore su 24 per consegnarti il veicolo direttamente in aeroporto, al porto di Olbia
              o presso la tua struttura ricettiva.
            </p>
          </div>

          {/* Block 2 */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter text-foreground mb-4">
              Noleggio senza carta di credito a{" "}
              <span className="text-gold">{data.title}</span>
            </h2>
            <p className="text-foreground/70 font-light leading-relaxed">
              Scopri il vantaggio di un noleggio senza carta di credito a {data.title}. A
              differenza delle grandi catene, KS Rent accetta anche bancomat e contanti per il
              deposito cauzionale. Nessuna sorpresa, nessun blocco sulla tua carta: solo termini
              chiari, trasparenti e pensati per il viaggiatore moderno che vuole esplorare la
              Sardegna in totale libertà.
            </p>
          </div>

          {/* Block 3 */}
          <div>
            <h2 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter text-foreground mb-4">
              Consegna su misura a{" "}
              <span className="text-gold">{data.title}</span>
            </h2>
            <p className="text-foreground/70 font-light leading-relaxed">
              Veicoli premium, flotta aggiornata, nessuna coda al desk aeroportuale e consegna su
              misura direttamente a {data.title} o presso la tua struttura. Che tu stia cercando
              un'auto per una vacanza di lusso in Costa Smeralda, un SUV per raggiungere le spiagge
              più remote o una city car economica per muoverti tra Olbia, San Teodoro e Golfo
              Aranci, KS Rent ha il veicolo giusto per te.
            </p>
          </div>

          {/* Block 4 */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter text-foreground mb-4">
              La tua vacanza in Sardegna inizia da{" "}
              <span className="text-gold">{data.title}</span>
            </h2>
            <p className="text-foreground/70 font-light leading-relaxed">
              La Sardegna nord-orientale offre paesaggi mozzafiato, acque cristalline e una cultura
              enogastronomica unica. Noleggiare un'auto con KS Rent ti permette di vivere ogni
              angolo di questo paradiso con la massima comodità: dalle calette segrete della Costa
              Smeralda ai borghi dell'entroterra gallurese, passando per i mercati locali e i
              ristoranti stellati. Prenota online in pochi click, scegli il ritiro in aeroporto o
              al porto di Olbia e parti all'avventura verso {data.title} senza pensieri.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ════════════ 6. CTA FINALE ════════════ */}
      <motion.section
        className="py-20 px-4 md:px-12 bg-card"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <ShieldCheck className="w-12 h-12 text-gold mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-foreground mb-4">
            Prenota ora la tua Auto
          </h2>
          <p className="text-foreground/60 font-light max-w-xl mx-auto mb-10 leading-relaxed">
            Viaggia in prima classe con KS Rent. Scegli il tuo veicolo premium per esplorare la
            Sardegna, anche senza carta di credito.
          </p>
          <Link
            to="/prenotaora"
            className="inline-flex items-center gap-3 bg-gold text-background font-bold uppercase tracking-wider text-sm px-12 py-5 rounded-full hover:scale-105 transition-transform shadow-lg"
          >
            Scopri la Flotta
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.section>
    </div>
  );
}

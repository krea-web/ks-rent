import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import SEOHead from "@/components/SEOHead";
import NotFound from "./NotFound";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Info, ShieldCheck } from "lucide-react";

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

export default function DynamicPage() {
  const { slug } = useParams<{ slug: string }>();
  const [data, setData] = useState<PageData | null>(null);
  const [type, setType] = useState<"location" | "beach" | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPageData() {
      setLoading(true);
      if (!slug) { setLoading(false); return; }

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

  return (
    <div className="bg-background min-h-screen">
      <SEOHead
        title={data.title}
        description={data.meta_description}
        canonical={data.canonical_url}
        ogImage={data.og_image_url}
      />

      {/* 1. HERO SECTION */}
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
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black italic uppercase tracking-tighter text-white leading-[0.95]">
              {data.h1}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/70 font-light max-w-2xl leading-relaxed">
              {data.meta_description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. CONTENT HTML */}
      <section className="py-16 px-4 md:px-12 max-w-4xl mx-auto">
        {data.content_html ? (
          <div
            className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-white prose-p:text-white/80 prose-p:font-light prose-p:leading-relaxed prose-strong:text-gold prose-a:text-gold hover:prose-a:text-gold/80"
            dangerouslySetInnerHTML={{ __html: data.content_html }}
          />
        ) : (
          <div className="text-center py-12">
            <p className="text-white/60 font-light text-lg leading-relaxed max-w-xl mx-auto">
              Stiamo aggiornando questa pagina con i migliori consigli e percorsi.
              Puoi comunque prenotare il tuo veicolo per questa destinazione utilizzando il pulsante qui sotto.
            </p>
          </div>
        )}

        {/* 3. INFO PARCHEGGIO (Solo per le Spiagge) */}
        {type === "beach" && data.parking_info && (
          <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Info className="w-5 h-5 text-gold" />
              <h2 className="text-xl font-bold text-white">Informazioni Parcheggio & Viabilità</h2>
            </div>
            <p className="text-white/70 font-light leading-relaxed">{data.parking_info}</p>
          </div>
        )}

        {/* 4. CTA FINALE */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <ShieldCheck className="w-10 h-10 text-gold mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-white mb-4">
            Non lasciare nulla al caso.
          </h2>
          <p className="text-white/60 font-light max-w-xl mx-auto mb-8 leading-relaxed">
            Raggiungi {data.h1.toLowerCase().includes("noleggio") ? "la tua destinazione" : data.h1}{" "}
            senza preoccuparti di sterrati o distanze. Scopri la flotta KS Rent e viaggia in prima classe, anche senza carta di credito.
          </p>
          <Link
            to="/prenotaora"
            className="inline-flex items-center gap-3 bg-gold text-background font-bold uppercase tracking-wider text-sm px-10 py-4 rounded-full hover:bg-gold/90 transition-colors"
          >
            Scegli la tua Auto
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/HeroSection";
import TrustMarquee from "@/components/TrustMarquee";
import FleetShowcase from "@/components/FleetShowcase";
import FAQSection from "@/components/FAQSection";
import GoogleReviews from "@/components/GoogleReviews";
import { faqPageJsonLd } from "@/lib/jsonLd";

const Index = () => (
  <>
    <SEOHead
      title="Noleggio Auto Lusso Olbia Costa Smeralda | KS Rent Sardinia"
      description="Noleggio auto luxury a Olbia e Costa Smeralda. Supercar, SUV e moto con consegna in aeroporto. Prenota online in 2 minuti con KS Rent Sardinia."
      canonical="https://www.ksrentsardinia.com/"
      jsonLd={[faqPageJsonLd]}
    />
    <HeroSection />
    <TrustMarquee />
    <FleetShowcase />
    <FAQSection />
    <GoogleReviews />

    {/* SEO RICH TEXT & ENTITY DISAMBIGUATION */}
    <section className="py-16 px-4 md:px-12 max-w-7xl mx-auto text-gray-600 dark:text-white/80 font-light leading-relaxed bg-background">
      <h2 className="text-3xl font-bold text-foreground mb-6">Il tuo Autonoleggio a Olbia di Fiducia</h2>
      <p className="mb-4">
        Se stai cercando un servizio di <strong>noleggio auto a Olbia</strong> che unisca affidabilità ed esclusività,
        KS Rent Sardinia è la scelta perfetta.{" "}
        <strong>
          Siamo una realtà orgogliosamente e unicamente sarda (P.IVA 03028900904), totalmente indipendente e non
          affiliata ad altre società omonime operanti nel resto d'Italia.
        </strong>
      </p>
      <p className="mb-4">
        Non siamo il classico autonoleggio o un intermediario web: possediamo fisicamente la nostra flotta al Porto di
        Olbia e offriamo un'esperienza premium per chi desidera il <strong>noleggio auto di lusso a Olbia</strong> senza
        compromessi.
      </p>
      <p className="mb-4">
        Che tu stia cercando un veicolo pratico per muoverti in città o un servizio di{" "}
        <strong>luxury rent car a Olbia</strong> per esplorare la costa, la nostra flotta è preparata maniacalmente.
        Scegliere il nostro <strong>autonoleggio a Olbia</strong> significa dire addio alle file interminabili e godersi
        la Sardegna fin dal primo istante. Scopri il modo migliore di fare <strong>rent a Olbia</strong> con i nostri
        servizi diretti e personalizzati.
      </p>
    </section>
  </>
);

export default Index;

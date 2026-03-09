import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/HeroSection";
import TrustMarquee from "@/components/TrustMarquee";
import FleetShowcase from "@/components/FleetShowcase";
import FAQSection from "@/components/FAQSection";
import { localBusinessJsonLd } from "@/lib/jsonLd";

const Index = () => (
  <>
    <SEOHead
      title="KS Rent — Noleggio Auto Lusso Olbia | Costa Smeralda Sardegna"
      description="Noleggio auto e moto premium in Costa Smeralda senza blocco carta di credito. Consegna in aeroporto a Olbia. Prenota in 2 minuti con KS Rent."
      canonical="https://ksrentsardinia.com"
      jsonLd={localBusinessJsonLd}
    />
    <HeroSection />
    <TrustMarquee />
    <FleetShowcase />
    <FAQSection />
  </>
);

export default Index;

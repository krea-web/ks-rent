import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/HeroSection";
import TrustMarquee from "@/components/TrustMarquee";
import FleetShowcase from "@/components/FleetShowcase";
import FAQSection from "@/components/FAQSection";
import { localBusinessJsonLd, faqPageJsonLd } from "@/lib/jsonLd";

const Index = () => (
  <>
    <SEOHead
      title="KS Rent — Noleggio Auto Lusso Olbia | Costa Smeralda Sardegna"
      description="Noleggio auto luxury in Costa Smeralda — Trasparenza, protezione e professionalità. Consegna in aeroporto a Olbia. Prenota in 2 minuti con KS Rent."
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

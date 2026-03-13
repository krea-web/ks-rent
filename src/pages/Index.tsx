import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/HeroSection";
import TrustMarquee from "@/components/TrustMarquee";
import FleetShowcase from "@/components/FleetShowcase";
import FAQSection from "@/components/FAQSection";
import GoogleReviews from "@/components/GoogleReviews";
import { localBusinessJsonLd, faqPageJsonLd } from "@/lib/jsonLd";

const Index = () => (
  <>
    <SEOHead
      title="KS Rent — Noleggio Auto Lusso Olbia | Costa Smeralda Sardegna"
      description="Noleggio auto luxury in Costa Smeralda — Trasparenza, protezione e professionalità. Consegna in aeroporto a Olbia. Prenota in 2 minuti con KS Rent."
      canonical="https://www.ksrentsardinia.com/"
      jsonLd={[localBusinessJsonLd, faqPageJsonLd]}
    />
    <HeroSection />
    <TrustMarquee />
    <FleetShowcase />
    <FAQSection />
    <GoogleReviews />
  </>
);

export default Index;

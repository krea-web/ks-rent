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
      keywords="rent a car olbia, noleggio auto lusso costa smeralda, car rental san teodoro, autonoleggio porto san paolo, noleggio auto santa teresa gallura, luxury rent baja sardinia, noleggio supercar palau, rent auto puntaldia, ks rent sardinia, noleggio auto olbia, autonoleggio olbia, noleggio moto olbia, rent olbia, noleggio senza carta di credito costa smeralda, noleggio auto costa smeralda, noleggio auto aeroporto olbia, noleggio quad olbia, noleggio auto sportive costa smeralda, noleggio senza carta di credito olbia, autonoleggio al porto olbia, noleggio auto lusso olbia, noleggio supercar olbia, rent a car olbia airport, noleggio auto senza carta di credito, luxury rent car olbia"
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

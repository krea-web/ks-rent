import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/HeroSection";
import TrustMarquee from "@/components/TrustMarquee";
import FleetShowcase from "@/components/FleetShowcase";
import FAQSection from "@/components/FAQSection";
import GoogleReviews from "@/components/GoogleReviews";
import { faqPageJsonLd, localBusinessJsonLd } from "@/lib/jsonLd";

const Index = () => (
  <>
    <SEOHead
      title="Noleggio Auto Olbia | Autonoleggio Costa Smeralda — KS Rent"
      description="Noleggio auto a Olbia con consegna a domicilio in Costa Smeralda. SUV, supercar e city car senza carta di credito. Prenota online con KS Rent Sardinia."
      canonical="https://www.ksrentsardinia.com/"
      jsonLd={[localBusinessJsonLd, faqPageJsonLd]}
    />
    <HeroSection />
    <TrustMarquee />
    <FleetShowcase />
    <FAQSection />
    <GoogleReviews />

    {/* SEO RICH TEXT & ENTITY DISAMBIGUATION */}
    <section className="py-16 px-4 md:px-12 max-w-7xl mx-auto text-gray-600 dark:text-white/80 font-light leading-relaxed bg-background">
      <h2 className="text-3xl font-bold text-foreground mb-6">Noleggio Auto Olbia — Il tuo Autonoleggio di Fiducia</h2>
      <p className="mb-4">
        Cerchi un <strong>noleggio auto a Olbia</strong>? KS Rent Sardinia è l'<strong>autonoleggio Olbia</strong> di
        riferimento per chi vuole esplorare la Sardegna nord-orientale senza vincoli. Consegniamo SUV, supercar, city car,
        moto e quad direttamente al{" "}
        <Link to="/noleggio-auto-porto-olbia" className="text-gold underline hover:text-gray-900 dark:hover:text-white transition-colors">Porto di Olbia</Link>,
        all'<Link to="/noleggio-auto-aeroporto-olbia" className="text-gold underline hover:text-gray-900 dark:hover:text-white transition-colors">Aeroporto Olbia Costa Smeralda</Link>,
        al tuo hotel o alla tua villa — dalle 10:00 alle 22:30, 7 giorni su 7.
      </p>
      <p className="mb-4">
        <strong>
          Siamo una realtà orgogliosamente e unicamente sarda (P.IVA 03028900904), totalmente indipendente e non
          affiliata ad altre società omonime operanti nel resto d'Italia.
        </strong>{" "}
        Non siamo il classico autonoleggio o un intermediario web: possediamo fisicamente la nostra flotta — Audi RS3, BMW M2,
        Mercedes Classe A, Jeep Avenger, Fiat Panda, Honda SH — e la prepariamo maniacalmente per ogni cliente.
      </p>
      <p className="mb-4">
        Il nostro <strong>noleggio auto Olbia</strong> si distingue per un vantaggio concreto: accettiamo bancomat,
        prepagate e contanti per il deposito cauzionale. Nessuna carta di credito obbligatoria, nessun blocco sulla carta,
        nessuna sorpresa.{" "}
        <Link to="/noleggio-auto-senza-carta-di-credito-olbia" className="text-gold underline hover:text-gray-900 dark:hover:text-white transition-colors">Scopri il noleggio senza carta di credito</Link>.
      </p>

      <h3 className="text-2xl font-bold text-foreground mt-10 mb-4">Consegna a domicilio in tutta la Gallura e Costa Smeralda</h3>
      <p className="mb-4">
        Il servizio di <strong>autonoleggio a Olbia</strong> di KS Rent copre capillarmente tutta la Gallura. Consegniamo alle località più richieste:{" "}
        <Link to="/noleggio-auto-porto-cervo" className="text-gold underline hover:text-gray-900 dark:hover:text-white transition-colors">Porto Cervo</Link>,{" "}
        <Link to="/noleggio-auto-san-teodoro" className="text-gold underline hover:text-gray-900 dark:hover:text-white transition-colors">San Teodoro</Link>,{" "}
        <Link to="/noleggio-auto-baja-sardinia" className="text-gold underline hover:text-gray-900 dark:hover:text-white transition-colors">Baja Sardinia</Link>,{" "}
        <Link to="/noleggio-auto-palau" className="text-gold underline hover:text-gray-900 dark:hover:text-white transition-colors">Palau</Link>,{" "}
        <Link to="/noleggio-auto-porto-rotondo" className="text-gold underline hover:text-gray-900 dark:hover:text-white transition-colors">Porto Rotondo</Link>,{" "}
        <Link to="/noleggio-auto-santa-teresa-gallura" className="text-gold underline hover:text-gray-900 dark:hover:text-white transition-colors">Santa Teresa Gallura</Link>,{" "}
        <Link to="/noleggio-auto-budoni" className="text-gold underline hover:text-gray-900 dark:hover:text-white transition-colors">Budoni</Link> e la{" "}
        <Link to="/noleggio-auto-costa-smeralda" className="text-gold underline hover:text-gray-900 dark:hover:text-white transition-colors">Costa Smeralda</Link>.
        Il tuo <strong>noleggio auto a Olbia</strong> inizia dal momento in cui atterri o sbarchi dal traghetto.
      </p>

      <h3 className="text-2xl font-bold text-foreground mt-10 mb-4">Le spiagge più belle a portata di auto</h3>
      <p className="mb-4">
        Con un SUV KS Rent raggiungi anche le calette più nascoste della Sardegna nord-orientale:{" "}
        <Link to="/spiaggia-del-principe" className="text-gold underline hover:text-gray-900 dark:hover:text-white transition-colors">Spiaggia del Principe</Link>,{" "}
        <Link to="/cala-brandinchi" className="text-gold underline hover:text-gray-900 dark:hover:text-white transition-colors">Cala Brandinchi</Link>,{" "}
        <Link to="/la-cinta" className="text-gold underline hover:text-gray-900 dark:hover:text-white transition-colors">La Cinta</Link>,{" "}
        <Link to="/capriccioli" className="text-gold underline hover:text-gray-900 dark:hover:text-white transition-colors">Capriccioli</Link> e{" "}
        <Link to="/porto-istana" className="text-gold underline hover:text-gray-900 dark:hover:text-white transition-colors">Porto Istana</Link> con vista su Tavolara.
        Per le spiagge con sterrato consigliamo il Jeep Avenger; per le panoramiche costiere, l'Audi RS3 o la BMW M2.
      </p>
    </section>
  </>
);

export default Index;

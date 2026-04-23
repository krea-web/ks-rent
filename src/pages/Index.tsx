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
      title="Noleggio Auto Lusso Olbia Costa Smeralda | KS Rent Sardinia"
      description="Noleggio auto luxury a Olbia e Costa Smeralda. Supercar, SUV e moto con consegna in aeroporto. Prenota online in 2 minuti con KS Rent Sardinia."
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
        Non siamo il classico autonoleggio o un intermediario web: possediamo fisicamente la nostra flotta al{" "}
        <Link to="/noleggio-auto-porto-olbia" className="text-gold underline hover:text-gray-900 dark:hover:text-white transition-colors">Porto di Olbia</Link> e offriamo un'esperienza premium per chi desidera il <strong>noleggio auto di lusso a Olbia</strong> senza
        compromessi.
      </p>
      <p className="mb-4">
        Che tu stia cercando un veicolo pratico per muoverti in città o un servizio di{" "}
        <strong>luxury rent car a Olbia</strong> per esplorare la{" "}
        <Link to="/noleggio-auto-costa-smeralda" className="text-gold underline hover:text-gray-900 dark:hover:text-white transition-colors">Costa Smeralda</Link>, la nostra flotta è preparata maniacalmente.
        Scegliere il nostro <strong>autonoleggio a Olbia</strong> significa dire addio alle file interminabili e godersi
        la Sardegna fin dal primo istante. Ritira la tua auto all'{" "}
        <Link to="/noleggio-auto-aeroporto-olbia" className="text-gold underline hover:text-gray-900 dark:hover:text-white transition-colors">Aeroporto di Olbia</Link> o noleggia{" "}
        <Link to="/noleggio-auto-senza-carta-di-credito-olbia" className="text-gold underline hover:text-gray-900 dark:hover:text-white transition-colors">senza carta di credito</Link>.
      </p>

      <h3 className="text-2xl font-bold text-foreground mt-10 mb-4">Consegna a domicilio in tutta la Gallura</h3>
      <p className="mb-4">
        KS Rent Sardinia consegna auto, SUV, moto e quad direttamente al tuo alloggio in tutta la Gallura. Dalle località più richieste come{" "}
        <Link to="/noleggio-auto-porto-cervo" className="text-gold underline hover:text-gray-900 dark:hover:text-white transition-colors">Porto Cervo</Link>,{" "}
        <Link to="/noleggio-auto-san-teodoro" className="text-gold underline hover:text-gray-900 dark:hover:text-white transition-colors">San Teodoro</Link> e{" "}
        <Link to="/noleggio-auto-baja-sardinia" className="text-gold underline hover:text-gray-900 dark:hover:text-white transition-colors">Baja Sardinia</Link> fino a{" "}
        <Link to="/noleggio-auto-palau" className="text-gold underline hover:text-gray-900 dark:hover:text-white transition-colors">Palau</Link>,{" "}
        <Link to="/noleggio-auto-santa-teresa-gallura" className="text-gold underline hover:text-gray-900 dark:hover:text-white transition-colors">Santa Teresa Gallura</Link> e{" "}
        <Link to="/noleggio-auto-budoni" className="text-gold underline hover:text-gray-900 dark:hover:text-white transition-colors">Budoni</Link>. Il servizio è attivo dalle 10:00 alle 22:30, 7 giorni su 7.
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

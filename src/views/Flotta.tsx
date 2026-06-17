import SEOHead from "@/components/SEOHead";
import CircularGallery from "@/components/CircularGallery";
import { Link } from "@/lib/router-shim";
import { ArrowRight, ShieldCheck, Star } from "lucide-react";
import { motion } from "framer-motion";
import { flottaJsonLd } from "@/lib/jsonLd";
import type { Locale } from "@/lib/i18n";

interface Props {
  lang?: Locale;
}

const TRANSLATIONS = {
  it: {
    seo: {
      title: "Flotta Veicoli KS Rent | Noleggio Auto Olbia",
      description: "Scopri la flotta premium di KS Rent: auto sportive, SUV, city car, scooter e quad. Noleggio senza carta di credito a Olbia e Costa Smeralda.",
    },
    hero: {
      title: "Scegli il tuo stile in Sardegna",
      subtitle: "Esplora la nostra flotta trascinando con il mouse o scivolando con il dito. Dalle prestazioni estreme alle passeggiate costiere, abbiamo il veicolo perfetto per te.",
    },
    excellence: {
      heading: "Eccellenza su strada, senza compromessi",
      p1: "La flotta di KS Rent è rigorosamente selezionata per offrirti solo il meglio. Che tu voglia sfrecciare tra le curve della Costa Smeralda a bordo di una rombante Audi RS3 o di una BMW M2, oppure goderti la brezza marina su un Honda SH 350, garantiamo veicoli in perfette condizioni.",
      p2: "Viaggi in famiglia? I nostri SUV come la Jeep Avenger sono la scelta ideale. Cerchi praticità? La nostra Fiat Panda Hybrid ti porterà ovunque e potrai noleggiarla comodamente anche senza carta di credito.",
      cta: "Verifica Disponibilità",
    },
    benefits: {
      heading: "I vantaggi di KS Rent",
      items: [
        "✅ Nessuna fila al desk aeroportuale",
        "✅ Consegna su misura in Hotel o Villa",
        "✅ Parco auto e moto premium",
        "✅ Assistenza dedicata 24/7 in Sardegna",
      ],
    },
    categoriesHeading: "La nostra flotta per ogni esigenza",
    categories: {
      supercar: {
        heading: "Supercar e Sportive",
        body: "<strong>Audi RS3 Sportback</strong> (400 CV, automatico S-Tronic) e <strong>BMW M2 Coupé</strong> (460 CV, trazione posteriore): le auto perfette per le panoramiche della Costa Smeralda. Ideali per chi cerca adrenalina senza rinunciare al comfort. Consegna anche a {link:porto-cervo:Porto Cervo} e {link:baja-sardinia:Baja Sardinia}.",
      },
      suv: {
        heading: "SUV e Fuoristrada",
        body: "Il <strong>Jeep Avenger</strong> è il SUV compatto che domina sterrati e parcheggi stretti. Perfetto per raggiungere {link:cala-brandinchi:Cala Brandinchi}, {link:spiaggia-del-principe:Spiaggia del Principe} e tutte le calette con accesso su strada bianca. 5 posti, aria condizionata e bagagliaio capiente.",
      },
      premium: {
        heading: "Premium e Comfort",
        body: "La <strong>Mercedes Classe A 180d</strong> (automatico 7G-DCT, diesel) unisce eleganza e consumi ridotti. Ideale per soggiorni lunghi tra {link:porto-rotondo:Porto Rotondo}, {link:arzachena:Arzachena} e {link:san-teodoro:San Teodoro}. Anche la <strong>Fiat Panda Hybrid</strong> è perfetta per muoversi agili in città e parcheggiare ovunque.",
      },
      twoWheels: {
        heading: "Scooter e Quad",
        body: "<strong>Honda SH 125 e SH 350</strong> per muoversi con stile nel traffico estivo di Olbia e {link:san-teodoro:San Teodoro}. Il <strong>Yamaha Quad Raptor</strong> per avventure fuoristrada tra le colline della Gallura. Patente A richiesta per i modelli sopra i 125cc.",
      },
    },
    faqHeading: "Domande frequenti sulla nostra flotta",
    faqs: [
      {
        q: "Quale auto noleggiare per la Costa Smeralda?",
        a: "Per le strade panoramiche della Costa Smeralda consigliamo l'Audi RS3 o la BMW M2: potenza, comfort e presenza scenica. Per chi viaggia in famiglia o vuole raggiungere spiagge con sterrato, il Jeep Avenger è la scelta perfetta. Per muoversi agilmente tra Porto Cervo e i borghi, la Mercedes Classe A 180d offre eleganza e consumi contenuti.",
        gold: true,
      },
      {
        q: "Posso noleggiare senza carta di credito?",
        a: "Sì. KS Rent Sardinia accetta carte prepagate (PostePay, Revolut, N26), bancomat, carte di debito e contanti per il deposito cauzionale. Nessun blocco sulla carta, nessuna pre-autorizzazione. I prezzi sono identici indipendentemente dal metodo di pagamento.",
        gold: true,
      },
      {
        q: "Come funziona la consegna a domicilio del veicolo?",
        a: "Consegniamo il veicolo direttamente dove ti trovi: aeroporto di Olbia, porto Isola Bianca, hotel, villa, B&B o ristorante. Il servizio è disponibile dalle 10:00 alle 22:30, 7 giorni su 7, in tutta la Gallura e Costa Smeralda.",
        gold: false,
      },
      {
        q: "Quali documenti servono per noleggiare?",
        a: "Patente di guida valida, codice fiscale e documento d'identità in corso di validità. Per moto e quad sopra i 125cc serve la patente A. Nessun requisito di età minima particolare per le city car.",
        gold: false,
      },
      {
        q: "Il deposito cauzionale è incluso nel prezzo?",
        a: "Il deposito cauzionale è separato dal costo del noleggio e varia in base alla categoria del veicolo. Viene restituito integralmente alla riconsegna del veicolo in buone condizioni. L'importo esatto viene comunicato in fase di prenotazione.",
        gold: false,
      },
    ],
  },
  en: {
    seo: {
      title: "KS Rent Vehicle Fleet | Car Hire Olbia",
      description: "Discover the KS Rent premium fleet: sports cars, SUVs, city cars, scooters and quads. No credit card car hire in Olbia and Costa Smeralda.",
    },
    hero: {
      title: "Choose your style in Sardinia",
      subtitle: "Browse our fleet by dragging with your mouse or swiping with your finger. From extreme performance to coastal cruising, we have the perfect vehicle for you.",
    },
    excellence: {
      heading: "Excellence on the road, no compromise",
      p1: "The KS Rent fleet is rigorously curated to offer you only the best. Whether you want to thread the curves of Costa Smeralda in a roaring Audi RS3 or BMW M2, or enjoy the sea breeze on a Honda SH 350, we guarantee vehicles in pristine condition.",
      p2: "Travelling with the family? Our SUVs like the Jeep Avenger are the ideal choice. Need practicality? Our Fiat Panda Hybrid takes you anywhere — and you can hire it without a credit card.",
      cta: "Check Availability",
    },
    benefits: {
      heading: "The KS Rent advantages",
      items: [
        "✅ No queue at the airport desk",
        "✅ Tailored delivery to your hotel or villa",
        "✅ Premium car and motorbike fleet",
        "✅ Dedicated 24/7 assistance in Sardinia",
      ],
    },
    categoriesHeading: "Our fleet for every need",
    categories: {
      supercar: {
        heading: "Supercars and Sports Cars",
        body: "<strong>Audi RS3 Sportback</strong> (400 HP, S-Tronic automatic) and <strong>BMW M2 Coupé</strong> (460 HP, rear-wheel drive): the perfect cars for Costa Smeralda's panoramic roads. Ideal for those seeking adrenaline without sacrificing comfort. Delivery also to {link:porto-cervo:Porto Cervo} and {link:baja-sardinia:Baja Sardinia}.",
      },
      suv: {
        heading: "SUVs and Off-Road",
        body: "The <strong>Jeep Avenger</strong> is the compact SUV that masters dirt tracks and tight parking. Perfect for reaching {link:cala-brandinchi:Cala Brandinchi}, {link:spiaggia-del-principe:Spiaggia del Principe} and all the coves with white-road access. 5 seats, air conditioning and a generous boot.",
      },
      premium: {
        heading: "Premium and Comfort",
        body: "The <strong>Mercedes A-Class 180d</strong> (7G-DCT automatic, diesel) combines elegance with low consumption. Ideal for longer stays between {link:porto-rotondo:Porto Rotondo}, {link:arzachena:Arzachena} and {link:san-teodoro:San Teodoro}. The <strong>Fiat Panda Hybrid</strong> is also perfect for nimble city moves and parking anywhere.",
      },
      twoWheels: {
        heading: "Scooters and Quads",
        body: "<strong>Honda SH 125 and SH 350</strong> to move stylishly through Olbia's summer traffic and {link:san-teodoro:San Teodoro}. The <strong>Yamaha Quad Raptor</strong> for off-road adventures across Gallura's hills. Category A licence required for models above 125cc.",
      },
    },
    faqHeading: "Frequently asked questions about our fleet",
    faqs: [
      {
        q: "Which car should I hire for Costa Smeralda?",
        a: "For Costa Smeralda's panoramic roads we recommend the Audi RS3 or BMW M2: power, comfort and stage presence. For families or those reaching dirt-road beaches, the Jeep Avenger is the perfect choice. For nimble moves between Porto Cervo and the villages, the Mercedes A-Class 180d offers elegance and good fuel economy.",
        gold: true,
      },
      {
        q: "Can I hire without a credit card?",
        a: "Yes. KS Rent Sardinia accepts prepaid cards (PostePay, Revolut, N26), debit cards and cash for the security deposit. No card hold, no pre-authorisation. Prices are identical regardless of payment method.",
        gold: true,
      },
      {
        q: "How does home delivery work?",
        a: "We deliver the vehicle directly to where you are: Olbia airport, Isola Bianca port, hotel, villa, B&B or restaurant. The service is available from 10:00 to 22:30, 7 days a week, throughout Gallura and Costa Smeralda.",
        gold: false,
      },
      {
        q: "What documents are required to hire?",
        a: "A valid driving licence, tax code and a valid ID document. For motorbikes and quads above 125cc, an A-category licence is required. No special minimum-age requirements for city cars.",
        gold: false,
      },
      {
        q: "Is the security deposit included in the price?",
        a: "The security deposit is separate from the rental cost and varies by vehicle category. It is fully refunded when the vehicle is returned in good condition. The exact amount is communicated at booking.",
        gold: false,
      },
    ],
  },
  de: {
    seo: {
      title: "KS Rent Fuhrpark | Autovermietung Olbia",
      description: "Entdecken Sie den Premium-Fuhrpark von KS Rent: Sportwagen, SUVs, Kleinwagen, Roller und Quads. Autovermietung ohne Kreditkarte in Olbia und an der Costa Smeralda.",
    },
    hero: {
      title: "Wählen Sie Ihren Stil in Sardinien",
      subtitle: "Erkunden Sie unseren Fuhrpark per Maus oder Wischgeste. Von extremer Leistung bis zur Küstenfahrt — wir haben das passende Fahrzeug für Sie.",
    },
    excellence: {
      heading: "Exzellenz auf der Straße, ohne Kompromisse",
      p1: "Der Fuhrpark von KS Rent ist sorgfältig zusammengestellt, um Ihnen nur das Beste zu bieten. Ob Sie die Kurven der Costa Smeralda in einem röhrenden Audi RS3 oder BMW M2 erleben oder die Meeresbrise auf einem Honda SH 350 genießen möchten — wir garantieren Fahrzeuge in einwandfreiem Zustand.",
      p2: "Reisen mit der Familie? Unsere SUVs wie der Jeep Avenger sind die ideale Wahl. Praktisch unterwegs? Unser Fiat Panda Hybrid bringt Sie überall hin — und kann auch ohne Kreditkarte gemietet werden.",
      cta: "Verfügbarkeit prüfen",
    },
    benefits: {
      heading: "Die Vorteile von KS Rent",
      items: [
        "✅ Keine Schlange am Flughafen-Schalter",
        "✅ Maßgeschneiderte Lieferung ins Hotel oder zur Villa",
        "✅ Premium-Fuhrpark für Pkw und Zweiräder",
        "✅ Engagierter 24/7-Service in Sardinien",
      ],
    },
    categoriesHeading: "Unser Fuhrpark für jede Anforderung",
    categories: {
      supercar: {
        heading: "Supersportwagen und Sportwagen",
        body: "<strong>Audi RS3 Sportback</strong> (400 PS, S-Tronic Automatik) und <strong>BMW M2 Coupé</strong> (460 PS, Heckantrieb): die idealen Pkw für die Panoramastraßen der Costa Smeralda. Perfekt für alle, die Adrenalin und Komfort suchen. Lieferung auch nach {link:porto-cervo:Porto Cervo} und {link:baja-sardinia:Baja Sardinia}.",
      },
      suv: {
        heading: "SUV und Geländewagen",
        body: "Der <strong>Jeep Avenger</strong> ist der kompakte SUV, der Schotterpisten und enge Parkplätze meistert. Ideal für {link:cala-brandinchi:Cala Brandinchi}, {link:spiaggia-del-principe:Spiaggia del Principe} und alle Strände mit Zufahrt über weiße Pisten. 5 Sitzplätze, Klimaanlage und großzügiger Kofferraum.",
      },
      premium: {
        heading: "Premium und Komfort",
        body: "Die <strong>Mercedes A-Klasse 180d</strong> (7G-DCT Automatik, Diesel) verbindet Eleganz mit niedrigem Verbrauch. Ideal für längere Aufenthalte zwischen {link:porto-rotondo:Porto Rotondo}, {link:arzachena:Arzachena} und {link:san-teodoro:San Teodoro}. Auch der <strong>Fiat Panda Hybrid</strong> ist perfekt für die Stadt und überall einfach zu parken.",
      },
      twoWheels: {
        heading: "Roller und Quads",
        body: "<strong>Honda SH 125 und SH 350</strong> für stilvolle Fahrten im Sommerverkehr von Olbia und in {link:san-teodoro:San Teodoro}. Der <strong>Yamaha Quad Raptor</strong> für Offroad-Abenteuer in den Hügeln der Gallura. Führerschein A erforderlich für Modelle über 125 cc.",
      },
    },
    faqHeading: "Häufige Fragen zu unserem Fuhrpark",
    faqs: [
      {
        q: "Welches Auto soll ich für die Costa Smeralda mieten?",
        a: "Für die Panoramastraßen der Costa Smeralda empfehlen wir den Audi RS3 oder BMW M2: Leistung, Komfort und Auftritt. Für Familien oder Strände mit Schotterzufahrt ist der Jeep Avenger die richtige Wahl. Für agile Fahrten zwischen Porto Cervo und den Dörfern bietet die Mercedes A-Klasse 180d Eleganz und niedrigen Verbrauch.",
        gold: true,
      },
      {
        q: "Kann ich ohne Kreditkarte mieten?",
        a: "Ja. KS Rent Sardinia akzeptiert Prepaid-Karten (PostePay, Revolut, N26), Bankkarten und Bargeld für die Kaution. Keine Kartensperrung, keine Vorautorisierung. Die Preise sind unabhängig von der Zahlungsart identisch.",
        gold: true,
      },
      {
        q: "Wie funktioniert die Lieferung an die Haustür?",
        a: "Wir liefern das Fahrzeug direkt dorthin, wo Sie sind: Flughafen Olbia, Hafen Isola Bianca, Hotel, Villa, B&B oder Restaurant. Der Service ist von 10:00 bis 22:30 Uhr, 7 Tage die Woche, in ganz Gallura und an der Costa Smeralda verfügbar.",
        gold: false,
      },
      {
        q: "Welche Unterlagen werden für die Anmietung benötigt?",
        a: "Gültiger Führerschein, Steuernummer und ein gültiger Personalausweis. Für Motorräder und Quads über 125 cc ist ein A-Führerschein erforderlich. Keine besonderen Mindestaltersvorschriften für Kleinwagen.",
        gold: false,
      },
      {
        q: "Ist die Kaution im Preis enthalten?",
        a: "Die Kaution ist getrennt vom Mietpreis und richtet sich nach der Fahrzeugkategorie. Sie wird bei Rückgabe des Fahrzeugs in einwandfreiem Zustand vollständig zurückerstattet. Der genaue Betrag wird bei der Buchung mitgeteilt.",
        gold: false,
      },
    ],
  },
  fr: {
    seo: {
      title: "Flotte KS Rent | Location de Voiture Olbia",
      description: "Découvrez la flotte premium de KS Rent : voitures de sport, SUV, citadines, scooters et quads. Location de voiture sans carte de crédit à Olbia et Costa Smeralda.",
    },
    hero: {
      title: "Choisissez votre style en Sardaigne",
      subtitle: "Explorez notre flotte en faisant glisser à la souris ou au doigt. Des performances extrêmes aux balades côtières, nous avons le véhicule idéal pour vous.",
    },
    excellence: {
      heading: "L'excellence sur la route, sans compromis",
      p1: "La flotte de KS Rent est rigoureusement sélectionnée pour ne vous offrir que le meilleur. Que vous souhaitiez avaler les courbes de la Costa Smeralda à bord d'une rugissante Audi RS3 ou BMW M2, ou profiter de la brise marine sur un Honda SH 350, nous garantissons des véhicules en parfait état.",
      p2: "Vous voyagez en famille ? Nos SUV comme le Jeep Avenger sont le choix idéal. Vous cherchez la praticité ? Notre Fiat Panda Hybrid vous emmène partout — et vous pouvez la louer sans carte de crédit.",
      cta: "Vérifier la disponibilité",
    },
    benefits: {
      heading: "Les avantages de KS Rent",
      items: [
        "✅ Aucune file d'attente au comptoir aéroport",
        "✅ Livraison sur mesure à votre hôtel ou villa",
        "✅ Parc de voitures et motos premium",
        "✅ Assistance dédiée 24h/7j en Sardaigne",
      ],
    },
    categoriesHeading: "Notre flotte pour chaque besoin",
    categories: {
      supercar: {
        heading: "Supercars et sportives",
        body: "<strong>Audi RS3 Sportback</strong> (400 ch, automatique S-Tronic) et <strong>BMW M2 Coupé</strong> (460 ch, propulsion) : les voitures parfaites pour les routes panoramiques de la Costa Smeralda. Idéales pour ceux qui recherchent l'adrénaline sans renoncer au confort. Livraison également à {link:porto-cervo:Porto Cervo} et {link:baja-sardinia:Baja Sardinia}.",
      },
      suv: {
        heading: "SUV et tout-terrain",
        body: "Le <strong>Jeep Avenger</strong> est le SUV compact qui domine les pistes et les parkings serrés. Parfait pour rejoindre {link:cala-brandinchi:Cala Brandinchi}, {link:spiaggia-del-principe:Spiaggia del Principe} et toutes les criques accessibles par chemin blanc. 5 places, climatisation et grand coffre.",
      },
      premium: {
        heading: "Premium et confort",
        body: "La <strong>Mercedes Classe A 180d</strong> (boîte 7G-DCT, diesel) allie élégance et faible consommation. Idéale pour les longs séjours entre {link:porto-rotondo:Porto Rotondo}, {link:arzachena:Arzachena} et {link:san-teodoro:San Teodoro}. La <strong>Fiat Panda Hybrid</strong> est aussi parfaite pour circuler en ville et se garer partout.",
      },
      twoWheels: {
        heading: "Scooters et quads",
        body: "<strong>Honda SH 125 et SH 350</strong> pour se déplacer avec style dans le trafic estival d'Olbia et de {link:san-teodoro:San Teodoro}. Le <strong>Yamaha Quad Raptor</strong> pour des aventures hors-piste dans les collines de la Gallura. Permis A requis pour les modèles de plus de 125 cm³.",
      },
    },
    faqHeading: "Questions fréquentes sur notre flotte",
    faqs: [
      {
        q: "Quelle voiture louer pour la Costa Smeralda ?",
        a: "Pour les routes panoramiques de la Costa Smeralda nous recommandons l'Audi RS3 ou la BMW M2 : puissance, confort et présence. Pour les familles ou les plages accessibles par piste, le Jeep Avenger est le choix idéal. Pour des trajets agiles entre Porto Cervo et les villages, la Mercedes Classe A 180d offre élégance et faible consommation.",
        gold: true,
      },
      {
        q: "Puis-je louer sans carte de crédit ?",
        a: "Oui. KS Rent Sardinia accepte les cartes prépayées (PostePay, Revolut, N26), les cartes de débit et les espèces pour le dépôt de garantie. Aucun blocage sur la carte, aucune pré-autorisation. Les prix sont identiques quel que soit le mode de paiement.",
        gold: true,
      },
      {
        q: "Comment fonctionne la livraison à domicile du véhicule ?",
        a: "Nous livrons le véhicule directement là où vous êtes : aéroport d'Olbia, port d'Isola Bianca, hôtel, villa, B&B ou restaurant. Le service est disponible de 10h00 à 22h30, 7j/7, dans toute la Gallura et en Costa Smeralda.",
        gold: false,
      },
      {
        q: "Quels documents sont nécessaires pour louer ?",
        a: "Un permis de conduire valide, un code fiscal et une pièce d'identité valide. Pour les motos et quads de plus de 125 cm³, un permis A est requis. Aucune exigence d'âge minimum particulière pour les citadines.",
        gold: false,
      },
      {
        q: "Le dépôt de garantie est-il inclus dans le prix ?",
        a: "Le dépôt de garantie est distinct du coût de la location et varie selon la catégorie du véhicule. Il est intégralement restitué au retour du véhicule en bon état. Le montant exact est communiqué lors de la réservation.",
        gold: false,
      },
    ],
  },
} as const;

/**
 * Mappa slug località/spiaggia → path localizzato (placeholder finché DB
 * non popolato con slug_xx). Per le pagine SEO dinamiche, l'URL nelle altre
 * lingue ha prefisso lingua + slug italiano (potrebbe 404 se il slug
 * tradotto in DB non esiste — gestione DB-side).
 */
function localityHref(slug: string, lang: Locale): string {
  return lang === "it" ? `/${slug}` : `/${lang}/${slug}`;
}

/** Sostituisce placeholder {link:slug:label} con anchor HTML.  */
import DOMPurify from "isomorphic-dompurify";

function renderBody(html: string, lang: Locale): string {
  const out = html.replace(/\{link:([^:]+):([^}]+)\}/g, (_m, slug, label) => {
    const href = localityHref(slug, lang);
    return `<a href="${href}" class="text-gold underline hover:text-gold/80">${label}</a>`;
  });
  return DOMPurify.sanitize(out, { ADD_ATTR: ["target", "rel"] });
}

const flottaFaqsIt = TRANSLATIONS.it.faqs;

export const flottaFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: flottaFaqsIt.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const flottaBreadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ksrentsardinia.com" },
    { "@type": "ListItem", position: 2, name: "Flotta Veicoli", item: "https://www.ksrentsardinia.com/flotta" },
  ],
};

export default function Flotta({ lang = "it" }: Props) {
  const t = TRANSLATIONS[lang];
  const bookHref = lang === "it" ? "/prenotaora" : lang === "en" ? "/en/book-now" : lang === "de" ? "/de/jetzt-buchen" : "/fr/reserver";

  return (
    <div className="min-h-screen bg-white dark:bg-black text-foreground editorial-soft">
      {/* Hero Intro */}
      <section className="relative pt-32 pb-8 px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-black tracking-tight bg-gradient-to-r from-gold to-yellow-400 bg-clip-text text-transparent"
        >
          {t.hero.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 max-w-2xl mx-auto text-muted-foreground text-base md:text-lg"
        >
          {t.hero.subtitle}
        </motion.p>
      </section>

      {/* WebGL Circular Gallery */}
      <section className="relative w-full h-[60vh] md:h-[70vh]">
        <div className="absolute inset-0 bg-gradient-to-b from-white dark:from-black/60 via-transparent to-white dark:to-black/60 pointer-events-none z-10" />
        <CircularGallery bend={3} textColor="#D4AF37" borderRadius={0.05} font="bold 30px sans-serif" />
      </section>

      {/* Excellence + benefits */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
              {t.excellence.heading}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">{t.excellence.p1}</p>
            <p className="text-muted-foreground leading-relaxed mb-8">{t.excellence.p2}</p>
            <Link
              to={bookHref}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-white font-bold text-sm uppercase tracking-widest hover:bg-yellow-400 transition-all group"
            >
              {t.excellence.cta}{" "}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 md:p-8">
            <ShieldCheck className="text-gold mb-4" size={32} />
            <h3 className="text-xl font-bold mb-4 text-foreground">{t.benefits.heading}</h3>
            <ul className="space-y-3 text-muted-foreground text-sm">
              {t.benefits.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Vehicle categories */}
      <section className="py-16 px-4 md:px-12 bg-gray-50 dark:bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-foreground text-center">
            {t.categoriesHeading}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {(["supercar", "suv", "premium", "twoWheels"] as const).map((cat) => (
              <div key={cat} className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">{t.categories[cat].heading}</h3>
                <p
                  className="text-muted-foreground text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: renderBody(t.categories[cat].body, lang) }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground text-center">
            {t.faqHeading}
          </h2>
          <div className="space-y-4">
            {t.faqs.map((f, i) => (
              <details
                key={i}
                className={`group rounded-xl transition-all ${
                  f.gold
                    ? "bg-gold/10 border border-gold/40"
                    : "bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10"
                }`}
              >
                <summary
                  className={`px-6 py-5 cursor-pointer list-none text-left font-semibold flex items-center justify-between ${
                    f.gold ? "text-gold" : "text-foreground"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {f.gold && <Star className="w-4 h-4 fill-gold text-gold shrink-0" />}
                    {f.q}
                  </div>
                  <span className="text-gold transition-transform group-open:rotate-90 shrink-0 ml-4">›</span>
                </summary>
                <div className="px-6 pt-2 pb-6 text-muted-foreground leading-relaxed font-light">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

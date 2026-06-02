/* ── Main Local Business JSON-LD (Unified & AI Optimized) ── */

import googleSnapshot from "@/data/google-rating-snapshot.json";

// Rating reale del business da Google Places API (snapshot 2026-05-29: 5,0/46).
// Riusato come aggregateRating sui Motorcycle/Vehicle in makesOffer per soddisfare
// GSC ("Devi specificare offers, review o aggregateRating") senza inventare prezzi.
// Pratica comune nei noleggio auto: la reputazione del business riflette anche
// l'esperienza del veicolo noleggiato.
const VEHICLE_AGG_RATING = {
  "@type": "AggregateRating",
  ratingValue: googleSnapshot.ratingValue.toFixed(1),
  reviewCount: googleSnapshot.reviewCount,
  bestRating: "5",
  worstRating: "1",
};

const SAME_AS = [
  "https://www.instagram.com/ksrentsardinia",
  "https://www.tiktok.com/@ksrentsardinia",
  "https://www.cylex-italia.it/olbia/ks-rent-sardinia-16333738.html",
  "https://www.hotfrog.it/company/015164232099b216397bae94e44fadc7/ks-rent-sardinia/olbia/car-rental-companies",
  "https://www.paginegialle.it/ksrentsardinia-olbia",
  "https://trova-aperto.it/olbia/ks-rent-sardinia-2967671",
  "https://firmania.it/olbia/ks-rent-sardinia-5234308",
  "https://www.paginebianche.it/ksrentsardinia-olbia-a3a5413c-6bb6-4471-91b0-121e05b1a939",
  "https://www.misterimprese.it/sardegna/olbia-tempio/olbia/autonoleggio/2638614.html",
  "https://www.tripadvisor.it/Attraction_Review-g187883-d34295915-Reviews-KS_RENT_SARDINIA-Olbia_Province_of_Olbia_Tempio_Sardinia.html",
  "https://carmappa.com/autonoleggi/olbia/ks-rent-sardinia/",
  "https://www.empresite.it/KS-RENT-SRL.html",
  "https://www.aziendeeasy.it/aziendaselezionata15754006-KS%20RENT%20SRL",
  "https://aziende.virgilio.it/autonoleggio/olbia-ot/ksrentsardinia-olbia",
  "https://www.infobel.com/it/italy/ks_rent_sardinia/olbia/IT110466875-3446107071/businessdetails.aspx",
  "https://www.provenexpert.com/it-it/ks-rent-sardinia/",
  "https://brownbook.net/business/55145099/ks-rent-sardinia",
  "https://www.blinx.biz/ks-rent-sardinia",
  "https://www.reportaziende.it/ks-rent-srl_ss_it20906983",
  "https://www.wogha.com/company/ks-rent-srl-vle-aldo-moro-367-olbia-07026-ss_it-0-ss224046",
  "https://www.ufficiocamerale.it/7811/ks-rent-srl",
  "https://maps.google.com/?cid=9638199341974199698",
  // Àncora entità Knowledge Graph (disambiguazione KS Rent Sardinia ≠ KS Rent Roma)
  "https://www.openstreetmap.org/node/5633191348",
];

const AREA_SERVED = [
  { "@type": "AdministrativeArea", name: "Gallura" },
  { "@type": "AdministrativeArea", name: "Sardegna" },
  { "@type": "City", name: "Olbia" },
  { "@type": "Place", name: "Costa Smeralda" },
  { "@type": "Place", name: "Porto Cervo" },
  { "@type": "Place", name: "Baja Sardinia" },
  { "@type": "City", name: "San Teodoro" },
  { "@type": "City", name: "Palau" },
  { "@type": "City", name: "Arzachena" },
  { "@type": "Place", name: "Porto Rotondo" },
  { "@type": "Place", name: "Puntaldia" },
  { "@type": "Place", name: "Murta Maria" },
  { "@type": "Place", name: "Porto San Paolo" },
  { "@type": "Place", name: "San Pantaleo" },
  { "@type": "Place", name: "Cannigione" },
  { "@type": "Place", name: "Golfo Aranci" },
  { "@type": "Place", name: "Aeroporto Costa Smeralda Olbia" },
  { "@type": "Place", name: "Porto Olbia Isola Bianca" },
];

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["AutoRental", "LocalBusiness"],
      "@id": "https://www.ksrentsardinia.com/#organization",
      name: "KS Rent Sardinia",
      legalName: "KS Rent S.R.L.",
      alternateName: "KS Rent",
      vatID: "IT03028900904",
      taxID: "03028900904",
      foundingDate: "2025-04-08",
      founder: [
        {
          "@type": "Person",
          name: "Francesco Milo",
          jobTitle: "Co-fondatore",
          worksFor: { "@id": "https://www.ksrentsardinia.com/#organization" },
        },
        {
          "@type": "Person",
          name: "Salvatore Milo",
          jobTitle: "Co-fondatore",
          worksFor: { "@id": "https://www.ksrentsardinia.com/#organization" },
        },
      ],
      description:
        "Autonoleggio premium a breve termine in Sardegna. Flotta moderna: dalla city car alla supercar, SUV, scooter e quad. Consegna a domicilio in tutta la Gallura (gratuita a Olbia, su preventivo nelle altre località). Noleggio anche senza carta di credito obbligatoria.",
      disambiguatingDescription:
        "KS Rent Sardinia è un autonoleggio premium con sede a Olbia, Sardegna, con partita IVA IT03028900904. È un'entità locale e indipendente, non affiliata con altre società omonime come KS Rent S.r.l. operanti sul resto del territorio nazionale.",
      url: "https://www.ksrentsardinia.com",
      telephone: "+393446107071",
      email: "ksrentsrl@gmail.com",
      priceRange: "€€",
      currenciesAccepted: "EUR",
      paymentAccepted: "Cash, Credit Card, Debit Card, Prepaid Card, Bonifico Bancario",
      inLanguage: "it-IT",
      // aggregateRating viene iniettato dinamicamente da BaseLayout via
      // getAggregateRating() (lib/reviews.ts) o tramite la prop esplicita
      // della pagina. Niente valore hardcoded: evita drift con il dato reale.
      knowsAbout: [
        "Noleggio auto Olbia",
        "Autonoleggio Olbia",
        "Noleggio auto premium Olbia",
        "Noleggio auto sportive Costa Smeralda",
        "Noleggio senza carta di credito Sardegna",
        "Consegna auto in Aeroporto Olbia Costa Smeralda",
        "Consegna auto al Porto di Olbia Isola Bianca",
        "Noleggio SUV Porto Cervo",
        "Noleggio moto e quad Gallura",
        "Rent a car Gallura",
      ],
      logo: "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/asset/KSRENTlogo.png",
      image: "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/asset/og-image.jpg",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Viale Aldo Moro 367",
        addressLocality: "Olbia",
        postalCode: "07026",
        addressRegion: "SS",
        addressCountry: "IT",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 40.944573,
        longitude: 9.497897,
      },
      location: [
        {
          "@type": "Place",
          name: "KS Rent Sardinia — Sede Principale",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Viale Aldo Moro 367",
            addressLocality: "Olbia",
            postalCode: "07026",
            addressRegion: "SS",
            addressCountry: "IT",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 40.944573,
            longitude: 9.497897,
          },
        },
        {
          "@type": "Place",
          name: "KS Rent Sardinia — Punto di Consegna Porto Olbia Isola Bianca",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Viale Isola Bianca 38",
            addressLocality: "Olbia",
            postalCode: "07026",
            addressRegion: "SS",
            addressCountry: "IT",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 40.923018,
            longitude: 9.520169,
          },
        },
      ],
      areaServed: AREA_SERVED,
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "10:00",
          closes: "13:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "15:00",
          closes: "22:30",
        },
      ],
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Parcheggio gratuito", value: true },
        { "@type": "LocationFeatureSpecification", name: "Parcheggio in loco", value: true },
        { "@type": "LocationFeatureSpecification", name: "Ingresso accessibile in sedia a rotelle", value: true },
        { "@type": "LocationFeatureSpecification", name: "Parcheggio accessibile in sedia a rotelle", value: true },
        { "@type": "LocationFeatureSpecification", name: "Pagamenti contactless NFC", value: true },
        { "@type": "LocationFeatureSpecification", name: "WhatsApp", value: true },
      ],
      sameAs: SAME_AS,
    },
    {
      "@type": "Service",
      "@id": "https://www.ksrentsardinia.com/#delivery-service",
      name: "Consegna a domicilio auto, moto e quad",
      serviceType: "Vehicle delivery",
      description:
        "Consegna dei veicoli a noleggio in aeroporto Olbia Costa Smeralda (OLB), porto Isola Bianca, hotel, ville e località della Gallura e Costa Smeralda. Coordinata con l'orario del volo o del traghetto. Gratuita nel comune di Olbia; tariffa trasparente nelle altre località a partire da 5 €, dichiarata in fase di preventivo.",
      provider: { "@id": "https://www.ksrentsardinia.com/#organization" },
      areaServed: AREA_SERVED,
      hoursAvailable: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "09:00",
          closes: "22:30",
        },
      ],
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: "https://www.ksrentsardinia.com/prenotaora",
        servicePhone: "+393446107071",
        serviceSmsNumber: "+393446107071",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.ksrentsardinia.com/#website",
      url: "https://www.ksrentsardinia.com/",
      name: "KS Rent Sardinia",
      publisher: { "@id": "https://www.ksrentsardinia.com/#organization" },
      inLanguage: ["it-IT", "en-GB", "de-DE", "fr-FR"],
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://www.ksrentsardinia.com/flotta?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

/* ── FAQ JSON-LD (Homepage) ── */

export const faqPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.ksrentsardinia.com/#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quali metodi di pagamento accetta KS Rent Sardinia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "KS Rent Sardinia offre massima flessibilità: accettiamo carte di credito (non obbligatoria), carte prepagate, bancomat, carte di debito e contanti. Il deposito cauzionale viene gestito in base al veicolo scelto.",
      },
    },
    {
      "@type": "Question",
      name: "KS Rent Sardinia richiede uno score bancario o controlli creditizi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. KS Rent Sardinia non richiede score bancario né documentazione burocratica aggiuntiva. Il servizio si basa sulla fiducia e sulla trasparenza verso il cliente.",
      },
    },
    {
      "@type": "Question",
      name: "Come funziona il deposito cauzionale con KS Rent Sardinia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "KS Rent Sardinia richiede un deposito cauzionale e una franchigia assicurativa il cui importo varia in base alla categoria del veicolo scelto. Tutto viene gestito in modo chiaro e trasparente al momento della firma del contratto.",
      },
    },
    {
      "@type": "Question",
      name: "In quali località KS Rent Sardinia effettua la consegna a domicilio del veicolo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "KS Rent Sardinia consegna a domicilio in tutta la Gallura e la Costa Smeralda. Oltre alle sedi di Olbia (Viale Isola Bianca 38 e Viale Aldo Moro 367) e all'Aeroporto Costa Smeralda di Olbia, consegniamo da San Teodoro a Porto Cervo e Palau, coprendo Porto Rotondo, Baja Sardinia, Cannigione, Arzachena, Murta Maria, Porto San Paolo, Puntaldia e San Pantaleo. La consegna avviene direttamente in villa, in hotel, in spiaggia, al ristorante o al porto.",
      },
    },
    {
      "@type": "Question",
      name: "Dove si trovano le sedi fisiche di KS Rent Sardinia a Olbia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "KS Rent Sardinia dispone di due sedi a Olbia: la Sede Operativa in Viale Isola Bianca 38 (al Porto Isola Bianca, ideale per chi arriva in traghetto) e la Sede Legale in Viale Aldo Moro 367, comoda per chi arriva dall'aeroporto.",
      },
    },
    {
      "@type": "Question",
      name: "Quali documenti servono per noleggiare un'auto con KS Rent Sardinia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Per noleggiare un'auto con KS Rent Sardinia è sufficiente presentare una patente di guida valida, il codice fiscale e un documento d'identità in corso di validità (carta d'identità o passaporto).",
      },
    },
    {
      "@type": "Question",
      name: "Come funziona il chilometraggio con KS Rent Sardinia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I pacchetti chilometrici di KS Rent Sardinia variano in base alla categoria del veicolo (City Car, Premium, Scooter o Quad). Contattaci per trovare la soluzione più adatta al tuo itinerario in Sardegna.",
      },
    },
    {
      "@type": "Question",
      name: "Cosa succede in caso di guasto o incidente con un veicolo KS Rent Sardinia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "KS Rent Sardinia garantisce assistenza attiva 24 ore su 24, 7 giorni su 7. In caso di guasto o incidente è sufficiente chiamare il numero dedicato per ricevere supporto immediato.",
      },
    },
    {
      "@type": "Question",
      name: "Posso cancellare o modificare una prenotazione con KS Rent Sardinia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sì, KS Rent Sardinia offre opzioni di cancellazione e modifica flessibili. Contatta il team su WhatsApp per gestire le date della prenotazione in qualsiasi momento.",
      },
    },
    {
      "@type": "Question",
      name: "Come si richiede un'auto con KS Rent Sardinia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vai alla pagina /prenotaora su ksrentsardinia.com: scegli il veicolo, il periodo di noleggio e il punto di ritiro o consegna — KS Rent Sardinia copre da San Teodoro a Porto Cervo fino a Palau — poi invii la richiesta su WhatsApp con un messaggio già precompilato. Ti rispondiamo di persona per confermare la disponibilità, le coperture (kasko/franchigia) ed eventuali costi di consegna, e organizziamo insieme ritiro e contratto. Nessun pagamento anticipato online e nessun obbligo di carta di credito.",
      },
    },
  ],
};

/* ── Landing-page specific FAQ JSON-LD ── */

export const aeroportoFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.ksrentsardinia.com/noleggio-auto-aeroporto-olbia#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "Come funziona la consegna all'Aeroporto di Olbia con KS Rent Sardinia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "KS Rent Sardinia ti aspetta direttamente agli arrivi dell'Aeroporto Costa Smeralda di Olbia. Niente file o navette: il tuo veicolo è già pronto nel parcheggio dedicato, acceso e climatizzato.",
      },
    },
    {
      "@type": "Question",
      name: "È possibile noleggiare un'auto all'aeroporto di Olbia senza carta di credito?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sì. KS Rent Sardinia accetta carte di debito, prepagate e contanti per il deposito cauzionale. La carta di credito non è obbligatoria.",
      },
    },
    {
      "@type": "Question",
      name: "Quali metodi di pagamento accetta KS Rent Sardinia all'aeroporto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "KS Rent Sardinia accetta tutti i principali circuiti: Visa, Mastercard, American Express, oltre a carte di debito, prepagate, contanti e bonifici istantanei.",
      },
    },
    {
      "@type": "Question",
      name: "Come funziona il deposito cauzionale all'aeroporto di Olbia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Il deposito cauzionale di KS Rent Sardinia è proporzionato alla tipologia di veicolo e viene gestito in modo chiaro e trasparente al momento del ritiro, direttamente in aeroporto.",
      },
    },
    {
      "@type": "Question",
      name: "Posso cancellare una prenotazione aeroporto con KS Rent Sardinia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sì, KS Rent Sardinia offre politiche di cancellazione flessibili e trasparenti, gestibili direttamente su WhatsApp o tramite il profilo online.",
      },
    },
  ],
};

export const portoFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.ksrentsardinia.com/noleggio-auto-porto-olbia#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "Dove ritirare l'auto al Porto di Olbia con KS Rent Sardinia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La sede operativa di KS Rent Sardinia si trova in Viale Isola Bianca 38, esattamente al Porto di Olbia Isola Bianca. Appena sbarchi dal traghetto, il veicolo è pronto ad aspettarti a pochi metri. Nessuna navetta, nessuna attesa.",
      },
    },
    {
      "@type": "Question",
      name: "Serve la carta di credito per noleggiare un'auto al Porto di Olbia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. KS Rent Sardinia non impone l'obbligo di carta di credito tradizionale. Accettiamo carte prepagate, bancomat, carte di debito e contanti. Il deposito cauzionale è flessibile e varia in base al veicolo scelto.",
      },
    },
    {
      "@type": "Question",
      name: "Come richiedo un veicolo con KS Rent Sardinia al porto di Olbia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dalla pagina di prenotazione scegli il veicolo, le date e il punto di ritiro o consegna, poi invii la richiesta su WhatsApp con un messaggio già pronto. Un operatore ti risponde di persona per confermare la disponibilità, le coperture e i dettagli del ritiro al Porto Isola Bianca. Così evitiamo sovrapposizioni di date e gestiamo ogni richiesta su misura.",
      },
    },
    {
      "@type": "Question",
      name: "Come funziona il deposito cauzionale al Porto di Olbia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Il deposito cauzionale di KS Rent Sardinia viene gestito in modo chiaro e trasparente al momento del ritiro. L'importo è proporzionato alla categoria del veicolo scelto.",
      },
    },
    {
      "@type": "Question",
      name: "Quali veicoli sono disponibili al Porto di Olbia con KS Rent Sardinia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Al Porto di Olbia KS Rent Sardinia offre l'intera gamma: auto sportive, supercar, SUV premium, moto e quad. Ogni veicolo è disponibile dal momento dello sbarco, per iniziare subito la tua avventura in Costa Smeralda.",
      },
    },
  ],
};

/* ── Base per le Pagine Dinamiche (Spiagge e Località) ── */

const carRentalBase = {
  "@type": "AutoRental",
  name: "KS Rent Sardinia",
  legalName: "KS Rent S.R.L.",
  alternateName: "KS Rent",
  vatID: "IT03028900904",
  taxID: "03028900904",
  foundingDate: "2025-04-08",
  disambiguatingDescription:
    "KS Rent Sardinia è un autonoleggio premium con sede a Olbia, Sardegna, con partita IVA IT03028900904. È un'entità locale e indipendente, non affiliata con altre società omonime come KS Rent S.r.l. operanti sul resto del territorio nazionale.",
  url: "https://www.ksrentsardinia.com",
  telephone: "+393446107071",
  email: "ksrentsrl@gmail.com",
  priceRange: "€€",
  paymentAccepted: "Cash, Credit Card, Debit Card, Prepaid Card, Bonifico Bancario",
  inLanguage: "it-IT",
  knowsAbout: [
    "Noleggio auto Olbia",
    "Autonoleggio Olbia",
    "Noleggio auto premium Olbia",
    "Noleggio auto sportive Olbia",
    "Noleggio senza carta di credito Sardegna",
    "Consegna auto a domicilio Gallura",
    "Rent a car aeroporto Olbia",
    "Noleggio auto porto Olbia Isola Bianca",
  ],
  logo: "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/asset/KSRENTlogo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Viale Aldo Moro 367",
    addressLocality: "Olbia",
    postalCode: "07026",
    addressRegion: "SS",
    addressCountry: "IT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.944573,
    longitude: 9.497897,
  },
  sameAs: SAME_AS,
};

export const buildVehicleJsonLd = (vehicle: {
  make: string;
  model: string;
  daily_rate: number;
  image_url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: `Noleggio ${vehicle.make} ${vehicle.model} Olbia — KS Rent Sardinia`,
  description: `Noleggia ${vehicle.make} ${vehicle.model} in Costa Smeralda con KS Rent Sardinia: protezione completa, deposito trasparente e consegna a domicilio in tutta la Gallura.`,
  image: vehicle.image_url,
  brand: {
    "@type": "Brand",
    name: vehicle.make,
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "EUR",
    price: vehicle.daily_rate,
    unitCode: "DAY",
    availability: "https://schema.org/InStock",
    seller: {
      "@type": "Organization",
      name: "KS Rent Sardinia",
      legalName: "KS Rent S.R.L.",
      url: "https://www.ksrentsardinia.com",
    },
  },
});

/* ── Dynamic page JSON-LD builders ── */

interface PageFaq {
  q: string;
  a: string;
}

const buildFaqPageSchema = (pageUrl: string, faqs: PageFaq[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${pageUrl}#faq`,
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
});

export const buildLocationJsonLd = (
  page: {
    title: string;
    meta_description: string;
    canonical_url?: string;
    og_image_url?: string;
  },
  faqs?: PageFaq[]
) => {
  const pageUrl = page.canonical_url || "https://www.ksrentsardinia.com";
  const pageImage = page.og_image_url || "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/asset/og-image.jpg";
  return [
    {
      "@context": "https://schema.org",
      ...carRentalBase,
      description: page.meta_description,
      url: pageUrl,
      image: pageImage,
      areaServed: { "@type": "Place", name: page.title },
    },
    {
      "@context": "https://schema.org",
      "@type": "Place",
      name: page.title,
      description: page.meta_description,
      image: page.og_image_url,
      isPartOf: { "@type": "AdministrativeArea", name: "Gallura, Sardegna" },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `Noleggio Auto a ${page.title}`,
      serviceType: "Car Rental",
      description: page.meta_description,
      url: pageUrl,
      provider: {
        "@type": "AutoRental",
        name: "KS Rent Sardinia",
        legalName: "KS Rent S.R.L.",
        url: "https://www.ksrentsardinia.com",
        telephone: "+393446107071",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Viale Aldo Moro 367",
          addressLocality: "Olbia",
          postalCode: "07026",
          addressRegion: "SS",
          addressCountry: "IT",
        },
      },
      areaServed: { "@type": "Place", name: page.title },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.ksrentsardinia.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: page.title,
          item: pageUrl,
        },
      ],
    },
    ...(faqs && faqs.length > 0 ? [buildFaqPageSchema(pageUrl, faqs)] : []),
  ];
};

export const buildBeachJsonLd = (
  page: {
    title: string;
    meta_description: string;
    canonical_url?: string;
    og_image_url?: string;
    parking_info?: string;
  },
  faqs?: PageFaq[]
) => {
  const pageUrl = page.canonical_url || "https://www.ksrentsardinia.com";
  const pageImage = page.og_image_url || "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/asset/og-image.jpg";
  return [
    {
      "@context": "https://schema.org",
      ...carRentalBase,
      description: page.meta_description,
      url: pageUrl,
      image: pageImage,
      areaServed: { "@type": "Beach", name: page.title },
    },
    {
      "@context": "https://schema.org",
      "@type": ["TouristAttraction", "Beach"],
      "@id": `${pageUrl}#beach`,
      name: page.title,
      description: page.meta_description,
      image: page.og_image_url,
      url: pageUrl,
      touristType: ["Family", "Couple", "Adventure", "Beach lover", "Photography enthusiast"],
      isAccessibleForFree: true,
      publicAccess: true,
      isPartOf: { "@type": "AdministrativeArea", name: "Costa Smeralda, Sardegna" },
      containedInPlace: { "@type": "AdministrativeArea", name: "Gallura, Sardegna, Italia" },
      ...(page.parking_info
        ? {
            amenityFeature: {
              "@type": "LocationFeatureSpecification",
              name: "Parcheggio",
              value: page.parking_info,
            },
          }
        : {}),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.ksrentsardinia.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: page.title,
          item: pageUrl,
        },
      ],
    },
    ...(faqs && faqs.length > 0 ? [buildFaqPageSchema(pageUrl, faqs)] : []),
  ];
};

export const aeroportoAutoRentalJsonLd = {
  "@context": "https://schema.org",
  ...carRentalBase,
  name: "KS Rent Sardinia — Noleggio Auto Aeroporto Olbia Costa Smeralda",
  description:
    "KS Rent Sardinia offre noleggio auto con consegna immediata all'Aeroporto di Olbia Costa Smeralda. Supercar, SUV e moto senza carta di credito obbligatoria.",
  url: "https://www.ksrentsardinia.com/noleggio-auto-aeroporto-olbia",
  image: "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/asset/og-image.jpg",
  areaServed: { "@type": "Place", name: "Aeroporto Olbia Costa Smeralda" },
};

export const olbiaAutoRentalJsonLd = {
  "@context": "https://schema.org",
  ...carRentalBase,
  "@id": "https://www.ksrentsardinia.com/noleggio-auto-olbia#service",
  name: "KS Rent Sardinia — Noleggio Auto Olbia",
  description:
    "Noleggio auto a Olbia con consegna VIP gratuita in aeroporto Costa Smeralda (OLB), porto Isola Bianca, hotel e ville. Flotta boutique di supercar, SUV premium, auto, moto e quad. Anche senza carta di credito obbligatoria.",
  url: "https://www.ksrentsardinia.com/noleggio-auto-olbia",
  image: "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/asset/og-image.jpg",
  areaServed: [
    { "@type": "City", name: "Olbia" },
    { "@type": "Place", name: "Aeroporto di Olbia Costa Smeralda (OLB)" },
    { "@type": "Place", name: "Porto di Olbia Isola Bianca" },
    { "@type": "Place", name: "Costa Smeralda" },
    { "@type": "Place", name: "Porto Cervo" },
    { "@type": "Place", name: "Porto Rotondo" },
    { "@type": "City", name: "San Teodoro" },
  ],
};

export const sportiveRentalJsonLd = {
  "@context": "https://schema.org",
  ...carRentalBase,
  "@id": "https://www.ksrentsardinia.com/noleggio-auto-sportive-olbia#service",
  name: "KS Rent Sardinia — Noleggio Auto Sportive Olbia",
  description:
    "Noleggio auto sportive a Olbia: Audi RS3, BMW M2 e Mercedes Classe A, con consegna gratuita all'aeroporto Costa Smeralda (OLB) e al porto Isola Bianca. Per le strade panoramiche della Costa Smeralda, anche senza carta di credito obbligatoria.",
  url: "https://www.ksrentsardinia.com/noleggio-auto-sportive-olbia",
  image: "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/asset/og-image.jpg",
  areaServed: [
    { "@type": "City", name: "Olbia" },
    { "@type": "Place", name: "Aeroporto di Olbia Costa Smeralda (OLB)" },
    { "@type": "Place", name: "Porto di Olbia Isola Bianca" },
    { "@type": "Place", name: "Costa Smeralda" },
    { "@type": "Place", name: "Porto Cervo" },
    { "@type": "Place", name: "Gallura" },
  ],
  // Item offerti tipati Car (tipo schema.org valido) per le query "noleggio
  // auto sportive Olbia". Posizionamento sportive/premium, non lusso/supercar.
  makesOffer: [
    {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "EUR",
      seller: { "@id": "https://www.ksrentsardinia.com/#organization" },
      itemOffered: {
        "@type": "Car",
        name: "Audi RS3 Sportback",
        brand: { "@type": "Brand", name: "Audi" },
        model: "RS3",
        vehicleConfiguration: "Berlina sportiva 400 CV",
        fuelType: "Gasoline",
        url: "https://www.ksrentsardinia.com/flotta/audi-rs3",
      },
    },
    {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "EUR",
      seller: { "@id": "https://www.ksrentsardinia.com/#organization" },
      itemOffered: {
        "@type": "Car",
        name: "BMW M2 Coupé",
        brand: { "@type": "Brand", name: "BMW" },
        model: "M2",
        vehicleConfiguration: "Coupé sportiva",
        fuelType: "Gasoline",
        url: "https://www.ksrentsardinia.com/flotta/bmw-m2",
      },
    },
    {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "EUR",
      seller: { "@id": "https://www.ksrentsardinia.com/#organization" },
      itemOffered: {
        "@type": "Car",
        name: "Mercedes Classe A 180d",
        brand: { "@type": "Brand", name: "Mercedes-Benz" },
        model: "Classe A",
        vehicleConfiguration: "Berlina premium",
        fuelType: "Diesel",
        url: "https://www.ksrentsardinia.com/flotta/mercedes-classe-a",
      },
    },
  ],
};

/**
 * FAQ landing sportive in 4 lingue — testo ALLINEATO alla FAQ visibile in
 * SportiveContent.astro (così lo schema combacia con il contenuto mostrato).
 */
type SportiveFaqLang = "it" | "en" | "de" | "fr";
const SPORTIVE_FAQ_URL: Record<SportiveFaqLang, string> = {
  it: "https://www.ksrentsardinia.com/noleggio-auto-sportive-olbia",
  en: "https://www.ksrentsardinia.com/en/sports-car-hire-olbia",
  de: "https://www.ksrentsardinia.com/de/sportwagen-mieten-olbia",
  fr: "https://www.ksrentsardinia.com/fr/location-voiture-sportive-olbia",
};
const SPORTIVE_FAQS: Record<SportiveFaqLang, { q: string; a: string }[]> = {
  it: [
    { q: "Quali auto sportive posso noleggiare a Olbia?", a: "Audi RS3 Sportback (400 CV), BMW M2 Coupé e, in chiave premium, la Mercedes Classe A 180d. Sono auto di nostra proprietà, controllate prima di ogni noleggio. Non offriamo supercar esotiche: puntiamo su sportive accessibili, affidabili e divertenti da guidare." },
    { q: "Qual è l'età minima per una sportiva?", a: "Per Audi RS3 e BMW M2 l'età minima è 25 anni con patente B da almeno un anno; per la Mercedes Classe A si parte da 21 anni. Al ritiro servono patente, documento d'identità e codice fiscale." },
    { q: "Posso noleggiare una sportiva senza carta di credito?", a: "Sì. Accettiamo bancomat, carte di debito, prepagate ricaricabili (Postepay, Revolut, N26) e contanti anche per il deposito cauzionale. La carta di credito non è obbligatoria." },
    { q: "Consegnate la sportiva in aeroporto o in hotel?", a: "Sì, consegna gratuita all'aeroporto di Olbia Costa Smeralda (OLB) e al porto Isola Bianca, e a domicilio in hotel o villa in tutta la Gallura e Costa Smeralda. Per le consegne fuori Olbia il costo è dichiarato nel preventivo." },
    { q: "Quanto costa noleggiare una sportiva a Olbia?", a: "Tariffe stagionali su preventivo: la Mercedes Classe A parte da circa 90 €/giorno in bassa stagione; per RS3 e M2 scrivici su WhatsApp con date e veicolo per un preventivo immediato. Deposito e franchigia variano per veicolo e te li comunichiamo prima." },
  ],
  en: [
    { q: "Which sports cars can I hire in Olbia?", a: "The Audi RS3 Sportback (400 hp), the BMW M2 Coupé and, as a premium option, the Mercedes A-Class 180d. They are owned by us and checked before every rental. We don't offer exotic supercars: we focus on accessible, reliable and fun sports cars." },
    { q: "What is the minimum age for a sports car?", a: "For the Audi RS3 and BMW M2 the minimum age is 25 with a category B licence held for at least a year; for the Mercedes A-Class it starts at 21. At pick-up you need your licence, an ID and tax code." },
    { q: "Can I hire a sports car without a credit card?", a: "Yes. We accept bancomat, debit cards, rechargeable prepaid cards (Postepay, Revolut, N26) and cash for the security deposit too. A credit card is not required." },
    { q: "Do you deliver the sports car to the airport or hotel?", a: "Yes, free delivery to Olbia Costa Smeralda Airport (OLB) and the Isola Bianca port, and to your hotel or villa across Gallura and the Costa Smeralda. For deliveries outside Olbia the cost is stated in the quote." },
    { q: "How much does it cost to hire a sports car in Olbia?", a: "Seasonal rates on quote: the Mercedes A-Class starts at around €90/day in low season; for the RS3 and M2 message us on WhatsApp with dates and vehicle for an instant quote. Deposit and excess vary by vehicle and are stated beforehand." },
  ],
  de: [
    { q: "Welche Sportwagen kann ich in Olbia mieten?", a: "Den Audi RS3 Sportback (400 PS), das BMW M2 Coupé und als Premium-Option die Mercedes A-Klasse 180d. Sie sind in unserem Eigenbesitz und werden vor jeder Vermietung geprüft. Wir bieten keine exotischen Supersportwagen: Wir setzen auf zugängliche, zuverlässige und unterhaltsame Sportwagen." },
    { q: "Wie hoch ist das Mindestalter für einen Sportwagen?", a: "Für Audi RS3 und BMW M2 beträgt das Mindestalter 25 Jahre mit Führerschein Klasse B seit mindestens einem Jahr; für die Mercedes A-Klasse ab 21 Jahren. Bei der Abholung benötigen Sie Führerschein, Ausweis und Steuernummer." },
    { q: "Kann ich einen Sportwagen ohne Kreditkarte mieten?", a: "Ja. Wir akzeptieren Bancomat, Debitkarten, aufladbare Prepaid-Karten (Postepay, Revolut, N26) und Bargeld auch für die Kaution. Eine Kreditkarte ist nicht erforderlich." },
    { q: "Liefern Sie den Sportwagen zum Flughafen oder Hotel?", a: "Ja, kostenlose Lieferung zum Flughafen Olbia Costa Smeralda (OLB) und zum Hafen Isola Bianca sowie an Ihr Hotel oder Ihre Villa in ganz Gallura und an der Costa Smeralda. Für Lieferungen außerhalb Olbias werden die Kosten im Angebot genannt." },
    { q: "Was kostet die Miete eines Sportwagens in Olbia?", a: "Saisonpreise auf Anfrage: Die Mercedes A-Klasse beginnt in der Nebensaison bei rund 90 €/Tag; für RS3 und M2 schreiben Sie uns per WhatsApp mit Daten und Fahrzeug für ein sofortiges Angebot. Kaution und Selbstbeteiligung variieren je Fahrzeug und werden vorab mitgeteilt." },
  ],
  fr: [
    { q: "Quelles voitures sportives puis-je louer à Olbia ?", a: "L'Audi RS3 Sportback (400 ch), la BMW M2 Coupé et, en option premium, la Mercedes Classe A 180d. Elles nous appartiennent et sont vérifiées avant chaque location. Nous ne proposons pas de supercars exotiques : nous misons sur des sportives accessibles, fiables et amusantes." },
    { q: "Quel est l'âge minimum pour une sportive ?", a: "Pour l'Audi RS3 et la BMW M2, l'âge minimum est de 25 ans avec un permis B depuis au moins un an ; pour la Mercedes Classe A, à partir de 21 ans. À la prise en charge, il faut le permis, une pièce d'identité et le code fiscal." },
    { q: "Puis-je louer une sportive sans carte de crédit ?", a: "Oui. Nous acceptons le bancomat, les cartes de débit, les cartes prépayées rechargeables (Postepay, Revolut, N26) et les espèces, y compris pour la caution. La carte de crédit n'est pas obligatoire." },
    { q: "Livrez-vous la sportive à l'aéroport ou à l'hôtel ?", a: "Oui, livraison gratuite à l'aéroport d'Olbia Costa Smeralda (OLB) et au port d'Isola Bianca, ainsi qu'à votre hôtel ou villa dans toute la Gallura et la Costa Smeralda. Pour les livraisons hors d'Olbia, le coût est indiqué dans le devis." },
    { q: "Combien coûte la location d'une sportive à Olbia ?", a: "Tarifs saisonniers sur devis : la Mercedes Classe A démarre autour de 90 €/jour en basse saison ; pour la RS3 et la M2, écrivez-nous sur WhatsApp avec les dates et le véhicule pour un devis immédiat. Caution et franchise varient selon le véhicule et sont communiquées au préalable." },
  ],
};
export function buildSportiveFaqJsonLd(lang: SportiveFaqLang = "it") {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SPORTIVE_FAQ_URL[lang]}#faq`,
    mainEntity: SPORTIVE_FAQS[lang].map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export const motoScooterRentalJsonLd = {
  "@context": "https://schema.org",
  ...carRentalBase,
  "@id": "https://www.ksrentsardinia.com/noleggio-moto-scooter-olbia#service",
  name: "KS Rent Sardinia — Noleggio Scooter, Moto e Quad Olbia",
  description:
    "Noleggio scooter Honda SH 125 e SH 350 e quad Yamaha Raptor a Olbia, con casco incluso e consegna gratuita all'aeroporto Costa Smeralda (OLB), al porto Isola Bianca e in hotel. Anche senza carta di credito obbligatoria.",
  url: "https://www.ksrentsardinia.com/noleggio-moto-scooter-olbia",
  image: "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/asset/og-image.jpg",
  areaServed: [
    { "@type": "City", name: "Olbia" },
    { "@type": "Place", name: "Aeroporto di Olbia Costa Smeralda (OLB)" },
    { "@type": "Place", name: "Porto di Olbia Isola Bianca" },
    { "@type": "Place", name: "Costa Smeralda" },
    { "@type": "Place", name: "Gallura" },
  ],
  // G4 (SEO Master Plan): schema.org NON ha un tipo "MotorcycleRental".
  // Segnaliamo il noleggio moto/scooter/quad tipando gli item offerti come
  // Motorcycle (tipo valido) tramite makesOffer → entity chiare per query
  // "noleggio scooter/moto Olbia" senza iniettare tipi inesistenti.
  makesOffer: [
    {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "EUR",
      seller: { "@id": "https://www.ksrentsardinia.com/#organization" },
      itemOffered: {
        "@type": "Motorcycle",
        name: "Honda SH 125",
        brand: { "@type": "Brand", name: "Honda" },
        vehicleConfiguration: "Scooter 125 cc",
        fuelType: "Gasoline",
        url: "https://www.ksrentsardinia.com/flotta/honda-sh",
        aggregateRating: VEHICLE_AGG_RATING,
      },
    },
    {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "EUR",
      seller: { "@id": "https://www.ksrentsardinia.com/#organization" },
      itemOffered: {
        "@type": "Motorcycle",
        name: "Honda SH 350",
        brand: { "@type": "Brand", name: "Honda" },
        vehicleConfiguration: "Scooter 350 cc",
        fuelType: "Gasoline",
        url: "https://www.ksrentsardinia.com/flotta/honda-sh",
        aggregateRating: VEHICLE_AGG_RATING,
      },
    },
    {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "EUR",
      seller: { "@id": "https://www.ksrentsardinia.com/#organization" },
      itemOffered: {
        "@type": "Vehicle",
        name: "Yamaha Raptor",
        brand: { "@type": "Brand", name: "Yamaha" },
        vehicleConfiguration: "Quad / ATV",
        fuelType: "Gasoline",
        url: "https://www.ksrentsardinia.com/flotta/yamaha-quad-raptor",
        aggregateRating: VEHICLE_AGG_RATING,
      },
    },
  ],
};

export const motoScooterFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.ksrentsardinia.com/noleggio-moto-scooter-olbia#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "Posso guidare uno scooter 125 con la patente B?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sì. In Italia la patente B abilita alla guida di scooter e moto fino a 125 cc (11 kW): per la Honda SH 125 è quindi sufficiente la patente B. Per la SH 350 serve la patente A2, oppure la B posseduta da almeno 3 anni. Il quad Yamaha Raptor si guida con patente B.",
      },
    },
    {
      "@type": "Question",
      name: "Il casco è incluso nel noleggio scooter a Olbia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sì, sempre. KS Rent Sardinia fornisce caschi omologati per guidatore e passeggero, sanificati prima di ogni consegna. Su richiesta aggiungiamo bauletto portaoggetti e antifurto. Il casco è obbligatorio per legge per tutti gli occupanti.",
      },
    },
    {
      "@type": "Question",
      name: "Qual è l'età minima per noleggiare uno scooter a Olbia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "L'età minima è 18 anni, con patente valida adeguata alla cilindrata: A1 o B per lo scooter 125, A2 o B da almeno 3 anni per il 350, patente B per il quad.",
      },
    },
    {
      "@type": "Question",
      name: "Consegnate lo scooter in aeroporto o in hotel a Olbia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sì. Consegna gratuita all'aeroporto di Olbia Costa Smeralda (OLB) e al porto Isola Bianca, e a domicilio in hotel o villa in tutta la Gallura (Porto Cervo, San Teodoro, Golfo Aranci, Palau). Per le consegne fuori Olbia il costo parte da 5 € ed è dichiarato in modo trasparente nel preventivo.",
      },
    },
    {
      "@type": "Question",
      name: "Posso noleggiare uno scooter senza carta di credito?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sì. Come per le auto, KS Rent Sardinia accetta contanti, carte prepagate ricaricabili (Postepay, Revolut, N26), bancomat e bonifico bancario. Il deposito cauzionale può essere versato anche in contanti al momento della consegna.",
      },
    },
  ],
};

export const olbiaFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.ksrentsardinia.com/noleggio-auto-olbia#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "Si può noleggiare un'auto a Olbia senza carta di credito?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sì. KS Rent Sardinia è uno dei pochi autonoleggi a Olbia che permette il noleggio senza carta di credito obbligatoria. Accettiamo contanti, bonifico bancario e carte prepagate ricaricabili come Postepay, Revolut e N26. Il deposito cauzionale può essere versato anche in contanti al momento del ritiro.",
      },
    },
    {
      "@type": "Question",
      name: "Dove si ritira l'auto all'aeroporto di Olbia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "KS Rent Sardinia consegna gratuitamente l'auto direttamente agli Arrivi dell'Aeroporto di Olbia Costa Smeralda (OLB), distante solo 2 km dalla sede. La consegna è coordinata con l'orario del tuo volo ed è disponibile tutti i giorni dalle 10:00 alle 22:30, anche su voli serali e festivi.",
      },
    },
    {
      "@type": "Question",
      name: "Qual è l'età minima per noleggiare un'auto a Olbia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "L'età minima è di 21 anni per le utilitarie e i veicoli di categoria standard, e 25 anni per auto sportive, supercar e veicoli premium. È richiesta una patente B in corso di validità da almeno 1 anno.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto costa noleggiare un'auto a Olbia con KS Rent Sardinia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le tariffe sono stagionali, valide da aprile a ottobre. Le utilitarie come Fiat Panda Hybrid partono da circa 40€/giorno in bassa stagione; le auto premium come Mercedes Classe A da 90€/giorno; supercar come Audi RS3 e BMW M2 hanno tariffe dedicate. Il listino completo è disponibile su ksrentsardinia.com/tariffe.",
      },
    },
    {
      "@type": "Question",
      name: "Posso consegnare l'auto fuori orario o in un giorno festivo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Siamo aperti tutti i giorni dalle 10:00 alle 13:00 e dalle 15:00 alle 22:30, festivi inclusi (Pasqua, 25 aprile, 1 maggio, 2 giugno). Per consegne o restituzioni fuori orario standard, contattaci su WhatsApp al +39 344 6107071 per organizzare un appuntamento dedicato.",
      },
    },
    {
      "@type": "Question",
      name: "Il chilometraggio è illimitato?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La maggior parte dei nostri noleggi a Olbia prevede chilometraggio incluso adeguato alle escursioni in Gallura e Costa Smeralda. Per soggiorni lunghi o tour della Sardegna offriamo formule con chilometraggio illimitato. Verifica la condizione specifica al momento della prenotazione.",
      },
    },
    {
      "@type": "Question",
      name: "Posso aggiungere un secondo conducente?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sì, è possibile aggiungere un secondo conducente con un piccolo supplemento. È necessaria una patente valida da almeno 1 anno e il rispetto dell'età minima richiesta per la categoria di veicolo prenotata. Il secondo conducente è sempre indicato nel contratto di noleggio.",
      },
    },
    {
      "@type": "Question",
      name: "KS Rent Sardinia è uguale a KS Rent S.r.l. di Roma?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. KS Rent Sardinia (società KS Rent SRL — P.IVA IT03028900904 — sede a Olbia) è un'azienda autonoma e indipendente, NON affiliata né collegata a KS Rent S.r.l. di Roma (sito ksrent.it). Per il noleggio in Sardegna fare sempre riferimento a ksrentsardinia.com.",
      },
    },
    {
      "@type": "Question",
      name: "Avete anche moto, scooter e quad in noleggio a Olbia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sì. La nostra flotta include scooter Honda SH 125 e Honda SH 350 (con caschi inclusi) e quad Yamaha Raptor per escursioni in Gallura. Lo scooter 125 si guida con patente A1; il 350 richiede patente A2 o B con almeno 3 anni di possesso. Il quad si guida con patente B.",
      },
    },
    {
      "@type": "Question",
      name: "Consegnate l'auto a Porto Cervo, San Teodoro o in Costa Smeralda?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sì. Offriamo consegna a domicilio in tutta la Gallura e Costa Smeralda: Porto Cervo, Porto Rotondo, Baja Sardinia, San Teodoro, Palau, Cannigione, Arzachena, San Pantaleo, Golfo Aranci, Puntaldia, Murta Maria, Porto Istana. Tempo di consegna 20-50 minuti dalla nostra sede di Olbia.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto costa la consegna a domicilio fuori da Olbia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La consegna è gratuita all'interno del comune di Olbia, incluso aeroporto OLB e porto Isola Bianca. Per le altre località della Gallura e Costa Smeralda il costo parte da 5 € e viene dichiarato in modo trasparente durante il preventivo, in base alla distanza.",
      },
    },
  ],
};

export const portoAutoRentalJsonLd = {
  "@context": "https://schema.org",
  ...carRentalBase,
  name: "KS Rent Sardinia — Noleggio Auto Porto Olbia Isola Bianca",
  description:
    "KS Rent Sardinia: noleggio auto al Porto di Olbia Isola Bianca. Sede allo sbarco, zero attese. Supercar, SUV e moto senza carta di credito obbligatoria.",
  url: "https://www.ksrentsardinia.com/noleggio-auto-porto-olbia",
  image: "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/asset/og-image.jpg",
  areaServed: { "@type": "Place", name: "Porto Olbia Isola Bianca" },
};

export const flottaJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Flotta Veicoli KS Rent Sardinia — Olbia e Costa Smeralda",
  description:
    "Flotta premium di KS Rent Sardinia: auto sportive, SUV, city car, scooter e quad a noleggio a Olbia, aeroporto, porto e Costa Smeralda.",
  url: "https://www.ksrentsardinia.com/flotta",
  itemListOrder: "https://schema.org/ItemListUnordered",
  numberOfItems: 15,
  provider: {
    "@type": "AutoRental",
    name: "KS Rent Sardinia",
    legalName: "KS Rent S.R.L.",
    url: "https://www.ksrentsardinia.com",
  },
};

/* ── BreadcrumbList builder for static pages ── */

export const buildBreadcrumb = (name: string, path: string) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ksrentsardinia.com" },
    { "@type": "ListItem", position: 2, name, item: `https://www.ksrentsardinia.com${path}` },
  ],
});

/* ── Person schema — Founders (E-E-A-T author signal) ── */

/**
 * Person schema standalone per i due co-fondatori KS Rent S.R.L.
 * Esposto come @id riusabile in tutto il sito (author di articoli, founder
 * di Organization, jobTitle in About page). Google legge questo come
 * "expertise + authoritativeness" del brand: contenuti firmati da persone
 * reali con ruolo definito hanno trust signal molto più alto di "Admin".
 *
 * sameAs: l'utente può aggiungere LinkedIn personali quando disponibili.
 * Per ora include solo i social aziendali come ancoraggio entità Knowledge Graph.
 */
const FOUNDER_KNOWS = [
  "Noleggio auto Olbia",
  "Noleggio auto Costa Smeralda",
  "Noleggio supercar Sardegna",
  "Servizio consegna auto aeroporto Olbia",
  "Servizio consegna auto porto Olbia Isola Bianca",
  "Noleggio senza carta di credito",
  "Gestione flotta veicoli premium",
  "Turismo Gallura",
];

export const personFrancescoMilo = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.ksrentsardinia.com/#person-francesco-milo",
  name: "Francesco Milo",
  givenName: "Francesco",
  familyName: "Milo",
  jobTitle: "Co-fondatore",
  description: "Co-fondatore di KS Rent S.R.L. (KS Rent Sardinia), autonoleggio premium con sede a Olbia. Esperto di gestione flotta e logistica consegne in Gallura e Costa Smeralda.",
  worksFor: { "@id": "https://www.ksrentsardinia.com/#organization" },
  affiliation: { "@id": "https://www.ksrentsardinia.com/#organization" },
  knowsAbout: FOUNDER_KNOWS,
  knowsLanguage: ["it", "en"],
  nationality: { "@type": "Country", name: "Italy" },
  homeLocation: { "@type": "Place", name: "Olbia, Sardegna, Italia" },
  sameAs: [
    "https://www.instagram.com/ksrentsardinia",
  ],
};

export const personSalvatoreMilo = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.ksrentsardinia.com/#person-salvatore-milo",
  name: "Salvatore Milo",
  givenName: "Salvatore",
  familyName: "Milo",
  jobTitle: "Co-fondatore",
  description: "Co-fondatore di KS Rent S.R.L. (KS Rent Sardinia). Si occupa di customer experience, relazioni con i clienti via WhatsApp ed email, e supervisione operativa quotidiana.",
  worksFor: { "@id": "https://www.ksrentsardinia.com/#organization" },
  affiliation: { "@id": "https://www.ksrentsardinia.com/#organization" },
  knowsAbout: FOUNDER_KNOWS,
  knowsLanguage: ["it", "en"],
  nationality: { "@type": "Country", name: "Italy" },
  homeLocation: { "@type": "Place", name: "Olbia, Sardegna, Italia" },
  sameAs: [
    "https://www.instagram.com/ksrentsardinia",
  ],
};

/** Lightweight reference Person — usabile come author in Article senza duplicare l'entità completa */
export const founderAuthorRefs = [
  { "@type": "Person" as const, "@id": "https://www.ksrentsardinia.com/#person-francesco-milo", name: "Francesco Milo" },
  { "@type": "Person" as const, "@id": "https://www.ksrentsardinia.com/#person-salvatore-milo", name: "Salvatore Milo" },
];

/* ── Service schemas dettagliati per servizi distinti (rich results SERP) ── */

const SVC_HOURS = {
  "@type": "OpeningHoursSpecification" as const,
  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  opens: "10:00",
  closes: "22:30",
};

/**
 * Catalogo di Service schemas riusabili. Ogni servizio espone:
 *  - provider come reference all'Organization (@id match)
 *  - offers con priceSpecification per i servizi a pagamento
 *  - areaServed per i delivery zonali
 *  - availableLanguage e hoursAvailable
 * Pensati per essere inclusi su pagine specifiche (es. /tariffe espone tutti,
 * /noleggio-auto-aeroporto-olbia espone solo deliveryAirport, ecc.)
 */
export const serviceDeliveryAirport = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.ksrentsardinia.com/#service-delivery-airport",
  serviceType: "Car delivery at airport",
  name: "Consegna auto all'Aeroporto Olbia Costa Smeralda (OLB)",
  description: "Consegna gratuita del veicolo direttamente all'Aeroporto Olbia Costa Smeralda (OLB), parcheggio antistante l'uscita arrivi. Tempo medio ritiro: 5-10 minuti.",
  provider: { "@id": "https://www.ksrentsardinia.com/#organization" },
  areaServed: { "@type": "Airport", name: "Aeroporto Olbia Costa Smeralda", iataCode: "OLB" },
  availableLanguage: ["it", "en", "de", "fr", "es"],
  hoursAvailable: { ...SVC_HOURS, opens: "06:00", closes: "23:30" },
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", description: "Consegna gratuita inclusa nel noleggio" },
};

export const serviceDeliveryPort = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.ksrentsardinia.com/#service-delivery-port",
  serviceType: "Car delivery at port",
  name: "Consegna auto al Porto Olbia Isola Bianca",
  description: "Consegna gratuita del veicolo a 100 metri dalla banchina di sbarco traghetti Moby, Tirrenia, GNV, Grimaldi, Corsica Ferries al Porto Isola Bianca.",
  provider: { "@id": "https://www.ksrentsardinia.com/#organization" },
  areaServed: { "@type": "Place", name: "Porto Olbia Isola Bianca" },
  availableLanguage: ["it", "en", "de", "fr", "es"],
  hoursAvailable: { ...SVC_HOURS, opens: "06:00", closes: "23:30" },
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", description: "Consegna gratuita inclusa nel noleggio" },
};

export const serviceDeliveryGallura = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.ksrentsardinia.com/#service-delivery-gallura",
  serviceType: "Car home delivery",
  name: "Consegna auto a domicilio in Gallura e Costa Smeralda",
  description: "Consegna del veicolo presso hotel, ville, B&B o resort in tutta la Gallura e Costa Smeralda. Costo trasparente da 5€ comunicato in fase di preventivo, in base alla località.",
  provider: { "@id": "https://www.ksrentsardinia.com/#organization" },
  areaServed: [
    { "@type": "Place", name: "Porto Cervo" },
    { "@type": "Place", name: "Porto Rotondo" },
    { "@type": "Place", name: "Baja Sardinia" },
    { "@type": "Place", name: "Cala di Volpe" },
    { "@type": "Place", name: "Romazzino" },
    { "@type": "Place", name: "Cannigione" },
    { "@type": "Place", name: "Palau" },
    { "@type": "City", name: "San Teodoro" },
    { "@type": "City", name: "Arzachena" },
    { "@type": "City", name: "Olbia" },
  ],
  availableLanguage: ["it", "en", "de", "fr"],
  hoursAvailable: SVC_HOURS,
  offers: { "@type": "Offer", priceCurrency: "EUR", priceSpecification: { "@type": "PriceSpecification", minPrice: "5", maxPrice: "200", priceCurrency: "EUR", description: "Su preventivo in base alla distanza" } },
};

export const serviceNoCreditCard = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.ksrentsardinia.com/#service-no-credit-card",
  serviceType: "Car rental without credit card",
  name: "Noleggio auto senza carta di credito obbligatoria",
  description: "Accettiamo come metodo di pagamento e deposito cauzionale: contanti, bonifico bancario istantaneo, carte prepagate (Postepay, Revolut, N26, Hype, Wise), bancomat e carte di debito. La carta di credito tradizionale NON è obbligatoria.",
  provider: { "@id": "https://www.ksrentsardinia.com/#organization" },
  areaServed: { "@type": "AdministrativeArea", name: "Gallura, Sardegna" },
  availableLanguage: ["it", "en", "de", "fr"],
  hoursAvailable: SVC_HOURS,
};

export const serviceSecondDriver = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.ksrentsardinia.com/#service-second-driver",
  serviceType: "Additional driver option",
  name: "Secondo conducente",
  description: "Aggiunta di un secondo conducente al contratto di noleggio. Gratuito per coppie sposate con documento; costo fisso 20€ totali per altri.",
  provider: { "@id": "https://www.ksrentsardinia.com/#organization" },
  offers: { "@type": "Offer", price: "20", priceCurrency: "EUR", description: "Costo fisso forfait per l'intero noleggio (gratuito per coppie sposate)" },
};

export const serviceChildSeat = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.ksrentsardinia.com/#service-child-seat",
  serviceType: "Child car seat rental",
  name: "Noleggio seggiolino auto per bambini",
  description: "Seggiolini auto gruppo 1, 2 e 3 (9-36 kg) omologati ECE R44/04. Sanificati a vapore tra un noleggio e l'altro. Disponibile gruppo 0+ neonato su prenotazione 7+ giorni anticipo.",
  provider: { "@id": "https://www.ksrentsardinia.com/#organization" },
  offers: { "@type": "Offer", price: "5", priceCurrency: "EUR", priceSpecification: { "@type": "UnitPriceSpecification", price: "5", priceCurrency: "EUR", unitText: "DAY", referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitText: "DAY" } }, description: "5€/giorno, massimo 25€ totale per noleggio" },
};

export const serviceExcessReduction = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.ksrentsardinia.com/#service-excess-reduction",
  serviceType: "Insurance excess reduction",
  name: "Riduzione franchigia kasko",
  description: "Riduzione opzionale della franchigia kasko a zero. Disponibile su tutti i veicoli della flotta. Costo 15€/giorno, da sottoscrivere al ritiro.",
  provider: { "@id": "https://www.ksrentsardinia.com/#organization" },
  offers: { "@type": "Offer", price: "15", priceCurrency: "EUR", priceSpecification: { "@type": "UnitPriceSpecification", price: "15", priceCurrency: "EUR", unitText: "DAY", referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitText: "DAY" } }, description: "15€/giorno aggiuntivi al noleggio" },
};

/** Catalogo completo Service per inclusione su /tariffe */
export const serviceCatalogJsonLd = [
  serviceDeliveryAirport,
  serviceDeliveryPort,
  serviceDeliveryGallura,
  serviceNoCreditCard,
  serviceSecondDriver,
  serviceChildSeat,
  serviceExcessReduction,
];

/* ── Speakable schema per FAQ critiche (Voice Search / Google Assistant) ── */

/**
 * Speakable schema su WebPage homepage: specifica quali sezioni della pagina
 * sono adatte per la lettura vocale (Google Assistant, Alexa, Siri quando
 * leggono articoli). Indica CSS selector dei testi importanti.
 *
 * Per ora supporta IT/EN/DE/FR e indica selettori semantici basati su:
 *  - hero subtitle (USP principale del brand)
 *  - faq section (risposte ai dubbi piu comuni)
 */
export function buildSpeakableJsonLd(pageUrl: string, lang: "it" | "en" | "de" | "fr" = "it") {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage-speakable`,
    url: pageUrl,
    inLanguage: lang === "en" ? "en-GB" : lang === "de" ? "de-DE" : lang === "fr" ? "fr-FR" : "it-IT",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".hero-headline", ".hero-subheadline", ".faq-answer", "[data-speakable]"],
      xpath: [
        "/html/head/title",
        "/html/head/meta[@name='description']/@content",
      ],
    },
  };
}

/* ── CollectionPage schema builders per pagine indice ── */

/**
 * Genera CollectionPage schema per pagine indice (es. /flotta, /guide,
 * /flotta/confronta). Indica chiaramente a Google che la pagina è una
 * collection di sub-pagine, non una pagina contenuto singolo. Migliora
 * la classificazione + sitelinks search box.
 */
export function buildCollectionPageJsonLd(input: {
  name: string;
  description: string;
  url: string;
  numberOfItems?: number;
  inLanguage?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${input.url}#collection`,
    name: input.name,
    description: input.description,
    url: input.url,
    inLanguage: input.inLanguage || "it-IT",
    isPartOf: { "@id": "https://www.ksrentsardinia.com/#organization" },
    ...(input.numberOfItems
      ? { mainEntity: { "@type": "ItemList", numberOfItems: input.numberOfItems } }
      : {}),
  };
}

/* ── BreadcrumbList builder per percorsi multi-livello ── */

export const buildBreadcrumbJsonLd = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ksrentsardinia.com" },
    ...items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 2,
      name: item.name,
      item: `https://www.ksrentsardinia.com${item.path}`,
    })),
  ],
});

/* ── Vehicle schema builder per pagine /flotta/[slug] ── */

interface VehiclePageData {
  group_slug: string;
  name: string;
  brand?: string | null;
  model?: string | null;
  year?: number | null;
  category?: string | null;
  fuel?: string | null;
  description?: string | null;
  image?: string | null;
  priceFrom?: number | null;
  priceTo?: number | null;
  url: string;
  aggregateRating?: { ratingValue: number; reviewCount: number } | null;
  reviews?: { author: string; rating: number; text: string; datePublished: string }[] | null;
}

// "Consegna" gratuita a domicilio in Sardegna: il veicolo è pronto in giornata
// (handling 0d, transit 0-1d). E' un noleggio, non un acquisto: nessuna policy
// di reso applicabile (MerchantReturnNotPermitted).
const RENTAL_SHIPPING_DETAILS = {
  "@type": "OfferShippingDetails",
  shippingRate: { "@type": "MonetaryAmount", value: "0", currency: "EUR" },
  shippingDestination: { "@type": "DefinedRegion", addressCountry: "IT" },
  deliveryTime: {
    "@type": "ShippingDeliveryTime",
    handlingTime: { "@type": "QuantitativeValue", minValue: 0, maxValue: 0, unitCode: "DAY" },
    transitTime: { "@type": "QuantitativeValue", minValue: 0, maxValue: 1, unitCode: "DAY" },
  },
};

const RENTAL_RETURN_POLICY = {
  "@type": "MerchantReturnPolicy",
  applicableCountry: "IT",
  returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
};

export const buildVehiclePageJsonLd = (
  v: VehiclePageData,
  faqs?: { q: string; a: string }[],
) => {
  const fuelMap: Record<string, string> = {
    Benzina: "Gasoline",
    Diesel: "Diesel",
    Elettrico: "Electric",
    Ibrida: "Hybrid",
    "Ibrido Plug-in": "Plugin hybrid electric",
    Gasolio: "Diesel",
  };

  const vehicleSchema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    name: v.name,
    url: v.url,
    brand: v.brand
      ? { "@type": "Brand", name: v.brand }
      : undefined,
    model: v.model || undefined,
    vehicleModelDate: v.year ? String(v.year) : undefined,
    description: v.description || undefined,
    image: v.image || undefined,
    vehicleConfiguration: v.category || undefined,
    fuelType: v.fuel ? (fuelMap[v.fuel] || v.fuel) : undefined,
    vehicleEngine: v.fuel
      ? { "@type": "EngineSpecification", fuelType: fuelMap[v.fuel] || v.fuel }
      : undefined,
    offers:
      v.priceFrom != null
        ? {
            "@type": "Offer",
            priceCurrency: "EUR",
            price: v.priceFrom,
            priceSpecification: v.priceTo
              ? {
                  "@type": "PriceSpecification",
                  minPrice: v.priceFrom,
                  maxPrice: v.priceTo,
                  priceCurrency: "EUR",
                  unitCode: "DAY",
                }
              : undefined,
            availability: "https://schema.org/InStock",
            hasMerchantReturnPolicy: RENTAL_RETURN_POLICY,
            shippingDetails: RENTAL_SHIPPING_DETAILS,
            seller: {
              "@type": "AutoRental",
              name: "KS Rent Sardinia",
              url: "https://www.ksrentsardinia.com",
            },
          }
        : undefined,
    aggregateRating:
      v.aggregateRating && v.aggregateRating.reviewCount > 0
        ? {
            "@type": "AggregateRating",
            ratingValue: v.aggregateRating.ratingValue.toFixed(1),
            reviewCount: v.aggregateRating.reviewCount,
            bestRating: "5",
            worstRating: "1",
          }
        : undefined,
    review:
      v.reviews && v.reviews.length > 0
        ? v.reviews.map((r) => ({
            "@type": "Review",
            author: { "@type": "Person", name: r.author },
            datePublished: r.datePublished,
            reviewRating: {
              "@type": "Rating",
              ratingValue: r.rating,
              bestRating: "5",
              worstRating: "1",
            },
            reviewBody: r.text,
          }))
        : undefined,
  };

  // Rimuove undefined cleanly
  Object.keys(vehicleSchema).forEach((k) => vehicleSchema[k] === undefined && delete vehicleSchema[k]);

  const out: any[] = [vehicleSchema];

  if (faqs && faqs.length > 0) {
    out.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  return out;
};

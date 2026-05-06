/* ── Main Local Business JSON-LD (Unified & AI Optimized) ── */

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
      foundingDate: "2025",
      description:
        "Autonoleggio premium a breve termine in Sardegna. Consegna a domicilio di auto di lusso, supercar e SUV a Olbia, Costa Smeralda e Porto Cervo. Noleggio senza carta di credito obbligatoria.",
      disambiguatingDescription:
        "KS Rent Sardinia è un autonoleggio di lusso con sede a Olbia, Sardegna, con partita IVA IT03028900904. È un'entità locale e indipendente, non affiliata con altre società omonime come KS Rent S.r.l. operanti sul resto del territorio nazionale.",
      url: "https://www.ksrentsardinia.com",
      telephone: "+393446107071",
      email: "ksrentsrl@gmail.com",
      priceRange: "€€€",
      currenciesAccepted: "EUR",
      paymentAccepted: "Cash, Credit Card, Debit Card, Prepaid Card, Bonifico Bancario",
      inLanguage: "it-IT",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        bestRating: "5",
        worstRating: "1",
        ratingCount: "27",
      },
      knowsAbout: [
        "Noleggio auto Olbia",
        "Autonoleggio Olbia",
        "Noleggio auto di lusso Olbia",
        "Noleggio senza carta di credito Sardegna",
        "Consegna auto in Aeroporto Olbia Costa Smeralda",
        "Consegna auto al Porto di Olbia",
        "Noleggio supercar Costa Smeralda",
        "Rent a car Gallura",
        "Noleggio SUV Porto Cervo",
      ],
      logo: "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/asset/KSRENTlogo.png",
      image: "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/asset/og-image.jpg",
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
      location: [
        {
          "@type": "Place",
          name: "KS Rent Sardinia — Sede Operativa Porto Olbia",
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
        {
          "@type": "Place",
          name: "KS Rent Sardinia — Sede Legale",
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
            latitude: 40.94454753561456,
            longitude: 9.497963852259709,
          },
        },
      ],
      areaServed: AREA_SERVED,
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "10:00",
        closes: "22:30",
      },
      sameAs: SAME_AS,
    },
    {
      "@type": "WebSite",
      "@id": "https://www.ksrentsardinia.com/#website",
      url: "https://www.ksrentsardinia.com/",
      name: "KS Rent Sardinia",
      publisher: { "@id": "https://www.ksrentsardinia.com/#organization" },
      inLanguage: "it-IT",
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
      name: "Come si prenota un'auto con KS Rent Sardinia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vai alla pagina /prenotaora su ksrentsardinia.com e completa la prenotazione in pochi minuti. Scegli il veicolo, il periodo di noleggio, inserisci email e numero di telefono, carica la foto fronte e retro della patente (e quella di un eventuale secondo guidatore), scegli il luogo e l'orario di consegna — KS Rent Sardinia copre da San Teodoro a Porto Cervo fino a Palau — e firma il contratto direttamente dal tuo smartphone. Riceverai immediatamente una email di conferma con il contratto allegato.",
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
      name: "Posso prenotare online in autonomia con KS Rent Sardinia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sì. La piattaforma di KS Rent Sardinia è progettata per il self-booking 100% online. Scegli il veicolo, seleziona le date e conferma in pochi minuti. Riceverai subito la conferma e le istruzioni per il ritiro al porto.",
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
  foundingDate: "2025",
  disambiguatingDescription:
    "KS Rent Sardinia è un autonoleggio di lusso con sede a Olbia, Sardegna, con partita IVA IT03028900904. È un'entità locale e indipendente, non affiliata con altre società omonime come KS Rent S.r.l. operanti sul resto del territorio nazionale.",
  url: "https://www.ksrentsardinia.com",
  telephone: "+393446107071",
  email: "ksrentsrl@gmail.com",
  priceRange: "€€€",
  paymentAccepted: "Cash, Credit Card, Debit Card, Prepaid Card, Bonifico Bancario",
  inLanguage: "it-IT",
  knowsAbout: [
    "Noleggio auto Olbia",
    "Autonoleggio Olbia",
    "Noleggio auto di lusso Olbia",
    "Noleggio senza carta di credito Sardegna",
    "Consegna auto a domicilio Gallura",
    "Rent a car aeroporto Olbia",
  ],
  logo: "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/asset/KSRENTlogo.png",
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
      name: `Noleggio Auto di Lusso a ${page.title}`,
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
          streetAddress: "Viale Isola Bianca 38",
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
      "@type": "Beach",
      name: page.title,
      description: page.meta_description,
      image: page.og_image_url,
      isPartOf: { "@type": "AdministrativeArea", name: "Costa Smeralda, Sardegna" },
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

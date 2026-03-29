/* ── Main Local Business JSON-LD (Unified & AI Optimized) ── */

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
      description: "Autonoleggio premium a breve termine in Sardegna. Consegna auto di lusso, supercar e SUV a Olbia, Costa Smeralda e Porto Cervo. Noleggio senza carta di credito.",
      disambiguatingDescription: "Noleggio auto lusso e breve termine a Olbia, Sardegna. Entità locale e indipendente, non affiliata con altre società omonime come KS Rent S.r.l. sul resto del territorio nazionale.",
      url: "https://www.ksrentsardinia.com",
      telephone: "+393446107071",
      email: "ksrentsrl@gmail.com",
      priceRange: "€€€",
      currenciesAccepted: "EUR",
      paymentAccepted: "Cash, Credit Card, Debit Card, Bonifico",
      iso639Language: "it-IT",
      knowsAbout: [
        "Noleggio auto di lusso",
        "Noleggio senza carta di credito",
        "Consegna auto in Aeroporto e Porto a Olbia",
        "Noleggio Auto Olbia",
        "Costa Smeralda Luxury Rental"
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
          name: "Sede Legale KS Rent Sardinia",
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
      areaServed: [
        { "@type": "AdministrativeArea", name: "Sardegna" },
        { "@type": "City", name: "Olbia" },
        { "@type": "Place", name: "Costa Smeralda" },
        { "@type": "Place", name: "Porto Cervo" },
        { "@type": "Place", name: "Baja Sardinia" },
        { "@type": "City", name: "San Teodoro" },
        { "@type": "City", name: "Palau" },
        { "@type": "City", name: "Arzachena" },
        { "@type": "Place", name: "Puntaldia" },
        { "@type": "Place", name: "Porto Rotondo" },
        { "@type": "Place", name: "Golfo Aranci" },
        { "@type": "AdministrativeArea", name: "Gallura" },
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "10:00",
        closes: "22:30",
      },
      sameAs: [
        "https://www.instagram.com/ksrentsardinia",
        "https://www.tiktok.com/@ksrentsardinia"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.ksrentsardinia.com/#website",
      url: "https://www.ksrentsardinia.com/",
      name: "KS Rent Sardinia",
      publisher: {
        "@id": "https://www.ksrentsardinia.com/#organization"
      },
      inLanguage: "it-IT"
    }
  ]
};

/* ── FAQ JSON-LD ── */

export const faqPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quali metodi di pagamento accettate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Offriamo massima flessibilità: accettiamo carte di credito, carte prepagate, bancomat, carte di debito e contanti. Il deposito cauzionale viene gestito in base al veicolo scelto.",
      },
    },
    {
      "@type": "Question",
      name: "Fate controlli o richiedete uno Score Bancario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nessuno Score Bancario e nessuna burocrazia infinita. Il nostro servizio si basa sulla fiducia e sulla trasparenza verso il cliente.",
      },
    },
    {
      "@type": "Question",
      name: "Come funziona il deposito cauzionale?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Per garantire la massima cura della nostra flotta luxury, è previsto un deposito cauzionale e una franchigia assicurativa. L'importo varia in base alla categoria del veicolo scelto e viene gestito in modo chiaro e veloce al momento del contratto.",
      },
    },
    {
      "@type": "Question",
      name: "In quali località effettuate la consegna del veicolo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Serviamo la Costa Smeralda e la Gallura. Oltre alle nostre sedi di Olbia (Viale Isola Bianca 38 e Viale Aldo Moro 367) e all'Aeroporto Costa Smeralda, consegniamo da Porto Cervo a San Teodoro, passando per Porto Rotondo, Baja Sardinia, Cannigione, Arzachena, Palau, Murta Maria, Porto San Paolo, Puntaldia e San Pantaleo. Consegniamo direttamente in Villa, in Hotel o al Porto.",
      },
    },
    {
      "@type": "Question",
      name: "Dove posso ritirare il veicolo se vengo in sede?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Abbiamo due sedi strategiche a Olbia: la Sede Legale in Viale Aldo Moro 367 e la Sede Operativa in Viale Isola Bianca 38, perfette per chi arriva dal porto o dall'aeroporto.",
      },
    },
    {
      "@type": "Question",
      name: "Quali documenti mi servono al momento del ritiro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ti basterà presentare una Patente di guida valida, il tuo Codice Fiscale e un documento d'identità in corso di validità (Carta d'Identità o Passaporto).",
      },
    },
    {
      "@type": "Question",
      name: "Come funziona il chilometraggio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I pacchetti chilometrici variano in base alla categoria del veicolo (City Car, Premium, Scooter o Quad). Contattaci per trovare la soluzione perfetta per il tuo itinerario in Sardegna.",
      },
    },
    {
      "@type": "Question",
      name: "Cosa succede in caso di guasto o incidente?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Niente panico. Offriamo un'assistenza attiva 24 ore su 24, 7 giorni su 7. Ti basterà chiamare il nostro numero dedicato per ricevere supporto immediato.",
      },
    },
    {
      "@type": "Question",
      name: "Posso cancellare o modificare la mia prenotazione?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sì, offriamo opzioni di cancellazione flessibili. Contatta il nostro team su WhatsApp per gestire o modificare le date della tua prenotazione.",
      },
    },
  ],
};

/* ── Landing-page specific FAQ JSON-LD ── */

export const aeroportoFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Come funziona la consegna in Aeroporto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ti aspettiamo direttamente agli arrivi dell'Aeroporto Costa Smeralda. Niente file o navette: la tua auto è già pronta nel parcheggio dedicato, accesa e climatizzata.",
      },
    },
    {
      "@type": "Question",
      name: "È possibile noleggiare senza carta di credito?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Certamente. Accettiamo carte di debito, prepagate e contanti per il deposito cauzionale. La flessibilità è il nostro marchio di fabbrica.",
      },
    },
    {
      "@type": "Question",
      name: "Quali metodi di pagamento accettate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Accettiamo tutti i principali circuiti: Visa, Mastercard, American Express, oltre a contanti e bonifici istantanei.",
      },
    },
    {
      "@type": "Question",
      name: "Come funziona il deposito cauzionale?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Il deposito è proporzionato alla tipologia di veicolo. Grazie ai nostri depositi flessibili, rendiamo il noleggio di supercar accessibile e trasparente.",
      },
    },
    {
      "@type": "Question",
      name: "Posso cancellare la mia prenotazione?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sì, offriamo politiche di cancellazione trasparenti gestibili direttamente dal tuo profilo o contattando il nostro servizio concierge.",
      },
    },
  ],
};

export const portoFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Dove ritirare l'auto al Porto di Olbia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La nostra sede operativa si trova in Viale Isola Bianca 38, esattamente al Porto di Olbia Isola Bianca. Appena sbarchi dal traghetto, il tuo veicolo sarà pronto ad aspettarti a pochi metri. Nessuna navetta, nessuna attesa, nessuna perdita di tempo.",
      },
    },
    {
      "@type": "Question",
      name: "Serve la carta di credito per noleggiare?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, KS Rent non impone l'obbligo di carta di credito tradizionale. Accettiamo carte prepagate, bancomat, carte di debito e contanti. Il deposito cauzionale è flessibile e varia in base al veicolo scelto.",
      },
    },
    {
      "@type": "Question",
      name: "Posso prenotare online in totale autonomia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Assolutamente sì. La nostra piattaforma è concepita per il Self-Booking 100% online. Scegli il veicolo, seleziona le date e conferma in pochi minuti. Riceverai subito la conferma e le istruzioni per il ritiro.",
      },
    },
    {
      "@type": "Question",
      name: "Come funziona il deposito cauzionale?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Il deposito cauzionale viene gestito in modo chiaro e trasparente al momento del ritiro. L'importo, proporzionato alla categoria del veicolo scelto, serve a garantire la cura della nostra flotta premium.",
      },
    },
    {
      "@type": "Question",
      name: "Quali veicoli sono disponibili al Porto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Al Porto di Olbia offriamo l'intera gamma KS Rent Sardinia: auto sportive, supercar, SUV premium, moto e quad. Ogni veicolo è perfetto per iniziare la tua avventura in Costa Smeralda dal momento del tuo sbarco.",
      },
    },
  ],
};

/* ── Base per le Pagine Dinamiche (Spiagge e Località) ── */

const carRentalBase = {
  "@type": "AutoRental",
  name: "KS Rent Sardinia", // BLINDATO
  legalName: "KS Rent S.R.L.",
  alternateName: "KS Rent",
  vatID: "IT03028900904",
  taxID: "03028900904",
  disambiguatingDescription:
    "Noleggio auto lusso e breve termine a Olbia, Sardegna. Entità locale e indipendente, non affiliata con altre società omonime come KS Rent S.r.l. sul resto del territorio nazionale.",
  url: "https://www.ksrentsardinia.com",
  telephone: "+393446107071",
  email: "ksrentsrl@gmail.com",
  priceRange: "€€€",
  paymentAccepted: "Cash, Credit Card, Debit Card, Bonifico",
  iso639Language: "it", // BLINDATO
  knowsAbout: [
    // BLINDATO
    "Noleggio Auto Olbia",
    "Costa Smeralda Luxury Rental",
    "Noleggio senza carta di credito Sardegna",
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
    latitude: 40.92314262319084, // BLINDATO: Riferimento esatto Porto di Olbia per tutte le pagine secondarie
    longitude: 9.520060381113954,
  },
  sameAs: [
    "https://www.instagram.com/ksrentsardinia",
    "https://www.tiktok.com/@ksrentsardinia",
  ],
};

export const buildVehicleJsonLd = (vehicle: {
  make: string;
  model: string;
  daily_rate: number;
  image_url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: `Noleggio ${vehicle.make} ${vehicle.model} Olbia`,
  description: `Noleggia ${vehicle.make} ${vehicle.model} in Costa Smeralda con protezione completa e deposito trasparente. KS Rent Sardinia.`,
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
      name: "KS Rent S.R.L.",
    },
  },
});

/* ── Dynamic page JSON-LD builders ── */

export const buildLocationJsonLd = (page: {
  title: string;
  meta_description: string;
  canonical_url?: string;
  og_image_url?: string;
}) => [
  {
    "@context": "https://schema.org",
    ...carRentalBase,
    description: page.meta_description,
    url: page.canonical_url || "https://www.ksrentsardinia.com",
    image: page.og_image_url || "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/asset/og-image.jpg",
    areaServed: { "@type": "Place", name: page.title },
  },
  {
    "@context": "https://schema.org",
    "@type": "Place",
    name: page.title,
    description: page.meta_description,
    image: page.og_image_url,
    geo: { "@type": "GeoCoordinates", latitude: 40.92314262319084, longitude: 9.520060381113954 },
    isPartOf: { "@type": "AdministrativeArea", name: "Gallura, Sardegna" },
  },
];

export const buildBeachJsonLd = (page: {
  title: string;
  meta_description: string;
  canonical_url?: string;
  og_image_url?: string;
  parking_info?: string;
}) => [
  {
    "@context": "https://schema.org",
    ...carRentalBase,
    description: page.meta_description,
    url: page.canonical_url || "https://www.ksrentsardinia.com",
    image: page.og_image_url || "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/asset/og-image.jpg",
    areaServed: { "@type": "Beach", name: page.title },
  },
  {
    "@context": "https://schema.org",
    "@type": "Beach",
    name: page.title,
    description: page.meta_description,
    image: page.og_image_url,
    geo: { "@type": "GeoCoordinates", latitude: 40.92314262319084, longitude: 9.520060381113954 },
    isPartOf: { "@type": "AdministrativeArea", name: "Costa Smeralda, Sardegna" },
    ...(page.parking_info
      ? { amenityFeature: { "@type": "LocationFeatureSpecification", name: "Parcheggio", value: page.parking_info } }
      : {}),
  },
];

export const aeroportoAutoRentalJsonLd = {
  "@context": "https://schema.org",
  ...carRentalBase,
  name: "KS Rent Sardinia — Noleggio Auto Aeroporto Olbia", // BLINDATO
  description:
    "Noleggio auto con consegna immediata all'Aeroporto di Olbia Costa Smeralda. Supercar, SUV e moto senza carta di credito.",
  url: "https://www.ksrentsardinia.com/noleggio-auto-aeroporto-olbia",
  image: "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/asset/og-image.jpg",
  areaServed: { "@type": "Place", name: "Aeroporto Olbia Costa Smeralda" },
};

export const portoAutoRentalJsonLd = {
  "@context": "https://schema.org",
  ...carRentalBase,
  name: "KS Rent Sardinia — Noleggio Auto Porto Olbia", // BLINDATO
  description: "Noleggio auto al Porto di Olbia Isola Bianca. Sede allo sbarco, zero attese. Supercar, SUV e moto.",
  url: "https://www.ksrentsardinia.com/noleggio-auto-porto-olbia",
  image: "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/asset/og-image.jpg",
  areaServed: { "@type": "Place", name: "Porto Olbia Isola Bianca" },
};

export const flottaJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Flotta Veicoli KS Rent Sardinia Olbia", // BLINDATO
  description: "Flotta premium di auto sportive, SUV, city car, scooter e quad a noleggio a Olbia e Costa Smeralda.",
  url: "https://www.ksrentsardinia.com/flotta",
  itemListOrder: "https://schema.org/ItemListUnordered",
  numberOfItems: 15,
  provider: {
    "@type": "AutoRental",
    name: "KS Rent Sardinia", // BLINDATO
    legalName: "KS Rent S.R.L.",
    url: "https://www.ksrentsardinia.com",
  },
};

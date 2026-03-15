export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["AutoRental", "LocalBusiness"],
  name: "KS Rent",
  description:
    "Servizio di noleggio auto di lusso, SUV, supercar e scooter in Costa Smeralda. Consegna VIP in Aeroporto Olbia, Porto Cervo, Hotel e Ville. Deposito cauzionale trasparente, copertura assicurativa completa.",
  url: "https://www.ksrentsardinia.com",
  telephone: "+393446107071",
  email: "ksrentsrl@gmail.com",
  priceRange: "€€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Cash, Credit Card, Debit Card, Bonifico",
  logo: "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/asset/KSRENTlogo.png",
  image: "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/asset/og-image.jpg",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Viale Isola Bianca 38",
      addressLocality: "Olbia",
      postalCode: "07026",
      addressRegion: "SS",
      addressCountry: "IT",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Viale Aldo Moro 367",
      addressLocality: "Olbia",
      postalCode: "07026",
      addressRegion: "SS",
      addressCountry: "IT",
    },
  ],
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.9225,
    longitude: 9.5,
  },
  areaServed: [
    { "@type": "City", name: "Olbia" },
    { "@type": "Place", name: "Costa Smeralda" },
    { "@type": "Place", name: "Porto Cervo" },
    { "@type": "Place", name: "Baja Sardinia" },
    { "@type": "City", name: "San Teodoro" },
    { "@type": "City", name: "Palau" },
    { "@type": "City", name: "Santa Teresa di Gallura" },
    { "@type": "City", name: "Arzachena" },
    { "@type": "Place", name: "Puntaldia" },
    { "@type": "Place", name: "Porto Rotondo" },
    { "@type": "Place", name: "Golfo Aranci" },
    { "@type": "AdministrativeArea", name: "Gallura" },
    { "@type": "AdministrativeArea", name: "Sardegna" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "08:00",
    closes: "20:00",
  },
  sameAs: ["https://instagram.com/ksrent_srl"],
};

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
        text: "Serviamo l'intera Gallura e la Costa Smeralda. Oltre alle nostre sedi di Olbia (Viale Isola Bianca 38 e Viale Aldo Moro 367) e all'Aeroporto Costa Smeralda, consegniamo a Porto Cervo, San Teodoro, Santa Teresa Gallura, Murta Maria, Porto San Paolo, Puntaldia, Monte Contros, Baja Sardinia, Cannigione, Palau e San Pantaleo. Consegniamo direttamente in Villa, in Hotel o al Porto.",
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
      name: "È previsto il chilometraggio illimitato?",
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

export const buildVehicleJsonLd = (vehicle: {
  make: string;
  model: string;
  daily_rate: number;
  image_url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: `Noleggio ${vehicle.make} ${vehicle.model} Olbia`,
  description: `Noleggia ${vehicle.make} ${vehicle.model} in Costa Smeralda con protezione completa e deposito trasparente. KS Rent Olbia.`,
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

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["AutoRental", "LocalBusiness"],
  name: "KS Rent",
  description:
    "Servizio di noleggio auto di lusso, SUV, supercar e scooter in Costa Smeralda. Consegna su misura in Aeroporto Olbia, Porto Cervo, Hotel e Ville. Deposito cauzionale trasparente, copertura assicurativa completa.",
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

/* ── Landing-page specific FAQ JSON-LD (one per page, no duplicates) ── */

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
        text: "Al Porto di Olbia offriamo l'intera gamma KS Rent: auto sportive, supercar, SUV premium, moto e quad. Ogni veicolo è perfetto per iniziare la tua avventura in Costa Smeralda dal momento del tuo sbarco.",
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

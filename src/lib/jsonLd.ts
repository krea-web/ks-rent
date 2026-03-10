export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["CarRental", "LocalBusiness"],
  name: "KS Rent S.R.L.",
  description:
    "Noleggio auto luxury in Costa Smeralda. Deposito cauzionale trasparente, copertura assicurativa completa e consegna in aeroporto a Olbia. Professionalità garantita.",
  url: "https://ksrentsardinia.com",
  telephone: "+393446107071",
  email: "ksrentsrl@gmail.com",
  priceRange: "€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Cash, Credit Card, Debit Card",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Viale Isola Bianca 38",
    addressLocality: "Olbia",
    addressRegion: "SS",
    postalCode: "07026",
    addressCountry: "IT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.9225,
    longitude: 9.5,
  },
  areaServed: {
    "@type": "Place",
    name: "Costa Smeralda, Sardegna",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
    ],
    opens: "08:00",
    closes: "20:00",
  },
  sameAs: ["https://instagram.com/ksrent_srl"],
  image:
    "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/asset/og-image.jpg",
};

export const faqPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "È richiesto un deposito cauzionale?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sì, per garantire la massima cura della nostra flotta luxury è previsto un deposito cauzionale e una franchigia assicurativa. L'importo varia in base alla categoria del veicolo scelto.",
      },
    },
    {
      "@type": "Question",
      name: "Quali documenti servono per il noleggio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sono necessari una patente di guida valida, codice fiscale e un documento d'identità (Carta d'Identità o Passaporto) in corso di validità.",
      },
    },
    {
      "@type": "Question",
      name: "Dove posso ritirare il veicolo a Olbia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Operiamo presso le nostre sedi di Viale Isola Bianca (Porto) e Viale Aldo Moro, offrendo anche la consegna personalizzata in Aeroporto, Hotel o Villa in tutta la Costa Smeralda.",
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

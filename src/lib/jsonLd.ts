export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["CarRental", "LocalBusiness"],
  name: "KS Rent S.R.L.",
  description:
    "Noleggio auto e moto premium in Costa Smeralda. Servizio senza blocco carta di credito, consegna in aeroporto a Olbia. Fiducia totale, zero burocrazia.",
  url: "https://ksrent.it",
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

export const buildVehicleJsonLd = (vehicle: {
  make: string;
  model: string;
  daily_rate: number;
  image_url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: `Noleggio ${vehicle.make} ${vehicle.model} Olbia`,
  description: `Noleggia ${vehicle.make} ${vehicle.model} in Costa Smeralda senza carta di credito. KS Rent Olbia.`,
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

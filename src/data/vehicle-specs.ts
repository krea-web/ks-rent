/**
 * Specs hardcoded dei veicoli principali — usate dalle comparison pages
 * /flotta/confronta/[a]-vs-[b]. Indipendente da Supabase: la pagina si
 * costruisce e renderizza anche se il DB e' down.
 */

export interface VehicleSpec {
  groupSlug: string;
  name: string;
  brand: string;
  category: "Supercar sportiva" | "Premium" | "SUV compatto" | "City car" | "Scooter" | "Quad";
  image: string;
  href: string;
  specs: {
    power: string;
    transmission: string;
    fuel: string;
    seats: number;
    bagagli: string;
    consumo: string;
    accelerazione0_100?: string;
    velocitaMax?: string;
  };
  prezzi: {
    bassaStagione: string;
    altaStagione: string;
    note?: string;
  };
  ideale: string[];
  evitareSe: string[];
  shortPitch: string;
}

export const VEHICLE_SPECS: Record<string, VehicleSpec> = {
  "audi-rs3": {
    groupSlug: "audi-rs3",
    name: "Audi RS3 Sportback",
    brand: "Audi",
    category: "Supercar sportiva",
    image: "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/Trasparenza/ksrent-audirs3supercar-verde.png",
    href: "/flotta/audi-rs3",
    specs: {
      power: "400 CV (294 kW)",
      transmission: "Automatico S-Tronic 7 marce, trazione integrale quattro",
      fuel: "Benzina (5 cilindri 2.5 TFSI)",
      seats: 5,
      bagagli: "335 L",
      consumo: "8,8 L/100km combinato",
      accelerazione0_100: "3,8 s",
      velocitaMax: "290 km/h (limitata)",
    },
    prezzi: {
      bassaStagione: "su preventivo (da 250 €/giorno indicativo)",
      altaStagione: "su preventivo (da 400 €/giorno indicativo)",
      note: "Tariffa dedicata in base ai giorni di noleggio e periodo. Deposito cauzionale piu' elevato per supercar.",
    },
    ideale: [
      "Strade panoramiche Costa Smeralda (Porto Cervo, Baja Sardinia)",
      "Coppie senza bagaglio voluminoso",
      "Eventi mondani Phi Beach, Billionaire, Cala di Volpe",
      "Esperienza di guida sportiva su strade asfaltate",
    ],
    evitareSe: [
      "Cerchi consumi contenuti per tour lunghi (preferisci Mercedes Classe A diesel)",
      "Hai bambini piccoli che richiedono spazio per seggiolini",
      "Devi affrontare strade sterrate verso spiagge nascoste (preferisci Jeep Avenger)",
    ],
    shortPitch: "La supercar definitiva per la Costa Smeralda. 400 cavalli, trazione integrale, 0-100 in 3,8 secondi. Performance pure su strada, non per off-road.",
  },
  "bmw-m2": {
    groupSlug: "bmw-m2",
    name: "BMW M2 Coupe",
    brand: "BMW",
    category: "Supercar sportiva",
    image: "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/Trasparenza/ksrent-bmwm2-maschera.png",
    href: "/flotta/bmw-m2",
    specs: {
      power: "460 CV (338 kW)",
      transmission: "Automatico Steptronic 8 marce, trazione posteriore",
      fuel: "Benzina (3.0 biturbo S58)",
      seats: 4,
      bagagli: "390 L",
      consumo: "9,8 L/100km combinato",
      accelerazione0_100: "4,1 s",
      velocitaMax: "285 km/h (con M Driver Package)",
    },
    prezzi: {
      bassaStagione: "su preventivo (da 270 €/giorno indicativo)",
      altaStagione: "su preventivo (da 420 €/giorno indicativo)",
      note: "Tariffa dedicata in base ai giorni di noleggio e periodo. Deposito cauzionale piu' elevato per supercar.",
    },
    ideale: [
      "Driver puristi che cercano feeling rear-wheel-drive",
      "Strade tortuose della Gallura interna",
      "Coupé esclusivo per viaggi in coppia o tre persone",
      "Statement visivo: silhouette inconfondibile a Porto Cervo",
    ],
    evitareSe: [
      "Servono 5 posti adulti (ha solo 4 posti)",
      "Cerchi trazione integrale per condizioni miste",
      "Pioggia/strada bagnata frequente: la trazione posteriore richiede esperienza",
    ],
    shortPitch: "Il coupe sportivo per chi vuole il feeling vero della trazione posteriore. 460 cavalli e 4 posti per un'esperienza di guida senza compromessi.",
  },
  "mercedes-classe-a": {
    groupSlug: "mercedes-classe-a",
    name: "Mercedes Classe A 180d",
    brand: "Mercedes-Benz",
    category: "Premium",
    image: "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/Trasparenza/ksrent-mercedessupercarclassea180d.png",
    href: "/flotta/mercedes-classe-a",
    specs: {
      power: "116 CV (85 kW)",
      transmission: "Automatico 7G-DCT, trazione anteriore",
      fuel: "Diesel (1.5 OM608)",
      seats: 5,
      bagagli: "370 L",
      consumo: "4,5 L/100km combinato",
      accelerazione0_100: "10,5 s",
      velocitaMax: "202 km/h",
    },
    prezzi: {
      bassaStagione: "90 €/giorno",
      altaStagione: "160 €/giorno",
      note: "Tariffa pubblicata su /tariffe. Sconti su noleggi long-term (settimana o piu').",
    },
    ideale: [
      "Tour dell'isola: 1.000+ km in una settimana con consumi contenuti (4,5 L/100km)",
      "Famiglie e coppie con bagaglio normale",
      "Comfort premium su lunghe distanze (sedili, isolamento acustico)",
      "Estetica curata per chi vuole comparire bene senza esagerare",
    ],
    evitareSe: [
      "Cerchi prestazioni sportive (preferisci Audi RS3 o BMW M2)",
      "Devi affrontare sterrati o strade dissestate verso spiagge nascoste (preferisci Jeep Avenger)",
    ],
    shortPitch: "Il compromesso perfetto: comfort premium Mercedes, consumi diesel da utilitaria (4,5 L/100km) e cambio automatico. Ideale per tour della Sardegna senza pensieri.",
  },
  "jeep-avenger": {
    groupSlug: "jeep-avenger",
    name: "Jeep Avenger",
    brand: "Jeep",
    category: "SUV compatto",
    image: "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/Trasparenza/ksrent-jeepsuvavenger.webp",
    href: "/flotta/jeep-avenger",
    specs: {
      power: "100 CV (74 kW)",
      transmission: "Automatico 6 marce DCT, trazione anteriore",
      fuel: "Benzina (1.2 PureTech turbo)",
      seats: 5,
      bagagli: "380 L",
      consumo: "6,1 L/100km combinato",
      accelerazione0_100: "10,8 s",
      velocitaMax: "184 km/h",
    },
    prezzi: {
      bassaStagione: "60 €/giorno",
      altaStagione: "110 €/giorno",
      note: "Tariffa pubblicata su /tariffe.",
    },
    ideale: [
      "Strade sterrate verso Spiaggia del Principe, Liscia Ruja, Capriccioli",
      "Famiglie con piu' bagaglio o passeggini",
      "Posizione di guida rialzata, sicurezza percepita su tornanti Costa Smeralda",
      "Mix asfalto + sterrato in Gallura interna",
    ],
    evitareSe: [
      "Cerchi consumi minimi (preferisci Fiat Panda Hybrid)",
      "Sei in coppia senza bagaglio: una city car basta e costa meno",
    ],
    shortPitch: "SUV compatto per chi vuole esplorare la Sardegna vera, anche dove finisce l'asfalto. Posizione di guida alta, spazio per famiglia, comfort moderno.",
  },
  "fiat-panda": {
    groupSlug: "fiat-panda",
    name: "Fiat Panda Hybrid",
    brand: "Fiat",
    category: "City car",
    image: "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/Trasparenza/ksrent-fiatpandacitycar.webp",
    href: "/flotta/fiat-panda",
    specs: {
      power: "70 CV (52 kW)",
      transmission: "Manuale 5 marce, trazione anteriore (mild-hybrid 12V)",
      fuel: "Benzina ibrida 1.0 FireFly",
      seats: 5,
      bagagli: "225 L",
      consumo: "5,7 L/100km combinato",
      accelerazione0_100: "14,7 s",
      velocitaMax: "155 km/h",
    },
    prezzi: {
      bassaStagione: "55 €/giorno",
      altaStagione: "90 €/giorno",
      note: "La tariffa piu' bassa della flotta. Ideale per soggiorni lunghi.",
    },
    ideale: [
      "Vacanze low-budget con priorita' al risparmio",
      "Centri storici stretti (Olbia, Arzachena, Palau)",
      "Parcheggi affollati Porto Cervo / Baja Sardinia in alta stagione",
      "Single, coppie senza bagaglio voluminoso",
    ],
    evitareSe: [
      "Hai bagaglio per 4-5 persone (preferisci Jeep Avenger o Mercedes A)",
      "Cerchi cambio automatico (preferisci Jeep Avenger)",
      "Vuoi comfort autostradale per lunghi tragitti (preferisci Mercedes A)",
    ],
    shortPitch: "La city car simbolo dell'Italia: economica, agile nei centri storici, consumi mild-hybrid contenuti. La scelta razionale per chi non vuole strafare.",
  },
};

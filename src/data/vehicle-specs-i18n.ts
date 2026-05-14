/**
 * Traduzioni EN/DE/FR delle specs dei veicoli per le comparison pages
 * multilingua (/en/flotta/confronta/*, /de/, /fr/).
 *
 * I numeri (potenza, accelerazione, posti, prezzi €/giorno) restano
 * invariati e vengono presi da VEHICLE_SPECS. Solo i campi text-heavy
 * (category, transmission, fuel, prezzi.note, ideale, evitareSe,
 * shortPitch) vengono tradotti qui.
 */

import { VEHICLE_SPECS, type VehicleSpec } from "./vehicle-specs";

export type Lang = "it" | "en" | "de" | "fr";

interface TranslatedFields {
  category: string;
  transmission: string;
  fuel: string;
  prezziNote?: string;
  prezziBassa?: string;
  prezziAlta?: string;
  ideale: string[];
  evitareSe: string[];
  shortPitch: string;
}

const TRANSLATIONS: Record<string, Record<"en" | "de" | "fr", TranslatedFields>> = {
  "audi-rs3": {
    en: {
      category: "Sport supercar",
      transmission: "S-Tronic 7-speed automatic, quattro AWD",
      fuel: "Petrol (5-cylinder 2.5 TFSI)",
      prezziBassa: "on request (from €250/day indicative)",
      prezziAlta: "on request (from €400/day indicative)",
      prezziNote: "Tailored rate based on rental days and period. Higher security deposit for supercars.",
      ideale: [
        "Scenic Costa Smeralda roads (Porto Cervo, Baja Sardinia)",
        "Couples with minimal luggage",
        "High-end events at Phi Beach, Billionaire, Cala di Volpe",
        "Sporty driving experience on paved roads",
      ],
      evitareSe: [
        "You want low fuel consumption for long tours (prefer Mercedes A-Class diesel)",
        "You have small children needing room for car seats",
        "You need to tackle dirt roads to hidden beaches (prefer Jeep Avenger)",
      ],
      shortPitch:
        "The ultimate supercar for Costa Smeralda. 400 horsepower, all-wheel drive, 0-100 in 3.8 seconds. Pure on-road performance, not for off-road.",
    },
    de: {
      category: "Sport-Supersportwagen",
      transmission: "S-Tronic 7-Gang Automatik, quattro Allradantrieb",
      fuel: "Benzin (5-Zylinder 2.5 TFSI)",
      prezziBassa: "auf Anfrage (ab 250 €/Tag indikativ)",
      prezziAlta: "auf Anfrage (ab 400 €/Tag indikativ)",
      prezziNote: "Massgeschneiderter Tarif je nach Mietdauer und Zeitraum. Hoehere Kaution fuer Supersportwagen.",
      ideale: [
        "Panoramastrassen Costa Smeralda (Porto Cervo, Baja Sardinia)",
        "Paare mit minimalem Gepaeck",
        "Mondaene Events Phi Beach, Billionaire, Cala di Volpe",
        "Sportliche Fahrerfahrung auf befestigten Strassen",
      ],
      evitareSe: [
        "Sie suchen niedrigen Verbrauch fuer lange Touren (lieber Mercedes A-Klasse Diesel)",
        "Sie haben kleine Kinder, die Platz fuer Kindersitze benoetigen",
        "Sie muessen Schotterpisten zu versteckten Straenden befahren (lieber Jeep Avenger)",
      ],
      shortPitch:
        "Der ultimative Supersportwagen fuer die Costa Smeralda. 400 PS, Allradantrieb, 0-100 in 3,8 Sekunden. Reine On-Road-Performance, nicht fuer Offroad.",
    },
    fr: {
      category: "Supercar sportive",
      transmission: "S-Tronic 7 vitesses automatique, transmission integrale quattro",
      fuel: "Essence (5 cylindres 2.5 TFSI)",
      prezziBassa: "sur devis (a partir de 250 €/jour indicatif)",
      prezziAlta: "sur devis (a partir de 400 €/jour indicatif)",
      prezziNote: "Tarif personnalise selon les jours de location et la periode. Caution plus elevee pour les supercars.",
      ideale: [
        "Routes panoramiques Costa Smeralda (Porto Cervo, Baja Sardinia)",
        "Couples avec bagages legers",
        "Evenements mondains Phi Beach, Billionaire, Cala di Volpe",
        "Experience de conduite sportive sur routes asphaltees",
      ],
      evitareSe: [
        "Vous cherchez une faible consommation pour de longs tours (preferez Mercedes Classe A diesel)",
        "Vous avez des enfants en bas age qui ont besoin d'espace pour les sieges-auto",
        "Vous devez emprunter des chemins de terre vers des plages cachees (preferez Jeep Avenger)",
      ],
      shortPitch:
        "La supercar ultime pour la Costa Smeralda. 400 chevaux, transmission integrale, 0-100 en 3,8 secondes. Performance pure sur route, pas pour le tout-terrain.",
    },
  },
  "bmw-m2": {
    en: {
      category: "Sport supercar",
      transmission: "Steptronic 8-speed automatic, rear-wheel drive",
      fuel: "Petrol (3.0 biturbo S58)",
      prezziBassa: "on request (from €270/day indicative)",
      prezziAlta: "on request (from €420/day indicative)",
      prezziNote: "Tailored rate based on rental days and period. Higher security deposit for supercars.",
      ideale: [
        "Driver purists seeking true rear-wheel-drive feel",
        "Winding roads of inland Gallura",
        "Exclusive coupé for couple or three-person trips",
        "Visual statement: unmistakable silhouette in Porto Cervo",
      ],
      evitareSe: [
        "You need 5 adult seats (it has only 4)",
        "You want all-wheel drive for mixed conditions",
        "Frequent rain/wet roads: rear-wheel drive requires experience",
      ],
      shortPitch:
        "The sports coupé for those who want the real feel of rear-wheel drive. 460 horsepower and 4 seats for an uncompromised driving experience.",
    },
    de: {
      category: "Sport-Supersportwagen",
      transmission: "Steptronic 8-Gang Automatik, Heckantrieb",
      fuel: "Benzin (3.0 Biturbo S58)",
      prezziBassa: "auf Anfrage (ab 270 €/Tag indikativ)",
      prezziAlta: "auf Anfrage (ab 420 €/Tag indikativ)",
      prezziNote: "Massgeschneiderter Tarif je nach Mietdauer und Zeitraum. Hoehere Kaution fuer Supersportwagen.",
      ideale: [
        "Fahrer-Puristen, die echtes Heckantriebs-Gefuehl suchen",
        "Kurvige Strassen im Landesinneren Gallura",
        "Exklusives Coupe fuer Paare oder Trios",
        "Visuelles Statement: unverwechselbare Silhouette in Porto Cervo",
      ],
      evitareSe: [
        "Sie brauchen 5 Erwachsenenplaetze (er hat nur 4)",
        "Sie suchen Allradantrieb fuer wechselnde Bedingungen",
        "Haeufiger Regen/nasse Strassen: Heckantrieb erfordert Erfahrung",
      ],
      shortPitch:
        "Das Sportcoupe fuer alle, die das echte Heckantriebs-Gefuehl suchen. 460 PS und 4 Sitze fuer ein kompromissloses Fahrerlebnis.",
    },
    fr: {
      category: "Supercar sportive",
      transmission: "Steptronic 8 vitesses automatique, propulsion arriere",
      fuel: "Essence (3.0 biturbo S58)",
      prezziBassa: "sur devis (a partir de 270 €/jour indicatif)",
      prezziAlta: "sur devis (a partir de 420 €/jour indicatif)",
      prezziNote: "Tarif personnalise selon les jours de location et la periode. Caution plus elevee pour les supercars.",
      ideale: [
        "Conducteurs puristes recherchant le vrai feeling de la propulsion",
        "Routes sinueuses de l'arriere-pays Gallura",
        "Coupé exclusif pour voyages en couple ou a trois",
        "Affirmation visuelle : silhouette inconfondable a Porto Cervo",
      ],
      evitareSe: [
        "Vous avez besoin de 5 places adultes (il n'en a que 4)",
        "Vous cherchez une transmission integrale pour conditions variables",
        "Pluie/route mouillee frequente : la propulsion arriere demande de l'experience",
      ],
      shortPitch:
        "Le coupe sportif pour ceux qui recherchent le vrai feeling de la propulsion. 460 chevaux et 4 places pour une experience de conduite sans compromis.",
    },
  },
  "mercedes-classe-a": {
    en: {
      category: "Premium",
      transmission: "7G-DCT automatic, front-wheel drive",
      fuel: "Diesel (1.5 OM608)",
      prezziBassa: "€90/day",
      prezziAlta: "€160/day",
      prezziNote: "Rate published on /en/rates. Discounts on long-term rentals (week or more).",
      ideale: [
        "Island tour: 1,000+ km in a week with low fuel use (4.5 L/100km)",
        "Families and couples with normal luggage",
        "Premium comfort over long distances (seats, sound insulation)",
        "Refined aesthetics for those who want to look the part without overdoing it",
      ],
      evitareSe: [
        "You want sporty performance (prefer Audi RS3 or BMW M2)",
        "You need to tackle dirt roads to hidden beaches (prefer Jeep Avenger)",
      ],
      shortPitch:
        "The perfect compromise: Mercedes premium comfort, diesel fuel economy (4.5 L/100km), and automatic gearbox. Ideal for stress-free Sardinia tours.",
    },
    de: {
      category: "Premium",
      transmission: "7G-DCT Automatik, Frontantrieb",
      fuel: "Diesel (1.5 OM608)",
      prezziBassa: "90 €/Tag",
      prezziAlta: "160 €/Tag",
      prezziNote: "Tarif veroeffentlicht auf /de/preise. Rabatte fuer Langzeitmieten (Woche oder mehr).",
      ideale: [
        "Inseltour: 1.000+ km in einer Woche mit niedrigem Verbrauch (4,5 L/100km)",
        "Familien und Paare mit normalem Gepaeck",
        "Premium-Komfort auf langen Strecken (Sitze, Schalldaemmung)",
        "Gepflegte Aesthetik fuer alle, die gut aussehen wollen, ohne zu uebertreiben",
      ],
      evitareSe: [
        "Sie suchen sportliche Leistung (lieber Audi RS3 oder BMW M2)",
        "Sie muessen Schotterpisten zu versteckten Straenden befahren (lieber Jeep Avenger)",
      ],
      shortPitch:
        "Der perfekte Kompromiss: Mercedes Premium-Komfort, Diesel-Verbrauch wie ein Kleinwagen (4,5 L/100km), Automatikgetriebe. Ideal fuer stressfreie Sardinien-Touren.",
    },
    fr: {
      category: "Premium",
      transmission: "7G-DCT automatique, traction avant",
      fuel: "Diesel (1.5 OM608)",
      prezziBassa: "90 €/jour",
      prezziAlta: "160 €/jour",
      prezziNote: "Tarif publie sur /fr/tarifs. Remises sur les locations longue duree (semaine ou plus).",
      ideale: [
        "Tour de l'ile : 1 000+ km en une semaine avec faible consommation (4,5 L/100km)",
        "Familles et couples avec bagages normaux",
        "Confort premium sur longues distances (sieges, isolation acoustique)",
        "Esthetique raffinee pour qui veut bien paraitre sans en faire trop",
      ],
      evitareSe: [
        "Vous cherchez des performances sportives (preferez Audi RS3 ou BMW M2)",
        "Vous devez emprunter des chemins de terre vers des plages cachees (preferez Jeep Avenger)",
      ],
      shortPitch:
        "Le compromis parfait : confort premium Mercedes, consommation diesel d'une citadine (4,5 L/100km), boite automatique. Ideal pour des tours de Sardaigne sans souci.",
    },
  },
  "jeep-avenger": {
    en: {
      category: "Compact SUV",
      transmission: "6-speed DCT automatic, front-wheel drive",
      fuel: "Petrol (1.2 PureTech turbo)",
      prezziBassa: "€60/day",
      prezziAlta: "€110/day",
      prezziNote: "Rate published on /en/rates.",
      ideale: [
        "Dirt roads to Spiaggia del Principe, Liscia Ruja, Capriccioli",
        "Families with more luggage or pushchairs",
        "Raised driving position, perceived safety on Costa Smeralda hairpins",
        "Mix of asphalt + dirt roads in inland Gallura",
      ],
      evitareSe: [
        "You want minimal fuel consumption (prefer Fiat Panda Hybrid)",
        "You're a couple with no luggage: a city car is enough and cheaper",
      ],
      shortPitch:
        "Compact SUV for those who want to explore the real Sardinia, even where the asphalt ends. High driving position, family space, modern comfort.",
    },
    de: {
      category: "Kompakt-SUV",
      transmission: "6-Gang DCT Automatik, Frontantrieb",
      fuel: "Benzin (1.2 PureTech Turbo)",
      prezziBassa: "60 €/Tag",
      prezziAlta: "110 €/Tag",
      prezziNote: "Tarif veroeffentlicht auf /de/preise.",
      ideale: [
        "Schotterpisten zu Spiaggia del Principe, Liscia Ruja, Capriccioli",
        "Familien mit mehr Gepaeck oder Kinderwagen",
        "Erhoehte Sitzposition, gefuehlte Sicherheit auf Costa Smeralda Serpentinen",
        "Mix aus Asphalt + Schotter im Landesinneren Gallura",
      ],
      evitareSe: [
        "Sie suchen minimalen Verbrauch (lieber Fiat Panda Hybrid)",
        "Sie sind ein Paar ohne Gepaeck: ein Kleinwagen reicht und kostet weniger",
      ],
      shortPitch:
        "Kompakt-SUV fuer alle, die das echte Sardinien erkunden wollen, auch dort, wo der Asphalt endet. Hohe Sitzposition, Familienplatz, moderner Komfort.",
    },
    fr: {
      category: "SUV compact",
      transmission: "6 vitesses DCT automatique, traction avant",
      fuel: "Essence (1.2 PureTech turbo)",
      prezziBassa: "60 €/jour",
      prezziAlta: "110 €/jour",
      prezziNote: "Tarif publie sur /fr/tarifs.",
      ideale: [
        "Chemins de terre vers Spiaggia del Principe, Liscia Ruja, Capriccioli",
        "Familles avec plus de bagages ou poussettes",
        "Position de conduite surelevee, securite percue sur les lacets de Costa Smeralda",
        "Melange asphalte + terre dans l'arriere-pays Gallura",
      ],
      evitareSe: [
        "Vous cherchez une consommation minimale (preferez Fiat Panda Hybrid)",
        "Vous etes en couple sans bagages : une citadine suffit et coute moins",
      ],
      shortPitch:
        "SUV compact pour qui veut explorer la vraie Sardaigne, meme la ou l'asphalte s'arrete. Position de conduite haute, espace famille, confort moderne.",
    },
  },
  "fiat-panda": {
    en: {
      category: "City car",
      transmission: "5-speed manual, front-wheel drive (12V mild-hybrid)",
      fuel: "Hybrid petrol 1.0 FireFly",
      prezziBassa: "€40/day",
      prezziAlta: "€70/day",
      prezziNote: "The lowest rate of the fleet. Ideal for long stays.",
      ideale: [
        "Low-budget holidays prioritising savings",
        "Tight historic centres (Olbia, Arzachena, Palau)",
        "Crowded Porto Cervo / Baja Sardinia parking in high season",
        "Singles, couples without bulky luggage",
      ],
      evitareSe: [
        "You have luggage for 4-5 people (prefer Jeep Avenger or Mercedes A-Class)",
        "You want automatic gearbox (prefer Jeep Avenger)",
        "You want motorway comfort for long trips (prefer Mercedes A-Class)",
      ],
      shortPitch:
        "Italy's symbolic city car: economical, agile in tight historic centres, low mild-hybrid fuel use. The rational choice for those who don't want to overdo it.",
    },
    de: {
      category: "Kleinwagen",
      transmission: "5-Gang Schaltgetriebe, Frontantrieb (12V Mild-Hybrid)",
      fuel: "Hybrid-Benzin 1.0 FireFly",
      prezziBassa: "40 €/Tag",
      prezziAlta: "70 €/Tag",
      prezziNote: "Der guenstigste Tarif der Flotte. Ideal fuer lange Aufenthalte.",
      ideale: [
        "Sparbewusste Ferien mit Fokus aufs Sparen",
        "Enge historische Zentren (Olbia, Arzachena, Palau)",
        "Ueberfuellte Parkplaetze Porto Cervo / Baja Sardinia in der Hochsaison",
        "Singles, Paare ohne sperriges Gepaeck",
      ],
      evitareSe: [
        "Sie haben Gepaeck fuer 4-5 Personen (lieber Jeep Avenger oder Mercedes A-Klasse)",
        "Sie suchen Automatikgetriebe (lieber Jeep Avenger)",
        "Sie wollen Autobahnkomfort fuer lange Strecken (lieber Mercedes A-Klasse)",
      ],
      shortPitch:
        "Der Inbegriff des italienischen Kleinwagens: sparsam, wendig in engen Altstaedten, niedriger Mild-Hybrid-Verbrauch. Die rationale Wahl fuer alle, die es nicht uebertreiben wollen.",
    },
    fr: {
      category: "Citadine",
      transmission: "Boite manuelle 5 vitesses, traction avant (mild-hybrid 12V)",
      fuel: "Essence hybride 1.0 FireFly",
      prezziBassa: "40 €/jour",
      prezziAlta: "70 €/jour",
      prezziNote: "Le tarif le plus bas de la flotte. Ideal pour les longs sejours.",
      ideale: [
        "Vacances petit budget axees sur l'economie",
        "Centres historiques etroits (Olbia, Arzachena, Palau)",
        "Parkings bondes Porto Cervo / Baja Sardinia en haute saison",
        "Celibataires, couples sans bagages volumineux",
      ],
      evitareSe: [
        "Vous avez des bagages pour 4-5 personnes (preferez Jeep Avenger ou Mercedes Classe A)",
        "Vous cherchez une boite automatique (preferez Jeep Avenger)",
        "Vous voulez le confort autoroutier pour de longs trajets (preferez Mercedes Classe A)",
      ],
      shortPitch:
        "La citadine symbole de l'Italie : economique, agile dans les centres historiques etroits, faible consommation mild-hybrid. Le choix rationnel pour qui ne veut pas en faire trop.",
    },
  },
};

/**
 * Ritorna VehicleSpec con i campi text-heavy tradotti nella lingua richiesta.
 * Per lang="it" ritorna lo spec originale invariato.
 * L'href viene anche localizzato verso la pagina veicolo nella lingua giusta.
 */
export function getTranslatedSpec(groupSlug: string, lang: Lang): VehicleSpec {
  const base = VEHICLE_SPECS[groupSlug];
  if (!base) throw new Error(`Vehicle ${groupSlug} not found`);
  if (lang === "it") return base;
  const t = TRANSLATIONS[groupSlug]?.[lang];
  if (!t) return { ...base, href: getLocalizedHref(groupSlug, lang) };
  return {
    ...base,
    category: t.category as any,
    href: getLocalizedHref(groupSlug, lang),
    specs: {
      ...base.specs,
      transmission: t.transmission,
      fuel: t.fuel,
    },
    prezzi: {
      bassaStagione: t.prezziBassa ?? base.prezzi.bassaStagione,
      altaStagione: t.prezziAlta ?? base.prezzi.altaStagione,
      note: t.prezziNote ?? base.prezzi.note,
    },
    ideale: t.ideale,
    evitareSe: t.evitareSe,
    shortPitch: t.shortPitch,
  };
}

/* ─── URL helpers per link tra pagine multilingua ─── */

const FLEET_BASE: Record<Lang, string> = {
  it: "/flotta",
  en: "/en/fleet",
  de: "/de/fuhrpark",
  fr: "/fr/flotte",
};

const VEHICLE_SLUGS_LANG: Record<string, Record<Lang, string>> = {
  "audi-rs3": { it: "audi-rs3", en: "audi-rs3-hire-olbia", de: "audi-rs3-mieten-olbia", fr: "audi-rs3-location-olbia" },
  "bmw-m2": { it: "bmw-m2", en: "bmw-m2-coupe-hire-olbia", de: "bmw-m2-coupe-mieten-olbia", fr: "bmw-m2-coupe-location-olbia" },
  "mercedes-classe-a": { it: "mercedes-classe-a", en: "mercedes-a-class-hire-olbia", de: "mercedes-a-klasse-mieten-olbia", fr: "mercedes-classe-a-location-olbia" },
  "jeep-avenger": { it: "jeep-avenger", en: "jeep-avenger-hire-olbia", de: "jeep-avenger-mieten-olbia", fr: "jeep-avenger-location-olbia" },
  "fiat-panda": { it: "fiat-panda", en: "fiat-panda-hire-olbia", de: "fiat-panda-mieten-olbia", fr: "fiat-panda-location-olbia" },
};

export function getLocalizedHref(groupSlug: string, lang: Lang): string {
  const slug = VEHICLE_SLUGS_LANG[groupSlug]?.[lang] ?? groupSlug;
  return `${FLEET_BASE[lang]}/${slug}`;
}

/* ─── Comparison pages base URL per lingua ─── */

export const COMPARE_BASE: Record<Lang, string> = {
  it: "/flotta/confronta",
  en: "/en/fleet/compare",
  de: "/de/fuhrpark/vergleich",
  fr: "/fr/flotte/comparer",
};

export function compareUrl(lang: Lang, slug: string): string {
  return `${COMPARE_BASE[lang]}/${slug}`;
}

/* ─── Booking URL per lingua ─── */

export const BOOK_HREF: Record<Lang, string> = {
  it: "/prenotaora",
  en: "/en/book-now",
  de: "/de/jetzt-buchen",
  fr: "/fr/reserver",
};

/**
 * Metadata multilingua per le 6 comparison pages /flotta/confronta/[a]-vs-[b].
 * Tutto cio che e' tradotto qui (title, description, h1, intro) viene usato
 * dai wrapper astro in /[lang]/flotta/confronta/.
 */

import type { Lang } from "./vehicle-specs-i18n";

export interface ComparisonMeta {
  /** Slug del confronto (path), es. "audi-rs3-vs-bmw-m2" */
  slug: string;
  /** GroupSlug del primo veicolo */
  aSlug: string;
  /** GroupSlug del secondo veicolo */
  bSlug: string;
  /** Eyebrow per index hub */
  hubEyebrow: Record<Lang, string>;
  /** Hint per index hub */
  hubNote: Record<Lang, string>;
  /** SEO title per lingua */
  title: Record<Lang, string>;
  /** Meta description per lingua */
  description: Record<Lang, string>;
  /** H1 della pagina per lingua */
  h1: Record<Lang, string>;
  /** Intro lead 80-150 parole AI-citable per lingua */
  intro: Record<Lang, string>;
  /** Breadcrumb name per lingua */
  breadcrumbName: Record<Lang, string>;
}

export const COMPARISONS: ComparisonMeta[] = [
  {
    slug: "audi-rs3-vs-bmw-m2",
    aSlug: "audi-rs3",
    bSlug: "bmw-m2",
    hubEyebrow: {
      it: "Sportiva vs sportiva",
      en: "Sport vs sport",
      de: "Sport vs Sport",
      fr: "Sportive vs sportive",
    },
    hubNote: {
      it: "400 CV trazione integrale vs 460 CV trazione posteriore",
      en: "400 HP all-wheel drive vs 460 HP rear-wheel drive",
      de: "400 PS Allrad vs 460 PS Heckantrieb",
      fr: "400 ch transmission integrale vs 460 ch propulsion arriere",
    },
    title: {
      it: "Audi RS3 vs BMW M2 Olbia: quale noleggiare in Costa Smeralda? | KS Rent",
      en: "Audi RS3 vs BMW M2 Olbia: which to rent in Costa Smeralda? | KS Rent",
      de: "Audi RS3 vs BMW M2 Olbia: welcher Mietwagen fuer Costa Smeralda? | KS Rent",
      fr: "Audi RS3 vs BMW M2 Olbia : laquelle louer en Costa Smeralda ? | KS Rent",
    },
    description: {
      it: "Confronto tecnico Audi RS3 vs BMW M2 a Olbia. Potenza, trazione, prezzi noleggio, quando scegliere ciascuna per la Costa Smeralda. KS Rent Sardinia.",
      en: "Technical comparison Audi RS3 vs BMW M2 in Olbia. Power, drivetrain, rental prices, when to pick each for Costa Smeralda. KS Rent Sardinia.",
      de: "Technischer Vergleich Audi RS3 vs BMW M2 in Olbia. Leistung, Antrieb, Mietpreise, wann welcher fuer die Costa Smeralda. KS Rent Sardinia.",
      fr: "Comparaison technique Audi RS3 vs BMW M2 a Olbia. Puissance, transmission, prix location, quand choisir chacune pour la Costa Smeralda.",
    },
    h1: {
      it: "Audi RS3 vs BMW M2 a Olbia: quale supercar scegliere per la Costa Smeralda?",
      en: "Audi RS3 vs BMW M2 in Olbia: which supercar to pick for Costa Smeralda?",
      de: "Audi RS3 vs BMW M2 in Olbia: welcher Supersportwagen fuer die Costa Smeralda?",
      fr: "Audi RS3 vs BMW M2 a Olbia : quelle supercar choisir pour la Costa Smeralda ?",
    },
    intro: {
      it: "Audi RS3 Sportback e BMW M2 Coupe sono le due supercar piu' richieste nel noleggio premium a Olbia e in Costa Smeralda. La RS3 monta un 5 cilindri 2.5 TFSI da 400 CV con trazione integrale quattro e cambio doppia frizione 7 marce, scatta 0-100 in 3,8 secondi. La M2 ha un 6 cilindri biturbo S58 da 460 CV con trazione posteriore e cambio Steptronic 8 marce, accelerazione 4,1 secondi. Entrambe sono noleggiabili presso KS Rent Sardinia (Olbia, P.IVA IT03028900904) con consegna in aeroporto, porto Isola Bianca, ville e hotel della Costa Smeralda. La differenza piu' importante non e' nei numeri: e' nel carattere di guida.",
      en: "Audi RS3 Sportback and BMW M2 Coupe are the two most requested supercars in the premium rental segment in Olbia and Costa Smeralda. The RS3 has a 5-cylinder 2.5 TFSI delivering 400 HP with quattro all-wheel drive and 7-speed dual-clutch gearbox, 0-100 in 3.8 seconds. The M2 has a 3.0 biturbo S58 with 460 HP, rear-wheel drive, 8-speed Steptronic gearbox, acceleration 4.1 seconds. Both are available from KS Rent Sardinia (Olbia, VAT IT03028900904) with delivery at the airport, Isola Bianca port, villas and Costa Smeralda hotels. The most important difference isn't in the numbers: it's in the driving character.",
      de: "Audi RS3 Sportback und BMW M2 Coupe sind die zwei meistgefragten Supersportwagen im Premium-Mietsegment in Olbia und der Costa Smeralda. Der RS3 hat einen 5-Zylinder 2.5 TFSI mit 400 PS und quattro-Allradantrieb sowie 7-Gang-Doppelkupplungsgetriebe, 0-100 in 3,8 Sekunden. Der M2 hat einen 3.0 Biturbo S58 mit 460 PS, Heckantrieb, 8-Gang Steptronic-Getriebe, Beschleunigung 4,1 Sekunden. Beide sind bei KS Rent Sardinia (Olbia, USt-ID IT03028900904) mietbar, mit Lieferung am Flughafen, Hafen Isola Bianca, Villen und Hotels der Costa Smeralda. Der wichtigste Unterschied liegt nicht in den Zahlen, sondern im Fahrcharakter.",
      fr: "Audi RS3 Sportback et BMW M2 Coupe sont les deux supercars les plus demandees dans le segment premium a Olbia et en Costa Smeralda. La RS3 a un 5 cylindres 2.5 TFSI de 400 ch avec transmission integrale quattro et boite double embrayage 7 vitesses, 0-100 en 3,8 secondes. La M2 a un 3.0 biturbo S58 de 460 ch, propulsion arriere, boite Steptronic 8 vitesses, acceleration 4,1 secondes. Les deux sont disponibles chez KS Rent Sardinia (Olbia, TVA IT03028900904) avec livraison a l'aeroport, port Isola Bianca, villas et hotels de la Costa Smeralda. La difference la plus importante n'est pas dans les chiffres : elle est dans le caractere de conduite.",
    },
    breadcrumbName: {
      it: "Audi RS3 vs BMW M2",
      en: "Audi RS3 vs BMW M2",
      de: "Audi RS3 vs BMW M2",
      fr: "Audi RS3 vs BMW M2",
    },
  },
  {
    slug: "audi-rs3-vs-mercedes-classe-a",
    aSlug: "audi-rs3",
    bSlug: "mercedes-classe-a",
    hubEyebrow: {
      it: "Sportiva vs Premium",
      en: "Sport vs Premium",
      de: "Sport vs Premium",
      fr: "Sportive vs Premium",
    },
    hubNote: {
      it: "Esperienza pura per pochi giorni vs comfort tour Sardegna",
      en: "Pure experience for a few days vs Sardinia tour comfort",
      de: "Pures Erlebnis fuer wenige Tage vs Sardinien-Tour-Komfort",
      fr: "Experience pure pour quelques jours vs confort tour Sardaigne",
    },
    title: {
      it: "Audi RS3 vs Mercedes Classe A: noleggio Olbia | KS Rent Sardinia",
      en: "Audi RS3 vs Mercedes A-Class: Olbia rental | KS Rent Sardinia",
      de: "Audi RS3 vs Mercedes A-Klasse: Olbia mieten | KS Rent Sardinia",
      fr: "Audi RS3 vs Mercedes Classe A : location Olbia | KS Rent Sardinia",
    },
    description: {
      it: "Confronto Audi RS3 supercar vs Mercedes Classe A premium per il noleggio a Olbia. Prezzi, prestazioni, consumi, quando scegliere ciascuna in Costa Smeralda.",
      en: "Audi RS3 supercar vs Mercedes A-Class premium for car hire in Olbia. Prices, performance, fuel use, when to pick each in Costa Smeralda.",
      de: "Audi RS3 Supersportwagen vs Mercedes A-Klasse Premium fuer Mietwagen in Olbia. Preise, Leistung, Verbrauch, wann welcher fuer Costa Smeralda.",
      fr: "Audi RS3 supercar vs Mercedes Classe A premium pour la location a Olbia. Prix, performances, consommation, quand choisir chacune en Costa Smeralda.",
    },
    h1: {
      it: "Audi RS3 vs Mercedes Classe A: sportiva o premium per la Sardegna?",
      en: "Audi RS3 vs Mercedes A-Class: sport or premium for Sardinia?",
      de: "Audi RS3 vs Mercedes A-Klasse: Sport oder Premium fuer Sardinien?",
      fr: "Audi RS3 vs Mercedes Classe A : sportive ou premium pour la Sardaigne ?",
    },
    intro: {
      it: "Audi RS3 e Mercedes Classe A 180d rappresentano due filosofie diverse del noleggio premium a Olbia. La RS3 e' una supercar pura: 400 CV, trazione integrale quattro, 0-100 in 3,8 secondi, tariffa su preventivo. La Classe A 180d e' una premium compatta diesel: 116 CV, cambio automatico 7G-DCT, consumo medio 4,5 L/100km, tariffa fissa pubblicata da 90 €/giorno. Su KS Rent Sardinia entrambe sono disponibili con consegna a domicilio in Costa Smeralda. La scelta dipende dall'obiettivo: esperienza sportiva intensa per pochi giorni di Costa Smeralda, oppure tour della Sardegna confortevole per 7-14 giorni con consumi contenuti.",
      en: "Audi RS3 and Mercedes A-Class 180d represent two different philosophies of premium car hire in Olbia. The RS3 is a pure supercar: 400 HP, quattro AWD, 0-100 in 3.8 seconds, on-request rate. The A-Class 180d is a premium compact diesel: 116 HP, 7G-DCT automatic, average consumption 4.5 L/100km, fixed published rate from €90/day. With KS Rent Sardinia both are available with home delivery in Costa Smeralda. Choice depends on goal: intense sporty experience for a few Costa Smeralda days, or comfortable Sardinia tour for 7-14 days with low fuel use.",
      de: "Audi RS3 und Mercedes A-Klasse 180d repraesentieren zwei verschiedene Philosophien der Premium-Autovermietung in Olbia. Der RS3 ist ein reinrassiger Supersportwagen: 400 PS, quattro Allradantrieb, 0-100 in 3,8 Sekunden, Tarif auf Anfrage. Die A-Klasse 180d ist ein Premium-Kompaktdiesel: 116 PS, 7G-DCT Automatik, Durchschnittsverbrauch 4,5 L/100km, fixer veroeffentlichter Tarif ab 90 €/Tag. Bei KS Rent Sardinia sind beide mit Lieferung an die Costa Smeralda verfuegbar. Die Wahl haengt vom Ziel ab: intensive sportliche Erfahrung fuer wenige Costa Smeralda-Tage oder bequeme Sardinien-Tour fuer 7-14 Tage mit niedrigem Verbrauch.",
      fr: "Audi RS3 et Mercedes Classe A 180d representent deux philosophies differentes de la location premium a Olbia. La RS3 est une supercar pure : 400 ch, transmission integrale quattro, 0-100 en 3,8 secondes, tarif sur devis. La Classe A 180d est une premium compacte diesel : 116 ch, boite automatique 7G-DCT, consommation moyenne 4,5 L/100km, tarif fixe publie a partir de 90 €/jour. Chez KS Rent Sardinia, les deux sont disponibles avec livraison a domicile en Costa Smeralda. Le choix depend de l'objectif : experience sportive intense pour quelques jours en Costa Smeralda, ou tour de Sardaigne confortable pour 7-14 jours avec faible consommation.",
    },
    breadcrumbName: {
      it: "Audi RS3 vs Mercedes Classe A",
      en: "Audi RS3 vs Mercedes A-Class",
      de: "Audi RS3 vs Mercedes A-Klasse",
      fr: "Audi RS3 vs Mercedes Classe A",
    },
  },
  {
    slug: "bmw-m2-vs-mercedes-classe-a",
    aSlug: "bmw-m2",
    bSlug: "mercedes-classe-a",
    hubEyebrow: {
      it: "Sportiva vs Premium",
      en: "Sport vs Premium",
      de: "Sport vs Premium",
      fr: "Sportive vs Premium",
    },
    hubNote: {
      it: "460 CV per pochi giorni vs diesel comfort 7-14 giorni",
      en: "460 HP for a few days vs comfort diesel 7-14 days",
      de: "460 PS fuer wenige Tage vs Komfort-Diesel 7-14 Tage",
      fr: "460 ch pour quelques jours vs diesel confort 7-14 jours",
    },
    title: {
      it: "BMW M2 vs Mercedes Classe A Olbia: noleggio sportiva o premium?",
      en: "BMW M2 vs Mercedes A-Class Olbia: sport or premium rental?",
      de: "BMW M2 vs Mercedes A-Klasse Olbia: Sport oder Premium mieten?",
      fr: "BMW M2 vs Mercedes Classe A Olbia : location sportive ou premium ?",
    },
    description: {
      it: "Confronto BMW M2 460 CV trazione posteriore vs Mercedes Classe A 180d diesel: prezzi, prestazioni, consumi, quale scegliere a Olbia per la Costa Smeralda.",
      en: "BMW M2 460 HP RWD vs Mercedes A-Class 180d diesel: prices, performance, fuel use, which to pick in Olbia for Costa Smeralda.",
      de: "BMW M2 460 PS Heckantrieb vs Mercedes A-Klasse 180d Diesel: Preise, Leistung, Verbrauch, welcher in Olbia fuer Costa Smeralda.",
      fr: "BMW M2 460 ch propulsion arriere vs Mercedes Classe A 180d diesel : prix, performances, consommation, lequel choisir a Olbia.",
    },
    h1: {
      it: "BMW M2 vs Mercedes Classe A: sportiva pura o premium per il tour?",
      en: "BMW M2 vs Mercedes A-Class: pure sport or premium for the tour?",
      de: "BMW M2 vs Mercedes A-Klasse: reiner Sport oder Premium fuer die Tour?",
      fr: "BMW M2 vs Mercedes Classe A : sportive pure ou premium pour le tour ?",
    },
    intro: {
      it: "BMW M2 Coupe e Mercedes Classe A 180d sono due interpretazioni opposte della classe premium tedesca, entrambe disponibili a noleggio presso KS Rent Sardinia a Olbia. La M2 e' una sportiva da 460 CV con trazione posteriore, cambio Steptronic 8 marce e accelerazione 4,1 secondi: pensata per chi cerca un'esperienza di guida pura per pochi giorni in Costa Smeralda, con una tariffa su preventivo che parte da circa 270 €/giorno. La Classe A 180d e' una premium compatta diesel da 116 CV, cambio automatico 7G-DCT, consumo medio 4,5 L/100km e tariffa fissa pubblicata da 90 €/giorno: la scelta razionale per tour della Sardegna lunghi (1.000+ km in una settimana) con comfort, eleganza e consumi contenuti.",
      en: "BMW M2 Coupe and Mercedes A-Class 180d are two opposing interpretations of German premium, both available for rental at KS Rent Sardinia in Olbia. The M2 is a 460 HP sports car with rear-wheel drive, 8-speed Steptronic, acceleration 4.1 seconds: designed for those seeking a pure driving experience for a few Costa Smeralda days, with on-request rate starting from around €270/day. The A-Class 180d is a 116 HP premium compact diesel, 7G-DCT automatic, average 4.5 L/100km consumption and fixed published rate from €90/day: the rational choice for long Sardinia tours (1,000+ km in a week) with comfort, elegance and low fuel use.",
      de: "BMW M2 Coupe und Mercedes A-Klasse 180d sind zwei gegensaetzliche Interpretationen des deutschen Premium-Segments, beide bei KS Rent Sardinia in Olbia mietbar. Der M2 ist ein 460 PS Sportwagen mit Heckantrieb, 8-Gang Steptronic und Beschleunigung 4,1 Sekunden: konzipiert fuer alle, die eine reine Fahrerfahrung fuer wenige Costa Smeralda-Tage suchen, mit Tarif auf Anfrage ab ca. 270 €/Tag. Die A-Klasse 180d ist ein Premium-Kompaktdiesel mit 116 PS, 7G-DCT Automatik, Durchschnittsverbrauch 4,5 L/100km und fixem veroeffentlichten Tarif ab 90 €/Tag: die rationale Wahl fuer lange Sardinien-Touren (1.000+ km in einer Woche) mit Komfort, Eleganz und niedrigem Verbrauch.",
      fr: "BMW M2 Coupe et Mercedes Classe A 180d sont deux interpretations opposees du premium allemand, toutes deux disponibles en location chez KS Rent Sardinia a Olbia. La M2 est une sportive de 460 ch a propulsion arriere, boite Steptronic 8 vitesses et acceleration 4,1 secondes : pensee pour qui cherche une experience de conduite pure pour quelques jours en Costa Smeralda, avec tarif sur devis a partir d'environ 270 €/jour. La Classe A 180d est une premium compacte diesel de 116 ch, boite automatique 7G-DCT, consommation moyenne 4,5 L/100km et tarif fixe publie a partir de 90 €/jour : le choix rationnel pour de longs tours de Sardaigne (1 000+ km en une semaine) avec confort, elegance et faible consommation.",
    },
    breadcrumbName: {
      it: "BMW M2 vs Mercedes Classe A",
      en: "BMW M2 vs Mercedes A-Class",
      de: "BMW M2 vs Mercedes A-Klasse",
      fr: "BMW M2 vs Mercedes Classe A",
    },
  },
  {
    slug: "audi-rs3-vs-jeep-avenger",
    aSlug: "audi-rs3",
    bSlug: "jeep-avenger",
    hubEyebrow: {
      it: "Supercar vs SUV",
      en: "Supercar vs SUV",
      de: "Supersportwagen vs SUV",
      fr: "Supercar vs SUV",
    },
    hubNote: {
      it: "Esperienza Costa Smeralda vs flessibilità verso spiagge sterrate",
      en: "Costa Smeralda experience vs flexibility for dirt-road beaches",
      de: "Costa Smeralda-Erlebnis vs Flexibilitaet zu Schotterstrand",
      fr: "Experience Costa Smeralda vs flexibilite vers plages sur piste",
    },
    title: {
      it: "Audi RS3 vs Jeep Avenger Olbia: supercar o SUV? | KS Rent Sardinia",
      en: "Audi RS3 vs Jeep Avenger Olbia: supercar or SUV? | KS Rent Sardinia",
      de: "Audi RS3 vs Jeep Avenger Olbia: Supersportwagen oder SUV? | KS Rent",
      fr: "Audi RS3 vs Jeep Avenger Olbia : supercar ou SUV ? | KS Rent Sardinia",
    },
    description: {
      it: "Confronto Audi RS3 supercar 400 CV vs Jeep Avenger SUV: prezzi, prestazioni, sterrati Costa Smeralda. Quale veicolo a noleggio scegliere a Olbia.",
      en: "Audi RS3 supercar 400 HP vs Jeep Avenger SUV: prices, performance, Costa Smeralda dirt roads. Which rental vehicle to pick in Olbia.",
      de: "Audi RS3 Supersportwagen 400 PS vs Jeep Avenger SUV: Preise, Leistung, Costa Smeralda Schotterpisten. Welcher Mietwagen in Olbia.",
      fr: "Audi RS3 supercar 400 ch vs Jeep Avenger SUV : prix, performances, chemins de terre Costa Smeralda. Quel vehicule de location a Olbia.",
    },
    h1: {
      it: "Audi RS3 vs Jeep Avenger: supercar o SUV per esplorare la Sardegna?",
      en: "Audi RS3 vs Jeep Avenger: supercar or SUV to explore Sardinia?",
      de: "Audi RS3 vs Jeep Avenger: Supersportwagen oder SUV zur Erkundung Sardiniens?",
      fr: "Audi RS3 vs Jeep Avenger : supercar ou SUV pour explorer la Sardaigne ?",
    },
    intro: {
      it: "Audi RS3 Sportback e Jeep Avenger sono due veicoli pensati per esperienze opposte in Costa Smeralda. La RS3 e' una supercar da 400 CV con trazione integrale quattro: pensata per la guida sportiva su strade asfaltate, eventi mondani a Porto Cervo, esperienza di pochi giorni di alto profilo. La Jeep Avenger e' un SUV compatto da 100 CV con cambio automatico: posizione di guida rialzata, bagagliaio da 380 L, capace di affrontare gli sterrati che portano alle spiagge nascoste come Spiaggia del Principe, Liscia Ruja, Capriccioli. Tariffe diametralmente opposte: la RS3 e' su preventivo (da 250 €/giorno indicativo), la Jeep Avenger parte da 60 €/giorno bassa stagione. La scelta dipende dall'itinerario e dal target dell'esperienza.",
      en: "Audi RS3 Sportback and Jeep Avenger are two vehicles designed for opposite experiences in Costa Smeralda. The RS3 is a 400 HP supercar with quattro all-wheel drive: built for sporty driving on paved roads, Porto Cervo high-profile events, few-day premium experience. The Jeep Avenger is a 100 HP compact SUV with automatic gearbox: raised driving position, 380 L boot, capable of tackling the dirt roads to hidden beaches like Spiaggia del Principe, Liscia Ruja, Capriccioli. Diametrically opposed rates: the RS3 is on request (from €250/day indicative), the Jeep Avenger starts from €60/day low season. Choice depends on itinerary and target experience.",
      de: "Audi RS3 Sportback und Jeep Avenger sind zwei Fahrzeuge fuer entgegengesetzte Erfahrungen in der Costa Smeralda. Der RS3 ist ein 400 PS Supersportwagen mit quattro Allradantrieb: gebaut fuer sportliches Fahren auf befestigten Strassen, hochkaraetige Events in Porto Cervo, Premium-Erfahrung fuer wenige Tage. Der Jeep Avenger ist ein 100 PS Kompakt-SUV mit Automatikgetriebe: erhoehte Sitzposition, 380 L Kofferraum, faehig die Schotterpisten zu versteckten Straenden wie Spiaggia del Principe, Liscia Ruja, Capriccioli zu meistern. Diametral entgegengesetzte Tarife: RS3 auf Anfrage (ab 250 €/Tag indikativ), Jeep Avenger ab 60 €/Tag in der Nebensaison. Die Wahl haengt vom Reiseplan und Erlebnisziel ab.",
      fr: "Audi RS3 Sportback et Jeep Avenger sont deux vehicules concus pour des experiences opposees en Costa Smeralda. La RS3 est une supercar de 400 ch avec transmission integrale quattro : conjurada pour la conduite sportive sur routes asphaltees, evenements mondains a Porto Cervo, experience premium de quelques jours. Le Jeep Avenger est un SUV compact de 100 ch avec boite automatique : position de conduite surelevee, coffre de 380 L, capable d'affronter les chemins de terre menant aux plages cachees comme Spiaggia del Principe, Liscia Ruja, Capriccioli. Tarifs diametralement opposes : la RS3 sur devis (a partir de 250 €/jour indicatif), le Jeep Avenger a partir de 60 €/jour basse saison. Le choix depend de l'itineraire et de la cible d'experience.",
    },
    breadcrumbName: {
      it: "Audi RS3 vs Jeep Avenger",
      en: "Audi RS3 vs Jeep Avenger",
      de: "Audi RS3 vs Jeep Avenger",
      fr: "Audi RS3 vs Jeep Avenger",
    },
  },
  {
    slug: "mercedes-classe-a-vs-jeep-avenger",
    aSlug: "mercedes-classe-a",
    bSlug: "jeep-avenger",
    hubEyebrow: {
      it: "Premium vs SUV",
      en: "Premium vs SUV",
      de: "Premium vs SUV",
      fr: "Premium vs SUV",
    },
    hubNote: {
      it: "Comfort autostradale diesel vs versatilità famiglia + sterrato",
      en: "Diesel motorway comfort vs family + dirt-road versatility",
      de: "Diesel-Autobahnkomfort vs Familie + Schotter Vielseitigkeit",
      fr: "Confort autoroutier diesel vs polyvalence famille + piste",
    },
    title: {
      it: "Mercedes Classe A vs Jeep Avenger Olbia: premium o SUV?",
      en: "Mercedes A-Class vs Jeep Avenger Olbia: premium or SUV?",
      de: "Mercedes A-Klasse vs Jeep Avenger Olbia: Premium oder SUV?",
      fr: "Mercedes Classe A vs Jeep Avenger Olbia : premium ou SUV ?",
    },
    description: {
      it: "Confronto Mercedes Classe A 180d diesel vs Jeep Avenger SUV: consumi, comfort, off-road, prezzi. Quale veicolo a noleggio scegliere a Olbia.",
      en: "Mercedes A-Class 180d diesel vs Jeep Avenger SUV: fuel use, comfort, off-road, prices. Which rental vehicle to pick in Olbia.",
      de: "Mercedes A-Klasse 180d Diesel vs Jeep Avenger SUV: Verbrauch, Komfort, Offroad, Preise. Welcher Mietwagen in Olbia.",
      fr: "Mercedes Classe A 180d diesel vs Jeep Avenger SUV : consommation, confort, tout-terrain, prix. Quel vehicule de location a Olbia.",
    },
    h1: {
      it: "Mercedes Classe A vs Jeep Avenger: premium o SUV per la Sardegna?",
      en: "Mercedes A-Class vs Jeep Avenger: premium or SUV for Sardinia?",
      de: "Mercedes A-Klasse vs Jeep Avenger: Premium oder SUV fuer Sardinien?",
      fr: "Mercedes Classe A vs Jeep Avenger : premium ou SUV pour la Sardaigne ?",
    },
    intro: {
      it: "Mercedes Classe A 180d e Jeep Avenger sono due opzioni intermedie nel noleggio a Olbia, entrambe con cambio automatico e adatte a coppie e famiglie. La Classe A 180d e' una premium compatta diesel da 116 CV con consumo 4,5 L/100km, ideale per tour autostradali confortevoli e per chi cerca eleganza Mercedes. La Jeep Avenger e' un SUV compatto benzina da 100 CV con consumo 6,1 L/100km, posizione di guida rialzata e maggior versatilita' per accedere a spiagge raggiungibili solo da sterrato. Entrambe partono da 60-90 €/giorno bassa stagione e raggiungono 110-160 €/giorno in alta stagione. La scelta dipende dal tipo di itinerario: comfort autostradale e centri storici (Mercedes A) oppure flessibilita' off-road e bagaglio famiglia (Jeep Avenger).",
      en: "Mercedes A-Class 180d and Jeep Avenger are two intermediate options for car hire in Olbia, both with automatic gearbox and suited to couples and families. The A-Class 180d is a 116 HP premium compact diesel with 4.5 L/100km consumption, ideal for comfortable motorway tours and Mercedes elegance seekers. The Jeep Avenger is a 100 HP petrol compact SUV with 6.1 L/100km consumption, raised driving position and greater versatility to reach beaches accessible only by dirt road. Both start at €60-90/day low season and reach €110-160/day high season. Choice depends on itinerary type: motorway comfort and historic centres (Mercedes A) or off-road flexibility and family luggage (Jeep Avenger).",
      de: "Mercedes A-Klasse 180d und Jeep Avenger sind zwei mittlere Optionen fuer die Anmietung in Olbia, beide mit Automatikgetriebe und geeignet fuer Paare und Familien. Die A-Klasse 180d ist ein 116 PS Premium-Kompaktdiesel mit 4,5 L/100km Verbrauch, ideal fuer komfortable Autobahn-Touren und Liebhaber Mercedes-Eleganz. Der Jeep Avenger ist ein 100 PS Benzin-Kompakt-SUV mit 6,1 L/100km Verbrauch, erhoehter Sitzposition und groesserer Vielseitigkeit, um Straende zu erreichen, die nur ueber Schotterpisten zugaenglich sind. Beide starten bei 60-90 €/Tag in der Nebensaison und erreichen 110-160 €/Tag in der Hochsaison. Die Wahl haengt vom Reisetyp ab: Autobahnkomfort und historische Zentren (Mercedes A) oder Offroad-Flexibilitaet und Familiengepaeck (Jeep Avenger).",
      fr: "Mercedes Classe A 180d et Jeep Avenger sont deux options intermediaires pour la location a Olbia, toutes deux avec boite automatique et adaptees aux couples et familles. La Classe A 180d est une premium compacte diesel de 116 ch avec 4,5 L/100km de consommation, ideale pour les tours autoroutiers confortables et l'elegance Mercedes. Le Jeep Avenger est un SUV compact essence de 100 ch avec 6,1 L/100km de consommation, position de conduite surelevee et plus grande polyvalence pour acceder aux plages joignables uniquement par chemin de terre. Les deux partent de 60-90 €/jour en basse saison et atteignent 110-160 €/jour en haute saison. Le choix depend du type d'itineraire : confort autoroutier et centres historiques (Mercedes A) ou flexibilite tout-terrain et bagages famille (Jeep Avenger).",
    },
    breadcrumbName: {
      it: "Mercedes Classe A vs Jeep Avenger",
      en: "Mercedes A-Class vs Jeep Avenger",
      de: "Mercedes A-Klasse vs Jeep Avenger",
      fr: "Mercedes Classe A vs Jeep Avenger",
    },
  },
  {
    slug: "jeep-avenger-vs-fiat-panda",
    aSlug: "jeep-avenger",
    bSlug: "fiat-panda",
    hubEyebrow: {
      it: "SUV vs City car",
      en: "SUV vs City car",
      de: "SUV vs Kleinwagen",
      fr: "SUV vs Citadine",
    },
    hubNote: {
      it: "Spiagge nascoste su sterrato vs centri storici stretti",
      en: "Hidden beaches on dirt roads vs tight historic centres",
      de: "Versteckte Straende auf Schotter vs enge historische Zentren",
      fr: "Plages cachees sur piste vs centres historiques etroits",
    },
    title: {
      it: "Jeep Avenger vs Fiat Panda: SUV o city car a Olbia? | KS Rent",
      en: "Jeep Avenger vs Fiat Panda: SUV or city car in Olbia? | KS Rent",
      de: "Jeep Avenger vs Fiat Panda: SUV oder Kleinwagen in Olbia? | KS Rent",
      fr: "Jeep Avenger vs Fiat Panda : SUV ou citadine a Olbia ? | KS Rent",
    },
    description: {
      it: "Confronto Jeep Avenger SUV vs Fiat Panda Hybrid city car per il noleggio a Olbia. Bagagli, consumi, sterrati, prezzi: quale conviene per la tua vacanza?",
      en: "Jeep Avenger SUV vs Fiat Panda Hybrid city car for car hire in Olbia. Luggage, fuel use, dirt roads, prices: which fits your holiday?",
      de: "Jeep Avenger SUV vs Fiat Panda Hybrid Kleinwagen fuer Olbia-Anmietung. Gepaeck, Verbrauch, Schotter, Preise: welcher passt zu Ihrem Urlaub?",
      fr: "Jeep Avenger SUV vs Fiat Panda Hybrid citadine pour la location a Olbia. Bagages, consommation, pistes, prix : laquelle convient a vos vacances ?",
    },
    h1: {
      it: "Jeep Avenger vs Fiat Panda Hybrid: SUV o city car per la Costa Smeralda?",
      en: "Jeep Avenger vs Fiat Panda Hybrid: SUV or city car for Costa Smeralda?",
      de: "Jeep Avenger vs Fiat Panda Hybrid: SUV oder Kleinwagen fuer die Costa Smeralda?",
      fr: "Jeep Avenger vs Fiat Panda Hybrid : SUV ou citadine pour la Costa Smeralda ?",
    },
    intro: {
      it: "Jeep Avenger e Fiat Panda Hybrid sono le due opzioni piu' popolari del noleggio economico-pratico a Olbia. La Jeep Avenger e' un SUV compatto da 100 CV con cambio automatico DCT, posizione di guida rialzata e bagagliaio da 380 L: pensata per famiglie e per chi vuole raggiungere spiagge nascoste su sterrato (Spiaggia del Principe, Liscia Ruja, Capriccioli). La Fiat Panda Hybrid 70 CV con cambio manuale 5 marce e bagagliaio da 225 L e' la city car simbolo dell'Italia: la piu' economica della flotta KS Rent Sardinia (40 €/giorno bassa stagione), perfetta per centri storici stretti, parcheggi affollati di Porto Cervo in alta stagione e single/coppie con poco bagaglio. Stessa stagione tariffaria (aprile-ottobre), priorita' diversa.",
      en: "Jeep Avenger and Fiat Panda Hybrid are the two most popular options in the value-practical rental segment in Olbia. The Jeep Avenger is a 100 HP compact SUV with DCT automatic, raised driving position and 380 L boot: designed for families and those who want to reach hidden beaches via dirt roads (Spiaggia del Principe, Liscia Ruja, Capriccioli). The Fiat Panda Hybrid 70 HP with 5-speed manual gearbox and 225 L boot is Italy's symbolic city car: the most economical in the KS Rent Sardinia fleet (€40/day low season), perfect for tight historic centres, crowded Porto Cervo parking in high season, and singles/couples with light luggage. Same seasonal calendar (April-October), different priority.",
      de: "Jeep Avenger und Fiat Panda Hybrid sind die beiden beliebtesten Optionen im preiswert-praktischen Mietsegment in Olbia. Der Jeep Avenger ist ein 100 PS Kompakt-SUV mit DCT-Automatik, erhoehter Sitzposition und 380 L Kofferraum: konzipiert fuer Familien und alle, die versteckte Straende ueber Schotterpisten erreichen wollen (Spiaggia del Principe, Liscia Ruja, Capriccioli). Der Fiat Panda Hybrid 70 PS mit 5-Gang-Schaltgetriebe und 225 L Kofferraum ist der italienische Inbegriff des Kleinwagens: der guenstigste in der KS Rent Sardinia-Flotte (40 €/Tag in der Nebensaison), perfekt fuer enge Altstaedte, ueberfuellte Porto Cervo-Parkplaetze in der Hochsaison und Singles/Paare mit leichtem Gepaeck. Gleiche Saison (April-Oktober), andere Prioritaet.",
      fr: "Jeep Avenger et Fiat Panda Hybrid sont les deux options les plus populaires du segment economique-pratique a Olbia. Le Jeep Avenger est un SUV compact de 100 ch avec boite automatique DCT, position de conduite surelevee et coffre de 380 L : pense pour les familles et qui veut rejoindre les plages cachees par chemin de terre (Spiaggia del Principe, Liscia Ruja, Capriccioli). La Fiat Panda Hybrid 70 ch avec boite manuelle 5 vitesses et coffre de 225 L est la citadine symbole de l'Italie : la plus economique de la flotte KS Rent Sardinia (40 €/jour basse saison), parfaite pour les centres historiques etroits, les parkings bondes de Porto Cervo en haute saison et les celibataires/couples avec peu de bagages. Meme saison tarifaire (avril-octobre), priorite differente.",
    },
    breadcrumbName: {
      it: "Jeep Avenger vs Fiat Panda",
      en: "Jeep Avenger vs Fiat Panda",
      de: "Jeep Avenger vs Fiat Panda",
      fr: "Jeep Avenger vs Fiat Panda",
    },
  },
];

/* Hub /[lang]/flotta/confronta labels */

export const HUB_LABELS: Record<Lang, {
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  hubName: string;
  fleetName: string;
  ctaTitle: string;
  ctaSubtitle: string;
  ctaFleet: string;
  ctaCheck: string;
}> = {
  it: {
    title: "Confronti veicoli a noleggio Olbia | KS Rent Sardinia",
    description: "Confronti dettagliati tra le auto a noleggio di KS Rent Sardinia: Audi RS3 vs BMW M2, Mercedes Classe A vs Audi RS3, Jeep Avenger vs Fiat Panda. Quale scegliere?",
    eyebrow: "Confronti veicoli",
    h1: "Quale veicolo scegliere",
    intro: "Confronti tecnici dettagliati tra i veicoli a noleggio di KS Rent Sardinia. Specifiche, prezzi, consigli pratici per scegliere il mezzo giusto per la tua vacanza in Costa Smeralda.",
    hubName: "Confronti",
    fleetName: "Flotta",
    ctaTitle: "Non sai ancora cosa scegliere?",
    ctaSubtitle: "Francesco e Salvatore Milo sono disponibili su WhatsApp +39 344 6107071 per consigliarti il veicolo giusto in base al tuo itinerario.",
    ctaFleet: "Tutta la flotta",
    ctaCheck: "Verifica disponibilità",
  },
  en: {
    title: "Vehicle comparisons Olbia car hire | KS Rent Sardinia",
    description: "Detailed comparisons between KS Rent Sardinia rental cars: Audi RS3 vs BMW M2, Mercedes A-Class vs Audi RS3, Jeep Avenger vs Fiat Panda. Which to pick?",
    eyebrow: "Vehicle comparisons",
    h1: "Which vehicle to pick",
    intro: "Detailed technical comparisons between KS Rent Sardinia rental vehicles. Specs, prices, practical advice to pick the right ride for your Costa Smeralda holiday.",
    hubName: "Comparisons",
    fleetName: "Fleet",
    ctaTitle: "Still undecided?",
    ctaSubtitle: "Francesco and Salvatore Milo are available on WhatsApp +39 344 6107071 to recommend the right vehicle for your itinerary.",
    ctaFleet: "Full fleet",
    ctaCheck: "Check availability",
  },
  de: {
    title: "Fahrzeugvergleiche Olbia Mietwagen | KS Rent Sardinia",
    description: "Detaillierte Vergleiche zwischen KS Rent Sardinia Mietfahrzeugen: Audi RS3 vs BMW M2, Mercedes A-Klasse vs Audi RS3, Jeep Avenger vs Fiat Panda.",
    eyebrow: "Fahrzeugvergleiche",
    h1: "Welches Fahrzeug waehlen",
    intro: "Detaillierte technische Vergleiche zwischen den KS Rent Sardinia Mietfahrzeugen. Spezifikationen, Preise, praktische Ratschlaege zur Wahl des richtigen Fahrzeugs fuer Ihren Costa Smeralda-Urlaub.",
    hubName: "Vergleiche",
    fleetName: "Flotte",
    ctaTitle: "Noch unentschlossen?",
    ctaSubtitle: "Francesco und Salvatore Milo sind auf WhatsApp +39 344 6107071 erreichbar, um Ihnen das richtige Fahrzeug fuer Ihre Route zu empfehlen.",
    ctaFleet: "Komplette Flotte",
    ctaCheck: "Verfuegbarkeit pruefen",
  },
  fr: {
    title: "Comparaisons vehicules location Olbia | KS Rent Sardinia",
    description: "Comparaisons detaillees entre les vehicules de location KS Rent Sardinia : Audi RS3 vs BMW M2, Mercedes Classe A vs Audi RS3, Jeep Avenger vs Fiat Panda.",
    eyebrow: "Comparaisons vehicules",
    h1: "Quel vehicule choisir",
    intro: "Comparaisons techniques detaillees entre les vehicules de location KS Rent Sardinia. Specifications, prix, conseils pratiques pour choisir le bon vehicule pour vos vacances en Costa Smeralda.",
    hubName: "Comparaisons",
    fleetName: "Flotte",
    ctaTitle: "Toujours indecis ?",
    ctaSubtitle: "Francesco et Salvatore Milo sont disponibles sur WhatsApp +39 344 6107071 pour vous conseiller le bon vehicule selon votre itineraire.",
    ctaFleet: "Flotte complete",
    ctaCheck: "Verifier disponibilite",
  },
};

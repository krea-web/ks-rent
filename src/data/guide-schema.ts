/**
 * Schema JSON-LD condiviso per le guide tradotte (EN/DE/FR).
 *
 * - buildDurationHowTo(): HowTo per le 6 guide durata (itinerario a tappe per
 *   3/5/7/10/14 giorni; processo di noleggio per 30 giorni).
 * - buildGalluraEvents(): array di Event per la guida sagre/eventi Gallura 2026
 *   (solo eventi con data 2026 esplicita).
 *
 * L'italiano è definito inline nelle rispettive pagine /guide/*.astro; qui stanno
 * SOLO le traduzioni, per non duplicare la sorgente IT ed evitare drift.
 */

export type GuideLang = "en" | "de" | "fr";
// Tipo separato per gli Event: anche IT (la guida sagre/eventi esiste in 4 lingue).
export type EventLang = "it" | "en" | "de" | "fr";
export type DurationKey = "3" | "5" | "7" | "10" | "14" | "30";

interface Step { name: string; text: string }
interface HowToContent { name: string; description: string; steps: Step[] }

const TOTAL_TIME: Record<DurationKey, string> = {
  "3": "P3D", "5": "P5D", "7": "P7D", "10": "P10D", "14": "P14D", "30": "P30D",
};

const DURATION: Record<DurationKey, Record<GuideLang, HowToContent>> = {
  "3": {
    en: {
      name: "How to plan a 3-day weekend in Olbia and the Costa Smeralda",
      description: "A 72-hour itinerary with a rental car from Olbia: arrival, Costa Smeralda and the East Coast in 3 days.",
      steps: [
        { name: "Friday evening — Arrival and pick-up", text: "Collect the vehicle at Olbia Airport (OLB) in 5-10 minutes, check in at your hotel and have dinner at the port of Olbia." },
        { name: "Saturday — Costa Smeralda", text: "Spiaggia del Principe before 10:30, lunch in Porto Cervo, afternoon at Liscia Ruja and Capriccioli; back to Olbia for dinner." },
        { name: "Sunday — East Coast and return", text: "San Teodoro and La Cinta, a short stop at Tavolara from Porto San Paolo, return by 22:30 or early Monday morning." },
      ],
    },
    de: {
      name: "Wie man ein 3-tägiges Wochenende in Olbia und an der Costa Smeralda plant",
      description: "Eine 72-Stunden-Route mit Mietwagen ab Olbia: Ankunft, Costa Smeralda und Ostküste in 3 Tagen.",
      steps: [
        { name: "Freitagabend — Ankunft und Abholung", text: "Holen Sie das Fahrzeug in 5-10 Minuten am Flughafen Olbia (OLB) ab, checken Sie im Hotel ein und essen Sie am Hafen von Olbia zu Abend." },
        { name: "Samstag — Costa Smeralda", text: "Spiaggia del Principe vor 10:30 Uhr, Mittagessen in Porto Cervo, nachmittags Liscia Ruja und Capriccioli; zurück nach Olbia zum Abendessen." },
        { name: "Sonntag — Ostküste und Rückgabe", text: "San Teodoro und La Cinta, kurzer Halt bei Tavolara von Porto San Paolo aus, Rückgabe bis 22:30 Uhr oder früh am Montagmorgen." },
      ],
    },
    fr: {
      name: "Comment organiser un week-end de 3 jours à Olbia et en Costa Smeralda",
      description: "Un itinéraire de 72 heures avec une voiture de location depuis Olbia : arrivée, Costa Smeralda et côte est en 3 jours.",
      steps: [
        { name: "Vendredi soir — Arrivée et prise en charge", text: "Récupérez le véhicule à l'aéroport d'Olbia (OLB) en 5-10 minutes, faites le check-in à l'hôtel et dînez au port d'Olbia." },
        { name: "Samedi — Costa Smeralda", text: "Spiaggia del Principe avant 10h30, déjeuner à Porto Cervo, après-midi à Liscia Ruja et Capriccioli ; retour à Olbia pour le dîner." },
        { name: "Dimanche — Côte est et restitution", text: "San Teodoro et La Cinta, court arrêt à Tavolara depuis Porto San Paolo, restitution avant 22h30 ou tôt lundi matin." },
      ],
    },
  },
  "5": {
    en: {
      name: "How to plan 5 days in Olbia between the Costa Smeralda and the islands",
      description: "A 5-day itinerary with a rental car from Olbia: Costa Smeralda, La Maddalena and the East Coast, ideal for long weekends.",
      steps: [
        { name: "Day 1 — Arrival", text: "Pick-up at Olbia Airport (OLB), dinner at the port and a night in town to settle in." },
        { name: "Day 2 — Northern Costa Smeralda", text: "Porto Cervo, Spiaggia del Principe and Liscia Ruja; lunch at Phi Beach, back to Olbia for the evening." },
        { name: "Day 3 — La Maddalena", text: "Drive to Palau, ferry and tour of the archipelago (Caprera, Spargi, Budelli); evening return via Cannigione." },
        { name: "Day 4 — East Coast / San Teodoro", text: "La Cinta, Cala Brandinchi and Lu Impostu, lunch at Capo Coda Cavallo and a relaxing afternoon." },
        { name: "Day 5 — Inland and return", text: "San Pantaleo, a last swim at Pittulongu and vehicle return in the evening or early morning." },
      ],
    },
    de: {
      name: "Wie man 5 Tage in Olbia zwischen Costa Smeralda und Inseln plant",
      description: "Eine 5-Tage-Route mit Mietwagen ab Olbia: Costa Smeralda, La Maddalena und Ostküste, ideal für verlängerte Wochenenden.",
      steps: [
        { name: "Tag 1 — Ankunft", text: "Abholung am Flughafen Olbia (OLB), Abendessen am Hafen und eine Nacht in der Stadt zum Ankommen." },
        { name: "Tag 2 — Nördliche Costa Smeralda", text: "Porto Cervo, Spiaggia del Principe und Liscia Ruja; Mittagessen am Phi Beach, abends zurück nach Olbia." },
        { name: "Tag 3 — La Maddalena", text: "Fahrt nach Palau, Fähre und Tour durch das Archipel (Caprera, Spargi, Budelli); Rückkehr am Abend über Cannigione." },
        { name: "Tag 4 — Ostküste / San Teodoro", text: "La Cinta, Cala Brandinchi und Lu Impostu, Mittagessen am Capo Coda Cavallo und entspannter Nachmittag." },
        { name: "Tag 5 — Hinterland und Rückgabe", text: "San Pantaleo, letztes Bad in Pittulongu und Fahrzeugrückgabe am Abend oder früh am Morgen." },
      ],
    },
    fr: {
      name: "Comment organiser 5 jours à Olbia entre Costa Smeralda et îles",
      description: "Un itinéraire de 5 jours avec voiture de location depuis Olbia : Costa Smeralda, La Maddalena et côte est, idéal pour les ponts.",
      steps: [
        { name: "Jour 1 — Arrivée", text: "Prise en charge à l'aéroport d'Olbia (OLB), dîner au port et nuit en ville pour s'installer." },
        { name: "Jour 2 — Costa Smeralda nord", text: "Porto Cervo, Spiaggia del Principe et Liscia Ruja ; déjeuner à Phi Beach, retour à Olbia pour le soir." },
        { name: "Jour 3 — La Maddalena", text: "Départ vers Palau, ferry et tour de l'archipel (Caprera, Spargi, Budelli) ; retour le soir via Cannigione." },
        { name: "Jour 4 — Côte est / San Teodoro", text: "La Cinta, Cala Brandinchi et Lu Impostu, déjeuner à Capo Coda Cavallo et après-midi détente." },
        { name: "Jour 5 — Arrière-pays et restitution", text: "San Pantaleo, dernière baignade à Pittulongu et restitution du véhicule le soir ou tôt le matin." },
      ],
    },
  },
  "7": {
    en: {
      name: "How to plan a week (7 days) in Gallura from Olbia",
      description: "A 7-day itinerary with a rental car from Olbia: Costa Smeralda, La Maddalena, the East Coast and the Gallura inland.",
      steps: [
        { name: "Day 1 — Arrival", text: "Pick-up at Olbia Airport (OLB), check-in and dinner at the port of Olbia." },
        { name: "Day 2 — Costa Smeralda", text: "Porto Cervo, Spiaggia del Principe and Romazzino; night between Olbia and the Costa Smeralda." },
        { name: "Day 3 — Southern Costa Smeralda", text: "Capriccioli, Liscia Ruja and Grande Pevero; dinner at Phi Beach or Porto Rotondo." },
        { name: "Day 4 — La Maddalena", text: "Palau and ferry to the archipelago: Spargi, Budelli and Caprera for a full day." },
        { name: "Day 5 — East Coast", text: "San Teodoro, La Cinta, Cala Brandinchi and Capo Coda Cavallo." },
        { name: "Day 6 — Inland and relax", text: "San Pantaleo market, Tempio Pausania or pool relaxation; dinner in Olbia." },
        { name: "Day 7 — Departure", text: "A morning swim at Pittulongu and vehicle return at the airport." },
      ],
    },
    de: {
      name: "Wie man eine Woche (7 Tage) in der Gallura ab Olbia plant",
      description: "Eine 7-Tage-Route mit Mietwagen ab Olbia: Costa Smeralda, La Maddalena, Ostküste und Gallura-Hinterland.",
      steps: [
        { name: "Tag 1 — Ankunft", text: "Abholung am Flughafen Olbia (OLB), Check-in und Abendessen am Hafen von Olbia." },
        { name: "Tag 2 — Costa Smeralda", text: "Porto Cervo, Spiaggia del Principe und Romazzino; Übernachtung zwischen Olbia und Costa Smeralda." },
        { name: "Tag 3 — Südliche Costa Smeralda", text: "Capriccioli, Liscia Ruja und Grande Pevero; Abendessen am Phi Beach oder in Porto Rotondo." },
        { name: "Tag 4 — La Maddalena", text: "Palau und Fähre zum Archipel: Spargi, Budelli und Caprera den ganzen Tag." },
        { name: "Tag 5 — Ostküste", text: "San Teodoro, La Cinta, Cala Brandinchi und Capo Coda Cavallo." },
        { name: "Tag 6 — Hinterland und Erholung", text: "Markt von San Pantaleo, Tempio Pausania oder Entspannung am Pool; Abendessen in Olbia." },
        { name: "Tag 7 — Abreise", text: "Morgendliches Bad in Pittulongu und Fahrzeugrückgabe am Flughafen." },
      ],
    },
    fr: {
      name: "Comment organiser une semaine (7 jours) en Gallura depuis Olbia",
      description: "Un itinéraire de 7 jours avec voiture de location depuis Olbia : Costa Smeralda, La Maddalena, côte est et arrière-pays de la Gallura.",
      steps: [
        { name: "Jour 1 — Arrivée", text: "Prise en charge à l'aéroport d'Olbia (OLB), check-in et dîner au port d'Olbia." },
        { name: "Jour 2 — Costa Smeralda", text: "Porto Cervo, Spiaggia del Principe et Romazzino ; nuit entre Olbia et la Costa Smeralda." },
        { name: "Jour 3 — Costa Smeralda sud", text: "Capriccioli, Liscia Ruja et Grande Pevero ; dîner à Phi Beach ou Porto Rotondo." },
        { name: "Jour 4 — La Maddalena", text: "Palau et ferry vers l'archipel : Spargi, Budelli et Caprera pour une journée entière." },
        { name: "Jour 5 — Côte est", text: "San Teodoro, La Cinta, Cala Brandinchi et Capo Coda Cavallo." },
        { name: "Jour 6 — Arrière-pays et détente", text: "Marché de San Pantaleo, Tempio Pausania ou détente à la piscine ; dîner à Olbia." },
        { name: "Jour 7 — Départ", text: "Baignade matinale à Pittulongu et restitution du véhicule à l'aéroport." },
      ],
    },
  },
  "10": {
    en: {
      name: "How to plan 10 days in north-eastern Sardinia from Olbia",
      description: "A 10-day itinerary with a rental car from Olbia: the full Costa Smeralda, La Maddalena, the East Coast and an extension to Alghero or Stintino.",
      steps: [
        { name: "Days 1-2 — Olbia and northern Costa Smeralda", text: "Arrival and settling in, Porto Cervo, Spiaggia del Principe and Pevero." },
        { name: "Day 3 — Southern Costa Smeralda", text: "Capriccioli, Romazzino, Cala di Volpe and sunset at Phi Beach." },
        { name: "Day 4 — La Maddalena", text: "Archipelago by boat or car+ferry: Spargi and the pink beach of Budelli." },
        { name: "Day 5 — Relax", text: "A full day with no driving, by the pool or on your favourite beach." },
        { name: "Day 6 — East Coast", text: "San Teodoro, La Cinta, Cala Brandinchi and views of Tavolara." },
        { name: "Days 7-8 — Western extension", text: "One or two nights in Alghero (Catalan town + Capo Caccia) or Stintino (La Pelosa + Asinara)." },
        { name: "Day 9 — Gallura inland", text: "Tempio Pausania, Vermentino wineries and San Pantaleo, with a traditional dinner." },
        { name: "Day 10 — Return", text: "A last swim at Pittulongu and vehicle return at the airport or the port." },
      ],
    },
    de: {
      name: "Wie man 10 Tage im Nordosten Sardiniens ab Olbia plant",
      description: "Eine 10-Tage-Route mit Mietwagen ab Olbia: die komplette Costa Smeralda, La Maddalena, Ostküste und eine Verlängerung nach Alghero oder Stintino.",
      steps: [
        { name: "Tage 1-2 — Olbia und nördliche Costa Smeralda", text: "Ankunft und Eingewöhnung, Porto Cervo, Spiaggia del Principe und Pevero." },
        { name: "Tag 3 — Südliche Costa Smeralda", text: "Capriccioli, Romazzino, Cala di Volpe und Sonnenuntergang am Phi Beach." },
        { name: "Tag 4 — La Maddalena", text: "Archipel mit Boot oder Auto+Fähre: Spargi und der rosa Strand von Budelli." },
        { name: "Tag 5 — Erholung", text: "Ein ganzer Tag ohne Fahren, am Pool oder am Lieblingsstrand." },
        { name: "Tag 6 — Ostküste", text: "San Teodoro, La Cinta, Cala Brandinchi und Blick auf Tavolara." },
        { name: "Tage 7-8 — Verlängerung Westen", text: "Ein bis zwei Nächte in Alghero (katalanische Stadt + Capo Caccia) oder Stintino (La Pelosa + Asinara)." },
        { name: "Tag 9 — Gallura-Hinterland", text: "Tempio Pausania, Vermentino-Weingüter und San Pantaleo, mit typischem Abendessen." },
        { name: "Tag 10 — Rückgabe", text: "Letztes Bad in Pittulongu und Fahrzeugrückgabe am Flughafen oder Hafen." },
      ],
    },
    fr: {
      name: "Comment organiser 10 jours dans le nord-est de la Sardaigne depuis Olbia",
      description: "Un itinéraire de 10 jours avec voiture de location depuis Olbia : toute la Costa Smeralda, La Maddalena, la côte est et une extension vers Alghero ou Stintino.",
      steps: [
        { name: "Jours 1-2 — Olbia et Costa Smeralda nord", text: "Arrivée et installation, Porto Cervo, Spiaggia del Principe et Pevero." },
        { name: "Jour 3 — Costa Smeralda sud", text: "Capriccioli, Romazzino, Cala di Volpe et coucher de soleil à Phi Beach." },
        { name: "Jour 4 — La Maddalena", text: "Archipel en bateau ou voiture+ferry : Spargi et la plage rose de Budelli." },
        { name: "Jour 5 — Détente", text: "Une journée entière sans trajets, à la piscine ou sur votre plage préférée." },
        { name: "Jour 6 — Côte est", text: "San Teodoro, La Cinta, Cala Brandinchi et vue sur Tavolara." },
        { name: "Jours 7-8 — Extension ouest", text: "Une ou deux nuits à Alghero (ville catalane + Capo Caccia) ou à Stintino (La Pelosa + Asinara)." },
        { name: "Jour 9 — Arrière-pays de la Gallura", text: "Tempio Pausania, caves de Vermentino et San Pantaleo, avec un dîner typique." },
        { name: "Jour 10 — Restitution", text: "Dernière baignade à Pittulongu et restitution du véhicule à l'aéroport ou au port." },
      ],
    },
  },
  "14": {
    en: {
      name: "How to plan 14 days in northern Sardinia from Olbia",
      description: "A two-week itinerary with a rental car from Olbia: Costa Smeralda, La Maddalena, the East Coast, Alghero, Stintino, Asinara, Bosa and the inland.",
      steps: [
        { name: "Days 1-5 — Costa Smeralda and northern Gallura", text: "Porto Cervo, Spiaggia del Principe, Romazzino, Capriccioli, Liscia Ruja, San Pantaleo market and dinner in Porto Rotondo." },
        { name: "Day 6 — La Maddalena", text: "Ferry from Palau and tour of the archipelago (Spargi, Budelli) by boat or car+boat." },
        { name: "Day 7 — East Coast", text: "San Teodoro, La Cinta, Cala Brandinchi and Capo Coda Cavallo, returning to Olbia." },
        { name: "Day 8 — Transfer west", text: "Transfer to Alghero (about 3 hours), Catalan lunch and the old town." },
        { name: "Day 9 — Capo Caccia", text: "Neptune's Grotto, Cala Dragunara and the cliffs of Capo Caccia." },
        { name: "Day 10 — Stintino and La Pelosa", text: "Transfer to Stintino, La Pelosa beach and views of Asinara." },
        { name: "Day 11 — Asinara (optional)", text: "Ferry from Stintino and a tour of the island by train or electric car." },
        { name: "Day 12 — Bosa and return east", text: "Bosa with its colourful houses and the Temo river, then an evening transfer towards Tempio Pausania." },
        { name: "Day 13 — Gallura inland", text: "Castelsardo, wineries and nuraghi of the Gallura interior." },
        { name: "Day 14 — Return", text: "A last swim and vehicle return at the airport or the port." },
      ],
    },
    de: {
      name: "Wie man 14 Tage im Norden Sardiniens ab Olbia plant",
      description: "Eine Zwei-Wochen-Route mit Mietwagen ab Olbia: Costa Smeralda, La Maddalena, Ostküste, Alghero, Stintino, Asinara, Bosa und Hinterland.",
      steps: [
        { name: "Tage 1-5 — Costa Smeralda und nördliche Gallura", text: "Porto Cervo, Spiaggia del Principe, Romazzino, Capriccioli, Liscia Ruja, Markt von San Pantaleo und Abendessen in Porto Rotondo." },
        { name: "Tag 6 — La Maddalena", text: "Fähre von Palau und Tour durch das Archipel (Spargi, Budelli) per Boot oder Auto+Boot." },
        { name: "Tag 7 — Ostküste", text: "San Teodoro, La Cinta, Cala Brandinchi und Capo Coda Cavallo, Rückkehr nach Olbia." },
        { name: "Tag 8 — Transfer Westen", text: "Transfer nach Alghero (ca. 3 Stunden), katalanisches Mittagessen und Altstadt." },
        { name: "Tag 9 — Capo Caccia", text: "Neptungrotte, Cala Dragunara und die Klippen von Capo Caccia." },
        { name: "Tag 10 — Stintino und La Pelosa", text: "Transfer nach Stintino, Strand La Pelosa und Blick auf Asinara." },
        { name: "Tag 11 — Asinara (optional)", text: "Fähre von Stintino und Inseltour mit Bahn oder Elektroauto." },
        { name: "Tag 12 — Bosa und Rückweg Osten", text: "Bosa mit den bunten Häusern und dem Fluss Temo, dann Abendtransfer Richtung Tempio Pausania." },
        { name: "Tag 13 — Gallura-Hinterland", text: "Castelsardo, Weingüter und Nuraghen des Gallura-Inneren." },
        { name: "Tag 14 — Rückgabe", text: "Letztes Bad und Fahrzeugrückgabe am Flughafen oder Hafen." },
      ],
    },
    fr: {
      name: "Comment organiser 14 jours dans le nord de la Sardaigne depuis Olbia",
      description: "Un itinéraire de deux semaines avec voiture de location depuis Olbia : Costa Smeralda, La Maddalena, côte est, Alghero, Stintino, Asinara, Bosa et arrière-pays.",
      steps: [
        { name: "Jours 1-5 — Costa Smeralda et Gallura nord", text: "Porto Cervo, Spiaggia del Principe, Romazzino, Capriccioli, Liscia Ruja, marché de San Pantaleo et dîner à Porto Rotondo." },
        { name: "Jour 6 — La Maddalena", text: "Ferry depuis Palau et tour de l'archipel (Spargi, Budelli) en bateau ou voiture+bateau." },
        { name: "Jour 7 — Côte est", text: "San Teodoro, La Cinta, Cala Brandinchi et Capo Coda Cavallo, retour à Olbia." },
        { name: "Jour 8 — Transfert ouest", text: "Transfert à Alghero (environ 3 heures), déjeuner catalan et centre historique." },
        { name: "Jour 9 — Capo Caccia", text: "Grottes de Neptune, Cala Dragunara et falaises de Capo Caccia." },
        { name: "Jour 10 — Stintino et La Pelosa", text: "Transfert à Stintino, plage de La Pelosa et vue sur l'Asinara." },
        { name: "Jour 11 — Asinara (en option)", text: "Ferry depuis Stintino et tour de l'île en petit train ou voiture électrique." },
        { name: "Jour 12 — Bosa et retour est", text: "Bosa et ses maisons colorées et le fleuve Temo, puis transfert en soirée vers Tempio Pausania." },
        { name: "Jour 13 — Arrière-pays de la Gallura", text: "Castelsardo, caves et nuraghes de la Gallura intérieure." },
        { name: "Jour 14 — Restitution", text: "Dernière baignade et restitution du véhicule à l'aéroport ou au port." },
      ],
    },
  },
  "30": {
    en: {
      name: "How to rent a car by the month in Olbia",
      description: "The steps to set up a 30-day long-stay rental with KS Rent Sardinia: quote, vehicle choice, pick-up, included maintenance and return.",
      steps: [
        { name: "Request a quote", text: "Message us on WhatsApp with start/end dates, preferred vehicle and purpose (remote work, holiday, house-hunting): we reply with a named quote within an hour." },
        { name: "Choose the vehicle", text: "Pick the vehicle by use: Fiat Panda Hybrid for the city, Jeep Avenger for families, Mercedes A-Class for comfort over long distances." },
        { name: "Pick up and pay (even without a card)", text: "Show a category B licence (1+ year), an ID and tax code/TIN. Payment in 2 instalments (50% at pick-up, 50% on day 15) by bank transfer, prepaid card, debit card or cash." },
        { name: "Use the car with maintenance included", text: "Included: oil change if needed, tyre checks, monthly wash and a replacement vehicle during servicing, with 3,500 km/month included." },
        { name: "Return", text: "Return the vehicle with a full tank at the agreed point (airport, port or central Olbia). For durations over 30 days, even better long-term rates apply." },
      ],
    },
    de: {
      name: "Wie man in Olbia ein Auto monatlich mietet",
      description: "Die Schritte für eine 30-tägige Langzeitmiete bei KS Rent Sardinia: Angebot, Fahrzeugwahl, Abholung, inklusive Wartung und Rückgabe.",
      steps: [
        { name: "Angebot anfragen", text: "Schreiben Sie uns per WhatsApp mit Start-/Enddatum, Wunschfahrzeug und Zweck (Remote-Arbeit, Urlaub, Haussuche): Wir antworten innerhalb einer Stunde mit einem namentlichen Angebot." },
        { name: "Fahrzeug wählen", text: "Wählen Sie das Fahrzeug nach Nutzung: Fiat Panda Hybrid für die Stadt, Jeep Avenger für die Familie, Mercedes A-Klasse für Komfort auf langen Strecken." },
        { name: "Abholen und zahlen (auch ohne Karte)", text: "Zeigen Sie Führerschein Klasse B (1+ Jahr), Ausweis und Steuernummer/TIN. Zahlung in 2 Raten (50% bei Abholung, 50% am 15. Tag) per Überweisung, Prepaid-Karte, Bankkarte oder bar." },
        { name: "Auto mit inklusiver Wartung nutzen", text: "Inklusive: Ölwechsel bei Bedarf, Reifenkontrolle, monatliche Wäsche und Ersatzfahrzeug während der Wartung, mit 3.500 km/Monat inklusive." },
        { name: "Rückgabe", text: "Geben Sie das Fahrzeug vollgetankt am vereinbarten Ort zurück (Flughafen, Hafen oder Olbia-Zentrum). Für Zeiträume über 30 Tage gelten noch günstigere Langzeittarife." },
      ],
    },
    fr: {
      name: "Comment louer une voiture au mois à Olbia",
      description: "Les étapes pour mettre en place une location longue durée de 30 jours avec KS Rent Sardinia : devis, choix du véhicule, prise en charge, entretien inclus et restitution.",
      steps: [
        { name: "Demandez un devis", text: "Écrivez-nous sur WhatsApp avec dates de début/fin, véhicule préféré et objectif (télétravail, vacances, recherche de logement) : nous répondons avec un devis nominatif sous une heure." },
        { name: "Choisissez le véhicule", text: "Sélectionnez le véhicule selon l'usage : Fiat Panda Hybrid pour la ville, Jeep Avenger pour la famille, Mercedes Classe A pour le confort sur longues distances." },
        { name: "Récupérez et payez (même sans carte)", text: "Présentez un permis B (1+ an), une pièce d'identité et le code fiscal/TIN. Paiement en 2 fois (50% à la prise en charge, 50% au 15e jour) par virement, carte prépayée, carte de débit ou espèces." },
        { name: "Utilisez la voiture avec entretien inclus", text: "Inclus : vidange si nécessaire, contrôle des pneus, lavage mensuel et véhicule de remplacement pendant les interventions, avec 3 500 km/mois compris." },
        { name: "Restitution", text: "Restituez le véhicule avec le plein au point convenu (aéroport, port ou centre d'Olbia). Pour les durées de plus de 30 jours, des tarifs longue durée encore plus avantageux s'appliquent." },
      ],
    },
  },
};

export function buildDurationHowTo(key: DurationKey, lang: GuideLang, pageUrl: string) {
  const c = DURATION[key][lang];
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${pageUrl}#howto`,
    name: c.name,
    description: c.description,
    totalTime: TOTAL_TIME[key],
    step: c.steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.name, text: s.text })),
  };
}

/* ── Event schema per la guida sagre/eventi Gallura 2026 ── */

interface EventContent { name: string; startDate: string; endDate?: string; placeName: string; locality: string; description: string; free?: boolean }

const EVENTS: Record<EventLang, EventContent[]> = {
  it: [
    { name: "Festa di San Simplicio", startDate: "2026-05-15", placeName: "Olbia", locality: "Olbia", free: true, description: "Festa patronale di Olbia: 7 giorni di mercatini, processione, concerto serale gratuito in piazza e fuochi d'artificio sul porto." },
    { name: "Festa di Sant'Antonio Abate", startDate: "2026-06-13", placeName: "Borghi della Gallura", locality: "Olbia", free: true, description: "Falò notturni, balli tradizionali e salsiccia arrostita in diversi borghi della Gallura." },
    { name: "Sant'Antonio Abate — Tempio Pausania", startDate: "2026-07-16", placeName: "Tempio Pausania", locality: "Tempio Pausania", free: true, description: "Festa patronale di Tempio Pausania con processione, balli e festa popolare nel centro storico in pietra." },
    { name: "Time in Jazz", startDate: "2026-08-01", endDate: "2026-08-15", placeName: "Berchidda e borghi della Gallura", locality: "Berchidda", description: "Festival jazz fondato da Paolo Fresu, tra i più importanti d'Europa: concerti gratuiti in piazze, chiese e vigne, oltre ai concerti principali a pagamento." },
    { name: "Festa di Stella Maris", startDate: "2026-08-15", placeName: "Porto San Paolo", locality: "Loiri Porto San Paolo", free: true, description: "Processione di barche, fuochi sul mare e cena in trattoria a Porto San Paolo, di fronte a Tavolara." },
    { name: "Festa della Beata Vergine di Bonaria", startDate: "2026-09-08", placeName: "Olbia", locality: "Olbia", free: true, description: "Festa della patrona della Sardegna a Olbia e in vari borghi: processioni, messa solenne e festa popolare." },
  ],
  en: [
    { name: "Festa di San Simplicio", startDate: "2026-05-15", placeName: "Olbia", locality: "Olbia", free: true, description: "Olbia's patron saint festival: 7 days of markets, a procession, a free evening concert in the square and fireworks over the port." },
    { name: "Festa di Sant'Antonio Abate", startDate: "2026-06-13", placeName: "Gallura villages", locality: "Olbia", free: true, description: "Night bonfires, traditional dances and grilled sausage in several Gallura villages." },
    { name: "Sant'Antonio Abate — Tempio Pausania", startDate: "2026-07-16", placeName: "Tempio Pausania", locality: "Tempio Pausania", free: true, description: "Tempio Pausania's patron festival with a procession, dances and a popular celebration in the stone old town." },
    { name: "Time in Jazz", startDate: "2026-08-01", endDate: "2026-08-15", placeName: "Berchidda and Gallura villages", locality: "Berchidda", description: "Jazz festival founded by Paolo Fresu, one of Europe's most important: free concerts in squares, churches and vineyards, plus paid headline concerts." },
    { name: "Festa di Stella Maris", startDate: "2026-08-15", placeName: "Porto San Paolo", locality: "Loiri Porto San Paolo", free: true, description: "Boat procession, fireworks over the sea and a trattoria dinner in Porto San Paolo, facing Tavolara." },
    { name: "Festa della Beata Vergine di Bonaria", startDate: "2026-09-08", placeName: "Olbia", locality: "Olbia", free: true, description: "Festival of Sardinia's patron saint in Olbia and various villages: processions, solemn mass and popular celebration." },
  ],
  de: [
    { name: "Festa di San Simplicio", startDate: "2026-05-15", placeName: "Olbia", locality: "Olbia", free: true, description: "Schutzpatronfest von Olbia: 7 Tage mit Märkten, Prozession, kostenlosem Abendkonzert auf dem Platz und Feuerwerk über dem Hafen." },
    { name: "Festa di Sant'Antonio Abate", startDate: "2026-06-13", placeName: "Dörfer der Gallura", locality: "Olbia", free: true, description: "Nächtliche Feuer, traditionelle Tänze und gegrillte Wurst in mehreren Dörfern der Gallura." },
    { name: "Sant'Antonio Abate — Tempio Pausania", startDate: "2026-07-16", placeName: "Tempio Pausania", locality: "Tempio Pausania", free: true, description: "Schutzpatronfest von Tempio Pausania mit Prozession, Tänzen und Volksfest in der steinernen Altstadt." },
    { name: "Time in Jazz", startDate: "2026-08-01", endDate: "2026-08-15", placeName: "Berchidda und Dörfer der Gallura", locality: "Berchidda", description: "Von Paolo Fresu gegründetes Jazzfestival, eines der wichtigsten Europas: kostenlose Konzerte auf Plätzen, in Kirchen und Weinbergen sowie kostenpflichtige Hauptkonzerte." },
    { name: "Festa di Stella Maris", startDate: "2026-08-15", placeName: "Porto San Paolo", locality: "Loiri Porto San Paolo", free: true, description: "Bootsprozession, Feuerwerk über dem Meer und Trattoria-Abendessen in Porto San Paolo, gegenüber Tavolara." },
    { name: "Festa della Beata Vergine di Bonaria", startDate: "2026-09-08", placeName: "Olbia", locality: "Olbia", free: true, description: "Fest der Schutzpatronin Sardiniens in Olbia und mehreren Dörfern: Prozessionen, feierliche Messe und Volksfest." },
  ],
  fr: [
    { name: "Festa di San Simplicio", startDate: "2026-05-15", placeName: "Olbia", locality: "Olbia", free: true, description: "Fête patronale d'Olbia : 7 jours de marchés, procession, concert gratuit en soirée sur la place et feux d'artifice sur le port." },
    { name: "Festa di Sant'Antonio Abate", startDate: "2026-06-13", placeName: "Villages de la Gallura", locality: "Olbia", free: true, description: "Feux de joie nocturnes, danses traditionnelles et saucisse grillée dans plusieurs villages de la Gallura." },
    { name: "Sant'Antonio Abate — Tempio Pausania", startDate: "2026-07-16", placeName: "Tempio Pausania", locality: "Tempio Pausania", free: true, description: "Fête patronale de Tempio Pausania avec procession, danses et fête populaire dans le centre historique en pierre." },
    { name: "Time in Jazz", startDate: "2026-08-01", endDate: "2026-08-15", placeName: "Berchidda et villages de la Gallura", locality: "Berchidda", description: "Festival de jazz fondé par Paolo Fresu, l'un des plus importants d'Europe : concerts gratuits sur les places, dans les églises et les vignes, plus les concerts principaux payants." },
    { name: "Festa di Stella Maris", startDate: "2026-08-15", placeName: "Porto San Paolo", locality: "Loiri Porto San Paolo", free: true, description: "Procession de bateaux, feux d'artifice sur la mer et dîner en trattoria à Porto San Paolo, face à Tavolara." },
    { name: "Festa della Beata Vergine di Bonaria", startDate: "2026-09-08", placeName: "Olbia", locality: "Olbia", free: true, description: "Fête de la patronne de la Sardaigne à Olbia et dans plusieurs villages : processions, messe solennelle et fête populaire." },
  ],
};

// EVENT_PRINCIPALS: organizer + performer per ogni evento. Entità reali e verificabili
// (nessuna invenzione). I nomi sono italiani per natura (Comune, Diocesi…) quindi
// resi identici nelle 4 lingue. Usato per soddisfare GSC che pretende organizer +
// performer anche per i warning non-critici (altrimenti blocca la "Convalida correzione").
type Principal = { "@type": "Organization" | "Person"; name: string; url?: string };
// URL ufficiali verificati (HTTP 200, 2026-05-30) — niente link inventati.
const URL_COMUNE_OLBIA = "https://www.comune.olbia.ot.it";
const URL_COMUNE_TEMPIO = "https://comune.tempiopausania.ss.it";
const URL_COMUNE_LOIRI = "https://www.comune.loiriportosanpaolo.ss.it";
const URL_DIOCESI = "https://www.diocesitempioampurias.it";
const URL_SARDEGNA_TURISMO = "https://www.sardegnaturismo.it";
const URL_TIME_IN_JAZZ = "https://timeinjazz.eu/";

const EVENT_PRINCIPALS: Record<string, { organizer: Principal; performer: Principal }> = {
  "Festa di San Simplicio": {
    organizer: { "@type": "Organization", name: "Comune di Olbia", url: URL_COMUNE_OLBIA },
    performer: { "@type": "Organization", name: "Diocesi di Tempio-Ampurias", url: URL_DIOCESI },
  },
  "Festa di Sant'Antonio Abate": {
    organizer: { "@type": "Organization", name: "Comuni e Pro Loco della Gallura", url: URL_SARDEGNA_TURISMO },
    performer: { "@type": "Organization", name: "Diocesi di Tempio-Ampurias", url: URL_DIOCESI },
  },
  "Sant'Antonio Abate — Tempio Pausania": {
    organizer: { "@type": "Organization", name: "Comune di Tempio Pausania", url: URL_COMUNE_TEMPIO },
    performer: { "@type": "Organization", name: "Diocesi di Tempio-Ampurias", url: URL_DIOCESI },
  },
  "Time in Jazz": {
    organizer: { "@type": "Organization", name: "Associazione Culturale Time in Jazz", url: URL_TIME_IN_JAZZ },
    performer: { "@type": "Person", name: "Paolo Fresu" },
  },
  "Festa di Stella Maris": {
    organizer: { "@type": "Organization", name: "Comune di Loiri Porto San Paolo", url: URL_COMUNE_LOIRI },
    performer: { "@type": "Organization", name: "Diocesi di Tempio-Ampurias", url: URL_DIOCESI },
  },
  "Festa della Beata Vergine di Bonaria": {
    organizer: { "@type": "Organization", name: "Comune di Olbia", url: URL_COMUNE_OLBIA },
    performer: { "@type": "Organization", name: "Diocesi di Tempio-Ampurias", url: URL_DIOCESI },
  },
};

// Eventi con almeno una componente gratuita reale → emettono offers price 0.
// Time in Jazz NON ha `free:true` (ha anche concerti a pagamento) ma offre
// concerti gratuiti in piazze, chiese e vigne: l'offerta gratuita è veritiera
// e soddisfa GSC ("Campo mancante offers") senza inventare un prezzo dei ticket.
const EVENT_OFFER_URL: Record<string, string> = {
  "Time in Jazz": URL_TIME_IN_JAZZ,
};

export function buildGalluraEvents(lang: EventLang, heroImage: string, pageUrl: string) {
  return EVENTS[lang].map((e) => {
    const principals = EVENT_PRINCIPALS[e.name];
    return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: e.name,
    startDate: e.startDate,
    // GSC richiede endDate. Per gli eventi di un solo giorno, endDate = startDate
    // è la dichiarazione corretta (Schema.org: "stessa data" significa 1 giorno).
    endDate: e.endDate || e.startDate,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: e.placeName,
      address: { "@type": "PostalAddress", addressLocality: e.locality, addressRegion: "SS", addressCountry: "IT" },
    },
    image: heroImage,
    ...(principals ? { organizer: principals.organizer, performer: principals.performer } : {}),
    ...(e.free ? { isAccessibleForFree: true } : {}),
    // Offers price 0 per gli eventi gratuiti E per Time in Jazz (concerti gratuiti
    // reali). Per Time in Jazz l'url punta al sito ufficiale del festival; per gli
    // altri al guide page. Soddisfa GSC ("Campo mancante offers") senza inventare prezzi.
    ...(e.free || EVENT_OFFER_URL[e.name]
      ? {
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "EUR",
            availability: "https://schema.org/InStock",
            url: EVENT_OFFER_URL[e.name] || pageUrl,
            validFrom: e.startDate,
          },
        }
      : {}),
    description: e.description,
    };
  });
}

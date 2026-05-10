import { Link } from "@/lib/router-shim";
import { motion } from "framer-motion";
import { ArrowRight, Sailboat, Diamond, Wine, Sparkles, Star, Zap, Gauge, Palmtree } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { buildBreadcrumb } from "@/lib/jsonLd";
import ServiceCardGrid from "@/components/ServiceCardGrid";
import type { Locale } from "@/lib/i18n";

interface Props {
  lang?: Locale;
}

const TRANSLATIONS = {
  it: {
    seo: {
      title: "Noleggio Auto Costa Smeralda | Porto Cervo | KS Rent",
      description:
        "Noleggio supercar e SUV in Costa Smeralda. Consegna in hotel o villa a Porto Cervo, San Pantaleo e Porto Rotondo. Prenota online.",
    },
    hero: {
      eyebrow: "Costa Smeralda Lifestyle",
      title1: "Noleggio Auto",
      title2: "Costa Smeralda",
      subtitle1: "Esplora Porto Cervo e la Gallura a bordo di una Supercar. Te la consegniamo noi",
      subtitleStrong: "direttamente in Hotel o in Villa",
      subtitle2: ".",
      cta: "Verifica Disponibilità",
    },
    intro: {
      eyebrow: "Un Servizio Concierge",
      heading1: "Noleggio Auto di Lusso",
      heading2: "in Costa Smeralda e Porto Cervo",
      lead1: "Vivi la vera essenza della",
      leadStrong: "Costa Smeralda",
      lead2: " senza compromessi. KS Rent ti offre un servizio di noleggio auto sartoriale.",
      bodyHtml:
        "Che tu alloggi a <strong>Porto Cervo, San Pantaleo, o Porto Rotondo</strong>, un nostro addetto porterà il veicolo esattamente dove desideri: nella tua Villa, nel parcheggio del tuo Hotel o fuori dal tuo ristorante preferito. Prenota in totale autonomia dal nostro sito con <strong>depositi cauzionali flessibili e nessun obbligo di carta di credito</strong>. La vacanza inizia alle tue regole. Ritira anche al {link:porto:Porto di Olbia} o all' {link:aeroporto:Aeroporto di Olbia}. Scopri anche il nostro {link:senzacc:noleggio senza carta di credito}.",
    },
    spotlight: {
      eyebrow: "Costa Smeralda Spotlight",
      title1: "Noleggio BMW M2",
      title2: "Costa Smeralda",
      quote:
        "\"Linee muscolose, trazione posteriore e pura adrenalina. L'auto perfetta per affrontare le curve panoramiche mozzafiato da Olbia a Porto Cervo.\"",
      stat1Value: "460",
      stat1Label: "Cavalli",
      stat2Value: "RWD",
      stat2Label: "Trazione",
      cta: "Scopri la flotta",
    },
    services: {
      eyebrow: "VIP Concierge",
      heading1: "Il livello di servizio della ",
      heading2: "Costa Smeralda",
      cards: [
        {
          title: "Consegna a yacht & marina",
          desc: "Coordinamento diretto con la capitaneria di Porto Cervo, Porto Rotondo e Cala di Volpe per consegna sotto bordo, anche per soggiorni di una sola notte.",
        },
        {
          title: "Consegna in villa privata",
          desc: "Marinella, Romazzino, Pevero Hills, Pantogia: indica solo l'indirizzo della villa, alle chiavi e ai documenti pensa il nostro autista.",
        },
        {
          title: "Eventi e ristoranti stellati",
          desc: "Phi Beach, Cala di Volpe, Pevero Golf Club, Cervo Hotel: ti riprendiamo l'auto a fine serata se vuoi cenare senza pensieri al rientro.",
        },
        {
          title: "Flotta in stile Porto Cervo",
          desc: "Audi RS3, BMW M2 e SUV premium configurati per la Piazzetta: i veicoli arrivano lavati, pieni e con accessori dress code.",
        },
      ],
    },
    pillsHeading1: "Consegna Auto in Tutta la",
    pillsHeading2: "Gallura e Costa Smeralda",
    faq: {
      eyebrow: "Concierge Desk Costa Smeralda",
      title1: "Domande Frequenti",
      title2: "Noleggio Costa Smeralda",
      items: [
        {
          q: "Consegnate l'auto in Hotel o in Villa privata?",
          a: "Assolutamente sì. KS Rent offre un servizio Concierge completo: consegniamo il veicolo su misura esattamente dove desideri, che sia il tuo Hotel, una Villa privata a Porto Cervo, o il Ristorante dove stai cenando. Massima comodità, zero stress.",
          gold: true,
        },
        {
          q: "Serve la carta di credito per noleggiare?",
          a: "No, non è obbligatoria. KS Rent abbatte le barriere del noleggio tradizionale accettando carte prepagate, bancomat, carte di debito e contanti. Il deposito cauzionale è flessibile e viene calcolato in base al veicolo.",
          gold: true,
        },
        {
          q: "Quali veicoli sono disponibili in Costa Smeralda?",
          a: "La nostra flotta premium comprende supercar, auto sportive, SUV di lusso e quad, ideali per esplorare Porto Cervo, San Pantaleo, Porto Rotondo e le spiagge più esclusive della costa.",
          gold: false,
        },
        {
          q: "In quali località della Costa Smeralda consegnate?",
          a: "Copriamo capillarmente la Costa Smeralda e la Gallura: da Porto Cervo a San Teodoro, passando per San Pantaleo, Porto Rotondo, Baja Sardinia, Cannigione, Arzachena e Palau. Arriviamo ovunque tu sia.",
          gold: false,
        },
        {
          q: "Come funziona la prenotazione online?",
          a: "Il nostro sistema di booking è progettato per essere autonomo e immediato. Scegli la tua supercar, seleziona date e location di consegna, e ricevi la conferma istantanea senza bisogno di telefonate.",
          gold: false,
        },
      ],
    },
    rich: {
      eyebrow: "Guida Completa",
      title1: "Guida al Noleggio Auto",
      title2: "in Costa Smeralda",
      pHtml: [
        "La <strong>Costa Smeralda</strong> è una delle destinazioni più esclusive del Mediterraneo. Fondata negli anni '60 dal Principe Aga Khan, questo tratto di costa nord-orientale della Sardegna si estende da {link:porto-rotondo:Porto Rotondo} fino a {link:baja-sardinia:Baja Sardinia}, passando per {link:porto-cervo:Porto Cervo}, Cala di Volpe, {link:romazzino:Romazzino} e {link:liscia-ruja:Liscia Ruja}. Le sue spiagge di sabbia bianchissima, le acque turchesi e i porti turistici di lusso attirano ogni anno migliaia di visitatori internazionali, celebrità e appassionati di lifestyle premium.",
        "<strong>Perché noleggiare un'auto in Costa Smeralda?</strong> Semplice: molte delle spiagge e delle calette più belle non sono raggiungibili con i mezzi pubblici. La litoranea da Olbia a {link:palau:Palau} è considerata una delle strade panoramiche più spettacolari d'Italia, con curve che si affacciano su baie nascoste e promontori di granito rosa. Guidare una supercar o una sportiva su queste strade è un'esperienza che trasforma una vacanza in un ricordo indimenticabile.",
        "Il servizio <strong>Concierge KS Rent</strong> è stato pensato per chi non vuole perdere neanche un minuto della propria vacanza. Ti consegniamo il veicolo esattamente dove ti trovi: nella hall del tuo Hotel a Porto Cervo, nel parcheggio della tua Villa privata ad Abbiadori, al ristorante dove stai cenando ad {link:arzachena:Arzachena} o persino al marina di {link:poltu-quatu:Poltu Quatu}. Il ritiro avviene allo stesso modo: basta una chiamata e un nostro addetto verrà a prendere l'auto dove preferisci.",
        "La nostra flotta dedicata alla Costa Smeralda include i veicoli più desiderati: dall'<strong>Audi RS3</strong> alla <strong>BMW M2</strong>, dai SUV di ultima generazione ai quad per le strade sterrate che portano alle spiagge segrete. Tutto disponibile <strong>senza obbligo di carta di credito</strong>. Accettiamo prepagate, bancomat e contanti. Per chi arriva in Sardegna, offriamo anche il ritiro all' {link:aeroporto:Aeroporto di Olbia} e al {link:porto:Porto Isola Bianca}.",
      ],
    },
    keyword: {
      heading: "Esplora con il nostro Noleggio Auto in Costa Smeralda",
      pHtml1:
        "Vivi la magia del nord Sardegna a bordo di veicoli perfetti per l'occasione. Il nostro servizio di <strong>noleggio auto in Costa Smeralda</strong> ti accompagna dalle spiagge cristalline fino alle serate più glamour. Se soggiorni nel cuore della movida, approfitta del nostro esclusivo <strong>noleggio auto a Porto Cervo</strong>.",
      pHtml2:
        "Garantiamo la massima comodità con il servizio VIP di <strong>consegna auto a Porto Cervo</strong>: portiamo il veicolo direttamente alla tua villa, hotel o yacht. Per i nostri clienti internazionali, offriamo un servizio <strong>rent a car in Porto Cervo</strong> impareggiabile per qualità e discrezione.",
    },
    finalCta: {
      title1: "LA COSTA",
      title2: "TI ASPETTA",
      lead: "Prenota il tuo veicolo e ricevilo esattamente dove desideri. Massima libertà, zero pensieri.",
      cta: "Scegli il Veicolo",
    },
    altBmwHero: "Noleggio Auto Lusso Costa Smeralda KS Rent",
    altBmwSpotlight: "Noleggio BMW M2 Costa Smeralda KS Rent",
  },
  en: {
    seo: {
      title: "Car Hire Costa Smeralda | Porto Cervo | KS Rent",
      description:
        "Supercar and SUV hire in Costa Smeralda. Delivery to your hotel or villa in Porto Cervo, San Pantaleo and Porto Rotondo. Book online.",
    },
    hero: {
      eyebrow: "Costa Smeralda Lifestyle",
      title1: "Car Hire",
      title2: "Costa Smeralda",
      subtitle1: "Explore Porto Cervo and Gallura at the wheel of a supercar. We deliver it",
      subtitleStrong: "straight to your hotel or villa",
      subtitle2: ".",
      cta: "Check Availability",
    },
    intro: {
      eyebrow: "A Concierge Service",
      heading1: "Luxury Car Hire",
      heading2: "in Costa Smeralda and Porto Cervo",
      lead1: "Live the true essence of the",
      leadStrong: "Costa Smeralda",
      lead2: " with no compromise. KS Rent offers you a tailor-made car hire service.",
      bodyHtml:
        "Whether you're staying in <strong>Porto Cervo, San Pantaleo or Porto Rotondo</strong>, our team will bring the vehicle exactly where you want: at your villa, your hotel car park or outside your favourite restaurant. Book in full autonomy from our website with <strong>flexible security deposits and no credit card requirement</strong>. The holiday starts on your terms. Pick up at the {link:porto:Olbia Ferry Port} or {link:aeroporto:Olbia Airport} too. Discover our {link:senzacc:no credit card car hire}.",
    },
    spotlight: {
      eyebrow: "Costa Smeralda Spotlight",
      title1: "BMW M2 Hire",
      title2: "Costa Smeralda",
      quote:
        "\"Muscular lines, rear-wheel drive and pure adrenaline. The perfect car to tackle the breathtaking panoramic curves from Olbia to Porto Cervo.\"",
      stat1Value: "460",
      stat1Label: "Horsepower",
      stat2Value: "RWD",
      stat2Label: "Drivetrain",
      cta: "Discover the fleet",
    },
    services: {
      eyebrow: "VIP Concierge",
      heading1: "The level of service of the ",
      heading2: "Costa Smeralda",
      cards: [
        {
          title: "Yacht & marina delivery",
          desc: "Direct coordination with the harbour offices of Porto Cervo, Porto Rotondo and Cala di Volpe for delivery alongside the boat, even for one-night stays.",
        },
        {
          title: "Private villa delivery",
          desc: "Marinella, Romazzino, Pevero Hills, Pantogia: just give us the villa address — keys and paperwork are handled by our driver.",
        },
        {
          title: "Events and starred restaurants",
          desc: "Phi Beach, Cala di Volpe, Pevero Golf Club, Cervo Hotel: we collect the car at the end of the evening so you can dine without worrying about the drive back.",
        },
        {
          title: "A Porto Cervo-style fleet",
          desc: "Audi RS3, BMW M2 and premium SUVs configured for the Piazzetta: vehicles arrive washed, full and with dress-code accessories.",
        },
      ],
    },
    pillsHeading1: "Car Delivery Across the Whole",
    pillsHeading2: "Gallura and Costa Smeralda",
    faq: {
      eyebrow: "Costa Smeralda Concierge Desk",
      title1: "Frequently Asked Questions",
      title2: "Costa Smeralda Car Hire",
      items: [
        {
          q: "Do you deliver the car to a hotel or private villa?",
          a: "Absolutely. KS Rent offers a complete concierge service: we deliver the vehicle exactly where you wish, whether it's your hotel, a private villa in Porto Cervo, or the restaurant where you're dining. Maximum convenience, zero stress.",
          gold: true,
        },
        {
          q: "Do I need a credit card to hire?",
          a: "No, it isn't required. KS Rent removes the barriers of traditional rental by accepting prepaid cards, debit cards and cash. The security deposit is flexible and calculated on the vehicle.",
          gold: true,
        },
        {
          q: "Which vehicles are available in Costa Smeralda?",
          a: "Our premium fleet includes supercars, sports cars, luxury SUVs and quads, ideal for exploring Porto Cervo, San Pantaleo, Porto Rotondo and the most exclusive beaches on the coast.",
          gold: false,
        },
        {
          q: "Which Costa Smeralda locations do you deliver to?",
          a: "We cover the Costa Smeralda and Gallura extensively: from Porto Cervo to San Teodoro, via San Pantaleo, Porto Rotondo, Baja Sardinia, Cannigione, Arzachena and Palau. We come wherever you are.",
          gold: false,
        },
        {
          q: "How does online booking work?",
          a: "Our booking system is designed to be autonomous and immediate. Choose your supercar, select dates and delivery location and receive instant confirmation, with no need for phone calls.",
          gold: false,
        },
      ],
    },
    rich: {
      eyebrow: "Complete Guide",
      title1: "Guide to Car Hire",
      title2: "in Costa Smeralda",
      pHtml: [
        "The <strong>Costa Smeralda</strong> is one of the most exclusive destinations in the Mediterranean. Founded in the 1960s by Prince Aga Khan, this stretch of north-eastern Sardinian coast extends from {link:porto-rotondo:Porto Rotondo} to {link:baja-sardinia:Baja Sardinia}, via {link:porto-cervo:Porto Cervo}, Cala di Volpe, {link:romazzino:Romazzino} and {link:liscia-ruja:Liscia Ruja}. Its blindingly white beaches, turquoise waters and luxury marinas attract thousands of international visitors, celebrities and premium-lifestyle enthusiasts every year.",
        "<strong>Why hire a car in Costa Smeralda?</strong> Simple: many of the most beautiful beaches and coves can't be reached by public transport. The coast road from Olbia to {link:palau:Palau} is considered one of the most spectacular panoramic drives in Italy, with bends that overlook hidden bays and pink-granite headlands. Driving a supercar or sports car on these roads is an experience that turns a holiday into an unforgettable memory.",
        "The <strong>KS Rent Concierge</strong> service is designed for those who don't want to lose a single minute of their holiday. We deliver the vehicle exactly where you are: at the lobby of your hotel in Porto Cervo, at the car park of your private villa in Abbiadori, at the restaurant where you are dining in {link:arzachena:Arzachena} or even at the {link:poltu-quatu:Poltu Quatu} marina. Pick-up works the same way: a phone call and one of our team will collect the car wherever you prefer.",
        "Our fleet dedicated to the Costa Smeralda includes the most desired vehicles: from the <strong>Audi RS3</strong> to the <strong>BMW M2</strong>, from latest-generation SUVs to quads for the dirt tracks that lead to secret beaches. All available <strong>without a credit card</strong>. We accept prepaid cards, debit cards and cash. For those arriving in Sardinia, we also offer pick-up at {link:aeroporto:Olbia Airport} and at the {link:porto:Isola Bianca Port}.",
      ],
    },
    keyword: {
      heading: "Explore with our Costa Smeralda Car Hire",
      pHtml1:
        "Live the magic of northern Sardinia at the wheel of vehicles tailored to the occasion. Our <strong>car hire in Costa Smeralda</strong> service takes you from the crystal-clear beaches to the most glamorous evenings. If you're staying in the heart of the action, take advantage of our exclusive <strong>car hire in Porto Cervo</strong>.",
      pHtml2:
        "We guarantee maximum convenience with the VIP <strong>car delivery in Porto Cervo</strong> service: we bring the vehicle directly to your villa, hotel or yacht. For our international guests we offer an unmatched <strong>rent-a-car in Porto Cervo</strong> in quality and discretion.",
    },
    finalCta: {
      title1: "THE COAST",
      title2: "IS WAITING",
      lead: "Book your vehicle and receive it exactly where you want. Maximum freedom, zero worries.",
      cta: "Choose the Vehicle",
    },
    altBmwHero: "Luxury car hire Costa Smeralda KS Rent",
    altBmwSpotlight: "BMW M2 hire Costa Smeralda KS Rent",
  },
  de: {
    seo: {
      title: "Autovermietung Costa Smeralda | Porto Cervo | KS Rent",
      description:
        "Vermietung von Supersportwagen und SUVs an der Costa Smeralda. Lieferung im Hotel oder in der Villa in Porto Cervo, San Pantaleo und Porto Rotondo. Online buchen.",
    },
    hero: {
      eyebrow: "Costa Smeralda Lifestyle",
      title1: "Autovermietung",
      title2: "Costa Smeralda",
      subtitle1: "Erkunden Sie Porto Cervo und die Gallura am Steuer eines Supersportwagens. Wir liefern ihn",
      subtitleStrong: "direkt ins Hotel oder zur Villa",
      subtitle2: ".",
      cta: "Verfügbarkeit prüfen",
    },
    intro: {
      eyebrow: "Ein Concierge-Service",
      heading1: "Luxus-Autovermietung",
      heading2: "an der Costa Smeralda und Porto Cervo",
      lead1: "Erleben Sie das wahre Wesen der",
      leadStrong: "Costa Smeralda",
      lead2: " ohne Kompromisse. KS Rent bietet Ihnen einen maßgeschneiderten Mietwagen-Service.",
      bodyHtml:
        "Egal, ob Sie in <strong>Porto Cervo, San Pantaleo oder Porto Rotondo</strong> wohnen — unser Mitarbeiter bringt das Fahrzeug genau dorthin, wo Sie es wünschen: zu Ihrer Villa, auf den Parkplatz Ihres Hotels oder vor Ihr Lieblingsrestaurant. Buchen Sie vollständig autonom über unsere Website mit <strong>flexiblen Kautionen und ohne Kreditkartenpflicht</strong>. Der Urlaub beginnt zu Ihren Bedingungen. Holen Sie das Auto auch am {link:porto:Hafen Olbia} oder am {link:aeroporto:Flughafen Olbia} ab. Entdecken Sie auch unsere {link:senzacc:Vermietung ohne Kreditkarte}.",
    },
    spotlight: {
      eyebrow: "Costa Smeralda Spotlight",
      title1: "BMW M2 mieten",
      title2: "Costa Smeralda",
      quote:
        "\"Muskulöse Linien, Heckantrieb und pures Adrenalin. Das perfekte Auto für die atemberaubenden Panoramakurven zwischen Olbia und Porto Cervo.\"",
      stat1Value: "460",
      stat1Label: "PS",
      stat2Value: "RWD",
      stat2Label: "Antrieb",
      cta: "Fuhrpark entdecken",
    },
    services: {
      eyebrow: "VIP Concierge",
      heading1: "Das Service-Niveau der ",
      heading2: "Costa Smeralda",
      cards: [
        {
          title: "Lieferung an Yacht & Marina",
          desc: "Direkte Abstimmung mit den Hafenämtern von Porto Cervo, Porto Rotondo und Cala di Volpe für Übergabe direkt am Boot, auch für eine Nacht.",
        },
        {
          title: "Lieferung zur privaten Villa",
          desc: "Marinella, Romazzino, Pevero Hills, Pantogia: Geben Sie uns nur die Villa-Adresse — um Schlüssel und Unterlagen kümmert sich unser Fahrer.",
        },
        {
          title: "Events und Sterne-Restaurants",
          desc: "Phi Beach, Cala di Volpe, Pevero Golf Club, Cervo Hotel: Am Abend holen wir das Auto wieder ab, damit Sie sorglos dinieren können.",
        },
        {
          title: "Fuhrpark im Porto-Cervo-Stil",
          desc: "Audi RS3, BMW M2 und Premium-SUVs für die Piazzetta: Die Fahrzeuge kommen gewaschen, vollgetankt und mit Dresscode-Accessoires.",
        },
      ],
    },
    pillsHeading1: "Fahrzeuglieferung in der gesamten",
    pillsHeading2: "Gallura und Costa Smeralda",
    faq: {
      eyebrow: "Concierge Desk Costa Smeralda",
      title1: "Häufige Fragen",
      title2: "Vermietung Costa Smeralda",
      items: [
        {
          q: "Liefern Sie das Auto ins Hotel oder zur privaten Villa?",
          a: "Selbstverständlich. KS Rent bietet einen vollständigen Concierge-Service: Wir liefern das Fahrzeug genau dorthin, wo Sie es wünschen — ins Hotel, zur privaten Villa in Porto Cervo oder zum Restaurant, in dem Sie speisen. Maximaler Komfort, kein Stress.",
          gold: true,
        },
        {
          q: "Brauche ich eine Kreditkarte?",
          a: "Nein, sie ist nicht erforderlich. KS Rent durchbricht die Barrieren der herkömmlichen Vermietung und akzeptiert Prepaid-Karten, Bankkarten und Bargeld. Die Kaution ist flexibel und richtet sich nach dem Fahrzeug.",
          gold: true,
        },
        {
          q: "Welche Fahrzeuge sind an der Costa Smeralda verfügbar?",
          a: "Unser Premium-Fuhrpark umfasst Supersportwagen, Sportwagen, Luxus-SUVs und Quads — ideal, um Porto Cervo, San Pantaleo, Porto Rotondo und die exklusivsten Strände der Küste zu erkunden.",
          gold: false,
        },
        {
          q: "An welchen Orten der Costa Smeralda liefern Sie?",
          a: "Wir decken die Costa Smeralda und die Gallura flächendeckend ab: von Porto Cervo bis San Teodoro, über San Pantaleo, Porto Rotondo, Baja Sardinia, Cannigione, Arzachena und Palau. Wir kommen, wo immer Sie sind.",
          gold: false,
        },
        {
          q: "Wie funktioniert die Online-Buchung?",
          a: "Unser Buchungssystem ist eigenständig und sofort einsatzbereit. Wählen Sie Ihren Supersportwagen, die Daten und den Lieferort und erhalten Sie sofort die Bestätigung — ganz ohne Telefonate.",
          gold: false,
        },
      ],
    },
    rich: {
      eyebrow: "Vollständiger Leitfaden",
      title1: "Leitfaden zur Autovermietung",
      title2: "an der Costa Smeralda",
      pHtml: [
        "Die <strong>Costa Smeralda</strong> ist eines der exklusivsten Reiseziele des Mittelmeers. In den 1960er Jahren von Prinz Aga Khan gegründet, erstreckt sich dieser Küstenabschnitt im Nordosten Sardiniens von {link:porto-rotondo:Porto Rotondo} bis {link:baja-sardinia:Baja Sardinia}, über {link:porto-cervo:Porto Cervo}, Cala di Volpe, {link:romazzino:Romazzino} und {link:liscia-ruja:Liscia Ruja}. Die schneeweißen Strände, das türkisfarbene Wasser und die Luxushäfen ziehen jedes Jahr Tausende internationale Besucher, Prominente und Liebhaber des Premium-Lifestyles an.",
        "<strong>Warum ein Auto an der Costa Smeralda mieten?</strong> Ganz einfach: Viele der schönsten Strände und Buchten sind mit öffentlichen Verkehrsmitteln nicht erreichbar. Die Küstenstraße von Olbia nach {link:palau:Palau} gilt als eine der spektakulärsten Panoramastrecken Italiens, mit Kurven, die auf versteckte Buchten und Vorgebirge aus rosa Granit blicken. Einen Supersportwagen oder Sportwagen auf diesen Straßen zu fahren, verwandelt einen Urlaub in eine unvergessliche Erinnerung.",
        "Der Service <strong>KS Rent Concierge</strong> wurde für alle entwickelt, die keine Minute ihres Urlaubs verlieren wollen. Wir bringen das Fahrzeug genau dorthin, wo Sie sind: in die Lobby Ihres Hotels in Porto Cervo, auf den Parkplatz Ihrer Villa in Abbiadori, ans Restaurant in {link:arzachena:Arzachena} oder sogar an die Marina von {link:poltu-quatu:Poltu Quatu}. Die Rückgabe funktioniert genauso: Ein Anruf, und unser Mitarbeiter holt das Auto, wo Sie es wünschen.",
        "Unser Fuhrpark für die Costa Smeralda umfasst die begehrtesten Fahrzeuge: vom <strong>Audi RS3</strong> über den <strong>BMW M2</strong> bis zu modernsten SUVs und Quads für die Schotterpisten zu den geheimen Stränden. Alles verfügbar <strong>ohne Kreditkartenpflicht</strong>. Wir akzeptieren Prepaid-Karten, Bankkarten und Bargeld. Für alle, die nach Sardinien anreisen, bieten wir auch Übernahme am {link:aeroporto:Flughafen Olbia} und am {link:porto:Hafen Isola Bianca}.",
      ],
    },
    keyword: {
      heading: "Erkunden Sie mit unserer Autovermietung an der Costa Smeralda",
      pHtml1:
        "Erleben Sie den Zauber Nordsardiniens am Steuer perfekt passender Fahrzeuge. Unser Service <strong>Autovermietung an der Costa Smeralda</strong> begleitet Sie von kristallklaren Stränden bis zu den glamourösesten Abenden. Wenn Sie im Herzen des Geschehens wohnen, profitieren Sie von unserer exklusiven <strong>Autovermietung in Porto Cervo</strong>.",
      pHtml2:
        "Wir garantieren maximalen Komfort mit dem VIP-Service <strong>Autoanlieferung in Porto Cervo</strong>: Wir bringen das Fahrzeug direkt zu Ihrer Villa, ins Hotel oder zur Yacht. Für unsere internationalen Gäste bieten wir einen <strong>Mietwagen-Service in Porto Cervo</strong>, der in Qualität und Diskretion seinesgleichen sucht.",
    },
    finalCta: {
      title1: "DIE KÜSTE",
      title2: "WARTET AUF SIE",
      lead: "Buchen Sie Ihr Fahrzeug und erhalten Sie es genau dort, wo Sie es wünschen. Maximale Freiheit, keine Sorgen.",
      cta: "Fahrzeug wählen",
    },
    altBmwHero: "Luxus-Mietwagen Costa Smeralda KS Rent",
    altBmwSpotlight: "BMW M2 Mietwagen Costa Smeralda KS Rent",
  },
  fr: {
    seo: {
      title: "Location de Voiture Costa Smeralda | Porto Cervo | KS Rent",
      description:
        "Location de supercars et SUV en Costa Smeralda. Livraison à l'hôtel ou à la villa à Porto Cervo, San Pantaleo et Porto Rotondo. Réservez en ligne.",
    },
    hero: {
      eyebrow: "Costa Smeralda Lifestyle",
      title1: "Location de Voiture",
      title2: "Costa Smeralda",
      subtitle1: "Explorez Porto Cervo et la Gallura au volant d'une supercar. Nous vous la livrons",
      subtitleStrong: "directement à l'hôtel ou à la villa",
      subtitle2: ".",
      cta: "Vérifier la disponibilité",
    },
    intro: {
      eyebrow: "Un Service Concierge",
      heading1: "Location de Voiture de Luxe",
      heading2: "en Costa Smeralda et à Porto Cervo",
      lead1: "Vivez la véritable essence de la",
      leadStrong: "Costa Smeralda",
      lead2: " sans compromis. KS Rent vous propose un service de location sur-mesure.",
      bodyHtml:
        "Que vous logiez à <strong>Porto Cervo, San Pantaleo ou Porto Rotondo</strong>, notre agent apportera le véhicule exactement où vous le souhaitez : à votre villa, au parking de votre hôtel ou devant votre restaurant préféré. Réservez en toute autonomie depuis notre site avec <strong>des dépôts de garantie flexibles et aucune obligation de carte de crédit</strong>. Les vacances commencent selon vos règles. Récupérez aussi au {link:porto:Port d'Olbia} ou à l'{link:aeroporto:Aéroport d'Olbia}. Découvrez également notre {link:senzacc:location sans carte de crédit}.",
    },
    spotlight: {
      eyebrow: "Costa Smeralda Spotlight",
      title1: "Location BMW M2",
      title2: "Costa Smeralda",
      quote:
        "« Lignes musclées, propulsion et adrénaline pure. La voiture parfaite pour affronter les courbes panoramiques à couper le souffle d'Olbia à Porto Cervo. »",
      stat1Value: "460",
      stat1Label: "Chevaux",
      stat2Value: "RWD",
      stat2Label: "Propulsion",
      cta: "Découvrir la flotte",
    },
    services: {
      eyebrow: "VIP Concierge",
      heading1: "Le niveau de service de la ",
      heading2: "Costa Smeralda",
      cards: [
        {
          title: "Livraison yacht & marina",
          desc: "Coordination directe avec les capitaineries de Porto Cervo, Porto Rotondo et Cala di Volpe pour livraison sous bord, même pour une seule nuit.",
        },
        {
          title: "Livraison en villa privée",
          desc: "Marinella, Romazzino, Pevero Hills, Pantogia : indiquez seulement l'adresse de la villa, notre chauffeur s'occupe des clés et des documents.",
        },
        {
          title: "Événements et restaurants étoilés",
          desc: "Phi Beach, Cala di Volpe, Pevero Golf Club, Cervo Hotel : nous reprenons la voiture en fin de soirée pour que vous dîniez sans soucis.",
        },
        {
          title: "Une flotte style Porto Cervo",
          desc: "Audi RS3, BMW M2 et SUV premium pensés pour la Piazzetta : les véhicules arrivent lavés, pleins et avec accessoires dress code.",
        },
      ],
    },
    pillsHeading1: "Livraison de Voiture dans Toute la",
    pillsHeading2: "Gallura et la Costa Smeralda",
    faq: {
      eyebrow: "Concierge Desk Costa Smeralda",
      title1: "Questions Fréquentes",
      title2: "Location Costa Smeralda",
      items: [
        {
          q: "Livrez-vous la voiture à l'hôtel ou en villa privée ?",
          a: "Absolument. KS Rent propose un service Concierge complet : nous livrons le véhicule exactement où vous le souhaitez, à votre hôtel, dans une villa privée à Porto Cervo ou au restaurant où vous dînez. Confort maximal, zéro stress.",
          gold: true,
        },
        {
          q: "Faut-il une carte de crédit pour louer ?",
          a: "Non, ce n'est pas obligatoire. KS Rent abat les barrières de la location traditionnelle en acceptant les prépayées, les cartes de débit et les espèces. Le dépôt de garantie est flexible et calculé selon le véhicule.",
          gold: true,
        },
        {
          q: "Quels véhicules sont disponibles en Costa Smeralda ?",
          a: "Notre flotte premium comprend supercars, sportives, SUV de luxe et quads, idéaux pour explorer Porto Cervo, San Pantaleo, Porto Rotondo et les plages les plus exclusives de la côte.",
          gold: false,
        },
        {
          q: "Dans quelles localités de Costa Smeralda livrez-vous ?",
          a: "Nous couvrons la Costa Smeralda et la Gallura de manière capillaire : de Porto Cervo à San Teodoro, en passant par San Pantaleo, Porto Rotondo, Baja Sardinia, Cannigione, Arzachena et Palau. Nous arrivons partout où vous êtes.",
          gold: false,
        },
        {
          q: "Comment fonctionne la réservation en ligne ?",
          a: "Notre système de réservation est conçu pour être autonome et immédiat. Choisissez votre supercar, sélectionnez les dates et le lieu de livraison et recevez la confirmation instantanée, sans appel téléphonique.",
          gold: false,
        },
      ],
    },
    rich: {
      eyebrow: "Guide Complet",
      title1: "Guide à la Location de Voiture",
      title2: "en Costa Smeralda",
      pHtml: [
        "La <strong>Costa Smeralda</strong> est l'une des destinations les plus exclusives de Méditerranée. Fondée dans les années 60 par le Prince Aga Khan, cette portion de côte du nord-est sarde s'étend de {link:porto-rotondo:Porto Rotondo} à {link:baja-sardinia:Baja Sardinia}, en passant par {link:porto-cervo:Porto Cervo}, Cala di Volpe, {link:romazzino:Romazzino} et {link:liscia-ruja:Liscia Ruja}. Ses plages de sable d'une blancheur éclatante, ses eaux turquoise et ses ports de luxe attirent chaque année des milliers de visiteurs internationaux, célébrités et amateurs de lifestyle premium.",
        "<strong>Pourquoi louer une voiture en Costa Smeralda ?</strong> Simple : beaucoup des plus belles plages et criques ne sont pas accessibles en transports en commun. La route côtière d'Olbia à {link:palau:Palau} est considérée comme l'une des plus spectaculaires d'Italie, avec des virages qui surplombent des baies cachées et des promontoires de granit rose. Conduire une supercar ou une sportive sur ces routes transforme des vacances en souvenir inoubliable.",
        "Le service <strong>Concierge KS Rent</strong> est pensé pour qui ne veut pas perdre une minute de ses vacances. Nous vous livrons le véhicule exactement où vous êtes : dans le hall de votre hôtel à Porto Cervo, sur le parking de votre villa privée à Abbiadori, au restaurant où vous dînez à {link:arzachena:Arzachena} ou même à la marina de {link:poltu-quatu:Poltu Quatu}. La reprise fonctionne de la même façon : un appel et un agent vient chercher la voiture où vous voulez.",
        "Notre flotte dédiée à la Costa Smeralda comprend les véhicules les plus convoités : de l'<strong>Audi RS3</strong> à la <strong>BMW M2</strong>, des SUV de dernière génération aux quads pour les pistes qui mènent aux plages secrètes. Le tout disponible <strong>sans obligation de carte de crédit</strong>. Nous acceptons les prépayées, les cartes de débit et les espèces. Pour les arrivées en Sardaigne, nous proposons aussi le retrait à l'{link:aeroporto:Aéroport d'Olbia} et au {link:porto:Port Isola Bianca}.",
      ],
    },
    keyword: {
      heading: "Explorez avec notre Location de Voiture en Costa Smeralda",
      pHtml1:
        "Vivez la magie du nord de la Sardaigne au volant de véhicules parfaits pour l'occasion. Notre service de <strong>location de voiture en Costa Smeralda</strong> vous accompagne des plages cristallines aux soirées les plus glamour. Si vous logez au cœur de l'animation, profitez de notre exclusif <strong>location de voiture à Porto Cervo</strong>.",
      pHtml2:
        "Nous garantissons un confort maximal avec le service VIP de <strong>livraison de voiture à Porto Cervo</strong> : nous apportons le véhicule directement à votre villa, hôtel ou yacht. Pour nos clients internationaux, nous offrons un service <strong>rent a car à Porto Cervo</strong> incomparable en qualité et en discrétion.",
    },
    finalCta: {
      title1: "LA CÔTE",
      title2: "VOUS ATTEND",
      lead: "Réservez votre véhicule et recevez-le exactement où vous le souhaitez. Liberté maximale, zéro souci.",
      cta: "Choisir le véhicule",
    },
    altBmwHero: "Location voiture luxe Costa Smeralda KS Rent",
    altBmwSpotlight: "Location BMW M2 Costa Smeralda KS Rent",
  },
} as const;

export const costaSmeraldaJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRental",
  name: "KS Rent — Noleggio Auto Costa Smeralda",
  description:
    "Noleggio auto di lusso in Costa Smeralda. Supercar, SUV e quad con consegna su misura in Hotel, Villa o Ristorante. Porto Cervo, San Pantaleo, Porto Rotondo.",
  url: "https://www.ksrentsardinia.com/noleggio-auto-costa-smeralda",
  telephone: "+393446107071",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Viale Isola Bianca 38",
    addressLocality: "Olbia",
    postalCode: "07026",
    addressRegion: "SS",
    addressCountry: "IT",
  },
  areaServed: [
    { "@type": "Place", name: "Costa Smeralda" },
    { "@type": "Place", name: "Porto Cervo" },
    { "@type": "Place", name: "San Pantaleo" },
    { "@type": "Place", name: "Porto Rotondo" },
    { "@type": "Place", name: "Baja Sardinia" },
  ],
};

const faqsItForJsonLd = TRANSLATIONS.it.faq.items;

export const costaSmeraldaFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqsItForJsonLd.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

function localizeHref(itPath: string, lang: Locale): string {
  const map: Record<string, Record<Locale, string>> = {
    "/prenotaora": { it: "/prenotaora", en: "/en/book-now", de: "/de/jetzt-buchen", fr: "/fr/reserver" },
    "/noleggio-auto-aeroporto-olbia": {
      it: "/noleggio-auto-aeroporto-olbia",
      en: "/en/car-hire-olbia-airport",
      de: "/de/autovermietung-flughafen-olbia",
      fr: "/fr/location-voiture-aeroport-olbia",
    },
    "/noleggio-auto-porto-olbia": {
      it: "/noleggio-auto-porto-olbia",
      en: "/en/car-hire-olbia-port",
      de: "/de/autovermietung-hafen-olbia",
      fr: "/fr/location-voiture-port-olbia",
    },
    "/noleggio-auto-costa-smeralda": {
      it: "/noleggio-auto-costa-smeralda",
      en: "/en/car-hire-costa-smeralda",
      de: "/de/autovermietung-costa-smeralda",
      fr: "/fr/location-voiture-costa-smeralda",
    },
    "/noleggio-auto-senza-carta-di-credito-olbia": {
      it: "/noleggio-auto-senza-carta-di-credito-olbia",
      en: "/en/car-hire-no-credit-card-olbia",
      de: "/de/autovermietung-ohne-kreditkarte-olbia",
      fr: "/fr/location-voiture-sans-carte-credit-olbia",
    },
  };
  if (map[itPath]) return map[itPath][lang];
  return lang === "it" ? itPath : `/${lang}${itPath}`;
}

function renderHtml(html: string, lang: Locale): string {
  const linkMap: Record<string, string> = {
    porto: "/noleggio-auto-porto-olbia",
    aeroporto: "/noleggio-auto-aeroporto-olbia",
    senzacc: "/noleggio-auto-senza-carta-di-credito-olbia",
    "porto-cervo": "/noleggio-auto-porto-cervo",
    "porto-rotondo": "/noleggio-auto-porto-rotondo",
    "baja-sardinia": "/noleggio-auto-baja-sardinia",
    arzachena: "/noleggio-auto-arzachena",
    palau: "/noleggio-auto-palau",
    "poltu-quatu": "/noleggio-auto-poltu-quatu",
    romazzino: "/romazzino",
    "liscia-ruja": "/liscia-ruja",
  };
  return html.replace(/\{link:([^:]+):([^}]+)\}/g, (_m, key: string, label: string) => {
    const itPath = linkMap[key] ?? `/${key}`;
    const href = localizeHref(itPath, lang);
    return `<a href="${href}" class="text-gold underline hover:text-gray-900 dark:hover:text-white transition-colors">${label}</a>`;
  });
}

const NoleggioCostaSmeralda = ({ lang = "it" }: Props) => {
  const t = TRANSLATIONS[lang];
  const bookHref = localizeHref("/prenotaora", lang);
  const breadcrumbPath = localizeHref("/noleggio-auto-costa-smeralda", lang);

  // Locality pills: keep IT slug, prefix lang for non-IT
  const pills: { name: string; to: string | null }[] = [
    { name: "Porto Cervo", to: "/noleggio-auto-porto-cervo" },
    { name: "San Pantaleo", to: null },
    { name: "Porto Rotondo", to: "/noleggio-auto-porto-rotondo" },
    { name: "Baja Sardinia", to: "/noleggio-auto-baja-sardinia" },
    { name: "Cannigione", to: "/noleggio-auto-cannigione" },
    { name: "Arzachena", to: "/noleggio-auto-arzachena" },
    { name: "Palau", to: "/noleggio-auto-palau" },
    { name: "San Teodoro", to: "/noleggio-auto-san-teodoro" },
  ];

  return (
    <div className="bg-gray-50 dark:bg-[#050505] text-foreground selection:bg-gold selection:text-black overflow-x-hidden font-sans pt-24 md:pt-32">
      <SEOHead
        title={t.seo.title}
        description={t.seo.description}
        canonical={`https://www.ksrentsardinia.com${breadcrumbPath}`}
        jsonLd={[costaSmeraldaJsonLd, costaSmeraldaFaqJsonLd, buildBreadcrumb(t.seo.title, breadcrumbPath)]}
      />

      {/* HERO SECTION */}
      <section className="relative min-h-[80vh] flex flex-col justify-center pb-24 px-4 md:px-12 lg:px-24">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 1.8 }}
            src="https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/BMW/ksrent-noleggio-bmwm2.webp"
            alt={t.altBmwHero}
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 max-w-6xl">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }}>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gold/10 border border-gold/30 mb-10 backdrop-blur-xl">
              <Palmtree className="text-gold w-5 h-5" />
              <span className="text-gold text-xs uppercase tracking-[0.5em] font-black">{t.hero.eyebrow}</span>
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-9xl font-display font-black leading-[0.85] tracking-tighter mb-10 italic uppercase text-gray-900 dark:text-white outline-text">
              {t.hero.title1} <br />
              <span className="text-gold">{t.hero.title2}</span>
            </h1>

            <p className="text-lg md:text-2xl text-gray-600 dark:text-white/80 font-light max-w-3xl mb-12 leading-relaxed">
              {t.hero.subtitle1}
              <span className="text-gold font-bold"> {t.hero.subtitleStrong}</span>
              {t.hero.subtitle2}
            </p>

            <Link
              to={bookHref}
              className="inline-flex items-center gap-4 bg-gold text-white px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 shadow-[0_0_50px_rgba(212,175,55,0.4)] text-lg"
            >
              {t.hero.cta} <ArrowRight size={22} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* INTRO TEXT SECTION */}
      <section className="py-24 px-4 md:px-12 lg:px-24 bg-white dark:bg-[#050505] shadow-md dark:shadow-none border-b-[3px] border-b-gold/40 dark:border-b-transparent relative">
        <div className="absolute inset-0 bg-gold/5 blur-[150px] rounded-full translate-x-1/2" />
        <div className="max-w-5xl mx-auto text-center md:text-left relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="block text-gold font-bold tracking-[0.3em] uppercase text-xs mb-6">{t.intro.eyebrow}</span>
            <h2 className="text-3xl md:text-5xl font-display font-black mb-8 italic uppercase tracking-tighter text-gray-900 dark:text-white">
              {t.intro.heading1} <span className="text-gold">{t.intro.heading2}</span>
            </h2>
            <p className="text-2xl md:text-3xl font-light leading-snug text-gray-700 dark:text-white/90 mb-10">
              {t.intro.lead1} <strong className="text-gold">{t.intro.leadStrong}</strong>
              {t.intro.lead2}
            </p>
            <div className="h-px w-32 bg-gold mb-10 mx-auto md:mx-0" />
            <p
              className="text-gray-600 dark:text-white/60 text-lg md:text-xl leading-relaxed max-w-4xl"
              dangerouslySetInnerHTML={{ __html: renderHtml(t.intro.bodyHtml, lang) }}
            />
          </motion.div>
        </div>
      </section>

      {/* FEATURED CAR SPOTLIGHT - BMW M2 */}
      <section className="py-28 relative px-4 md:px-12 lg:px-24 bg-white dark:bg-[#0a0a0a] shadow-md dark:shadow-none border-b-[3px] border-b-gold/40 dark:border-b-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gold/10 blur-[130px] rounded-full scale-125 animate-pulse" />
            <motion.img
              initial={{ x: -120, opacity: 0, scale: 0.9 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true, amount: 0.3 }}
              src="https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/BMW/ksrent-bmwm2-maschera.webp"
              className="relative z-10 w-full h-auto drop-shadow-[0_40px_80px_rgba(0,0,0,0.9)]"
              alt={t.altBmwSpotlight}
            />
          </div>
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="flex items-center gap-3 mb-5 justify-center lg:justify-start">
              <Zap className="text-gold w-6 h-6" />
              <span className="text-gold font-bold tracking-[0.4em] text-xs uppercase italic">{t.spotlight.eyebrow}</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black mb-8 italic uppercase tracking-tighter leading-none text-gray-900 dark:text-white outline-text-gold">
              {t.spotlight.title1} <br />
              <span className="text-gray-900 dark:text-white">{t.spotlight.title2}</span>
            </h2>
            <p className="text-gray-600 dark:text-white/60 text-xl mb-12 italic font-light leading-relaxed">{t.spotlight.quote}</p>
            <div className="grid grid-cols-2 gap-8 mb-12 max-w-sm mx-auto lg:mx-0">
              <div className="flex items-center gap-4 justify-center lg:justify-start bg-gray-50 dark:bg-white/5 p-4 rounded-xl border border-gray-200 dark:border-white/10">
                <Gauge className="text-gold w-7 h-7" />
                <div>
                  <p className="text-2xl font-black text-gray-900 dark:text-white italic">{t.spotlight.stat1Value}</p>
                  <p className="text-[10px] uppercase text-gold tracking-widest font-bold">{t.spotlight.stat1Label}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 justify-center lg:justify-start bg-gray-50 dark:bg-white/5 p-4 rounded-xl border border-gray-200 dark:border-white/10">
                <Star className="text-gold w-7 h-7" />
                <div>
                  <p className="text-2xl font-black text-gray-900 dark:text-white italic">{t.spotlight.stat2Value}</p>
                  <p className="text-[10px] uppercase text-gold tracking-widest font-bold">{t.spotlight.stat2Label}</p>
                </div>
              </div>
            </div>
            <Link
              to={bookHref}
              className="inline-flex items-center gap-4 text-gray-900 dark:text-white font-black uppercase tracking-widest text-sm group"
            >
              {t.spotlight.cta}{" "}
              <ArrowRight className="group-hover:translate-x-3 transition-transform text-gold duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <ServiceCardGrid
        eyebrow={t.services.eyebrow}
        heading={
          <>
            {t.services.heading1}
            <span className="text-gold">{t.services.heading2}</span>
          </>
        }
        sectionClassName="py-28 px-4 md:px-12 lg:px-24 bg-gray-50 dark:bg-[#050505]"
        cards={[
          { icon: Sailboat, title: t.services.cards[0].title, desc: t.services.cards[0].desc },
          { icon: Diamond, title: t.services.cards[1].title, desc: t.services.cards[1].desc },
          { icon: Wine, title: t.services.cards[2].title, desc: t.services.cards[2].desc },
          { icon: Sparkles, title: t.services.cards[3].title, desc: t.services.cards[3].desc },
        ]}
      />

      {/* LOCALITÀ PILLS */}
      <section className="py-16 px-4 md:px-12 lg:px-24 bg-gray-50 dark:bg-[#050505]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto text-center"
        >
          <h2 className="text-xl md:text-3xl font-display font-bold mb-8 text-gray-700 dark:text-white/80 italic">
            {t.pillsHeading1} <span className="text-gold">{t.pillsHeading2}</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {pills.map((loc) =>
              loc.to ? (
                <Link
                  key={loc.name}
                  to={localizeHref(loc.to, lang)}
                  className="px-6 py-3 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gold text-sm md:text-base font-bold uppercase tracking-widest hover:bg-gold/10 hover:border-gold/30 transition-all"
                >
                  {loc.name}
                </Link>
              ) : (
                <span
                  key={loc.name}
                  className="px-6 py-3 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gold text-sm md:text-base font-bold uppercase tracking-widest hover:bg-gold/10 hover:border-gold/30 transition-all cursor-default"
                >
                  {loc.name}
                </span>
              )
            )}
          </div>
        </motion.div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-28 px-4 md:px-12 lg:px-24 bg-white dark:bg-[#0a0a0a] shadow-md dark:shadow-none border-b-[3px] border-b-gold/40 dark:border-b-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-18">
            <span className="block text-gold font-bold tracking-[0.4em] uppercase text-[10px] mb-4 italic">{t.faq.eyebrow}</span>
            <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-gray-900 dark:text-white">
              {t.faq.title1} <span className="text-gold">{t.faq.title2}</span>
            </h2>
          </div>

          <div className="space-y-5">
            {t.faq.items.map((f, i) => (
              <details
                key={i}
                className={`group rounded-2xl md:rounded-[2rem] transition-all ${
                  f.gold
                    ? "bg-gold/10 border border-gold/40 shadow-[0_0_25px_rgba(212,175,55,0.15)]"
                    : "bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10"
                }`}
              >
                <summary
                  className={`px-8 py-7 cursor-pointer list-none text-left font-bold italic uppercase tracking-tight flex items-center justify-between ${
                    f.gold ? "text-gold" : "text-gray-900 dark:text-white"
                  }`}
                >
                  <div className="flex items-center gap-5">
                    {f.gold && <Star className="w-5 h-5 fill-gold text-gold animate-pulse" />}
                    {f.q}
                  </div>
                  <span className="text-gold transition-transform group-open:rotate-90 shrink-0 ml-4">›</span>
                </summary>
                <div className="px-10 pt-2 pb-10 text-gray-600 dark:text-white/60 leading-relaxed font-light text-base md:text-lg italic">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SEO RICH TEXT */}
      <section className="py-24 px-4 md:px-12 lg:px-24 bg-gray-50 dark:bg-[#050505]">
        <div className="max-w-4xl mx-auto">
          <span className="block text-gold font-bold tracking-[0.3em] uppercase text-xs mb-6">{t.rich.eyebrow}</span>
          <h2 className="text-3xl md:text-5xl font-display font-black mb-10 italic uppercase tracking-tighter text-gray-900 dark:text-white">
            {t.rich.title1} <span className="text-gold">{t.rich.title2}</span>
          </h2>

          <div className="space-y-6 text-gray-600 dark:text-white/60 text-base md:text-lg leading-relaxed font-light">
            {t.rich.pHtml.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: renderHtml(p, lang) }} />
            ))}
          </div>
        </div>
      </section>

      {/* SEO KEYWORD SECTION */}
      <section className="py-16 px-4 md:px-12 max-w-7xl mx-auto text-gray-700 dark:text-white/80 font-light leading-relaxed">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{t.keyword.heading}</h2>
        <p className="mb-4" dangerouslySetInnerHTML={{ __html: t.keyword.pHtml1 }} />
        <p dangerouslySetInnerHTML={{ __html: t.keyword.pHtml2 }} />
      </section>

      {/* FINAL CTA */}
      <section className="py-36 px-4 text-center bg-gradient-to-t from-gold/15 to-gray-50 dark:to-[#050505] relative overflow-hidden">
        <div className="absolute inset-0 bg-gold/5 blur-[150px] rounded-full translate-y-1/2" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <h2 className="text-6xl md:text-9xl font-black mb-12 italic uppercase tracking-tighter leading-none text-gray-900 dark:text-white outline-text">
            {t.finalCta.title1} <br />
            <span className="text-gold">{t.finalCta.title2}</span>
          </h2>
          <p className="text-gray-600 dark:text-white/70 text-xl md:text-2xl max-w-2xl mx-auto mb-16 font-light leading-relaxed">
            {t.finalCta.lead}
          </p>
          <Link
            to={bookHref}
            className="inline-flex items-center gap-4 bg-gold text-white px-14 py-6 rounded-full font-black uppercase tracking-widest hover:bg-black dark:hover:bg-white dark:hover:text-black transition-all duration-500 text-xl shadow-2xl hover:scale-105"
          >
            {t.finalCta.cta} <ArrowRight size={24} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default NoleggioCostaSmeralda;

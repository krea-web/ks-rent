import { Link } from "@/lib/router-shim";
import { motion } from "framer-motion";
import { ArrowRight, Plane, Luggage, Clock3, BellRing, Star, Zap } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { aeroportoFaqJsonLd, aeroportoAutoRentalJsonLd, buildBreadcrumb } from "@/lib/jsonLd";
import ServiceCardGrid from "@/components/ServiceCardGrid";
import type { Locale } from "@/lib/i18n";

interface Props {
  lang?: Locale;
}

const TRANSLATIONS = {
  it: {
    seo: {
      title: "Noleggio Auto Aeroporto Olbia | KS Rent",
      description:
        "Noleggio auto con consegna immediata all'Aeroporto di Olbia. Supercar, SUV e moto senza carta di credito. Prenota online con KS Rent.",
    },
    hero: {
      eyebrow: "Aeroporto Costa Smeralda",
      title1: "Noleggio Auto",
      title2: "Aeroporto Olbia",
      subtitle1: "Atterra a Olbia e sali a bordo del tuo sogno. Consegna immediata,",
      subtitleStrong: "zero attese ai banconi",
      subtitle2: "e flotta supercar pronta per te.",
      cta: "Verifica Disponibilità",
    },
    intro: {
      eyebrow: "L'Eccellenza a Olbia",
      heading1: "Autonoleggio Aeroporto Olbia",
      heading2: "Costa Smeralda",
      lead1: "Benvenuto al portale d'ingresso della",
      leadStrong: "Costa Smeralda",
      lead2:
        ". KS Rent rivoluziona il concetto di autonoleggio aeroportuale, trasformando l'attesa in piacere.",
      bodyHtml:
        "Offriamo un servizio premium con consegna del veicolo direttamente al terminal arrivi gestito da Geasar. Risparmia tempo prenotando in <strong>totale autonomia dal nostro sito</strong>: gestiamo depositi cauzionali flessibili e accettiamo pagamenti <strong>senza obbligo di carta di credito</strong>. Che tu cerchi una supercar, un SUV per la famiglia o uno scooter per le spiagge, la nostra flotta è la tua chiave per la Sardegna. Serviamo anche il {link:porto:Porto di Olbia} e tutta la {link:costa:Costa Smeralda}. Scopri anche il nostro {link:senzacc:noleggio senza carta di credito}.",
    },
    spotlight: {
      eyebrow: "Airport Spotlight",
      title1: "Noleggio Audi RS3",
      title2: "Aeroporto Olbia",
      quote:
        "\"400 cavalli di pura adrenalina. Atterra a Olbia e sali a bordo della sportiva più desiderata della Costa Smeralda.\"",
      stat1Value: "400",
      stat1Label: "Cavalli",
      stat2Value: "3.8s",
      stat2Label: "0-100 km/h",
      cta: "Scopri la flotta",
    },
    services: {
      eyebrow: "Airport Concierge",
      heading1: "Servizio dedicato all'",
      heading2: "arrivo a Olbia",
      cards: [
        {
          title: "Ritiro in 5 minuti",
          desc: "Atterri, ritiri il bagaglio e l'auto è già accesa nel parcheggio dedicato. Zero navette, zero file ai banchi.",
        },
        {
          title: "Aiuto con i bagagli",
          desc: "Il nostro addetto ti raggiunge in arrivi e gestisce trasferimento e bagagli fino al veicolo, così tu pensi solo alla vacanza.",
        },
        {
          title: "Tracking del volo",
          desc: "Monitoriamo il numero del tuo volo: se sei in ritardo o in anticipo siamo lì all'orario reale di atterraggio.",
        },
        {
          title: "Voli notturni gestiti",
          desc: "Servizio attivo 10:00–22:30 con consegna fuori orario su richiesta per chi atterra dopo le 22:00 in alta stagione.",
        },
      ],
    },
    faq: {
      eyebrow: "Concierge Desk",
      title1: "Domande Frequenti",
      title2: "Aeroporto Olbia",
      items: [
        {
          q: "Come funziona la consegna in Aeroporto?",
          a: "Ti aspettiamo direttamente agli arrivi dell'Aeroporto Costa Smeralda. Niente file o navette: la tua auto è già pronta nel parcheggio dedicato, accesa e climatizzata.",
          gold: true,
        },
        {
          q: "È possibile noleggiare senza carta di credito?",
          a: "Certamente. Accettiamo carte di debito, prepagate e contanti per il deposito cauzionale. La flessibilità è il nostro marchio di fabbrica.",
          gold: true,
        },
        {
          q: "Quali metodi di pagamento accettate?",
          a: "Accettiamo tutti i principali circuiti: Visa, Mastercard, American Express, oltre a contanti e bonifici istantanei.",
          gold: false,
        },
        {
          q: "Come funziona il deposito cauzionale?",
          a: "Il deposito è proporzionato alla tipologia di veicolo. Grazie ai nostri depositi flessibili, rendiamo il noleggio di supercar accessibile e trasparente.",
          gold: false,
        },
        {
          q: "Posso cancellare la mia prenotazione?",
          a: "Sì, offriamo politiche di cancellazione trasparenti gestibili direttamente dal tuo profilo o contattando il nostro servizio concierge.",
          gold: false,
        },
      ],
    },
    rich: {
      eyebrow: "Guida Completa",
      title1: "Noleggio Auto all'Aeroporto",
      title2: "Costa Smeralda di Olbia",
      pHtml: [
        "L'<strong>Aeroporto di Olbia Costa Smeralda</strong> (codice IATA: OLB), gestito dalla società Geasar, è il principale scalo aeroportuale del nord-est della Sardegna. Situato a soli 4 km dal centro di Olbia, il terminal è collegato alla superstrada SS 131 DCN e alla SS 125 Orientale Sarda, rendendo ogni destinazione della Gallura facilmente raggiungibile in auto. Ogni estate, l'aeroporto accoglie milioni di passeggeri provenienti da tutta Europa, attratti dalle spiagge cristalline della Costa Smeralda, {link:porto-cervo:Porto Cervo}, {link:baja-sardinia:Baja Sardinia} e {link:san-teodoro:San Teodoro}.",
        "<strong>Come funziona il ritiro dell'auto a Olbia Aeroporto?</strong> Con KS Rent, il processo è stato progettato per eliminare ogni attesa. Una volta atterrato e ritirato il bagaglio, il nostro addetto ti attende nella zona arrivi con la documentazione già pronta. Ti accompagnerà al veicolo parcheggiato nell'area dedicata, a pochi passi dal terminal. Nessuna navetta verso depositi lontani, nessuna coda ai banconi delle compagnie tradizionali: in meno di 5 minuti sarai al volante della tua supercar, SUV o city car, pronto per imboccare la superstrada verso Porto Cervo, San Pantaleo o qualsiasi altra destinazione della costa.",
        "La nostra flotta al servizio dell'aeroporto di Olbia comprende veicoli per ogni esigenza: dall'<strong>Audi RS3 Kyalami Green</strong> da 400 cavalli per chi cerca l'adrenalina pura, alla <strong>BMW M2 M Performance</strong> per gli amanti della guida sportiva, fino a SUV spaziosi come la <strong>Jeep Avenger</strong> per famiglie e gruppi. Offriamo anche scooter Honda SH 125 e quad Yamaha Raptor per chi vuole esplorare le calette più nascoste della costa. Ogni veicolo viene consegnato sanificato, con il pieno di carburante e la climatizzazione attiva.",
        "Un aspetto che ci distingue nel panorama dell'<strong>autonoleggio aeroporto Olbia</strong> è la nostra politica di pagamento flessibile: non richiediamo carte di credito tradizionali. Accettiamo carte prepagate, bancomat, carte di debito e anche contanti per il deposito cauzionale. Questa filosofia nasce dall'ascolto dei nostri clienti, stanchi dei vincoli imposti dai grandi marchi internazionali. L'importo del deposito varia in base alla categoria del veicolo ed è sempre comunicato in modo chiaro e trasparente prima della conferma. Offriamo anche consegna e ritiro al {link:porto:Porto di Olbia Isola Bianca}, in tutta la {link:costa:Costa Smeralda} e {link:senzacc:senza obbligo di carta di credito}.",
      ],
    },
    keyword: {
      heading: "Noleggio Auto Aeroporto Olbia (Costa Smeralda)",
      pHtml1:
        "Atterra e parti immediatamente. Il nostro servizio di <strong>noleggio auto all'aeroporto di Olbia</strong> è studiato per azzerare i tempi di attesa. Grazie al nostro servizio esclusivo di <strong>consegna auto a Olbia</strong> direttamente al terminal degli arrivi (Geasar), troverai le chiavi pronte e l'auto igienizzata che ti aspetta.",
      pHtml2:
        "Siamo il punto di riferimento per chi cerca un <strong>rent a car at Olbia airport</strong> rapido, trasparente e senza costi nascosti. Evita le navette affollate e i desk lenti: prenota ora e inizia la tua vacanza in Costa Smeralda appena scendi dall'aereo.",
    },
    finalCta: {
      title1: "PRENOTA IL",
      title2: "TUO SOGNO",
      cta: "Scegli il Veicolo",
      footerLinkText: "Noleggio auto Olbia",
      footerTail:
        " — KS Rent Sardinia, autonoleggio con consegna a domicilio in tutta la Gallura e Costa Smeralda.",
    },
    altRs3Hero: "Noleggio Audi RS3 verde Aeroporto Olbia KS Rent",
    altRs3Spotlight: "Noleggio Audi RS3 Verde Aeroporto Olbia KS Rent",
  },
  en: {
    seo: {
      title: "Car Hire Olbia Airport | KS Rent",
      description:
        "Car hire with immediate delivery at Olbia Airport. Supercars, SUVs and motorbikes without a credit card. Book online with KS Rent.",
    },
    hero: {
      eyebrow: "Costa Smeralda Airport",
      title1: "Car Hire",
      title2: "Olbia Airport",
      subtitle1: "Land in Olbia and step straight into your dream car. Immediate delivery,",
      subtitleStrong: "no waiting at desks",
      subtitle2: "and a supercar fleet ready for you.",
      cta: "Check Availability",
    },
    intro: {
      eyebrow: "Excellence in Olbia",
      heading1: "Car Hire at Olbia Airport",
      heading2: "Costa Smeralda",
      lead1: "Welcome to the gateway to the",
      leadStrong: "Costa Smeralda",
      lead2: ". KS Rent reinvents airport car hire, turning waiting into pleasure.",
      bodyHtml:
        "We offer a premium service with vehicle delivery straight to the arrivals terminal operated by Geasar. Save time by booking in <strong>full autonomy from our website</strong>: we manage flexible security deposits and accept payments <strong>without requiring a credit card</strong>. Whether you're after a supercar, a family SUV or a scooter for the beaches, our fleet is your key to Sardinia. We also serve the {link:porto:Olbia Ferry Port} and the whole {link:costa:Costa Smeralda}. Discover our {link:senzacc:no credit card car hire} too.",
    },
    spotlight: {
      eyebrow: "Airport Spotlight",
      title1: "Audi RS3 Hire",
      title2: "Olbia Airport",
      quote:
        "\"400 horsepower of pure adrenaline. Land in Olbia and step into the most desired sports car on the Costa Smeralda.\"",
      stat1Value: "400",
      stat1Label: "Horsepower",
      stat2Value: "3.8s",
      stat2Label: "0-100 km/h",
      cta: "Discover the fleet",
    },
    services: {
      eyebrow: "Airport Concierge",
      heading1: "Service dedicated to your ",
      heading2: "arrival in Olbia",
      cards: [
        {
          title: "Pick-up in 5 minutes",
          desc: "You land, collect your luggage and the car is already running in the dedicated car park. No shuttles, no queues at desks.",
        },
        {
          title: "Help with your luggage",
          desc: "Our team meets you in arrivals and handles the transfer and bags to the car, so you only need to think about your holiday.",
        },
        {
          title: "Flight tracking",
          desc: "We monitor your flight number: whether you're early or late, we are there at the actual landing time.",
        },
        {
          title: "Late flights covered",
          desc: "Service active 10:00–22:30 with out-of-hours delivery on request for those landing after 22:00 in peak season.",
        },
      ],
    },
    faq: {
      eyebrow: "Concierge Desk",
      title1: "Frequently Asked Questions",
      title2: "Olbia Airport",
      items: [
        {
          q: "How does airport delivery work?",
          a: "We meet you straight at the arrivals of Costa Smeralda Airport. No queues or shuttles: your car is already in the dedicated car park, running and air-conditioned.",
          gold: true,
        },
        {
          q: "Can I hire without a credit card?",
          a: "Of course. We accept debit cards, prepaid cards and cash for the security deposit. Flexibility is our trademark.",
          gold: true,
        },
        {
          q: "Which payment methods do you accept?",
          a: "We accept all the major networks: Visa, Mastercard, American Express, plus cash and instant bank transfers.",
          gold: false,
        },
        {
          q: "How does the security deposit work?",
          a: "The deposit is proportional to the vehicle category. Thanks to our flexible deposits we make supercar hire accessible and transparent.",
          gold: false,
        },
        {
          q: "Can I cancel my booking?",
          a: "Yes, we offer transparent cancellation policies that you can manage directly from your profile or by contacting our concierge service.",
          gold: false,
        },
      ],
    },
    rich: {
      eyebrow: "Complete Guide",
      title1: "Car Hire at the",
      title2: "Olbia Costa Smeralda Airport",
      pHtml: [
        "<strong>Olbia Costa Smeralda Airport</strong> (IATA code: OLB), operated by Geasar, is the main airport in north-eastern Sardinia. Located just 4 km from the centre of Olbia, the terminal connects to the SS 131 DCN dual carriageway and the SS 125 Eastern Sardinia road, making every destination in Gallura easily reachable by car. Every summer the airport welcomes millions of passengers from across Europe, drawn by the crystal-clear beaches of the Costa Smeralda, {link:porto-cervo:Porto Cervo}, {link:baja-sardinia:Baja Sardinia} and {link:san-teodoro:San Teodoro}.",
        "<strong>How does car pick-up at Olbia Airport work?</strong> With KS Rent the process is designed to eliminate every wait. Once you have landed and collected your luggage, our team will meet you in the arrivals area with all the paperwork already prepared. You will be walked to your vehicle parked in the dedicated area, a few steps from the terminal. No shuttles to remote depots, no queues at the desks of traditional companies: in under 5 minutes you'll be at the wheel of your supercar, SUV or city car, ready to head onto the dual carriageway towards Porto Cervo, San Pantaleo or any other coastal destination.",
        "Our fleet serving Olbia Airport caters for every need: from the <strong>Audi RS3 Kyalami Green</strong> with 400 hp for those seeking pure adrenaline, to the <strong>BMW M2 M Performance</strong> for sporty driving fans, all the way to spacious SUVs like the <strong>Jeep Avenger</strong> for families and groups. We also offer Honda SH 125 scooters and Yamaha Raptor quads for those who want to explore the most hidden coves on the coast. Every vehicle is delivered sanitised, with a full tank and air conditioning on.",
        "What sets us apart in the <strong>Olbia airport car hire</strong> landscape is our flexible payment policy: we don't require traditional credit cards. We accept prepaid cards, debit cards and even cash for the security deposit. This philosophy was born from listening to our customers, tired of the constraints imposed by big international brands. The deposit amount varies by vehicle category and is always communicated clearly and transparently before confirmation. We also deliver and collect at the {link:porto:Olbia Isola Bianca Ferry Port}, throughout the {link:costa:Costa Smeralda} and {link:senzacc:without requiring a credit card}.",
      ],
    },
    keyword: {
      heading: "Car Hire at Olbia Airport (Costa Smeralda)",
      pHtml1:
        "Land and leave straight away. Our <strong>car hire at Olbia Airport</strong> service is designed to cut waiting times to zero. Thanks to our exclusive <strong>car delivery in Olbia</strong> direct to the arrivals terminal (Geasar), you'll find the keys ready and the car sanitised waiting for you.",
      pHtml2:
        "We are the reference for those looking for a fast, transparent <strong>rent-a-car at Olbia Airport</strong> with no hidden costs. Skip the crowded shuttles and slow desks: book now and start your Costa Smeralda holiday the moment you step off the plane.",
    },
    finalCta: {
      title1: "BOOK YOUR",
      title2: "DREAM CAR",
      cta: "Choose the Vehicle",
      footerLinkText: "Car hire Olbia",
      footerTail:
        " — KS Rent Sardinia, car hire with home delivery throughout Gallura and the Costa Smeralda.",
    },
    altRs3Hero: "KS Rent green Audi RS3 hire at Olbia Airport",
    altRs3Spotlight: "KS Rent green Audi RS3 hire at Olbia Airport",
  },
  de: {
    seo: {
      title: "Autovermietung Flughafen Olbia | KS Rent",
      description:
        "Autovermietung mit sofortiger Lieferung am Flughafen Olbia. Supersportwagen, SUVs und Motorräder ohne Kreditkarte. Online buchen mit KS Rent.",
    },
    hero: {
      eyebrow: "Flughafen Costa Smeralda",
      title1: "Autovermietung",
      title2: "Flughafen Olbia",
      subtitle1: "Landen Sie in Olbia und steigen Sie direkt in Ihr Traumauto. Sofortige Übergabe,",
      subtitleStrong: "keine Wartezeit am Schalter",
      subtitle2: "und eine Sportwagenflotte, die für Sie bereitsteht.",
      cta: "Verfügbarkeit prüfen",
    },
    intro: {
      eyebrow: "Exzellenz in Olbia",
      heading1: "Autovermietung am Flughafen Olbia",
      heading2: "Costa Smeralda",
      lead1: "Willkommen am Tor zur",
      leadStrong: "Costa Smeralda",
      lead2:
        ". KS Rent revolutioniert die Autovermietung am Flughafen und macht aus Wartezeit Vorfreude.",
      bodyHtml:
        "Wir bieten einen Premium-Service mit Fahrzeugübergabe direkt am Ankunftsterminal von Geasar. Sparen Sie Zeit, indem Sie <strong>vollständig autonom über unsere Website buchen</strong>: Wir handhaben flexible Kautionen und akzeptieren Zahlungen <strong>ohne Kreditkartenpflicht</strong>. Ob Supersportwagen, Familien-SUV oder Roller für die Strände — unser Fuhrpark ist Ihr Schlüssel zu Sardinien. Wir bedienen auch den {link:porto:Hafen Olbia} und die gesamte {link:costa:Costa Smeralda}. Entdecken Sie auch unsere {link:senzacc:Vermietung ohne Kreditkarte}.",
    },
    spotlight: {
      eyebrow: "Airport Spotlight",
      title1: "Audi RS3 mieten",
      title2: "Flughafen Olbia",
      quote:
        "\"400 PS pures Adrenalin. Landen Sie in Olbia und nehmen Sie Platz im begehrtesten Sportwagen der Costa Smeralda.\"",
      stat1Value: "400",
      stat1Label: "PS",
      stat2Value: "3.8s",
      stat2Label: "0-100 km/h",
      cta: "Fuhrpark entdecken",
    },
    services: {
      eyebrow: "Airport Concierge",
      heading1: "Service zugeschnitten auf Ihre ",
      heading2: "Ankunft in Olbia",
      cards: [
        {
          title: "Übernahme in 5 Minuten",
          desc: "Sie landen, holen Ihr Gepäck ab und das Auto steht bereits laufend auf dem reservierten Parkplatz. Keine Shuttles, keine Schlangen am Schalter.",
        },
        {
          title: "Gepäckhilfe",
          desc: "Unser Mitarbeiter empfängt Sie in der Ankunftshalle und kümmert sich um Transfer und Gepäck bis zum Fahrzeug — Sie denken nur an Ihren Urlaub.",
        },
        {
          title: "Flug-Tracking",
          desc: "Wir verfolgen Ihre Flugnummer: Ob früher oder später — wir sind zur tatsächlichen Landezeit vor Ort.",
        },
        {
          title: "Späte Flüge inklusive",
          desc: "Service von 10:00–22:30 Uhr aktiv, mit Übergabe außerhalb der Öffnungszeiten auf Anfrage für Landungen nach 22:00 Uhr in der Hochsaison.",
        },
      ],
    },
    faq: {
      eyebrow: "Concierge Desk",
      title1: "Häufige Fragen",
      title2: "Flughafen Olbia",
      items: [
        {
          q: "Wie funktioniert die Übergabe am Flughafen?",
          a: "Wir empfangen Sie direkt in der Ankunftshalle des Flughafens Costa Smeralda. Keine Schlangen oder Shuttles: Ihr Wagen steht bereits klimatisiert und laufend auf dem reservierten Parkplatz.",
          gold: true,
        },
        {
          q: "Kann ich ohne Kreditkarte mieten?",
          a: "Selbstverständlich. Wir akzeptieren Bankkarten, Prepaid-Karten und Bargeld für die Kaution. Flexibilität ist unser Markenzeichen.",
          gold: true,
        },
        {
          q: "Welche Zahlungsmethoden akzeptieren Sie?",
          a: "Wir akzeptieren alle wichtigen Anbieter: Visa, Mastercard, American Express sowie Bargeld und Sofortüberweisungen.",
          gold: false,
        },
        {
          q: "Wie funktioniert die Kaution?",
          a: "Die Kaution richtet sich nach der Fahrzeugkategorie. Dank unserer flexiblen Kautionen machen wir die Anmietung von Supersportwagen zugänglich und transparent.",
          gold: false,
        },
        {
          q: "Kann ich meine Buchung stornieren?",
          a: "Ja, wir bieten transparente Stornierungsbedingungen, die Sie direkt im Profil oder über unseren Concierge-Service verwalten können.",
          gold: false,
        },
      ],
    },
    rich: {
      eyebrow: "Vollständiger Leitfaden",
      title1: "Autovermietung am Flughafen",
      title2: "Costa Smeralda Olbia",
      pHtml: [
        "Der <strong>Flughafen Olbia Costa Smeralda</strong> (IATA-Code: OLB), betrieben von Geasar, ist der wichtigste Flughafen Nordost-Sardiniens. Nur 4 km vom Zentrum Olbias entfernt, ist das Terminal an die Schnellstraße SS 131 DCN und die SS 125 Orientale Sarda angebunden, sodass jedes Ziel der Gallura bequem mit dem Auto erreichbar ist. Jeden Sommer empfängt der Flughafen Millionen Reisende aus ganz Europa, angezogen von den kristallklaren Stränden der Costa Smeralda, {link:porto-cervo:Porto Cervo}, {link:baja-sardinia:Baja Sardinia} und {link:san-teodoro:San Teodoro}.",
        "<strong>Wie funktioniert die Fahrzeugübernahme am Flughafen Olbia?</strong> Bei KS Rent ist der Ablauf so gestaltet, dass jegliche Wartezeit entfällt. Sobald Sie gelandet sind und Ihr Gepäck abgeholt haben, erwartet Sie unser Mitarbeiter im Ankunftsbereich mit bereits vorbereiteten Unterlagen. Er begleitet Sie zum Fahrzeug auf dem reservierten Parkplatz, nur wenige Schritte vom Terminal entfernt. Keine Shuttles zu fernen Depots, keine Schlangen an den Schaltern der traditionellen Anbieter: In weniger als 5 Minuten sitzen Sie hinter dem Steuer Ihres Supersportwagens, SUVs oder Stadtautos und können auf die Schnellstraße in Richtung Porto Cervo, San Pantaleo oder jedes andere Küstenziel auffahren.",
        "Unser Fuhrpark am Flughafen Olbia bietet Fahrzeuge für jeden Bedarf: vom <strong>Audi RS3 Kyalami Green</strong> mit 400 PS für reines Adrenalin über den <strong>BMW M2 M Performance</strong> für sportliche Fahrer bis zu geräumigen SUVs wie dem <strong>Jeep Avenger</strong> für Familien und Gruppen. Wir bieten auch Honda SH 125 Roller und Yamaha Raptor Quads für alle, die die versteckten Buchten der Küste erkunden möchten. Jedes Fahrzeug wird desinfiziert, vollgetankt und mit eingeschalteter Klimaanlage übergeben.",
        "Was uns im Bereich <strong>Autovermietung Flughafen Olbia</strong> auszeichnet, ist unsere flexible Zahlungspolitik: Wir verlangen keine herkömmlichen Kreditkarten. Wir akzeptieren Prepaid-Karten, Bankkarten und sogar Bargeld für die Kaution. Diese Philosophie entstand aus dem Hören auf unsere Kunden, die der Beschränkungen großer internationaler Marken überdrüssig sind. Die Höhe der Kaution richtet sich nach der Fahrzeugkategorie und wird stets klar und transparent vor der Bestätigung mitgeteilt. Wir bieten auch Lieferung und Rücknahme am {link:porto:Hafen Olbia Isola Bianca}, in der gesamten {link:costa:Costa Smeralda} und {link:senzacc:ohne Kreditkartenpflicht} an.",
      ],
    },
    keyword: {
      heading: "Autovermietung Flughafen Olbia (Costa Smeralda)",
      pHtml1:
        "Landen und sofort losfahren. Unser <strong>Autovermietungsservice am Flughafen Olbia</strong> ist darauf ausgelegt, Wartezeiten auf null zu reduzieren. Dank unseres exklusiven <strong>Auto-Lieferservices in Olbia</strong> direkt am Ankunftsterminal (Geasar) finden Sie die Schlüssel bereit und das desinfizierte Auto wartet auf Sie.",
      pHtml2:
        "Wir sind die Adresse für alle, die einen schnellen, transparenten <strong>Mietwagen am Flughafen Olbia</strong> ohne versteckte Kosten suchen. Vermeiden Sie überfüllte Shuttles und langsame Schalter: Buchen Sie jetzt und beginnen Sie Ihren Costa-Smeralda-Urlaub direkt nach dem Aussteigen aus dem Flugzeug.",
    },
    finalCta: {
      title1: "BUCHEN SIE",
      title2: "IHREN TRAUMWAGEN",
      cta: "Fahrzeug wählen",
      footerLinkText: "Autovermietung Olbia",
      footerTail:
        " — KS Rent Sardinia, Autovermietung mit Lieferung an die Haustür in der gesamten Gallura und Costa Smeralda.",
    },
    altRs3Hero: "Audi RS3 grün Mietwagen Flughafen Olbia KS Rent",
    altRs3Spotlight: "Audi RS3 grün Mietwagen Flughafen Olbia KS Rent",
  },
  fr: {
    seo: {
      title: "Location de Voiture Aéroport Olbia | KS Rent",
      description:
        "Location de voiture avec livraison immédiate à l'aéroport d'Olbia. Supercars, SUV et motos sans carte de crédit. Réservez en ligne avec KS Rent.",
    },
    hero: {
      eyebrow: "Aéroport Costa Smeralda",
      title1: "Location de Voiture",
      title2: "Aéroport d'Olbia",
      subtitle1: "Atterrissez à Olbia et montez à bord de la voiture de vos rêves. Livraison immédiate,",
      subtitleStrong: "aucune attente au comptoir",
      subtitle2: "et une flotte de supercars prête pour vous.",
      cta: "Vérifier la disponibilité",
    },
    intro: {
      eyebrow: "L'Excellence à Olbia",
      heading1: "Location de Voiture Aéroport d'Olbia",
      heading2: "Costa Smeralda",
      lead1: "Bienvenue à la porte d'entrée de la",
      leadStrong: "Costa Smeralda",
      lead2:
        ". KS Rent réinvente la location aéroport et transforme l'attente en plaisir.",
      bodyHtml:
        "Nous proposons un service premium avec livraison du véhicule directement au terminal des arrivées géré par Geasar. Gagnez du temps en réservant en <strong>toute autonomie depuis notre site</strong> : nous gérons des dépôts de garantie flexibles et acceptons les paiements <strong>sans obligation de carte de crédit</strong>. Que vous cherchiez une supercar, un SUV familial ou un scooter pour les plages, notre flotte est votre clé pour la Sardaigne. Nous desservons aussi le {link:porto:Port d'Olbia} et toute la {link:costa:Costa Smeralda}. Découvrez également notre {link:senzacc:location sans carte de crédit}.",
    },
    spotlight: {
      eyebrow: "Airport Spotlight",
      title1: "Location Audi RS3",
      title2: "Aéroport d'Olbia",
      quote:
        "« 400 chevaux d'adrénaline pure. Atterrissez à Olbia et montez à bord de la sportive la plus convoitée de la Costa Smeralda. »",
      stat1Value: "400",
      stat1Label: "Chevaux",
      stat2Value: "3.8s",
      stat2Label: "0-100 km/h",
      cta: "Découvrir la flotte",
    },
    services: {
      eyebrow: "Airport Concierge",
      heading1: "Un service dédié à votre ",
      heading2: "arrivée à Olbia",
      cards: [
        {
          title: "Prise en main en 5 minutes",
          desc: "Vous atterrissez, récupérez vos bagages et la voiture est déjà en marche sur le parking dédié. Aucune navette, aucune file d'attente.",
        },
        {
          title: "Aide aux bagages",
          desc: "Notre équipe vous accueille aux arrivées et prend en charge le transfert et les bagages jusqu'à la voiture, vous ne pensez qu'à vos vacances.",
        },
        {
          title: "Suivi du vol",
          desc: "Nous suivons votre numéro de vol : en avance ou en retard, nous sommes là à l'heure réelle d'atterrissage.",
        },
        {
          title: "Vols tardifs gérés",
          desc: "Service actif de 10h00 à 22h30 avec livraison hors horaires sur demande pour les arrivées après 22h00 en haute saison.",
        },
      ],
    },
    faq: {
      eyebrow: "Concierge Desk",
      title1: "Questions Fréquentes",
      title2: "Aéroport d'Olbia",
      items: [
        {
          q: "Comment fonctionne la livraison à l'aéroport ?",
          a: "Nous vous attendons directement aux arrivées de l'aéroport Costa Smeralda. Pas de file ni de navette : votre voiture est déjà sur le parking dédié, en marche et climatisée.",
          gold: true,
        },
        {
          q: "Puis-je louer sans carte de crédit ?",
          a: "Bien entendu. Nous acceptons les cartes de débit, les prépayées et les espèces pour le dépôt de garantie. La flexibilité est notre marque de fabrique.",
          gold: true,
        },
        {
          q: "Quels moyens de paiement acceptez-vous ?",
          a: "Nous acceptons tous les principaux réseaux : Visa, Mastercard, American Express, ainsi que les espèces et les virements instantanés.",
          gold: false,
        },
        {
          q: "Comment fonctionne le dépôt de garantie ?",
          a: "Le dépôt est proportionnel à la catégorie du véhicule. Grâce à nos dépôts flexibles, nous rendons la location de supercar accessible et transparente.",
          gold: false,
        },
        {
          q: "Puis-je annuler ma réservation ?",
          a: "Oui, nous proposons des conditions d'annulation transparentes que vous pouvez gérer depuis votre profil ou en contactant notre service concierge.",
          gold: false,
        },
      ],
    },
    rich: {
      eyebrow: "Guide Complet",
      title1: "Location de Voiture à l'Aéroport",
      title2: "Costa Smeralda d'Olbia",
      pHtml: [
        "L'<strong>aéroport d'Olbia Costa Smeralda</strong> (code IATA : OLB), géré par la société Geasar, est le principal aéroport du nord-est de la Sardaigne. Situé à seulement 4 km du centre d'Olbia, le terminal est relié à la voie rapide SS 131 DCN et à la SS 125 Orientale Sarda, rendant chaque destination de la Gallura facilement accessible en voiture. Chaque été, l'aéroport accueille des millions de passagers venus de toute l'Europe, attirés par les plages cristallines de la Costa Smeralda, {link:porto-cervo:Porto Cervo}, {link:baja-sardinia:Baja Sardinia} et {link:san-teodoro:San Teodoro}.",
        "<strong>Comment fonctionne la prise en main de la voiture à l'aéroport d'Olbia ?</strong> Avec KS Rent, le processus est conçu pour éliminer toute attente. Une fois que vous avez atterri et récupéré vos bagages, notre agent vous attend à l'arrivée avec les documents déjà préparés. Il vous accompagne jusqu'au véhicule garé sur l'aire dédiée, à quelques pas du terminal. Pas de navette vers des dépôts éloignés, pas de file d'attente aux comptoirs des compagnies traditionnelles : en moins de 5 minutes, vous êtes au volant de votre supercar, SUV ou citadine, prêt à rejoindre la voie rapide vers Porto Cervo, San Pantaleo ou toute autre destination côtière.",
        "Notre flotte au service de l'aéroport d'Olbia comprend des véhicules pour tous les besoins : de l'<strong>Audi RS3 Kyalami Green</strong> de 400 chevaux pour ceux qui cherchent l'adrénaline pure, à la <strong>BMW M2 M Performance</strong> pour les amateurs de conduite sportive, jusqu'aux SUV spacieux comme le <strong>Jeep Avenger</strong> pour les familles et les groupes. Nous proposons aussi des scooters Honda SH 125 et des quads Yamaha Raptor pour qui veut explorer les criques les plus cachées de la côte. Chaque véhicule est livré désinfecté, plein fait et climatisation active.",
        "Ce qui nous distingue dans le paysage de la <strong>location de voiture à l'aéroport d'Olbia</strong>, c'est notre politique de paiement flexible : nous n'exigeons pas de carte de crédit traditionnelle. Nous acceptons les cartes prépayées, les cartes de débit et même les espèces pour le dépôt de garantie. Cette philosophie est née de l'écoute de nos clients, lassés des contraintes imposées par les grandes marques internationales. Le montant du dépôt varie selon la catégorie du véhicule et est toujours communiqué clairement et de façon transparente avant la confirmation. Nous proposons également la livraison et la reprise au {link:porto:Port d'Olbia Isola Bianca}, dans toute la {link:costa:Costa Smeralda} et {link:senzacc:sans obligation de carte de crédit}.",
      ],
    },
    keyword: {
      heading: "Location de Voiture Aéroport d'Olbia (Costa Smeralda)",
      pHtml1:
        "Atterrissez et partez immédiatement. Notre service de <strong>location de voiture à l'aéroport d'Olbia</strong> est conçu pour réduire les temps d'attente à zéro. Grâce à notre service exclusif de <strong>livraison de voiture à Olbia</strong> directement au terminal des arrivées (Geasar), vous trouverez les clés prêtes et la voiture désinfectée qui vous attend.",
      pHtml2:
        "Nous sommes la référence pour qui cherche une <strong>location de voiture à l'aéroport d'Olbia</strong> rapide, transparente et sans frais cachés. Évitez les navettes bondées et les comptoirs lents : réservez maintenant et commencez vos vacances en Costa Smeralda dès la descente d'avion.",
    },
    finalCta: {
      title1: "RÉSERVEZ",
      title2: "VOTRE RÊVE",
      cta: "Choisir le véhicule",
      footerLinkText: "Location de voiture Olbia",
      footerTail:
        " — KS Rent Sardinia, location avec livraison à domicile dans toute la Gallura et la Costa Smeralda.",
    },
    altRs3Hero: "KS Rent location Audi RS3 verte Aéroport d'Olbia",
    altRs3Spotlight: "KS Rent location Audi RS3 verte Aéroport d'Olbia",
  },
} as const;

/** Path localizzato per le pagine principali e dynamic locality slug. */
function localizeHref(itPath: string, lang: Locale): string {
  const map: Record<string, Record<Locale, string>> = {
    "/prenotaora": {
      it: "/prenotaora",
      en: "/en/book-now",
      de: "/de/jetzt-buchen",
      fr: "/fr/reserver",
    },
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
    "/": {
      it: "/",
      en: "/en",
      de: "/de",
      fr: "/fr",
    },
  };
  if (map[itPath]) return map[itPath][lang];
  // Dynamic slug (località/spiagge): keep IT slug, prefix lang for non-IT
  return lang === "it" ? itPath : `/${lang}${itPath}`;
}

/** Sostituisce placeholder {link:key:label} negli HTML body con anchor. */
function renderHtml(html: string, lang: Locale): string {
  const linkMap: Record<string, string> = {
    porto: "/noleggio-auto-porto-olbia",
    costa: "/noleggio-auto-costa-smeralda",
    senzacc: "/noleggio-auto-senza-carta-di-credito-olbia",
    "porto-cervo": "/noleggio-auto-porto-cervo",
    "baja-sardinia": "/noleggio-auto-baja-sardinia",
    "san-teodoro": "/noleggio-auto-san-teodoro",
  };
  return html.replace(/\{link:([^:]+):([^}]+)\}/g, (_m, key: string, label: string) => {
    const itPath = linkMap[key] ?? `/${key}`;
    const href = localizeHref(itPath, lang);
    return `<a href="${href}" class="text-gold underline hover:text-gray-900 dark:hover:text-white transition-colors">${label}</a>`;
  });
}

const NoleggioAeroportoOlbia = ({ lang = "it" }: Props) => {
  const t = TRANSLATIONS[lang];
  const bookHref = localizeHref("/prenotaora", lang);
  const homeHref = localizeHref("/", lang);
  const breadcrumbPath = localizeHref("/noleggio-auto-aeroporto-olbia", lang);
  const icons = [Clock3, Luggage, BellRing, Plane];

  return (
    <div className="bg-gray-50 dark:bg-[#050505] text-foreground selection:bg-gold selection:text-black overflow-x-hidden">
      <SEOHead
        title={t.seo.title}
        description={t.seo.description}
        canonical={`https://www.ksrentsardinia.com${breadcrumbPath}`}
        jsonLd={[aeroportoAutoRentalJsonLd, aeroportoFaqJsonLd, buildBreadcrumb(t.seo.title, breadcrumbPath)]}
      />

      {/* HERO */}
      <section className="relative min-h-[85vh] flex flex-col justify-center pt-32 pb-16 px-4 md:px-12 lg:px-24 overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <img
            src="https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/seo_pages/vehicles-context/audi-rs3-grey-airport.webp"
            alt={t.altRs3Hero}
            className="w-full h-full object-cover opacity-55 scale-105"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/40 to-background" />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-background via-background/95 to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-8 backdrop-blur-xl">
              <Plane className="text-gold w-4 h-4" />
              <span className="text-gold text-[10px] md:text-xs uppercase tracking-[0.4em] font-black">
                {t.hero.eyebrow}
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-9xl font-display font-black leading-[0.85] tracking-tighter mb-8 italic uppercase text-gray-900 dark:text-white">
              {t.hero.title1} <br />
              <span className="text-gold">{t.hero.title2}</span>
            </h1>

            <p className="text-lg md:text-2xl text-gray-600 dark:text-white/80 font-light max-w-2xl mb-12 leading-relaxed">
              {t.hero.subtitle1}
              <span className="text-gold font-bold"> {t.hero.subtitleStrong} </span>
              {t.hero.subtitle2}
            </p>

            <Link
              to={bookHref}
              className="inline-flex items-center gap-4 bg-gold text-white px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 shadow-[0_0_50px_rgba(212,175,55,0.4)]"
            >
              {t.hero.cta} <ArrowRight size={22} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* INTRO TEXT */}
      <section className="py-20 px-4 md:px-12 lg:px-24 bg-white dark:bg-[#050505] shadow-md dark:shadow-none border-b-[3px] border-b-gold/40 dark:border-b-transparent">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <span className="block text-gold font-bold tracking-[0.3em] uppercase text-xs mb-6">{t.intro.eyebrow}</span>
            <h2 className="text-3xl md:text-5xl font-display font-black mb-8 italic uppercase tracking-tighter text-gray-900 dark:text-white">
              {t.intro.heading1} <span className="text-gold">{t.intro.heading2}</span>
            </h2>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-700 dark:text-white/90 mb-8">
              {t.intro.lead1} <strong className="text-gold">{t.intro.leadStrong}</strong>
              {t.intro.lead2}
            </p>
            <div className="h-px w-24 bg-gold mb-8 mx-auto md:mx-0" />
            <p
              className="text-gray-600 dark:text-white/60 text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: renderHtml(t.intro.bodyHtml, lang) }}
            />
          </motion.div>
        </div>
      </section>

      {/* SPOTLIGHT - AUDI RS3 VERDE */}
      <section className="py-24 relative px-4 md:px-12 lg:px-24 bg-gray-50 dark:bg-[#050505] overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gold/10 blur-[120px] rounded-full scale-150 animate-pulse" />
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              src="https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/Trasparenza/ksrent-audirs3supercar-verde.png"
              className="relative z-10 w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
              alt={t.altRs3Spotlight}
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="text-gold w-5 h-5" />
              <span className="text-gold font-bold tracking-widest text-xs uppercase italic">{t.spotlight.eyebrow}</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 italic uppercase tracking-tighter text-gray-900 dark:text-white">
              {t.spotlight.title1} <br />
              <span className="text-gold">{t.spotlight.title2}</span>
            </h2>
            <p className="text-gray-600 dark:text-white/50 text-lg mb-10 italic font-light">{t.spotlight.quote}</p>
            <div className="flex gap-8 mb-10">
              <div className="text-center">
                <p className="text-2xl font-black text-gray-900 dark:text-white italic">{t.spotlight.stat1Value}</p>
                <p className="text-[10px] uppercase text-gold tracking-widest font-bold">{t.spotlight.stat1Label}</p>
              </div>
              <div className="text-center border-x border-gray-200 dark:border-white/10 px-8">
                <p className="text-2xl font-black text-gray-900 dark:text-white italic">{t.spotlight.stat2Value}</p>
                <p className="text-[10px] uppercase text-gold tracking-widest font-bold">{t.spotlight.stat2Label}</p>
              </div>
            </div>
            <Link
              to={bookHref}
              className="inline-flex items-center gap-3 text-gray-900 dark:text-white font-black uppercase tracking-widest text-sm group"
            >
              {t.spotlight.cta} <ArrowRight className="group-hover:translate-x-2 transition-transform text-gold" />
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
        cards={t.services.cards.map((c, i) => ({ icon: icons[i], title: c.title, desc: c.desc }))}
      />

      {/* FAQ */}
      <section className="py-24 px-4 md:px-12 lg:px-24 bg-gray-50 dark:bg-[#050505]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="block text-gold font-bold tracking-[0.4em] uppercase text-[10px] mb-4 italic">{t.faq.eyebrow}</span>
            <h2 className="font-display text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-gray-900 dark:text-white">
              {t.faq.title1} <span className="text-gold">{t.faq.title2}</span>
            </h2>
          </div>

          <div className="space-y-4">
            {t.faq.items.map((f, i) => (
              <details
                key={i}
                className={`group rounded-2xl md:rounded-[1.5rem] transition-all ${
                  f.gold
                    ? "bg-gold/10 border border-gold/30 shadow-[0_0_20px_rgba(212,175,55,0.1)]"
                    : "bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10"
                }`}
              >
                <summary
                  className={`px-8 py-6 cursor-pointer list-none text-left font-bold italic uppercase tracking-tight flex items-center justify-between ${
                    f.gold ? "text-gold" : "text-gray-900 dark:text-white"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {f.gold && <Star className="w-4 h-4 fill-gold text-gold" />}
                    {f.q}
                  </div>
                  <span className="text-gold transition-transform group-open:rotate-90 shrink-0 ml-4">›</span>
                </summary>
                <div className="px-10 pt-2 pb-8 text-gray-600 dark:text-white/50 leading-relaxed font-light text-base md:text-lg italic">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SEO RICH TEXT */}
      <section className="py-24 px-4 md:px-12 lg:px-24 bg-white dark:bg-[#050505] shadow-md dark:shadow-none border-b-[3px] border-b-gold/40 dark:border-b-transparent">
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

      {/* SEO KEYWORD SECTION — editorial */}
      <section className="py-20 px-4 md:px-12">
        <div className="editorial mx-auto">
          <h2>{t.keyword.heading}</h2>
          <p dangerouslySetInnerHTML={{ __html: t.keyword.pHtml1 }} />
          <p dangerouslySetInnerHTML={{ __html: t.keyword.pHtml2 }} />
        </div>
      </section>

      {/* FINAL CTA su sfondo ORO */}
      <section className="relative py-24 md:py-28 px-4 text-center bg-gold text-background overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07] mix-blend-overlay pointer-events-none bg-[radial-gradient(circle_at_20%_20%,#000_2px,transparent_2px),radial-gradient(circle_at_60%_70%,#000_1px,transparent_1px)] bg-[length:32px_32px,18px_18px]"></div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="relative max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-6xl text-background font-medium mb-8 leading-tight">
            {t.finalCta.title1} <br />
            <span className="opacity-90">{t.finalCta.title2}</span>
          </h2>
          <Link
            to={bookHref}
            className="inline-flex items-center gap-3 bg-background text-foreground px-10 py-4 rounded-full font-semibold tracking-wide text-sm md:text-base hover:scale-105 transition-transform shadow-xl ring-1 ring-background/20"
          >
            {t.finalCta.cta} <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-background/70 text-sm mt-6 font-light">
            <Link to={homeHref} className="text-background hover:underline underline-offset-4 font-semibold">
              {t.finalCta.footerLinkText}
            </Link>
            {t.finalCta.footerTail}
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default NoleggioAeroportoOlbia;

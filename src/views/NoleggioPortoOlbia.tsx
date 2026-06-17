import { Link } from "@/lib/router-shim";
import { motion } from "framer-motion";
import { ArrowRight, Ship, Anchor, Briefcase, Compass, Star, Zap } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { portoFaqJsonLd, portoAutoRentalJsonLd, buildBreadcrumb } from "@/lib/jsonLd";
import ServiceCardGrid from "@/components/ServiceCardGrid";
import type { Locale } from "@/lib/i18n";

interface Props {
  lang?: Locale;
}

const TRANSLATIONS = {
  it: {
    seo: {
      title: "Noleggio Auto Porto Olbia Isola Bianca | KS Rent",
      description:
        "Arrivi in traghetto a Olbia? Noleggia supercar, SUV o moto al Porto Isola Bianca. Sede allo sbarco, zero attese. Prenota online con KS Rent.",
    },
    hero: {
      eyebrow: "Porto Isola Bianca Olbia",
      title1: "Noleggio Auto",
      title2: "Porto di Olbia",
      subtitle1: "Dimentica code e navette. Con KS Rent la tua auto premium ti aspetta",
      subtitleStrong: "esattamente allo sbarco",
      subtitle2: "del traghetto.",
      cta: "Verifica Disponibilità",
    },
    intro: {
      eyebrow: "La tua Chiave per la Sardegna",
      heading1: "Autonoleggio al Porto",
      heading2: "Isola Bianca di Olbia",
      lead1: "Benvenuto al Porto di Olbia. KS Rent è l'autonoleggio che ti libera dalle attese. Sede operativa in",
      leadStrong: "Viale Isola Bianca 38",
      lead2: ", a pochi metri dai traghetti.",
      bodyHtml:
        "Offriamo un'esperienza premium con consegna del veicolo immediata al tuo sbarco dal molo Isola Bianca. Risparmia tempo prenotando in <strong>totale autonomia dal nostro sito</strong>: gestiamo depositi cauzionali flessibili e accettiamo pagamenti <strong>senza obbligo di carta di credito</strong>. La nostra flotta al porto include supercar, SUV, sportive, moto e quad — tutto ciò che serve per vivere la Costa Smeralda dal primo istante. Offriamo anche consegna all' {link:aeroporto:Aeroporto di Olbia} e in tutta la {link:costa:Costa Smeralda}. Scopri anche il nostro {link:senzacc:noleggio senza carta di credito}.",
    },
    spotlight: {
      eyebrow: "Porto Spotlight",
      title1: "Noleggio Mercedes",
      title2: "Classe A Porto Olbia",
      quote:
        "\"L'eleganza incontra la praticità. La compagna perfetta per esplorare le calette più nascoste della Costa Smeralda, pronta al tuo sbarco.\"",
      stat1Value: "Sport",
      stat1Label: "Driving Mode",
      stat2Value: "Premium",
      stat2Label: "Interior",
      cta: "Scopri la flotta",
    },
    services: {
      eyebrow: "Ferry Welcome",
      heading1: "Servizi pensati per chi ",
      heading2: "sbarca a Olbia",
      cards: [
        {
          title: "Sede a 50 metri dalla nave",
          desc: "Viale Isola Bianca 38: appena sbarchi dal traghetto, l'ufficio è in vista. Niente shuttle, niente attese in coda all'autostrada.",
        },
        {
          title: "Deposito bagagli prima del check-in",
          desc: "Sbarcato la mattina ma il check-in in hotel è alle 15:00? Lasciamo i bagagli in sede mentre giri Olbia con l'auto.",
        },
        {
          title: "Coordinamento con tutte le compagnie",
          desc: "Tirrenia, Moby, GNV, Grimaldi e Corsica Sardinia: monitoriamo il tuo arrivo e ti aspettiamo all'orario reale dello sbarco.",
        },
        {
          title: "Itinerari da nord o da sud",
          desc: "Ti consigliamo la rotta migliore in base alla tua destinazione: Costa Smeralda da nord, San Teodoro e Budoni da sud.",
        },
      ],
    },
    faq: {
      eyebrow: "Concierge Desk Porto",
      title1: "Domande Frequenti",
      title2: "Noleggio Porto Olbia",
      items: [
        {
          q: "Dove ritirare l'auto al Porto di Olbia?",
          a: "La nostra sede operativa si trova in Viale Isola Bianca 38, esattamente al Porto di Olbia Isola Bianca. Appena sbarchi dal traghetto, il tuo veicolo sarà pronto ad aspettarti a pochi metri. Nessuna navetta, nessuna attesa, nessuna perdita di tempo.",
          gold: true,
        },
        {
          q: "Serve la carta di credito per noleggiare?",
          a: "No, KS Rent non impone l'obbligo di carta di credito tradizionale. Accettiamo carte prepagate, bancomat, carte di debito e contanti. Il deposito cauzionale è flessibile e varia in base al veicolo scelto.",
          gold: true,
        },
        {
          q: "Come invio la richiesta di noleggio?",
          a: "Dalla pagina di prenotazione scegli il veicolo, le date e il punto di ritiro o consegna, poi invii la richiesta su WhatsApp con un messaggio già pronto. Ti rispondiamo di persona per confermare disponibilità, coperture e dettagli del ritiro al porto. Niente pagamenti anticipati online.",
          gold: false,
        },
        {
          q: "Come funziona il deposito cauzionale?",
          a: "Il deposito cauzionale viene gestito in modo chiaro e trasparente al momento del ritiro. L'importo, proporzionato alla categoria del veicolo scelto, serve a garantire la cura della nostra flotta premium.",
          gold: false,
        },
        {
          q: "Quali veicoli sono disponibili al Porto?",
          a: "Al Porto di Olbia offriamo l'intera gamma KS Rent: auto sportive, supercar, SUV premium, moto e quad. Ogni veicolo è perfetto per iniziare la tua avventura in Costa Smeralda dal momento del tuo sbarco.",
          gold: false,
        },
      ],
    },
    rich: {
      eyebrow: "Guida Completa",
      title1: "Noleggio Auto al Porto",
      title2: "Isola Bianca di Olbia",
      pHtml: [
        "Il <strong>Porto di Olbia Isola Bianca</strong> è il principale porto passeggeri della Sardegna nord-orientale, con collegamenti quotidiani verso Genova, Livorno, Civitavecchia e Piombino operati dalle compagnie Moby, Tirrenia e GNV. Il molo Isola Bianca si trova a pochi minuti dal centro di Olbia e rappresenta il punto di accesso privilegiato per chi arriva in Sardegna in traghetto con l'intenzione di esplorare la Costa Smeralda, la Gallura e tutto il nord-est dell'isola.",
        "<strong>Il traffico estivo a Olbia</strong> può essere intenso, soprattutto nei weekend di luglio e agosto quando migliaia di turisti sbarcano contemporaneamente. I traghetti attraccano tipicamente al mattino presto o nel tardo pomeriggio, creando lunghe code sulla viabilità locale. Per questo motivo, avere un'auto già pronta allo sbarco è un vantaggio enorme: mentre gli altri passeggeri cercano un taxi o aspettano i bus navetta dei grandi noleggiatori, tu sarai già in viaggio verso la tua destinazione.",
        "La nostra <strong>sede operativa in Viale Isola Bianca 38</strong> è letteralmente a pochi metri dallo sbarco traghetti. Non dovrai prendere navette, non dovrai aspettare in fila: scendi dal traghetto, cammini per 2 minuti ed entri nel nostro ufficio. La documentazione viene preparata in anticipo grazie alla prenotazione online, quindi il ritiro effettivo richiede meno di 5 minuti. Dal porto, puoi imboccare immediatamente la superstrada SS 131 DCN verso sud (Nuoro, Cagliari) oppure la SS 125 verso nord lungo la litoranea che costeggia le spiagge più belle della Sardegna: {link:porto-istana:Porto Istana}, {link:murta-maria:Murta Maria}, {link:porto-san-paolo:Porto San Paolo}, fino a {link:san-teodoro:San Teodoro} e {link:budoni:Budoni}.",
        "Noleggiare un'auto al porto di Olbia con KS Rent significa anche poter scegliere tra <strong>supercar, SUV premium, moto e quad</strong> senza l'obbligo della carta di credito. La nostra politica di pagamento flessibile — accettiamo prepagate, bancomat e contanti — è nata per liberarti dai vincoli imposti dai grandi autonoleggi. Il deposito cauzionale è proporzionato al veicolo e sempre comunicato in fase di prenotazione, senza sorprese. Se preferisci, offriamo anche consegna all' {link:aeroporto:Aeroporto di Olbia} e in tutta la {link:costa:Costa Smeralda}, oppure scopri il nostro {link:senzacc:noleggio auto senza carta di credito}.",
      ],
    },
    finalCta: {
      title1: "SBARCA E",
      title2: "ACCENDI IL SOGNO",
      cta: "Scegli il Veicolo",
      footerLinkText: "Noleggio auto Olbia",
      footerTail:
        " — KS Rent Sardinia, autonoleggio con consegna a domicilio in tutta la Gallura e Costa Smeralda.",
    },
    altMercHero: "Noleggio Auto Lusso Porto Olbia Isola Bianca",
    altMercSpotlight: "Noleggio Mercedes Classe A Olbia Porto KS Rent",
  },
  en: {
    seo: {
      title: "Car Hire Olbia Port Isola Bianca | KS Rent",
      description:
        "Arriving in Olbia by ferry? Hire a supercar, SUV or motorbike at Isola Bianca Port. Office right at the ferry terminal — no waiting. Book online with KS Rent.",
    },
    hero: {
      eyebrow: "Olbia Isola Bianca Port",
      title1: "Car Hire",
      title2: "Olbia Ferry Port",
      subtitle1: "Forget queues and shuttles. With KS Rent your premium car is waiting",
      subtitleStrong: "right at the ferry gangway",
      subtitle2: ".",
      cta: "Check Availability",
    },
    intro: {
      eyebrow: "Your Key to Sardinia",
      heading1: "Car Hire at",
      heading2: "Olbia Isola Bianca Port",
      lead1: "Welcome to the Port of Olbia. KS Rent is the car hire that frees you from waiting. Office at",
      leadStrong: "Viale Isola Bianca 38",
      lead2: ", a few metres from the ferries.",
      bodyHtml:
        "We offer a premium experience with vehicle delivery the moment you step off the Isola Bianca quay. Save time by booking in <strong>full autonomy from our website</strong>: we manage flexible security deposits and accept payments <strong>without requiring a credit card</strong>. Our fleet at the port includes supercars, SUVs, sports cars, motorbikes and quads — everything you need to live the Costa Smeralda from the very first moment. We also offer delivery to {link:aeroporto:Olbia Airport} and across the whole {link:costa:Costa Smeralda}. Discover our {link:senzacc:no credit card car hire} too.",
    },
    spotlight: {
      eyebrow: "Port Spotlight",
      title1: "Mercedes A-Class Hire",
      title2: "Olbia Port",
      quote:
        "\"Elegance meets practicality. The perfect partner to explore the most hidden coves of the Costa Smeralda, ready at your gangway.\"",
      stat1Value: "Sport",
      stat1Label: "Driving Mode",
      stat2Value: "Premium",
      stat2Label: "Interior",
      cta: "Discover the fleet",
    },
    services: {
      eyebrow: "Ferry Welcome",
      heading1: "Services designed for those ",
      heading2: "arriving in Olbia by ferry",
      cards: [
        {
          title: "Office 50 metres from the ship",
          desc: "Viale Isola Bianca 38: as soon as you step off the ferry the office is in sight. No shuttle, no queues onto the dual carriageway.",
        },
        {
          title: "Luggage storage before check-in",
          desc: "Arrived in the morning but hotel check-in is at 15:00? We keep the bags at the office while you tour Olbia with the car.",
        },
        {
          title: "Coordination with every line",
          desc: "Tirrenia, Moby, GNV, Grimaldi and Corsica Sardinia: we monitor your arrival and meet you at the actual disembarkation time.",
        },
        {
          title: "Routes from north or south",
          desc: "We suggest the best route based on your destination: Costa Smeralda heading north, San Teodoro and Budoni heading south.",
        },
      ],
    },
    faq: {
      eyebrow: "Port Concierge Desk",
      title1: "Frequently Asked Questions",
      title2: "Olbia Port Car Hire",
      items: [
        {
          q: "Where do I pick up the car at the Port of Olbia?",
          a: "Our office is at Viale Isola Bianca 38, right at the Olbia Isola Bianca Port. As soon as you step off the ferry, your vehicle will be ready a few metres away. No shuttle, no waiting, no wasted time.",
          gold: true,
        },
        {
          q: "Do I need a credit card to hire?",
          a: "No, KS Rent does not require a traditional credit card. We accept prepaid cards, debit cards and cash. The security deposit is flexible and varies depending on the vehicle chosen.",
          gold: true,
        },
        {
          q: "How do I send my rental request?",
          a: "On the booking page choose the vehicle, the dates and the pickup or delivery point, then send your request on WhatsApp with a ready-made message. We reply personally to confirm availability, cover and the details of pick-up at the port. No online prepayment.",
          gold: false,
        },
        {
          q: "How does the security deposit work?",
          a: "The security deposit is handled clearly and transparently at pick-up. The amount, proportional to the vehicle category, is there to guarantee the care of our premium fleet.",
          gold: false,
        },
        {
          q: "Which vehicles are available at the Port?",
          a: "At the Port of Olbia we offer the full KS Rent range: sports cars, supercars, premium SUVs, motorbikes and quads. Every vehicle is the right choice to start your Costa Smeralda adventure the moment you step ashore.",
          gold: false,
        },
      ],
    },
    rich: {
      eyebrow: "Complete Guide",
      title1: "Car Hire at",
      title2: "Olbia Isola Bianca Port",
      pHtml: [
        "The <strong>Olbia Isola Bianca Port</strong> is the main passenger port of north-eastern Sardinia, with daily connections to Genoa, Livorno, Civitavecchia and Piombino operated by Moby, Tirrenia and GNV. The Isola Bianca quay is a few minutes from the centre of Olbia and is the privileged gateway for those arriving in Sardinia by ferry to explore the Costa Smeralda, Gallura and the whole north-east of the island.",
        "<strong>Summer traffic in Olbia</strong> can be heavy, especially on July and August weekends when thousands of tourists disembark at the same time. Ferries typically dock early in the morning or late in the afternoon, creating long queues on the local roads. That's why having a car ready at disembarkation is a huge advantage: while the other passengers look for a taxi or wait for the shuttle buses of the big rental companies, you'll already be on the way to your destination.",
        "Our <strong>office at Viale Isola Bianca 38</strong> is literally a few metres from the ferry disembarkation. You won't need a shuttle, you won't queue: step off the ferry, walk for 2 minutes and you're in our office. Paperwork is prepared in advance thanks to the online booking, so the actual pick-up takes under 5 minutes. From the port, you can immediately take the SS 131 DCN dual carriageway south (Nuoro, Cagliari) or the SS 125 north along the coast road that runs past the most beautiful beaches of Sardinia: {link:porto-istana:Porto Istana}, {link:murta-maria:Murta Maria}, {link:porto-san-paolo:Porto San Paolo}, all the way to {link:san-teodoro:San Teodoro} and {link:budoni:Budoni}.",
        "Hiring a car at the Port of Olbia with KS Rent also means choosing between <strong>supercars, premium SUVs, motorbikes and quads</strong> without needing a credit card. Our flexible payment policy — we accept prepaid cards, debit cards and cash — was born to free you from the constraints imposed by the big rental brands. The security deposit is proportional to the vehicle and is always communicated at booking, with no surprises. If you prefer, we also offer delivery at {link:aeroporto:Olbia Airport} and across the whole {link:costa:Costa Smeralda}, or discover our {link:senzacc:no credit card car hire}.",
      ],
    },
    finalCta: {
      title1: "STEP ASHORE AND",
      title2: "START THE DREAM",
      cta: "Choose the Vehicle",
      footerLinkText: "Car hire Olbia",
      footerTail:
        " — KS Rent Sardinia, car hire with home delivery throughout Gallura and the Costa Smeralda.",
    },
    altMercHero: "Luxury car hire Olbia Isola Bianca Port",
    altMercSpotlight: "KS Rent Mercedes A-Class hire Olbia Port",
  },
  de: {
    seo: {
      title: "Autovermietung Hafen Olbia Isola Bianca | KS Rent",
      description:
        "Kommen Sie mit der Fähre nach Olbia? Mieten Sie Supersportwagen, SUVs oder Motorräder am Hafen Isola Bianca. Sitz direkt bei der Ankunft, keine Wartezeit. Online buchen mit KS Rent.",
    },
    hero: {
      eyebrow: "Hafen Isola Bianca Olbia",
      title1: "Autovermietung",
      title2: "Hafen Olbia",
      subtitle1: "Vergessen Sie Schlangen und Shuttles. Bei KS Rent wartet Ihr Premium-Auto",
      subtitleStrong: "direkt an der Fährbrücke",
      subtitle2: "auf Sie.",
      cta: "Verfügbarkeit prüfen",
    },
    intro: {
      eyebrow: "Ihr Schlüssel zu Sardinien",
      heading1: "Autovermietung am Hafen",
      heading2: "Isola Bianca Olbia",
      lead1: "Willkommen am Hafen Olbia. KS Rent ist die Autovermietung ohne Wartezeiten. Büro in",
      leadStrong: "Viale Isola Bianca 38",
      lead2: ", wenige Meter von den Fähren entfernt.",
      bodyHtml:
        "Wir bieten ein Premium-Erlebnis mit sofortiger Fahrzeugübergabe an der Mole Isola Bianca. Sparen Sie Zeit, indem Sie <strong>vollständig autonom über unsere Website buchen</strong>: Wir handhaben flexible Kautionen und akzeptieren Zahlungen <strong>ohne Kreditkartenpflicht</strong>. Unser Fuhrpark am Hafen umfasst Supersportwagen, SUVs, Sportwagen, Motorräder und Quads — alles, was Sie brauchen, um die Costa Smeralda vom ersten Moment an zu erleben. Wir bieten auch Lieferung am {link:aeroporto:Flughafen Olbia} und in der gesamten {link:costa:Costa Smeralda}. Entdecken Sie auch unsere {link:senzacc:Vermietung ohne Kreditkarte}.",
    },
    spotlight: {
      eyebrow: "Hafen Spotlight",
      title1: "Mercedes A-Klasse mieten",
      title2: "Hafen Olbia",
      quote:
        "\"Eleganz trifft Praktikabilität. Der ideale Begleiter, um die versteckten Buchten der Costa Smeralda zu erkunden — bereit, sobald Sie an Land gehen.\"",
      stat1Value: "Sport",
      stat1Label: "Driving Mode",
      stat2Value: "Premium",
      stat2Label: "Interior",
      cta: "Fuhrpark entdecken",
    },
    services: {
      eyebrow: "Ferry Welcome",
      heading1: "Services für alle, die ",
      heading2: "in Olbia anlegen",
      cards: [
        {
          title: "Büro 50 Meter vom Schiff",
          desc: "Viale Isola Bianca 38: Sobald Sie von der Fähre kommen, ist das Büro in Sicht. Kein Shuttle, keine Schlangen vor der Schnellstraße.",
        },
        {
          title: "Gepäckaufbewahrung vor dem Check-in",
          desc: "Morgens angekommen, Hotel-Check-in aber erst um 15:00 Uhr? Wir verwahren das Gepäck im Büro, während Sie mit dem Auto Olbia erkunden.",
        },
        {
          title: "Koordination mit allen Reedereien",
          desc: "Tirrenia, Moby, GNV, Grimaldi und Corsica Sardinia: Wir verfolgen Ihre Ankunft und erwarten Sie zur tatsächlichen Anlegezeit.",
        },
        {
          title: "Routen nach Norden oder Süden",
          desc: "Wir empfehlen die beste Strecke je nach Ziel: Costa Smeralda im Norden, San Teodoro und Budoni im Süden.",
        },
      ],
    },
    faq: {
      eyebrow: "Concierge Desk Hafen",
      title1: "Häufige Fragen",
      title2: "Vermietung Hafen Olbia",
      items: [
        {
          q: "Wo hole ich das Auto am Hafen Olbia ab?",
          a: "Unser Büro liegt in Viale Isola Bianca 38, direkt am Hafen Olbia Isola Bianca. Sobald Sie von der Fähre kommen, steht Ihr Fahrzeug nur wenige Meter entfernt bereit. Kein Shuttle, keine Wartezeit, kein Zeitverlust.",
          gold: true,
        },
        {
          q: "Brauche ich eine Kreditkarte?",
          a: "Nein, KS Rent verlangt keine herkömmliche Kreditkarte. Wir akzeptieren Prepaid-Karten, Bankkarten und Bargeld. Die Kaution ist flexibel und richtet sich nach dem gewählten Fahrzeug.",
          gold: true,
        },
        {
          q: "Wie sende ich meine Mietanfrage?",
          a: "Auf der Buchungsseite wählen Sie das Fahrzeug, die Daten und den Abhol- oder Lieferort und senden dann Ihre Anfrage über WhatsApp mit einer fertigen Nachricht. Wir antworten persönlich, um Verfügbarkeit, Schutz und die Details der Abholung am Hafen zu bestätigen. Keine Online-Vorauszahlung.",
          gold: false,
        },
        {
          q: "Wie funktioniert die Kaution?",
          a: "Die Kaution wird bei der Übergabe klar und transparent geregelt. Der Betrag richtet sich nach der Fahrzeugkategorie und garantiert die Pflege unseres Premium-Fuhrparks.",
          gold: false,
        },
        {
          q: "Welche Fahrzeuge stehen am Hafen zur Verfügung?",
          a: "Am Hafen Olbia bieten wir die gesamte KS-Rent-Palette: Sportwagen, Supersportwagen, Premium-SUVs, Motorräder und Quads. Jedes Fahrzeug ist ideal, um Ihr Costa-Smeralda-Abenteuer ab dem Moment der Anlandung zu starten.",
          gold: false,
        },
      ],
    },
    rich: {
      eyebrow: "Vollständiger Leitfaden",
      title1: "Autovermietung am Hafen",
      title2: "Isola Bianca Olbia",
      pHtml: [
        "Der <strong>Hafen Olbia Isola Bianca</strong> ist der wichtigste Passagierhafen Nordost-Sardiniens, mit täglichen Verbindungen nach Genua, Livorno, Civitavecchia und Piombino, betrieben von Moby, Tirrenia und GNV. Die Mole Isola Bianca liegt nur wenige Minuten vom Zentrum Olbias entfernt und ist der bevorzugte Zugang für alle, die mit der Fähre nach Sardinien kommen, um die Costa Smeralda, die Gallura und den gesamten Nordosten der Insel zu erkunden.",
        "<strong>Der sommerliche Verkehr in Olbia</strong> kann intensiv sein, besonders an Wochenenden im Juli und August, wenn Tausende Touristen gleichzeitig anlegen. Die Fähren legen typischerweise früh am Morgen oder spät am Nachmittag an und sorgen für lange Schlangen auf den lokalen Straßen. Deshalb ist es ein riesiger Vorteil, ein Auto bereits an der Anlegestelle bereit zu haben: Während die anderen Reisenden auf ein Taxi oder den Shuttle-Bus der großen Anbieter warten, sind Sie bereits unterwegs.",
        "Unser <strong>Büro in Viale Isola Bianca 38</strong> liegt buchstäblich wenige Meter von der Fähranlegestelle entfernt. Sie brauchen keinen Shuttle und müssen nicht in der Schlange stehen: Sie verlassen die Fähre, gehen 2 Minuten und betreten unser Büro. Die Unterlagen werden dank Online-Buchung im Voraus vorbereitet, sodass die eigentliche Übernahme weniger als 5 Minuten dauert. Vom Hafen aus können Sie sofort die SS 131 DCN nach Süden (Nuoro, Cagliari) oder die SS 125 nach Norden entlang der Küstenstraße einschlagen, die an den schönsten Stränden Sardiniens vorbeiführt: {link:porto-istana:Porto Istana}, {link:murta-maria:Murta Maria}, {link:porto-san-paolo:Porto San Paolo}, bis {link:san-teodoro:San Teodoro} und {link:budoni:Budoni}.",
        "Ein Auto am Hafen Olbia mit KS Rent zu mieten bedeutet auch, zwischen <strong>Supersportwagen, Premium-SUVs, Motorrädern und Quads</strong> wählen zu können — ohne Kreditkartenpflicht. Unsere flexible Zahlungspolitik — wir akzeptieren Prepaid-Karten, Bankkarten und Bargeld — wurde geschaffen, um Sie von den Beschränkungen der großen Anbieter zu befreien. Die Kaution ist fahrzeugproportional und wird stets bei der Buchung mitgeteilt, ohne Überraschungen. Wenn Sie möchten, bieten wir auch Übergabe am {link:aeroporto:Flughafen Olbia} und in der gesamten {link:costa:Costa Smeralda}, oder entdecken Sie unsere {link:senzacc:Autovermietung ohne Kreditkarte}.",
      ],
    },
    finalCta: {
      title1: "ANLEGEN UND",
      title2: "DEN TRAUM STARTEN",
      cta: "Fahrzeug wählen",
      footerLinkText: "Autovermietung Olbia",
      footerTail:
        " — KS Rent Sardinia, Autovermietung mit Lieferung an die Haustür in der gesamten Gallura und Costa Smeralda.",
    },
    altMercHero: "Luxus-Mietwagen Hafen Olbia Isola Bianca",
    altMercSpotlight: "KS Rent Mercedes A-Klasse Hafen Olbia",
  },
  fr: {
    seo: {
      title: "Location de Voiture Port d'Olbia Isola Bianca | KS Rent",
      description:
        "Vous arrivez en ferry à Olbia ? Louez supercar, SUV ou moto au Port Isola Bianca. Bureau au débarquement, sans attente. Réservez en ligne avec KS Rent.",
    },
    hero: {
      eyebrow: "Port Isola Bianca Olbia",
      title1: "Location de Voiture",
      title2: "Port d'Olbia",
      subtitle1: "Oubliez les files et les navettes. Avec KS Rent, votre voiture premium vous attend",
      subtitleStrong: "exactement au débarquement",
      subtitle2: "du ferry.",
      cta: "Vérifier la disponibilité",
    },
    intro: {
      eyebrow: "Votre Clé pour la Sardaigne",
      heading1: "Location au Port",
      heading2: "Isola Bianca d'Olbia",
      lead1: "Bienvenue au Port d'Olbia. KS Rent, c'est la location qui vous libère de l'attente. Bureau en",
      leadStrong: "Viale Isola Bianca 38",
      lead2: ", à quelques mètres des ferries.",
      bodyHtml:
        "Nous proposons une expérience premium avec livraison du véhicule dès le débarquement au môle Isola Bianca. Gagnez du temps en réservant en <strong>toute autonomie depuis notre site</strong> : nous gérons des dépôts de garantie flexibles et acceptons les paiements <strong>sans obligation de carte de crédit</strong>. Notre flotte au port comprend supercars, SUV, sportives, motos et quads — tout ce qu'il faut pour vivre la Costa Smeralda dès le premier instant. Nous proposons aussi la livraison à l'{link:aeroporto:Aéroport d'Olbia} et dans toute la {link:costa:Costa Smeralda}. Découvrez également notre {link:senzacc:location sans carte de crédit}.",
    },
    spotlight: {
      eyebrow: "Port Spotlight",
      title1: "Location Mercedes",
      title2: "Classe A Port d'Olbia",
      quote:
        "« L'élégance rencontre la praticité. La compagne idéale pour explorer les criques les plus cachées de la Costa Smeralda, prête dès votre débarquement. »",
      stat1Value: "Sport",
      stat1Label: "Driving Mode",
      stat2Value: "Premium",
      stat2Label: "Interior",
      cta: "Découvrir la flotte",
    },
    services: {
      eyebrow: "Ferry Welcome",
      heading1: "Des services pensés pour ceux qui ",
      heading2: "débarquent à Olbia",
      cards: [
        {
          title: "Bureau à 50 mètres du navire",
          desc: "Viale Isola Bianca 38 : dès la sortie du ferry, le bureau est en vue. Pas de shuttle, pas de file vers la voie rapide.",
        },
        {
          title: "Consigne avant le check-in",
          desc: "Vous débarquez le matin mais le check-in à l'hôtel est à 15h00 ? Nous gardons les bagages au bureau pendant que vous visitez Olbia avec la voiture.",
        },
        {
          title: "Coordination avec toutes les compagnies",
          desc: "Tirrenia, Moby, GNV, Grimaldi et Corsica Sardinia : nous suivons votre arrivée et vous attendons à l'heure réelle du débarquement.",
        },
        {
          title: "Itinéraires nord ou sud",
          desc: "Nous vous conseillons la meilleure route selon votre destination : Costa Smeralda au nord, San Teodoro et Budoni au sud.",
        },
      ],
    },
    faq: {
      eyebrow: "Concierge Desk Port",
      title1: "Questions Fréquentes",
      title2: "Location Port d'Olbia",
      items: [
        {
          q: "Où retirer la voiture au Port d'Olbia ?",
          a: "Notre bureau se trouve en Viale Isola Bianca 38, exactement au Port d'Olbia Isola Bianca. Dès la descente du ferry, votre véhicule vous attend à quelques mètres. Pas de navette, pas d'attente, pas de perte de temps.",
          gold: true,
        },
        {
          q: "Faut-il une carte de crédit pour louer ?",
          a: "Non, KS Rent n'impose pas de carte de crédit traditionnelle. Nous acceptons les prépayées, les cartes de débit et les espèces. Le dépôt de garantie est flexible et varie selon le véhicule choisi.",
          gold: true,
        },
        {
          q: "Comment envoyer ma demande de location ?",
          a: "Sur la page de réservation, choisissez le véhicule, les dates et le lieu de prise en charge ou de livraison, puis envoyez votre demande sur WhatsApp avec un message prêt à l'emploi. Nous répondons en personne pour confirmer la disponibilité, les garanties et les détails du retrait au port. Aucun prépaiement en ligne.",
          gold: false,
        },
        {
          q: "Comment fonctionne le dépôt de garantie ?",
          a: "Le dépôt est géré de manière claire et transparente au moment du retrait. Le montant, proportionnel à la catégorie du véhicule, garantit le soin de notre flotte premium.",
          gold: false,
        },
        {
          q: "Quels véhicules sont disponibles au Port ?",
          a: "Au Port d'Olbia nous proposons toute la gamme KS Rent : sportives, supercars, SUV premium, motos et quads. Chaque véhicule est parfait pour commencer votre aventure en Costa Smeralda dès le débarquement.",
          gold: false,
        },
      ],
    },
    rich: {
      eyebrow: "Guide Complet",
      title1: "Location de Voiture au Port",
      title2: "Isola Bianca d'Olbia",
      pHtml: [
        "Le <strong>Port d'Olbia Isola Bianca</strong> est le principal port passagers du nord-est de la Sardaigne, avec des liaisons quotidiennes vers Gênes, Livourne, Civitavecchia et Piombino, opérées par Moby, Tirrenia et GNV. Le môle Isola Bianca se trouve à quelques minutes du centre d'Olbia et constitue le point d'accès privilégié pour qui arrive en Sardaigne en ferry afin d'explorer la Costa Smeralda, la Gallura et tout le nord-est de l'île.",
        "<strong>Le trafic estival à Olbia</strong> peut être intense, surtout les week-ends de juillet et août lorsque des milliers de touristes débarquent en même temps. Les ferries accostent généralement tôt le matin ou en fin d'après-midi, créant de longues files sur les routes locales. C'est pourquoi disposer d'une voiture prête au débarquement est un énorme avantage : pendant que les autres passagers cherchent un taxi ou attendent les navettes des grands loueurs, vous serez déjà en route vers votre destination.",
        "Notre <strong>bureau en Viale Isola Bianca 38</strong> se trouve littéralement à quelques mètres du débarquement des ferries. Vous n'aurez pas besoin de navette, vous n'attendrez pas en file : descendez du ferry, marchez 2 minutes et entrez dans notre bureau. Les documents sont préparés à l'avance grâce à la réservation en ligne, le retrait effectif prend donc moins de 5 minutes. Du port, vous pouvez immédiatement emprunter la voie rapide SS 131 DCN vers le sud (Nuoro, Cagliari) ou la SS 125 vers le nord, le long de la côte qui borde les plus belles plages de Sardaigne : {link:porto-istana:Porto Istana}, {link:murta-maria:Murta Maria}, {link:porto-san-paolo:Porto San Paolo}, jusqu'à {link:san-teodoro:San Teodoro} et {link:budoni:Budoni}.",
        "Louer une voiture au port d'Olbia avec KS Rent, c'est aussi pouvoir choisir parmi <strong>supercars, SUV premium, motos et quads</strong> sans obligation de carte de crédit. Notre politique de paiement flexible — nous acceptons prépayées, cartes de débit et espèces — est née pour vous libérer des contraintes des grands loueurs. Le dépôt de garantie est proportionnel au véhicule et toujours communiqué lors de la réservation, sans surprise. Si vous préférez, nous proposons aussi la livraison à l'{link:aeroporto:Aéroport d'Olbia} et dans toute la {link:costa:Costa Smeralda}, ou découvrez notre {link:senzacc:location de voiture sans carte de crédit}.",
      ],
    },
    finalCta: {
      title1: "DÉBARQUEZ ET",
      title2: "ALLUMEZ LE RÊVE",
      cta: "Choisir le véhicule",
      footerLinkText: "Location de voiture Olbia",
      footerTail:
        " — KS Rent Sardinia, location avec livraison à domicile dans toute la Gallura et la Costa Smeralda.",
    },
    altMercHero: "Location voiture luxe Port d'Olbia Isola Bianca",
    altMercSpotlight: "KS Rent location Mercedes Classe A Port d'Olbia",
  },
} as const;

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
    "/": { it: "/", en: "/en", de: "/de", fr: "/fr" },
  };
  if (map[itPath]) return map[itPath][lang];
  return lang === "it" ? itPath : `/${lang}${itPath}`;
}

import DOMPurify from "isomorphic-dompurify";

function renderHtml(html: string, lang: Locale): string {
  const linkMap: Record<string, string> = {
    aeroporto: "/noleggio-auto-aeroporto-olbia",
    costa: "/noleggio-auto-costa-smeralda",
    senzacc: "/noleggio-auto-senza-carta-di-credito-olbia",
    "porto-istana": "/porto-istana",
    "murta-maria": "/noleggio-auto-murta-maria",
    "porto-san-paolo": "/noleggio-auto-porto-san-paolo",
    "san-teodoro": "/noleggio-auto-san-teodoro",
    budoni: "/noleggio-auto-budoni",
  };
  const out = html.replace(/\{link:([^:]+):([^}]+)\}/g, (_m, key: string, label: string) => {
    const itPath = linkMap[key] ?? `/${key}`;
    const href = localizeHref(itPath, lang);
    return `<a href="${href}" class="text-gold underline hover:text-gray-900 dark:hover:text-white transition-colors">${label}</a>`;
  });
  return DOMPurify.sanitize(out, { ADD_ATTR: ["target", "rel"] });
}

const NoleggioPortoOlbia = ({ lang = "it" }: Props) => {
  const t = TRANSLATIONS[lang];
  const bookHref = localizeHref("/prenotaora", lang);
  const homeHref = localizeHref("/", lang);
  const breadcrumbPath = localizeHref("/noleggio-auto-porto-olbia", lang);
  const icons = [Anchor, Briefcase, Ship, Compass];

  return (
    <div className="bg-gray-50 dark:bg-[#050505] text-foreground selection:bg-gold selection:text-black overflow-x-hidden editorial-soft">
      <SEOHead
        title={t.seo.title}
        description={t.seo.description}
        canonical={`https://www.ksrentsardinia.com${breadcrumbPath}`}
        jsonLd={[portoAutoRentalJsonLd, portoFaqJsonLd, buildBreadcrumb(t.seo.title, breadcrumbPath)]}
      />

      {/* HERO */}
      <section className="relative min-h-[85vh] flex flex-col justify-center pt-32 pb-16 px-4 md:px-12 lg:px-24 overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <img
            src="https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/seo_pages/vehicles-context/mercedes-a-olbia-port.webp"
            alt={t.altMercHero}
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
              <Ship className="text-gold w-4 h-4" />
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

      {/* SPOTLIGHT - MERCEDES CLASSE A */}
      <section className="py-24 relative px-4 md:px-12 lg:px-24 bg-gray-50 dark:bg-[#050505] overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gold/10 blur-[120px] rounded-full scale-150 animate-pulse" />
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              src="https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/Trasparenza/ksrent-mercedessupercarclassea180d.png"
              className="relative z-10 w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
              alt={t.altMercSpotlight}
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

export default NoleggioPortoOlbia;

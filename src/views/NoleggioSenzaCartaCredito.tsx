import { Link } from "@/lib/router-shim";
import { motion } from "framer-motion";
import { ArrowRight, CreditCard, ShieldCheck, Banknote, Smartphone, Star, MapPin, Car } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { buildBreadcrumb } from "@/lib/jsonLd";
import type { Locale } from "@/lib/i18n";
import {
  getRelatedServices,
  getTopLocations,
  getCrossSellVehicles,
  INTERNAL_LINK_LABELS,
} from "@/lib/internal-links";

interface Props {
  lang?: Locale;
}

const TRANSLATIONS = {
  it: {
    seo: {
      title: "Noleggio Auto Senza Carta di Credito Olbia | KS Rent",
      description:
        "Noleggia auto a Olbia senza carta di credito. Accettiamo prepagate, bancomat e contanti. Supercar, SUV e moto in Costa Smeralda. Prenota online.",
    },
    hero: {
      eyebrow: "Zero Vincoli — Massima Libertà",
      title1: "Noleggio Auto",
      title2: "Senza Carta di Credito",
      subtitle1: "Con KS Rent noleggi la tua auto a Olbia e in Costa Smeralda",
      subtitleStrong: "senza obbligo di carta di credito",
      subtitle2: ". Accettiamo prepagate, bancomat e contanti.",
      cta: "Prenota Senza Carta di Credito",
    },
    payments: {
      eyebrow: "Pagamenti Flessibili",
      title1: "Come Noleggiare",
      title2: "Senza Carta di Credito a Olbia",
      methods: [
        { title: "Carte Prepagate", desc: "PostePay, Revolut, N26, Hype e tutte le prepagate Visa/Mastercard." },
        { title: "Contanti", desc: "Deposito cauzionale e pagamento in contanti direttamente in sede." },
        { title: "Bancomat / Debito", desc: "Carte di debito di qualsiasi istituto bancario italiano o estero." },
        { title: "Bonifico Istantaneo", desc: "Pagamento rapido tramite bonifico bancario istantaneo." },
      ],
    },
    how: {
      eyebrow: "Come Funziona",
      title1: "Noleggio Auto Olbia",
      title2: "in 4 Step Semplici",
      steps: [
        { title: "Scegli il Veicolo Online", desc: "Sfoglia la nostra flotta di supercar, SUV, moto e quad. Seleziona date e luogo di ritiro dal nostro sito." },
        { title: "Invia la Richiesta su WhatsApp", desc: "Con un tocco invii un messaggio già pronto. Ti rispondiamo di persona per confermare disponibilità, deposito cauzionale e dettagli del ritiro." },
        { title: "Ritira con il Tuo Metodo di Pagamento", desc: "Presentati con patente e documento. Paga il deposito con prepagata, bancomat o contanti. Nessuna carta di credito richiesta." },
        { title: "Parti alla Scoperta della Sardegna", desc: "In meno di 5 minuti sei al volante. Consegna al Porto, Aeroporto o in tutta la Costa Smeralda." },
      ],
    },
    faq: {
      eyebrow: "Trasparenza Totale",
      title1: "Domande Frequenti",
      title2: "Noleggio Senza Carta di Credito",
      items: [
        {
          q: "Posso noleggiare davvero senza carta di credito?",
          a: "Sì, con KS Rent non è necessaria la carta di credito. Accettiamo carte prepagate (PostePay, Revolut, N26), bancomat, carte di debito e anche contanti. Il deposito cauzionale è flessibile e proporzionato al veicolo scelto.",
          gold: true,
        },
        {
          q: "Come funziona il deposito cauzionale senza carta di credito?",
          a: "Il deposito cauzionale viene gestito al momento del ritiro. L'importo varia in base alla categoria del veicolo (city car, SUV, supercar) e può essere versato in contanti o tramite carta prepagata/debito. L'importo viene sempre comunicato in anticipo durante la prenotazione, senza sorprese.",
          gold: true,
        },
        {
          q: "Quali metodi di pagamento accettate?",
          a: "Accettiamo Visa, Mastercard, American Express (credito e debito), carte prepagate di qualsiasi circuito, bancomat, contanti e bonifici istantanei. Sei libero di pagare come preferisci.",
          gold: false,
        },
        {
          q: "Il noleggio senza carta di credito costa di più?",
          a: "Assolutamente no. I nostri prezzi sono identici indipendentemente dal metodo di pagamento. Nessun sovrapprezzo per chi paga con prepagata o contanti.",
          gold: false,
        },
        {
          q: "Quali documenti servono per noleggiare?",
          a: "Patente di guida valida, codice fiscale e documento d'identità in corso di validità (carta d'identità o passaporto). Nessuno score bancario richiesto, nessuna burocrazia aggiuntiva.",
          gold: false,
        },
      ],
    },
    rich: {
      eyebrow: "Guida Completa",
      title1: "Noleggio Auto Senza Carta di Credito",
      title2: "in Sardegna: Tutto Quello che Devi Sapere",
      pHtml: [
        "Uno dei problemi più comuni che i turisti incontrano quando cercano un <strong>noleggio auto in Sardegna</strong> è l'obbligo della carta di credito. La maggior parte delle grandi compagnie internazionali — Hertz, Avis, Europcar, Sixt — richiede una carta di credito tradizionale con plafond elevato per poter bloccare il deposito cauzionale. Questo esclude automaticamente milioni di viaggiatori che utilizzano carte prepagate come PostePay, Revolut, N26 o Hype, oppure che preferiscono pagare in contanti.",
        "<strong>KS Rent ha scelto una strada diversa.</strong> Crediamo che la flessibilità nel pagamento sia un diritto, non un lusso. Per questo accettiamo qualsiasi metodo di pagamento: carte prepagate di ogni circuito (Visa, Mastercard), bancomat, carte di debito, contanti e bonifici istantanei. Il deposito cauzionale — obbligatorio per garantire la cura del veicolo — può essere versato con uno qualsiasi di questi strumenti. Nessun blocco fondi sulla carta, nessuno score bancario, nessuna pre-autorizzazione incomprensibile.",
        "<strong>Come funziona il deposito cauzionale senza carta di credito?</strong> L'importo varia in base alla categoria del veicolo: una city car come la Fiat Panda richiede un deposito contenuto, mentre una supercar come l'Audi RS3 o la BMW M2 prevede una cauzione più elevata, commisurata al valore del mezzo. L'importo esatto te lo comunichiamo quando confermiamo la tua richiesta su WhatsApp, prima del ritiro, così non ci sono mai sorprese. Al momento del ritiro, versi il deposito in contanti o con la tua prepagata, firmi il contratto e parti. Alla riconsegna, dopo una rapida verifica del veicolo, il deposito viene restituito immediatamente.",
        "Questa politica ci ha reso un punto di riferimento per il <strong>noleggio auto senza carta di credito a Olbia e in Costa Smeralda</strong>. Serviamo clienti all' {link:aeroporto:Aeroporto di Olbia Costa Smeralda}, al {link:porto:Porto di Olbia Isola Bianca} e in tutta la {link:costa:Costa Smeralda} con consegna in Hotel, Villa o direttamente al ristorante. La nostra flotta include supercar, SUV, moto Honda SH 125 e quad Yamaha Raptor — tutti disponibili senza l'obbligo della carta di credito tradizionale.",
      ],
    },
    finalCta: {
      title1: "NESSUN VINCOLO",
      title2: "SOLO LIBERTÀ",
      cta: "Prenota Senza Carta di Credito",
      footerLinkText: "Noleggio auto Olbia",
      footerTail:
        " — KS Rent Sardinia, autonoleggio con consegna a domicilio in tutta la Gallura e Costa Smeralda.",
    },
  },
  en: {
    seo: {
      title: "Car Hire Without Credit Card Olbia | KS Rent",
      description:
        "Hire a car in Olbia without a credit card. We accept prepaid cards, debit cards and cash. Supercars, SUVs and motorbikes in Costa Smeralda. Book online.",
    },
    hero: {
      eyebrow: "Zero Constraints — Maximum Freedom",
      title1: "Car Hire",
      title2: "Without a Credit Card",
      subtitle1: "With KS Rent you hire your car in Olbia and on the Costa Smeralda",
      subtitleStrong: "without needing a credit card",
      subtitle2: ". We accept prepaid cards, debit cards and cash.",
      cta: "Book Without a Credit Card",
    },
    payments: {
      eyebrow: "Flexible Payments",
      title1: "How to Hire",
      title2: "Without a Credit Card in Olbia",
      methods: [
        { title: "Prepaid Cards", desc: "PostePay, Revolut, N26, Hype and any Visa/Mastercard prepaid card." },
        { title: "Cash", desc: "Security deposit and payment in cash directly at the office." },
        { title: "Debit Card", desc: "Debit cards from any Italian or foreign bank." },
        { title: "Instant Bank Transfer", desc: "Quick payment via instant bank transfer." },
      ],
    },
    how: {
      eyebrow: "How It Works",
      title1: "Car Hire Olbia",
      title2: "in 4 Simple Steps",
      steps: [
        { title: "Choose the Vehicle Online", desc: "Browse our fleet of supercars, SUVs, motorbikes and quads. Select dates and pick-up location on our website." },
        { title: "Send the Request on WhatsApp", desc: "One tap sends a ready-made message. We reply personally to confirm availability, the security deposit and pick-up details." },
        { title: "Pick Up With Your Payment Method", desc: "Show up with your driving licence and ID. Pay the deposit with a prepaid card, debit card or cash. No credit card required." },
        { title: "Off to Discover Sardinia", desc: "In under 5 minutes you're at the wheel. Delivery at the Port, Airport or anywhere on the Costa Smeralda." },
      ],
    },
    faq: {
      eyebrow: "Total Transparency",
      title1: "Frequently Asked Questions",
      title2: "Car Hire Without a Credit Card",
      items: [
        {
          q: "Can I really hire without a credit card?",
          a: "Yes, with KS Rent a credit card is not required. We accept prepaid cards (PostePay, Revolut, N26), debit cards and even cash. The security deposit is flexible and proportional to the vehicle chosen.",
          gold: true,
        },
        {
          q: "How does the security deposit work without a credit card?",
          a: "The security deposit is handled at pick-up. The amount varies by vehicle category (city car, SUV, supercar) and can be paid in cash or by prepaid/debit card. The amount is always communicated in advance at booking, with no surprises.",
          gold: true,
        },
        {
          q: "Which payment methods do you accept?",
          a: "We accept Visa, Mastercard, American Express (credit and debit), prepaid cards of any network, debit cards, cash and instant bank transfers. You're free to pay as you prefer.",
          gold: false,
        },
        {
          q: "Does no-credit-card car hire cost more?",
          a: "Absolutely not. Our prices are identical regardless of the payment method. No surcharge for those paying with prepaid card or cash.",
          gold: false,
        },
        {
          q: "Which documents do I need to hire?",
          a: "A valid driving licence, tax code and a valid ID document (ID card or passport). No banking score required, no extra paperwork.",
          gold: false,
        },
      ],
    },
    rich: {
      eyebrow: "Complete Guide",
      title1: "Car Hire Without a Credit Card",
      title2: "in Sardinia: Everything You Need to Know",
      pHtml: [
        "One of the most common problems tourists face when looking for <strong>car hire in Sardinia</strong> is the credit card requirement. Most major international companies — Hertz, Avis, Europcar, Sixt — require a traditional credit card with a high limit to block the security deposit. This automatically excludes millions of travellers who use prepaid cards like PostePay, Revolut, N26 or Hype, or who prefer to pay in cash.",
        "<strong>KS Rent has chosen a different path.</strong> We believe payment flexibility is a right, not a luxury. That's why we accept any payment method: prepaid cards on any network (Visa, Mastercard), debit cards, cash and instant bank transfers. The security deposit — required to guarantee the care of the vehicle — can be paid with any of these tools. No card holds, no banking score, no impossible pre-authorisations.",
        "<strong>How does the security deposit without a credit card work?</strong> The amount varies by vehicle category: a city car like the Fiat Panda requires a small deposit, while a supercar like the Audi RS3 or BMW M2 has a higher deposit, in line with the value of the vehicle. The exact amount is communicated when we confirm your request on WhatsApp, before pick-up, so there are never any surprises. At pick-up you pay the deposit in cash or with a prepaid card, sign the contract and you're off. On return, after a quick vehicle check, the deposit is refunded immediately.",
        "This policy has made us a benchmark for <strong>no-credit-card car hire in Olbia and the Costa Smeralda</strong>. We serve customers at the {link:aeroporto:Olbia Costa Smeralda Airport}, at the {link:porto:Olbia Isola Bianca Port} and across the whole {link:costa:Costa Smeralda} with delivery to hotels, villas or directly to a restaurant. Our fleet includes supercars, SUVs, Honda SH 125 motorbikes and Yamaha Raptor quads — all available without a traditional credit card.",
      ],
    },
    finalCta: {
      title1: "NO CONSTRAINTS",
      title2: "ONLY FREEDOM",
      cta: "Book Without a Credit Card",
      footerLinkText: "Car hire Olbia",
      footerTail:
        " — KS Rent Sardinia, car hire with home delivery throughout Gallura and the Costa Smeralda.",
    },
  },
  de: {
    seo: {
      title: "Autovermietung ohne Kreditkarte Olbia | KS Rent",
      description:
        "Mieten Sie ein Auto in Olbia ohne Kreditkarte. Wir akzeptieren Prepaid, Bankkarte und Bargeld. Supersportwagen, SUVs und Motorräder an der Costa Smeralda. Online buchen.",
    },
    hero: {
      eyebrow: "Keine Auflagen — Maximale Freiheit",
      title1: "Autovermietung",
      title2: "ohne Kreditkarte",
      subtitle1: "Mit KS Rent mieten Sie Ihr Auto in Olbia und an der Costa Smeralda",
      subtitleStrong: "ohne Kreditkartenpflicht",
      subtitle2: ". Wir akzeptieren Prepaid, Bankkarten und Bargeld.",
      cta: "Ohne Kreditkarte buchen",
    },
    payments: {
      eyebrow: "Flexible Zahlungen",
      title1: "So mieten Sie",
      title2: "ohne Kreditkarte in Olbia",
      methods: [
        { title: "Prepaid-Karten", desc: "PostePay, Revolut, N26, Hype und alle Visa/Mastercard-Prepaid-Karten." },
        { title: "Bargeld", desc: "Kaution und Zahlung in bar direkt im Büro." },
        { title: "Bankkarte / Debit", desc: "Bankkarten jeder italienischen oder ausländischen Bank." },
        { title: "Sofortüberweisung", desc: "Schnelle Zahlung per Sofortüberweisung." },
      ],
    },
    how: {
      eyebrow: "So funktioniert es",
      title1: "Autovermietung Olbia",
      title2: "in 4 einfachen Schritten",
      steps: [
        { title: "Fahrzeug online wählen", desc: "Stöbern Sie in unserem Fuhrpark aus Supersportwagen, SUVs, Motorrädern und Quads. Wählen Sie Daten und Übernahmeort auf unserer Website." },
        { title: "Anfrage über WhatsApp senden", desc: "Mit einem Tippen senden Sie eine fertige Nachricht. Wir antworten persönlich, um Verfügbarkeit, Kaution und Abholdetails zu bestätigen." },
        { title: "Mit Ihrer Zahlungsart abholen", desc: "Bringen Sie Führerschein und Ausweis mit. Zahlen Sie die Kaution mit Prepaid-Karte, Bankkarte oder Bargeld. Keine Kreditkarte nötig." },
        { title: "Auf Entdeckungstour durch Sardinien", desc: "In weniger als 5 Minuten sitzen Sie am Steuer. Übergabe am Hafen, am Flughafen oder in der gesamten Costa Smeralda." },
      ],
    },
    faq: {
      eyebrow: "Volle Transparenz",
      title1: "Häufige Fragen",
      title2: "Vermietung ohne Kreditkarte",
      items: [
        {
          q: "Kann ich wirklich ohne Kreditkarte mieten?",
          a: "Ja, bei KS Rent ist keine Kreditkarte erforderlich. Wir akzeptieren Prepaid-Karten (PostePay, Revolut, N26), Bankkarten und sogar Bargeld. Die Kaution ist flexibel und richtet sich nach dem gewählten Fahrzeug.",
          gold: true,
        },
        {
          q: "Wie funktioniert die Kaution ohne Kreditkarte?",
          a: "Die Kaution wird bei der Übernahme geregelt. Der Betrag richtet sich nach der Fahrzeugkategorie (Kleinwagen, SUV, Supersportwagen) und kann in bar oder per Prepaid-/Bankkarte gezahlt werden. Der Betrag wird stets im Voraus bei der Buchung mitgeteilt, ohne Überraschungen.",
          gold: true,
        },
        {
          q: "Welche Zahlungsmethoden akzeptieren Sie?",
          a: "Wir akzeptieren Visa, Mastercard, American Express (Kredit und Debit), Prepaid-Karten aller Anbieter, Bankkarten, Bargeld und Sofortüberweisungen. Sie zahlen, wie Sie möchten.",
          gold: false,
        },
        {
          q: "Kostet die Vermietung ohne Kreditkarte mehr?",
          a: "Auf keinen Fall. Unsere Preise sind unabhängig von der Zahlungsart identisch. Kein Aufpreis für Prepaid- oder Barzahlung.",
          gold: false,
        },
        {
          q: "Welche Unterlagen werden benötigt?",
          a: "Gültiger Führerschein, Steuernummer und gültiges Ausweisdokument (Personalausweis oder Reisepass). Kein Banken-Score nötig, kein zusätzlicher Bürokratieaufwand.",
          gold: false,
        },
      ],
    },
    rich: {
      eyebrow: "Vollständiger Leitfaden",
      title1: "Autovermietung ohne Kreditkarte",
      title2: "in Sardinien: Alles, was Sie wissen müssen",
      pHtml: [
        "Eines der häufigsten Probleme, mit denen Touristen bei der Suche nach einer <strong>Autovermietung in Sardinien</strong> konfrontiert sind, ist die Kreditkartenpflicht. Die meisten internationalen Anbieter — Hertz, Avis, Europcar, Sixt — verlangen eine herkömmliche Kreditkarte mit hohem Limit, um die Kaution zu sperren. Damit sind automatisch Millionen von Reisenden ausgeschlossen, die Prepaid-Karten wie PostePay, Revolut, N26 oder Hype nutzen oder lieber bar bezahlen.",
        "<strong>KS Rent hat einen anderen Weg gewählt.</strong> Wir glauben, dass Zahlungsflexibilität ein Recht und kein Luxus ist. Deshalb akzeptieren wir jede Zahlungsmethode: Prepaid-Karten aller Anbieter (Visa, Mastercard), Bankkarten, Bargeld und Sofortüberweisungen. Die Kaution — verpflichtend, um die Pflege des Fahrzeugs zu gewährleisten — kann mit jedem dieser Mittel hinterlegt werden. Keine Kartensperrung, kein Banken-Score, keine schwer verständliche Vorautorisierung.",
        "<strong>Wie funktioniert die Kaution ohne Kreditkarte?</strong> Der Betrag richtet sich nach der Fahrzeugkategorie: Ein Kleinwagen wie der Fiat Panda erfordert eine geringe Kaution, ein Supersportwagen wie der Audi RS3 oder BMW M2 eine höhere, dem Wert des Fahrzeugs entsprechende Kaution. Den genauen Betrag teilen wir Ihnen mit, wenn wir Ihre Anfrage über WhatsApp bestätigen, vor der Abholung, sodass es keine Überraschungen gibt. Bei der Übernahme zahlen Sie die Kaution in bar oder mit Prepaid-Karte, unterzeichnen den Vertrag und fahren los. Bei Rückgabe wird die Kaution nach einer schnellen Fahrzeugkontrolle sofort zurückerstattet.",
        "Diese Politik hat uns zur Referenz für <strong>Autovermietung ohne Kreditkarte in Olbia und an der Costa Smeralda</strong> gemacht. Wir bedienen Kunden am {link:aeroporto:Flughafen Olbia Costa Smeralda}, am {link:porto:Hafen Olbia Isola Bianca} und in der gesamten {link:costa:Costa Smeralda} mit Lieferung ins Hotel, in die Villa oder direkt zum Restaurant. Unser Fuhrpark umfasst Supersportwagen, SUVs, Honda SH 125 Motorräder und Yamaha Raptor Quads — alle ohne herkömmliche Kreditkarte verfügbar.",
      ],
    },
    finalCta: {
      title1: "KEINE AUFLAGEN",
      title2: "NUR FREIHEIT",
      cta: "Ohne Kreditkarte buchen",
      footerLinkText: "Autovermietung Olbia",
      footerTail:
        " — KS Rent Sardinia, Autovermietung mit Lieferung an die Haustür in der gesamten Gallura und Costa Smeralda.",
    },
  },
  fr: {
    seo: {
      title: "Location de Voiture Sans Carte de Crédit Olbia | KS Rent",
      description:
        "Louez une voiture à Olbia sans carte de crédit. Nous acceptons les cartes prépayées, la carte de débit et les espèces. Supercars, SUV et motos en Costa Smeralda. Réservez en ligne.",
    },
    hero: {
      eyebrow: "Aucune Contrainte — Liberté Maximale",
      title1: "Location de Voiture",
      title2: "Sans Carte de Crédit",
      subtitle1: "Avec KS Rent, vous louez votre voiture à Olbia et en Costa Smeralda",
      subtitleStrong: "sans obligation de carte de crédit",
      subtitle2: ". Nous acceptons les prépayées, les cartes de débit et les espèces.",
      cta: "Réserver sans carte de crédit",
    },
    payments: {
      eyebrow: "Paiements Flexibles",
      title1: "Comment Louer",
      title2: "Sans Carte de Crédit à Olbia",
      methods: [
        { title: "Cartes prépayées", desc: "PostePay, Revolut, N26, Hype et toutes les prépayées Visa/Mastercard." },
        { title: "Espèces", desc: "Dépôt de garantie et paiement en espèces directement au bureau." },
        { title: "Carte de débit", desc: "Cartes de débit de toute banque italienne ou étrangère." },
        { title: "Virement instantané", desc: "Paiement rapide par virement bancaire instantané." },
      ],
    },
    how: {
      eyebrow: "Comment ça marche",
      title1: "Location de Voiture Olbia",
      title2: "en 4 étapes simples",
      steps: [
        { title: "Choisissez le véhicule en ligne", desc: "Parcourez notre flotte de supercars, SUV, motos et quads. Sélectionnez les dates et le lieu de retrait sur notre site." },
        { title: "Envoyez la demande sur WhatsApp", desc: "En un geste, vous envoyez un message prêt à l'emploi. Nous répondons en personne pour confirmer la disponibilité, le dépôt de garantie et les détails du retrait." },
        { title: "Retirez avec votre moyen de paiement", desc: "Présentez-vous avec permis et pièce d'identité. Payez le dépôt par carte prépayée, débit ou espèces. Aucune carte de crédit requise." },
        { title: "Partez à la découverte de la Sardaigne", desc: "En moins de 5 minutes, vous êtes au volant. Livraison au Port, à l'Aéroport ou dans toute la Costa Smeralda." },
      ],
    },
    faq: {
      eyebrow: "Transparence Totale",
      title1: "Questions Fréquentes",
      title2: "Location Sans Carte de Crédit",
      items: [
        {
          q: "Puis-je vraiment louer sans carte de crédit ?",
          a: "Oui, avec KS Rent la carte de crédit n'est pas nécessaire. Nous acceptons les cartes prépayées (PostePay, Revolut, N26), les cartes de débit et même les espèces. Le dépôt de garantie est flexible et proportionnel au véhicule choisi.",
          gold: true,
        },
        {
          q: "Comment fonctionne le dépôt de garantie sans carte de crédit ?",
          a: "Le dépôt de garantie est géré au moment du retrait. Le montant varie selon la catégorie du véhicule (citadine, SUV, supercar) et peut être réglé en espèces ou par carte prépayée/débit. Le montant est toujours communiqué à l'avance lors de la réservation, sans surprise.",
          gold: true,
        },
        {
          q: "Quels moyens de paiement acceptez-vous ?",
          a: "Nous acceptons Visa, Mastercard, American Express (crédit et débit), les cartes prépayées de tout réseau, la carte de débit, les espèces et les virements instantanés. Vous êtes libre de payer comme vous le souhaitez.",
          gold: false,
        },
        {
          q: "La location sans carte de crédit coûte-t-elle plus cher ?",
          a: "Absolument pas. Nos prix sont identiques quel que soit le moyen de paiement. Aucun supplément pour ceux qui paient en prépayée ou en espèces.",
          gold: false,
        },
        {
          q: "Quels documents sont nécessaires pour louer ?",
          a: "Un permis de conduire valide, un code fiscal et une pièce d'identité valide (carte d'identité ou passeport). Aucun score bancaire requis, aucune bureaucratie supplémentaire.",
          gold: false,
        },
      ],
    },
    rich: {
      eyebrow: "Guide Complet",
      title1: "Location de Voiture Sans Carte de Crédit",
      title2: "en Sardaigne : tout ce qu'il faut savoir",
      pHtml: [
        "L'un des problèmes les plus courants pour les touristes qui cherchent une <strong>location de voiture en Sardaigne</strong> est l'obligation de carte de crédit. La plupart des grandes compagnies internationales — Hertz, Avis, Europcar, Sixt — exigent une carte de crédit traditionnelle avec un plafond élevé pour bloquer le dépôt de garantie. Cela exclut automatiquement des millions de voyageurs qui utilisent des cartes prépayées comme PostePay, Revolut, N26 ou Hype, ou qui préfèrent payer en espèces.",
        "<strong>KS Rent a choisi une autre voie.</strong> Nous croyons que la flexibilité de paiement est un droit, pas un luxe. C'est pourquoi nous acceptons tout moyen de paiement : cartes prépayées de tout réseau (Visa, Mastercard), cartes de débit, espèces et virements instantanés. Le dépôt de garantie — obligatoire pour garantir le soin du véhicule — peut être réglé avec l'un quelconque de ces instruments. Aucun blocage sur la carte, aucun score bancaire, aucune préautorisation incompréhensible.",
        "<strong>Comment fonctionne le dépôt de garantie sans carte de crédit ?</strong> Le montant varie selon la catégorie du véhicule : une citadine comme la Fiat Panda demande un dépôt réduit, tandis qu'une supercar comme l'Audi RS3 ou la BMW M2 prévoit une caution plus élevée, proportionnelle à la valeur du véhicule. Le montant exact vous est communiqué lorsque nous confirmons votre demande sur WhatsApp, avant le retrait, ainsi il n'y a jamais de surprise. Au moment du retrait, vous versez le dépôt en espèces ou par prépayée, signez le contrat et partez. À la restitution, après une vérification rapide du véhicule, le dépôt est restitué immédiatement.",
        "Cette politique a fait de nous une référence pour la <strong>location de voiture sans carte de crédit à Olbia et en Costa Smeralda</strong>. Nous servons des clients à l'{link:aeroporto:Aéroport d'Olbia Costa Smeralda}, au {link:porto:Port d'Olbia Isola Bianca} et dans toute la {link:costa:Costa Smeralda} avec livraison à l'hôtel, en villa ou directement au restaurant. Notre flotte comprend supercars, SUV, motos Honda SH 125 et quads Yamaha Raptor — tous disponibles sans carte de crédit traditionnelle.",
      ],
    },
    finalCta: {
      title1: "AUCUNE CONTRAINTE",
      title2: "QUE DE LA LIBERTÉ",
      cta: "Réserver sans carte de crédit",
      footerLinkText: "Location de voiture Olbia",
      footerTail:
        " — KS Rent Sardinia, location avec livraison à domicile dans toute la Gallura et la Costa Smeralda.",
    },
  },
} as const;

export const senzaCCJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRental",
  name: "KS Rent — Noleggio Auto Senza Carta di Credito Olbia",
  description:
    "Noleggio auto a Olbia e Costa Smeralda senza obbligo di carta di credito. Accettiamo prepagate, bancomat e contanti. Supercar, SUV, moto e quad.",
  url: "https://www.ksrentsardinia.com/noleggio-auto-senza-carta-di-credito-olbia",
  telephone: "+393446107071",
  paymentAccepted: "Cash, Debit Card, Prepaid Card, Credit Card",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Viale Isola Bianca 38",
    addressLocality: "Olbia",
    postalCode: "07026",
    addressRegion: "SS",
    addressCountry: "IT",
  },
};

const senzaCCFaqsItForJsonLd = TRANSLATIONS.it.faq.items;

export const senzaCCFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: senzaCCFaqsItForJsonLd.map((f) => ({
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
    "/": { it: "/", en: "/en", de: "/de", fr: "/fr" },
  };
  if (map[itPath]) return map[itPath][lang];
  return lang === "it" ? itPath : `/${lang}${itPath}`;
}

import DOMPurify from "isomorphic-dompurify";

function renderHtml(html: string, lang: Locale): string {
  const linkMap: Record<string, string> = {
    aeroporto: "/noleggio-auto-aeroporto-olbia",
    porto: "/noleggio-auto-porto-olbia",
    costa: "/noleggio-auto-costa-smeralda",
  };
  const out = html.replace(/\{link:([^:]+):([^}]+)\}/g, (_m, key: string, label: string) => {
    const itPath = linkMap[key] ?? `/${key}`;
    const href = localizeHref(itPath, lang);
    return `<a href="${href}" class="text-gold underline hover:text-gray-900 dark:hover:text-white transition-colors">${label}</a>`;
  });
  return DOMPurify.sanitize(out, { ADD_ATTR: ["target", "rel"] });
}

const NoleggioSenzaCartaCredito = ({ lang = "it" }: Props) => {
  const t = TRANSLATIONS[lang];
  const bookHref = localizeHref("/prenotaora", lang);
  const homeHref = localizeHref("/", lang);
  const breadcrumbPath = localizeHref("/noleggio-auto-senza-carta-di-credito-olbia", lang);
  const paymentIcons = [CreditCard, Banknote, ShieldCheck, Smartphone];

  // Internal links contestuali (centralizzato in src/lib/internal-links.ts)
  const linkLabels = INTERNAL_LINK_LABELS[lang];
  const relatedServices = getRelatedServices(
    "/noleggio-auto-senza-carta-di-credito-olbia",
    lang,
  );
  const topLocations = getTopLocations(lang, 8);
  const crossSellVehicles = getCrossSellVehicles(lang, 6);

  return (
    <div className="bg-gray-50 dark:bg-[#050505] text-foreground selection:bg-gold selection:text-black overflow-x-hidden editorial-soft">
      <SEOHead
        title={t.seo.title}
        description={t.seo.description}
        canonical={`https://www.ksrentsardinia.com${breadcrumbPath}`}
        jsonLd={[senzaCCJsonLd, senzaCCFaqJsonLd, buildBreadcrumb(t.seo.title, breadcrumbPath)]}
      />

      {/* HERO */}
      <section className="relative min-h-[85vh] flex flex-col justify-center pt-32 pb-16 px-4 md:px-12 lg:px-24 overflow-hidden bg-white dark:bg-black">
        <div className="relative z-10 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-8 backdrop-blur-xl">
              <CreditCard className="text-gold w-4 h-4" />
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
              <span className="text-gold font-bold"> {t.hero.subtitleStrong}</span>
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

      {/* PAYMENT METHODS */}
      <section className="py-24 px-4 md:px-12 lg:px-24 bg-gray-50 dark:bg-[#050505]">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <span className="block text-gold font-bold tracking-[0.3em] uppercase text-xs mb-6">{t.payments.eyebrow}</span>
            <h2 className="text-3xl md:text-5xl font-display font-black mb-10 italic uppercase tracking-tighter text-gray-900 dark:text-white">
              {t.payments.title1} <span className="text-gold">{t.payments.title2}</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {t.payments.methods.map((s, i) => {
                const Icon = paymentIcons[i];
                return (
                  <motion.div
                    key={i}
                    whileHover={{ y: -10 }}
                    className="relative p-8 rounded-[2.5rem] bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 overflow-hidden group backdrop-blur-sm shadow-md dark:shadow-none border-b-[3px] border-b-gold/40 dark:border-b-transparent"
                  >
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-gold/5 rounded-full blur-2xl group-hover:bg-gold/20 transition-all" />
                    <Icon className="text-gold w-12 h-12 mb-6" />
                    <h3 className="text-xl font-bold mb-3 uppercase italic tracking-tighter text-gray-900 dark:text-white">{s.title}</h3>
                    <p className="text-gray-600 dark:text-white/40 text-sm leading-relaxed font-light">{s.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-4 md:px-12 lg:px-24 bg-white dark:bg-[#0a0a0a] shadow-md dark:shadow-none border-b-[3px] border-b-gold/40 dark:border-b-transparent">
        <div className="max-w-4xl mx-auto">
          <span className="block text-gold font-bold tracking-[0.3em] uppercase text-xs mb-6 text-center">{t.how.eyebrow}</span>
          <h2 className="text-3xl md:text-5xl font-display font-black mb-12 italic uppercase tracking-tighter text-center text-gray-900 dark:text-white">
            {t.how.title1} <span className="text-gold">{t.how.title2}</span>
          </h2>

          <div className="space-y-8">
            {t.how.steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 items-start p-6 rounded-2xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10"
              >
                <span className="text-gold font-black text-3xl italic">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-xl font-bold uppercase italic tracking-tighter mb-2 text-gray-900 dark:text-white">{s.title}</h3>
                  <p className="text-gray-600 dark:text-white/50 font-light leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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

      {/* INTERNAL LINKING — Coverage hub */}
      <section className="py-20 px-4 md:px-12 lg:px-24 bg-gray-50 dark:bg-[#050505] border-t border-gray-200 dark:border-white/5">
        <div className="max-w-6xl mx-auto space-y-14">
          {/* Servizi */}
          <div>
            <span className="block text-gold font-bold tracking-[0.3em] uppercase text-[10px] mb-3">{linkLabels.servicesEyebrow}</span>
            <h2 className="font-display text-2xl md:text-3xl font-black italic uppercase tracking-tighter mb-6 text-gray-900 dark:text-white">{linkLabels.servicesTitle}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedServices.map((s) => (
                <Link
                  key={s.href}
                  to={s.href}
                  className="group block rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-gold/50 hover:shadow-xl transition overflow-hidden"
                >
                  {s.image && (
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={s.image}
                        alt={s.label}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    </div>
                  )}
                  <div className="p-4">
                    <strong className="block text-gray-900 dark:text-white font-bold text-sm group-hover:text-gold transition">{s.label}</strong>
                    {s.hint && <span className="text-xs text-gray-600 dark:text-white/50 mt-1 block">{s.hint}</span>}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Località */}
          <div>
            <span className="block text-gold font-bold tracking-[0.3em] uppercase text-[10px] mb-3 flex items-center gap-2">
              <MapPin className="w-3 h-3" /> {linkLabels.locationsEyebrow}
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-black italic uppercase tracking-tighter mb-6 text-gray-900 dark:text-white">{linkLabels.locationsTitle}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {topLocations.map((loc) => (
                <Link
                  key={loc.href}
                  to={loc.href}
                  className="block p-3 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-gold/40 transition text-center"
                >
                  <strong className="block text-gray-900 dark:text-white text-sm">{loc.label}</strong>
                  {loc.hint && <span className="text-xs text-gray-600 dark:text-white/50">{loc.hint}</span>}
                </Link>
              ))}
            </div>
          </div>

          {/* Veicoli */}
          <div>
            <span className="block text-gold font-bold tracking-[0.3em] uppercase text-[10px] mb-3 flex items-center gap-2">
              <Car className="w-3 h-3" /> {linkLabels.vehiclesEyebrow}
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-black italic uppercase tracking-tighter mb-6 text-gray-900 dark:text-white">{linkLabels.vehiclesTitle}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {crossSellVehicles.map((v) => (
                <Link
                  key={v.href}
                  to={v.href}
                  className="group block rounded-xl bg-gradient-to-br from-white via-white to-gray-50 dark:from-white/10 dark:via-white/5 dark:to-transparent border border-gray-200 dark:border-white/10 hover:border-gold/50 hover:shadow-xl transition overflow-hidden text-center"
                >
                  {v.image && (
                    <div className="relative h-28 md:h-32 p-3 flex items-center justify-center">
                      <img
                        src={v.image}
                        alt={v.label}
                        loading="lazy"
                        className="max-h-full w-auto object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.3)] group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="px-3 pb-3 border-t border-gray-200/50 dark:border-white/10 pt-2">
                    <strong className="block text-gray-900 dark:text-white text-sm group-hover:text-gold transition">{v.label}</strong>
                    {v.hint && <span className="text-xs text-gray-600 dark:text-white/50 mt-0.5 block">{v.hint}</span>}
                  </div>
                </Link>
              ))}
            </div>
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

export default NoleggioSenzaCartaCredito;

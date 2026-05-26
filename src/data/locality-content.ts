/**
 * Contenuto SEO unico per ogni pagina localita e spiaggia.
 * Utilizzato da DynamicPage.tsx per differenziare i 4 blocchi SEO
 * e le FAQ, evitando contenuto duplicato penalizzato da Google.
 */

import { getExtraData } from "./locality-extra";

export interface LocalityFAQ {
  q: string;
  a: string;
}

export interface LocalTip {
  icon: "clock" | "wind" | "road" | "food" | "camera" | "swim" | "mountain" | "boat";
  title: string;
  text: string;
}

export interface LocalitySEOContent {
  /** Block 1: Perche scegliere KS Rent per [localita] */
  whyUs: string;
  /** Block 2: Noleggio senza carta di credito a [localita] */
  noCreditCard: string;
  /** Block 3: Consegna su misura a [localita] */
  delivery: string;
  /** Block 4: La tua vacanza inizia da [localita] */
  vacation: string;
  /** Snippet bait: frase di apertura diretta per featured snippet (max 3 righe) */
  snippetBait?: string;
  /** Distanza da Olbia in formato "XX km, YY minuti" */
  distanceFromOlbia?: string;
  /** Descrizione personalizzata per la sezione veicolo consigliato */
  vehicleReason?: string;
  /** 4 consigli locali UNICI (sostituiscono i LOCAL_TIPS generici) */
  localTips?: LocalTip[];
  /** FAQ specifiche per la localita */
  faqs: LocalityFAQ[];
  /** Slug di localita/spiagge correlate per link interni */
  relatedSlugs?: string[];
  /** CTA personalizzata */
  ctaText?: string;

  /* ─── Differenziazione visiva (override JSX boilerplate) ───
     Riempire questi campi rimuove il testo identico tra pagine.
     Ogni campo è opzionale: in assenza di override, viene usato
     un fallback rotante deterministico basato sullo slug (vedi pickVariant). */
  /** Eyebrow sopra l'H1 (es. "Costa Smeralda · Lusso", "Sbarco & Marina") */
  eyebrowLabel?: string;
  /** Eyebrow sopra il titolo della scheda veicolo (es. "La nostra scelta", "Top pick") */
  vehicleEyebrow?: string;
  /** Titolo della scheda veicolo consigliato (sostituisce "Il veicolo ideale per questa destinazione") */
  vehicleHeading?: string;
  /** Eyebrow della sezione mappa (es. "Itinerario", "Geografia") */
  mapEyebrow?: string;
  /** Titolo H2 della sezione mappa (sostituisce "Posizione" / "Come raggiungerci") */
  mapHeading?: string;
  /** Sotto-paragrafo della sezione mappa (sostituisce "Distanza dalle nostre sedi di Olbia.") */
  mapIntro?: string;
  /** Eyebrow della sezione tips (es. "Local know-how", "Insider stories") */
  tipsEyebrow?: string;
  /** Titolo H2 della sezione tips (es. "I segreti di Porto Cervo") */
  tipsHeading?: string;
  /** Paragrafo introduttivo dei tips (sostituisce "...siamo sardi DOC...") */
  tipsIntro?: string;
  /** Override H2 dei 4 blocchi SEO finali (whyUs, noCreditCard, delivery, vacation) */
  blockHeadings?: {
    whyUs?: string;
    noCreditCard?: string;
    delivery?: string;
    vacation?: string;
  };
  /** Eyebrow del CTA finale (es. "Prenota ora", "Last call") */
  ctaEyebrow?: string;
  /** Titolo H2 del CTA finale (sostituisce "Prenota ora la tua Auto") */
  ctaTitle?: string;
}

/* ═══════════════════════════════════════════════════════
   LOCALITA (21 pagine)
   ═══════════════════════════════════════════════════════ */

const LOCATION_CONTENT: Record<string, LocalitySEOContent> = {
  "noleggio-auto-porto-cervo": {
    snippetBait: "KS Rent Sardinia consegna auto di lusso direttamente a Porto Cervo in 35 minuti da Olbia. Audi RS3, BMW M2 e Jeep Avenger disponibili anche senza carta di credito. Consegna al porto turistico, hotel 5 stelle o villa privata.",
    distanceFromOlbia: "30 km, 35-40 minuti",
    vehicleReason: "A Porto Cervo i nostri clienti scelgono soprattutto l'Audi RS3 per la Piazzetta e la BMW M2 per le strade panoramiche verso Romazzino. Per le famiglie in villa, il Jeep Avenger è ideale per combinare comfort e sterrati verso le calette.",
    localTips: [
      { icon: "boat", title: "La marina al tramonto", text: "Il tramonto dalla Promenade du Port è spettacolare. Parcheggia al porto turistico entro le 18:00 in estate per goderti l'aperitivo con vista sugli yacht. Il parcheggio della Piazzetta si riempie velocemente." },
      { icon: "food", title: "Dove mangiare davvero bene", text: "Evita i ristoranti sul porto principale e prova il Pevero Golf Club Restaurant o guida 15 minuti verso San Pantaleo per cucina gallurese autentica a prezzi ragionevoli. Il giovedì c'è il mercatino artigianale." },
      { icon: "swim", title: "Le calette segrete", text: "A 5 minuti da Porto Cervo c'è Spiaggia del Principe (sterrato, arriva prima delle 9). Capriccioli Est e Ovest offrono snorkeling eccezionale. Liscia Ruja è la Long Beach perfetta per famiglie." },
      { icon: "camera", title: "Il Consorzio Costa Smeralda", text: "Porto Cervo fu creato dall'Aga Khan nel 1962. La chiesa di Stella Maris ospita un dipinto di El Greco. La Piazzetta si anima dopo le 21:00 con boutique e locali esclusivi." },
    ],
    whyUs:
      "Porto Cervo è la capitale mondiale del lusso nautico, fondata dall'Aga Khan nel 1962 e ancora oggi cuore del Consorzio Costa Smeralda. KS Rent Sardinia è il partner ideale per chi atterra all'aeroporto di Olbia — a soli 30 km, 35-40 minuti lungo la panoramica SP59 — e vuole raggiungere la Piazzetta o la Promenade du Port in totale stile. La nostra flotta premium (Audi RS3 da 400 CV, BMW M2 e Mercedes Classe A) è pensata per chi frequenta yacht club, ristoranti stellati e boutique esclusive, mentre il Jeep Avenger resta la scelta più pratica per le famiglie in villa che devono affrontare anche gli sterrati verso le calette. Consegniamo direttamente alla Marina di Porto Cervo, al Cervo Hotel, all'Hotel Cala di Volpe o alla tua villa privata, con un servizio discreto e puntuale che ci è valso una valutazione di 5,0/5 su Google.",
    noCreditCard:
      "Anche a Porto Cervo, dove il lusso è la norma, KS Rent Sardinia si distingue per la flessibilità: accettiamo bancomat, carte di debito, carte prepagate ricaricabili (Postepay, Revolut, N26) e contanti per il deposito cauzionale. Nessun blocco sulla carta, nessuna pre-autorizzazione sorpresa che vincoli il plafond proprio mentre vuoi goderti la vacanza. È un vantaggio concreto per chi preferisce gestire le spese del soggiorno in Costa Smeralda senza vincoli bancari, e per i turisti stranieri che non viaggiano con una carta di credito ad alto massimale. L'importo del deposito viene comunicato in modo trasparente via WhatsApp prima della prenotazione, in base alla categoria del veicolo — anche per le supercar come Audi RS3 e BMW M2 — così sai esattamente cosa aspettarti già prima di metterti al volante a Porto Cervo.",
    delivery:
      "Da Olbia a Porto Cervo sono circa 30 km, percorribili in 35-40 minuti lungo la panoramica SP59 che costeggia Golfo Aranci e Cugnana. Consegniamo l'auto direttamente alla Marina e al porto turistico di Porto Cervo, agli hotel 5 stelle come il Cervo Hotel, il Romazzino e il Cala di Volpe, oppure alla tua villa o al residence. Il servizio è disponibile tutti i giorni dalle 10:00 alle 22:30, festivi inclusi, anche con preavviso di poche ore e in coincidenza con l'orario del tuo volo. Se sbarchi al porto di Olbia Isola Bianca o atterri all'aeroporto Costa Smeralda (OLB) ti veniamo incontro noi: niente navette, niente code al desk. La consegna è gratuita all'interno del comune di Olbia; per Porto Cervo il costo, contenuto, è dichiarato in anticipo nel preventivo.",
    vacation:
      "Porto Cervo non è solo vita mondana: a pochi minuti d'auto trovi alcune delle spiagge più belle del Mediterraneo — Capriccioli, Liscia Ruja, Grande Pevero e la Spiaggia del Principe, quest'ultima raggiungibile da uno sterrato dove conviene arrivare prima delle 9:00. Con un'auto a noleggio KS Rent puoi esplorare le calette nascoste della Costa Smeralda al mattino, pranzare alla Piazzetta che si anima dopo le 21:00 e cenare in un agriturismo dell'entroterra di Arzachena, a 15 minuti, dove la cucina gallurese costa molto meno che sul porto. Merita una sosta anche la chiesa di Stella Maris, che custodisce un dipinto attribuito a El Greco. Prenota online in pochi minuti e parti dalla nostra sede al porto di Olbia o dall'aeroporto Costa Smeralda: muoverti senza dipendere da taxi e navette è il vero lusso in Costa Smeralda.",
    faqs: [
      { q: "Quanto ci vuole per la consegna dell'auto a Porto Cervo?", a: "Circa 35-40 minuti dalla nostra sede di Olbia. Consegniamo al porto turistico, agli hotel o alla villa." },
      { q: "Posso noleggiare una supercar a Porto Cervo senza carta di credito?", a: "Sì. KS Rent Sardinia accetta anche bancomat e contanti come deposito cauzionale, anche per i veicoli premium." },
      { q: "Quali auto di lusso sono disponibili per Porto Cervo?", a: "Audi RS3 Sportback, BMW M2 Coupé, Mercedes Classe A 180d e Jeep Avenger. La disponibilità varia in base alla stagione." },
    ],
    relatedSlugs: ["capriccioli", "liscia-ruja", "noleggio-auto-baja-sardinia"],
  },

  "noleggio-auto-san-teodoro": {
    whyUs:
      "San Teodoro è la meta preferita dalle famiglie e dai giovani che cercano spiagge caraibiche a pochi chilometri da Olbia, con un centro vivace di locali, ristoranti di pesce e mercatini serali. KS Rent Sardinia ti permette di raggiungere La Cinta, Cala Brandinchi — la 'piccola Tahiti' — e Lu Impostu con il veicolo più adatto: un Jeep Avenger per gli sterrati che portano alle calette più riservate, o una Fiat Panda Hybrid agile e parca nei consumi per il centro paese, dove d'estate trovare parcheggio è una sfida. Siamo a soli 25 km da San Teodoro, circa 20-25 minuti sulla SS131, e consegniamo l'auto direttamente al tuo hotel, B&B, campeggio o villaggio turistico. Niente code al desk e nessun pensiero: ti aspettiamo già pronti, con una valutazione di 5,0/5 su Google a confermare il servizio.",
    noCreditCard:
      "A San Teodoro, dove molti turisti arrivano in traghetto al porto di Olbia o con voli low-cost, il noleggio senza carta di credito è un vantaggio decisivo. KS Rent Sardinia accetta bancomat, carte di debito, prepagate ricaricabili (Postepay, Revolut, N26) e contanti per il deposito cauzionale, permettendoti di iniziare la vacanza subito, senza attese burocratiche né blocchi di fondi al desk. È la soluzione ideale per chi viaggia leggero, per i gruppi di giovani e per le famiglie che vogliono la massima semplicità. L'importo del deposito è proporzionato alla categoria del veicolo e viene comunicato in modo chiaro via WhatsApp prima della prenotazione, così non ci sono sorprese al ritiro. Anche la restituzione è senza complicazioni: riconsegni l'auto col pieno nel punto concordato e la cauzione torna a te.",
    delivery:
      "San Teodoro dista solo 25 km da Olbia, circa 20-25 minuti di guida sulla SS131. Consegniamo l'auto direttamente al tuo hotel, B&B, campeggio o villaggio turistico, in tutta la zona da Cala d'Ambra a Capo Coda Cavallo. Se arrivi in traghetto al porto di Olbia Isola Bianca o atterri all'aeroporto Costa Smeralda (OLB), possiamo portarti l'auto allo sbarco o agli arrivi: tu guidi diretto a San Teodoro senza passaggi intermedi né navette. Il servizio è attivo tutti i giorni dalle 10:00 alle 22:30, festivi inclusi, comodo anche per chi atterra con voli serali. La consegna è gratuita nel comune di Olbia; per San Teodoro il costo, contenuto, è dichiarato in modo trasparente nel preventivo in base alla distanza.",
    vacation:
      "San Teodoro offre alcune delle spiagge più belle della Sardegna: La Cinta, con la sua laguna popolata dai fenicotteri rosa, Cala Brandinchi detta 'la piccola Tahiti', e Lu Impostu dalle acque turchesi e basse, perfette per i bambini. La sera il centro si anima con locali, ristoranti e mercatini sul lungomare. Con un'auto KS Rent puoi anche esplorare Capo Coda Cavallo e il suo promontorio panoramico, il Lago di San Teodoro (paradiso del birdwatching) e le calette segrete raggiungibili solo su strada sterrata, dove un Jeep Avenger fa la differenza. In mezz'ora raggiungi anche Porto Rotondo e la Costa Smeralda verso nord, o Budoni e la costa verso sud. Prenota online in pochi minuti e ritira il veicolo dalla nostra sede al porto di Olbia o all'aeroporto: avrai la libertà di cambiare spiaggia ogni giorno.",
    faqs: [
      { q: "Quanto dista San Teodoro dall'aeroporto di Olbia?", a: "Circa 25 km, percorribili in 20-25 minuti. KS Rent consegna l'auto direttamente all'aeroporto o al tuo alloggio a San Teodoro." },
      { q: "Quale auto consigliate per le spiagge di San Teodoro?", a: "Il Jeep Avenger è ideale per raggiungere Cala Brandinchi e Lu Impostu su sterrato. Per La Cinta va bene anche una city car." },
      { q: "Serve la carta di credito per noleggiare a San Teodoro?", a: "No, KS Rent Sardinia accetta anche bancomat e contanti per il deposito cauzionale." },
    ],
    relatedSlugs: ["la-cinta", "cala-brandinchi", "lu-impostu"],
  },

  "noleggio-auto-baja-sardinia": {
    whyUs:
      "Baja Sardinia è il cuore della movida estiva della Costa Smeralda, con locali iconici come il Phi Beach — celebre per i tramonti con dj set — e il Ritual, discoteca scavata nella roccia. KS Rent Sardinia ti porta un'auto premium direttamente al tuo hotel, residence o villa, perfetta per muoverti tra le spiagge di Baja Sardinia, Porto Cervo (a 10 minuti) e la vicina Cala Capra. La BMW M2 e l'Audi RS3 sono le più richieste dai clienti che soggiornano in questa zona esclusiva e amano guidare sulle strade panoramiche verso Cannigione e Arzachena; per chi viaggia in famiglia, il Jeep Avenger unisce comfort e capacità sugli sterrati. Siamo a 28 km da Olbia, circa 30-35 minuti, e consegniamo anche in serata: un servizio puntuale che ci è valso 5,0/5 su Google.",
    noCreditCard:
      "Anche nelle località più esclusive della Costa Smeralda, KS Rent Sardinia garantisce un noleggio senza carta di credito obbligatoria. A Baja Sardinia puoi ritirare la tua auto, anche luxury, versando il deposito cauzionale con bancomat, carta di debito, prepagata ricaricabile (Postepay, Revolut, N26) o contanti. Nessuna pre-autorizzazione che blocchi migliaia di euro sulla carta proprio mentre vuoi metterti comodo in vacanza, nessun blocco fondi: solo trasparenza e termini chiari, comunicati via WhatsApp prima della prenotazione. È la stessa flessibilità che offriamo sulle supercar come Audi RS3 e BMW M2, e che apprezzano in particolare i turisti stranieri senza carta ad alto massimale. L'importo del deposito dipende dalla categoria del veicolo e lo conosci in anticipo, così al ritiro non ci sono sorprese.",
    delivery:
      "Baja Sardinia si trova a circa 28 km da Olbia, raggiungibile in 30-35 minuti lungo la SP59 e la SP73. Consegniamo l'auto direttamente al tuo hotel, al resort, al residence o al parcheggio della spiaggia di Baja, in tutta la zona fino a Cala Capra e Cala Battistoni. Per chi arriva all'aeroporto Costa Smeralda (OLB) o al porto di Olbia Isola Bianca, il trasferimento dell'auto è incluso nel servizio di consegna a domicilio: ti aspettiamo allo sbarco o agli arrivi. Il servizio è attivo tutti i giorni dalle 10:00 alle 22:30, ideale anche per chi arriva con voli serali e vuole iniziare subito la serata al Phi Beach. La consegna è gratuita nel comune di Olbia; per Baja il costo è dichiarato in anticipo nel preventivo.",
    vacation:
      "Da Baja Sardinia puoi esplorare il meglio della Costa Smeralda con la massima libertà: le spiagge di Grande Pevero e Cala del Faro sono a 5 minuti d'auto, Porto Cervo a 10 minuti, Capriccioli e Liscia Ruja a 15-20, e il borgo di Arzachena con i suoi siti nuragici — la Tomba dei Giganti di Coddu Vecchiu e il Nuraghe Albucciu — a 15 minuti. Al mattino raggiungi le calette più tranquille prima della folla, nel pomeriggio fai snorkeling a Cala Capra, e la sera parcheggi al Phi Beach per il tramonto più famoso della Sardegna o sali al Ritual per la notte. Con un'auto KS Rent ogni spostamento è autonomo, senza dipendere dalle navette degli hotel o dai taxi, spesso introvabili in alta stagione. Prenota online e ritira dalla nostra sede di Olbia, all'aeroporto o al porto.",
    faqs: [
      { q: "Quanto dista Baja Sardinia da Olbia?", a: "Circa 28 km, percorribili in 30-35 minuti. Consegniamo l'auto direttamente al tuo hotel o residence." },
      { q: "Quali spiagge posso raggiungere da Baja Sardinia?", a: "Grande Pevero (5 min), Cala del Faro (5 min), Capriccioli (10 min), Liscia Ruja (15 min), Spiaggia del Principe (20 min)." },
      { q: "KS Rent consegna l'auto a Baja Sardinia di sera?", a: "Sì, il nostro servizio è attivo fino alle 22:30, ideale per chi arriva con voli serali." },
    ],
    relatedSlugs: ["grande-pevero", "cala-del-faro", "noleggio-auto-porto-cervo"],
  },

  "noleggio-auto-palau": {
    whyUs:
      "Palau è il punto di partenza per l'Arcipelago della Maddalena — parco nazionale e area marina protetta — e una base strategica per esplorare il nord della Gallura. KS Rent Sardinia consegna l'auto direttamente al porto di Palau, all'hotel o al tuo alloggio, permettendoti di raggiungere le spiagge della costa settentrionale e l'entroterra in totale autonomia, senza dipendere dagli orari delle navette. Siamo a circa 40 km da Olbia, 40-45 minuti di guida, e copriamo tutta la zona da Porto Pollo a Capo d'Orso. Il Jeep Avenger è perfetto per le strade sterrate che portano alle calette meno battute, mentre la Mercedes Classe A 180d offre comfort e bassi consumi diesel per i tragitti più lunghi verso Santa Teresa o l'entroterra. Un servizio rapido e affidabile, con valutazione 5,0/5 su Google.",
    noCreditCard:
      "A Palau, dove molti turisti arrivano per imbarcarsi verso La Maddalena con orari stretti tra un traghetto e l'altro, la rapidità è tutto. Con KS Rent Sardinia non perdi tempo con pre-autorizzazioni sulla carta di credito: versi il deposito cauzionale con bancomat, carta di debito, prepagata ricaricabile (Postepay, Revolut, N26) o contanti e parti subito. È un vantaggio reale per chi deve incastrare l'imbarco per l'arcipelago con gli spostamenti sulla terraferma. L'importo del deposito è proporzionato al veicolo e te lo comunichiamo in modo chiaro via WhatsApp prima della prenotazione, così sai già tutto al ritiro. Nessun blocco di fondi sulla carta proprio mentre vuoi goderti il mare: solo condizioni trasparenti e la libertà di muoverti appena sbarcato.",
    delivery:
      "Palau dista circa 40 km da Olbia, raggiungibile in 40-45 minuti lungo la SS125 e la SP90. Consegniamo l'auto al porto di Palau — comodo per chi rientra da La Maddalena — agli hotel della zona, ai residence o direttamente sul lungomare. Se preferisci, puoi ritirare il veicolo all'aeroporto Costa Smeralda (OLB) o al porto di Olbia Isola Bianca e guidare in autonomia fino a Palau, godendoti il panorama costiero. Il servizio è attivo tutti i giorni dalle 10:00 alle 22:30, festivi inclusi, e ci coordiniamo con l'orario del tuo volo o traghetto. La consegna è gratuita all'interno del comune di Olbia; per Palau il costo è dichiarato in modo trasparente nel preventivo, in base alla distanza.",
    vacation:
      "Palau è la porta d'accesso all'Arcipelago della Maddalena, con le acque cristalline e le spiagge di Spargi, Budelli e Caprera. Ma anche sulla terraferma non mancano le sorprese: la celebre Roccia dell'Orso modellata dal vento a Capo d'Orso, le spiagge di Porto Pollo (paradiso di windsurf e kitesurf grazie al vento costante delle Bocche di Bonifacio) e le calette verso Santa Teresa Gallura. Con un'auto a noleggio KS Rent esplori in autonomia tutta la costa nord della Gallura, raggiungi i punti di imbarco per l'arcipelago e rientri quando vuoi, senza vincoli di navetta. Prenota online e ritira dalla nostra sede al porto di Olbia o all'aeroporto: avrai la libertà di alternare isole, spiagge ed entroterra ogni giorno.",
    faqs: [
      { q: "Posso consegnare l'auto al porto di Palau prima di imbarcarmi per La Maddalena?", a: "Sì, organizziamo ritiro e consegna direttamente al porto di Palau, coordinandoci con i tuoi orari del traghetto." },
      { q: "Quanto dista Palau dall'aeroporto di Olbia?", a: "Circa 40 km, percorribili in 40-45 minuti. KS Rent consegna anche all'aeroporto Costa Smeralda." },
      { q: "Quale auto consigliate per Palau e dintorni?", a: "La Mercedes Classe A per comfort su strade principali, il Jeep Avenger per esplorare le calette meno battute della costa nord." },
    ],
    relatedSlugs: ["rena-bianca", "capo-testa", "noleggio-auto-cannigione"],
  },

  "noleggio-auto-cannigione": {
    whyUs:
      "Cannigione è una perla tranquilla del Golfo di Arzachena, amata da famiglie e velisti per il suo porto turistico riparato e l'atmosfera rilassata. KS Rent Sardinia serve questa zona con consegna diretta al porto, ai residence e ai campeggi, permettendoti di vivere la Costa Smeralda senza il caos delle località più mondane. La posizione è strategica: da Cannigione raggiungi Porto Cervo, Baja Sardinia e le spiagge della costa in pochi minuti di guida. Siamo a circa 32 km da Olbia, 35 minuti passando per il borgo di Arzachena. La Mercedes Classe A 180d è ideale per il comfort quotidiano e i bassi consumi, mentre il Jeep Avenger conviene a chi vuole spingersi sulle calette sterrate verso Capo Ferro. Un servizio puntuale e familiare, con 5,0/5 su Google.",
    noCreditCard:
      "A Cannigione il turismo è familiare e rilassato, e KS Rent Sardinia si adatta a questa filosofia offrendo il noleggio senza carta di credito obbligatoria. Versi il deposito cauzionale con bancomat, carta di debito, prepagata ricaricabile (Postepay, Revolut, N26) o contanti, con condizioni trasparenti comunicate via WhatsApp prima della prenotazione. Nessuna sorpresa al rientro, nessun addebito nascosto, nessun blocco di fondi che ti vincoli il budget proprio in vacanza — esattamente lo spirito di un soggiorno sereno in Gallura. È la soluzione perfetta per le famiglie che vogliono organizzare la vacanza senza pensieri bancari e per chi viaggia con carte prepagate. L'importo del deposito dipende dalla categoria del veicolo e lo conosci in anticipo, così al ritiro è tutto già chiaro.",
    delivery:
      "Cannigione si trova a circa 32 km da Olbia, raggiungibile in 35 minuti lungo la SS125 che passa per Arzachena. Consegniamo l'auto al porto turistico, ai residence, agli hotel e ai campeggi della zona, in tutto il Golfo di Arzachena fino a Cala Bitta. La strada da Olbia attraversa il borgo gallurese di Arzachena, dove puoi fare una sosta tra nuraghi e cantine se lo desideri. Per chi arriva all'aeroporto Costa Smeralda (OLB) o al porto di Olbia Isola Bianca, ti veniamo incontro allo sbarco o agli arrivi. Il servizio è attivo tutti i giorni dalle 10:00 alle 22:30, festivi inclusi. La consegna è gratuita nel comune di Olbia; per Cannigione il costo è dichiarato in anticipo nel preventivo.",
    vacation:
      "Da Cannigione puoi esplorare facilmente tutta la Costa Smeralda con la massima libertà: Porto Cervo è a 15 minuti, Baja Sardinia a 10, e le spiagge di Capriccioli e Liscia Ruja a circa 20 minuti. Il Golfo di Arzachena, con le sue acque calme e poco profonde, è ideale per i bambini e per chi pratica vela e windsurf. Il lungomare di Cannigione offre ristoranti di pesce eccellenti a prezzi più ragionevoli che a Porto Cervo e una vita notturna soft, perfetta per chi cerca relax dopo una giornata di mare. A 15 minuti, nell'entroterra, il borgo di Arzachena custodisce siti nuragici e cantine di Vermentino. Con l'auto KS Rent tutto è a portata di mano, e rientri quando vuoi senza dipendere dai mezzi pubblici.",
    faqs: [
      { q: "Quanto dista Cannigione dall'aeroporto di Olbia?", a: "Circa 32 km, percorribili in 35 minuti. Consegniamo l'auto all'aeroporto o direttamente a Cannigione." },
      { q: "Cannigione è comoda per visitare la Costa Smeralda?", a: "Sì, è una base strategica: Porto Cervo dista 15 min, Baja Sardinia 10 min, le spiagge principali 15-20 min." },
      { q: "Accettate bancomat per il noleggio a Cannigione?", a: "Sì, KS Rent accetta bancomat, prepagate e contanti per il deposito cauzionale." },
    ],
    relatedSlugs: ["capriccioli", "noleggio-auto-arzachena", "noleggio-auto-baja-sardinia"],
  },

  "noleggio-auto-poltu-quatu": {
    whyUs:
      "Poltu Quatu — il 'porto nascosto' in gallurese — è incastonato in un fiordo naturale della Costa Smeralda ed è una delle enclavi più esclusive della Sardegna, con la sua marina in stile borgo mediterraneo. KS Rent Sardinia serve i clienti di Poltu Quatu con auto premium — Audi RS3 da 400 CV e BMW M2 — consegnate direttamente alla marina, al Grand Hotel Poltu Quatu o alla tua residenza privata. Siamo a circa 30 km da Olbia, 35 minuti di guida, e il nostro servizio discreto e puntuale è pensato per chi frequenta questa zona riservata e non vuole rinunciare alla libertà di muoversi in autonomia. Per chi viaggia in famiglia, il Jeep Avenger unisce comfort e capacità sugli sterrati verso le calette vicine. Un servizio curato, con valutazione 5,0/5 su Google.",
    noCreditCard:
      "Anche per Poltu Quatu, KS Rent Sardinia offre la possibilità di noleggiare senza carta di credito obbligatoria. Il deposito cauzionale può essere versato con bancomat, carta di debito, prepagata ricaricabile (Postepay, Revolut, N26) o contanti, mantenendo la privacy e la flessibilità finanziaria che i nostri clienti più esigenti apprezzano. Nessun blocco di migliaia di euro sulla carta durante il soggiorno, nessuna pre-autorizzazione sorpresa: solo condizioni chiare, comunicate via WhatsApp prima della prenotazione, anche per i veicoli premium come Audi RS3 e BMW M2. L'importo del deposito è proporzionato alla categoria del veicolo e lo conosci in anticipo. È la stessa trasparenza che applichiamo in tutta la Costa Smeralda, pensata per chi vuole godersi la vacanza senza vincoli bancari.",
    delivery:
      "Poltu Quatu dista circa 30 km da Olbia, raggiungibile in 35 minuti lungo la SP59. Consegniamo l'auto direttamente alla marina del Grand Hotel Poltu Quatu, al resort o all'ingresso del complesso residenziale, in coordinamento con il personale della struttura. Per chi arriva in yacht ci coordiniamo con la marina per la consegna allo sbarco; per chi atterra all'aeroporto Costa Smeralda (OLB) o arriva al porto di Olbia Isola Bianca, il trasferimento dell'auto è incluso nel servizio a domicilio. Il servizio è attivo tutti i giorni dalle 10:00 alle 22:30, festivi inclusi, anche con preavviso di poche ore. La consegna è gratuita nel comune di Olbia; per Poltu Quatu il costo è dichiarato in anticipo nel preventivo, in base alla distanza.",
    vacation:
      "Poltu Quatu è il punto di partenza perfetto per esplorare la Costa Smeralda più autentica. Le spiagge di Grande Pevero e Cala del Faro sono a 5 minuti d'auto, Porto Cervo a 10 minuti con la sua Piazzetta e le boutique, e il borgo di San Pantaleo — con il suo celebre mercatino artigianale del giovedì e le gallerie d'arte — a 15 minuti nell'entroterra granitico. Al mattino raggiungi le calette prima della folla, nel pomeriggio rientri al fiordo per un bagno nelle acque riparate, e la sera scegli tra i ristoranti della marina o un agriturismo gallurese. Un'auto premium KS Rent completa l'esperienza di una vacanza esclusiva, dandoti l'autonomia che a Poltu Quatu, lontano dai mezzi pubblici, fa davvero la differenza. Prenota online e ritira a Olbia, all'aeroporto o al porto.",
    faqs: [
      { q: "KS Rent consegna l'auto alla marina di Poltu Quatu?", a: "Sì, consegniamo direttamente alla marina, al Grand Hotel o alle residenze del complesso." },
      { q: "Quanto costa noleggiare un'auto di lusso per Poltu Quatu?", a: "I prezzi variano in base al modello e alla stagione. Audi RS3 e BMW M2 partono da tariffe giornaliere competitive. Contattaci per un preventivo personalizzato." },
      { q: "Posso noleggiare senza carta di credito a Poltu Quatu?", a: "Sì, accettiamo bancomat e contanti per il deposito cauzionale, anche per i veicoli premium." },
    ],
    relatedSlugs: ["grande-pevero", "cala-del-faro", "noleggio-auto-porto-cervo"],
  },

  "noleggio-auto-puntaldia": {
    whyUs:
      "Puntaldia è un resort esclusivo tra San Teodoro e la costa orientale, immerso nel verde attorno a un campo da golf e a una marina privata, con calette riservate e pinete. KS Rent Sardinia consegna l'auto direttamente al resort, alla marina o al residence, permettendoti di raggiungere le spiagge di La Cinta, Cala Brandinchi e Capo Coda Cavallo senza dipendere dalle navette interne. Siamo a circa 30 km da Olbia, appena 25-30 minuti sulla SS125: la posizione, a metà strada tra l'aeroporto e San Teodoro, è tra le più comode della costa est. L'Audi RS3 è perfetta per le strade panoramiche, mentre il Jeep Avenger conviene per gli ultimi tratti sterrati che portano alle calette più remote. Un servizio puntuale e su misura, con valutazione 5,0/5 su Google.",
    noCreditCard:
      "Per i clienti di Puntaldia, KS Rent Sardinia offre il noleggio senza carta di credito obbligatoria, con deposito cauzionale flessibile. Bancomat, carte di debito, prepagate ricaricabili (Postepay, Revolut, N26) e contanti sono tutti accettati, rendendo il noleggio accessibile anche a chi preferisce non vincolare una carta di credito durante la vacanza. Le condizioni sono trasparenti e senza sorprese: l'importo del deposito dipende dalla categoria del veicolo e te lo comunichiamo via WhatsApp prima della prenotazione, così al ritiro è tutto già chiaro. Nessuna pre-autorizzazione che blocchi fondi proprio mentre vuoi rilassarti tra golf e mare. È la flessibilità che offriamo su tutta la flotta, supercar comprese, pensata per un soggiorno senza pensieri burocratici.",
    delivery:
      "Puntaldia dista circa 30 km da Olbia, raggiungibile in 25-30 minuti lungo la SS125. Consegniamo l'auto direttamente al resort, al campo da golf, alla marina o al residence di Puntaldia. La posizione è strategica: a metà strada tra l'aeroporto Costa Smeralda (OLB) e San Teodoro, con accesso diretto alle spiagge della costa orientale. Per chi atterra in aeroporto o arriva al porto di Olbia Isola Bianca, ti portiamo l'auto allo sbarco o agli arrivi e tu guidi diretto a Puntaldia senza passaggi intermedi. Il servizio è attivo tutti i giorni dalle 10:00 alle 22:30, festivi inclusi, comodo anche per i voli serali. La consegna è gratuita nel comune di Olbia; per Puntaldia il costo è dichiarato in modo trasparente nel preventivo.",
    vacation:
      "Da Puntaldia hai accesso privilegiato ad alcune delle spiagge più belle della Sardegna orientale: Cala Brandinchi a 10 minuti, La Cinta a 15, Lu Impostu a 10 e la selvaggia Capo Coda Cavallo a soli 5 minuti, con il suo promontorio e l'isola di Tavolara all'orizzonte. Il resort offre campo da golf, marina e ristoranti, ma con un'auto KS Rent puoi scoprire anche i borghi dell'entroterra, le cantine e i ristoranti di pesce sulla costa, da San Teodoro a Budoni. Al mattino raggiungi le calette prima dell'arrivo della folla estiva, nel pomeriggio torni in piscina o sul green, e la sera ti muovi libero verso il centro di San Teodoro per l'aperitivo. La libertà di un'auto, qui dove le navette non bastano, fa la differenza.",
    faqs: [
      { q: "KS Rent consegna l'auto al resort di Puntaldia?", a: "Sì, consegniamo direttamente al resort, alla marina o al campo da golf di Puntaldia." },
      { q: "Quali spiagge posso raggiungere da Puntaldia?", a: "Cala Brandinchi (10 min), La Cinta (15 min), Lu Impostu (10 min), Capo Coda Cavallo (5 min)." },
      { q: "Serve un SUV per le spiagge vicino a Puntaldia?", a: "Per Cala Brandinchi e Capo Coda Cavallo consigliamo il Jeep Avenger per gli ultimi tratti sterrati. Per La Cinta va bene qualsiasi auto." },
    ],
    relatedSlugs: ["cala-brandinchi", "noleggio-auto-san-teodoro", "noleggio-auto-capo-coda-cavallo"],
  },

  "noleggio-auto-porto-rotondo": {
    whyUs:
      "Porto Rotondo è eleganza senza ostentazione: una marina curata progettata negli anni '60, piazzette raffinate come Piazza San Marco e una comunità internazionale di alto livello. KS Rent Sardinia è il servizio di noleggio preferito da chi soggiorna a Porto Rotondo, grazie alla consegna rapida dalla nostra sede di Olbia — siamo a soli 18 km, la località servita più vicina — e a una flotta che include Audi RS3 e BMW M2 per chi ama guidare con stile sulle strade costiere della Gallura. Per le famiglie in residence, la Fiat Panda Hybrid e il Jeep Avenger uniscono praticità e bassi consumi. Consegniamo alla marina, agli hotel, ai residence e alle ville private, con un servizio puntuale che ci è valso una valutazione di 5,0/5 su Google e che si coordina con l'orario del tuo arrivo.",
    noCreditCard:
      "Porto Rotondo attrae un pubblico sofisticato che apprezza la semplicità e la discrezione. KS Rent Sardinia risponde a questa esigenza con il noleggio senza carta di credito obbligatoria: versi il deposito cauzionale in bancomat, carta di debito, prepagata ricaricabile (Postepay, Revolut, N26) o contanti, con condizioni chiare e restituzione senza complicazioni. Nessun blocco di fondi sulla carta durante il soggiorno, nessuna pre-autorizzazione sorpresa: solo trasparenza, anche sui veicoli premium come Audi RS3 e BMW M2. L'importo del deposito è proporzionato alla categoria del veicolo e lo comunichiamo via WhatsApp prima della prenotazione. Il nostro servizio è pensato per chi vuole godersi la vacanza senza burocrazia e per i turisti stranieri che non viaggiano con una carta di credito ad alto massimale.",
    delivery:
      "Porto Rotondo è la località più vicina alla nostra sede: soli 18 km da Olbia, raggiungibili in circa 20 minuti lungo la SP73. Consegniamo l'auto alla marina, agli hotel, ai residence e alle ville private, in tutta la zona da Punta Volpe a Marinella. Per chi arriva all'aeroporto Costa Smeralda (OLB), Porto Rotondo è la prima fermata perfetta dopo il ritiro dell'auto, a una manciata di minuti; per chi sbarca al porto di Olbia Isola Bianca, ti veniamo incontro allo sbarco. Il servizio è attivo tutti i giorni dalle 10:00 alle 22:30, festivi inclusi, anche per i voli serali. La consegna è gratuita nel comune di Olbia; per Porto Rotondo il costo, minimo data la vicinanza, è dichiarato in anticipo nel preventivo.",
    vacation:
      "Porto Rotondo è la base ideale per chi vuole esplorare sia la costa orientale sia la Costa Smeralda. A nord trovi Porto Cervo (30 min) e Baja Sardinia (35 min), a sud San Teodoro (30 min), e le spiagge di Marinella e Punta Volpe sono a 5 minuti d'auto. La Piazzetta San Marco, con le sue boutique e i caffè, si anima la sera, mentre il teatro all'aperto progettato da Andrea Cascella ospita concerti ed eventi culturali ogni estate. Con KS Rent ogni destinazione è a portata di volante: al mattino raggiungi le calette, nel pomeriggio torni in spiaggia a Marinella, e la sera ti muovi libero tra eventi e ristoranti senza dipendere dai taxi, spesso introvabili in alta stagione. Prenota online e ritira a Olbia o all'aeroporto.",
    faqs: [
      { q: "Quanto dista Porto Rotondo da Olbia?", a: "Solo 18 km, circa 20 minuti. È la località servita più vicina alla nostra sede." },
      { q: "Posso ritirare l'auto all'aeroporto e guidare fino a Porto Rotondo?", a: "Sì, KS Rent consegna all'aeroporto Costa Smeralda. Da lì a Porto Rotondo sono 20 minuti di guida panoramica." },
      { q: "Quali eventi ci sono a Porto Rotondo in estate?", a: "Il Teatro all'aperto ospita concerti e spettacoli. Con l'auto puoi raggiungere anche gli eventi a Porto Cervo e Baja Sardinia." },
    ],
    relatedSlugs: ["spiaggia-marinella", "noleggio-auto-portisco", "noleggio-auto-porto-cervo"],
  },

  "noleggio-auto-golfo-aranci": {
    whyUs:
      "Golfo Aranci è un piccolo paradiso a 15 km da Olbia, all'estremità del golfo, famoso per la spiaggia dei delfini e le acque turchesi di Cala Moresca, ai piedi del promontorio di Capo Figari. KS Rent Sardinia serve Golfo Aranci con consegna rapida e diretta — siamo a soli 15-20 minuti — permettendoti di raggiungere anche le spiagge meno conosciute come Cala Sabina e Cala Sassari, alcune accessibili solo a piedi o dal trenino estivo. La Fiat Panda Hybrid è perfetta per le stradine del paese e i suoi consumi minimi, mentre il Jeep Avenger conviene per le calette più isolate e gli sterrati di Capo Figari. Consegniamo al porto, agli hotel e alle strutture della zona, con un servizio veloce grazie alla breve distanza e una valutazione di 5,0/5 su Google.",
    noCreditCard:
      "Golfo Aranci è una meta family-friendly dove praticità e convenienza contano davvero. KS Rent Sardinia offre il noleggio senza carta di credito obbligatoria, con deposito cauzionale in bancomat, carta di debito, prepagata ricaricabile (Postepay, Revolut, N26) o contanti. È ideale per le famiglie e per chi arriva in traghetto da Livorno e vuole un'auto comoda subito, senza complicazioni bancarie né blocchi di fondi all'inizio della vacanza. Le condizioni sono trasparenti: l'importo del deposito dipende dalla categoria del veicolo e te lo comunichiamo via WhatsApp prima della prenotazione, così al ritiro non ci sono sorprese. La restituzione è altrettanto semplice — riconsegni col pieno nel punto concordato e la cauzione torna a te.",
    delivery:
      "Golfo Aranci è vicinissima: soli 15 km da Olbia, raggiungibile in 15-20 minuti lungo la litoranea che passa per Pittulongu. Consegniamo l'auto al porto — comodo per chi arriva in traghetto da Livorno con Corsica Sardinia Ferries — agli hotel, ai residence e alle strutture ricettive della zona. Il servizio è rapido proprio grazie alla breve distanza, ed è attivo tutti i giorni dalle 10:00 alle 22:30, festivi inclusi. Per chi atterra all'aeroporto Costa Smeralda (OLB), Golfo Aranci è a una manciata di minuti dopo il ritiro. La consegna è gratuita all'interno del comune di Olbia; per Golfo Aranci il costo, minimo data la vicinanza, è dichiarato in modo trasparente nel preventivo.",
    vacation:
      "Golfo Aranci offre spiagge per tutti i gusti: la Spiaggia Bianca dalla sabbia chiarissima per le famiglie, Cala Moresca per gli amanti dello snorkeling nell'area protetta di Capo Figari, Cala Sabina e Cala Sassari per chi cerca tranquillità e arriva comodamente con il trenino estivo. Non perdere l'avvistamento dei delfini in barca nel golfo e la passeggiata fino al semaforo di Capo Figari, con vista su Tavolara. Con un'auto KS Rent puoi esplorare anche la vicina Pittulongu e spingerti verso la costa di San Teodoro a sud o verso la Costa Smeralda a nord, alternando ogni giorno mare, natura ed escursioni. Prenota online e ritira dalla nostra sede al porto di Olbia o all'aeroporto: la libertà di muoverti è a 15 minuti da te.",
    faqs: [
      { q: "Golfo Aranci ha un porto per i traghetti?", a: "Sì, Golfo Aranci è servita da Sardinia Ferries (tratta Livorno). KS Rent consegna l'auto direttamente al porto." },
      { q: "Quanto dista Golfo Aranci da Olbia?", a: "Solo 15 km, circa 15-20 minuti di guida. È una delle località più vicine alla nostra sede." },
      { q: "Quali spiagge ci sono a Golfo Aranci?", a: "Spiaggia Bianca, Cala Moresca, Cala Sabina, Cala Sassari e la spiaggia dei delfini. Tutte raggiungibili in auto." },
    ],
    relatedSlugs: ["cala-moresca", "cala-sabina", "spiaggia-bianca"],
  },

  "noleggio-auto-murta-maria": {
    whyUs:
      "Murta Maria è una località residenziale tranquilla a sud di Olbia, affacciata su Porto Istana e sulle isole di Tavolara e Molara, parte dell'Area Marina Protetta. KS Rent Sardinia consegna l'auto a Murta Maria in pochi minuti, data la vicinanza alla nostra sede: siamo a soli 10 km, 10-15 minuti di guida. È la base perfetta per chi soggiorna in casa vacanza o residence e vuole alternare giornate a Porto Istana con escursioni verso San Teodoro e la costa orientale, senza dipendere dai mezzi pubblici. La Fiat Panda Hybrid è comoda e parca per gli spostamenti quotidiani, mentre il Jeep Avenger conviene per raggiungere le calette su sterrato. Un servizio rapido e diretto al tuo alloggio, con valutazione 5,0/5 su Google a confermare l'affidabilità.",
    noCreditCard:
      "Per chi soggiorna a Murta Maria, spesso in casa vacanza o appartamento, KS Rent Sardinia offre il noleggio senza carta di credito obbligatoria. Il deposito cauzionale si versa con bancomat, carta di debito, prepagata ricaricabile (Postepay, Revolut, N26) o contanti, con ritiro e consegna direttamente a domicilio. È la massima semplicità per una vacanza rilassata: nessuna pre-autorizzazione che blocchi fondi sulla carta, nessuna fila al desk. L'importo del deposito dipende dalla categoria del veicolo e te lo comunichiamo in modo chiaro via WhatsApp prima della prenotazione, così al ritiro non ci sono sorprese. Anche la restituzione è immediata, vista la vicinanza alla nostra sede di Olbia: riconsegni col pieno e la cauzione torna a te senza attese.",
    delivery:
      "Murta Maria dista solo 10 km da Olbia, raggiungibile in 10-15 minuti lungo la SP82: è una delle località più vicine alla nostra sede operativa. Consegniamo l'auto direttamente alla tua casa vacanza, al residence o all'ingresso di Porto Istana, con tempi rapidissimi. Per chi atterra all'aeroporto Costa Smeralda (OLB) o arriva al porto di Olbia Isola Bianca, ti portiamo il veicolo allo sbarco o agli arrivi e guidi diretto a Murta Maria in pochi minuti. Il servizio è attivo tutti i giorni dalle 10:00 alle 22:30, festivi inclusi, anche per i voli serali. Murta Maria fa parte del comune di Olbia: la consegna qui è quindi completamente gratuita.",
    vacation:
      "Da Murta Maria hai accesso diretto a Porto Istana, una delle spiagge più belle della Sardegna, con la sua sabbia chiara e la vista ravvicinata sull'isola di Tavolara. A 15 minuti trovi Porto Taverna e Porto San Paolo, da cui partono le barche per l'Area Marina Protetta di Tavolara; a 25 minuti San Teodoro con La Cinta e Cala Brandinchi. La posizione è strategica anche verso nord: Golfo Aranci è a 20 minuti e la Costa Smeralda con Porto Cervo a circa 40. Con un'auto KS Rent puoi vivere il mare al mattino e raggiungere il centro di Olbia in 10 minuti per cena e shopping. La libertà di muoverti rende Murta Maria una base ideale e tranquilla, lontana dalla folla ma vicina a tutto.",
    faqs: [
      { q: "Quanto dista Murta Maria dalla spiaggia di Porto Istana?", a: "Pochi minuti d'auto. Porto Istana è la spiaggia principale della zona, con vista sull'isola di Tavolara." },
      { q: "KS Rent consegna l'auto a Murta Maria?", a: "Sì, consegniamo a domicilio in soli 10-15 minuti dalla nostra sede di Olbia." },
      { q: "Murta Maria è comoda per esplorare la costa orientale?", a: "Sì, è a metà strada tra Olbia e San Teodoro, ideale come base per la costa orientale e la Costa Smeralda." },
    ],
    relatedSlugs: ["porto-istana", "porto-taverna", "noleggio-auto-san-teodoro"],
  },

  "noleggio-auto-porto-san-paolo": {
    whyUs:
      "Porto San Paolo è un pittoresco borgo di pescatori affacciato sull'isola di Tavolara, con un porticciolo caratteristico da cui partono le barche per l'Area Marina Protetta di Tavolara e Punta Coda Cavallo, e spiagge incontaminate. KS Rent Sardinia consegna l'auto direttamente a Porto San Paolo — siamo a soli 15 km, 15-20 minuti — permettendoti di esplorare la costa da Porto Istana a Capo Coda Cavallo con il veicolo più adatto. Il Jeep Avenger è consigliato per i percorsi sterrati verso le calette nascoste, mentre la Fiat Panda Hybrid è perfetta per il borgo e le spiagge principali. È la base ideale per chi cerca un turismo autentico e di mare, con la comodità di un'auto sempre pronta e una valutazione di 5,0/5 su Google.",
    noCreditCard:
      "Porto San Paolo attrae un turismo autentico e rilassato, fatto di mare, barca e natura. KS Rent Sardinia si adatta a questo spirito offrendo condizioni di noleggio semplici: accettiamo bancomat, carte di debito, prepagate ricaricabili (Postepay, Revolut, N26) e contanti per il deposito cauzionale, senza carta di credito obbligatoria. È perfetto per chi arriva in Sardegna senza volersi preoccupare delle formalità bancarie o dei blocchi di fondi sulla carta. L'importo del deposito è proporzionato alla categoria del veicolo e lo comunichiamo via WhatsApp prima della prenotazione, così sai già tutto al ritiro. Anche la restituzione è senza complicazioni: riconsegni l'auto col pieno nel punto concordato e la cauzione ti viene liberata.",
    delivery:
      "Porto San Paolo dista circa 15 km da Olbia, raggiungibile in 15-20 minuti lungo la SS125. Consegniamo l'auto al borgo, al porticciolo — comodo per chi parte in barca verso Tavolara — o alla tua struttura ricettiva, in tutta la zona di Loiri Porto San Paolo. La breve distanza garantisce tempi di consegna rapidi. Per chi atterra all'aeroporto Costa Smeralda (OLB), a circa 20 km, o arriva al porto di Olbia Isola Bianca, ti veniamo incontro allo sbarco o agli arrivi e guidi diretto senza passaggi intermedi. Il servizio è attivo tutti i giorni dalle 10:00 alle 22:30, festivi inclusi. La consegna è gratuita nel comune di Olbia; per Porto San Paolo il costo, contenuto, è dichiarato in modo trasparente nel preventivo.",
    vacation:
      "Porto San Paolo è il punto di partenza per le escursioni in barca verso l'Area Marina Protetta di Tavolara e Punta Coda Cavallo, un santuario di acque cristalline e fondali ricchi, perfetti per lo snorkeling e le immersioni. Le spiagge della zona — Porto Istana, Porto Taverna e le calette di Capo Coda Cavallo — offrono sabbia chiara e mare turchese. Tavolara stessa, con la sua parete calcarea alta oltre 500 metri, è uno spettacolo da raggiungere in barca per pranzo. Con un'auto KS Rent puoi alternare giornate di mare a escursioni verso San Teodoro (15 min) e serate a Olbia (15 min) per cena e shopping. La libertà di spostarti rende facile vivere il meglio della costa orientale, calette nascoste comprese.",
    faqs: [
      { q: "Come raggiungo Tavolara da Porto San Paolo?", a: "Dal porticciolo di Porto San Paolo partono le barche per Tavolara. KS Rent consegna l'auto al porto per la tua comodità." },
      { q: "Quale auto consigliate per Porto San Paolo?", a: "Il Jeep Avenger per le calette su sterrato, la Fiat Panda per il borgo e le spiagge principali." },
      { q: "Quanto dista Porto San Paolo dall'aeroporto?", a: "Circa 20 km, 20 minuti di guida. KS Rent consegna sia all'aeroporto che a Porto San Paolo." },
    ],
    relatedSlugs: ["porto-istana", "porto-taverna", "noleggio-auto-capo-coda-cavallo"],
  },

  "noleggio-auto-arzachena": {
    whyUs:
      "Arzachena è il comune che abbraccia l'intera Costa Smeralda, con un centro storico ricco di storia nuragica e una posizione strategica per raggiungere Porto Cervo, Baja Sardinia e Cannigione. KS Rent Sardinia serve Arzachena con la Mercedes Classe A 180d per il comfort quotidiano e i bassi consumi, e l'Audi RS3 per le serate in Costa Smeralda; per chi alloggia in agriturismo, il Jeep Avenger è perfetto su strade e sterrati dell'entroterra. Siamo a circa 25 km da Olbia, 25-30 minuti, e da Arzachena Porto Cervo è a soli 12 km (15 minuti) e Baja Sardinia a 10. La consegna è diretta al centro paese, all'agriturismo o alla tua struttura, con un servizio puntuale e una valutazione di 5,0/5 su Google. È la base più conveniente per vivere la Costa Smeralda senza i prezzi del fronte mare.",
    noCreditCard:
      "Arzachena è una base pratica e conveniente per la Costa Smeralda, scelta da chi vuole il mare premium senza i costi del lungomare. KS Rent Sardinia amplifica questa praticità con il noleggio senza carta di credito obbligatoria: deposito cauzionale con bancomat, carta di debito, prepagata ricaricabile (Postepay, Revolut, N26) o contanti, con condizioni chiare e trasparenti. È ideale per chi alloggia nell'entroterra o in agriturismo e vuole raggiungere le spiagge in auto ogni giorno senza vincoli bancari. L'importo del deposito dipende dalla categoria del veicolo e te lo comunichiamo via WhatsApp prima della prenotazione, così al ritiro è tutto già definito. Nessuna pre-autorizzazione che blocchi il plafond: solo la libertà di goderti la vacanza.",
    delivery:
      "Arzachena dista circa 25 km da Olbia, raggiungibile in 25-30 minuti lungo la SS125 e la SS729. Consegniamo l'auto al centro paese, agli agriturismi della zona e alle strutture ricettive, da Cannigione a San Pantaleo. Da Arzachena, Porto Cervo è a soli 12 km e Baja Sardinia a 10, il che la rende una base perfetta per la Costa Smeralda. Per chi atterra all'aeroporto Costa Smeralda (OLB) o arriva al porto di Olbia Isola Bianca, ti portiamo l'auto allo sbarco o agli arrivi. Il servizio è attivo tutti i giorni dalle 10:00 alle 22:30, festivi inclusi, anche per i voli serali. La consegna è gratuita nel comune di Olbia; per Arzachena il costo è dichiarato in anticipo nel preventivo.",
    vacation:
      "Arzachena non è solo Costa Smeralda: il territorio nasconde tesori archeologici tra i più importanti della Gallura, come il nuraghe La Prisgiona, le Tombe dei Giganti di Li Lolghi e Coddu Vecchiu e la necropoli di Li Muri, testimonianze di oltre tremila anni di storia. Il centro paese offre ristoranti eccellenti con cucina gallurese autentica a prezzi ragionevoli, e il vicino borgo di San Pantaleo, con il celebre mercatino artigianale del giovedì, è a pochi minuti. Con un'auto KS Rent puoi combinare mattinate al mare nelle spiagge premium della Costa Smeralda e pomeriggi culturali tra nuraghi e cantine di Vermentino nell'entroterra. La libertà di un'auto trasforma Arzachena nella base ideale per chi vuole sia mare sia cultura.",
    faqs: [
      { q: "Arzachena è comoda per raggiungere Porto Cervo?", a: "Sì, Porto Cervo dista solo 12 km (15 minuti). Arzachena è la base più conveniente per la Costa Smeralda." },
      { q: "Cosa visitare ad Arzachena oltre alle spiagge?", a: "Il nuraghe La Prisgiona, le Tombe dei Giganti di Li Lolghi, il borgo di San Pantaleo e i ristoranti galluresi." },
      { q: "KS Rent consegna l'auto agli agriturismi di Arzachena?", a: "Sì, consegniamo direttamente alla struttura, anche agli agriturismi dell'entroterra." },
    ],
    relatedSlugs: ["noleggio-auto-porto-cervo", "noleggio-auto-baja-sardinia", "noleggio-auto-cannigione"],
  },

  "noleggio-auto-budoni": {
    whyUs:
      "Budoni è una delle mete balneari più amate della costa orientale sarda, con spiagge lunghe e sabbiose dai fondali bassi, perfette per le famiglie con bambini. KS Rent Sardinia serve Budoni con consegna diretta — siamo a soli 35 km, 30-35 minuti sulla SS131 — offrendo la Fiat Panda Hybrid per chi cerca praticità e consumi minimi e il Jeep Avenger per chi vuole raggiungere le calette più isolate verso Agrustos. La nostra sede vicina garantisce tempi di consegna rapidi e un servizio affidabile, con valutazione 5,0/5 su Google. È la base ideale per una vacanza di mare in famiglia o tra giovani, con la libertà di spostarti tra le spiagge della zona e raggiungere San Teodoro in appena 15 minuti senza dipendere dai mezzi pubblici.",
    noCreditCard:
      "Budoni attrae un turismo familiare e giovane, spesso con un budget ben definito. KS Rent Sardinia risponde a questa esigenza con il noleggio senza carta di credito obbligatoria: deposito cauzionale con bancomat, carta di debito, prepagata ricaricabile (Postepay, Revolut, N26) o contanti, condizioni trasparenti e nessun costo nascosto. La vacanza inizia senza stress, senza pre-autorizzazioni che blocchino fondi proprio mentre vuoi rilassarti in spiaggia. L'importo del deposito è proporzionato alla categoria del veicolo e lo comunichiamo via WhatsApp prima della prenotazione, così al ritiro sai già esattamente cosa aspettarti. È la soluzione perfetta per famiglie e gruppi che preferiscono pagare con bancomat o prepagata, e per chi non viaggia con una carta di credito ad alto massimale.",
    delivery:
      "Budoni dista circa 35 km da Olbia, raggiungibile in 30-35 minuti lungo la SS131, un percorso semplice e diretto. Consegniamo l'auto alla tua struttura ricettiva, ai campeggi o ai villaggi turistici della zona, da Budoni mare alle frazioni costiere. Per chi atterra all'aeroporto Costa Smeralda (OLB) o arriva al porto di Olbia Isola Bianca, ti veniamo incontro allo sbarco o agli arrivi e guidi diretto a Budoni. Il servizio è attivo tutti i giorni dalle 10:00 alle 22:30, festivi inclusi, comodo anche per chi arriva con voli serali. La consegna è gratuita nel comune di Olbia; per Budoni il costo è dichiarato in modo trasparente nel preventivo, in base alla distanza.",
    vacation:
      "Budoni offre chilometri di spiagge sabbiose: la spiaggia principale del paese, Sant'Anna, Agrustos, Ottiolu e le calette verso San Teodoro, tutte con fondali bassi ideali per i bambini. L'entroterra nasconde il borgo di San Pietro, con le sue chiese rurali e i murales, e la montagna di Monte Nieddu, dove cascate e sentieri offrono trekking e fresco nelle giornate più calde. Con un'auto KS Rent puoi combinare le spiagge di Budoni con escursioni a San Teodoro (15 minuti), alla movida della costa o alle piscine naturali dell'interno. La libertà di muoverti ti permette di alternare giornate di mare puro a esplorazioni naturalistiche, vivendo una costa orientale ancora autentica e a misura di famiglia. Prenota online e ritira a Olbia o all'aeroporto.",
    faqs: [
      { q: "Quanto dista Budoni dall'aeroporto di Olbia?", a: "Circa 35 km, percorribili in 30-35 minuti. KS Rent consegna anche all'aeroporto." },
      { q: "Quale auto consigliate per Budoni?", a: "La Fiat Panda per le spiagge principali, il Jeep Avenger per le calette di Agrustos e la costa meno battuta." },
      { q: "Budoni è adatta per famiglie con bambini?", a: "Sì, le spiagge di Budoni hanno fondali bassi e sabbiosi. La Fiat Panda è comoda per seggiolini e passeggini." },
    ],
    relatedSlugs: ["noleggio-auto-agrustos", "noleggio-auto-san-teodoro", "la-cinta"],
  },

  "noleggio-auto-agrustos": {
    whyUs:
      "Agrustos è una frazione balneare tra Budoni e San Teodoro, con spiagge ampie e selvagge meno affollate rispetto alle mete più note della costa orientale. KS Rent Sardinia serve questa zona — siamo a circa 30 km, 25-30 minuti — con il Jeep Avenger, ideale per gli sterrati che portano alle calette più belle come Ottiolu e Tanaunella, e la Fiat Panda Hybrid per chi resta sulle spiagge principali e cerca consumi contenuti. La consegna è diretta al tuo alloggio, al campeggio o al villaggio. È la base perfetta per chi cerca mare incontaminato e tranquillità, restando comunque a 10 minuti dalla vita di San Teodoro: la libertà di un'auto qui fa davvero la differenza, e il nostro servizio vanta 5,0/5 su Google.",
    noCreditCard:
      "Ad Agrustos, dove il turismo è tranquillo e informale e molti soggiornano in campeggio o villaggio, KS Rent Sardinia offre il noleggio senza carta di credito obbligatoria. Il deposito cauzionale si versa con bancomat, carta di debito, prepagata ricaricabile (Postepay, Revolut, N26) o contanti, senza complicazioni né blocchi di fondi. È perfetto per chi vuole un'auto comoda senza impegni bancari all'inizio della vacanza. L'importo del deposito è proporzionato alla categoria del veicolo e te lo comunichiamo in modo chiaro via WhatsApp prima della prenotazione, così al ritiro non ci sono sorprese. Anche la restituzione è semplice: riconsegni l'auto col pieno nel punto concordato e la cauzione torna a te, per una vacanza davvero senza pensieri.",
    delivery:
      "Agrustos dista circa 30 km da Olbia, raggiungibile in 25-30 minuti: la strada è la SS131 fino a Budoni, poi una breve deviazione verso la costa. Consegniamo l'auto ai campeggi, ai villaggi turistici e alle case vacanza della zona, fino alle spiagge di Ottiolu e Tanaunella. Per chi atterra all'aeroporto Costa Smeralda (OLB) o arriva al porto di Olbia Isola Bianca, ti portiamo il veicolo allo sbarco o agli arrivi e guidi diretto senza passaggi intermedi. Il servizio è attivo tutti i giorni dalle 10:00 alle 22:30, festivi inclusi, anche per i voli serali. La consegna è gratuita nel comune di Olbia; per Agrustos il costo, contenuto, è dichiarato in modo trasparente nel preventivo, in base alla distanza.",
    vacation:
      "Agrustos è perfetta per chi cerca mare incontaminato senza la folla: le spiagge di Ottiolu, con il suo porticciolo, Tanaunella e Sant'Anna offrono sabbia dorata, acque cristalline e ampi spazi anche in alta stagione. Da qui puoi raggiungere in pochi minuti San Teodoro (10 minuti) per la vita notturna, gli aperitivi e i ristoranti, e Budoni (5 minuti) per tutti i servizi. Con un'auto KS Rent anche le calette più segrete, raggiungibili da brevi tratti sterrati, diventano accessibili: un Jeep Avenger ti porta vicino e poi prosegui a piedi per pochi minuti. È la base ideale per chi vuole giornate di mare tranquillo ma anche la libertà di spostarsi verso il divertimento quando ne ha voglia. Prenota online e ritira a Olbia o all'aeroporto.",
    faqs: [
      { q: "Come si raggiunge Agrustos?", a: "Da Olbia, SS131 fino a Budoni poi deviazione verso la costa. Circa 30 km, 25-30 minuti." },
      { q: "Le spiagge di Agrustos hanno parcheggio?", a: "Sì, la maggior parte ha parcheggi gratuiti o a pagamento in estate. Alcune calette richiedono un breve tratto a piedi." },
      { q: "Serve un SUV per Agrustos?", a: "Per le spiagge principali no, ma per le calette più isolate il Jeep Avenger è consigliato per gli ultimi tratti sterrati." },
    ],
    relatedSlugs: ["noleggio-auto-budoni", "noleggio-auto-san-teodoro", "la-cinta"],
  },

  "noleggio-auto-marinella": {
    whyUs:
      "Marinella è una spiaggia incantevole tra Porto Rotondo e Olbia, con sabbia finissima e acque poco profonde che la rendono adatta anche alle famiglie. KS Rent Sardinia serve Marinella con consegna ultra-rapida grazie alla vicinanza: siamo a soli 12 km, 12-15 minuti dalla nostra sede. L'Audi RS3 e la BMW M2 sono le più richieste dai clienti della zona, che apprezzano la guida sportiva sulle strade panoramiche verso Porto Rotondo, mentre la Fiat Panda Hybrid e la Mercedes Classe A coprono chi cerca praticità o comfort. È la base ideale per chi vuole mare cristallino a pochi minuti da Olbia e dall'aeroporto, con la libertà di fare beach-hopping lungo tutta la costa orientale. Servizio rapido e affidabile, con valutazione 5,0/5 su Google.",
    noCreditCard:
      "Per Marinella, KS Rent Sardinia offre il noleggio senza carta di credito obbligatoria, con deposito cauzionale flessibile in bancomat, carta di debito, prepagata ricaricabile (Postepay, Revolut, N26) o contanti. La vicinanza alla nostra sede rende il servizio ancora più rapido: puoi ritirare l'auto in sede o riceverla a domicilio in pochi minuti, senza pre-autorizzazioni che blocchino fondi sulla carta. Le condizioni sono trasparenti, anche sui veicoli premium come Audi RS3 e BMW M2: l'importo del deposito dipende dalla categoria del veicolo e te lo comunichiamo via WhatsApp prima della prenotazione. È la soluzione ideale per chi vuole un'auto, anche sportiva, senza vincoli bancari e con la massima semplicità all'inizio e alla fine del soggiorno.",
    delivery:
      "Marinella dista solo 12 km da Olbia, raggiungibile in 12-15 minuti lungo la SP73: è una delle consegne più rapide che offriamo. Portiamo l'auto direttamente alla spiaggia, agli hotel, ai residence o alle ville della zona, da Marinella a Punta Volpe. Per chi atterra all'aeroporto Costa Smeralda (OLB), a 15 minuti, o arriva al porto di Olbia Isola Bianca, ti veniamo incontro allo sbarco o agli arrivi e guidi diretto. Il servizio è attivo tutti i giorni dalle 10:00 alle 22:30, festivi inclusi, anche per i voli serali. La consegna è gratuita all'interno del comune di Olbia; per Marinella, vista la minima distanza, il costo è ridotto al minimo e dichiarato in anticipo nel preventivo.",
    vacation:
      "Marinella è la spiaggia perfetta per chi vuole mare cristallino a pochi minuti da Olbia: la sabbia fine e i fondali bassi la rendono ideale per le famiglie, mentre la lunga distesa offre spazio anche in alta stagione. Da qui puoi raggiungere Porto Rotondo in 5 minuti, con la sua Piazzetta e i ristoranti, Portisco in 10 e l'aeroporto di Olbia in 15. La sera, i lungomare di Marinella e Porto Rotondo regalano cene di pesce e aperitivi vista mare. Con l'auto KS Rent puoi fare beach-hopping lungo tutta la costa orientale, alternando le spiagge vicine a escursioni verso la Costa Smeralda a nord o San Teodoro a sud. La libertà di muoverti rende Marinella una base comodissima, a metà tra città e mare.",
    faqs: [
      { q: "Quanto dista Marinella da Olbia?", a: "Solo 12 km, circa 12-15 minuti. È una delle spiagge più vicine alla nostra sede." },
      { q: "Marinella è adatta per famiglie?", a: "Sì, ha fondali bassi e sabbia fine. La Fiat Panda è comoda per famiglie, ma anche la Mercedes Classe A offre spazio e comfort." },
      { q: "Posso raggiungere Porto Rotondo da Marinella?", a: "Sì, Porto Rotondo dista solo 5 minuti d'auto da Marinella." },
    ],
    relatedSlugs: ["spiaggia-marinella", "noleggio-auto-porto-rotondo", "noleggio-auto-portisco"],
  },

  "noleggio-auto-pittulongu": {
    whyUs:
      "Pittulongu è la spiaggia di Olbia: una lunga distesa di sabbia a soli 5 km dal centro città e 8 dall'aeroporto, amata dai residenti e dai turisti che cercano mare a due passi dallo scalo. KS Rent Sardinia offre consegna immediata a Pittulongu, perfetta per chi atterra e vuole andare subito in spiaggia senza perdere tempo. La Fiat Panda Hybrid è ideale per la zona, pratica, parca nei consumi e facile da parcheggiare, mentre la Mercedes Classe A offre più comfort per chi resta a lungo. La vicinanza alla nostra sede garantisce tempi di consegna minimi e un servizio rapidissimo, con valutazione 5,0/5 su Google. È la base perfetta per chi vuole mare e città allo stesso tempo, con la libertà di spostarsi in pochi minuti.",
    noCreditCard:
      "Pittulongu è frequentata sia dai turisti sia dagli olbiesi, ed è la spiaggia cittadina per eccellenza. KS Rent Sardinia offre il noleggio senza carta di credito obbligatoria per tutti: deposito cauzionale con bancomat, carta di debito, prepagata ricaricabile (Postepay, Revolut, N26) o contanti, ritiro rapido e condizioni semplici. La vicinanza alla sede rende tutto ancora più facile e veloce, senza pre-autorizzazioni che blocchino fondi sulla carta. L'importo del deposito è proporzionato alla categoria del veicolo e lo comunichiamo via WhatsApp prima della prenotazione, così al ritiro è tutto già chiaro. È la soluzione ideale per chi atterra all'aeroporto e vuole un'auto subito, pagando come preferisce, senza i vincoli tipici dei grandi network internazionali.",
    delivery:
      "Pittulongu dista appena 5 km dal centro di Olbia e 8 km dall'aeroporto Costa Smeralda (OLB): è la spiaggia servita più rapidamente in assoluto, con l'auto che può essere alla tua struttura in circa 10 minuti dalla chiamata. Consegniamo direttamente in hotel, alla casa vacanza o al parcheggio della spiaggia, lungo tutto il litorale fino a Bados. Per chi atterra in aeroporto o arriva al porto di Olbia Isola Bianca, la consegna è praticamente immediata: ti aspettiamo agli arrivi o allo sbarco. Il servizio è attivo tutti i giorni dalle 10:00 alle 22:30, festivi inclusi, anche per i voli serali. Pittulongu rientra nel comune di Olbia, quindi la consegna qui è completamente gratuita.",
    vacation:
      "Pittulongu offre spiaggia attrezzata con stabilimenti e chioschi, ristoranti sul mare e una vista spettacolare sull'isola di Tavolara, soprattutto al tramonto. Da qui puoi raggiungere Golfo Aranci in 10 minuti, Porto Istana in 15 e il centro di Olbia in 5, per shopping, aperitivi e la movida cittadina. È la base perfetta per chi vuole mare e città a portata di mano, senza scegliere tra l'uno e l'altra. Con un'auto KS Rent alterni la spiaggia di casa a escursioni verso la Costa Smeralda a nord o San Teodoro a sud, e rientri in città in pochi minuti per la sera. La vicinanza all'aeroporto la rende ideale anche per la prima e l'ultima giornata di vacanza, tra un volo e l'altro.",
    faqs: [
      { q: "Quanto dista Pittulongu dall'aeroporto di Olbia?", a: "Appena 8 km, circa 10 minuti. Perfetta per chi atterra e vuole subito il mare." },
      { q: "C'è parcheggio a Pittulongu?", a: "Sì, ci sono parcheggi lungo la spiaggia. In alta stagione conviene arrivare entro le 9:00." },
      { q: "Pittulongu è collegata al centro di Olbia?", a: "Sì, dista solo 5 km. Con l'auto KS Rent sei in centro in 5 minuti." },
    ],
    relatedSlugs: ["spiaggia-pittulongu", "noleggio-auto-golfo-aranci", "spiaggia-bianca"],
  },

  "noleggio-auto-bados": {
    whyUs:
      "Bados è una spiaggia ampia e ventilata a nord di Olbia, frequentata dagli amanti del windsurf e del kitesurf grazie al vento costante che soffia nel golfo. KS Rent Sardinia serve Bados con consegna rapida grazie alla vicinanza: siamo a soli 8 km, circa 10 minuti dalla sede. La Mercedes Classe A offre comfort e bagagliaio capiente per raggiungere anche le spiagge vicine con l'attrezzatura, mentre la Fiat Panda Hybrid è perfetta per chi cerca praticità e costi contenuti; il Jeep Avenger conviene per chi trasporta tavole e materiale sportivo. È la base ideale per una vacanza tra mare e sport acquatici, con un servizio veloce e affidabile e una valutazione di 5,0/5 su Google a confermarlo.",
    noCreditCard:
      "Per i clienti di Bados, spesso sportivi e giovani, KS Rent Sardinia offre il noleggio senza carta di credito obbligatoria. Il deposito cauzionale si versa con bancomat, carta di debito, prepagata ricaricabile (Postepay, Revolut, N26) o contanti, con tariffe competitive e nessuna complicazione. È l'auto perfetta per portare attrezzatura sportiva alla spiaggia senza pensieri burocratici né blocchi di fondi sulla carta. L'importo del deposito è proporzionato alla categoria del veicolo e te lo comunichiamo via WhatsApp prima della prenotazione, così al ritiro è tutto già chiaro. La vicinanza alla sede rende anche la restituzione immediata: riconsegni col pieno e la cauzione torna a te, per una vacanza all'insegna dello sport e della libertà.",
    delivery:
      "Bados dista solo 8 km da Olbia, raggiungibile in circa 10 minuti lungo la litoranea per Pittulongu: la consegna è rapidissima. Portiamo l'auto direttamente alla spiaggia, al parcheggio di Bados o alla tua struttura nelle vicinanze, lungo tutto il litorale settentrionale del golfo. Per chi atterra all'aeroporto Costa Smeralda (OLB) o arriva al porto di Olbia Isola Bianca, ti veniamo incontro agli arrivi o allo sbarco e guidi diretto in pochi minuti. Il servizio è attivo tutti i giorni dalle 10:00 alle 22:30, festivi inclusi, anche per i voli serali. Bados rientra nel comune di Olbia, quindi la consegna qui è completamente gratuita: paghi solo il noleggio, senza costi aggiuntivi di trasporto del veicolo.",
    vacation:
      "Bados è il paradiso degli sport acquatici: windsurf, kitesurf e SUP trovano qui le condizioni ideali grazie al vento costante e all'ampio specchio d'acqua. La spiaggia è larga e meno affollata rispetto alla vicina Pittulongu, perfetta per chi cerca spazio e libertà. Nelle giornate senza vento, l'acqua diventa cristallina e calma, ideale per il bagno e per le famiglie. Da Bados puoi raggiungere Golfo Aranci in 10 minuti, con la sua spiaggia dei delfini, e la costa verso San Teodoro in circa 20. Con un'auto KS Rent porti facilmente tavole e attrezzatura, segui il vento sulle diverse spiagge del golfo e rientri a Olbia in pochi minuti per la sera. La libertà di spostarti è la chiave per sfruttare al meglio ogni condizione di mare.",
    faqs: [
      { q: "Bados è adatta per il windsurf?", a: "Sì, è una delle migliori spiagge della zona per windsurf e kitesurf grazie al vento costante." },
      { q: "Quanto dista Bados dal centro di Olbia?", a: "Solo 8 km, circa 10 minuti d'auto." },
      { q: "Posso trasportare attrezzatura sportiva con l'auto a noleggio?", a: "Sì, il Jeep Avenger e la Mercedes Classe A hanno bagagliaio capiente per tavole e attrezzatura." },
    ],
    relatedSlugs: ["spiaggia-bados", "noleggio-auto-pittulongu", "noleggio-auto-golfo-aranci"],
  },

  "noleggio-auto-portisco": {
    whyUs:
      "Portisco è una marina esclusiva tra Porto Rotondo e Porto Cervo, con un villaggio residenziale elegante, un grande porto turistico e una spiaggia riparata. KS Rent Sardinia consegna auto premium direttamente alla marina di Portisco, al residence o alla tua villa: siamo a circa 20 km, 20-25 minuti dalla sede. L'Audi RS3 da 400 CV e la BMW M2 sono le scelte più popolari tra i clienti della marina, che amano guidare sulle strade panoramiche della Costa Smeralda, mentre la Mercedes Classe A garantisce comfort quotidiano. La posizione è perfetta come base tra Porto Rotondo (5 minuti) e Porto Cervo (25 minuti). Un servizio discreto e puntuale, pensato per chi frequenta la marina, con valutazione 5,0/5 su Google.",
    noCreditCard:
      "A Portisco, KS Rent Sardinia offre il noleggio senza carta di credito obbligatoria, con deposito cauzionale flessibile: bancomat, carta di debito, prepagata ricaricabile (Postepay, Revolut, N26) e contanti sono tutti accettati, anche sui veicoli premium come Audi RS3 e BMW M2. È un servizio discreto e senza complicazioni per i clienti delle residenze e della marina, senza pre-autorizzazioni che blocchino migliaia di euro sulla carta durante il soggiorno. L'importo del deposito dipende dalla categoria del veicolo e lo comunichiamo via WhatsApp prima della prenotazione, così al ritiro è tutto già definito. È la stessa flessibilità che offriamo in tutta la Costa Smeralda, apprezzata in particolare da chi arriva in barca e dai turisti stranieri senza carta ad alto massimale.",
    delivery:
      "Portisco dista circa 20 km da Olbia, raggiungibile in 20-25 minuti lungo la SP73 e la SP59. Consegniamo l'auto alla marina, al villaggio residenziale e alle strutture della zona, in coordinamento con il personale del porto turistico. Per chi arriva in barca ci coordiniamo con la marina per la consegna allo sbarco; per chi atterra all'aeroporto Costa Smeralda (OLB) o arriva al porto di Olbia Isola Bianca, ti veniamo incontro agli arrivi o allo sbarco. Il servizio è attivo tutti i giorni dalle 10:00 alle 22:30, festivi inclusi, anche con preavviso di poche ore. La posizione è perfetta come base tra Porto Rotondo e la Costa Smeralda. La consegna è gratuita nel comune di Olbia; per Portisco il costo è dichiarato in anticipo nel preventivo.",
    vacation:
      "Portisco offre una spiaggia riparata e una marina curata, ideale come punto di partenza per esplorare la costa con la massima libertà. Porto Rotondo è a 5 minuti, con la sua Piazzetta e gli eventi estivi al teatro all'aperto; Porto Cervo a 25 minuti, cuore della vita mondana della Costa Smeralda. L'entroterra verso Arzachena nasconde ristoranti galluresi autentici, cantine di Vermentino e il mercatino di San Pantaleo del giovedì. Con l'auto KS Rent puoi vivere il meglio di ogni zona: mattinate nelle calette, pomeriggi tra shopping e spiagge premium, serate tra ristoranti di marina ed eventi. La marina di Portisco, base nautica importante della costa, è anche un ottimo punto per chi alterna mare e barca. Prenota online e ritira a Olbia, all'aeroporto o al porto.",
    faqs: [
      { q: "KS Rent consegna alla marina di Portisco?", a: "Sì, consegniamo direttamente alla marina, al residence e alle ville di Portisco." },
      { q: "Portisco è comoda per Porto Cervo?", a: "Sì, Porto Cervo dista circa 25 minuti d'auto. Porto Rotondo è ancora più vicino, a 5 minuti." },
      { q: "Quale auto consigliate per Portisco?", a: "Audi RS3 o BMW M2 per le strade della Costa Smeralda, Mercedes Classe A per comfort quotidiano." },
    ],
    relatedSlugs: ["noleggio-auto-porto-rotondo", "noleggio-auto-porto-cervo", "spiaggia-marinella"],
  },

  "noleggio-auto-capo-coda-cavallo": {
    whyUs:
      "Capo Coda Cavallo è un'area marina protetta tra San Teodoro e Porto San Paolo, con calette incontaminate, acque cristalline e una vista ravvicinata sull'isola di Tavolara. KS Rent Sardinia consegna l'auto per esplorare questo paradiso naturale: siamo a circa 22 km, 25 minuti dalla sede. Il Jeep Avenger è il veicolo consigliato, perché le strade sterrate che portano alle spiagge più belle richiedono un SUV capace e con luci alte; la Fiat Panda Hybrid è un'alternativa per chi resta sulle spiagge principali. La libertà di un'auto è essenziale qui, dove i mezzi pubblici scarseggiano e le calette migliori si raggiungono solo su gomma. Un servizio affidabile per gli amanti della natura, con valutazione 5,0/5 su Google.",
    noCreditCard:
      "Per gli amanti della natura che scelgono Capo Coda Cavallo, KS Rent Sardinia offre il noleggio senza carta di credito obbligatoria. Il deposito cauzionale si versa con bancomat, carta di debito, prepagata ricaricabile (Postepay, Revolut, N26) o contanti, perfetto per chi vuole un'avventura tra calette e sterrati senza complicazioni bancarie né blocchi di fondi sulla carta. L'importo del deposito è proporzionato alla categoria del veicolo — anche per il Jeep Avenger consigliato in zona — e te lo comunichiamo via WhatsApp prima della prenotazione, così al ritiro non ci sono sorprese. Anche la restituzione è semplice: riconsegni l'auto col pieno nel punto concordato e la cauzione torna a te, per una vacanza nella natura davvero senza pensieri.",
    delivery:
      "Capo Coda Cavallo dista circa 22 km da Olbia, raggiungibile in 25 minuti lungo la SS125 e le strade locali verso l'area protetta. Consegniamo l'auto all'ingresso dell'area, a Porto San Paolo o alla tua struttura nella zona. Consigliamo la consegna al mattino presto per godersi le spiagge prima dell'afflusso estivo, dato che i parcheggi vicino alle calette si riempiono entro le 9:00. Per chi atterra all'aeroporto Costa Smeralda (OLB) o arriva al porto di Olbia Isola Bianca, ti veniamo incontro agli arrivi o allo sbarco e guidi diretto. Il servizio è attivo tutti i giorni dalle 10:00 alle 22:30, festivi inclusi. La consegna è gratuita nel comune di Olbia; per Capo Coda Cavallo il costo è dichiarato in modo trasparente nel preventivo.",
    vacation:
      "Capo Coda Cavallo ospita alcune delle spiagge più spettacolari della Sardegna: Cala Brandinchi — la 'piccola Tahiti' —, Lu Impostu e le calette dell'omonimo promontorio, molte raggiungibili solo a piedi o in barca. L'area marina protetta di Tavolara e Punta Coda Cavallo garantisce acque pulitissime e fondali ricchi, un sogno per lo snorkeling. Con il Jeep Avenger di KS Rent raggiungi i parcheggi più vicini alle spiagge percorrendo gli ultimi tratti sterrati, e poi prosegui a piedi per pochi minuti fino al mare. Da qui San Teodoro è a 15 minuti, con i suoi servizi e la vita serale. La libertà di muoverti, in una zona dove i mezzi pubblici scarseggiano, è ciò che ti permette di scoprire ogni caletta e di cambiare spiaggia in base al vento e all'affollamento.",
    faqs: [
      { q: "Serve un SUV per Capo Coda Cavallo?", a: "Sì, consigliamo il Jeep Avenger. Le strade verso le calette sono sterrate e in estate molto frequentate." },
      { q: "Quanto dista Capo Coda Cavallo da Olbia?", a: "Circa 22 km, 25 minuti di guida. KS Rent consegna all'ingresso dell'area protetta." },
      { q: "Le spiagge di Capo Coda Cavallo hanno parcheggio?", a: "Parcheggi sterrati vicino alle spiagge principali. In alta stagione arrivare presto (prima delle 9:00) è fondamentale." },
    ],
    relatedSlugs: ["cala-brandinchi", "lu-impostu", "noleggio-auto-san-teodoro"],
  },
};

/* ═══════════════════════════════════════════════════════
   SPIAGGE (20 pagine)
   ═══════════════════════════════════════════════════════ */

const BEACH_CONTENT: Record<string, LocalitySEOContent> = {
  "spiaggia-del-principe": {
    whyUs: "La Spiaggia del Principe, dedicata all'Aga Khan, è considerata una delle più belle del Mediterraneo. Per raggiungerla con stile, KS Rent Sardinia offre l'Audi RS3 per la strada panoramica e il Jeep Avenger per il parcheggio su sterrato. Consegniamo l'auto a Romazzino, Porto Cervo o alla tua struttura nella zona.",
    noCreditCard: "Anche per raggiungere la Spiaggia del Principe, puoi noleggiare senza carta di credito. KS Rent accetta bancomat e contanti per il deposito. Nessuna sorpresa, solo un'auto premium per una giornata in una spiaggia da sogno.",
    delivery: "La Spiaggia del Principe si trova a Romazzino, circa 32 km da Olbia (35 minuti). Il parcheggio è sterrato, a circa 500 metri dalla spiaggia. Consegniamo l'auto al parcheggio, all'Hotel Romazzino o alla tua struttura nella zona.",
    vacation: "La Spiaggia del Principe è un anfiteatro naturale di sabbia bianchissima e acque turchesi. Nelle vicinanze trovi Capriccioli (5 min), Liscia Ruja (10 min) e Porto Cervo (10 min). Arriva presto al mattino: il parcheggio è limitato e la spiaggia raggiunge la capacità massima verso le 11:00 in luglio e agosto.",
    faqs: [
      { q: "Come si raggiunge la Spiaggia del Principe in auto?", a: "Da Olbia, direzione Porto Cervo sulla SP59, poi deviazione per Romazzino. Parcheggio sterrato a 500 m dalla spiaggia." },
      { q: "Serve un SUV per la Spiaggia del Principe?", a: "Consigliato per il parcheggio sterrato, ma anche una city car può accedere con attenzione." },
      { q: "Quanto costa il parcheggio alla Spiaggia del Principe?", a: "In alta stagione il parcheggio è a pagamento (circa 5-10€). Arriva prima delle 9:00 per trovare posto." },
    ],
    relatedSlugs: ["capriccioli", "romazzino", "noleggio-auto-porto-cervo"],
  },

  "liscia-ruja": {
    whyUs: "Liscia Ruja, la 'Long Beach' della Costa Smeralda, è una distesa di sabbia dorata lunga quasi un chilometro. KS Rent Sardinia ti porta a Liscia Ruja con il veicolo perfetto: l'Audi RS3 per la strada panoramica, il Jeep Avenger per il parcheggio sterrato vicino alla spiaggia.",
    noCreditCard: "Noleggia l'auto per Liscia Ruja senza carta di credito. KS Rent accetta bancomat e contanti per il deposito cauzionale. Prenota online e ricevi l'auto a Olbia o direttamente nella zona di Porto Cervo.",
    delivery: "Liscia Ruja dista circa 30 km da Olbia, 35 minuti di guida. Il parcheggio è sterrato ma accessibile. Consegniamo l'auto agli hotel della Costa Smeralda o direttamente nell'area di Liscia Ruja.",
    vacation: "Liscia Ruja è perfetta per chi ama le lunghe passeggiate sulla sabbia e le acque cristalline. A pochi minuti trovi la Spiaggia del Principe, Capriccioli e Porto Cervo. La spiaggia ha stabilimenti attrezzati e aree libere. Con l'auto KS Rent puoi fare beach-hopping lungo tutta la Costa Smeralda.",
    faqs: [
      { q: "Liscia Ruja ha stabilimenti balneari?", a: "Sì, ci sono stabilimenti attrezzati e ampie zone di spiaggia libera. Il parcheggio è a pagamento in estate." },
      { q: "Quanto dista Liscia Ruja da Porto Cervo?", a: "Circa 8 km, 10 minuti d'auto." },
      { q: "Quale auto consigliate per Liscia Ruja?", a: "L'Audi RS3 per le strade panoramiche, il Jeep Avenger se preferite un SUV per gli sterrati dell'ultimo tratto." },
    ],
    relatedSlugs: ["spiaggia-del-principe", "capriccioli", "noleggio-auto-porto-cervo"],
  },

  "cala-brandinchi": {
    whyUs: "Cala Brandinchi, la 'piccola Tahiti' della Sardegna, è un gioiello di sabbia bianca e acque turchesi nell'area marina protetta di Capo Coda Cavallo. KS Rent Sardinia consiglia il Jeep Avenger per raggiungere il parcheggio sterrato, ma anche la Fiat Panda può farcela con attenzione. Consegniamo l'auto a San Teodoro o direttamente nella zona.",
    noCreditCard: "Per raggiungere Cala Brandinchi non serve la carta di credito. KS Rent accetta bancomat e contanti per il deposito. Pratico per chi arriva a Olbia in traghetto o volo low-cost e vuole partire subito verso le spiagge.",
    delivery: "Cala Brandinchi dista circa 27 km da Olbia, 25-30 minuti di guida. L'ultimo tratto è sterrato ma percorribile. Consegniamo l'auto a San Teodoro, Puntaldia o al parcheggio di Cala Brandinchi.",
    vacation: "Cala Brandinchi è una delle spiagge più fotografate della Sardegna: sabbia bianchissima, acqua cristallina e una pineta che offre ombra naturale. Nelle vicinanze trovi Lu Impostu (2 min), La Cinta (10 min) e il centro di San Teodoro (10 min). In estate è obbligatorio arrivare entro le 8:30 per trovare parcheggio.",
    faqs: [
      { q: "Come si raggiunge Cala Brandinchi in auto?", a: "Da Olbia, SS131 fino a San Teodoro, poi deviazione per Capo Coda Cavallo. Ultimo tratto sterrato, percorribile con attenzione." },
      { q: "Il parcheggio di Cala Brandinchi è a pagamento?", a: "Sì, in estate costa circa 5-8€. Arrivare presto è essenziale: il parcheggio si riempie velocemente." },
      { q: "Serve un SUV per Cala Brandinchi?", a: "Consigliato il Jeep Avenger per lo sterrato, ma la Fiat Panda può farcela con prudenza in condizioni normali." },
    ],
    relatedSlugs: ["lu-impostu", "la-cinta", "noleggio-auto-san-teodoro"],
  },

  "la-cinta": {
    whyUs: "La Cinta è la spiaggia iconica di San Teodoro: una lingua di sabbia lunga 5 km che separa il mare dallo stagno dei fenicotteri. KS Rent Sardinia ti porta a La Cinta con qualsiasi veicolo della flotta — la strada è asfaltata e accessibile. La Fiat Panda è perfetta per la praticità, l'Audi RS3 per chi vuole arrivare con stile.",
    noCreditCard: "Per La Cinta, KS Rent offre il noleggio senza carta di credito con consegna a San Teodoro. Deposito con bancomat o contanti. Ideale per famiglie e giovani che vogliono la spiaggia più famosa della costa orientale.",
    delivery: "La Cinta si trova a San Teodoro, circa 25 km da Olbia (20-25 minuti). Il parcheggio è ampio e asfaltato. Consegniamo l'auto al centro di San Teodoro, agli hotel o direttamente al parcheggio della spiaggia.",
    vacation: "La Cinta offre 5 km di spiaggia con fondali bassi perfetti per bambini, kitesurf nella zona ventosa e lo spettacolo dei fenicotteri nello stagno alle spalle. San Teodoro è a 5 minuti d'auto con ristoranti, bar e vita notturna. Da La Cinta puoi raggiungere Cala Brandinchi (10 min), Lu Impostu (10 min) e Puntaldia (15 min).",
    faqs: [
      { q: "La Cinta è adatta per famiglie con bambini?", a: "Sì, ha fondali bassi per centinaia di metri. Perfetta per bambini piccoli. Parcheggio ampio e accessibile." },
      { q: "Si possono vedere i fenicotteri a La Cinta?", a: "Sì, nello stagno alle spalle della spiaggia vivono colonie di fenicotteri rosa, visibili tutto l'anno." },
      { q: "Quanto dista La Cinta dal centro di San Teodoro?", a: "Solo 3 km, circa 5 minuti d'auto. Parcheggio ampio e asfaltato alla spiaggia." },
    ],
    relatedSlugs: ["cala-brandinchi", "lu-impostu", "noleggio-auto-san-teodoro"],
  },

  "lu-impostu": {
    whyUs: "Lu Impostu è una spiaggia caraibica tra San Teodoro e Capo Coda Cavallo, con acque turchesi e sabbia fine. KS Rent Sardinia consiglia il Jeep Avenger per l'accesso sterrato, ma qualsiasi auto della flotta può raggiungere il parcheggio principale. Consegniamo a San Teodoro o nella zona.",
    noCreditCard: "Per Lu Impostu, noleggia senza carta di credito con KS Rent. Deposito con bancomat o contanti. Perfetto per chi arriva a Olbia e vuole raggiungere subito le spiagge più belle della costa orientale.",
    delivery: "Lu Impostu dista circa 27 km da Olbia, 25-30 minuti. Consegniamo a San Teodoro o direttamente nella zona. Il parcheggio è a breve distanza dalla spiaggia.",
    vacation: "Lu Impostu offre acque turchesi poco profonde, ideali per lo snorkeling. Nelle vicinanze: Cala Brandinchi (2 min), La Cinta (10 min) e il centro di San Teodoro (10 min) con ristoranti e vita notturna. In estate arriva presto: i parcheggi si riempiono velocemente.",
    faqs: [
      { q: "Lu Impostu è vicina a Cala Brandinchi?", a: "Sì, sono a circa 2 minuti d'auto l'una dall'altra. Con l'auto KS Rent puoi visitare entrambe nella stessa giornata." },
      { q: "L'acqua di Lu Impostu è bassa?", a: "Sì, i fondali sono bassi per molti metri, ideale per famiglie con bambini e per lo snorkeling." },
      { q: "C'è parcheggio a Lu Impostu?", a: "Sì, parcheggio a pagamento in estate (circa 5€). Arriva prima delle 9:00 in luglio-agosto." },
    ],
    relatedSlugs: ["cala-brandinchi", "la-cinta", "noleggio-auto-capo-coda-cavallo"],
  },

  "capriccioli": {
    whyUs: "Capriccioli è una delle spiagge simbolo della Costa Smeralda, con calette di granito rosa e acqua cristallina. KS Rent Sardinia ti porta a Capriccioli con l'auto perfetta: l'Audi RS3 per le strade panoramiche, il Jeep Avenger per i parcheggi sterrati. Due calette — Capriccioli Est e Ovest — offrono scenari diversi nella stessa giornata.",
    noCreditCard: "Noleggia l'auto per Capriccioli senza carta di credito. KS Rent accetta bancomat e contanti. Prenota online e ritira all'aeroporto di Olbia o ricevi l'auto al tuo hotel in Costa Smeralda.",
    delivery: "Capriccioli dista circa 28 km da Olbia, 30-35 minuti di guida. Due parcheggi sterrati portano alle calette est e ovest. Consegniamo l'auto agli hotel della zona o direttamente alla tua struttura.",
    vacation: "Capriccioli è un anfiteatro naturale di granito e ginepri, con acque turchesi perfette per lo snorkeling. Le due calette — Est (più grande, sabbiosa) e Ovest (più intima, rocciosa) — offrono esperienze diverse. A pochi minuti trovi Romazzino, la Spiaggia del Principe e Liscia Ruja. Porto Cervo è a 10 minuti per cena e shopping.",
    faqs: [
      { q: "Capriccioli ha due spiagge?", a: "Sì, Capriccioli Est (più grande e sabbiosa) e Capriccioli Ovest (più piccola e rocciosa). Entrambe raggiungibili in auto." },
      { q: "Quanto dista Capriccioli da Porto Cervo?", a: "Circa 8 km, 10 minuti d'auto. Ideale per combinare spiaggia e vita mondana." },
      { q: "Il parcheggio di Capriccioli è a pagamento?", a: "Sì, in estate circa 5-8€. Due parcheggi separati per le calette est e ovest." },
    ],
    relatedSlugs: ["romazzino", "spiaggia-del-principe", "liscia-ruja"],
  },

  "romazzino": {
    whyUs: "Romazzino è una spiaggia esclusiva della Costa Smeralda, famosa per l'omonimo hotel 5 stelle e le acque cristalline. KS Rent Sardinia consegna auto premium direttamente all'Hotel Romazzino, alle residenze private o alla spiaggia. L'Audi RS3 è la scelta più richiesta dai clienti di questa zona ultra-luxury.",
    noCreditCard: "Anche per Romazzino, KS Rent offre il noleggio senza carta di credito. Deposito con bancomat o contanti, servizio discreto e puntuale. Pensato per i clienti più esigenti della Costa Smeralda.",
    delivery: "Romazzino dista circa 30 km da Olbia, 35 minuti di guida panoramica. Consegniamo all'Hotel Romazzino, alle ville private o al parcheggio della spiaggia pubblica.",
    vacation: "Romazzino è la quintessenza della Costa Smeralda: sabbia bianca, acqua turchese e profumo di ginepro. L'Hotel Romazzino è uno dei più esclusivi al mondo. La spiaggia pubblica è accessibile da un sentiero dal parcheggio. A pochi minuti trovi Capriccioli, la Spiaggia del Principe e Porto Cervo.",
    faqs: [
      { q: "La spiaggia di Romazzino è pubblica?", a: "Sì, la spiaggia è pubblica anche se l'hotel adiacente è privato. L'accesso è da un sentiero dal parcheggio." },
      { q: "KS Rent consegna all'Hotel Romazzino?", a: "Sì, consegniamo direttamente all'hotel o alle residenze della zona." },
      { q: "Quanto dista Romazzino da Porto Cervo?", a: "Solo 5 km, circa 7 minuti d'auto." },
    ],
    relatedSlugs: ["spiaggia-del-principe", "capriccioli", "noleggio-auto-porto-cervo"],
  },

  "grande-pevero": {
    whyUs: "Grande Pevero è la spiaggia più amata di Baja Sardinia, con sabbia fine e acque calme protette dal vento. KS Rent Sardinia ti porta a Grande Pevero con la BMW M2 o l'Audi RS3, perfette per le strade della Costa Smeralda. Consegniamo l'auto al tuo hotel o direttamente a Baja Sardinia.",
    noCreditCard: "Per Grande Pevero, noleggia senza carta di credito con KS Rent. Deposito flessibile con bancomat o contanti. Prenota online e inizia la tua giornata di mare senza stress burocratici.",
    delivery: "Grande Pevero si trova a Baja Sardinia, circa 28 km da Olbia (30-35 minuti). Il parcheggio è a breve distanza dalla spiaggia. Consegniamo l'auto a Baja Sardinia, Porto Cervo o alla tua struttura.",
    vacation: "Grande Pevero è un'insenatura protetta con acque calme e trasparenti, ideale per lo snorkeling. La spiaggia è divisa tra zona libera e stabilimenti. Baja Sardinia è a 2 minuti d'auto con ristoranti, bar e il famoso Phi Beach per l'aperitivo al tramonto. Da qui puoi raggiungere Porto Cervo (10 min) e Poltu Quatu (5 min).",
    faqs: [
      { q: "Grande Pevero è adatta per lo snorkeling?", a: "Sì, le acque calme e trasparenti sono perfette per lo snorkeling, soprattutto ai lati rocciosi della baia." },
      { q: "Quanto dista Grande Pevero dal Phi Beach?", a: "Il Phi Beach è a Baja Sardinia, a soli 2-3 minuti d'auto da Grande Pevero." },
      { q: "C'è spiaggia libera a Grande Pevero?", a: "Sì, la spiaggia ha sia stabilimenti attrezzati che ampie zone libere." },
    ],
    relatedSlugs: ["cala-del-faro", "noleggio-auto-baja-sardinia", "noleggio-auto-poltu-quatu"],
  },

  "cala-moresca": {
    whyUs: "Cala Moresca è una piccola baia incantata tra Golfo Aranci e Olbia, con acque turchesi e un fondale ricco. KS Rent Sardinia ti porta a Cala Moresca in pochi minuti dalla sede. Il Jeep Avenger è consigliato per l'ultimo tratto sterrato, ma anche la Fiat Panda può raggiungere il parcheggio con prudenza.",
    noCreditCard: "Noleggia per Cala Moresca senza carta di credito. Deposito con bancomat o contanti. La vicinanza alla nostra sede rende tutto rapido e semplice.",
    delivery: "Cala Moresca si trova a circa 12 km da Olbia, sulla strada per Golfo Aranci. Solo 15 minuti di guida. Consegniamo l'auto ovunque nella zona.",
    vacation: "Cala Moresca è un piccolo paradiso per gli amanti dello snorkeling: fondali ricchi di pesci e posidonia. La spiaggia è piccola e intima, meglio arrivare presto. Nelle vicinanze: Cala Sabina (5 min), Golfo Aranci (5 min) e Pittulongu (10 min). Perfetta per una giornata lontano dalla folla.",
    faqs: [
      { q: "Come si raggiunge Cala Moresca?", a: "Da Olbia, direzione Golfo Aranci. Deviazione sterrata verso il mare. Circa 12 km, 15 minuti." },
      { q: "Cala Moresca è affollata?", a: "È una spiaggia piccola. In alta stagione conviene arrivare entro le 9:00 per trovare posto." },
      { q: "Serve un SUV per Cala Moresca?", a: "Consigliato per lo sterrato dell'ultimo tratto. La Fiat Panda può farcela con attenzione." },
    ],
    relatedSlugs: ["cala-sabina", "noleggio-auto-golfo-aranci", "spiaggia-bianca"],
  },

  "cala-sabina": {
    whyUs: "Cala Sabina è una spiaggia ampia e familiare vicino a Golfo Aranci, con acque basse e sabbia fine. KS Rent Sardinia offre consegna rapida dalla sede di Olbia (15 km). La Fiat Panda è perfetta per Cala Sabina: parcheggio facile e strada asfaltata fino alla spiaggia.",
    noCreditCard: "Per Cala Sabina, noleggia senza carta di credito. KS Rent accetta bancomat e contanti. Perfetto per famiglie che vogliono un'auto pratica senza complicazioni bancarie.",
    delivery: "Cala Sabina dista circa 15 km da Olbia, 15-20 minuti. La strada è asfaltata e il parcheggio è ampio. Consegniamo a Golfo Aranci o direttamente alla spiaggia.",
    vacation: "Cala Sabina è ideale per famiglie: fondali bassi per centinaia di metri, sabbia fine e parcheggio comodo. A pochi minuti trovi Cala Moresca (5 min) per lo snorkeling e Golfo Aranci (5 min) per ristoranti e gelato. Con l'auto KS Rent puoi esplorare tutta la costa da Pittulongu a Porto Istana.",
    faqs: [
      { q: "Cala Sabina è adatta per bambini?", a: "Sì, ha fondali bassi e sabbia fine. Parcheggio comodo e vicino alla spiaggia." },
      { q: "Quanto dista Cala Sabina da Golfo Aranci?", a: "Circa 3 km, 5 minuti d'auto." },
      { q: "C'è un bar o ristorante a Cala Sabina?", a: "In estate ci sono chioschi sulla spiaggia. Per ristoranti, Golfo Aranci è a 5 minuti." },
    ],
    relatedSlugs: ["cala-moresca", "noleggio-auto-golfo-aranci", "spiaggia-bianca"],
  },

  "spiaggia-bianca": {
    whyUs: "Spiaggia Bianca, a Golfo Aranci, è una distesa di sabbia candida con vista sull'isola di Tavolara. KS Rent Sardinia consegna l'auto per raggiungere questa spiaggia in soli 15 minuti dalla sede. La Fiat Panda è ideale per le famiglie, la Mercedes Classe A per chi cerca comfort.",
    noCreditCard: "Noleggia per Spiaggia Bianca senza carta di credito con KS Rent. Deposito con bancomat o contanti. Servizio rapido grazie alla vicinanza della nostra sede.",
    delivery: "Spiaggia Bianca dista circa 14 km da Olbia, 15 minuti. Strada asfaltata e parcheggio nelle vicinanze. Consegniamo a Golfo Aranci o direttamente alla spiaggia.",
    vacation: "Spiaggia Bianca deve il nome alla sua sabbia candida, tra le più bianche della Gallura. Le acque sono limpide e poco profonde, con vista su Tavolara. Da qui puoi raggiungere Cala Moresca (5 min), Cala Sabina (3 min) e il centro di Golfo Aranci per pesce fresco. Con l'auto KS Rent, il litorale di Olbia è tutto a portata di mano.",
    faqs: [
      { q: "Perché si chiama Spiaggia Bianca?", a: "Per la sabbia insolitamente bianca e fine, tra le più candide della Gallura. L'acqua è turchese e poco profonda." },
      { q: "Quanto dista Spiaggia Bianca dall'aeroporto?", a: "Circa 18 km, 20 minuti. Perfetta per un bagno appena atterrati, con l'auto KS Rent." },
      { q: "C'è parcheggio a Spiaggia Bianca?", a: "Sì, parcheggio nelle vicinanze. In estate può essere affollato, consigliamo di arrivare presto." },
    ],
    relatedSlugs: ["cala-sabina", "cala-moresca", "noleggio-auto-golfo-aranci"],
  },

  "porto-istana": {
    whyUs: "Porto Istana è una spiaggia spettacolare con vista sull'isola di Tavolara, a soli 12 km da Olbia. KS Rent Sardinia offre consegna rapidissima. La spiaggia ha quattro calette collegate tra loro, perfette per una giornata di esplorazione. Qualsiasi auto della nostra flotta è adatta: la strada è asfaltata.",
    noCreditCard: "Per Porto Istana, noleggia senza carta di credito con KS Rent. Deposito con bancomat o contanti. La vicinanza alla sede rende il servizio ultra-rapido.",
    delivery: "Porto Istana dista solo 12 km da Olbia, 12-15 minuti. Parcheggio a pagamento in estate, a 200 metri dalla spiaggia. Consegniamo a Murta Maria, Porto San Paolo o direttamente nell'area.",
    vacation: "Porto Istana offre quattro calette con sabbia finissima e l'iconica vista su Tavolara. Le acque sono cristalline e poco profonde. Da qui puoi raggiungere Porto Taverna (5 min), Porto San Paolo (5 min) e San Teodoro (20 min). Il parcheggio è a pagamento in estate (5-8€), ma la spiaggia vale ogni centesimo.",
    faqs: [
      { q: "Porto Istana ha diverse calette?", a: "Sì, quattro calette collegate tra loro. La prima è la più grande e attrezzata, le altre sono più intime." },
      { q: "Quanto costa il parcheggio a Porto Istana?", a: "In estate circa 5-8€ al giorno. Il parcheggio è a 200 metri dalla spiaggia." },
      { q: "Si vede Tavolara da Porto Istana?", a: "Sì, Porto Istana offre una delle viste più spettacolari sull'isola di Tavolara, proprio di fronte." },
    ],
    relatedSlugs: ["porto-taverna", "noleggio-auto-murta-maria", "noleggio-auto-porto-san-paolo"],
  },

  "porto-taverna": {
    whyUs: "Porto Taverna è una spiaggia selvaggia e ventilata tra Olbia e San Teodoro, amata da chi cerca tranquillità e natura incontaminata. KS Rent Sardinia consegna l'auto per raggiungere Porto Taverna in soli 15 minuti dalla sede. Il Jeep Avenger è ideale per chi vuole esplorare anche le calette secondarie.",
    noCreditCard: "Per Porto Taverna, noleggia senza carta di credito con KS Rent. Deposito con bancomat o contanti. Perfetto per gli amanti della natura che non vogliono complicazioni.",
    delivery: "Porto Taverna dista circa 15 km da Olbia, 15-20 minuti. La strada è asfaltata fino al parcheggio. Consegniamo nella zona o al tuo alloggio.",
    vacation: "Porto Taverna è una spiaggia lunga e ventilata, perfetta per passeggiate e windsurf. Le acque sono cristalline con vista su Tavolara e Molara. Meno affollata di Porto Istana, offre un'esperienza più selvaggia. Da qui puoi raggiungere Porto Istana (5 min), Capo Coda Cavallo (10 min) e San Teodoro (15 min).",
    faqs: [
      { q: "Porto Taverna è ventilata?", a: "Sì, è esposta al vento. Ottima per windsurf, ma in giornate ventose la sabbia può essere fastidiosa." },
      { q: "Porto Taverna è affollata in estate?", a: "Meno di Porto Istana e La Cinta. È una scelta perfetta per chi cerca tranquillità." },
      { q: "Si può fare windsurf a Porto Taverna?", a: "Sì, il vento costante la rende una delle spiagge migliori della zona per windsurf e kitesurf." },
    ],
    relatedSlugs: ["porto-istana", "noleggio-auto-capo-coda-cavallo", "noleggio-auto-murta-maria"],
  },

  "rena-bianca": {
    whyUs: "Rena Bianca è una spiaggia bandiera blu nell'estremo nord della Sardegna, con sabbia bianchissima e vista sulle Bocche di Bonifacio e la Corsica. Noleggia un'auto a Olbia con KS Rent Sardinia per raggiungere questa zona — la Mercedes Classe A è ideale per i 60 km di trasferimento dalla nostra sede.",
    noCreditCard: "Noleggia da KS Rent Sardinia a Olbia anche senza carta di credito (deposito con bancomat o contanti) e guida in autonomia fino a Rena Bianca. Distanza 60 km, circa 1 ora di guida lungo la SS133.",
    delivery: "Rena Bianca si trova nell'estremo nord della Gallura, circa 60 km da Olbia (55-60 minuti). Il parcheggio è a 200 metri dalla spiaggia. Il ritiro auto è dalla nostra sede a Olbia (Viale Aldo Moro 367) o ai punti di consegna in città (aeroporto OLB, porto Isola Bianca).",
    vacation: "Rena Bianca è la spiaggia bandiera blu del nord Sardegna, con vista sulla Corsica nelle giornate limpide. Il centro paese è a 200 metri con ristoranti, gelaterie e shopping. Da qui puoi raggiungere Capo Testa (5 min) con le sue rocce granitiche e la Valle della Luna, e Palau (25 min) per l'imbarco verso La Maddalena.",
    faqs: [
      { q: "Si vede la Corsica da Rena Bianca?", a: "Sì, nelle giornate limpide si vedono chiaramente le coste della Corsica, distante solo 12 km." },
      { q: "Come si raggiunge Rena Bianca da Olbia?", a: "Noleggia un'auto a Olbia con KS Rent e percorri la SS133 verso nord. 60 km, circa 1 ora di guida." },
      { q: "Quanto dista Rena Bianca da Capo Testa?", a: "Solo 5 km, 7 minuti d'auto. Imperdibile la visita alle rocce granitiche e alla Valle della Luna." },
    ],
    relatedSlugs: ["capo-testa", "noleggio-auto-palau", "noleggio-auto-olbia"],
  },

  "cala-del-faro": {
    whyUs: "Cala del Faro è una spiaggia esclusiva vicino a Baja Sardinia, protetta dal vento e con acque calme e turchesi. KS Rent Sardinia consegna auto premium per raggiungere questa zona della Costa Smeralda. L'Audi RS3 e la BMW M2 sono le più richieste dai clienti della zona.",
    noCreditCard: "Per Cala del Faro, noleggia senza carta di credito con KS Rent. Deposito con bancomat o contanti. Un servizio semplice per una destinazione esclusiva.",
    delivery: "Cala del Faro dista circa 28 km da Olbia, 30-35 minuti. Consegniamo a Baja Sardinia, Porto Cervo o alla tua struttura. La spiaggia è vicina al resort Cala del Faro.",
    vacation: "Cala del Faro è una baia riparata con acque calme, perfetta per nuotare e fare snorkeling. Il resort omonimo offre servizi esclusivi. A pochi minuti trovi Grande Pevero (3 min), Baja Sardinia (5 min) e Porto Cervo (10 min). Con l'auto KS Rent puoi esplorare tutta la costa nord della Smeralda.",
    faqs: [
      { q: "Cala del Faro è una spiaggia pubblica?", a: "Sì, la spiaggia è pubblica anche se adiacente al resort Cala del Faro. L'accesso è libero." },
      { q: "Quanto dista Cala del Faro da Baja Sardinia?", a: "Circa 3 km, 5 minuti d'auto." },
      { q: "Cala del Faro è ventilata?", a: "No, è una baia riparata dal vento. Le acque sono calme, ideali per nuotare e per famiglie." },
    ],
    relatedSlugs: ["grande-pevero", "noleggio-auto-baja-sardinia", "noleggio-auto-poltu-quatu"],
  },

  "la-celvia": {
    whyUs: "La Celvia è una spiaggia gioiello tra Porto Cervo e Baja Sardinia, con sabbia rosata e acque cristalline. KS Rent Sardinia ti porta a La Celvia con l'auto perfetta per la Costa Smeralda. L'Audi RS3 è ideale per le strade panoramiche della zona.",
    noCreditCard: "Per La Celvia, noleggia senza carta di credito con KS Rent. Deposito con bancomat o contanti. Nessuna complicazione per goderti una delle spiagge più belle della Smeralda.",
    delivery: "La Celvia dista circa 30 km da Olbia, 35 minuti. Si raggiunge dalla strada Porto Cervo-Baja Sardinia. Parcheggio sterrato limitato. Consegniamo agli hotel della zona.",
    vacation: "La Celvia è una delle spiagge più fotogeniche della Costa Smeralda: sabbia rosata, rocce di granito e acqua turchese. È meno affollata rispetto a Capriccioli e Liscia Ruja. Porto Cervo è a 5 minuti, Baja Sardinia a 7 minuti. Ideale per una giornata di mare in totale relax.",
    faqs: [
      { q: "Come si raggiunge La Celvia?", a: "Dalla strada Porto Cervo-Baja Sardinia, deviazione sterrata. Parcheggio limitato, arrivare presto in estate." },
      { q: "La Celvia è affollata?", a: "Meno di Capriccioli e Liscia Ruja. È una spiaggia più intima e meno conosciuta." },
      { q: "La sabbia di La Celvia è davvero rosa?", a: "Sì, ha sfumature rosate dovute ai frammenti di granito e corallo. L'effetto è più visibile al mattino." },
    ],
    relatedSlugs: ["noleggio-auto-porto-cervo", "noleggio-auto-baja-sardinia", "capriccioli"],
  },

  "spiaggia-marinella": {
    whyUs: "Spiaggia Marinella è una lunga distesa di sabbia tra Olbia e Porto Rotondo, perfetta per chi cerca mare e comodità. KS Rent Sardinia la serve in soli 12 minuti dalla sede. Qualsiasi auto della flotta è adatta: la strada è asfaltata e il parcheggio è comodo.",
    noCreditCard: "Per Spiaggia Marinella, noleggia senza carta di credito con KS Rent. La vicinanza alla sede rende tutto veloce: deposito con bancomat o contanti e sei in spiaggia in pochi minuti.",
    delivery: "Spiaggia Marinella dista solo 12 km da Olbia, 12-15 minuti. Parcheggio ampio vicino alla spiaggia. Consegniamo ovunque nella zona.",
    vacation: "Spiaggia Marinella offre sabbia fine e acque cristalline con vista panoramica. È meno affollata rispetto alle spiagge di Golfo Aranci e ha ristoranti e bar sulla spiaggia. Porto Rotondo è a 5 minuti per la vita serale. Con l'auto KS Rent puoi fare beach-hopping verso Portisco (10 min) e le spiagge della Costa Smeralda (30 min).",
    faqs: [
      { q: "Spiaggia Marinella ha stabilimenti?", a: "Sì, stabilimenti attrezzati e zone di spiaggia libera. Ristoranti e bar direttamente sulla spiaggia." },
      { q: "Quanto dista Marinella da Porto Rotondo?", a: "Solo 5 km, 5-7 minuti d'auto." },
      { q: "È facile parcheggiare a Spiaggia Marinella?", a: "Sì, c'è un ampio parcheggio vicino alla spiaggia. In alta stagione arriva entro le 10:00." },
    ],
    relatedSlugs: ["noleggio-auto-porto-rotondo", "noleggio-auto-portisco", "noleggio-auto-marinella"],
  },

  "spiaggia-bados": {
    whyUs: "Spiaggia Bados è il paradiso del windsurf e kitesurf a soli 8 km da Olbia. KS Rent Sardinia offre consegna ultra-rapida per questa spiaggia. Il Jeep Avenger ha bagagliaio capiente per l'attrezzatura sportiva, la Fiat Panda è perfetta per chi vuole semplicemente un bagno.",
    noCreditCard: "Per Spiaggia Bados, noleggia senza carta di credito con KS Rent. Deposito con bancomat o contanti. Ideale per sportivi e giovani che vogliono un'auto pratica e veloce.",
    delivery: "Spiaggia Bados dista solo 8 km da Olbia, 10 minuti. La consegna è la più rapida che offriamo. Portiamo l'auto alla spiaggia, al parcheggio o alla tua struttura.",
    vacation: "Bados è la spiaggia degli sportivi: windsurf, kitesurf e sup trovano condizioni perfette grazie al vento costante. La spiaggia è ampia e mai troppo affollata. Nelle giornate calme, l'acqua è cristallina per il bagno. Da Bados puoi raggiungere Pittulongu (5 min), Golfo Aranci (10 min) e il centro di Olbia (10 min).",
    faqs: [
      { q: "Bados è adatta per il kitesurf?", a: "Sì, è una delle migliori spiagge della zona per kitesurf e windsurf grazie al vento costante da nord-ovest." },
      { q: "Il parcheggio di Bados è gratuito?", a: "In gran parte sì. Alcuni tratti sono a pagamento in alta stagione." },
      { q: "Posso noleggiare un SUV per portare l'attrezzatura da kite?", a: "Sì, il Jeep Avenger ha un bagagliaio capiente perfetto per tavole, ali e attrezzatura sportiva." },
    ],
    relatedSlugs: ["spiaggia-pittulongu", "noleggio-auto-bados", "noleggio-auto-golfo-aranci"],
  },

  "spiaggia-pittulongu": {
    whyUs: "Spiaggia Pittulongu è il mare di Olbia: una lunga spiaggia a 5 km dal centro con vista su Tavolara. KS Rent Sardinia offre la consegna più rapida in assoluto per questa spiaggia. Perfetta come prima o ultima spiaggia della vacanza, a pochi minuti dall'aeroporto.",
    noCreditCard: "Per Pittulongu, noleggia senza carta di credito con KS Rent. La vicinanza estrema alla sede rende il servizio istantaneo. Deposito con bancomat o contanti.",
    delivery: "Pittulongu dista 5 km dal centro di Olbia e 8 km dall'aeroporto. Consegna in 10 minuti. Parcheggio sulla spiaggia.",
    vacation: "Pittulongu è la spiaggia urbana di Olbia: lunga, attrezzata e con vista mozzafiato su Tavolara. Ristoranti e bar sulla spiaggia, fondali bassi per famiglie. Da qui puoi raggiungere Bados (5 min), Golfo Aranci (10 min) e Porto Istana (15 min). Ideale per chi alloggia in città e vuole il mare a portata di mano.",
    faqs: [
      { q: "Pittulongu è raggiungibile dall'aeroporto?", a: "Sì, dista solo 8 km dall'aeroporto di Olbia. Con l'auto KS Rent sei in spiaggia in 10 minuti dall'atterraggio." },
      { q: "Ci sono ristoranti a Pittulongu?", a: "Sì, diversi ristoranti e bar direttamente sulla spiaggia. Cucina di pesce fresco e pizza." },
      { q: "Pittulongu è adatta per bambini?", a: "Sì, fondali bassi e sabbia fine. Stabilimenti attrezzati con lettini, ombrelloni e aree gioco." },
    ],
    relatedSlugs: ["spiaggia-bados", "noleggio-auto-pittulongu", "noleggio-auto-golfo-aranci"],
  },

  "capo-testa": {
    whyUs: "Capo Testa è un luogo magico: formazioni di granito scolpite dal vento, la Valle della Luna e due spiagge — Rena di Ponente e Rena di Levante. KS Rent Sardinia ti porta a Capo Testa con il veicolo giusto: il Jeep Avenger per gli sterrati, la Mercedes Classe A per il comfort del lungo trasferimento da Olbia.",
    noCreditCard: "Per Capo Testa, noleggia senza carta di credito con KS Rent. Deposito con bancomat o contanti. Perfetto per gli esploratori che vogliono raggiungere l'estremo nord della Sardegna senza vincoli.",
    delivery: "Capo Testa dista circa 63 km da Olbia, 60-65 minuti di guida. Il ritiro auto è dalla nostra sede di Olbia (Viale Aldo Moro 367) o ai punti di consegna in città (aeroporto OLB, porto Isola Bianca).",
    vacation: "Capo Testa è un museo naturale a cielo aperto: rocce granitiche modellate dal vento in forme surreali, la misteriosa Valle della Luna (meta degli hippie dagli anni '60) e due spiagge opposte — Rena di Ponente (tramonto) e Rena di Levante (alba). Il faro è raggiungibile a piedi con una passeggiata panoramica.",
    faqs: [
      { q: "Come si raggiunge Capo Testa da Olbia?", a: "Da Olbia, SS133 verso nord per circa 63 km, 1 ora di guida. Noleggia l'auto da KS Rent a Olbia (aeroporto OLB, porto, o sede)." },
      { q: "Cosa è la Valle della Luna?", a: "Un'insenatura rocciosa a Capo Testa, famosa per le formazioni granitiche e la comunità hippie degli anni '60-'70. Raggiungibile a piedi." },
      { q: "Serve un SUV per Capo Testa?", a: "Per la strada principale no, è asfaltata. Per alcuni sentieri secondari verso le calette nascoste, il Jeep Avenger è consigliato." },
    ],
    relatedSlugs: ["rena-bianca", "noleggio-auto-palau", "noleggio-auto-olbia"],
  },
};

/* ═══════════════════════════════════════════════════════
   DEFAULT FALLBACK (per slug non ancora mappati)
   ═══════════════════════════════════════════════════════ */

const DEFAULT_LOCATION_CONTENT: LocalitySEOContent = {
  whyUs:
    "KS Rent Sardinia è il servizio di noleggio auto di riferimento a Olbia e in tutta la Gallura. Offriamo una flotta premium con Audi RS3, BMW M2, Mercedes Classe A, Jeep Avenger e Fiat Panda, con consegna a domicilio in tutte le località della costa smeralda e della costa orientale. Il nostro team è disponibile dalle 10:00 alle 22:30 per portarti l'auto dove ne hai bisogno.",
  noCreditCard:
    "A differenza delle grandi catene di autonoleggio, KS Rent Sardinia accetta anche bancomat e contanti per il deposito cauzionale. Nessuna pre-autorizzazione sulla carta, nessun blocco fondi, nessuna sorpresa al rientro. Solo condizioni chiare, trasparenti e pensate per il viaggiatore moderno che vuole esplorare la Sardegna in totale libertà.",
  delivery:
    "Consegniamo l'auto direttamente alla tua struttura ricettiva, all'aeroporto Costa Smeralda di Olbia o al porto di Olbia Isola Bianca. Il nostro servizio è attivo dalle 10:00 alle 22:30, 7 giorni su 7. Contattaci su WhatsApp per coordinare il ritiro e la consegna al tuo orario preferito.",
  vacation:
    "La Sardegna nord-orientale offre paesaggi mozzafiato, acque cristalline e una cultura enogastronomica unica. Noleggiare un'auto con KS Rent Sardinia ti permette di vivere ogni angolo di questo paradiso con la massima comodità: dalle calette segrete della Costa Smeralda ai borghi dell'entroterra gallurese. Prenota online e parti all'avventura.",
  faqs: [
    { q: "Come funziona il noleggio con KS Rent Sardinia?", a: "Prenoti online, scegli il veicolo e il punto di consegna. Ti portiamo l'auto all'aeroporto, al porto o alla tua struttura. Accettiamo bancomat e contanti." },
    { q: "Serve la carta di credito per noleggiare?", a: "No, KS Rent Sardinia accetta anche bancomat, prepagate e contanti per il deposito cauzionale." },
    { q: "In quali orari è attivo il servizio?", a: "Dalle 10:00 alle 22:30, 7 giorni su 7, anche nei festivi." },
  ],
};

/* ═══════════════════════════════════════════════════════
   EXPORT: funzione per ottenere il contenuto SEO per slug
   ═══════════════════════════════════════════════════════ */

export function getLocalitySEOContent(slug: string): LocalitySEOContent {
  const base = LOCATION_CONTENT[slug] || BEACH_CONTENT[slug] || DEFAULT_LOCATION_CONTENT;
  const extra = getExtraData(slug);

  if (!extra) return base;

  return {
    ...base,
    snippetBait: base.snippetBait || extra.snippetBait,
    distanceFromOlbia: base.distanceFromOlbia || extra.distanceFromOlbia,
    vehicleReason: base.vehicleReason || extra.vehicleReason,
    localTips: base.localTips && base.localTips.length > 0 ? base.localTips : extra.localTips,
    ctaText: base.ctaText || extra.ctaText,
  };
}

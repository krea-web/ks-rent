/**
 * Contenuto SEO unico per ogni pagina localita e spiaggia.
 * Utilizzato da DynamicPage.tsx per differenziare i 4 blocchi SEO
 * e le FAQ, evitando contenuto duplicato penalizzato da Google.
 */

export interface LocalityFAQ {
  q: string;
  a: string;
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
  /** FAQ specifiche per la localita */
  faqs: LocalityFAQ[];
  /** Slug di localita/spiagge correlate per link interni */
  relatedSlugs?: string[];
}

/* ═══════════════════════════════════════════════════════
   LOCALITA (21 pagine)
   ═══════════════════════════════════════════════════════ */

const LOCATION_CONTENT: Record<string, LocalitySEOContent> = {
  "noleggio-auto-porto-cervo": {
    whyUs:
      "Porto Cervo è la capitale mondiale del lusso nautico e KS Rent Sardinia è il partner ideale per chi atterra a Olbia e vuole raggiungere la Piazzetta o la Promenade du Port in totale stile. La nostra flotta premium — Audi RS3, BMW M2, Mercedes Classe A — è pensata per chi frequenta yacht club, ristoranti stellati e boutique esclusive. Consegniamo direttamente al porto turistico, all'Hotel Cala di Volpe o alla tua villa privata, con un servizio discreto e puntuale che i nostri clienti VIP apprezzano da anni.",
    noCreditCard:
      "Anche a Porto Cervo, dove il lusso è la norma, KS Rent Sardinia si distingue: accettiamo bancomat, prepagate e contanti per il deposito cauzionale. Nessun blocco sulla carta, nessuna pre-autorizzazione sorpresa. Un vantaggio concreto per chi preferisce gestire le spese della vacanza in Costa Smeralda senza vincoli bancari, mantenendo la massima flessibilità finanziaria durante il soggiorno.",
    delivery:
      "Da Olbia a Porto Cervo sono circa 30 km, percorribili in 35-40 minuti lungo la panoramica SP59. Consegniamo l'auto direttamente al porto turistico, alla Marina di Porto Cervo, agli hotel 5 stelle come il Cervo Hotel o il Romazzino, oppure alla tua villa privata. Il servizio è disponibile dalle 10:00 alle 22:30, anche con preavviso di poche ore.",
    vacation:
      "Porto Cervo non è solo vita mondana: a pochi minuti trovi le spiagge di Capriccioli, Liscia Ruja e la Spiaggia del Principe. Con un'auto a noleggio KS Rent puoi esplorare le calette nascoste della Costa Smeralda al mattino, pranzare a Porto Cervo e cenare in un agriturismo dell'entroterra di Arzachena. Prenota online e parti dalla nostra sede al porto di Olbia o dall'aeroporto Costa Smeralda.",
    faqs: [
      { q: "Quanto ci vuole per la consegna dell'auto a Porto Cervo?", a: "Circa 35-40 minuti dalla nostra sede di Olbia. Consegniamo al porto turistico, agli hotel o alla villa." },
      { q: "Posso noleggiare una supercar a Porto Cervo senza carta di credito?", a: "Sì. KS Rent Sardinia accetta anche bancomat e contanti come deposito cauzionale, anche per i veicoli premium." },
      { q: "Quali auto di lusso sono disponibili per Porto Cervo?", a: "Audi RS3 Sportback, BMW M2 Coupé, Mercedes Classe A 180d e Jeep Avenger. La disponibilità varia in base alla stagione." },
    ],
    relatedSlugs: ["capriccioli", "liscia-ruja", "noleggio-auto-baja-sardinia"],
  },

  "noleggio-auto-san-teodoro": {
    whyUs:
      "San Teodoro è la meta preferita dalle famiglie e dai giovani che cercano spiagge caraibiche a pochi chilometri da Olbia. KS Rent Sardinia ti permette di raggiungere La Cinta, Cala Brandinchi e Lu Impostu con il veicolo più adatto: un Jeep Avenger per gli sterrati che portano alle calette, o una Fiat Panda agile per il centro paese. Siamo a soli 25 km da San Teodoro e consegniamo l'auto direttamente al tuo alloggio.",
    noCreditCard:
      "A San Teodoro, dove molti turisti arrivano in traghetto o con voli low-cost, il noleggio senza carta di credito è un vantaggio decisivo. KS Rent accetta bancomat e contanti per il deposito, permettendoti di iniziare la vacanza subito, senza attese burocratiche al desk. Ideale per chi viaggia leggero e vuole la massima semplicità.",
    delivery:
      "San Teodoro dista solo 25 km da Olbia, circa 20-25 minuti di guida sulla SS131. Consegniamo l'auto direttamente al tuo hotel, B&B, campeggio o villaggio turistico. Se arrivi in traghetto al porto di Olbia o atterri all'aeroporto Costa Smeralda, possiamo portarti l'auto e tu guidi diretto a San Teodoro senza passaggi intermedi.",
    vacation:
      "San Teodoro offre alcune delle spiagge più belle della Sardegna: La Cinta con i suoi fenicotteri, Cala Brandinchi detta 'la piccola Tahiti', Lu Impostu con le acque turchesi. La sera il centro si anima con locali, ristoranti e mercatini. Con un'auto KS Rent puoi anche esplorare Capo Coda Cavallo, il Lago di San Teodoro e le calette segrete raggiungibili solo in auto.",
    faqs: [
      { q: "Quanto dista San Teodoro dall'aeroporto di Olbia?", a: "Circa 25 km, percorribili in 20-25 minuti. KS Rent consegna l'auto direttamente all'aeroporto o al tuo alloggio a San Teodoro." },
      { q: "Quale auto consigliate per le spiagge di San Teodoro?", a: "Il Jeep Avenger è ideale per raggiungere Cala Brandinchi e Lu Impostu su sterrato. Per La Cinta va bene anche una city car." },
      { q: "Serve la carta di credito per noleggiare a San Teodoro?", a: "No, KS Rent Sardinia accetta anche bancomat e contanti per il deposito cauzionale." },
    ],
    relatedSlugs: ["la-cinta", "cala-brandinchi", "lu-impostu"],
  },

  "noleggio-auto-baja-sardinia": {
    whyUs:
      "Baja Sardinia è il cuore della movida estiva in Costa Smeralda, con locali iconici come il Phi Beach e il Ritual. KS Rent Sardinia ti porta un'auto premium direttamente al tuo hotel o residence, perfetta per muoverti tra le spiagge di Baja Sardinia, Porto Cervo e la vicina Cala Capra. La nostra BMW M2 e l'Audi RS3 sono le più richieste dai clienti che soggiornano in questa zona esclusiva.",
    noCreditCard:
      "Anche nelle località più esclusive della Costa Smeralda, KS Rent Sardinia garantisce un noleggio senza carta di credito. A Baja Sardinia puoi ritirare la tua auto luxury pagando il deposito con bancomat o contanti. Nessuna pre-autorizzazione, nessun blocco fondi — solo trasparenza e termini chiari.",
    delivery:
      "Baja Sardinia si trova a circa 28 km da Olbia, raggiungibile in 30-35 minuti. Consegniamo al tuo hotel, al resort o direttamente al parcheggio della spiaggia. Per chi arriva all'aeroporto Costa Smeralda, il trasferimento dell'auto è incluso nel servizio di consegna a domicilio.",
    vacation:
      "Da Baja Sardinia puoi esplorare il meglio della Costa Smeralda: le spiagge di Grande Pevero e Cala del Faro sono a 5 minuti d'auto, Porto Cervo a 10 minuti, e il borgo di Arzachena con i suoi nuraghi a 15 minuti. La sera, parcheggia al Phi Beach e goditi il tramonto più famoso della Sardegna. Con KS Rent hai la libertà di vivere ogni momento.",
    faqs: [
      { q: "Quanto dista Baja Sardinia da Olbia?", a: "Circa 28 km, percorribili in 30-35 minuti. Consegniamo l'auto direttamente al tuo hotel o residence." },
      { q: "Quali spiagge posso raggiungere da Baja Sardinia?", a: "Grande Pevero (5 min), Cala del Faro (5 min), Capriccioli (10 min), Liscia Ruja (15 min), Spiaggia del Principe (20 min)." },
      { q: "KS Rent consegna l'auto a Baja Sardinia di sera?", a: "Sì, il nostro servizio è attivo fino alle 22:30, ideale per chi arriva con voli serali." },
    ],
    relatedSlugs: ["grande-pevero", "cala-del-faro", "noleggio-auto-porto-cervo"],
  },

  "noleggio-auto-palau": {
    whyUs:
      "Palau è il punto di partenza per l'Arcipelago della Maddalena e una base strategica per esplorare il nord della Gallura. KS Rent Sardinia consegna l'auto direttamente al porto di Palau, all'hotel o al tuo alloggio, permettendoti di raggiungere anche Santa Teresa Gallura, Capo Testa e le spiagge della costa settentrionale. Il Jeep Avenger è perfetto per le strade dell'entroterra, mentre la Mercedes Classe A offre comfort per i tragitti più lunghi.",
    noCreditCard:
      "A Palau, dove molti turisti arrivano per imbarcarsi verso La Maddalena, la rapidità è tutto. Con KS Rent non perdi tempo con pre-autorizzazioni su carta di credito: paghi il deposito con bancomat o contanti e parti subito. Un vantaggio reale per chi ha orari stretti tra traghetti e spostamenti.",
    delivery:
      "Palau dista circa 40 km da Olbia, raggiungibile in 40-45 minuti. Consegniamo al porto di Palau (per chi rientra da La Maddalena), agli hotel della zona o direttamente sul lungomare. Se preferisci, puoi ritirare l'auto all'aeroporto o al porto di Olbia e guidare in autonomia fino a Palau.",
    vacation:
      "Palau è la porta d'accesso all'Arcipelago della Maddalena, con le sue acque cristalline patrimonio UNESCO. Ma anche sulla terraferma non mancano le sorprese: la Roccia dell'Orso, le spiagge di Porto Pollo (paradiso del windsurf) e la vicina Capo d'Orso. Con un'auto a noleggio KS Rent puoi anche raggiungere Santa Teresa Gallura e il suggestivo Capo Testa in meno di 30 minuti.",
    faqs: [
      { q: "Posso consegnare l'auto al porto di Palau prima di imbarcarmi per La Maddalena?", a: "Sì, organizziamo ritiro e consegna direttamente al porto di Palau, coordinandoci con i tuoi orari del traghetto." },
      { q: "Quanto dista Palau dall'aeroporto di Olbia?", a: "Circa 40 km, percorribili in 40-45 minuti. KS Rent consegna anche all'aeroporto Costa Smeralda." },
      { q: "Quale auto consigliate per Palau e dintorni?", a: "La Mercedes Classe A per comfort su strade principali, il Jeep Avenger per esplorare le calette meno battute della costa nord." },
    ],
    relatedSlugs: ["rena-bianca", "capo-testa", "noleggio-auto-santa-teresa-gallura"],
  },

  "noleggio-auto-cannigione": {
    whyUs:
      "Cannigione è una perla tranquilla del Golfo di Arzachena, amata da famiglie e velisti. KS Rent Sardinia serve questa zona con consegna diretta al porto turistico, ai residence e ai camping della zona. La posizione strategica di Cannigione ti permette di raggiungere Porto Cervo, Baja Sardinia e le spiagge della costa in pochi minuti di guida. La nostra Mercedes Classe A è ideale per il comfort quotidiano.",
    noCreditCard:
      "A Cannigione il turismo è familiare e rilassato. KS Rent si adatta a questa filosofia offrendo un noleggio senza carta di credito, con deposito in bancomat o contanti e condizioni trasparenti. Nessuna sorpresa al rientro, nessun addebito nascosto — esattamente lo spirito di una vacanza serena in Gallura.",
    delivery:
      "Cannigione si trova a circa 32 km da Olbia, raggiungibile in 35 minuti. Consegniamo al porto turistico, ai residence e ai campeggi della zona. La strada da Olbia passa per Arzachena, permettendoti una sosta nel borgo gallurese se lo desideri.",
    vacation:
      "Da Cannigione puoi esplorare facilmente tutta la Costa Smeralda: Porto Cervo è a 15 minuti, Baja Sardinia a 10, e le spiagge di Capriccioli e Liscia Ruja a 20 minuti. Il lungomare di Cannigione offre ristoranti di pesce eccellenti e una vita notturna soft, perfetta per chi cerca relax dopo una giornata di mare. Con l'auto KS Rent, tutto è a portata di mano.",
    faqs: [
      { q: "Quanto dista Cannigione dall'aeroporto di Olbia?", a: "Circa 32 km, percorribili in 35 minuti. Consegniamo l'auto all'aeroporto o direttamente a Cannigione." },
      { q: "Cannigione è comoda per visitare la Costa Smeralda?", a: "Sì, è una base strategica: Porto Cervo dista 15 min, Baja Sardinia 10 min, le spiagge principali 15-20 min." },
      { q: "Accettate bancomat per il noleggio a Cannigione?", a: "Sì, KS Rent accetta bancomat, prepagate e contanti per il deposito cauzionale." },
    ],
    relatedSlugs: ["capriccioli", "noleggio-auto-arzachena", "noleggio-auto-baja-sardinia"],
  },

  "noleggio-auto-poltu-quatu": {
    whyUs:
      "Poltu Quatu, il 'porto nascosto' incastonato nel fiordo naturale della Costa Smeralda, è una delle destinazioni più esclusive della Sardegna. KS Rent Sardinia serve i clienti di Poltu Quatu con auto premium — Audi RS3 e BMW M2 — consegnate direttamente alla marina, al Grand Hotel Poltu Quatu o alla tua residenza privata. Il nostro servizio discreto è pensato per chi frequenta questa enclave di lusso.",
    noCreditCard:
      "Anche per Poltu Quatu, KS Rent offre la possibilità di noleggiare senza carta di credito. Il deposito cauzionale può essere versato con bancomat o contanti, mantenendo la privacy finanziaria che i nostri clienti più esigenti apprezzano. Nessun blocco sulla carta durante il soggiorno.",
    delivery:
      "Poltu Quatu dista circa 30 km da Olbia, raggiungibile in 35 minuti. Consegniamo direttamente alla marina del Grand Hotel Poltu Quatu, al resort o all'ingresso del complesso residenziale. Per chi arriva in yacht, il coordinamento con la capitaneria è parte del nostro servizio.",
    vacation:
      "Poltu Quatu è il punto di partenza perfetto per esplorare la Costa Smeralda più autentica. Le spiagge di Grande Pevero e Cala del Faro sono a 5 minuti, Porto Cervo a 10 minuti, e il borgo di San Pantaleo — con il suo celebre mercatino del giovedì — a 15 minuti nell'entroterra. Un'auto di lusso KS Rent completa l'esperienza di una vacanza esclusiva.",
    faqs: [
      { q: "KS Rent consegna l'auto alla marina di Poltu Quatu?", a: "Sì, consegniamo direttamente alla marina, al Grand Hotel o alle residenze del complesso." },
      { q: "Quanto costa noleggiare un'auto di lusso per Poltu Quatu?", a: "I prezzi variano in base al modello e alla stagione. Audi RS3 e BMW M2 partono da tariffe giornaliere competitive. Contattaci per un preventivo personalizzato." },
      { q: "Posso noleggiare senza carta di credito a Poltu Quatu?", a: "Sì, accettiamo bancomat e contanti per il deposito cauzionale, anche per i veicoli premium." },
    ],
    relatedSlugs: ["grande-pevero", "cala-del-faro", "noleggio-auto-porto-cervo"],
  },

  "noleggio-auto-puntaldia": {
    whyUs:
      "Puntaldia è un resort esclusivo tra San Teodoro e la costa orientale, circondato da un campo da golf e calette private. KS Rent Sardinia consegna l'auto direttamente al resort, permettendoti di raggiungere le spiagge di La Cinta, Cala Brandinchi e Capo Coda Cavallo senza dipendere da navette. L'Audi RS3 è perfetta per le strade panoramiche, il Jeep Avenger per le calette più remote.",
    noCreditCard:
      "Per i clienti di Puntaldia, KS Rent offre il noleggio senza carta di credito con deposito flessibile. Bancomat e contanti sono accettati, rendendo il noleggio accessibile anche a chi preferisce non utilizzare carte di credito durante la vacanza. Condizioni trasparenti e senza sorprese.",
    delivery:
      "Puntaldia dista circa 30 km da Olbia, raggiungibile in 25-30 minuti. Consegniamo al resort, al campo da golf o alla marina di Puntaldia. La posizione è strategica: a metà strada tra Olbia e San Teodoro, con accesso diretto alle spiagge della costa orientale.",
    vacation:
      "Da Puntaldia hai accesso privilegiato ad alcune delle spiagge più belle della Sardegna orientale: Cala Brandinchi (10 min), La Cinta (15 min), Lu Impostu (10 min) e la selvaggia Capo Coda Cavallo (5 min). Il resort offre campo da golf, marina e ristoranti, ma con un'auto KS Rent puoi scoprire anche i borghi dell'entroterra e i ristoranti di pesce sulla costa.",
    faqs: [
      { q: "KS Rent consegna l'auto al resort di Puntaldia?", a: "Sì, consegniamo direttamente al resort, alla marina o al campo da golf di Puntaldia." },
      { q: "Quali spiagge posso raggiungere da Puntaldia?", a: "Cala Brandinchi (10 min), La Cinta (15 min), Lu Impostu (10 min), Capo Coda Cavallo (5 min)." },
      { q: "Serve un SUV per le spiagge vicino a Puntaldia?", a: "Per Cala Brandinchi e Capo Coda Cavallo consigliamo il Jeep Avenger per gli ultimi tratti sterrati. Per La Cinta va bene qualsiasi auto." },
    ],
    relatedSlugs: ["cala-brandinchi", "noleggio-auto-san-teodoro", "noleggio-auto-capo-coda-cavallo"],
  },

  "noleggio-auto-porto-rotondo": {
    whyUs:
      "Porto Rotondo è eleganza senza ostentazione: una marina curata, piazzette raffinate e una comunità internazionale di alto livello. KS Rent Sardinia è il servizio di noleggio preferito da chi soggiorna a Porto Rotondo, grazie alla consegna rapida dalla nostra sede di Olbia (solo 18 km) e a una flotta che include Audi RS3 e BMW M2 per chi ama guidare con stile sulle strade costiere della Gallura.",
    noCreditCard:
      "Porto Rotondo attrae un pubblico sofisticato che apprezza la semplicità. KS Rent risponde a questa esigenza con il noleggio senza carta di credito: deposito in bancomat o contanti, condizioni chiare e restituzione senza complicazioni. Il nostro servizio è pensato per chi vuole godersi la vacanza senza burocrazia.",
    delivery:
      "Porto Rotondo è la località più vicina alla nostra sede: soli 18 km da Olbia, raggiungibili in 20 minuti. Consegniamo alla marina, agli hotel, ai residence e alle ville private. Per chi arriva all'aeroporto, Porto Rotondo è la prima fermata perfetta dopo il ritiro dell'auto.",
    vacation:
      "Porto Rotondo è la base ideale per chi vuole esplorare sia la costa orientale che la Costa Smeralda. A nord trovi Porto Cervo (30 min) e Baja Sardinia (35 min), a sud San Teodoro (30 min) e le spiagge di Marinella (5 min). Il teatro all'aperto di Porto Rotondo ospita concerti ed eventi culturali ogni estate. Con KS Rent, ogni destinazione è a portata di volante.",
    faqs: [
      { q: "Quanto dista Porto Rotondo da Olbia?", a: "Solo 18 km, circa 20 minuti. È la località servita più vicina alla nostra sede." },
      { q: "Posso ritirare l'auto all'aeroporto e guidare fino a Porto Rotondo?", a: "Sì, KS Rent consegna all'aeroporto Costa Smeralda. Da lì a Porto Rotondo sono 20 minuti di guida panoramica." },
      { q: "Quali eventi ci sono a Porto Rotondo in estate?", a: "Il Teatro all'aperto ospita concerti e spettacoli. Con l'auto puoi raggiungere anche gli eventi a Porto Cervo e Baja Sardinia." },
    ],
    relatedSlugs: ["spiaggia-marinella", "noleggio-auto-portisco", "noleggio-auto-porto-cervo"],
  },

  "noleggio-auto-golfo-aranci": {
    whyUs:
      "Golfo Aranci è un piccolo paradiso a 15 km da Olbia, famoso per la spiaggia dei delfini e le acque turchesi di Cala Moresca. KS Rent Sardinia serve Golfo Aranci con consegna rapida e diretta, permettendoti di raggiungere anche le spiagge meno conosciute come Cala Sabina e Cala Sassari. La Fiat Panda è perfetta per le stradine del paese, il Jeep Avenger per le calette più isolate.",
    noCreditCard:
      "Golfo Aranci è una meta family-friendly dove praticità e convenienza contano. KS Rent offre il noleggio senza carta di credito, con deposito in bancomat o contanti. Ideale per famiglie che vogliono un'auto comoda senza complicazioni bancarie all'inizio della vacanza.",
    delivery:
      "Golfo Aranci è vicinissima: soli 15 km da Olbia, raggiungibile in 15-20 minuti. Consegniamo al porto (per chi arriva in traghetto da Livorno con Sardinia Ferries), agli hotel e alle strutture ricettive della zona. Il servizio è rapido grazie alla breve distanza.",
    vacation:
      "Golfo Aranci offre spiagge per tutti i gusti: la Spiaggia Bianca per famiglie, Cala Moresca per gli amanti dello snorkeling, Cala Sabina per chi cerca tranquillità. Non perdere il percorso dei delfini in barca e il trenino verde che attraversa l'entroterra. Con un'auto KS Rent puoi esplorare anche Pittulongu e la costa verso San Teodoro.",
    faqs: [
      { q: "Golfo Aranci ha un porto per i traghetti?", a: "Sì, Golfo Aranci è servita da Sardinia Ferries (tratta Livorno). KS Rent consegna l'auto direttamente al porto." },
      { q: "Quanto dista Golfo Aranci da Olbia?", a: "Solo 15 km, circa 15-20 minuti di guida. È una delle località più vicine alla nostra sede." },
      { q: "Quali spiagge ci sono a Golfo Aranci?", a: "Spiaggia Bianca, Cala Moresca, Cala Sabina, Cala Sassari e la spiaggia dei delfini. Tutte raggiungibili in auto." },
    ],
    relatedSlugs: ["cala-moresca", "cala-sabina", "spiaggia-bianca"],
  },

  "noleggio-auto-murta-maria": {
    whyUs:
      "Murta Maria è una località residenziale tranquilla a sud di Olbia, affacciata su Porto Istana e le isole di Tavolara e Molara. KS Rent Sardinia consegna l'auto a Murta Maria in pochi minuti, data la vicinanza alla nostra sede. È la base perfetta per chi vuole alternare giornate a Porto Istana con escursioni verso San Teodoro e la costa orientale.",
    noCreditCard:
      "Per chi soggiorna a Murta Maria, spesso in casa vacanza o appartamento, KS Rent offre il noleggio senza carta di credito. Deposito con bancomat o contanti, ritiro e consegna a domicilio. Semplicità totale per una vacanza rilassata.",
    delivery:
      "Murta Maria dista solo 10 km da Olbia, raggiungibile in 10-15 minuti. È una delle località più vicine alla nostra sede operativa. Consegniamo direttamente alla tua casa vacanza, al residence o all'ingresso di Porto Istana.",
    vacation:
      "Da Murta Maria hai accesso diretto a Porto Istana, una delle spiagge più belle della Sardegna con vista su Tavolara. A 15 minuti trovi Porto Taverna, e a 25 minuti San Teodoro con La Cinta e Cala Brandinchi. La posizione è strategica anche per raggiungere Porto Cervo (40 min) e Golfo Aranci (20 min). Un'auto KS Rent ti apre tutte queste possibilità.",
    faqs: [
      { q: "Quanto dista Murta Maria dalla spiaggia di Porto Istana?", a: "Pochi minuti d'auto. Porto Istana è la spiaggia principale della zona, con vista sull'isola di Tavolara." },
      { q: "KS Rent consegna l'auto a Murta Maria?", a: "Sì, consegniamo a domicilio in soli 10-15 minuti dalla nostra sede di Olbia." },
      { q: "Murta Maria è comoda per esplorare la costa orientale?", a: "Sì, è a metà strada tra Olbia e San Teodoro, ideale come base per la costa orientale e la Costa Smeralda." },
    ],
    relatedSlugs: ["porto-istana", "porto-taverna", "noleggio-auto-san-teodoro"],
  },

  "noleggio-auto-porto-san-paolo": {
    whyUs:
      "Porto San Paolo è un pittoresco borgo di pescatori di fronte all'isola di Tavolara, con un porticciolo caratteristico e spiagge incontaminate. KS Rent Sardinia consegna l'auto direttamente a Porto San Paolo, permettendoti di esplorare la costa da Porto Istana a Capo Coda Cavallo con il veicolo più adatto. Il Jeep Avenger è consigliato per i percorsi sterrati verso le calette nascoste.",
    noCreditCard:
      "Porto San Paolo attrae un turismo autentico e rilassato. KS Rent si adatta a questo spirito offrendo condizioni di noleggio semplici: accettiamo bancomat e contanti per il deposito, senza carta di credito obbligatoria. Perfetto per chi arriva in Sardegna senza volersi preoccupare delle formalità bancarie.",
    delivery:
      "Porto San Paolo dista circa 15 km da Olbia, raggiungibile in 15-20 minuti. Consegniamo al borgo, al porticciolo o alla tua struttura ricettiva. La breve distanza garantisce tempi di consegna rapidi.",
    vacation:
      "Porto San Paolo è il punto di partenza per le escursioni in barca verso l'Area Marina Protetta di Tavolara e Punta Coda Cavallo. Le spiagge della zona — Porto Istana, Porto Taverna e le calette di Capo Coda Cavallo — offrono acque cristalline e fondali perfetti per lo snorkeling. Con un'auto KS Rent puoi raggiungere anche San Teodoro (15 min) e Olbia (15 min) per cena e shopping.",
    faqs: [
      { q: "Come raggiungo Tavolara da Porto San Paolo?", a: "Dal porticciolo di Porto San Paolo partono le barche per Tavolara. KS Rent consegna l'auto al porto per la tua comodità." },
      { q: "Quale auto consigliate per Porto San Paolo?", a: "Il Jeep Avenger per le calette su sterrato, la Fiat Panda per il borgo e le spiagge principali." },
      { q: "Quanto dista Porto San Paolo dall'aeroporto?", a: "Circa 20 km, 20 minuti di guida. KS Rent consegna sia all'aeroporto che a Porto San Paolo." },
    ],
    relatedSlugs: ["porto-istana", "porto-taverna", "noleggio-auto-capo-coda-cavallo"],
  },

  "noleggio-auto-arzachena": {
    whyUs:
      "Arzachena è il comune che abbraccia l'intera Costa Smeralda, con un centro storico ricco di storia nuragica e una posizione strategica per raggiungere Porto Cervo, Baja Sardinia e Cannigione. KS Rent Sardinia serve Arzachena con la Mercedes Classe A per il comfort quotidiano e l'Audi RS3 per le serate in Costa Smeralda. La consegna è diretta al centro paese o alla tua struttura.",
    noCreditCard:
      "Arzachena è una base pratica e conveniente per la Costa Smeralda. KS Rent amplifica questa praticità con il noleggio senza carta di credito: deposito con bancomat o contanti, condizioni chiare e trasparenti. Ideale per chi alloggia nell'entroterra e vuole raggiungere le spiagge in auto ogni giorno.",
    delivery:
      "Arzachena dista circa 25 km da Olbia, raggiungibile in 25-30 minuti. Consegniamo al centro paese, agli agriturismi della zona e alle strutture ricettive. Da Arzachena, Porto Cervo è a soli 12 km e Baja Sardinia a 10 km.",
    vacation:
      "Arzachena non è solo Costa Smeralda: il territorio nasconde tesori archeologici come il nuraghe La Prisgiona e le Tombe dei Giganti di Li Lolghi e Coddu Vecchiu. Il centro paese offre ristoranti eccellenti con cucina gallurese autentica. Con un'auto KS Rent, puoi combinare mattinate al mare nelle spiagge premium e pomeriggi culturali nell'entroterra. Il mercatino del giovedì a San Pantaleo è imperdibile.",
    faqs: [
      { q: "Arzachena è comoda per raggiungere Porto Cervo?", a: "Sì, Porto Cervo dista solo 12 km (15 minuti). Arzachena è la base più conveniente per la Costa Smeralda." },
      { q: "Cosa visitare ad Arzachena oltre alle spiagge?", a: "Il nuraghe La Prisgiona, le Tombe dei Giganti di Li Lolghi, il borgo di San Pantaleo e i ristoranti galluresi." },
      { q: "KS Rent consegna l'auto agli agriturismi di Arzachena?", a: "Sì, consegniamo direttamente alla struttura, anche agli agriturismi dell'entroterra." },
    ],
    relatedSlugs: ["noleggio-auto-porto-cervo", "noleggio-auto-baja-sardinia", "noleggio-auto-cannigione"],
  },

  "noleggio-auto-santa-teresa-gallura": {
    whyUs:
      "Santa Teresa Gallura è l'estremo nord della Sardegna, con le Bocche di Bonifacio che separano l'isola dalla Corsica. KS Rent Sardinia consegna l'auto per esplorare Capo Testa e le sue formazioni rocciose, Rena Bianca (la spiaggia del paese) e le calette selvagge verso Palau. La Mercedes Classe A è perfetta per il lungo trasferimento da Olbia, il Jeep Avenger per le spiagge su sterrato.",
    noCreditCard:
      "Santa Teresa è una meta popolare anche per i turisti provenienti dalla Corsica in traghetto. KS Rent Sardinia facilita il noleggio con l'opzione senza carta di credito: deposito in bancomat o contanti e ritiro rapido. Perfetto per chi scende dal traghetto e vuole partire subito alla scoperta della Gallura.",
    delivery:
      "Santa Teresa Gallura dista circa 60 km da Olbia, raggiungibile in 55-60 minuti. È la località più lontana che serviamo regolarmente. Consegniamo al porto (per chi arriva in traghetto dalla Corsica), al centro paese o alla tua struttura ricettiva. Per la distanza, consigliamo di programmare la consegna con almeno 2 ore di anticipo.",
    vacation:
      "Santa Teresa Gallura offre un mix unico: Rena Bianca nel centro paese, Capo Testa con le sue rocce granitiche scolpite dal vento (a 5 minuti), e le calette selvagge lungo la costa verso Palau. Il paese ha un centro storico vivace con ristoranti, bar e negozi. Con l'auto KS Rent puoi esplorare anche Valle della Luna, La Marmorata e le spiagge nascoste di Capo Falcone.",
    faqs: [
      { q: "KS Rent consegna l'auto a Santa Teresa Gallura?", a: "Sì, consegniamo al porto, al centro paese o alla struttura ricettiva. Distanza da Olbia: 60 km, circa 1 ora." },
      { q: "Arrivo in traghetto dalla Corsica, posso noleggiare a Santa Teresa?", a: "Sì, consegniamo al porto di Santa Teresa. Accettiamo bancomat e contanti — nessuna carta di credito necessaria." },
      { q: "Cosa vedere a Capo Testa?", a: "Le formazioni rocciose granitiche, la Valle della Luna, le spiagge di Rena di Ponente e Rena di Levante. Un SUV è consigliato per l'ultimo tratto." },
    ],
    relatedSlugs: ["capo-testa", "rena-bianca", "noleggio-auto-palau"],
  },

  "noleggio-auto-budoni": {
    whyUs:
      "Budoni è una delle mete balneari più amate della costa orientale sarda, con spiagge lunghe e sabbiose perfette per famiglie. KS Rent Sardinia serve Budoni con consegna diretta, offrendo la Fiat Panda per chi cerca praticità e il Jeep Avenger per chi vuole raggiungere le calette più isolate. La nostra sede è a soli 35 km: tempi di consegna rapidi e servizio affidabile.",
    noCreditCard:
      "Budoni attrae un turismo familiare e giovane, spesso con budget definito. KS Rent risponde a questa esigenza con il noleggio senza carta di credito: deposito con bancomat o contanti, tariffe trasparenti e nessun costo nascosto. La vacanza inizia senza stress.",
    delivery:
      "Budoni dista circa 35 km da Olbia, raggiungibile in 30-35 minuti lungo la SS131. Consegniamo alla tua struttura ricettiva, ai campeggi o ai villaggi turistici della zona. Il percorso è semplice e diretto.",
    vacation:
      "Budoni offre chilometri di spiagge sabbiose: la spiaggia principale del paese, Sant'Anna, Agrustos e le calette verso San Teodoro. L'entroterra nasconde il borgo di San Pietro, con chiese rurali e murales. Con un'auto KS Rent puoi combinare le spiagge di Budoni con escursioni a San Teodoro (15 min) e alla montagna di Monte Nieddu per trekking e panorami.",
    faqs: [
      { q: "Quanto dista Budoni dall'aeroporto di Olbia?", a: "Circa 35 km, percorribili in 30-35 minuti. KS Rent consegna anche all'aeroporto." },
      { q: "Quale auto consigliate per Budoni?", a: "La Fiat Panda per le spiagge principali, il Jeep Avenger per le calette di Agrustos e la costa meno battuta." },
      { q: "Budoni è adatta per famiglie con bambini?", a: "Sì, le spiagge di Budoni hanno fondali bassi e sabbiosi. La Fiat Panda è comoda per seggiolini e passeggini." },
    ],
    relatedSlugs: ["noleggio-auto-agrustos", "noleggio-auto-san-teodoro", "la-cinta"],
  },

  "noleggio-auto-agrustos": {
    whyUs:
      "Agrustos è una frazione balneare tra Budoni e San Teodoro, con spiagge ampie e selvagge meno affollate rispetto alle mete più note. KS Rent Sardinia serve questa zona con il Jeep Avenger, ideale per gli sterrati che portano alle calette più belle, e la Fiat Panda per chi resta sulle spiagge principali. La consegna è diretta al tuo alloggio.",
    noCreditCard:
      "Ad Agrustos, dove il turismo è tranquillo e informale, KS Rent offre il noleggio senza carta di credito. Deposito con bancomat o contanti, senza complicazioni. Perfetto per chi soggiorna in campeggio o villaggio e vuole un'auto senza impegni bancari.",
    delivery:
      "Agrustos dista circa 30 km da Olbia, raggiungibile in 25-30 minuti. Consegniamo ai campeggi, villaggi turistici e case vacanza della zona. La strada è la SS131 fino a Budoni, poi una breve deviazione verso la costa.",
    vacation:
      "Agrustos è perfetta per chi cerca mare incontaminato senza la folla. Le spiagge di Ottiolu, Tanaunella e Sant'Anna offrono sabbia dorata e acque cristalline. Da qui puoi raggiungere San Teodoro (10 min) per la vita notturna e Budoni (5 min) per i servizi. Con un'auto KS Rent, anche le calette segrete diventano accessibili.",
    faqs: [
      { q: "Come si raggiunge Agrustos?", a: "Da Olbia, SS131 fino a Budoni poi deviazione verso la costa. Circa 30 km, 25-30 minuti." },
      { q: "Le spiagge di Agrustos hanno parcheggio?", a: "Sì, la maggior parte ha parcheggi gratuiti o a pagamento in estate. Alcune calette richiedono un breve tratto a piedi." },
      { q: "Serve un SUV per Agrustos?", a: "Per le spiagge principali no, ma per le calette più isolate il Jeep Avenger è consigliato per gli ultimi tratti sterrati." },
    ],
    relatedSlugs: ["noleggio-auto-budoni", "noleggio-auto-san-teodoro", "la-cinta"],
  },

  "noleggio-auto-marinella": {
    whyUs:
      "Marinella è una spiaggia incantevole tra Porto Rotondo e Olbia, con sabbia finissima e acque poco profonde. KS Rent Sardinia serve Marinella con consegna ultra-rapida grazie alla vicinanza (12 km da Olbia). L'Audi RS3 e la BMW M2 sono le più richieste dai clienti della zona, che apprezzano la guida sportiva sulle strade panoramiche verso Porto Rotondo.",
    noCreditCard:
      "Per Marinella, KS Rent offre il noleggio senza carta di credito con deposito flessibile. La vicinanza alla nostra sede rende il servizio ancora più rapido: puoi ritirare l'auto in sede o riceverla a domicilio in pochi minuti.",
    delivery:
      "Marinella dista solo 12 km da Olbia, raggiungibile in 12-15 minuti. Consegniamo direttamente alla spiaggia, agli hotel o alle ville della zona. È una delle consegne più rapide che offriamo.",
    vacation:
      "Marinella è la spiaggia perfetta per chi vuole mare cristallino a pochi minuti da Olbia. Da qui puoi raggiungere Porto Rotondo (5 min), Portisco (10 min) e l'aeroporto di Olbia (15 min). La sera, il lungomare di Marinella e Porto Rotondo offrono ristoranti eccellenti. Con l'auto KS Rent, puoi fare beach-hopping lungo tutta la costa orientale.",
    faqs: [
      { q: "Quanto dista Marinella da Olbia?", a: "Solo 12 km, circa 12-15 minuti. È una delle spiagge più vicine alla nostra sede." },
      { q: "Marinella è adatta per famiglie?", a: "Sì, ha fondali bassi e sabbia fine. La Fiat Panda è comoda per famiglie, ma anche la Mercedes Classe A offre spazio e comfort." },
      { q: "Posso raggiungere Porto Rotondo da Marinella?", a: "Sì, Porto Rotondo dista solo 5 minuti d'auto da Marinella." },
    ],
    relatedSlugs: ["spiaggia-marinella", "noleggio-auto-porto-rotondo", "noleggio-auto-portisco"],
  },

  "noleggio-auto-pittulongu": {
    whyUs:
      "Pittulongu è la spiaggia di Olbia: una lunga distesa di sabbia a soli 5 km dal centro città, amata dai residenti e dai turisti che cercano mare vicino all'aeroporto. KS Rent Sardinia offre consegna immediata a Pittulongu, perfetta per chi atterra e vuole andare subito in spiaggia. La Fiat Panda è ideale per la zona, pratica e facile da parcheggiare.",
    noCreditCard:
      "Pittulongu è frequentata sia dai turisti che dagli olbiesi. KS Rent offre il noleggio senza carta di credito per tutti: deposito con bancomat o contanti, ritiro rapido e condizioni semplici. La vicinanza alla sede rende tutto ancora più facile.",
    delivery:
      "Pittulongu dista appena 5 km dal centro di Olbia e 8 km dall'aeroporto. È la spiaggia servita più rapidamente: l'auto può essere alla tua struttura in 10 minuti dalla chiamata.",
    vacation:
      "Pittulongu offre spiaggia attrezzata, ristoranti sul mare e una vista spettacolare sull'isola di Tavolara. Da qui puoi raggiungere Golfo Aranci (10 min), Porto Istana (15 min) e il centro di Olbia (5 min) per shopping e ristoranti. È la base perfetta per chi vuole mare e città a portata di mano.",
    faqs: [
      { q: "Quanto dista Pittulongu dall'aeroporto di Olbia?", a: "Appena 8 km, circa 10 minuti. Perfetta per chi atterra e vuole subito il mare." },
      { q: "C'è parcheggio a Pittulongu?", a: "Sì, ci sono parcheggi lungo la spiaggia. In alta stagione conviene arrivare entro le 9:00." },
      { q: "Pittulongu è collegata al centro di Olbia?", a: "Sì, dista solo 5 km. Con l'auto KS Rent sei in centro in 5 minuti." },
    ],
    relatedSlugs: ["spiaggia-pittulongu", "noleggio-auto-golfo-aranci", "spiaggia-bianca"],
  },

  "noleggio-auto-bados": {
    whyUs:
      "Bados è una spiaggia ampia e ventilata a nord di Olbia, frequentata da amanti del windsurf e del kitesurf. KS Rent Sardinia serve Bados con consegna rapida grazie alla vicinanza alla sede. La Mercedes Classe A offre comfort per raggiungere anche le spiagge vicine, mentre la Fiat Panda è perfetta per chi cerca praticità e costi contenuti.",
    noCreditCard:
      "Per i clienti di Bados, spesso sportivi e giovani, KS Rent offre il noleggio senza carta di credito. Deposito con bancomat o contanti, tariffe competitive e nessuna complicazione. L'auto perfetta per portare attrezzatura sportiva alla spiaggia.",
    delivery:
      "Bados dista solo 8 km da Olbia, raggiungibile in 10 minuti. La consegna è rapidissima. Portiamo l'auto direttamente alla spiaggia, al parcheggio di Bados o alla tua struttura nelle vicinanze.",
    vacation:
      "Bados è il paradiso degli sport acquatici: windsurf, kitesurf e sup trovano qui le condizioni ideali grazie al vento costante. La spiaggia è ampia e meno affollata rispetto a Pittulongu. Nelle giornate senza vento, l'acqua è cristallina e perfetta per il bagno. Da Bados puoi raggiungere Golfo Aranci (10 min) e la costa verso San Teodoro (20 min).",
    faqs: [
      { q: "Bados è adatta per il windsurf?", a: "Sì, è una delle migliori spiagge della zona per windsurf e kitesurf grazie al vento costante." },
      { q: "Quanto dista Bados dal centro di Olbia?", a: "Solo 8 km, circa 10 minuti d'auto." },
      { q: "Posso trasportare attrezzatura sportiva con l'auto a noleggio?", a: "Sì, il Jeep Avenger e la Mercedes Classe A hanno bagagliaio capiente per tavole e attrezzatura." },
    ],
    relatedSlugs: ["spiaggia-bados", "noleggio-auto-pittulongu", "noleggio-auto-golfo-aranci"],
  },

  "noleggio-auto-portisco": {
    whyUs:
      "Portisco è una marina esclusiva tra Porto Rotondo e Porto Cervo, con un villaggio residenziale elegante e una spiaggia riparata. KS Rent Sardinia consegna auto premium direttamente alla marina di Portisco, al residence o alla tua villa. L'Audi RS3 e la BMW M2 sono le scelte più popolari tra i clienti della marina.",
    noCreditCard:
      "A Portisco, KS Rent offre il noleggio senza carta di credito con deposito flessibile. Bancomat e contanti accettati. Un servizio discreto e senza complicazioni per i clienti delle residenze e della marina.",
    delivery:
      "Portisco dista circa 20 km da Olbia, raggiungibile in 20-25 minuti. Consegniamo alla marina, al villaggio residenziale e alle strutture della zona. La posizione è perfetta come base tra Porto Rotondo e la Costa Smeralda.",
    vacation:
      "Portisco offre una spiaggia riparata e una marina curata, ideale come punto di partenza per esplorare la costa. Porto Rotondo è a 5 minuti, Porto Cervo a 25 minuti. L'entroterra verso Arzachena nasconde ristoranti galluresi autentici e il mercatino di San Pantaleo. Con l'auto KS Rent puoi vivere il meglio di ogni zona.",
    faqs: [
      { q: "KS Rent consegna alla marina di Portisco?", a: "Sì, consegniamo direttamente alla marina, al residence e alle ville di Portisco." },
      { q: "Portisco è comoda per Porto Cervo?", a: "Sì, Porto Cervo dista circa 25 minuti d'auto. Porto Rotondo è ancora più vicino, a 5 minuti." },
      { q: "Quale auto consigliate per Portisco?", a: "Audi RS3 o BMW M2 per le strade della Costa Smeralda, Mercedes Classe A per comfort quotidiano." },
    ],
    relatedSlugs: ["noleggio-auto-porto-rotondo", "noleggio-auto-porto-cervo", "spiaggia-marinella"],
  },

  "noleggio-auto-capo-coda-cavallo": {
    whyUs:
      "Capo Coda Cavallo è un'area marina protetta tra San Teodoro e Porto San Paolo, con calette incontaminate e acque cristalline. KS Rent Sardinia consegna l'auto per esplorare questo paradiso naturale. Il Jeep Avenger è il veicolo consigliato: le strade sterrate che portano alle spiagge più belle richiedono un SUV capace. La Fiat Panda è un'alternativa per chi resta sulle spiagge principali.",
    noCreditCard:
      "Per gli amanti della natura che scelgono Capo Coda Cavallo, KS Rent offre il noleggio senza carta di credito. Deposito con bancomat o contanti, perfetto per chi vuole un'avventura in natura senza complicazioni bancarie.",
    delivery:
      "Capo Coda Cavallo dista circa 22 km da Olbia, raggiungibile in 25 minuti. Consegniamo all'ingresso dell'area protetta, a Porto San Paolo o alla tua struttura nella zona. Consigliamo la consegna al mattino per godersi le spiagge prima dell'afflusso.",
    vacation:
      "Capo Coda Cavallo ospita alcune delle spiagge più spettacolari della Sardegna: Cala Brandinchi, Lu Impostu e le calette raggiungibili solo a piedi o in barca. L'area marina protetta garantisce acque pulitissime e fondali ricchi. Con il Jeep Avenger di KS Rent puoi raggiungere i parcheggi più vicini alle spiagge su sterrato, e poi proseguire a piedi per pochi minuti.",
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
    whyUs: "Rena Bianca è la spiaggia del centro di Santa Teresa Gallura, con sabbia bianchissima e vista sulle Bocche di Bonifacio e la Corsica. KS Rent Sardinia consegna l'auto direttamente a Santa Teresa per raggiungere questa perla del nord Sardegna. La Mercedes Classe A è perfetta per il lungo trasferimento da Olbia.",
    noCreditCard: "Per Rena Bianca, noleggia senza carta di credito con KS Rent. Deposito con bancomat o contanti. Ideale per chi arriva in traghetto dalla Corsica e vuole esplorare la Gallura.",
    delivery: "Rena Bianca si trova a Santa Teresa Gallura, circa 60 km da Olbia (55-60 minuti). Il parcheggio è nel centro del paese, a 200 metri dalla spiaggia. Consegniamo al porto o al centro paese.",
    vacation: "Rena Bianca è la spiaggia bandiera blu di Santa Teresa, con vista sulla Corsica nelle giornate limpide. Il centro paese è a 200 metri con ristoranti, gelaterie e shopping. Da qui puoi raggiungere Capo Testa (5 min) con le sue rocce granitiche e la Valle della Luna, e Palau (25 min) per l'imbarco verso La Maddalena.",
    faqs: [
      { q: "Si vede la Corsica da Rena Bianca?", a: "Sì, nelle giornate limpide si vedono chiaramente le coste della Corsica, distante solo 12 km." },
      { q: "Rena Bianca è nel centro di Santa Teresa?", a: "Sì, è raggiungibile a piedi dal centro paese. Parcheggio a 200 metri." },
      { q: "Quanto dista Rena Bianca da Capo Testa?", a: "Solo 5 km, 7 minuti d'auto. Imperdibile la visita alle rocce granitiche e alla Valle della Luna." },
    ],
    relatedSlugs: ["capo-testa", "noleggio-auto-santa-teresa-gallura", "noleggio-auto-palau"],
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
    delivery: "Capo Testa dista circa 63 km da Olbia, 60-65 minuti. È la destinazione più lontana che serviamo regolarmente. Consegniamo a Santa Teresa Gallura (5 km da Capo Testa) o programmiamo la consegna con anticipo.",
    vacation: "Capo Testa è un museo naturale a cielo aperto: rocce granitiche modellate dal vento in forme surreali, la misteriosa Valle della Luna (meta degli hippie dagli anni '60) e due spiagge opposte — Rena di Ponente (tramonto) e Rena di Levante (alba). Il faro è raggiungibile a piedi con una passeggiata panoramica. Santa Teresa Gallura è a 5 minuti per servizi e ristoranti.",
    faqs: [
      { q: "Come si raggiunge Capo Testa?", a: "Da Olbia, SS133 fino a Santa Teresa Gallura, poi strada verso Capo Testa. Circa 63 km, 1 ora." },
      { q: "Cosa è la Valle della Luna?", a: "Un'insenatura rocciosa a Capo Testa, famosa per le formazioni granitiche e la comunità hippie degli anni '60-'70. Raggiungibile a piedi." },
      { q: "Serve un SUV per Capo Testa?", a: "Per la strada principale no, è asfaltata. Per alcuni sentieri secondari verso le calette nascoste, il Jeep Avenger è consigliato." },
    ],
    relatedSlugs: ["rena-bianca", "noleggio-auto-santa-teresa-gallura", "noleggio-auto-palau"],
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
  return LOCATION_CONTENT[slug] || BEACH_CONTENT[slug] || DEFAULT_LOCATION_CONTENT;
}

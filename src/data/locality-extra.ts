/**
 * Dati extra SEO unici per ogni pagina: snippet bait, distanze, tips locali, veicolo consigliato.
 * Questi dati vengono fusi con locality-content.ts nella funzione getLocalitySEOContent().
 */

import type { LocalTip } from "./locality-content";

export interface LocalityExtraData {
  snippetBait: string;
  distanceFromOlbia: string;
  vehicleReason: string;
  localTips: LocalTip[];
  ctaText?: string;
}

const EXTRA_DATA: Record<string, LocalityExtraData> = {
  /* ═══════════ LOCALITA ═══════════ */

  "noleggio-auto-porto-cervo": {
    snippetBait: "KS Rent Sardinia consegna auto di lusso direttamente a Porto Cervo in 35 minuti da Olbia. Audi RS3, BMW M2 e Jeep Avenger disponibili anche senza carta di credito. Consegna al porto turistico, hotel 5 stelle o villa privata.",
    distanceFromOlbia: "30 km, 35-40 minuti",
    vehicleReason: "A Porto Cervo i nostri clienti scelgono l'Audi RS3 per la Piazzetta e la BMW M2 per le strade panoramiche verso Romazzino. Per le famiglie in villa, il Jeep Avenger è ideale per comfort e sterrati verso le calette.",
    localTips: [
      { icon: "boat", title: "La marina al tramonto", text: "Il tramonto dalla Promenade du Port è spettacolare. Parcheggia al porto turistico entro le 18:00 in estate per goderti l'aperitivo con vista sugli yacht. Il parcheggio della Piazzetta si riempie velocemente." },
      { icon: "food", title: "Dove mangiare davvero bene", text: "Evita i ristoranti sul porto principale e prova il Pevero Golf Club Restaurant o guida 15 minuti verso San Pantaleo per cucina gallurese autentica a prezzi ragionevoli." },
      { icon: "swim", title: "Le calette segrete", text: "A 5 minuti da Porto Cervo c'è la Spiaggia del Principe (sterrato, arriva prima delle 9). Capriccioli Est e Ovest offrono snorkeling eccezionale tra graniti rosa e posidonia." },
      { icon: "camera", title: "Il Consorzio Costa Smeralda", text: "Porto Cervo fu creato dall'Aga Khan nel 1962. La chiesa di Stella Maris ospita un dipinto di El Greco. La Piazzetta si anima dopo le 21:00 con boutique e locali esclusivi." },
    ],
  },

  "noleggio-auto-san-teodoro": {
    snippetBait: "KS Rent Sardinia consegna auto a San Teodoro in soli 20 minuti da Olbia. Jeep Avenger per le spiagge su sterrato, Fiat Panda per il centro. Accettiamo bancomat e contanti — nessuna carta di credito necessaria.",
    distanceFromOlbia: "25 km, 20-25 minuti",
    vehicleReason: "Per San Teodoro consigliamo il Jeep Avenger: gli sterrati verso Cala Brandinchi e Lu Impostu richiedono un SUV capace. La Fiat Panda è perfetta per il centro paese e La Cinta, dove la strada è asfaltata.",
    localTips: [
      { icon: "clock", title: "Arriva presto a Brandinchi", text: "Cala Brandinchi chiude l'accesso auto quando il parcheggio è pieno — in luglio e agosto succede entro le 9:30. Parti da Olbia alle 8:00 con l'auto KS Rent per assicurarti il posto." },
      { icon: "wind", title: "Il segreto dello stagno", text: "Lo Stagno di San Teodoro ospita fenicotteri rosa tutto l'anno. Il punto migliore per osservarli è la sponda ovest, accessibile in auto dalla strada per La Cinta." },
      { icon: "food", title: "Aperitivo in piazza", text: "Il centro di San Teodoro si anima dal tardo pomeriggio. Via del Tirreno è la passeggiata principale con gelaterie e cocktail bar. Il mercatino serale del mercoledì è imperdibile." },
      { icon: "mountain", title: "Monte Nieddu al mattino", text: "Se vuoi una pausa dal mare, guida 20 minuti verso Monte Nieddu per trekking con vista sulla costa. Il sentiero parte dal paese di Buddittò." },
    ],
  },

  "noleggio-auto-baja-sardinia": {
    snippetBait: "KS Rent Sardinia consegna auto a Baja Sardinia in 30 minuti da Olbia. BMW M2, Audi RS3 e Mercedes Classe A per la movida della Costa Smeralda. Noleggio senza carta di credito con deposito flessibile.",
    distanceFromOlbia: "28 km, 30-35 minuti",
    vehicleReason: "Baja Sardinia è sinonimo di vita notturna e spiagge esclusive. La BMW M2 è la scelta perfetta per il Phi Beach al tramonto, l'Audi RS3 per le cene a Porto Cervo. Il Jeep Avenger serve per Grande Pevero su sterrato.",
    localTips: [
      { icon: "swim", title: "Phi Beach all'ora giusta", text: "Il Phi Beach apre al tramonto ed è il locale più iconico della Costa Smeralda. Prenota in anticipo in alta stagione e arriva con la tua auto KS Rent verso le 18:30 per il miglior posto." },
      { icon: "camera", title: "La Batteria militare", text: "Sulla punta di Baja Sardinia c'è una vecchia batteria militare con vista panoramica mozzafiato sulle isole. Raggiungibile a piedi in 10 minuti dal centro." },
      { icon: "food", title: "Cena gallurese autentica", text: "Risali verso Arzachena (15 min d'auto) per agriturismi con maialetto arrosto, zuppa gallurese e seadas. Prezzi più onesti rispetto alla costa e sapori genuini." },
      { icon: "boat", title: "Le isole in barca", text: "Dal porticciolo di Baja Sardinia partono escursioni per l'Arcipelago della Maddalena. Prenota la mattina e torna per il tramonto al Phi Beach — giornata perfetta." },
    ],
  },

  "noleggio-auto-palau": {
    snippetBait: "KS Rent Sardinia consegna auto a Palau in 40 minuti da Olbia. Mercedes Classe A e Jeep Avenger per esplorare la costa nord e l'Arcipelago della Maddalena. Noleggio senza carta di credito.",
    distanceFromOlbia: "40 km, 40-45 minuti",
    vehicleReason: "Per Palau consigliamo la Mercedes Classe A per il tragitto lungo e confortevole da Olbia. Il Jeep Avenger è perfetto per chi vuole esplorare anche Porto Pollo e le calette della costa nord raggiungibili su sterrato.",
    localTips: [
      { icon: "boat", title: "Traghetto per La Maddalena", text: "I traghetti per La Maddalena partono ogni 15-20 minuti dal porto di Palau. L'auto non serve sull'isola — parcheggia al porto (5-10€/giorno) e gira in scooter o bus." },
      { icon: "wind", title: "Porto Pollo, paradiso del vento", text: "Porto Pollo (10 min da Palau) è il paradiso europeo del windsurf e kitesurf. Il vento soffia costante da aprile a ottobre. Anche se non pratichi sport, lo spettacolo vale la deviazione." },
      { icon: "mountain", title: "Roccia dell'Orso", text: "La Roccia dell'Orso (5 min da Palau) è un monumento naturale di granito a forma di orso. Breve camminata di 15 minuti per un panorama a 360° sull'Arcipelago della Maddalena." },
      { icon: "food", title: "Pesce fresco al porto", text: "I ristoranti sul lungomare di Palau servono pesce fresco pescato la mattina. Prova la fregola con arselle o il polpo alla griglia — specialità che non trovi altrove." },
    ],
  },

  "noleggio-auto-cannigione": {
    snippetBait: "KS Rent Sardinia consegna auto a Cannigione in 35 minuti da Olbia. Base strategica per Costa Smeralda, Porto Cervo e Baja Sardinia. Mercedes Classe A e Jeep Avenger senza carta di credito.",
    distanceFromOlbia: "32 km, 35 minuti",
    vehicleReason: "A Cannigione la Mercedes Classe A è perfetta per il comfort quotidiano tra spiagge e centro paese. Il Jeep Avenger serve per le calette della costa est di Arzachena, raggiungibili solo su sterrato.",
    localTips: [
      { icon: "boat", title: "Escursioni in barca", text: "Dal porto di Cannigione partono barche per l'Arcipelago della Maddalena e le isole di Mortorio e Soffi. Prenota il giorno prima e parcheggia l'auto al porto turistico." },
      { icon: "food", title: "Il mercato del pesce", text: "Ogni mattina i pescatori vendono il pescato al porticciolo. Compra e fai cucinare al ristorante — alcuni lo fanno gratuitamente se consumi un primo piatto." },
      { icon: "swim", title: "Spiaggia di Mannena", text: "A 5 minuti da Cannigione, la spiaggia di Mannena è meno conosciuta ma bellissima: sabbia bianca, fondale basso e vista su Caprera. Perfetta con bambini." },
      { icon: "camera", title: "Arzachena e i nuraghi", text: "Guida 10 minuti verso Arzachena per visitare il nuraghe La Prisgiona e le Tombe dei Giganti di Coddu Vecchiu. Siti archeologici unici nel Mediterraneo." },
    ],
  },

  "noleggio-auto-poltu-quatu": {
    snippetBait: "KS Rent Sardinia consegna auto premium a Poltu Quatu in 35 minuti da Olbia. Audi RS3 e BMW M2 per la marina esclusiva della Costa Smeralda. Accettiamo bancomat e contanti.",
    distanceFromOlbia: "30 km, 35 minuti",
    vehicleReason: "Poltu Quatu è la marina più esclusiva della Costa Smeralda. L'Audi RS3 è la scelta naturale per i clienti della marina, la BMW M2 per chi ama la guida sportiva sulla litoranea verso Porto Cervo.",
    localTips: [
      { icon: "boat", title: "Il fiordo naturale", text: "Poltu Quatu significa 'porto nascosto' in gallurese. La marina è incastonata in un fiordo naturale che la protegge dal vento — uno dei pochi nel Mediterraneo." },
      { icon: "food", title: "Grand Hotel Poltu Quatu", text: "Il ristorante del Grand Hotel offre cucina gourmet con vista sulla marina. Dress code elegante la sera. Parcheggio riservato per ospiti e clienti." },
      { icon: "swim", title: "Grande Pevero a 3 minuti", text: "La spiaggia più vicina è Grande Pevero, raggiungibile in 3 minuti d'auto. Acque calme, fondale sabbioso e stabilimenti attrezzati." },
      { icon: "camera", title: "San Pantaleo il giovedì", text: "Ogni giovedì mattina il borgo di San Pantaleo (15 min d'auto) ospita un mercatino artigianale tra le case di granito. Atmosfera unica, lontana dal glamour costiero." },
    ],
  },

  "noleggio-auto-puntaldia": {
    snippetBait: "KS Rent Sardinia consegna auto a Puntaldia in 25 minuti da Olbia. Audi RS3 per le strade panoramiche e Jeep Avenger per le calette di Capo Coda Cavallo. Noleggio senza carta di credito.",
    distanceFromOlbia: "30 km, 25-30 minuti",
    vehicleReason: "A Puntaldia l'Audi RS3 è perfetta per le strade panoramiche costiere. Per raggiungere Cala Brandinchi e Capo Coda Cavallo su sterrato, il Jeep Avenger è la scelta ideale dei nostri clienti.",
    localTips: [
      { icon: "swim", title: "Il golf e il mare", text: "Il campo da golf di Puntaldia è uno dei più panoramici della Sardegna: 9 buche con vista sull'isola di Tavolara. Dopo il green, le spiagge sono a 5 minuti." },
      { icon: "clock", title: "Le maree di Brandinchi", text: "Con la bassa marea, Cala Brandinchi rivela una lingua di sabbia che entra nell'acqua per decine di metri. L'effetto caraibico è massimo tra le 8 e le 10 del mattino." },
      { icon: "mountain", title: "Tavolara in barca", text: "Dalla marina di Puntaldia partono barche per l'isola di Tavolara (il regno più piccolo del mondo). Escursione di mezza giornata imperdibile." },
      { icon: "food", title: "Pesce al tramonto", text: "Il ristorante del Puntaldia Resort serve pesce locale con vista sul campo da golf e il mare. Prenota il tavolo esterno per il tramonto." },
    ],
  },

  "noleggio-auto-porto-rotondo": {
    snippetBait: "KS Rent Sardinia consegna auto a Porto Rotondo in soli 20 minuti da Olbia — la località servita più vicina. Audi RS3, BMW M2 e Mercedes per la marina elegante della Gallura. Senza carta di credito.",
    distanceFromOlbia: "18 km, 20 minuti",
    vehicleReason: "Porto Rotondo è a soli 20 minuti dalla sede: la consegna più rapida tra le località premium. L'Audi RS3 è perfetta per il lungomare, la Mercedes Classe A per il comfort quotidiano tra la marina e le spiagge vicine.",
    localTips: [
      { icon: "camera", title: "Il teatro all'aperto", text: "Il Teatro di Porto Rotondo ospita concerti e spettacoli ogni estate sotto le stelle. L'anfiteatro in granito è un'opera d'arte architettonica. Verifica il programma estivo." },
      { icon: "swim", title: "Spiagge da scoprire", text: "Ira Beach e Spiaggia dei Sassi sono a 5 minuti da Porto Rotondo. Meno note di Marinella ma altrettanto belle, con acque turchesi e fondale sabbioso." },
      { icon: "food", title: "Il centro pedonale", text: "La piazzetta di Porto Rotondo ha ristoranti eleganti e boutique. Meno caotica di Porto Cervo, offre un'atmosfera raffinata senza la folla. Pesce alla griglia sulla terrazza del molo." },
      { icon: "boat", title: "La marina e lo yacht club", text: "Lo Yacht Club Porto Rotondo è uno dei più prestigiosi della Sardegna. La marina ospita imbarcazioni di lusso ed è il punto di partenza per escursioni verso Tavolara." },
    ],
  },

  "noleggio-auto-golfo-aranci": {
    snippetBait: "KS Rent Sardinia consegna auto a Golfo Aranci in 15 minuti da Olbia. Fiat Panda per le famiglie, Jeep Avenger per le calette. Consegna al porto traghetti Sardinia Ferries. Senza carta di credito.",
    distanceFromOlbia: "15 km, 15-20 minuti",
    vehicleReason: "La Fiat Panda è la più richiesta a Golfo Aranci: pratica per le stradine del paese e il parcheggio in spiaggia. Il Jeep Avenger è consigliato per Cala Moresca e le calette rocciose raggiungibili su sterrato.",
    localTips: [
      { icon: "boat", title: "I delfini in barca", text: "Da Golfo Aranci partono escursioni per avvistare i delfini del Golfo. Escursione di 2 ore, partenza alle 17:00. Parcheggia al porto con l'auto KS Rent." },
      { icon: "swim", title: "Cala Moresca, lo snorkeling", text: "Cala Moresca ha fondali ricchissimi con posidonia, cernie e polpi. Porta maschera e pinne — è il miglior spot di snorkeling a 15 minuti da Olbia." },
      { icon: "road", title: "Il Trenino Verde", text: "Da Golfo Aranci parte il Trenino Verde, ferrovia turistica che attraversa l'entroterra. Un'esperienza unica — poi torna alla tua auto per il mare." },
      { icon: "food", title: "La tonnara e il pesce", text: "Golfo Aranci ha una tradizione di pesca del tonno. I ristoranti sul porto servono tonno fresco alla griglia, bottarga e ricci di mare (in stagione, da ottobre a aprile)." },
    ],
  },

  "noleggio-auto-murta-maria": {
    snippetBait: "KS Rent Sardinia consegna auto a Murta Maria in soli 10 minuti da Olbia. Accesso diretto a Porto Istana e vista su Tavolara. Fiat Panda e Jeep Avenger senza carta di credito.",
    distanceFromOlbia: "10 km, 10-15 minuti",
    vehicleReason: "Murta Maria è vicinissima alla sede: consegna in 10 minuti. La Fiat Panda è perfetta per i tragitti brevi verso Porto Istana. Il Jeep Avenger serve per le calette secondarie verso Capo Coda Cavallo.",
    localTips: [
      { icon: "swim", title: "Porto Istana al mattino", text: "Porto Istana (5 min da Murta Maria) ha 4 calette collegate. La prima è la più attrezzata, la quarta è la più intima. Arriva presto: il parcheggio è a pagamento e limitato." },
      { icon: "mountain", title: "Tavolara da vicino", text: "Da Porto Istana, Tavolara sembra a un tiro di sasso. Puoi prendere una barca dal porticciolo di Porto San Paolo (10 min d'auto) per visitare l'isola e la spiaggia di Spalmatore." },
      { icon: "clock", title: "Tramonto dalla costa", text: "Il tramonto da Murta Maria è diverso dagli altri: il sole scende dietro le montagne di Olbia mentre Tavolara si colora di rosa. Perfetto dalla terrazza di un ristorante sul mare." },
      { icon: "food", title: "Ristoranti di pesce", text: "Lungo la strada per Porto Istana ci sono 2-3 ristoranti di pesce con terrazza sul mare. Pesce alla griglia, frutti di mare e vino Vermentino locale." },
    ],
  },

  "noleggio-auto-porto-san-paolo": {
    snippetBait: "KS Rent Sardinia consegna auto a Porto San Paolo in 15 minuti da Olbia. Porticciolo per escursioni a Tavolara, spiagge incontaminate. Jeep Avenger e Fiat Panda senza carta di credito.",
    distanceFromOlbia: "15 km, 15-20 minuti",
    vehicleReason: "A Porto San Paolo la Fiat Panda è ideale per il borgo e le spiagge principali. Il Jeep Avenger è consigliato per raggiungere le calette nascoste di Capo Coda Cavallo su sterrato, a 10 minuti dal borgo.",
    localTips: [
      { icon: "boat", title: "Tavolara dal porticciolo", text: "Dal porticciolo di Porto San Paolo partono barche per Tavolara ogni 30 minuti in estate. L'isola ha una sola spiaggia (Spalmatore) e un ristorante. Escursione di mezza giornata." },
      { icon: "swim", title: "L'Area Marina Protetta", text: "Porto San Paolo è la porta dell'Area Marina Protetta di Tavolara-Punta Coda Cavallo. Regole severe: non ancorare sulla posidonia, non raccogliere conchiglie." },
      { icon: "food", title: "Il borgo dei pescatori", text: "Porto San Paolo è un borgo autentico, non turistificato. I ristoranti sul porticciolo servono il pescato del giorno. Prova la zuppa di pesce — ogni ristorante ha la sua ricetta." },
      { icon: "camera", title: "I murales di Tavolara", text: "Sulla spiaggia di Spalmatore trovi i murales che raccontano la storia del 'Regno di Tavolara' — la monarchia più piccola del mondo, con tanto di re e regina." },
    ],
  },

  "noleggio-auto-arzachena": {
    snippetBait: "KS Rent Sardinia consegna auto ad Arzachena in 25 minuti da Olbia. Base ideale per Porto Cervo (12 km), Baja Sardinia e tutta la Costa Smeralda. Mercedes Classe A e Audi RS3. Senza carta di credito.",
    distanceFromOlbia: "25 km, 25-30 minuti",
    vehicleReason: "Arzachena è il cuore della Costa Smeralda. La Mercedes Classe A offre comfort per i trasferimenti quotidiani verso le spiagge. L'Audi RS3 è perfetta per le serate a Porto Cervo, a soli 12 km.",
    localTips: [
      { icon: "camera", title: "La Prisgiona e i Giganti", text: "Il nuraghe La Prisgiona e le Tombe dei Giganti di Coddu Vecchiu sono a 5 minuti dal centro di Arzachena. Civiltà nuragica di 3.500 anni fa — un'esperienza unica nel Mediterraneo." },
      { icon: "food", title: "Cucina gallurese DOC", text: "Arzachena è il posto migliore per la cucina gallurese: zuppa gallurese, maialetto, pane frattau. Gli agriturismi dell'entroterra offrono menù completi a 25-35€ con vino locale incluso." },
      { icon: "mountain", title: "Il fungo di Arzachena", text: "Il 'Fungo di Arzachena' è una formazione rocciosa naturale a forma di fungo, alta 4 metri, nel centro paese. Simbolo della città e set fotografico imperdibile." },
      { icon: "road", title: "San Pantaleo il giovedì", text: "Ogni giovedì mattina, il borgo di San Pantaleo (10 min d'auto) ospita un mercatino artigianale tra le case di granito. Artisti, artigiani e prodotti locali — un'esperienza gallurese autentica." },
    ],
  },

  "noleggio-auto-santa-teresa-gallura": {
    snippetBait: "KS Rent Sardinia consegna auto a Santa Teresa Gallura in 55 minuti da Olbia. Esplora Capo Testa, Rena Bianca e le Bocche di Bonifacio. Mercedes Classe A e Jeep Avenger senza carta di credito.",
    distanceFromOlbia: "60 km, 55-60 minuti",
    vehicleReason: "Per Santa Teresa consigliamo la Mercedes Classe A: il tragitto di 60 km da Olbia richiede comfort. Il Jeep Avenger è ideale per chi vuole esplorare Capo Testa e le calette su sterrato della costa nord.",
    localTips: [
      { icon: "camera", title: "La Corsica all'orizzonte", text: "Da Rena Bianca vedi la Corsica a soli 12 km. In giornate limpide distingui le case di Bonifacio. Il traghetto per la Corsica parte dal porto di Santa Teresa (50 minuti di traversata)." },
      { icon: "mountain", title: "Valle della Luna", text: "La Valle della Luna a Capo Testa (5 min d'auto) è un anfiteatro di rocce granitiche scolpite dal vento. Meta hippie dagli anni '60, oggi è un luogo magico per camminare al tramonto." },
      { icon: "wind", title: "Occhio al Maestrale", text: "Santa Teresa è esposta al Maestrale. Quando soffia forte, Rena Bianca diventa impraticabile ma Rena di Levante (Capo Testa, lato est) è riparata. Controlla il vento prima di uscire." },
      { icon: "food", title: "Il centro storico la sera", text: "Il centro di Santa Teresa è un reticolo di vie pedonali con ristoranti, pizzerie e bar. La piazza principale è il cuore della vita serale. Parcheggia appena fuori dal centro." },
    ],
  },

  "noleggio-auto-budoni": {
    snippetBait: "KS Rent Sardinia consegna auto a Budoni in 30 minuti da Olbia. Spiagge lunghe e sabbiose ideali per famiglie. Fiat Panda e Jeep Avenger disponibili senza carta di credito.",
    distanceFromOlbia: "35 km, 30-35 minuti",
    vehicleReason: "A Budoni la Fiat Panda è la scelta più popolare: pratica, economica e perfetta per spiagge con parcheggio facile. Il Jeep Avenger è consigliato per le calette di Agrustos e la costa meno battuta.",
    localTips: [
      { icon: "swim", title: "Le spiagge di Budoni", text: "La spiaggia centrale di Budoni è lunga e con fondali bassi — perfetta per bambini. Per meno folla, prova Sant'Anna (3 km a sud) o le calette di Ottiolu (5 km a nord)." },
      { icon: "food", title: "Sagre e feste estive", text: "Budoni ospita sagre del pesce e feste paesane in estate. La sagra dei malloreddus ad agosto è imperdibile. Chiedi ai locali le date esatte — cambiano ogni anno." },
      { icon: "mountain", title: "L'entroterra di Monte Nieddu", text: "Il massiccio di Monte Nieddu (20 min d'auto) offre trekking con cascate e piscine naturali. Il sentiero di Sa Tesa è il più spettacolare — portati scarpe da trekking." },
      { icon: "road", title: "La strada per San Teodoro", text: "La litoranea Budoni-San Teodoro (15 min) è una delle strade più panoramiche della costa orientale. Fermate fotografiche obbligatorie ai belvedere lungo il percorso." },
    ],
  },

  "noleggio-auto-agrustos": {
    snippetBait: "KS Rent Sardinia consegna auto ad Agrustos in 25 minuti da Olbia. Spiagge selvagge e meno affollate tra Budoni e San Teodoro. Jeep Avenger per gli sterrati, Fiat Panda per la costa principale.",
    distanceFromOlbia: "30 km, 25-30 minuti",
    vehicleReason: "Ad Agrustos il Jeep Avenger fa la differenza: le calette più belle si raggiungono su sterrato attraverso la macchia mediterranea. La Fiat Panda va bene per le spiagge principali con parcheggio asfaltato.",
    localTips: [
      { icon: "swim", title: "Spiagge senza folla", text: "Agrustos è il segreto dei sardi: spiagge ampie, sabbia dorata e meno turisti rispetto a San Teodoro e Budoni. La spiaggia di Ottiolu ha anche un porticciolo pittoresco." },
      { icon: "wind", title: "Quando soffia lo Scirocco", text: "Con lo Scirocco (vento da sud-est), le spiagge di Agrustos diventano impraticabili. In quei giorni, guida 15 minuti verso La Cinta (San Teodoro), riparata dal vento." },
      { icon: "food", title: "Grigliate in agriturismo", text: "Nell'entroterra di Agrustos ci sono agriturismi che servono maialetto arrosto, salsiccia e pecorino. Chiedi la 'cena sarda' completa — un'esperienza gastronomica memorabile." },
      { icon: "clock", title: "L'alba verso Tavolara", text: "La costa di Agrustos guarda a est: l'alba con Tavolara e Molara all'orizzonte è uno spettacolo. Sali sulla tua auto KS Rent alle 5:30 in giugno per coglierla." },
    ],
  },

  "noleggio-auto-marinella": {
    snippetBait: "KS Rent Sardinia consegna auto a Marinella in soli 12 minuti da Olbia. Spiaggia vicina all'aeroporto, perfetta per il primo o ultimo bagno. Audi RS3, BMW M2 e Fiat Panda senza carta di credito.",
    distanceFromOlbia: "12 km, 12-15 minuti",
    vehicleReason: "A Marinella le auto sportive sono le più richieste: l'Audi RS3 e la BMW M2 per le strade panoramiche verso Porto Rotondo. La Fiat Panda è perfetta per famiglie con bambini al seguito.",
    localTips: [
      { icon: "clock", title: "Primo bagno dopo l'atterraggio", text: "Marinella è la spiaggia più vicina all'aeroporto Costa Smeralda: 15 minuti dal gate al mare. Ritira l'auto KS Rent e fai il primo bagno della vacanza in mezz'ora." },
      { icon: "swim", title: "Snorkeling ai lati rocciosi", text: "La parte centrale di Marinella è sabbiosa, ma ai lati rocciosi il fondale è ricco di pesci e posidonia. Porta maschera e pinne per un'esperienza diversa." },
      { icon: "food", title: "Ristorantini sulla spiaggia", text: "Marinella ha 2-3 ristorantini direttamente sulla sabbia. Il pesce alla griglia con vista su Porto Rotondo è un classico. Prenota per la cena al tramonto." },
      { icon: "road", title: "Porto Rotondo in 5 minuti", text: "Porto Rotondo è a 5 minuti da Marinella: cena elegante alla marina, passeggiata serale e ritorno in spiaggia il mattino dopo." },
    ],
  },

  "noleggio-auto-pittulongu": {
    snippetBait: "KS Rent Sardinia consegna auto a Pittulongu in 10 minuti — la spiaggia più vicina all'aeroporto di Olbia. Vista su Tavolara, fondali bassi, ristoranti sulla sabbia. Senza carta di credito.",
    distanceFromOlbia: "5 km, 10 minuti",
    vehicleReason: "Pittulongu è a 5 km dal centro di Olbia: la Fiat Panda è la scelta più pratica per questa spiaggia urbana. Per chi vuole esplorare anche Golfo Aranci e Bados, la Mercedes Classe A offre più comfort.",
    localTips: [
      { icon: "swim", title: "La spiaggia di Olbia", text: "Pittulongu è la spiaggia dei residenti olbiesi: attrezzata, con ristoranti e vista su Tavolara. I fondali bassi la rendono perfetta per bambini. Più locale che turistica." },
      { icon: "clock", title: "Dopo il check-out", text: "Se il volo è nel pomeriggio, Pittulongu è il posto perfetto per l'ultimo bagno: 10 minuti dall'aeroporto. Restituisci l'auto KS Rent direttamente al gate." },
      { icon: "food", title: "Aperitivo al tramonto", text: "I bar-ristoranti sulla spiaggia di Pittulongu servono aperitivi con vista su Tavolara al tramonto. Il momento più bello della giornata, a 10 minuti dal centro di Olbia." },
      { icon: "road", title: "Bados e Golfo Aranci", text: "Da Pittulongu, Spiaggia Bados è a 5 minuti (windsurf) e Golfo Aranci a 10 minuti (snorkeling a Cala Moresca). Tre spiagge diverse in una mattinata con l'auto KS Rent." },
    ],
  },

  "noleggio-auto-bados": {
    snippetBait: "KS Rent Sardinia consegna auto a Bados in 10 minuti da Olbia. Paradiso del windsurf e kitesurf con vento costante. Jeep Avenger per attrezzatura sportiva, Fiat Panda per il relax.",
    distanceFromOlbia: "8 km, 10 minuti",
    vehicleReason: "A Bados il Jeep Avenger è la scelta degli sportivi: bagagliaio capiente per tavole, ali e attrezzatura da kitesurf. La Mercedes Classe A è perfetta per chi vuole comfort e spazio per tutta la famiglia.",
    localTips: [
      { icon: "wind", title: "Le condizioni perfette", text: "Il vento a Bados soffia da nord-ovest (Maestrale) quasi ogni pomeriggio in estate. I kitesurfer esperti scelgono il lato nord della spiaggia, dove il vento è più pulito." },
      { icon: "swim", title: "Nei giorni di calma", text: "Quando il vento non soffia (raro ma succede), Bados diventa una spiaggia cristallina perfetta per il bagno. L'acqua è limpida e il fondale sabbioso — un paradiso diverso." },
      { icon: "road", title: "La scuola di kite", text: "A Bados operano scuole di kitesurf che offrono lezioni per principianti. Parcheggia l'auto vicino alla spiaggia e fai la tua prima lezione. L'attrezzatura è inclusa." },
      { icon: "food", title: "Chioschi e piedi nella sabbia", text: "I chioschi sulla spiaggia di Bados servono panini, insalate e birra fresca. Niente ristoranti eleganti — solo semplicità e mare. Per cena, Olbia è a 10 minuti." },
    ],
  },

  "noleggio-auto-portisco": {
    snippetBait: "KS Rent Sardinia consegna auto a Portisco in 20 minuti da Olbia. Marina esclusiva tra Porto Rotondo e la Costa Smeralda. Audi RS3, BMW M2 e Mercedes Classe A senza carta di credito.",
    distanceFromOlbia: "20 km, 20-25 minuti",
    vehicleReason: "A Portisco i clienti della marina preferiscono auto premium: l'Audi RS3 per le serate a Porto Cervo (25 min) e la Mercedes Classe A per il comfort quotidiano tra spiaggia e ristoranti.",
    localTips: [
      { icon: "boat", title: "La marina di Portisco", text: "La Marina di Portisco è una delle più moderne della Sardegna, con posti barca fino a 60 metri. Servizi completi, ristoranti e boutique nel villaggio adiacente." },
      { icon: "swim", title: "La spiaggia riparata", text: "La spiaggia di Portisco è protetta dai venti e ha acque calme — perfetta per famiglie con bambini. Sabbia fine e fondale che degrada dolcemente." },
      { icon: "road", title: "A metà strada", text: "Portisco è strategicamente a metà tra Olbia (20 min) e Porto Cervo (25 min). Con l'auto KS Rent puoi raggiungere qualsiasi punto della costa in meno di 30 minuti." },
      { icon: "food", title: "Il villaggio serale", text: "Il villaggio di Portisco ha ristoranti con terrazza sulla marina. Cucina di pesce e pizzeria con forno a legna. Atmosfera tranquilla rispetto alla frenesia di Porto Cervo." },
    ],
  },

  "noleggio-auto-capo-coda-cavallo": {
    snippetBait: "KS Rent Sardinia consegna auto per Capo Coda Cavallo in 25 minuti da Olbia. Area marina protetta con Cala Brandinchi e Lu Impostu. Jeep Avenger consigliato per gli sterrati. Senza carta di credito.",
    distanceFromOlbia: "22 km, 25 minuti",
    vehicleReason: "Per Capo Coda Cavallo il Jeep Avenger è quasi obbligatorio: gli sterrati verso le calette più belle richiedono un SUV capace. La Fiat Panda raggiunge solo i parcheggi principali ma non le calette secondarie.",
    localTips: [
      { icon: "road", title: "Gli sterrati da conoscere", text: "Le strade per Cala Brandinchi e Lu Impostu sono sterrate ma percorribili. Procedi a 20 km/h, evita le buche e parcheggia nelle aree autorizzate. Multe salate per parcheggio selvaggio." },
      { icon: "swim", title: "L'area marina protetta", text: "Capo Coda Cavallo è area marina protetta: divieto di ancoraggio sulla posidonia, raccolta conchiglie vietata. Le acque sono tra le più pulite del Mediterraneo grazie a queste regole." },
      { icon: "clock", title: "L'orario d'oro", text: "In luglio-agosto i parcheggi di Brandinchi chiudono tra le 9:00 e le 10:00. Parti da Olbia alle 7:30 con l'auto KS Rent per assicurarti l'accesso. Dopo, si parcheggia a 2 km." },
      { icon: "mountain", title: "Il sentiero costiero", text: "Un sentiero a piedi collega Lu Impostu a Cala Brandinchi lungo la costa (20 minuti). Lascia l'auto a un parcheggio e fai il sentiero per goderti entrambe le spiagge." },
    ],
  },

  /* ═══════════ SPIAGGE ═══════════ */

  "spiaggia-del-principe": {
    snippetBait: "Raggiungi la Spiaggia del Principe con KS Rent Sardinia: 35 minuti da Olbia, parcheggio sterrato a 500 m. Audi RS3 o Jeep Avenger consigliati. Noleggio senza carta di credito.",
    distanceFromOlbia: "32 km, 35 minuti",
    vehicleReason: "Per la Spiaggia del Principe il Jeep Avenger è consigliato: il parcheggio è sterrato e in estate polveroso. L'Audi RS3 è perfetta per la strada panoramica fino al bivio, poi il SUV fa la differenza.",
    localTips: [
      { icon: "clock", title: "Arriva alle 8:00", text: "La Spiaggia del Principe raggiunge la capacità massima entro le 10:00 in luglio-agosto. Il parcheggio sterrato (500 m dalla spiaggia) si riempie per primo. Parti da Olbia alle 7:30." },
      { icon: "swim", title: "Lo snorkeling perfetto", text: "Il lato destro della spiaggia (guardando il mare) ha rocce e fondali ricchi di pesci. Porta maschera e boccaglio — l'acqua cristallina offre visibilità di 15-20 metri." },
      { icon: "camera", title: "Perché si chiama così", text: "L'Aga Khan Karim la scelse come spiaggia privata quando fondò il Consorzio Costa Smeralda nel 1962. Da allora è rimasta pubblica ma conserva il nome principesco." },
      { icon: "food", title: "Niente bar in spiaggia", text: "La Spiaggia del Principe non ha chioschi né stabilimenti. Porta acqua, cibo e ombrellone. Il ristorante più vicino è a Romazzino, 5 minuti d'auto." },
    ],
  },

  "liscia-ruja": {
    snippetBait: "Raggiungi Liscia Ruja con KS Rent Sardinia: 35 minuti da Olbia, la 'Long Beach' della Costa Smeralda. Stabilimenti e spiaggia libera. Audi RS3 e Jeep Avenger senza carta di credito.",
    distanceFromOlbia: "30 km, 35 minuti",
    vehicleReason: "Per Liscia Ruja l'Audi RS3 è perfetta: la strada è asfaltata fino al parcheggio e la spiaggia è lunga e accessibile. Il Jeep Avenger è utile solo se vuoi proseguire verso le calette secondarie su sterrato.",
    localTips: [
      { icon: "swim", title: "La Long Beach sarda", text: "Liscia Ruja è lunga quasi un chilometro — la più estesa della Costa Smeralda. Il lato nord è più tranquillo, il lato sud più attrezzato. Cammina 10 minuti per trovare il tuo angolo." },
      { icon: "food", title: "Stabilimenti gourmet", text: "I due stabilimenti di Liscia Ruja servono pranzi di pesce di alto livello. Lettino + ombrellone + pranzo: budget da 80-120€ a coppia, ma l'esperienza è da resort 5 stelle." },
      { icon: "wind", title: "Riparata dal Maestrale", text: "Liscia Ruja guarda a est: è riparata dal Maestrale (vento da nord-ovest). Nei giorni di Maestrale forte, mentre altre spiagge sono impraticabili, qui trovi acqua piatta." },
      { icon: "camera", title: "Il colore della sabbia", text: "La sabbia di Liscia Ruja ha sfumature dorate uniche, dovute ai frammenti di granito rosa. Al tramonto, tutta la spiaggia si colora di arancione e oro." },
    ],
  },

  "cala-brandinchi": {
    snippetBait: "Raggiungi Cala Brandinchi con KS Rent Sardinia: 25 minuti da Olbia, la 'piccola Tahiti' della Sardegna. Jeep Avenger consigliato per lo sterrato. Noleggio senza carta di credito.",
    distanceFromOlbia: "27 km, 25-30 minuti",
    vehicleReason: "Per Cala Brandinchi il Jeep Avenger è la scelta migliore: l'ultimo tratto è sterrato e in estate molto frequentato. La Fiat Panda può farcela con prudenza, ma il SUV garantisce sicurezza e comfort.",
    localTips: [
      { icon: "clock", title: "Il parcheggio chiude presto", text: "In luglio-agosto il parcheggio di Brandinchi chiude tra le 9:00 e le 10:00 per capacità massima. Dopo, si parcheggia a 2 km e si cammina. Parti alle 7:30 da Olbia." },
      { icon: "swim", title: "La pineta e l'ombra", text: "Cala Brandinchi ha una pineta alle spalle della spiaggia che offre ombra naturale. Se arrivi senza ombrellone, piazzati sotto i pini — fresco garantito anche ad agosto." },
      { icon: "road", title: "Lo sterrato da rispettare", text: "La strada sterrata per Brandinchi è in area protetta. Velocità massima 20 km/h, parcheggio solo nelle aree delimitate. Le multe per parcheggio selvaggio partono da 200€." },
      { icon: "camera", title: "La piccola Tahiti", text: "L'acqua di Cala Brandinchi ha 50 sfumature di turchese che ricordano i Caraibi. Il fondale di sabbia bianca crea l'effetto 'piscina naturale' visibile anche nelle foto aeree." },
    ],
  },

  "la-cinta": {
    snippetBait: "Raggiungi La Cinta con KS Rent Sardinia: 20 minuti da Olbia, 5 km di spiaggia con fenicotteri. Qualsiasi auto della flotta è adatta. Noleggio senza carta di credito.",
    distanceFromOlbia: "25 km, 20-25 minuti",
    vehicleReason: "La Cinta ha strada asfaltata e parcheggio ampio: qualsiasi auto della flotta è adatta. La Fiat Panda è la più pratica, l'Audi RS3 è perfetta per chi vuole arrivare con stile a San Teodoro.",
    localTips: [
      { icon: "swim", title: "5 km di spiaggia", text: "La Cinta è lunga 5 km. La zona nord è più ventilata (kitesurf), la zona sud è più riparata (famiglie). Cammina 10 minuti dal parcheggio per meno folla." },
      { icon: "camera", title: "I fenicotteri rosa", text: "Lo stagno alle spalle di La Cinta ospita colonie di fenicotteri rosa visibili tutto l'anno. Il punto di osservazione migliore è dalla sponda ovest, accessibile in auto dalla strada per la spiaggia." },
      { icon: "wind", title: "Il kitesurf al nord", text: "La punta nord di La Cinta è il paradiso del kitesurf: vento costante da nord-ovest e spazio immenso. Lezioni per principianti disponibili da maggio a ottobre." },
      { icon: "food", title: "San Teodoro by night", text: "San Teodoro è a 5 minuti da La Cinta. Via del Tirreno è la passeggiata serale con gelaterie, cocktail bar e ristoranti. Parcheggio facile fuori dal centro." },
    ],
  },

  "lu-impostu": {
    snippetBait: "Raggiungi Lu Impostu con KS Rent Sardinia: 25 minuti da Olbia, acque turchesi poco profonde nell'area protetta di Capo Coda Cavallo. Jeep Avenger consigliato. Senza carta di credito.",
    distanceFromOlbia: "27 km, 25-30 minuti",
    vehicleReason: "Per Lu Impostu il Jeep Avenger è la scelta sicura: lo sterrato è meno impegnativo di Cala Brandinchi ma sempre presente. La Fiat Panda raggiunge il parcheggio principale senza problemi.",
    localTips: [
      { icon: "swim", title: "Piscina naturale", text: "Lu Impostu ha fondali bassissimi per 50 metri: l'acqua arriva al ginocchio per molto spazio. Perfetta per bambini piccoli e per chi ama camminare nell'acqua turchese." },
      { icon: "clock", title: "Arriva con calma", text: "Lu Impostu è meno affollata di Cala Brandinchi. Puoi arrivare anche alle 10:00 e trovare posto. Il parcheggio è sterrato ma ampio." },
      { icon: "camera", title: "A 2 minuti da Brandinchi", text: "Lu Impostu e Cala Brandinchi sono collegate da un sentiero costiero di 20 minuti a piedi. Visita entrambe nella stessa giornata, lasciando l'auto a un solo parcheggio." },
      { icon: "food", title: "Il chiosco sulla spiaggia", text: "In estate un chiosco sulla spiaggia serve panini, frutta fresca e bevande. Niente ristoranti elaborati — solo semplicità con i piedi nella sabbia." },
    ],
  },

  "capriccioli": {
    snippetBait: "Raggiungi Capriccioli con KS Rent Sardinia: 30 minuti da Olbia. Due calette (Est e Ovest) con granito rosa e acqua cristallina. Audi RS3 e Jeep Avenger senza carta di credito.",
    distanceFromOlbia: "28 km, 30-35 minuti",
    vehicleReason: "Per Capriccioli l'Audi RS3 è perfetta per la strada panoramica. I due parcheggi sterrati (Est e Ovest) sono accessibili anche senza SUV, ma il Jeep Avenger offre più sicurezza su terreno polveroso.",
    localTips: [
      { icon: "swim", title: "Est o Ovest?", text: "Capriccioli Est è più grande e sabbiosa, con acque turchesi poco profonde. Capriccioli Ovest è più piccola e rocciosa, ideale per snorkeling. Due spiagge diverse a 200 metri l'una dall'altra." },
      { icon: "camera", title: "Il granito rosa", text: "Le rocce di granito rosa di Capriccioli sono tra le più fotografate della Costa Smeralda. Al mattino presto, la luce dorata sulle rocce crea un contrasto magico con l'acqua turchese." },
      { icon: "clock", title: "Due parcheggi separati", text: "Capriccioli Est e Ovest hanno parcheggi separati. In alta stagione, arriva entro le 9:30. I parcheggi sono sterrati e a pagamento (5-8€ al giorno)." },
      { icon: "food", title: "Nessun servizio in spiaggia", text: "Capriccioli non ha chioschi né stabilimenti. Porta tutto l'occorrente: acqua, cibo, ombrellone. Il ristorante più vicino è sulla strada per Porto Cervo, a 5 minuti." },
    ],
  },

  "romazzino": {
    snippetBait: "Raggiungi la spiaggia di Romazzino con KS Rent Sardinia: 35 minuti da Olbia. Spiaggia pubblica accanto all'iconico Hotel Romazzino 5 stelle. Audi RS3 e BMW M2 senza carta di credito.",
    distanceFromOlbia: "30 km, 35 minuti",
    vehicleReason: "Per Romazzino l'Audi RS3 è la scelta naturale: zona ultra-luxury della Costa Smeralda. Consegniamo direttamente all'Hotel Romazzino o al parcheggio della spiaggia pubblica.",
    localTips: [
      { icon: "swim", title: "Spiaggia pubblica e hotel", text: "La spiaggia è pubblica ma l'Hotel Romazzino (5 stelle Marriott) occupa una parte. L'accesso libero è da un sentiero a sinistra del parcheggio — sabbia bianca e acque identiche." },
      { icon: "camera", title: "L'hotel più iconico", text: "L'Hotel Romazzino è stato il primo 5 stelle della Costa Smeralda, aperto nel 1963 dall'Aga Khan. L'architettura mimetizzata nella macchia mediterranea è un capolavoro." },
      { icon: "food", title: "Il ristorante dell'hotel", text: "Il ristorante dell'Hotel Romazzino è aperto anche ai non ospiti (su prenotazione). Cucina sarda rivisitata con vista sul mare. Budget da 80-150€ a persona." },
      { icon: "road", title: "Strada panoramica", text: "La strada da Porto Cervo a Romazzino (SP59) è una delle più belle della Sardegna: curve tra ginepri con scorci sul mare turchese a ogni tornante." },
    ],
  },

  "grande-pevero": {
    snippetBait: "Raggiungi Grande Pevero con KS Rent Sardinia: 30 minuti da Olbia. Baia riparata con acque calme a Baja Sardinia. BMW M2 e Mercedes Classe A senza carta di credito.",
    distanceFromOlbia: "28 km, 30-35 minuti",
    vehicleReason: "Per Grande Pevero la BMW M2 è perfetta per le strade della Costa Smeralda. La Mercedes Classe A offre comfort per famiglie. Il parcheggio è sterrato ma accessibile a tutte le auto.",
    localTips: [
      { icon: "swim", title: "Acque calme garantite", text: "Grande Pevero è protetta dai venti da tre lati. Anche con Maestrale forte, qui l'acqua resta calma. Le famiglie con bambini la preferiscono per questa ragione." },
      { icon: "camera", title: "Il Pevero Golf Club", text: "Il Pevero Golf Club (5 min d'auto) è uno dei campi più esclusivi d'Europa: 18 buche con vista sul mare. Aperto anche ai non soci su prenotazione." },
      { icon: "food", title: "Phi Beach al tramonto", text: "Il Phi Beach di Baja Sardinia (3 min d'auto) è il locale più iconico della Costa Smeralda per l'aperitivo al tramonto. Prenota in anticipo in luglio-agosto." },
      { icon: "road", title: "Baja Sardinia a piedi", text: "Dal parcheggio di Grande Pevero, il centro di Baja Sardinia è raggiungibile a piedi in 15 minuti lungo la costa. Lascia l'auto e goditi la passeggiata serale." },
    ],
  },

  "cala-moresca": {
    snippetBait: "Raggiungi Cala Moresca con KS Rent Sardinia: 15 minuti da Olbia. Snorkeling eccezionale con fondali ricchi. Jeep Avenger per lo sterrato. Noleggio senza carta di credito.",
    distanceFromOlbia: "12 km, 15 minuti",
    vehicleReason: "Per Cala Moresca il Jeep Avenger è consigliato: l'ultimo tratto è sterrato e stretto. La Fiat Panda può raggiungere il parcheggio con attenzione, ma il SUV offre tranquillità.",
    localTips: [
      { icon: "swim", title: "Il miglior snorkeling", text: "Cala Moresca è il miglior spot di snorkeling vicino a Olbia: posidonia, cernie, polpi e stelle marine. Visibilità di 10-15 metri. Porta maschera e pinne." },
      { icon: "clock", title: "Spiaggia piccola = arriva presto", text: "Cala Moresca è piccola: massimo 50 persone. In estate si riempie entro le 9:30. Il parcheggio sterrato ha posti limitati — il Jeep Avenger aiuta." },
      { icon: "camera", title: "Il fortino spagnolo", text: "Sopra Cala Moresca c'è il Fortino di Capo Figari, torre di avvistamento spagnola del XVII secolo. Raggiungibile a piedi in 20 minuti — panorama a 360° sulla costa." },
      { icon: "road", title: "Golfo Aranci e ritorno", text: "Da Cala Moresca, Golfo Aranci è a 5 minuti. Combina lo snorkeling mattutino con il pranzo di pesce al porto — giornata perfetta a 15 minuti da Olbia." },
    ],
  },

  "cala-sabina": {
    snippetBait: "Raggiungi Cala Sabina con KS Rent Sardinia: 15 minuti da Olbia. Spiaggia familiare con fondali bassi vicino a Golfo Aranci. Fiat Panda ideale. Senza carta di credito.",
    distanceFromOlbia: "15 km, 15-20 minuti",
    vehicleReason: "Per Cala Sabina la Fiat Panda è perfetta: strada asfaltata, parcheggio comodo e spiaggia familiare. Non serve il SUV — risparmia e scegli praticità.",
    localTips: [
      { icon: "swim", title: "Fondali per bambini", text: "Cala Sabina ha fondali bassi per 30-40 metri. L'acqua è calda e calma — perfetta per bambini che imparano a nuotare. Sabbia fine senza scogli." },
      { icon: "wind", title: "Riparata dal vento", text: "Cala Sabina è incastonata in una piccola baia riparata. Quando le spiagge aperte sono impraticabili per il Maestrale, qui trovi acqua piatta e sole." },
      { icon: "food", title: "Golfo Aranci per pranzo", text: "Cala Sabina non ha bar. Porta il pranzo al sacco o guida 5 minuti verso Golfo Aranci per pesce fresco al porto." },
      { icon: "clock", title: "Il pomeriggio è meglio", text: "Cala Sabina guarda a sud-est: il sole la illumina dalla mattina. Al pomeriggio la luce è perfetta per le foto e la temperatura dell'acqua è al massimo." },
    ],
  },

  "spiaggia-bianca": {
    snippetBait: "Raggiungi Spiaggia Bianca con KS Rent Sardinia: 15 minuti da Olbia. Sabbia candida e vista su Tavolara a Golfo Aranci. Fiat Panda e Mercedes Classe A senza carta di credito.",
    distanceFromOlbia: "14 km, 15 minuti",
    vehicleReason: "Spiaggia Bianca è facilmente accessibile: la Fiat Panda è la scelta più pratica. La Mercedes Classe A è perfetta per chi vuole comfort anche nel breve tragitto da Olbia.",
    localTips: [
      { icon: "swim", title: "La sabbia più bianca", text: "Spiaggia Bianca deve il nome alla sabbia insolitamente candida, tra le più bianche della Gallura. L'effetto 'maldiviano' è reale e visibile nelle foto senza filtri." },
      { icon: "camera", title: "Tavolara all'orizzonte", text: "La vista su Tavolara da Spiaggia Bianca è tra le più fotografate della Sardegna. Il profilo dell'isola è inconfondibile — sembra una montagna emersa dal mare." },
      { icon: "food", title: "Golfo Aranci e il tonno", text: "Golfo Aranci (5 min) ha una tradizione di pesca del tonno. Prova il tonno alla griglia nei ristoranti del porto — non quello in scatola, quello fresco pescato la mattina." },
      { icon: "road", title: "Le spiagge in sequenza", text: "Da Spiaggia Bianca puoi fare un tour: Cala Sabina (3 min), Cala Moresca (5 min), poi Golfo Aranci per pranzo. Tre spiagge diverse in una mattinata." },
    ],
  },

  "porto-istana": {
    snippetBait: "Raggiungi Porto Istana con KS Rent Sardinia: 12 minuti da Olbia. Quattro calette con vista su Tavolara, fondali bassi. Qualsiasi auto della flotta. Senza carta di credito.",
    distanceFromOlbia: "12 km, 12-15 minuti",
    vehicleReason: "Porto Istana ha strada asfaltata e parcheggio organizzato: qualsiasi auto della flotta è adatta. La Fiat Panda è la più pratica per famiglie, il Jeep Avenger per chi vuole proseguire verso Capo Coda Cavallo.",
    localTips: [
      { icon: "swim", title: "Le quattro calette", text: "Porto Istana ha 4 calette collegate: la 1a è grande e attrezzata, la 2a e 3a sono medie, la 4a è piccola e intima. Cammina 5-10 minuti dal parcheggio per le meno affollate." },
      { icon: "mountain", title: "Tavolara di fronte", text: "Tavolara sembra a un tiro di sasso da Porto Istana. In barca dal vicino Porto San Paolo (10 min d'auto) puoi raggiungere la spiaggia di Spalmatore in 20 minuti." },
      { icon: "clock", title: "Parcheggio a pagamento", text: "Il parcheggio è a pagamento in estate (5-8€). Si riempie entro le 10:00 in alta stagione. Arriva entro le 9:00 o nel tardo pomeriggio dopo le 16:00." },
      { icon: "food", title: "Chioschi in spiaggia", text: "Le prime due calette hanno chioschi con panini, frutta e bevande. Per un pranzo vero, Porto San Paolo (10 min) ha ristoranti di pesce con terrazza sul mare." },
    ],
  },

  "porto-taverna": {
    snippetBait: "Raggiungi Porto Taverna con KS Rent Sardinia: 15 minuti da Olbia. Spiaggia lunga e ventilata con vista su Tavolara e Molara. Ideale per windsurf. Senza carta di credito.",
    distanceFromOlbia: "15 km, 15-20 minuti",
    vehicleReason: "Porto Taverna è accessibile con qualsiasi auto. La Fiat Panda è pratica per la spiaggia principale. Il Jeep Avenger è utile per le calette secondarie sulla costa verso Capo Coda Cavallo.",
    localTips: [
      { icon: "wind", title: "La spiaggia del vento", text: "Porto Taverna è esposta al Maestrale e allo Scirocco. Perfetta per windsurf, meno per chi cerca acqua piatta. Nei giorni di calma, però, diventa cristallina." },
      { icon: "swim", title: "Meno folla, più natura", text: "Porto Taverna è meno frequentata di Porto Istana nonostante siano vicine. Se cerchi tranquillità con vista su Tavolara e Molara, è la scelta giusta." },
      { icon: "camera", title: "Due isole all'orizzonte", text: "Da Porto Taverna vedi sia Tavolara che Molara all'orizzonte. Al tramonto le sagome delle isole si stagliano contro il cielo — uno dei panorami più belli della costa orientale." },
      { icon: "road", title: "Verso Capo Coda Cavallo", text: "Da Porto Taverna la strada prosegue verso Capo Coda Cavallo (10 min). Se hai il Jeep Avenger, esplora le calette nascoste dell'area marina protetta." },
    ],
  },

  "rena-bianca": {
    snippetBait: "Raggiungi Rena Bianca con KS Rent Sardinia: 55 minuti da Olbia. Spiaggia bandiera blu nel centro di Santa Teresa Gallura con vista sulla Corsica. Mercedes Classe A consigliata.",
    distanceFromOlbia: "60 km, 55-60 minuti",
    vehicleReason: "Per Rena Bianca consigliamo la Mercedes Classe A: il tragitto di 60 km da Olbia richiede comfort. Il parcheggio è nel centro di Santa Teresa, a 200 metri dalla spiaggia.",
    localTips: [
      { icon: "camera", title: "La Corsica a 12 km", text: "Da Rena Bianca vedi chiaramente Bonifacio e la costa corsa. Il traghetto parte dal porto di Santa Teresa: 50 minuti per un'escursione in Corsica e ritorno." },
      { icon: "swim", title: "Bandiera blu", text: "Rena Bianca è spiaggia bandiera blu da anni: acque pure, servizi eccellenti e accessibilità. Sabbia bianchissima e fondale che degrada dolcemente." },
      { icon: "food", title: "Il centro a piedi", text: "Rena Bianca è nel centro di Santa Teresa: esci dall'acqua e in 3 minuti sei in piazza con gelaterie, ristoranti e negozi. Nessun bisogno dell'auto fino a sera." },
      { icon: "wind", title: "Bocche di Bonifacio", text: "Le Bocche di Bonifacio creano correnti e vento. Nei giorni di Maestrale forte, Rena Bianca può essere agitata. Alternativa: Rena di Levante a Capo Testa (5 min), riparata." },
    ],
  },

  "cala-del-faro": {
    snippetBait: "Raggiungi Cala del Faro con KS Rent Sardinia: 30 minuti da Olbia. Baia riparata e calma vicino a Baja Sardinia. Audi RS3 e BMW M2 per la Costa Smeralda. Senza carta di credito.",
    distanceFromOlbia: "28 km, 30-35 minuti",
    vehicleReason: "Per Cala del Faro l'Audi RS3 è la scelta dei clienti della Costa Smeralda. La baia è raggiungibile con qualsiasi auto — la strada è asfaltata fino al resort.",
    localTips: [
      { icon: "swim", title: "Acqua calma sempre", text: "Cala del Faro è una delle poche spiagge della Costa Smeralda riparate da tutti i venti. Acque calme anche con Maestrale forte — ideale per famiglie." },
      { icon: "camera", title: "Il resort e la spiaggia", text: "Il resort Cala del Faro ha stabilimenti sulla spiaggia ma l'accesso pubblico è garantito. La parte libera è a sinistra, con sabbia fine e stesso mare cristallino." },
      { icon: "food", title: "Baja Sardinia a 3 minuti", text: "Il centro di Baja Sardinia è a 3 minuti d'auto con ristoranti, pizzerie e gelaterie. La sera, la passeggiata sul lungomare è l'attrazione principale." },
      { icon: "boat", title: "Grande Pevero accanto", text: "Grande Pevero è la spiaggia adiacente: puoi visitare entrambe nella stessa giornata camminando lungo la costa o spostando l'auto di 2 minuti." },
    ],
  },

  "la-celvia": {
    snippetBait: "Raggiungi La Celvia con KS Rent Sardinia: 35 minuti da Olbia. Sabbia rosata e acque cristalline tra Porto Cervo e Baja Sardinia. Audi RS3 consigliata. Senza carta di credito.",
    distanceFromOlbia: "30 km, 35 minuti",
    vehicleReason: "Per La Celvia l'Audi RS3 è la scelta naturale: le strade della Costa Smeralda sono perfette per una sportiva. Il parcheggio sterrato è limitato ma accessibile a tutte le auto.",
    localTips: [
      { icon: "swim", title: "La sabbia rosa", text: "La Celvia ha sfumature rosate uniche nella sabbia, dovute ai frammenti di granito e corallo. L'effetto è più visibile al mattino presto quando la luce è radente." },
      { icon: "clock", title: "Pochi posti, arriva presto", text: "La Celvia è piccola con parcheggio limitato. In estate il parcheggio si esaurisce entro le 9:30. Arriva presto o scegli il tardo pomeriggio per il tramonto." },
      { icon: "camera", title: "Meno nota, più bella", text: "La Celvia è meno conosciuta di Capriccioli e Liscia Ruja ma altrettanto spettacolare. Chi la scopre torna sempre — è il segreto degli habitué della Costa Smeralda." },
      { icon: "food", title: "Porto Cervo per cena", text: "Porto Cervo è a 5 minuti da La Celvia. Dopo la giornata di mare, la Piazzetta offre ristoranti e bar per l'aperitivo. Baja Sardinia è a 7 minuti nella direzione opposta." },
    ],
  },

  "spiaggia-marinella": {
    snippetBait: "Raggiungi Spiaggia Marinella con KS Rent Sardinia: 12 minuti da Olbia. Sabbia fine e acque cristalline tra Olbia e Porto Rotondo. Tutte le auto della flotta. Senza carta di credito.",
    distanceFromOlbia: "12 km, 12-15 minuti",
    vehicleReason: "Spiaggia Marinella è vicinissima e con strada asfaltata: qualsiasi auto va bene. L'Audi RS3 è la scelta di chi vuole arrivare con stile a Porto Rotondo dopo il mare.",
    localTips: [
      { icon: "swim", title: "Il primo bagno", text: "A 12 minuti dall'aeroporto, Marinella è perfetta per il primo bagno della vacanza. Ritira l'auto KS Rent e in mezz'ora sei con i piedi nell'acqua." },
      { icon: "food", title: "Ristoranti sulla sabbia", text: "Marinella ha 2-3 ristoranti direttamente sulla spiaggia. Pesce alla griglia, insalate di mare e vino Vermentino con i piedi nella sabbia." },
      { icon: "road", title: "Porto Rotondo in 5 minuti", text: "Porto Rotondo è a 5 minuti d'auto: cena elegante alla marina la sera, poi ritorno in spiaggia a Marinella il mattino dopo." },
      { icon: "camera", title: "La vista panoramica", text: "Il litorale di Marinella offre una vista panoramica sulla costa orientale. Al tramonto, le montagne dell'entroterra si colorano di viola e arancione." },
    ],
  },

  "spiaggia-bados": {
    snippetBait: "Raggiungi Spiaggia Bados con KS Rent Sardinia: 10 minuti da Olbia. Paradiso del windsurf e kitesurf. Jeep Avenger per attrezzatura sportiva. Senza carta di credito.",
    distanceFromOlbia: "8 km, 10 minuti",
    vehicleReason: "Per Spiaggia Bados il Jeep Avenger è la scelta degli sportivi: bagagliaio capiente per tavole e attrezzatura. La Fiat Panda è perfetta per chi vuole solo un bagno veloce.",
    localTips: [
      { icon: "wind", title: "Il vento da maestro", text: "Il Maestrale soffia quasi ogni pomeriggio in estate a Bados. Le condizioni perfette per il kitesurf si trovano dalle 14:00 alle 18:00 con vento da 15-25 nodi." },
      { icon: "swim", title: "La calma del mattino", text: "Prima che il vento si alzi (8:00-12:00), Bados è una spiaggia cristallina e calma. Perfetta per il bagno e lo snorkeling ai lati rocciosi." },
      { icon: "road", title: "La scuola di kite", text: "A Bados operano scuole certificate che offrono lezioni per principianti con attrezzatura inclusa. Una lezione dura circa 3 ore — parcheggia vicino alla scuola." },
      { icon: "food", title: "Chioschi sportivi", text: "I chioschi di Bados servono panini energetici, smoothie e birra dopo lo sport. Atmosfera giovane e sportiva. Per cena, il centro di Olbia è a 10 minuti." },
    ],
  },

  "spiaggia-pittulongu": {
    snippetBait: "Raggiungi Spiaggia Pittulongu con KS Rent Sardinia: 10 minuti da Olbia, la più vicina all'aeroporto. Fondali bassi, ristoranti sulla sabbia e vista su Tavolara. Senza carta di credito.",
    distanceFromOlbia: "5 km, 10 minuti",
    vehicleReason: "Pittulongu è la spiaggia più vicina alla sede KS Rent: consegna in 10 minuti. La Fiat Panda è la scelta più pratica — parcheggio sulla spiaggia e zero complicazioni.",
    localTips: [
      { icon: "clock", title: "L'ultimo bagno", text: "Se il volo è nel pomeriggio, Pittulongu è il posto perfetto per l'ultimo bagno: 10 minuti dall'aeroporto. Restituisci l'auto KS Rent direttamente dopo." },
      { icon: "swim", title: "La spiaggia degli olbiesi", text: "Pittulongu è la spiaggia dei residenti olbiesi. Meno turistica, più autentica. Fondali bassi per bambini e stabilimenti attrezzati con tutti i servizi." },
      { icon: "food", title: "Ristoranti sul mare", text: "Tre ristoranti direttamente sulla sabbia servono pesce fresco e pizza. Il tramonto con vista su Tavolara è uno spettacolo quotidiano gratuito." },
      { icon: "road", title: "Bados e Golfo Aranci vicini", text: "Da Pittulongu: Bados (5 min) per il windsurf, Golfo Aranci (10 min) per lo snorkeling. Tre esperienze diverse in una mattinata con l'auto KS Rent." },
    ],
  },

  "capo-testa": {
    snippetBait: "Raggiungi Capo Testa con KS Rent Sardinia: 1 ora da Olbia. Rocce granitiche surreali, Valle della Luna e due spiagge. Jeep Avenger o Mercedes Classe A. Senza carta di credito.",
    distanceFromOlbia: "63 km, 60-65 minuti",
    vehicleReason: "Per Capo Testa consigliamo la Mercedes Classe A per il comfort nel lungo tragitto, o il Jeep Avenger per esplorare i sentieri sterrati verso le calette nascoste tra le rocce granitiche.",
    localTips: [
      { icon: "mountain", title: "Le rocce scultoree", text: "Le formazioni granitiche di Capo Testa sono state scolpite dal vento in migliaia di anni. Alcune ricordano animali, volti, architetture. Il percorso a piedi tra le rocce dura circa 1 ora." },
      { icon: "camera", title: "Valle della Luna", text: "La Valle della Luna è un anfiteatro naturale tra le rocce, raggiungibile a piedi in 20 minuti dal parcheggio. Meta hippie dagli anni '60, oggi è un luogo di meditazione e bellezza." },
      { icon: "swim", title: "Due spiagge opposte", text: "Rena di Ponente (ovest) per il tramonto e Rena di Levante (est) per l'alba. Due esperienze completamente diverse a 5 minuti a piedi l'una dall'altra." },
      { icon: "wind", title: "Il faro di Capo Testa", text: "Il faro in cima al promontorio è raggiungibile a piedi (30 minuti). Il panorama a 360° include la Corsica, l'Arcipelago della Maddalena e la costa gallurese." },
    ],
  },
};

export function getExtraData(slug: string): LocalityExtraData | undefined {
  return EXTRA_DATA[slug];
}

-- ============================================================
-- 04 - CONTENT HTML ARRICCHITO per seo_locations
-- Ogni pagina riceve contenuto unico, minimo 300+ parole,
-- con struttura SEO/AEO ottimizzata:
--   - Paragrafo snippet bait in apertura
--   - Sezione "cosa vedere" specifica
--   - Veicoli consigliati con modelli reali
--   - Distanza e tempi da Olbia
--   - Link interni corretti (senza /localita/ o /spiagge/)
-- ESEGUIRE DOPO 01-fix-internal-links.sql
-- ============================================================

-- PORTO CERVO (già buono, arricchisco con snippet bait e dati concreti)
UPDATE public.seo_locations SET content_html = '<p class="snippet-bait"><strong>KS Rent Sardinia consegna auto di lusso a Porto Cervo in 35 minuti da Olbia.</strong> Audi RS3, BMW M2 e Jeep Avenger disponibili anche senza carta di credito. Consegna al porto turistico, hotel 5 stelle o villa privata. Orario 10:00–22:30, 7 giorni su 7.</p>

<h3>Noleggio Auto a Porto Cervo: L''Eccellenza in Costa Smeralda</h3>
<p>Porto Cervo non è una semplice località turistica — è il simbolo mondiale del lusso nautico e dell''esclusività. Il capolavoro architettonico nato dal sogno dell''Aga Khan nel 1962 merita un servizio di mobilità impeccabile. <strong>KS Rent Sardinia</strong>, con sede a Olbia, è il partner locale che conosce ogni strada, ogni marina e ogni hotel della Costa Smeralda.</p>

<h4>Cosa Vedere a Porto Cervo con la Tua Auto</h4>
<ul>
  <li><strong>La Piazzetta:</strong> Il salotto della mondanità internazionale. Boutique d''alta moda, aperitivi al tramonto e vista sui mega-yacht. Parcheggia nella zona alta e scendi a piedi.</li>
  <li><strong>Promenade du Port:</strong> Gallerie d''arte, concept store e design contemporaneo. La zona più artistica di Porto Cervo.</li>
  <li><strong>Chiesa di Stella Maris:</strong> Ospita un dipinto attribuito a El Greco. Architettura iconica affacciata sul golfo.</li>
  <li><strong>Pevero Golf Club:</strong> 18 buche tra graniti e macchia mediterranea, a 5 minuti d''auto da Porto Cervo.</li>
</ul>

<h4>Le Spiagge da Raggiungere in Auto da Porto Cervo</h4>
<p>Con la tua auto KS Rent percorri le panoramiche che collegano le baie più iconiche della Costa Smeralda:</p>
<ul>
  <li><a href="/spiaggia-del-principe">Spiaggia del Principe</a> — 10 min, sterrato (consigliato SUV)</li>
  <li><a href="/capriccioli">Capriccioli</a> — 8 min, snorkeling tra graniti rosa</li>
  <li><a href="/romazzino">Romazzino</a> — 5 min, la spiaggia dell''omonimo hotel 5 stelle</li>
  <li><a href="/liscia-ruja">Liscia Ruja</a> — 12 min, la Long Beach più grande della costa</li>
</ul>

<h4>Quale Auto Noleggiare per Porto Cervo</h4>
<p>I nostri clienti a Porto Cervo scelgono soprattutto l''<strong>Audi RS3 Sportback</strong> per la Piazzetta e le cene di gala, la <strong>BMW M2 Coupé</strong> per le strade panoramiche verso Romazzino, e il <strong>Jeep Avenger</strong> per le famiglie che vogliono combinare comfort e sterrati verso le calette segrete.</p>

<h4>Come Funziona la Consegna</h4>
<p>Porto Cervo dista <strong>30 km da Olbia</strong>, circa 35-40 minuti sulla panoramica SP59. Consegniamo l''auto direttamente:</p>
<ul>
  <li>Al porto turistico e alla Marina di Porto Cervo</li>
  <li>Agli hotel: Cervo Hotel, Hotel Cala di Volpe, Hotel Pitrizza, Hotel Romazzino</li>
  <li>Alla tua villa privata, con puntualità garantita</li>
</ul>
<p>Servizio disponibile <strong>dalle 10:00 alle 22:30</strong>, anche con preavviso di poche ore. Chiama il <a href="tel:+393446107071">+39 344 610 7071</a>.</p>

<h4>La Sera: Dove Andare con l''Auto a Noleggio</h4>
<p>In meno di 10 minuti raggiungi i locali esclusivi di <a href="/noleggio-auto-baja-sardinia">Baja Sardinia</a> (Phi Beach, Ritual) o la marina di <a href="/noleggio-auto-poltu-quatu">Poltu Quatu</a> per cena vista fiordo. Per un''esperienza gallurese autentica, guida 15 minuti verso l''entroterra di <a href="/noleggio-auto-arzachena">Arzachena</a> e il borgo di San Pantaleo.</p>'
WHERE slug = 'noleggio-auto-porto-cervo';

-- SAN TEODORO
UPDATE public.seo_locations SET content_html = '<p class="snippet-bait"><strong>KS Rent Sardinia consegna auto a San Teodoro in soli 20 minuti da Olbia.</strong> Jeep Avenger per le spiagge su sterrato, Fiat Panda per il centro. Accettiamo bancomat e contanti — nessuna carta di credito necessaria.</p>

<h3>Noleggio Auto a San Teodoro: Cuore dell''Estate in Gallura</h3>
<p>San Teodoro è il borgo più vivace della costa orientale sarda: spiagge caraibiche, vita notturna, mercatini serali e lo Stagno dei fenicotteri rosa. Per vivere tutto questo senza dipendere dai bus, il <strong>noleggio auto a San Teodoro</strong> con KS Rent Sardinia è la soluzione definitiva. Consegniamo l''auto al tuo alloggio — villa, B&B, campeggio o villaggio — eliminando le code ai desk tradizionali.</p>

<h4>Le Spiagge Imperdibili da Raggiungere in Auto</h4>
<ul>
  <li><a href="/la-cinta">La Cinta</a> — 2 min dal centro, 3 km di sabbia bianca con fenicotteri</li>
  <li><a href="/cala-brandinchi">Cala Brandinchi</a> — 10 min, la "Piccola Tahiti" (numero chiuso in estate, prenota online)</li>
  <li><a href="/lu-impostu">Lu Impostu</a> — 8 min, alternativa meno affollata a Brandinchi</li>
  <li><a href="/noleggio-auto-capo-coda-cavallo">Capo Coda Cavallo</a> — 15 min, panorami su Tavolara (SUV consigliato)</li>
</ul>

<h4>Quale Auto Scegliere</h4>
<p>Per San Teodoro consigliamo il <strong>Jeep Avenger</strong>: gli sterrati verso Cala Brandinchi e Lu Impostu richiedono un SUV capace. La <strong>Fiat Panda</strong> è perfetta per il centro paese e La Cinta, dove la strada è asfaltata. Per serate speciali, l''<strong>Audi RS3</strong> ti porta a Porto Cervo in 40 minuti.</p>

<h4>Distanza e Consegna</h4>
<p>San Teodoro dista <strong>25 km da Olbia</strong>, circa 20-25 minuti sulla SS131dcn. Consegniamo l''auto direttamente al tuo alloggio, al campeggio o al villaggio turistico. Se arrivi al porto di Olbia o all''aeroporto Costa Smeralda, possiamo portarti l''auto e tu guidi diretto a San Teodoro.</p>

<h4>Vita Serale e Dintorni</h4>
<p>Il centro pedonale di San Teodoro si anima dal tardo pomeriggio: Via del Tirreno è la passeggiata principale con gelaterie e cocktail bar. Il mercatino serale del mercoledì è imperdibile. Con l''auto puoi esplorare anche la vicina <a href="/noleggio-auto-budoni">Budoni</a> (15 min) per spiagge meno affollate, o <a href="/noleggio-auto-porto-san-paolo">Porto San Paolo</a> (20 min) per le barche verso Tavolara.</p>'
WHERE slug = 'noleggio-auto-san-teodoro';

-- BAJA SARDINIA
UPDATE public.seo_locations SET content_html = '<p class="snippet-bait"><strong>KS Rent Sardinia consegna auto a Baja Sardinia in 30 minuti da Olbia.</strong> BMW M2 e Audi RS3 per la movida della Costa Smeralda. Mercedes Classe A per il comfort. Noleggio senza carta di credito con deposito flessibile.</p>

<h3>Noleggio Auto a Baja Sardinia: Spiagge, Movida e Costa Smeralda</h3>
<p>Baja Sardinia unisce spiagge a misura di famiglia con la movida più celebre del Mediterraneo — dal Phi Beach ai club sulla scogliera. Per vivere tutto senza vincoli di orario, il <strong>noleggio auto a Baja Sardinia</strong> con KS Rent è la mossa vincente. Consegniamo il veicolo alla reception del tuo hotel o nel parcheggio del residence.</p>

<h4>Spiagge e Calette nei Dintorni</h4>
<ul>
  <li><a href="/cala-del-faro">Cala del Faro</a> — 3 min, tramonti mozzafiato sulla Maddalena</li>
  <li><a href="/grande-pevero">Grande Pevero</a> — 5 min, sabbia bianca accanto al Golf Club</li>
  <li><a href="/la-celvia">La Celvia</a> — 8 min, sabbia ambrata amata dai VIP</li>
  <li><a href="/capriccioli">Capriccioli</a> — 10 min, il miglior snorkeling della costa</li>
</ul>

<h4>Auto Consigliata</h4>
<p>Baja Sardinia è sinonimo di vita notturna e spiagge esclusive. La <strong>BMW M2</strong> è la scelta perfetta per arrivare al Phi Beach al tramonto. L''<strong>Audi RS3</strong> per le cene a Porto Cervo. Il <strong>Jeep Avenger</strong> per Grande Pevero su sterrato. La <strong>Mercedes Classe A</strong> per il comfort quotidiano.</p>

<h4>Consegna e Distanza</h4>
<p>Baja Sardinia dista <strong>28 km da Olbia</strong>, circa 30-35 minuti. Consegniamo a hotel, residence e ville private. Servizio 10:00–22:30. Da Baja Sardinia raggiungi <a href="/noleggio-auto-porto-cervo">Porto Cervo</a> in 8 minuti e <a href="/noleggio-auto-palau">Palau</a> in 25 minuti.</p>

<h4>Vita Notturna</h4>
<p>Il Phi Beach apre al tramonto ed è il locale più iconico della Costa Smeralda. Dopo mezzanotte, il Ritual e i club della zona attirano il jet set internazionale. Per un''alternativa raffinata, guida verso la Piazzetta di <a href="/noleggio-auto-porto-cervo">Porto Cervo</a> o risali verso <a href="/noleggio-auto-arzachena">Arzachena</a> per agriturismi con maialetto arrosto e cucina gallurese autentica.</p>'
WHERE slug = 'noleggio-auto-baja-sardinia';

-- PALAU
UPDATE public.seo_locations SET content_html = '<p class="snippet-bait"><strong>KS Rent Sardinia consegna auto a Palau in 40 minuti da Olbia.</strong> Mercedes Classe A e Jeep Avenger per esplorare la costa nord e l''Arcipelago della Maddalena. Noleggio senza carta di credito.</p>

<h3>Noleggio Auto a Palau: La Porta dell''Arcipelago di La Maddalena</h3>
<p>Palau è il principale porto di imbarco per le isole della Maddalena e Caprera, ma le bellezze della costa settentrionale vanno ben oltre. Con il <strong>noleggio auto a Palau</strong> di KS Rent Sardinia scopri entroterra e coste nascoste in totale autonomia. Consegniamo l''auto al porto, all''hotel o alla tua casa vacanze.</p>

<h4>Cosa Fare con l''Auto a Palau</h4>
<ul>
  <li><strong>Roccia dell''Orso</strong> — 5 min d''auto, monumento naturale con panorama 360° sull''arcipelago (camminata 15 min)</li>
  <li><strong>Porto Pollo</strong> — 10 min, paradiso europeo di windsurf e kitesurf</li>
  <li><strong>Traghetto La Maddalena</strong> — ogni 15-20 min dal porto (parcheggia l''auto, gira l''isola in scooter)</li>
  <li><a href="/noleggio-auto-santa-teresa-gallura">Santa Teresa Gallura</a> — 25 min, Rena Bianca e Capo Testa</li>
</ul>

<h4>Auto Consigliata</h4>
<p>Per Palau consigliamo la <strong>Mercedes Classe A</strong> per il tragitto lungo e confortevole da Olbia (40 km). Il <strong>Jeep Avenger</strong> è perfetto per Porto Pollo e le calette della costa nord su sterrato.</p>

<h4>Consegna</h4>
<p>Palau dista <strong>40 km da Olbia</strong>, circa 40-45 minuti. Consegniamo al porto traghetti, agli hotel e ai campeggi. Da Palau raggiungi <a href="/noleggio-auto-cannigione">Cannigione</a> in 20 minuti e <a href="/noleggio-auto-porto-cervo">Porto Cervo</a> in 30 minuti percorrendo la panoramica costiera.</p>

<h4>Pesce Fresco e Vita Serale</h4>
<p>I ristoranti sul lungomare di Palau servono pesce fresco pescato la mattina. Prova la fregola con arselle o il polpo alla griglia. La sera il centro pedonale si anima con bar, gelaterie e musica dal vivo. Per cena gourmet, guida verso <a href="/noleggio-auto-porto-cervo">Porto Cervo</a> o gli agriturismi dell''entroterra gallurese.</p>'
WHERE slug = 'noleggio-auto-palau';

-- CANNIGIONE
UPDATE public.seo_locations SET content_html = '<p class="snippet-bait"><strong>KS Rent Sardinia consegna auto a Cannigione in 35 minuti da Olbia.</strong> Base strategica per Porto Cervo, Baja Sardinia e l''Arcipelago della Maddalena. Mercedes Classe A e Jeep Avenger senza carta di credito.</p>

<h3>Noleggio Auto a Cannigione: La Base Perfetta per la Costa Smeralda</h3>
<p>Cannigione, ex villaggio di pescatori sul Golfo di Arzachena, è oggi una delle basi più strategiche per esplorare tutta la Costa Smeralda. Rilassata e familiare, è equidistante da Porto Cervo, Baja Sardinia e Palau. Con il <strong>noleggio auto a Cannigione</strong> di KS Rent Sardinia la tua vacanza cambia ritmo: portiamo il veicolo al tuo B&B o sul lungomare.</p>

<h4>Cosa Esplorare in Auto da Cannigione</h4>
<ul>
  <li><a href="/noleggio-auto-porto-cervo">Porto Cervo</a> — 15 min, la Piazzetta e le spiagge della Costa Smeralda</li>
  <li><a href="/noleggio-auto-baja-sardinia">Baja Sardinia</a> — 10 min, Phi Beach e Grande Pevero</li>
  <li><a href="/noleggio-auto-arzachena">Arzachena</a> — 10 min, nuraghi e Tombe dei Giganti</li>
  <li><a href="/noleggio-auto-palau">Palau</a> — 20 min, traghetti per La Maddalena</li>
  <li>Spiaggia di Mannena — 5 min, sabbia bianca e fondale basso per bambini</li>
</ul>

<h4>Auto Consigliata</h4>
<p>La <strong>Mercedes Classe A</strong> è perfetta per il comfort quotidiano tra spiagge e centro paese. Il <strong>Jeep Avenger</strong> serve per le calette della costa est di Arzachena, raggiungibili solo su sterrato.</p>

<h4>Consegna e Distanza</h4>
<p>Cannigione dista <strong>32 km da Olbia</strong>, circa 35 minuti. Consegniamo al porto turistico, ai residence e ai B&B. Dal porto di Cannigione partono barche per l''Arcipelago della Maddalena e le isole di Mortorio e Soffi.</p>'
WHERE slug = 'noleggio-auto-cannigione';

-- POLTU QUATU
UPDATE public.seo_locations SET content_html = '<p class="snippet-bait"><strong>KS Rent Sardinia consegna auto premium a Poltu Quatu in 35 minuti da Olbia.</strong> Audi RS3 e BMW M2 per la marina esclusiva della Costa Smeralda. Accettiamo bancomat e contanti — nessuna carta di credito necessaria.</p>

<h3>Noleggio Auto a Poltu Quatu: Il Fiordo Nascosto della Costa Smeralda</h3>
<p>Poltu Quatu — "porto nascosto" in gallurese — è un fiordo naturale di granito rosa con una marina esclusiva, uno dei pochi fiordi del Mediterraneo. Per entrare e uscire con stile da questa oasi, il <strong>noleggio auto a Poltu Quatu</strong> di KS Rent Sardinia è il servizio che fa la differenza. Consegniamo in banchina, al Grand Hotel o alla tua villa.</p>

<h4>Spiagge Vicine a Poltu Quatu</h4>
<ul>
  <li><a href="/grande-pevero">Grande Pevero</a> — 3 min d''auto, acque calme e fondale sabbioso</li>
  <li><a href="/capriccioli">Capriccioli</a> — 8 min, snorkeling tra graniti rosa e posidonia</li>
  <li><a href="/romazzino">Romazzino</a> — 10 min, la spiaggia dell''hotel 5 stelle</li>
  <li><a href="/spiaggia-del-principe">Spiaggia del Principe</a> — 12 min, sterrato (Jeep consigliato)</li>
</ul>

<h4>Auto Consigliata</h4>
<p>L''<strong>Audi RS3</strong> è la scelta naturale per i clienti della marina. La <strong>BMW M2</strong> per chi ama la guida sportiva sulla litoranea verso Porto Cervo. Il <strong>Jeep Avenger</strong> per le famiglie che esplorano le calette su sterrato.</p>

<h4>La Sera</h4>
<p>Il ristorante del Grand Hotel Poltu Quatu offre cucina gourmet con vista sulla marina. In meno di 10 minuti raggiungi la Piazzetta di <a href="/noleggio-auto-porto-cervo">Porto Cervo</a> o i locali di <a href="/noleggio-auto-baja-sardinia">Baja Sardinia</a>. Il giovedì, il mercatino artigianale di San Pantaleo (15 min d''auto) è un''esperienza gallurese unica.</p>'
WHERE slug = 'noleggio-auto-poltu-quatu';

-- PUNTALDIA
UPDATE public.seo_locations SET content_html = '<p class="snippet-bait"><strong>KS Rent Sardinia consegna auto a Puntaldia in 25 minuti da Olbia.</strong> Penisola esclusiva con golf club, porto turistico e accesso a Cala Brandinchi. Audi RS3 e Jeep Avenger senza carta di credito.</p>

<h3>Noleggio Auto a Puntaldia: Tra il Golf Club e il Mare Cristallino</h3>
<p>Puntaldia è il fiore all''occhiello del litorale a sud di Olbia: una penisola privata con campo da golf a 9 buche panoramiche, porto turistico e ville esclusive. Con il <strong>noleggio auto a Puntaldia</strong> di KS Rent Sardinia ricevi il veicolo direttamente alla villa o al molo, senza perdere un minuto di relax.</p>

<h4>Spiagge Raggiungibili in Auto</h4>
<ul>
  <li><a href="/lu-impostu">Lu Impostu</a> — 5 min, sabbia fine tra gigli e oleandri</li>
  <li><a href="/cala-brandinchi">Cala Brandinchi</a> — 8 min, la Piccola Tahiti (prenota ingresso online)</li>
  <li><a href="/noleggio-auto-capo-coda-cavallo">Capo Coda Cavallo</a> — 10 min, panorami su Tavolara (SUV consigliato)</li>
  <li><a href="/la-cinta">La Cinta</a> — 12 min, 3 km di sabbia a San Teodoro</li>
</ul>

<h4>Auto Consigliata</h4>
<p>L''<strong>Audi RS3</strong> è perfetta per le strade panoramiche costiere. Il <strong>Jeep Avenger</strong> per raggiungere Cala Brandinchi e Capo Coda Cavallo su sterrato. La <strong>Fiat Panda</strong> per il golf e le commissioni quotidiane.</p>

<h4>Distanza e Vita Serale</h4>
<p>Puntaldia dista <strong>30 km da Olbia</strong>, circa 25-30 minuti. La sera, <a href="/noleggio-auto-san-teodoro">San Teodoro</a> è a 12 minuti: passeggiata pedonale, cocktail bar e mercatino serale. Per cena di pesce, il ristorante del Puntaldia Resort ha vista sul golf e sul mare.</p>'
WHERE slug = 'noleggio-auto-puntaldia';

-- PORTO ROTONDO
UPDATE public.seo_locations SET content_html = '<p class="snippet-bait"><strong>KS Rent Sardinia consegna auto a Porto Rotondo in soli 20 minuti da Olbia — la località premium più vicina alla nostra sede.</strong> Audi RS3, BMW M2 e Mercedes Classe A per la marina elegante della Gallura. Senza carta di credito.</p>

<h3>Noleggio Auto a Porto Rotondo: Arte, Marina e Vita Elegante</h3>
<p>Con la sua Piazzetta San Marco in granito e il teatro all''aperto, Porto Rotondo è una delle capitali del turismo d''élite sardo. A soli 20 minuti da Olbia, è la località premium con la consegna più rapida. Con il <strong>noleggio auto a Porto Rotondo</strong> di KS Rent Sardinia portiamo l''auto esattamente dove risiedi.</p>

<h4>Cosa Vedere e Spiagge Vicine</h4>
<ul>
  <li><strong>Teatro Porto Rotondo</strong> — concerti e spettacoli estivi sotto le stelle in un anfiteatro di granito</li>
  <li><strong>Ira Beach</strong> — 5 min, acque turchesi poco conosciute</li>
  <li><a href="/spiaggia-marinella">Spiaggia Marinella</a> — 3 min, km di sabbia con sport acquatici e lounge bar</li>
  <li><a href="/noleggio-auto-golfo-aranci">Golfo Aranci</a> — 15 min, borgo marinaro con escursioni per avvistare delfini</li>
  <li><a href="/noleggio-auto-pittulongu">Pittulongu</a> — 10 min, ristoranti di pesce con i piedi sulla sabbia</li>
</ul>

<h4>Auto Consigliata</h4>
<p>L''<strong>Audi RS3</strong> è perfetta per il lungomare e le serate alla marina. La <strong>Mercedes Classe A</strong> per il comfort quotidiano tra le spiagge. La consegna a Porto Rotondo è la più rapida: 18 km, 20 minuti dalla sede.</p>

<h4>Vita Serale</h4>
<p>La piazzetta di Porto Rotondo ha ristoranti eleganti e boutique. Meno caotica di Porto Cervo, offre un''atmosfera raffinata. Lo Yacht Club Porto Rotondo è uno dei più prestigiosi della Sardegna. Per cucina gallurese autentica, gli agriturismi dell''entroterra sono a 15 minuti d''auto.</p>'
WHERE slug = 'noleggio-auto-porto-rotondo';

-- GOLFO ARANCI
UPDATE public.seo_locations SET content_html = '<p class="snippet-bait"><strong>KS Rent Sardinia consegna auto a Golfo Aranci in 15 minuti da Olbia.</strong> Fiat Panda per le famiglie, Jeep Avenger per le calette. Consegna al porto traghetti Sardinia Ferries. Senza carta di credito.</p>

<h3>Noleggio Auto a Golfo Aranci: Delfini, Spiagge e Porto Traghetti</h3>
<p>Golfo Aranci è un borgo marinaro dal fascino autentico: lungomare moderno, colonia di delfini stanziali e il porto di Sardinia Ferries. Con il <strong>noleggio auto a Golfo Aranci</strong> di KS Rent Sardinia trovi l''auto pronta allo sbarco dal traghetto o al tuo hotel, senza attese.</p>

<h4>Spiagge e Attività</h4>
<ul>
  <li><a href="/cala-moresca">Cala Moresca</a> — 5 min, il miglior snorkeling a 15 min da Olbia</li>
  <li><a href="/cala-sabina">Cala Sabina</a> — 3 min, ginepri secolari sulla sabbia</li>
  <li><a href="/spiaggia-bianca">Spiaggia Bianca</a> — 8 min, dune e gigli di mare</li>
  <li><strong>Escursione delfini</strong> — dal porto, partenza alle 17:00, durata 2 ore</li>
  <li><strong>Trenino Verde</strong> — ferrovia turistica panoramica nell''entroterra</li>
</ul>

<h4>Auto Consigliata</h4>
<p>La <strong>Fiat Panda</strong> è la più richiesta: pratica per le stradine del paese e i parcheggi in spiaggia. Il <strong>Jeep Avenger</strong> è consigliato per Cala Moresca e le calette rocciose raggiungibili su sterrato.</p>

<h4>Pesce e Tradizione</h4>
<p>Golfo Aranci ha una tradizione di pesca del tonno. I ristoranti sul porto servono tonno fresco alla griglia, bottarga e ricci di mare (in stagione, ottobre-aprile). La sera, con l''auto raggiungi i locali di <a href="/noleggio-auto-porto-rotondo">Porto Rotondo</a> in 15 minuti o il centro di Olbia in 10.</p>'
WHERE slug = 'noleggio-auto-golfo-aranci';

-- MURTA MARIA
UPDATE public.seo_locations SET content_html = '<p class="snippet-bait"><strong>KS Rent Sardinia consegna auto a Murta Maria in soli 10 minuti dalla sede di Olbia.</strong> Accesso diretto a Porto Istana e vista su Tavolara. Fiat Panda e Jeep Avenger disponibili senza carta di credito.</p>

<h3>Noleggio Auto a Murta Maria: La Consegna Più Rapida verso Tavolara</h3>
<p>Murta Maria è una frazione di Olbia posizionata strategicamente: vicinissima all''aeroporto ed è il punto di accesso naturale a Porto Istana e all''Area Marina Protetta di Tavolara. Con il <strong>noleggio auto a Murta Maria</strong> di KS Rent Sardinia la consegna è fulminea: appena 10 minuti dalla sede.</p>

<h4>Spiagge e Escursioni</h4>
<ul>
  <li><a href="/porto-istana">Porto Istana</a> — 5 min, 4 calette con granito rosa e vista Tavolara</li>
  <li><a href="/noleggio-auto-porto-san-paolo">Porto San Paolo</a> — 10 min, barche per l''isola di Tavolara</li>
  <li><a href="/noleggio-auto-capo-coda-cavallo">Capo Coda Cavallo</a> — 15 min, Area Marina Protetta (SUV consigliato)</li>
  <li><strong>Isola di Tavolara</strong> — barca dal porticciolo di Porto San Paolo, spiaggia di Spalmatore</li>
</ul>

<h4>Auto Consigliata</h4>
<p>La <strong>Fiat Panda</strong> è perfetta per i tragitti brevi verso Porto Istana. Il <strong>Jeep Avenger</strong> per le calette secondarie verso Capo Coda Cavallo su sterrato. Murta Maria dista solo <strong>10 km da Olbia</strong>, la consegna più rapida del nostro servizio.</p>

<h4>Tramonto e Ristoranti</h4>
<p>Il tramonto da Murta Maria è unico: il sole scende dietro le montagne di Olbia mentre Tavolara si colora di rosa. Lungo la strada per Porto Istana ci sono 2-3 ristoranti di pesce con terrazza sul mare. Pesce alla griglia, frutti di mare e Vermentino locale.</p>'
WHERE slug = 'noleggio-auto-murta-maria';

-- PORTO SAN PAOLO
UPDATE public.seo_locations SET content_html = '<p class="snippet-bait"><strong>KS Rent Sardinia consegna auto a Porto San Paolo in 15 minuti da Olbia.</strong> Porticciolo per escursioni a Tavolara, spiagge incontaminate e borgo autentico. Jeep Avenger e Fiat Panda senza carta di credito.</p>

<h3>Noleggio Auto a Porto San Paolo: Il Borgo dei Pescatori di Fronte a Tavolara</h3>
<p>Porto San Paolo è un borgo autentico, non turistificato, famoso come porto di imbarco per l''Isola di Tavolara. A metà strada tra Olbia e San Teodoro, con il <strong>noleggio auto a Porto San Paolo</strong> di KS Rent Sardinia diventa il quartier generale per esplorare la costa orientale.</p>

<h4>Cosa Fare con l''Auto</h4>
<ul>
  <li><strong>Barche per Tavolara</strong> — ogni 30 min dal porticciolo in estate, spiaggia di Spalmatore</li>
  <li><a href="/porto-taverna">Porto Taverna</a> — 5 min, la vista più bella su Tavolara e ristoranti sul mare</li>
  <li><a href="/porto-istana">Porto Istana</a> — 8 min, 4 calette di granito rosa</li>
  <li><a href="/noleggio-auto-san-teodoro">San Teodoro</a> — 15 min, La Cinta e vita serale</li>
  <li><a href="/noleggio-auto-murta-maria">Murta Maria</a> — 5 min, verso Olbia e l''aeroporto</li>
</ul>

<h4>Auto Consigliata</h4>
<p>La <strong>Fiat Panda</strong> è ideale per il borgo e le spiagge principali. Il <strong>Jeep Avenger</strong> per le calette nascoste di Capo Coda Cavallo su sterrato, a 10 minuti dal borgo. Porto San Paolo dista solo <strong>15 km da Olbia</strong>.</p>

<h4>Cucina del Borgo</h4>
<p>I ristoranti sul porticciolo servono il pescato del giorno: zuppa di pesce, ricci di mare e polpo alla griglia. Ogni ristorante ha la sua ricetta — chiedi il "piatto del pescatore". Sull''isola di Tavolara, i murales raccontano la storia del "Regno più piccolo del mondo".</p>'
WHERE slug = 'noleggio-auto-porto-san-paolo';

-- ARZACHENA
UPDATE public.seo_locations SET content_html = '<p class="snippet-bait"><strong>KS Rent Sardinia consegna auto ad Arzachena in 25 minuti da Olbia.</strong> Base ideale per Porto Cervo (12 km), Baja Sardinia e i siti nuragici. Mercedes Classe A e Audi RS3 senza carta di credito.</p>

<h3>Noleggio Auto ad Arzachena: Il Cuore Pulsante della Costa Smeralda</h3>
<p>Arzachena è il comune che amministra l''intera Costa Smeralda — Porto Cervo, Baja Sardinia, Poltu Quatu e Cannigione sono tutte frazioni di Arzachena. È anche un crocevia di storia: nuraghi di 3.500 anni, tombe dei giganti e il borgo di San Pantaleo. Con il <strong>noleggio auto ad Arzachena</strong> di KS Rent Sardinia hai l''intera Gallura nel palmo della mano.</p>

<h4>Archeologia e Spiagge</h4>
<ul>
  <li><strong>Nuraghe La Prisgiona</strong> — 5 min dal centro, villaggio nuragico di 3.500 anni</li>
  <li><strong>Tombe dei Giganti di Coddu Vecchiu</strong> — 5 min, monumento funerario unico</li>
  <li><strong>Il Fungo di Arzachena</strong> — roccia a forma di fungo nel centro paese</li>
  <li><a href="/noleggio-auto-porto-cervo">Porto Cervo</a> — 12 km, la Piazzetta e le spiagge premium</li>
  <li><a href="/noleggio-auto-baja-sardinia">Baja Sardinia</a> — 10 km, Phi Beach e movida</li>
  <li><a href="/noleggio-auto-cannigione">Cannigione</a> — 8 km, porto turistico e spiagge familiari</li>
</ul>

<h4>Auto Consigliata</h4>
<p>La <strong>Mercedes Classe A</strong> offre comfort per i trasferimenti quotidiani verso le spiagge. L''<strong>Audi RS3</strong> per le serate a Porto Cervo. Arzachena dista <strong>25 km da Olbia</strong>, circa 25-30 minuti. Consegniamo all''agriturismo, al B&B o in paese.</p>

<h4>Cucina Gallurese DOC</h4>
<p>Arzachena è il posto migliore per la cucina gallurese: zuppa gallurese, maialetto arrosto, pane frattau e seadas. Gli agriturismi dell''entroterra offrono menù completi a 25-35€ con vino locale incluso. Il giovedì mattina, il mercatino artigianale di San Pantaleo (10 min d''auto) è imperdibile.</p>'
WHERE slug = 'noleggio-auto-arzachena';

-- SANTA TERESA GALLURA
UPDATE public.seo_locations SET content_html = '<p class="snippet-bait"><strong>KS Rent Sardinia consegna auto a Santa Teresa Gallura in 55 minuti da Olbia.</strong> Esplora Capo Testa, Rena Bianca e le Bocche di Bonifacio. Mercedes Classe A e Jeep Avenger senza carta di credito.</p>

<h3>Noleggio Auto a Santa Teresa Gallura: L''Estremo Nord della Sardegna</h3>
<p>Santa Teresa Gallura è la sentinella del nord: un borgo colorato affacciato sulle Bocche di Bonifacio con la Corsica a 12 km. Per esplorare la natura selvaggia e le scogliere scolpite dal vento, il <strong>noleggio auto a Santa Teresa</strong> con KS Rent Sardinia è la scelta intelligente. Consegniamo il veicolo alla tua struttura ricettiva.</p>

<h4>Cosa Esplorare in Auto</h4>
<ul>
  <li><a href="/rena-bianca">Rena Bianca</a> — nel centro, Bandiera Blu con vista sulla Corsica</li>
  <li><a href="/capo-testa">Capo Testa</a> — 5 min, graniti millenari e Valle della Luna</li>
  <li><strong>Rena di Levante</strong> — lato est di Capo Testa, riparata dal Maestrale</li>
  <li><strong>Traghetto per la Corsica</strong> — 50 min di traversata per Bonifacio</li>
  <li><a href="/noleggio-auto-palau">Palau</a> — 25 min, traghetti per La Maddalena</li>
</ul>

<h4>Auto Consigliata</h4>
<p>Per Santa Teresa consigliamo la <strong>Mercedes Classe A</strong>: il tragitto di 60 km da Olbia richiede comfort. Il <strong>Jeep Avenger</strong> per Capo Testa e le calette su sterrato della costa nord. Distanza: <strong>60 km da Olbia</strong>, 55-60 minuti.</p>

<h4>Vento e Spiagge</h4>
<p>Santa Teresa è esposta al Maestrale. Quando soffia forte, Rena Bianca diventa impraticabile ma Rena di Levante (lato est di Capo Testa) è riparata. Controlla il vento prima di uscire. La sera, il centro pedonale è un reticolo di vie con ristoranti, pizzerie e bar. Parcheggia appena fuori dal centro.</p>'
WHERE slug = 'noleggio-auto-santa-teresa-gallura';

-- BUDONI
UPDATE public.seo_locations SET content_html = '<p class="snippet-bait"><strong>KS Rent Sardinia consegna auto a Budoni in 30 minuti da Olbia.</strong> Spiagge lunghe e sabbiose ideali per famiglie, pinete fresche e frazioni tranquille. Fiat Panda e Jeep Avenger senza carta di credito.</p>

<h3>Noleggio Auto a Budoni: Pinete, Sabbia e Tranquillità</h3>
<p>Budoni è un paradiso per famiglie: lunghissimi litorali di sabbia bianca, acque dolcemente digradanti e fresche pinete a ridosso del mare. Il comune è formato da numerose frazioni sparse tra collina e mare, rendendo il <strong>noleggio auto a Budoni</strong> di KS Rent Sardinia essenziale. Portiamo l''auto al villaggio turistico o alla villetta.</p>

<h4>Spiagge e Dintorni</h4>
<ul>
  <li><strong>Spiaggia di Budoni centro</strong> — sabbia bianca e pineta, ideale per bambini</li>
  <li><a href="/noleggio-auto-agrustos">Agrustos</a> — 5 min, calette e resort</li>
  <li><a href="/noleggio-auto-san-teodoro">San Teodoro</a> — 15 min, La Cinta e vita notturna</li>
  <li><a href="/noleggio-auto-porto-san-paolo">Porto San Paolo</a> — 25 min, barche per Tavolara</li>
</ul>

<h4>Auto Consigliata</h4>
<p>La <strong>Fiat Panda</strong> è la scelta più popolare: pratica, economica e perfetta per spiagge con parcheggio facile. Il <strong>Jeep Avenger</strong> è consigliato per le calette di Agrustos e la costa meno battuta. Budoni dista <strong>35 km da Olbia</strong>, 30-35 minuti.</p>

<h4>Mercatini e Vita Serale</h4>
<p>Budoni ha un mercato serale estivo con prodotti artigianali e gastronomia locale. Per la vita notturna, San Teodoro è a 15 minuti d''auto. Gli agriturismi dell''entroterra di Budoni servono porceddu e pecorino sardo a prezzi onesti.</p>'
WHERE slug = 'noleggio-auto-budoni';

-- AGRUSTOS
UPDATE public.seo_locations SET content_html = '<p class="snippet-bait"><strong>KS Rent Sardinia consegna auto ad Agrustos con consegna alla reception del tuo resort.</strong> Esci dal villaggio ed esplora la costa orientale. Fiat Panda e Jeep Avenger senza carta di credito. 35 minuti da Olbia.</p>

<h3>Noleggio Auto ad Agrustos: Esci dal Resort ed Esplora la Sardegna</h3>
<p>Agrustos ospita alcuni dei resort e villaggi turistici più belli della costa orientale sarda. Ma limitare la vacanza al villaggio sarebbe un peccato. Con il <strong>noleggio auto ad Agrustos</strong> di KS Rent Sardinia ti consegniamo l''auto alla reception del resort — e la Gallura diventa tua.</p>

<h4>Cosa Fare con l''Auto</h4>
<ul>
  <li><strong>Calette di Agrustos</strong> — spiagge di sabbia fine accessibili dalla strada costiera</li>
  <li><a href="/noleggio-auto-budoni">Budoni</a> — 5 min, centro paese, mercato e pineta</li>
  <li><a href="/noleggio-auto-san-teodoro">San Teodoro</a> — 15 min, vita notturna e Cala Brandinchi</li>
  <li><a href="/cala-brandinchi">Cala Brandinchi</a> — 20 min, la Piccola Tahiti</li>
  <li><a href="/noleggio-auto-porto-san-paolo">Porto San Paolo</a> — 25 min, barche per Tavolara</li>
</ul>

<h4>Auto Consigliata</h4>
<p>La <strong>Fiat Panda</strong> è pratica per il quotidiano. Il <strong>Jeep Avenger</strong> è perfetto per le calette su sterrato della costa di Agrustos e Capo Coda Cavallo. Agrustos dista <strong>35 km da Olbia</strong>, 35 minuti. Consegna alla reception del villaggio o all''appartamento.</p>'
WHERE slug = 'noleggio-auto-agrustos';

-- MARINELLA
UPDATE public.seo_locations SET content_html = '<p class="snippet-bait"><strong>KS Rent Sardinia consegna auto al Golfo di Marinella in 20 minuti da Olbia.</strong> Tra Porto Rotondo e Golfo Aranci, spiaggia ampia con sport acquatici. Mercedes e Jeep Avenger senza carta di credito.</p>

<h3>Noleggio Auto al Golfo di Marinella: Tra Porto Rotondo e Golfo Aranci</h3>
<p>Il Golfo di Marinella è un''insenatura naturale a metà strada tra Porto Rotondo e Golfo Aranci. Famosa per residenze eleganti e resort sul mare, questa zona offre il meglio con un mezzo proprio. Con il <strong>noleggio auto a Marinella</strong> di KS Rent Sardinia portiamo il veicolo all''ingresso del tuo appartamento o hotel.</p>

<h4>Sport Acquatici e Dintorni</h4>
<ul>
  <li><a href="/spiaggia-marinella">Spiaggia di Marinella</a> — km di sabbia per windsurf e famiglie</li>
  <li><a href="/noleggio-auto-porto-rotondo">Porto Rotondo</a> — 5 min, piazzetta e ristoranti eleganti</li>
  <li><a href="/noleggio-auto-golfo-aranci">Golfo Aranci</a> — 10 min, borgo marinaro e delfini</li>
  <li><a href="/noleggio-auto-pittulongu">Pittulongu</a> — 8 min, ristoranti di pesce sulla sabbia</li>
</ul>

<h4>Auto Consigliata e Distanza</h4>
<p>La <strong>Mercedes Classe A</strong> per il comfort quotidiano. Il <strong>Jeep Avenger</strong> per le calette su sterrato. Marinella dista <strong>20 km da Olbia</strong>, circa 20 minuti. La sera, Porto Rotondo è a 5 minuti per cena e passeggiata.</p>'
WHERE slug = 'noleggio-auto-marinella';

-- PITTULONGU
UPDATE public.seo_locations SET content_html = '<p class="snippet-bait"><strong>KS Rent Sardinia consegna auto a Pittulongu in pochi minuti dalla sede.</strong> La spiaggia più vicina a Olbia e all''aeroporto. Ristoranti di pesce con i piedi sulla sabbia. Noleggio senza carta di credito.</p>

<h3>Noleggio Auto a Pittulongu: La Spiaggia degli Olbiesi</h3>
<p>"La Playa" degli olbiesi: un lungo litorale a mezzaluna di sabbia bianca con ristoranti iconici dove mangiare pesce con i piedi nella sabbia. Vicinissima all''aeroporto e alla sede KS Rent, la consegna è fulminea. Con il <strong>noleggio auto a Pittulongu</strong> esplori tutto il golfo in totale autonomia.</p>

<h4>Spiagge Vicine</h4>
<ul>
  <li><a href="/spiaggia-pittulongu">Spiaggia di Pittulongu</a> — la spiaggia principale, sabbia bianca e vista Tavolara</li>
  <li><a href="/spiaggia-bados">Spiaggia di Bados</a> — 2 min, fondale bassissimo per bambini</li>
  <li><a href="/spiaggia-bianca">Spiaggia Bianca</a> — 5 min, dune e gigli di mare</li>
  <li><a href="/noleggio-auto-golfo-aranci">Golfo Aranci</a> — 10 min, Cala Moresca e Cala Sabina</li>
</ul>

<h4>Auto Consigliata</h4>
<p>La <strong>Fiat Panda</strong> è perfetta per i tragitti brevi tra le calette. Pittulongu è a <strong>5 km dalla sede di Olbia</strong> — la consegna più rapida in assoluto. La sera, il centro storico di Olbia è a 5 minuti per ristoranti e passeggiata sul lungomare.</p>'
WHERE slug = 'noleggio-auto-pittulongu';

-- BADOS
UPDATE public.seo_locations SET content_html = '<p class="snippet-bait"><strong>KS Rent Sardinia consegna auto a Bados in pochi minuti dalla sede di Olbia.</strong> Spiaggia di sabbia fine con fondale dolcissimo, ideale per famiglie con bambini. Fiat Panda e Jeep Avenger senza carta di credito.</p>

<h3>Noleggio Auto a Bados: Sabbia Fine e Acque Calme vicino Olbia</h3>
<p>Bados chiude il litorale nord di Olbia: sabbia grigio-chiara finissima, fondale dolcissimo e acque quasi sempre calme. Protetta dai venti, è ideale per famiglie con bambini piccoli. Con il <strong>noleggio auto a Bados</strong> di KS Rent Sardinia recapitiamo la vettura ovunque tu risieda, in pochi minuti.</p>

<h4>Spiagge e Dintorni</h4>
<ul>
  <li><a href="/spiaggia-bados">Spiaggia di Bados</a> — parcheggio davanti alla spiaggia</li>
  <li><a href="/noleggio-auto-pittulongu">Pittulongu</a> — 2 min, ristoranti di pesce sulla sabbia</li>
  <li><a href="/noleggio-auto-golfo-aranci">Golfo Aranci</a> — 8 min, borgo marinaro e tramonto</li>
  <li><a href="/spiaggia-bianca">Spiaggia Bianca</a> — 5 min, gigli di mare e fondale basso</li>
</ul>

<h4>Auto e Distanza</h4>
<p>Bados è a <strong>7 km da Olbia</strong>, consegna rapidissima. La <strong>Fiat Panda</strong> è perfetta per la zona. La sera, il centro di Olbia è a 10 minuti per il corso pedonale e la passeggiata sul lungomare.</p>'
WHERE slug = 'noleggio-auto-bados';

-- PORTISCO
UPDATE public.seo_locations SET content_html = '<p class="snippet-bait"><strong>KS Rent Sardinia consegna auto alla Marina di Portisco in 25 minuti da Olbia.</strong> Porto turistico internazionale, centro esatto della Costa Smeralda. Auto premium con consegna in banchina. Senza carta di credito.</p>

<h3>Noleggio Auto alla Marina di Portisco: Tra Barche e Costa Smeralda</h3>
<p>La Marina di Portisco è uno dei porti turistici più importanti della Costa Smeralda, crocevia per charter, barche a vela e catamarani. Con il <strong>noleggio auto a Portisco</strong> di KS Rent Sardinia consegniamo in banchina o alla reception del resort, con puntualità svizzera.</p>

<h4>Raggiungi Tutta la Costa Smeralda</h4>
<ul>
  <li><a href="/noleggio-auto-porto-rotondo">Porto Rotondo</a> — 5 min a sud, piazzetta e marina</li>
  <li><a href="/noleggio-auto-porto-cervo">Porto Cervo</a> — 15 min a nord, Piazzetta e boutique</li>
  <li><a href="/noleggio-auto-baja-sardinia">Baja Sardinia</a> — 20 min, Phi Beach e movida</li>
  <li><a href="/liscia-ruja">Liscia Ruja</a> — 15 min, la Long Beach più grande della costa</li>
</ul>

<h4>Auto e Consegna</h4>
<p>L''<strong>Audi RS3</strong> per lo stile alla marina. La <strong>Mercedes Classe A</strong> per il comfort. Portisco dista <strong>22 km da Olbia</strong>, 25 minuti. Firma digitale, <strong>nessuna carta di credito richiesta</strong>, partenza immediata. Il nostro team consegna direttamente alla tua barca.</p>'
WHERE slug = 'noleggio-auto-portisco';

-- CAPO CODA CAVALLO
UPDATE public.seo_locations SET content_html = '<p class="snippet-bait"><strong>KS Rent Sardinia consegna SUV a Capo Coda Cavallo in 25 minuti da Olbia.</strong> Area Marina Protetta di Tavolara con strade panoramiche e sterrati. Jeep Avenger consigliato. Noleggio senza carta di credito.</p>

<h3>Noleggio Auto a Capo Coda Cavallo: SUV per l''Area Marina Protetta</h3>
<p>Capo Coda Cavallo è un promontorio magico: granito e macchia mediterranea che si tuffa nel mare di fronte a Tavolara. Strade a picco, sentieri panoramici e calette raggiungibili solo in auto rendono il <strong>noleggio auto a Capo Coda Cavallo</strong> di KS Rent Sardinia una necessità logistica. Ti consegniamo il veicolo al villaggio o al resort.</p>

<h4>Spiagge e Panorami</h4>
<ul>
  <li><strong>Cala Girgolu</strong> — spiaggia con la famosa roccia del fungo marino</li>
  <li><a href="/cala-brandinchi">Cala Brandinchi</a> — 10 min, la Piccola Tahiti (ingresso a numero chiuso)</li>
  <li><a href="/lu-impostu">Lu Impostu</a> — 8 min, alternativa tranquilla</li>
  <li><a href="/noleggio-auto-san-teodoro">San Teodoro</a> — 10 min, centro paese e vita serale</li>
  <li><a href="/noleggio-auto-porto-san-paolo">Porto San Paolo</a> — 15 min, barche per Tavolara</li>
</ul>

<h4>Auto Consigliata</h4>
<p>Il <strong>Jeep Avenger</strong> è fondamentale: le strade verso le calette sono sterrate e in salita. La <strong>Fiat Panda</strong> va bene solo per le spiagge principali. Capo Coda Cavallo dista <strong>28 km da Olbia</strong>, 25-30 minuti. Consegniamo al villaggio, resort o apartamento.</p>

<h4>Area Marina Protetta</h4>
<p>Capo Coda Cavallo rientra nell''Area Marina Protetta di Tavolara-Punta Coda Cavallo. Regole da rispettare: non ancorare sulla posidonia, non raccogliere conchiglie, rispettare i sentieri segnati. La bellezza di questo luogo dipende dal rispetto di chi lo visita.</p>'
WHERE slug = 'noleggio-auto-capo-coda-cavallo';

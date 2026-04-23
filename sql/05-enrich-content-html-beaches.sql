-- ============================================================
-- 05 - CONTENT HTML ARRICCHITO per seo_beaches
-- Ogni spiaggia riceve contenuto unico, 300+ parole,
-- con snippet bait, info pratiche, veicolo consigliato,
-- link interni corretti e dati specifici.
-- ESEGUIRE DOPO 01-fix-internal-links.sql
-- ============================================================

-- SPIAGGIA DEL PRINCIPE
UPDATE public.seo_beaches SET content_html = '<p class="snippet-bait"><strong>La Spiaggia del Principe si raggiunge in auto da Porto Cervo in 10 minuti.</strong> Parcheggio a pagamento + sentiero sterrato di 10 minuti a piedi. KS Rent Sardinia consegna SUV e auto a Olbia, Porto Cervo e hotel. Senza carta di credito.</p>

<h3>Spiaggia del Principe: Il Capolavoro dell''Aga Khan</h3>
<p>Conosciuta come la spiaggia preferita dal Principe Karim Aga Khan, questa baia a mezzaluna è un capolavoro naturale. Sabbia finissima come borotalco, rocce granitiche rosate e un mare dal turchese allo smeraldo. È la tappa obbligatoria in Costa Smeralda.</p>

<h4>Come Arrivare in Auto</h4>
<p>Dalla SP59 tra Porto Cervo e Romazzino, segui le indicazioni. Il parcheggio a pagamento (5-8€) è all''ingresso del sentiero. Da lì, <strong>10 minuti di camminata su sterrato</strong> con leggera discesa. Consigliato il <strong>Jeep Avenger</strong> per lo sterrato e il bagagliaio capiente per ombrelloni e attrezzatura snorkeling.</p>

<h4>Cosa Sapere Prima di Andare</h4>
<ul>
  <li>Arriva <strong>entro le 9:00</strong> in luglio-agosto: il parcheggio si riempie presto</li>
  <li>Fondale misto sabbia e rocce — porta maschera e pinne per snorkeling eccezionale</li>
  <li>Nessun servizio in spiaggia (spiaggia libera) — porta acqua e pranzo</li>
  <li>Perfetta con bambini: fondale basso nella parte centrale</li>
</ul>

<h4>Spiagge Vicine</h4>
<p>Con la tua auto KS Rent puoi visitare nella stessa giornata: <a href="/romazzino">Romazzino</a> (5 min), <a href="/capriccioli">Capriccioli</a> (8 min) e <a href="/liscia-ruja">Liscia Ruja</a> (10 min). La sera, <a href="/noleggio-auto-porto-cervo">Porto Cervo</a> è a 10 minuti per aperitivo e cena.</p>'
WHERE slug = 'spiaggia-del-principe';

-- LISCIA RUJA
UPDATE public.seo_beaches SET content_html = '<p class="snippet-bait"><strong>Liscia Ruja è la spiaggia più grande della Costa Smeralda: oltre 500 metri di sabbia dorata.</strong> Parcheggio sterrato ampio dietro la spiaggia. KS Rent Sardinia consegna auto ad Arzachena e Porto Cervo. Senza carta di credito.</p>

<h3>Liscia Ruja: La Long Beach della Sardegna</h3>
<p>Liscia Ruja è la spiaggia più grande e spaziosa dell''intera Costa Smeralda. Immersa nel verde della macchia mediterranea e protetta da un bosco di ginepri, vanta una sabbia dai riflessi dorati e rosati. Il luogo perfetto per lunghe passeggiate sul bagnasciuga e giornate intere tra stabilimenti e tratti di spiaggia libera.</p>

<h4>Come Arrivare</h4>
<p>Da <a href="/noleggio-auto-arzachena">Arzachena</a> segui la SP59 verso Porto Cervo. Lo sterrato di accesso è facile e adatto a tutte le auto. Il <strong>parcheggio sterrato a pagamento</strong> è ampio e proprio dietro la spiaggia — facile accesso anche con auto grandi. Distanza da Olbia: <strong>35 km, 35 minuti</strong>.</p>

<h4>Consigli Pratici</h4>
<ul>
  <li>Stabilimenti esclusivi nella parte sud, spiaggia libera nella parte nord</li>
  <li>Sabbia a grana grossa: non si attacca alla pelle e non scotta</li>
  <li>Fondale basso per i primi 30 metri — ottima per bambini</li>
  <li>Bar e ristorante disponibili nello stabilimento</li>
</ul>

<h4>Spiagge nella Stessa Zona</h4>
<p><a href="/spiaggia-del-principe">Spiaggia del Principe</a> (15 min), <a href="/capriccioli">Capriccioli</a> (10 min) e <a href="/romazzino">Romazzino</a> (8 min). Auto consigliata: <strong>Audi RS3</strong> o <strong>Mercedes Classe A</strong> per la strada asfaltata fino al parcheggio.</p>'
WHERE slug = 'liscia-ruja';

-- CALA BRANDINCHI
UPDATE public.seo_beaches SET content_html = '<p class="snippet-bait"><strong>Cala Brandinchi è a numero chiuso in estate: prenota l''ingresso online.</strong> Parcheggio custodito a pagamento. Sterrato di accesso — Jeep Avenger consigliato. KS Rent Sardinia consegna auto a San Teodoro in 20 min da Olbia.</p>

<h3>Cala Brandinchi: La Piccola Tahiti della Sardegna</h3>
<p>Non è un caso se questa caletta viene chiamata "La Piccola Tahiti". Sabbia bianca come borotalco, fondale basso e trasparente come una piscina naturale. Alle spalle, una fitta pineta offre riparo nelle ore più calde. Paradiso per famiglie con bambini.</p>

<h4>Come Arrivare e Ingresso</h4>
<ul>
  <li>Da <a href="/noleggio-auto-san-teodoro">San Teodoro</a>: 10 minuti di strada, ultimo tratto su sterrato</li>
  <li><strong>Ingresso a numero chiuso</strong> in luglio e agosto — prenota online sul sito del comune</li>
  <li>Parcheggio custodito a pagamento all''ingresso</li>
  <li>Il parcheggio si riempie entro le <strong>9:30 in alta stagione</strong> — parti presto</li>
</ul>

<h4>Auto Consigliata</h4>
<p>Il <strong>Jeep Avenger</strong> è la scelta migliore: sterrato e bagagliaio capiente per attrezzatura da spiaggia. La Fiat Panda arriva ma con più attenzione. Da Olbia a Cala Brandinchi: <strong>30 km, 30 minuti</strong>.</p>

<h4>Spiagge Alternative Vicine</h4>
<p>Se Brandinchi è piena: <a href="/lu-impostu">Lu Impostu</a> (3 min, meno affollata), <a href="/la-cinta">La Cinta</a> (10 min, sempre posto) e <a href="/noleggio-auto-capo-coda-cavallo">Capo Coda Cavallo</a> (8 min, panorami su Tavolara).</p>'
WHERE slug = 'cala-brandinchi';

-- LA CINTA
UPDATE public.seo_beaches SET content_html = '<p class="snippet-bait"><strong>La Cinta è la spiaggia più grande di San Teodoro: 3 km di sabbia bianca con fenicotteri rosa.</strong> Parcheggio a pagamento all''ingresso. A 2 minuti dal centro in auto. KS Rent Sardinia consegna auto a San Teodoro.</p>

<h3>La Cinta: 3 Chilometri di Sabbia e Fenicotteri</h3>
<p>Una distesa di oltre 3 km di sabbia candida che separa il mare turchese dalla laguna con i fenicotteri rosa. Chioschi, scuole di kitesurf, noleggio gommoni e fondale basso: il cuore dell''estate di San Teodoro.</p>

<h4>Come Arrivare</h4>
<p>A <strong>2 minuti dal centro di <a href="/noleggio-auto-san-teodoro">San Teodoro</a></strong> in auto. Parcheggio a pagamento all''ingresso principale (Via La Cinta) — aree dedicate per disabili e moto. Distanza da Olbia: <strong>25 km, 22 minuti</strong>.</p>

<h4>Consigli</h4>
<ul>
  <li>Parte sud: chioschi, lettini, vita sociale — ideale per giovani</li>
  <li>Parte nord: più tranquilla, spiaggia libera, fenicotteri</li>
  <li>Fondale basso per 50+ metri — perfetta con bambini piccoli</li>
  <li>Kitesurf nella zona nord quando c''è vento</li>
</ul>

<h4>Altre Spiagge di San Teodoro</h4>
<p><a href="/cala-brandinchi">Cala Brandinchi</a> (10 min), <a href="/lu-impostu">Lu Impostu</a> (8 min) e <a href="/noleggio-auto-capo-coda-cavallo">Capo Coda Cavallo</a> (15 min). Auto consigliata: <strong>Fiat Panda</strong> per La Cinta (strada asfaltata), <strong>Jeep Avenger</strong> per le spiagge su sterrato.</p>'
WHERE slug = 'la-cinta';

-- LU IMPOSTU
UPDATE public.seo_beaches SET content_html = '<p class="snippet-bait"><strong>Lu Impostu è l''alternativa meno affollata a Cala Brandinchi: 1 km di sabbia fine tra gigli selvatici e oleandri.</strong> Parcheggio custodito a pagamento. KS Rent Sardinia consegna auto da Olbia e Puntaldia.</p>

<h3>Lu Impostu: Eleganza Naturale accanto a Brandinchi</h3>
<p>Sorella gemella della vicina Cala Brandinchi, Lu Impostu è un chilometro di sabbia fine incorniciata da gigli selvatici, mimose e oleandri. Spesso meno affollata, offre un''atmosfera rilassata e colori caraibici.</p>

<h4>Come Arrivare</h4>
<p>Da <a href="/noleggio-auto-puntaldia">Puntaldia</a>: 5 minuti. Da <a href="/noleggio-auto-san-teodoro">San Teodoro</a>: 8 minuti. Parcheggio custodito a pagamento lato nord e lato sud. Accesso tramite passerelle in legno. Distanza da Olbia: <strong>28 km, 25 minuti</strong>.</p>

<h4>Consigli Pratici</h4>
<ul>
  <li>Meno nota di Brandinchi = più spazio anche in alta stagione</li>
  <li>Fondale basso e sabbioso, ideale per bambini</li>
  <li>Bar e servizi al parcheggio</li>
  <li>Se chiusa per vento (Maestrale), prova <a href="/la-cinta">La Cinta</a> (riparata)</li>
</ul>

<h4>Auto Consigliata</h4>
<p>La <strong>Fiat Panda</strong> è sufficiente (strada asfaltata fino al parcheggio). Il <strong>Jeep Avenger</strong> se vuoi esplorare anche <a href="/cala-brandinchi">Brandinchi</a> e <a href="/noleggio-auto-capo-coda-cavallo">Capo Coda Cavallo</a> su sterrato nella stessa giornata.</p>'
WHERE slug = 'lu-impostu';

-- CAPRICCIOLI
UPDATE public.seo_beaches SET content_html = '<p class="snippet-bait"><strong>Capriccioli ha il miglior snorkeling della Costa Smeralda: due calette tra graniti rosa e posidonia.</strong> Parcheggio a pagamento molto limitato — arriva entro le 9:00 in estate. KS Rent Sardinia consegna auto a Porto Cervo.</p>

<h3>Capriccioli: La Perla Granitica con Due Calette</h3>
<p>Il nome in gallurese significa "caprette", per via delle rocce tondeggianti che dividono la baia in due spiaggette. Macchia mediterranea fino all''acqua e fondali ricchissimi di pesci — un acquario naturale per lo snorkeling.</p>

<h4>Come Arrivare</h4>
<p>Dalla SP59 tra <a href="/noleggio-auto-porto-cervo">Porto Cervo</a> e Romazzino: 8 minuti. Parcheggio a pagamento <strong>molto limitato</strong>. In luglio-agosto arriva entro le <strong>9:00</strong> o non troverai posto. Distanza da Olbia: <strong>32 km, 35 minuti</strong>.</p>

<h4>Due Calette</h4>
<ul>
  <li><strong>Capriccioli Est:</strong> più grande, fondale sabbioso con posidonia, snorkeling eccezionale</li>
  <li><strong>Capriccioli Ovest:</strong> più intima, rocce di granito rosa, acqua cristallina</li>
  <li>Porta maschera e pinne: cernie, saraghi e polpi tra le rocce</li>
  <li>Spiaggia libera, nessun servizio — porta acqua e pranzo al sacco</li>
</ul>

<h4>Spiagge Vicine</h4>
<p><a href="/romazzino">Romazzino</a> (3 min), <a href="/spiaggia-del-principe">Spiaggia del Principe</a> (10 min), <a href="/liscia-ruja">Liscia Ruja</a> (8 min). Auto consigliata: <strong>BMW M2</strong> o <strong>Audi RS3</strong> per la strada panoramica asfaltata.</p>'
WHERE slug = 'capriccioli';

-- ROMAZZINO
UPDATE public.seo_beaches SET content_html = '<p class="snippet-bait"><strong>Romazzino è la spiaggia più esclusiva della Costa Smeralda, accanto all''hotel 5 stelle Romazzino.</strong> Acqua smeraldo e profumo di rosmarino selvatico. Parcheggi limitati. KS Rent Sardinia consegna auto premium.</p>

<h3>Romazzino: Acque Smeraldo e Profumo di Rosmarino</h3>
<p>Il nome deriva dal rosmarino selvatico che cresce lungo i sentieri. La sabbia è leggermente più spessa delle spiagge vicine, rendendo l''acqua di una trasparenza assoluta anche nei giorni più affollati. Un gioiello esclusivo nel cuore della Costa Smeralda.</p>

<h4>Come Arrivare</h4>
<p>Dalla SP59 tra Porto Cervo e Capriccioli: 3 minuti. Parcheggi limitati alle aree degli hotel di lusso. In alta stagione, arriva presto o parcheggia a <a href="/capriccioli">Capriccioli</a> e cammina 15 minuti. Distanza da Olbia: <strong>30 km, 35 minuti</strong>.</p>

<h4>Consigli</h4>
<ul>
  <li>Contesto di lusso: l''Hotel Romazzino (Belmond) è a 100 metri</li>
  <li>Fondale sabbioso e acque calme — ideale per nuoto</li>
  <li>Meno affollata delle spiagge con parcheggio ampio</li>
  <li>Perfetta al pomeriggio quando le spiagge più piccole sono piene</li>
</ul>

<h4>Spiagge nella Stessa Zona</h4>
<p><a href="/capriccioli">Capriccioli</a> (3 min), <a href="/spiaggia-del-principe">Spiaggia del Principe</a> (5 min), <a href="/grande-pevero">Grande Pevero</a> (8 min). Visitale tutte in una giornata con la tua auto KS Rent partendo da <a href="/noleggio-auto-poltu-quatu">Poltu Quatu</a> o <a href="/noleggio-auto-porto-cervo">Porto Cervo</a>.</p>'
WHERE slug = 'romazzino';

-- GRANDE PEVERO
UPDATE public.seo_beaches SET content_html = '<p class="snippet-bait"><strong>Il Grande Pevero è la spiaggia VIP della Costa Smeralda, accanto al Pevero Golf Club.</strong> Parcheggio a pagamento a 500 metri dalla riva. Acque caraibiche e mega-yacht al largo. KS Rent Sardinia consegna auto premium.</p>

<h3>Grande Pevero: Tra il Golf Club e il Mare Cristallino</h3>
<p>Una mezzaluna di sabbia candida in un golfo paradisiaco, a ridosso del Pevero Golf Club. Acque caraibiche e mega-yacht al largo. Destinazione VIP amata da personaggi dello spettacolo e dello sport internazionale.</p>

<h4>Come Arrivare</h4>
<p>Da <a href="/noleggio-auto-baja-sardinia">Baja Sardinia</a>: 5 minuti. Da <a href="/noleggio-auto-poltu-quatu">Poltu Quatu</a>: 3 minuti. Parcheggio a pagamento obbligatorio a circa <strong>500 metri dalla riva</strong>. Distanza da Olbia: <strong>30 km, 30 minuti</strong>.</p>

<h4>Consigli Pratici</h4>
<ul>
  <li>Stabilimenti attrezzati e zona di spiaggia libera</li>
  <li>Fondale sabbioso, acque calme e poco profonde</li>
  <li>Vista panoramica sulla costa — al tramonto è spettacolare</li>
  <li>Ultimo tratto sterrato: <strong>Jeep Avenger consigliato</strong></li>
</ul>

<h4>Spiagge nella Zona</h4>
<p><a href="/cala-del-faro">Cala del Faro</a> (5 min), <a href="/capriccioli">Capriccioli</a> (10 min), <a href="/romazzino">Romazzino</a> (8 min). Per chi cerca il golf: il Pevero Golf Club ha 18 buche panoramiche (prenotazione consigliata).</p>'
WHERE slug = 'grande-pevero';

-- CALA MORESCA
UPDATE public.seo_beaches SET content_html = '<p class="snippet-bait"><strong>Cala Moresca a Golfo Aranci è il miglior spot di snorkeling a 15 minuti da Olbia.</strong> Baia selvaggia e protetta, nessun servizio — porta tutto il necessario. Parcheggio gratuito limitato. KS Rent Sardinia consegna Jeep e auto.</p>

<h3>Cala Moresca: Il Tesoro Naturale di Golfo Aranci</h3>
<p>Incastonata in un''area naturalistica protetta, Cala Moresca è dominata dall''Isolotto di Figarolo. Le rovine di un''antica fornace e una pineta profumata le donano un fascino selvaggio, rendendola ideale per chi ama natura e silenzio.</p>

<h4>Come Arrivare</h4>
<p>Da <a href="/noleggio-auto-golfo-aranci">Golfo Aranci</a>: 5 minuti verso nord. Parcheggio gratuito e a pagamento all''ingresso dell''area protetta. Ultimo tratto a piedi (5 minuti). Distanza da Olbia: <strong>18 km, 20 minuti</strong>.</p>

<h4>Cosa Portare</h4>
<ul>
  <li><strong>Maschera e pinne</strong> — fondali ricchissimi con posidonia, cernie e polpi</li>
  <li>Acqua e pranzo al sacco — baia completamente selvaggia, zero servizi</li>
  <li>Scarpe da scoglio per l''accesso alle rocce laterali</li>
  <li>Il <strong>Jeep Avenger</strong> è consigliato per lo sterrato di accesso</li>
</ul>

<h4>Spiagge Vicine</h4>
<p><a href="/cala-sabina">Cala Sabina</a> (3 min), <a href="/spiaggia-bianca">Spiaggia Bianca</a> (8 min). Per pesce fresco, i ristoranti del porto di <a href="/noleggio-auto-golfo-aranci">Golfo Aranci</a> servono tonno alla griglia e bottarga.</p>'
WHERE slug = 'cala-moresca';

-- CALA SABINA
UPDATE public.seo_beaches SET content_html = '<p class="snippet-bait"><strong>Cala Sabina è una delle poche spiagge raggiungibili anche in treno, ma in auto è un''altra esperienza.</strong> Ginepri secolari sulla sabbia, sapore tropicale. Parcheggio sterrato. KS Rent consegna auto a Golfo Aranci in 15 min.</p>

<h3>Cala Sabina: Ginepri Secolari e Sabbia Caraibica</h3>
<p>Celebre per i ginepri che spingono le radici fin quasi sulla sabbia finissima. Una delle poche spiagge raggiungibili anche in treno, ma via terra offre il percorso panoramico più bello. Atmosfera tropicale a pochi km da Olbia.</p>

<h4>Come Arrivare</h4>
<p>Da <a href="/noleggio-auto-golfo-aranci">Golfo Aranci</a>: 3 minuti verso sud. Parcheggio nei pressi della stazione ferroviaria, poi sentiero sterrato a piedi (5 min). Distanza da Olbia: <strong>16 km, 18 minuti</strong>.</p>

<h4>Consigli</h4>
<ul>
  <li>Spiaggia libera con pochissimi servizi — porta il necessario</li>
  <li>I ginepri offrono ombra naturale — perfetti con bambini</li>
  <li>Fondale sabbioso e basso, acque limpide</li>
  <li>Meno affollata delle spiagge principali di Golfo Aranci</li>
</ul>

<h4>Spiagge nella Zona</h4>
<p><a href="/cala-moresca">Cala Moresca</a> (5 min, snorkeling), <a href="/spiaggia-bianca">Spiaggia Bianca</a> (10 min, dune). Auto consigliata: <strong>Fiat Panda</strong> o <strong>Jeep Avenger</strong> per esplorare tutte le calette di Golfo Aranci.</p>'
WHERE slug = 'cala-sabina';

-- SPIAGGIA BIANCA
UPDATE public.seo_beaches SET content_html = '<p class="snippet-bait"><strong>Spiaggia Bianca si raggiunge in 5 minuti da Pittulongu: sabbia accecante, dune con gigli di mare e fondale bassissimo.</strong> Parcheggio ampio dietro le dune. KS Rent Sardinia consegna auto da Olbia in pochi minuti.</p>

<h3>Spiaggia Bianca: Dune, Gigli di Mare e Turchese</h3>
<p>Il nome non mente: sabbia bianca accecante lambita da mare cristallino. Tra Olbia e Golfo Aranci, piccole dune puntellate dai rarissimi gigli di mare. Tramonti spettacolari e panorama sulle isole dell''arcipelago.</p>

<h4>Come Arrivare</h4>
<p>Da <a href="/noleggio-auto-pittulongu">Pittulongu</a>: 5 minuti. Da Olbia centro: 10 minuti. Parcheggio a pagamento ampio <strong>proprio dietro la duna principale</strong>. Distanza dalla sede KS Rent: <strong>8 km, 10 minuti</strong>.</p>

<h4>Consigli</h4>
<ul>
  <li>Fondale basso e sabbioso per 40+ metri — <strong>ideale per bambini</strong></li>
  <li>Non calpestare i gigli di mare sulle dune — specie protetta</li>
  <li>Chiosco bar disponibile in alta stagione</li>
  <li>Al tramonto la vista sulle isole è spettacolare</li>
</ul>

<h4>Spiagge Vicine</h4>
<p><a href="/spiaggia-pittulongu">Pittulongu</a> (5 min, ristoranti di pesce), <a href="/spiaggia-bados">Bados</a> (3 min, acque calme). Auto consigliata: <strong>Fiat Panda</strong> — strada asfaltata e parcheggio facile.</p>'
WHERE slug = 'spiaggia-bianca';

-- PORTO ISTANA
UPDATE public.seo_beaches SET content_html = '<p class="snippet-bait"><strong>Porto Istana ha 4 calette di granito rosa con la vista più ravvicinata sull''Isola di Tavolara.</strong> Parcheggio a pagamento. A 2 minuti da Murta Maria. KS Rent Sardinia consegna auto da Olbia in 10 minuti.</p>

<h3>Porto Istana: Quattro Calette di Fronte a Tavolara</h3>
<p>Porto Istana non è una singola spiaggia ma un insieme di quattro calette separate da formazioni di granito rosa. L''acqua è un mix di azzurro e verde smeraldo, con Tavolara che si erge maestosa proprio di fronte.</p>

<h4>Come Arrivare</h4>
<p>Da <a href="/noleggio-auto-murta-maria">Murta Maria</a>: 2 minuti. Da Olbia: 12 minuti. Parcheggio a pagamento con facile accesso alle diverse calette. Distanza dalla sede KS Rent: <strong>10 km, 12 minuti</strong>.</p>

<h4>Le 4 Calette</h4>
<ul>
  <li><strong>Prima caletta:</strong> la più attrezzata, con chiosco e lettini</li>
  <li><strong>Seconda e terza:</strong> spiaggia libera, più tranquille</li>
  <li><strong>Quarta caletta:</strong> la più intima, rocce e privacy</li>
  <li>Fondale basso e sabbioso in tutte e quattro</li>
</ul>

<h4>Escursioni</h4>
<p>Da <a href="/noleggio-auto-porto-san-paolo">Porto San Paolo</a> (10 min d''auto) partono barche per l''Isola di Tavolara: spiaggia di Spalmatore e il "regno più piccolo del mondo". Auto consigliata: <strong>Fiat Panda</strong> (strada asfaltata) o <strong>Jeep Avenger</strong> per esplorare anche <a href="/noleggio-auto-capo-coda-cavallo">Capo Coda Cavallo</a>.</p>'
WHERE slug = 'porto-istana';

-- PORTO TAVERNA
UPDATE public.seo_beaches SET content_html = '<p class="snippet-bait"><strong>Porto Taverna offre la vista più spettacolare e frontale sull''Isola di Tavolara di tutta la Sardegna.</strong> Ristoranti di pesce sulla spiaggia. Parcheggio a pagamento. KS Rent consegna auto da Olbia in 15 min.</p>

<h3>Porto Taverna: Il Panorama Più Bello su Tavolara</h3>
<p>Se cerchi la foto perfetta, Porto Taverna è il posto giusto. Nessun''altra spiaggia offre una vista così vicina e frontale su Tavolara. L''ampio arenile è attraversato da una passerella in legno scenografica che supera lo stagno ricco di avifauna.</p>

<h4>Come Arrivare</h4>
<p>Da <a href="/noleggio-auto-porto-san-paolo">Porto San Paolo</a>: 5 minuti verso sud. Da Olbia: 18 minuti. Parcheggio a pagamento vicino ai ristoranti sul mare. Distanza: <strong>18 km da Olbia</strong>.</p>

<h4>Consigli</h4>
<ul>
  <li>Ristoranti storici direttamente sulla spiaggia con pesce fresco</li>
  <li>Sabbia dorata fine, fondale basso e regolare</li>
  <li>Passerella in legno per foto panoramiche mozzafiato</li>
  <li>Zona libera e zona attrezzata disponibili</li>
</ul>

<h4>Spiagge Vicine</h4>
<p><a href="/porto-istana">Porto Istana</a> (8 min), <a href="/noleggio-auto-capo-coda-cavallo">Capo Coda Cavallo</a> (10 min). Auto consigliata: <strong>Fiat Panda</strong> per Porto Taverna (strada asfaltata), <strong>Jeep Avenger</strong> se esplori anche Capo Coda Cavallo.</p>'
WHERE slug = 'porto-taverna';

-- RENA BIANCA
UPDATE public.seo_beaches SET content_html = '<p class="snippet-bait"><strong>Rena Bianca è Bandiera Blu nel centro di Santa Teresa Gallura, con vista sulle falesie di Bonifacio in Corsica.</strong> Parcheggio limitato — arriva presto. KS Rent consegna Mercedes e Jeep da Olbia in 55 min.</p>

<h3>Rena Bianca: Bandiera Blu con Vista sulla Corsica</h3>
<p>Nel cuore di Santa Teresa Gallura, Rena Bianca vanta ripetutamente la Bandiera Blu. Dalla sabbia impalpabile e bianchissima si ammirano le falesie di Bonifacio in Corsica, a soli 12 km. L''acqua è limpida, fresca e con colori incredibili.</p>

<h4>Come Arrivare</h4>
<p>Nel centro di <a href="/noleggio-auto-santa-teresa-gallura">Santa Teresa Gallura</a>. Parcheggi cittadini nelle vie limitrofe o piazzale sopra la spiaggia (<strong>molto affollato</strong> in estate). Consiglio: parcheggia in periferia e cammina 5 minuti. Distanza da Olbia: <strong>60 km, 55 minuti</strong>.</p>

<h4>Consigli</h4>
<ul>
  <li>In giornate limpide vedi le case di Bonifacio in Corsica</li>
  <li>Acqua fresca — le correnti delle Bocche tengono la temperatura bassa</li>
  <li>Bar e servizi disponibili, docce pubbliche</li>
  <li>Il traghetto per la Corsica parte dal porto (50 min di traversata)</li>
</ul>

<h4>Spiagge Vicine</h4>
<p><a href="/capo-testa">Capo Testa</a> (5 min, graniti millenari e Valle della Luna). Se il Maestrale soffia forte su Rena Bianca, la Rena di Levante a Capo Testa (lato est) è riparata. Auto consigliata: <strong>Mercedes Classe A</strong> per il lungo tragitto da Olbia.</p>'
WHERE slug = 'rena-bianca';

-- CALA DEL FARO
UPDATE public.seo_beaches SET content_html = '<p class="snippet-bait"><strong>Cala del Faro è la spiaggia dei tramonti più belli della Costa Smeralda, a pochi minuti da Baja Sardinia.</strong> Fondale basso e sabbioso. Parcheggio limitato. KS Rent consegna auto con servizio premium in hotel.</p>

<h3>Cala del Faro: Tramonti da Sogno sull''Arcipelago</h3>
<p>Incastonata in un contesto residenziale elegante, Cala del Faro unisce natura selvaggia e servizi curati. La vista spazia fino all''Arcipelago della Maddalena e al tramonto offre uno degli spettacoli di luce più belli del nord-est Sardegna.</p>

<h4>Come Arrivare</h4>
<p>Da <a href="/noleggio-auto-baja-sardinia">Baja Sardinia</a>: 3 minuti. Da <a href="/noleggio-auto-porto-cervo">Porto Cervo</a>: 10 minuti. Parcheggio limitato lungo la strada di accesso. Distanza da Olbia: <strong>30 km, 30 minuti</strong>.</p>

<h4>Consigli</h4>
<ul>
  <li>Fondale basso e molto sabbioso — sicura per bambini</li>
  <li>Meno affollata delle spiagge principali — ideale per relax</li>
  <li>Il tramonto qui è tra i più belli della Sardegna</li>
  <li>Residence privato nelle vicinanze — rispetta la segnaletica</li>
</ul>

<h4>Spiagge nella Zona</h4>
<p><a href="/grande-pevero">Grande Pevero</a> (5 min), <a href="/la-celvia">La Celvia</a> (8 min), <a href="/capriccioli">Capriccioli</a> (12 min). Auto consigliata: <strong>Mercedes Classe A</strong> o <strong>Audi RS3</strong> per le strade asfaltate della Costa Smeralda.</p>'
WHERE slug = 'cala-del-faro';

-- LA CELVIA
UPDATE public.seo_beaches SET content_html = '<p class="snippet-bait"><strong>La Celvia è la spiaggia preferita dai VIP della Costa Smeralda: sabbia ambrata a grana grossa che non si attacca alla pelle.</strong> Ville di lusso nella macchia mediterranea. KS Rent consegna auto premium senza carta di credito.</p>

<h3>La Celvia: Sabbia Ambrata e Ville di Lusso</h3>
<p>La Celvia si distingue per la sabbia a grana grossa, formata da frammenti di conchiglie dai riflessi rosati e ambrati. Non si attacca alla pelle — un lusso naturale. Ville lussuose nella macchia mediterranea e un''atmosfera esclusiva e discreta.</p>

<h4>Come Arrivare</h4>
<p>Tra <a href="/noleggio-auto-arzachena">Arzachena</a> e <a href="/romazzino">Romazzino</a>: seguire le indicazioni dalla SP59. Parcheggio a pagamento lungo la strada di accesso — <strong>posti limitati nei weekend</strong>. Distanza da Olbia: <strong>32 km, 35 minuti</strong>.</p>

<h4>Consigli</h4>
<ul>
  <li>La sabbia non scotta e non si attacca — perfetta anche senza telo</li>
  <li>Acqua cristallina con riflessi turchesi</li>
  <li>Zona tranquilla e poco battuta rispetto a Capriccioli</li>
  <li>Nessun servizio sulla spiaggia — porta il necessario</li>
</ul>

<h4>Spiagge Vicine</h4>
<p><a href="/romazzino">Romazzino</a> (5 min), <a href="/capriccioli">Capriccioli</a> (5 min), <a href="/grande-pevero">Grande Pevero</a> (8 min). Auto consigliata: <strong>Audi RS3</strong> o <strong>BMW M2</strong> per le strade panoramiche della Costa Smeralda.</p>'
WHERE slug = 'la-celvia';

-- SPIAGGIA MARINELLA
UPDATE public.seo_beaches SET content_html = '<p class="snippet-bait"><strong>Spiaggia di Marinella: chilometri di sabbia tra Porto Rotondo e Golfo Aranci, con stabilimenti che diventano lounge bar al tramonto.</strong> Parcheggio ampio a pagamento. KS Rent consegna auto da Olbia in 20 min.</p>

<h3>Spiaggia di Marinella: Spazio, Sport e Aperitivi al Tramonto</h3>
<p>Una baia enorme perfetta per giovani, famiglie e sportivi. Chilometri di sabbia morbida, fondali bassi e stabilimenti alla moda che al tramonto si trasformano in lounge bar con musica dal vivo.</p>

<h4>Come Arrivare</h4>
<p>Da <a href="/noleggio-auto-porto-rotondo">Porto Rotondo</a>: 3 minuti. Da Olbia: 15 minuti. Vastissima area parcheggio a pagamento gestita dal comune proprio davanti agli stabilimenti. Distanza: <strong>18 km da Olbia</strong>.</p>

<h4>Attività</h4>
<ul>
  <li>Windsurf, sup, kayak — noleggio attrezzatura in spiaggia</li>
  <li>Stabilimenti con lettini e servizio bar/ristorante</li>
  <li>Al tramonto: aperitivo con DJ set nei beach bar</li>
  <li>Fondale basso: ideale per bambini e nuoto</li>
</ul>

<h4>Spiagge Vicine</h4>
<p>Ira Beach (5 min, più intima), <a href="/noleggio-auto-golfo-aranci">Golfo Aranci</a> (10 min, borgo e delfini). Auto consigliata: <strong>Mercedes Classe A</strong> per il comfort o <strong>Fiat Panda</strong> per la praticità.</p>'
WHERE slug = 'spiaggia-marinella';

-- SPIAGGIA BADOS
UPDATE public.seo_beaches SET content_html = '<p class="snippet-bait"><strong>Spiaggia Bados: la spiaggia più tranquilla di Olbia con fondale dolcissimo, ideale per famiglie con bambini.</strong> Parcheggio davanti alla spiaggia. KS Rent consegna auto in pochi minuti dalla sede.</p>

<h3>Spiaggia Bados: Relax e Acque Calme a Due Passi da Olbia</h3>
<p>Sabbia grigio-chiara finissima e fondale regolare e dolcissimo. Protetta dai venti, offre acque quasi sempre calme. Ristoranti, pizzerie e noleggio attrezzatura a portata di mano. La spiaggia più rilassante del litorale nord di Olbia.</p>

<h4>Come Arrivare</h4>
<p>Da Olbia centro: 10 minuti. Da <a href="/noleggio-auto-pittulongu">Pittulongu</a>: 2 minuti. Parcheggio sterrato gratuito e a pagamento <strong>proprio davanti alla spiaggia</strong>. Distanza dalla sede KS Rent: <strong>7 km</strong>.</p>

<h4>Consigli</h4>
<ul>
  <li>Fondale bassissimo per 30+ metri — la più sicura per bambini piccoli</li>
  <li>Acqua calma anche con vento — la baia è riparata</li>
  <li>Ristoranti e pizzerie raggiungibili a piedi dalla spiaggia</li>
  <li>Meno affollata di Pittulongu — ideale per chi cerca tranquillità</li>
</ul>

<h4>Spiagge Vicine</h4>
<p><a href="/spiaggia-pittulongu">Pittulongu</a> (2 min), <a href="/spiaggia-bianca">Spiaggia Bianca</a> (5 min), <a href="/noleggio-auto-golfo-aranci">Golfo Aranci</a> (8 min). Auto consigliata: <strong>Fiat Panda</strong> — distanze brevi e parcheggi facili.</p>'
WHERE slug = 'spiaggia-bados';

-- SPIAGGIA PITTULONGU
UPDATE public.seo_beaches SET content_html = '<p class="snippet-bait"><strong>Pittulongu "La Playa": la spiaggia storica degli olbiesi, a pochi minuti dall''aeroporto.</strong> Ristoranti di pesce con i piedi sulla sabbia. Parcheggio lungo la via principale. KS Rent consegna auto express.</p>

<h3>Pittulongu La Playa: La Spiaggia Storica degli Olbiesi</h3>
<p>"La Playa" è la spiaggia prediletta dai locali. Un lungo litorale a mezzaluna di sabbia bianca finissima e compatta, affacciato sul golfo. Ristoranti iconici dove mangiare pesce fresco letteralmente con i piedi sulla sabbia.</p>

<h4>Come Arrivare</h4>
<p>Da Olbia centro: 8 minuti. Dall''aeroporto Costa Smeralda: 12 minuti. Parcheggio lungo la via principale e aree sterrate. Distanza dalla sede KS Rent: <strong>5 km</strong> — la consegna più rapida.</p>

<h4>Consigli</h4>
<ul>
  <li>I ristoranti sulla spiaggia servono pesce freschissimo — prenota per il tramonto</li>
  <li>Sabbia compatta: buona anche per passeggiate e jogging</li>
  <li>Vista su Tavolara dalla parte sud del litorale</li>
  <li>In alta stagione la sera il lungomare si anima</li>
</ul>

<h4>Spiagge Vicine</h4>
<p><a href="/spiaggia-bados">Bados</a> (2 min, acque calme per bambini), <a href="/spiaggia-bianca">Spiaggia Bianca</a> (5 min, dune con gigli). Auto consigliata: <strong>Fiat Panda</strong> per le distanze brevi. Noleggio KS Rent dall''<a href="/noleggio-auto-aeroporto-olbia">aeroporto</a> con consegna immediata.</p>'
WHERE slug = 'spiaggia-pittulongu';

-- CAPO TESTA
UPDATE public.seo_beaches SET content_html = '<p class="snippet-bait"><strong>Capo Testa è una penisola di granito millenario con la Valle della Luna e due spiagge: scegli in base al vento.</strong> Rena di Ponente con Maestrale, Rena di Levante con Scirocco. KS Rent consegna auto da Olbia in 55 min.</p>

<h3>Capo Testa: Valle della Luna e Graniti Millenari</h3>
<p>Più che una spiaggia, Capo Testa è una penisola magica. Enormi massi di granito modellati per millenni dal vento, il vecchio faro, la Valle della Luna e due spiagge ai lati dell''istmo. L''estremo nord della Sardegna al suo meglio.</p>

<h4>Come Arrivare</h4>
<p>Da <a href="/noleggio-auto-santa-teresa-gallura">Santa Teresa Gallura</a>: 5 minuti. Parcheggio lungo la strada panoramica dell''istmo — attenzione ai divieti di sosta sulla carreggiata. Distanza da Olbia: <strong>62 km, 58 minuti</strong>.</p>

<h4>Le Due Spiagge</h4>
<ul>
  <li><strong>Rena di Ponente</strong> (ovest) — perfetta con vento da est (Levante/Scirocco). Sabbia bianca e fondale basso.</li>
  <li><strong>Rena di Levante</strong> (est) — perfetta con Maestrale. Più riparata e intima.</li>
  <li><strong>Regola d''oro:</strong> controlla il vento prima di uscire e scegli il lato giusto</li>
</ul>

<h4>Valle della Luna</h4>
<p>Anfiteatro naturale di rocce granitiche scolpite dal vento. Meta hippie dagli anni ''60, oggi è un luogo magico per camminare al tramonto. Raggiungibile a piedi dal parcheggio in 20 minuti di sentiero.</p>

<h4>Auto Consigliata</h4>
<p>Il <strong>Jeep Avenger</strong> per esplorare le calette su sterrato. La <strong>Mercedes Classe A</strong> per il lungo tragitto da Olbia (60 km). Noleggia con KS Rent Sardinia senza carta di credito e parti alla scoperta dell''estremo nord.</p>'
WHERE slug = 'capo-testa';

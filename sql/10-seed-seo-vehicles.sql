-- ============================================================
-- 10 - SEED seo_vehicles (7 group_slug della flotta KS Rent)
-- ============================================================
-- Popola la tabella seo_vehicles con i 7 veicoli/gruppi previsti dal
-- piano (audi-rs3, bmw-m2, mercedes-classe-a, jeep-avenger, fiat-panda,
-- honda-sh, yamaha-quad-raptor).
--
-- Contiene: title, h1, meta_description, content_html, faqs (jsonb),
-- recommended_locations (text[]) per la versione IT. Le colonne
-- _en/_de/_fr sono lasciate NULL: vengono popolate via admin SEO Editor.
--
-- Idempotente: ON CONFLICT (group_slug) DO UPDATE -> rigenera il
-- record. Eseguire DOPO sql/08 (che crea la tabella).
--
-- NOTA: dopo questo seed, devi anche settare `vehicles.group_slug`
-- sui veicoli esistenti perche' la pagina /flotta/[slug] mostri
-- le varianti. Vedi blocco UPDATE commentato in fondo allo script.
-- ============================================================

INSERT INTO public.seo_vehicles (
  group_slug, title, h1, meta_description, content_html, faqs,
  recommended_locations, canonical_url, og_image_url
) VALUES

-- ──────────────────────────────────────────────────────────────
-- 1) AUDI RS3 (Sportback - varianti grigia + verde)
-- ──────────────────────────────────────────────────────────────
(
  'audi-rs3',
  'Noleggio Audi RS3 Olbia Costa Smeralda | KS Rent Sardinia',
  'Noleggia Audi RS3 Sportback a Olbia e Costa Smeralda',
  'Audi RS3 Sportback a noleggio a Olbia: 400 CV, automatica S-Tronic. Consegna a Porto Cervo, Baja Sardinia, hotel e ville. Senza carta di credito.',
  '<p><strong>Audi RS3 Sportback</strong> e'' la supercar perfetta per chi vuole vivere la Costa Smeralda con presenza scenica e prestazioni vere. Motore <strong>2.5 TFSI a 5 cilindri da 400 CV</strong>, trazione integrale quattro, cambio automatico S-Tronic a 7 rapporti: 0-100 km/h in 3,8 secondi. KS Rent Sardinia la consegna direttamente al porto di Olbia, all''aeroporto, in hotel o in villa, in tutta la Gallura.</p>
<h2>Perche'' scegliere l''Audi RS3 in Sardegna</h2>
<p>Le strade panoramiche della Costa Smeralda - SP59 da Porto Cervo a Baja Sardinia, salita verso Capriccioli, le curve verso Cala di Volpe - sono fatte per una sportiva ben bilanciata. La RS3 unisce coppia esplosiva (500 Nm), differenziale torque vectoring sull''asse posteriore e abitacolo da 5 posti pienamente utilizzabili. Disponibile in <strong>due varianti: grigia Daytona e verde Kyalami</strong>, entrambe con interni sportivi e sedili a guscio.</p>
<h2>Consegna e ritiro</h2>
<p>Consegniamo l''Audi RS3 in tutta la Gallura, dalle 10:00 alle 22:30, 7 giorni su 7. Punti di consegna piu'' richiesti: <strong>Porto Cervo Marina, Baja Sardinia, Poltu Quatu, hotel di Cala di Volpe, ville private</strong>. Il servizio e'' gratuito entro 60 km da Olbia. Nessuna fila al desk, nessuna pre-autorizzazione sulla carta: accettiamo bancomat, prepagate (PostePay, Revolut, N26) e contanti per il deposito cauzionale.</p>
<h2>Stagione consigliata</h2>
<p>L''Audi RS3 e'' disponibile da <strong>aprile a ottobre</strong>. Tariffe piu'' competitive in aprile, maggio e ottobre; alta stagione luglio-agosto. Prenotiamo con almeno 72 ore di anticipo in alta stagione per garantire la variante colore richiesta.</p>',
  '[
    {"q":"Quanto costa noleggiare l''Audi RS3 in Costa Smeralda?","a":"Il prezzo varia in base alla stagione: aprile e ottobre sono i mesi piu'' convenienti, luglio e agosto sono alta stagione. Le tariffe esatte sono visibili nella tabella prezzi mensili in questa pagina e confermate in fase di prenotazione. Nessuna commissione nascosta, deposito cauzionale separato."},
    {"q":"L''Audi RS3 ha la trazione integrale?","a":"Si. Tutte le RS3 della nostra flotta sono dotate di trazione integrale Audi quattro permanente, che garantisce stabilita'' superiore sulle strade panoramiche bagnate o ventose della Costa Smeralda."},
    {"q":"Posso noleggiare la RS3 senza carta di credito?","a":"Si. Accettiamo bancomat, carte prepagate (PostePay, Revolut, N26) e contanti per il deposito cauzionale. Nessun blocco sulla carta, nessuna pre-autorizzazione."},
    {"q":"Quanti posti ha l''Audi RS3 Sportback?","a":"5 posti omologati, ma comodi 4 adulti per viaggi lunghi. Bagagliaio da 282 litri, sufficiente per 2-3 trolley medi."},
    {"q":"Consegnate la RS3 a Porto Cervo?","a":"Si, consegniamo direttamente al porto di Porto Cervo, agli hotel di Cala di Volpe, alla marina di Poltu Quatu e a Baja Sardinia. Consegna gratuita entro 60 km dalla nostra sede di Olbia."}
  ]'::jsonb,
  ARRAY['noleggio-auto-porto-cervo','noleggio-auto-baja-sardinia','noleggio-auto-poltu-quatu','noleggio-auto-porto-rotondo','noleggio-auto-costa-smeralda'],
  'https://www.ksrentsardinia.com/flotta/audi-rs3',
  'https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/asset/og-image.jpg'
),

-- ──────────────────────────────────────────────────────────────
-- 2) BMW M2 Coupe
-- ──────────────────────────────────────────────────────────────
(
  'bmw-m2',
  'Noleggio BMW M2 Coupe Olbia Sardegna | KS Rent',
  'Noleggia BMW M2 Coupe a Olbia e Costa Smeralda',
  'BMW M2 Coupe a noleggio a Olbia: 460 CV, trazione posteriore, cambio automatico Steptronic. Consegna in Costa Smeralda e Gallura. Senza carta.',
  '<p>La <strong>BMW M2 Coupe</strong> e'' la sportiva pura per chi cerca adrenalina senza compromessi sulla qualita'' costruttiva. Motore <strong>biturbo 3.0 in linea da 460 CV</strong>, <strong>trazione posteriore</strong>, cambio M Steptronic a 8 rapporti con palette al volante, sospensioni M Adaptive, differenziale autobloccante elettronico. 0-100 km/h in 4,1 secondi e una guida che premia il pilota.</p>
<h2>Per chi e''</h2>
<p>Per chi sa cosa significa trazione posteriore e vuole sentirla davvero. La M2 e'' la "M" piu'' compatta e diretta della famiglia, perfetta per le strade strette e ondulate della Gallura - SP38 verso Palau, salita per Capo Testa, percorsi panoramici sopra Arzachena. Quattro posti reali, bagagliaio da 390 litri, sound del 6 cilindri che e'' parte del prodotto.</p>
<h2>Esperienza in Costa Smeralda</h2>
<p>Consegniamo la BMW M2 a Porto Cervo, Baja Sardinia, Costa Smeralda e tutta la Gallura. Servizio di consegna in hotel, villa o marina dalle 10:00 alle 22:30, 7 giorni su 7. Sede operativa a 5 minuti dal porto di Olbia Isola Bianca e a 10 minuti dall''aeroporto Olbia Costa Smeralda.</p>
<h2>Note importanti</h2>
<p>Patente B di almeno 3 anni richiesta per il noleggio della M2. Deposito cauzionale specifico per categoria supercar, restituito integralmente alla riconsegna. Assicurazione completa <strong>RCA + Kasko</strong> sempre inclusa. <strong>Nessuna carta di credito obbligatoria</strong>: accettiamo bancomat, prepagate e contanti.</p>',
  '[
    {"q":"La BMW M2 ha la trazione posteriore o integrale?","a":"Trazione posteriore pura, come da tradizione M. Differenziale autobloccante elettronico (Active M Differential) per gestire al meglio la coppia in uscita di curva."},
    {"q":"Che patente serve per noleggiare la BMW M2?","a":"Patente B con almeno 3 anni di possesso. Conducente di almeno 25 anni. Per il secondo conducente le stesse condizioni."},
    {"q":"La M2 e'' disponibile anche in alta stagione?","a":"Si, ma in luglio e agosto la disponibilita'' e'' limitata. Consigliamo di prenotare con almeno 5-7 giorni di anticipo per evitare di restare senza."},
    {"q":"Posso usare la BMW M2 per gite fuori dalla Gallura?","a":"Si, chilometraggio illimitato. Puoi raggiungere Bosa, Alghero, Cagliari senza maggiorazioni. Solo limite: il veicolo non puo'' uscire dall''isola Sardegna."},
    {"q":"Quanto consuma la BMW M2 nella guida reale?","a":"In uso normale tra 9-11 L/100 km, guidata con grinta puo'' arrivare a 14-15 L/100 km. Serbatoio 52 litri, autonomia reale 400-500 km."}
  ]'::jsonb,
  ARRAY['noleggio-auto-porto-cervo','noleggio-auto-baja-sardinia','noleggio-auto-costa-smeralda','noleggio-auto-palau','noleggio-auto-santa-teresa-gallura'],
  'https://www.ksrentsardinia.com/flotta/bmw-m2',
  'https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/asset/og-image.jpg'
),

-- ──────────────────────────────────────────────────────────────
-- 3) MERCEDES CLASSE A 180d
-- ──────────────────────────────────────────────────────────────
(
  'mercedes-classe-a',
  'Noleggio Mercedes Classe A 180d Olbia | KS Rent Sardinia',
  'Noleggia Mercedes Classe A diesel a Olbia',
  'Mercedes Classe A 180d a noleggio a Olbia: automatica 7G-DCT, diesel a basso consumo. Ideale per soggiorni lunghi in Costa Smeralda. Senza carta.',
  '<p>La <strong>Mercedes Classe A 180d</strong> e'' la berlina compatta premium ideale per soggiorni medio-lunghi in Sardegna. Motore <strong>1.5 diesel da 116 CV</strong>, cambio <strong>automatico 7G-DCT</strong> a doppia frizione, consumi reali di 5-6 L/100 km e bagagliaio da 370 litri. Eleganza Mercedes senza il consumo di una sportiva.</p>
<h2>Quando sceglierla</h2>
<p>Se passi 7-15 giorni in Costa Smeralda e fai chilometri ogni giorno (Olbia → Porto Cervo → Santa Teresa → Bosa → ritorno), la Classe A diesel ti permette di girare tutta l''isola con un solo pieno. Comoda per 4 adulti, climatizzatore automatico bizona, infotainment MBUX con navigatore integrato. Perfetta per coppie di viaggiatori, soggiorni in villa, spostamenti business in Gallura.</p>
<h2>Aree di consegna ottimali</h2>
<p>La consegniamo in tutta la Gallura, particolarmente richiesta a <strong>Porto Rotondo, Arzachena, Santa Teresa Gallura, Palau</strong> per soggiorni lunghi. Sede operativa Olbia Viale Isola Bianca 38, a 5 minuti dal porto e 10 minuti dall''aeroporto.</p>
<h2>Cosa include il noleggio</h2>
<ul><li>Assicurazione RCA + Kasko completa</li><li>Chilometraggio illimitato in tutta la Sardegna</li><li>Consegna gratuita entro 60 km da Olbia</li><li>Secondo conducente gratuito</li><li>Assistenza stradale 24/7</li></ul>
<p><strong>Senza carta di credito obbligatoria</strong>: accettiamo bancomat, carte prepagate e contanti per il deposito cauzionale.</p>',
  '[
    {"q":"La Mercedes Classe A 180d e'' a benzina o diesel?","a":"Diesel. Motore 1.5 OM608 a basso consumo, ideale per chi percorre molti chilometri durante il soggiorno. Consumi reali tra 5 e 6 L/100 km in uso misto."},
    {"q":"Quanti bagagli entrano nella Classe A?","a":"Bagagliaio da 370 litri, comodo per 3 trolley grandi piu'' bagaglio a mano. Sedili posteriori ribaltabili 60:40 per carichi piu'' grandi (palette da surf, valigie multiple)."},
    {"q":"E'' adatta a strade sterrate per raggiungere le spiagge?","a":"E'' una berlina con altezza da terra standard - va benissimo su strade asfaltate e sterrati battuti, ma per spiagge come Cala Brandinchi o Spiaggia del Principe con accesso su strada bianca consigliamo il Jeep Avenger."},
    {"q":"Il cambio automatico ha le palette al volante?","a":"Si, cambio 7G-DCT a doppia frizione con palette al volante per modalita'' sportiva. Modalita'' Eco, Comfort e Sport selezionabili tramite drive mode."},
    {"q":"Posso noleggiare la Classe A per un solo giorno?","a":"Si, noleggi giornalieri disponibili. Sconti progressivi gia'' dalla seconda giornata; tariffa settimanale piu'' conveniente del 15-20% rispetto al giornaliero."}
  ]'::jsonb,
  ARRAY['noleggio-auto-porto-rotondo','noleggio-auto-arzachena','noleggio-auto-santa-teresa-gallura','noleggio-auto-palau','noleggio-auto-cannigione'],
  'https://www.ksrentsardinia.com/flotta/mercedes-classe-a',
  'https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/asset/og-image.jpg'
),

-- ──────────────────────────────────────────────────────────────
-- 4) JEEP AVENGER (SUV compatto)
-- ──────────────────────────────────────────────────────────────
(
  'jeep-avenger',
  'Noleggio Jeep Avenger Olbia | SUV Spiagge Sardegna - KS Rent',
  'Noleggia Jeep Avenger a Olbia: SUV per spiagge sterrate',
  'Jeep Avenger a noleggio a Olbia: SUV compatto perfetto per Cala Brandinchi, Spiaggia del Principe e calette con accesso su sterrato. Senza carta.',
  '<p>Il <strong>Jeep Avenger</strong> e'' il SUV compatto che ti permette di raggiungere le spiagge piu'' belle della Sardegna nord-orientale, anche quelle con accesso su strada bianca. Motore <strong>benzina turbo da 100 CV</strong>, <strong>cambio automatico 6 rapporti</strong>, altezza da terra rialzata, modalita'' di guida Auto/Eco/Sport/Sand. 5 posti veri, bagagliaio da 380 litri, dimensioni urbane (4,08 m di lunghezza) ma carattere off-road soft.</p>
<h2>Perche'' e'' la scelta perfetta per le spiagge</h2>
<p>Le calette piu'' iconiche della Gallura - <strong>Cala Brandinchi, Spiaggia del Principe, Cala Capra, Capo Coda Cavallo, Liscia Ruja</strong> - si raggiungono spesso tramite strade sterrate o piste battute. L''Avenger, grazie alla sua altezza da terra (200 mm), all''angolo di attacco e alla modalita'' Sand, gestisce questi percorsi senza problemi e senza rischi di toccare il sottoscocca. Parcheggia facilmente anche nei carpark stretti tipici dei punti di accesso alle spiagge.</p>
<h2>Famiglia e bagagli</h2>
<p>Cinque posti pienamente utilizzabili da adulti, bagagliaio capiente con presa 12V, ganci ISOFIX per seggiolini bambino disponibili gratuitamente su richiesta. Aria condizionata automatica, infotainment con CarPlay e Android Auto, telecamera posteriore.</p>
<h2>Consegna</h2>
<p>Consegniamo il Jeep Avenger in tutta la Gallura e Costa Smeralda. <strong>Senza carta di credito obbligatoria</strong>, deposito cauzionale accettato anche in bancomat o contanti. Servizio 7 giorni su 7, dalle 10:00 alle 22:30.</p>',
  '[
    {"q":"Il Jeep Avenger ha la trazione integrale?","a":"L''Avenger e'' a trazione anteriore con modalita'' Sand/Mud per controllo trazione su sterrato. Non e'' un 4x4 puro, ma per le strade bianche di accesso alle spiagge della Gallura e'' piu'' che sufficiente."},
    {"q":"Posso arrivare a Cala Brandinchi con l''Avenger?","a":"Si, e'' uno degli usi piu'' frequenti. L''accesso a Cala Brandinchi e'' su strada bianca battuta percorribile senza problemi. Stessa cosa per Spiaggia del Principe, La Cinta, Lu Impostu."},
    {"q":"Quanti seggiolini bambino entrano dietro?","a":"Due seggiolini in modo confortevole. Ganci ISOFIX presenti sui sedili laterali posteriori. Seggiolini disponibili gratuitamente con il noleggio, da richiedere in fase di prenotazione."},
    {"q":"L''Avenger ha il bagagliaio abbastanza grande per una famiglia di 4?","a":"380 litri, basta per 3 trolley medi + zaini. Sedili posteriori ribaltabili 60:40 per carichi extra. Se viaggiate con tavole da surf rigide o canoe vi consigliamo modelli piu'' grandi su richiesta."},
    {"q":"E'' automatico?","a":"Si, cambio automatico a 6 rapporti. Modalita'' Eco per consumi ridotti, Sport per guida piu'' reattiva, Sand per strade bianche."}
  ]'::jsonb,
  ARRAY['cala-brandinchi','spiaggia-del-principe','noleggio-auto-san-teodoro','noleggio-auto-capo-coda-cavallo','capo-testa','la-cinta','lu-impostu','romazzino'],
  'https://www.ksrentsardinia.com/flotta/jeep-avenger',
  'https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/asset/og-image.jpg'
),

-- ──────────────────────────────────────────────────────────────
-- 5) FIAT PANDA Hybrid
-- ──────────────────────────────────────────────────────────────
(
  'fiat-panda',
  'Noleggio Fiat Panda Olbia | City Car Economica - KS Rent',
  'Noleggia Fiat Panda Hybrid a Olbia: city car economica',
  'Fiat Panda Hybrid a noleggio a Olbia: city car ibrida, consumi minimi, parcheggio facile in centro e ai porti. Senza carta di credito.',
  '<p>La <strong>Fiat Panda Hybrid</strong> e'' la city car piu'' pratica e economica della flotta KS Rent. Motore <strong>ibrido 1.0 FireFly da 70 CV</strong> con sistema mild-hybrid, consumi reali <strong>4,5-5 L/100 km</strong>, cambio manuale a 5 rapporti, 5 porte, dimensioni urbane perfette per i centri storici sardi.</p>
<h2>Per chi e''</h2>
<p>Coppie, viaggiatori singoli, chi vuole risparmiare sul noleggio senza rinunciare alla comodita''. <strong>Il prezzo piu'' competitivo della flotta</strong> e i consumi ridotti la rendono ideale per soggiorni medio-lunghi con utilizzo quotidiano. Parcheggia ovunque - nei vicoli stretti di Olbia centro, nei piccoli paesi della Gallura interna, nei parcheggi affollati delle spiagge.</p>
<h2>Aree di utilizzo ottimali</h2>
<p>Spostamenti tra <strong>Olbia, Golfo Aranci, Pittulongu, Marinella, Budoni</strong> e tutti i centri costieri dove il parcheggio e'' la sfida principale. Sufficiente anche per raggiungere spiagge su strada asfaltata (Porto Istana, Bados, La Cinta). Per spiagge con sterrato consigliamo il Jeep Avenger.</p>
<h2>Senza carta di credito</h2>
<p>Punto di forza della Panda: <strong>e'' la nostra auto piu'' richiesta dai clienti senza carta di credito</strong>. Deposito cauzionale basso (categoria city car), accettato in bancomat, prepagata o contanti. Consegna in tutta la Gallura entro 60 km da Olbia.</p>',
  '[
    {"q":"La Fiat Panda Hybrid e'' ibrida o ibrida plug-in?","a":"Sistema mild-hybrid a 12V (BSG): un piccolo motore elettrico assiste il termico nelle partenze e nelle accelerazioni, riducendo i consumi del 15-20%. Non si ricarica alla presa, si ricarica da sola con la decelerazione."},
    {"q":"Quanto costa noleggiare la Panda al giorno?","a":"E'' il veicolo piu'' economico della flotta. Tariffe esatte nella tabella prezzi mensili in questa pagina: aprile e ottobre sono i mesi piu'' convenienti, alta stagione luglio-agosto."},
    {"q":"E'' adatta a 4 adulti per lunghi tragitti?","a":"Pratica per 2 adulti + 2 bambini, oppure 4 adulti su distanze brevi. Per 4 adulti con bagagli su viaggi lunghi consigliamo la Mercedes Classe A o il Jeep Avenger."},
    {"q":"E'' un cambio manuale o automatico?","a":"Manuale 5 marce. Se preferisci automatico ti suggeriamo Mercedes Classe A o Jeep Avenger."},
    {"q":"Posso lasciare la Panda al porto di Olbia per la partenza?","a":"Si. Ti veniamo a ritirare il veicolo direttamente al porto Isola Bianca o all''aeroporto. Servizio gratuito entro l''orario di apertura (10:00-22:30, 7/7)."}
  ]'::jsonb,
  ARRAY['noleggio-auto-budoni','noleggio-auto-golfo-aranci','noleggio-auto-marinella','noleggio-auto-pittulongu','noleggio-auto-bados','porto-istana','spiaggia-bianca'],
  'https://www.ksrentsardinia.com/flotta/fiat-panda',
  'https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/asset/og-image.jpg'
),

-- ──────────────────────────────────────────────────────────────
-- 6) HONDA SH (varianti 125 + 350)
-- ──────────────────────────────────────────────────────────────
(
  'honda-sh',
  'Noleggio Honda SH 125 e 350 Olbia | Scooter Sardegna - KS Rent',
  'Noleggia Honda SH 125 o 350 a Olbia',
  'Honda SH 125 e SH 350 a noleggio a Olbia: scooter agile per Costa Smeralda e centro Olbia. Patente A per il 350. Senza carta di credito.',
  '<p><strong>Honda SH 125 e SH 350</strong> sono gli scooter piu'' venduti in Italia per un motivo: affidabilita'' totale, ruote alte (16 pollici davanti) per stabilita'' su strade non perfette, sottosella capiente, consumi minimi. KS Rent Sardinia li ha entrambi - <strong>SH 125 per chi ha patente B (guida con A1 incluso)</strong>, <strong>SH 350 per chi ha patente A</strong>.</p>
<h2>Honda SH 125</h2>
<p>Motore 125 cc raffreddato a liquido, iniezione PGM-FI, sistema Start&Stop, freno combinato CBS. Velocita'' massima 102 km/h. <strong>Guidabile con patente B</strong> (auto) - non serve la moto. Perfetto per Olbia centro, Porto Rotondo, Pittulongu, Bados, Golfo Aranci.</p>
<h2>Honda SH 350</h2>
<p>Motore 330 cc raffreddato a liquido da 29 CV, ABS a 2 canali, controllo di trazione HSTC. Velocita'' massima 135 km/h. <strong>Patente A obbligatoria</strong>. Ideale per chi deve macinare chilometri tra Olbia e Costa Smeralda quotidianamente, o per gite lunghe verso Santa Teresa, Palau, Aglientu.</p>
<h2>Cosa e'' incluso</h2>
<ul><li>Due caschi (omaggio, taglia da concordare)</li><li>Assicurazione RCA + Kasko</li><li>Antifurto bloccadisco</li><li>Telo coprimoto</li><li>Chilometraggio illimitato</li></ul>
<p>Consegna in tutta la Gallura. <strong>Senza carta di credito obbligatoria</strong>.</p>',
  '[
    {"q":"Che patente serve per la Honda SH 125?","a":"Va bene la patente B (auto) ottenuta dopo il 1985. Per chi ha solo A1 (16+ anni), va bene. Non serve patente A."},
    {"q":"Che patente serve per la Honda SH 350?","a":"Patente A obbligatoria (qualsiasi sotto-categoria: A, A2 con limitazioni a 35 kW). La A1 e la B non bastano per la 350."},
    {"q":"I caschi sono inclusi nel noleggio?","a":"Si, due caschi inclusi. Comunicaci le taglie in fase di prenotazione (S/M/L/XL). Disponibili anche caschi jet e modulari su richiesta."},
    {"q":"Lo scooter ha il sottosella per il casco?","a":"Si, sottosella illuminato che contiene un casco integrale completo (SH 350) o un casco jet + oggetti (SH 125). Vano portaoggetti anteriore aggiuntivo."},
    {"q":"Posso portarlo fuori dalla Gallura, ad esempio a Cagliari?","a":"Si, chilometraggio illimitato e nessuna limitazione geografica in Sardegna. Pieno di benzina al ritiro e da restituire pieno."}
  ]'::jsonb,
  ARRAY['noleggio-auto-san-teodoro','noleggio-auto-golfo-aranci','noleggio-auto-pittulongu','noleggio-auto-marinella','noleggio-auto-porto-rotondo','noleggio-auto-baja-sardinia'],
  'https://www.ksrentsardinia.com/flotta/honda-sh',
  'https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/asset/og-image.jpg'
),

-- ──────────────────────────────────────────────────────────────
-- 7) YAMAHA QUAD RAPTOR
-- ──────────────────────────────────────────────────────────────
(
  'yamaha-quad-raptor',
  'Noleggio Yamaha Quad Raptor Olbia | Off-Road Gallura - KS Rent',
  'Noleggia Yamaha Raptor a Olbia: quad off-road in Gallura',
  'Yamaha Raptor a noleggio a Olbia per avventure off-road tra le colline della Gallura. Patente A o B, casco e abbigliamento inclusi.',
  '<p>Lo <strong>Yamaha Raptor</strong> e'' il quad sportivo per chi vuole un''esperienza diversa dalla classica giornata in spiaggia: percorsi off-road sulle colline della Gallura, sentieri tra macchia mediterranea, viste panoramiche su Costa Smeralda e Tavolara dall''entroterra. Motore <strong>monocilindrico 4 tempi</strong>, cambio manuale, sospensioni a lunga escursione, gomme tassellate.</p>
<h2>Esperienza tipica</h2>
<p>Il quad e'' usato principalmente per <strong>escursioni guidate o autonome di mezza giornata o giornata intera</strong>. Percorsi consigliati: colline sopra Arzachena con vista su Costa Smeralda, area di Capo Coda Cavallo, entroterra di Palau verso Capo d''Orso, percorsi sterrati attorno a Cannigione. Il quad NON e'' omologato per spiagge protette (Parco di La Maddalena, dune di Berchida).</p>
<h2>Patente richiesta</h2>
<p>Patente B (auto) o A. Conducente di almeno 21 anni. Esperienza di guida raccomandata ma non obbligatoria. Briefing tecnico di 15 minuti incluso al ritiro.</p>
<h2>Equipaggiamento incluso</h2>
<ul><li>Casco integrale omologato</li><li>Guanti protettivi</li><li>Occhiali da sole/protezione polvere</li><li>Carburante per il primo pieno</li><li>Assicurazione RCA</li><li>Cartina con percorsi consigliati</li></ul>
<h2>Disponibilita''</h2>
<p>Stagione di noleggio quad: <strong>aprile-ottobre</strong>. Disponibilita'' limitata in alta stagione - consigliamo prenotazione almeno 5 giorni prima. <strong>Senza carta di credito obbligatoria</strong>.</p>',
  '[
    {"q":"Posso usare il quad in spiaggia?","a":"No. Le spiagge sono area protetta in Sardegna - non e'' consentito accedervi con quad o moto. Il quad va usato su sentieri non protetti, sterrati nell''entroterra, percorsi privati con autorizzazione."},
    {"q":"Che patente serve per il Raptor?","a":"Patente B (auto, basta) o A. Conducente almeno 21 anni. Niente patente speciale richiesta."},
    {"q":"E'' difficile da guidare?","a":"No, il quad e'' piu'' intuitivo di una moto - non c''e'' equilibrio in marcia. Briefing tecnico di 15 minuti al ritiro per spiegare comandi, modalita'' di sicurezza e percorsi consigliati."},
    {"q":"Si possono portare 2 persone?","a":"No, e'' un quad monoposto sportivo (Raptor). Per quad biposto turistici (Yamaha Grizzly e simili) chiedere disponibilita'' in fase di prenotazione."},
    {"q":"Avete percorsi guidati o e'' tutto in autonomia?","a":"Forniamo cartina e percorsi consigliati per uso autonomo. Per escursioni guidate con istruttore, possiamo metterti in contatto con operatori partner della Gallura."}
  ]'::jsonb,
  ARRAY['noleggio-auto-arzachena','noleggio-auto-palau','noleggio-auto-cannigione','noleggio-auto-capo-coda-cavallo','noleggio-auto-santa-teresa-gallura'],
  'https://www.ksrentsardinia.com/flotta/yamaha-quad-raptor',
  'https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/asset/og-image.jpg'
)

ON CONFLICT (group_slug) DO UPDATE SET
  title                  = EXCLUDED.title,
  h1                     = EXCLUDED.h1,
  meta_description       = EXCLUDED.meta_description,
  content_html           = EXCLUDED.content_html,
  faqs                   = EXCLUDED.faqs,
  recommended_locations  = EXCLUDED.recommended_locations,
  canonical_url          = EXCLUDED.canonical_url,
  og_image_url           = EXCLUDED.og_image_url,
  updated_at             = now();


-- ============================================================
-- STEP 2 (OPZIONALE) - Assegnare group_slug ai veicoli esistenti
-- ============================================================
-- IMPORTANTE: la pagina /flotta/[slug] viene generata SOLO se almeno
-- un record in `vehicles` ha il group_slug corrispondente. Dopo il
-- seed sopra, devi mappare i veicoli del DB ai gruppi.
--
-- Esegui questi UPDATE adattati ai veicoli reali nel tuo DB.
-- Decommenta e modifica le condizioni in base alla tua flotta.
-- ============================================================

-- UPDATE public.vehicles SET group_slug = 'audi-rs3',          is_primary_variant = false WHERE make ILIKE 'audi'    AND model ILIKE '%rs3%';
-- UPDATE public.vehicles SET group_slug = 'bmw-m2',            is_primary_variant = true  WHERE make ILIKE 'bmw'     AND model ILIKE '%m2%';
-- UPDATE public.vehicles SET group_slug = 'mercedes-classe-a', is_primary_variant = true  WHERE make ILIKE 'mercedes%' AND model ILIKE '%classe a%';
-- UPDATE public.vehicles SET group_slug = 'jeep-avenger',      is_primary_variant = true  WHERE make ILIKE 'jeep'    AND model ILIKE '%avenger%';
-- UPDATE public.vehicles SET group_slug = 'fiat-panda',        is_primary_variant = true  WHERE make ILIKE 'fiat'    AND model ILIKE '%panda%';
-- UPDATE public.vehicles SET group_slug = 'honda-sh',          is_primary_variant = false WHERE make ILIKE 'honda'   AND model ILIKE '%sh%';
-- UPDATE public.vehicles SET group_slug = 'yamaha-quad-raptor',is_primary_variant = true  WHERE make ILIKE 'yamaha'  AND model ILIKE '%raptor%';

-- Per Audi RS3 e Honda SH che hanno varianti (grigia/verde, 125/350),
-- imposta is_primary_variant = true SOLO sul veicolo che vuoi come hero:
-- UPDATE public.vehicles SET is_primary_variant = true WHERE group_slug = 'audi-rs3' AND color ILIKE '%verde%';
-- UPDATE public.vehicles SET is_primary_variant = true WHERE group_slug = 'honda-sh' AND model ILIKE '%350%';


-- ============================================================
-- VERIFICA POST-SEED
-- ============================================================
-- SELECT group_slug, title, jsonb_array_length(faqs) AS faq_count,
--        array_length(recommended_locations, 1) AS rec_count
-- FROM public.seo_vehicles
-- ORDER BY group_slug;
-- -- atteso: 7 righe, faq_count = 5 per ognuna, rec_count >= 4
--
-- SELECT v.group_slug, count(*) AS variants
-- FROM public.vehicles v
-- WHERE v.group_slug IS NOT NULL
-- GROUP BY v.group_slug;
-- -- atteso: una riga per ogni group_slug con almeno 1 variante
-- ============================================================

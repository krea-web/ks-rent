/**
 * "Quando scegliere X vs Y" — copy unico per ogni pair confronto.
 *
 * Serve a abbattere la similarity Jaccard tra pagine /flotta/confronta/*
 * (oggi ~0.24 max). Ogni pair ha ~200 parole di copy editorial UNICO per
 * lingua, garantendo che il body non sia mai duplicato tra pair.
 *
 * Key = pair slug IT (es. "audi-rs3-vs-bmw-m2").
 * Value = HTML editorial con h2/p/ul — wrappato in `.editorial` nel
 * componente VehicleComparison.
 */

import type { Lang } from "@/data/vehicle-specs-i18n";

export const WHEN_TO_CHOOSE: Record<string, Record<Lang, string>> = {
  "audi-rs3-vs-bmw-m2": {
    it: `
      <h2>Quando scegliere Audi RS3 vs BMW M2</h2>
      <p>La <strong>RS3</strong> è la scelta razionale per chi cerca prestazioni accessibili anche a chi non guida supercar tutto l'anno: la trazione quattro perdona errori, la doppia frizione 7 marce fa tutto da sola, e nei tornanti della SP59 da Porto Cervo a Baja Sardinia non ti senti mai in difficoltà. Perfetta per coppie che vogliono "la giornata da sportiva" senza stress, o per chi viene dal SUV/sedan premium.</p>
      <p>La <strong>M2</strong> è per il guidatore esperto che vuole la macchina che reagisce all'acceleratore. Posteriore pura, manuale opzionale (la nostra è automatica Steptronic), si gusta in pista o sulle salite verso San Pantaleo. Su asciutto è incredibile; con pioggia bisogna gestirla. Scegli M2 se hai già guidato sportive a trazione posteriore e vuoi un weekend "vero".</p>
      <p><strong>Decisore pratico:</strong> RS3 se viaggi in 4 con bagagli (cinque posti omologati), M2 se siete in due e cercate l'esperienza di guida pura. Prezzo simile, esperienza diversa.</p>
    `,
    en: `
      <h2>When to choose Audi RS3 vs BMW M2</h2>
      <p>The <strong>RS3</strong> is the rational pick for drivers who want performance without daily-supercar habits: quattro AWD forgives mistakes, the 7-speed DCT shifts itself, and on the SP59 hairpins between Porto Cervo and Baja Sardinia you never feel overwhelmed. Perfect for couples who want a "sporty day" without stress, or anyone stepping up from a premium SUV/sedan.</p>
      <p>The <strong>M2</strong> is for the experienced driver who wants a car that reacts to throttle. Pure rear-wheel drive, optional manual (ours is Steptronic auto), best enjoyed on track or climbing toward San Pantaleo. Phenomenal in the dry; takes more management in the wet. Pick M2 if you've already driven rear-drive sports cars and want a "real" weekend.</p>
      <p><strong>Practical decision:</strong> RS3 if you're 4 with luggage (5 seats), M2 if you're two and chasing the driving experience. Similar price, very different feel.</p>
    `,
    de: `
      <h2>Wann Audi RS3 oder BMW M2 waehlen</h2>
      <p>Der <strong>RS3</strong> ist die rationale Wahl fuer alle, die Leistung wollen ohne taeglich Supersportwagen zu fahren: der Quattro-Allradantrieb verzeiht Fehler, das 7-Gang-DSG schaltet selbst, und in den Kehren der SP59 zwischen Porto Cervo und Baja Sardinia fuehlt man sich nie ueberfordert. Perfekt fuer Paare, die einen "sportlichen Tag" ohne Stress wollen, oder fuer Umsteiger von Premium-SUV/Limousine.</p>
      <p>Der <strong>M2</strong> ist fuer den erfahrenen Fahrer, der ein Auto will, das auf das Gaspedal reagiert. Reiner Hinterradantrieb, optional Handschaltung (unserer hat Steptronic-Automatik), am besten auf der Rennstrecke oder bergan Richtung San Pantaleo. Trocken phaenomenal; bei Regen erfordert er Erfahrung. M2 nur, wenn Sie schon Hinterradsportwagen gefahren sind.</p>
      <p><strong>Praktische Entscheidung:</strong> RS3 zu viert mit Gepaeck (5 Sitze), M2 zu zweit fuer das Fahrerlebnis. Aehnlicher Preis, ganz unterschiedliches Gefuehl.</p>
    `,
    fr: `
      <h2>Quand choisir Audi RS3 vs BMW M2</h2>
      <p>La <strong>RS3</strong> est le choix rationnel pour qui veut des performances sans habitudes de supercar quotidienne : la transmission quattro pardonne les erreurs, la boîte 7 rapports à double embrayage fait tout, et dans les épingles de la SP59 entre Porto Cervo et Baja Sardinia on ne se sent jamais débordé. Parfaite pour les couples qui veulent "une journée sportive" sans stress, ou pour qui vient d'un SUV/berline premium.</p>
      <p>La <strong>M2</strong> est pour le conducteur expérimenté qui veut une voiture qui réagit à l'accélérateur. Propulsion pure, manuelle en option (la nôtre est Steptronic), à savourer en piste ou en montée vers San Pantaleo. Phénoménale au sec ; sur sol mouillé il faut la gérer. Choisissez M2 si vous avez déjà conduit des sportives à propulsion.</p>
      <p><strong>Décision pratique :</strong> RS3 à quatre avec bagages (5 places), M2 à deux pour l'expérience de conduite. Prix similaire, ressenti très différent.</p>
    `,
  },

  "audi-rs3-vs-jeep-avenger": {
    it: `
      <h2>Quando scegliere Audi RS3 vs Jeep Avenger</h2>
      <p>Confronto di filosofie opposte: la <strong>RS3</strong> è una supercar compatta 400 CV pensata per asfalto e adrenalina sulla SP59; il <strong>Jeep Avenger</strong> è un SUV compatto pensato per arrivare sulle spiagge che richiedono sterrato (Cala Brandinchi, Spiaggia del Principe, calette di Capo Coda Cavallo).</p>
      <p>Scegli <strong>RS3</strong> se la tua giornata tipo è: aperitivo a Porto Cervo, cena a Cala di Volpe, dormire a Baja Sardinia. Strade tutte asfaltate, prestazioni come motivo. La RS3 ha 282 litri di bagagliaio: ok per coppia, ok per quattro adulti weekend, no per famiglia con tavole da surf.</p>
      <p>Scegli <strong>Avenger</strong> se la tua giornata tipo è: spiaggia con sterrato, ritorno con sabbia ovunque, picnic, bambini. 380 litri di bagagliaio, 18 cm di altezza da terra, modalità Sand/Mud. Costo giornaliero significativamente più basso.</p>
      <p><strong>Spoiler:</strong> molti nostri clienti noleggiano <em>entrambe</em> — RS3 per il weekend "premio", Avenger per i giorni mare con bambini.</p>
    `,
    en: `
      <h2>When to choose Audi RS3 vs Jeep Avenger</h2>
      <p>Two opposite philosophies: the <strong>RS3</strong> is a 400 hp compact super-sedan made for tarmac and adrenaline on the SP59; the <strong>Jeep Avenger</strong> is a compact SUV made to reach beaches that require unpaved access (Cala Brandinchi, Spiaggia del Principe, the Capo Coda Cavallo coves).</p>
      <p>Pick the <strong>RS3</strong> if your day is: aperitif in Porto Cervo, dinner at Cala di Volpe, sleep in Baja Sardinia. All paved roads, performance is the point. 282-litre boot: fine for a couple, fine for four adults on a weekend, no for a family with surfboards.</p>
      <p>Pick the <strong>Avenger</strong> if your day is: beach with dirt access, return with sand everywhere, picnic, children. 380-litre boot, 18 cm ground clearance, Sand/Mud modes. Significantly lower daily cost.</p>
      <p><strong>Spoiler:</strong> many of our customers rent <em>both</em> — RS3 for the "treat" weekend, Avenger for the beach days with kids.</p>
    `,
    de: `
      <h2>Wann Audi RS3 oder Jeep Avenger waehlen</h2>
      <p>Zwei gegensaetzliche Philosophien: der <strong>RS3</strong> ist eine kompakte 400-PS-Sportlimousine fuer Asphalt und Adrenalin auf der SP59; der <strong>Jeep Avenger</strong> ist ein Kompakt-SUV, gebaut, um Straende mit Schotterzufahrt zu erreichen (Cala Brandinchi, Spiaggia del Principe, die Buchten von Capo Coda Cavallo).</p>
      <p>Waehlen Sie den <strong>RS3</strong>, wenn Ihr Tag so aussieht: Aperitif in Porto Cervo, Abendessen Cala di Volpe, Uebernachtung Baja Sardinia. Nur asphaltierte Strassen, Leistung ist der Punkt. 282-Liter-Kofferraum: ok fuer ein Paar, ok fuer vier Erwachsene am Wochenende, nicht fuer eine Familie mit Surfbrettern.</p>
      <p>Waehlen Sie den <strong>Avenger</strong>, wenn Ihr Tag so aussieht: Strand mit Schotterzufahrt, Rueckkehr mit Sand ueberall, Picknick, Kinder. 380-Liter-Kofferraum, 18 cm Bodenfreiheit, Sand/Mud-Modus. Deutlich guenstigerer Tagespreis.</p>
      <p><strong>Spoiler:</strong> Viele unserer Kunden mieten <em>beide</em> — RS3 fuer das "Belohnungs"-Wochenende, Avenger fuer die Strandtage mit Kindern.</p>
    `,
    fr: `
      <h2>Quand choisir Audi RS3 vs Jeep Avenger</h2>
      <p>Deux philosophies opposées : la <strong>RS3</strong> est une berline compacte sportive de 400 ch faite pour l'asphalte et l'adrénaline sur la SP59 ; le <strong>Jeep Avenger</strong> est un SUV compact fait pour atteindre les plages avec accès en piste (Cala Brandinchi, Spiaggia del Principe, les criques de Capo Coda Cavallo).</p>
      <p>Choisissez la <strong>RS3</strong> si votre journée type est : apéritif à Porto Cervo, dîner Cala di Volpe, dodo Baja Sardinia. Tout sur route goudronnée, la performance est l'objectif. Coffre 282 litres : ok pour un couple, ok pour quatre adultes en week-end, pas pour une famille avec planches de surf.</p>
      <p>Choisissez le <strong>Avenger</strong> si votre journée type est : plage avec accès piste, retour avec du sable partout, pique-nique, enfants. Coffre 380 litres, 18 cm de garde au sol, modes Sand/Mud. Coût journalier nettement inférieur.</p>
      <p><strong>Spoiler :</strong> beaucoup de nos clients louent <em>les deux</em> — RS3 pour le week-end "récompense", Avenger pour les journées plage avec les enfants.</p>
    `,
  },

  "audi-rs3-vs-mercedes-classe-a": {
    it: `
      <h2>Quando scegliere Audi RS3 vs Mercedes Classe A</h2>
      <p>Confronto tra <strong>sportiva pura (RS3)</strong> e <strong>premium comfort (Classe A 180d)</strong>. Stessa fascia di marca tedesca, due intent completamente diversi: la RS3 nasce per accelerare, la Classe A 180d nasce per viaggiare lontano consumando poco.</p>
      <p>La <strong>RS3</strong> ha 400 CV benzina, consumi reali 11-13 L/100 km. Per un weekend di 3-4 giorni con tante panoramiche, è la macchina giusta. Per una settimana di tour della Sardegna (Olbia → Cagliari → Alghero → ritorno = 800+ km), la pompa di benzina diventa amica intima.</p>
      <p>La <strong>Classe A 180d</strong> ha 116 CV diesel, consumi reali 5-6 L/100 km. Cambio automatico 7G-DCT, sospensioni morbide, interno premium con MBUX. Perfetta per chi vuole "una bella macchina senza pensieri" per soggiorni lunghi, per chi viaggia con famiglia, per chi macina km.</p>
      <p><strong>Decisore:</strong> 3-4 giorni "sportivi" → RS3. 1+ settimana o famiglia con bambini → Classe A. La Classe A costa meno della metà al giorno.</p>
    `,
    en: `
      <h2>When to choose Audi RS3 vs Mercedes A-Class</h2>
      <p>This is sports car (RS3) vs premium comfort (A-Class 180d). Same German tier, two completely different intents: the RS3 was born to accelerate, the A 180d was born to travel far and sip fuel.</p>
      <p>The <strong>RS3</strong> has 400 hp petrol, real-world 11-13 L/100 km. For a 3-4 day weekend with lots of scenic drives, it's the right car. For a week-long Sardinia tour (Olbia → Cagliari → Alghero → back = 800+ km), the pump becomes a close friend.</p>
      <p>The <strong>A-Class 180d</strong> has 116 hp diesel, 5-6 L/100 km real. 7G-DCT auto, soft suspension, premium MBUX interior. Perfect for "a nice car with no worries" on long stays, families, or anyone covering serious distance.</p>
      <p><strong>Decision:</strong> 3-4 sporty days → RS3. A week or family with kids → A-Class. The A-Class costs less than half per day.</p>
    `,
    de: `
      <h2>Wann Audi RS3 oder Mercedes A-Klasse waehlen</h2>
      <p>Sportwagen (RS3) gegen Premium-Komfort (A-Klasse 180d). Gleiche deutsche Premiumklasse, voellig unterschiedliche Absichten: der RS3 wurde fuer Beschleunigung geboren, die A 180d fuer Langstrecke mit niedrigem Verbrauch.</p>
      <p>Der <strong>RS3</strong> hat 400 PS Benzin, realer Verbrauch 11-13 L/100 km. Fuer ein 3-4-taegiges Wochenende mit viel Panoramastrassen ist es das richtige Auto. Fuer eine Wochentour durch Sardinien (Olbia → Cagliari → Alghero → zurueck = 800+ km) wird die Tankstelle zum engen Freund.</p>
      <p>Die <strong>A-Klasse 180d</strong> hat 116 PS Diesel, 5-6 L/100 km real. 7G-DCT-Automatik, weiche Federung, Premium-MBUX-Innenraum. Perfekt fuer "ein schoenes Auto ohne Sorgen" bei langen Aufenthalten, fuer Familien, fuer alle, die Kilometer machen.</p>
      <p><strong>Entscheidung:</strong> 3-4 "sportliche" Tage → RS3. 1+ Woche oder Familie mit Kindern → A-Klasse. Die A-Klasse kostet weniger als die Haelfte pro Tag.</p>
    `,
    fr: `
      <h2>Quand choisir Audi RS3 vs Mercedes Classe A</h2>
      <p>Sportive pure (RS3) vs confort premium (Classe A 180d). Même gamme allemande, deux intentions complètement différentes : la RS3 est née pour accélérer, la Classe A 180d est née pour voyager loin en consommant peu.</p>
      <p>La <strong>RS3</strong> a 400 ch essence, consommation réelle 11-13 L/100 km. Pour un week-end de 3-4 jours avec beaucoup de panoramiques, c'est la bonne voiture. Pour un tour d'une semaine en Sardaigne (Olbia → Cagliari → Alghero → retour = 800+ km), la pompe à essence devient une amie intime.</p>
      <p>La <strong>Classe A 180d</strong> a 116 ch diesel, 5-6 L/100 km réels. Boîte automatique 7G-DCT, suspensions souples, intérieur premium MBUX. Parfaite pour "une belle voiture sans soucis" sur longs séjours, familles, ou qui avale les kilomètres.</p>
      <p><strong>Décision :</strong> 3-4 jours "sportifs" → RS3. 1+ semaine ou famille avec enfants → Classe A. La Classe A coûte moins de la moitié par jour.</p>
    `,
  },

  "bmw-m2-vs-mercedes-classe-a": {
    it: `
      <h2>Quando scegliere BMW M2 vs Mercedes Classe A</h2>
      <p>Confronto tra <strong>sportiva coupé (M2)</strong> e <strong>compatta premium (Classe A 180d)</strong>: stesse 5 stelle in fascia premium, due esperienze opposte.</p>
      <p>La <strong>M2</strong> è una coupé 4 posti (in realtà 2+2 stretti) con 460 CV biturbo posteriore. È la macchina che fa pubblicità a se stessa: parcheggiata davanti al ristorante a Porto Cervo, ferma sguardi. La guida è la più "tagliente" della nostra flotta. Costo carburante: alto. Per 1-3 giorni "wow factor", è imbattibile.</p>
      <p>La <strong>Classe A 180d</strong> è una berlina compatta diesel 5 posti, 116 CV, comfort prima di tutto. Cambio automatico fluido, infotainment MBUX di ultima generazione, consumi 5-6 L/100 km. La macchina che noleggi quando l'esperienza che conta è l'isola, non l'auto.</p>
      <p><strong>Decisore:</strong> coppia in weekend o "regalo" personale → M2. Famiglia, soggiorno lungo, esplorazione tutta isola → Classe A.</p>
    `,
    en: `
      <h2>When to choose BMW M2 vs Mercedes A-Class</h2>
      <p>Sports coupé (M2) vs premium compact (A-Class 180d): both in the premium tier, two opposite experiences.</p>
      <p>The <strong>M2</strong> is a 4-seater coupé (really 2+2 cramped) with a 460 hp twin-turbo rear engine. It's the car that does its own advertising: parked outside a restaurant in Porto Cervo, it stops people. The driving is the sharpest in our fleet. Fuel cost: high. For 1-3 "wow factor" days, it's unbeatable.</p>
      <p>The <strong>A-Class 180d</strong> is a 5-seater compact diesel saloon, 116 hp, comfort first. Smooth auto, latest MBUX infotainment, 5-6 L/100 km. The car you hire when the experience that matters is the island, not the car.</p>
      <p><strong>Decision:</strong> couple weekend or personal "treat" → M2. Family, long stay, full island exploration → A-Class.</p>
    `,
    de: `
      <h2>Wann BMW M2 oder Mercedes A-Klasse waehlen</h2>
      <p>Sportcoupé (M2) gegen Premium-Kompakt (A-Klasse 180d): beide in der Premium-Klasse, zwei gegensaetzliche Erfahrungen.</p>
      <p>Der <strong>M2</strong> ist ein 4-Sitzer-Coupé (eigentlich 2+2 eng) mit 460 PS Biturbo-Hinterradantrieb. Es ist das Auto, das fuer sich selbst wirbt: vor einem Restaurant in Porto Cervo geparkt, bleiben Blicke haengen. Die Fahrweise ist die schaerfste unserer Flotte. Spritkosten: hoch. Fuer 1-3 "Wow-Faktor"-Tage unschlagbar.</p>
      <p>Die <strong>A-Klasse 180d</strong> ist eine 5-Sitzer-Diesel-Kompaktlimousine, 116 PS, Komfort an erster Stelle. Fluessige Automatik, neueste MBUX-Infotainment, 5-6 L/100 km. Das Auto, das man mietet, wenn die Erfahrung der Insel zaehlt, nicht des Autos.</p>
      <p><strong>Entscheidung:</strong> Paar im Wochenende oder persoenliches "Geschenk" → M2. Familie, langer Aufenthalt, ganze Insel erkunden → A-Klasse.</p>
    `,
    fr: `
      <h2>Quand choisir BMW M2 vs Mercedes Classe A</h2>
      <p>Coupé sportif (M2) vs compacte premium (Classe A 180d) : tous deux en gamme premium, deux expériences opposées.</p>
      <p>La <strong>M2</strong> est un coupé 4 places (en fait 2+2 étroites) avec un biturbo arrière de 460 ch. C'est la voiture qui fait sa propre publicité : garée devant un restaurant à Porto Cervo, elle arrête les regards. La conduite est la plus "tranchante" de notre flotte. Coût carburant : élevé. Pour 1-3 jours "wow factor", imbattable.</p>
      <p>La <strong>Classe A 180d</strong> est une berline compacte diesel 5 places, 116 ch, confort avant tout. Boîte automatique fluide, infodivertissement MBUX dernière génération, 5-6 L/100 km. La voiture qu'on loue quand l'expérience qui compte est l'île, pas la voiture.</p>
      <p><strong>Décision :</strong> couple en week-end ou "cadeau" personnel → M2. Famille, séjour long, exploration de toute l'île → Classe A.</p>
    `,
  },

  "mercedes-classe-a-vs-jeep-avenger": {
    it: `
      <h2>Quando scegliere Mercedes Classe A vs Jeep Avenger</h2>
      <p>Due "praticità" diverse: la <strong>Classe A 180d</strong> è una berlina premium, comfort sopra tutto; il <strong>Jeep Avenger</strong> è un SUV compatto, versatilità sopra tutto.</p>
      <p>Per chi viaggia su <strong>strade tutte asfaltate</strong> (Olbia → Cagliari, soggiorno hotel Porto Cervo, escursioni Tempio Pausania), la <strong>Classe A</strong> è imbattibile per comfort: sospensioni morbide, isolamento acustico, MBUX premium. Diesel 1.5 OM608, 116 CV, 5-6 L/100 km, autonomia reale 800 km con un pieno. Cambio 7G-DCT che non si sente.</p>
      <p>Per chi vuole <strong>arrivare alle spiagge meno servite</strong> (Cala Brandinchi accesso interno, Spiaggia del Principe sterrato finale, Suaraccia a Capo Coda Cavallo), il <strong>Jeep Avenger</strong> con la sua altezza da terra di 18 cm e modalità Sand è la scelta obbligata. Bagagliaio 380 litri vs 370 della Classe A.</p>
      <p><strong>Decisore:</strong> 90% strade asfaltate, comfort essenziale → Classe A. Vuoi fare anche le calette con sterrato senza preoccupazioni → Avenger.</p>
    `,
    en: `
      <h2>When to choose Mercedes A-Class vs Jeep Avenger</h2>
      <p>Two different "practical" cars: the <strong>A-Class 180d</strong> is a premium saloon, comfort first; the <strong>Jeep Avenger</strong> is a compact SUV, versatility first.</p>
      <p>If you travel <strong>only paved roads</strong> (Olbia → Cagliari, Porto Cervo hotel stay, Tempio Pausania excursions), the <strong>A-Class</strong> is unbeatable for comfort: soft suspension, acoustic isolation, premium MBUX. 1.5 OM608 diesel, 116 hp, 5-6 L/100 km, 800 km real range on a tank. 7G-DCT auto you don't even notice.</p>
      <p>If you want to <strong>reach the less-served beaches</strong> (Cala Brandinchi inland access, Spiaggia del Principe with final dirt road, Suaraccia at Capo Coda Cavallo), the <strong>Jeep Avenger</strong> with 18 cm ground clearance and Sand mode is the obvious pick. 380-litre boot vs 370 in the A-Class.</p>
      <p><strong>Decision:</strong> 90% paved, comfort essential → A-Class. You want the dirt-road coves without worries → Avenger.</p>
    `,
    de: `
      <h2>Wann Mercedes A-Klasse oder Jeep Avenger waehlen</h2>
      <p>Zwei verschiedene "praktische" Autos: die <strong>A-Klasse 180d</strong> ist eine Premium-Limousine, Komfort an erster Stelle; der <strong>Jeep Avenger</strong> ist ein Kompakt-SUV, Vielseitigkeit an erster Stelle.</p>
      <p>Wer <strong>nur asphaltierte Strassen</strong> faehrt (Olbia → Cagliari, Porto-Cervo-Hotelaufenthalt, Ausfluege Tempio Pausania), bekommt mit der <strong>A-Klasse</strong> unschlagbaren Komfort: weiche Federung, akustische Isolation, Premium-MBUX. 1.5 OM608 Diesel, 116 PS, 5-6 L/100 km, 800 km reale Reichweite pro Tank. 7G-DCT-Automatik, die man nicht spuert.</p>
      <p>Wer die <strong>weniger erschlossenen Straende erreichen</strong> moechte (Cala Brandinchi Inneneinfahrt, Spiaggia del Principe mit Schotter am Ende, Suaraccia in Capo Coda Cavallo), waehlt klar den <strong>Jeep Avenger</strong> mit 18 cm Bodenfreiheit und Sand-Modus. 380-Liter-Kofferraum vs 370 in der A-Klasse.</p>
      <p><strong>Entscheidung:</strong> 90% asphaltiert, Komfort essentiell → A-Klasse. Sie wollen auch die Schotter-Buchten ohne Sorgen → Avenger.</p>
    `,
    fr: `
      <h2>Quand choisir Mercedes Classe A vs Jeep Avenger</h2>
      <p>Deux "pratiques" différentes : la <strong>Classe A 180d</strong> est une berline premium, confort avant tout ; le <strong>Jeep Avenger</strong> est un SUV compact, polyvalence avant tout.</p>
      <p>Pour qui voyage <strong>uniquement sur routes goudronnées</strong> (Olbia → Cagliari, séjour hôtel Porto Cervo, excursions Tempio Pausania), la <strong>Classe A</strong> est imbattable pour le confort : suspensions souples, isolation acoustique, MBUX premium. Diesel 1.5 OM608, 116 ch, 5-6 L/100 km, autonomie réelle 800 km avec un plein. Boîte 7G-DCT qu'on n'entend pas.</p>
      <p>Pour qui veut <strong>rejoindre les plages moins desservies</strong> (Cala Brandinchi accès intérieur, Spiaggia del Principe avec piste finale, Suaraccia à Capo Coda Cavallo), le <strong>Jeep Avenger</strong> avec ses 18 cm de garde au sol et mode Sand est le choix obligé. Coffre 380 litres vs 370 de la Classe A.</p>
      <p><strong>Décision :</strong> 90% routes goudronnées, confort essentiel → Classe A. Vous voulez aussi les criques en piste sans soucis → Avenger.</p>
    `,
  },

  "jeep-avenger-vs-fiat-panda": {
    it: `
      <h2>Quando scegliere Jeep Avenger vs Fiat Panda Hybrid</h2>
      <p>Confronto tra <strong>SUV compatto (Jeep Avenger)</strong> e <strong>city car ibrida (Fiat Panda)</strong>. Stesso costruttore (Stellantis), due segmenti diversi, due esigenze diverse.</p>
      <p>La <strong>Fiat Panda Hybrid</strong> è la regina della praticità: 5 posti omologati, 225 litri di bagagliaio, mild-hybrid 12V che riduce consumi del 15-20%. Si parcheggia ovunque, anche nei vicoli stretti di Olbia centro o Porto Rotondo. Tariffa giornaliera la più bassa della flotta. Manuale 5 marce. Per coppie senza bagagli ingombranti, o per solo conducente, è la macchina più razionale.</p>
      <p>Il <strong>Jeep Avenger</strong> aggiunge: cambio automatico 6 marce, 380 litri di bagagliaio (vs 225), 18 cm di altezza da terra che ti porta a Cala Brandinchi senza problemi, comfort sospensioni superiore. Costo doppio della Panda ma per famiglia di 4 con valigie è obbligato.</p>
      <p><strong>Decisore:</strong> coppia/solo, soggiorno breve, città + spiagge asfaltate → Panda. Famiglia, soggiorno lungo, spiagge con sterrato → Avenger.</p>
    `,
    en: `
      <h2>When to choose Jeep Avenger vs Fiat Panda Hybrid</h2>
      <p>Compact SUV (Jeep Avenger) vs hybrid city car (Fiat Panda). Same maker (Stellantis), two different segments, two different needs.</p>
      <p>The <strong>Fiat Panda Hybrid</strong> is the practicality queen: 5 seats homologated, 225-litre boot, 12V mild-hybrid that cuts consumption by 15-20%. It parks anywhere, even in narrow Olbia old town or Porto Rotondo lanes. Cheapest daily rate in the fleet. 5-speed manual. For couples without bulky luggage or solo drivers, it's the most rational car.</p>
      <p>The <strong>Jeep Avenger</strong> adds: 6-speed auto, 380-litre boot (vs 225), 18 cm ground clearance that gets you to Cala Brandinchi with no issues, superior suspension comfort. Double the Panda's daily cost but mandatory for a family of 4 with luggage.</p>
      <p><strong>Decision:</strong> couple/solo, short stay, city + paved beaches → Panda. Family, long stay, dirt-road beaches → Avenger.</p>
    `,
    de: `
      <h2>Wann Jeep Avenger oder Fiat Panda Hybrid waehlen</h2>
      <p>Kompakt-SUV (Jeep Avenger) gegen Hybrid-Kleinwagen (Fiat Panda). Gleicher Hersteller (Stellantis), zwei verschiedene Segmente, zwei verschiedene Beduerfnisse.</p>
      <p>Der <strong>Fiat Panda Hybrid</strong> ist die Praktikabilitaets-Koenigin: 5 zugelassene Sitze, 225-Liter-Kofferraum, 12V Mild-Hybrid, der den Verbrauch um 15-20% senkt. Parkt ueberall, auch in den engen Gassen der Altstadt Olbia oder von Porto Rotondo. Niedrigster Tagestarif der Flotte. 5-Gang-Handschaltung. Fuer Paare ohne sperriges Gepaeck oder Einzelfahrer das rationalste Auto.</p>
      <p>Der <strong>Jeep Avenger</strong> bietet zusaetzlich: 6-Gang-Automatik, 380-Liter-Kofferraum (vs 225), 18 cm Bodenfreiheit, die Sie problemlos nach Cala Brandinchi bringt, ueberlegener Federungskomfort. Doppelter Tagespreis des Panda, aber Pflicht fuer Vierer-Familie mit Gepaeck.</p>
      <p><strong>Entscheidung:</strong> Paar/Solo, kurzer Aufenthalt, Stadt + asphaltierte Straende → Panda. Familie, langer Aufenthalt, Schotter-Straende → Avenger.</p>
    `,
    fr: `
      <h2>Quand choisir Jeep Avenger vs Fiat Panda Hybrid</h2>
      <p>SUV compact (Jeep Avenger) vs citadine hybride (Fiat Panda). Même constructeur (Stellantis), deux segments différents, deux besoins différents.</p>
      <p>La <strong>Fiat Panda Hybrid</strong> est la reine de la praticité : 5 places homologuées, coffre 225 litres, mild-hybrid 12V qui réduit la consommation de 15-20 %. Elle se gare partout, même dans les ruelles étroites du centre d'Olbia ou de Porto Rotondo. Tarif journalier le plus bas de la flotte. Manuelle 5 vitesses. Pour couples sans bagages encombrants ou conducteur seul, la voiture la plus rationnelle.</p>
      <p>Le <strong>Jeep Avenger</strong> ajoute : boîte automatique 6 vitesses, coffre 380 litres (vs 225), 18 cm de garde au sol qui vous emmène à Cala Brandinchi sans problème, confort de suspensions supérieur. Coût double de la Panda mais obligatoire pour une famille de 4 avec valises.</p>
      <p><strong>Décision :</strong> couple/seul, court séjour, ville + plages goudronnées → Panda. Famille, long séjour, plages avec piste → Avenger.</p>
    `,
  },
};

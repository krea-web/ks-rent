-- ============================================================
-- 12 - TRADUZIONI seo_beaches EN-GB / DE / FR
-- ============================================================
-- Generato dall'Agente Traduttore Beaches.
-- 20 record IT tradotti in 3 lingue (60 UPDATE totali).
-- Idempotente: UPDATE su slug.
-- Eseguire DOPO sql/03 e sql/05.
-- ============================================================

-- Aggiunge le colonne multilingua per parking_info se mancanti (idempotente).
ALTER TABLE public.seo_beaches
  ADD COLUMN IF NOT EXISTS parking_info_en text,
  ADD COLUMN IF NOT EXISTS parking_info_de text,
  ADD COLUMN IF NOT EXISTS parking_info_fr text;

BEGIN;

-- ──────────────────────────────────────────────────────────────
-- 1) spiaggia-del-principe
-- ──────────────────────────────────────────────────────────────

-- EN
UPDATE public.seo_beaches SET
  slug_en             = 'spiaggia-del-principe',
  title_en            = 'Spiaggia del Principe Beach Sardinia | KS Rent Olbia',
  h1_en               = 'Spiaggia del Principe: How to Get There and Where to Park',
  meta_description_en = 'Spiaggia del Principe: the Aga Khan bay on Costa Smeralda. 10-min dirt path from car park. Hire an SUV with KS Rent Sardinia in Olbia for easy access.',
  content_html_en     = '<p class="snippet-bait"><strong>Spiaggia del Principe is a 10-minute drive from Porto Cervo.</strong> Paid car park plus a 10-minute walk on a dirt path. KS Rent Sardinia delivers SUVs and cars to Olbia, Porto Cervo and hotels. No credit card needed.</p>

<h3>Spiaggia del Principe: The Aga Khan''s Masterpiece</h3>
<p>Known as Prince Karim Aga Khan''s favourite beach, this crescent bay is a natural masterpiece. Talcum-fine sand, pink granite rocks and a sea ranging from turquoise to emerald. It is the must-see stop on the Costa Smeralda.</p>

<h4>How to Get There by Car</h4>
<p>From the SP59 between Porto Cervo and Romazzino, follow the signs. The paid car park (5–8 EUR) sits at the start of the path. From there, it is a <strong>10-minute walk on a dirt track</strong> with a gentle descent. We recommend the <strong>Jeep Avenger</strong> for the dirt road and its generous boot for parasols and snorkelling gear.</p>

<h4>What to Know Before You Go</h4>
<ul>
  <li>Arrive <strong>by 9:00 am</strong> in July–August: the car park fills up early</li>
  <li>Mixed sand and rock seabed — bring mask and fins for outstanding snorkelling</li>
  <li>No facilities on the beach (public beach) — bring water and lunch</li>
  <li>Great for children: shallow water in the central section</li>
</ul>

<h4>Nearby Beaches</h4>
<p>With your KS Rent car you can visit on the same day: <a href="/en/romazzino">Romazzino</a> (5 min), <a href="/en/capriccioli">Capriccioli</a> (8 min) and <a href="/en/liscia-ruja">Liscia Ruja</a> (10 min). In the evening, <a href="/en/car-hire-porto-cervo">Porto Cervo</a> is just 10 minutes away for aperitifs and dinner.</p>',
  parking_info_en     = 'Paid car park (5–8 EUR) at the start of the access path; 10-minute walk on a dirt track down to the sand.'
WHERE slug = 'spiaggia-del-principe';

-- DE
UPDATE public.seo_beaches SET
  slug_de             = 'spiaggia-del-principe',
  title_de            = 'Strand Spiaggia del Principe Sardinien | KS Rent Olbia',
  h1_de               = 'Spiaggia del Principe: Anfahrt und Parkmöglichkeiten',
  meta_description_de = 'Spiaggia del Principe: die Aga-Khan-Bucht an der Costa Smeralda. 10-Min-Schotterweg vom Parkplatz. Mieten Sie einen SUV bei KS Rent Sardinien in Olbia.',
  content_html_de     = '<p class="snippet-bait"><strong>Die Spiaggia del Principe erreichen Sie in 10 Minuten mit dem Auto von Porto Cervo.</strong> Kostenpflichtiger Parkplatz plus 10-minütiger Schotterweg zu Fuß. KS Rent Sardinien liefert SUVs und Autos nach Olbia, Porto Cervo und an Hotels. Ohne Kreditkarte.</p>

<h3>Spiaggia del Principe: Das Meisterwerk des Aga Khan</h3>
<p>Bekannt als der Lieblingsstrand von Prinz Karim Aga Khan ist diese halbmondförmige Bucht ein Naturmeisterwerk. Talkumfeiner Sand, rosa Granitfelsen und ein Meer zwischen Türkis und Smaragd. Ein Pflichtstopp an der Costa Smeralda.</p>

<h4>Anfahrt mit dem Auto</h4>
<p>Von der SP59 zwischen Porto Cervo und Romazzino folgen Sie der Beschilderung. Der gebührenpflichtige Parkplatz (5–8 EUR) liegt am Anfang des Pfades. Von dort ein <strong>10-minütiger Schotterweg</strong> mit leichtem Gefälle. Wir empfehlen den <strong>Jeep Avenger</strong> für die Schotterstrecke und den geräumigen Kofferraum.</p>

<h4>Wissenswertes</h4>
<ul>
  <li>Kommen Sie im Juli–August <strong>bis 9:00 Uhr</strong>: der Parkplatz füllt sich schnell</li>
  <li>Gemischter Sand- und Felsboden — Maske und Flossen lohnen sich</li>
  <li>Keine Strandservices (freier Strand) — Wasser und Verpflegung mitbringen</li>
  <li>Ideal für Kinder: flaches Wasser im Mittelbereich</li>
</ul>

<h4>Strände in der Nähe</h4>
<p>Mit Ihrem KS Rent-Auto am selben Tag erreichbar: <a href="/de/romazzino">Romazzino</a> (5 Min), <a href="/de/capriccioli">Capriccioli</a> (8 Min) und <a href="/de/liscia-ruja">Liscia Ruja</a> (10 Min). Abends ist <a href="/de/autovermietung-porto-cervo">Porto Cervo</a> in 10 Minuten erreichbar.</p>',
  parking_info_de     = 'Gebührenpflichtiger Parkplatz (5–8 EUR) am Anfang des Zugangswegs; 10-minütiger Schotterweg zu Fuß bis zum Strand.'
WHERE slug = 'spiaggia-del-principe';

-- FR
UPDATE public.seo_beaches SET
  slug_fr             = 'spiaggia-del-principe',
  title_fr            = 'Plage Spiaggia del Principe Sardaigne | KS Rent Olbia',
  h1_fr               = 'Spiaggia del Principe : accès et stationnement',
  meta_description_fr = 'Spiaggia del Principe : la baie de l''Aga Khan en Costa Smeralda. Sentier de 10 min depuis le parking. Louez un SUV avec KS Rent Sardaigne à Olbia.',
  content_html_fr     = '<p class="snippet-bait"><strong>La Spiaggia del Principe est à 10 minutes en voiture de Porto Cervo.</strong> Parking payant puis sentier de 10 minutes à pied. KS Rent Sardaigne livre SUV et voitures à Olbia, Porto Cervo et hôtels. Sans carte de crédit.</p>

<h3>Spiaggia del Principe : le chef-d''œuvre de l''Aga Khan</h3>
<p>Connue comme la plage préférée du Prince Karim Aga Khan, cette baie en croissant est un chef-d''œuvre naturel. Sable fin comme du talc, rochers de granit rose et mer aux nuances turquoise-émeraude. Une étape incontournable en Costa Smeralda.</p>

<h4>Comment y arriver en voiture</h4>
<p>Depuis la SP59 entre Porto Cervo et Romazzino, suivez les panneaux. Le parking payant (5–8 EUR) se trouve à l''entrée du sentier. De là, <strong>10 minutes de marche sur piste</strong> en légère descente. Nous recommandons le <strong>Jeep Avenger</strong> pour la piste et son coffre généreux.</p>

<h4>Bon à savoir</h4>
<ul>
  <li>Arrivez <strong>avant 9h</strong> en juillet–août : le parking se remplit vite</li>
  <li>Fond mixte sable et rochers — masque et palmes recommandés</li>
  <li>Aucun service sur la plage (plage libre) — apportez eau et déjeuner</li>
  <li>Parfait pour les enfants : eau peu profonde au centre</li>
</ul>

<h4>Plages à proximité</h4>
<p>Avec votre voiture KS Rent, à visiter dans la journée : <a href="/fr/romazzino">Romazzino</a> (5 min), <a href="/fr/capriccioli">Capriccioli</a> (8 min) et <a href="/fr/liscia-ruja">Liscia Ruja</a> (10 min). Le soir, <a href="/fr/location-voiture-porto-cervo">Porto Cervo</a> est à 10 minutes pour l''apéritif et le dîner.</p>',
  parking_info_fr     = 'Parking payant (5–8 EUR) au début du sentier d''accès ; 10 minutes de marche sur piste jusqu''à la plage.'
WHERE slug = 'spiaggia-del-principe';

-- ──────────────────────────────────────────────────────────────
-- 2) liscia-ruja
-- ──────────────────────────────────────────────────────────────

UPDATE public.seo_beaches SET
  slug_en             = 'liscia-ruja',
  title_en            = 'Liscia Ruja Long Beach Sardinia | Car Hire KS Rent',
  h1_en               = 'Liscia Ruja: The Costa Smeralda Long Beach by Car',
  meta_description_en = 'Liscia Ruja: the largest beach on Costa Smeralda. Golden sand, easy dirt road and a spacious car park. Hire an SUV or city car with KS Rent from Olbia.',
  content_html_en     = '<p class="snippet-bait"><strong>Liscia Ruja is the largest beach on the Costa Smeralda: over 500 metres of golden sand.</strong> Wide unpaved car park right behind the beach. KS Rent Sardinia delivers cars to Arzachena and Porto Cervo. No credit card required.</p>

<h3>Liscia Ruja: Sardinia''s Long Beach</h3>
<p>Liscia Ruja is the largest and most spacious beach on the entire Costa Smeralda. Set in Mediterranean scrub and sheltered by a juniper grove, it boasts golden-pink sand. The perfect spot for long shoreline strolls and full days between beach clubs and free stretches.</p>

<h4>How to Get There</h4>
<p>From <a href="/en/car-hire-arzachena">Arzachena</a> follow the SP59 towards Porto Cervo. The access dirt road is easy and suitable for all cars. The <strong>paid unpaved car park</strong> is wide and located right behind the beach — easy access even for large vehicles. Distance from Olbia: <strong>35 km, 35 minutes</strong>.</p>

<h4>Practical Tips</h4>
<ul>
  <li>Exclusive beach clubs to the south, free beach to the north</li>
  <li>Coarse-grain sand: does not stick to the skin or burn</li>
  <li>Shallow water for the first 30 metres — ideal for children</li>
  <li>Bar and restaurant available at the beach club</li>
</ul>

<h4>Beaches in the Same Area</h4>
<p><a href="/en/spiaggia-del-principe">Spiaggia del Principe</a> (15 min), <a href="/en/capriccioli">Capriccioli</a> (10 min) and <a href="/en/romazzino">Romazzino</a> (8 min). Recommended car: <strong>Audi RS3</strong> or <strong>Mercedes A-Class</strong> for the paved road to the car park.</p>',
  parking_info_en     = 'Wide paid unpaved car park directly behind the beach, easily accessible by any vehicle.'
WHERE slug = 'liscia-ruja';

UPDATE public.seo_beaches SET
  slug_de             = 'liscia-ruja',
  title_de            = 'Strand Liscia Ruja Sardinien | Autovermietung KS Rent',
  h1_de               = 'Liscia Ruja: Der Long Beach der Costa Smeralda',
  meta_description_de = 'Liscia Ruja: der größte Strand der Costa Smeralda. Goldener Sand, einfache Schotterstraße und großer Parkplatz. SUV oder Kleinwagen bei KS Rent ab Olbia.',
  content_html_de     = '<p class="snippet-bait"><strong>Liscia Ruja ist der größte Strand der Costa Smeralda: über 500 Meter goldener Sand.</strong> Großer Schotterparkplatz direkt hinter dem Strand. KS Rent Sardinien liefert Autos nach Arzachena und Porto Cervo. Ohne Kreditkarte.</p>

<h3>Liscia Ruja: Der Long Beach Sardiniens</h3>
<p>Liscia Ruja ist der größte und geräumigste Strand der gesamten Costa Smeralda. Eingebettet in mediterrane Macchia und von einem Wacholderhain geschützt, glänzt sein Sand goldrosa. Der perfekte Ort für lange Strandspaziergänge zwischen Strandbädern und freien Abschnitten.</p>

<h4>Anfahrt</h4>
<p>Von <a href="/de/autovermietung-arzachena">Arzachena</a> folgen Sie der SP59 in Richtung Porto Cervo. Die Zufahrtsstraße aus Schotter ist einfach und für alle Autos geeignet. Der <strong>kostenpflichtige Schotterparkplatz</strong> liegt direkt hinter dem Strand. Entfernung von Olbia: <strong>35 km, 35 Minuten</strong>.</p>

<h4>Praktische Tipps</h4>
<ul>
  <li>Exklusive Strandbäder im Süden, freier Strand im Norden</li>
  <li>Grobkörniger Sand: klebt nicht und wird nicht heiß</li>
  <li>Flaches Wasser für die ersten 30 Meter — ideal für Kinder</li>
  <li>Bar und Restaurant im Strandbad verfügbar</li>
</ul>

<h4>Strände in der Umgebung</h4>
<p><a href="/de/spiaggia-del-principe">Spiaggia del Principe</a> (15 Min), <a href="/de/capriccioli">Capriccioli</a> (10 Min) und <a href="/de/romazzino">Romazzino</a> (8 Min). Empfohlenes Auto: <strong>Audi RS3</strong> oder <strong>Mercedes A-Klasse</strong> für die asphaltierte Strecke.</p>',
  parking_info_de     = 'Großer kostenpflichtiger Schotterparkplatz direkt hinter dem Strand, leicht zugänglich auch für große Fahrzeuge.'
WHERE slug = 'liscia-ruja';

UPDATE public.seo_beaches SET
  slug_fr             = 'liscia-ruja',
  title_fr            = 'Plage Liscia Ruja Sardaigne | Location KS Rent',
  h1_fr               = 'Liscia Ruja : la Long Beach de la Costa Smeralda',
  meta_description_fr = 'Liscia Ruja : la plus grande plage de la Costa Smeralda. Sable doré, piste facile et grand parking. Louez SUV ou citadine avec KS Rent depuis Olbia.',
  content_html_fr     = '<p class="snippet-bait"><strong>Liscia Ruja est la plus grande plage de la Costa Smeralda : plus de 500 mètres de sable doré.</strong> Vaste parking en terre juste derrière la plage. KS Rent Sardaigne livre les voitures à Arzachena et Porto Cervo. Sans carte de crédit.</p>

<h3>Liscia Ruja : la Long Beach de la Sardaigne</h3>
<p>Liscia Ruja est la plage la plus grande et la plus spacieuse de toute la Costa Smeralda. Plongée dans le maquis méditerranéen et protégée par un bois de genévriers, elle offre un sable aux reflets dorés et rosés. L''endroit idéal pour de longues promenades.</p>

<h4>Comment y arriver</h4>
<p>Depuis <a href="/fr/location-voiture-arzachena">Arzachena</a>, suivez la SP59 vers Porto Cervo. La piste d''accès est facile et adaptée à toutes les voitures. Le <strong>parking payant en terre</strong> est vaste, juste derrière la plage. Distance d''Olbia : <strong>35 km, 35 minutes</strong>.</p>

<h4>Conseils pratiques</h4>
<ul>
  <li>Établissements exclusifs au sud, plage libre au nord</li>
  <li>Sable à gros grain : ne colle pas à la peau et ne brûle pas</li>
  <li>Eau peu profonde sur les 30 premiers mètres — idéal pour les enfants</li>
  <li>Bar et restaurant disponibles dans l''établissement</li>
</ul>

<h4>Plages de la même zone</h4>
<p><a href="/fr/spiaggia-del-principe">Spiaggia del Principe</a> (15 min), <a href="/fr/capriccioli">Capriccioli</a> (10 min) et <a href="/fr/romazzino">Romazzino</a> (8 min). Voiture conseillée : <strong>Audi RS3</strong> ou <strong>Mercedes Classe A</strong>.</p>',
  parking_info_fr     = 'Vaste parking payant en terre juste derrière la plage, accessible à tous les véhicules.'
WHERE slug = 'liscia-ruja';

-- ──────────────────────────────────────────────────────────────
-- 3) cala-brandinchi
-- ──────────────────────────────────────────────────────────────

UPDATE public.seo_beaches SET
  slug_en             = 'cala-brandinchi',
  title_en            = 'Cala Brandinchi Beach Sardinia | KS Rent Car Hire',
  h1_en               = 'Cala Brandinchi: The "Little Tahiti" with Capped Entry',
  meta_description_en = 'Cala Brandinchi: capped summer entry, book online. Attended car park. Hire a Jeep Avenger with KS Rent for the dirt track from San Teodoro.',
  content_html_en     = '<p class="snippet-bait"><strong>Cala Brandinchi has capped entry in summer: book online.</strong> Attended paid car park. Dirt access road — Jeep Avenger recommended. KS Rent Sardinia delivers cars to San Teodoro in 20 minutes from Olbia.</p>

<h3>Cala Brandinchi: Sardinia''s Little Tahiti</h3>
<p>It is no coincidence that this cove is called "Little Tahiti". Talcum-white sand, shallow and transparent water like a natural pool. Behind it, a dense pine forest offers shade in the hottest hours. A paradise for families with children.</p>

<h4>How to Get There and Entry</h4>
<ul>
  <li>From <a href="/en/car-hire-san-teodoro">San Teodoro</a>: 10-minute drive, last stretch on a dirt road</li>
  <li><strong>Capped entry</strong> in July and August — book online on the council website</li>
  <li>Attended paid car park at the entrance</li>
  <li>The car park fills up by <strong>9:30 am</strong> in peak season — leave early</li>
</ul>

<h4>Recommended Car</h4>
<p>The <strong>Jeep Avenger</strong> is the best choice: dirt road and large boot for beach gear. The Fiat Panda makes it too but with more care. From Olbia to Cala Brandinchi: <strong>30 km, 30 minutes</strong>.</p>

<h4>Nearby Alternatives</h4>
<p>If Brandinchi is full: <a href="/en/lu-impostu">Lu Impostu</a> (3 min, less crowded), <a href="/en/la-cinta">La Cinta</a> (10 min, always space) and <a href="/en/car-hire-capo-coda-cavallo">Capo Coda Cavallo</a> (8 min, Tavolara views).</p>',
  parking_info_en     = 'Attended paid car park at the entrance; capped daily access in July–August — pre-book online via the municipality.'
WHERE slug = 'cala-brandinchi';

UPDATE public.seo_beaches SET
  slug_de             = 'cala-brandinchi',
  title_de            = 'Strand Cala Brandinchi Sardinien | KS Rent Autovermietung',
  h1_de               = 'Cala Brandinchi: Das kleine Tahiti mit Zugangsbeschränkung',
  meta_description_de = 'Cala Brandinchi: Zugangsbeschränkung im Sommer, online buchen. Bewachter Parkplatz. Jeep Avenger bei KS Rent für die Schotterpiste ab San Teodoro.',
  content_html_de     = '<p class="snippet-bait"><strong>Cala Brandinchi hat im Sommer eine Zugangsbeschränkung: buchen Sie online.</strong> Bewachter gebührenpflichtiger Parkplatz. Schotterzufahrt — Jeep Avenger empfohlen. KS Rent Sardinien liefert Autos in 20 Min nach San Teodoro.</p>

<h3>Cala Brandinchi: Das kleine Tahiti Sardiniens</h3>
<p>Diese Bucht wird nicht ohne Grund "kleines Tahiti" genannt. Talkumweißer Sand, flaches und transparentes Wasser wie ein natürliches Schwimmbecken. Dahinter spendet ein dichter Pinienwald Schatten. Ein Paradies für Familien mit Kindern.</p>

<h4>Anfahrt und Zugang</h4>
<ul>
  <li>Von <a href="/de/autovermietung-san-teodoro">San Teodoro</a>: 10 Min Fahrt, letzter Abschnitt auf Schotter</li>
  <li><strong>Zugangsbeschränkung</strong> im Juli und August — online auf der Gemeindewebsite buchen</li>
  <li>Bewachter Parkplatz am Eingang</li>
  <li>In der Hochsaison ist der Parkplatz bis <strong>9:30 Uhr</strong> voll</li>
</ul>

<h4>Empfohlenes Auto</h4>
<p>Der <strong>Jeep Avenger</strong> ist die beste Wahl: Schotter und großer Kofferraum. Von Olbia nach Cala Brandinchi: <strong>30 km, 30 Minuten</strong>.</p>

<h4>Alternativen in der Nähe</h4>
<p>Falls voll: <a href="/de/lu-impostu">Lu Impostu</a> (3 Min, weniger überfüllt), <a href="/de/la-cinta">La Cinta</a> (10 Min) und <a href="/de/autovermietung-capo-coda-cavallo">Capo Coda Cavallo</a> (8 Min).</p>',
  parking_info_de     = 'Bewachter gebührenpflichtiger Parkplatz am Eingang; Zugangsbeschränkung im Juli–August — online über die Gemeinde buchen.'
WHERE slug = 'cala-brandinchi';

UPDATE public.seo_beaches SET
  slug_fr             = 'cala-brandinchi',
  title_fr            = 'Plage Cala Brandinchi Sardaigne | Location KS Rent',
  h1_fr               = 'Cala Brandinchi : la Petite Tahiti à accès limité',
  meta_description_fr = 'Cala Brandinchi : accès limité en été, réservez en ligne. Parking surveillé. Louez un Jeep Avenger avec KS Rent pour la piste depuis San Teodoro.',
  content_html_fr     = '<p class="snippet-bait"><strong>Cala Brandinchi a un accès limité en été : réservez en ligne.</strong> Parking surveillé payant. Accès en piste — Jeep Avenger recommandé. KS Rent Sardaigne livre les voitures à San Teodoro en 20 min depuis Olbia.</p>

<h3>Cala Brandinchi : la Petite Tahiti de la Sardaigne</h3>
<p>Ce n''est pas un hasard si cette crique est appelée "Petite Tahiti". Sable blanc comme du talc, fond peu profond et transparent comme une piscine naturelle. Derrière, une pinède dense offre de l''ombre. Un paradis pour les familles.</p>

<h4>Accès et entrée</h4>
<ul>
  <li>Depuis <a href="/fr/location-voiture-san-teodoro">San Teodoro</a> : 10 min de route, dernier tronçon en piste</li>
  <li><strong>Accès contingenté</strong> en juillet–août — réservez en ligne sur le site de la commune</li>
  <li>Parking surveillé payant à l''entrée</li>
  <li>En haute saison, parking plein avant <strong>9h30</strong></li>
</ul>

<h4>Voiture conseillée</h4>
<p>Le <strong>Jeep Avenger</strong> est le meilleur choix : piste et grand coffre. D''Olbia à Cala Brandinchi : <strong>30 km, 30 minutes</strong>.</p>

<h4>Alternatives proches</h4>
<p>Si Brandinchi est pleine : <a href="/fr/lu-impostu">Lu Impostu</a> (3 min), <a href="/fr/la-cinta">La Cinta</a> (10 min) et <a href="/fr/location-voiture-capo-coda-cavallo">Capo Coda Cavallo</a> (8 min).</p>',
  parking_info_fr     = 'Parking surveillé payant à l''entrée ; accès limité en juillet–août — réservation en ligne via la commune.'
WHERE slug = 'cala-brandinchi';

-- ──────────────────────────────────────────────────────────────
-- 4) la-cinta
-- ──────────────────────────────────────────────────────────────

UPDATE public.seo_beaches SET
  slug_en             = 'la-cinta',
  title_en            = 'La Cinta Beach San Teodoro Sardinia | KS Rent',
  h1_en               = 'La Cinta Beach: 3 km of White Sand in San Teodoro',
  meta_description_en = 'La Cinta: 3 km of white sand with pink flamingos, kitesurfing and kiosks. Paid car park at the entrance. 2 min from the centre with a KS Rent car.',
  content_html_en     = '<p class="snippet-bait"><strong>La Cinta is the largest beach in San Teodoro: 3 km of white sand with pink flamingos.</strong> Paid car park at the entrance. 2 minutes from the town centre by car. KS Rent Sardinia delivers cars to San Teodoro.</p>

<h3>La Cinta: 3 Kilometres of Sand and Flamingos</h3>
<p>An expanse of over 3 km of pure white sand separating the turquoise sea from the lagoon with pink flamingos. Kiosks, kitesurf schools, dinghy hire and shallow water: the heart of San Teodoro''s summer.</p>

<h4>How to Get There</h4>
<p><strong>2 minutes from the centre of <a href="/en/car-hire-san-teodoro">San Teodoro</a></strong> by car. Paid car park at the main entrance (Via La Cinta) — dedicated areas for disabled and motorbikes. Distance from Olbia: <strong>25 km, 22 minutes</strong>.</p>

<h4>Tips</h4>
<ul>
  <li>South end: kiosks, sunbeds, social vibe — ideal for younger crowds</li>
  <li>North end: quieter, free beach, flamingos</li>
  <li>Shallow water for 50+ metres — perfect with small children</li>
  <li>Kitesurfing in the northern area when the wind blows</li>
</ul>

<h4>Other San Teodoro Beaches</h4>
<p><a href="/en/cala-brandinchi">Cala Brandinchi</a> (10 min), <a href="/en/lu-impostu">Lu Impostu</a> (8 min) and <a href="/en/car-hire-capo-coda-cavallo">Capo Coda Cavallo</a> (15 min). Recommended car: <strong>Fiat Panda</strong> for La Cinta (paved road), <strong>Jeep Avenger</strong> for the dirt-road beaches.</p>',
  parking_info_en     = 'Paid car park at the main entrance on Via La Cinta with dedicated bays for disabled visitors and motorbikes.'
WHERE slug = 'la-cinta';

UPDATE public.seo_beaches SET
  slug_de             = 'la-cinta',
  title_de            = 'Strand La Cinta San Teodoro Sardinien | KS Rent',
  h1_de               = 'Strand La Cinta: 3 km weißer Sand in San Teodoro',
  meta_description_de = 'La Cinta: 3 km weißer Sand mit Flamingos, Kitesurfen und Kiosken. Gebührenpflichtiger Parkplatz am Eingang. 2 Min vom Zentrum mit einem KS Rent-Auto.',
  content_html_de     = '<p class="snippet-bait"><strong>La Cinta ist der größte Strand von San Teodoro: 3 km weißer Sand mit rosa Flamingos.</strong> Gebührenpflichtiger Parkplatz am Eingang. 2 Min vom Zentrum mit dem Auto. KS Rent Sardinien liefert Autos nach San Teodoro.</p>

<h3>La Cinta: 3 Kilometer Sand und Flamingos</h3>
<p>Über 3 km strahlend weißer Sand trennen das türkisfarbene Meer von der Lagune mit rosa Flamingos. Kioske, Kitesurf-Schulen, Schlauchbootverleih und flaches Wasser: das Herz des Sommers in San Teodoro.</p>

<h4>Anfahrt</h4>
<p><strong>2 Minuten vom Zentrum von <a href="/de/autovermietung-san-teodoro">San Teodoro</a></strong> mit dem Auto. Gebührenpflichtiger Parkplatz am Haupteingang (Via La Cinta). Entfernung von Olbia: <strong>25 km, 22 Minuten</strong>.</p>

<h4>Tipps</h4>
<ul>
  <li>Südteil: Kioske, Liegen, Atmosphäre — ideal für Jüngere</li>
  <li>Nordteil: ruhiger, freier Strand, Flamingos</li>
  <li>Flaches Wasser über 50+ Meter — perfekt mit Kleinkindern</li>
  <li>Kitesurfen im Norden bei Wind</li>
</ul>

<h4>Weitere Strände in San Teodoro</h4>
<p><a href="/de/cala-brandinchi">Cala Brandinchi</a> (10 Min), <a href="/de/lu-impostu">Lu Impostu</a> (8 Min) und <a href="/de/autovermietung-capo-coda-cavallo">Capo Coda Cavallo</a> (15 Min). Empfohlen: <strong>Fiat Panda</strong> für La Cinta, <strong>Jeep Avenger</strong> für Schotterstrände.</p>',
  parking_info_de     = 'Gebührenpflichtiger Parkplatz am Haupteingang in der Via La Cinta mit reservierten Plätzen für Behinderte und Motorräder.'
WHERE slug = 'la-cinta';

UPDATE public.seo_beaches SET
  slug_fr             = 'la-cinta',
  title_fr            = 'Plage La Cinta San Teodoro Sardaigne | KS Rent',
  h1_fr               = 'Plage La Cinta : 3 km de sable blanc à San Teodoro',
  meta_description_fr = 'La Cinta : 3 km de sable blanc avec flamants roses, kitesurf et kiosques. Parking payant à l''entrée. 2 min du centre avec une voiture KS Rent.',
  content_html_fr     = '<p class="snippet-bait"><strong>La Cinta est la plus grande plage de San Teodoro : 3 km de sable blanc avec flamants roses.</strong> Parking payant à l''entrée. À 2 minutes du centre en voiture. KS Rent Sardaigne livre les voitures à San Teodoro.</p>

<h3>La Cinta : 3 kilomètres de sable et flamants roses</h3>
<p>Une étendue de plus de 3 km de sable immaculé séparant la mer turquoise du lagon aux flamants roses. Kiosques, écoles de kitesurf, location de pneumatiques et fond peu profond : le cœur de l''été à San Teodoro.</p>

<h4>Comment y arriver</h4>
<p>À <strong>2 minutes du centre de <a href="/fr/location-voiture-san-teodoro">San Teodoro</a></strong> en voiture. Parking payant à l''entrée principale (Via La Cinta). Distance d''Olbia : <strong>25 km, 22 minutes</strong>.</p>

<h4>Conseils</h4>
<ul>
  <li>Côté sud : kiosques, transats, ambiance — idéal pour les jeunes</li>
  <li>Côté nord : plus calme, plage libre, flamants roses</li>
  <li>Eau peu profonde sur 50+ mètres — parfait avec de jeunes enfants</li>
  <li>Kitesurf au nord les jours de vent</li>
</ul>

<h4>Autres plages de San Teodoro</h4>
<p><a href="/fr/cala-brandinchi">Cala Brandinchi</a> (10 min), <a href="/fr/lu-impostu">Lu Impostu</a> (8 min) et <a href="/fr/location-voiture-capo-coda-cavallo">Capo Coda Cavallo</a> (15 min). Voiture conseillée : <strong>Fiat Panda</strong> pour La Cinta, <strong>Jeep Avenger</strong> pour les plages en piste.</p>',
  parking_info_fr     = 'Parking payant à l''entrée principale via La Cinta, avec emplacements réservés aux personnes handicapées et aux motos.'
WHERE slug = 'la-cinta';

-- ──────────────────────────────────────────────────────────────
-- 5) lu-impostu
-- ──────────────────────────────────────────────────────────────

UPDATE public.seo_beaches SET
  slug_en             = 'lu-impostu',
  title_en            = 'Lu Impostu Beach Sardinia | Car Hire KS Rent',
  h1_en               = 'Lu Impostu: The Quiet Alternative to Cala Brandinchi',
  meta_description_en = 'Lu Impostu: 1 km of fine sand among sea lilies and oleanders, less crowded than Brandinchi. Attended car park. Hire a car with KS Rent from Olbia or Puntaldia.',
  content_html_en     = '<p class="snippet-bait"><strong>Lu Impostu is the less crowded alternative to Cala Brandinchi: 1 km of fine sand among wild lilies and oleanders.</strong> Attended paid car park. KS Rent Sardinia delivers cars from Olbia and Puntaldia.</p>

<h3>Lu Impostu: Natural Elegance Next to Brandinchi</h3>
<p>Twin sister of nearby Cala Brandinchi, Lu Impostu is a kilometre of fine sand framed by wild lilies, mimosas and oleanders. Often less crowded, it offers a relaxed atmosphere and Caribbean colours.</p>

<h4>How to Get There</h4>
<p>From <a href="/en/car-hire-puntaldia">Puntaldia</a>: 5 minutes. From <a href="/en/car-hire-san-teodoro">San Teodoro</a>: 8 minutes. Attended paid car park on the north and south sides. Wooden walkway access. Distance from Olbia: <strong>28 km, 25 minutes</strong>.</p>

<h4>Practical Tips</h4>
<ul>
  <li>Less known than Brandinchi = more space even in peak season</li>
  <li>Shallow, sandy seabed, ideal for children</li>
  <li>Bar and services at the car park</li>
  <li>If closed for the Mistral wind, try <a href="/en/la-cinta">La Cinta</a> (sheltered)</li>
</ul>

<h4>Recommended Car</h4>
<p>The <strong>Fiat Panda</strong> is enough (paved road to the car park). Choose the <strong>Jeep Avenger</strong> if you want to combine <a href="/en/cala-brandinchi">Brandinchi</a> and <a href="/en/car-hire-capo-coda-cavallo">Capo Coda Cavallo</a> on dirt tracks the same day.</p>',
  parking_info_en     = 'Attended paid car parks on both the north and south access points, with wooden walkways to the sand.'
WHERE slug = 'lu-impostu';

UPDATE public.seo_beaches SET
  slug_de             = 'lu-impostu',
  title_de            = 'Strand Lu Impostu Sardinien | Autovermietung KS Rent',
  h1_de               = 'Lu Impostu: Die ruhige Alternative zu Cala Brandinchi',
  meta_description_de = 'Lu Impostu: 1 km feiner Sand zwischen Lilien und Oleander, weniger überfüllt als Brandinchi. Bewachter Parkplatz. Auto bei KS Rent ab Olbia oder Puntaldia.',
  content_html_de     = '<p class="snippet-bait"><strong>Lu Impostu ist die ruhigere Alternative zu Cala Brandinchi: 1 km feiner Sand zwischen wilden Lilien und Oleander.</strong> Bewachter gebührenpflichtiger Parkplatz. KS Rent Sardinien liefert Autos ab Olbia und Puntaldia.</p>

<h3>Lu Impostu: Natürliche Eleganz neben Brandinchi</h3>
<p>Zwillingsschwester der nahen Cala Brandinchi, ist Lu Impostu ein Kilometer feiner Sand, eingerahmt von wilden Lilien, Mimosen und Oleander. Oft weniger überfüllt, mit entspannter Atmosphäre und karibischen Farben.</p>

<h4>Anfahrt</h4>
<p>Von <a href="/de/autovermietung-puntaldia">Puntaldia</a>: 5 Min. Von <a href="/de/autovermietung-san-teodoro">San Teodoro</a>: 8 Min. Bewachter gebührenpflichtiger Parkplatz am Nord- und Südzugang. Holzstege zum Strand. Entfernung von Olbia: <strong>28 km, 25 Min</strong>.</p>

<h4>Praktische Tipps</h4>
<ul>
  <li>Weniger bekannt als Brandinchi = mehr Platz</li>
  <li>Flacher, sandiger Boden, ideal für Kinder</li>
  <li>Bar und Services am Parkplatz</li>
  <li>Bei Maestrale-Wind: <a href="/de/la-cinta">La Cinta</a> (geschützt)</li>
</ul>

<h4>Empfohlenes Auto</h4>
<p>Der <strong>Fiat Panda</strong> reicht aus (asphaltierte Straße). Der <strong>Jeep Avenger</strong>, wenn Sie auch <a href="/de/cala-brandinchi">Brandinchi</a> und <a href="/de/autovermietung-capo-coda-cavallo">Capo Coda Cavallo</a> auf Schotter erkunden.</p>',
  parking_info_de     = 'Bewachte gebührenpflichtige Parkplätze am Nord- und Südzugang mit Holzstegen zum Strand.'
WHERE slug = 'lu-impostu';

UPDATE public.seo_beaches SET
  slug_fr             = 'lu-impostu',
  title_fr            = 'Plage Lu Impostu Sardaigne | Location KS Rent',
  h1_fr               = 'Lu Impostu : l''alternative tranquille à Cala Brandinchi',
  meta_description_fr = 'Lu Impostu : 1 km de sable fin entre lis et lauriers-roses, moins fréquentée que Brandinchi. Parking surveillé. Louez avec KS Rent depuis Olbia ou Puntaldia.',
  content_html_fr     = '<p class="snippet-bait"><strong>Lu Impostu est l''alternative moins fréquentée à Cala Brandinchi : 1 km de sable fin parmi les lis sauvages et lauriers-roses.</strong> Parking surveillé payant. KS Rent Sardaigne livre les voitures depuis Olbia et Puntaldia.</p>

<h3>Lu Impostu : élégance naturelle à côté de Brandinchi</h3>
<p>Sœur jumelle de Cala Brandinchi, Lu Impostu est un kilomètre de sable fin encadré par les lis sauvages, mimosas et lauriers-roses. Souvent moins fréquentée, elle offre une atmosphère détendue et des couleurs caribéennes.</p>

<h4>Comment y arriver</h4>
<p>Depuis <a href="/fr/location-voiture-puntaldia">Puntaldia</a> : 5 min. Depuis <a href="/fr/location-voiture-san-teodoro">San Teodoro</a> : 8 min. Parking surveillé payant aux entrées nord et sud. Passerelles en bois. Distance d''Olbia : <strong>28 km, 25 min</strong>.</p>

<h4>Conseils pratiques</h4>
<ul>
  <li>Moins connue que Brandinchi = plus d''espace en haute saison</li>
  <li>Fond sableux peu profond, idéal pour les enfants</li>
  <li>Bar et services au parking</li>
  <li>Si Mistral, essayez <a href="/fr/la-cinta">La Cinta</a> (abritée)</li>
</ul>

<h4>Voiture conseillée</h4>
<p>La <strong>Fiat Panda</strong> suffit (route asphaltée). Le <strong>Jeep Avenger</strong> si vous explorez aussi <a href="/fr/cala-brandinchi">Brandinchi</a> et <a href="/fr/location-voiture-capo-coda-cavallo">Capo Coda Cavallo</a> en piste.</p>',
  parking_info_fr     = 'Parkings surveillés payants aux accès nord et sud, avec passerelles en bois jusqu''au sable.'
WHERE slug = 'lu-impostu';

-- ──────────────────────────────────────────────────────────────
-- 6) capriccioli
-- ──────────────────────────────────────────────────────────────

UPDATE public.seo_beaches SET
  slug_en             = 'capriccioli',
  title_en            = 'Capriccioli Beach Costa Smeralda Sardinia | KS Rent',
  h1_en               = 'Capriccioli Beach: Two Coves and the Best Snorkelling',
  meta_description_en = 'Capriccioli: two coves among pink granite and Mediterranean scrub. Outstanding snorkelling. Limited car park — arrive early with KS Rent Sardinia.',
  content_html_en     = '<p class="snippet-bait"><strong>Capriccioli offers the best snorkelling on the Costa Smeralda: two coves among pink granite and posidonia.</strong> Very limited paid car park — arrive by 9:00 in summer. KS Rent Sardinia delivers cars to Porto Cervo.</p>

<h3>Capriccioli: The Granite Gem with Two Coves</h3>
<p>The name in Gallurese dialect means "little goats", referring to the rounded rocks that split the bay into two small beaches. Mediterranean scrub down to the water and seabeds rich with fish — a natural aquarium for snorkelling.</p>

<h4>How to Get There</h4>
<p>From the SP59 between <a href="/en/car-hire-porto-cervo">Porto Cervo</a> and Romazzino: 8 minutes. Paid car park <strong>very limited</strong>. In July–August arrive by <strong>9:00 am</strong> or you will not find a spot. Distance from Olbia: <strong>32 km, 35 minutes</strong>.</p>

<h4>The Two Coves</h4>
<ul>
  <li><strong>Capriccioli East:</strong> larger, sandy seabed with posidonia, outstanding snorkelling</li>
  <li><strong>Capriccioli West:</strong> more intimate, pink granite rocks, crystal-clear water</li>
  <li>Bring mask and fins: groupers, sea breams and octopuses among the rocks</li>
  <li>Free beach, no facilities — bring water and a packed lunch</li>
</ul>

<h4>Nearby Beaches</h4>
<p><a href="/en/romazzino">Romazzino</a> (3 min), <a href="/en/spiaggia-del-principe">Spiaggia del Principe</a> (10 min), <a href="/en/liscia-ruja">Liscia Ruja</a> (8 min). Recommended car: <strong>BMW M2</strong> or <strong>Audi RS3</strong> for the scenic paved road.</p>',
  parking_info_en     = 'Very limited paid car park alongside the access road; arrive by 9:00 am in July–August.'
WHERE slug = 'capriccioli';

UPDATE public.seo_beaches SET
  slug_de             = 'capriccioli',
  title_de            = 'Strand Capriccioli Costa Smeralda Sardinien | KS Rent',
  h1_de               = 'Strand Capriccioli: Zwei Buchten und bestes Schnorcheln',
  meta_description_de = 'Capriccioli: zwei Buchten zwischen rosa Granit und Macchia. Hervorragendes Schnorcheln. Sehr begrenzter Parkplatz — früh anreisen mit KS Rent.',
  content_html_de     = '<p class="snippet-bait"><strong>Capriccioli bietet das beste Schnorcheln der Costa Smeralda: zwei Buchten zwischen rosa Granit und Posidonia.</strong> Sehr begrenzter gebührenpflichtiger Parkplatz — bis 9:00 Uhr anreisen. KS Rent Sardinien liefert Autos nach Porto Cervo.</p>

<h3>Capriccioli: Das Granitkleinod mit zwei Buchten</h3>
<p>Der Name bedeutet im gallurischen Dialekt "Zicklein" wegen der runden Felsen, die die Bucht teilen. Mediterrane Macchia bis ins Wasser und fischreiche Böden — ein natürliches Aquarium.</p>

<h4>Anfahrt</h4>
<p>Von der SP59 zwischen <a href="/de/autovermietung-porto-cervo">Porto Cervo</a> und Romazzino: 8 Min. Parkplatz <strong>sehr begrenzt</strong>. Im Juli–August bis <strong>9:00 Uhr</strong> anreisen. Entfernung von Olbia: <strong>32 km, 35 Min</strong>.</p>

<h4>Die zwei Buchten</h4>
<ul>
  <li><strong>Capriccioli Ost:</strong> größer, Sandboden mit Posidonia, perfektes Schnorcheln</li>
  <li><strong>Capriccioli West:</strong> intimer, rosa Granit, klares Wasser</li>
  <li>Maske und Flossen mitbringen: Zackenbarsche, Brassen, Kraken</li>
  <li>Freier Strand, kein Service — Wasser und Verpflegung mitbringen</li>
</ul>

<h4>Strände in der Nähe</h4>
<p><a href="/de/romazzino">Romazzino</a> (3 Min), <a href="/de/spiaggia-del-principe">Spiaggia del Principe</a> (10 Min), <a href="/de/liscia-ruja">Liscia Ruja</a> (8 Min). Empfohlen: <strong>BMW M2</strong> oder <strong>Audi RS3</strong> für die Panoramastraße.</p>',
  parking_info_de     = 'Sehr begrenzter gebührenpflichtiger Parkplatz entlang der Zufahrtsstraße; im Juli–August bis 9:00 Uhr anreisen.'
WHERE slug = 'capriccioli';

UPDATE public.seo_beaches SET
  slug_fr             = 'capriccioli',
  title_fr            = 'Plage Capriccioli Costa Smeralda Sardaigne | KS Rent',
  h1_fr               = 'Plage Capriccioli : deux criques et meilleur snorkeling',
  meta_description_fr = 'Capriccioli : deux criques entre granit rose et maquis. Snorkeling exceptionnel. Parking très limité — arrivez tôt avec KS Rent Sardaigne.',
  content_html_fr     = '<p class="snippet-bait"><strong>Capriccioli offre le meilleur snorkeling de la Costa Smeralda : deux criques entre granit rose et posidonie.</strong> Parking payant très limité — arrivez avant 9h en été. KS Rent Sardaigne livre les voitures à Porto Cervo.</p>

<h3>Capriccioli : la perle de granit aux deux criques</h3>
<p>Le nom signifie "chevreaux" en dialecte gallurais, en référence aux rochers arrondis qui divisent la baie. Maquis méditerranéen jusqu''à l''eau et fonds très poissonneux — un aquarium naturel.</p>

<h4>Comment y arriver</h4>
<p>Depuis la SP59 entre <a href="/fr/location-voiture-porto-cervo">Porto Cervo</a> et Romazzino : 8 min. Parking <strong>très limité</strong>. En juillet–août, arrivez avant <strong>9h</strong>. Distance d''Olbia : <strong>32 km, 35 min</strong>.</p>

<h4>Les deux criques</h4>
<ul>
  <li><strong>Capriccioli Est :</strong> plus grande, fond sableux avec posidonie, snorkeling exceptionnel</li>
  <li><strong>Capriccioli Ouest :</strong> plus intime, granit rose, eau cristalline</li>
  <li>Masque et palmes : mérous, sars et poulpes</li>
  <li>Plage libre, aucun service — apportez eau et pique-nique</li>
</ul>

<h4>Plages voisines</h4>
<p><a href="/fr/romazzino">Romazzino</a> (3 min), <a href="/fr/spiaggia-del-principe">Spiaggia del Principe</a> (10 min), <a href="/fr/liscia-ruja">Liscia Ruja</a> (8 min). Voiture conseillée : <strong>BMW M2</strong> ou <strong>Audi RS3</strong>.</p>',
  parking_info_fr     = 'Parking payant très limité le long de la route d''accès ; arrivez avant 9h en juillet–août.'
WHERE slug = 'capriccioli';

-- ──────────────────────────────────────────────────────────────
-- 7) romazzino
-- ──────────────────────────────────────────────────────────────

UPDATE public.seo_beaches SET
  slug_en             = 'romazzino',
  title_en            = 'Romazzino Beach Porto Cervo Sardinia | KS Rent',
  h1_en               = 'Romazzino Beach: Emerald Waters and Wild Rosemary',
  meta_description_en = 'Romazzino: thick sand and crystal water in the heart of Costa Smeralda. Car parks reserved for hotels. Hire a premium car with KS Rent to get there.',
  content_html_en     = '<p class="snippet-bait"><strong>Romazzino is the most exclusive beach on the Costa Smeralda, next to the 5-star Hotel Romazzino.</strong> Emerald water and the scent of wild rosemary. Limited parking. KS Rent Sardinia delivers premium cars.</p>

<h3>Romazzino: Emerald Waters and the Scent of Rosemary</h3>
<p>The name comes from the wild rosemary growing along the paths. The sand is slightly thicker than on neighbouring beaches, keeping the water absolutely transparent even on busy days. An exclusive gem in the heart of the Costa Smeralda.</p>

<h4>How to Get There</h4>
<p>From the SP59 between Porto Cervo and Capriccioli: 3 minutes. Parking is restricted to luxury hotel areas. In peak season, arrive early or park at <a href="/en/capriccioli">Capriccioli</a> and walk 15 minutes. Distance from Olbia: <strong>30 km, 35 minutes</strong>.</p>

<h4>Tips</h4>
<ul>
  <li>Luxury setting: the Hotel Romazzino (Belmond) is 100 metres away</li>
  <li>Sandy seabed and calm waters — ideal for swimming</li>
  <li>Less crowded than beaches with wide parking</li>
  <li>Perfect in the afternoon when smaller beaches fill up</li>
</ul>

<h4>Beaches in the Same Area</h4>
<p><a href="/en/capriccioli">Capriccioli</a> (3 min), <a href="/en/spiaggia-del-principe">Spiaggia del Principe</a> (5 min), <a href="/en/grande-pevero">Grande Pevero</a> (8 min). Visit them all in a day with your KS Rent car from <a href="/en/car-hire-poltu-quatu">Poltu Quatu</a> or <a href="/en/car-hire-porto-cervo">Porto Cervo</a>.</p>',
  parking_info_en     = 'Parking is restricted to luxury hotel areas; in peak season park at Capriccioli and walk 15 minutes.'
WHERE slug = 'romazzino';

UPDATE public.seo_beaches SET
  slug_de             = 'romazzino',
  title_de            = 'Strand Romazzino Porto Cervo Sardinien | KS Rent',
  h1_de               = 'Strand Romazzino: Smaragdwasser und Rosmarinduft',
  meta_description_de = 'Romazzino: dichter Sand und kristallklares Wasser im Herzen der Costa Smeralda. Parkplätze den Hotels vorbehalten. Premium-Auto bei KS Rent.',
  content_html_de     = '<p class="snippet-bait"><strong>Romazzino ist der exklusivste Strand der Costa Smeralda, neben dem 5-Sterne-Hotel Romazzino.</strong> Smaragdwasser und Duft von wildem Rosmarin. Begrenzte Parkplätze. KS Rent Sardinien liefert Premium-Autos.</p>

<h3>Romazzino: Smaragdwasser und Rosmarinduft</h3>
<p>Der Name kommt vom wilden Rosmarin entlang der Pfade. Der Sand ist etwas gröber als an Nachbarständen, wodurch das Wasser auch an vollen Tagen transparent bleibt. Ein exklusives Juwel.</p>

<h4>Anfahrt</h4>
<p>Von der SP59 zwischen Porto Cervo und Capriccioli: 3 Min. Parkplätze den Luxushotels vorbehalten. In der Hochsaison früh anreisen oder bei <a href="/de/capriccioli">Capriccioli</a> parken und 15 Min laufen. Entfernung von Olbia: <strong>30 km, 35 Min</strong>.</p>

<h4>Tipps</h4>
<ul>
  <li>Luxusambiente: das Hotel Romazzino (Belmond) liegt 100 m entfernt</li>
  <li>Sandboden und ruhiges Wasser — ideal zum Schwimmen</li>
  <li>Weniger überfüllt als Strände mit großem Parkplatz</li>
  <li>Perfekt am Nachmittag</li>
</ul>

<h4>Strände in der Umgebung</h4>
<p><a href="/de/capriccioli">Capriccioli</a> (3 Min), <a href="/de/spiaggia-del-principe">Spiaggia del Principe</a> (5 Min), <a href="/de/grande-pevero">Grande Pevero</a> (8 Min). Mit dem KS Rent-Auto ab <a href="/de/autovermietung-poltu-quatu">Poltu Quatu</a> oder <a href="/de/autovermietung-porto-cervo">Porto Cervo</a> alle an einem Tag.</p>',
  parking_info_de     = 'Parkplätze den Luxushotels vorbehalten; in der Hochsaison bei Capriccioli parken und 15 Minuten laufen.'
WHERE slug = 'romazzino';

UPDATE public.seo_beaches SET
  slug_fr             = 'romazzino',
  title_fr            = 'Plage Romazzino Porto Cervo Sardaigne | KS Rent',
  h1_fr               = 'Plage Romazzino : eaux émeraude et romarin sauvage',
  meta_description_fr = 'Romazzino : sable épais et eau cristalline au cœur de la Costa Smeralda. Parkings réservés aux hôtels. Louez une voiture premium avec KS Rent.',
  content_html_fr     = '<p class="snippet-bait"><strong>Romazzino est la plage la plus exclusive de la Costa Smeralda, à côté de l''hôtel 5 étoiles Romazzino.</strong> Eau émeraude et parfum de romarin sauvage. Parkings limités. KS Rent Sardaigne livre des voitures premium.</p>

<h3>Romazzino : eaux émeraude et parfum de romarin</h3>
<p>Le nom vient du romarin sauvage le long des sentiers. Le sable est légèrement plus épais que sur les plages voisines, gardant l''eau d''une transparence absolue même les jours d''affluence. Un joyau exclusif.</p>

<h4>Comment y arriver</h4>
<p>Depuis la SP59 entre Porto Cervo et Capriccioli : 3 min. Parkings réservés aux hôtels de luxe. En haute saison, arrivez tôt ou garez-vous à <a href="/fr/capriccioli">Capriccioli</a> et marchez 15 min. Distance d''Olbia : <strong>30 km, 35 min</strong>.</p>

<h4>Conseils</h4>
<ul>
  <li>Cadre de luxe : l''Hôtel Romazzino (Belmond) à 100 mètres</li>
  <li>Fond sableux et eaux calmes — idéal pour la nage</li>
  <li>Moins fréquentée que les plages avec grand parking</li>
  <li>Parfait l''après-midi</li>
</ul>

<h4>Plages de la même zone</h4>
<p><a href="/fr/capriccioli">Capriccioli</a> (3 min), <a href="/fr/spiaggia-del-principe">Spiaggia del Principe</a> (5 min), <a href="/fr/grande-pevero">Grande Pevero</a> (8 min). Toutes visitables en une journée avec KS Rent depuis <a href="/fr/location-voiture-poltu-quatu">Poltu Quatu</a> ou <a href="/fr/location-voiture-porto-cervo">Porto Cervo</a>.</p>',
  parking_info_fr     = 'Parkings réservés aux hôtels de luxe ; en haute saison, garez-vous à Capriccioli et marchez 15 minutes.'
WHERE slug = 'romazzino';

-- ──────────────────────────────────────────────────────────────
-- 8) grande-pevero
-- ──────────────────────────────────────────────────────────────

UPDATE public.seo_beaches SET
  slug_en             = 'grande-pevero',
  title_en            = 'Grande Pevero Beach Porto Cervo Sardinia | KS Rent',
  h1_en               = 'Grande Pevero Beach: Between the Golf Club and the Sea',
  meta_description_en = 'Grande Pevero: white-sand crescent beside the Pevero Golf Club. Car park 500m from the shore. Hire a car in Porto Cervo with KS Rent — no credit card.',
  content_html_en     = '<p class="snippet-bait"><strong>Grande Pevero is the VIP beach of the Costa Smeralda, next to the Pevero Golf Club.</strong> Paid car park 500 metres from the shore. Caribbean waters and mega-yachts offshore. KS Rent Sardinia delivers premium cars.</p>

<h3>Grande Pevero: Between the Golf Club and Crystal-Clear Sea</h3>
<p>A crescent of pure white sand in a paradise gulf, adjacent to the Pevero Golf Club. Caribbean waters and mega-yachts in the distance. A VIP destination loved by international entertainment and sports celebrities.</p>

<h4>How to Get There</h4>
<p>From <a href="/en/car-hire-baja-sardinia">Baja Sardinia</a>: 5 minutes. From <a href="/en/car-hire-poltu-quatu">Poltu Quatu</a>: 3 minutes. Paid car park mandatory, about <strong>500 metres from the shore</strong>. Distance from Olbia: <strong>30 km, 30 minutes</strong>.</p>

<h4>Practical Tips</h4>
<ul>
  <li>Beach clubs and a free beach area</li>
  <li>Sandy seabed, calm and shallow water</li>
  <li>Panoramic coastal view — spectacular at sunset</li>
  <li>Last stretch on dirt road: <strong>Jeep Avenger recommended</strong></li>
</ul>

<h4>Beaches in the Area</h4>
<p><a href="/en/cala-del-faro">Cala del Faro</a> (5 min), <a href="/en/capriccioli">Capriccioli</a> (10 min), <a href="/en/romazzino">Romazzino</a> (8 min). For golfers: the Pevero Golf Club has 18 panoramic holes (booking advised).</p>',
  parking_info_en     = 'Mandatory paid car park about 500 metres from the shore; last stretch on dirt road.'
WHERE slug = 'grande-pevero';

UPDATE public.seo_beaches SET
  slug_de             = 'grande-pevero',
  title_de            = 'Strand Grande Pevero Porto Cervo Sardinien | KS Rent',
  h1_de               = 'Grande Pevero: Zwischen Golfclub und Kristallmeer',
  meta_description_de = 'Grande Pevero: weiße Sandhalbmond neben dem Pevero Golf Club. Parkplatz 500m vom Ufer. Auto in Porto Cervo bei KS Rent — ohne Kreditkarte.',
  content_html_de     = '<p class="snippet-bait"><strong>Der Grande Pevero ist der VIP-Strand der Costa Smeralda, neben dem Pevero Golf Club.</strong> Gebührenpflichtiger Parkplatz 500 m vom Ufer. Karibische Wasser und Mega-Yachten. KS Rent Sardinien liefert Premium-Autos.</p>

<h3>Grande Pevero: Zwischen Golfclub und Kristallmeer</h3>
<p>Ein Halbmond weißen Sandes in einer paradiesischen Bucht, am Pevero Golf Club. Karibische Wasser und Mega-Yachten. Ein VIP-Ziel, beliebt bei internationalen Show- und Sportstars.</p>

<h4>Anfahrt</h4>
<p>Von <a href="/de/autovermietung-baja-sardinia">Baja Sardinia</a>: 5 Min. Von <a href="/de/autovermietung-poltu-quatu">Poltu Quatu</a>: 3 Min. Pflichtparkplatz etwa <strong>500 m vom Ufer</strong>. Entfernung von Olbia: <strong>30 km, 30 Min</strong>.</p>

<h4>Praktische Tipps</h4>
<ul>
  <li>Strandbäder und freier Strandabschnitt</li>
  <li>Sandboden, ruhiges, flaches Wasser</li>
  <li>Panoramablick — bei Sonnenuntergang spektakulär</li>
  <li>Letzter Schotterabschnitt: <strong>Jeep Avenger empfohlen</strong></li>
</ul>

<h4>Strände in der Umgebung</h4>
<p><a href="/de/cala-del-faro">Cala del Faro</a> (5 Min), <a href="/de/capriccioli">Capriccioli</a> (10 Min), <a href="/de/romazzino">Romazzino</a> (8 Min). Für Golfer: 18 Panoramabahnen im Pevero Golf Club.</p>',
  parking_info_de     = 'Pflichtparkplatz etwa 500 Meter vom Ufer entfernt; letzter Abschnitt auf Schotter.'
WHERE slug = 'grande-pevero';

UPDATE public.seo_beaches SET
  slug_fr             = 'grande-pevero',
  title_fr            = 'Plage Grande Pevero Porto Cervo Sardaigne | KS Rent',
  h1_fr               = 'Grande Pevero : entre golf club et mer cristalline',
  meta_description_fr = 'Grande Pevero : croissant de sable blanc à côté du Pevero Golf Club. Parking à 500m du rivage. Louez à Porto Cervo avec KS Rent — sans carte de crédit.',
  content_html_fr     = '<p class="snippet-bait"><strong>Le Grande Pevero est la plage VIP de la Costa Smeralda, à côté du Pevero Golf Club.</strong> Parking payant à 500 mètres du rivage. Eaux caribéennes et méga-yachts au large. KS Rent Sardaigne livre des voitures premium.</p>

<h3>Grande Pevero : entre golf club et mer cristalline</h3>
<p>Un croissant de sable immaculé dans un golfe paradisiaque, attenant au Pevero Golf Club. Eaux caribéennes et méga-yachts. Destination VIP appréciée des stars du spectacle et du sport.</p>

<h4>Comment y arriver</h4>
<p>Depuis <a href="/fr/location-voiture-baja-sardinia">Baja Sardinia</a> : 5 min. Depuis <a href="/fr/location-voiture-poltu-quatu">Poltu Quatu</a> : 3 min. Parking obligatoire à environ <strong>500 mètres du rivage</strong>. Distance d''Olbia : <strong>30 km, 30 min</strong>.</p>

<h4>Conseils pratiques</h4>
<ul>
  <li>Établissements et zone de plage libre</li>
  <li>Fond sableux, eaux calmes et peu profondes</li>
  <li>Vue panoramique — spectaculaire au coucher du soleil</li>
  <li>Dernier tronçon en piste : <strong>Jeep Avenger conseillé</strong></li>
</ul>

<h4>Plages dans la zone</h4>
<p><a href="/fr/cala-del-faro">Cala del Faro</a> (5 min), <a href="/fr/capriccioli">Capriccioli</a> (10 min), <a href="/fr/romazzino">Romazzino</a> (8 min). Pour les golfeurs : 18 trous panoramiques au Pevero Golf Club.</p>',
  parking_info_fr     = 'Parking obligatoire à environ 500 mètres du rivage ; dernier tronçon en piste.'
WHERE slug = 'grande-pevero';

-- ──────────────────────────────────────────────────────────────
-- 9) cala-moresca
-- ──────────────────────────────────────────────────────────────

UPDATE public.seo_beaches SET
  slug_en             = 'cala-moresca',
  title_en            = 'Cala Moresca Golfo Aranci Sardinia | KS Rent',
  h1_en               = 'Cala Moresca: Snorkelling and Wild Nature at Golfo Aranci',
  meta_description_en = 'Cala Moresca: a wild bay with the best snorkelling 15 min from Olbia. Limited free car park. Hire a Jeep Avenger with KS Rent Sardinia.',
  content_html_en     = '<p class="snippet-bait"><strong>Cala Moresca at Golfo Aranci is the best snorkelling spot 15 minutes from Olbia.</strong> Wild, protected bay, no facilities — bring everything you need. Limited free car park. KS Rent Sardinia delivers Jeeps and cars.</p>

<h3>Cala Moresca: The Natural Treasure of Golfo Aranci</h3>
<p>Set within a protected natural area, Cala Moresca is overlooked by the Figarolo islet. The ruins of an old kiln and a fragrant pine forest give it a wild charm, ideal for nature lovers seeking silence.</p>

<h4>How to Get There</h4>
<p>From <a href="/en/car-hire-golfo-aranci">Golfo Aranci</a>: 5 minutes north. Free and paid car parks at the entrance to the protected area. Last stretch on foot (5 minutes). Distance from Olbia: <strong>18 km, 20 minutes</strong>.</p>

<h4>What to Bring</h4>
<ul>
  <li><strong>Mask and fins</strong> — rich seabeds with posidonia, groupers and octopuses</li>
  <li>Water and packed lunch — completely wild bay, zero services</li>
  <li>Reef shoes for the side rocky areas</li>
  <li><strong>Jeep Avenger</strong> recommended for the dirt access road</li>
</ul>

<h4>Nearby Beaches</h4>
<p><a href="/en/cala-sabina">Cala Sabina</a> (3 min), <a href="/en/spiaggia-bianca">Spiaggia Bianca</a> (8 min). For fresh fish, the harbour restaurants of <a href="/en/car-hire-golfo-aranci">Golfo Aranci</a> serve grilled tuna and bottarga.</p>',
  parking_info_en     = 'Limited free and paid car parks at the entrance of the protected area; last 5 minutes on foot.'
WHERE slug = 'cala-moresca';

UPDATE public.seo_beaches SET
  slug_de             = 'cala-moresca',
  title_de            = 'Strand Cala Moresca Golfo Aranci Sardinien | KS Rent',
  h1_de               = 'Cala Moresca: Schnorcheln und Wildnatur in Golfo Aranci',
  meta_description_de = 'Cala Moresca: wilde Bucht mit dem besten Schnorcheln 15 Min von Olbia. Begrenzter kostenloser Parkplatz. Jeep Avenger bei KS Rent Sardinien.',
  content_html_de     = '<p class="snippet-bait"><strong>Cala Moresca in Golfo Aranci ist der beste Schnorchelspot 15 Minuten von Olbia.</strong> Wilde, geschützte Bucht, keine Services — alles selbst mitbringen. Begrenzter kostenloser Parkplatz. KS Rent Sardinien liefert Jeeps und Autos.</p>

<h3>Cala Moresca: Der Naturschatz von Golfo Aranci</h3>
<p>In einem Naturschutzgebiet gelegen, wird Cala Moresca vom Inselchen Figarolo überragt. Die Ruinen eines alten Brennofens und ein duftender Pinienwald verleihen ihr wilden Charme — ideal für Naturliebhaber.</p>

<h4>Anfahrt</h4>
<p>Von <a href="/de/autovermietung-golfo-aranci">Golfo Aranci</a>: 5 Min nach Norden. Kostenlose und gebührenpflichtige Parkplätze am Eingang. Letzter Abschnitt zu Fuß (5 Min). Entfernung von Olbia: <strong>18 km, 20 Min</strong>.</p>

<h4>Was mitbringen</h4>
<ul>
  <li><strong>Maske und Flossen</strong> — reiche Böden mit Posidonia, Zackenbarschen, Kraken</li>
  <li>Wasser und Verpflegung — keine Services</li>
  <li>Felsenschuhe für die seitlichen Felsen</li>
  <li><strong>Jeep Avenger</strong> für die Schotterzufahrt empfohlen</li>
</ul>

<h4>Strände in der Nähe</h4>
<p><a href="/de/cala-sabina">Cala Sabina</a> (3 Min), <a href="/de/spiaggia-bianca">Spiaggia Bianca</a> (8 Min). Für frischen Fisch: die Hafenrestaurants von <a href="/de/autovermietung-golfo-aranci">Golfo Aranci</a>.</p>',
  parking_info_de     = 'Begrenzte kostenlose und gebührenpflichtige Parkplätze am Eingang des Schutzgebiets; letzte 5 Minuten zu Fuß.'
WHERE slug = 'cala-moresca';

UPDATE public.seo_beaches SET
  slug_fr             = 'cala-moresca',
  title_fr            = 'Plage Cala Moresca Golfo Aranci Sardaigne | KS Rent',
  h1_fr               = 'Cala Moresca : snorkeling et nature sauvage à Golfo Aranci',
  meta_description_fr = 'Cala Moresca : baie sauvage avec le meilleur snorkeling à 15 min d''Olbia. Parking gratuit limité. Louez un Jeep Avenger avec KS Rent Sardaigne.',
  content_html_fr     = '<p class="snippet-bait"><strong>Cala Moresca à Golfo Aranci est le meilleur spot de snorkeling à 15 minutes d''Olbia.</strong> Baie sauvage et protégée, aucun service — apportez tout le nécessaire. Parking gratuit limité. KS Rent Sardaigne livre Jeeps et voitures.</p>

<h3>Cala Moresca : le trésor naturel de Golfo Aranci</h3>
<p>Nichée dans une zone naturelle protégée, Cala Moresca est dominée par l''îlot de Figarolo. Les ruines d''un ancien four et une pinède parfumée lui donnent un charme sauvage, idéal pour les amoureux de la nature.</p>

<h4>Comment y arriver</h4>
<p>Depuis <a href="/fr/location-voiture-golfo-aranci">Golfo Aranci</a> : 5 min vers le nord. Parkings gratuit et payant à l''entrée. Dernier tronçon à pied (5 min). Distance d''Olbia : <strong>18 km, 20 min</strong>.</p>

<h4>À apporter</h4>
<ul>
  <li><strong>Masque et palmes</strong> — fonds riches en posidonie, mérous, poulpes</li>
  <li>Eau et pique-nique — aucun service</li>
  <li>Chaussures de roche pour les côtés</li>
  <li><strong>Jeep Avenger</strong> conseillé pour la piste</li>
</ul>

<h4>Plages voisines</h4>
<p><a href="/fr/cala-sabina">Cala Sabina</a> (3 min), <a href="/fr/spiaggia-bianca">Spiaggia Bianca</a> (8 min). Pour le poisson frais : les restaurants du port de <a href="/fr/location-voiture-golfo-aranci">Golfo Aranci</a>.</p>',
  parking_info_fr     = 'Parkings gratuit et payant limités à l''entrée de la zone protégée ; 5 dernières minutes à pied.'
WHERE slug = 'cala-moresca';

-- ──────────────────────────────────────────────────────────────
-- 10) cala-sabina
-- ──────────────────────────────────────────────────────────────

UPDATE public.seo_beaches SET
  slug_en             = 'cala-sabina',
  title_en            = 'Cala Sabina Golfo Aranci Sardinia | KS Rent',
  h1_en               = 'Cala Sabina: Ancient Junipers and Caribbean Sand',
  meta_description_en = 'Cala Sabina: ancient junipers on the sand, reachable also by train. Unpaved car park. Hire a city car or SUV with KS Rent from Olbia in 15 minutes.',
  content_html_en     = '<p class="snippet-bait"><strong>Cala Sabina is one of the few beaches reachable by train, but by car it is another experience.</strong> Ancient junipers on the sand, tropical feel. Unpaved car park. KS Rent delivers cars to Golfo Aranci in 15 min.</p>

<h3>Cala Sabina: Ancient Junipers and Caribbean Sand</h3>
<p>Famous for the junipers whose roots reach almost onto the fine sand. One of the few beaches reachable by train, but the road offers the most scenic route. Tropical atmosphere a few km from Olbia.</p>

<h4>How to Get There</h4>
<p>From <a href="/en/car-hire-golfo-aranci">Golfo Aranci</a>: 3 minutes south. Car park near the railway station, then a dirt path on foot (5 min). Distance from Olbia: <strong>16 km, 18 minutes</strong>.</p>

<h4>Tips</h4>
<ul>
  <li>Free beach with very few facilities — bring what you need</li>
  <li>Junipers provide natural shade — great with children</li>
  <li>Sandy, shallow seabed, clear waters</li>
  <li>Less crowded than the main Golfo Aranci beaches</li>
</ul>

<h4>Beaches in the Area</h4>
<p><a href="/en/cala-moresca">Cala Moresca</a> (5 min, snorkelling), <a href="/en/spiaggia-bianca">Spiaggia Bianca</a> (10 min, dunes). Recommended car: <strong>Fiat Panda</strong> or <strong>Jeep Avenger</strong> to explore all the coves of Golfo Aranci.</p>',
  parking_info_en     = 'Unpaved car park near the railway station, followed by a 5-minute walk on a dirt path.'
WHERE slug = 'cala-sabina';

UPDATE public.seo_beaches SET
  slug_de             = 'cala-sabina',
  title_de            = 'Strand Cala Sabina Golfo Aranci Sardinien | KS Rent',
  h1_de               = 'Cala Sabina: Uralte Wacholder und Karibiksand',
  meta_description_de = 'Cala Sabina: uralte Wacholder am Sand, auch mit der Bahn erreichbar. Schotterparkplatz. Kleinwagen oder SUV bei KS Rent ab Olbia in 15 Min.',
  content_html_de     = '<p class="snippet-bait"><strong>Cala Sabina ist einer der wenigen Strände, die per Zug erreichbar sind, aber mit dem Auto ein Erlebnis.</strong> Uralte Wacholder am Sand, tropisches Flair. Schotterparkplatz. KS Rent liefert Autos in 15 Min nach Golfo Aranci.</p>

<h3>Cala Sabina: Uralte Wacholder und Karibiksand</h3>
<p>Bekannt für die Wacholder, deren Wurzeln fast bis in den feinen Sand reichen. Einer der wenigen Strände, die per Zug erreichbar sind, aber die Straße bietet die schönste Panoramaroute. Tropische Stimmung wenige km von Olbia.</p>

<h4>Anfahrt</h4>
<p>Von <a href="/de/autovermietung-golfo-aranci">Golfo Aranci</a>: 3 Min nach Süden. Parkplatz am Bahnhof, dann Schotterpfad zu Fuß (5 Min). Entfernung von Olbia: <strong>16 km, 18 Min</strong>.</p>

<h4>Tipps</h4>
<ul>
  <li>Freier Strand mit wenig Services — Wesentliches mitbringen</li>
  <li>Wacholder spendet natürlichen Schatten — ideal mit Kindern</li>
  <li>Sandiger, flacher Grund, klares Wasser</li>
  <li>Weniger überfüllt als die Hauptstrände von Golfo Aranci</li>
</ul>

<h4>Strände in der Umgebung</h4>
<p><a href="/de/cala-moresca">Cala Moresca</a> (5 Min, Schnorcheln), <a href="/de/spiaggia-bianca">Spiaggia Bianca</a> (10 Min, Dünen). Empfohlen: <strong>Fiat Panda</strong> oder <strong>Jeep Avenger</strong>.</p>',
  parking_info_de     = 'Schotterparkplatz nahe dem Bahnhof, anschließend 5 Minuten Fußweg über einen Pfad.'
WHERE slug = 'cala-sabina';

UPDATE public.seo_beaches SET
  slug_fr             = 'cala-sabina',
  title_fr            = 'Plage Cala Sabina Golfo Aranci Sardaigne | KS Rent',
  h1_fr               = 'Cala Sabina : genévriers séculaires et sable caribéen',
  meta_description_fr = 'Cala Sabina : genévriers séculaires sur le sable, accessible aussi en train. Parking en terre. Louez citadine ou SUV avec KS Rent depuis Olbia en 15 min.',
  content_html_fr     = '<p class="snippet-bait"><strong>Cala Sabina est l''une des rares plages accessibles en train, mais en voiture c''est une autre expérience.</strong> Genévriers séculaires sur le sable, ambiance tropicale. Parking en terre. KS Rent livre les voitures à Golfo Aranci en 15 min.</p>

<h3>Cala Sabina : genévriers séculaires et sable caribéen</h3>
<p>Célèbre pour ses genévriers dont les racines descendent presque sur le sable fin. L''une des rares plages accessibles en train, mais la route offre le plus beau parcours panoramique. Atmosphère tropicale à quelques km d''Olbia.</p>

<h4>Comment y arriver</h4>
<p>Depuis <a href="/fr/location-voiture-golfo-aranci">Golfo Aranci</a> : 3 min vers le sud. Parking près de la gare, puis sentier en terre à pied (5 min). Distance d''Olbia : <strong>16 km, 18 minutes</strong>.</p>

<h4>Conseils</h4>
<ul>
  <li>Plage libre avec très peu de services — apportez le nécessaire</li>
  <li>Les genévriers offrent une ombre naturelle — parfait avec enfants</li>
  <li>Fond sableux peu profond, eau limpide</li>
  <li>Moins fréquentée que les plages principales</li>
</ul>

<h4>Plages dans la zone</h4>
<p><a href="/fr/cala-moresca">Cala Moresca</a> (5 min, snorkeling), <a href="/fr/spiaggia-bianca">Spiaggia Bianca</a> (10 min, dunes). Voiture conseillée : <strong>Fiat Panda</strong> ou <strong>Jeep Avenger</strong>.</p>',
  parking_info_fr     = 'Parking en terre près de la gare, suivi de 5 minutes de marche sur un sentier.'
WHERE slug = 'cala-sabina';

-- ──────────────────────────────────────────────────────────────
-- 11) spiaggia-bianca
-- ──────────────────────────────────────────────────────────────

UPDATE public.seo_beaches SET
  slug_en             = 'spiaggia-bianca',
  title_en            = 'Spiaggia Bianca Olbia Sardinia | KS Rent Car Hire',
  h1_en               = 'Spiaggia Bianca: Dunes, Sea Lilies and Shallow Water',
  meta_description_en = 'Spiaggia Bianca: dazzling sand between Olbia and Golfo Aranci. Very shallow water, ideal for children. Car park behind the dunes. KS Rent from Pittulongu in 5 min.',
  content_html_en     = '<p class="snippet-bait"><strong>Spiaggia Bianca is 5 minutes from Pittulongu: dazzling sand, dunes with sea lilies and very shallow water.</strong> Wide car park behind the dunes. KS Rent Sardinia delivers cars from Olbia within minutes.</p>

<h3>Spiaggia Bianca: Dunes, Sea Lilies and Turquoise</h3>
<p>The name does not lie: dazzling white sand lapped by crystal-clear sea. Between Olbia and Golfo Aranci, small dunes dotted with rare sea lilies. Spectacular sunsets and views over the archipelago islands.</p>

<h4>How to Get There</h4>
<p>From <a href="/en/car-hire-pittulongu">Pittulongu</a>: 5 minutes. From central Olbia: 10 minutes. Wide paid car park <strong>right behind the main dune</strong>. Distance from the KS Rent office: <strong>8 km, 10 minutes</strong>.</p>

<h4>Tips</h4>
<ul>
  <li>Shallow, sandy seabed for 40+ metres — <strong>ideal for children</strong></li>
  <li>Do not tread on the sea lilies on the dunes — protected species</li>
  <li>Beach bar available in high season</li>
  <li>At sunset the view over the islands is spectacular</li>
</ul>

<h4>Nearby Beaches</h4>
<p><a href="/en/spiaggia-pittulongu">Pittulongu</a> (5 min, fish restaurants), <a href="/en/spiaggia-bados">Bados</a> (3 min, calm waters). Recommended car: <strong>Fiat Panda</strong> — paved road and easy parking.</p>',
  parking_info_en     = 'Wide paid car park directly behind the main dune, with easy access to the beach.'
WHERE slug = 'spiaggia-bianca';

UPDATE public.seo_beaches SET
  slug_de             = 'spiaggia-bianca',
  title_de            = 'Spiaggia Bianca Olbia Sardinien | KS Rent Autovermietung',
  h1_de               = 'Spiaggia Bianca: Dünen, Meereslilien und flaches Wasser',
  meta_description_de = 'Spiaggia Bianca: blendender Sand zwischen Olbia und Golfo Aranci. Sehr flaches Wasser, ideal für Kinder. Parkplatz hinter den Dünen. KS Rent ab Pittulongu in 5 Min.',
  content_html_de     = '<p class="snippet-bait"><strong>Die Spiaggia Bianca liegt 5 Min von Pittulongu: blendender Sand, Dünen mit Meereslilien und sehr flaches Wasser.</strong> Großer Parkplatz hinter den Dünen. KS Rent Sardinien liefert Autos in wenigen Minuten ab Olbia.</p>

<h3>Spiaggia Bianca: Dünen, Meereslilien und Türkis</h3>
<p>Der Name hält Wort: blendend weißer Sand, vom kristallklaren Meer umspült. Zwischen Olbia und Golfo Aranci, kleine Dünen mit seltenen Meereslilien. Spektakuläre Sonnenuntergänge und Blick auf die Inseln.</p>

<h4>Anfahrt</h4>
<p>Von <a href="/de/autovermietung-pittulongu">Pittulongu</a>: 5 Min. Vom Zentrum Olbias: 10 Min. Großer gebührenpflichtiger Parkplatz <strong>direkt hinter der Hauptdüne</strong>. Entfernung zum KS Rent-Büro: <strong>8 km, 10 Min</strong>.</p>

<h4>Tipps</h4>
<ul>
  <li>Flacher, sandiger Grund über 40+ Meter — <strong>ideal für Kinder</strong></li>
  <li>Meereslilien auf den Dünen nicht betreten — geschützte Art</li>
  <li>Strandbar in der Hochsaison</li>
  <li>Bei Sonnenuntergang spektakulärer Inselblick</li>
</ul>

<h4>Strände in der Nähe</h4>
<p><a href="/de/spiaggia-pittulongu">Pittulongu</a> (5 Min, Fischrestaurants), <a href="/de/spiaggia-bados">Bados</a> (3 Min, ruhiges Wasser). Empfohlen: <strong>Fiat Panda</strong>.</p>',
  parking_info_de     = 'Großer gebührenpflichtiger Parkplatz direkt hinter der Hauptdüne, mit einfachem Zugang zum Strand.'
WHERE slug = 'spiaggia-bianca';

UPDATE public.seo_beaches SET
  slug_fr             = 'spiaggia-bianca',
  title_fr            = 'Plage Spiaggia Bianca Olbia Sardaigne | KS Rent',
  h1_fr               = 'Spiaggia Bianca : dunes, lis de mer et eau peu profonde',
  meta_description_fr = 'Spiaggia Bianca : sable éblouissant entre Olbia et Golfo Aranci. Eau très peu profonde, idéale pour enfants. Parking derrière les dunes. KS Rent depuis Pittulongu en 5 min.',
  content_html_fr     = '<p class="snippet-bait"><strong>Spiaggia Bianca est à 5 minutes de Pittulongu : sable éblouissant, dunes avec lis de mer et fond très peu profond.</strong> Vaste parking derrière les dunes. KS Rent Sardaigne livre les voitures en quelques minutes depuis Olbia.</p>

<h3>Spiaggia Bianca : dunes, lis de mer et turquoise</h3>
<p>Le nom ne ment pas : sable blanc éblouissant léché par une mer cristalline. Entre Olbia et Golfo Aranci, petites dunes parsemées de rares lis de mer. Couchers de soleil spectaculaires et vue sur les îles de l''archipel.</p>

<h4>Comment y arriver</h4>
<p>Depuis <a href="/fr/location-voiture-pittulongu">Pittulongu</a> : 5 min. Du centre d''Olbia : 10 min. Vaste parking payant <strong>juste derrière la dune principale</strong>. Distance du bureau KS Rent : <strong>8 km, 10 min</strong>.</p>

<h4>Conseils</h4>
<ul>
  <li>Fond sableux peu profond sur 40+ mètres — <strong>idéal pour enfants</strong></li>
  <li>Ne piétinez pas les lis de mer — espèce protégée</li>
  <li>Bar de plage en haute saison</li>
  <li>Vue spectaculaire au coucher du soleil</li>
</ul>

<h4>Plages voisines</h4>
<p><a href="/fr/spiaggia-pittulongu">Pittulongu</a> (5 min, restaurants de poisson), <a href="/fr/spiaggia-bados">Bados</a> (3 min, eaux calmes). Voiture conseillée : <strong>Fiat Panda</strong>.</p>',
  parking_info_fr     = 'Vaste parking payant juste derrière la dune principale, accès facile à la plage.'
WHERE slug = 'spiaggia-bianca';

-- ──────────────────────────────────────────────────────────────
-- 12) porto-istana
-- ──────────────────────────────────────────────────────────────

UPDATE public.seo_beaches SET
  slug_en             = 'porto-istana',
  title_en            = 'Porto Istana Beach Tavolara Sardinia | KS Rent',
  h1_en               = 'Porto Istana: Four Coves Facing Tavolara Island',
  meta_description_en = 'Porto Istana: 4 coves with pink granite and Tavolara views. Paid car park. 2 min from Murta Maria. KS Rent delivers cars from Olbia — no credit card.',
  content_html_en     = '<p class="snippet-bait"><strong>Porto Istana has 4 pink granite coves with the closest view of Tavolara Island.</strong> Paid car park. 2 minutes from Murta Maria. KS Rent Sardinia delivers cars from Olbia in 10 minutes.</p>

<h3>Porto Istana: Four Coves Facing Tavolara</h3>
<p>Porto Istana is not one beach but a set of four coves separated by pink granite formations. The water mixes blue and emerald green, with Tavolara rising majestically directly opposite.</p>

<h4>How to Get There</h4>
<p>From <a href="/en/car-hire-murta-maria">Murta Maria</a>: 2 minutes. From Olbia: 12 minutes. Paid car park with easy access to all four coves. Distance from the KS Rent office: <strong>10 km, 12 minutes</strong>.</p>

<h4>The 4 Coves</h4>
<ul>
  <li><strong>First cove:</strong> the most equipped, with kiosk and sunbeds</li>
  <li><strong>Second and third:</strong> free beach, quieter</li>
  <li><strong>Fourth cove:</strong> the most intimate, rocks and privacy</li>
  <li>Shallow sandy seabed in all four</li>
</ul>

<h4>Excursions</h4>
<p>From <a href="/en/car-hire-porto-san-paolo">Porto San Paolo</a> (10 min drive) boats depart for Tavolara Island: Spalmatore beach and the "smallest kingdom in the world". Recommended car: <strong>Fiat Panda</strong> (paved road) or <strong>Jeep Avenger</strong> to also explore <a href="/en/car-hire-capo-coda-cavallo">Capo Coda Cavallo</a>.</p>',
  parking_info_en     = 'Paid car park with easy access to each of the four coves; short paths from the parking bays.'
WHERE slug = 'porto-istana';

UPDATE public.seo_beaches SET
  slug_de             = 'porto-istana',
  title_de            = 'Strand Porto Istana Tavolara Sardinien | KS Rent',
  h1_de               = 'Porto Istana: Vier Buchten gegenüber Tavolara',
  meta_description_de = 'Porto Istana: 4 Buchten mit rosa Granit und Tavolara-Blick. Gebührenpflichtiger Parkplatz. 2 Min von Murta Maria. KS Rent liefert Autos ab Olbia.',
  content_html_de     = '<p class="snippet-bait"><strong>Porto Istana hat 4 Buchten aus rosa Granit mit dem nächsten Blick auf die Insel Tavolara.</strong> Gebührenpflichtiger Parkplatz. 2 Min von Murta Maria. KS Rent Sardinien liefert Autos in 10 Min ab Olbia.</p>

<h3>Porto Istana: Vier Buchten gegenüber Tavolara</h3>
<p>Porto Istana ist nicht ein Strand, sondern vier Buchten, getrennt durch rosa Granitformationen. Das Wasser mischt Blau und Smaragdgrün, mit Tavolara majestätisch gegenüber.</p>

<h4>Anfahrt</h4>
<p>Von <a href="/de/autovermietung-murta-maria">Murta Maria</a>: 2 Min. Von Olbia: 12 Min. Gebührenpflichtiger Parkplatz mit einfachem Zugang zu allen vier Buchten. Entfernung zum KS Rent-Büro: <strong>10 km, 12 Min</strong>.</p>

<h4>Die 4 Buchten</h4>
<ul>
  <li><strong>Erste Bucht:</strong> ausgestattet, mit Kiosk und Liegen</li>
  <li><strong>Zweite und dritte:</strong> freier Strand, ruhiger</li>
  <li><strong>Vierte Bucht:</strong> die intimste, Felsen und Privatsphäre</li>
  <li>Flacher Sandboden in allen vier</li>
</ul>

<h4>Ausflüge</h4>
<p>Von <a href="/de/autovermietung-porto-san-paolo">Porto San Paolo</a> (10 Min Fahrt) Bootsausflüge nach Tavolara: Strand Spalmatore und das "kleinste Königreich der Welt". Empfohlen: <strong>Fiat Panda</strong> oder <strong>Jeep Avenger</strong> für <a href="/de/autovermietung-capo-coda-cavallo">Capo Coda Cavallo</a>.</p>',
  parking_info_de     = 'Gebührenpflichtiger Parkplatz mit einfachem Zugang zu allen vier Buchten; kurze Wege von den Stellplätzen.'
WHERE slug = 'porto-istana';

UPDATE public.seo_beaches SET
  slug_fr             = 'porto-istana',
  title_fr            = 'Plage Porto Istana Tavolara Sardaigne | KS Rent',
  h1_fr               = 'Porto Istana : quatre criques face à l''île de Tavolara',
  meta_description_fr = 'Porto Istana : 4 criques avec granit rose et vue sur Tavolara. Parking payant. À 2 min de Murta Maria. KS Rent livre les voitures depuis Olbia.',
  content_html_fr     = '<p class="snippet-bait"><strong>Porto Istana compte 4 criques de granit rose avec la vue la plus proche sur l''île de Tavolara.</strong> Parking payant. À 2 minutes de Murta Maria. KS Rent Sardaigne livre les voitures depuis Olbia en 10 min.</p>

<h3>Porto Istana : quatre criques face à Tavolara</h3>
<p>Porto Istana n''est pas une plage mais quatre criques séparées par des formations de granit rose. L''eau mêle azur et vert émeraude, avec Tavolara qui se dresse majestueusement en face.</p>

<h4>Comment y arriver</h4>
<p>Depuis <a href="/fr/location-voiture-murta-maria">Murta Maria</a> : 2 min. D''Olbia : 12 min. Parking payant avec accès facile aux quatre criques. Distance du bureau KS Rent : <strong>10 km, 12 minutes</strong>.</p>

<h4>Les 4 criques</h4>
<ul>
  <li><strong>Première crique :</strong> la plus équipée, kiosque et transats</li>
  <li><strong>Deuxième et troisième :</strong> plage libre, plus calmes</li>
  <li><strong>Quatrième crique :</strong> la plus intime, rochers et intimité</li>
  <li>Fond sableux peu profond dans les quatre</li>
</ul>

<h4>Excursions</h4>
<p>Depuis <a href="/fr/location-voiture-porto-san-paolo">Porto San Paolo</a> (10 min en voiture), des bateaux partent pour l''île de Tavolara : plage Spalmatore et "le plus petit royaume du monde". Voiture conseillée : <strong>Fiat Panda</strong> ou <strong>Jeep Avenger</strong> pour <a href="/fr/location-voiture-capo-coda-cavallo">Capo Coda Cavallo</a>.</p>',
  parking_info_fr     = 'Parking payant avec accès facile aux quatre criques ; sentiers courts depuis les places de parking.'
WHERE slug = 'porto-istana';

-- ──────────────────────────────────────────────────────────────
-- 13) porto-taverna
-- ──────────────────────────────────────────────────────────────

UPDATE public.seo_beaches SET
  slug_en             = 'porto-taverna',
  title_en            = 'Porto Taverna Beach Tavolara View | KS Rent Sardinia',
  h1_en               = 'Porto Taverna: The Best View of Tavolara and Beachside Restaurants',
  meta_description_en = 'Porto Taverna: the most spectacular view of Tavolara. Panoramic walkway, restaurants on the beach. Reach from Porto San Paolo with a KS Rent car.',
  content_html_en     = '<p class="snippet-bait"><strong>Porto Taverna offers the most spectacular frontal view of Tavolara Island in all Sardinia.</strong> Fish restaurants on the beach. Paid car park. KS Rent delivers cars from Olbia in 15 min.</p>

<h3>Porto Taverna: The Best Panorama of Tavolara</h3>
<p>If you want the perfect photo, Porto Taverna is the place. No other beach offers such a close, frontal view of Tavolara. The wide stretch of sand is crossed by a scenic wooden walkway over a pond rich in birdlife.</p>

<h4>How to Get There</h4>
<p>From <a href="/en/car-hire-porto-san-paolo">Porto San Paolo</a>: 5 minutes south. From Olbia: 18 minutes. Paid car park near the seafront restaurants. Distance: <strong>18 km from Olbia</strong>.</p>

<h4>Tips</h4>
<ul>
  <li>Historic seafront restaurants serving fresh fish</li>
  <li>Fine golden sand, shallow and even seabed</li>
  <li>Wooden walkway for breathtaking panoramic photos</li>
  <li>Free zone and equipped zone available</li>
</ul>

<h4>Nearby Beaches</h4>
<p><a href="/en/porto-istana">Porto Istana</a> (8 min), <a href="/en/car-hire-capo-coda-cavallo">Capo Coda Cavallo</a> (10 min). Recommended car: <strong>Fiat Panda</strong> for Porto Taverna (paved road), <strong>Jeep Avenger</strong> if you also visit Capo Coda Cavallo.</p>',
  parking_info_en     = 'Paid car park near the seafront restaurants; short walk over a wooden walkway to the sand.'
WHERE slug = 'porto-taverna';

UPDATE public.seo_beaches SET
  slug_de             = 'porto-taverna',
  title_de            = 'Strand Porto Taverna Tavolara-Blick | KS Rent Sardinien',
  h1_de               = 'Porto Taverna: Bester Blick auf Tavolara mit Strandrestaurants',
  meta_description_de = 'Porto Taverna: spektakulärster Tavolara-Blick. Panoramasteg, Restaurants am Strand. Von Porto San Paolo mit einem KS Rent-Auto erreichen.',
  content_html_de     = '<p class="snippet-bait"><strong>Porto Taverna bietet den spektakulärsten frontalen Tavolara-Blick ganz Sardiniens.</strong> Fischrestaurants am Strand. Gebührenpflichtiger Parkplatz. KS Rent liefert Autos in 15 Min ab Olbia.</p>

<h3>Porto Taverna: Das schönste Tavolara-Panorama</h3>
<p>Wer das perfekte Foto sucht, ist hier richtig. Kein anderer Strand bietet einen so nahen, frontalen Tavolara-Blick. Der breite Strand wird von einem szenischen Holzsteg über einen vogelreichen Teich gequert.</p>

<h4>Anfahrt</h4>
<p>Von <a href="/de/autovermietung-porto-san-paolo">Porto San Paolo</a>: 5 Min nach Süden. Von Olbia: 18 Min. Gebührenpflichtiger Parkplatz nahe den Meeresrestaurants. Entfernung: <strong>18 km ab Olbia</strong>.</p>

<h4>Tipps</h4>
<ul>
  <li>Historische Restaurants direkt am Strand mit frischem Fisch</li>
  <li>Feiner goldener Sand, flacher, gleichmäßiger Grund</li>
  <li>Holzsteg für atemberaubende Panoramafotos</li>
  <li>Freier Bereich und Strandbad verfügbar</li>
</ul>

<h4>Strände in der Nähe</h4>
<p><a href="/de/porto-istana">Porto Istana</a> (8 Min), <a href="/de/autovermietung-capo-coda-cavallo">Capo Coda Cavallo</a> (10 Min). Empfohlen: <strong>Fiat Panda</strong> für Porto Taverna, <strong>Jeep Avenger</strong> mit Capo Coda Cavallo.</p>',
  parking_info_de     = 'Gebührenpflichtiger Parkplatz nahe den Meeresrestaurants; kurzer Holzsteg führt zum Sand.'
WHERE slug = 'porto-taverna';

UPDATE public.seo_beaches SET
  slug_fr             = 'porto-taverna',
  title_fr            = 'Plage Porto Taverna vue Tavolara | KS Rent Sardaigne',
  h1_fr               = 'Porto Taverna : la plus belle vue sur Tavolara avec restaurants',
  meta_description_fr = 'Porto Taverna : la vue la plus spectaculaire sur Tavolara. Passerelle panoramique, restaurants sur la plage. Depuis Porto San Paolo avec KS Rent.',
  content_html_fr     = '<p class="snippet-bait"><strong>Porto Taverna offre la vue la plus spectaculaire et frontale sur l''île de Tavolara de toute la Sardaigne.</strong> Restaurants de poisson sur la plage. Parking payant. KS Rent livre depuis Olbia en 15 min.</p>

<h3>Porto Taverna : le plus beau panorama sur Tavolara</h3>
<p>Pour la photo parfaite, c''est ici. Aucune autre plage n''offre une vue aussi proche et frontale sur Tavolara. Le vaste rivage est traversé par une passerelle en bois scénique au-dessus d''un étang riche en avifaune.</p>

<h4>Comment y arriver</h4>
<p>Depuis <a href="/fr/location-voiture-porto-san-paolo">Porto San Paolo</a> : 5 min vers le sud. D''Olbia : 18 min. Parking payant près des restaurants en bord de mer. Distance : <strong>18 km d''Olbia</strong>.</p>

<h4>Conseils</h4>
<ul>
  <li>Restaurants historiques sur la plage avec poisson frais</li>
  <li>Sable fin doré, fond peu profond et régulier</li>
  <li>Passerelle en bois pour photos panoramiques</li>
  <li>Zone libre et zone équipée disponibles</li>
</ul>

<h4>Plages voisines</h4>
<p><a href="/fr/porto-istana">Porto Istana</a> (8 min), <a href="/fr/location-voiture-capo-coda-cavallo">Capo Coda Cavallo</a> (10 min). Voiture conseillée : <strong>Fiat Panda</strong> pour Porto Taverna, <strong>Jeep Avenger</strong> avec Capo Coda Cavallo.</p>',
  parking_info_fr     = 'Parking payant près des restaurants en bord de mer ; courte passerelle en bois jusqu''au sable.'
WHERE slug = 'porto-taverna';

-- ──────────────────────────────────────────────────────────────
-- 14) rena-bianca
-- ──────────────────────────────────────────────────────────────

UPDATE public.seo_beaches SET
  slug_en             = 'rena-bianca',
  title_en            = 'Rena Bianca Santa Teresa Sardinia | KS Rent Olbia',
  h1_en               = 'Rena Bianca: Blue Flag Beach with a View of Corsica',
  meta_description_en = 'Rena Bianca: Blue Flag beach in central Santa Teresa Gallura. Impalpable sand with view of Bonifacio. Limited parking. KS Rent from Olbia in 55 min.',
  content_html_en     = '<p class="snippet-bait"><strong>Rena Bianca is a Blue Flag beach in the centre of Santa Teresa Gallura, with views of the Bonifacio cliffs in Corsica.</strong> Limited parking — arrive early. KS Rent delivers Mercedes and Jeeps from Olbia in 55 min.</p>

<h3>Rena Bianca: Blue Flag with a View of Corsica</h3>
<p>In the heart of Santa Teresa Gallura, Rena Bianca repeatedly earns the Blue Flag. From the impalpable, brilliant-white sand you can admire the Bonifacio cliffs in Corsica, just 12 km away. Clear, fresh water with incredible colours.</p>

<h4>How to Get There</h4>
<p>In the centre of <a href="/en/car-hire-santa-teresa-gallura">Santa Teresa Gallura</a>. City car parks in the surrounding streets or the square above the beach (<strong>very crowded</strong> in summer). Tip: park on the outskirts and walk 5 minutes. Distance from Olbia: <strong>60 km, 55 minutes</strong>.</p>

<h4>Tips</h4>
<ul>
  <li>On clear days you can see the houses of Bonifacio in Corsica</li>
  <li>Fresh water — currents from the Bocche keep the temperature low</li>
  <li>Bar and services available, public showers</li>
  <li>The ferry to Corsica leaves from the harbour (50-min crossing)</li>
</ul>

<h4>Nearby Beaches</h4>
<p><a href="/en/capo-testa">Capo Testa</a> (5 min, millenary granite and Moon Valley). If the Mistral hits Rena Bianca, Rena di Levante at Capo Testa is sheltered. Recommended car: <strong>Mercedes A-Class</strong> for the long journey from Olbia.</p>',
  parking_info_en     = 'Limited city car parks in surrounding streets and a small square above the beach; better to park on the outskirts and walk 5 minutes.'
WHERE slug = 'rena-bianca';

UPDATE public.seo_beaches SET
  slug_de             = 'rena-bianca',
  title_de            = 'Strand Rena Bianca Santa Teresa Sardinien | KS Rent Olbia',
  h1_de               = 'Rena Bianca: Blaue Flagge mit Blick auf Korsika',
  meta_description_de = 'Rena Bianca: Blaue Flagge im Zentrum von Santa Teresa Gallura. Feinster Sand mit Bonifacio-Blick. Begrenzte Parkplätze. KS Rent ab Olbia in 55 Min.',
  content_html_de     = '<p class="snippet-bait"><strong>Rena Bianca trägt die Blaue Flagge im Zentrum von Santa Teresa Gallura, mit Blick auf die Klippen von Bonifacio in Korsika.</strong> Begrenzte Parkplätze — früh kommen. KS Rent liefert Mercedes und Jeeps ab Olbia in 55 Min.</p>

<h3>Rena Bianca: Blaue Flagge mit Korsika-Blick</h3>
<p>Im Herzen von Santa Teresa Gallura erhält Rena Bianca regelmäßig die Blaue Flagge. Vom feinen, schneeweißen Sand sieht man die Klippen von Bonifacio in Korsika, nur 12 km entfernt. Klares, frisches Wasser mit unglaublichen Farben.</p>

<h4>Anfahrt</h4>
<p>Im Zentrum von <a href="/de/autovermietung-santa-teresa-gallura">Santa Teresa Gallura</a>. Stadtparkplätze in den umliegenden Straßen oder der Platz oberhalb (<strong>im Sommer überfüllt</strong>). Tipp: am Stadtrand parken und 5 Min laufen. Entfernung von Olbia: <strong>60 km, 55 Min</strong>.</p>

<h4>Tipps</h4>
<ul>
  <li>Bei klarer Sicht sieht man die Häuser von Bonifacio</li>
  <li>Frisches Wasser — Strömungen aus den Bocche halten die Temperatur niedrig</li>
  <li>Bar und Services verfügbar, öffentliche Duschen</li>
  <li>Fähre nach Korsika ab dem Hafen (50-Min-Überfahrt)</li>
</ul>

<h4>Strände in der Nähe</h4>
<p><a href="/de/capo-testa">Capo Testa</a> (5 Min, Granit und Mondtal). Bei Maestrale ist die Rena di Levante an Capo Testa geschützt. Empfohlen: <strong>Mercedes A-Klasse</strong> für die lange Strecke von Olbia.</p>',
  parking_info_de     = 'Begrenzte Stadtparkplätze in den Nebenstraßen und ein kleiner Platz oberhalb des Strandes; besser am Stadtrand parken und 5 Minuten laufen.'
WHERE slug = 'rena-bianca';

UPDATE public.seo_beaches SET
  slug_fr             = 'rena-bianca',
  title_fr            = 'Plage Rena Bianca Santa Teresa Sardaigne | KS Rent Olbia',
  h1_fr               = 'Rena Bianca : Pavillon Bleu avec vue sur la Corse',
  meta_description_fr = 'Rena Bianca : Pavillon Bleu au centre de Santa Teresa Gallura. Sable impalpable, vue sur Bonifacio. Parking limité. KS Rent depuis Olbia en 55 min.',
  content_html_fr     = '<p class="snippet-bait"><strong>Rena Bianca est Pavillon Bleu au centre de Santa Teresa Gallura, avec vue sur les falaises de Bonifacio en Corse.</strong> Stationnement limité — arrivez tôt. KS Rent livre Mercedes et Jeeps depuis Olbia en 55 min.</p>

<h3>Rena Bianca : Pavillon Bleu avec vue sur la Corse</h3>
<p>Au cœur de Santa Teresa Gallura, Rena Bianca affiche régulièrement le Pavillon Bleu. Du sable impalpable et très blanc, on admire les falaises de Bonifacio en Corse, à seulement 12 km. Eau limpide, fraîche et aux couleurs incroyables.</p>

<h4>Comment y arriver</h4>
<p>Au centre de <a href="/fr/location-voiture-santa-teresa-gallura">Santa Teresa Gallura</a>. Stationnements dans les rues alentours ou place au-dessus de la plage (<strong>très fréquentée</strong> en été). Conseil : garez-vous en périphérie et marchez 5 min. Distance d''Olbia : <strong>60 km, 55 minutes</strong>.</p>

<h4>Conseils</h4>
<ul>
  <li>Par temps clair, on voit les maisons de Bonifacio</li>
  <li>Eau fraîche — les courants des Bouches maintiennent la température basse</li>
  <li>Bar et services disponibles, douches publiques</li>
  <li>Ferry pour la Corse depuis le port (50 min de traversée)</li>
</ul>

<h4>Plages voisines</h4>
<p><a href="/fr/capo-testa">Capo Testa</a> (5 min, granit millénaire et Vallée de la Lune). Si le Mistral souffle fort, la Rena di Levante à Capo Testa est abritée. Voiture conseillée : <strong>Mercedes Classe A</strong>.</p>',
  parking_info_fr     = 'Stationnements urbains limités dans les rues alentour et une petite place au-dessus de la plage ; mieux vaut se garer en périphérie et marcher 5 minutes.'
WHERE slug = 'rena-bianca';

-- ──────────────────────────────────────────────────────────────
-- 15) cala-del-faro
-- ──────────────────────────────────────────────────────────────

UPDATE public.seo_beaches SET
  slug_en             = 'cala-del-faro',
  title_en            = 'Cala del Faro Baja Sardinia Sunset | KS Rent',
  h1_en               = 'Cala del Faro: Spectacular Sunsets and Shallow Water',
  meta_description_en = 'Cala del Faro: elegant beach north of Porto Cervo with views over La Maddalena Archipelago. Limited parking. KS Rent car with hotel delivery.',
  content_html_en     = '<p class="snippet-bait"><strong>Cala del Faro is the beach for the most beautiful sunsets on the Costa Smeralda, a few minutes from Baja Sardinia.</strong> Shallow sandy seabed. Limited parking. KS Rent delivers cars with premium hotel service.</p>

<h3>Cala del Faro: Dreamy Sunsets over the Archipelago</h3>
<p>Set in an elegant residential context, Cala del Faro combines wild nature and curated services. The view stretches to the La Maddalena Archipelago and at sunset offers one of the most beautiful light shows in north-east Sardinia.</p>

<h4>How to Get There</h4>
<p>From <a href="/en/car-hire-baja-sardinia">Baja Sardinia</a>: 3 minutes. From <a href="/en/car-hire-porto-cervo">Porto Cervo</a>: 10 minutes. Limited parking along the access road. Distance from Olbia: <strong>30 km, 30 minutes</strong>.</p>

<h4>Tips</h4>
<ul>
  <li>Shallow, very sandy seabed — safe for children</li>
  <li>Less crowded than the main beaches — ideal for relaxing</li>
  <li>One of the best sunsets in Sardinia</li>
  <li>Private residence nearby — respect the signs</li>
</ul>

<h4>Beaches in the Area</h4>
<p><a href="/en/grande-pevero">Grande Pevero</a> (5 min), <a href="/en/la-celvia">La Celvia</a> (8 min), <a href="/en/capriccioli">Capriccioli</a> (12 min). Recommended car: <strong>Mercedes A-Class</strong> or <strong>Audi RS3</strong> for the paved roads of the Costa Smeralda.</p>',
  parking_info_en     = 'Limited parking along the access road; arrive early in high season and respect the private residence signage.'
WHERE slug = 'cala-del-faro';

UPDATE public.seo_beaches SET
  slug_de             = 'cala-del-faro',
  title_de            = 'Strand Cala del Faro Baja Sardinia Sonnenuntergang | KS Rent',
  h1_de               = 'Cala del Faro: Spektakuläre Sonnenuntergänge und flaches Wasser',
  meta_description_de = 'Cala del Faro: eleganter Strand nördlich von Porto Cervo mit Blick auf das Maddalena-Archipel. Begrenzte Parkplätze. KS Rent mit Hotelzustellung.',
  content_html_de     = '<p class="snippet-bait"><strong>Cala del Faro ist der Strand mit den schönsten Sonnenuntergängen der Costa Smeralda, wenige Minuten von Baja Sardinia.</strong> Flacher Sandboden. Begrenzte Parkplätze. KS Rent liefert Autos mit Premium-Hotelservice.</p>

<h3>Cala del Faro: Traumhafte Sonnenuntergänge</h3>
<p>In einem eleganten Wohnumfeld vereint Cala del Faro wilde Natur und gepflegten Service. Der Blick reicht bis zum Maddalena-Archipel, und bei Sonnenuntergang gibt es eines der schönsten Lichtspiele Nordost-Sardiniens.</p>

<h4>Anfahrt</h4>
<p>Von <a href="/de/autovermietung-baja-sardinia">Baja Sardinia</a>: 3 Min. Von <a href="/de/autovermietung-porto-cervo">Porto Cervo</a>: 10 Min. Begrenzte Parkmöglichkeiten entlang der Zufahrt. Entfernung von Olbia: <strong>30 km, 30 Min</strong>.</p>

<h4>Tipps</h4>
<ul>
  <li>Flacher, sehr sandiger Grund — sicher für Kinder</li>
  <li>Weniger überfüllt — ideal zur Entspannung</li>
  <li>Einer der schönsten Sonnenuntergänge Sardiniens</li>
  <li>Private Wohnanlage in der Nähe — Beschilderung respektieren</li>
</ul>

<h4>Strände in der Umgebung</h4>
<p><a href="/de/grande-pevero">Grande Pevero</a> (5 Min), <a href="/de/la-celvia">La Celvia</a> (8 Min), <a href="/de/capriccioli">Capriccioli</a> (12 Min). Empfohlen: <strong>Mercedes A-Klasse</strong> oder <strong>Audi RS3</strong>.</p>',
  parking_info_de     = 'Begrenzte Parkmöglichkeiten entlang der Zufahrtsstraße; in der Hochsaison früh kommen und die Hinweise der Privatanlage beachten.'
WHERE slug = 'cala-del-faro';

UPDATE public.seo_beaches SET
  slug_fr             = 'cala-del-faro',
  title_fr            = 'Plage Cala del Faro Baja Sardinia coucher | KS Rent',
  h1_fr               = 'Cala del Faro : couchers de soleil spectaculaires et eau peu profonde',
  meta_description_fr = 'Cala del Faro : plage élégante au nord de Porto Cervo avec vue sur l''archipel de La Maddalena. Parking limité. KS Rent avec livraison à l''hôtel.',
  content_html_fr     = '<p class="snippet-bait"><strong>Cala del Faro est la plage des plus beaux couchers de soleil de la Costa Smeralda, à quelques minutes de Baja Sardinia.</strong> Fond sableux peu profond. Parking limité. KS Rent livre les voitures avec service premium à l''hôtel.</p>

<h3>Cala del Faro : couchers de soleil de rêve sur l''archipel</h3>
<p>Dans un cadre résidentiel élégant, Cala del Faro allie nature sauvage et services soignés. La vue s''étend jusqu''à l''archipel de La Maddalena et au coucher du soleil offre l''un des plus beaux spectacles de lumière du nord-est sarde.</p>

<h4>Comment y arriver</h4>
<p>Depuis <a href="/fr/location-voiture-baja-sardinia">Baja Sardinia</a> : 3 min. Depuis <a href="/fr/location-voiture-porto-cervo">Porto Cervo</a> : 10 min. Stationnement limité le long de la route d''accès. Distance d''Olbia : <strong>30 km, 30 minutes</strong>.</p>

<h4>Conseils</h4>
<ul>
  <li>Fond peu profond et très sableux — sûr pour les enfants</li>
  <li>Moins fréquentée — idéal pour la détente</li>
  <li>L''un des plus beaux couchers de soleil de Sardaigne</li>
  <li>Résidence privée à proximité — respectez la signalétique</li>
</ul>

<h4>Plages dans la zone</h4>
<p><a href="/fr/grande-pevero">Grande Pevero</a> (5 min), <a href="/fr/la-celvia">La Celvia</a> (8 min), <a href="/fr/capriccioli">Capriccioli</a> (12 min). Voiture conseillée : <strong>Mercedes Classe A</strong> ou <strong>Audi RS3</strong>.</p>',
  parking_info_fr     = 'Stationnement limité le long de la route d''accès ; arrivez tôt en haute saison et respectez la signalétique de la résidence privée.'
WHERE slug = 'cala-del-faro';

-- ──────────────────────────────────────────────────────────────
-- 16) la-celvia
-- ──────────────────────────────────────────────────────────────

UPDATE public.seo_beaches SET
  slug_en             = 'la-celvia',
  title_en            = 'La Celvia Beach Costa Smeralda Sardinia | KS Rent',
  h1_en               = 'La Celvia: Amber Sand and Luxury Villas in Costa Smeralda',
  meta_description_en = 'La Celvia: coarse-grain sand with amber reflections, a VIP favourite. Limited parking at weekends. Hire a premium car with KS Rent — no credit card.',
  content_html_en     = '<p class="snippet-bait"><strong>La Celvia is the favourite beach of Costa Smeralda VIPs: coarse-grain amber sand that does not stick to the skin.</strong> Luxury villas in the Mediterranean scrub. KS Rent delivers premium cars without a credit card.</p>

<h3>La Celvia: Amber Sand and Luxury Villas</h3>
<p>La Celvia stands out for its coarse-grain sand, formed by shell fragments with pink and amber reflections. It does not stick to the skin — a natural luxury. Lavish villas in the Mediterranean scrub and a discreet, exclusive atmosphere.</p>

<h4>How to Get There</h4>
<p>Between <a href="/en/car-hire-arzachena">Arzachena</a> and <a href="/en/romazzino">Romazzino</a>: follow signs from the SP59. Paid parking along the access road — <strong>limited spaces at weekends</strong>. Distance from Olbia: <strong>32 km, 35 minutes</strong>.</p>

<h4>Tips</h4>
<ul>
  <li>The sand does not burn or stick — perfect even without a towel</li>
  <li>Crystal-clear water with turquoise reflections</li>
  <li>Quiet zone, less busy than Capriccioli</li>
  <li>No facilities on the beach — bring what you need</li>
</ul>

<h4>Nearby Beaches</h4>
<p><a href="/en/romazzino">Romazzino</a> (5 min), <a href="/en/capriccioli">Capriccioli</a> (5 min), <a href="/en/grande-pevero">Grande Pevero</a> (8 min). Recommended car: <strong>Audi RS3</strong> or <strong>BMW M2</strong> for the panoramic Costa Smeralda roads.</p>',
  parking_info_en     = 'Paid parking along the access road with limited spaces at weekends; no facilities once on the sand.'
WHERE slug = 'la-celvia';

UPDATE public.seo_beaches SET
  slug_de             = 'la-celvia',
  title_de            = 'Strand La Celvia Costa Smeralda Sardinien | KS Rent',
  h1_de               = 'La Celvia: Bernsteinfarbener Sand und Luxusvillen',
  meta_description_de = 'La Celvia: grobkörniger Sand mit Bernsteinreflexen, VIP-Liebling. Wenige Plätze am Wochenende. Premium-Auto bei KS Rent — ohne Kreditkarte.',
  content_html_de     = '<p class="snippet-bait"><strong>La Celvia ist der Lieblingsstrand der VIPs der Costa Smeralda: grobkörniger Bernsteinsand, der nicht an der Haut klebt.</strong> Luxusvillen in der Macchia. KS Rent liefert Premium-Autos ohne Kreditkarte.</p>

<h3>La Celvia: Bernsteinsand und Luxusvillen</h3>
<p>La Celvia zeichnet sich durch grobkörnigen Sand aus, geformt aus Muschelfragmenten mit rosa und bernsteinfarbenen Reflexen. Er klebt nicht an der Haut — ein natürlicher Luxus. Luxuriöse Villen in der Macchia und eine diskrete, exklusive Atmosphäre.</p>

<h4>Anfahrt</h4>
<p>Zwischen <a href="/de/autovermietung-arzachena">Arzachena</a> und <a href="/de/romazzino">Romazzino</a>: Schildern von der SP59 folgen. Kostenpflichtige Parkplätze entlang der Zufahrt — <strong>begrenzte Plätze am Wochenende</strong>. Entfernung von Olbia: <strong>32 km, 35 Min</strong>.</p>

<h4>Tipps</h4>
<ul>
  <li>Sand wird nicht heiß und klebt nicht — auch ohne Tuch perfekt</li>
  <li>Kristallklares Wasser mit Türkisreflexen</li>
  <li>Ruhig, weniger als Capriccioli</li>
  <li>Keine Services am Strand</li>
</ul>

<h4>Strände in der Nähe</h4>
<p><a href="/de/romazzino">Romazzino</a> (5 Min), <a href="/de/capriccioli">Capriccioli</a> (5 Min), <a href="/de/grande-pevero">Grande Pevero</a> (8 Min). Empfohlen: <strong>Audi RS3</strong> oder <strong>BMW M2</strong>.</p>',
  parking_info_de     = 'Gebührenpflichtige Parkplätze entlang der Zufahrtsstraße mit wenigen freien Plätzen am Wochenende; keine Services am Strand.'
WHERE slug = 'la-celvia';

UPDATE public.seo_beaches SET
  slug_fr             = 'la-celvia',
  title_fr            = 'Plage La Celvia Costa Smeralda Sardaigne | KS Rent',
  h1_fr               = 'La Celvia : sable ambré et villas de luxe en Costa Smeralda',
  meta_description_fr = 'La Celvia : sable à gros grain aux reflets ambrés, préférée des VIP. Places limitées le week-end. Louez une voiture premium avec KS Rent.',
  content_html_fr     = '<p class="snippet-bait"><strong>La Celvia est la plage préférée des VIP de la Costa Smeralda : sable à gros grain ambré qui ne colle pas à la peau.</strong> Villas de luxe dans le maquis. KS Rent livre des voitures premium sans carte de crédit.</p>

<h3>La Celvia : sable ambré et villas de luxe</h3>
<p>La Celvia se distingue par son sable à gros grain, formé de fragments de coquillages aux reflets rosés et ambrés. Il ne colle pas à la peau — un luxe naturel. Villas somptueuses dans le maquis et atmosphère discrète et exclusive.</p>

<h4>Comment y arriver</h4>
<p>Entre <a href="/fr/location-voiture-arzachena">Arzachena</a> et <a href="/fr/romazzino">Romazzino</a> : suivez les panneaux depuis la SP59. Parking payant le long de la route — <strong>places limitées le week-end</strong>. Distance d''Olbia : <strong>32 km, 35 minutes</strong>.</p>

<h4>Conseils</h4>
<ul>
  <li>Le sable ne brûle pas et ne colle pas — parfait même sans serviette</li>
  <li>Eau cristalline aux reflets turquoise</li>
  <li>Zone calme, moins fréquentée que Capriccioli</li>
  <li>Aucun service sur la plage — apportez le nécessaire</li>
</ul>

<h4>Plages voisines</h4>
<p><a href="/fr/romazzino">Romazzino</a> (5 min), <a href="/fr/capriccioli">Capriccioli</a> (5 min), <a href="/fr/grande-pevero">Grande Pevero</a> (8 min). Voiture conseillée : <strong>Audi RS3</strong> ou <strong>BMW M2</strong>.</p>',
  parking_info_fr     = 'Parking payant le long de la route d''accès avec places limitées le week-end ; aucun service une fois sur le sable.'
WHERE slug = 'la-celvia';

-- ──────────────────────────────────────────────────────────────
-- 17) spiaggia-marinella
-- ──────────────────────────────────────────────────────────────

UPDATE public.seo_beaches SET
  slug_en             = 'spiaggia-marinella',
  title_en            = 'Marinella Beach Porto Rotondo Sardinia | KS Rent',
  h1_en               = 'Marinella Beach: Kilometres of Sand, Sport and Lounge Bars',
  meta_description_en = 'Marinella Beach: kilometres of sand for windsurfing and families. Beach clubs that turn into lounge bars at sunset. Large car park. KS Rent from Porto Rotondo.',
  content_html_en     = '<p class="snippet-bait"><strong>Marinella Beach: kilometres of sand between Porto Rotondo and Golfo Aranci, with beach clubs that become lounge bars at sunset.</strong> Large paid car park. KS Rent delivers cars from Olbia in 20 minutes.</p>

<h3>Marinella Beach: Space, Sport and Sunset Aperitifs</h3>
<p>A huge bay perfect for young people, families and sport lovers. Kilometres of soft sand, shallow waters and stylish beach clubs that turn into lounge bars with live music at sunset.</p>

<h4>How to Get There</h4>
<p>From <a href="/en/car-hire-porto-rotondo">Porto Rotondo</a>: 3 minutes. From Olbia: 15 minutes. Vast paid parking area run by the municipality right in front of the beach clubs. Distance: <strong>18 km from Olbia</strong>.</p>

<h4>Activities</h4>
<ul>
  <li>Windsurf, sup, kayak — equipment hire on the beach</li>
  <li>Beach clubs with sunbeds and bar/restaurant service</li>
  <li>Sunset: aperitif with DJ set in the beach bars</li>
  <li>Shallow seabed: ideal for children and swimming</li>
</ul>

<h4>Nearby Beaches</h4>
<p>Ira Beach (5 min, more intimate), <a href="/en/car-hire-golfo-aranci">Golfo Aranci</a> (10 min, village and dolphins). Recommended car: <strong>Mercedes A-Class</strong> for comfort or <strong>Fiat Panda</strong> for practicality.</p>',
  parking_info_en     = 'Vast paid parking area run by the municipality directly opposite the beach clubs.'
WHERE slug = 'spiaggia-marinella';

UPDATE public.seo_beaches SET
  slug_de             = 'spiaggia-marinella',
  title_de            = 'Strand Marinella Porto Rotondo Sardinien | KS Rent',
  h1_de               = 'Strand Marinella: Kilometer Sand, Sport und Lounge-Bars',
  meta_description_de = 'Strand Marinella: Kilometer Sand für Windsurfen und Familien. Strandbäder werden zu Lounge-Bars bei Sonnenuntergang. Großer Parkplatz. KS Rent ab Porto Rotondo.',
  content_html_de     = '<p class="snippet-bait"><strong>Strand Marinella: Kilometer Sand zwischen Porto Rotondo und Golfo Aranci, mit Strandbädern, die abends zu Lounge-Bars werden.</strong> Großer gebührenpflichtiger Parkplatz. KS Rent liefert Autos in 20 Min ab Olbia.</p>

<h3>Strand Marinella: Platz, Sport und Aperitifs</h3>
<p>Eine riesige Bucht, perfekt für junge Leute, Familien und Sportler. Kilometer weichen Sandes, flaches Wasser und stilvolle Strandbäder, die bei Sonnenuntergang mit Live-Musik zu Lounge-Bars werden.</p>

<h4>Anfahrt</h4>
<p>Von <a href="/de/autovermietung-porto-rotondo">Porto Rotondo</a>: 3 Min. Von Olbia: 15 Min. Riesiges gemeindeeigenes gebührenpflichtiges Parkareal direkt vor den Strandbädern. Entfernung: <strong>18 km ab Olbia</strong>.</p>

<h4>Aktivitäten</h4>
<ul>
  <li>Windsurfen, SUP, Kajak — Verleih am Strand</li>
  <li>Strandbäder mit Liegen und Bar/Restaurant-Service</li>
  <li>Sonnenuntergang: Aperitif mit DJ-Set</li>
  <li>Flacher Grund: ideal für Kinder und Schwimmen</li>
</ul>

<h4>Strände in der Nähe</h4>
<p>Ira Beach (5 Min, intimer), <a href="/de/autovermietung-golfo-aranci">Golfo Aranci</a> (10 Min, Dorf und Delfine). Empfohlen: <strong>Mercedes A-Klasse</strong> oder <strong>Fiat Panda</strong>.</p>',
  parking_info_de     = 'Großes gemeindeeigenes gebührenpflichtiges Parkareal direkt gegenüber den Strandbädern.'
WHERE slug = 'spiaggia-marinella';

UPDATE public.seo_beaches SET
  slug_fr             = 'spiaggia-marinella',
  title_fr            = 'Plage Marinella Porto Rotondo Sardaigne | KS Rent',
  h1_fr               = 'Plage Marinella : kilomètres de sable, sport et lounge bars',
  meta_description_fr = 'Plage Marinella : kilomètres de sable pour windsurf et familles. Établissements qui deviennent lounge bars au coucher du soleil. Grand parking. KS Rent.',
  content_html_fr     = '<p class="snippet-bait"><strong>Plage Marinella : des kilomètres de sable entre Porto Rotondo et Golfo Aranci, avec des établissements qui se transforment en lounge bars au coucher du soleil.</strong> Vaste parking payant. KS Rent livre les voitures depuis Olbia en 20 min.</p>

<h3>Plage Marinella : espace, sport et apéritifs au coucher du soleil</h3>
<p>Une immense baie parfaite pour les jeunes, les familles et les sportifs. Des kilomètres de sable souple, des fonds peu profonds et des établissements à la mode qui se transforment en lounge bars avec musique live au coucher du soleil.</p>

<h4>Comment y arriver</h4>
<p>Depuis <a href="/fr/location-voiture-porto-rotondo">Porto Rotondo</a> : 3 min. D''Olbia : 15 min. Vaste zone de stationnement payante gérée par la commune juste en face des établissements. Distance : <strong>18 km d''Olbia</strong>.</p>

<h4>Activités</h4>
<ul>
  <li>Windsurf, sup, kayak — location de matériel sur la plage</li>
  <li>Établissements avec transats et service bar/restaurant</li>
  <li>Coucher du soleil : apéritif avec DJ set dans les beach bars</li>
  <li>Fond peu profond : idéal pour les enfants et la nage</li>
</ul>

<h4>Plages voisines</h4>
<p>Ira Beach (5 min, plus intime), <a href="/fr/location-voiture-golfo-aranci">Golfo Aranci</a> (10 min, village et dauphins). Voiture conseillée : <strong>Mercedes Classe A</strong> ou <strong>Fiat Panda</strong>.</p>',
  parking_info_fr     = 'Vaste zone de stationnement payante gérée par la commune, juste en face des établissements de plage.'
WHERE slug = 'spiaggia-marinella';

-- ──────────────────────────────────────────────────────────────
-- 18) spiaggia-bados
-- ──────────────────────────────────────────────────────────────

UPDATE public.seo_beaches SET
  slug_en             = 'spiaggia-bados',
  title_en            = 'Bados Beach Olbia Sardinia | KS Rent Car Hire',
  h1_en               = 'Bados Beach: Fine Sand and Calm Water Near Olbia',
  meta_description_en = 'Bados Beach: very gentle seabed and calm waters, perfect for families. Parking in front of the beach. KS Rent delivers cars quickly from Olbia.',
  content_html_en     = '<p class="snippet-bait"><strong>Bados Beach: the quietest beach in Olbia with a very gentle seabed, ideal for families with children.</strong> Parking in front of the beach. KS Rent delivers cars in minutes from the office.</p>

<h3>Bados Beach: Relax and Calm Water Near Olbia</h3>
<p>Very fine light-grey sand and a regular, gentle seabed. Sheltered from the winds, it offers almost always calm waters. Restaurants, pizzerias and equipment hire within walking distance. The most relaxing beach on Olbia''s northern coast.</p>

<h4>How to Get There</h4>
<p>From central Olbia: 10 minutes. From <a href="/en/car-hire-pittulongu">Pittulongu</a>: 2 minutes. Free and paid unpaved parking <strong>right in front of the beach</strong>. Distance from the KS Rent office: <strong>7 km</strong>.</p>

<h4>Tips</h4>
<ul>
  <li>Very shallow seabed for 30+ metres — the safest for small children</li>
  <li>Calm water even when windy — the bay is sheltered</li>
  <li>Restaurants and pizzerias within walking distance from the beach</li>
  <li>Less crowded than Pittulongu — ideal for those seeking quiet</li>
</ul>

<h4>Nearby Beaches</h4>
<p><a href="/en/spiaggia-pittulongu">Pittulongu</a> (2 min), <a href="/en/spiaggia-bianca">Spiaggia Bianca</a> (5 min), <a href="/en/car-hire-golfo-aranci">Golfo Aranci</a> (8 min). Recommended car: <strong>Fiat Panda</strong> — short distances and easy parking.</p>',
  parking_info_en     = 'Free and paid unpaved parking right in front of the beach, just steps from the sand.'
WHERE slug = 'spiaggia-bados';

UPDATE public.seo_beaches SET
  slug_de             = 'spiaggia-bados',
  title_de            = 'Strand Bados Olbia Sardinien | KS Rent Autovermietung',
  h1_de               = 'Strand Bados: Feiner Sand und ruhiges Wasser bei Olbia',
  meta_description_de = 'Strand Bados: sehr sanfter Grund und ruhiges Wasser, perfekt für Familien. Parkplatz vor dem Strand. KS Rent liefert Autos schnell ab Olbia.',
  content_html_de     = '<p class="snippet-bait"><strong>Strand Bados: der ruhigste Strand Olbias mit sehr sanftem Grund, ideal für Familien mit Kindern.</strong> Parkplatz direkt vor dem Strand. KS Rent liefert Autos in wenigen Minuten vom Büro.</p>

<h3>Strand Bados: Entspannung nahe Olbia</h3>
<p>Sehr feiner hellgrauer Sand und ein regelmäßiger, sanfter Grund. Vom Wind geschützt, mit fast immer ruhigem Wasser. Restaurants, Pizzerien und Verleih in Gehweite. Der entspannendste Strand der Nordküste Olbias.</p>

<h4>Anfahrt</h4>
<p>Vom Zentrum Olbias: 10 Min. Von <a href="/de/autovermietung-pittulongu">Pittulongu</a>: 2 Min. Kostenloser und gebührenpflichtiger Schotterparkplatz <strong>direkt vor dem Strand</strong>. Entfernung zum KS Rent-Büro: <strong>7 km</strong>.</p>

<h4>Tipps</h4>
<ul>
  <li>Sehr flacher Grund über 30+ Meter — sicherster für Kleinkinder</li>
  <li>Auch bei Wind ruhig — die Bucht ist geschützt</li>
  <li>Restaurants und Pizzerien zu Fuß erreichbar</li>
  <li>Weniger überfüllt als Pittulongu</li>
</ul>

<h4>Strände in der Nähe</h4>
<p><a href="/de/spiaggia-pittulongu">Pittulongu</a> (2 Min), <a href="/de/spiaggia-bianca">Spiaggia Bianca</a> (5 Min), <a href="/de/autovermietung-golfo-aranci">Golfo Aranci</a> (8 Min). Empfohlen: <strong>Fiat Panda</strong>.</p>',
  parking_info_de     = 'Kostenloser und gebührenpflichtiger Schotterparkplatz direkt vor dem Strand, wenige Schritte vom Sand.'
WHERE slug = 'spiaggia-bados';

UPDATE public.seo_beaches SET
  slug_fr             = 'spiaggia-bados',
  title_fr            = 'Plage Bados Olbia Sardaigne | Location KS Rent',
  h1_fr               = 'Plage Bados : sable fin et eaux calmes près d''Olbia',
  meta_description_fr = 'Plage Bados : fond très doux et eaux calmes, parfaite pour les familles. Parking devant la plage. KS Rent livre les voitures rapidement depuis Olbia.',
  content_html_fr     = '<p class="snippet-bait"><strong>Plage Bados : la plage la plus tranquille d''Olbia avec un fond très doux, idéale pour les familles avec enfants.</strong> Parking devant la plage. KS Rent livre les voitures en quelques minutes depuis le bureau.</p>

<h3>Plage Bados : détente et eaux calmes près d''Olbia</h3>
<p>Sable gris clair très fin et fond régulier et très doux. Abritée des vents, elle offre des eaux presque toujours calmes. Restaurants, pizzerias et location de matériel à portée de main. La plage la plus relaxante du littoral nord d''Olbia.</p>

<h4>Comment y arriver</h4>
<p>Du centre d''Olbia : 10 min. Depuis <a href="/fr/location-voiture-pittulongu">Pittulongu</a> : 2 min. Parking en terre gratuit et payant <strong>juste devant la plage</strong>. Distance du bureau KS Rent : <strong>7 km</strong>.</p>

<h4>Conseils</h4>
<ul>
  <li>Fond très peu profond sur 30+ mètres — la plus sûre pour les jeunes enfants</li>
  <li>Eau calme même par vent — la baie est abritée</li>
  <li>Restaurants et pizzerias à pied depuis la plage</li>
  <li>Moins fréquentée que Pittulongu</li>
</ul>

<h4>Plages voisines</h4>
<p><a href="/fr/spiaggia-pittulongu">Pittulongu</a> (2 min), <a href="/fr/spiaggia-bianca">Spiaggia Bianca</a> (5 min), <a href="/fr/location-voiture-golfo-aranci">Golfo Aranci</a> (8 min). Voiture conseillée : <strong>Fiat Panda</strong>.</p>',
  parking_info_fr     = 'Parking en terre gratuit et payant juste devant la plage, à quelques pas du sable.'
WHERE slug = 'spiaggia-bados';

-- ──────────────────────────────────────────────────────────────
-- 19) spiaggia-pittulongu
-- ──────────────────────────────────────────────────────────────

UPDATE public.seo_beaches SET
  slug_en             = 'spiaggia-pittulongu',
  title_en            = 'Pittulongu La Playa Beach Olbia | KS Rent Sardinia',
  h1_en               = 'Pittulongu La Playa: The Historic Beach of Olbia',
  meta_description_en = 'Pittulongu "La Playa": the historic beach of Olbia residents, minutes from the airport. Fish restaurants on the sand. Roadside parking. Express KS Rent delivery.',
  content_html_en     = '<p class="snippet-bait"><strong>Pittulongu "La Playa": the historic beach of Olbia locals, minutes from the airport.</strong> Fish restaurants with feet in the sand. Parking along the main road. KS Rent delivers cars express.</p>

<h3>Pittulongu La Playa: The Historic Beach of Olbia Residents</h3>
<p>"La Playa" is the locals'' favourite. A long crescent shoreline of fine, compact white sand, facing the gulf. Iconic restaurants where you can eat fresh fish literally with your feet in the sand.</p>

<h4>How to Get There</h4>
<p>From central Olbia: 8 minutes. From Costa Smeralda airport: 12 minutes. Parking along the main road and unpaved areas. Distance from the KS Rent office: <strong>5 km</strong> — the fastest delivery.</p>

<h4>Tips</h4>
<ul>
  <li>Beach restaurants serve fresh fish — book for sunset</li>
  <li>Compact sand: great for walks and jogging</li>
  <li>View of Tavolara from the southern part of the shore</li>
  <li>In high season the seafront comes alive in the evening</li>
</ul>

<h4>Nearby Beaches</h4>
<p><a href="/en/spiaggia-bados">Bados</a> (2 min, calm water for children), <a href="/en/spiaggia-bianca">Spiaggia Bianca</a> (5 min, dunes with lilies). Recommended car: <strong>Fiat Panda</strong> for short distances. KS Rent hire from the <a href="/en/car-hire-olbia-airport">airport</a> with immediate delivery.</p>',
  parking_info_en     = 'Parking along the main road and adjacent unpaved areas; arrive early on summer weekends.'
WHERE slug = 'spiaggia-pittulongu';

UPDATE public.seo_beaches SET
  slug_de             = 'spiaggia-pittulongu',
  title_de            = 'Strand Pittulongu La Playa Olbia | KS Rent Sardinien',
  h1_de               = 'Pittulongu La Playa: Der historische Strand Olbias',
  meta_description_de = 'Pittulongu "La Playa": der historische Strand der Olbianer, wenige Minuten vom Flughafen. Fischrestaurants am Sand. Straßenparken. Express-Lieferung KS Rent.',
  content_html_de     = '<p class="snippet-bait"><strong>Pittulongu "La Playa": der historische Strand der Olbianer, wenige Minuten vom Flughafen.</strong> Fischrestaurants mit Füßen im Sand. Parken entlang der Hauptstraße. KS Rent liefert Autos express.</p>

<h3>Pittulongu La Playa: Der historische Strand Olbias</h3>
<p>"La Playa" ist der Lieblingsstrand der Einheimischen. Ein langer halbmondförmiger Strand aus feinem, kompaktem weißem Sand zum Golf hin. Ikonische Restaurants, wo Sie frischen Fisch buchstäblich mit den Füßen im Sand genießen.</p>

<h4>Anfahrt</h4>
<p>Vom Zentrum Olbias: 8 Min. Vom Flughafen Costa Smeralda: 12 Min. Parken entlang der Hauptstraße und auf Schotterflächen. Entfernung zum KS Rent-Büro: <strong>5 km</strong> — die schnellste Zustellung.</p>

<h4>Tipps</h4>
<ul>
  <li>Strandrestaurants servieren frischen Fisch — abends reservieren</li>
  <li>Kompakter Sand: gut zum Spazieren und Joggen</li>
  <li>Tavolara-Blick vom südlichen Teil</li>
  <li>In der Hochsaison abends lebendige Strandpromenade</li>
</ul>

<h4>Strände in der Nähe</h4>
<p><a href="/de/spiaggia-bados">Bados</a> (2 Min, ruhiges Wasser für Kinder), <a href="/de/spiaggia-bianca">Spiaggia Bianca</a> (5 Min, Dünen). Empfohlen: <strong>Fiat Panda</strong>. KS Rent ab <a href="/de/autovermietung-flughafen-olbia">Flughafen</a> mit sofortiger Zustellung.</p>',
  parking_info_de     = 'Parken entlang der Hauptstraße und auf angrenzenden Schotterflächen; an Sommerwochenenden früh kommen.'
WHERE slug = 'spiaggia-pittulongu';

UPDATE public.seo_beaches SET
  slug_fr             = 'spiaggia-pittulongu',
  title_fr            = 'Plage Pittulongu La Playa Olbia | KS Rent Sardaigne',
  h1_fr               = 'Pittulongu La Playa : la plage historique d''Olbia',
  meta_description_fr = 'Pittulongu "La Playa" : la plage historique des Olbiens, à quelques minutes de l''aéroport. Restaurants de poisson sur le sable. KS Rent livraison express.',
  content_html_fr     = '<p class="snippet-bait"><strong>Pittulongu "La Playa" : la plage historique des Olbiens, à quelques minutes de l''aéroport.</strong> Restaurants de poisson les pieds dans le sable. Stationnement le long de la route principale. KS Rent livre en express.</p>

<h3>Pittulongu La Playa : la plage historique des Olbiens</h3>
<p>"La Playa" est la plage préférée des locaux. Un long littoral en croissant de sable blanc fin et compact, face au golfe. Restaurants emblématiques où déguster du poisson frais littéralement les pieds dans le sable.</p>

<h4>Comment y arriver</h4>
<p>Du centre d''Olbia : 8 min. De l''aéroport Costa Smeralda : 12 min. Stationnement le long de la route principale et zones en terre. Distance du bureau KS Rent : <strong>5 km</strong> — la livraison la plus rapide.</p>

<h4>Conseils</h4>
<ul>
  <li>Restaurants sur la plage avec poisson très frais — réservez pour le coucher du soleil</li>
  <li>Sable compact : bon pour les promenades et le jogging</li>
  <li>Vue sur Tavolara depuis le sud</li>
  <li>En haute saison, le front de mer s''anime le soir</li>
</ul>

<h4>Plages voisines</h4>
<p><a href="/fr/spiaggia-bados">Bados</a> (2 min, eaux calmes pour enfants), <a href="/fr/spiaggia-bianca">Spiaggia Bianca</a> (5 min, dunes). Voiture conseillée : <strong>Fiat Panda</strong>. KS Rent depuis l''<a href="/fr/location-voiture-aeroport-olbia">aéroport</a> avec livraison immédiate.</p>',
  parking_info_fr     = 'Stationnement le long de la route principale et zones en terre adjacentes ; arrivez tôt les week-ends d''été.'
WHERE slug = 'spiaggia-pittulongu';

-- ──────────────────────────────────────────────────────────────
-- 20) capo-testa
-- ──────────────────────────────────────────────────────────────

UPDATE public.seo_beaches SET
  slug_en             = 'capo-testa',
  title_en            = 'Capo Testa Beach Santa Teresa Sardinia | KS Rent',
  h1_en               = 'Capo Testa: Moon Valley, Millenary Granite and Two Beaches',
  meta_description_en = 'Capo Testa: granite peninsula with Moon Valley and two beaches. Rena di Ponente or Levante depending on the wind. KS Rent from Olbia in 55 min.',
  content_html_en     = '<p class="snippet-bait"><strong>Capo Testa is a millenary granite peninsula with the Moon Valley and two beaches: choose by wind.</strong> Rena di Ponente with Mistral, Rena di Levante with Sirocco. KS Rent delivers cars from Olbia in 55 min.</p>

<h3>Capo Testa: Moon Valley and Millenary Granite</h3>
<p>More than just a beach, Capo Testa is a magical peninsula. Huge granite boulders shaped by millennia of wind, the old lighthouse, the Moon Valley and two beaches on either side of the isthmus. The far north of Sardinia at its best.</p>

<h4>How to Get There</h4>
<p>From <a href="/en/car-hire-santa-teresa-gallura">Santa Teresa Gallura</a>: 5 minutes. Parking along the scenic isthmus road — watch out for no-parking signs on the carriageway. Distance from Olbia: <strong>62 km, 58 minutes</strong>.</p>

<h4>The Two Beaches</h4>
<ul>
  <li><strong>Rena di Ponente</strong> (west) — perfect with east winds (Levante/Sirocco). White sand and shallow seabed.</li>
  <li><strong>Rena di Levante</strong> (east) — perfect with Mistral. More sheltered and intimate.</li>
  <li><strong>Golden rule:</strong> check the wind before heading out and choose the right side</li>
</ul>

<h4>Moon Valley</h4>
<p>A natural amphitheatre of granite rocks sculpted by the wind. A hippie destination since the 1960s, today a magical place to walk at sunset. Reachable on foot from the car park in a 20-minute walk.</p>

<h4>Recommended Car</h4>
<p>The <strong>Jeep Avenger</strong> to explore the dirt-track coves. The <strong>Mercedes A-Class</strong> for the long journey from Olbia (60 km). Hire with KS Rent Sardinia without a credit card and set off to discover the far north.</p>',
  parking_info_en     = 'Parking along the scenic isthmus road; respect no-parking signs on the carriageway and use the designated lay-bys.'
WHERE slug = 'capo-testa';

UPDATE public.seo_beaches SET
  slug_de             = 'capo-testa',
  title_de            = 'Capo Testa Santa Teresa Sardinien | KS Rent',
  h1_de               = 'Capo Testa: Mondtal, jahrtausendealter Granit und zwei Strände',
  meta_description_de = 'Capo Testa: Granitlandzunge mit Mondtal und zwei Stränden. Rena di Ponente oder Levante je nach Wind. KS Rent ab Olbia in 55 Min.',
  content_html_de     = '<p class="snippet-bait"><strong>Capo Testa ist eine jahrtausendealte Granitlandzunge mit dem Mondtal und zwei Stränden: wählen Sie nach Wind.</strong> Rena di Ponente bei Maestrale, Rena di Levante bei Schirokko. KS Rent liefert Autos ab Olbia in 55 Min.</p>

<h3>Capo Testa: Mondtal und uralter Granit</h3>
<p>Mehr als ein Strand, ist Capo Testa eine magische Halbinsel. Riesige Granitblöcke, vom Wind über Jahrtausende geformt, der alte Leuchtturm, das Mondtal und zwei Strände auf beiden Seiten des Isthmus. Der äußerste Norden Sardiniens in Bestform.</p>

<h4>Anfahrt</h4>
<p>Von <a href="/de/autovermietung-santa-teresa-gallura">Santa Teresa Gallura</a>: 5 Min. Parken entlang der Panoramastraße — Halteverbote auf der Fahrbahn beachten. Entfernung von Olbia: <strong>62 km, 58 Min</strong>.</p>

<h4>Die zwei Strände</h4>
<ul>
  <li><strong>Rena di Ponente</strong> (West) — perfekt bei Ostwind (Levante/Schirokko). Weißer Sand, flaches Wasser.</li>
  <li><strong>Rena di Levante</strong> (Ost) — perfekt bei Maestrale. Geschützter und intimer.</li>
  <li><strong>Goldene Regel:</strong> Wind prüfen und die richtige Seite wählen</li>
</ul>

<h4>Mondtal</h4>
<p>Natürliches Amphitheater aus windgeformten Granitfelsen. Hippie-Ziel der 1960er, heute magischer Ort für Sonnenuntergangsspaziergänge. Vom Parkplatz in 20 Minuten zu Fuß erreichbar.</p>

<h4>Empfohlenes Auto</h4>
<p>Der <strong>Jeep Avenger</strong> zur Erkundung der Schotterbuchten. Die <strong>Mercedes A-Klasse</strong> für die lange Strecke ab Olbia (60 km). Bei KS Rent Sardinien ohne Kreditkarte mieten.</p>',
  parking_info_de     = 'Parken entlang der Panoramastraße des Isthmus; Halteverbote auf der Fahrbahn beachten und ausgewiesene Buchten nutzen.'
WHERE slug = 'capo-testa';

UPDATE public.seo_beaches SET
  slug_fr             = 'capo-testa',
  title_fr            = 'Capo Testa Santa Teresa Sardaigne | KS Rent',
  h1_fr               = 'Capo Testa : Vallée de la Lune, granit millénaire et deux plages',
  meta_description_fr = 'Capo Testa : presqu''île de granit avec Vallée de la Lune et deux plages. Rena di Ponente ou Levante selon le vent. KS Rent depuis Olbia en 55 min.',
  content_html_fr     = '<p class="snippet-bait"><strong>Capo Testa est une presqu''île de granit millénaire avec la Vallée de la Lune et deux plages : choisissez selon le vent.</strong> Rena di Ponente avec Mistral, Rena di Levante avec Sirocco. KS Rent livre les voitures depuis Olbia en 55 min.</p>

<h3>Capo Testa : Vallée de la Lune et granit millénaire</h3>
<p>Plus qu''une plage, Capo Testa est une presqu''île magique. D''énormes blocs de granit sculptés par des millénaires de vent, le vieux phare, la Vallée de la Lune et deux plages de chaque côté de l''isthme. L''extrême nord de la Sardaigne à son apogée.</p>

<h4>Comment y arriver</h4>
<p>Depuis <a href="/fr/location-voiture-santa-teresa-gallura">Santa Teresa Gallura</a> : 5 min. Stationnement le long de la route panoramique de l''isthme — attention aux interdictions de stationnement sur la chaussée. Distance d''Olbia : <strong>62 km, 58 minutes</strong>.</p>

<h4>Les deux plages</h4>
<ul>
  <li><strong>Rena di Ponente</strong> (ouest) — parfaite avec vent d''est (Levante/Sirocco). Sable blanc et fond peu profond.</li>
  <li><strong>Rena di Levante</strong> (est) — parfaite avec Mistral. Plus abritée et intime.</li>
  <li><strong>Règle d''or :</strong> vérifiez le vent et choisissez le bon côté</li>
</ul>

<h4>Vallée de la Lune</h4>
<p>Amphithéâtre naturel de rochers de granit sculptés par le vent. Destination hippie des années 60, aujourd''hui lieu magique pour marcher au coucher du soleil. Accessible à pied depuis le parking en 20 minutes.</p>

<h4>Voiture conseillée</h4>
<p>Le <strong>Jeep Avenger</strong> pour explorer les criques en piste. La <strong>Mercedes Classe A</strong> pour le long trajet depuis Olbia (60 km). Louez avec KS Rent Sardaigne sans carte de crédit.</p>',
  parking_info_fr     = 'Stationnement le long de la route panoramique de l''isthme ; respectez les interdictions de stationnement sur la chaussée et utilisez les aires prévues.'
WHERE slug = 'capo-testa';

COMMIT;

-- VERIFICA:
-- SELECT count(*) tot, count(slug_en) en, count(slug_de) de, count(slug_fr) fr
-- FROM public.seo_beaches;
-- -- atteso: 20/20/20/20

-- ============================================================
-- 13 - TRADUZIONI seo_vehicles EN-GB / DE / FR + faqs jsonb estese
-- ============================================================
-- Generato dall'Agente Traduttore Vehicles.
-- 7 record IT tradotti in 3 lingue (21 UPDATE colonne + 7 UPDATE faqs = 28 totali).
-- Idempotente: UPDATE su group_slug.
-- Eseguire DOPO sql/10.
--
-- NOTA: faqs schema esteso a {q,a,q_en,a_en,q_de,a_de,q_fr,a_fr}.
-- Le pagine /flotta/[slug] leggono q/a (IT), le pagine [lang]/flotta/[slug]
-- leggono q_${lang}/a_${lang} con fallback a q/a se mancanti.
-- ============================================================

BEGIN;

-- ──────────────────────────────────────────────────────────────
-- 1) audi-rs3
-- ──────────────────────────────────────────────────────────────

-- EN-GB
UPDATE public.seo_vehicles SET
  slug_en             = 'audi-rs3-hire-olbia',
  title_en            = 'Audi RS3 Hire Olbia Sardinia | KS Rent Sardinia',
  h1_en               = 'Hire the Audi RS3 Sportback in Olbia and Costa Smeralda',
  meta_description_en = 'Audi RS3 Sportback hire in Olbia: 400 hp, S-Tronic automatic, quattro AWD. Delivery to Porto Cervo, Baja Sardinia, hotels and villas. No credit card required.',
  content_html_en     = '<p>The <strong>Audi RS3 Sportback</strong> is the perfect supercar for anyone who wants to experience Costa Smeralda with genuine kerb appeal and real performance. <strong>2.5 TFSI five-cylinder engine producing 400 hp</strong>, quattro all-wheel drive, 7-speed S-Tronic automatic gearbox: 0-100 km/h in 3.8 seconds. KS Rent Sardinia delivers it straight to Olbia port, the airport, your hotel or villa, anywhere in Gallura.</p>
<h2>Why choose the Audi RS3 in Sardinia</h2>
<p>The scenic roads of Costa Smeralda - the SP59 from Porto Cervo to Baja Sardinia, the climb up to Capriccioli, the bends towards Cala di Volpe - were made for a well-balanced sports car. The RS3 combines explosive torque (500 Nm), a torque-vectoring rear differential and a genuinely usable five-seat cabin. Available in <strong>two specifications: Daytona Grey and Kyalami Green</strong>, both with sport interior and bucket seats.</p>
<h2>Delivery and collection</h2>
<p>We deliver the Audi RS3 throughout Gallura, from 10:00 to 22:30, seven days a week. Most-requested delivery points: <strong>Porto Cervo Marina, Baja Sardinia, Poltu Quatu, Cala di Volpe hotels, private villas</strong>. The service is free within 60 km of Olbia. No queue at the desk, no card pre-authorisation: we accept debit cards, prepaid cards (PostePay, Revolut, N26) and cash for the security deposit.</p>
<h2>Recommended season</h2>
<p>The Audi RS3 is available from <strong>April to October</strong>. Most competitive rates in April, May and October; peak season in July and August. We recommend booking at least 72 hours in advance during peak season to secure your preferred colour.</p>'
WHERE group_slug = 'audi-rs3';

-- DE
UPDATE public.seo_vehicles SET
  slug_de             = 'audi-rs3-mieten-olbia',
  title_de            = 'Audi RS3 mieten Olbia Sardinien | KS Rent Sardinia',
  h1_de               = 'Audi RS3 Sportback mieten in Olbia und an der Costa Smeralda',
  meta_description_de = 'Audi RS3 Sportback mieten in Olbia: 400 PS, S-Tronic Automatik, quattro Allradantrieb. Lieferung nach Porto Cervo, Baja Sardinia, Hotels und Villen. Ohne Kreditkarte.',
  content_html_de     = '<p>Der <strong>Audi RS3 Sportback</strong> ist der perfekte Supersportler, um die Costa Smeralda mit echter Präsenz und echter Leistung zu erleben. <strong>2,5 TFSI Fünfzylindermotor mit 400 PS</strong>, quattro Allradantrieb, 7-Gang S-Tronic Doppelkupplungsgetriebe: 0-100 km/h in 3,8 Sekunden. KS Rent Sardinia liefert ihn direkt zum Hafen Olbia, zum Flughafen, ins Hotel oder in die Villa, überall in Gallura.</p>
<h2>Warum den Audi RS3 in Sardinien wählen</h2>
<p>Die Panoramastraßen der Costa Smeralda - die SP59 von Porto Cervo nach Baja Sardinia, der Anstieg nach Capriccioli, die Kurven Richtung Cala di Volpe - sind wie geschaffen für einen ausgewogenen Sportwagen. Der RS3 vereint explosives Drehmoment (500 Nm), ein Torque-Vectoring-Differential an der Hinterachse und einen voll nutzbaren Fünfsitzer-Innenraum. Verfügbar in <strong>zwei Varianten: Daytonagrau und Kyalamigrün</strong>, beide mit Sportinnenraum und Schalensitzen.</p>
<h2>Lieferung und Rückgabe</h2>
<p>Wir liefern den Audi RS3 in ganz Gallura, von 10:00 bis 22:30 Uhr, sieben Tage die Woche. Häufigste Übergabeorte: <strong>Porto Cervo Marina, Baja Sardinia, Poltu Quatu, Hotels von Cala di Volpe, Privatvillen</strong>. Der Service ist kostenlos innerhalb von 60 km von Olbia. Keine Warteschlange am Schalter, keine Kartenvorautorisierung: Wir akzeptieren EC-Karten, Prepaid-Karten (PostePay, Revolut, N26) und Bargeld für die Kaution.</p>
<h2>Empfohlene Saison</h2>
<p>Der Audi RS3 ist von <strong>April bis Oktober</strong> verfügbar. Günstigste Tarife im April, Mai und Oktober; Hochsaison Juli-August. Wir empfehlen, in der Hochsaison mindestens 72 Stunden im Voraus zu buchen, um die gewünschte Farbvariante zu garantieren.</p>'
WHERE group_slug = 'audi-rs3';

-- FR
UPDATE public.seo_vehicles SET
  slug_fr             = 'audi-rs3-location-olbia',
  title_fr            = 'Location Audi RS3 Olbia Sardaigne | KS Rent Sardinia',
  h1_fr               = 'Louer l''Audi RS3 Sportback à Olbia et en Costa Smeralda',
  meta_description_fr = 'Audi RS3 Sportback en location à Olbia : 400 ch, boîte automatique S-Tronic, transmission intégrale quattro. Livraison à Porto Cervo, hôtels et villas. Sans carte bancaire.',
  content_html_fr     = '<p>L''<strong>Audi RS3 Sportback</strong> est la supercar idéale pour vivre la Costa Smeralda avec une présence scénique et de vraies performances. <strong>Moteur 2.5 TFSI cinq cylindres de 400 ch</strong>, transmission intégrale quattro, boîte automatique S-Tronic à 7 rapports : 0-100 km/h en 3,8 secondes. KS Rent Sardinia vous la livre directement au port d''Olbia, à l''aéroport, à l''hôtel ou en villa, partout en Gallura.</p>
<h2>Pourquoi choisir l''Audi RS3 en Sardaigne</h2>
<p>Les routes panoramiques de la Costa Smeralda - la SP59 de Porto Cervo à Baja Sardinia, la montée vers Capriccioli, les virages vers Cala di Volpe - sont faites pour une sportive bien équilibrée. La RS3 réunit un couple explosif (500 Nm), un différentiel à vectorisation de couple sur l''essieu arrière et un habitacle 5 places pleinement utilisable. Disponible en <strong>deux versions : gris Daytona et vert Kyalami</strong>, toutes deux avec intérieur sportif et sièges baquets.</p>
<h2>Livraison et restitution</h2>
<p>Nous livrons l''Audi RS3 dans toute la Gallura, de 10h00 à 22h30, 7 jours sur 7. Lieux de livraison les plus demandés : <strong>Porto Cervo Marina, Baja Sardinia, Poltu Quatu, hôtels de Cala di Volpe, villas privées</strong>. Le service est gratuit dans un rayon de 60 km d''Olbia. Pas de file d''attente au guichet, pas de pré-autorisation sur la carte : nous acceptons les cartes de débit, les cartes prépayées (PostePay, Revolut, N26) et les espèces pour le dépôt de garantie.</p>
<h2>Saison conseillée</h2>
<p>L''Audi RS3 est disponible d''<strong>avril à octobre</strong>. Tarifs les plus compétitifs en avril, mai et octobre ; haute saison en juillet-août. Nous recommandons de réserver au moins 72 heures à l''avance en haute saison pour garantir la teinte choisie.</p>'
WHERE group_slug = 'audi-rs3';

-- FAQs audi-rs3
UPDATE public.seo_vehicles SET faqs = '[
  {
    "q": "Quanto costa noleggiare l''Audi RS3 in Costa Smeralda?",
    "a": "Il prezzo varia in base alla stagione: aprile e ottobre sono i mesi piu'' convenienti, luglio e agosto sono alta stagione. Le tariffe esatte sono visibili nella tabella prezzi mensili in questa pagina e confermate in fase di prenotazione. Nessuna commissione nascosta, deposito cauzionale separato.",
    "q_en": "How much does it cost to hire the Audi RS3 in Costa Smeralda?",
    "a_en": "Pricing varies by season: April and October are the most affordable months, July and August are peak season. Exact rates are shown in the monthly price table on this page and confirmed at booking. No hidden fees; the security deposit is held separately.",
    "q_de": "Wie viel kostet die Miete des Audi RS3 an der Costa Smeralda?",
    "a_de": "Der Preis variiert je nach Saison: April und Oktober sind die günstigsten Monate, Juli und August sind Hochsaison. Die genauen Tarife finden Sie in der monatlichen Preistabelle auf dieser Seite und werden bei der Buchung bestätigt. Keine versteckten Gebühren, Kaution separat.",
    "q_fr": "Combien coûte la location de l''Audi RS3 en Costa Smeralda ?",
    "a_fr": "Le prix varie selon la saison : avril et octobre sont les mois les plus avantageux, juillet et août sont la haute saison. Les tarifs exacts sont indiqués dans le tableau des prix mensuels sur cette page et confirmés lors de la réservation. Aucuns frais cachés, dépôt de garantie séparé."
  },
  {
    "q": "L''Audi RS3 ha la trazione integrale?",
    "a": "Si. Tutte le RS3 della nostra flotta sono dotate di trazione integrale Audi quattro permanente, che garantisce stabilita'' superiore sulle strade panoramiche bagnate o ventose della Costa Smeralda.",
    "q_en": "Does the Audi RS3 have all-wheel drive?",
    "a_en": "Yes. Every RS3 in our fleet features permanent Audi quattro all-wheel drive, delivering superior stability on the wet or windy scenic roads of Costa Smeralda.",
    "q_de": "Hat der Audi RS3 Allradantrieb?",
    "a_de": "Ja. Alle RS3 unserer Flotte verfügen über den permanenten Audi quattro Allradantrieb, der überlegene Stabilität auf den nassen oder windigen Panoramastraßen der Costa Smeralda garantiert.",
    "q_fr": "L''Audi RS3 dispose-t-elle de la transmission intégrale ?",
    "a_fr": "Oui. Toutes les RS3 de notre flotte sont équipées de la transmission intégrale permanente Audi quattro, qui garantit une stabilité supérieure sur les routes panoramiques mouillées ou venteuses de la Costa Smeralda."
  },
  {
    "q": "Posso noleggiare la RS3 senza carta di credito?",
    "a": "Si. Accettiamo bancomat, carte prepagate (PostePay, Revolut, N26) e contanti per il deposito cauzionale. Nessun blocco sulla carta, nessuna pre-autorizzazione.",
    "q_en": "Can I hire the RS3 without a credit card?",
    "a_en": "Yes. We accept debit cards, prepaid cards (PostePay, Revolut, N26) and cash for the security deposit. No card hold, no pre-authorisation.",
    "q_de": "Kann ich den RS3 ohne Kreditkarte mieten?",
    "a_de": "Ja. Wir akzeptieren EC-Karten, Prepaid-Karten (PostePay, Revolut, N26) und Bargeld als Kaution. Keine Kartensperre, keine Vorautorisierung.",
    "q_fr": "Puis-je louer la RS3 sans carte de crédit ?",
    "a_fr": "Oui. Nous acceptons les cartes de débit, les cartes prépayées (PostePay, Revolut, N26) et les espèces pour le dépôt de garantie. Aucun blocage sur la carte, aucune pré-autorisation."
  },
  {
    "q": "Quanti posti ha l''Audi RS3 Sportback?",
    "a": "5 posti omologati, ma comodi 4 adulti per viaggi lunghi. Bagagliaio da 282 litri, sufficiente per 2-3 trolley medi.",
    "q_en": "How many seats does the Audi RS3 Sportback have?",
    "a_en": "Five seats homologated, with comfortable space for four adults on longer journeys. 282-litre boot, enough for two or three medium suitcases.",
    "q_de": "Wie viele Sitzplätze hat der Audi RS3 Sportback?",
    "a_de": "Fünf zugelassene Sitzplätze, komfortabel für vier Erwachsene auf längeren Strecken. Kofferraum mit 282 Litern, ausreichend für 2-3 mittelgroße Trolleys.",
    "q_fr": "Combien de places possède l''Audi RS3 Sportback ?",
    "a_fr": "5 places homologuées, confortables pour 4 adultes sur de longs trajets. Coffre de 282 litres, suffisant pour 2 à 3 valises moyennes."
  },
  {
    "q": "Consegnate la RS3 a Porto Cervo?",
    "a": "Si, consegniamo direttamente al porto di Porto Cervo, agli hotel di Cala di Volpe, alla marina di Poltu Quatu e a Baja Sardinia. Consegna gratuita entro 60 km dalla nostra sede di Olbia.",
    "q_en": "Do you deliver the RS3 to Porto Cervo?",
    "a_en": "Yes, we deliver directly to Porto Cervo port, to the hotels of Cala di Volpe, to Poltu Quatu marina and to Baja Sardinia. Free delivery within 60 km of our Olbia office.",
    "q_de": "Liefern Sie den RS3 nach Porto Cervo?",
    "a_de": "Ja, wir liefern direkt zum Hafen Porto Cervo, zu den Hotels von Cala di Volpe, zur Marina von Poltu Quatu und nach Baja Sardinia. Kostenlose Lieferung innerhalb von 60 km von unserem Standort in Olbia.",
    "q_fr": "Livrez-vous la RS3 à Porto Cervo ?",
    "a_fr": "Oui, nous livrons directement au port de Porto Cervo, aux hôtels de Cala di Volpe, à la marina de Poltu Quatu et à Baja Sardinia. Livraison gratuite dans un rayon de 60 km de notre agence d''Olbia."
  }
]'::jsonb
WHERE group_slug = 'audi-rs3';


-- ──────────────────────────────────────────────────────────────
-- 2) bmw-m2
-- ──────────────────────────────────────────────────────────────

-- EN-GB
UPDATE public.seo_vehicles SET
  slug_en             = 'bmw-m2-coupe-hire-olbia',
  title_en            = 'BMW M2 Coupe Hire Olbia Sardinia | KS Rent',
  h1_en               = 'Hire the BMW M2 Coupe in Olbia and Costa Smeralda',
  meta_description_en = 'BMW M2 Coupe hire in Olbia: 460 hp, rear-wheel drive, Steptronic automatic. Delivery in Costa Smeralda and Gallura. No credit card needed.',
  content_html_en     = '<p>The <strong>BMW M2 Coupe</strong> is the pure sports car for those after adrenaline without compromise on build quality. <strong>3.0 twin-turbo straight-six engine with 460 hp</strong>, <strong>rear-wheel drive</strong>, 8-speed M Steptronic gearbox with steering-wheel paddles, M Adaptive suspension, electronic locking differential. 0-100 km/h in 4.1 seconds and a driving experience that rewards the keen driver.</p>
<h2>Who it is for</h2>
<p>For those who know what rear-wheel drive really means and want to feel it for themselves. The M2 is the most compact and direct "M" in the family, perfect for the narrow undulating roads of Gallura - the SP38 to Palau, the climb to Capo Testa, the scenic routes above Arzachena. Four genuine seats, a 390-litre boot, and the soundtrack of a straight-six that is part of the product.</p>
<h2>Experience in Costa Smeralda</h2>
<p>We deliver the BMW M2 to Porto Cervo, Baja Sardinia, Costa Smeralda and across Gallura. Hotel, villa and marina delivery service from 10:00 to 22:30, seven days a week. Operational base 5 minutes from Olbia Isola Bianca port and 10 minutes from Olbia Costa Smeralda airport.</p>
<h2>Important notes</h2>
<p>Category B driving licence held for at least 3 years required to hire the M2. Category-specific supercar security deposit, fully refunded on return. <strong>Comprehensive RCA + Kasko insurance</strong> always included. <strong>No credit card required</strong>: we accept debit cards, prepaid cards and cash.</p>'
WHERE group_slug = 'bmw-m2';

-- DE
UPDATE public.seo_vehicles SET
  slug_de             = 'bmw-m2-coupe-mieten-olbia',
  title_de            = 'BMW M2 Coupe mieten Olbia Sardinien | KS Rent',
  h1_de               = 'BMW M2 Coupe mieten in Olbia und an der Costa Smeralda',
  meta_description_de = 'BMW M2 Coupe mieten in Olbia: 460 PS, Hinterradantrieb, Steptronic Automatik. Lieferung in der Costa Smeralda und in Gallura. Ohne Kreditkarte.',
  content_html_de     = '<p>Das <strong>BMW M2 Coupe</strong> ist der reinrassige Sportwagen für alle, die Adrenalin ohne Kompromisse bei der Verarbeitungsqualität suchen. <strong>3.0 Biturbo-Reihensechszylinder mit 460 PS</strong>, <strong>Hinterradantrieb</strong>, 8-Gang M Steptronic Getriebe mit Schaltwippen am Lenkrad, M Adaptive Fahrwerk, elektronisches Sperrdifferenzial. 0-100 km/h in 4,1 Sekunden und ein Fahrerlebnis, das den Piloten belohnt.</p>
<h2>Für wen geeignet</h2>
<p>Für alle, die wissen, was Hinterradantrieb bedeutet, und ihn wirklich spüren wollen. Der M2 ist der kompakteste und direkteste "M" der Familie, perfekt für die engen, welligen Straßen Galluras - die SP38 nach Palau, der Anstieg nach Capo Testa, die Panoramarouten oberhalb von Arzachena. Vier echte Sitzplätze, ein 390-Liter-Kofferraum und der Sound des Sechszylinders, der Teil des Produkts ist.</p>
<h2>Erlebnis Costa Smeralda</h2>
<p>Wir liefern den BMW M2 nach Porto Cervo, Baja Sardinia, an die Costa Smeralda und in ganz Gallura. Lieferservice ins Hotel, in die Villa oder zur Marina von 10:00 bis 22:30 Uhr, sieben Tage die Woche. Unser Standort liegt 5 Minuten vom Hafen Olbia Isola Bianca und 10 Minuten vom Flughafen Olbia Costa Smeralda entfernt.</p>
<h2>Wichtige Hinweise</h2>
<p>Führerschein Klasse B seit mindestens 3 Jahren erforderlich für die Anmietung des M2. Kategorie-spezifische Supersport-Kaution, bei Rückgabe vollständig erstattet. <strong>Vollkasko-Versicherung (RCA + Kasko)</strong> stets inklusive. <strong>Keine Kreditkarte erforderlich</strong>: Wir akzeptieren EC-Karten, Prepaid-Karten und Bargeld.</p>'
WHERE group_slug = 'bmw-m2';

-- FR
UPDATE public.seo_vehicles SET
  slug_fr             = 'bmw-m2-coupe-location-olbia',
  title_fr            = 'Location BMW M2 Coupe Olbia Sardaigne | KS Rent',
  h1_fr               = 'Louer la BMW M2 Coupe à Olbia et en Costa Smeralda',
  meta_description_fr = 'BMW M2 Coupe en location à Olbia : 460 ch, propulsion arrière, boîte automatique Steptronic. Livraison en Costa Smeralda et en Gallura. Sans carte bancaire.',
  content_html_fr     = '<p>La <strong>BMW M2 Coupe</strong> est la sportive pure pour ceux qui recherchent l''adrénaline sans compromis sur la qualité de fabrication. <strong>Moteur biturbo 3.0 six cylindres en ligne de 460 ch</strong>, <strong>propulsion arrière</strong>, boîte M Steptronic à 8 rapports avec palettes au volant, suspensions M Adaptive, différentiel autobloquant électronique. 0-100 km/h en 4,1 secondes et une conduite qui récompense le pilote.</p>
<h2>Pour qui ?</h2>
<p>Pour ceux qui savent ce que signifie la propulsion arrière et veulent vraiment la ressentir. La M2 est la "M" la plus compacte et la plus directe de la famille, parfaite pour les routes étroites et ondulées de la Gallura - la SP38 vers Palau, la montée vers Capo Testa, les itinéraires panoramiques au-dessus d''Arzachena. Quatre vraies places, un coffre de 390 litres, le son du six cylindres qui fait partie du produit.</p>
<h2>Expérience en Costa Smeralda</h2>
<p>Nous livrons la BMW M2 à Porto Cervo, Baja Sardinia, en Costa Smeralda et dans toute la Gallura. Service de livraison en hôtel, en villa ou à la marina de 10h00 à 22h30, 7 jours sur 7. Siège opérationnel à 5 minutes du port d''Olbia Isola Bianca et à 10 minutes de l''aéroport d''Olbia Costa Smeralda.</p>
<h2>Notes importantes</h2>
<p>Permis B obtenu depuis au moins 3 ans requis pour la location de la M2. Dépôt de garantie spécifique catégorie supercar, intégralement restitué à la restitution. <strong>Assurance complète RCA + Kasko</strong> toujours incluse. <strong>Aucune carte de crédit obligatoire</strong> : nous acceptons les cartes de débit, les cartes prépayées et les espèces.</p>'
WHERE group_slug = 'bmw-m2';

-- FAQs bmw-m2
UPDATE public.seo_vehicles SET faqs = '[
  {
    "q": "La BMW M2 ha la trazione posteriore o integrale?",
    "a": "Trazione posteriore pura, come da tradizione M. Differenziale autobloccante elettronico (Active M Differential) per gestire al meglio la coppia in uscita di curva.",
    "q_en": "Does the BMW M2 have rear-wheel or all-wheel drive?",
    "a_en": "Pure rear-wheel drive, true to M tradition. Electronic locking differential (Active M Differential) to manage torque optimally out of the corners.",
    "q_de": "Hat der BMW M2 Hinterrad- oder Allradantrieb?",
    "a_de": "Reiner Hinterradantrieb, ganz in M-Tradition. Elektronisches Sperrdifferenzial (Active M Differential) für optimales Drehmomentmanagement beim Kurvenausgang.",
    "q_fr": "La BMW M2 est-elle à propulsion ou à transmission intégrale ?",
    "a_fr": "Propulsion arrière pure, comme le veut la tradition M. Différentiel autobloquant électronique (Active M Differential) pour gérer au mieux le couple en sortie de virage."
  },
  {
    "q": "Che patente serve per noleggiare la BMW M2?",
    "a": "Patente B con almeno 3 anni di possesso. Conducente di almeno 25 anni. Per il secondo conducente le stesse condizioni.",
    "q_en": "What licence is required to hire the BMW M2?",
    "a_en": "Category B licence held for at least 3 years. Driver must be at least 25. The same conditions apply to the second driver.",
    "q_de": "Welcher Führerschein wird für die Miete des BMW M2 benötigt?",
    "a_de": "Führerschein Klasse B, seit mindestens 3 Jahren im Besitz. Fahrer mindestens 25 Jahre alt. Für den Zweitfahrer gelten dieselben Bedingungen.",
    "q_fr": "Quel permis faut-il pour louer la BMW M2 ?",
    "a_fr": "Permis B détenu depuis au moins 3 ans. Conducteur âgé d''au moins 25 ans. Les mêmes conditions s''appliquent au second conducteur."
  },
  {
    "q": "La M2 e'' disponibile anche in alta stagione?",
    "a": "Si, ma in luglio e agosto la disponibilita'' e'' limitata. Consigliamo di prenotare con almeno 5-7 giorni di anticipo per evitare di restare senza.",
    "q_en": "Is the M2 available in peak season?",
    "a_en": "Yes, but availability is limited in July and August. We recommend booking at least 5-7 days in advance to avoid missing out.",
    "q_de": "Ist der M2 auch in der Hochsaison verfügbar?",
    "a_de": "Ja, aber im Juli und August ist die Verfügbarkeit begrenzt. Wir empfehlen, mindestens 5-7 Tage im Voraus zu buchen, um nicht leer auszugehen.",
    "q_fr": "La M2 est-elle disponible en haute saison ?",
    "a_fr": "Oui, mais en juillet et août la disponibilité est limitée. Nous recommandons de réserver au moins 5 à 7 jours à l''avance pour ne pas se retrouver sans véhicule."
  },
  {
    "q": "Posso usare la BMW M2 per gite fuori dalla Gallura?",
    "a": "Si, chilometraggio illimitato. Puoi raggiungere Bosa, Alghero, Cagliari senza maggiorazioni. Solo limite: il veicolo non puo'' uscire dall''isola Sardegna.",
    "q_en": "Can I use the BMW M2 for trips beyond Gallura?",
    "a_en": "Yes, mileage is unlimited. You can drive to Bosa, Alghero or Cagliari at no extra cost. The only restriction: the vehicle may not leave the island of Sardinia.",
    "q_de": "Kann ich den BMW M2 für Ausflüge außerhalb Galluras nutzen?",
    "a_de": "Ja, unbegrenzte Kilometer. Sie können Bosa, Alghero oder Cagliari ohne Aufpreis erreichen. Einzige Einschränkung: Das Fahrzeug darf die Insel Sardinien nicht verlassen.",
    "q_fr": "Puis-je utiliser la BMW M2 pour des sorties hors de la Gallura ?",
    "a_fr": "Oui, kilométrage illimité. Vous pouvez rejoindre Bosa, Alghero, Cagliari sans supplément. Seule limite : le véhicule ne peut pas quitter l''île de Sardaigne."
  },
  {
    "q": "Quanto consuma la BMW M2 nella guida reale?",
    "a": "In uso normale tra 9-11 L/100 km, guidata con grinta puo'' arrivare a 14-15 L/100 km. Serbatoio 52 litri, autonomia reale 400-500 km.",
    "q_en": "What is the BMW M2 fuel consumption in real-world driving?",
    "a_en": "In normal use 9-11 L/100 km, driven hard it can reach 14-15 L/100 km. 52-litre tank, real-world range of 400-500 km.",
    "q_de": "Wie hoch ist der reale Verbrauch des BMW M2?",
    "a_de": "Im normalen Betrieb zwischen 9 und 11 L/100 km, sportlich gefahren bis zu 14-15 L/100 km. 52-Liter-Tank, reale Reichweite 400-500 km.",
    "q_fr": "Quelle est la consommation réelle de la BMW M2 ?",
    "a_fr": "En usage normal entre 9 et 11 L/100 km, conduite avec dynamisme elle peut atteindre 14-15 L/100 km. Réservoir de 52 litres, autonomie réelle de 400 à 500 km."
  }
]'::jsonb
WHERE group_slug = 'bmw-m2';


-- ──────────────────────────────────────────────────────────────
-- 3) mercedes-classe-a
-- ──────────────────────────────────────────────────────────────

-- EN-GB
UPDATE public.seo_vehicles SET
  slug_en             = 'mercedes-a-class-hire-olbia',
  title_en            = 'Mercedes A-Class 180d Hire Olbia | KS Rent Sardinia',
  h1_en               = 'Hire the Mercedes A-Class diesel in Olbia',
  meta_description_en = 'Mercedes A-Class 180d hire in Olbia: 7G-DCT automatic, low-consumption diesel. Ideal for longer stays in Costa Smeralda. No credit card required.',
  content_html_en     = '<p>The <strong>Mercedes A-Class 180d</strong> is the premium compact saloon perfect for medium-to-long stays in Sardinia. <strong>1.5-litre diesel engine producing 116 hp</strong>, <strong>7G-DCT dual-clutch automatic gearbox</strong>, real-world consumption of 5-6 L/100 km and a 370-litre boot. Mercedes elegance without the thirst of a sports car.</p>
<h2>When to choose it</h2>
<p>If you are spending 7-15 days in Costa Smeralda and clocking miles every day (Olbia → Porto Cervo → Santa Teresa → Bosa → return), the diesel A-Class lets you tour the whole island on a single tank. Comfortable for four adults, dual-zone automatic climate control, MBUX infotainment with built-in sat-nav. Perfect for couples, villa stays and business travel in Gallura.</p>
<h2>Optimal delivery areas</h2>
<p>We deliver across Gallura, with particularly high demand in <strong>Porto Rotondo, Arzachena, Santa Teresa Gallura and Palau</strong> for longer stays. Operational base at Olbia, Viale Isola Bianca 38, 5 minutes from the port and 10 minutes from the airport.</p>
<h2>What the hire includes</h2>
<ul><li>Comprehensive RCA + Kasko insurance</li><li>Unlimited mileage throughout Sardinia</li><li>Free delivery within 60 km of Olbia</li><li>Second driver free of charge</li><li>24/7 roadside assistance</li></ul>
<p><strong>No credit card required</strong>: we accept debit cards, prepaid cards and cash for the security deposit.</p>'
WHERE group_slug = 'mercedes-classe-a';

-- DE
UPDATE public.seo_vehicles SET
  slug_de             = 'mercedes-a-klasse-mieten-olbia',
  title_de            = 'Mercedes A-Klasse 180d mieten Olbia | KS Rent Sardinia',
  h1_de               = 'Mercedes A-Klasse Diesel mieten in Olbia',
  meta_description_de = 'Mercedes A-Klasse 180d mieten in Olbia: 7G-DCT Automatik, verbrauchsarmer Diesel. Ideal für längere Aufenthalte an der Costa Smeralda. Ohne Kreditkarte.',
  content_html_de     = '<p>Die <strong>Mercedes A-Klasse 180d</strong> ist die kompakte Premium-Limousine, ideal für mittlere bis lange Aufenthalte in Sardinien. <strong>1,5-Liter-Dieselmotor mit 116 PS</strong>, <strong>7G-DCT Doppelkupplungsgetriebe</strong>, realer Verbrauch von 5-6 L/100 km und 370 Liter Kofferraum. Mercedes-Eleganz ohne den Verbrauch eines Sportwagens.</p>
<h2>Wann sollten Sie sie wählen</h2>
<p>Wenn Sie 7-15 Tage an der Costa Smeralda verbringen und täglich Kilometer abspulen (Olbia → Porto Cervo → Santa Teresa → Bosa → zurück), erlaubt Ihnen die Diesel A-Klasse, die gesamte Insel mit einer Tankfüllung zu erkunden. Komfortabel für vier Erwachsene, 2-Zonen-Klimaautomatik, MBUX-Infotainment mit integriertem Navigationssystem. Perfekt für Reisende als Paar, Villenaufenthalte und geschäftliche Fahrten in Gallura.</p>
<h2>Bevorzugte Liefergebiete</h2>
<p>Wir liefern in ganz Gallura, besonders gefragt in <strong>Porto Rotondo, Arzachena, Santa Teresa Gallura und Palau</strong> für längere Aufenthalte. Standort Olbia, Viale Isola Bianca 38, 5 Minuten vom Hafen und 10 Minuten vom Flughafen entfernt.</p>
<h2>Was die Miete umfasst</h2>
<ul><li>Vollkasko-Versicherung (RCA + Kasko)</li><li>Unbegrenzte Kilometer in ganz Sardinien</li><li>Kostenlose Lieferung innerhalb 60 km von Olbia</li><li>Zweitfahrer kostenlos</li><li>24/7 Pannenhilfe</li></ul>
<p><strong>Keine Kreditkarte erforderlich</strong>: Wir akzeptieren EC-Karten, Prepaid-Karten und Bargeld als Kaution.</p>'
WHERE group_slug = 'mercedes-classe-a';

-- FR
UPDATE public.seo_vehicles SET
  slug_fr             = 'mercedes-classe-a-location-olbia',
  title_fr            = 'Location Mercedes Classe A 180d Olbia | KS Rent Sardinia',
  h1_fr               = 'Louer la Mercedes Classe A diesel à Olbia',
  meta_description_fr = 'Mercedes Classe A 180d en location à Olbia : boîte automatique 7G-DCT, diesel à faible consommation. Idéale pour les longs séjours en Costa Smeralda. Sans carte bancaire.',
  content_html_fr     = '<p>La <strong>Mercedes Classe A 180d</strong> est la berline compacte premium idéale pour les séjours moyens à longs en Sardaigne. <strong>Moteur 1.5 diesel de 116 ch</strong>, <strong>boîte automatique 7G-DCT à double embrayage</strong>, consommation réelle de 5-6 L/100 km et coffre de 370 litres. L''élégance Mercedes sans la consommation d''une sportive.</p>
<h2>Quand la choisir</h2>
<p>Si vous passez 7 à 15 jours en Costa Smeralda et roulez tous les jours (Olbia → Porto Cervo → Santa Teresa → Bosa → retour), la Classe A diesel vous permet de parcourir toute l''île avec un seul plein. Confortable pour 4 adultes, climatisation automatique bi-zone, info-divertissement MBUX avec navigation intégrée. Parfaite pour les couples en voyage, les séjours en villa et les déplacements professionnels en Gallura.</p>
<h2>Zones de livraison privilégiées</h2>
<p>Nous la livrons dans toute la Gallura, particulièrement demandée à <strong>Porto Rotondo, Arzachena, Santa Teresa Gallura et Palau</strong> pour les longs séjours. Siège opérationnel à Olbia, Viale Isola Bianca 38, à 5 minutes du port et à 10 minutes de l''aéroport.</p>
<h2>Ce qui est inclus dans la location</h2>
<ul><li>Assurance complète RCA + Kasko</li><li>Kilométrage illimité dans toute la Sardaigne</li><li>Livraison gratuite dans un rayon de 60 km d''Olbia</li><li>Second conducteur gratuit</li><li>Assistance routière 24/7</li></ul>
<p><strong>Aucune carte de crédit obligatoire</strong> : nous acceptons les cartes de débit, les cartes prépayées et les espèces pour le dépôt de garantie.</p>'
WHERE group_slug = 'mercedes-classe-a';

-- FAQs mercedes-classe-a
UPDATE public.seo_vehicles SET faqs = '[
  {
    "q": "La Mercedes Classe A 180d e'' a benzina o diesel?",
    "a": "Diesel. Motore 1.5 OM608 a basso consumo, ideale per chi percorre molti chilometri durante il soggiorno. Consumi reali tra 5 e 6 L/100 km in uso misto.",
    "q_en": "Is the Mercedes A-Class 180d petrol or diesel?",
    "a_en": "Diesel. Low-consumption 1.5-litre OM608 engine, ideal if you cover plenty of miles during your stay. Real-world consumption between 5 and 6 L/100 km in mixed use.",
    "q_de": "Ist die Mercedes A-Klasse 180d ein Benziner oder ein Diesel?",
    "a_de": "Diesel. Verbrauchsarmer 1.5 OM608 Motor, ideal für alle, die im Urlaub viele Kilometer zurücklegen. Realverbrauch zwischen 5 und 6 L/100 km im gemischten Betrieb.",
    "q_fr": "La Mercedes Classe A 180d est-elle essence ou diesel ?",
    "a_fr": "Diesel. Moteur 1.5 OM608 à faible consommation, idéal pour ceux qui parcourent beaucoup de kilomètres durant leur séjour. Consommation réelle entre 5 et 6 L/100 km en usage mixte."
  },
  {
    "q": "Quanti bagagli entrano nella Classe A?",
    "a": "Bagagliaio da 370 litri, comodo per 3 trolley grandi piu'' bagaglio a mano. Sedili posteriori ribaltabili 60:40 per carichi piu'' grandi (palette da surf, valigie multiple).",
    "q_en": "How much luggage fits in the A-Class?",
    "a_en": "370-litre boot, comfortable for three large suitcases plus carry-on. 60:40 split-folding rear seats for larger loads (surfboards, multiple cases).",
    "q_de": "Wie viel Gepäck passt in die A-Klasse?",
    "a_de": "Kofferraum mit 370 Litern, komfortabel für 3 große Trolleys plus Handgepäck. Im Verhältnis 60:40 umklappbare Rücksitze für größere Ladung (Surfbretter, mehrere Koffer).",
    "q_fr": "Combien de bagages entrent dans la Classe A ?",
    "a_fr": "Coffre de 370 litres, confortable pour 3 grandes valises plus bagage à main. Sièges arrière rabattables 60:40 pour les charges plus volumineuses (planches de surf, valises multiples)."
  },
  {
    "q": "E'' adatta a strade sterrate per raggiungere le spiagge?",
    "a": "E'' una berlina con altezza da terra standard - va benissimo su strade asfaltate e sterrati battuti, ma per spiagge come Cala Brandinchi o Spiaggia del Principe con accesso su strada bianca consigliamo il Jeep Avenger.",
    "q_en": "Is it suitable for unpaved roads to reach the beaches?",
    "a_en": "It is a saloon with standard ground clearance - perfectly fine on tarmac and well-compacted gravel, but for beaches like Cala Brandinchi or Spiaggia del Principe accessed via white roads we recommend the Jeep Avenger.",
    "q_de": "Ist sie für Schotterwege zu den Stränden geeignet?",
    "a_de": "Es ist eine Limousine mit Standard-Bodenfreiheit - sie kommt mit Asphaltstraßen und festgefahrenen Schotterpisten gut zurecht. Für Strände wie Cala Brandinchi oder Spiaggia del Principe mit Zufahrt über Weißstraßen empfehlen wir den Jeep Avenger.",
    "q_fr": "Convient-elle aux routes non goudronnées pour rejoindre les plages ?",
    "a_fr": "C''est une berline à hauteur de caisse standard - elle passe très bien sur routes asphaltées et chemins de terre damés, mais pour des plages comme Cala Brandinchi ou Spiaggia del Principe avec accès sur route blanche nous recommandons le Jeep Avenger."
  },
  {
    "q": "Il cambio automatico ha le palette al volante?",
    "a": "Si, cambio 7G-DCT a doppia frizione con palette al volante per modalita'' sportiva. Modalita'' Eco, Comfort e Sport selezionabili tramite drive mode.",
    "q_en": "Does the automatic gearbox have steering-wheel paddles?",
    "a_en": "Yes, 7G-DCT dual-clutch gearbox with steering-wheel paddles for sport mode. Eco, Comfort and Sport modes selectable via Drive Mode.",
    "q_de": "Hat das Automatikgetriebe Schaltwippen am Lenkrad?",
    "a_de": "Ja, 7G-DCT Doppelkupplungsgetriebe mit Schaltwippen am Lenkrad für den Sportmodus. Modi Eco, Comfort und Sport wählbar über den Drive Mode.",
    "q_fr": "La boîte automatique dispose-t-elle des palettes au volant ?",
    "a_fr": "Oui, boîte 7G-DCT à double embrayage avec palettes au volant pour le mode sportif. Modes Eco, Comfort et Sport sélectionnables via le drive mode."
  },
  {
    "q": "Posso noleggiare la Classe A per un solo giorno?",
    "a": "Si, noleggi giornalieri disponibili. Sconti progressivi gia'' dalla seconda giornata; tariffa settimanale piu'' conveniente del 15-20% rispetto al giornaliero.",
    "q_en": "Can I hire the A-Class for just one day?",
    "a_en": "Yes, daily hires are available. Progressive discounts from the second day; the weekly rate is 15-20% cheaper than daily.",
    "q_de": "Kann ich die A-Klasse für nur einen Tag mieten?",
    "a_de": "Ja, Tagesmieten sind möglich. Gestaffelte Rabatte bereits ab dem zweiten Tag; der Wochentarif ist 15-20% günstiger als der Tagestarif.",
    "q_fr": "Puis-je louer la Classe A pour une seule journée ?",
    "a_fr": "Oui, locations à la journée disponibles. Remises progressives dès la deuxième journée ; le tarif hebdomadaire est 15 à 20 % plus avantageux que le quotidien."
  }
]'::jsonb
WHERE group_slug = 'mercedes-classe-a';


-- ──────────────────────────────────────────────────────────────
-- 4) jeep-avenger
-- ──────────────────────────────────────────────────────────────

-- EN-GB
UPDATE public.seo_vehicles SET
  slug_en             = 'jeep-avenger-hire-olbia',
  title_en            = 'Jeep Avenger Hire Olbia | SUV Beach Sardinia - KS Rent',
  h1_en               = 'Hire the Jeep Avenger in Olbia: SUV for unpaved beach roads',
  meta_description_en = 'Jeep Avenger hire in Olbia: compact SUV ideal for Cala Brandinchi, Spiaggia del Principe and coves with unpaved access. No credit card needed.',
  content_html_en     = '<p>The <strong>Jeep Avenger</strong> is the compact SUV that lets you reach the most beautiful beaches of north-eastern Sardinia, including those with white-road access. <strong>1.2 turbo petrol engine producing 100 hp</strong>, <strong>6-speed automatic gearbox</strong>, raised ride height, Auto/Eco/Sport/Sand driving modes. Five genuine seats, 380-litre boot, urban footprint (4.08 m in length) with a soft off-road character.</p>
<h2>Why it is the perfect beach choice</h2>
<p>The most iconic coves of Gallura - <strong>Cala Brandinchi, Spiaggia del Principe, Cala Capra, Capo Coda Cavallo, Liscia Ruja</strong> - are often reached via unpaved or compacted tracks. Thanks to its 200 mm ground clearance, approach angle and Sand mode, the Avenger handles these routes without trouble and without risk of grounding. It also parks easily in the tight beach car parks.</p>
<h2>Family and luggage</h2>
<p>Five fully usable adult seats, a generous boot with 12V socket, ISOFIX child seat mounts available free of charge on request. Automatic air conditioning, infotainment with CarPlay and Android Auto, rear-view camera.</p>
<h2>Delivery</h2>
<p>We deliver the Jeep Avenger across Gallura and Costa Smeralda. <strong>No credit card required</strong>, security deposit accepted via debit card or cash. Service seven days a week, from 10:00 to 22:30.</p>'
WHERE group_slug = 'jeep-avenger';

-- DE
UPDATE public.seo_vehicles SET
  slug_de             = 'jeep-avenger-mieten-olbia',
  title_de            = 'Jeep Avenger mieten Olbia | SUV Strände Sardinien - KS Rent',
  h1_de               = 'Jeep Avenger mieten in Olbia: SUV für Strände auf Schotterwegen',
  meta_description_de = 'Jeep Avenger mieten in Olbia: kompaktes SUV ideal für Cala Brandinchi, Spiaggia del Principe und Buchten mit Schotterzufahrt. Ohne Kreditkarte.',
  content_html_de     = '<p>Der <strong>Jeep Avenger</strong> ist das kompakte SUV, mit dem Sie die schönsten Strände im Nordosten Sardiniens erreichen, auch jene mit Zufahrt über Weißstraßen. <strong>Turbo-Benzinmotor mit 100 PS</strong>, <strong>6-Gang-Automatikgetriebe</strong>, erhöhte Bodenfreiheit, Fahrmodi Auto/Eco/Sport/Sand. Fünf echte Sitzplätze, 380-Liter-Kofferraum, städtische Abmessungen (4,08 m Länge) bei sanftem Offroad-Charakter.</p>
<h2>Warum es die perfekte Wahl für die Strände ist</h2>
<p>Die kultigsten Buchten Galluras - <strong>Cala Brandinchi, Spiaggia del Principe, Cala Capra, Capo Coda Cavallo, Liscia Ruja</strong> - sind oft über Schotterwege oder festgefahrene Pisten erreichbar. Dank Bodenfreiheit (200 mm), Böschungswinkel und Sandmodus meistert der Avenger diese Strecken mühelos und ohne Aufsetzgefahr. Er parkt auch problemlos in den engen Parkplätzen an den Strandzufahrten.</p>
<h2>Familie und Gepäck</h2>
<p>Fünf voll nutzbare Erwachsenensitze, geräumiger Kofferraum mit 12V-Steckdose, ISOFIX-Halterungen für Kindersitze auf Anfrage kostenlos verfügbar. Klimaautomatik, Infotainment mit CarPlay und Android Auto, Rückfahrkamera.</p>
<h2>Lieferung</h2>
<p>Wir liefern den Jeep Avenger in ganz Gallura und an die Costa Smeralda. <strong>Keine Kreditkarte erforderlich</strong>, Kaution auch per EC-Karte oder Bargeld akzeptiert. Service sieben Tage die Woche, von 10:00 bis 22:30 Uhr.</p>'
WHERE group_slug = 'jeep-avenger';

-- FR
UPDATE public.seo_vehicles SET
  slug_fr             = 'jeep-avenger-location-olbia',
  title_fr            = 'Location Jeep Avenger Olbia | SUV Plages Sardaigne - KS Rent',
  h1_fr               = 'Louer le Jeep Avenger à Olbia : SUV pour plages sur chemins de terre',
  meta_description_fr = 'Jeep Avenger en location à Olbia : SUV compact parfait pour Cala Brandinchi, Spiaggia del Principe et les criques avec accès non goudronné. Sans carte bancaire.',
  content_html_fr     = '<p>Le <strong>Jeep Avenger</strong> est le SUV compact qui vous permet d''atteindre les plus belles plages du nord-est de la Sardaigne, y compris celles dont l''accès se fait sur route blanche. <strong>Moteur essence turbo de 100 ch</strong>, <strong>boîte automatique à 6 rapports</strong>, garde au sol surélevée, modes de conduite Auto/Eco/Sport/Sand. 5 vraies places, coffre de 380 litres, dimensions urbaines (4,08 m de long) avec un caractère soft off-road.</p>
<h2>Pourquoi c''est le choix idéal pour les plages</h2>
<p>Les criques les plus emblématiques de la Gallura - <strong>Cala Brandinchi, Spiaggia del Principe, Cala Capra, Capo Coda Cavallo, Liscia Ruja</strong> - se rejoignent souvent par des routes non goudronnées ou des pistes damées. Grâce à sa garde au sol (200 mm), à son angle d''attaque et au mode Sand, l''Avenger gère ces parcours sans difficulté et sans risque de toucher le bas de caisse. Il se gare facilement même dans les parkings étroits typiques des accès aux plages.</p>
<h2>Famille et bagages</h2>
<p>Cinq places pleinement utilisables par des adultes, coffre généreux avec prise 12V, fixations ISOFIX pour sièges enfants disponibles gratuitement sur demande. Climatisation automatique, info-divertissement avec CarPlay et Android Auto, caméra de recul.</p>
<h2>Livraison</h2>
<p>Nous livrons le Jeep Avenger dans toute la Gallura et la Costa Smeralda. <strong>Aucune carte de crédit obligatoire</strong>, dépôt de garantie accepté aussi par carte de débit ou en espèces. Service 7 jours sur 7, de 10h00 à 22h30.</p>'
WHERE group_slug = 'jeep-avenger';

-- FAQs jeep-avenger
UPDATE public.seo_vehicles SET faqs = '[
  {
    "q": "Il Jeep Avenger ha la trazione integrale?",
    "a": "L''Avenger e'' a trazione anteriore con modalita'' Sand/Mud per controllo trazione su sterrato. Non e'' un 4x4 puro, ma per le strade bianche di accesso alle spiagge della Gallura e'' piu'' che sufficiente.",
    "q_en": "Does the Jeep Avenger have all-wheel drive?",
    "a_en": "The Avenger is front-wheel drive with Sand/Mud modes for traction control on unpaved surfaces. It is not a pure 4x4, but for the white roads leading to Gallura''s beaches it is more than enough.",
    "q_de": "Hat der Jeep Avenger Allradantrieb?",
    "a_de": "Der Avenger hat Frontantrieb mit Sand-/Mud-Modus für die Traktionskontrolle auf unbefestigtem Untergrund. Es ist kein reiner 4x4, aber für die Weißstraßen zu den Stränden Galluras mehr als ausreichend.",
    "q_fr": "Le Jeep Avenger dispose-t-il de la transmission intégrale ?",
    "a_fr": "L''Avenger est une traction avant avec modes Sand/Mud pour le contrôle de traction sur chemins. Ce n''est pas un vrai 4x4, mais pour les routes blanches d''accès aux plages de la Gallura c''est largement suffisant."
  },
  {
    "q": "Posso arrivare a Cala Brandinchi con l''Avenger?",
    "a": "Si, e'' uno degli usi piu'' frequenti. L''accesso a Cala Brandinchi e'' su strada bianca battuta percorribile senza problemi. Stessa cosa per Spiaggia del Principe, La Cinta, Lu Impostu.",
    "q_en": "Can I reach Cala Brandinchi with the Avenger?",
    "a_en": "Yes, it is one of the most frequent uses. Access to Cala Brandinchi is via a well-compacted white road that can be driven without issue. The same applies to Spiaggia del Principe, La Cinta and Lu Impostu.",
    "q_de": "Komme ich mit dem Avenger nach Cala Brandinchi?",
    "a_de": "Ja, das ist einer der häufigsten Einsätze. Die Zufahrt zur Cala Brandinchi verläuft über eine gut festgefahrene Weißstraße, die problemlos befahrbar ist. Dasselbe gilt für Spiaggia del Principe, La Cinta und Lu Impostu.",
    "q_fr": "Puis-je rejoindre Cala Brandinchi avec l''Avenger ?",
    "a_fr": "Oui, c''est l''une des utilisations les plus fréquentes. L''accès à Cala Brandinchi se fait sur route blanche damée, praticable sans problème. Idem pour Spiaggia del Principe, La Cinta et Lu Impostu."
  },
  {
    "q": "Quanti seggiolini bambino entrano dietro?",
    "a": "Due seggiolini in modo confortevole. Ganci ISOFIX presenti sui sedili laterali posteriori. Seggiolini disponibili gratuitamente con il noleggio, da richiedere in fase di prenotazione.",
    "q_en": "How many child seats fit in the back?",
    "a_en": "Two child seats comfortably. ISOFIX mounts on the outer rear seats. Child seats supplied free of charge with the hire, to be requested at booking.",
    "q_de": "Wie viele Kindersitze passen auf die Rückbank?",
    "a_de": "Zwei Kindersitze passen komfortabel. ISOFIX-Halterungen auf den äußeren Rücksitzen. Kindersitze sind im Rahmen der Miete kostenlos erhältlich, bitte bei der Buchung anfragen.",
    "q_fr": "Combien de sièges enfants entrent à l''arrière ?",
    "a_fr": "Deux sièges enfants confortablement. Fixations ISOFIX présentes sur les sièges arrière latéraux. Sièges fournis gratuitement avec la location, à demander lors de la réservation."
  },
  {
    "q": "L''Avenger ha il bagagliaio abbastanza grande per una famiglia di 4?",
    "a": "380 litri, basta per 3 trolley medi + zaini. Sedili posteriori ribaltabili 60:40 per carichi extra. Se viaggiate con tavole da surf rigide o canoe vi consigliamo modelli piu'' grandi su richiesta.",
    "q_en": "Is the Avenger boot big enough for a family of four?",
    "a_en": "380 litres, enough for three medium suitcases plus backpacks. 60:40 split-folding rear seats for extra load. If you are travelling with rigid surfboards or canoes we recommend larger models on request.",
    "q_de": "Ist der Kofferraum des Avenger groß genug für eine vierköpfige Familie?",
    "a_de": "380 Liter, ausreichend für 3 mittlere Trolleys plus Rucksäcke. Im Verhältnis 60:40 umklappbare Rücksitze für zusätzliche Ladung. Bei Reisen mit harten Surfbrettern oder Kanus empfehlen wir größere Modelle auf Anfrage.",
    "q_fr": "Le coffre de l''Avenger est-il assez grand pour une famille de 4 ?",
    "a_fr": "380 litres, suffisant pour 3 valises moyennes + sacs à dos. Sièges arrière rabattables 60:40 pour les charges supplémentaires. Si vous voyagez avec des planches de surf rigides ou des canoës, nous recommandons des modèles plus grands sur demande."
  },
  {
    "q": "E'' automatico?",
    "a": "Si, cambio automatico a 6 rapporti. Modalita'' Eco per consumi ridotti, Sport per guida piu'' reattiva, Sand per strade bianche.",
    "q_en": "Is it automatic?",
    "a_en": "Yes, 6-speed automatic gearbox. Eco mode for reduced consumption, Sport for sharper driving, Sand for white roads.",
    "q_de": "Hat er ein Automatikgetriebe?",
    "a_de": "Ja, 6-Gang-Automatikgetriebe. Eco-Modus für reduzierten Verbrauch, Sport für agileres Fahren, Sand für Weißstraßen.",
    "q_fr": "Est-elle automatique ?",
    "a_fr": "Oui, boîte automatique à 6 rapports. Mode Eco pour une consommation réduite, Sport pour une conduite plus réactive, Sand pour les routes blanches."
  }
]'::jsonb
WHERE group_slug = 'jeep-avenger';


-- ──────────────────────────────────────────────────────────────
-- 5) fiat-panda
-- ──────────────────────────────────────────────────────────────

-- EN-GB
UPDATE public.seo_vehicles SET
  slug_en             = 'fiat-panda-hire-olbia',
  title_en            = 'Fiat Panda Hire Olbia | Affordable City Car - KS Rent Sardinia',
  h1_en               = 'Hire the Fiat Panda Hybrid in Olbia: affordable city car',
  meta_description_en = 'Fiat Panda Hybrid hire in Olbia: hybrid city car, minimal consumption, easy parking in town and at the ports. No credit card required.',
  content_html_en     = '<p>The <strong>Fiat Panda Hybrid</strong> is the most practical and affordable city car in the KS Rent fleet. <strong>1.0 FireFly mild-hybrid engine producing 70 hp</strong>, real-world consumption of <strong>4.5-5 L/100 km</strong>, 5-speed manual gearbox, 5 doors, urban dimensions perfectly suited to Sardinia''s historic centres.</p>
<h2>Who it is for</h2>
<p>Couples, solo travellers and anyone keen to save on the hire without giving up comfort. <strong>The most competitive price in our fleet</strong> and low consumption make it ideal for medium-to-long stays with daily use. It parks anywhere - in the narrow alleys of central Olbia, in the small villages of inland Gallura, in the busy beach car parks.</p>
<h2>Best areas of use</h2>
<p>Trips between <strong>Olbia, Golfo Aranci, Pittulongu, Marinella, Budoni</strong> and all the coastal towns where parking is the main challenge. Also fine for beaches with tarmac access (Porto Istana, Bados, La Cinta). For beaches with unpaved access we recommend the Jeep Avenger.</p>
<h2>Without a credit card</h2>
<p>The Panda''s strong point: <strong>it is our most-requested car from customers without a credit card</strong>. Low security deposit (city-car category), accepted by debit card, prepaid card or cash. Delivery throughout Gallura within 60 km of Olbia.</p>'
WHERE group_slug = 'fiat-panda';

-- DE
UPDATE public.seo_vehicles SET
  slug_de             = 'fiat-panda-mieten-olbia',
  title_de            = 'Fiat Panda mieten Olbia | Günstiger Kleinwagen - KS Rent Sardinia',
  h1_de               = 'Fiat Panda Hybrid mieten in Olbia: günstiger Kleinwagen',
  meta_description_de = 'Fiat Panda Hybrid mieten in Olbia: hybrider Kleinwagen, minimaler Verbrauch, einfaches Parken in der Stadt und an den Häfen. Ohne Kreditkarte.',
  content_html_de     = '<p>Der <strong>Fiat Panda Hybrid</strong> ist der praktischste und günstigste Kleinwagen in der KS Rent Flotte. <strong>1.0 FireFly Mild-Hybrid-Motor mit 70 PS</strong>, Realverbrauch von <strong>4,5-5 L/100 km</strong>, 5-Gang-Schaltgetriebe, 5 Türen, städtische Abmessungen, ideal für die historischen Zentren Sardiniens.</p>
<h2>Für wen geeignet</h2>
<p>Paare, Alleinreisende und alle, die bei der Miete sparen möchten, ohne auf Komfort zu verzichten. <strong>Der günstigste Preis in unserer Flotte</strong> und der niedrige Verbrauch machen ihn ideal für mittlere bis lange Aufenthalte mit täglichem Gebrauch. Er parkt überall - in den engen Gassen des Zentrums von Olbia, in den kleinen Dörfern im Hinterland Galluras, auf den überfüllten Parkplätzen an den Stränden.</p>
<h2>Optimale Einsatzgebiete</h2>
<p>Fahrten zwischen <strong>Olbia, Golfo Aranci, Pittulongu, Marinella, Budoni</strong> und allen Küstenorten, in denen Parken die größte Herausforderung darstellt. Ausreichend auch, um Strände mit asphaltierter Zufahrt zu erreichen (Porto Istana, Bados, La Cinta). Für Strände mit Schotterzufahrt empfehlen wir den Jeep Avenger.</p>
<h2>Ohne Kreditkarte</h2>
<p>Die Stärke des Panda: <strong>er ist unser meistgefragtes Auto bei Kunden ohne Kreditkarte</strong>. Niedrige Kaution (Kleinwagen-Kategorie), akzeptiert per EC-Karte, Prepaid-Karte oder Bargeld. Lieferung in ganz Gallura innerhalb von 60 km von Olbia.</p>'
WHERE group_slug = 'fiat-panda';

-- FR
UPDATE public.seo_vehicles SET
  slug_fr             = 'fiat-panda-location-olbia',
  title_fr            = 'Location Fiat Panda Olbia | Citadine Économique - KS Rent Sardinia',
  h1_fr               = 'Louer la Fiat Panda Hybrid à Olbia : citadine économique',
  meta_description_fr = 'Fiat Panda Hybrid en location à Olbia : citadine hybride, consommation minimale, stationnement facile en centre-ville et aux ports. Sans carte bancaire.',
  content_html_fr     = '<p>La <strong>Fiat Panda Hybrid</strong> est la citadine la plus pratique et la plus économique de la flotte KS Rent. <strong>Moteur hybride 1.0 FireFly de 70 ch</strong> avec système mild-hybrid, consommation réelle de <strong>4,5-5 L/100 km</strong>, boîte manuelle à 5 rapports, 5 portes, dimensions urbaines parfaites pour les centres historiques sardes.</p>
<h2>Pour qui ?</h2>
<p>Couples, voyageurs solo, ceux qui veulent économiser sur la location sans renoncer au confort. <strong>Le tarif le plus compétitif de la flotte</strong> et la consommation réduite en font le choix idéal pour les séjours moyens à longs avec usage quotidien. Elle se gare partout - dans les ruelles étroites du centre d''Olbia, dans les petits villages de l''arrière-pays gallurais, dans les parkings bondés des plages.</p>
<h2>Zones d''utilisation privilégiées</h2>
<p>Déplacements entre <strong>Olbia, Golfo Aranci, Pittulongu, Marinella, Budoni</strong> et toutes les localités côtières où le stationnement est le principal défi. Suffisante aussi pour rejoindre les plages sur route asphaltée (Porto Istana, Bados, La Cinta). Pour les plages avec accès non goudronné, nous recommandons le Jeep Avenger.</p>
<h2>Sans carte de crédit</h2>
<p>Le point fort de la Panda : <strong>c''est notre voiture la plus demandée par les clients sans carte de crédit</strong>. Dépôt de garantie bas (catégorie citadine), accepté par carte de débit, carte prépayée ou en espèces. Livraison dans toute la Gallura dans un rayon de 60 km d''Olbia.</p>'
WHERE group_slug = 'fiat-panda';

-- FAQs fiat-panda
UPDATE public.seo_vehicles SET faqs = '[
  {
    "q": "La Fiat Panda Hybrid e'' ibrida o ibrida plug-in?",
    "a": "Sistema mild-hybrid a 12V (BSG): un piccolo motore elettrico assiste il termico nelle partenze e nelle accelerazioni, riducendo i consumi del 15-20%. Non si ricarica alla presa, si ricarica da sola con la decelerazione.",
    "q_en": "Is the Fiat Panda Hybrid a hybrid or a plug-in hybrid?",
    "a_en": "12V mild-hybrid system (BSG): a small electric motor assists the combustion engine on pull-away and under acceleration, cutting consumption by 15-20%. It does not plug in to recharge; it recharges itself during deceleration.",
    "q_de": "Ist der Fiat Panda Hybrid ein Hybrid oder ein Plug-in-Hybrid?",
    "a_de": "12V Mild-Hybrid-System (BSG): ein kleiner Elektromotor unterstützt den Verbrennungsmotor beim Anfahren und Beschleunigen und senkt den Verbrauch um 15-20%. Er wird nicht an der Steckdose geladen, sondern lädt sich beim Bremsen selbst.",
    "q_fr": "La Fiat Panda Hybrid est-elle hybride ou hybride rechargeable ?",
    "a_fr": "Système mild-hybrid 12V (BSG) : un petit moteur électrique assiste le thermique au démarrage et à l''accélération, réduisant la consommation de 15 à 20 %. Elle ne se recharge pas à la prise, elle se recharge seule lors des décélérations."
  },
  {
    "q": "Quanto costa noleggiare la Panda al giorno?",
    "a": "E'' il veicolo piu'' economico della flotta. Tariffe esatte nella tabella prezzi mensili in questa pagina: aprile e ottobre sono i mesi piu'' convenienti, alta stagione luglio-agosto.",
    "q_en": "How much does it cost to hire the Panda per day?",
    "a_en": "It is the cheapest vehicle in the fleet. Exact rates in the monthly price table on this page: April and October are the most affordable months, peak season is July-August.",
    "q_de": "Wie viel kostet die Miete des Panda pro Tag?",
    "a_de": "Es ist das günstigste Fahrzeug der Flotte. Genaue Tarife in der monatlichen Preistabelle auf dieser Seite: April und Oktober sind die günstigsten Monate, Hochsaison ist Juli-August.",
    "q_fr": "Combien coûte la location de la Panda par jour ?",
    "a_fr": "C''est le véhicule le plus économique de la flotte. Tarifs exacts dans le tableau des prix mensuels sur cette page : avril et octobre sont les mois les plus avantageux, haute saison juillet-août."
  },
  {
    "q": "E'' adatta a 4 adulti per lunghi tragitti?",
    "a": "Pratica per 2 adulti + 2 bambini, oppure 4 adulti su distanze brevi. Per 4 adulti con bagagli su viaggi lunghi consigliamo la Mercedes Classe A o il Jeep Avenger.",
    "q_en": "Is it suitable for 4 adults on long journeys?",
    "a_en": "Practical for 2 adults plus 2 children, or 4 adults over short distances. For 4 adults with luggage on long trips we recommend the Mercedes A-Class or the Jeep Avenger.",
    "q_de": "Ist er für 4 Erwachsene auf langen Strecken geeignet?",
    "a_de": "Praktisch für 2 Erwachsene + 2 Kinder oder 4 Erwachsene auf kurzen Strecken. Für 4 Erwachsene mit Gepäck auf langen Reisen empfehlen wir die Mercedes A-Klasse oder den Jeep Avenger.",
    "q_fr": "Convient-elle à 4 adultes pour de longs trajets ?",
    "a_fr": "Pratique pour 2 adultes + 2 enfants, ou 4 adultes sur de courtes distances. Pour 4 adultes avec bagages sur de longs voyages, nous recommandons la Mercedes Classe A ou le Jeep Avenger."
  },
  {
    "q": "E'' un cambio manuale o automatico?",
    "a": "Manuale 5 marce. Se preferisci automatico ti suggeriamo Mercedes Classe A o Jeep Avenger.",
    "q_en": "Is it manual or automatic?",
    "a_en": "Manual, 5 gears. If you prefer automatic we suggest the Mercedes A-Class or the Jeep Avenger.",
    "q_de": "Ist es ein Schalt- oder Automatikgetriebe?",
    "a_de": "Schaltgetriebe mit 5 Gängen. Wenn Sie eine Automatik bevorzugen, empfehlen wir Ihnen die Mercedes A-Klasse oder den Jeep Avenger.",
    "q_fr": "Est-ce une boîte manuelle ou automatique ?",
    "a_fr": "Manuelle à 5 vitesses. Si vous préférez l''automatique, nous vous suggérons la Mercedes Classe A ou le Jeep Avenger."
  },
  {
    "q": "Posso lasciare la Panda al porto di Olbia per la partenza?",
    "a": "Si. Ti veniamo a ritirare il veicolo direttamente al porto Isola Bianca o all''aeroporto. Servizio gratuito entro l''orario di apertura (10:00-22:30, 7/7).",
    "q_en": "Can I leave the Panda at Olbia port on departure?",
    "a_en": "Yes. We collect the vehicle directly at Isola Bianca port or at the airport. Free service during opening hours (10:00-22:30, 7 days a week).",
    "q_de": "Kann ich den Panda bei der Abreise am Hafen Olbia abgeben?",
    "a_de": "Ja. Wir holen das Fahrzeug direkt am Hafen Isola Bianca oder am Flughafen ab. Kostenloser Service innerhalb der Öffnungszeiten (10:00-22:30 Uhr, 7/7).",
    "q_fr": "Puis-je laisser la Panda au port d''Olbia pour le départ ?",
    "a_fr": "Oui. Nous venons récupérer le véhicule directement au port Isola Bianca ou à l''aéroport. Service gratuit pendant les horaires d''ouverture (10h00-22h30, 7j/7)."
  }
]'::jsonb
WHERE group_slug = 'fiat-panda';


-- ──────────────────────────────────────────────────────────────
-- 6) honda-sh
-- ──────────────────────────────────────────────────────────────

-- EN-GB
UPDATE public.seo_vehicles SET
  slug_en             = 'honda-sh-hire-olbia',
  title_en            = 'Honda SH 125 and 350 Hire Olbia | Scooter Sardinia - KS Rent',
  h1_en               = 'Hire the Honda SH 125 or 350 in Olbia',
  meta_description_en = 'Honda SH 125 and SH 350 hire in Olbia: agile scooter for Costa Smeralda and central Olbia. Category A licence required for the 350. No credit card needed.',
  content_html_en     = '<p><strong>Honda SH 125 and SH 350</strong> are the best-selling scooters in Italy for a reason: total reliability, 16-inch large front wheels for stability on less-than-perfect roads, generous underseat storage and very low fuel consumption. KS Rent Sardinia stocks both - <strong>SH 125 for category B licence holders (A1 included)</strong>, <strong>SH 350 for category A licence holders</strong>.</p>
<h2>Honda SH 125</h2>
<p>Liquid-cooled 125 cc engine, PGM-FI fuel injection, Start &amp; Stop system, CBS combined braking. Top speed 102 km/h. <strong>Rideable on a category B (car) licence</strong> - no motorbike licence required. Perfect for central Olbia, Porto Rotondo, Pittulongu, Bados and Golfo Aranci.</p>
<h2>Honda SH 350</h2>
<p>Liquid-cooled 330 cc engine producing 29 hp, 2-channel ABS, HSTC traction control. Top speed 135 km/h. <strong>Category A licence required</strong>. Ideal for racking up miles between Olbia and Costa Smeralda every day, or for longer trips to Santa Teresa, Palau and Aglientu.</p>
<h2>What is included</h2>
<ul><li>Two helmets (free, sizes to be confirmed)</li><li>RCA + Kasko insurance</li><li>Disc-lock anti-theft</li><li>Bike cover</li><li>Unlimited mileage</li></ul>
<p>Delivery throughout Gallura. <strong>No credit card required</strong>.</p>'
WHERE group_slug = 'honda-sh';

-- DE
UPDATE public.seo_vehicles SET
  slug_de             = 'honda-sh-mieten-olbia',
  title_de            = 'Honda SH 125 und 350 mieten Olbia | Roller Sardinien - KS Rent',
  h1_de               = 'Honda SH 125 oder 350 mieten in Olbia',
  meta_description_de = 'Honda SH 125 und SH 350 mieten in Olbia: wendiger Roller für die Costa Smeralda und das Zentrum von Olbia. Führerschein A für die 350. Ohne Kreditkarte.',
  content_html_de     = '<p><strong>Honda SH 125 und SH 350</strong> sind aus gutem Grund die meistverkauften Roller Italiens: absolute Zuverlässigkeit, hohe Räder (16 Zoll vorne) für Stabilität auf weniger ebenen Straßen, geräumiger Sitzkasten, minimaler Verbrauch. KS Rent Sardinia hat beide Modelle - <strong>SH 125 für Inhaber der Klasse B (A1 inklusive)</strong>, <strong>SH 350 für Inhaber der Klasse A</strong>.</p>
<h2>Honda SH 125</h2>
<p>Flüssigkeitsgekühlter 125-cm³-Motor, PGM-FI-Einspritzung, Start-&amp;-Stopp-System, kombinierte CBS-Bremsanlage. Höchstgeschwindigkeit 102 km/h. <strong>Mit Führerschein Klasse B (Auto) fahrbar</strong> - kein Motorradführerschein erforderlich. Perfekt für das Zentrum von Olbia, Porto Rotondo, Pittulongu, Bados und Golfo Aranci.</p>
<h2>Honda SH 350</h2>
<p>Flüssigkeitsgekühlter 330-cm³-Motor mit 29 PS, 2-Kanal-ABS, HSTC-Traktionskontrolle. Höchstgeschwindigkeit 135 km/h. <strong>Führerschein A erforderlich</strong>. Ideal, um täglich Kilometer zwischen Olbia und der Costa Smeralda zurückzulegen oder für längere Ausflüge nach Santa Teresa, Palau und Aglientu.</p>
<h2>Was inbegriffen ist</h2>
<ul><li>Zwei Helme (kostenlos, Größen abzustimmen)</li><li>Versicherung RCA + Kasko</li><li>Bremsscheibenschloss als Diebstahlschutz</li><li>Motorradabdeckung</li><li>Unbegrenzte Kilometer</li></ul>
<p>Lieferung in ganz Gallura. <strong>Keine Kreditkarte erforderlich</strong>.</p>'
WHERE group_slug = 'honda-sh';

-- FR
UPDATE public.seo_vehicles SET
  slug_fr             = 'honda-sh-location-olbia',
  title_fr            = 'Location Honda SH 125 et 350 Olbia | Scooter Sardaigne - KS Rent',
  h1_fr               = 'Louer le Honda SH 125 ou 350 à Olbia',
  meta_description_fr = 'Honda SH 125 et SH 350 en location à Olbia : scooter agile pour la Costa Smeralda et le centre d''Olbia. Permis A pour le 350. Sans carte bancaire.',
  content_html_fr     = '<p>Les <strong>Honda SH 125 et SH 350</strong> sont les scooters les plus vendus en Italie pour une bonne raison : fiabilité totale, roues hautes (16 pouces à l''avant) pour la stabilité sur routes imparfaites, coffre sous la selle généreux, consommation minimale. KS Rent Sardinia les propose tous les deux - <strong>SH 125 pour les titulaires du permis B (A1 inclus)</strong>, <strong>SH 350 pour les titulaires du permis A</strong>.</p>
<h2>Honda SH 125</h2>
<p>Moteur 125 cm³ refroidi par liquide, injection PGM-FI, système Start &amp; Stop, freinage combiné CBS. Vitesse maximale 102 km/h. <strong>Conduisible avec le permis B (voiture)</strong> - pas besoin de permis moto. Parfait pour le centre d''Olbia, Porto Rotondo, Pittulongu, Bados, Golfo Aranci.</p>
<h2>Honda SH 350</h2>
<p>Moteur 330 cm³ refroidi par liquide de 29 ch, ABS à 2 canaux, contrôle de traction HSTC. Vitesse maximale 135 km/h. <strong>Permis A obligatoire</strong>. Idéal pour avaler les kilomètres entre Olbia et la Costa Smeralda au quotidien, ou pour de longues sorties vers Santa Teresa, Palau, Aglientu.</p>
<h2>Ce qui est inclus</h2>
<ul><li>Deux casques (offerts, taille à convenir)</li><li>Assurance RCA + Kasko</li><li>Antivol bloque-disque</li><li>Housse de protection</li><li>Kilométrage illimité</li></ul>
<p>Livraison dans toute la Gallura. <strong>Aucune carte de crédit obligatoire</strong>.</p>'
WHERE group_slug = 'honda-sh';

-- FAQs honda-sh
UPDATE public.seo_vehicles SET faqs = '[
  {
    "q": "Che patente serve per la Honda SH 125?",
    "a": "Va bene la patente B (auto) ottenuta dopo il 1985. Per chi ha solo A1 (16+ anni), va bene. Non serve patente A.",
    "q_en": "What licence do I need for the Honda SH 125?",
    "a_en": "A category B (car) licence obtained after 1985 is fine. An A1 licence (age 16+) is also accepted. A category A licence is not required.",
    "q_de": "Welcher Führerschein wird für die Honda SH 125 benötigt?",
    "a_de": "Ein Führerschein der Klasse B (Auto), erworben nach 1985, reicht aus. Auch ein A1-Führerschein (ab 16 Jahren) ist gültig. Ein Führerschein der Klasse A ist nicht erforderlich.",
    "q_fr": "Quel permis faut-il pour la Honda SH 125 ?",
    "a_fr": "Le permis B (voiture) obtenu après 1985 convient. Le permis A1 (à partir de 16 ans) convient aussi. Pas besoin de permis A."
  },
  {
    "q": "Che patente serve per la Honda SH 350?",
    "a": "Patente A obbligatoria (qualsiasi sotto-categoria: A, A2 con limitazioni a 35 kW). La A1 e la B non bastano per la 350.",
    "q_en": "What licence do I need for the Honda SH 350?",
    "a_en": "A category A licence is mandatory (any sub-category: A, A2 with 35 kW restriction). A1 and B licences are not sufficient for the 350.",
    "q_de": "Welcher Führerschein wird für die Honda SH 350 benötigt?",
    "a_de": "Führerschein Klasse A erforderlich (jede Unterkategorie: A, A2 mit Beschränkung auf 35 kW). A1 und B reichen für die 350 nicht aus.",
    "q_fr": "Quel permis faut-il pour la Honda SH 350 ?",
    "a_fr": "Permis A obligatoire (toute sous-catégorie : A, A2 avec limitation à 35 kW). Les permis A1 et B ne suffisent pas pour la 350."
  },
  {
    "q": "I caschi sono inclusi nel noleggio?",
    "a": "Si, due caschi inclusi. Comunicaci le taglie in fase di prenotazione (S/M/L/XL). Disponibili anche caschi jet e modulari su richiesta.",
    "q_en": "Are helmets included in the hire?",
    "a_en": "Yes, two helmets included. Let us know the sizes at booking (S/M/L/XL). Open-face and flip-up helmets are also available on request.",
    "q_de": "Sind Helme in der Miete enthalten?",
    "a_de": "Ja, zwei Helme inklusive. Teilen Sie uns die Größen bei der Buchung mit (S/M/L/XL). Jet- und Klapphelme sind auf Anfrage ebenfalls erhältlich.",
    "q_fr": "Les casques sont-ils inclus dans la location ?",
    "a_fr": "Oui, deux casques inclus. Communiquez-nous les tailles lors de la réservation (S/M/L/XL). Casques jet et modulables également disponibles sur demande."
  },
  {
    "q": "Lo scooter ha il sottosella per il casco?",
    "a": "Si, sottosella illuminato che contiene un casco integrale completo (SH 350) o un casco jet + oggetti (SH 125). Vano portaoggetti anteriore aggiuntivo.",
    "q_en": "Does the scooter have underseat storage for the helmet?",
    "a_en": "Yes, an illuminated underseat compartment that fits a full-face helmet (SH 350) or an open-face helmet plus items (SH 125). An additional front cubby is also fitted.",
    "q_de": "Hat der Roller ein Helmfach unter dem Sitz?",
    "a_de": "Ja, ein beleuchteter Sitzkasten, in dem ein kompletter Integralhelm (SH 350) oder ein Jethelm plus Gegenstände (SH 125) Platz finden. Zusätzlich gibt es ein vorderes Staufach.",
    "q_fr": "Le scooter dispose-t-il d''un coffre sous la selle pour le casque ?",
    "a_fr": "Oui, coffre sous la selle éclairé qui contient un casque intégral complet (SH 350) ou un casque jet + objets (SH 125). Compartiment de rangement avant supplémentaire."
  },
  {
    "q": "Posso portarlo fuori dalla Gallura, ad esempio a Cagliari?",
    "a": "Si, chilometraggio illimitato e nessuna limitazione geografica in Sardegna. Pieno di benzina al ritiro e da restituire pieno.",
    "q_en": "Can I take it outside Gallura, for example to Cagliari?",
    "a_en": "Yes, mileage is unlimited and there is no geographical restriction within Sardinia. Full petrol tank at pickup; please return it full.",
    "q_de": "Kann ich ihn außerhalb Galluras nutzen, zum Beispiel bis Cagliari?",
    "a_de": "Ja, unbegrenzte Kilometer und keine geografischen Einschränkungen in Sardinien. Tank voll bei Übernahme; bitte voll zurückgeben.",
    "q_fr": "Puis-je le sortir de la Gallura, par exemple jusqu''à Cagliari ?",
    "a_fr": "Oui, kilométrage illimité et aucune limitation géographique en Sardaigne. Plein d''essence à la prise en charge, à restituer plein."
  }
]'::jsonb
WHERE group_slug = 'honda-sh';


-- ──────────────────────────────────────────────────────────────
-- 7) yamaha-quad-raptor
-- ──────────────────────────────────────────────────────────────

-- EN-GB
UPDATE public.seo_vehicles SET
  slug_en             = 'yamaha-raptor-quad-hire-sardinia',
  title_en            = 'Yamaha Raptor Quad Hire Olbia | Off-Road Gallura - KS Rent',
  h1_en               = 'Hire the Yamaha Raptor in Olbia: off-road quad in Gallura',
  meta_description_en = 'Yamaha Raptor hire in Olbia for off-road adventures across the Gallura hills. Category A or B licence, helmet and kit included.',
  content_html_en     = '<p>The <strong>Yamaha Raptor</strong> is the sports quad for those after a different experience from the classic beach day: off-road routes through the hills of Gallura, trails through Mediterranean scrubland, panoramic views over Costa Smeralda and Tavolara from the inland. <strong>Four-stroke single-cylinder engine</strong>, manual gearbox, long-travel suspension, knobbly tyres.</p>
<h2>Typical experience</h2>
<p>The quad is mainly used for <strong>guided or self-guided half-day or full-day excursions</strong>. Recommended routes: the hills above Arzachena with views over Costa Smeralda, the Capo Coda Cavallo area, the inland from Palau towards Capo d''Orso, the gravel routes around Cannigione. The quad is NOT homologated for protected beaches (La Maddalena park, Berchida dunes).</p>
<h2>Licence required</h2>
<p>Category B (car) or A licence. Driver must be at least 21. Riding experience recommended but not required. A 15-minute technical briefing is included at pickup.</p>
<h2>Equipment included</h2>
<ul><li>Approved full-face helmet</li><li>Protective gloves</li><li>Sunglasses / dust protection</li><li>Fuel for the first tank</li><li>RCA insurance</li><li>Map with recommended routes</li></ul>
<h2>Availability</h2>
<p>Quad hire season: <strong>April to October</strong>. Limited availability in peak season - we recommend booking at least 5 days ahead. <strong>No credit card required</strong>.</p>'
WHERE group_slug = 'yamaha-quad-raptor';

-- DE
UPDATE public.seo_vehicles SET
  slug_de             = 'yamaha-raptor-quad-mieten-sardinien',
  title_de            = 'Yamaha Raptor Quad mieten Olbia | Off-Road Gallura - KS Rent',
  h1_de               = 'Yamaha Raptor mieten in Olbia: Off-Road-Quad in Gallura',
  meta_description_de = 'Yamaha Raptor mieten in Olbia für Offroad-Abenteuer auf den Hügeln Galluras. Führerschein A oder B, Helm und Ausrüstung inklusive.',
  content_html_de     = '<p>Der <strong>Yamaha Raptor</strong> ist das Sport-Quad für alle, die ein anderes Erlebnis als den klassischen Strandtag suchen: Offroad-Strecken auf den Hügeln Galluras, Pfade durch die mediterrane Macchia, Panoramablicke auf die Costa Smeralda und Tavolara aus dem Hinterland. <strong>Viertakt-Einzylindermotor</strong>, Schaltgetriebe, Langhub-Federung, grobstollige Reifen.</p>
<h2>Typisches Erlebnis</h2>
<p>Das Quad wird hauptsächlich für <strong>geführte oder selbstgeführte Halbtages- oder Tagestouren</strong> genutzt. Empfohlene Strecken: die Hügel über Arzachena mit Blick auf die Costa Smeralda, das Gebiet von Capo Coda Cavallo, das Hinterland von Palau Richtung Capo d''Orso, die Schotterwege rund um Cannigione. Das Quad ist NICHT für geschützte Strände zugelassen (Park La Maddalena, Dünen von Berchida).</p>
<h2>Erforderlicher Führerschein</h2>
<p>Führerschein Klasse B (Auto) oder A. Fahrer mindestens 21 Jahre alt. Fahrerfahrung empfohlen, aber nicht zwingend. Eine 15-minütige technische Einweisung ist bei Übergabe inklusive.</p>
<h2>Enthaltene Ausrüstung</h2>
<ul><li>Zugelassener Integralhelm</li><li>Schutzhandschuhe</li><li>Sonnenbrille / Staubschutzbrille</li><li>Treibstoff für die erste Tankfüllung</li><li>RCA-Versicherung</li><li>Karte mit empfohlenen Strecken</li></ul>
<h2>Verfügbarkeit</h2>
<p>Quad-Mietsaison: <strong>April bis Oktober</strong>. Begrenzte Verfügbarkeit in der Hochsaison - wir empfehlen, mindestens 5 Tage im Voraus zu buchen. <strong>Keine Kreditkarte erforderlich</strong>.</p>'
WHERE group_slug = 'yamaha-quad-raptor';

-- FR
UPDATE public.seo_vehicles SET
  slug_fr             = 'yamaha-raptor-quad-location-sardaigne',
  title_fr            = 'Location Yamaha Raptor Quad Olbia | Off-Road Gallura - KS Rent',
  h1_fr               = 'Louer le Yamaha Raptor à Olbia : quad off-road en Gallura',
  meta_description_fr = 'Yamaha Raptor en location à Olbia pour aventures off-road sur les collines de la Gallura. Permis A ou B, casque et équipement inclus.',
  content_html_fr     = '<p>Le <strong>Yamaha Raptor</strong> est le quad sportif pour ceux qui veulent une expérience différente de la classique journée à la plage : parcours off-road sur les collines de la Gallura, sentiers dans le maquis méditerranéen, vues panoramiques sur la Costa Smeralda et Tavolara depuis l''arrière-pays. <strong>Moteur monocylindre 4 temps</strong>, boîte manuelle, suspensions à long débattement, pneus crantés.</p>
<h2>Expérience type</h2>
<p>Le quad est principalement utilisé pour des <strong>excursions guidées ou autonomes d''une demi-journée ou journée entière</strong>. Parcours conseillés : les collines au-dessus d''Arzachena avec vue sur la Costa Smeralda, la zone de Capo Coda Cavallo, l''arrière-pays de Palau vers Capo d''Orso, les pistes autour de Cannigione. Le quad N''EST PAS homologué pour les plages protégées (parc de La Maddalena, dunes de Berchida).</p>
<h2>Permis requis</h2>
<p>Permis B (voiture) ou A. Conducteur âgé d''au moins 21 ans. Expérience de conduite recommandée mais non obligatoire. Briefing technique de 15 minutes inclus à la prise en charge.</p>
<h2>Équipement inclus</h2>
<ul><li>Casque intégral homologué</li><li>Gants de protection</li><li>Lunettes de soleil / protection poussière</li><li>Carburant pour le premier plein</li><li>Assurance RCA</li><li>Carte avec parcours conseillés</li></ul>
<h2>Disponibilité</h2>
<p>Saison de location quad : <strong>avril-octobre</strong>. Disponibilité limitée en haute saison - nous recommandons de réserver au moins 5 jours à l''avance. <strong>Aucune carte de crédit obligatoire</strong>.</p>'
WHERE group_slug = 'yamaha-quad-raptor';

-- FAQs yamaha-quad-raptor
UPDATE public.seo_vehicles SET faqs = '[
  {
    "q": "Posso usare il quad in spiaggia?",
    "a": "No. Le spiagge sono area protetta in Sardegna - non e'' consentito accedervi con quad o moto. Il quad va usato su sentieri non protetti, sterrati nell''entroterra, percorsi privati con autorizzazione.",
    "q_en": "Can I ride the quad on the beach?",
    "a_en": "No. Beaches are protected areas in Sardinia - access by quad or motorbike is not permitted. The quad must be used on unprotected trails, inland gravel routes, and authorised private tracks.",
    "q_de": "Darf ich das Quad am Strand fahren?",
    "a_de": "Nein. Die Strände sind in Sardinien Schutzgebiete - das Befahren mit Quad oder Motorrad ist nicht gestattet. Das Quad ist auf nicht geschützten Pfaden, Schotterwegen im Hinterland und genehmigten privaten Strecken zu nutzen.",
    "q_fr": "Puis-je utiliser le quad sur la plage ?",
    "a_fr": "Non. Les plages sont une zone protégée en Sardaigne - l''accès en quad ou en moto n''est pas autorisé. Le quad doit être utilisé sur des sentiers non protégés, des pistes dans l''arrière-pays, des parcours privés avec autorisation."
  },
  {
    "q": "Che patente serve per il Raptor?",
    "a": "Patente B (auto, basta) o A. Conducente almeno 21 anni. Niente patente speciale richiesta.",
    "q_en": "What licence do I need for the Raptor?",
    "a_en": "Category B (car licence is fine) or A. Driver must be at least 21. No special licence required.",
    "q_de": "Welcher Führerschein wird für den Raptor benötigt?",
    "a_de": "Führerschein Klasse B (Auto reicht) oder A. Fahrer mindestens 21 Jahre alt. Kein spezieller Führerschein erforderlich.",
    "q_fr": "Quel permis faut-il pour le Raptor ?",
    "a_fr": "Permis B (voiture, ça suffit) ou A. Conducteur âgé d''au moins 21 ans. Pas de permis spécial requis."
  },
  {
    "q": "E'' difficile da guidare?",
    "a": "No, il quad e'' piu'' intuitivo di una moto - non c''e'' equilibrio in marcia. Briefing tecnico di 15 minuti al ritiro per spiegare comandi, modalita'' di sicurezza e percorsi consigliati.",
    "q_en": "Is it hard to ride?",
    "a_en": "No, a quad is more intuitive than a motorbike - there is no balancing needed while moving. A 15-minute technical briefing at pickup covers the controls, safety modes and recommended routes.",
    "q_de": "Ist es schwierig zu fahren?",
    "a_de": "Nein, ein Quad ist intuitiver als ein Motorrad - während der Fahrt muss man nicht balancieren. Eine 15-minütige technische Einweisung bei Übergabe erklärt Bedienelemente, Sicherheitsmodi und empfohlene Strecken.",
    "q_fr": "Est-il difficile à conduire ?",
    "a_fr": "Non, le quad est plus intuitif qu''une moto - pas d''équilibre à tenir en roulant. Briefing technique de 15 minutes à la prise en charge pour expliquer les commandes, les modes de sécurité et les parcours conseillés."
  },
  {
    "q": "Si possono portare 2 persone?",
    "a": "No, e'' un quad monoposto sportivo (Raptor). Per quad biposto turistici (Yamaha Grizzly e simili) chiedere disponibilita'' in fase di prenotazione.",
    "q_en": "Can it carry two people?",
    "a_en": "No, it is a single-seater sports quad (Raptor). For two-up touring quads (Yamaha Grizzly and similar), please ask about availability at booking.",
    "q_de": "Kann es zwei Personen befördern?",
    "a_de": "Nein, es handelt sich um ein einsitziges Sportquad (Raptor). Für zweisitzige Touren-Quads (Yamaha Grizzly und ähnliche) erkundigen Sie sich bitte bei der Buchung nach der Verfügbarkeit.",
    "q_fr": "Peut-on être deux personnes ?",
    "a_fr": "Non, c''est un quad monoplace sportif (Raptor). Pour des quads biplaces touristiques (Yamaha Grizzly et similaires), demandez la disponibilité lors de la réservation."
  },
  {
    "q": "Avete percorsi guidati o e'' tutto in autonomia?",
    "a": "Forniamo cartina e percorsi consigliati per uso autonomo. Per escursioni guidate con istruttore, possiamo metterti in contatto con operatori partner della Gallura.",
    "q_en": "Do you offer guided routes or is it all self-guided?",
    "a_en": "We provide a map and recommended routes for self-guided use. For guided tours with an instructor, we can put you in touch with partner operators in Gallura.",
    "q_de": "Bieten Sie geführte Touren an oder ist alles auf eigene Faust?",
    "a_de": "Wir stellen eine Karte und empfohlene Strecken für die selbstständige Nutzung bereit. Für geführte Touren mit Instruktor können wir Sie mit Partneranbietern in Gallura in Verbindung setzen.",
    "q_fr": "Proposez-vous des parcours guidés ou est-ce en autonomie ?",
    "a_fr": "Nous fournissons une carte et des parcours conseillés pour un usage autonome. Pour des excursions guidées avec un instructeur, nous pouvons vous mettre en relation avec des opérateurs partenaires de la Gallura."
  }
]'::jsonb
WHERE group_slug = 'yamaha-quad-raptor';


COMMIT;

-- ============================================================
-- VERIFICA POST-RUN
-- ============================================================
-- SELECT group_slug,
--        slug_en IS NOT NULL AS en, slug_de IS NOT NULL AS de, slug_fr IS NOT NULL AS fr,
--        jsonb_array_length(faqs) AS faq_count,
--        (faqs->0 ? 'q_en') AS has_en_faq,
--        (faqs->0 ? 'q_de') AS has_de_faq,
--        (faqs->0 ? 'q_fr') AS has_fr_faq
-- FROM public.seo_vehicles ORDER BY group_slug;
-- -- atteso: 7 righe, tutti TRUE, faq_count = 5, has_en/de/fr_faq = true
-- ============================================================

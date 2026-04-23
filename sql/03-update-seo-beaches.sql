-- ============================================================
-- 03 - SEO BEACHES: title, h1, meta_description unici e ottimizzati
-- Ogni pagina ha title ≤60 char, meta_description 120-155 char,
-- h1 unico con keyword "noleggio auto" + nome spiaggia.
-- ============================================================

-- SPIAGGIA DEL PRINCIPE
UPDATE public.seo_beaches SET
  title = 'Spiaggia del Principe | Come Arrivare in Auto — KS Rent',
  h1 = 'Spiaggia del Principe: Come Arrivare e Dove Parcheggiare',
  meta_description = 'Spiaggia del Principe: la baia dell''Aga Khan in Costa Smeralda. Sentiero sterrato di 10 min dal parcheggio. Noleggia un SUV con KS Rent per arrivarci comodo.'
WHERE slug = 'spiaggia-del-principe';

-- LISCIA RUJA
UPDATE public.seo_beaches SET
  title = 'Liscia Ruja (Long Beach) | Noleggio Auto — KS Rent',
  h1 = 'Liscia Ruja: La Long Beach della Costa Smeralda in Auto',
  meta_description = 'Liscia Ruja: la spiaggia più grande della Costa Smeralda. Sabbia dorata, sterrato facile e parcheggio ampio. Noleggia SUV o city car con KS Rent da Olbia.'
WHERE slug = 'liscia-ruja';

-- CALA BRANDINCHI
UPDATE public.seo_beaches SET
  title = 'Cala Brandinchi (Tahiti) | Parcheggio e Ingresso — KS Rent',
  h1 = 'Cala Brandinchi: La Piccola Tahiti a Numero Chiuso',
  meta_description = 'Cala Brandinchi: ingresso a numero chiuso in estate, prenota online. Parcheggio custodito. Noleggia Jeep Avenger con KS Rent per lo sterrato da San Teodoro.'
WHERE slug = 'cala-brandinchi';

-- LA CINTA
UPDATE public.seo_beaches SET
  title = 'La Cinta San Teodoro | 3 km di Sabbia — KS Rent',
  h1 = 'Spiaggia La Cinta: 3 Chilometri di Sabbia Bianca a San Teodoro',
  meta_description = 'La Cinta: 3 km di sabbia bianca con fenicotteri, kitesurf e chioschi. Parcheggio a pagamento all''ingresso. Raggiungi in 2 min dal centro con auto KS Rent.'
WHERE slug = 'la-cinta';

-- LU IMPOSTU
UPDATE public.seo_beaches SET
  title = 'Lu Impostu | Spiaggia vicino Brandinchi — KS Rent',
  h1 = 'Lu Impostu: L''Alternativa Tranquilla a Cala Brandinchi',
  meta_description = 'Lu Impostu: 1 km di sabbia fine tra gigli e oleandri, meno affollata di Brandinchi. Parcheggio custodito. Noleggia auto con KS Rent da Olbia o Puntaldia.'
WHERE slug = 'lu-impostu';

-- CAPRICCIOLI
UPDATE public.seo_beaches SET
  title = 'Capriccioli | Snorkeling Costa Smeralda — KS Rent',
  h1 = 'Spiaggia di Capriccioli: Due Calette e il Miglior Snorkeling',
  meta_description = 'Capriccioli: due calette tra rocce di granito e macchia mediterranea. Fondali ricchissimi per snorkeling. Parcheggio limitato — arriva presto con auto KS Rent.'
WHERE slug = 'capriccioli';

-- ROMAZZINO
UPDATE public.seo_beaches SET
  title = 'Romazzino | Spiaggia Esclusiva Porto Cervo — KS Rent',
  h1 = 'Spiaggia di Romazzino: Acque Smeraldo e Profumo di Rosmarino',
  meta_description = 'Romazzino: sabbia spessa e acqua cristallina nel cuore della Costa Smeralda. Parcheggi limitati agli hotel. Noleggia auto premium con KS Rent per arrivarci.'
WHERE slug = 'romazzino';

-- GRANDE PEVERO
UPDATE public.seo_beaches SET
  title = 'Grande Pevero | Spiaggia VIP Porto Cervo — KS Rent',
  h1 = 'Spiaggia del Grande Pevero: Tra il Golf Club e il Mare Cristallino',
  meta_description = 'Grande Pevero: mezzaluna di sabbia bianca accanto al Pevero Golf Club. Parcheggio a 500m dalla riva. Noleggia auto a Porto Cervo con KS Rent senza carta di credito.'
WHERE slug = 'grande-pevero';

-- CALA MORESCA
UPDATE public.seo_beaches SET
  title = 'Cala Moresca Golfo Aranci | Snorkeling — KS Rent',
  h1 = 'Cala Moresca: Snorkeling e Natura Selvaggia a Golfo Aranci',
  meta_description = 'Cala Moresca: baia selvaggia con i fondali migliori per snorkeling a 15 min da Olbia. Parcheggio gratuito limitato. Noleggia Jeep Avenger con KS Rent.'
WHERE slug = 'cala-moresca';

-- CALA SABINA
UPDATE public.seo_beaches SET
  title = 'Cala Sabina | Ginepri e Sabbia Bianca — KS Rent',
  h1 = 'Cala Sabina: Ginepri Secolari e Sabbia Caraibica a Golfo Aranci',
  meta_description = 'Cala Sabina: ginepri secolari sulla sabbia, raggiungibile anche in treno. Parcheggio sterrato. Noleggia city car o SUV con KS Rent da Olbia in 15 minuti.'
WHERE slug = 'cala-sabina';

-- SPIAGGIA BIANCA
UPDATE public.seo_beaches SET
  title = 'Spiaggia Bianca | Tra Olbia e Golfo Aranci — KS Rent',
  h1 = 'Spiaggia Bianca: Dune, Gigli di Mare e Fondale Basso per Bambini',
  meta_description = 'Spiaggia Bianca: sabbia accecante tra Olbia e Golfo Aranci. Fondale bassissimo ideale per bambini. Parcheggio dietro le dune. Auto KS Rent da Pittulongu in 5 min.'
WHERE slug = 'spiaggia-bianca';

-- PORTO ISTANA
UPDATE public.seo_beaches SET
  title = 'Porto Istana | 4 Calette vista Tavolara — KS Rent',
  h1 = 'Porto Istana: Quattro Calette di Fronte all''Isola di Tavolara',
  meta_description = 'Porto Istana: 4 calette con granito rosa e vista su Tavolara. Parcheggio a pagamento. Raggiungi in 2 min da Murta Maria con auto KS Rent senza carta di credito.'
WHERE slug = 'porto-istana';

-- PORTO TAVERNA
UPDATE public.seo_beaches SET
  title = 'Porto Taverna | Vista Frontale Tavolara — KS Rent',
  h1 = 'Porto Taverna: Il Panorama Più Bello su Tavolara e Ristoranti sul Mare',
  meta_description = 'Porto Taverna: la vista più spettacolare su Tavolara. Passerella panoramica, ristoranti sulla spiaggia. Raggiungi da Porto San Paolo con auto KS Rent.'
WHERE slug = 'porto-taverna';

-- RENA BIANCA
UPDATE public.seo_beaches SET
  title = 'Rena Bianca Santa Teresa | Bandiera Blu — KS Rent',
  h1 = 'Rena Bianca: Bandiera Blu con Vista sulla Corsica',
  meta_description = 'Rena Bianca: Bandiera Blu nel centro di Santa Teresa Gallura. Sabbia impalpabile con vista su Bonifacio. Parcheggio limitato. Auto KS Rent da Olbia in 55 min.'
WHERE slug = 'rena-bianca';

-- CALA DEL FARO
UPDATE public.seo_beaches SET
  title = 'Cala del Faro | Tramonto Baja Sardinia — KS Rent',
  h1 = 'Cala del Faro: Tramonti Spettacolari e Fondale Basso a Baja Sardinia',
  meta_description = 'Cala del Faro: spiaggia elegante a nord di Porto Cervo con vista sull''Arcipelago della Maddalena. Parcheggio limitato. Auto KS Rent con consegna in hotel.'
WHERE slug = 'cala-del-faro';

-- LA CELVIA
UPDATE public.seo_beaches SET
  title = 'La Celvia | Spiaggia VIP Costa Smeralda — KS Rent',
  h1 = 'La Celvia: Sabbia Ambrata e Ville di Lusso in Costa Smeralda',
  meta_description = 'La Celvia: sabbia a grana grossa dai riflessi ambrati, meta dei VIP. Parcheggio limitato nei weekend. Noleggia auto premium con KS Rent senza carta di credito.'
WHERE slug = 'la-celvia';

-- SPIAGGIA MARINELLA
UPDATE public.seo_beaches SET
  title = 'Spiaggia Marinella | Sport e Lounge Bar — KS Rent',
  h1 = 'Spiaggia di Marinella: Chilometri di Sabbia, Sport e Lounge Bar',
  meta_description = 'Spiaggia Marinella: km di sabbia per windsurf e famiglie. Stabilimenti che diventano lounge bar al tramonto. Parcheggio ampio. Auto KS Rent da Porto Rotondo.'
WHERE slug = 'spiaggia-marinella';

-- SPIAGGIA BADOS
UPDATE public.seo_beaches SET
  title = 'Spiaggia Bados | Relax vicino Olbia — KS Rent',
  h1 = 'Spiaggia di Bados: Sabbia Fine e Acque Calme a Due Passi da Olbia',
  meta_description = 'Spiaggia Bados: fondale dolcissimo e acque calme, perfetta per famiglie. Parcheggio davanti alla spiaggia. Auto KS Rent con consegna rapida da Olbia.'
WHERE slug = 'spiaggia-bados';

-- SPIAGGIA PITTULONGU
UPDATE public.seo_beaches SET
  title = 'Pittulongu La Playa | Spiaggia Olbia — KS Rent',
  h1 = 'Pittulongu La Playa: La Spiaggia Storica degli Olbiesi',
  meta_description = 'Pittulongu: la spiaggia dei residenti di Olbia. Ristoranti di pesce con i piedi sulla sabbia. A pochi minuti dall''aeroporto. Auto KS Rent con consegna express.'
WHERE slug = 'spiaggia-pittulongu';

-- CAPO TESTA
UPDATE public.seo_beaches SET
  title = 'Capo Testa | Valle della Luna e Graniti — KS Rent',
  h1 = 'Capo Testa: Valle della Luna, Graniti Millenari e Due Spiagge',
  meta_description = 'Capo Testa: penisola di granito con Valle della Luna e due spiagge. Rena di Ponente o Levante in base al vento. Auto KS Rent da Santa Teresa in 5 min.'
WHERE slug = 'capo-testa';

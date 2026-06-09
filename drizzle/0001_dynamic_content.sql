-- Realizacje
CREATE TABLE IF NOT EXISTS `realizations` (
  `id` int AUTO_INCREMENT PRIMARY KEY,
  `tag` varchar(64) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `location` varchar(128),
  `imageUrl` varchar(512),
  `published` boolean NOT NULL DEFAULT true,
  `sortOrder` int NOT NULL DEFAULT 0,
  `createdAt` timestamp NOT NULL DEFAULT NOW(),
  `updatedAt` timestamp NOT NULL DEFAULT NOW() ON UPDATE NOW()
);

-- Opinie klientów
CREATE TABLE IF NOT EXISTS `reviews` (
  `id` int AUTO_INCREMENT PRIMARY KEY,
  `author` varchar(128) NOT NULL,
  `rating` int NOT NULL DEFAULT 5,
  `text` text NOT NULL,
  `service` varchar(128),
  `reviewDate` varchar(32),
  `published` boolean NOT NULL DEFAULT true,
  `sortOrder` int NOT NULL DEFAULT 0,
  `createdAt` timestamp NOT NULL DEFAULT NOW()
);

-- Treści CMS
CREATE TABLE IF NOT EXISTS `pageContent` (
  `id` int AUTO_INCREMENT PRIMARY KEY,
  `key` varchar(128) NOT NULL UNIQUE,
  `value` text NOT NULL,
  `updatedAt` timestamp NOT NULL DEFAULT NOW() ON UPDATE NOW()
);

-- FAQ
CREATE TABLE IF NOT EXISTS `faqs` (
  `id` int AUTO_INCREMENT PRIMARY KEY,
  `question` text NOT NULL,
  `answer` text NOT NULL,
  `published` boolean NOT NULL DEFAULT true,
  `sortOrder` int NOT NULL DEFAULT 0,
  `createdAt` timestamp NOT NULL DEFAULT NOW()
);

-- Dane startowe — realizacje
INSERT IGNORE INTO `realizations` (`tag`, `title`, `description`, `location`, `imageUrl`, `sortOrder`) VALUES
('Fotowoltaika', 'Montaż instalacji PV 10 kWp — dom jednorodzinny', 'Projekt, montaż modułów, falownik hybrydowy i protokół odbiorczy. Realizacja w 2 dni robocze.', 'Wrocław-Krzyki · 2024', '/images/cieicie-3.jpg', 1),
('Magazyn Energii', 'Integracja magazynu energii 10 kWh z istniejącą instalacją PV', 'Rozbudowa działającej instalacji fotowoltaicznej o bank energii. Konfiguracja trybu EPS i monitoring.', 'Oława · 2025', '/images/ciecie-4.png', 2),
('Modernizacja', 'Wymiana rozdzielnicy — dom z lat 90.', 'Stara instalacja zastąpiona nowoczesną rozdzielnicą z aparatami modułowymi. Przygotowanie pod pompę ciepła.', 'Wrocław-Fabryczna · 2024', '/images/ciecie-5.png', 3),
('Pomiary i Protokół', 'Przegląd 5-letni — budynek wielorodzinny', 'Pełne pomiary instalacji elektrycznej w 12 lokalach. Protokoły odbiorcze zgodne z normą PN-HD 60364.', 'Środa Śląska · 2025', '/images/ciecie2.png', 4);

-- Dane startowe — opinie
INSERT IGNORE INTO `reviews` (`author`, `rating`, `text`, `service`, `reviewDate`, `sortOrder`) VALUES
('Marcin W.', 5, 'Profesjonalna obsługa od A do Z. Przegląd 5-letni zrobiony sprawnie, protokół od razu. Elektryk wyjaśnił wszystko na miejscu, widać że to fachowiec z prawdziwego zdarzenia.', 'Przegląd 5-letni', 'marzec 2025', 1),
('Katarzyna R.', 5, 'Montaż fotowoltaiki 8 kWp. Ekipa przyjechała punktualnie, praca skończona w dwa dni. Falownik Fronius skonfigurowany idealnie, mam pełen monitoring na telefonie. Polecam bez zastrzeżeń.', 'Fotowoltaika PV', 'styczeń 2025', 2),
('Tomasz B.', 5, 'Miałem problem z wyrzucaniem bezpieczników przy indukcji. Diagnoza termowizyjna w 20 minut wykryła przegrzaną skrzynkę. Wymiana rozdzielnicy zrobiona bez zbędnego kucia. Super robota.', 'Modernizacja rozdzielnicy', 'listopad 2024', 3),
('Anna K.', 5, 'Przejęli opiekę nad moją osieroconą instalacją PV po bankructwie poprzedniej firmy. Audyt, konfiguracja i monitoring — wszystko w porządku. Nareszcie wiem co robi mój system.', 'Audyt PV', 'wrzesień 2024', 4);

-- Dane startowe — FAQ
INSERT IGNORE INTO `faqs` (`question`, `answer`, `sortOrder`) VALUES
('Ile kosztuje przegląd 5-letni instalacji elektrycznej we Wrocławiu?', 'Koszt przeglądu 5-letniego zależy od wielkości i typu obiektu. Dla typowego domu jednorodzinnego ceny zaczynają się od kilkuset złotych. Oferujemy bezpłatną wycenę — przyjeżdżamy na wizję lokalną bez opłat.', 1),
('Czy uprawnienia SEP są wymagane do wystawienia protokołu elektrycznego?', 'Tak, protokoły pomiarowe muszą być podpisane przez osobę z uprawnieniami SEP. 1L3 Elektro-Expert posiada uprawnienia SEP grupy E i D — nasze protokoły są honorowane przez nadzór budowlany i ubezpieczycieli.', 2),
('Jak długo trwa montaż instalacji fotowoltaicznej?', 'Standardowy montaż instalacji PV dla domu jednorodzinnego trwa 1–2 dni robocze. Obejmuje montaż modułów, falownika, okablowania oraz wystawienie protokołu odbiorczego.', 3),
('Jakie dzielnice Wrocławia i okolice obsługujecie?', 'Działamy we wszystkich dzielnicach Wrocławia: Krzyki, Fabryczna, Psie Pole, Śródmieście i inne. W okolicach obsługujemy m.in. Oławę, Środę Śląską, Jelcz-Laskowice — w promieniu do 50 km.', 4),
('Czy przyjmujecie zlecenia serwisowe dla istniejących instalacji fotowoltaicznych?', 'Tak, przejmujemy opiekę nad instalacjami PV innych firm. Wykonujemy pełny audyt techniczny i zapewniamy regularny serwis i monitoring.', 5),
('Czy wystawiacie fakturę VAT?', 'Tak, jesteśmy zarejestrowanym podatnikiem VAT (1L3 PSA, NIP: 8952280850). Wystawiamy faktury VAT za wszystkie wykonane usługi.', 6);

-- Dane startowe — treści CMS
INSERT IGNORE INTO `pageContent` (`key`, `value`) VALUES
('hero.title1', 'Pomiary Elektryczne'),
('hero.title2', 'SEP Wrocław –'),
('hero.title3', 'Przeglądy Fotowoltaiki'),
('hero.subtitle', 'Sprawdź czy Twoja instalacja działa w pełną wydajnością. Profilaktyka to gwarancja niezawodności i bezpieczeństwa'),
('contact.phone', '+48 600 111 193'),
('contact.email', 'biuro@1l3.pl'),
('contact.hours', 'Pon–Pt 7:00–18:00'),
('contact.address', 'Cynamonowa 17/9a, 51-180 Wrocław');

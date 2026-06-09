/**
 * Design: Bold Technical Craftsman
 * Privacy Policy / Polityka Prywatności i RODO page
 * Compliant with GDPR (RODO) for 1L3 Elektro-Expert
 */
import { Link } from "wouter";
import { ArrowLeft, Shield } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#f8fcf9]">
      {/* Top bar */}
      <div className="bg-white border-b border-green-100 sticky top-0 z-50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/">
            <span className="flex items-center gap-2 text-[#22a832] font-700 text-sm hover:text-[#187a25] transition-colors cursor-pointer">
              <ArrowLeft size={16} />
              Powrót do strony głównej
            </span>
          </Link>
          <div className="h-4 w-px bg-green-200" />
          <div className="flex items-center gap-2 text-[#0d2b12] font-800 text-sm">
            <Shield size={16} className="text-[#22a832]" />
            Polityka Prywatności i RODO
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container py-16 max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span className="inline-block text-xs font-700 uppercase tracking-widest text-[#22a832] bg-[#22a832]/10 border border-[#22a832]/20 px-4 py-2 rounded-full mb-4">
            Dokument prawny
          </span>
          <h1 className="text-4xl md:text-5xl font-900 text-[#0d2b12] tracking-tight leading-tight mb-4">
            Polityka Prywatności
          </h1>
          <p className="text-[#4a6350] text-lg">
            Ostatnia aktualizacja: <strong>maj 2025</strong>
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10 text-[#2d4a35]">

          {/* 1 */}
          <section className="bg-white border border-green-100 rounded-2xl p-8">
            <h2 className="text-xl font-800 text-[#0d2b12] mb-4">1. Administrator danych osobowych</h2>
            <p className="leading-relaxed mb-3">
              Administratorem Twoich danych osobowych jest:
            </p>
            <div className="bg-[#f0faf2] border border-green-200 rounded-xl p-5 text-sm leading-relaxed space-y-1">
              <p><strong>1L3 P S A</strong></p>
              <p>Nazwa handlowa: 1L3 Elektro-Expert</p>
              <p>Cynamonowa 17/9a, 51-180 Wrocław</p>
              <p>NIP: 8952280850</p>
              <p>E-mail: <a href="mailto:biuro@1l3.pl" className="text-[#22a832] hover:underline">biuro@1l3.pl</a></p>
              <p>Telefon: <a href="tel:+48600111193" className="text-[#22a832] hover:underline">+48 600 111 193</a></p>
            </div>
          </section>

          {/* 2 */}
          <section className="bg-white border border-green-100 rounded-2xl p-8">
            <h2 className="text-xl font-800 text-[#0d2b12] mb-4">2. Podstawa prawna przetwarzania danych</h2>
            <p className="leading-relaxed mb-3">
              Dane osobowe przetwarzane są zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. (RODO) na następujących podstawach prawnych:
            </p>
            <ul className="space-y-2 text-sm leading-relaxed list-none">
              {[
                { art: "Art. 6 ust. 1 lit. a RODO", desc: "zgoda osoby, której dane dotyczą (formularz kontaktowy)" },
                { art: "Art. 6 ust. 1 lit. b RODO", desc: "niezbędność do wykonania umowy lub podjęcia działań przed jej zawarciem (wycena, realizacja usługi)" },
                { art: "Art. 6 ust. 1 lit. c RODO", desc: "obowiązek prawny ciążący na administratorze (przepisy podatkowe, rachunkowe)" },
                { art: "Art. 6 ust. 1 lit. f RODO", desc: "prawnie uzasadniony interes administratora (marketing bezpośredni własnych usług, obrona przed roszczeniami)" },
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-[#22a832] font-700 flex-shrink-0 text-xs mt-0.5 bg-[#f0faf2] border border-green-200 px-2 py-1 rounded-lg">{item.art}</span>
                  <span className="text-[#4a6350]">{item.desc}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 3 */}
          <section className="bg-white border border-green-100 rounded-2xl p-8">
            <h2 className="text-xl font-800 text-[#0d2b12] mb-4">3. Jakie dane zbieramy i w jakim celu</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#f0faf2]">
                    <th className="text-left p-3 font-700 text-[#0d2b12] border border-green-100 rounded-tl-lg">Kategoria danych</th>
                    <th className="text-left p-3 font-700 text-[#0d2b12] border border-green-100">Cel przetwarzania</th>
                    <th className="text-left p-3 font-700 text-[#0d2b12] border border-green-100 rounded-tr-lg">Okres przechowywania</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { data: "Imię i nazwisko, numer telefonu, opis zapytania", purpose: "Odpowiedź na zapytanie ofertowe, kontakt w sprawie wyceny", period: "Do czasu realizacji zapytania, max. 2 lata" },
                    { data: "Dane do faktury (imię, adres, NIP)", purpose: "Wystawienie dokumentu sprzedaży, rozliczenia podatkowe", period: "5 lat od końca roku podatkowego" },
                    { data: "Adres e-mail", purpose: "Korespondencja, przesyłanie ofert i dokumentacji", period: "Do czasu cofnięcia zgody lub zakończenia relacji" },
                    { data: "Adres nieruchomości", purpose: "Realizacja usługi elektrycznej / PV na miejscu", period: "Czas trwania umowy + 2 lata (rękojmia)" },
                    { data: "Dane techniczne instalacji", purpose: "Dokumentacja powykonawcza, gwarancja, serwis", period: "10 lat (wymogi archiwalne branży budowlanej)" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#f8fcf9]"}>
                      <td className="p-3 border border-green-100 text-[#0d2b12] font-600">{row.data}</td>
                      <td className="p-3 border border-green-100 text-[#4a6350]">{row.purpose}</td>
                      <td className="p-3 border border-green-100 text-[#4a6350]">{row.period}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 4 */}
          <section className="bg-white border border-green-100 rounded-2xl p-8">
            <h2 className="text-xl font-800 text-[#0d2b12] mb-4">4. Odbiorcy danych osobowych</h2>
            <p className="leading-relaxed mb-4 text-[#4a6350]">
              Twoje dane osobowe mogą być przekazywane wyłącznie podmiotom, które zapewniają odpowiedni poziom ochrony danych i z którymi administrator zawarł umowę powierzenia przetwarzania danych:
            </p>
            <ul className="space-y-2 text-sm leading-relaxed text-[#4a6350]">
              <li className="flex items-start gap-2"><span className="text-[#22a832] font-900 mt-0.5">—</span><span><strong className="text-[#0d2b12]">Formspree Inc.</strong> — dostawca systemu obsługi formularzy kontaktowych (serwery w USA, zabezpieczone standardowymi klauzulami umownymi UE)</span></li>
              <li className="flex items-start gap-2"><span className="text-[#22a832] font-900 mt-0.5">—</span><span><strong className="text-[#0d2b12]">Biuro rachunkowe / księgowy</strong> — w zakresie niezbędnym do rozliczeń podatkowych</span></li>
              <li className="flex items-start gap-2"><span className="text-[#22a832] font-900 mt-0.5">—</span><span><strong className="text-[#0d2b12]">Organy publiczne</strong> — wyłącznie na podstawie obowiązujących przepisów prawa (np. Urząd Skarbowy, ZUS)</span></li>
            </ul>
            <p className="mt-4 text-sm text-[#4a6350]">
              Administrator <strong className="text-[#0d2b12]">nie sprzedaje</strong> danych osobowych podmiotom trzecim ani nie udostępnia ich w celach marketingowych bez zgody.
            </p>
          </section>

          {/* 5 */}
          <section className="bg-white border border-green-100 rounded-2xl p-8">
            <h2 className="text-xl font-800 text-[#0d2b12] mb-4">5. Twoje prawa (RODO)</h2>
            <p className="leading-relaxed mb-4 text-[#4a6350]">
              Zgodnie z RODO przysługują Ci następujące prawa:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { right: "Prawo dostępu", desc: "Możesz zażądać informacji o tym, jakie Twoje dane przetwarzamy (art. 15 RODO)" },
                { right: "Prawo do sprostowania", desc: "Możesz poprosić o poprawienie nieprawidłowych lub uzupełnienie niekompletnych danych (art. 16 RODO)" },
                { right: "Prawo do usunięcia", desc: "Możesz żądać usunięcia danych (\"prawo do bycia zapomnianym\"), gdy nie są już potrzebne (art. 17 RODO)" },
                { right: "Prawo do ograniczenia", desc: "Możesz żądać ograniczenia przetwarzania danych w określonych przypadkach (art. 18 RODO)" },
                { right: "Prawo do przenoszenia", desc: "Możesz otrzymać swoje dane w ustrukturyzowanym formacie (art. 20 RODO)" },
                { right: "Prawo do sprzeciwu", desc: "Możesz wnieść sprzeciw wobec przetwarzania opartego na prawnie uzasadnionym interesie (art. 21 RODO)" },
                { right: "Prawo cofnięcia zgody", desc: "Zgodę możesz cofnąć w dowolnym momencie bez wpływu na zgodność wcześniejszego przetwarzania" },
                { right: "Prawo do skargi", desc: "Masz prawo złożyć skargę do Prezesa Urzędu Ochrony Danych Osobowych (UODO), ul. Stawki 2, 00-193 Warszawa" },
              ].map((item, i) => (
                <div key={i} className="bg-[#f0faf2] border border-green-200 rounded-xl p-4">
                  <div className="font-700 text-[#0d2b12] text-sm mb-1">{item.right}</div>
                  <div className="text-xs text-[#4a6350] leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-[#4a6350]">
              Aby skorzystać z powyższych praw, skontaktuj się z nami: <a href="mailto:biuro@1l3.pl" className="text-[#22a832] hover:underline font-700">biuro@1l3.pl</a>. Odpowiemy w ciągu 30 dni.
            </p>
          </section>

          {/* 6 */}
          <section className="bg-white border border-green-100 rounded-2xl p-8">
            <h2 className="text-xl font-800 text-[#0d2b12] mb-4">6. Pliki cookies</h2>
            <p className="leading-relaxed mb-3 text-[#4a6350]">
              Strona internetowa <strong className="text-[#0d2b12]">1l3.pl</strong> może używać plików cookies (ciasteczek) wyłącznie w celach technicznych i analitycznych:
            </p>
            <ul className="space-y-2 text-sm text-[#4a6350]">
              <li className="flex items-start gap-2"><span className="text-[#22a832] font-900 mt-0.5">—</span><span><strong className="text-[#0d2b12]">Cookies niezbędne</strong> — zapewniają prawidłowe działanie strony (sesja, preferencje). Nie wymagają zgody.</span></li>
              <li className="flex items-start gap-2"><span className="text-[#22a832] font-900 mt-0.5">—</span><span><strong className="text-[#0d2b12]">Cookies analityczne</strong> — anonimowe statystyki odwiedzin (np. liczba wizyt, czas na stronie). Wymagają zgody.</span></li>
            </ul>
            <p className="mt-4 text-sm text-[#4a6350]">
              Możesz zarządzać plikami cookies w ustawieniach swojej przeglądarki. Wyłączenie cookies niezbędnych może wpłynąć na działanie strony.
            </p>
          </section>

          {/* 7 */}
          <section className="bg-white border border-green-100 rounded-2xl p-8">
            <h2 className="text-xl font-800 text-[#0d2b12] mb-4">7. Bezpieczeństwo danych</h2>
            <p className="leading-relaxed text-[#4a6350]">
              Administrator stosuje odpowiednie środki techniczne i organizacyjne w celu ochrony danych osobowych przed nieautoryzowanym dostępem, utratą lub zniszczeniem, w tym: szyfrowanie transmisji danych (protokół HTTPS/TLS), ograniczenie dostępu do danych wyłącznie do uprawnionych osób, regularne przeglądy bezpieczeństwa stosowanych narzędzi.
            </p>
          </section>

          {/* 8 */}
          <section className="bg-white border border-green-100 rounded-2xl p-8">
            <h2 className="text-xl font-800 text-[#0d2b12] mb-4">8. Zmiany polityki prywatności</h2>
            <p className="leading-relaxed text-[#4a6350]">
              Administrator zastrzega sobie prawo do zmiany niniejszej Polityki Prywatności. Wszelkie zmiany będą publikowane na tej stronie z aktualizacją daty. W przypadku istotnych zmian użytkownicy zostaną poinformowani za pośrednictwem strony internetowej lub e-mailem (jeśli posiadamy adres e-mail).
            </p>
          </section>

          {/* 9 */}
          <section className="bg-[#0d2b12] rounded-2xl p-8 text-white">
            <h2 className="text-xl font-800 text-white mb-4">9. Kontakt w sprawach ochrony danych</h2>
            <p className="leading-relaxed text-white/75 mb-4">
              W przypadku pytań dotyczących przetwarzania Twoich danych osobowych lub chęci skorzystania z przysługujących Ci praw, skontaktuj się z nami:
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:biuro@1l3.pl"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl px-5 py-3 transition-colors"
              >
                <Shield size={18} className="text-[#4ade80]" />
                <span className="font-700 text-white">biuro@1l3.pl</span>
              </a>
              <a
                href="tel:+48600111193"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl px-5 py-3 transition-colors"
              >
                <Shield size={18} className="text-[#4ade80]" />
                <span className="font-700 text-white">+48 600 111 193</span>
              </a>
            </div>
          </section>

        </div>

        {/* Back link */}
        <div className="mt-12 text-center">
          <Link href="/">
            <span className="inline-flex items-center gap-2 text-[#22a832] font-700 hover:text-[#187a25] transition-colors cursor-pointer">
              <ArrowLeft size={16} />
              Powrót do strony głównej
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

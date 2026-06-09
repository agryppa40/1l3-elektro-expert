import { useState } from "react";
import { Link } from "wouter";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mojrendk";

const PHONE = "+48 600 111 193";
const EMAIL = "biuro@1l3.pl";

const faqs = [
  {
    q: "Czy przegląd 5-letni jest obowiązkowy?",
    a: "Tak. Zgodnie z art. 62 Prawa Budowlanego każdy właściciel lub zarządca budynku ma obowiązek przeprowadzania co 5 lat kontroli stanu technicznego instalacji elektrycznej. Brak przeglądu może skutkować odmową wypłaty odszkodowania przez ubezpieczyciela w razie pożaru.",
  },
  {
    q: "Co obejmuje przegląd 5-letni instalacji elektrycznej?",
    a: "Przegląd obejmuje: pomiar rezystancji izolacji przewodów, sprawdzenie ciągłości przewodów ochronnych, pomiar impedancji pętli zwarcia, sprawdzenie wyłączników różnicowoprądowych (RCD), ocenę stanu rozdzielnicy i zabezpieczeń oraz sporządzenie protokołu z wynikami pomiarów.",
  },
  {
    q: "Ile kosztuje przegląd 5-letni?",
    a: "Koszt zależy od wielkości budynku i liczby obwodów. Dla typowego mieszkania (50–80 m²) to koszt rzędu 250–400 zł. Dom jednorodzinny to zazwyczaj 400–700 zł. Skontaktuj się z nami po bezpłatną wycenę — podaj metraż i liczbę pomieszczeń.",
  },
  {
    q: "Jak długo trwa przegląd?",
    a: "Przegląd mieszkania trwa 1,5–2 godziny. Dom jednorodzinny to 2–4 godziny w zależności od liczby obwodów. Protokół z wynikami pomiarów wystawiamy na miejscu lub wysyłamy e-mailem tego samego dnia.",
  },
  {
    q: "Czy protokół jest honorowany przez nadzór budowlany i ubezpieczycieli?",
    a: "Tak. Wykonujemy pomiary zgodnie z normą PN-HD 60364 i wystawiamy protokół na drukach SEP. Dokumenty są honorowane przez wszystkich ubezpieczycieli działających w Polsce oraz przez nadzór budowlany.",
  },
  {
    q: "Czy mogę umówić się na konkretny termin?",
    a: "Tak, pracujemy od poniedziałku do piątku w godzinach 7:00–18:00, a w nagłych przypadkach również w weekendy. Zazwyczaj jesteśmy w stanie przyjechać w ciągu 2–5 dni roboczych od zgłoszenia.",
  },
];

export default function Przeglad5Letni() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", address: "", consent: false });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.consent) return;
    setLoading(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: "Zapytanie — Przegląd 5-letni instalacji elektrycznej",
          imię: form.name,
          telefon: form.phone,
          adres: form.address,
          usługa: "Przegląd 5-letni instalacji elektrycznej",
          źródło: "Landing page przegląd 5-letni",
        }),
      });
      if (res.ok) setSubmitted(true);
    } catch {
      // silent
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Outfit', sans-serif" }}>
      {/* Top bar */}
      <div className="bg-[#0d2b12] text-white text-sm py-2">
        <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-[#4ade80] hover:text-white transition-colors font-semibold">
            ← Powrót do strony głównej
          </Link>
          <a href={`tel:${PHONE}`} className="flex items-center gap-2 font-bold text-[#4ade80] hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C9.61 21 3 14.39 3 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
            </svg>
            {PHONE}
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0d2b12] via-[#1a4a20] to-[#22a832] text-white py-16 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-[#4ade80] rounded-full animate-pulse" />
              Wrocław i okolice — uprawnienia SEP E+D
            </div>
            <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
              Przegląd 5-letni<br />
              <span className="text-[#a3f0a3]">instalacji elektrycznej</span>
            </h1>
            <p className="text-white/80 text-lg mb-6 leading-relaxed">
              Obowiązkowy przegląd zgodny z Prawem Budowlanym. Protokół SEP honorowany przez ubezpieczycieli i nadzór budowlany. Wrocław i okolice.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {["Protokół SEP na miejscu", "Pomiary zgodne z PN-HD 60364", "Faktura VAT", "Termin w 2–5 dni"].map((item) => (
                <span key={item} className="flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1 text-sm">
                  <svg className="w-4 h-4 text-[#4ade80]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${PHONE}`}
                className="bg-[#22a832] hover:bg-[#1a8a28] text-white font-black px-8 py-4 rounded-xl transition-colors text-lg flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C9.61 21 3 14.39 3 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
                </svg>
                Zadzwoń teraz
              </a>
              <a
                href="#formularz"
                className="border-2 border-white/40 hover:border-white text-white font-bold px-8 py-4 rounded-xl transition-colors text-lg"
              >
                Bezpłatna wycena
              </a>
            </div>
          </div>

          {/* Form card */}
          <div id="formularz" className="bg-white rounded-2xl p-6 text-[#0d2b12] shadow-2xl">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#22a832]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-black mb-2">Zapytanie wysłane!</h3>
                <p className="text-[#4a6350]">Oddzwonimy w ciągu 24 godzin roboczych.</p>
              </div>
            ) : (
              <>
                <h2 className="text-xl font-black mb-1">Umów przegląd 5-letni</h2>
                <p className="text-[#4a6350] text-sm mb-4">Bezpłatna wycena — odpiszemy w 24h</p>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="text"
                    required
                    placeholder="Imię i nazwisko"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#22a832] transition-colors"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Numer telefonu"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#22a832] transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Adres / dzielnica Wrocławia (opcjonalnie)"
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#22a832] transition-colors"
                  />
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={form.consent}
                      onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                      className="mt-1 accent-[#22a832]"
                    />
                    <span className="text-xs text-gray-500">
                      Wyrażam zgodę na przetwarzanie danych osobowych przez 1L3 P S A w celu odpowiedzi na zapytanie (
                      <Link href="/polityka-prywatnosci" className="text-[#22a832] hover:underline">Polityka prywatności</Link>).
                    </span>
                  </label>
                  <button
                    type="submit"
                    disabled={loading || !form.consent}
                    className="w-full bg-[#22a832] hover:bg-[#1a8a28] text-white font-black py-4 rounded-xl transition-colors disabled:opacity-60 text-lg"
                  >
                    {loading ? "Wysyłanie..." : "Wyślij zapytanie"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Why mandatory */}
      <section className="py-14 px-4 bg-amber-50 border-y border-amber-200">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="text-4xl flex-shrink-0">⚠️</div>
            <div>
              <h2 className="text-2xl font-black text-[#0d2b12] mb-2">Dlaczego przegląd 5-letni jest obowiązkowy?</h2>
              <p className="text-[#4a6350] leading-relaxed mb-4">
                Zgodnie z <strong>art. 62 ust. 1 pkt 2 Prawa Budowlanego</strong> właściciel lub zarządca budynku jest zobowiązany do przeprowadzania co najmniej raz na 5 lat kontroli stanu technicznego instalacji elektrycznej i piorunochronnej.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { icon: "🔥", title: "Ryzyko pożaru", desc: "Przestarzała lub uszkodzona instalacja to główna przyczyna pożarów budynków mieszkalnych." },
                  { icon: "💰", title: "Odmowa odszkodowania", desc: "Ubezpieczyciel może odmówić wypłaty odszkodowania jeśli nie ma aktualnego protokołu przeglądu." },
                  { icon: "⚖️", title: "Mandat i odpowiedzialność", desc: "Brak przeglądu to wykroczenie z art. 93 Prawa Budowlanego — grzywna do 5000 zł." },
                ].map((item) => (
                  <div key={item.title} className="bg-white rounded-xl p-4 border border-amber-200">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <h3 className="font-bold text-[#0d2b12] mb-1">{item.title}</h3>
                    <p className="text-sm text-[#4a6350]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-[#0d2b12] mb-2 text-center">Co obejmuje przegląd?</h2>
          <p className="text-[#4a6350] text-center mb-10">Kompleksowa kontrola zgodna z normą PN-HD 60364</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "📏", title: "Pomiar rezystancji izolacji", desc: "Sprawdzenie czy izolacja przewodów nie jest uszkodzona — kluczowe dla bezpieczeństwa." },
              { icon: "🔗", title: "Ciągłość przewodów ochronnych", desc: "Weryfikacja czy przewody PE (uziemienie) są sprawne i ciągłe w całej instalacji." },
              { icon: "⚡", title: "Impedancja pętli zwarcia", desc: "Pomiar sprawdzający czy zabezpieczenia zadziałają wystarczająco szybko przy zwarciu." },
              { icon: "🔌", title: "Wyłączniki różnicowoprądowe", desc: "Test RCD — sprawdzenie czy wyłączniki różnicowe działają prawidłowo i chronią przed porażeniem." },
              { icon: "🗂️", title: "Ocena rozdzielnicy", desc: "Kontrola stanu technicznego tablicy elektrycznej, bezpieczników i oznaczeń obwodów." },
              { icon: "📋", title: "Protokół SEP", desc: "Pełna dokumentacja z wynikami pomiarów na drukach SEP — honorowana przez ubezpieczycieli." },
            ].map((item) => (
              <div key={item.title} className="border border-gray-100 rounded-2xl p-5 hover:border-[#22a832] hover:shadow-md transition-all">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-[#0d2b12] mb-1">{item.title}</h3>
                <p className="text-sm text-[#4a6350]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-14 px-4 bg-[#f8fdf8]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black text-[#0d2b12] mb-2">Orientacyjny cennik</h2>
          <p className="text-[#4a6350] mb-8">Ostateczna cena po bezpłatnej wycenie — zależy od liczby obwodów</p>
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {[
              { type: "Mieszkanie", size: "do 80 m²", price: "250–400 zł", time: "ok. 1,5–2h" },
              { type: "Dom jednorodzinny", size: "do 200 m²", price: "400–700 zł", time: "ok. 2–4h", highlight: true },
              { type: "Budynek większy", size: "powyżej 200 m²", price: "Wycena indywidualna", time: "Ustalany" },
            ].map((item) => (
              <div
                key={item.type}
                className={`rounded-2xl p-6 border-2 ${item.highlight ? "border-[#22a832] bg-white shadow-lg" : "border-gray-200 bg-white"}`}
              >
                {item.highlight && (
                  <div className="bg-[#22a832] text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">
                    Najpopularniejsze
                  </div>
                )}
                <h3 className="font-black text-[#0d2b12] text-lg mb-1">{item.type}</h3>
                <p className="text-[#4a6350] text-sm mb-3">{item.size}</p>
                <p className="text-2xl font-black text-[#22a832] mb-1">{item.price}</p>
                <p className="text-xs text-gray-400">Czas: {item.time}</p>
              </div>
            ))}
          </div>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 bg-[#22a832] hover:bg-[#1a8a28] text-white font-black px-10 py-4 rounded-xl transition-colors text-lg"
          >
            Zadzwoń po bezpłatną wycenę: {PHONE}
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-[#0d2b12] mb-8 text-center">Najczęstsze pytania</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center font-bold text-[#0d2b12] hover:bg-[#f8fdf8] transition-colors"
                >
                  {faq.q}
                  <span className={`text-[#22a832] text-xl transition-transform ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 text-[#4a6350] leading-relaxed border-t border-gray-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-14 px-4 bg-[#0d2b12] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-black mb-3">Umów przegląd już dziś</h2>
          <p className="text-white/70 mb-8">Wrocław i okolice · Uprawnienia SEP E+D · Protokół na miejscu</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${PHONE}`}
              className="bg-[#22a832] hover:bg-[#1a8a28] text-white font-black px-10 py-4 rounded-xl transition-colors text-lg"
            >
              {PHONE}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="border-2 border-white/30 hover:border-white text-white font-bold px-10 py-4 rounded-xl transition-colors text-lg"
            >
              {EMAIL}
            </a>
          </div>
        </div>
      </section>

      {/* Footer mini */}
      <div className="bg-[#060f07] text-white/40 text-xs text-center py-4 px-4">
        © {new Date().getFullYear()} 1L3 P S A · NIP: 8952280850 · Cynamonowa 17/9a, 51-180 Wrocław ·{" "}
        <Link href="/polityka-prywatnosci" className="hover:text-white/70 transition-colors">
          Polityka prywatności
        </Link>
      </div>
    </div>
  );
}

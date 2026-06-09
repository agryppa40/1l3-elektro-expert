import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ChevronDown, Phone, Mail, CheckCircle2, Zap, ShieldCheck, Clock, Sun } from "lucide-react";

const PHONE = "+48 600 111 193";
const EMAIL = "biuro@1l3.pl";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mojrendk";

const services = [
  "Indywidualny projekt instalacji PV (analiza zużycia)",
  "Dobór i montaż falownika (inwertera)",
  "Montaż modułów fotowoltaicznych na dachu",
  "Okablowanie DC i AC zgodnie z normami",
  "Protokół odbiorczy dla zakładu energetycznego",
  "Konfiguracja monitoringu i aplikacji",
  "Przeglądy i serwis istniejących instalacji PV",
  "Przejęcie osieroconych instalacji PV",
];

const faqs = [
  {
    q: "Ile kosztuje instalacja fotowoltaiczna we Wrocławiu?",
    a: "Koszt instalacji PV zależy od mocy i rodzaju dachu. Orientacyjnie: 6 kWp to 25 000–35 000 zł, 10 kWp to 38 000–52 000 zł. Ceny zawierają projekt, montaż, falownik i protokół odbiorczy. Oferujemy bezpłatną analizę zużycia energii i wycenę.",
  },
  {
    q: "Jak długo trwa montaż fotowoltaiki?",
    a: "Standardowy montaż instalacji PV dla domu jednorodzinnego trwa 1–2 dni robocze. Wcześniej wykonujemy bezpłatną analizę zużycia energii i projekt instalacji. Po montażu wystawiamy protokół odbiorczy wymagany przez zakład energetyczny.",
  },
  {
    q: "Czy montujecie instalacje na każdym rodzaju dachu?",
    a: "Tak — montujemy na dachach skośnych (blachodachówka, dachówka ceramiczna, papa), płaskich oraz na konstrukcjach naziemnych. Każdy projekt dostosowujemy do kąta nachylenia i orientacji dachu, aby zmaksymalizować uzysk energii.",
  },
  {
    q: "Jakich falowników używacie?",
    a: "Pracujemy z falownikami czołowych producentów: Fronius, SMA, Huawei, SolarEdge i GoodWe. Dobieramy falownik do wielkości instalacji i potrzeb klienta — w tym falowniki hybrydowe przygotowane pod magazyn energii.",
  },
  {
    q: "Czy pomagacie z dofinansowaniem (Czyste Powietrze, Mój Prąd)?",
    a: "Tak, doradzamy w zakresie dostępnych programów dofinansowania: Mój Prąd 6.0, Czyste Powietrze i ulga termomodernizacyjna. Przygotowujemy dokumentację techniczną wymaganą do wniosku. Ostateczna decyzja i złożenie wniosku leży po stronie klienta.",
  },
  {
    q: "Czy przejmiecie opiekę nad instalacją innej firmy?",
    a: "Tak, przejmujemy instalacje PV innych firm — w tym 'osierocone', gdzie poprzedni instalator zakończył działalność. Wykonujemy pełny audyt techniczny, oceniamy stan modułów i falownika, a następnie zapewniamy regularny serwis i monitoring.",
  },
];

const stats = [
  { value: "8+", label: "lat doświadczenia w PV" },
  { value: "100+", label: "instalacji PV" },
  { value: "1–2", label: "dni montaż" },
  { value: "25+", label: "lat gwarancji modułów" },
];

export default function FotowoltaikaWroclaw() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", address: "", power: "", consent: false });
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
          _subject: "Zapytanie — Fotowoltaika Wrocław",
          imię: form.name,
          telefon: form.phone,
          adres: form.address,
          moc: form.power,
          usługa: "Instalacja fotowoltaiczna",
          źródło: "Landing page fotowoltaika",
        }),
      });
      if (res.ok) setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Outfit', sans-serif" }}>
      <Navbar />

      {/* Hero z grafiką */}
      <section className="bg-[#0d2b12] pt-28 pb-0 px-4 overflow-hidden">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <div className="pb-16">
              <div className="inline-flex items-center gap-2 bg-[#22a832]/20 border border-[#22a832]/30 text-[#4ade80] text-sm font-600 px-4 py-1.5 rounded-full mb-6">
                <Sun size={14} /> Certyfikowany instalator PV
              </div>
              <h1 className="text-4xl md:text-5xl font-900 text-white leading-tight mb-4">
                Fotowoltaika Wrocław<br />
                <span className="text-[#22a832]">Projekt, Montaż i Odbiór</span>
              </h1>
              <p className="text-white/70 text-lg max-w-2xl mb-8">
                Nie sprzedajemy gotowych pakietów. Analizujemy Twoje rachunki za prąd i dobieramy moc instalacji PV tak, aby inwestycja zwróciła się jak najszybciej.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={`tel:${PHONE}`} className="flex items-center gap-2 bg-[#22a832] text-white font-700 px-6 py-3 rounded-xl text-sm">
                  <Phone size={16} /> Zadzwoń teraz
                </a>
                <a href="#formularz" className="flex items-center gap-2 bg-white/10 border border-white/20 text-white font-600 px-6 py-3 rounded-xl text-sm">
                  Bezpłatna analiza
                </a>
              </div>
              <div className="flex flex-wrap gap-6 mt-8 text-sm text-white/60">
                <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-[#22a832]" /> Uprawnienia SEP E+D</span>
                <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-[#22a832]" /> Fronius, SMA, Huawei</span>
                <span className="flex items-center gap-1.5"><Clock size={14} className="text-[#22a832]" /> Montaż 1–2 dni</span>
              </div>
            </div>
            <div className="hidden lg:block relative h-80 rounded-t-3xl overflow-hidden">
              <img src="/images/jamontazpv.png" alt="Fotowoltaika Wrocław montaż instalacji PV" className="w-full h-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b12]/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Statystyki */}
      <section className="py-10 bg-[#f0faf2] border-b border-green-100">
        <div className="container max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <div key={i}>
                <div className="text-3xl font-900 text-[#22a832]">{s.value}</div>
                <div className="text-sm text-[#4a6350] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zakres usług */}
      <section className="py-16 px-4 bg-white">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-800 text-[#0d2b12] mb-2">Zakres prac</h2>
          <p className="text-[#4a6350] mb-8">Kompleksowa realizacja od projektu po protokół odbiorczy.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {services.map((s, i) => (
              <div key={i} className="flex items-center gap-3 bg-[#f8fcf9] border border-green-100 rounded-xl p-4">
                <CheckCircle2 size={18} className="text-[#22a832] flex-shrink-0" />
                <span className="text-[#0d2b12] font-500 text-sm">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formularz */}
      <section id="formularz" className="py-16 px-4 bg-[#f8fcf9]">
        <div className="container max-w-2xl mx-auto">
          <h2 className="text-3xl font-800 text-[#0d2b12] mb-2">Bezpłatna analiza i wycena</h2>
          <p className="text-[#4a6350] mb-8">Podaj adres i orientacyjne zużycie prądu — przygotujemy wycenę dopasowaną do Twoich potrzeb.</p>
          {submitted ? (
            <div className="bg-[#f0faf2] border border-green-200 rounded-2xl p-8 text-center">
              <CheckCircle2 size={40} className="text-[#22a832] mx-auto mb-3" />
              <h3 className="font-800 text-[#0d2b12] text-xl mb-2">Dziękujemy!</h3>
              <p className="text-[#4a6350]">Odezwiemy się wkrótce z bezpłatną analizą.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input required className="border border-green-100 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#22a832]" placeholder="Imię i nazwisko" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
              <input required className="border border-green-100 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#22a832]" placeholder="Numer telefonu" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
              <input className="border border-green-100 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#22a832]" placeholder="Adres inwestycji" value={form.address} onChange={e => setForm(f => ({ ...f, address: e.target.value }))} />
              <input className="border border-green-100 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#22a832]" placeholder="Roczne zużycie prądu (kWh) lub kwota rachunku" value={form.power} onChange={e => setForm(f => ({ ...f, power: e.target.value }))} />
              <label className="flex items-start gap-3 text-xs text-[#4a6350]">
                <input type="checkbox" required checked={form.consent} onChange={e => setForm(f => ({ ...f, consent: e.target.checked }))} className="mt-0.5" />
                Wyrażam zgodę na przetwarzanie moich danych osobowych w celu przygotowania wyceny.
              </label>
              <button type="submit" disabled={loading} className="bg-[#22a832] text-white font-700 py-3 rounded-xl text-sm">
                {loading ? "Wysyłam..." : "Wyślij zapytanie"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-3xl font-800 text-[#0d2b12] mb-8">Najczęstsze pytania o fotowoltaikę</h2>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div key={i} className={`border rounded-2xl transition-all bg-white ${openFaq === i ? "border-[#22a832]/40 bg-[#f0faf2]" : "border-green-100"}`}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left">
                  <span className="font-700 text-[#0d2b12] text-sm">{faq.q}</span>
                  <ChevronDown size={18} className={`text-[#22a832] flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && <div className="px-6 pb-4 text-sm text-[#4a6350] leading-relaxed">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-[#0d2b12] text-center">
        <h2 className="text-2xl font-800 text-white mb-4">Gotowy na własną energię słoneczną?</h2>
        <p className="text-white/60 mb-6 text-sm">Wrocław i okolice — Krzyki, Fabryczna, Psie Pole, Oława, Środa Śląska, Długołęka.</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a href={`tel:${PHONE}`} className="flex items-center gap-2 bg-[#22a832] text-white font-700 px-6 py-3 rounded-xl text-sm"><Phone size={15} /> {PHONE}</a>
          <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 bg-white/10 border border-white/20 text-white font-600 px-6 py-3 rounded-xl text-sm"><Mail size={15} /> {EMAIL}</a>
        </div>
        <div className="mt-6"><Link href="/" className="text-white/40 text-xs hover:text-white/60">← Wróć do strony głównej</Link></div>
      </section>
      <Footer />
    </div>
  );
}

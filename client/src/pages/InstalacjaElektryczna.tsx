import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ChevronDown, Phone, Mail, CheckCircle2, Zap, ShieldCheck, Clock } from "lucide-react";

const PHONE = "+48 600 111 193";
const EMAIL = "biuro@1l3.pl";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mojrendk";

const faqs = [
  {
    q: "Co obejmuje kompleksowa instalacja elektryczna od podstaw?",
    a: "Kompleksowa instalacja elektryczna obejmuje: projekt instalacji zgodny z normą PN-HD 60364, montaż rozdzielnicy z zabezpieczeniami, prowadzenie przewodów w bruzdach lub korytkach, montaż gniazd, łączników i opraw oświetleniowych, podłączenie urządzeń (zmywarka, piekarnik, klimatyzacja), pomiary odbiorcze i protokół SEP.",
  },
  {
    q: "Czy potrzebuję projektu elektrycznego do nowej instalacji?",
    a: "Dla domów jednorodzinnych i mieszkań w nowym budownictwie projekt elektryczny jest wymagany do odbioru przez zakład energetyczny. My przygotowujemy projekt lub współpracujemy z dostarczonym projektem. W starszym budownictwie przy modernizacji projekt jest zalecany ale nie zawsze wymagany.",
  },
  {
    q: "Ile kosztuje nowa instalacja elektryczna w domu?",
    a: "Koszt zależy od metrażu, liczby obwodów i standardu wykończenia. Orientacyjnie: mieszkanie 60 m² to 8 000–14 000 zł, dom 150 m² to 18 000–32 000 zł. Wycena jest bezpłatna — przyjeżdżamy na wizję lokalną i przedstawiamy szczegółowy kosztorys.",
  },
  {
    q: "Jak długo trwa montaż nowej instalacji elektrycznej?",
    a: "Mieszkanie (50–80 m²) to 3–5 dni roboczych. Dom jednorodzinny (150–200 m²) to 7–14 dni. Czas zależy od standardu prac (bruzdy vs. korytka) i równoległości z innymi ekipami budowlanymi. Ustalamy harmonogram przed rozpoczęciem prac.",
  },
  {
    q: "Czy wystawiacie protokół odbiorczy po zakończeniu prac?",
    a: "Tak, po zakończeniu montażu wykonujemy pełne pomiary odbiorcze zgodnie z PN-HD 60364 i wystawiamy protokół z numerem uprawnień SEP. Protokół jest wymagany przez zakład energetyczny do podłączenia przyłącza i przez ubezpieczycieli.",
  },
  {
    q: "Czy montujecie instalacje pod pompy ciepła i klimatyzację?",
    a: "Tak, wykonujemy dedykowane obwody zasilające dla pomp ciepła, klimatyzacji, samochodowych ładowarek EV i innych urządzeń dużej mocy. Dobieramy właściwe przekroje przewodów i zabezpieczenia zgodnie z wymaganiami producenta urządzenia.",
  },
];

const services = [
  "Projekt instalacji elektrycznej",
  "Montaż rozdzielnicy i zabezpieczeń",
  "Prowadzenie przewodów (bruzdy / korytka / podtynkowo)",
  "Gniazda, łączniki, oprawy LED",
  "Obwody dla klimatyzacji i pomp ciepła",
  "Ładowarki EV (wallbox)",
  "Pomiary odbiorcze i protokół SEP",
  "Zgłoszenie do zakładu energetycznego",
];

export default function InstalacjaElektryczna() {
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
          _subject: "Zapytanie — Instalacja elektryczna AC Wrocław",
          imię: form.name,
          telefon: form.phone,
          adres: form.address,
          usługa: "Nowa instalacja elektryczna",
          źródło: "Landing page instalacja elektryczna",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Instalacja elektryczna AC Wrocław",
        "provider": { "@type": "ElectricalContractor", "name": "1L3 Elektro-Expert", "telephone": "+48600111193" },
        "areaServed": { "@type": "City", "name": "Wrocław" },
        "description": "Kompleksowy montaż nowych instalacji elektrycznych AC we Wrocławiu. Projekt, wykonanie, pomiary odbiorcze i protokół SEP.",
      })}} />
      <Navbar />

      {/* Hero */}
      <section className="bg-[#0d2b12] pt-28 pb-0 px-4 overflow-hidden">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <div className="pb-16">
              <div className="inline-flex items-center gap-2 bg-[#22a832]/20 border border-[#22a832]/30 text-[#4ade80] text-sm font-600 px-4 py-1.5 rounded-full mb-6">
                <Zap size={14} /> Elektryk Wrocław — Uprawnienia SEP E+D
              </div>
              <h1 className="text-4xl md:text-5xl font-900 text-white leading-tight mb-4">
                Instalacja Elektryczna AC<br />
                <span className="text-[#22a832]">Wrocław — od Projektu do Odbioru</span>
              </h1>
              <p className="text-white/70 text-lg max-w-2xl mb-8">
                Kompleksowy montaż nowych instalacji elektrycznych w domach, mieszkaniach i lokalach usługowych. Projekt, wykonanie, pomiary i protokół SEP — wszystko w jednym miejscu.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={`tel:${PHONE}`} className="flex items-center gap-2 bg-[#22a832] text-white font-700 px-6 py-3 rounded-xl text-sm">
                  <Phone size={16} /> Zadzwoń teraz
                </a>
                <a href="#formularz" className="flex items-center gap-2 bg-white/10 border border-white/20 text-white font-600 px-6 py-3 rounded-xl text-sm">
                  Bezpłatna wycena
                </a>
              </div>
              <div className="flex flex-wrap gap-6 mt-8 text-sm text-white/60">
                <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-[#22a832]" /> Uprawnienia SEP E+D</span>
                <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-[#22a832]" /> Norma PN-HD 60364</span>
                <span className="flex items-center gap-1.5"><Clock size={14} className="text-[#22a832]" /> Wycena w 24h</span>
              </div>
            </div>
            {/* Hero image */}
            <div className="hidden lg:block relative h-80 rounded-t-3xl overflow-hidden">
              <img src="/images/jamontazrodzielni.png" alt="Instalacja elektryczna Wrocław" className="w-full h-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b12]/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Zakres usług */}
      <section className="py-16 px-4 bg-[#f8fcf9]">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-800 text-[#0d2b12] mb-2">Zakres prac</h2>
          <p className="text-[#4a6350] mb-8">Wykonujemy kompleksowe instalacje elektryczne — od projektu po protokół odbiorczy.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {services.map((s, i) => (
              <div key={i} className="flex items-center gap-3 bg-white border border-green-100 rounded-xl p-4">
                <CheckCircle2 size={18} className="text-[#22a832] flex-shrink-0" />
                <span className="text-[#0d2b12] font-500 text-sm">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formularz */}
      <section id="formularz" className="py-16 px-4">
        <div className="container max-w-2xl mx-auto">
          <h2 className="text-3xl font-800 text-[#0d2b12] mb-2">Bezpłatna wycena</h2>
          <p className="text-[#4a6350] mb-8">Opisz swój projekt — oddzwonimy w ciągu kilku godzin.</p>
          {submitted ? (
            <div className="bg-[#f0faf2] border border-green-200 rounded-2xl p-8 text-center">
              <CheckCircle2 size={40} className="text-[#22a832] mx-auto mb-3" />
              <h3 className="font-800 text-[#0d2b12] text-xl mb-2">Dziękujemy!</h3>
              <p className="text-[#4a6350]">Odezwiemy się do Ciebie najszybciej jak to możliwe.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input required className="border border-green-100 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#22a832]" placeholder="Imię i nazwisko" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
              <input required className="border border-green-100 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#22a832]" placeholder="Numer telefonu" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
              <input className="border border-green-100 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#22a832]" placeholder="Adres / lokalizacja inwestycji" value={form.address} onChange={e => setForm(f => ({ ...f, address: e.target.value }))} />
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
      <section className="py-16 px-4 bg-[#f8fcf9]">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-3xl font-800 text-[#0d2b12] mb-8">Najczęstsze pytania</h2>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div key={i} className={`border rounded-2xl transition-all ${openFaq === i ? "border-[#22a832]/40 bg-white" : "border-green-100 bg-white"}`}>
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

      {/* CTA bottom */}
      <section className="py-12 px-4 bg-[#0d2b12] text-center">
        <h2 className="text-2xl font-800 text-white mb-4">Potrzebujesz nowej instalacji elektrycznej we Wrocławiu?</h2>
        <p className="text-white/60 mb-6 text-sm">Działamy w całym Wrocławiu i okolicach — Krzyki, Fabryczna, Psie Pole, Oława, Środa Śląska.</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a href={`tel:${PHONE}`} className="flex items-center gap-2 bg-[#22a832] text-white font-700 px-6 py-3 rounded-xl text-sm"><Phone size={15} /> {PHONE}</a>
          <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 bg-white/10 border border-white/20 text-white font-600 px-6 py-3 rounded-xl text-sm"><Mail size={15} /> {EMAIL}</a>
        </div>
        <div className="mt-6">
          <Link href="/" className="text-white/40 text-xs hover:text-white/60">← Wróć do strony głównej</Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}

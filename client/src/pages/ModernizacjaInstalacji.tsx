import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ChevronDown, Phone, Mail, CheckCircle2, Zap, ShieldCheck, Clock, AlertTriangle } from "lucide-react";

const PHONE = "+48 600 111 193";
const EMAIL = "biuro@1l3.pl";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mojrendk";

const warningSignals = [
  "Bezpieczniki wypadają przy włączeniu urządzeń",
  "Stara instalacja aluminiowa (budynki z lat 60–80)",
  "Brak uziemienia (tylko 2 przewody: faza + zero)",
  "Brak wyłączników RCD (różnicowoprądowych)",
  "Instalacja bez protokołu — nie możesz ubezpieczyć",
  "Planowany montaż klimatyzacji, pompy ciepła lub EV",
];

const faqs = [
  {
    q: "Kiedy warto zmodernizować instalację elektryczną?",
    a: "Modernizacja jest wskazana gdy: instalacja ma ponad 25–30 lat, przewody są aluminiowe, brakuje uziemienia lub wyłączników RCD, bezpieczniki topikowe (tzw. 'korki') wypadają, planujesz montaż klimatyzacji lub pompy ciepła, albo nie możesz uzyskać protokołu SEP na obecną instalację.",
  },
  {
    q: "Czy modernizacja wymaga skuwania tynków?",
    a: "Nie zawsze. W zależności od układu instalacji możemy wymienić przewody bez kucia (metoda przeciągania przez istniejące rurki), zamontować nową rozdzielnicę i uzupełnić brakujące obwody w korytkach natynkowych. Zakres kucia ustalamy na bezpłatnej wizji lokalnej.",
  },
  {
    q: "Ile kosztuje modernizacja instalacji elektrycznej?",
    a: "Modernizacja mieszkania (50–80 m²) bez kucia: 4 000–8 000 zł. Z wymianą przewodów i kuciem: 10 000–18 000 zł. Dom jednorodzinny: 15 000–35 000 zł. Ceny zależą od zakresu — oferujemy bezpłatną wycenę po wizji lokalnej.",
  },
  {
    q: "Czy po modernizacji trzeba wykonać pomiary?",
    a: "Tak, po każdej modernizacji wykonujemy pełne pomiary odbiorcze (rezystancja izolacji, ciągłość PE, impedancja pętli zwarcia, testy RCD) i wystawiamy protokół SEP. Bez protokołu ubezpieczyciel może odmówić wypłaty odszkodowania w razie pożaru.",
  },
  {
    q: "Czy podczas modernizacji można zostać bez prądu?",
    a: "Staramy się minimalizować przerwy. W mieszkaniach zazwyczaj wyłączamy prąd tylko na czas prac przy rozdzielnicy (kilka godzin). Przy wymianie przewodów w całym mieszkaniu przerwa może trwać 1–2 dni — możemy rozłożyć prace etapami.",
  },
];

export default function ModernizacjaInstalacji() {
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
          _subject: "Zapytanie — Modernizacja instalacji elektrycznej Wrocław",
          imię: form.name,
          telefon: form.phone,
          adres: form.address,
          usługa: "Modernizacja instalacji elektrycznej",
          źródło: "Landing page modernizacja",
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

      <section className="bg-[#0d2b12] pt-28 pb-0 px-4 overflow-hidden">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <div className="pb-16">
              <div className="inline-flex items-center gap-2 bg-[#22a832]/20 border border-[#22a832]/30 text-[#4ade80] text-sm font-600 px-4 py-1.5 rounded-full mb-6">
                <Zap size={14} /> Elektryk Wrocław — Uprawnienia SEP E+D
              </div>
              <h1 className="text-4xl md:text-5xl font-900 text-white leading-tight mb-4">
                Modernizacja Instalacji<br />
                <span className="text-[#22a832]">Elektrycznej Wrocław</span>
              </h1>
              <p className="text-white/70 text-lg max-w-2xl mb-8">
                Wymiana starych instalacji aluminiowych, modernizacja rozdzielnic, montaż uziemienia i wyłączników RCD. Bezpłatna wizja lokalna i wycena.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={`tel:${PHONE}`} className="flex items-center gap-2 bg-[#22a832] text-white font-700 px-6 py-3 rounded-xl text-sm"><Phone size={16} /> Zadzwoń teraz</a>
                <a href="#formularz" className="flex items-center gap-2 bg-white/10 border border-white/20 text-white font-600 px-6 py-3 rounded-xl text-sm">Bezpłatna wycena</a>
              </div>
              <div className="flex flex-wrap gap-6 mt-8 text-sm text-white/60">
                <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-[#22a832]" /> Uprawnienia SEP E+D</span>
                <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-[#22a832]" /> Protokół po każdej modernizacji</span>
                <span className="flex items-center gap-1.5"><Clock size={14} className="text-[#22a832]" /> Wycena w 24h</span>
              </div>
            </div>
            <div className="hidden lg:block relative h-80 rounded-t-3xl overflow-hidden">
              <img src="/images/Firefly_pozostaw realizm. , ale usuń zniszczenia intalcji 369571.png" alt="Modernizacja instalacji elektrycznej Wrocław" className="w-full h-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b12]/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Sygnały ostrzegawcze */}
      <section className="py-16 px-4 bg-amber-50">
        <div className="container max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle size={24} className="text-amber-600" />
            <h2 className="text-2xl font-800 text-[#0d2b12]">Kiedy instalacja wymaga modernizacji?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {warningSignals.map((s, i) => (
              <div key={i} className="flex items-start gap-3 bg-white border border-amber-200 rounded-xl p-4">
                <AlertTriangle size={16} className="text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="text-[#0d2b12] text-sm">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formularz */}
      <section id="formularz" className="py-16 px-4">
        <div className="container max-w-2xl mx-auto">
          <h2 className="text-3xl font-800 text-[#0d2b12] mb-2">Bezpłatna wycena modernizacji</h2>
          <p className="text-[#4a6350] mb-8">Przyjedziemy na bezpłatną wizję lokalną i przedstawimy kosztorys.</p>
          {submitted ? (
            <div className="bg-[#f0faf2] border border-green-200 rounded-2xl p-8 text-center">
              <CheckCircle2 size={40} className="text-[#22a832] mx-auto mb-3" />
              <h3 className="font-800 text-[#0d2b12] text-xl mb-2">Dziękujemy!</h3>
              <p className="text-[#4a6350]">Skontaktujemy się z Tobą wkrótce.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input required className="border border-green-100 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#22a832]" placeholder="Imię i nazwisko" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
              <input required className="border border-green-100 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#22a832]" placeholder="Numer telefonu" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
              <input className="border border-green-100 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#22a832]" placeholder="Adres / lokalizacja" value={form.address} onChange={e => setForm(f => ({ ...f, address: e.target.value }))} />
              <label className="flex items-start gap-3 text-xs text-[#4a6350]">
                <input type="checkbox" required checked={form.consent} onChange={e => setForm(f => ({ ...f, consent: e.target.checked }))} className="mt-0.5" />
                Wyrażam zgodę na przetwarzanie moich danych osobowych w celu przygotowania wyceny.
              </label>
              <button type="submit" disabled={loading} className="bg-[#22a832] text-white font-700 py-3 rounded-xl text-sm">
                {loading ? "Wysyłam..." : "Umów bezpłatną wizję"}
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
              <div key={i} className={`border rounded-2xl transition-all bg-white ${openFaq === i ? "border-[#22a832]/40" : "border-green-100"}`}>
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
        <h2 className="text-2xl font-800 text-white mb-4">Masz starą instalację? Sprawdzimy ją bezpłatnie.</h2>
        <p className="text-white/60 mb-6 text-sm">Wrocław i okolice — Krzyki, Fabryczna, Psie Pole, Śródmieście, Oława, Środa Śląska.</p>
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

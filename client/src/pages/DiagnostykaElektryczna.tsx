import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ChevronDown, Phone, Mail, CheckCircle2, Zap, ShieldCheck, Eye } from "lucide-react";

const PHONE = "+48 600 111 193";
const EMAIL = "biuro@1l3.pl";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mojrendk";

const faqs = [
  {
    q: "Na czym polega diagnostyka termowizyjna instalacji elektrycznej?",
    a: "Kamera termowizyjna wykrywa miejsca przegrzewania się elementów instalacji — połączeń, bezpieczników, rozdzielnic i kabli. Przegrzewanie to sygnał przeciążenia lub wadliwego połączenia, które może prowadzić do pożaru. Diagnozę wykonujemy przy normalnym obciążeniu instalacji bez wyłączania prądu.",
  },
  {
    q: "Kiedy warto wykonać diagnostykę termowizyjną?",
    a: "Diagnostyka jest szczególnie zalecana gdy: bezpieczniki lub RCD wypadają bez wyraźnej przyczyny, czujesz zapach palonej elektryki, masz starą instalację i chcesz ocenić jej stan przed kupnem nieruchomości, planujesz podłączenie nowych urządzeń dużej mocy, albo wymagają tego przepisy (budynki użyteczności publicznej).",
  },
  {
    q: "Ile kosztuje diagnostyka elektryczna we Wrocławiu?",
    a: "Diagnostyka termowizyjna mieszkania lub domu to koszt 300–600 zł w zależności od wielkości obiektu. W cenie: wizyta z kamerą termowizyjną Fluke Ti401 Pro, raport z zaznaczonymi anomaliami i zaleceniami, konsultacja na miejscu. Przy zleceniu naprawy koszt diagnostyki wliczamy w cenę usługi.",
  },
  {
    q: "Jakiego sprzętu używacie do diagnostyki?",
    a: "Używamy kamery termowizyjnej Fluke Ti401 Pro (rozdzielczość 320×240, czułość 0,05°C) i miernika Fluke 1664 FC do pomiarów elektrycznych. Sprzęt jest kalibrowany i daje wyniki porównywalne z laboratoriami badawczymi.",
  },
  {
    q: "Czy diagnostyka wymaga wyłączenia prądu?",
    a: "Nie — to jedna z głównych zalet termowizji. Kamera rejestruje promieniowanie cieplne bez kontaktu z instalacją. Badanie przeprowadzamy przy normalnym obciążeniu sieci, co daje najbardziej miarodajne wyniki.",
  },
];

export default function DiagnostykaElektryczna() {
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
          _subject: "Zapytanie — Diagnostyka elektryczna Wrocław",
          imię: form.name,
          telefon: form.phone,
          adres: form.address,
          usługa: "Diagnostyka termowizyjna",
          źródło: "Landing page diagnostyka",
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
                <Eye size={14} /> Kamera Fluke Ti401 Pro
              </div>
              <h1 className="text-4xl md:text-5xl font-900 text-white leading-tight mb-4">
                Diagnostyka Elektryczna<br />
                <span className="text-[#22a832]">i Termowizyjna Wrocław</span>
              </h1>
              <p className="text-white/70 text-lg max-w-2xl mb-8">
                Wykrywamy usterki instalacji elektrycznej zanim staną się pożarem. Diagnostyka termowizyjna bez wyłączania prądu — raport z zaleceniami w dniu wizyty.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={`tel:${PHONE}`} className="flex items-center gap-2 bg-[#22a832] text-white font-700 px-6 py-3 rounded-xl text-sm"><Phone size={16} /> Zadzwoń teraz</a>
                <a href="#formularz" className="flex items-center gap-2 bg-white/10 border border-white/20 text-white font-600 px-6 py-3 rounded-xl text-sm">Umów diagnostykę</a>
              </div>
              <div className="flex flex-wrap gap-6 mt-8 text-sm text-white/60">
                <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-[#22a832]" /> Bez wyłączania prądu</span>
                <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-[#22a832]" /> Kamera Fluke Ti401 Pro</span>
                <span className="flex items-center gap-1.5"><Zap size={14} className="text-[#22a832]" /> Raport tego samego dnia</span>
              </div>
            </div>
            <div className="hidden lg:block relative h-80 rounded-t-3xl overflow-hidden">
              <img src="/images/Firefly_na zdjęciu powinie być polski mezczyna 568154.png" alt="Diagnostyka termowizyjna instalacji elektrycznej Wrocław" className="w-full h-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b12]/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Co wykrywamy */}
      <section className="py-16 px-4 bg-[#f8fcf9]">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-800 text-[#0d2b12] mb-8">Co wykrywa diagnostyka termowizyjna?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {["Przegrzane połączenia i zaciscy", "Przeciążone przewody i kable", "Wadliwe bezpieczniki i wyłączniki", "Nieszczelności termiczne w rozdzielnicy", "Miejsca zagrożone pożarem", "Stan silników i transformatorów"].map((s, i) => (
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
          <h2 className="text-3xl font-800 text-[#0d2b12] mb-2">Umów diagnostykę</h2>
          <p className="text-[#4a6350] mb-8">Podaj adres — przyjedziemy z kamerą termowizyjną.</p>
          {submitted ? (
            <div className="bg-[#f0faf2] border border-green-200 rounded-2xl p-8 text-center">
              <CheckCircle2 size={40} className="text-[#22a832] mx-auto mb-3" />
              <h3 className="font-800 text-[#0d2b12] text-xl mb-2">Dziękujemy!</h3>
              <p className="text-[#4a6350]">Skontaktujemy się wkrótce.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input required className="border border-green-100 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#22a832]" placeholder="Imię i nazwisko" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
              <input required className="border border-green-100 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#22a832]" placeholder="Numer telefonu" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
              <input className="border border-green-100 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#22a832]" placeholder="Adres obiektu" value={form.address} onChange={e => setForm(f => ({ ...f, address: e.target.value }))} />
              <label className="flex items-start gap-3 text-xs text-[#4a6350]">
                <input type="checkbox" required checked={form.consent} onChange={e => setForm(f => ({ ...f, consent: e.target.checked }))} className="mt-0.5" />
                Wyrażam zgodę na przetwarzanie moich danych osobowych w celu przygotowania wyceny.
              </label>
              <button type="submit" disabled={loading} className="bg-[#22a832] text-white font-700 py-3 rounded-xl text-sm">
                {loading ? "Wysyłam..." : "Umów diagnostykę"}
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
        <h2 className="text-2xl font-800 text-white mb-4">Nie czekaj na awarię — sprawdź instalację termowizją</h2>
        <p className="text-white/60 mb-6 text-sm">Wrocław i okolice — działamy w całym Dolnym Śląsku.</p>
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

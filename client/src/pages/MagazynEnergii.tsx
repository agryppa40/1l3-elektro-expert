import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ChevronDown, Phone, Mail, CheckCircle2, Zap, ShieldCheck, Clock, Battery } from "lucide-react";

const PHONE = "+48 600 111 193";
const EMAIL = "biuro@1l3.pl";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mojrendk";

const services = [
  "Dobór pojemności magazynu do profilu zużycia",
  "Montaż magazynu energii LFP",
  "Integracja z istniejącą instalacją PV",
  "Konfiguracja falownika hybrydowego",
  "Tryb EPS (zasilanie awaryjne przy braku prądu)",
  "Monitoring i aplikacja mobilna",
  "Optymalizacja taryfy energetycznej",
  "Serwis i gwarancja",
];

const faqs = [
  {
    q: "Czym jest magazyn energii i do czego służy?",
    a: "Magazyn energii to akumulator (najczęściej technologia LFP — Litowo-Żelazowo-Fosforanowa) podłączony do instalacji fotowoltaicznej. Przechowuje nadwyżki energii wyprodukowanej w ciągu dnia i udostępnia je wieczorem lub w nocy, gdy panele nie produkują. Zwiększa autokonsumpcję z PV do 80–95%.",
  },
  {
    q: "Ile kosztuje magazyn energii we Wrocławiu?",
    a: "Magazyn energii 5 kWh to koszt 12 000–18 000 zł, 10 kWh to 20 000–30 000 zł. Cena zależy od producenta, pojemności i rodzaju falownika. Przy zakupie razem z instalacją PV możliwe są rabaty pakietowe. Oferujemy bezpłatną wycenę.",
  },
  {
    q: "Czy magazyn energii działa przy braku prądu?",
    a: "Tak — falowniki hybrydowe z trybem EPS (Emergency Power Supply) automatycznie przełączają wybrane obwody na zasilanie z magazynu w ciągu kilku milisekund po zaniku napięcia. Możesz zasilać lodówkę, oświetlenie i ładowarki nawet przy awarii sieci.",
  },
  {
    q: "Czy mogę dodać magazyn do istniejącej instalacji PV?",
    a: "Tak, w większości przypadków można doinstalować magazyn energii do działającej instalacji PV. Wymaga to zazwyczaj wymiany falownika na hybrydowy lub dodania specjalnego modułu AC-coupled. Oceniamy kompatybilność bezpłatnie podczas wizyty.",
  },
  {
    q: "Ile lat wytrzyma magazyn energii LFP?",
    a: "Akumulatory LFP (Litowo-Żelazowo-Fosforanowe) wytrzymują 4000–6000 cykli ładowania przy zachowaniu 80% pojemności. Przy codziennym użytkowaniu to 10–15 lat. Producenci udzielają gwarancji na 10 lat lub określoną liczbę cykli.",
  },
];

export default function MagazynEnergii() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", address: "", hasPv: "", consent: false });
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
          _subject: "Zapytanie — Magazyn energii Wrocław",
          imię: form.name,
          telefon: form.phone,
          adres: form.address,
          "czy_ma_pv": form.hasPv,
          usługa: "Magazyn energii",
          źródło: "Landing page magazyn energii",
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
                <Battery size={14} /> Technologia LFP
              </div>
              <h1 className="text-4xl md:text-5xl font-900 text-white leading-tight mb-4">
                Magazyn Energii<br />
                <span className="text-[#22a832]">Wrocław — LFP i Hybrydowe</span>
              </h1>
              <p className="text-white/70 text-lg max-w-2xl mb-8">
                Zwiększ autokonsumpcję z fotowoltaiki do 90%. Magazyn energii pozwala korzystać z własnej energii wieczorem i nocą — oraz jako zasilanie awaryjne przy braku prądu.
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
                <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-[#22a832]" /> Technologia LFP</span>
                <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-[#22a832]" /> Tryb EPS (awaryjny)</span>
                <span className="flex items-center gap-1.5"><Clock size={14} className="text-[#22a832]" /> Gwarancja 10 lat</span>
              </div>
            </div>
            <div className="hidden lg:block relative h-80 rounded-t-3xl overflow-hidden">
              <img src="/images/jamotazfalownika.png" alt="Magazyn energii Wrocław LFP" className="w-full h-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b12]/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Korzyści */}
      <section className="py-16 px-4 bg-[#f8fcf9]">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-800 text-[#0d2b12] mb-8">Co zyskujesz z magazynem energii?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Autokonsumpcja z PV wzrasta do 80–95%",
              "Niezależność od rosnących cen prądu",
              "Zasilanie awaryjne przy braku prądu (EPS)",
              "Ładowanie w tańszej taryfie nocnej",
              "Monitoring zużycia w aplikacji mobilnej",
              "Optymalizacja rozliczenia z siecią",
              "Zwiększenie wartości nieruchomości",
              "Redukcja śladu węglowego",
            ].map((s, i) => (
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
          <h2 className="text-3xl font-800 text-[#0d2b12] mb-2">Bezpłatna wycena magazynu energii</h2>
          <p className="text-[#4a6350] mb-8">Dobierzemy optymalną pojemność do Twojego zużycia i instalacji PV.</p>
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
              <input className="border border-green-100 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#22a832]" placeholder="Adres inwestycji" value={form.address} onChange={e => setForm(f => ({ ...f, address: e.target.value }))} />
              <select className="border border-green-100 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#22a832] bg-white text-[#4a6350]" value={form.hasPv} onChange={e => setForm(f => ({ ...f, hasPv: e.target.value }))}>
                <option value="">Czy masz już instalację PV?</option>
                <option value="tak">Tak, mam instalację PV</option>
                <option value="nie">Nie, planuję zakup razem z PV</option>
                <option value="planuje">Planuję instalację PV w przyszłości</option>
              </select>
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
          <h2 className="text-3xl font-800 text-[#0d2b12] mb-8">Najczęstsze pytania o magazyny energii</h2>
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
        <h2 className="text-2xl font-800 text-white mb-4">Chcesz uniezależnić się od rosnących cen prądu?</h2>
        <p className="text-white/60 mb-6 text-sm">Wrocław i okolice — Krzyki, Fabryczna, Psie Pole, Oława, Środa Śląska.</p>
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

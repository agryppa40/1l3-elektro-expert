/**
 * SEO: FAQ section — schema.org FAQPage already in index.html
 * Covers common search queries: cena przegladu, uprawnienia SEP, czas montazu PV, obszar działania
 */
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { trpc } from "@/lib/trpc";

const staticFaqs = [
  { id: 1, question: "Ile kosztuje przegląd 5-letni instalacji elektrycznej we Wrocławiu?", answer: "Koszt przeglądu 5-letniego zależy od wielkości i typu obiektu. Dla typowego domu jednorodzinnego ceny zaczynają się od kilkuset złotych. Oferujemy bezpłatną wycenę — przyjeżdżamy na wizję lokalną bez opłat. Skontaktuj się telefonicznie lub przez formularz, a odpiszemy tego samego dnia." },
  { id: 2, question: "Czy uprawnienia SEP są wymagane do wystawienia protokołu elektrycznego?", answer: "Tak, protokoły pomiarowe instalacji elektrycznej muszą być podpisane przez osobę z uprawnieniami SEP (Stowarzyszenie Elektryków Polskich). 1L3 Elektro-Expert posiada uprawnienia SEP grupy E i D — nasze protokoły są honorowane przez nadzór budowlany, zakłady energetyczne i firmy ubezpieczeniowe." },
  { id: 3, question: "Jak długo trwa montaż instalacji fotowoltaicznej?", answer: "Standardowy montaż instalacji PV dla domu jednorodzinnego trwa 1–2 dni robocze. Obejmuje montaż modułów, falownika, okablowania DC i AC oraz wystawienie protokołu odbiorczego wymaganego przez zakład energetyczny." },
  { id: 4, question: "Jakie dzielnice Wrocławia i okolice obsługujecie?", answer: "Działamy we wszystkich dzielnicach Wrocławia: Krzyki, Fabryczna, Psie Pole, Śródmieście, Stare Miasto, Jagodno, Wojszyce i inne. W okolicach obsługujemy m.in. Oławę, Środę Śląską, Jelcz-Laskowice, Sobótkę, Długołękę — w promieniu do 50 km od centrum Wrocławia." },
  { id: 5, question: "Czy przyjmujecie zlecenia serwisowe dla istniejących instalacji fotowoltaicznych?", answer: "Tak, przejmujemy opiekę nad instalacjami PV innych firm — w tym instalacjami 'osieroconymi'. Wykonujemy pełny audyt techniczny i zapewniamy regularny serwis i monitoring." },
  { id: 6, question: "Czy wystawiacie fakturę VAT?", answer: "Tak, jesteśmy zarejestrowanym podatnikiem VAT (1L3 PSA, NIP: 8952280850). Wystawiamy faktury VAT za wszystkie wykonane usługi." },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const { data: dbFaqs } = trpc.faqs.list.useQuery();
  const faqs = dbFaqs && dbFaqs.length > 0 ? dbFaqs : staticFaqs;

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-14 fade-in-section">
          <span className="section-label">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-900 text-[#0d2b12] mt-3 mb-4 tracking-tight">
            Najczęstsze pytania
          </h2>
          <p className="text-[#4a6350] text-lg max-w-xl mx-auto">
            Pytania, które zadają nam klienci przed pierwszym kontaktem.
          </p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-3 fade-in-section">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            const question = (faq as any).question ?? (faq as any).q;
            const answer = (faq as any).answer ?? (faq as any).a;
            return (
              <div
                key={faq.id ?? i}
                className={`border rounded-2xl transition-all duration-200 ${isOpen ? "border-[#22a832]/40 bg-[#f0faf2]" : "border-green-100 bg-white hover:border-[#22a832]/30"}`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-700 text-[#0d2b12] text-sm md:text-base leading-snug">{question}</span>
                  <ChevronDown size={20} className={`text-[#22a832] flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-[#4a6350] text-sm leading-relaxed">{answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

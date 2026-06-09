/**
 * Design: Bold Technical Craftsman
 * - Two-column layout: text + image
 * - Alert box for statistics
 * - Service cards
 */
import { Search, BarChart2, Shield, ArrowRight } from "lucide-react";

const cards = [
  {
    icon: <Search size={20} />,
    title: "Audyt techniczny instalacji",
    desc: "Sprawdzamy stan modułów (pomiar IV, termowizja), falownika, okablowania DC i AC, zabezpieczeń i uziemienia. Otrzymujesz raport z oceną stanu i zaleceniami.",
  },
  {
    icon: <BarChart2 size={20} />,
    title: "Weryfikacja wydajności",
    desc: "Porównujemy rzeczywistą produkcję energii z prognozowaną dla Twojej lokalizacji i kąta nachylenia. Identyfikujemy straty i ich przyczyny.",
  },
  {
    icon: <Shield size={20} />,
    title: "Przejęcie opieki serwisowej",
    desc: "Stajemy się Twoim serwisantem. Znamy Twój system, mamy jego dokumentację i odpowiadamy na awarie. Bez szukania kogoś nowego za każdym razem.",
  },
];

export default function OrphanedPV() {
  return (
    <section id="osierocone" className="py-24 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="fade-in-section">
            <span className="section-label">Opieka nad istniejącymi instalacjami</span>
            <h2 className="text-3xl md:text-4xl font-900 text-[#0d2b12] mt-3 mb-5 leading-tight tracking-tight">
              Twoja fotowoltaika bez serwisu?{" "}
              <span className="text-[#22a832]">Przejmujemy opiekę.</span>
            </h2>
            <p className="text-[#4a6350] leading-relaxed mb-5">
              Na rynku działa wiele firm, które zamontowały instalacje PV i zniknęły — zbankrutowały, zmieniły profil działalności lub po prostu przestały odbierać telefony. Klient zostaje z działającym (lub nie) systemem i brakiem kogokolwiek, kto zna jego dokumentację.
            </p>

            <div className="bg-amber-50 border border-amber-200 border-l-4 border-l-amber-400 rounded-2xl p-5 mb-6">
              <p className="text-amber-800 text-sm leading-relaxed">
                <strong>Szacuje się, że kilkanaście procent instalacji PV w Polsce pracuje bez aktywnego serwisu</strong>{" "}
                — bez aktualnych przeglądów, bez monitoringu wydajności, bez kogoś, kto odpowie na pytanie „dlaczego mój falownik pokazuje błąd E012".
              </p>
            </div>

            <p className="text-[#4a6350] leading-relaxed mb-8">
              Przejmujemy opiekę nad takimi instalacjami. Przeprowadzamy pełny audyt techniczny, oceniamy stan modułów, falownika i okablowania, a następnie integrujemy system z naszym monitoringiem.
            </p>

            <a
              href="#kontakt"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2.5 bg-[#0d2b12] hover:bg-[#22a832] text-white font-700 text-sm px-6 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-green-900/15"
            >
              Zgłoś osieroconą instalację
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Image + Cards */}
          <div className="fade-in-section fade-in-section-delay-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-green-900/10 mb-6">
              <img
                src="/images/ciecie-5-14.png"
                alt="Audyt instalacji fotowoltaicznej"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b12]/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="bg-[#22a832] text-white text-xs font-700 px-4 py-2 rounded-full uppercase tracking-wide">
                  Audyt PV
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {cards.map((card, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-[#f0faf2] border border-green-100 rounded-2xl p-5 hover:border-[#22a832]/40 transition-colors"
                >
                  <div className="w-10 h-10 bg-[#22a832]/15 rounded-xl flex items-center justify-center text-[#22a832] flex-shrink-0">
                    {card.icon}
                  </div>
                  <div>
                    <h4 className="font-700 text-[#0d2b12] text-sm mb-1">{card.title}</h4>
                    <p className="text-[#4a6350] text-xs leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

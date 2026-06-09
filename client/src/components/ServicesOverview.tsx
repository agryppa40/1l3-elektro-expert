/**
 * Design: Bold Technical Craftsman
 * - Services grid with large images, tags, and descriptions
 * - Dark background with green accents
 * - Asymmetric layout for visual interest
 */
import { ArrowRight } from "lucide-react";

const services = [
  {
    icon: "/images/ikonapomiary.png",
    tag: "Filar 1",
    title: "Pomiary Elektryczne i Protokoły",
    desc: "Pełne pomiary instalacji elektrycznej zgodnie z normą PN-HD 60364. Protokoły honorowane przez nadzór budowlany i ubezpieczycieli.",
    features: ["Rezystancja izolacji", "Pomiar pętli zwarcia", "Przeglądy 5-letnie", "Protokoły odbiorcze"],
    image: "/images/ciecie2.png",
    href: "#uslugi-pomiary",
    badge: "Uprawnienia SEP",
  },
  {
    icon: "/images/ikonafotowoltaika.png",
    tag: "Filar 2",
    title: "Fotowoltaika: Projekt, Montaż i Odbiór",
    desc: "Indywidualny projekt instalacji PV dopasowany do Twojego zużycia energii. Montaż przez wykwalifikowanego elektryka z uprawnieniami SEP.",
    features: ["Analiza zużycia energii", "Montaż modułów PV", "Dobór falownika", "Protokół dla zakładu"],
    image: "/images/cieicie-3.jpg",
    href: "#uslugi-fotowoltaika",
    badge: "Projekt + Montaż",
  },
  {
    icon: "/images/ikonaoptymalizacjaenergetyczna.png",
    tag: "Filar 2 — Rozszerzenie",
    title: "Magazyny Energii i Optymalizacja",
    desc: "Magazyny energii LFP, integracja z instalacją PV i siecią AC. Monitoring w czasie rzeczywistym i konfiguracja trybu awaryjnego.",
    features: ["Dobór pojemności", "Montaż i uruchomienie", "Tryb EPS/off-grid", "Monitoring mobilny"],
    image: "/images/ciecie-4.png",
    href: "#uslugi-magazyny",
    badge: "Niezależność energetyczna",
  },
  {
    icon: "/images/Ikonamontaz.png",
    tag: "Filar 3",
    title: "Modernizacja Instalacji i Usterki",
    desc: "Wymiana rozdzielnic, diagnostyka termowizyjna, modernizacja pod pompy ciepła i ładowarki EV. Usterki lokalizujemy bez zbędnego kucia.",
    features: ["Wymiana rozdzielnic", "Diagnostyka termowizyjna", "Modernizacja pod EV/HP", "Nowe instalacje"],
    image: "/images/ciecie-5.png",
    href: "#uslugi-modernizacja",
    badge: "Modernizacja",
  },
];

export default function ServicesOverview() {
  return (
    <section
      id="uslugi-overview"
      className="py-24 bg-white"
      style={{
        backgroundImage: `url('/images/services-bg.svg')`,
        backgroundRepeat: "repeat",
        backgroundSize: "600px",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="text-center mb-16 fade-in-section">
          <span className="section-label">Oferta</span>
          <h2 className="text-4xl md:text-5xl font-900 text-[#0d2b12] mt-3 mb-4 tracking-tight leading-tight">
            Co dokładnie robimy?
          </h2>
          <p className="text-[#4a6350] text-lg max-w-2xl mx-auto leading-relaxed">
            Każda usługa to konkretny zakres prac, jasna wycena i legalna dokumentacja na końcu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className={`fade-in-section group bg-white rounded-3xl border border-green-100 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-green-900/8 transition-all duration-300 hover:-translate-y-1`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b12]/70 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#22a832] text-white text-xs font-700 px-3 py-1.5 rounded-full uppercase tracking-wide">
                    {service.badge}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl p-1.5 border border-white/20">
                    <img src={service.icon} alt="" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-white/70 text-xs font-600 uppercase tracking-widest">{service.tag}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-800 text-[#0d2b12] mb-3 leading-tight">{service.title}</h3>
                <p className="text-[#4a6350] text-sm leading-relaxed mb-4">{service.desc}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {service.features.map((f, j) => (
                    <span
                      key={j}
                      className="text-xs font-600 text-[#187a25] bg-[#f0faf2] border border-green-200 px-3 py-1 rounded-full"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <a
                  href={service.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(service.href)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 text-[#22a832] font-700 text-sm hover:gap-3 transition-all duration-200"
                >
                  Szczegóły usługi <ArrowRight size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

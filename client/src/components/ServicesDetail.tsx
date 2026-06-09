/**
 * Design: Bold Technical Craftsman
 * - Alternating image-text rows for each service
 * - Large images with badge overlays
 * - Feature lists with green checkmarks
 * - CTA buttons for each service
 */
import { CheckCircle, ArrowRight } from "lucide-react";

const services = [
  {
    id: "uslugi-pomiary",
    tag: "Filar 1",
    title: "Pomiary Elektryczne i Protokoły Odbiorcze",
    desc: "Budujesz dom, robisz remont lub mija Ci 5-letni termin przeglądu? Wykonujemy pełne pomiary instalacji elektrycznej zgodnie z normą PN-HD 60364. Wystawiamy protokół z numerem uprawnień SEP, honorowany przez nadzór budowlany i ubezpieczycieli.",
    features: [
      "Rezystancja izolacji przewodów",
      "Pomiar pętli zwarcia i impedancji",
      "Sprawdzenie wyłączników RCD",
      "Obowiązkowe przeglądy 5-letnie z dokumentacją",
      "Protokoły odbiorcze dla nowych instalacji",
      "Odbiory instalacji przed zgłoszeniem do sieci",
    ],
    image: "/images/ciecie2.png",
    badge: "Uprawnienia SEP",
    cta: "Zarezerwuj termin pomiarów",
    reverse: false,
  },
  {
    id: "uslugi-fotowoltaika",
    tag: "Filar 2",
    title: "Fotowoltaika: Projekt, Montaż i Odbiór",
    desc: "Nie sprzedajemy gotowych pakietów. Analizujemy Twoje rachunki za prąd i dobieramy moc instalacji PV tak, aby inwestycja zwróciła się jak najszybciej. Montaż wykonuje wykwalifikowany elektryk z uprawnieniami — nie podwykonawca z łapanki.",
    features: [
      "Indywidualny projekt instalacji PV (analiza zużycia)",
      "Montaż modułów fotowoltaicznych na dachu",
      "Dobór i montaż falownika (inwertera)",
      "Okablowanie DC i AC zgodnie z normami",
      "Przeglądy i serwis istniejących instalacji PV",
      "Protokół odbiorczy dla zakładu energetycznego",
    ],
    image: "/images/cieicie-3.jpg",
    badge: "Projekt + Montaż",
    cta: "Wyceń instalację PV",
    reverse: true,
  },
  {
    id: "uslugi-magazyny",
    tag: "Filar 2 — Rozszerzenie",
    title: "Magazyny Energii i Optymalizacja Systemu",
    desc: "Masz już fotowoltaikę, ale oddajesz nadwyżki do sieci za grosze? Montujemy magazyny energii, które gromadzą prąd na wieczór i noc. Integrujemy instalację PV z siecią AC w jeden zoptymalizowany system z monitoringiem w czasie rzeczywistym.",
    features: [
      "Dobór pojemności magazynu do profilu zużycia",
      "Montaż i uruchomienie banku energii",
      "Integracja PV + magazyn + sieć AC",
      "Konfiguracja trybu zasilania awaryjnego (EPS/off-grid)",
      "Optymalizacja autokonsumpcji energii",
      "Monitoring systemu przez aplikację mobilną",
    ],
    image: "/images/ciecie-4.png",
    badge: "Niezależność energetyczna",
    cta: "Zapytaj o magazyn energii",
    reverse: false,
  },
  {
    id: "uslugi-modernizacja",
    tag: "Filar 3",
    title: "Modernizacja Instalacji i Usuwanie Usterek",
    desc: "Wyrzuca korki przy włączeniu indukcji? Stara instalacja nie wytrzymuje pompy ciepła? Wymieniamy przestarzałe bezpieczniki na nowoczesne aparaty modułowe, porządkujemy rozdzielnice i dostosowujemy przydział mocy. Usterki lokalizujemy kamerą termowizyjną — bez zbędnego kucia ścian.",
    features: [
      "Wymiana i rozbudowa rozdzielnic elektrycznych",
      "Modernizacja instalacji pod pompy ciepła i ładowarki EV",
      "Diagnostyka termowizyjna instalacji",
      "Lokalizacja i usuwanie zwarć i przerw w obwodach",
      "Nowe instalacje elektryczne (od projektu po odbiór)",
      "Optymalizacja układu zabezpieczeń",
    ],
    image: "/images/ciecie-5.png",
    badge: "Modernizacja",
    cta: "Wyceń modernizację",
    reverse: true,
  },
];

export default function ServicesDetail() {
  return (
    <section id="uslugi" className="py-24 bg-[#f8fcf9]">
      <div className="container">
        <div className="text-center mb-16 fade-in-section">
          <span className="section-label">Szczegółowa oferta</span>
          <h2 className="text-4xl md:text-5xl font-900 text-[#0d2b12] mt-3 mb-4 tracking-tight">
            Zakres naszych usług
          </h2>
          <p className="text-[#4a6350] text-lg max-w-xl mx-auto">
            Każda usługa to konkretny zakres prac, jasna wycena i legalna dokumentacja.
          </p>
        </div>

        <div className="flex flex-col gap-20">
          {services.map((service, i) => (
            <div
              key={i}
              id={service.id}
              className={`fade-in-section grid grid-cols-1 lg:grid-cols-2 gap-10 items-center scroll-mt-24 ${
                service.reverse ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-green-900/10 group">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[360px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b12]/50 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <span className="bg-[#22a832] text-white text-xs font-700 px-4 py-2 rounded-full uppercase tracking-wide shadow-lg">
                    {service.badge}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div>
                <span className="section-label">{service.tag}</span>
                <h3 className="text-3xl font-900 text-[#0d2b12] mt-3 mb-4 leading-tight tracking-tight">
                  {service.title}
                </h3>
                <p className="text-[#4a6350] leading-relaxed mb-6">{service.desc}</p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <CheckCircle
                        size={16}
                        className="text-[#22a832] flex-shrink-0 mt-0.5"
                      />
                      <span className="text-sm text-[#1a2e1e] font-500">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#kontakt"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2.5 bg-[#0d2b12] hover:bg-[#22a832] text-white font-700 text-sm px-6 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-green-900/15"
                >
                  {service.cta}
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

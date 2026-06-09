/**
 * Design: Bold Technical Craftsman
 * - 4-step process with large numbers
 * - Clean white background
 * - Horizontal flow on desktop
 */

const steps = [
  {
    num: "1",
    title: "Kontakt i Diagnoza",
    desc: "Dzwonisz lub wypełniasz formularz. Przyjeżdżamy na miejsce, sprawdzamy stan faktyczny i robimy pomiary. Bez opłat za wizję lokalną.",
  },
  {
    num: "2",
    title: "Twarda Wycena",
    desc: "Otrzymujesz konkretny kosztorys: materiały + robocizna. Bez widełek, bez \"zależy\". Akceptujesz — ustalamy termin.",
  },
  {
    num: "3",
    title: "Realizacja",
    desc: "Wykonujemy pracę zgodnie ze sztuką i normami. Używamy profesjonalnego sprzętu. Dbamy o porządek na miejscu pracy.",
  },
  {
    num: "4",
    title: "Odbiór i Dokumentacja",
    desc: "Kończymy legalnym protokołem pomiarowym z numerem uprawnień SEP. Faktura, instruktaż obsługi i kontakt na wypadek pytań.",
  },
];

export default function ProcessSection() {
  return (
    <section id="jak-dzialamy" className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16 fade-in-section">
          <span className="section-label">Proces</span>
          <h2 className="text-4xl md:text-5xl font-900 text-[#0d2b12] mt-3 mb-4 tracking-tight">
            Jak to działa?
          </h2>
          <p className="text-[#4a6350] text-lg max-w-xl mx-auto">
            Prosto i bez zbędnych formalności. Od pierwszego kontaktu do legalnego odbioru.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="fade-in-section relative"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(100%_-_12px)] w-6 h-0.5 bg-green-200 z-10" />
              )}

              <div className="bg-[#f8fcf9] border border-green-100 rounded-3xl p-7 h-full hover:border-[#22a832]/40 hover:shadow-lg hover:shadow-green-900/5 transition-all duration-300">
                {/* Number */}
                <div className="w-16 h-16 bg-[#0d2b12] rounded-2xl flex items-center justify-center mb-5">
                  <span className="text-[#22a832] text-2xl font-900">{step.num}</span>
                </div>
                <h3 className="text-lg font-800 text-[#0d2b12] mb-3">{step.title}</h3>
                <p className="text-[#4a6350] text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

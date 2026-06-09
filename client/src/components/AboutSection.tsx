/**
 * Design: Bold Technical Craftsman
 * - Two-column: image left, text right
 * - Credential tags
 * - poprawoangrafika.png as main image
 */

const tags = [
  "Uprawnienia SEP E+D",
  "Wrocław i okolice",
  "Norma PN-HD 60364",
  "Sprzęt Fluke / Sonel",
  "Termowizja",
  "Faktura VAT",
  "Serwis PV",
  "Integracja AC+OZE",
];

export default function AboutSection() {
  return (
    <section id="o-nas" className="py-24 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="fade-in-section relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-green-900/10">
              <img
                src="/images/Ciecie1.png"
                alt="Elektryk 1L3 przy instalacji fotowoltaicznej"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b12]/50 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-4">
                  <div className="text-white font-700 text-sm">Uprawnienia SEP E i D</div>
                  <div className="text-white/70 text-xs mt-0.5">Legalna dokumentacja honorowana przez nadzór budowlany</div>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="fade-in-section">
            <span className="section-label">O firmie</span>
            <h2 className="text-3xl md:text-4xl font-900 text-[#0d2b12] mt-3 mb-6 leading-tight tracking-tight">
              Lokalna firma.{" "}
              <span className="text-[#22a832]">Inżynierskie podejście.</span>
            </h2>

            <div className="space-y-4 mb-8">
              <p className="text-[#4a6350] leading-relaxed">
                1L3 to  firma elektryczna z Wrocławia. Specjalizujemy się w instalacjach elektrycznych i systemach fotowoltaicznych dla klientów indywidualnych i małych firm na terenie Wrocławia i okolic.
              </p>
              <p className="text-[#4a6350] leading-relaxed">
                Nie jesteśmy agencją pośredniczącą. Każdą pracę wykonujemy osobiście, z pełnymi uprawnieniami SEP (E i D). Oznacza to, że rozmawiasz z fachowcem, który będzie wykonywał pracę — nie z handlowcem, który zleci ją dalej.
              </p>
              <p className="text-[#4a6350] leading-relaxed">
                Stawiamy na precyzję techniczną i rzetelną dokumentację. Nasze protokoły pomiarowe spełniają wymogi prawa budowlanego i są honorowane przez zakłady energetyczne oraz firmy ubezpieczeniowe.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-sm font-600 text-[#187a25] bg-[#f0faf2] border border-green-200 px-4 py-2 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

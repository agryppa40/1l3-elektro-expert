/**
 * Design: Bold Technical Craftsman
 * - Dark section with system_bg.jpg background
 * - 4 pillars in grid layout
 * - Energy flow diagram
 * - Quote from the company
 */
import { ArrowRight, Sun, Settings, Battery, Home, Plug } from "lucide-react";

const pillars = [
  {
    num: "01",
    title: "Analiza sieci AC",
    desc: "Zanim zaprojektujemy cokolwiek, mierzymy rzeczywiste obciążenia w Twojej instalacji elektrycznej. Sprawdzamy przekroje przewodów, stan rozdzielnicy i jakość zasilania.",
  },
  {
    num: "02",
    title: "Dobór OZE do profilu zużycia",
    desc: "Nie dobieramy mocy PV z katalogu. Analizujemy Twoje rachunki i wzorce zużycia energii — godzinowo. Dobieramy instalację tak, żeby autokonsumpcja była maksymalna.",
  },
  {
    num: "03",
    title: "Integracja i strojenie systemu",
    desc: "Falownik, magazyn energii i sieć AC muszą ze sobą rozmawiać. Konfigurujemy kolejność ładowania, tryby pracy i parametry ochronne tak, żeby system działał jako jeden organizm.",
  },
  {
    num: "04",
    title: "Optymalizacja i monitoring",
    desc: "Po uruchomieniu weryfikujemy rzeczywistą wydajność systemu. Porównujemy dane z prognozami. Dostajesz dostęp do monitoringu w czasie rzeczywistym.",
  },
];

const flowNodes = [
  { icon: <Sun size={24} />, label: "Panele PV", sub: "Generacja DC" },
  { icon: <Settings size={24} />, label: "Falownik", sub: "DC → AC" },
  { icon: <Battery size={24} />, label: "Magazyn energii", sub: "Bufor i rezerwa" },
  { icon: <Home size={24} />, label: "Sieć AC", sub: "Odbiory klienta" },
  { icon: <Plug size={24} />, label: "Sieć energetyczna", sub: "Bilansowanie" },
];

export default function SystemSection() {
  return (
    <section
      id="system-energetyczny"
      className="relative py-24 overflow-hidden"
      style={{
        backgroundImage: `url('/images/system_bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay — lighter so background is more visible */}
      <div className="absolute inset-0 bg-[#0d2b12]/72" />

      <div className="relative z-10 container">
        {/* Header */}
        <div className="text-center mb-16 fade-in-section">
          <span className="inline-block text-xs font-700 uppercase tracking-widest text-[#4ade80] bg-[#22a832]/20 border border-[#22a832]/30 px-4 py-2 rounded-full mb-4">
            Nasza filozofia
          </span>
          <h2 className="text-4xl md:text-5xl font-900 text-white tracking-tight leading-tight mb-4">
            Nie sprzedajemy instalacji PV.
            <br />
            <span className="text-[#22a832]">Budujemy kompletny system energetyczny.</span>
          </h2>
          <p className="text-white/65 text-lg max-w-2xl mx-auto leading-relaxed">
            Panele na dachu to tylko jeden element. Prawdziwa wartość powstaje wtedy, gdy część AC i OZE współpracują jak jeden dobrze zestrojony organizm.
          </p>
        </div>

        {/* Quote */}
        <div className="fade-in-section max-w-3xl mx-auto mb-16 bg-white/5 backdrop-blur-sm border border-white/10 border-l-4 border-l-[#22a832] rounded-2xl p-8">
          <p className="text-white/85 text-lg font-400 italic leading-relaxed">
            Większość instalatorów montuje panele i odjeżdża. My projektujemy system: analizujemy profil obciążeń Twojej sieci AC, dobieramy moc PV, pojemność magazynu i parametry falownika tak, żeby cały układ pracował optymalnie — nie tylko w słoneczne południe, ale przez cały rok.
          </p>
          <cite className="block mt-4 text-[#4ade80] text-sm font-700 uppercase tracking-widest not-italic">
            — 1L3, Wrocław
          </cite>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="fade-in-section bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#22a832]/40 transition-all duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="text-[#22a832] text-4xl font-900 leading-none mb-4 font-mono">
                {pillar.num}
              </div>
              <h3 className="text-white font-700 text-base mb-3">{pillar.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* Energy Flow */}
        <div className="fade-in-section mb-12">
          <h3 className="text-center text-white/60 text-xs font-700 uppercase tracking-widest mb-8">
            Schemat przepływu energii
          </h3>
          <div className="flex items-center justify-center flex-wrap gap-2">
            {flowNodes.map((node, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="text-center bg-white/8 border border-white/15 rounded-2xl px-5 py-4 min-w-[110px]">
                  <div className="text-[#22a832] flex justify-center mb-2">{node.icon}</div>
                  <div className="text-white text-xs font-700 uppercase tracking-wide">{node.label}</div>
                  <div className="text-white/40 text-[10px] mt-1">{node.sub}</div>
                </div>
                {i < flowNodes.length - 1 && (
                  <div className="text-[#22a832] font-700 text-xl">→</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="fade-in-section text-center">
          <a
            href="#kontakt"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2.5 bg-[#22a832] hover:bg-[#2ecc40] text-white font-700 text-base px-8 py-4 rounded-2xl transition-all duration-200 shadow-2xl shadow-green-900/30 hover:-translate-y-1"
          >
            Zaprojektuj swój system energetyczny
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

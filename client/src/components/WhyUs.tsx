/**
 * Design: Bold Technical Craftsman
 * - Two-column: image left, points right
 * - Dark background with green accents
 * - 5 key differentiators
 */
import { ClipboardList, Target, Microscope, Zap, MessageCircle } from "lucide-react";

const points = [
  {
    icon: <ClipboardList size={20} />,
    title: "Twarde uprawnienia SEP (E i D)",
    desc: "Nasze protokoły pomiarowe są honorowane przez nadzór budowlany, zakłady energetyczne i firmy ubezpieczeniowe. Nie wystawiamy papierków — wystawiamy dokumenty.",
  },
  {
    icon: <Target size={20} />,
    title: "Jeden wykonawca, pełna odpowiedzialność",
    desc: "Od projektu, przez montaż, po odbiór i dokumentację. Nie zlecamy prac podwykonawcom. Wiesz, kto wykonał pracę i kto za nią odpowiada — teraz i za 5 lat.",
  },
  {
    icon: <Microscope size={20} />,
    title: "Diagnostyka bez zgadywania",
    desc: "Używamy kamer termowizyjnych i certyfikowanych mierników Fluke i Sonel. Problem lokalizujemy precyzyjnie, bez zbędnych kosztów i kucia ścian.",
  },
  {
    icon: <Zap size={20} />,
    title: "AC i OZE jako jeden system",
    desc: "Projektujemy z myślą o integracji. Sieć AC w Twoim domu musi być gotowa na nowe elementy — sprawdzamy to zanim cokolwiek zamontujemy. Żadnych niespodzianek po uruchomieniu.",
  },
  {
    icon: <MessageCircle size={20} />,
    title: "Rozmawiasz z fachowcem, nie z handlowcem",
    desc: "Kontakt bezpośrednio z elektrykiem, który wykona pracę. Konkretna wycena po audycie technicznym. Zero ukrytych kosztów.",
  },
];

export default function WhyUs() {
  return (
    <section id="dlaczego" className="py-24 bg-[#f8fcf9]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="fade-in-section relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-green-900/10">
              <img
                src="/images/ciecie-5-14.png"
                alt="Diagnostyka termowizyjna instalacji elektrycznej"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b12]/40 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-[#22a832] text-white rounded-2xl p-5 shadow-2xl shadow-green-900/30">
              <div className="text-3xl font-900 leading-none">SEP</div>
              <div className="text-xs font-700 uppercase tracking-widest mt-1 text-white/80">E + D</div>
            </div>
          </div>

          {/* Points */}
          <div className="fade-in-section">
            <span className="section-label">Dlaczego 1L3?</span>
            <h2 className="text-3xl md:text-4xl font-900 text-[#0d2b12] mt-3 mb-8 leading-tight tracking-tight">
              Fakty, nie obietnice
            </h2>

            <div className="flex flex-col gap-5">
              {points.map((point, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 group"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="w-10 h-10 bg-[#22a832]/10 group-hover:bg-[#22a832] rounded-xl flex items-center justify-center text-[#22a832] group-hover:text-white flex-shrink-0 transition-all duration-200">
                    {point.icon}
                  </div>
                  <div>
                    <h4 className="font-700 text-[#0d2b12] mb-1">{point.title}</h4>
                    <p className="text-[#4a6350] text-sm leading-relaxed">{point.desc}</p>
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

/**
 * Design: Bold Technical Craftsman
 * - Equipment/brands grid on dark background
 * - Brand cards with tags
 * - Philosophy note
 */
import { Info } from "lucide-react";

const brands = [
  {
    emoji: "☀️",
    name: "Jinko Solar / JA Solar",
    category: "Moduły fotowoltaiczne",
    desc: "Czołowi światowi producenci modułów PV. Wysoka sprawność ogniw (do 23%), potwierdzona trwałość w warunkach klimatycznych Europy środkowej, długa gwarancja liniowa na wydajność (25–30 lat).",
    tags: ["Monokrystaliczne", "Bifacial", "Gwarancja 25–30 lat", "IEC 61215"],
  },
  {
    emoji: "⚙️",
    name: "Fronius / SolarEdge / Huawei",
    category: "Falowniki (inwertery)",
    desc: "Trzy różne filozofie techniczne — dobieramy zależnie od specyfiki instalacji. Fronius — niezawodność i serwis w Polsce. SolarEdge — optymalizatory na poziomie modułu. Huawei FusionSolar — zaawansowany monitoring.",
    tags: ["Hybrydowe", "Trójfazowe", "Monitoring online", "EPS / off-grid"],
  },
  {
    emoji: "🔋",
    name: "BYD / Pylontech / Huawei LUNA",
    category: "Magazyny energii (baterie LFP)",
    desc: "Magazyny energii oparte na chemii LiFePO4 — bezpieczne, trwałe (3000–6000 cykli), z możliwością rozbudowy. BYD Battery-Box i Pylontech to sprawdzone systemy z szerokim wsparciem technicznym.",
    tags: ["LiFePO4", "Skalowalne", "3000+ cykli", "Zasilanie awaryjne"],
  },
  {
    emoji: "🛡️",
    name: "Hager / Eaton / ABB",
    category: "Aparatura elektryczna i rozdzielnice",
    desc: "Aparatura modułowa, rozdzielnice i zabezpieczenia od producentów z wieloletnią obecnością na rynku europejskim. Certyfikowane, zgodne z normami IEC/EN.",
    tags: ["IEC 60947", "Aparatura modułowa", "Ochrona przepięciowa", "DC/AC"],
  },
  {
    emoji: "📊",
    name: "Fluke / Sonel",
    category: "Sprzęt pomiarowy i diagnostyczny",
    desc: "Certyfikowane mierniki instalacyjne i kamery termowizyjne. Fluke — standard w diagnostyce przemysłowej. Sonel — polski producent, sprzęt dedykowany do pomiarów elektrycznych wg PN-HD 60364.",
    tags: ["Termowizja", "Pomiar izolacji", "Pętla zwarcia", "Certyfikowany"],
  },
  {
    emoji: "🌞",
    name: "K2 Systems / Schletter",
    category: "Systemy montażowe PV",
    desc: "Aluminiowe systemy montażowe do paneli PV na dachach skośnych, płaskich i elewacjach. Certyfikowane obciążenia śniegiem i wiatrem dla warunków polskich.",
    tags: ["Aluminium", "Dach skośny / płaski", "Certyfikat wiatr/śnieg", "10 lat gwarancji"],
  },
];

export default function EquipmentSection() {
  return (
    <section id="sprzet" className="py-24 bg-white/80 backdrop-blur-sm">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12 fade-in-section">
          <span className="section-label">Sprzęt i producenci</span>
          <h2 className="text-4xl md:text-5xl font-900 text-[#0d2b12] tracking-tight leading-tight mb-4 mt-3">
            Renomowany sprzęt.{" "}
            <span className="text-[#22a832]">Dobór pod synergię, nie pod cenę.</span>
          </h2>
          <p className="text-[#4a6350] text-lg max-w-2xl mx-auto">
            Pracujemy wyłącznie z producentami o ugruntowanej pozycji na rynku. Ale sama marka to za mało — każdy element dobieramy pod kątem najlepszej współpracy z resztą systemu.
          </p>
        </div>

        {/* Philosophy */}
        <div className="fade-in-section max-w-3xl mx-auto mb-12 bg-[#f0faf2] border border-green-200 border-l-4 border-l-[#22a832] rounded-2xl p-6">
          <p className="text-[#4a6350] text-sm leading-relaxed">
            Nie mamy jednego polecanego producenta, którego sprzedajemy za wszelką cenę.{" "}
            <strong className="text-[#0d2b12]">Dobór sprzętu zawsze podporządkowujemy całości instalacji</strong>{" "}
            — sprawdzamy, czy falownik komunikuje się z magazynem, czy moduły PV pasują do charakterystyki dachu, czy parametry ochronne są zgodne z Twoją siecią AC. Cel jest jeden:{" "}
            <strong className="text-[#0d2b12]">najwyższa jakość przy zachowaniu balansu cenowego</strong>{" "}
            — bez przepłacania za markę, bez kompromisów technicznych.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {brands.map((brand, i) => (
            <div
              key={i}
              className="fade-in-section bg-white border border-green-100 rounded-2xl p-6 hover:shadow-lg hover:shadow-green-900/8 hover:border-[#22a832]/30 transition-all duration-300"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl w-12 h-12 bg-[#f0faf2] border border-green-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  {brand.emoji}
                </div>
                <div>
                  <div className="text-[#0d2b12] font-700 text-sm leading-tight">{brand.name}</div>
                  <div className="text-[#22a832] text-xs font-600 mt-0.5">{brand.category}</div>
                </div>
              </div>
              <p className="text-[#4a6350] text-sm leading-relaxed mb-4">{brand.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {brand.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="text-[10px] font-600 text-[#187a25] bg-[#f0faf2] border border-green-200 px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="fade-in-section flex items-start gap-4 bg-[#f0faf2] border border-green-200 rounded-2xl p-6 max-w-3xl mx-auto">
          <Info size={20} className="text-[#22a832] flex-shrink-0 mt-0.5" />
          <p className="text-[#4a6350] text-sm leading-relaxed">
            <strong className="text-[#0d2b12]">Nie jesteśmy związani z żadnym dystrybutorem ani programem partnerskim.</strong>{" "}
            Dobieramy sprzęt na podstawie analizy technicznej Twojej instalacji — nie dlatego, że mamy go na magazynie. Zawsze otrzymujesz pełną specyfikację sprzętu z kartami katalogowymi przed podpisaniem umowy.
          </p>
        </div>
      </div>
    </section>
  );
}

/**
 * Design: Bold Technical Craftsman
 * - Portfolio grid with images and descriptions
 * - Tags for each project type
 * - Dynamic data from DB with static fallback
 */
import { trpc } from "@/lib/trpc";

const staticProjects = [
  { id: 1, image: "/images/cieicie-3.jpg", tag: "Fotowoltaika", title: "Montaż instalacji PV 10 kWp — dom jednorodzinny", desc: "Projekt, montaż modułów, falownik hybrydowy i protokół odbiorczy. Realizacja w 2 dni robocze. Gotowość do przyłączenia do sieci.", meta: "Wrocław-Krzyki · 2024" },
  { id: 2, image: "/images/ciecie-4.png", tag: "Magazyn Energii", title: "Integracja magazynu energii 10 kWh z istniejącą instalacją PV", desc: "Rozbudowa działającej instalacji fotowoltaicznej o bank energii. Konfiguracja trybu EPS i monitoring przez aplikację.", meta: "Oława · 2025" },
  { id: 3, image: "/images/ciecie-5.png", tag: "Modernizacja", title: "Wymiana rozdzielnicy — dom z lat 90.", desc: "Stara instalacja z bezpiecznikami topikowymi zastąpiona nowoczesną rozdzielnicą z aparatami modułowymi. Przygotowanie pod pompę ciepła.", meta: "Wrocław-Fabryczna · 2024" },
  { id: 4, image: "/images/ciecie2.png", tag: "Pomiary i Protokół", title: "Przegląd 5-letni — budynek wielorodzinny", desc: "Pełne pomiary instalacji elektrycznej w 12 lokalach. Protokoły odbiorcze dla zarządcy nieruchomości. Dokumentacja zgodna z normą PN-HD 60364.", meta: "Środa Śląska · 2025" },
];

const tagColors: Record<string, string> = {
  "Fotowoltaika": "bg-yellow-100 text-yellow-800 border-yellow-200",
  "Magazyn Energii": "bg-blue-100 text-blue-800 border-blue-200",
  "Modernizacja": "bg-purple-100 text-purple-800 border-purple-200",
  "Pomiary i Protokół": "bg-green-100 text-green-800 border-green-200",
};

export default function RealizationsSection() {
  const { data: dbProjects } = trpc.realizations.list.useQuery();
  const projects = dbProjects && dbProjects.length > 0
    ? dbProjects.map(p => ({ id: p.id, image: p.imageUrl ?? "", tag: p.tag, title: p.title, desc: p.description, meta: p.location ?? "" }))
    : staticProjects;
  return (
    <section id="realizacje" className="py-24 bg-[#f8fcf9]">
      <div className="container">
        <div className="text-center mb-16 fade-in-section">
          <span className="section-label">Realizacje</span>
          <h2 className="text-4xl md:text-5xl font-900 text-[#0d2b12] mt-3 mb-4 tracking-tight">
            Przykładowe prace
          </h2>
          <p className="text-[#4a6350] text-lg max-w-xl mx-auto">
            Każda realizacja to konkretny problem klienta i konkretne rozwiązanie.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((project, i) => (
            <div
              key={i}
              className="fade-in-section group bg-white rounded-3xl border border-green-100 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-green-900/8 transition-all duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b12]/50 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span
                    className={`text-xs font-700 px-3 py-1.5 rounded-full border ${tagColors[project.tag] || "bg-gray-100 text-gray-800 border-gray-200"}`}
                  >
                    {project.tag}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-800 text-[#0d2b12] text-sm mb-2 leading-tight">{project.title}</h3>
                <p className="text-[#4a6350] text-xs leading-relaxed">{project.desc}</p>
                {project.meta && (
                  <p className="text-[#22a832] text-xs font-600 mt-2">📍 {project.meta}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

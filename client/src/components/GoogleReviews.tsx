import { trpc } from "@/lib/trpc";
import { Star, ExternalLink } from "lucide-react";

const staticReviews = [
  { id: 1, author: "Marcin W.", rating: 5, reviewDate: "marzec 2025", text: "Profesjonalna obsługa od A do Z. Przegląd 5-letni zrobiony sprawnie, protokół od razu. Elektryk wyjaśnił wszystko na miejscu, widać że to fachowiec z prawdziwego zdarzenia.", service: "Przegląd 5-letni" },
  { id: 2, author: "Katarzyna R.", rating: 5, reviewDate: "styczeń 2025", text: "Montaż fotowoltaiki 8 kWp. Ekipa przyjechała punktualnie, praca skończona w dwa dni. Falownik Fronius skonfigurowany idealnie, mam pełen monitoring na telefonie. Polecam bez zastrzeżeń.", service: "Fotowoltaika PV" },
  { id: 3, author: "Tomasz B.", rating: 5, reviewDate: "listopad 2024", text: "Miałem problem z wyrzucaniem bezpieczników przy indukcji. Diagnoza termowizyjna w 20 minut wykryła przegrzaną skrzynkę. Wymiana rozdzielnicy zrobiona bez zbędnego kucia. Super robota.", service: "Modernizacja rozdzielnicy" },
  { id: 4, author: "Anna K.", rating: 5, reviewDate: "wrzesień 2024", text: "Przejęli opiekę nad moją osieroconą instalacją PV po bankructwie poprzedniej firmy. Audyt, konfiguracja i monitoring — wszystko w porządku. Nareszcie wiem co robi mój system.", service: "Audyt PV" },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < count ? "text-[#f5a623] fill-[#f5a623]" : "text-gray-200 fill-gray-200"}
        />
      ))}
    </div>
  );
}

export default function GoogleReviews() {
  const { data: dbReviews } = trpc.reviews.list.useQuery();
  const reviews = dbReviews && dbReviews.length > 0 ? dbReviews : staticReviews;
  return (
    <section id="opinie" className="py-24 bg-[#0d2b12]">
      <div className="container">
        <div className="text-center mb-14 fade-in-section">
          <span className="section-label" style={{ color: "#4ade80", borderColor: "#22a832" }}>
            Opinie klientów
          </span>
          <h2 className="text-4xl md:text-5xl font-900 text-white mt-3 mb-4 tracking-tight">
            Co mówią nasi klienci
          </h2>
          {/* Aggregate rating */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={20} className="text-[#f5a623] fill-[#f5a623]" />
              ))}
            </div>
            <span className="text-white font-700 text-lg">5.0</span>
            <span className="text-white/50 text-sm">· Google Maps</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 fade-in-section">
          {reviews.map((r, i) => (
            <div
              key={r.id ?? i}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col gap-3 hover:bg-white/8 transition-colors"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <Stars count={r.rating} />
              <p className="text-white/80 text-sm leading-relaxed flex-1">"{r.text}"</p>
              <div>
                <div className="text-white font-700 text-sm">{r.author}</div>
                <div className="text-white/40 text-xs mt-0.5">
                  {r.service} · {r.reviewDate}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://g.page/r/1l3-elektro-expert/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-600 text-sm px-6 py-3 rounded-xl transition-all duration-200"
          >
            <ExternalLink size={15} />
            Zostaw opinię na Google
          </a>
        </div>
      </div>
    </section>
  );
}

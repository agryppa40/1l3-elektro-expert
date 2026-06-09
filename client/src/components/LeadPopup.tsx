import { useState, useEffect, useRef } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mojrendk";
const POPUP_DELAY_MS = 25000; // show after 25s on page
const STORAGE_KEY = "1l3_popup_dismissed";

export default function LeadPopup() {
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Don't show if already dismissed in this session
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    // Exit-intent: mouse leaves viewport upward
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !sessionStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
        sessionStorage.setItem(STORAGE_KEY, "1");
      }
    };

    // Fallback: show after 25 seconds
    timerRef.current = setTimeout(() => {
      if (!sessionStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
        sessionStorage.setItem(STORAGE_KEY, "1");
      }
    }, POPUP_DELAY_MS);

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleClose = () => {
    setVisible(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    setLoading(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: "Nowy lead — popup strony 1L3",
          telefon: phone,
          usługa: service || "Nie podano",
          źródło: "Popup — bezpłatna wycena",
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      // silently fail — popup shouldn't block UX
    } finally {
      setLoading(false);
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-[fadeInUp_0.35s_ease]">
        {/* Green header bar */}
        <div className="bg-gradient-to-r from-[#0d2b12] to-[#22a832] px-6 pt-6 pb-8 text-white relative">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors text-2xl leading-none"
            aria-label="Zamknij"
          >
            ×
          </button>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-white/20 text-white text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
              Bezpłatnie
            </span>
          </div>
          <h2 className="text-2xl font-black leading-tight">
            Zostaw numer —<br />
            <span className="text-[#a3f0a3]">oddzwonimy w 24h</span>
          </h2>
          <p className="text-white/80 text-sm mt-2">
            Bezpłatna wycena bez zobowiązań. Wrocław i okolice.
          </p>
        </div>

        {/* Decorative wave */}
        <div className="h-4 bg-gradient-to-r from-[#0d2b12] to-[#22a832] relative -mt-1">
          <svg viewBox="0 0 400 16" className="absolute bottom-0 w-full" preserveAspectRatio="none">
            <path d="M0,16 C100,0 300,0 400,16 Z" fill="white" />
          </svg>
        </div>

        <div className="px-6 pb-6 pt-2">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#22a832]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-[#0d2b12] mb-2">Dziękujemy!</h3>
              <p className="text-[#4a6350]">Oddzwonimy na podany numer w ciągu 24 godzin.</p>
              <button
                onClick={handleClose}
                className="mt-4 text-sm text-[#22a832] font-semibold hover:underline"
              >
                Zamknij
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-[#0d2b12] mb-1">
                  Numer telefonu *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+48 600 000 000"
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-[#0d2b12] focus:outline-none focus:border-[#22a832] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0d2b12] mb-1">
                  Czego potrzebujesz? (opcjonalnie)
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-[#0d2b12] focus:outline-none focus:border-[#22a832] transition-colors bg-white"
                >
                  <option value="">Wybierz usługę...</option>
                  <option value="Pomiary i przeglądy">Pomiary i przeglądy elektryczne</option>
                  <option value="Przegląd 5-letni">Przegląd 5-letni instalacji</option>
                  <option value="Odbiór instalacji">Odbiór nowej instalacji</option>
                  <option value="Modernizacja">Modernizacja rozdzielnicy</option>
                  <option value="Nowa instalacja">Nowa instalacja elektryczna</option>
                  <option value="Fotowoltaika">Fotowoltaika / OZE</option>
                  <option value="Naprawa awaria">Naprawa / usunięcie awarii</option>
                  <option value="Inne">Inne</option>
                </select>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#22a832] hover:bg-[#1a8a28] text-white font-black py-4 rounded-xl transition-colors disabled:opacity-60 text-lg"
              >
                {loading ? "Wysyłanie..." : "Zadzwoń do mnie — bezpłatnie"}
              </button>
              <p className="text-xs text-gray-400 text-center">
                Nie spam. Tylko jeden kontakt w sprawie wyceny.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

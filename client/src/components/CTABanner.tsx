/**
 * Design: Bold Technical Craftsman
 * - Full-width dark green banner
 * - Large headline + CTA buttons
 * - banerku.png as background
 */
import { ArrowRight, Phone } from "lucide-react";

export default function CTABanner() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="relative py-20 overflow-hidden"
      style={{
        backgroundImage: `url('/images/banerku.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d2b12]/95 via-[#0d2b12]/85 to-[#0d2b12]/70" />
      <div className="relative z-10 container text-center">
        <h2 className="text-4xl md:text-5xl font-900 text-white tracking-tight mb-4">
          Masz pytanie? Potrzebujesz wyceny?
        </h2>
        <p className="text-white/75 text-lg mb-10 max-w-lg mx-auto">
          Działamy we Wrocławiu i okolicach. Odpowiadamy tego samego dnia roboczego.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => scrollTo("#kontakt")}
            className="flex items-center gap-2.5 bg-[#22a832] hover:bg-[#2ecc40] text-white font-700 text-base px-8 py-4 rounded-2xl transition-all duration-200 shadow-2xl shadow-green-900/30 hover:-translate-y-1"
          >
            Zamów bezpłatny audyt
            <ArrowRight size={18} />
          </button>
          <a
            href="tel:+48600111193"
            className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-600 text-base px-8 py-4 rounded-2xl border border-white/25 transition-all duration-200 hover:-translate-y-1"
          >
            <Phone size={18} />
            Zadzwoń teraz
          </a>
        </div>
      </div>
    </div>
  );
}

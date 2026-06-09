/**
 * Design: Bold Technical Craftsman
 * - Dark background navbar that transitions to white on scroll
 * - Logo + nav links + CTA button
 * - Mobile hamburger menu
 * - Outfit font, green accent colors
 */
import { useState, useEffect } from "react";
import { Menu, X, Phone, Zap, ChevronDown } from "lucide-react";

function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!visible) return null;
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-green-100 shadow-2xl px-4 py-3 flex gap-3">
      <a
        href="tel:+48600111193"
        className="flex-1 flex items-center justify-center gap-2 bg-[#0d2b12] text-white font-700 text-sm py-3 rounded-xl"
      >
        <Phone size={16} />
        Zadzwoń
      </a>
      <a
        href="#kontakt"
        onClick={(e) => { e.preventDefault(); document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" }); }}
        className="flex-1 flex items-center justify-center gap-2 bg-[#22a832] text-white font-700 text-sm py-3 rounded-xl"
      >
        <Zap size={16} />
        Bezpłatna wycena
      </a>
    </div>
  );
}

const serviceLinks = [
  { label: "Pomiary i Protokoły SEP", href: "/przeglad-5-letni" },
  { label: "Nowa instalacja elektryczna", href: "/instalacja-elektryczna-wroclaw" },
  { label: "Modernizacja instalacji", href: "/modernizacja-instalacji-elektrycznej-wroclaw" },
  { label: "Diagnostyka termowizyjna", href: "/diagnostyka-elektryczna-wroclaw" },
  { label: "Fotowoltaika (PV)", href: "/fotowoltaika-wroclaw" },
  { label: "Magazyny energii", href: "/magazyn-energii-wroclaw" },
];

const navLinks = [
  { label: "Usługi", href: "#uslugi", dropdown: true },
  { label: "System Energetyczny", href: "#system-energetyczny" },
  { label: "Sprzęt", href: "#sprzet" },
  { label: "Realizacje", href: "#realizacje" },
  { label: "O nas", href: "#o-nas" },
  { label: "Kontakt", href: "#kontakt" },
];

export { StickyMobileCTA };

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-black/5 border-b border-green-100"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
            className="flex items-center gap-2.5 flex-shrink-0"
          >
            <img
              src="/images/Logo1l3bt.png"
              alt="1L3 Elektro-Expert"
              className="h-10 w-auto"
            />
            <div className="hidden sm:block">
              <span
                className={`font-black text-lg leading-none tracking-tight transition-colors ${
                  scrolled ? "text-[#0d2b12]" : "text-white"
                }`}
              >
                1L3{" "}
                <span className="text-[#22a832]">Elektro-Expert</span>
              </span>
              <div
                className={`text-[10px] font-semibold tracking-widest uppercase transition-colors ${
                  scrolled ? "text-[#4a6350]" : "text-white/70"
                }`}
              >
                Wrocław i okolice
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              link.dropdown ? (
                <div key={link.href} className="relative group">
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-500 rounded-lg transition-all duration-200 hover:bg-[#22a832]/10 hover:text-[#22a832] ${
                      scrolled ? "text-[#1a2e1e]" : "text-white/90 hover:text-white"
                    }`}
                  >
                    {link.label}
                    <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                  </button>
                  {/* Dropdown */}
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-green-100 rounded-2xl shadow-xl shadow-black/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-2">
                    {serviceLinks.map((s) => (
                      <a
                        key={s.href}
                        href={s.href}
                        className="flex items-center gap-2 px-4 py-2.5 text-sm text-[#1a2e1e] hover:bg-green-50 hover:text-[#22a832] transition-colors font-500"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#22a832] flex-shrink-0" />
                        {s.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`px-3 py-2 text-sm font-500 rounded-lg transition-all duration-200 hover:bg-[#22a832]/10 hover:text-[#22a832] ${
                    scrolled ? "text-[#1a2e1e]" : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              )
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+48600111193"
              className={`hidden md:flex items-center gap-2 text-sm font-semibold transition-colors ${
                scrolled ? "text-[#1a2e1e] hover:text-[#22a832]" : "text-white/90 hover:text-white"
              }`}
            >
              <Phone size={15} />
              <span>Zadzwoń</span>
            </a>
            <a
              href="#kontakt"
              onClick={(e) => { e.preventDefault(); handleNavClick("#kontakt"); }}
              className="flex items-center gap-2 bg-[#22a832] hover:bg-[#187a25] text-white text-sm font-700 px-4 py-2.5 rounded-xl transition-all duration-200 shadow-lg shadow-green-900/20 hover:shadow-green-900/30 hover:-translate-y-0.5"
            >
              <Zap size={14} />
              <span>Bezpłatna wycena</span>
            </a>
            <button
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled ? "text-[#1a2e1e] hover:bg-gray-100" : "text-white hover:bg-white/10"
              }`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-green-100 shadow-xl">
          <div className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              link.dropdown ? (
                <div key={link.href}>
                  <div className="px-4 py-2 text-xs font-700 text-[#8fa894] uppercase tracking-widest">Usługi</div>
                  {serviceLinks.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-2 px-6 py-2.5 text-sm font-500 text-[#1a2e1e] rounded-xl hover:bg-green-50 hover:text-[#22a832] transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#22a832]" />
                      {s.label}
                    </a>
                  ))}
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="px-4 py-3 text-sm font-600 text-[#1a2e1e] rounded-xl hover:bg-green-50 hover:text-[#22a832] transition-colors"
                >
                  {link.label}
                </a>
              )
            ))}
            <div className="pt-2 border-t border-green-100 mt-2">
              <a
                href="tel:+48600111193"
                className="flex items-center gap-2 px-4 py-3 text-sm font-600 text-[#22a832]"
              >
                <Phone size={15} />
                +48 600 111 193
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

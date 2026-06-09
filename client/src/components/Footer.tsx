/**
 * Design: Bold Technical Craftsman
 * - Dark footer with logo, links, contact info
 * - Green accent on logo text
 */

const footerLinks = {
  uslugi: [
    { label: "Pomiary i Protokoły", href: "#uslugi" },
    { label: "System energetyczny", href: "#system-energetyczny" },
    { label: "Sprzęt OZE", href: "#sprzet" },
    { label: "Fotowoltaika (PV)", href: "#uslugi" },
    { label: "Serwis PV", href: "#osierocone" },
    { label: "Magazyny Energii", href: "#uslugi" },
    { label: "Modernizacje", href: "#uslugi" },
    { label: "Diagnostyka", href: "#uslugi" },
    { label: "Osierocone PV", href: "#osierocone" },
  ],
  firma: [
    { label: "O nas", href: "#o-nas" },
    { label: "Jak działamy", href: "#jak-dzialamy" },
    { label: "Realizacje", href: "#realizacje" },
    { label: "Opinie klientów", href: "#opinie" },
    { label: "FAQ", href: "#faq" },
    { label: "Kontakt", href: "#kontakt" },
    { label: "Bezpłatna wycena", href: "#kontakt" },
  ],
};

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0a1f0d] text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/images/Logo1l3bt.png"
                alt="1L3 Logo"
                className="h-10 w-auto brightness-0 invert"
              />
              <span className="font-900 text-lg">
                <span className="text-[#22a832]">1L3</span> Elektro-Expert
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Kompleksowe usługi elektryczne i fotowoltaiczne we Wrocławiu i okolicach. Uprawnienia SEP, legalna dokumentacja, jeden wykonawca od A do Z.
            </p>
            <div className="mt-6 space-y-2">
              <a href="tel:+48600111193" className="flex items-center gap-2 text-white/60 hover:text-[#4ade80] text-sm transition-colors">
                📞 +48 600 111 193
              </a>
              <a href="mailto:biuro@1l3.pl" className="flex items-center gap-2 text-white/60 hover:text-[#4ade80] text-sm transition-colors">
                ✉️ biuro@1l3.pl
              </a>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                📍 Cynamonowa 17/9a, 51-180 Wrocław
              </div>
              <div className="flex items-center gap-2 text-white/40 text-xs mt-1">
                1L3 P S A &nbsp;|&nbsp; NIP: 8952280850
              </div>
            </div>
          </div>

          {/* Usługi */}
          <div>
            <h4 className="text-xs font-700 uppercase tracking-widest text-white/40 mb-5">Usługi</h4>
            <ul className="space-y-2.5">
              {footerLinks.uslugi.map((link) => (
                <li key={link.href + link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="text-sm text-white/60 hover:text-[#4ade80] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Firma */}
          <div>
            <h4 className="text-xs font-700 uppercase tracking-widest text-white/40 mb-5">Firma</h4>
            <ul className="space-y-2.5">
              {footerLinks.firma.map((link) => (
                <li key={link.href + link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="text-sm text-white/60 hover:text-[#4ade80] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/35 text-xs">
            © 2026 1L3 P S A (1L3 Elektro-Expert). NIP: 8952280850. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex gap-5">
            <a href="/polityka-prywatnosci" className="text-white/35 hover:text-[#4ade80] text-xs transition-colors">
              Polityka prywatności i RODO
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

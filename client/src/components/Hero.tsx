/**
 * Design: Bold Technical Craftsman
 * - Full-screen hero with main banner image — LIGHTER overlay for visibility
 * - Focus on: pomiary, przeglądy, odbiory, 5-letnie, modernizacje, naprawy, nowe instalacje
 * - Strong contact CTA (phone + email) — quick leads
 * - Services bar below hero with icon grid
 * - Trust bar with key credentials
 */
import { Phone, Mail, CheckCircle, Shield, Award, MapPin, Clock } from "lucide-react";

const coreServices = [
  "Pomiary elektryczne i protokoły SEP",
  "Przeglądy 5-letnie instalacji",
  "Odbiory nowych instalacji",
  "Modernizacje i rozdzielnice",
  "Naprawy i usuwanie usterek",
  "Nowe instalacje elektryczne",
  "Projektowanie i montaż instalacji OZE",
];

const serviceItems = [
  {
    icon: "/images/ikonapomiary.png",
    label: "Pomiary",
    sub: "Protokoły SEP",
    href: "#uslugi",
  },
  {
    icon: "/images/ikonapomiary.png",
    label: "Przeglądy 5-letnie",
    sub: "Norma PN-HD 60364",
    href: "#uslugi",
  },
  {
    icon: "/images/ikonapomiary.png",
    label: "Odbiory",
    sub: "Nowe instalacje",
    href: "#uslugi",
  },
  {
    icon: "/images/Ikonamontaz.png",
    label: "Modernizacje",
    sub: "Rozdzielnice i obwody",
    href: "#uslugi",
  },
  {
    icon: "/images/Ikonamontaz.png",
    label: "Naprawy",
    sub: "Usterki i awarie",
    href: "#uslugi",
  },
  {
    icon: "/images/Ikonamontaz.png",
    label: "Nowe instalacje",
    sub: "Od projektu po odbiór",
    href: "#uslugi",
  },
];

const trustItems = [
  { icon: <Shield size={16} />, text: "Uprawnienia SEP E+D" },
  { icon: <Award size={16} />, text: "Norma PN-HD 60364" },
  { icon: <MapPin size={16} />, text: "Wrocław i okolice (50 km)" },
  { icon: <Clock size={16} />, text: "Odpowiedź tego samego dnia" },
];

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative">
      {/* Hero Image */}
      <div className="relative min-h-[92vh] md:min-h-screen flex items-end overflow-hidden">
        <img
          src="/images/gragikaglowannowa.png"
          alt="1L3 Elektro-Expert – Elektryka i Fotowoltaika"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Minimal overlay — only bottom strip for text readability, image maximally bright */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f0d]/88 via-[#0a1f0d]/15 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f0d]/55 via-transparent to-transparent" />

        {/* Hero Content */}
        <div className="relative z-10 w-full pb-16 pt-32">
          <div className="container">
            <div className="max-w-2xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#22a832]/25 backdrop-blur-sm border border-[#22a832]/50 text-[#6ee87a] text-xs font-700 uppercase tracking-widest px-4 py-2 rounded-full mb-5">
                <span className="w-2 h-2 bg-[#22a832] rounded-full animate-pulse" />
                Elektryk Wrocław — Uprawnienia SEP E+D
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-900 text-white leading-[1.05] tracking-tight mb-4">
                Pomiary Elektryczne SEP Wrocław –{" "}
                <span className="text-[#4ade80]">Przeglądy Fotowoltaiki</span>
              </h1>

              {/* Sub-headline */}
              <p className="text-base md:text-lg text-white/85 font-400 leading-relaxed mb-5 max-w-xl" style={{fontSize: '24px'}}>
                Sprawdź czy Twoja instalacja  działa w pełną wydajnością.Profilaktyka to gwarancja niezawodności i bezpieczeństwa
              </p>

              {/* Service checklist */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 mb-7">
                {coreServices.map((s, i) => (
                  <li key={i} className="flex items-center gap-2 text-white/90 text-sm font-500">
                    <CheckCircle size={15} className="text-[#4ade80] flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>

              {/* CTA — phone + email prominent */}
              <div className="flex flex-wrap gap-3 mb-4">
                <a
                  href="tel:+48600111193"
                  className="flex items-center gap-2.5 bg-[#22a832] hover:bg-[#1a9228] text-white font-800 text-base px-6 py-4 rounded-2xl transition-all duration-200 shadow-2xl shadow-green-900/40 hover:-translate-y-1"
                >
                  <Phone size={18} />
                  Zadzwoń teraz
                </a>
                <a
                  href="mailto:biuro@1l3.pl"
                  className="flex items-center gap-2.5 bg-white/15 backdrop-blur-sm hover:bg-white/25 text-white font-700 text-base px-6 py-4 rounded-2xl border border-white/30 transition-all duration-200 hover:-translate-y-1"
                >
                  <Mail size={18} />
                  Napisz e-mail
                </a>
                <button
                  onClick={() => scrollTo("#kontakt")}
                  className="flex items-center gap-2 text-white/75 hover:text-white text-sm font-600 px-4 py-4 underline underline-offset-4 transition-colors"
                >
                  lub wypełnij formularz
                </button>
              </div>

              {/* Contact info visible */}
              <div className="flex flex-wrap gap-5 text-white/60 text-sm">
                <span className="font-600 text-white/80">+48 600 111 193</span>
                <span className="font-600 text-white/80">biuro@1l3.pl</span>
                <span>Pon–Pt 7:00–18:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Bar */}
      <div className="bg-[#0d2b12] border-t-4 border-[#22a832] overflow-x-auto">
        <div className="container">
          <div className="flex items-stretch min-w-max lg:min-w-0 lg:justify-between">
            {serviceItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                className="flex flex-col items-center gap-2 px-5 py-4 border-r border-[#22a832]/20 last:border-r-0 hover:bg-[#22a832]/10 transition-colors group flex-1 min-w-[120px]"
              >
                <div className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0 bg-[#22a832]/10 p-1.5">
                  <img
                    src={item.icon}
                    alt={item.label}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-center">
                  <div className="text-white/90 text-[11px] font-700 uppercase tracking-wide leading-tight group-hover:text-[#4ade80] transition-colors">
                    {item.label}
                  </div>
                  <div className="text-white/40 text-[9px] mt-0.5">{item.sub}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="bg-[#f0faf2] border-b border-green-200">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 py-4">
            {trustItems.map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 text-[#187a25]">
                <div className="w-7 h-7 bg-[#22a832]/15 rounded-lg flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <span className="text-sm font-600 whitespace-nowrap">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Local SEO area tags */}
{/* Local SEO area tags */}
{/* Local SEO area tags */}
<div className="bg-white border-b border-green-100 py-3 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            <span className="text-[#8fa894] font-600 uppercase tracking-widest text-[9px] w-full text-center mb-0.5">Obszar działania</span>
            {["Wrocław","Krzyki","Fabryczna","Psie Pole","Śródmieście","Oława","Środa Śląska","Jelcz-Laskowice","Długołęka","Sobótka"].map((area) => (
              <span key={area} className="bg-green-50 border border-green-100 text-[#187a25] px-2 py-0.5 rounded-full font-500 text-[11px] whitespace-nowrap">
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
   

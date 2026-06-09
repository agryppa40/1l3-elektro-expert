/**
 * Design: Bold Technical Craftsman
 * - Two-column: contact info left, form right
 * - Contact cards with icons
 * - Formspree integration: submissions sent to biuro@1l3.pl
 */
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useState } from "react";

const contactItems = [
  {
    icon: <Phone size={18} />,
    label: "Telefon",
    value: "+48 600 111 193",
    sub: "Odbiera elektryk, nie infolinia",
    href: "tel:+48600111193",
  },
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "biuro@1l3.pl",
    sub: "Odpowiadamy w ciągu 24h",
    href: "mailto:biuro@1l3.pl",
  },
  {
    icon: <MapPin size={18} />,
    label: "Obszar działania",
    value: "Wrocław i okolice",
    sub: "Zasięg do 50 km od centrum Wrocławia",
    href: null,
  },
  {
    icon: <Clock size={18} />,
    label: "Godziny pracy",
    value: "Pon–Pt: 7:00–18:00",
    sub: "Sobota po wcześniejszym uzgodnieniu",
    href: null,
  },
];

const serviceOptions = [
  "Pomiary elektryczne / Przegląd 5-letni",
  "Protokół odbiorczy / Odbiór instalacji",
  "Diagnostyka i usuwanie usterek",
  "Instalacja fotowoltaiczna (PV)",
  "Magazyn energii / Bank energii",
  "Przegląd instalacji fotowoltaicznej",
  "Audyt osieroconej instalacji PV",
  "Serwis / przejęcie opieki nad instalacją PV",
  "Inne",
];

// Formspree endpoint — submissions go to biuro@1l3.pl
// First submission triggers a verification email to biuro@1l3.pl — click the link to activate
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mojrendk";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
    gdpr: false,
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          service: formData.service,
          message: formData.message || "Brak dodatkowego opisu.",
          _subject: `Zapytanie ze strony 1L3: ${formData.service}`,
          _replyto: "biuro@1l3.pl",
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", phone: "", service: "", message: "", gdpr: false });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="kontakt" className="py-24 bg-[#f8fcf9]">
      <div className="container">
        <div className="text-center mb-16 fade-in-section">
          <span className="section-label">Kontakt</span>
          <h2 className="text-4xl md:text-5xl font-900 text-[#0d2b12] mt-3 mb-4 tracking-tight">
            Porozmawiajmy o Twoim projekcie
          </h2>
          <p className="text-[#4a6350] text-lg max-w-xl mx-auto">
            Wypełnij formularz lub zadzwoń. Odpowiadamy tego samego dnia roboczego.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="fade-in-section">
            <h3 className="text-2xl font-800 text-[#0d2b12] mb-2 leading-tight">
              Działamy we Wrocławiu
              <br />i okolicach (do 50 km)
            </h3>
            <p className="text-[#4a6350] mb-6 leading-relaxed">
              Masz awarię? Potrzebujesz przeglądu 5-letniego? Planujesz instalację PV? Skontaktuj się — wycena jest bezpłatna.
            </p>

            {/* Structured NAP for local SEO */}
            <address
              className="not-italic text-sm text-[#4a6350] mb-6 bg-[#f0faf2] border border-green-100 rounded-2xl px-5 py-4 flex flex-col gap-1"
              itemScope
              itemType="https://schema.org/ElectricalContractor"
            >
              <span itemProp="name" className="font-700 text-[#0d2b12]">1L3 Elektro-Expert</span>
              <span itemProp="streetAddress">Cynamonowa 17/9a</span>
              <span><span itemProp="postalCode">51-180</span> <span itemProp="addressLocality">Wrocław</span></span>
              <a href="tel:+48600111193" itemProp="telephone" className="text-[#22a832] font-700 hover:underline">+48 600 111 193</a>
              <a href="mailto:biuro@1l3.pl" itemProp="email" className="text-[#22a832] hover:underline">biuro@1l3.pl</a>
            </address>

            <div className="flex flex-col gap-4">
              {contactItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white border border-green-100 rounded-2xl p-5 hover:border-[#22a832]/40 hover:shadow-md hover:shadow-green-900/5 transition-all duration-200"
                >
                  <div className="w-11 h-11 bg-[#22a832]/10 rounded-xl flex items-center justify-center text-[#22a832] flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] font-700 text-[#8fa894] uppercase tracking-widest mb-0.5">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-700 text-[#0d2b12] hover:text-[#22a832] transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="font-700 text-[#0d2b12]">{item.value}</div>
                    )}
                    <div className="text-xs text-[#4a6350] mt-0.5">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="fade-in-section">
            <div className="bg-white border border-green-100 rounded-3xl p-8 shadow-xl shadow-green-900/5">
              <h3 className="text-xl font-800 text-[#0d2b12] mb-6">
                Zamów bezpłatną wycenę
              </h3>

              {/* Success state */}
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <div className="w-16 h-16 bg-[#f0faf2] rounded-full flex items-center justify-center">
                    <CheckCircle2 size={36} className="text-[#22a832]" />
                  </div>
                  <h4 className="text-xl font-800 text-[#0d2b12]">Zapytanie wysłane!</h4>
                  <p className="text-[#4a6350] text-sm max-w-xs leading-relaxed">
                    Dziękujemy za kontakt. Odpiszemy na <strong>biuro@1l3.pl</strong> lub zadzwonimy tego samego dnia roboczego.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-2 text-sm text-[#22a832] font-700 hover:underline"
                  >
                    Wyślij kolejne zapytanie
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-700 text-[#4a6350] uppercase tracking-widest mb-2">
                        Imię i nazwisko
                      </label>
                      <input
                        type="text"
                        placeholder="Jan Kowalski"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#f8fcf9] border border-green-100 text-[#0d2b12] text-sm px-4 py-3 rounded-xl outline-none focus:border-[#22a832] focus:ring-2 focus:ring-[#22a832]/10 transition-all placeholder:text-[#8fa894]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-700 text-[#4a6350] uppercase tracking-widest mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        placeholder="+48 XXX XXX XXX"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#f8fcf9] border border-green-100 text-[#0d2b12] text-sm px-4 py-3 rounded-xl outline-none focus:border-[#22a832] focus:ring-2 focus:ring-[#22a832]/10 transition-all placeholder:text-[#8fa894]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-700 text-[#4a6350] uppercase tracking-widest mb-2">
                      Rodzaj usługi
                    </label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#f8fcf9] border border-green-100 text-[#0d2b12] text-sm px-4 py-3 rounded-xl outline-none focus:border-[#22a832] focus:ring-2 focus:ring-[#22a832]/10 transition-all appearance-none"
                    >
                      <option value="" disabled>Wybierz usługę...</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-700 text-[#4a6350] uppercase tracking-widest mb-2">
                      Krótki opis (opcjonalnie)
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Np. Dom jednorodzinny, 150 m², stara instalacja z lat 90., potrzebuję przeglądu przed sprzedażą..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#f8fcf9] border border-green-100 text-[#0d2b12] text-sm px-4 py-3 rounded-xl outline-none focus:border-[#22a832] focus:ring-2 focus:ring-[#22a832]/10 transition-all resize-none placeholder:text-[#8fa894]"
                    />
                  </div>

                  {/* Error message */}
                  {status === "error" && (
                    <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-700">
                      <AlertCircle size={16} className="flex-shrink-0" />
                      Wystąpił błąd. Spróbuj ponownie lub zadzwoń: +48 600 111 193
                    </div>
                  )}

                  {/* GDPR Consent */}
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative mt-0.5 flex-shrink-0">
                      <input
                        type="checkbox"
                        required
                        checked={formData.gdpr}
                        onChange={(e) => setFormData({ ...formData, gdpr: e.target.checked })}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                        formData.gdpr
                          ? "bg-[#22a832] border-[#22a832]"
                          : "bg-white border-green-200 group-hover:border-[#22a832]/50"
                      }`}>
                        {formData.gdpr && (
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-xs text-[#4a6350] leading-relaxed">
                      Wyrażam zgodę na przetwarzanie moich danych osobowych przez 1L3 Elektro-Expert w celu odpowiedzi na zapytanie ofertowe, zgodnie z{" "}
                      <a href="/polityka-prywatnosci" target="_blank" className="text-[#22a832] hover:underline font-700">
                        Polityką Prywatności i RODO
                      </a>.
                      {" "}Zgodę można cofnąć w dowolnym momencie.
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={status === "sending" || !formData.gdpr}
                    className="w-full flex items-center justify-center gap-2.5 bg-[#22a832] hover:bg-[#187a25] disabled:opacity-70 disabled:cursor-not-allowed text-white font-700 text-base py-4 rounded-2xl transition-all duration-200 shadow-lg shadow-green-900/20 hover:shadow-green-900/30 hover:-translate-y-0.5"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Wysyłanie...
                      </>
                    ) : (
                      <>
                        Wyślij zapytanie
                        <Send size={18} />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-[#8fa894]">
                    Zgłoszenie trafia bezpośrednio na biuro@1l3.pl
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Google Maps embed */}
        <div className="mt-14 fade-in-section">
          <div className="rounded-3xl overflow-hidden border border-green-100 shadow-lg" style={{ height: "360px" }}>
            <iframe
              title="Lokalizacja 1L3 Elektro-Expert Wrocław"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.3!2d17.0385!3d51.1079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fe9c2d5a1a69d%3A0x0!2sCynamonowa+17%2F9a%2C+51-180+Wroc%C5%82aw!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl"
              width="100%"
              height="360"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="text-center text-xs text-[#8fa894] mt-3">
            📍 Cynamonowa 17/9a, 51-180 Wrocław · Zasięg działania: Wrocław i okolice do 50 km (Krzyki, Fabryczna, Psie Pole, Śródmieście, Oława, Środa Śląska i więcej)
          </p>
        </div>
      </div>
    </section>
  );
}

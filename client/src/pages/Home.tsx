/**
 * Design: Bold Technical Craftsman
 * Main page assembling all sections in order.
 * Font: Outfit (800/900 headings, 400/500 body)
 * Colors: Deep green #0d2b12 (authority), #22a832 (action), white backgrounds
 */
import Navbar, { StickyMobileCTA } from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import SystemSection from "@/components/SystemSection";
import ServicesDetail from "@/components/ServicesDetail";
import EquipmentSection from "@/components/EquipmentSection";
import OrphanedPV from "@/components/OrphanedPV";
import WhyUs from "@/components/WhyUs";
import ProcessSection from "@/components/ProcessSection";
import RealizationsSection from "@/components/RealizationsSection";
import CTABanner from "@/components/CTABanner";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import GoogleReviews from "@/components/GoogleReviews";
import ScrollRevealInit from "@/components/ScrollRevealInit";
import LeadPopup from "@/components/LeadPopup";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Outfit', sans-serif" }}>
      <ScrollRevealInit />
      <LeadPopup />
      <StickyMobileCTA />
      <Navbar />
      <Hero />
      <ServicesOverview />
      <SystemSection />
      <ServicesDetail />
      <EquipmentSection />
      <OrphanedPV />
      <WhyUs />
      <ProcessSection />
      <RealizationsSection />
      <CTABanner />
      <AboutSection />
      <GoogleReviews />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

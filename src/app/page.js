"use client";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import ServicesSection from "./components/ServicesSection";
import ProcessSection from "./components/ProcessSection";
import PortfolioSection from "./components/PortfolioSection";
import ResultsSection from "./components/ResultsSection";
import FaqSection from "./components/FaqSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  const scrollToSection = (id) => {
    if (typeof document !== "undefined") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#030303] text-[#f0f0f0] font-sans antialiased selection:bg-[#ff4d28] selection:text-white">
      <Navbar scrollToSection={scrollToSection} />
      <main>
        <HeroSection scrollToSection={scrollToSection} />
        <ProblemSection />
        <PortfolioSection />
        <ServicesSection scrollToSection={scrollToSection} />
        <ProcessSection />
        <ResultsSection />
        <FaqSection scrollToSection={scrollToSection} />
        <ContactSection />
      </main>
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

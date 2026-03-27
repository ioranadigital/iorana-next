"use client";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import USPSection from "@/components/USPSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import CasesSection from "@/components/CasesSection";
import CertificationsSection from "@/components/CertificationsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer"; // Importamos el Footer
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Iorana Digital | Agencia de Marketing Digital en Asturias";
    // ... (Tu lógica de Meta Tags se mantiene igual)
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#0a2b49] overflow-x-hidden">
      <Navbar />
      
      <main className="w-full flex flex-col m-0 p-0">
        <HeroSection />
        
        {/* Esta sección es la que debe quedar oculta bajo el pliegue inicial */}
        <USPSection /> 
        
        <ServicesSection />
        <AboutSection />
        <CasesSection />
        <CertificationsSection />
        <FAQSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index; 

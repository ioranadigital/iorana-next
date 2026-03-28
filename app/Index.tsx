// app/Index.tsx
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
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Iorana Digital | Agencia de Marketing Digital en Asturias";
  }, []);

  return (
    <>
      <Navbar />
      <main
        style={{ width: "100vw", maxWidth: "100vw", overflowX: "hidden" }}
      >
        <HeroSection />
        <USPSection />
        <ServicesSection />
        <AboutSection />
        <CasesSection />
        <CertificationsSection />
        <FAQSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Index;

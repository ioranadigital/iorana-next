"use client";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import USPSection from "@/components/USPSection";
// ... resto de imports

const Index = () => {
  // ... (useEffect de meta tags se mantiene igual)

  return (
    <div className="w-full min-h-screen bg-[#0a2b49] overflow-x-hidden">
      <Navbar />
      
      {/* El main debe ser w-full y sin márgenes para que el Hero ocupe todo el ancho */}
      <main className="w-full flex flex-col p-0 m-0">
        <HeroSection />
        <USPSection />
        {/* Resto de secciones */}
      </main>
    </div>
  );
};

export default Index;

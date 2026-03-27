"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center bg-[#0a2b49] overflow-hidden pt-20">
      
      {/* Fondo con Blur y Escala para evitar bordes blancos */}
      <div 
        className="absolute inset-0 w-screen left-1/2 -translate-x-1/2 h-full pointer-events-none blur-sm scale-105"
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(10, 43, 73, 0.4), rgba(10, 43, 73, 0.7)), url("/assets/hero-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0
        }}
      />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8">
            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs font-medium text-[#ebf2f7]/80 uppercase tracking-wider">Agencia de Marketing en Asturias</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-black leading-[1.05] mb-8 text-[#ebf2f7]">
            <span className="text-[#ff8c00]">Posiciona tu negocio</span><br />
            donde tus clientes te buscan.
          </h1>

          <p className="text-xl md:text-2xl text-[#ebf2f7]/70 max-w-2xl mb-12 leading-relaxed font-sans">
            Ayudamos a las empresas a multiplicar sus ventas con estrategias SEO basadas en datos y PPC de alto rendimiento.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 items-start">
            <Button className="bg-[#ff8c00] hover:bg-[#e67e00] text-white px-10 py-8 text-xl rounded-2xl font-bold shadow-2xl shadow-orange-500/20 transition-transform hover:scale-105">
              Impulsar mi negocio ahora
            </Button>

            <Button variant="outline" className="border-white/20 text-[#ebf2f7] hover:bg-white/5 px-10 py-8 text-xl rounded-2xl bg-transparent backdrop-blur-sm">
              ¿Cómo está mi sitio web?
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>

          {/* Stats con números en Naranja */}
          <div className="flex flex-wrap gap-12 mt-20 pt-10 border-t border-white/10">
            {[
              { value: "+250%", label: "Tráfico orgánico promedio" },
              { value: "3x", label: "ROI en 6 meses" },
              { value: "50+", label: "SaaS escalados" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-heading font-black text-[#ff8c00]">{stat.value}</div>
                <div className="text-sm text-[#ebf2f7]/50 mt-2 uppercase tracking-widest font-bold font-sans">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

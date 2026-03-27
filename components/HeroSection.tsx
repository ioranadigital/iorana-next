"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center bg-[#0a2b49] overflow-hidden">
      <div 
        className="absolute inset-0 w-screen left-1/2 -translate-x-1/2 h-full pointer-events-none blur-sm scale-105"
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(10, 43, 73, 0.4), rgba(10, 43, 73, 0.7)), url("/assets/hero-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0
        }}
      />

      <div className="container relative z-10 mx-auto px-6 pt-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6 text-[10px] font-bold text-[#ebf2f7]/60 uppercase tracking-widest">
            <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            Agencia de Marketing en Asturias
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black leading-tight mb-6 text-[#ebf2f7]">
            <span className="text-[#ff8c00]">Posiciona tu negocio</span><br />donde te buscan.
          </h1>

          <p className="text-lg md:text-xl text-[#ebf2f7]/70 max-w-2xl mb-10 font-sans">Estrategias SEO basadas en datos y PPC de alto rendimiento.</p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-[#ff8c00] hover:bg-[#e67e00] text-white px-8 py-7 text-lg rounded-xl font-bold transition-transform hover:scale-105">Impulsar mi negocio</Button>
            <Button variant="outline" className="border-white/20 text-[#ebf2f7] px-8 py-7 text-lg rounded-xl bg-transparent">¿Cómo está mi web? <ArrowRight className="ml-2" /></Button>
          </div>

          <div className="flex flex-wrap gap-10 mt-16 pt-8 border-t border-white/10">
            {[
              { value: "+250%", label: "Tráfico orgánico promedio" },
              { value: "3x", label: "ROI en 6 meses" },
              { value: "50+", label: "SaaS escalados" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-heading font-black text-[#ff8c00]">{stat.value}</div>
                <div className="text-[10px] text-[#ebf2f7]/40 uppercase font-bold tracking-widest mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

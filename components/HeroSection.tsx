"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section id="hero" className="w-full pt-32 pb-24 bg-[#0a2b49] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        
        {/* Etiqueta superior */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff8c00]/10 border border-[#ff8c00]/20 mb-6"
        >
          <Star className="h-4 w-4 text-[#ff8c00]" />
          <span className="text-xs font-bold text-[#ebf2f7] uppercase tracking-widest">
            Agencia de Growth Marketing para SaaS
          </span>
        </motion.div>

        {/* TÍTULO PRINCIPAL CON RESPLANDOR */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-heading font-black text-[#ebf2f7] leading-tight tracking-tighter"
        >
          Soluciones digitales para <br />
          <span className="text-[#ff8c00] drop-shadow-[0_0_15px_rgba(255,140,0,0.5)]">
            escalar tu negocio
          </span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto mt-8 text-xl text-[#ebf2f7]/70 leading-relaxed"
        >
          Ayudamos a startups SaaS y empresas tecnológicas a dominar Google, captar leads cualificados y disparar su MRR con estrategias validadas.
        </motion.p>

        {/* BOTÓN PRINCIPAL CON NARANJA EXACTO Y EFECTO GLOW */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/contacto">
            <Button size="lg" className="bg-[#ff8c00] text-white font-bold rounded-full px-10 py-7 text-lg hover:scale-105 transition-all duration-300 shadow-[0_10px_30px_rgba(255,140,0,0.3)] hover:shadow-[0_15px_40px_rgba(255,140,0,0.4)]">
              Quiero Escalar Mi SaaS <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <button className="text-[#ebf2f7]/70 hover:text-white transition-colors p-4 text-sm font-medium">
            Ver Casos de Éxito
          </button>
        </motion.div>

      </div>
      
      {/* Decoración de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-[#ff8c00]/10 blur-[150px] rounded-full -z-10" />
    </section>
  );
};

export default HeroSection;

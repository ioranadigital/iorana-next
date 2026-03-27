"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  features: Array<{ title: string; desc: string }>;
  process: Array<{ title: string; desc: string }>;
  stats: Array<{ label: string; value: string }>;
}

const ServicePageTemplate3 = ({
  title,
  subtitle,
  description,
  benefits,
  features,
  process,
  stats
}: ServicePageProps) => {
  return (
    /* 1. CONTENEDOR PRINCIPAL: Sin Footer interno para evitar duplicados */
    <div className="bg-[#0a2b49] min-h-screen">
      
      {/* HERO SECCIÓN SERVICIO */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <span className="text-orange-500 font-bold tracking-widest uppercase text-sm">
              {subtitle}
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-black text-[#ebf2f7] leading-tight">
              {title}
            </h1>
            <p className="text-lg text-[#ebf2f7]/70 leading-relaxed max-w-xl">
              {description}
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-full text-lg font-bold transition-all shadow-lg shadow-orange-500/20">
              Solicitar Auditoría Gratis
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#08223a] border border-[#ebf2f7]/10 p-8 rounded-3xl shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Star size={120} className="text-orange-500" />
            </div>
            <h3 className="text-xl font-bold text-[#ebf2f7] mb-6">¿Qué incluye?</h3>
            <ul className="space-y-4">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3 text-[#ebf2f7]/80">
                  <CheckCircle2 className="text-orange-500 mt-1 shrink-0" size={20} />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN STATS: Resultados Reales */}
      <section className="py-16 border-y border-[#ebf2f7]/5 bg-[#08223a]/50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-orange-500 mb-2">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-[#ebf2f7]/40 font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN PROCESO: Nuestro Metodo */}
      <section className="py-24 px-4 bg-[#0a2b49]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#ebf2f7]">
              Nuestro <span className="text-orange-500">Proceso</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {process.map((p, i) => (
              <div key={i} className="bg-[#08223a] p-6 rounded-2xl border border-[#ebf2f7]/10 relative group hover:border-orange-500/30 transition-all">
                <span className="text-4xl font-black text-orange-500/20 absolute top-4 right-4 group-hover:text-orange-500/40 transition-colors">
                  {i + 1}
                </span>
                <h4 className="font-bold text-[#ebf2f7] mb-2 pr-8">{p.title}</h4>
                <p className="text-sm text-[#ebf2f7]/50">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPONENTES COMPARTIDOS: Sin duplicar el Footer */}
      <FAQSection />
      <ContactSection />
      
      {/* 🛑 AQUÍ NO VA EL FOOTER. Ya se encarga Page.tsx */}
    </div>
  );
};

export default ServicePageTemplate3;

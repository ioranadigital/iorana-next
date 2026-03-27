"use client";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const cases = [
  {
    company: "StreamFlow",
    industry: "SaaS de Productividad",
    context: "Startup B2B con producto sólido pero sin presencia orgánica. Dependían 100% de paid ads para adquirir clientes.",
    challenge: "CAC elevado ($180) y cero tráfico orgánico. Necesitaban un canal sostenible de adquisición.",
    solution: "Implementamos una estrategia de topic clusters con +60 artículos optimizados, rediseño de la arquitectura web y link building estratégico.",
    result: "+320% Tráfico Orgánico",
    resultSub: "en 5 meses · CAC reducido a $45",
    ctaText: "Ver estrategia SEO para SaaS",
    link: "/casos/streamflow"
  },
  {
    company: "DataPulse",
    industry: "SaaS de Analytics",
    context: "Plataforma de analytics compitiendo contra incumbentes con dominios de alta autoridad.",
    challenge: "Ranking en posiciones 30+ para sus keywords principales. Tasa de conversión orgánica del 0.3%.",
    solution: "Auditoría técnica profunda, optimización de Core Web Vitals, estrategia de contenido comparativo y PPC complementario.",
    result: "+540% Conversiones",
    resultSub: "en 6 meses · 15 keywords en top 3",
    ctaText: "Ver optimización de conversiones",
    link: "/casos/datapulse"
  },
  {
    company: "HireBot",
    industry: "SaaS de HR Tech",
    context: "Herramienta de recruiting IA que necesitaba penetrar un mercado saturado por competidores bien posicionados.",
    challenge: "Sin blog, sin estrategia de contenido y con un sitio web que no cumplía estándares técnicos de Google.",
    solution: "Reconstrucción de arquitectura SEO, creación de hub de contenido educativo y campaña de digital PR.",
    result: "De 0 a 12K visitas/mes",
    resultSub: "en 4 meses · 8x ROI en contenido",
    ctaText: "Ver caso de ROI en contenidos",
    link: "/casos/hirebot"
  },
];

const CasesSection = () => {
  return (
    /* 1. SECCIÓN: w-full y overflow-visible para que las tarjetas no se corten al animar */
    <section id="casos" className="w-full py-24 bg-[#0a2b49] relative overflow-visible">
      
      {/* 2. CONTENEDOR DE CENTRADO: max-w-7xl para alinear con el resto de la web */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-orange-500 tracking-widest uppercase">
            Casos de Éxito
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold mt-4 text-[#ebf2f7] tracking-tight">
            Resultados que hablan <span className="text-orange-500">por sí solos</span>
          </h2>
        </motion.div>

        {/* 3. GRID: gap-8 para dar 'aire' entre tarjetas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 overflow-visible

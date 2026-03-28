"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { HelpCircle, Plus } from "lucide-react";

const faqs = [
  { 
    question: "¿Cuánto tardan en verse los resultados?", 
    answer: "En campañas de PPC (Ads) los resultados son casi inmediatos. Para estrategias de SEO y Contenidos, el impacto real suele consolidarse entre los 3 y 6 meses, dependiendo de la autoridad actual de tu dominio." 
  },
  { 
    question: "¿Tienen un periodo de permanencia mínimo?", 
    answer: "No obligamos a contratos a largo plazo porque confiamos en nuestro trabajo. Sin embargo, recomendamos un mínimo de 3 meses para que las optimizaciones técnicas y de contenido surtan efecto en los algoritmos." 
  },
  { 
    question: "¿Cómo miden el éxito de las campañas?", 
    answer: "Nos alejamos de las 'métricas de vanidad'. Nos enfocamos en KPIs de negocio: incremento de MQLs (Leads Cualificados), reducción del CAC (Coste de Adquisición) y crecimiento del MRR." 
  },
  { 
    question: "¿Trabajan con empresas que no sean SaaS?", 
    answer: "Aunque somos especialistas en software y tecnología B2B, nuestra metodología de Growth es aplicable a cualquier negocio digital con un ticket medio alto que necesite captación recurrente." 
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="w-full py-24 bg-[#0a2b49] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* CABECERA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold text-[#ff8c00] tracking-widest uppercase flex items-center justify-center gap-2">
            <HelpCircle className="h-4 w-4" /> Centro de Ayuda
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold mt-4 text-[#ebf2f7] tracking-tight">
            Preguntas <span className="text-[#ff8c00]">Frecuentes</span>
          </h2>
        </motion.div>

        {/* ACORDEÓN PERSONALIZADO */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem 
              key={i} 
              value={`item-${i}`} 
              className="bg-[#08223a] px-6 py-2 rounded-2xl border border-[#ebf2f7]/5 shadow-xl transition-all hover:border-[#ff8c00]/20 data-[state=open]:border-[#ff8c00]/40"
            >
              <AccordionTrigger className="text-left font-bold text-[#ebf2f7] text-lg py-4 group data-[state=open]:text-[#ff8c00] transition-colors hover:no-underline">
                {faq.question}
                {/* Icono + que gira y cambia a naranja */}
                <Plus className="h-5 w-5 text-[#ebf2f7]/30 group-data-[state=open]:text-[#ff8c00] transition-transform duration-300 group-data-[state=open]:rotate-45" />
              </AccordionTrigger>
              <AccordionContent className="text-[#ebf2f7]/70 text-base leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </div>
    </section>
  );
};

export default FAQSection;
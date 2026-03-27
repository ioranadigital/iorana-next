"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Plus } from "lucide-react";

const faqs = [
  { question: "¿Cuánto tardan en verse los resultados?", answer: "En PPC es inmediato (días); en SEO Técnico/Contenidos suele tardar entre 3 y 6 meses dependiendo de la autoridad de partida y competencia del sector." },
  { question: "¿Tienen permanencia mínima?", answer: "No creemos en atar a nadie. Trabajamos mes a mes, aunque recomendamos compromisos trimestrales para dar tiempo a que las estrategias maduren." },
  { question: "¿Solo trabajan con startups SaaS?", answer: "Es nuestra especialidad, pero también trabajamos con empresas tecnológicas B2B y servicios premium que necesitan leads cualificados." },
  { question: "¿Cómo se comunican con nosotros?", answer: "Tendrás un canal directo en Slack con tu consultor y reportes mensuales detallados en Data Studio enfocados en MRR, MQLs y LTV." },
];

const FAQSection = () => {
  return (
    <section id="faq" className="w-full py-24 bg-[#0a2b49] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Cabecera */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold text-[#ff8c00] tracking-widest uppercase">
            Preguntas Frecuentes
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold mt-4 text-[#ebf2f7] tracking-tight">
            Resolviendo Dudas
          </h2>
        </motion.div>

        {/* ACORDEÓN CON NARANJA EXACTO EN ESTADO ABIERTO */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="bg-[#08223a] p-6 rounded-2xl border border-[#ebf2f7]/5 shadow-xl transition-all hover:border-[#ff8c00]/20 data-[state=open]:border-[#ff8c00]/40">
              <AccordionTrigger className="text-left font-bold text-[#ebf2f7] text-lg py-0 group data-[state=open]:text-[#ff8c00] transition-colors hover:no-underline">
                {faq.question}
                {/* Icono personalizado con color exacto */}
                <Plus className="h-5 w-5 text-[#ebf2f7]/50 group-data-[state=open]:text-[#ff8c00] transition-transform duration-300 group-data-[state=open]:rotate-45" />
              </AccordionTrigger>
              <AccordionContent className="text-[#ebf2f7]/70 text-base leading-relaxed pt-6 pb-0">
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

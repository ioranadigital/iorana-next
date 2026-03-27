"use client";

import React from "react";
import ServicePageTemplate from "../../components/ServicePageTemplate";

const serviceData = {
  title: "¿Cómo está optimizada mi web?",
  subtitle: "Auditoría gratuita de rendimiento",
  description: "No puedes mejorar lo que no mides. Solicita un informe detallado sobre la salud técnica, SEO y de conversión de tu sitio actual.",
  benefits: [
    "Análisis de velocidad de carga y Core Web Vitals",
    "Detección de errores técnicos de indexación",
    "Evaluación de la experiencia de usuario (UX)",
    "Comparativa básica contra tus 3 principales competidores",
    "Hoja de ruta con mejoras prioritarias"
  ],
  stats: [
    { label: "Puntos analizados", value: "+30" },
    { label: "Tiempo de entrega", value: "48h" },
    { label: "Costo", value: "0€" },
    { label: "Formato", value: "PDF" }
  ],
  process: [
    { title: "Solicitud", desc: "Déjanos tu URL y un correo para enviarte el análisis." },
    { title: "Escaneo Técnico", desc: "Nuestras herramientas analizan el código y rendimiento de tu web." },
    { title: "Revisión Manual", desc: "Un experto revisa los puntos que las máquinas no detectan." },
    { title: "Envío de Informe", desc: "Recibes el documento con consejos accionables de inmediato." }
  ]
};

const ComoEstaOptimizadoMiWeb = () => (
  <div className="pt-24 bg-[#0a2b49] min-h-screen">
    <ServicePageTemplate {...serviceData} />
  </div>
);

export default ComoEstaOptimizadoMiWeb;

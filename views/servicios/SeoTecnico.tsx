"use client";

import React from "react";
import ServicePageTemplate from "../../components/ServicePageTemplate";

const serviceData = {
  title: "SEO Técnico & On-Page",
  subtitle: "Cimentando tu éxito en buscadores",
  description: "Optimizamos cada aspecto técnico de tu web para que Google la adore. Desde la velocidad de carga hasta la arquitectura de datos.",
  benefits: [
    "Auditoría técnica profunda de 50+ puntos clave",
    "Optimización de Core Web Vitals (Velocidad)",
    "Implementación de datos estructurados (Schema)",
    "Estrategia de enlazado interno y arquitectura SILO",
    "Indexación garantizada de páginas críticas"
  ],
  stats: [
    { label: "Tráfico Orgánico", value: "+120%" },
    { label: "Velocidad de Carga", value: "-2.5s" },
    { label: "Puntuación SEO", value: "98/100" },
    { label: "Keywords Top 3", value: "+45" }
  ],
  process: [
    { title: "Auditoría Inicial", desc: "Escaneamos tu web buscando errores de rastreo y bloqueos." },
    { title: "Optimización On-Page", desc: "Ajustamos metas, encabezados y contenido para keywords clave." },
    { title: "Mejora de Rendimiento", desc: "Reducimos el peso de imágenes y optimizamos el código." },
    { title: "Monitorización", desc: "Seguimiento diario en Search Console para evitar caídas." }
  ]
};

const SeoTecnico = () => (
  <div className="pt-24 bg-[#0a2b49] min-h-screen">
    <ServicePageTemplate {...serviceData} />
  </div>
);

export default SeoTecnico;

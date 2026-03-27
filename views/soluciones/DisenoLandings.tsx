"use client";

import React from "react";
import ServicePageTemplate from "../../components/ServicePageTemplate";

const serviceData = {
  title: "Diseño de Landing Pages",
  subtitle: "Convertimos visitas en clientes reales",
  description: "Diseñamos páginas de aterrizaje de alto impacto con un único objetivo: maximizar tu tasa de conversión y reducir tu costo de adquisición.",
  benefits: [
    "Diseño enfocado 100% a la conversión (CRO)",
    "Copywriting persuasivo orientado a ventas",
    "Velocidad de carga instantánea",
    "Integración directa con tu CRM o email marketing",
    "Test A/B para optimizar resultados"
  ],
  stats: [
    { label: "Conversión", value: "+25%" },
    { label: "Carga", value: "<1.2s" },
    { label: "Leads", value: "Escalables" },
    { label: "Mobile", value: "100%" }
  ],
  process: [
    { title: "Definición de Oferta", desc: "Analizamos tu propuesta de valor para destacarla al máximo." },
    { title: "Arquitectura de Persuasión", desc: "Estructuramos la página siguiendo patrones de decisión de compra." },
    { title: "Diseño y Desarrollo", desc: "Creamos una interfaz visual limpia que guía al usuario al botón de acción." },
    { title: "Lanzamiento y Medición", desc: "Activamos el rastreo para saber exactamente quién convierte." }
  ]
};

const DisenoLandings = () => (
  <div className="pt-24 bg-[#0a2b49] min-h-screen">
    <ServicePageTemplate {...serviceData} />
  </div>
);

export default DisenoLandings;

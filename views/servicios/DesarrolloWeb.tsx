"use client";

import React from "react";
import ServicePageTemplate from "../../components/ServicePageTemplate";

const serviceData = {
  title: "Desarrollo Web High-End",
  subtitle: "Tu escaparate digital de alto rendimiento",
  description: "Creamos sitios web que no solo son bonitos, sino que están diseñados para vender. Usamos tecnologías modernas como Next.js para una velocidad imbatible.",
  benefits: [
    "Diseño 100% personalizado y responsive",
    "Velocidad de carga ultrarrápida (A+ Performance)",
    "Panel de gestión intuitivo y autogestionable",
    "Seguridad avanzada y certificados SSL",
    "Integración total con herramientas de marketing"
  ],
  stats: [
    { label: "Conversión Web", value: "+35%" },
    { label: "Bounce Rate", value: "-20%" },
    { label: "Uptime", value: "99.9%" },
    { label: "Tech Stack", value: "Modern" }
  ],
  process: [
    { title: "Wireframing", desc: "Dibujamos la estructura enfocada en la experiencia de usuario." },
    { title: "Diseño UI", desc: "Creamos una interfaz visual impactante y profesional." },
    { title: "Desarrollo", desc: "Programamos con código limpio y optimizado para SEO." },
    { title: "Lanzamiento", desc: "Migración segura y puesta en marcha sin errores." }
  ]
};

const DesarrolloWeb = () => (
  <div className="pt-24 bg-[#0a2b49] min-h-screen">
    <ServicePageTemplate {...serviceData} />
  </div>
);

export default DesarrolloWeb;

"use client";

import React from "react";
import ServicePageTemplate from "../../components/ServicePageTemplate";

const serviceData = {
  title: "Content Marketing",
  subtitle: "Historias que conectan y venden",
  description: "Atraemos a tu público ideal mediante contenido de valor que resuelve sus dudas y los guía hacia la compra.",
  benefits: [
    "Estrategia de contenidos basada en búsqueda real",
    "Redacción SEO optimizada para humanos y algoritmos",
    "Lead magnets que disparan tu lista de correos",
    "Calendario editorial coherente y constante",
    "Distribución multicanal de impacto"
  ],
  stats: [
    { label: "Engagement", value: "+80%" },
    { label: "Nuevos Leads", value: "+50%" },
    { label: "Autoridad", value: "Top" },
    { label: "Fidelización", value: "Alta" }
  ],
  process: [
    { title: "Investigación", desc: "Entendemos qué busca y qué le duele a tu cliente ideal." },
    { title: "Creación", desc: "Producimos contenido premium que marca la diferencia." },
    { title: "Promoción", desc: "Hacemos que tu contenido llegue a donde está tu audiencia." },
    { title: "Medición", desc: "Analizamos qué temas generan más negocio para potenciarlo." }
  ]
};

const ContentMarketing = () => (
  <div className="pt-24 bg-[#0a2b49] min-h-screen">
    <ServicePageTemplate {...serviceData} />
  </div>
);

export default ContentMarketing;

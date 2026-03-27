"use client";

import React from "react";
import ServicePageTemplate from "../../components/ServicePageTemplate";

const serviceData = {
  title: "Imagen de Marca",
  subtitle: "Identidad visual con propósito",
  description: "Damos vida a tu marca a través de un diseño visual coherente que transmite confianza y profesionalidad desde el primer segundo.",
  benefits: [
    "Diseño de Logotipo versátil y memorable",
    "Paleta de colores y tipografías corporativas",
    "Manual de identidad para uso en redes y web",
    "Papelería y elementos gráficos digitales",
    "Rediseño de marca para empresas modernas"
  ],
  stats: [
    { label: "Reconocimiento", value: "+90%" },
    { label: "Confianza", value: "Máxima" },
    { label: "Diferenciación", value: "100%" },
    { label: "Valor de Marca", value: "Alto" }
  ],
  process: [
    { title: "Concepto", desc: "Buscamos la esencia de tu negocio para plasmarla visualmente." },
    { title: "Bocetado", desc: "Creamos las primeras propuestas gráficas de tu identidad." },
    { title: "Refinamiento", desc: "Ajustamos cada detalle hasta que la marca sea perfecta." },
    { title: "Entrega", desc: "Kit completo de archivos para que uses tu marca donde quieras." }
  ]
};

const ImagenDeMarca = () => (
  <div className="pt-24 bg-[#0a2b49] min-h-screen">
    <ServicePageTemplate {...serviceData} />
  </div>
);

export default ImagenDeMarca;

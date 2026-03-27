"use client";

import React from "react";
import ServicePageTemplate from "../../components/ServicePageTemplate";

const serviceData = {
  title: "PPC & Paid Search",
  subtitle: "Publicidad rentable y escalable",
  description: "Captamos clientes en el momento exacto en que buscan tus servicios mediante campañas en Google Ads y redes sociales.",
  benefits: [
    "Gestión experta de Google Ads (Search y Display)",
    "Campañas de Meta Ads enfocadas a conversión",
    "Configuración avanzada de seguimiento de conversiones",
    "A/B Testing de anuncios y creatividades",
    "Optimización continua del coste por lead (CPL)"
  ],
  stats: [
    { label: "ROAS Promedio", value: "4.5x" },
    { label: "Costo por Lead", value: "-30%" },
    { label: "CTR", value: "6.8%" },
    { label: "Presupuesto", value: "Optimizado" }
  ],
  process: [
    { title: "Estrategia", desc: "Definimos los canales y el presupuesto más rentable para ti." },
    { title: "Montaje", desc: "Creamos las campañas con copys persuasivos y segmentación." },
    { title: "Escalado", desc: "Aumentamos la inversión en lo que funciona y cerramos lo que no." },
    { title: "Reporting", desc: "Sabrás exactamente cuánto dinero entra por cada euro invertido." }
  ]
};

const PpcPaidSearch = () => (
  <div className="pt-24 bg-[#0a2b49] min-h-screen">
    <ServicePageTemplate {...serviceData} />
  </div>
);

export default PpcPaidSearch;

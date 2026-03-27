"use client";

import React from "react";
import PageLayout from "@/components/PageLayout";
// Importación corregida con ruta relativa al componente real
import ServicePageTemplate from "../../components/ServicePageTemplate";
import { MousePointerClick } from "lucide-react";

/**
 * Reestructuramos el objeto para cumplir con la interfaz de ServicePageTemplate.
 * Esto elimina el error: Property 'data' does not exist.
 */
const serviceData = {
  title: "PPC & Paid Search Experto",
  subtitle: "Campañas que generan leads desde el día 1",
  description: 
    "Maximizamos tu retorno de inversión publicitaria (ROAS) mediante una gestión experta en Google Ads y Meta Ads, enfocada en captar tráfico cualificado y convertirlo en clientes.",
  benefits: [
    "Estrategia integral en Google Ads (Búsqueda, Display y YouTube)",
    "Campañas en Meta Ads con segmentación avanzada de audiencias",
    "Remarketing estratégico para recuperar usuarios interesados",
    "Optimización diaria de pujas, CPA y rendimiento de anuncios",
    "A/B testing constante de creatividades y landing pages",
    "Reporting detallado con dashboards de métricas en tiempo real"
  ],
  stats: [
    { value: "4.2x", label: "ROAS Promedio" },
    { value: "-45%", label: "Reducción CPA" },
    { value: "+180%", label: "Leads Cualificados" },
    { value: "98%", label: "Clientes Satisfechos" }
  ],
  process: [
    { 
      title: "Análisis y Estrategia", 
      desc: "Diseñamos una estructura de campañas a medida para maximizar tu ROI." 
    },
    { 
      title: "Configuración Técnica", 
      desc: "Keyword research profundo y redacción de anuncios altamente persuasivos." 
    },
    { 
      title: "Optimización de Landings", 
      desc: "Diseñamos páginas de destino específicas para elevar la tasa de conversión." 
    },
    { 
      title: "Gestión Continua", 
      desc: "Ajustamos pujas y negativizamos keywords en ciclos de optimización semanal." 
    },
    { 
      title: "Reporting y Escalado", 
      desc: "Identificamos canales rentables para escalar tu inversión de forma segura." 
    }
  ]
};

const PpcPaidSearch = () => (
  <PageLayout
    title="PPC & Paid Search | Iorana Digital"
    description="Gestión profesional de Google Ads y Meta Ads. Campañas PPC orientadas a maximizar tu ROAS y generar leads cualificados."
    canonical="https://iorana.digital/servicios/ppc-paid-search"
  >
    {/* ✅ CORRECCIÓN: Usamos el spread operator para pasar las props individuales */}
    <ServicePageTemplate {...serviceData} />
  </PageLayout>
);

export default PpcPaidSearch;

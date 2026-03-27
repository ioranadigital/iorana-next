"use client";

import React from "react";
import PageLayout from "@/components/PageLayout";
/** * Importación corregida apuntando al nombre de archivo real.
 * Usamos ruta relativa para evitar errores de resolución del módulo.
 */
import ServicePageTemplate from "../../components/ServicePageTemplate";
import { Search } from "lucide-react";

/**
 * Reestructuramos el objeto para que coincida con las props del template.
 * Esto soluciona el error de TypeScript en el build.
 */
const serviceData = {
  title: "SEO Técnico & On-Page",
  subtitle: "Domina los resultados de búsqueda",
  description: 
    "Optimizamos cada aspecto técnico y de contenido de tu sitio web para que Google te premie con visibilidad y tráfico cualificado, superando a tu competencia en rendimiento.",
  benefits: [
    "Auditoría técnica exhaustiva con +200 puntos de control",
    "Optimización completa de Core Web Vitals (LCP, FID, CLS)",
    "Arquitectura web lógica y estructura de URLs amigables",
    "Optimización on-page estratégica de contenidos y landings",
    "Implementación avanzada de Schema Markup y datos estructurados",
    "Gestión inteligente de indexación y crawl budget"
  ],
  stats: [
    { value: "+250%", label: "Tráfico Orgánico" },
    { value: "95+", label: "PageSpeed Score" },
    { value: "3x", label: "Páginas Indexadas" },
    { value: "-60%", label: "Errores Técnicos" }
  ],
  process: [
    { 
      title: "Auditoría Profunda", 
      desc: "Análisis de rastreo, indexación, velocidad y oportunidades de mejora inmediata." 
    },
    { 
      title: "Plan de Acción", 
      desc: "Priorizamos las tareas con mayor potencial de ROI para tu posicionamiento." 
    },
    { 
      title: "Ejecución Técnica", 
      desc: "Corregimos errores de servidor, velocidad, schema y etiquetas canónicas." 
    },
    { 
      title: "Optimización On-Page", 
      desc: "Keyword mapping y optimización de metadatos, headings y enlaces internos." 
    },
    { 
      title: "Control Continuo", 
      desc: "Monitorización semanal de rankings y salud técnica con reportes detallados." 
    }
  ]
};

const SeoTecnico = () => (
  <PageLayout
    title="SEO Técnico & On-Page | Iorana Digital"
    description="Servicios de SEO técnico y on-page profesionales. Auditorías, Core Web Vitals y optimización completa para Google."
    canonical="https://iorana.digital/servicios/seo-tecnico"
  >
    {/** * ✅ SOLUCIÓN AL ERROR DE BUILD: 
     * Usamos el spread operator {...serviceData} para pasar las propiedades individuales.
     */}
    <ServicePageTemplate {...serviceData} />
  </PageLayout>
);

export default SeoTecnico;

"use client";

import React from "react";
import PageLayout from "@/components/PageLayout";
// Importación corregida hacia el template unificado
import ServicePageTemplate from "../../components/ServicePageTemplate";
import { Search } from "lucide-react";

/**
 * Adaptamos el servicio de "Informe Gratuito" al formato del template.
 * Esto garantiza que el build de Next.js pase sin errores de tipos.
 */
const serviceData = {
  title: "¿Cómo está optimizada tu web?",
  subtitle: "Informe de rendimiento gratuito y personalizado",
  description: 
    "Descubre el verdadero estado de tu sitio web. Realizamos un análisis profundo de velocidad, SEO técnico y experiencia de usuario para identificar oportunidades reales de crecimiento.",
  benefits: [
    "Análisis de velocidad de carga y rendimiento Core Web Vitals",
    "Detección de errores técnicos SEO críticos que frenan tu tráfico",
    "Evaluación de experiencia móvil, usabilidad y accesibilidad",
    "Identificación de 'Quick Wins' para mejorar tu conversión hoy",
    "Análisis básico de visibilidad frente a tu competencia directa",
    "Hoja de ruta con recomendaciones accionables y sin compromiso"
  ],
  stats: [
    { value: "24h", label: "Tiempo de entrega" },
    { value: "0€", label: "Coste total" },
    { value: "+50", label: "Puntos de control" },
    { value: "100%", label: "Personalizado" }
  ],
  process: [
    { 
      title: "Solicitud de Auditoría", 
      desc: "Envíanos tu URL y los objetivos principales de tu negocio digital." 
    },
    { 
      title: "Rastreo Técnico", 
      desc: "Nuestras herramientas analizan la arquitectura y el rendimiento de tu sitio." 
    },
    { 
      title: "Análisis Humano", 
      desc: "Un consultor experto revisa los datos para encontrar errores que las máquinas omiten." 
    },
    { 
      title: "Preparación del Informe", 
      desc: "Documentamos los hallazgos con explicaciones claras y soluciones propuestas." 
    },
    { 
      title: "Entrega y Feedback", 
      desc: "Recibes el informe en tu email y quedamos a tu disposición para dudas." 
    }
  ]
};

const ComoEstaOptimizadoMiWeb = () => (
  <PageLayout
    title="¿Cómo está optimizada tu web? Informe gratuito | Iorana Digital"
    description="Solicita gratis tu análisis web personalizado. Descubrimos errores SEO, velocidad y oportunidades de mejora para tu negocio."
    canonical="https://iorana.digital/soluciones/como-esta-optimizado-mi-web"
  >
    {/* ✅ Aplicamos el spread operator para evitar el error 'Property data does not exist' */}
    <ServicePageTemplate {...serviceData} />
  </PageLayout>
);

export default ComoEstaOptimizadoMiWeb;

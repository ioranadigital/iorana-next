"use client";

import React from "react";
import PageLayout from "@/components/PageLayout";
// Importación corregida usando ruta relativa al archivo existente
import ServicePageTemplate from "../../components/ServicePageTemplate";
import { CodeXml } from "lucide-react";

/**
 * Adaptación de datos para el template unificado.
 * Resolvemos el error de la propiedad 'data' que no existe.
 */
const serviceData = {
  title: "Desarrollo Web de Alto Rendimiento",
  subtitle: "Sitios diseñados para convertir",
  description: 
    "Combinamos diseño UI/UX de vanguardia con ingeniería web robusta para crear sitios web rápidos, seguros y optimizados que se convierten en tu mejor activo de ventas.",
  benefits: [
    "Diseño y desarrollo de landing pages de alta conversión",
    "Webs corporativas responsive y totalmente optimizadas",
    "Optimización de Conversión (CRO) basada en datos reales",
    "Desarrollo con tecnologías modernas (React, Next.js, Tailwind)",
    "Optimización extrema de velocidad y Core Web Vitals",
    "Integración nativa con CRM, analytics y herramientas externas"
  ],
  stats: [
    { value: "95+", label: "PageSpeed Score" },
    { value: "+120%", label: "Tasa de Conversión" },
    { value: "<2s", label: "Tiempo de Carga" },
    { value: "100%", label: "Mobile Responsive" }
  ],
  process: [
    { 
      title: "Discovery y Estrategia", 
      desc: "Definimos la arquitectura y wireframes basados en tu customer journey." 
    },
    { 
      title: "Diseño UI/UX", 
      desc: "Prototipos de alta fidelidad con foco en usabilidad y coherencia visual." 
    },
    { 
      title: "Desarrollo Frontend", 
      desc: "Implementación con código limpio y responsive usando las últimas tecnologías." 
    },
    { 
      title: "Optimización y Testing", 
      desc: "Validación de rendimiento en PageSpeed y testing cross-browser riguroso." 
    },
    { 
      title: "Lanzamiento y Soporte", 
      desc: "Despliegue monitorizado con configuración de analítica y soporte post-lanzamiento." 
    }
  ]
};

const DesarrolloWeb = () => (
  <PageLayout
    title="Desarrollo Web | Iorana Digital"
    description="Diseño y desarrollo web profesional. Landing pages, webs corporativas, CRO y optimización de velocidad para empresas."
    canonical="https://iorana.digital/servicios/desarrollo-web"
  >
    {/* ✅ CORRECCIÓN: Usamos {...serviceData} para pasar las props correctamente */}
    <ServicePageTemplate {...serviceData} />
  </PageLayout>
);

export default DesarrolloWeb;

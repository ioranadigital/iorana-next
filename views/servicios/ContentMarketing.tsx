"use client";

import React from "react";
import PageLayout from "@/components/PageLayout";
// Importación corregida hacia el archivo existente
import ServicePageTemplate from "../../components/ServicePageTemplate";
import { PenTool } from "lucide-react";

/**
 * Adaptamos el objeto 'data' para que coincida exactamente 
 * con las propiedades que espera ServicePageTemplate.
 */
const serviceData = {
  title: "Content Marketing Estratégico",
  subtitle: "Contenido que educa, posiciona y convierte",
  description: 
    "Creamos un motor de contenido que atrae a tu buyer persona, construye autoridad y lo guía a través de tu funnel de ventas con piezas estratégicas y optimizadas.",
  benefits: [
    "Estrategia de contenidos basada en topic clusters y buyer journey",
    "Creación de artículos de blog con optimización SEO avanzada",
    "Copywriting persuasivo para landing pages y correos",
    "Diseño de funnel de contenido (TOFU, MOFU, BOFU)",
    "Creación de lead magnets: ebooks, guías y whitepapers",
    "Calendario editorial y gestión integral de publicaciones"
  ],
  stats: [
    { value: "+320%", label: "Tráfico en Blog" },
    { value: "3x", label: "Leads Generados" },
    { value: "+85%", label: "Tiempo en Página" },
    { value: "62%", label: "Ahorro en Coste/Lead" }
  ],
  process: [
    { 
      title: "Investigación y Estrategia", 
      desc: "Analizamos tu ICP y keywords para definir pilares de contenido alineados con tus objetivos." 
    },
    { 
      title: "Calendario Editorial", 
      desc: "Planificamos temas, formatos y canales de distribución para los próximos 3-6 meses." 
    },
    { 
      title: "Producción de Calidad", 
      desc: "Redactores especializados crean contenido optimizado para SEO y conversión." 
    },
    { 
      title: "Distribución Activa", 
      desc: "Publicamos y promocionamos cada pieza para maximizar su alcance e impacto orgánico." 
    },
    { 
      title: "Análisis de Datos", 
      desc: "Medimos el rendimiento y optimizamos la estrategia basándonos en conversiones reales." 
    }
  ]
};

const ContentMarketing = () => (
  <PageLayout
    title="Content Marketing | Iorana Digital"
    description="Servicios de content marketing estratégico. Blog, copywriting SEO, lead magnets y estrategia de contenidos para tu empresa."
    canonical="https://iorana.digital/servicios/content-marketing"
  >

    <ServicePageTemplate {...serviceData} />
  </PageLayout>
);

export default ContentMarketing;

"use client";

import React from "react";
import PageLayout from "@/components/PageLayout";
// Importación corregida hacia el archivo ServicePageTemplate.tsx
import ServicePageTemplate from "../../components/ServicePageTemplate";
import { LayoutTemplate } from "lucide-react";

/**
 * Reestructuramos el objeto de datos para que sea compatible 
 * con las propiedades individuales del template.
 */
const serviceData = {
  title: "Diseño de Landing Pages de Alta Conversión",
  subtitle: "Convierte visitantes en clientes reales",
  description: 
    "Diseñamos landing pages donde cada píxel está pensado para guiar al usuario hacia la acción. Combinamos UX/UI de alto impacto con copywriting persuasivo para maximizar tus resultados.",
  benefits: [
    "Diseño UX/UI orientado exclusivamente a la conversión",
    "Copywriting persuasivo basado en tu propuesta de valor",
    "Integración nativa con CRM y herramientas de marketing",
    "Optimización extrema para velocidad de carga y mobile",
    "Configuración de tests A/B y seguimiento de eventos",
    "Implementación de píxeles de seguimiento y analytics"
  ],
  stats: [
    { value: "+300%", label: "Tasa de Conversión" },
    { value: "-40%", label: "Coste por Lead" },
    { value: "<2s", label: "Velocidad de Carga" },
    { value: "100%", label: "Mobile Optimized" }
  ],
  process: [
    { 
      title: "Briefing y Estrategia", 
      desc: "Definimos objetivos, audiencia y mensajes clave para tu landing page." 
    },
    { 
      title: "Arquitectura y Wireframe", 
      desc: "Creamos la estructura de contenido para optimizar el flujo de conversión." 
    },
    { 
      title: "Diseño Visual y Copy", 
      desc: "Damos vida a la página con elementos visuales de impacto y textos persuasivos." 
    },
    { 
      title: "Desarrollo de Rendimiento", 
      desc: "Implementamos con código ligero para asegurar cargas sub-2 segundos." 
    },
    { 
      title: "Lanzamiento y Tracking", 
      desc: "Configuramos analytics y píxeles para medir el éxito desde el primer minuto." 
    }
  ]
};

const DisenoLandings = () => (
  <PageLayout
    title="Diseño de Landing Pages | Iorana Digital"
    description="Diseño y desarrollo de landing pages de alta conversión. UX/UI, copywriting persuasivo, A/B testing y optimización de velocidad."
    canonical="https://iorana.digital/soluciones/diseno-de-landings"
  >
    {/* ✅ SOLUCIÓN AL ERROR DE BUILD: Pasamos las props desglosadas */}
    <ServicePageTemplate {...serviceData} />
  </PageLayout>
);

export default DisenoLandings;

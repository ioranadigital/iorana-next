"use client";

import React from "react";
import PageLayout from "@/components/PageLayout";
// Importación corregida hacia el archivo ServicePageTemplate.tsx
import ServicePageTemplate from "../../components/ServicePageTemplate";
import { Award } from "lucide-react";

/**
 * Reestructuramos el objeto de datos para que sea compatible 
 * con las propiedades individuales del template.
 */
const serviceData = {
  title: "Kit Digital: Agente Digitalizador",
  subtitle: "Ayudas de hasta 12.000€ para digitalizar tu negocio",
  description: 
    "Como Agente Digitalizador homologado, te ayudamos a acceder a las subvenciones del Gobierno de España. Gestionamos todo el proceso técnico y administrativo para que transformes tu pyme sin costes iniciales.",
  benefits: [
    "Gestión profesional de redes sociales y comunidad online",
    "Diseño y desarrollo de sitio web con optimización SEO básica",
    "Presencia avanzada en internet y posicionamiento local",
    "Implementación de soluciones de comercio electrónico (e-commerce)",
    "Campañas de publicidad digital altamente segmentadas",
    "Tramitación completa de ayudas oficiales (hasta 12.000€)"
  ],
  stats: [
    { value: "500+", label: "Pymes Beneficiadas" },
    { value: "12.000€", label: "Ahorro Máximo" },
    { value: "100%", label: "Subvencionado" },
    { value: "<30 días", label: "Tiempo de Respuesta" }
  ],
  process: [
    { 
      title: "Diagnóstico Digital", 
      desc: "Evaluamos tu madurez digital para elegir las soluciones con mayor impacto." 
    },
    { 
      title: "Solicitud del Bono", 
      desc: "Gestionamos toda la documentación en Acelera Pyme por ti." 
    },
    { 
      title: "Plan de Soluciones", 
      desc: "Definimos las categorías a implementar para maximizar el bono digital." 
    },
    { 
      title: "Implementación Técnica", 
      desc: "Desarrollamos las soluciones bajo los estándares oficiales del programa." 
    },
    { 
      title: "Soporte y Seguimiento", 
      desc: "Te acompañamos durante todo el periodo de prestación del servicio." 
    }
  ]
};

const KitDigital = () => (
  <PageLayout
    title="Kit Digital – Agente Digitalizador | Iorana Digital"
    description="Agente Digitalizador homologado del Kit Digital. Digitaliza tu pyme con ayudas de hasta 12.000€ del Gobierno de España."
    canonical="https://iorana.digital/soluciones/kit-digital"
  >
    {/* ✅ SOLUCIÓN AL ERROR DE BUILD: Pasamos las props desglosadas con el spread operator */}
    <ServicePageTemplate {...serviceData} />
  </PageLayout>
);

export default KitDigital;

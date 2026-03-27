"use client";

import React from "react";
import PageLayout from "@/components/PageLayout";
// Importación corregida hacia el archivo ServicePageTemplate.tsx
import ServicePageTemplate from "../../components/ServicePageTemplate";
import { Sparkles } from "lucide-react";

/**
 * Reestructuramos el objeto para cumplir con la interfaz de ServicePageTemplate.
 * Esto elimina el error: Property 'data' does not exist.
 */
const serviceData = {
  title: "Todo para tu Negocio",
  subtitle: "Tu departamento de marketing externo",
  description: 
    "Olvídate de coordinar a múltiples proveedores. Nos convertimos en tu socio estratégico, encargándonos de toda tu presencia digital con una visión 360° orientada a resultados.",
  benefits: [
    "Estrategia integral de marketing digital personalizada",
    "Gestión experta de campañas de captación (PPC y SEO)",
    "Mantenimiento y optimización continua de tu sitio web",
    "Creación de contenido estratégico y gestión de marca",
    "Automatización de procesos para ahorrar tiempo y costes",
    "Reporting unificado con KPIs clave para tu negocio"
  ],
  stats: [
    { value: "360°", label: "Visión Integral" },
    { value: "1", label: "Único Interlocutor" },
    { value: "+150%", label: "Eficiencia Operativa" },
    { value: "24/7", label: "Soporte Estratégico" }
  ],
  process: [
    { 
      title: "Auditoría 360°", 
      desc: "Analizamos tu situación actual, competencia y puntos de mejora en todos los canales." 
    },
    { 
      title: "Estrategia Unificada", 
      desc: "Diseñamos un plan de acción integrado que alinea SEO, PPC, contenido y desarrollo." 
    },
    { 
      title: "Implementación Multicanal", 
      desc: "Ejecutamos las tácticas coordinadas para generar un impacto sinérgico en tu negocio." 
    },
    { 
      title: "Optimización Basada en Datos", 
      desc: "Analizamos el rendimiento global y ajustamos la estrategia para maximizar el ROI." 
    },
    { 
      title: "Escalado Estratégico", 
      desc: "Crecemos contigo, activando nuevas palancas de crecimiento según evoluciona tu empresa." 
    }
  ]
};

const TodoParaTuNegocio = () => (
  <PageLayout
    title="Todo para tu Negocio | Iorana Digital"
    description="Solución integral de marketing y tecnología. Tu departamento de marketing externo para escalar tu negocio con una estrategia 360°."
    canonical="https://iorana.digital/soluciones/todo-para-tu-negocio"
  >
    {/* ✅ CORRECCIÓN: Usamos el spread operator para pasar las props individuales */}
    <ServicePageTemplate {...serviceData} />
  </PageLayout>
);

export default TodoParaTuNegocio;

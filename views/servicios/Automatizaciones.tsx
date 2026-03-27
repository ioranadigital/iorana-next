"use client";

import React from "react";
import PageLayout from "@/components/PageLayout";
import ServicePageTemplate from "../../components/ServicePageTemplate";
import { Bot, Cpu, Zap, Share2 } from "lucide-react";

/**
 * Definición de los datos del servicio.
 * Esto soluciona el error "Cannot find name 'serviceData'"
 */
const serviceData = {
  title: "Automatizaciones Inteligentes",
  subtitle: "Eficiencia Operativa con IA",
  description: 
    "Liberamos a tu equipo de las tareas repetitivas. Diseñamos e implementamos flujos de trabajo automatizados que conectan tus herramientas favoritas y optimizan cada proceso de tu negocio.",
  benefits: [
    "Ahorro directo de +20 horas semanales por empleado",
    "Eliminación total de errores por entrada manual de datos",
    "Sincronización en tiempo real entre CRM, ERP y Marketing",
    "Escalabilidad operativa sin aumentar la plantilla",
    "Notificaciones inteligentes y reportes automatizados"
  ],
  stats: [
    { label: "Horas Ahorradas", value: "85%" },
    { label: "Reducción de Errores", value: "99%" },
    { label: "ROI Proyectado", value: "4x" },
    { label: "Procesos Activos", value: "+100" }
  ],
  process: [
    { 
      title: "Auditoría de Flujos", 
      desc: "Identificamos las tareas manuales que consumen más tiempo en tu día a día." 
    },
    { 
      title: "Diseño de Arquitectura", 
      desc: "Creamos el mapa de conexiones entre tus herramientas (Make, Zapier, APIs)." 
    },
    { 
      title: "Desarrollo y Conexión", 
      desc: "Configuramos los triggers y acciones para que la información fluya sola." 
    },
    { 
      title: "Testing Riguroso", 
      desc: "Validamos cada escenario para asegurar que la automatización sea infalible." 
    },
    { 
      title: "Despliegue y Soporte", 
      desc: "Monitorizamos el rendimiento y optimizamos los flujos continuamente." 
    }
  ]
};

const Automatizaciones = () => {
  return (
    <PageLayout
      title="Automatizaciones de Procesos | Iorana Digital"
      description="Optimiza tu negocio con automatizaciones inteligentes y flujos de trabajo eficientes."
      canonical="https://iorana.digital/servicios/automatizaciones"
    >
      {/* Usamos el Spread Operator para pasar los datos. 
          Esto corrige el error de tipos de la línea 54
      */}
      <ServicePageTemplate {...serviceData} />
    </PageLayout>
  );
};

export default Automatizaciones;

"use client";

import React from "react";
import PageLayout from "@/components/PageLayout";
/** * Importación corregida con ruta relativa al archivo real.
 * Esto soluciona el error "Module not found".
 */
import ServicePageTemplate from "../../components/ServicePageTemplate";
import { Palette } from "lucide-react";

/**
 * Reestructuramos el objeto de datos para que sea compatible 
 * con las propiedades individuales del template.
 */
const serviceData = {
  title: "Imagen de Marca y Branding",
  subtitle: "Identidades visuales que conectan y diferencian",
  description: 
    "Creamos identidades memorables que reflejan la esencia de tu negocio. Tu marca es tu activo más valioso; la diseñamos estratégicamente para que genere confianza y autoridad.",
  benefits: [
    "Diseño de logotipo principal y variantes adaptativas",
    "Manual de identidad visual completo (colores, fuentes e iconos)",
    "Diseño de papelería corporativa y activos digitales",
    "Plantillas personalizadas para redes sociales",
    "Guía estratégica de tono y voz de marca",
    "Estrategia integral de posicionamiento en el mercado"
  ],
  stats: [
    { value: "+33%", label: "Más Ingresos" },
    { value: "80%", label: "Reconocimiento" },
    { value: "100%", label: "Consistencia Visual" },
    { value: "+50%", label: "Engagement Social" }
  ],
  process: [
    { 
      title: "Investigación Estratégica", 
      desc: "Analizamos audiencia y competencia para definir tu lugar único en el mercado." 
    },
    { 
      title: "Conceptualización Creativa", 
      desc: "Desarrollamos moodboards que capturan la personalidad de tu futura marca." 
    },
    { 
      title: "Diseño y Creación", 
      desc: "Damos vida al logo, paletas y elementos visuales de tu nueva identidad." 
    },
    { 
      title: "Refinamiento Colaborativo", 
      desc: "Iteramos basándonos en tu feedback hasta alcanzar la perfección visual." 
    },
    { 
      title: "Entrega y Guías", 
      desc: "Recibes el manual de marca y todos los archivos listos para su implementación." 
    }
  ]
};

const ImagenDeMarca = () => (
  <PageLayout
    title="Imagen de Marca | Iorana Digital"
    description="Diseño de identidad visual y branding profesional. Logotipos, manual de marca y estrategia de posicionamiento para empresas."
    canonical="https://iorana.digital/servicios/imagen-de-marca"
  >
    {/** * ✅ SOLUCIÓN AL ERROR DE BUILD: 
     * Pasamos las propiedades desglosadas con el operador spread.
     */}
    <ServicePageTemplate {...serviceData} />
  </PageLayout>
);

export default ImagenDeMarca;

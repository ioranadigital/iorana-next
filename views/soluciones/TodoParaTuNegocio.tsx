"use client";

import React from "react";
import ServicePageTemplate from "../../components/ServicePageTemplate";

const serviceData = {
  title: "Todo Para Tu Negocio",
  subtitle: "Tu departamento digital externo",
  description: "Una solución integral 360º para empresas que quieren delegar toda su estrategia digital en un equipo experto. Desde el código hasta las ventas.",
  benefits: [
    "Mantenimiento técnico y actualizaciones constantes",
    "Estrategia de marketing digital mensual",
    "Soporte prioritario y consultoría estratégica",
    "Optimización continua de procesos internos",
    "Análisis de competencia y mercado recurrente"
  ],
  stats: [
    { label: "Soporte", value: "24/7" },
    { label: "Equipo", value: "Senior" },
    { label: "Servicios", value: "360º" },
    { label: "Crecimiento", value: "Sostenido" }
  ],
  process: [
    { title: "Inmersión", desc: "Nos convertimos en un brazo más de tu equipo para entender tus metas." },
    { title: "Plan Maestro", desc: "Diseñamos una hoja de ruta con hitos trimestrales claros." },
    { title: "Ejecución", desc: "Desarrollamos, optimizamos y lanzamos campañas de forma coordinada." },
    { title: "Evolución", desc: "Ajustamos la estrategia según los datos de negocio reales." }
  ]
};

const TodoParaTuNegocio = () => (
  <div className="pt-24 bg-[#0a2b49] min-h-screen">
    <ServicePageTemplate {...serviceData} />
  </div>
);

export default TodoParaTuNegocio;

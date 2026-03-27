"use client";

import React from "react";
import ServicePageTemplate from "../../components/ServicePageTemplate";

const serviceData = {
  title: "Subvenciones Kit Digital",
  subtitle: "Digitaliza tu empresa a coste cero",
  description: "Como agentes digitalizadores oficiales, te ayudamos a solicitar y ejecutar tu bono del Kit Digital para mejorar tu presencia online sin inversión inicial.",
  benefits: [
    "Gestión completa de la solicitud del bono",
    "Desarrollo de sitio web y presencia en internet",
    "Gestión de redes sociales y marketing digital",
    "Herramientas de oficina virtual y ciberseguridad",
    "Sin papeleos: nosotros nos encargamos de todo"
  ],
  stats: [
    { label: "Ayuda hasta", value: "12.000€" },
    { label: "Gestión", value: "Gratis" },
    { label: "Éxito", value: "100%" },
    { label: "Plazo", value: "Abierto" }
  ],
  process: [
    { title: "Diagnóstico", desc: "Evaluamos el nivel de madurez digital de tu negocio." },
    { title: "Solicitud", desc: "Tramitamos tu ayuda en la sede electrónica de Red.es." },
    { title: "Implementación", desc: "Ejecutamos las soluciones digitales elegidas para tu empresa." },
    { title: "Justificación", desc: "Presentamos los informes necesarios para cerrar el proceso." }
  ]
};

const KitDigital = () => (
  <div className="pt-24 bg-[#0a2b49] min-h-screen">
    <ServicePageTemplate {...serviceData} />
  </div>
);

export default KitDigital;

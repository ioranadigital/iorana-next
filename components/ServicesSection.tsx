"use client";
import React from "react";
import { motion } from "framer-motion";
import { Search, BarChart3, PenTool, Zap, MousePointer2, Palette, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  { icon: Search, title: "SEO Técnico & On-Page", desc: "Optimizamos tu arquitectura web para que Google te ame y tus usuarios te encuentren.", href: "/servicios/seo-tecnico" },
  { icon: BarChart3, title: "PPC & Paid Search", desc: "Campañas de Google Ads y LinkedIn Ads enfocadas 100% en conversión y ROAS positivo.", href: "/servicios/ppc-paid-search" },
  { icon: PenTool, title: "Content Marketing", desc: "Creamos contenido estratégico que educa, atrae y convierte tráfico frío en MQLs.", href: "/servicios/content-marketing" },
  { icon: Zap, title: "Automatizaciones", desc: "Integramos tus herramientas (CRM, Email) para ahorrar tiempo y personalizar tu outreach.", href: "/servicios/automatizaciones" },
  { icon: MousePointer2, title: "Desarrollo Web (CRO)", desc: "Diseñamos Landings Pages y sitios web SaaS optimizados para maximizar la conversión.", href: "/servicios/desarrollo-web" },
  { icon: Palette, title: "Imagen de Marca", desc: "Construimos identidades visuales sólidas y coherentes que generan confianza instantánea.", href: "/servicios/imagen-de-marca" },
];

const ServicesSection = () => (
  <section id="servicios" className="w-full py-24 bg-[#0a2b49] overflow-visible">
    <div className="max-w-7xl mx-auto px-6 overflow-visible">
      
      {/* Cabecera de la sección */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="text-sm font-bold text-[#ff8c00] tracking-widest uppercase">
          Qué hacemos
        </span>
        <h2 className="text-3xl md:text-5xl font-heading font-extrabold mt-4 text-[#ebf2f7] tracking-tight lead-tight">
          Nuestros Servicios
        </h2>
        <p className="mt-6 text-lg text-[#ebf2f7]/70">
          Un enfoque integral y data-driven para dominar tu nicho y escalar la adquisición de clientes.
        </p>
      </motion.div>

      {/* Grid de Servicios */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-visible">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            // ✅ Hover con borde naranja exacto
            className="group flex flex-col justify-between p-8 rounded-2xl bg-[#08223a] border border-[#ebf2f7]/10 transition-all duration-300 hover:border-[#ff8c00]/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#ff8c00]/10"
          >
            <div>
              {/* Icono con color exacto */}
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-[#0a2b49] border border-[#ebf2f7]/5 mb-6 group-hover:bg-[#ff8c00]/10 transition-colors">
                <s.icon className="h-6 w-6 text-[#ff8c00]" />
              </div>
              <h3 className="text-xl font-bold text-[#ebf2f7] mb-3 group-hover:text-white transition-colors">
                {s.title}
              </h3>
              <p className="text-sm text-[#ebf2f7]/60 leading-relaxed mb-6 flex-grow">
                {s.desc}
              </p>
            </div>
            
            {/* Enlace con color exacto */}
            <Link href={s.href} className="text-sm font-bold text-[#ff8c00] flex items-center gap-1.5 pt-4 group-hover:gap-2 transition-all">
              Saber más <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;

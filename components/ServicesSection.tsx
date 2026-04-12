"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  BarChart3,
  PenTool,
  Zap,
  MousePointer2,
  Palette,
  MapPin,
  ArrowRight,
  TrendingUp
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Search,
    subtitle: "Visibilidad",
    title: "SEO Técnico",
    desc: "Optimizamos tu web para que aparezcas en los primeros resultados cuando tus clientes potenciales te busquen.",
    href: "/servicios/seo-tecnico",
    linkText: "Mejorar mi ranking"
  },
  {
    icon: MapPin,
    subtitle: "SEO Local",
    title: "Google Business Local",
    desc: "Aparece en el Top 3 de Google Maps cuando alguien busca tu servicio cerca. Más llamadas, más visitas, más clientes locales.",
    href: "/servicios/google-business-local",
    linkText: "Posicionamiento local"
  },
  { 
    icon: BarChart3, 
    subtitle: "Publicidad",
    title: "Google Ads & Social Ads", 
    desc: "Campañas de pago diseñadas para atraer tráfico cualificado y generar ventas de forma inmediata.", 
    href: "/servicios/ppc-paid-search",
    linkText: "Captar clientes ya"
  },
  { 
    icon: PenTool, 
    subtitle: "Contenido",
    title: "Marketing de Contenidos", 
    desc: "Creamos contenido estratégico que genera confianza, resuelve dudas y convence a tus visitas de elegirte.", 
    href: "/servicios/content-marketing",
    linkText: "Ver estrategia"
  },
  { 
    icon: Zap, 
    subtitle: "Eficiencia",
    title: "Automatizaciones", 
    desc: "Ahorra horas de trabajo eliminando tareas repetitivas mediante herramientas que trabajan por ti 24/7.", 
    href: "/servicios/automatizaciones",
    linkText: "Optimizar procesos"
  },
  { 
    icon: MousePointer2, 
    subtitle: "Conversión",
    title: "Diseño Web CRO", 
    desc: "Páginas rápidas y modernas enfocadas exclusivamente en convertir tus visitas en clientes finales.", 
    href: "/servicios/desarrollo-web",
    linkText: "Vender más"
  },
  { 
    icon: Palette, 
    subtitle: "Identidad",
    title: "Branding para Pymes", 
    desc: "Construimos una imagen profesional y sólida que transmite la seriedad que tu negocio merece.", 
    href: "/pymes/todo-para-tu-negocio",
    linkText: "Renovar mi marca"
  },
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
          Impulsa tu crecimiento
        </span>
        <h2 className="text-3xl md:text-5xl font-heading font-extrabold mt-4 text-[#ebf2f7] tracking-tight leading-tight">
          Soluciones <span className="text-[#ff8c00] drop-shadow-[0_0_10px_rgba(255,140,0,0.3)]">Estratégicas</span>
        </h2>
        <p className="mt-6 text-lg text-[#ebf2f7]/70">
          Todo lo que tu negocio necesita para dominar su mercado digital y multiplicar sus resultados.
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
            className="group flex flex-col justify-between p-8 rounded-2xl bg-[#08223a] border border-[#ebf2f7]/10 transition-all duration-300 hover:border-[#ff8c00]/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#ff8c00]/10"
          >
            <div>
              {/* Icono Principal */}
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-[#0a2b49] border border-[#ebf2f7]/5 mb-6 group-hover:bg-[#ff8c00]/10 transition-colors">
                <s.icon className="h-6 w-6 text-[#ff8c00] drop-shadow-[0_0_5px_rgba(255,140,0,0.3)]" />
              </div>

              {/* Subtítulo Naranja con Icono de Tendencia */}
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="h-3.5 w-3.5 text-[#ff8c00]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff8c00]">
                  {s.subtitle}
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#ebf2f7] mb-3 group-hover:text-white transition-colors">
                {s.title}
              </h3>
              <p className="text-sm text-[#ebf2f7]/60 leading-relaxed mb-6">
                {s.desc}
              </p>
            </div>
            
            {/* Enlace con texto personalizado por servicio */}
            <Link 
              href={s.href} 
              className="text-sm font-bold text-[#ff8c00] flex items-center gap-1.5 pt-4 group-hover:gap-2 transition-all"
            >
              {s.linkText} <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
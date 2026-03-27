import React from "react";
import { Repeat, Code, Layout, BarChart3, PenTool, ShieldCheck } from "lucide-react";
import { Button } from "./ui/button";

const services = [
  {
    title: "Automatizaciones",
    icon: <Repeat className="w-6 h-6" />,
    description: "Conectamos tus herramientas para eliminar tareas manuales y dejar que tu equipo se enfoque en lo que importa.",
    link: "/servicios/automatizaciones",
    color: "bg-blue-500/10",
    border: "border-blue-500/20"
  },
  {
    title: "SEO Técnico",
    icon: <ShieldCheck className="w-6 h-6" />,
    description: "Optimizamos cada rincón de tu sitio para que Google te encuentre primero y tus usuarios disfruten la mejor experiencia.",
    link: "/servicios/seo-tecnico",
    color: "bg-blue-500/10",
    border: "border-blue-500/20"
  },
  {
    title: "Content Marketing",
    icon: <PenTool className="w-6 h-6" />,
    description: "Contenido estratégico que educa, posiciona y convierte. Creamos un motor de contenido que atrae a tu buyer persona.",
    link: "/servicios/content-marketing",
    color: "bg-blue-500/10",
    border: "border-blue-500/20"
  }
];

export default function ServicesSection() {
  return (
    /* 1. SECCIÓN: w-full y overflow-visible para que las tarjetas no se corten al animar */
    <section className="w-full py-24 bg-[#0a2b49] overflow-visible">
      
      {/* 2. CONTENEDOR DE CENTRADO: Máximo 1280px (max-w-7xl) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
        
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-orange-500 mb-3">
            Nuestros Servicios
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-[#ebf2f7] tracking-tight">
            Soluciones digitales para <span className="text-orange-500">escalar tu negocio</span>
          </h3>
        </div>

        {/* 3. GRID DE TARJETAS: 
            Aprovechamos el espacio con gap-8 para que no se vean amontonadas 
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-visible">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group p-8 rounded-3xl border ${service.border} ${service.color} 
                         backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] 
                         hover:shadow-2xl hover:shadow-blue-900/20 overflow-visible`}
            >
              <div className="mb-6 inline-flex p-3 rounded-2xl bg-[#0a2b49] border border-[#ebf2f7]/10 text-[#ebf2f7]">
                {service.icon}
              </div>
              
              <h4 className="text-2xl font-bold text-[#ebf2f7] mb-4">{service.title}</h4>
              <p className="text-[#ebf2f7]/70 leading-relaxed mb-8">
                {service.description}
              </p>
              
              <Button 
                variant="ghost" 
                className="group/btn p-0 text-orange-500 hover:bg-transparent hover:text-orange-400 font-semibold"
                onClick={() => window.location.href = service.link}
              >
                Saber más 
                <span className="ml-2 transition-transform group-hover/btn:translate-x-1">→</span>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

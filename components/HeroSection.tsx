"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0a2b49]"
      /* 🛠️ SOLUCIÓN DEFINITIVA: Usamos estilo en línea para asegurar el background 
         Esto ignora los límites de la imagen y la obliga a cubrir el 100% de la pantalla.
      */
      style={{
        backgroundImage: 'linear-gradient(to bottom, rgba(10, 43, 73, 0.6), rgba(10, 43, 73, 0.9)), url("/assets/hero-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container relative z-10 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 mb-8">
            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs font-medium text-[#ebf2f7]">Agencia de Marketing en Asturias</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black leading-[1.1] mb-6 text-[#ebf2f7]">
            <span className="text-orange-500">Posiciona tu negocio</span><br />
            donde tus clientes te buscan.
          </h1>

          <p className="text-lg md:text-xl text-[#ebf2f7]/70 max-w-2xl mb-10 leading-relaxed">
            Ayudamos a las empresas a multiplicar sus ventas con estrategias SEO basadas en datos, PPC de alto rendimiento y contenido que posiciona de verdad.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <Button 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-7 text-lg rounded-2xl font-bold shadow-lg shadow-orange-500/20"
              onClick={() => window.location.href = "/contacto"}
            >
              Impulsar mi negocio ahora
            </Button>

            <Button 
              variant="outline"
              className="border-[#ebf2f7]/20 text-[#ebf2f7] hover:bg-[#ebf2f7]/5 px-8 py-7 text-lg rounded-2xl bg-transparent"
              onClick={() => window.location.href = "/soluciones/como-esta-optimizado-mi-web"}
            >
              ¿Cómo está mi sitio web?
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-[#ebf2f7]/10"
          >
            {[
              { value: "+250%", label: "Tráfico orgánico" },
              { value: "3x", label: "ROI promedio" },
              { value: "50+", label: "Casos de éxito" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-heading font-black text-orange-500">{stat.value}</div>
                <div className="text-sm text-[#ebf2f7]/50 mt-1 uppercase tracking-wider font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

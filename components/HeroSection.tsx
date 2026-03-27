"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const HeroSection = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image src={"/assets/hero-bg.jpg"} alt="IORANA Digital agencia marketing Asturias" fill className="object-cover opacity-40" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      </div>

      <div className="container relative z-10 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-8">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-primary">Agencia de Marketing en Asturias </span>
          </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] mb-6 text-[#ebf2f7]">
  {" "}
  <span className="gradient-text">Posiciona tu negocio</span>{" "}
  donde tus clientes te buscan.
</h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            Ayudamos a las empresas a multiplicar su ventas con estrategias SEO basadas en datos, PPC de alto rendimiento y contenido que posiciona.
          </p>

     <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
  <a href="http://iorana.digital/soluciones/como-esta-optimizado-mi-web"  className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-base font-medium text-[#0a2b49] transition-all hover:bg-[#ebf2f7] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"  >
    ¿Como está mi sitio web?
    <ArrowRight className="ml-2 h-4 w-4" />
  </a>
</div>         
<div className="flex flex-col sm:row gap-4">
  <Button 
    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-2xl"
    onClick={() => window.location.href = "/contacto"}
  >
    Impulsar mi negocio ahora
  </Button>
  <Button 
    variant="outline"
    className="border-[#ebf2f7]/20 text-[#ebf2f7] hover:bg-[#ebf2f7]/5 px-8 py-6 text-lg rounded-2xl"
    onClick={() => window.location.href = "/servicios/seo-tecnico"}
  >
    Ver servicios de Growth Marketing
  </Button>
</div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-border"
          >
            {[
              { value: "+250%", label: "Tráfico orgánico promedio" },
              { value: "3x", label: "ROI en 6 meses" },
              { value: "50+", label: "SaaS escalados" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-heading font-bold neon-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
export default HeroSection;

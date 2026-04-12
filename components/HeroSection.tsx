// components/HeroSection.tsx
"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const stats = [
  { value: "+250%", label: "Tráfico orgánico promedio" },
  { value: "3x",    label: "ROI en 6 meses" },
  { value: "50+",   label: "SaaS escalados" },
];

const HeroSection = () => {
  const router = useRouter();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center overflow-hidden"
    >
      {/* ── FONDO COMPLETO ──
          - position: fixed NO, porque el scroll lo dejaría estático
          - Usamos inset-0 + w-screen centrado para romper el align-items:center del body
          - La imagen cubre todo con object-cover vía background-size: cover
      */}
      <div
        aria-hidden="true"
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url("/assets/hero-bg.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Overlay degradado: oscurece más abajo para que el contenido sea legible */}
      <div
        aria-hidden="true"
        className="absolute inset-0 w-full h-full"
        style={{
          background:
            "linear-gradient(to right, rgba(10,43,73,0.93) 0%, rgba(10,43,73,0.78) 45%, rgba(10,43,73,0.28) 100%), linear-gradient(to bottom, rgba(10,43,73,0.20) 0%, rgba(10,43,73,0.55) 65%, rgba(10,43,73,0.95) 100%)",
        }}
      />

      {/* ── CONTENIDO ── */}
   <div className="relative z-10 w-full" style={{ paddingLeft: 'max(1.5rem, calc((100vw - 80rem) / 2 + 1.5rem))', paddingTop: '8rem', paddingBottom: '5rem' }}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl text-left"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ff8c00]/30 bg-[#ff8c00]/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#ff8c00] animate-pulse" aria-hidden="true" />
            <span className="text-xs font-medium text-[#ebf2f7]">
              Posicionamiento SEO y Diseño web
            </span>
          </div>

          {/* H1 */}
          <h1 className="font-heading font-black leading-[1.1] text-5xl sm:text-6xl md:text-7xl mb-6 text-[#ebf2f7]">
            <span className="text-[#ff8c00]">Posiciona tu negocio</span>
            <br />
            donde tus clientes te buscan.
          </h1>

          <p className="text-lg md:text-xl text-[#ebf2f7]/75 max-w-2xl mb-10 leading-relaxed">
            Ayudamos a las empresas a multiplicar sus ventas con estrategias SEO
            basadas en datos, PPC de alto rendimiento y contenido que posiciona de verdad.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <Link
              href="/informe-sitio-web-gratis"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#ebf2f7] text-[#0a2b49] font-bold text-base hover:bg-white transition-colors"
            >
              ¿Cómo está mi sitio? - Informe Gratuito <ArrowRight className="h-4 w-4" />
            </Link>

            {/*<button
              onClick={() => scrollTo("#casos")}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-[#ebf2f7]/25 text-[#ebf2f7] font-bold text-base hover:bg-[#ebf2f7]/10 transition-colors bg-transparent"
            >
              Ver Casos de Éxito
            </button>*/}
            
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap gap-6 sm:gap-10 mt-10 sm:mt-16 pt-8 border-t border-[#ebf2f7]/10"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl md:text-3xl font-heading font-black text-[#ff8c00]">
                  {s.value}
                </div>
                <div className="text-sm text-[#ebf2f7]/55 mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

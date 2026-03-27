"use client";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const cases = [
  {
    company: "StreamFlow",
    industry: "SaaS de Productividad",
    context: "Startup B2B con producto sólido pero sin presencia orgánica. Dependían 100% de paid ads para adquirir clientes.",
    challenge: "CAC elevado ($180) y cero tráfico orgánico. Necesitaban un canal sostenible de adquisición.",
    solution: "Implementamos una estrategia de topic clusters con +60 artículos optimizados, rediseño de la arquitectura web y link building estratégico.",
    result: "+320% Tráfico Orgánico",
    resultSub: "en 5 meses · CAC reducido a $45",
    ctaText: "Ver estrategia SEO para SaaS",
    link: "/casos/streamflow"
  },
  {
    company: "DataPulse",
    industry: "SaaS de Analytics",
    context: "Plataforma de analytics compitiendo contra incumbentes con dominios de alta autoridad.",
    challenge: "Ranking en posiciones 30+ para sus keywords principales. Tasa de conversión orgánica del 0.3%.",
    solution: "Auditoría técnica profunda, optimización de Core Web Vitals, estrategia de contenido comparativo y PPC complementario.",
    result: "+540% Conversiones",
    resultSub: "en 6 meses · 15 keywords en top 3",
    ctaText: "Ver optimización de conversiones",
    link: "/casos/datapulse"
  },
  {
    company: "HireBot",
    industry: "SaaS de HR Tech",
    context: "Herramienta de recruiting IA que necesitaba penetrar un mercado saturado por competidores bien posicionados.",
    challenge: "Sin blog, sin estrategia de contenido y con un sitio web que no cumplía estándares técnicos de Google.",
    solution: "Reconstrucción de arquitectura SEO, creación de hub de contenido educativo y campaña de digital PR.",
    result: "De 0 a 12K visitas/mes",
    resultSub: "en 4 meses · 8x ROI en contenido",
    ctaText: "Ver caso de ROI en contenidos",
    link: "/casos/hirebot"
  }
];

const CasesSection = () => {
  return (
    <section id="casos" className="w-full py-24 bg-[#0a2b49] relative overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-orange-500 tracking-widest uppercase">
            Casos de Éxito
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold mt-4 text-[#ebf2f7] tracking-tight">
            Resultados que hablan <span className="text-orange-500">por sí solos</span>
          </h2>
        </motion.div>

        {/* CORRECCIÓN LÍNEA 64: Se cerraron correctamente todas las comillas de className */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 overflow-visible">
          {cases.map((c, i) => (
            <motion.div
              key={c.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex flex-col rounded-3xl overflow-visible border border-[#ebf2f7]/10 bg-[#08223a] shadow-2xl group transition-all duration-500 hover:border-orange-500/30 hover:scale-[1.02]"
            >
              <div className="bg-[#ebf2f7]/5 p-8 border-b border-[#ebf2f7]/10 rounded-t-3xl">
                <div className="text-3xl font-bold text-[#ebf2f7] mb-1">{c.result}</div>
                <div className="text-xs text-orange-500/80 font-bold tracking-wide uppercase">{c.resultSub}</div>
              </div>

              <div className="p-8 flex-grow space-y-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 font-bold border border-orange-500/20">
                    {c.company[0]}
                  </div>
                  <div>
                    <div className="font-bold text-[#ebf2f7]">{c.company}</div>
                    <div className="text-[10px] text-[#ebf2f7]/50 uppercase tracking-widest">{c.industry}</div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-orange-500 font-bold mb-2">Contexto</div>
                    <p className="text-[14px] text-[#ebf2f7]/70 leading-relaxed font-light">{c.context}</p>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-orange-500 font-bold mb-2">Desafío</div>
                    <p className="text-[14px] text-[#ebf2f7]/70 leading-relaxed font-light">{c.challenge}</p>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-orange-500 font-bold mb-2">Solución</div>
                    <p className="text-[14px] text-[#ebf2f7]/70 leading-relaxed font-light">{c.solution}</p>
                  </div>
                </div>

                <div className="pt-4">
                  <Button 
                    variant="ghost" 
                    className="p-0 text-orange-500 hover:bg-transparent hover:text-orange-400 font-bold group/btn h-auto text-left"
                    onClick={() => window.location.href = c.link}
                  >
                    {c.ctaText}
                    <span className="ml-2 transition-transform group-hover/btn:translate-x-1 inline-block">→</span>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;

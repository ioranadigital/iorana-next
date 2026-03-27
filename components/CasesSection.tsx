"use client";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const cases = [
  {
    company: "StreamFlow",
    industry: "SaaS de Productividad",
    challenge: "CAC elevado ($180) y cero tráfico orgánico.",
    solution: "Estrategia de topic clusters con +60 artículos.",
    result: "+320% Tráfico Orgánico",
    resultSub: "en 5 meses",
    link: "/casos/streamflow"
  },
  {
    company: "DataPulse",
    industry: "SaaS de Analytics",
    challenge: "Ranking en posiciones 30+. Tasa de conversión del 0.3%.",
    solution: "Auditoría técnica y optimización de Core Web Vitals.",
    result: "+540% Conversiones",
    resultSub: "en 6 meses",
    link: "/casos/datapulse"
  },
  {
    company: "HireBot",
    industry: "SaaS de HR Tech",
    challenge: "Sin blog ni estrategia técnica.",
    solution: "Reconstrucción de arquitectura SEO y hub educativo.",
    result: "12K visitas/mes",
    resultSub: "desde cero",
    link: "/casos/hirebot"
  }
];

const CasesSection = () => {
  return (
    <section id="casos" className="w-full py-24 bg-[#0a2b49] overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold text-orange-500 tracking-widest uppercase">
            Casos de Éxito
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold mt-4 text-[#ebf2f7] tracking-tight">
            Resultados <span className="text-orange-500">Reales</span>
          </h2>
        </motion.div>

        {/* ✅ LÍNEA 64 CORREGIDA: Comillas cerradas correctamente */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 overflow-visible">
          {cases.map((c, i) => (
            <motion.div
              key={c.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              /* Estilo consistente con la sección Nosotros */
              className="flex flex-col rounded-3xl border border-[#ebf2f7]/10 bg-[#08223a] shadow-2xl p-8 hover:border-orange-500/30 transition-all duration-300"
            >
              <div className="text-2xl font-bold text-[#ebf2f7] mb-1">{c.result}</div>
              <div className="text-xs text-orange-500 font-bold uppercase mb-6">{c.resultSub}</div>
              
              <div className="space-y-4 flex-grow">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-orange-500 font-bold">Desafío</div>
                  <p className="text-sm text-[#ebf2f7]/70">{c.challenge}</p>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-orange-500 font-bold">Solución</div>
                  <p className="text-sm text-[#ebf2f7]/70">{c.solution}</p>
                </div>
              </div>

              <Button 
                variant="link" 
                className="mt-6 p-0 text-orange-500 w-fit hover:text-orange-400"
              >
                Ver caso →
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;

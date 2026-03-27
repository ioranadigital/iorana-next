"use client";
import { motion } from "framer-motion";
import { Rocket, Users, Brain, Shield } from "lucide-react";

const values = [
  { icon: Rocket, label: "Velocidad", desc: "Iteramos rápido para conseguir resultados antes" },
  { icon: Brain, label: "Estrategia", desc: "Cada acción responde a un plan con datos" },
  { icon: Users, label: "Partnership", desc: "Somos una extensión de tu equipo" },
  { icon: Shield, label: "Transparencia", desc: "Reportes claros, sin métricas vanidosas" },
];

const AboutSection = () => (
  <section id="nosotros" className="w-full py-24 bg-[#0a2b49] overflow-visible">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
      <div className="grid lg:grid-cols-2 gap-16 items-center overflow-visible">
        
        {/* BLOQUE IZQUIERDO */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="overflow-visible"
        >
          {/* ✅ Color exacto aplicado */}
          <span className="text-sm font-bold text-[#ff8c00] tracking-widest uppercase">
            Nosotros
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold mt-4 text-[#ebf2f7] leading-tight tracking-tight">
            Obsesionados con el crecimiento de <span className="text-[#ff8c00]">tu empresa</span>
          </h2>

          <div className="mt-8 space-y-4">
            <p className="text-[#ebf2f7]/70 text-lg leading-relaxed">
              Orbital SEO nació de la frustración de ver startups brillantes con productos increíbles
              que nadie encontraba en Google. Nos propusimos cambiar eso.
            </p>
            <p className="text-[#ebf2f7]/70 text-lg leading-relaxed mb-10">
              Nuestro equipo combina experiencia en growth marketing, ingeniería y producto SaaS.
              Entendemos que el MRR y el LTV son la sangre de tu negocio.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
            {values.map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                // ✅ Hover con color exacto
                className="flex items-start gap-4 p-6 rounded-2xl bg-[#08223a] border border-[#ebf2f7]/10 shadow-xl transition-all duration-300 hover:border-[#ff8c00]/30 hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-center p-2 rounded-lg bg-[#0a2b49] group-hover:scale-110 transition-transform">
                  {/* ✅ Icono con color exacto */}
                  <v.icon className="h-6 w-6 text-[#ff8c00]" />
                </div>
                <div>
                  {/* ✅ Texto hover con color exacto */}
                  <div className="font-bold text-[#ebf2f7] mb-1 group-hover:text-[#ff8c00] transition-colors">
                    {v.label}
                  </div>
                  <div className="text-[#ebf2f7]/60 text-sm leading-snug">
                    {v.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* BLOQUE DERECHO: Estadísticas */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative overflow-visible"
        >
          <div className="bg-[#08223a] p-10 rounded-3xl border border-[#ebf2f7]/10 shadow-2xl relative">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#ff8c00]/10 blur-3xl rounded-full" />
            
            {/* ✅ Número grande con efecto Glow */}
            <div className="text-6xl font-black text-[#ff8c00] mb-2 drop-shadow-[0_0_15px_rgba(255,140,0,0.3)]">50+</div>
            <div className="text-xl font-bold text-[#ebf2f7] mb-8">Startups SaaS escaladas</div>
            
            <div className="space-y-8">
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#ebf2f7]/80">Renovación tras primer trimestre</span>
                  <span className="text-[#ff8c00] font-bold text-lg">92%</span>
                </div>
                <div className="w-full bg-[#0a2b49] rounded-full h-2.5 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "92%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="bg-[#ff8c00] h-full rounded-full" 
                  />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#ebf2f7]/80">Page 1 en keywords objetivo</span>
                  <span className="text-[#ff8c00] font-bold text-lg">85%</span>
                </div>
                <div className="w-full bg-[#0a2b49] rounded-full h-2.5 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="bg-[#ff8c00] h-full rounded-full shadow-[0_0_10px_rgba(255,140,0,0.5)]" 
                  />
                </div>
                <p className="text-xs text-[#ebf2f7]/40 italic pt-2">
                  * Logrado en menos de 4 meses de media
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);

export default AboutSection;

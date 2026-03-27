"use client";
import React from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Inversión Gestionada", value: "+2M€" },
  { label: "ROAS Promedio", value: "x4.8" },
  { label: "Casos de Éxito", value: "150+" },
  { label: "Retención Clientes", value: "94%" },
];

const certifications = [
  { name: "Google Partner", logo: "/logos/google-partner.png" },
  { name: "Meta Business Partner", logo: "/logos/meta.png" },
  { name: "Hubspot Certified", logo: "/logos/hubspot.png" },
  { name: "TikTok Ads", logo: "/logos/tiktok.png" },
];

const CertificationsSection = () => {
  return (
    <section className="py-24 bg-[#0a2b49] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* NÚMEROS CLAVE CON EFECTO GLOW */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 text-center">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              {/* Naranja exacto y brillo */}
              <div className="text-4xl md:text-5xl font-heading font-black text-[#ff8c00] mb-2 drop-shadow-[0_0_12px_rgba(255,140,0,0.4)] group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm uppercase tracking-[0.2em] text-[#ebf2f7]/50 font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* LOGOS DE CERTIFICACIONES */}
        <div className="pt-16 border-t border-white/5">
          <p className="text-center text-[#ebf2f7]/30 text-xs font-bold uppercase tracking-[0.3em] mb-12">
            Certificaciones Oficiales
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60">
            {certifications.map((cert, i) => (
              <motion.img 
                key={i}
                src={cert.logo}
                alt={cert.name}
                title={cert.name}
                whileHover={{ opacity: 1, scale: 1.1, filter: "grayscale(0%)" }}
                className="h-8 md:h-10 w-auto object-contain grayscale brightness-200 hover:brightness-100 transition-all duration-300 cursor-help"
              />
            ))}
          </div>
        </div>

      </div>
      
      {/* Decoración de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#ff8c00]/5 blur-[120px] rounded-full -z-10" />
    </section>
  );
};

export default CertificationsSection;

"use client";
import React from "react";
import { motion } from "framer-motion";
import { MessageSquareText, Mail, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const ContactSection = () => {
  return (
    <section id="contacto" className="w-full py-24 bg-[#0a2b49] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* BLOQUE IZQUIERDO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-bold text-[#ff8c00] tracking-widest uppercase">
              Hablemos
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold mt-4 text-[#ebf2f7] leading-tight tracking-tight">
              ¿Listo para dominar <br />
              <span className="text-[#ff8c00]">tu mercado?</span>
            </h2>
            <p className="mt-6 text-lg text-[#ebf2f7]/70 leading-relaxed mb-10">
              Estamos a un paso de diseñar la estrategia que escalará tu SaaS. Rellena el formulario y agendaremos una breve sesión de auditoría gratuita para analizar tu potencial.
            </p>
            
            {/* Tarjeta de contacto 
            <div className="flex items-center gap-6 p-6 rounded-2xl bg-[#08223a] border border-[#ff8c00]/30 shadow-2xl shadow-[#ff8c00]/5">
              <div className="flex items-center justify-center p-3 rounded-xl bg-[#ff8c00]/10 border border-[#ff8c00]/20">
                <Mail className="h-7 w-7 text-[#ff8c00]" />
              </div>
              <div>
                <div className="text-sm text-[#ebf2f7]/50 font-medium">Nuestro correo</div>
                <div className="text-xl font-bold text-[#ebf2f7]">hola@iorana.digital</div>
              </div>
            </div> */}
          </motion.div>

          {/* FORMULARIO SIMPLIFICADO */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl bg-[#08223a] border border-[#ebf2f7]/5 shadow-2xl"
          >
            <form className="space-y-6">
              <input type="text" placeholder="Nombre" className="w-full p-4 rounded-xl bg-[#0a2b49] border border-[#ebf2f7]/10 text-white placeholder:text-[#ebf2f7]/30" />
              <input type="email" placeholder="Email corporativo" className="w-full p-4 rounded-xl bg-[#0a2b49] border border-[#ebf2f7]/10 text-white placeholder:text-[#ebf2f7]/30" />
              <textarea placeholder="Tu mensaje..." rows={4} className="w-full p-4 rounded-xl bg-[#0a2b49] border border-[#ebf2f7]/10 text-white placeholder:text-[#ebf2f7]/30" />
              
              {/* ✅ Botón con color exacto y efecto Glow */}
              <Button type="submit" size="lg" className="w-full bg-[#ff8c00] text-white font-bold rounded-xl h-14 text-base hover:scale-[1.02] transition-transform duration-300 shadow-[0_10px_30px_rgba(255,140,0,0.3)]">
                Enviar mensaje <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
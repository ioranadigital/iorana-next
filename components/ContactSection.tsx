"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "¡Mensaje enviado!",
        description: "Nos pondremos en contacto contigo en menos de 24 horas.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    /* 1. SECCIÓN: w-full y fondo oscuro consistente */
    <section id="contacto" className="w-full py-24 bg-[#0a2b49] relative overflow-visible">
      
      {/* 2. CONTENEDOR DE CENTRADO: max-w-7xl para alineación global */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold text-orange-500 tracking-widest uppercase">
            Contacto
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold mt-4 text-[#ebf2f7] tracking-tight">
            ¿Listo para contarnos tu <span className="text-orange-500">proyecto?</span>
          </h2>

          <p className="text-[#ebf2f7]/70 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            Agenda una consultoría gratuita. Analizaremos tu situación actual y te daremos
            un plan accionable — sin compromiso.
          </p>
        </motion.div>

        {/* 3. GRID DE CONTACTO: Proporción 2:3 para dar peso al formulario */}
        <div className="grid lg:grid-cols-5 gap-12 items-start overflow-visible">
          
          {/* INFO LATERAL */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="space-y-4">
              <div className="bg-[#08223a] p-8 rounded-3xl border border-[#ebf2f7]/10 shadow-xl transition-all hover:border-orange-500/20">
                <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6">
                  <Mail className="h-6 w-6 text-orange-500" />
                </div>
                <div className="font-bold text-xl text-[#ebf2f7]">Escríbenos</div>
                <div className="text-[#ebf2f7]/60 mt-2 text-lg">hola@orbitalseo.com</div>
              </div>

              <div className="bg-[#08223a] p-8 rounded-3xl border border-[#ebf2f7]/10 shadow-xl transition-all hover:border-orange-500/20">
                <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6">
                  <MapPin className="h-6 w-6 text-orange-500" />
                </div>
                <div className="font-bold text-xl text-[#ebf2f7]">Ubicación</div>
                <div className="text-[#ebf2f7]/60 mt-2 text-lg">100% Remoto · Presencia Global</div>
              </div>
            </div>
          </motion.div>

          {/* FORMULARIO */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-[#08223a] p-8 md:p-10 space-y-6 rounded-3xl border border-[#ebf2f7]/10 shadow-2xl overflow-visible"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Input 
                  required
                  placeholder="Tu nombre completo" 
                  className="bg-[#0a2b49] border-[#ebf2f7]/10 text-[#ebf2f7] placeholder:text-[#ebf2f7]/30 h-14 rounded-xl focus:border-orange-500/50" 
                />
              </div>
              <div className="space-y-2">
                <Input 
                  required
                  type="email"
                  placeholder="Tu email de empresa" 
                  className="bg-[#0a2b49] border-[#ebf2f7]/10 text-[#ebf2f7] placeholder:text-[#ebf2f7]/30 h-14 rounded-xl focus:border-orange-500/50" 
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Input 
                placeholder="URL de tu SaaS o Empresa" 
                className="bg-[#0a2b49] border-[#ebf2f7]/10 text-[#ebf2f7] placeholder:text-[#ebf2f7]/30 h-14 rounded-xl focus:border-orange-500/50" 
              />
            </div>
            
            <div className="space-y-2">
              <Textarea 
                required
                placeholder="¿En qué podemos ayudarte? Cuéntanos brevemente tus objetivos..." 
                rows={5} 
                className="bg-[#0a2b49] border-[#ebf2f7]/10 text-[#ebf2f7] placeholder:text-[#ebf2f7]/30 rounded-xl focus:border-orange-500/50 resize-none pt-4" 
              />
            </div>

            <Button 
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-8 text-lg font-bold rounded-2xl transition-all transform hover:scale-[1.01] active:scale-[0.98]"
            >
              {loading ? "Enviando..." : "Solicitar auditoría de marketing gratuita"}
            </Button>
            
            <p className="text-center text-[#ebf2f7]/40 text-xs mt-4">
              Te responderemos en menos de 24 horas laborables.
            </p>
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;

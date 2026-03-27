"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Send, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
// ✅ Importamos PageLayout para manejar el SEO de forma limpia como en los otros archivos
import PageLayout from "@/components/PageLayout";

const includes = [
  "Análisis de velocidad de carga y rendimiento",
  "Detección de errores técnicos SEO críticos",
  "Evaluación de experiencia móvil y usabilidad",
  "Oportunidades de mejora y quick wins",
  "Análisis básico de competencia digital",
];

const ComoEstaOptimizadoMiWeb = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!accepted) {
      toast({
        title: "Debes aceptar los términos",
        description: "Por favor, acepta la política de privacidad y los términos.",
        variant: "destructive",
      });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "¡Solicitud enviada!",
        description: "Recibirás tu informe gratuito en 24-48 horas.",
      });
      (e.target as HTMLFormElement).reset();
      setAccepted(false);
    }, 1000);
  };

  return (
    <PageLayout
      title="¿Cómo está optimizada tu web? Informe gratuito | Iorana Digital"
      description="Solicita gratis tu análisis web personalizado. Descubrimos errores SEO, velocidad y oportunidades de mejora."
      canonical="https://iorana.digital/como-esta-optimizado-mi-web"
    >
      <main className="pt-20">
        <section className="py-16 md:py-24 relative overflow-hidden bg-[#0a2b49]">
          <div className="container relative z-10 max-w-6xl">
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              {/* Contenido Izquierdo */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-3"
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ff8c00]/30 bg-[#ff8c00]/10 mb-8">
                  <Shield className="w-3.5 h-3.5 text-[#ff8c00]" />
                  <span className="text-xs font-medium text-[#ff8c00]">Informe Gratuito</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-[#ebf2f7] mb-6">
                  ¿Cómo está optimizada <span className="text-[#ff8c00]">tu web</span>?
                </h1>

                <p className="text-lg text-[#ebf2f7]/70 leading-relaxed max-w-xl mb-8">
                  Descubre el rendimiento real de tu sitio. Analizamos velocidad, SEO y conversión — 100% gratis.
                </p>

                <div className="space-y-4 mb-10">
                  {includes.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#ff8c00] mt-0.5 shrink-0" />
                      <span className="text-[#ebf2f7]/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Formulario Derecho */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="lg:col-span-2"
              >
                <form onSubmit={handleSubmit} className="bg-[#24496b] p-8 rounded-2xl border border-[#ebf2f7]/15 shadow-2xl space-y-5">
                  <h3 className="text-xl font-heading font-bold text-[#ebf2f7]">Solicita tu informe</h3>
                  
                  <Input placeholder="Nombre *" required className="bg-[#0a2b49] border-[#ebf2f7]/20 text-white" />
                  <Input type="email" placeholder="Email *" required className="bg-[#0a2b49] border-[#ebf2f7]/20 text-white" />
                  <Input placeholder="URL de tu web" className="bg-[#0a2b49] border-[#ebf2f7]/20 text-white" />
                  <Textarea placeholder="Cuéntanos sobre tu negocio *" required className="bg-[#0a2b49] border-[#ebf2f7]/20 text-white" />

                  <div className="flex items-start gap-2">
                    <Checkbox id="terms" checked={accepted} onCheckedChange={(v) => setAccepted(v === true)} />
                    <label htmlFor="terms" className="text-xs text-[#ebf2f7]/60">
                      Acepto la <Link href="/privacidad" className="underline">Política de Privacidad</Link>
                    </label>
                  </div>

                  <Button type="submit" disabled={loading} className="w-full bg-[#ebf2f7] text-[#0a2b49] hover:bg-[#ff8c00] hover:text-white">
                    {loading ? "Enviando..." : "Quiero mi informe gratuito"}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
};

export default ComoEstaOptimizadoMiWeb;

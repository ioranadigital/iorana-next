"use client";

import { useState, useCallback } from "react";
// Corregido: Importación desde 'lucide-react' (no 'lucide-center')
import { CheckCircle2, Send, MessageSquare } from "lucide-react";
// Importación del cliente de Supabase según tu estructura de carpetas
import { supabase } from "../../lib/supabaseClient";

// Definición del tipo para eliminar el error ts(2304)
type ModalType = "privacidad" | "terminos" | "cookies" | null;

export default function ContactoPage() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false); // Estado para el checkbox legal

  // Estado con TODOS los campos que aparecen en tu diseño visual
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    profile: "",
    specific_services: "",
    urgent_need: "",
    main_service: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validación estricta del apartado legal
    if (!acceptedTerms) {
      alert("Debes aceptar la política de privacidad y los términos.");
      return;
    }

    setIsSending(true);

    // Mapeo de campos a la tabla 'crm_leads'
    const { error } = await supabase
      .from("crm_leads")
      .insert([
        {
          nombre: formData.name,
          email: formData.email,
          telefono: formData.phone,
          empresa: formData.company,
          mensaje: formData.message,
          fuente: "iorana-contacto-seo",
          metadata: {
            perfil: formData.profile,
            servicios_especificos: formData.specific_services,
            urgencia: formData.urgent_need,
            servicio_interes: formData.main_service,
            terminos_aceptados: true
          }
        }
      ]);

    setIsSending(false);
    if (error) {
      alert("Error al enviar: " + error.message);
    } else {
      setIsSuccess(true);
      setFormData({ name: "", email: "", phone: "", company: "", profile: "", specific_services: "", urgent_need: "", main_service: "", message: "" });
      setAcceptedTerms(false);
    }
  };

  return (
    <main className="bg-[#0a2b49] text-[#ebf2f7] min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Columna Izquierda: Textos y Beneficios */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff8c00]/10 border border-[#ff8c00]/20 text-[#ff8c00] text-xs font-bold uppercase tracking-widest">
            <MessageSquare className="h-3.5 w-3.5" /> HABLEMOS DE TU PROYECTO
          </div>
          <h1 className="font-black leading-[1.1] text-5xl md:text-6xl text-white">
            ¿Listo para <br /><span className="text-[#ff8c00]">crecer juntos?</span>
          </h1>
          <p className="text-lg text-[#ebf2f7]/70 max-w-lg">
            Cuéntanos tu proyecto y en menos de 48h te contactamos con un análisis inicial y una propuesta adaptada a tus objetivos.
          </p>
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">¿En qué podemos <span className="text-[#ff8c00]">ayudarte</span>?</h2>
            <ul className="grid gap-3">
              {["SEO Técnico & On-Page", "PPC & Paid Search", "Content Marketing", "Automatizaciones y CRM", "Desarrollo Web", "Imagen de Marca"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium text-[#ebf2f7]/80">
                  <CheckCircle2 className="text-[#ff8c00] h-5 w-5" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Columna Derecha: Formulario con el diseño de tu imagen */}
        <div className="bg-[#07213a] p-8 md:p-10 rounded-2xl border border-white/10 shadow-2xl">
          <h2 className="text-2xl font-bold mb-8 text-white">Envíanos <span className="text-[#ff8c00]">tu consulta</span></h2>
          
          {isSuccess ? (
            <div className="text-center py-10 space-y-4">
              <CheckCircle2 className="text-green-500 h-12 w-12 mx-auto" />
              <h2 className="text-xl font-bold text-white">¡Mensaje enviado con éxito!</h2>
              <button onClick={() => setIsSuccess(false)} className="text-[#ff8c00] hover:underline">Enviar otro mensaje</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="name" required placeholder="Nombre de contacto *" value={formData.name} onChange={handleChange} className="w-full bg-[#0a2b49] border border-white/10 rounded-xl h-12 px-4 text-sm text-white focus:border-[#ff8c00]/50 outline-none" />
                <input name="email" type="email" required placeholder="tu@email.com *" value={formData.email} onChange={handleChange} className="w-full bg-[#0a2b49] border border-white/10 rounded-xl h-12 px-4 text-sm text-white focus:border-[#ff8c00]/50 outline-none" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="phone" placeholder="Teléfono (Opcional)" value={formData.phone} onChange={handleChange} className="w-full bg-[#0a2b49] border border-white/10 rounded-xl h-12 px-4 text-sm text-white outline-none" />
                <input name="company" placeholder="Empresa / Web" value={formData.company} onChange={handleChange} className="w-full bg-[#0a2b49] border border-white/10 rounded-xl h-12 px-4 text-sm text-white outline-none" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select name="profile" required value={formData.profile} onChange={handleChange} className="w-full bg-[#0a2b49] border border-white/10 rounded-xl h-12 px-4 text-sm text-white appearance-none">
                  <option value="">Perfil de empresa *</option>
                  <option value="pyme">Autónomo / PYME</option>
                  <option value="empresa">Empresa Mediana / Grande</option>
                </select>
                <select name="specific_services" value={formData.specific_services} onChange={handleChange} className="w-full bg-[#0a2b49] border border-white/10 rounded-xl h-12 px-4 text-sm text-white appearance-none">
                  <option value="">¿Qué servicios necesitas cubrir?</option>
                  <option value="seo">SEO Técnico e Indexación</option>
                  <option value="ads">Google Ads / Meta Ads</option>
                </select>
              </div>

              <select name="urgent_need" value={formData.urgent_need} onChange={handleChange} className="w-full bg-[#0a2b49] border border-white/10 rounded-xl h-12 px-4 text-sm text-white appearance-none">
                <option value="">Necesidad más urgente</option>
                <option value="leads">Necesito generar leads/ventas ya</option>
              </select>

              <select name="main_service" value={formData.main_service} onChange={handleChange} className="w-full bg-[#0a2b49] border border-white/10 rounded-xl h-12 px-4 text-sm text-white appearance-none">
                <option value="">¿Qué servicio te interesa?</option>
                <option value="seo_360">Estrategia SEO 360°</option>
              </select>

              <textarea name="message" required rows={4} placeholder="¿Cuál es tu objetivo principal? ¿Qué retos tienes ahora mismo?" value={formData.message} onChange={handleChange} className="w-full bg-[#0a2b49] border border-white/10 rounded-xl p-4 text-sm text-white focus:border-[#ff8c00]/50 outline-none resize-none" />

              {/* ÚNICO APARTADO AGREGADO: SECCIÓN LEGAL */}
              <div className="flex items-start gap-3 pt-2">
                <input 
                  type="checkbox" 
                  id="legal" 
                  required
                  checked={acceptedTerms}
                  onChange={(e) => setAcceptedTerms(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-white/10 bg-[#0a2b49] text-[#ff8c00] focus:ring-[#ff8c00]/50" 
                />
                <label htmlFor="legal" className="text-xs text-[#ebf2f7]/60 leading-relaxed">
                  He leído y acepto la{" "}
                  <button type="button" onClick={() => setActiveModal("privacidad")} className="text-[#ff8c00] hover:underline transition-colors">Política de Privacidad</button>
                  {" "}y los{" "}
                  <button type="button" onClick={() => setActiveModal("terminos")} className="text-[#ff8c00] hover:underline transition-colors">Términos y Condiciones</button>. 
                  También puedes consultar nuestra{" "}
                  <button type="button" onClick={() => setActiveModal("cookies")} className="text-[#ff8c00] hover:underline transition-colors">Política de Cookies</button>.
                </label>
              </div>

              <button 
                type="submit" 
                disabled={isSending || !acceptedTerms} 
                className="w-full flex items-center justify-center gap-2 bg-[#ebf2f7] hover:bg-[#ff8c00] text-[#0a2b49] hover:text-white font-bold rounded-xl h-14 transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? "Enviando..." : "Enviar mensaje"} <Send className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
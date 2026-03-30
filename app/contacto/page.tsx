// app/contacto/page.tsx
"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { CheckCircle2, Send, MessageSquare, X } from "lucide-react";

// ─── SCHEMA JSON-LD ───────────────────────────────────────────────────────────
const schemaContacto = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://iorana.digital/contacto/#webpage",
      "url": "https://iorana.digital/contacto",
      "name": "Contacto | Iorana Digital",
      "isPartOf": { "@id": "https://iorana.digital/#website" },
      "publisher": { "@id": "https://iorana.digital/#organization" },
      "inLanguage": "es",
      "dateModified": "2025-01-01",
    },
    {
      "@type": "Organization",
      "@id": "https://iorana.digital/#organization",
      "name": "Iorana Digital",
      "url": "https://iorana.digital",
      "knowsAbout": ["SEO Técnico", "IA Estratégica", "Next.js", "Automatización"],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "email": "hola@iorana.digital",
        "availableLanguage": "es",
        "areaServed": "ES",
      },
    },
  ],
};

// ─── TIPOS ────────────────────────────────────────────────────────────────────
type ModalType = "privacidad" | "terminos" | "cookies" | null;

// ─── COMPONENTE MODAL BASE ────────────────────────────────────────────────────
function LegalModal({
  isOpen,
  onClose,
  title,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      {/* Panel */}
      <div
        ref={dialogRef}
        className="relative z-10 w-full max-w-2xl max-h-[85vh] bg-[#07213a] border border-white/10 rounded-2xl shadow-2xl flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-white/10 shrink-0">
          <h2
            id="modal-title"
            className="text-lg font-bold text-white"
          >
            {title}
          </h2>
          <button
            onClick={onClose}
            aria-label="Cerrar modal"
            className="p-2 rounded-lg text-[#ebf2f7]/50 hover:text-[#ff8c00] hover:bg-white/5 transition-colors"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto px-8 py-6 text-sm text-[#ebf2f7]/70 leading-relaxed space-y-5">
          {children}
        </div>

        {/* Footer */}
        <div className="px-8 py-4 border-t border-white/10 shrink-0 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#ff8c00] hover:bg-[#e07a00] text-white font-bold rounded-xl text-sm transition-colors cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── CONTENIDO: PRIVACIDAD ────────────────────────────────────────────────────
function PrivacidadContent() {
  return (
    <>
      <p className="text-[#ff8c00] text-xs uppercase tracking-widest font-bold">
        Última actualización: enero 2025
      </p>
      <section>
        <h3 className="text-white font-bold mb-2">1. Responsable del Tratamiento</h3>
        <p>
          Iorana Digital, con dominio{" "}
          <strong className="text-white">iorana.digital</strong>, es responsable
          del tratamiento de los datos personales recabados a través de este
          formulario, conforme al Reglamento General de Protección de Datos
          (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).
        </p>
      </section>
      <section>
        <h3 className="text-white font-bold mb-2">2. Datos que recabamos</h3>
        <p>
          Nombre, email, teléfono (opcional) y empresa, con la finalidad de
          gestionar tu consulta y enviarte información sobre nuestros servicios.
        </p>
      </section>
      <section>
        <h3 className="text-white font-bold mb-2">3. Base jurídica</h3>
        <p>
          Consentimiento explícito del interesado (art. 6.1.a RGPD) marcando la
          casilla de aceptación del formulario de contacto.
        </p>
      </section>
      <section>
        <h3 className="text-white font-bold mb-2">4. Conservación de datos</h3>
        <p>
          Los datos se conservan durante el tiempo necesario para atender tu
          consulta y un máximo de 3 años si existe relación comercial activa.
          Transcurrido ese plazo, serán eliminados de forma segura.
        </p>
      </section>
      <section>
        <h3 className="text-white font-bold mb-2">5. Tus derechos</h3>
        <p>
          Puedes ejercer derechos de acceso, rectificación, supresión,
          portabilidad y oposición escribiendo a{" "}
          <strong className="text-white">hola@iorana.digital</strong> con el
          asunto &quot;RGPD&quot;. Tienes derecho a presentar reclamación ante
          la Agencia Española de Protección de Datos (aepd.es).
        </p>
      </section>
      <section>
        <h3 className="text-white font-bold mb-2">6. Cesión de datos</h3>
        <p>
          No cedemos datos a terceros salvo obligación legal. Utilizamos
          proveedores tecnológicos (Supabase, Vercel) con acuerdos de tratamiento
          de datos (DPA) conformes al RGPD y transferencias bajo cláusulas
          contractuales tipo.
        </p>
      </section>
    </>
  );
}

// ─── CONTENIDO: TÉRMINOS ──────────────────────────────────────────────────────
function TerminosContent() {
  return (
    <>
      <p className="text-[#ff8c00] text-xs uppercase tracking-widest font-bold">
        Última actualización: enero 2025
      </p>
      <section>
        <h3 className="text-white font-bold mb-2">1. Titularidad</h3>
        <p>
          El sitio{" "}
          <strong className="text-white">iorana.digital</strong> es propiedad de
          Iorana Digital. El acceso y uso de este sitio implica la aceptación
          íntegra de los presentes Términos y Condiciones.
        </p>
      </section>
      <section>
        <h3 className="text-white font-bold mb-2">2. Objeto del servicio</h3>
        <p>
          Iorana Digital ofrece servicios de consultoría SEO, marketing digital,
          automatización de procesos y desarrollo web a empresas y
          profesionales con presencia online.
        </p>
      </section>
      <section>
        <h3 className="text-white font-bold mb-2">3. Propiedad intelectual</h3>
        <p>
          Todos los contenidos publicados en este sitio —textos, imágenes,
          logotipos, código fuente y diseño— son propiedad de Iorana Digital o
          sus licenciantes. Queda prohibida su reproducción total o parcial sin
          autorización expresa y por escrito.
        </p>
      </section>
      <section>
        <h3 className="text-white font-bold mb-2">4. Limitación de responsabilidad</h3>
        <p>
          Iorana Digital no garantiza la disponibilidad continua del sitio ni la
          ausencia de errores. No se hace responsable de daños directos o
          indirectos derivados del uso de la información publicada o de la
          interrupción del servicio.
        </p>
      </section>
      <section>
        <h3 className="text-white font-bold mb-2">5. Modificaciones</h3>
        <p>
          Iorana Digital se reserva el derecho de modificar estos Términos en
          cualquier momento. Los cambios serán efectivos desde su publicación en
          esta página, con indicación de la fecha de actualización.
        </p>
      </section>
      <section>
        <h3 className="text-white font-bold mb-2">6. Ley aplicable y jurisdicción</h3>
        <p>
          Estos Términos se rigen por la legislación española. Para cualquier
          controversia, las partes se someten expresamente a los Juzgados y
          Tribunales de Valencia, España, con renuncia a cualquier otro fuero.
        </p>
      </section>
    </>
  );
}

// ─── CONTENIDO: COOKIES ───────────────────────────────────────────────────────
function CookiesContent() {
  return (
    <>
      <p className="text-[#ff8c00] text-xs uppercase tracking-widest font-bold">
        Última actualización: enero 2025
      </p>
      <section>
        <h3 className="text-white font-bold mb-2">¿Qué son las cookies?</h3>
        <p>
          Las cookies son pequeños archivos de texto que los sitios web
          almacenan en tu dispositivo para recordar preferencias, mantener
          sesiones activas y analizar el comportamiento de navegación de forma
          agregada y anónima.
        </p>
      </section>
      <section>
        <h3 className="text-white font-bold mb-2">Cookies que utilizamos</h3>
        <div className="overflow-x-auto mt-3">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="text-[#ebf2f7]/40 uppercase tracking-wider text-left">
                <th className="pb-2 pr-4 font-bold">Nombre</th>
                <th className="pb-2 pr-4 font-bold">Tipo</th>
                <th className="pb-2 font-bold">Finalidad</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["_session", "Técnica", "Gestión de sesión de usuario activa"],
                ["_ga / _ga_*", "Analítica", "Google Analytics — tráfico anónimo y métricas"],
                ["consent", "Preferencia", "Recordar tu elección sobre cookies"],
              ].map(([name, type, purpose]) => (
                <tr key={name} className="border-t border-white/5 text-[#ebf2f7]/70">
                  <td className="py-2.5 pr-4 font-mono text-[#ff8c00] text-[11px]">{name}</td>
                  <td className="py-2.5 pr-4">{type}</td>
                  <td className="py-2.5">{purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section>
        <h3 className="text-white font-bold mb-2">Control y configuración</h3>
        <p>
          Puedes configurar o deshabilitar las cookies desde la configuración de
          tu navegador (Chrome, Firefox, Safari, Edge). Ten en cuenta que
          deshabilitar cookies técnicas puede afectar a la funcionalidad del
          sitio y a la experiencia de usuario.
        </p>
      </section>
      <section>
        <h3 className="text-white font-bold mb-2">Cookies de terceros</h3>
        <p>
          Utilizamos Google Analytics para análisis de tráfico. Google puede
          usar estos datos conforme a su propia política de privacidad
          (policies.google.com). Puedes optar por no participar mediante el
          complemento de inhabilitación de Google Analytics.
        </p>
      </section>
      <section>
        <h3 className="text-white font-bold mb-2">Consentimiento</h3>
        <p>
          Al continuar navegando en{" "}
          <strong className="text-white">iorana.digital</strong> sin modificar
          la configuración, aceptas el uso de cookies conforme a esta política.
          Puedes revocar tu consentimiento en cualquier momento limpiando las
          cookies desde tu navegador.
        </p>
      </section>
    </>
  );
}

// ─── DATOS ESTÁTICOS ──────────────────────────────────────────────────────────
const servicios = [
  "SEO Técnico & On-Page",
  "PPC & Paid Search (Google Ads, Meta Ads)",
  "Content Marketing y Copywriting",
  "Automatizaciones y CRM",
  "Desarrollo Web y Landing Pages",
  "Imagen de Marca e Identidad Visual",
];

// ─── PAGE COMPONENT ───────────────────────────────────────────────────────────
export default function ContactoPage() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const openModal = useCallback((m: ModalType) => setActiveModal(m), []);
  const closeModal = useCallback(() => setActiveModal(null), []);

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaContacto) }}
      />

      <main className="bg-[#0a2b49] text-[#ebf2f7] min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ── COLUMNA IZQUIERDA ── */}
          <div className="space-y-8">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff8c00]/10 border border-[#ff8c00]/20 text-[#ff8c00] text-xs font-bold uppercase tracking-widest">
              <MessageSquare className="h-3.5 w-3.5" aria-hidden="true" />
              Hablemos de tu proyecto
            </div>

            {/* H1 */}
            <h1 className="font-heading font-black leading-[1.1] text-5xl md:text-6xl">
              <span className="text-white">¿Listo para</span>
              <br />
              <span className="text-[#ff8c00]">crecer juntos?</span>
            </h1>

            <p className="text-lg text-[#ebf2f7]/70 max-w-lg leading-relaxed">
              Cuéntanos tu proyecto y en menos de 48h te contactamos con un
              análisis inicial y una propuesta adaptada a tus objetivos.
            </p>

            {/* Servicios */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white">
                ¿En qué podemos{" "}
                <span className="text-[#ff8c00]">ayudarte</span>?
              </h2>
              <ul role="list" className="grid gap-3">
                {servicios.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-[#ebf2f7]/80"
                  >
                    <CheckCircle2
                      className="text-[#ff8c00] h-5 w-5 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 pt-4 text-[11px] uppercase tracking-[0.2em] font-bold text-[#ebf2f7]/40">
              <span>✓ Sin compromiso</span>
              <span>✓ Respuesta en 24-48h</span>
              <span>✓ Primera consulta gratis</span>
            </div>
          </div>

          {/* ── COLUMNA DERECHA: FORMULARIO ── */}
          <div className="bg-[#07213a] p-8 md:p-10 rounded-2xl border border-white/10 shadow-2xl">
            <h2 className="text-2xl font-bold mb-8 text-white">
             Envíanos <span className="text-[#ff8c00]">tu consulta</span>
            </h2>

            <form
              action="/api/contact"
              method="POST"
              aria-label="Formulario de contacto"
              className="space-y-5"
            >
              {/* Nombre */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label
                  htmlFor="ct-name"
                  className="block text-[10px] uppercase tracking-widest font-bold text-[#ebf2f7]/50"
                >
                  Nombre de contacto *
                </label>
                <input
                  id="ct-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Tu nombre"
                  className="w-full bg-[#0a2b49] border border-white/10 rounded-xl h-12 px-4 text-sm text-[#ebf2f7] placeholder:text-[#7fa8c9] focus:outline-none focus:border-[#ff8c00]/50 transition-colors"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label
                  htmlFor="ct-email"
                  className="block text-[10px] uppercase tracking-widest font-bold text-[#ebf2f7]/50"
                >
                  Email *
                </label>
                <input
                  id="ct-email"
                  name="email"
                  type="email"
                  required
                  placeholder="tu@email.com"
                  className="w-full bg-[#0a2b49] border border-white/10 rounded-xl h-12 px-4 text-sm text-[#ebf2f7] placeholder:text-[#7fa8c9] focus:outline-none focus:border-[#ff8c00]/50 transition-colors"
                />
              </div>
</div>

            {/* Teléfono + Empresa */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="ct-phone"
                    className="block text-[10px] uppercase tracking-widest font-bold text-[#ebf2f7]/50"
                  >
                    Teléfono (opcional)
                  </label>
                  <input
                    id="ct-phone"
                    name="phone"
                    type="tel"
                    placeholder="+34 600 000 000"
                    className="w-full bg-[#0a2b49] border border-white/10 rounded-xl h-12 px-4 text-sm text-[#ebf2f7] placeholder:text-[#7fa8c9] focus:outline-none focus:border-[#ff8c00]/50 transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="ct-company"
                    className="block text-[10px] uppercase tracking-widest font-bold text-[#ebf2f7]/50"
                  >
                    Empresa / Web
                  </label>
                  <input
                    id="ct-company"
                    name="company"
                    type="text"
                    placeholder="tuempresa.com"
                    className="w-full bg-[#0a2b49] border border-white/10 rounded-xl h-12 px-4 text-sm text-[#ebf2f7] placeholder:text-[#7fa8c9] focus:outline-none focus:border-[#ff8c00]/50 transition-colors"
                  />
                </div>
              </div>
             
              {/* 1. Tipo de Perfil / Tamaño de Empresa */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="ct-profile" className="block text-[10px] uppercase tracking-widest font-bold text-[#ebf2f7]/50">
                    Perfil de empresa *
                  </label>
                  <select
                    id="ct-profile"
                    name="profile"
                    required
                    className="w-full bg-[#0a2b49] border border-white/10 rounded-xl h-12 px-4 text-sm text-[#ebf2f7] focus:border-[#ff8c00]/50 outline-none appearance-none"
                  >
                    <option value="">Selecciona tu perfil</option>
                    <option value="pyme">Autónomo / PYME (Servicios básicos)</option>
                    <option value="empresa">Empresa Mediana / Grande (Estrategia 360°)</option>
                    <option value="agencia">Agencia (Marca Blanca / Outsourcing)</option>
                  </select>
                </div>

                {/* 2. Servicios Específicos (Multiselect o Grupos) */}
                              <div className="space-y-1.5">
                  <label htmlFor="ct-service" className="block text-[10px] uppercase tracking-widest font-bold text-[#ebf2f7]/50">
                    ¿Qué servicios necesitas cubrir?
                  </label>
                  <select
                    id="ct-service"
                    name="service"
                    className="w-full bg-[#0a2b49] border border-white/10 rounded-xl h-12 px-4 text-sm text-[#ebf2f7] focus:outline-none focus:border-[#ff8c00]/50 transition-colors appearance-none"
                  >
                    <optgroup label="SEO" className="bg-[#07213a]">
                      <option value="seo-tecnico">SEO Técnico e Indexación</option>
                      <option value="seo-local">SEO Local (Google Maps)</option>
                      <option value="seo-content">Estrategia de Contenidos</option>
                    </optgroup>
                    <optgroup label="SEM & PAID" className="bg-[#07213a]">
                      <option value="google-ads">Google Ads (Search/Shopping)</option>
                      <option value="social-ads">Meta / LinkedIn Ads</option>
                    </optgroup>
                    <optgroup label="OTROS" className="bg-[#07213a]">
                      <option value="ia-automation">IA y Automatización</option>
                      <option value="web-dev">Desarrollo Web / Landing Pages</option>
                    </optgroup>
                  </select>
                </div>
              </div>
      {/* 3. Necesidad Puntual */}
      <div className="space-y-1.5">
        <label htmlFor="ct-urgent" className="block text-[10px] uppercase tracking-widest font-bold text-[#ebf2f7]/50">
          Necesidad más urgente
        </label>
        <select
          id="ct-urgent"
          name="urgent"
          className="w-full bg-[#0a2b49] border border-white/10 rounded-xl h-12 px-4 text-sm text-[#ebf2f7] focus:border-[#ff8c00]/50 outline-none appearance-none"
        >
          <option value="leads">Necesito generar leads/ventas ya</option>
          <option value="visibilidad">No me encuentran en buscadores</option>
          <option value="migracion">Voy a cambiar de web y no quiero perder tráfico</option>
          <option value="analisis">Necesito medir mejor mis resultados</option>
        </select>
      </div>
              {/* Servicio */}
              <div className="space-y-1.5">
                <label
                  htmlFor="ct-service"
                  className="block text-[10px] uppercase tracking-widest font-bold text-[#ebf2f7]/50"
                >
                  ¿Qué servicio te interesa?
                </label>
                <select
                  id="ct-service"
                  name="service"
                  className="w-full bg-[#0a2b49] border border-white/10 rounded-xl h-12 px-4 text-sm text-[#ebf2f7] focus:outline-none focus:border-[#ff8c00]/50 transition-colors appearance-none"
                >
                  <option value="" className="text-[#7fa8c9]">
                    Selecciona un servicio
                  </option>
                  <option value="seo">SEO Técnico & On-Page</option>
                  <option value="ppc">PPC & Paid Search</option>
                  <option value="content">Content Marketing</option>
                  <option value="automatizaciones">Automatizaciones</option>
                  <option value="web">Desarrollo Web</option>
                  <option value="marca">Imagen de Marca</option>
                  <option value="360">Estrategia 360°</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              {/* Mensaje */}
              <div className="space-y-1.5">
                <label
                  htmlFor="ct-message"
                  className="block text-[10px] uppercase tracking-widest font-bold text-[#ebf2f7]/50"
                >
                  Cuéntanos tu proyecto *
                </label>
                <textarea
                  id="ct-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="¿Cuál es tu objetivo principal? ¿Qué retos tienes ahora mismo?"
                  className="w-full bg-[#0a2b49] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#ebf2f7] placeholder:text-[#7fa8c9] focus:outline-none focus:border-[#ff8c00]/50 transition-colors resize-y"
                />
              </div>

              {/* ── LEGAL CON MODALES ── */}
              <div className="flex items-start gap-3 pt-1">
                <input
                  type="checkbox"
                  id="ct-legal"
                  required
                  className="mt-1 w-3.5 h-3.5 accent-[#ff8c00] shrink-0"
                />
                <label
                  htmlFor="ct-legal"
                  className="text-[10px] text-[#ebf2f7]/40 leading-relaxed cursor-pointer"
                >
                  He leído y acepto la{" "}
                  <button
                    type="button"
                    onClick={() => openModal("privacidad")}
                    className="text-[#ff8c00] underline underline-offset-2 hover:text-[#e07a00] transition-colors"
                  >
                    Política de Privacidad
                  </button>
                  {" "}y los{" "}
                  <button
                    type="button"
                    onClick={() => openModal("terminos")}
                    className="text-[#ff8c00] underline underline-offset-2 hover:text-[#e07a00] transition-colors"
                  >
                    Términos y Condiciones
                  </button>
                  . También puedes consultar nuestra{" "}
                  <button
                    type="button"
                    onClick={() => openModal("cookies")}
                    className="text-[#ff8c00] underline underline-offset-2 hover:text-[#e07a00] transition-colors"
                  >
                    Política de Cookies
                  </button>
                  .
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#ebf2f7] hover:bg-[#ff8c00] text-[#0a2b49] hover:text-white font-bold rounded-xl h-14 text-base transition-all duration-300 cursor-pointer mt-2 group"
              >
                Enviar mensaje
                <Send
                  className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                  aria-hidden="true"
                />
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* ── MODALES LEGALES ── */}
      <LegalModal
        isOpen={activeModal === "privacidad"}
        onClose={closeModal}
        title="Política de Privacidad"
      >
        <PrivacidadContent />
      </LegalModal>

      <LegalModal
        isOpen={activeModal === "terminos"}
        onClose={closeModal}
        title="Términos y Condiciones"
      >
        <TerminosContent />
      </LegalModal>

      <LegalModal
        isOpen={activeModal === "cookies"}
        onClose={closeModal}
        title="Política de Cookies"
      >
        <CookiesContent />
      </LegalModal>
    </>
  );
}

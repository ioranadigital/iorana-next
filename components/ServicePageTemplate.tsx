// components/ServicePageTemplate.tsx
import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ChevronDown } from "lucide-react";
import ServiceContactForm from "@/components/ServiceContactForm";

const C = {
  bg:           "bg-[#0a2b49]",
  panel:        "bg-[#07213a]",
  panelAlt:     "bg-[#0d3355]",
  border:       "border-white/10",
  text:         "text-[#ebf2f7]",
  muted:        "text-[#7fa8c9]",
  accent:       "text-[#ff8c00]",
  accentBg:     "bg-[#ff8c00]",
  accentHover:  "hover:bg-[#e67e00]",
} as const;

export interface ServicePageData {
  meta: { title: string; description: string; ogImage?: string };
  hero: {
    title: string;
    subtitle: string;
    whyPoints: string[];
    ctaLabel?: string;
    ctaHref?: string;
  };
  includes: { text: string }[];
  process:  { title: string; description: string }[];
  results:  { value: string; label: string }[];
  faq:      { q: string; a: string }[];
  form?:    { endpoint: string };
}

export function buildMetadata(data: ServicePageData): Metadata {
  return {
    title: `${data.meta.title} | IORANA Digital`,
    description: data.meta.description,
    openGraph: {
      title: data.meta.title,
      description: data.meta.description,
      images: data.meta.ogImage ? [data.meta.ogImage] : [],
      type: "website",
    },
    twitter: { card: "summary_large_image", title: data.meta.title },
  };
}

function SplitTitle({ text, center = false, size = "text-3xl md:text-4xl" }: { text: string; center?: boolean; size?: string }) {
  const words = text.trim().split(" ");
  const first = words[0];
  const rest  = words.slice(1).join(" ");
  return (
    <span className={`block font-extrabold leading-tight ${size} ${center ? "text-center" : ""}`}>
      <span className="text-white">{first}</span>
      {rest && <> <span className="text-[#ff8c00]">{rest}</span></>}
    </span>
  );
}

export default function ServicePageTemplate({ data }: { data: ServicePageData }) {
  const { hero, includes, process, faq } = data;

  return (
    <main className={`w-full ${C.bg} ${C.text} font-body pt-20`}>

      {/* ── HERO ── */}
      <section className="max-w-5xl mx-auto px-6 pt-12 pb-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="mb-4">
              <SplitTitle text={hero.title} size="text-5xl md:text-6xl" />
            </h1>
            <p className={`${C.muted} text-base`}>{hero.subtitle}</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <aside className="bg-[#0d3355] border border-[#ebf2f7]/25 rounded-xl p-7">
            <h2 className={`flex items-center gap-2 text-xl font-bold ${C.text} mb-5`}>
               ¿Por qué <em className={`not-italic ${C.accent} ml-1`}>importa</em>?
            </h2>
            <ul role="list" className="space-y-4">
              {hero.whyPoints.map((p, i) => (
                <li key={i} className={`flex items-start gap-3 text-sm ${C.text}`}>
                  <span aria-hidden="true" className="mt-1.5 w-2.5 h-2.5 rounded-full bg-[#ff8c00] shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </aside>

          {/* Enlace Normal a Diagnóstico */}
          <a
            href="https://iorana.digital/informe-sitio-web-gratis"
            className="block w-full text-center py-3 px-5 rounded-xl bg-[#ebf2f7] hover:bg-white text-[#07213a] text-sm font-semibold transition-colors"
          >
            Empezar el diagnóstico gratuito →
          </a>
        </div>
      </section>

      {/* ── QUÉ INCLUYE ── */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <h2 className="mb-6">
          <SplitTitle text="¿Qué incluye?" size="text-2xl md:text-3xl" />
        </h2>
        <ul role="list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {includes.map((item, i) => (
            <li key={i} className="flex items-start gap-3 bg-[#0d3355] border border-[#ebf2f7]/20 rounded-xl px-5 py-4 text-sm">
              <CheckCircle2 size={18} className="text-[#ff8c00] shrink-0 mt-0.5" />
              {item.text}
            </li>
          ))}
        </ul>
      </section>

      {/* ── PROCESO ── */}
      <section className="w-full max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-center mb-10">
          <SplitTitle text="Nuestro proceso" center size="text-3xl md:text-4xl" />
        </h2>
        <ol role="list" className="flex flex-col gap-4">
          {process.map((step, i) => (
            <li key={i} className={`flex items-start gap-5 ${C.panel} border ${C.border} rounded-xl px-6 py-5`}>
              <span className={`shrink-0 w-9 h-9 rounded-full ${C.accentBg} text-white font-extrabold text-sm flex items-center justify-center`}>
                {i + 1}
              </span>
              <div>
                <h3 className="text-base font-bold mb-1">{step.title}</h3>
                <p className={`text-sm ${C.muted}`}>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

{/* ── FAQ + CONTACTO — Secciones más juntas ── */}
      <section id="contacto" className="w-full max-w-6xl mx-auto px-6 py-24">
        {/* gap-12 en lugar de gap-32 para juntar las columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Columna FAQs: Sin max-w-md para que ocupe su espacio natural y se acerque al centro */}
          <div className="w-full">
            <div className="mb-10"> 
              <h2 className="mb-2">
                <SplitTitle text="Preguntas frecuentes" size="text-3xl md:text-4xl" />
              </h2>
              <p className={`${C.muted} text-sm`}>Resolvemos tus principales dudas.</p>
            </div>
            <dl className="flex flex-col gap-4">
              {faq.map((item, i) => (
                <div key={i} className={`${C.panel} border ${C.border} rounded-xl overflow-hidden`}>
                  <details className="group">
                    <summary className="flex justify-between items-center px-5 py-4 cursor-pointer text-sm font-semibold list-none">
                      {item.q}
                      <ChevronDown size={18} className={`${C.muted} shrink-0 transition-transform duration-200 group-open:rotate-180`} />
                    </summary>
                    <dd className={`px-5 pb-5 text-sm ${C.muted} leading-relaxed`}>{item.a}</dd>
                  </details>
                </div>
              ))}
            </dl>
          </div>

          {/* Columna Formulario: Alineada visualmente con la primera FAQ */}
          <div className="lg:sticky lg:top-28 w-full flex flex-col">
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
                ¿Tienes <span className="text-[#ff8c00]">preguntas?</span>
              </h2>
              <p className={`${C.muted} text-sm`}>Estudiaremos tu caso sin compromiso.</p>
            </div>
            <div className="bg-[#07213a] border border-white/15 rounded-2xl p-8 shadow-2xl">
              <ServiceContactForm service={hero.title} />
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
// components/Footer.tsx
"use client";
import Link from "next/link";

const serviceLinks = [
  { label: "SEO Técnico & On-Page", href: "/servicios/seo-tecnico" },
  { label: "PPC & Paid Search", href: "/servicios/ppc-paid-search" },
  { label: "Content Marketing", href: "/servicios/content-marketing" },
  { label: "Automatizaciones", href: "/servicios/automatizaciones" },
  { label: "Desarrollo Web", href: "/servicios/desarrollo-web" },
  { label: "Imagen de Marca", href: "/servicios/imagen-de-marca" },
];

const solutionLinks = [
  { label: "Kit Digital", href: "/soluciones/kit-digital" },
  { label: "Diseño de Landings", href: "/soluciones/diseno-de-landings" },
  { label: "Todo para Tu Negocio", href: "/soluciones/todo-para-tu-negocio" },
];

const Footer = () => (
  <footer className="w-full bg-[#0a2b49] border-t border-[#ebf2f7]/10 pt-16 pb-8">
    <div className="max-w-6xl mx-auto px-6">

      {/* ── GRID 4 COLUMNAS ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

        {/* Branding */}
        <div className="space-y-4">
          <Link href="/" className="inline-block font-heading text-xl font-black tracking-tight">
            <span className="text-[#ff8c00]">IORANA</span>
            <span className="text-[#ebf2f7]"> Digital</span>
          </Link>
          <p className="text-sm text-[#ebf2f7]/50 leading-relaxed max-w-[200px]">
            Marketing digital estratégico para empresas que quieren crecer.
          </p>
        </div>

        {/* Servicios */}
        <div>
          <p className="text-xs font-bold text-[#ff8c00] uppercase tracking-[0.18em] mb-6">
            Servicios
          </p>
          <ul className="space-y-3">
            {serviceLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-[#ebf2f7]/60 hover:text-[#ff8c00] transition-colors duration-200"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Soluciones */}
        <div>
          <p className="text-xs font-bold text-[#ff8c00] uppercase tracking-[0.18em] mb-6">
            Soluciones
          </p>
          <ul className="space-y-3">
            {solutionLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-[#ebf2f7]/60 hover:text-[#ff8c00] transition-colors duration-200"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <p className="text-xs font-bold text-[#ff8c00] uppercase tracking-[0.18em] mb-6">
            Legal
          </p>
          <ul className="space-y-3">
            <li>
              <Link href="/privacidad" className="text-sm text-[#ebf2f7]/60 hover:text-[#ff8c00] transition-colors duration-200">
                Privacidad
              </Link>
            </li>
            <li>
              <Link href="/terminos" className="text-sm text-[#ebf2f7]/60 hover:text-[#ff8c00] transition-colors duration-200">
                Términos
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* ── COPYRIGHT ── */}
      <div className="border-t border-[#ebf2f7]/5 pt-8 text-center text-xs text-[#ebf2f7]/30">
        © {new Date().getFullYear()} IORANA Digital. Todos los derechos reservados.
      </div>

    </div>
  </footer>
);

export default Footer;

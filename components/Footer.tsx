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
  /* 1. ESTRUCTURA: Fondo oscuro consistente y borde sutil */
  <footer className="w-full bg-[#0a2b49] border-t border-[#ebf2f7]/10 py-16">
    
    {/* 2. CONTENEDOR: Alineación max-w-7xl */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
        
        {/* Branding & Bio (Ocupa 2 columnas en desktop) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="font-heading text-2xl font-black tracking-tighter">
            <span className="text-orange-500">Iorana</span>
            <span className="text-[#ebf2f7]"> Digital</span>
          </div>
          <p className="text-[#ebf2f7]/50 text-base leading-relaxed max-w-xs">
            Ingeniería y Growth Marketing estratégico para empresas SaaS que buscan dominar su mercado orgánico.
          </p>
          <div className="flex gap-4">
            {/* Espacio para redes sociales en el futuro */}
            <div className="w-8 h-8 rounded-full bg-[#ebf2f7]/5 border border-[#ebf2f7]/10" />
            <div className="w-8 h-8 rounded-full bg-[#ebf2f7]/5 border border-[#ebf2f7]/10" />
          </div>
        </div>

        {/* Servicios: Enlaces SEO Friendly */}
        <div>
          <div className="text-xs font-bold text-orange-500 uppercase tracking-[0.2em] mb-6">Servicios</div>
          <ul className="space-y-4">
            {serviceLinks.map((l) => (
              <li key={l.href}>
                <Link 
                  href={l.href} 
                  className="text-sm text-[#ebf2f7]/60 hover:text-orange-500 transition-colors duration-300"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Soluciones */}
        <div>
          <div className="text-xs font-bold text-orange-500 uppercase tracking-[0.2em] mb-6">Soluciones</div>
          <ul className="space-y-4">
            {solutionLinks.map((l) => (
              <li key={l.href}>
                <Link 
                  href={l.href} 
                  className="text-sm text-[#ebf2f7]/60 hover:text-orange-500 transition-colors duration-300"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <div className="text-xs font-bold text-orange-500 uppercase tracking-[0.2em] mb-6">Legal</div>
          <ul className="space-y-4">
            <li>
              <Link href="/privacidad" className="text-sm text-[#ebf2f7]/60 hover:text-orange-500 transition-colors">
                Privacidad
              </Link>
            </li>
            <li>
              <Link href="/terminos" className="text-sm text-[#ebf2f7]/60 hover:text-orange-500 transition-colors">
                Términos
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="text-sm text-[#ebf2f7]/60 hover:text-orange-500 transition-colors">
                Cookies
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* 3. COPYRIGHT: Línea final limpia */}
      <div className="border-t border-[#ebf2f7]/5 pt-8 flex flex-col md:row justify-between items-center gap-4 text-xs text-[#ebf2f7]/30">
        <p>© {new Date().getFullYear()} Iorana Digital. Todos los derechos reservados.</p>
        <p className="italic">Built with Engineering & Passion</p>
      </div>
    </div>
  </footer>
);

export default Footer;

// components/Navbar.tsx
"use client";

import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const serviceLinks = [
  { label: "SEO Técnico & On-Page",  href: "/servicios/seo-tecnico" },
  { label: "PPC & Paid Search",      href: "/servicios/ppc-paid-search" },
  { label: "Content Marketing",      href: "/servicios/content-marketing" },
  { label: "Automatizaciones",       href: "/servicios/automatizaciones" },
  { label: "Desarrollo Web",         href: "/servicios/desarrollo-web" },
  { label: "Imagen de Marca",        href: "/servicios/imagen-de-marca" },
];

const solutionLinks = [
  { label: "Kit Digital",            href: "/soluciones/kit-digital" },
  { label: "Diseño de Landings",     href: "/soluciones/diseno-de-landings" },
  { label: "Todo para Tu Negocio",   href: "/soluciones/todo-para-tu-negocio" },
  { label: "Informe Gratuito",       href: "/soluciones/como-esta-optimizado-mi-web" },
];

// Enlaces de scroll — llevan a secciones de la Home
const scrollLinks = [
  { label: "Nosotros",     id: "#nosotros" },
  { label: "Casos de Éxito", id: "#casos" },
  { label: "FAQ",          id: "#faq" },
];

const Navbar = () => {
  const [open, setOpen]           = useState(false);
  const [megaOpen, setMegaOpen]   = useState(false);
  const [mobileSolOpen, setMobileSolOpen] = useState(false);
  const pathname = usePathname();
  const router   = useRouter();

  const handleScroll = (id: string) => {
    setOpen(false);
    if (pathname !== "/") {
      router.push("/" + id);
    } else {
      document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[9999] bg-[#0a2b49]/95 backdrop-blur-md border-b border-white/10 font-sans">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">

        {/* ── LOGO ── */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/iorana-marketing-digital.png"
            alt="IORANA Digital logo"
            width={36} height={36}
            className="object-contain"
          />
          <span className="font-heading text-xl font-bold tracking-tight text-[#ebf2f7]">
            <span className="text-[#ff8c00]">IORANA</span> Digital
          </span>
        </Link>

        {/* ── DESKTOP MENU ── */}
        <div className="hidden md:flex items-center gap-7">

          {/* Inicio */}
          <button
            onClick={() => handleScroll("#hero")}
            className="text-sm text-[#ebf2f7] hover:text-[#ff8c00] transition-colors font-medium"
          >
            Inicio
          </button>

          {/* Soluciones de Marketing — mega menu */}
          <div
            className="relative h-20 flex items-center"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm text-[#ebf2f7] hover:text-[#ff8c00] transition-colors font-medium">
              Soluciones de Marketing
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${megaOpen ? "rotate-180 text-[#ff8c00]" : ""}`}
              />
            </button>

            {/* Dropdown */}
            {megaOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[520px] bg-[#07213a] border border-white/10 rounded-2xl shadow-2xl p-6 grid grid-cols-2 gap-6">
                <div>
                  <p className="text-[10px] font-bold text-[#ff8c00] uppercase tracking-widest mb-3">
                    Servicios
                  </p>
                  <ul className="space-y-2">
                    {serviceLinks.map((s) => (
                      <li key={s.href}>
                        <Link
                          href={s.href}
                          className="block text-sm text-[#ebf2f7]/70 hover:text-[#ff8c00] transition-colors py-1"
                          onClick={() => setMegaOpen(false)}
                        >
                          {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#ff8c00] uppercase tracking-widest mb-3">
                    Soluciones
                  </p>
                  <ul className="space-y-2">
                    {solutionLinks.map((s) => (
                      <li key={s.href}>
                        <Link
                          href={s.href}
                          className="block text-sm text-[#ebf2f7]/70 hover:text-[#ff8c00] transition-colors py-1"
                          onClick={() => setMegaOpen(false)}
                        >
                          {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Nosotros / Casos de Éxito / FAQ */}
          {scrollLinks.map((l) => (
            <button
              key={l.id}
              onClick={() => handleScroll(l.id)}
              className="text-sm text-[#ebf2f7] hover:text-[#ff8c00] transition-colors font-medium"
            >
              {l.label}
            </button>
          ))}

          {/* CTA */}
          <Link
            href="/servicios/seo-tecnico"
            className="text-sm font-semibold px-5 py-2 rounded-full border border-[#ebf2f7]/30 text-[#ebf2f7] hover:bg-[#ebf2f7] hover:text-[#0a2b49] transition-all duration-200"
          >
            Nuestros Servicios
          </Link>
        </div>

        {/* ── HAMBURGER ── */}
        <button
          className="md:hidden text-[#ebf2f7] p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── MOBILE MENU ── */}
      {open && (
        <div className="md:hidden bg-[#07213a] border-t border-white/10 px-6 py-5 space-y-3">
          <button onClick={() => handleScroll("#hero")} className="block w-full text-left text-[#ebf2f7] font-medium py-2 hover:text-[#ff8c00]">
            Inicio
          </button>

          {/* Soluciones accordion */}
          <div>
            <button
              onClick={() => setMobileSolOpen(!mobileSolOpen)}
              className="flex justify-between items-center w-full text-[#ebf2f7] font-medium py-2 hover:text-[#ff8c00]"
            >
              Soluciones de Marketing
              <ChevronDown className={`h-4 w-4 transition-transform ${mobileSolOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileSolOpen && (
              <div className="pl-4 pt-2 space-y-1">
                <p className="text-[10px] font-bold text-[#ff8c00] uppercase tracking-widest pb-1">Servicios</p>
                {serviceLinks.map((s) => (
                  <Link key={s.href} href={s.href} onClick={() => setOpen(false)}
                    className="block py-1.5 text-sm text-[#ebf2f7]/70 hover:text-[#ff8c00]">
                    {s.label}
                  </Link>
                ))}
                <p className="text-[10px] font-bold text-[#ff8c00] uppercase tracking-widest pb-1 pt-3">Soluciones</p>
                {solutionLinks.map((s) => (
                  <Link key={s.href} href={s.href} onClick={() => setOpen(false)}
                    className="block py-1.5 text-sm text-[#ebf2f7]/70 hover:text-[#ff8c00]">
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {scrollLinks.map((l) => (
            <button key={l.id} onClick={() => handleScroll(l.id)}
              className="block w-full text-left text-[#ebf2f7] font-medium py-2 hover:text-[#ff8c00]">
              {l.label}
            </button>
          ))}

          <Link href="/servicios/seo-tecnico" onClick={() => setOpen(false)}
            className="block w-full text-center mt-4 py-3 rounded-xl border border-[#ebf2f7]/20 text-[#ebf2f7] font-semibold hover:bg-[#ebf2f7] hover:text-[#0a2b49] transition-all">
            Nuestros Servicios
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

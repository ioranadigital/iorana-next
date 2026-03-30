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
  { label: "Informe Gratuito",       href: "/soluciones/como-esta-optimizado-mi-web" },
];

const scrollLinks = [
  { label: "Nosotros",     id: "#nosotros" },
  { label: "Como trabajamos", id: "#metodologia" },
  { label: "FAQs",           id: "#faqs" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openServicios, setOpenServicios] = useState(false);
  const [openSoluciones, setOpenSoluciones] = useState(false);
  
  const [mobileSerOpen, setMobileSerOpen] = useState(false);
  const [mobileSolOpen, setMobileSolOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const handleScroll = (id: string) => {
    setOpen(false);
    if (pathname !== "/") {
      router.push("/" + id);
    } else {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
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
          <button onClick={() => handleScroll("#hero")} className="text-sm text-[#ebf2f7] hover:text-[#ff8c00] transition-colors font-medium">
            Inicio
          </button>

          {/* DROP DOWN: SERVICIOS */}
          <div 
            className="relative h-20 flex items-center"
            onMouseEnter={() => setOpenServicios(true)}
            onMouseLeave={() => setOpenServicios(false)}
          >
            <button className="flex items-center gap-1 text-sm text-[#ebf2f7] hover:text-[#ff8c00] transition-colors font-medium">
              Servicios
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${openServicios ? "rotate-180 text-[#ff8c00]" : ""}`} />
            </button>
            {openServicios && (
              <div className="absolute top-[70px] left-0 w-64 bg-[#07213a] border border-white/10 rounded-xl shadow-2xl p-4 animate-in fade-in slide-in-from-top-2">
                <ul className="space-y-1">
                  {serviceLinks.map((s) => (
                    <li key={s.href}>
                      <Link href={s.href} className="block text-sm text-[#ebf2f7]/80 hover:text-[#ff8c00] hover:bg-white/5 px-3 py-2 rounded-lg transition-all">
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* DROP DOWN: SOLUCIONES */}
          <div 
            className="relative h-20 flex items-center"
            onMouseEnter={() => setOpenSoluciones(true)}
            onMouseLeave={() => setOpenSoluciones(false)}
          >
            <button className="flex items-center gap-1 text-sm text-[#ebf2f7] hover:text-[#ff8c00] transition-colors font-medium">
              Soluciones
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${openSoluciones ? "rotate-180 text-[#ff8c00]" : ""}`} />
            </button>
            {openSoluciones && (
              <div className="absolute top-[70px] left-0 w-64 bg-[#07213a] border border-white/10 rounded-xl shadow-2xl p-4 animate-in fade-in slide-in-from-top-2">
                <ul className="space-y-1">
                  {solutionLinks.map((s) => (
                    <li key={s.href}>
                      <Link href={s.href} className="block text-sm text-[#ebf2f7]/80 hover:text-[#ff8c00] hover:bg-white/5 px-3 py-2 rounded-lg transition-all">
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* ── PYMES (Entre Soluciones y Nosotros) ── */}
          <Link href="/pymes/todo-para-tu-negocio" className="text-sm text-[#ebf2f7] hover:text-[#ff8c00] transition-colors font-medium">
            Pymes
          </Link>

          {/* ENLACES DE SCROLL (Comienza con Nosotros) */}
          {scrollLinks.map((l) => (
            <button key={l.id} onClick={() => handleScroll(l.id)} className="text-sm text-[#ebf2f7] hover:text-[#ff8c00] transition-colors font-medium">
              {l.label}
            </button>
          ))}
          
          <Link href="/contacto" className="text-sm font-semibold px-5 py-2 rounded-full border border-[#ebf2f7]/30 text-[#ebf2f7] hover:bg-[#ebf2f7] hover:text-[#0a2b49] transition-all duration-200">
            Contáctanos
          </Link>
        </div>

        {/* ── HAMBURGER ── */}
        <button className="md:hidden text-[#ebf2f7] p-2" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── MOBILE MENU ── */}
      {open && (
        <div className="md:hidden bg-[#07213a] border-t border-white/10 px-6 py-5 space-y-3 overflow-y-auto max-h-[80vh]">
          <button onClick={() => handleScroll("#hero")} className="block w-full text-left text-[#ebf2f7] font-medium py-2">Inicio</button>

          <div>
            <button onClick={() => setMobileSerOpen(!mobileSerOpen)} className="flex justify-between items-center w-full text-[#ebf2f7] font-medium py-2">
              Servicios <ChevronDown className={`h-4 w-4 transition-transform ${mobileSerOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileSerOpen && (
              <div className="pl-4 space-y-2 pb-2">
                {serviceLinks.map((s) => (
                  <Link key={s.href} href={s.href} onClick={() => setOpen(false)} className="block py-1 text-sm text-[#ebf2f7]/70">{s.label}</Link>
                ))}
              </div>
            )}
          </div>

          <div>
            <button onClick={() => setMobileSolOpen(!mobileSolOpen)} className="flex justify-between items-center w-full text-[#ebf2f7] font-medium py-2">
              Soluciones <ChevronDown className={`h-4 w-4 transition-transform ${mobileSolOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileSolOpen && (
              <div className="pl-4 space-y-2 pb-2">
                {solutionLinks.map((s) => (
                  <Link key={s.href} href={s.href} onClick={() => setOpen(false)} className="block py-1 text-sm text-[#ebf2f7]/70">{s.label}</Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/pymes/todo-para-tu-negocio" onClick={() => setOpen(false)} className="block w-full text-left text-[#ebf2f7] font-medium py-2">
            Pymes
          </Link>

          {scrollLinks.map((l) => (
            <button key={l.id} onClick={() => handleScroll(l.id)} className="block w-full text-left text-[#ebf2f7] font-medium py-2">{l.label}</button>
          ))}
          
          <Link href="/contacto" onClick={() => setOpen(false)} className="block w-full text-center mt-4 py-3 rounded-xl bg-[#ff8c00] text-white font-semibold">
            Contáctanos
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
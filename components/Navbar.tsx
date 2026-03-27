"use client";

import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const serviceLinks = [ 
  { label: 'SEO Técnico & On-Page', href: '/servicios/seo-tecnico' },
  { label: 'PPC & Paid Search', href: '/servicios/ppc-paid-search' },
  { label: 'Content Marketing', href: '/servicios/content-marketing' },
  { label: 'Automatizaciones', href: '/servicios/automatizaciones' },
  { label: 'Desarrollo Web', href: '/servicios/desarrollo-web' },
  { label: 'Imagen de Marca', href: '/servicios/imagen-de-marca' },
];

const solutionLinks = [
  { label: 'Diseño de Landings', href: '/soluciones/diseno-de-landings' },
  { label: 'Todo para Tu Negocio', href: '/soluciones/todo-para-tu-negocio' },
  { label: 'Informe Gratuito', href: '/soluciones/como-esta-optimizado-mi-web' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Función para manejar el scroll o la navegación a la Home
  const handleScroll = (id: string) => {
    if (pathname !== "/") {
      router.push("/" + id);
    } else {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[9999] bg-[#0a2b49]/95 backdrop-blur-md border-b border-white/10 font-sans">
      <div className="container mx-auto flex items-center justify-between h-20 px-6">
        
        {/* LOGO */}
        <div className="flex items-center gap-3 shrink-0">
          <Link href="/" className="flex items-center gap-3">
            <img src="/iorana-marketing-digital.png" alt="Logo" className="h-9 w-auto object-contain" />
            <span className="font-heading text-2xl font-bold tracking-tight text-[#ebf2f7]">
              IORANA <span className="font-sans font-light text-[#ebf2f7]/70">Digital</span>
            </span>
          </Link>
        </div>

        {/* MENÚ DESKTOP */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => handleScroll('#hero')} className="text-sm text-[#ebf2f7] hover:text-[#ff8c00] transition-colors font-medium">Inicio</button>
          
          {/* MEGA MENÚ SOLUCIONES */}
          <div 
            className="relative h-20 flex items-center group" 
            onMouseEnter={() => setMegaOpen(true)} 
            onMouseLeave={() => setMegaOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm text-[#ebf2f7] hover:text-[#ff8c00] transition-colors font-medium">
              Soluciones <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${megaOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {megaOpen && (
              <div className="absolute top-[75px] left-1/2 -translate-x-1/2 w-[550px] pt-4 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="bg-[#0a2b49] border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-8 overflow-hidden relative">
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#ff8c00]/10 rounded-full blur-3xl" />
                  
                  <div className="grid grid-cols-2 gap-10 relative z-10">
                    {/* Servicios */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-1 h-4 bg-[#ff8c00] rounded-full" />
                        <p className="text-[11px] font-extrabold text-[#ff8c00] uppercase tracking-[0.2em]">Servicios</p>
                      </div>
                      <div className="space-y-1">
                        {serviceLinks.map(s => (
                          <Link key={s.href} href={s.href} onClick={() => setMegaOpen(false)} className="block py-2 text-[13px] text-[#ebf2f7]/70 hover:text-white hover:translate-x-1 transition-all">
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Soluciones */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-1 h-4 bg-[#ff8c00] rounded-full" />
                        <p className="text-[11px] font-extrabold text-[#ff8c00] uppercase tracking-[0.2em]">Estrategias</p>
                      </div>
                      <div className="space-y-1">
                        {solutionLinks.map(s => (
                          <Link key={s.href} href={s.href} onClick={() => setMegaOpen(false)} className="block py-2 text-[13px] text-[#ebf2f7]/70 hover:text-white hover:translate-x-1 transition-all">
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <button onClick={() => handleScroll('#nosotros')} className="text-sm text-[#ebf2f7] hover:text-[#ff8c00] transition-colors font-medium">Nosotros</button>
          
          <Link href="/contacto">
            <Button size="sm" className="bg-[#ebf2f7] text-[#0a2b49] font-bold hover:bg-[#ff8c00] hover:text-white rounded-full px-6 transition-all duration-300">
              Contáctanos
            </Button>
          </Link>
        </div>
        
        {/* Toggle Mobile */}
        <button className="md:hidden text-[#ebf2f7]" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menú Mobile */}
      {open && (
        <div className="md:hidden bg-[#0a2b49] border-t border-white/10 p-6 space-y-4">
          <button onClick={() => handleScroll('#hero')} className="block text-[#ebf2f7] font-medium">Inicio</button>
          <button onClick={() => handleScroll('#nosotros')} className="block text-[#ebf2f7] font-medium">Nosotros</button>
          <div className="pt-4 border-t border-white/5 space-y-2">
            <p className="text-[10px] font-bold text-[#ff8c00] uppercase">Más populares</p>
            <Link href="/servicios/seo-tecnico" onClick={() => setOpen(false)} className="block text-sm text-[#ebf2f7]/70">SEO Técnico</Link>
            <Link href="/servicios/desarrollo-web" onClick={() => setOpen(false)} className="block text-sm text-[#ebf2f7]/70">Desarrollo Web</Link>
          </div>
          <Link href="/contacto" className="block pt-4" onClick={() => setOpen(false)}>
              <Button className="w-full bg-[#ebf2f7] text-[#0a2b49]">Pedir Presupuesto</Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

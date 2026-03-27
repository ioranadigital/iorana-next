"use client";
import React, { useState, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from "react-router-dom"; 

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
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[9999] bg-[#0a2b49]/95 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto flex items-center justify-center gap-x-12 h-20 px-6">
        <div className="flex items-center gap-3 shrink-0">
          <img src="/iorana-marketing-digital.png" alt="Logo" className="h-9 w-auto object-contain" />
          <a href="/" className="font-heading text-2xl font-bold tracking-tight text-[#ebf2f7]">
            IORANA <span className="font-sans font-light text-[#ebf2f7]/70">Digital</span>
          </a>
        </div>

        <div className="hidden md:flex items-center gap-8 font-sans">
          <button onClick={() => handleNavClick('#hero')} className="text-sm text-[#ebf2f7] hover:text-[#ff8c00] transition-colors font-medium">Inicio</button>
          
          <div className="relative h-20 flex items-center" onMouseEnter={() => setMegaOpen(true)} onMouseLeave={() => setMegaOpen(false)}>
            <button className="flex items-center gap-1 text-sm text-[#ebf2f7] hover:text-[#ff8c00] transition-colors font-medium">
              Soluciones <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {megaOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[500px] pt-2">
                <div className="bg-[#0a2b49] border border-white/10 rounded-xl shadow-2xl p-6">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <p className="text-[10px] font-bold text-[#ff8c00] uppercase mb-3">Servicios</p>
                      {serviceLinks.map(s => <Link key={s.href} to={s.href} className="block py-1.5 text-sm text-[#ebf2f7]/70 hover:text-[#ff8c00]">{s.label}</Link>)}
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-[#ff8c00] uppercase mb-3">Soluciones</p>
                      {solutionLinks.map(s => <Link key={s.href} to={s.href} className="block py-1.5 text-sm text-[#ebf2f7]/70 hover:text-[#ff8c00]">{s.label}</Link>)}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <button onClick={() => handleNavClick('#nosotros')} className="text-sm text-[#ebf2f7] hover:text-[#ff8c00] transition-colors font-medium">Nosotros</button>
          <Button size="sm" className="bg-[#ebf2f7] text-[#0a2b49] font-bold hover:bg-[#ff8c00] hover:text-white rounded-full px-6">Nuestros Servicios</Button>
        </div>
        
        <button className="md:hidden text-[#ebf2f7]" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

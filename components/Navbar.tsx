{/* CONTENEDOR DE SOLUCIONES CON MEJORA DE UX */}
<div 
  className="relative h-20 flex items-center group" // Usamos 'group' de Tailwind
  onMouseEnter={() => setMegaOpen(true)} 
  onMouseLeave={() => setMegaOpen(false)}
>
  <button className="flex items-center gap-1 text-sm text-[#ebf2f7] group-hover:text-[#ff8c00] transition-colors font-medium">
    Soluciones <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${megaOpen ? 'rotate-180' : ''}`} />
  </button>
  
  {/* El Menú Desplegable */}
  {megaOpen && (
    <div className="absolute top-[75px] left-1/2 -translate-x-1/2 w-[550px] pt-4 animate-in fade-in slide-in-from-top-2 duration-200">
      {/* ESTA ES LA CLAVE: El 'pt-4' arriba crea un puente invisible. 
         Si el ratón se mueve por esos 16px de espacio, el menú NO se cierra.
      */}
      <div className="bg-[#0a2b49] border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-8 overflow-hidden relative">
        {/* Adorno visual de fondo */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#ff8c00]/10 rounded-full blur-3xl" />
        
        <div className="grid grid-cols-2 gap-10 relative z-10">
          {/* Columna Servicios */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-4 bg-[#ff8c00] rounded-full" />
              <p className="text-[11px] font-extrabold text-[#ff8c00] uppercase tracking-[0.2em]">Servicios Especializados</p>
            </div>
            <div className="space-y-1">
              {serviceLinks.map(s => (
                <Link 
                  key={s.href} 
                  href={s.href} 
                  onClick={() => setMegaOpen(false)} 
                  className="block py-2 text-[13px] text-[#ebf2f7]/70 hover:text-white hover:translate-x-1 transition-all duration-200"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Columna Soluciones */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-4 bg-[#ff8c00] rounded-full" />
              <p className="text-[11px] font-extrabold text-[#ff8c00] uppercase tracking-[0.2em]">Soluciones de Negocio</p>
            </div>
            <div className="space-y-1">
              {solutionLinks.map(s => (
                <Link 
                  key={s.href} 
                  href={s.href} 
                  onClick={() => setMegaOpen(false)} 
                  className="block py-2 text-[13px] text-[#ebf2f7]/70 hover:text-white hover:translate-x-1 transition-all duration-200"
                >
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

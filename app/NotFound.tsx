"use client";

import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "@/components/Index"; // Ajusta la ruta si tu componente principal se llama distinto
import Automatizaciones from "./servicios/automatizaciones/Automatizaciones";
import ContentMarketing from "./servicios/content-marketing/ContentMarketing";
import NotFound from "./NotFound";

export default function Page() {
  const [isMounted, setIsMounted] = useState(false);

  // Este useEffect solo se ejecuta en el navegador (Cliente)
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Si estamos en el servidor (durante el build de Vercel), 
  // devolvemos null para que no intente usar el 'document' o 'window'
  if (!isMounted) {
    return null;
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<Index />} />

        {/* Rutas de servicios (ajustadas a tu estructura plana) */}
        <Route path="/servicios/automatizaciones" element={<Automatizaciones />} />
        <Route path="/servicios/content-marketing" element={<ContentMarketing />} />
        
        {/* Captura cualquier otra ruta para mostrar el 404 corregido */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

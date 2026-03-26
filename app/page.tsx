"use client";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

// Importación de Páginas
// Nota: Si el build da error, verifica que la carpeta sea "pages" en minúscula
import Index from "@/app/pagesIndex";
import NotFound from "@/app/pagesNotFound";
import Privacidad from "@/app/pagesPrivacidad";
import Terminos from "@/app/pagesTerminos";
import SeoTecnico from "@/app/pagesservicios/SeoTecnico";
import PpcPaidSearch from "@/app/pagesservicios/PpcPaidSearch";
import ContentMarketing from "@/app/pagesservicios/ContentMarketing";
import Automatizaciones from "@/app/pagesservicios/Automatizaciones";
import DesarrolloWeb from "@/app/pagesservicios/DesarrolloWeb";
import ImagenDeMarca from "@/app/pagesservicios/ImagenDeMarca";
import KitDigital from "@/app/pagessoluciones/KitDigital";
import DisenoLandings from "@/app/pagessoluciones/DisenoLandings";
import TodoParaTuNegocio from "@/app/pagessoluciones/TodoParaTuNegocio";
import ComoEstaOptimizadoMiWeb from "./pages/soluciones/ComoEstaOptimizadoMiWeb";

const queryClient = new QueryClient();

export default function Page() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/privacidad" element={<Privacidad />} />
            <Route path="/terminos" element={<Terminos />} />
            
            {/* Rutas de Servicios */}
            <Route path="/servicios/seo-tecnico" element={<SeoTecnico />} />
            <Route path="/servicios/ppc-paid-search" element={<PpcPaidSearch />} />
            <Route path="/servicios/content-marketing" element={<ContentMarketing />} />
            <Route path="/servicios/automatizaciones" element={<Automatizaciones />} />
            <Route path="/servicios/desarrollo-web" element={<DesarrolloWeb />} />
            <Route path="/servicios/imagen-de-marca" element={<ImagenDeMarca />} />
            
            {/* Rutas de Soluciones */}
            <Route path="/soluciones/kit-digital" element={<KitDigital />} />
            <Route path="/soluciones/diseno-landings" element={<DisenoLandings />} />
            <Route path="/soluciones/todo-para-tu-negocio" element={<TodoParaTuNegocio />} />
            <Route path="/soluciones/como-esta-optimizado-mi-web" element={<ComoEstaOptimizadoMiWeb />} />
            
            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

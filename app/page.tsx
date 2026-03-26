"use client";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

// 1. Páginas que están DENTRO de la carpeta 'app' (según tu captura)
import Index from "./Index"; 
import NotFound from "./NotFound";
import Privacidad from "./Privacidad";
import Terminos from "./Terminos";

// 2. Páginas que están DENTRO de 'views' (que está fuera de 'app')
import SeoTecnico from "../views/servicios/SeoTecnico";
import PpcPaidSearch from "../views/servicios/PpcPaidSearch";
import ContentMarketing from "../views/servicios/ContentMarketing";
import Automatizaciones from "../views/servicios/Automatizaciones";
import DesarrolloWeb from "../views/servicios/DesarrolloWeb";
import ImagenDeMarca from "../views/servicios/ImagenDeMarca";
import KitDigital from "../views/soluciones/KitDigital";
import DisenoLandings from "../views/soluciones/DisenoLandings";
import TodoParaTuNegocio from "../views/soluciones/TodoParaTuNegocio";
import ComoEstaOptimizadoMiWeb from "../views/soluciones/ComoEstaOptimizadoMiWeb";

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
            
            <Route path="/servicios/seo-tecnico" element={<SeoTecnico />} />
            <Route path="/servicios/ppc-paid-search" element={<PpcPaidSearch />} />
            <Route path="/servicios/content-marketing" element={<ContentMarketing />} />
            <Route path="/servicios/automatizaciones" element={<Automatizaciones />} />
            <Route path="/servicios/desarrollo-web" element={<DesarrolloWeb />} />
            <Route path="/servicios/imagen-de-marca" element={<ImagenDeMarca />} />
            
            <Route path="/soluciones/kit-digital" element={<KitDigital />} />
            <Route path="/soluciones/diseno-landings" element={<DisenoLandings />} />
            <Route path="/soluciones/todo-para-tu-negocio" element={<TodoParaTuNegocio />} />
            <Route path="/soluciones/como-esta-optimizado-mi-web" element={<ComoEstaOptimizadoMiWeb />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

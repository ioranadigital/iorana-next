"use client";

import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

import Index from "./Index"; 
import NotFound from "./NotFound";
import Privacidad from "./Privacidad";
import Terminos from "./Terminos";

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

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const queryClient = new QueryClient();

export default function Page() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          
          <div className="flex flex-col min-h-screen bg-[#0a2b49]">
            <Navbar />
            
            <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible py-20">
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
            </main>

            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

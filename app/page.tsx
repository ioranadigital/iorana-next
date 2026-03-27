"use client";

import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

// Componente para resetear el scroll al cambiar de página
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// 1. Páginas base
import Index from "./Index"; 
import NotFound from "./NotFound";
import Privacidad from "./Privacidad";
import Terminos from "./Terminos";

// 2. Servicios
import SeoTecnico from "../views/servicios/SeoTecnico";
import PpcPaidSearch from "../views/servicios/PpcPaidSearch";
import ContentMarketing from "../views/servicios/ContentMarketing";
import Automatizaciones from "../views/servicios/Automatizaciones";
import DesarrolloWeb from "../views/servicios/DesarrolloWeb";
import ImagenDeMarca from "../views/servicios/ImagenDeMarca";

// 3. Soluciones
import KitDigital from "../views/soluciones/KitDigital";
import DisenoLandings from "../views/soluciones/DisenoLandings";
import TodoParaTuNegocio from "../views/soluciones/TodoParaTuNegocio";
import ComoEstaOptimizadoMiWeb from "../views/soluciones/ComoEstaOptimizadoMiWeb";

// Importamos Navbar y Footer (Asegúrate de que las rutas sean correctas)
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const queryClient = new QueryClient();

export default function Page() {
  const [isMounted, setIsMounted] = useState(false);

  // Evita errores de hidratación en Next.js
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
            
            {/* CENTRALIZACIÓN Y FLUIDEZ:
                - max-w-7xl y mx-auto: Centran

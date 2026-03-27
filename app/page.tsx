"use client";

import React, { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

// Componentes globales
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./Index"; 

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
        
        <div className="flex flex-col min-h-screen bg-[#0a2b49]">
          {/* El Navbar solo se declara UNA VEZ aquí */}
          <header className="relative z-[9999]">
            <Navbar />
          </header>
          
          <main className="flex-1 w-full overflow-visible">
            {/* IMPORTANTE: Aquí solo cargamos la HOME (Index).
               Las demás rutas se gestionan creando carpetas en /app/
            */}
            <Index />
          </main>

          {/* El Footer solo se declara UNA VEZ aquí */}
          <Footer />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

"use client";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

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
        <BrowserRouter>
          <div className="flex flex-col min-h-screen bg-[#0a2b49] font-sans selection:bg-orange-500 selection:text-white">
            
            {/* Navbar con alta prioridad */}
            <header className="relative z-[9999]">
              <Navbar />
            </header>
            
            {/* El main permite que el Hero llene la pantalla */}
            <main className="flex-1 w-full overflow-x-hidden">
              <Routes>
                <Route path="/" element={<Index />} />
                {/* Agrega aquí el resto de tus rutas */}
              </Routes>
            </main>

            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

"use client";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "@/components/Navbar";
import Index from "./Index"; 

const queryClient = new QueryClient();

export default function Page() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  if (!isMounted) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {/* ELIMINAR CUALQUIER 'container' DE AQUÍ */}
        <div className="flex flex-col min-h-screen bg-[#0a2b49] w-full items-stretch">
          <header className="fixed top-0 w-full z-[9999]">
            <Navbar />
          </header>
          
          {/* IMPORTANTE: main debe ser w-full y sin márgenes horizontales */}
          <main className="flex-1 w-full overflow-x-hidden p-0 m-0">
            <Routes>
              <Route path="/" element={<Index />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

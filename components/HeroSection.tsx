"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0a2b49]">
      {/* Background image con overlay corregido */}
      <div className="absolute inset-0">
        <Image 
          src="/assets/hero-bg.jpg" 
          alt="IORANA Digital agencia marketing Asturias" 
          fill 
          className="object-cover opacity-20" 
          priority 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a2b49]/60 via-[#0a2b49] to-[#0a2b49]" />
      </div>

      {/* Ajuste de Padding Superior: 
          pt-20 es suficiente para dejar espacio al Navbar sin crear el hueco blanco enorme.
      */}
      <div className="container relative z-10 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 mb-8">
            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs font-medium text-[#ebf2f7]">Agencia de Marketing en Asturias</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black leading-[1.1] mb-6 text-[#ebf2f7]">
            <span className="text-orange-500">Posiciona tu negocio</span><br />
            donde tus clientes te buscan.
          </h1>

          <p className="text-lg md:text-xl text-[#ebf2f7]/70 max-w-2xl mb-10 leading-relaxed">
            Ayudamos a las empresas a multiplicar sus ventas con estrategias SEO basadas en datos, PPC de alto rendimiento y contenido que posiciona de verdad.
          </p>

          {/* Botones corregidos y alineados */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm

"use client"; // Muy importante para que funcionen los efectos visuales

import React from 'react';
// Aquí importarás tus componentes más tarde, ej:
// import Navbar from '@/components/Navbar'; 

export default function Page() {
  return (
    <main>
      {/* 1. Aquí va tu Navbar */}
      {/* <Navbar /> */}

      <div className="card">
        <h1>Bienvenido a Iorana Agency</h1>
        <p>Tu migración a Next.js está en marcha.</p>
        
        {/* Aquí es donde debes pegar el contenido de tu antiguo HERO o HOME */}
        <button onClick={() => alert('¡Funciona!')}>
          Haz clic aquí
        </button>
      </div>

      <footer className="read-the-docs">
        © 2026 Iorana Digital
      </footer>
    </main>
  );
}

// app/pymes/page.tsx  ← ruta sugerida (landing independiente)
// O bien: úsalo como bloque en Index.tsx (ver abajo)
//
// ══════════════════════════════════════════════════════════════
// IORANA DIGITAL — Pack Pymes · Integración completa
// Todas las secciones en orden · modular · fácil de comentar
// ══════════════════════════════════════════════════════════════

import type { Metadata } from "next";
import PymesTrustBar   from "@/components/PymesTrustBar";
import PymesProcess    from "@/components/PymesProcess";
import PymesCases      from "@/components/PymesCases";
import PymesAuthority  from "@/components/PymesAuthority";
import PymesSection    from "@/components/PymesSection";   // Hero + Subproductos + FAQ + Formulario

/* ── SEO Metadata ───────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Pack Digital para Pymes | Google Maps · Web · Soporte — Iorana Digital",
  description:
    "Solución digital integral para pequeñas y medianas empresas: posicionamiento en Google Maps, web de alta conversión y soporte directo con consultor senior. Sin permanencia. Resultados en 90 días.",
  alternates: { canonical: "https://iorana.digital/servicios/pymes" },
  openGraph: {
    title: "Pack Digital para Pymes — Iorana Digital",
    description: "Google Maps · Web de Alta Conversión · Soporte Directo. Sin permanencia.",
    url: "https://iorana.digital/servicios/pymes",
    siteName: "Iorana Digital",
    locale: "es_ES",
    type: "website",
    images: [{ url: "https://iorana.digital/og/pymes-pack.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ioranadigital",
    images: ["https://iorana.digital/og/pymes-pack.jpg"],
  },
  robots: { index: true, follow: true },
};

/* ── Página ─────────────────────────────────────────────────── */
export default function PymesPage() {
  return (
    <main
      id="pymes-landing"
      aria-label="Pack Digital para Pymes — Iorana Digital"
      style={{ width: "100vw", maxWidth: "100vw", overflowX: "hidden" }}
    >
      {/*
        ┌─────────────────────────────────────────────────────┐
        │  SECCIÓN 1+3+7+8 · Hero · Subproductos · FAQ · Form │
        │  (PymesSection engloba estas 4 partes)              │
        └─────────────────────────────────────────────────────┘
      */}
      <PymesSection />

      {/*
        ┌─────────────────────────────────────────────────────┐
        │  SECCIÓN 2 · Trust Bar · Stats + Marquee logos      │
        │  → Comenta esta línea para desactivar               │
        └─────────────────────────────────────────────────────┘
      */}
      <PymesTrustBar />

      {/*
        ┌─────────────────────────────────────────────────────┐
        │  SECCIÓN 4 · Proceso · 4 pasos · timeline           │
        │  → Comenta esta línea para desactivar               │
        └─────────────────────────────────────────────────────┘
      */}
      <PymesProcess />

      {/*
        ┌─────────────────────────────────────────────────────┐
        │  SECCIÓN 5 · Casos de éxito · Mini-cases pymes      │
        │  → Comenta esta línea para desactivar               │
        └─────────────────────────────────────────────────────┘
      */}
      <PymesCases />

      {/*
        ┌─────────────────────────────────────────────────────┐
        │  SECCIÓN 6 · Authority Content · SEO texto + tabla  │
        │  → Comenta esta línea para desactivar               │
        └─────────────────────────────────────────────────────┘
      */}
      <PymesAuthority />

    </main>
  );
}

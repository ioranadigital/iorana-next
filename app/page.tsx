import type { Metadata } from "next";
import Index from "./Index";

export const metadata: Metadata = {
  title: "Iorana Digital | Agencia SEO y Marketing",
  description:
    "Agencia de SEO técnico, desarrollo web en Next.js, PPC y automatización para empresas en España. Resultados medibles desde el primer mes.",
  alternates: { canonical: "https://iorana.digital" },
  openGraph: {
    title: "Iorana Digital | Agencia SEO y Marketing",
    description:
      "SEO técnico, Next.js, PPC y automatización para empresas en España. Resultados medibles.",
    url: "https://iorana.digital",
    siteName: "Iorana Digital",
    locale: "es_ES",
    type: "website",
    images: [{ url: "https://iorana.digital/og/home.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  // El Layout ya se encarga del Navbar, Footer, Providers y el fondo azul.
  // Aquí solo entregamos el contenido de la Home.
  return <Index />;
} 

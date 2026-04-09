import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-heading" });
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Iorana Digital | Agencia de Marketing Digital",
  description: "SEO Técnico, IA Estratégica, Next.js y Automatización para empresas en España.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${montserrat.variable} ${inter.variable}`}>
      <body
        className="antialiased w-full overflow-x-hidden bg-[#0a2b49] text-white"
        suppressHydrationWarning
      >
        <Providers>
          {/* Navbar fijo — h-20 = 80px, por eso las páginas usan pt-20 */}
          <Navbar />

          {/*
            SIN min-h-screen:
            - Con min-h-screen el <main> se expande a 100vh aunque
              el contenido sea corto, empujando el Footer fuera de pantalla.
            - Sin él, el Footer aparece justo debajo del contenido siempre.
          */}
          <main>
            {children}
          </main>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}

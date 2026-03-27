import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google"; 
import "./globals.css";
import Navbar from "@/components/Navbar"; // ✅ Importamos Navbar
import Footer from "@/components/Footer"; // ✅ Importamos Footer

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-heading", 
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",    
});

export const metadata: Metadata = {
  title: "IORANA Digital | Agencia de Marketing Digital",
  description: "Especialistas en SEO, SEM y Diseño Web.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="antialiased w-full overflow-x-hidden bg-[#0a2b49] text-white">
        <Navbar /> {/* ✅ Aparecerá en TODAS las páginas */}
        <main className="min-h-screen">
          {children}
        </main>
        <Footer /> {/* ✅ Aparecerá en TODAS las páginas */}
      </body>
    </html>
  );
}

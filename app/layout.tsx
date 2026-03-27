import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google"; 
import "./globals.css";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-heading", // Conecta con font-heading en Tailwind
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",    // Conecta con font-sans en Tailwind
});

export const metadata: Metadata = {
  title: "IORANA Digital | Agencia de Marketing Digital",
  description: "Especialistas en SEO, SEM y Diseño Web.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="antialiased w-full overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google"; // Usamos las fuentes de tu marca
import "./globals.css";

// Configuramos Montserrat para títulos e Inter para textos
const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "IORANA Digital | Agencia de Marketing Digital en Asturias",
    template: "%s | IORANA Digital"
  },
  description: "Agencia de marketing digital en Asturias especializada en SEO, SEM y diseño web.",
  metadataBase: new URL("https://www.iorana.digital"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    siteName: "IORANA Digital",
    locale: "es_ES",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${montserrat.variable} ${inter.variable}`}>
      <body className={`${inter.className} antialiased bg-[#0a2b49] text-[#ebf2f7] min-h-screen`}>
        {/* Este div es el "escudo" que evita que el contenido se pegue a los bordes */}
        <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}

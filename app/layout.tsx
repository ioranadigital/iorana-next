import type { Metadata } from "next";
// Importamos Montserrat e Inter (asegúrate de que estas sean tus fuentes)
import { Montserrat, Inter } from "next/font/google"; 
import "./globals.css";

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
  description: "Agencia de marketing digital especializada en SEO, SEM y diseño web.",
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
      {/* CAMBIO CLAVE: Añadimos 'flex', 'flex-col', y 'items-center' al body.
        Esto obliga a que CUALQUIER hijo del body (como el Navbar, Footer y el children)
        se comporte como un elemento flex centrado horizontalmente.
      */}
      <body className={`${inter.className} antialiased flex flex-col items-center bg-[#0a2b49] text-[#ebf2f7] min-h-screen w-full`}>
        {/* Este div envuelve todo tu contenido. Tiene 'w-full' para ocupar 
          todo el ancho disponible del body (que está centrado).
        */}
        <div className="relative flex flex-col w-full overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}

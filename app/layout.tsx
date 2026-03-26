import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "IORANA Digital | Agencia de Marketing Digital en Asturias",
    template: "%s | IORANA Digital"
  },
  description: "Agencia de marketing digital en Asturias especializada en SEO, SEM y diseño web. Aumentamos la visibilidad online de tu negocio.",
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
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="antialiased min-h-screen bg-[#0a2b49]">
        {/* Este div asegura que todo el contenido se comporte como un bloque centrado */}
        <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}

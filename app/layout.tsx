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
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={geist.className}>{children}</body>
    </html>
  );
}

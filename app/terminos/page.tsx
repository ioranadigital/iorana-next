import { Metadata } from "next";
import TerminosView from "@/views/legal/TerminosView";

export const metadata: Metadata = {
  title: "Términos y Condiciones | IORANA Digital",
  description:
    "Términos y condiciones de uso de los servicios de IORANA Digital. Condiciones de contratación, propiedad intelectual y jurisdicción aplicable.",
  alternates: {
    canonical: "https://iorana.digital/terminos",
  },
  openGraph: {
    title: "Términos y Condiciones | IORANA Digital",
    description:
      "Condiciones de contratación, propiedad intelectual y jurisdicción de los servicios de IORANA Digital.",
    url: "https://iorana.digital/terminos",
    siteName: "IORANA Digital",
    locale: "es_ES",
    type: "website",
  },
};

export default function TerminosPage() {
  return <TerminosView />;
}


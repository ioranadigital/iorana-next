import { Metadata } from "next";
import PrivacidadView from "@/views/legal/PrivacidadView";

export const metadata: Metadata = {
  title: "Política de Privacidad | IORANA Digital",
  description:
    "Política de privacidad de IORANA Digital. Conoce cómo tratamos tus datos personales conforme al RGPD y la LOPDGDD.",
  alternates: {
    canonical: "https://iorana.digital/privacidad",
  },
  openGraph: {
    title: "Política de Privacidad | IORANA Digital",
    description:
      "Tratamiento de datos personales conforme al RGPD y LOPDGDD en IORANA Digital.",
    url: "https://iorana.digital/privacidad",
    siteName: "IORANA Digital",
    locale: "es_ES",
    type: "website",
  },
};

export default function PrivacidadPage() {
  return <PrivacidadView />;
}


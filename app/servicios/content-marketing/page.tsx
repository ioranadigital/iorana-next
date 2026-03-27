import { Metadata } from "next";
import ContentMarketing from "@/views/servicios/ContentMarketing";

export const metadata: Metadata = {
  title: "Estrategia de Content Marketing | Contenido que Convierte | IORANA",
  description: "Creamos contenido estratégico que atrae a tu audiencia ideal y posiciona tu marca como autoridad en el sector.",
};

export default function Page() {
  return <ContentMarketing />;
}

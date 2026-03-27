import SeoTecnico from "@/views/servicios/SeoTecnico";
import { Metadata } from "next";

// ✅ Estos metadatos son ÚNICOS para esta página
export const metadata: Metadata = {
  title: "SEO Técnico & On-Page | Auditoría y Optimización | IORANA",
  description: "Mejoramos la velocidad, indexación y estructura de tu web para escalar posiciones en Google.",
};

export default function Page() {
  return <SeoTecnico />;
}

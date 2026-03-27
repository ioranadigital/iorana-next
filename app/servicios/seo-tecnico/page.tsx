import { Metadata } from "next";
import SeoTecnico from "@/views/servicios/SeoTecnico";

export const metadata: Metadata = {
  title: "SEO Técnico y On-Page | Auditoría y Optimización | IORANA",
  description: "Mejoramos la velocidad, indexación y estructura de tu web para escalar posiciones en Google de forma orgánica.",
};

export default function Page() {
  return <SeoTecnico />;
}

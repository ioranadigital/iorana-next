import { Metadata } from "next";
// Cambia "SeoTecnico" por el nombre del componente de la vista
import SeoTecnico from "@/views/servicios/SeoTecnico"; 

export const metadata: Metadata = {
  title: "SEO Técnico & On-Page | IORANA Digital",
  description: "Optimizamos la estructura de tu web para maximizar la visibilidad en buscadores.",
};

export default function Page() {
  return <SeoTecnico />;
}

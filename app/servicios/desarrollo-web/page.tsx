import { Metadata } from "next";
import DesarrolloWeb from "@/views/servicios/DesarrolloWeb";

export const metadata: Metadata = {
  title: "Desarrollo Web High-End | Diseño y Performance | IORANA",
  description: "Diseñamos y desarrollamos sitios web de alto rendimiento, optimizados para SEO y con una experiencia de usuario impecable.",
};

export default function Page() {
  return <DesarrolloWeb />;
}

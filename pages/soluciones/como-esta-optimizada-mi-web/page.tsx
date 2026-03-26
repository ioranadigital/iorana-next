import { Metadata } from "next";
import ComoEstaOptimizadoMiWeb from "./ComoEstaOptimizadoMiWeb";
export const metadata: Metadata = {
  title: "Auditoría Web Gratuita en Asturias | IORANA Digital",
  description: "Descubre cómo está optimizada tu web. Auditoría SEO gratuita para empresas en Asturias.",
  alternates: { canonical: "https://www.iorana.digital/soluciones/como-esta-optimizada-mi-web" }
};
export default function Page() { return <ComoEstaOptimizadoMiWeb />; }

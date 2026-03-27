import { Metadata } from "next";
import ComoEstaOptimizadoMiWeb from "@/views/soluciones/ComoEstaOptimizadoMiWeb";

export const metadata: Metadata = {
  title: "Auditoría Web Gratuita | Analiza tu Optimización | IORANA Digital",
  description: "Solicita tu informe gratuito y descubre cómo mejorar el rendimiento y SEO de tu página web.",
};

export default function Page() {
  return <ComoEstaOptimizadoMiWeb />;
}

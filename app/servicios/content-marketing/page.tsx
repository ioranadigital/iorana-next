import { Metadata } from "next";
import ContentMarketing from "@/views/servicios/ContentMarketing";

// SEO Metadata para esta página
export const metadata: Metadata = {
  title: "Content Marketing & Estrategia Digital | IORANA",
  description: "Creamos contenido que atrae, educa y convierte a tu audiencia en clientes leales.",
};

export default function Page() {
  return <ContentMarketing />;
}

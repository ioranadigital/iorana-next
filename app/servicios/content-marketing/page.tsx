import { Metadata } from "next";
// ✅ IMPORTANTE: El nombre debe coincidir exactamente con el archivo físico
import ContentMarketing from "@/views/servicios/ContentMarketing";

export const metadata: Metadata = {
  title: "Content Marketing & Estrategia Digital | IORANA",
  description: "Creamos contenido que atrae, educa y convierte a tu audiencia en clientes leales.",
};

export default function Page() {
  return <ContentMarketing />;
}

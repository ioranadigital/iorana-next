import { Metadata } from "next";
import ContentMarketing from "./ContentMarketing";
export const metadata: Metadata = {
  title: "Content Marketing en Asturias | IORANA Digital",
  description: "Estrategia de contenidos para atraer, convertir y fidelizar clientes. Content marketing orientado a resultados.",
  alternates: { canonical: "https://www.iorana.digital/servicios/content-marketing" }
};
export default function Page() { return <ContentMarketing />; }

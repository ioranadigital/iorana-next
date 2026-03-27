import { Metadata } from "next";
import DisenoLandings from "@/views/soluciones/DisenoLandings";

export const metadata: Metadata = {
  title: "Diseño de Landing Pages de Alta Conversión | IORANA Digital",
  description: "Creamos páginas de aterrizaje optimizadas para maximizar tus ventas y captar leads cualificados.",
};

export default function Page() {
  return <DisenoLandings />;
}

import { Metadata } from "next";
import DisenoLandings from "./DisenoLandings";
export const metadata: Metadata = {
  title: "Diseño de Landing Pages en Asturias | IORANA Digital",
  description: "Landing pages optimizadas para conversión en Asturias. Diseño profesional orientado a resultados.",
  alternates: { canonical: "https://www.iorana.digital/soluciones/diseno-landings" }
};
export default function Page() { return <DisenoLandings />; }

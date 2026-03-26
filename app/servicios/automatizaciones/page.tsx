import { Metadata } from "next";
import Automatizaciones from "./Automatizaciones";
export const metadata: Metadata = {
  title: "Automatizaciones de Marketing en Asturias | IORANA Digital",
  description: "Automatiza tus procesos de marketing y ventas. Ahorra tiempo y escala tu negocio con workflows inteligentes.",
  alternates: { canonical: "https://www.iorana.digital/servicios/automatizaciones" }
};
export default function Page() { return <Automatizaciones />; }

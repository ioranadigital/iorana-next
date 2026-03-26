import { Metadata } from "next";
import DesarrolloWeb from "./DesarrolloWeb";
export const metadata: Metadata = {
  title: "Desarrollo Web en Asturias | IORANA Digital",
  description: "Diseño y desarrollo web profesional en Asturias. Webs rápidas, optimizadas para SEO y orientadas a conversión.",
  alternates: { canonical: "https://www.iorana.digital/servicios/desarrollo-web" }
};
export default function Page() { return <DesarrolloWeb />; }

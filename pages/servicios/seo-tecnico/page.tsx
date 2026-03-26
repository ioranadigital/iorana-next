import { Metadata } from "next";
import SeoTecnico from "./SeoTecnico";
export const metadata: Metadata = {
  title: "SEO Técnico y On-Page en Asturias | IORANA Digital",
  description: "Auditoría técnica SEO, Core Web Vitals, Schema Markup y optimización on-page. Posiciona tu web donde tu cliente busca.",
  alternates: { canonical: "https://www.iorana.digital/servicios/seo-tecnico" }
};
export default function Page() { return <SeoTecnico />; }

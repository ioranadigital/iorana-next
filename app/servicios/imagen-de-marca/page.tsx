import { Metadata } from "next";
import ImagenDeMarca from "./ImagenDeMarca";
export const metadata: Metadata = {
  title: "Imagen de Marca y Branding en Asturias | IORANA Digital",
  description: "Construye una marca memorable en Asturias. Identidad visual, branding y estrategia de marca para tu negocio.",
  alternates: { canonical: "https://www.iorana.digital/servicios/imagen-de-marca" }
};
export default function Page() { return <ImagenDeMarca />; }

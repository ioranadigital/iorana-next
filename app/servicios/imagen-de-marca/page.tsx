import { Metadata } from "next";
import ImagenDeMarca from "@/views/servicios/ImagenDeMarca";

export const metadata: Metadata = {
  title: "Branding e Identidad Visual | Diseño de Marca | IORANA",
  description: "Construimos identidades visuales potentes que transmiten los valores de tu empresa y conectan con tu público.",
};

export default function Page() {
  return <ImagenDeMarca />;
}

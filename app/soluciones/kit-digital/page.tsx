import { Metadata } from "next";
import KitDigital from "@/views/soluciones/KitDigital";

export const metadata: Metadata = {
  title: "Subvenciones Kit Digital | Agente Digitalizador | IORANA Digital",
  description: "Te ayudamos a gestionar tu bono del Kit Digital para digitalizar tu negocio sin costes.",
};

export default function Page() {
  return <KitDigital />;
}

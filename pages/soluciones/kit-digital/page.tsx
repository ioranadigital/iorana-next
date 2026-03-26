import { Metadata } from "next";
import KitDigital from "./KitDigital";
export const metadata: Metadata = {
  title: "Kit Digital en Asturias | IORANA Digital",
  description: "Aprovecha las ayudas del Kit Digital en Asturias. Somos agentes digitalizadores acreditados.",
  alternates: { canonical: "https://www.iorana.digital/soluciones/kit-digital" }
};
export default function Page() { return <KitDigital />; }

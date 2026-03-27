import { Metadata } from "next";
import PpcPaidSearch from "@/views/servicios/PpcPaidSearch";

export const metadata: Metadata = {
  title: "PPC & Paid Search | Gestión de Google Ads | IORANA",
  description: "Maximizamos tu inversión publicitaria con estrategias avanzadas de SEM y Paid Social.",
};

export default function Page() {
  return <PpcPaidSearch />;
}

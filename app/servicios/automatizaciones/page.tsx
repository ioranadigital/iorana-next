import { Metadata } from "next";
import Automatizaciones from "@/views/servicios/Automatizaciones";

export const metadata: Metadata = {
  title: "Automatización de Procesos y CRM | Eficiencia Digital | IORANA",
  description: "Ahorra tiempo y dinero automatizando tus flujos de trabajo, captación de leads y gestión de clientes.",
};

export default function Page() {
  return <Automatizaciones />;
}

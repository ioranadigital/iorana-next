import { Metadata } from "next";
import TodoParaTuNegocio from "@/views/soluciones/TodoParaTuNegocio";

export const metadata: Metadata = {
  title: "Soluciones Integrales para Negocios Digitales | IORANA Digital",
  description: "Todo lo que tu empresa necesita para digitalizarse: desde web hasta gestión de clientes.",
};

export default function Page() {
  return <TodoParaTuNegocio />;
}

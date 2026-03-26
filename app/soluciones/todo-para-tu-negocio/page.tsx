import { Metadata } from "next";
import TodoParaTuNegocio from "./TodoParaTuNegocio";
export const metadata: Metadata = {
  title: "Solución 360 Marketing Digital en Asturias | IORANA Digital",
  description: "Solución completa de marketing digital para tu negocio en Asturias. SEO, SEM, web y redes sociales en un solo servicio.",
  alternates: { canonical: "https://www.iorana.digital/soluciones/todo-para-tu-negocio" }
};
export default function Page() { return <TodoParaTuNegocio />; }

import { Metadata } from "next";
import PpcPaidSearch from "./PpcPaidSearch";
export const metadata: Metadata = {
  title: "PPC y Google Ads en Asturias | IORANA Digital",
  description: "Gestión de campañas PPC y Google Ads en Asturias. Maximizamos tu ROI con publicidad de pago optimizada.",
  alternates: { canonical: "https://www.iorana.digital/servicios/ppc-paid-search" }
};
export default function Page() { return <PpcPaidSearch />; }

import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://www.iorana.digital", priority: 1, changeFrequency: "monthly" },
    { url: "https://www.iorana.digital/servicios", priority: 0.9, changeFrequency: "monthly" },
    { url: "https://www.iorana.digital/servicios/seo-tecnico", priority: 0.8, changeFrequency: "monthly" },
    { url: "https://www.iorana.digital/servicios/ppc-paid-search", priority: 0.8, changeFrequency: "monthly" },
    { url: "https://www.iorana.digital/servicios/desarrollo-web", priority: 0.8, changeFrequency: "monthly" },
    { url: "https://www.iorana.digital/servicios/content-marketing", priority: 0.8, changeFrequency: "monthly" },
    { url: "https://www.iorana.digital/servicios/automatizaciones", priority: 0.8, changeFrequency: "monthly" },
    { url: "https://www.iorana.digital/servicios/imagen-de-marca", priority: 0.8, changeFrequency: "monthly" },
    { url: "https://www.iorana.digital/soluciones", priority: 0.9, changeFrequency: "monthly" },
    { url: "https://www.iorana.digital/soluciones/kit-digital", priority: 0.8, changeFrequency: "monthly" },
    { url: "https://www.iorana.digital/soluciones/diseno-landings", priority: 0.8, changeFrequency: "monthly" },
    { url: "https://www.iorana.digital/soluciones/como-esta-optimizada-mi-web", priority: 0.8, changeFrequency: "monthly" },
    { url: "https://www.iorana.digital/soluciones/todo-para-tu-negocio", priority: 0.8, changeFrequency: "monthly" },
    { url: "https://www.iorana.digital/sobre-nosotros", priority: 0.7, changeFrequency: "monthly" },
    { url: "https://www.iorana.digital/contacto", priority: 0.8, changeFrequency: "monthly" },
  ];
}

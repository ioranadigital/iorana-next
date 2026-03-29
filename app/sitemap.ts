import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://iorana.digital'

  // 1. RUTAS DE NEXT.JS (Las que ya tienes en image_ed7e6a.png)
  const staticPages = [
    '',
    '/servicios',
    '/servicios/seo-tecnico',
    '/servicios/ppc-paid-search',
    '/servicios/desarrollo-web',
    '/servicios/content-marketing',
    '/servicios/automatizaciones',
    '/servicios/imagen-de-marca',
    '/soluciones',
    '/soluciones/kit-digital',
    '/soluciones/diseno-landings',
    '/soluciones/como-esta-optimizada-mi-web',
    '/soluciones/todo-para-tu-negocio',
    '/sobre-nosotros',
    '/contacto',
    '/blog', // Esta es la landing de Next.js que servirá de puente
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  // 2. PREPARACIÓN PARA WORDPRESS EN /blog/
  let wordpressPosts: MetadataRoute.Sitemap = []
  
  try {
    // Cuando instales WP, esta URL será válida. 
    // Por ahora, el 'catch' evitará que el sitemap falle.
    const response = await fetch(`${baseUrl}/blog/wp-json/wp/v2/posts?_fields=link,modified&per_page=100`, {
      next: { revalidate: 3600 } // Revalida cada hora para SEO
    })
    
    if (response.ok) {
      const posts = await response.json()
      wordpressPosts = posts.map((post: any) => ({
        url: post.link,
        lastModified: new Date(post.modified).toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      }))
    }
  } catch (error) {
    // Si WP no está instalado aún, simplemente ignoramos esta parte
    console.log("WordPress no detectado todavía en /blog/")
  }

  return [...staticPages, ...wordpressPosts]
}
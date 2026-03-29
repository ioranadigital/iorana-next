import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://iorana.digital'

  // 1. RUTAS DE NEXT.JS (Estáticas)
  const staticPages = ['', '/servicios', '/consultoria-seo', '/contacto'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // 2. RUTAS DE WORDPRESS (Dinámicas)
  let wordpressPosts: MetadataRoute.Sitemap = []
  
  try {
    // Consultamos la REST API de tu WordPress alojado en la subcarpeta
    const response = await fetch(`${baseUrl}/blog/wp-json/wp/v2/posts?_fields=link,modified&per_page=100`)
    const posts = await response.json()

    wordpressPosts = posts.map((post: any) => ({
      url: post.link, // WordPress ya devuelve la URL completa
      lastModified: new Date(post.modified),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  } catch (error) {
    console.error('Error cargando posts de WP para el sitemap:', error)
  }

  // 3. UNIÓN DE AMBAS FUENTES
  return [...staticPages, ...wordpressPosts]
}
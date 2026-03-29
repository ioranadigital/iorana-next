import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://iorana.digital'

  // Aquí podrías hacer un fetch a tu base de datos o CMS
  // const posts = await getPosts() 

  const routes = [
    '',
    '/servicios',
    '/consultoria-seo',
    '/contacto',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  // Ejemplo de cómo añadir posts dinámicos si tuvieras:
  /*
  const postEntries = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))
  return [...routes, ...postEntries]
  */

  return [...routes]
}
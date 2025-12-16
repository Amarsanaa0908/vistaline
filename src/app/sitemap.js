export default function sitemap() {
  const baseUrl = "https://vistaline.store"

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ]

  const collections = [
    { slug: 'diffusers', priority: 0.9 },
    { slug: 'essential-oils', priority: 0.9 },
    { slug: 'gift-sets', priority: 0.9 },
  ]

  const collectionPages = collections.map((col) => ({
    url: `${baseUrl}/collections/${col.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: col.priority,
  }))

  // Add your actual product slugs here
  const products = [
    'aroma-diffuser-300ml',
    'aroma-diffuser-500ml',
    // add all your products
  ]

  const productPages = products.map((slug) => ({
    url: `${baseUrl}/products/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  return [...staticPages, ...collectionPages, ...productPages]
}
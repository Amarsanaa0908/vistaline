export default function robots() {
  const baseUrl = 'https://vistaline.store'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/checkout/', '/cart/', '/account/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
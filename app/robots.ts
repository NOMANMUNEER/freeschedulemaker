import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.freeschedulemaker.com';

  return {
    rules: {
      userAgent: '*', // Allow all search engines
      allow: '/',     // Allow them to crawl all pages
      disallow: '/api/', // Disallow crawling backend API routes (if you add them later)
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // Replace this with your actual live domain name once deployed
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://freeschedulemaker.com';

  return {
    rules: {
      userAgent: '*', // Allow all search engines
      allow: '/',     // Allow them to crawl all pages
      disallow: '/api/', // Disallow crawling backend API routes (if you add them later)
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
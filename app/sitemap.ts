import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // Replace this with your actual live domain name once deployed
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://freeschedulemaker.com';

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0, // Homepage is highest priority
    },
    {
      url: `${baseUrl}/builder`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.9, // The actual app is very important
    },
    // Programmatic SEO Landing Pages
    {
      url: `${baseUrl}/university-timetable-creator`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/visual-class-schedule-maker`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Required AdSense Legal Pages
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];
}
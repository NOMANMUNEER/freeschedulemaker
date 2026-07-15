import { Metadata } from 'next';
import { SEO_PAGES } from '../config/seoPages';
import { FAQS } from '../data/faqs';
import { BuilderVariantId } from '../types/schedule';

export function generatePageMetadata(variant: BuilderVariantId): Metadata {
  const seoData = SEO_PAGES[variant] || SEO_PAGES.default;
  const baseUrl = 'https://www.freeschedulemaker.com';
  const url = `${baseUrl}${seoData.canonicalPath === '/' ? '' : seoData.canonicalPath}`;

  return {
    title: seoData.metaTitle,
    description: seoData.metaDescription,
    keywords: seoData.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: seoData.metaTitle,
      description: seoData.metaDescription,
      type: 'website',
      url: url,
      images: ['/og-image.png'],
      siteName: 'FreeScheduleMaker',
    },
    twitter: {
      card: 'summary_large_image',
      title: seoData.metaTitle,
      description: seoData.metaDescription,
    }
  };
}

export function generateFAQSchema(variant: BuilderVariantId) {
  const list = FAQS[variant] || FAQS.default;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": list.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };
}

export function generateSoftwareApplicationSchema(variant: BuilderVariantId) {
  const seoData = SEO_PAGES[variant] || SEO_PAGES.default;
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": seoData.heroHeading,
    "description": seoData.metaDescription,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
    },
  };
}

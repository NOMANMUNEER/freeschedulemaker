import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SpecializedSchedulePage from '../../../components/seo/SpecializedSchedulePage';
import { PROGRAMMATIC_PAGE_MAP, PROGRAMMATIC_PAGES } from '../../../data/programmaticPages';

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return PROGRAMMATIC_PAGES.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = PROGRAMMATIC_PAGE_MAP.get(slug);

  if (!page) {
    return {};
  }

  const url = `https://www.freeschedulemaker.com/tools/${page.slug}`;

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      type: 'website',
      siteName: 'FreeScheduleMaker',
      images: ['/og-image.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
    },
  };
}

export default async function ProgrammaticToolPage({ params }: PageProps) {
  const { slug } = await params;
  const page = PROGRAMMATIC_PAGE_MAP.get(slug);

  if (!page) {
    notFound();
  }

  return (
    <SpecializedSchedulePage
      badge={page.badge}
      heading={page.heading}
      subheading={page.subheading}
      canonicalUrl={`https://www.freeschedulemaker.com/tools/${page.slug}`}
      builderVariant={page.builderVariant}
      sections={page.sections}
      faqs={page.faqs}
    />
  );
}

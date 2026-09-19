import type { Metadata } from 'next';
import PinterestLandingPage from '../../components/seo/PinterestLandingPage';
import { PINTEREST_LANDING_PAGE_MAP } from '../../data/pinterestLandingPages';

const page = PINTEREST_LANDING_PAGE_MAP.get('aesthetic-schedule-templates')!;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: {
    canonical: 'https://www.freeschedulemaker.com/aesthetic-schedule-templates',
  },
  openGraph: {
    title: page.title,
    description: page.description,
    url: 'https://www.freeschedulemaker.com/aesthetic-schedule-templates',
    type: 'website',
    images: ['/og-image.png'],
  },
};

export default function AestheticScheduleTemplatesPage() {
  return <PinterestLandingPage page={page} />;
}

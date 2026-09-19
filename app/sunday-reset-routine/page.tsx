import type { Metadata } from 'next';
import PinterestLandingPage from '../../components/seo/PinterestLandingPage';
import { PINTEREST_LANDING_PAGE_MAP } from '../../data/pinterestLandingPages';

const page = PINTEREST_LANDING_PAGE_MAP.get('sunday-reset-routine')!;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: {
    canonical: 'https://www.freeschedulemaker.com/sunday-reset-routine',
  },
  openGraph: {
    title: page.title,
    description: page.description,
    url: 'https://www.freeschedulemaker.com/sunday-reset-routine',
    type: 'website',
    images: ['/og-image.png'],
  },
};

export default function SundayResetRoutinePage() {
  return <PinterestLandingPage page={page} />;
}

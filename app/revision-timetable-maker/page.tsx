import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import ToolHero from '../../components/seo/ToolHero';
import ScheduleBuilder from '../../components/builder/ScheduleBuilder';
import UseCases from '../../components/seo/UseCases';
import IntentContent from '../../components/seo/IntentContent';
import HowItWorks from '../../components/seo/HowItWorks';
import FAQSection from '../../components/seo/FAQSection';
import RelatedTools from '../../components/seo/RelatedTools';
import { generatePageMetadata, generateFAQSchema, generateSoftwareApplicationSchema } from '../../lib/generateMetadata';
import type { Metadata } from 'next';

const VARIANT = 'revision';

export const metadata: Metadata = generatePageMetadata(VARIANT);

export default function RevisionTimetableMakerPage() {
  const faqSchema = generateFAQSchema(VARIANT);
  const appSchema = generateSoftwareApplicationSchema(VARIANT);

  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />

      <Header />
      <ToolHero variant={VARIANT} />
      <ScheduleBuilder variant={VARIANT} />
      <UseCases variant={VARIANT} />
      <IntentContent variant={VARIANT} />
      <HowItWorks />
      <FAQSection variant={VARIANT} />
      <RelatedTools variant={VARIANT} />
      <Footer />
    </main>
  );
}

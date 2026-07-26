import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, CheckCircle2, HelpCircle, ListChecks } from 'lucide-react';
import Header from '../../../components/common/Header';
import Footer from '../../../components/common/Footer';
import { PLANNING_GUIDE_MAP, PLANNING_GUIDES } from '../../../data/planningGuides';

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return PLANNING_GUIDES.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = PLANNING_GUIDE_MAP.get(slug);

  if (!guide) {
    return {};
  }

  const url = `https://www.freeschedulemaker.com/guides/${guide.slug}`;

  return {
    title: `${guide.title} | FreeScheduleMaker`,
    description: guide.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: guide.title,
      description: guide.description,
      url,
      type: 'article',
      siteName: 'FreeScheduleMaker',
      images: ['/og-image.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: guide.title,
      description: guide.description,
    },
  };
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = PLANNING_GUIDE_MAP.get(slug);

  if (!guide) {
    notFound();
  }

  const canonicalUrl = `https://www.freeschedulemaker.com/guides/${guide.slug}`;
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: guide.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.description,
    url: canonicalUrl,
    author: {
      '@type': 'Organization',
      name: 'FreeScheduleMaker',
    },
    publisher: {
      '@type': 'Organization',
      name: 'FreeScheduleMaker',
    },
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article>
        <section className="bg-white border-b border-slate-200 py-14 px-6">
          <div className="max-w-4xl mx-auto">
            <Link href="/guides" className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800 mb-8">
              <ArrowLeft className="h-4 w-4" />
              All guides
            </Link>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">{guide.readTime}</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-5">
              {guide.title}
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">{guide.description}</p>
            <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-5">
              <p className="text-sm text-emerald-900 leading-relaxed">
                <span className="font-bold">Best for:</span> {guide.audience}
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-lg p-6 md:p-8">
            <p className="text-base text-slate-700 leading-8">{guide.intro}</p>

            <div className="mt-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-5 flex items-center gap-3">
                <ListChecks className="h-6 w-6 text-emerald-600" />
                Key Takeaways
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {guide.keyTakeaways.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-slate-700 leading-relaxed bg-slate-50 border border-slate-200 rounded-lg p-4">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Step-by-Step Process</h2>
              <div className="space-y-6">
                {guide.steps.map((step, index) => (
                  <section key={step.title} className="border-l-4 border-emerald-500 pl-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">Step {index + 1}</p>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-700 leading-7">{step.body}</p>
                  </section>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Practical Examples</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {guide.examples.map((example) => (
                  <section key={example.title} className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                    <h3 className="text-base font-bold text-slate-900 mb-3">{example.title}</h3>
                    <p className="text-sm text-slate-700 leading-7">{example.body}</p>
                  </section>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-5">Common Mistakes to Avoid</h2>
              <ul className="space-y-3">
                {guide.mistakes.map((mistake) => (
                  <li key={mistake} className="text-sm text-slate-700 leading-relaxed bg-rose-50 border border-rose-100 rounded-lg p-4">
                    {mistake}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-5 flex items-center gap-3">
                <HelpCircle className="h-6 w-6 text-emerald-600" />
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {guide.faqs.map((faq) => (
                  <section key={faq.question} className="border border-slate-200 rounded-lg p-5">
                    <h3 className="text-base font-bold text-slate-900 mb-2">{faq.question}</h3>
                    <p className="text-sm text-slate-700 leading-7">{faq.answer}</p>
                  </section>
                ))}
              </div>
            </div>

            <div className="mt-12 bg-slate-900 text-white rounded-lg p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Build your schedule now</h2>
                <p className="text-sm text-slate-300 leading-relaxed">Turn this guide into a clean weekly schedule, timetable, or planning image you can download for free.</p>
              </div>
              <Link href="/builder" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-emerald-500 text-slate-950 font-bold rounded-lg hover:bg-emerald-400 transition shrink-0">
                Open Builder
                <Calendar className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}

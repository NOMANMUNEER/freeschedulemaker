import Link from 'next/link';
import { ArrowRight, Image, Pin, Sparkles } from 'lucide-react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import type { PinterestLandingPage as PinterestLandingPageData } from '../../data/pinterestLandingPages';

type PinterestLandingPageProps = {
  page: PinterestLandingPageData;
};

export default function PinterestLandingPage({ page }: PinterestLandingPageProps) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />

      <section className="bg-white border-b border-slate-200 py-16 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_360px] gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 text-rose-700 font-bold text-xs mb-6 border border-rose-100">
              <Pin className="h-4 w-4" />
              {page.badge}
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-5">
              {page.heading}
            </h1>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-7">{page.intro}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href={page.primaryHref} className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition">
                {page.primaryLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/builder" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-slate-900 font-bold rounded-lg border border-slate-300 hover:border-slate-500 transition">
                Open builder
              </Link>
            </div>
          </div>

          <div className="bg-slate-100 border border-slate-200 rounded-lg p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">{page.board}</p>
            <div className="aspect-[2/3] rounded-lg bg-white border border-slate-200 p-5 flex flex-col justify-between shadow-sm">
              <div className="space-y-3">
                <div className="h-3 w-24 rounded-full bg-rose-300" />
                <div className="h-3 w-32 rounded-full bg-slate-300" />
                <div className="grid grid-cols-2 gap-2 pt-3">
                  {['Plan', 'Study', 'Reset', 'Focus', 'Break', 'Print'].map((label, index) => (
                    <div key={label} className="rounded-md border border-slate-200 bg-slate-50 p-2 min-h-14">
                      <div className={`h-1.5 w-10 rounded-full mb-2 ${index % 2 === 0 ? 'bg-rose-400' : 'bg-sky-400'}`} />
                      <p className="text-[10px] font-bold text-slate-700">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xl font-extrabold text-slate-900 leading-tight">{page.heading}</p>
                <p className="text-xs text-slate-500 mt-2">Free printable planning idea</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-7">
            <Image className="h-5 w-5 text-rose-600" />
            <h2 className="text-2xl font-bold text-slate-900">Pin Ideas for This Board</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {page.pinIdeas.map((idea) => (
              <article key={idea.title} className="bg-white border border-slate-200 rounded-lg p-5">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{idea.title}</h3>
                <p className="text-sm text-slate-600 leading-7 mb-4">{idea.description}</p>
                <p className="text-xs text-slate-500 leading-relaxed mb-2">
                  <span className="font-bold text-slate-700">Palette:</span> {idea.palette}
                </p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  <span className="font-bold text-slate-700">Text overlay:</span> {idea.textOverlay}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-6 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-5">
          {page.sections.map((section) => (
            <article key={section.title} className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <Sparkles className="h-5 w-5 text-rose-600 mb-4" />
              <h2 className="text-lg font-bold text-slate-900 mb-3">{section.title}</h2>
              <p className="text-sm text-slate-600 leading-7">{section.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-14 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">Questions</h2>
          <div className="space-y-4">
            {page.faqs.map((faq) => (
              <article key={faq.question} className="bg-white border border-slate-200 rounded-lg p-5">
                <h3 className="text-base font-bold text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-sm text-slate-600 leading-7">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

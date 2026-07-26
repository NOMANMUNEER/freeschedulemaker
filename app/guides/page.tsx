import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { PLANNING_GUIDES } from '../../data/planningGuides';

export const metadata: Metadata = {
  title: 'Scheduling Guides, Planning Examples, and Time Management Tips',
  description: 'Read practical guides for weekly schedules, student timetables, employee schedules, time blocking, and study planning.',
  alternates: {
    canonical: 'https://www.freeschedulemaker.com/guides',
  },
  openGraph: {
    title: 'Scheduling Guides and Planning Examples | FreeScheduleMaker',
    description: 'Helpful scheduling guides for students, teams, creators, workers, and everyday planning.',
    url: 'https://www.freeschedulemaker.com/guides',
    type: 'website',
  },
};

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header />

      <section className="bg-white border-b border-slate-200 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs mb-6 border border-emerald-100">
              <BookOpen className="h-4 w-4" />
              Planning guides
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-5">
              Practical Scheduling Guides and Examples
            </h1>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              Learn how to build realistic schedules for school, work, study, routines, and small teams. Each guide includes examples, common mistakes, and steps you can use inside the free schedule maker.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-5">
          {PLANNING_GUIDES.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group bg-white border border-slate-200 rounded-lg p-6 hover:border-emerald-400 transition"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-4">
                <Clock className="h-4 w-4" />
                {guide.readTime}
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-start justify-between gap-4">
                {guide.title}
                <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition shrink-0 mt-1" />
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">{guide.description}</p>
              <p className="text-xs text-slate-500 leading-relaxed">
                <span className="font-bold text-slate-700">Best for:</span> {guide.audience}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

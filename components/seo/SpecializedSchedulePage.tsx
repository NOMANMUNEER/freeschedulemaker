import React from 'react';
import Link from 'next/link';
import { Calendar, CheckCircle, Download, Palette, PlusCircle } from 'lucide-react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import ScheduleBuilder from '../builder/ScheduleBuilder';
import RelatedTools from './RelatedTools';

type SpecializedPageProps = {
  badge: string;
  heading: string;
  subheading: string;
  builderVariant: 'default' | 'weekly' | 'university' | 'rota' | 'employee' | 'shift' | 'revision';
  sections: {
    title: string;
    body: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

export default function SpecializedSchedulePage({
  badge,
  heading,
  subheading,
  builderVariant,
  sections,
  faqs,
}: SpecializedPageProps) {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      <header className="bg-white border-b border-slate-200 pt-20 pb-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 font-bold text-xs mb-6 border border-indigo-100 shadow-xs">
            <Calendar className="h-4 w-4" />
            {badge}
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
            {heading}
          </h1>

          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            {subheading}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-semibold text-slate-500">
            <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /> Free to use</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /> No signup</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /> PNG export</span>
          </div>
        </div>
      </header>

      <ScheduleBuilder variant={builderVariant} />

      <section className="py-16 px-6 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {sections.map((section) => (
              <article key={section.title} className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                <h2 className="text-base font-bold text-slate-900 mb-2">{section.title}</h2>
                <p className="text-xs text-slate-600 leading-relaxed">{section.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">How to Make Your Schedule</h2>
            <p className="text-sm md:text-base text-slate-600 max-w-xl mx-auto">
              Build a clear timetable in four quick steps, then download it for printing or sharing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Calendar, title: 'Pick days and hours', body: 'Set the visible days, start time, end time, and time spacing for your schedule.' },
              { icon: PlusCircle, title: 'Add events', body: 'Add classes, subjects, meetings, study blocks, shifts, or personal tasks.' },
              { icon: Palette, title: 'Color-code blocks', body: 'Use colors and labels to make important events easy to scan.' },
              { icon: Download, title: 'Download PNG', body: 'Export the finished timetable as a clean image for printing or sharing.' },
            ].map((step) => {
              const Icon = step.icon;
              return (
                <article key={step.title} className="bg-white p-6 rounded-lg shadow-xs border border-slate-200">
                  <Icon className="h-6 w-6 text-indigo-600 mb-4" />
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{step.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white border-b border-slate-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <article key={faq.question} className="border border-slate-200 rounded-lg p-5 bg-slate-50">
                <h3 className="font-bold text-slate-900 text-sm mb-2">{faq.question}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-slate-50 border-b border-slate-200 text-center">
        <Link href="/" className="text-indigo-600 font-bold text-sm hover:underline">
          Explore the main free schedule maker
        </Link>
      </section>

      <RelatedTools variant={builderVariant} />
      <Footer />
    </main>
  );
}

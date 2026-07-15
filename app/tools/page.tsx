import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { PROGRAMMATIC_PAGES } from '../../data/programmaticPages';

export const metadata: Metadata = {
  title: 'Free Scheduling Tools | Schedule Makers and Timetable Makers',
  description: 'Explore free online schedule makers for classes, work, staff, students, study plans, workouts, daily routines, and rotating shifts.',
  alternates: {
    canonical: 'https://www.freeschedulemaker.com/tools',
  },
  openGraph: {
    title: 'Free Scheduling Tools | FreeScheduleMaker',
    description: 'Find free schedule maker tools for school, work, study, fitness, and daily planning.',
    url: 'https://www.freeschedulemaker.com/tools',
    type: 'website',
  },
};

const PRIMARY_TOOLS = [
  {
    title: 'Free Schedule Maker',
    href: '/',
    description: 'Create a general daily, weekly, class, work, or personal schedule online for free.',
  },
  {
    title: 'Weekly Schedule Maker',
    href: '/weekly-schedule-maker',
    description: 'Plan a full week with classes, tasks, routines, shifts, workouts, and appointments.',
  },
  {
    title: 'Class Schedule Maker',
    href: '/class-schedule-maker',
    description: 'Build a class schedule for lectures, labs, tutorials, exams, and study sessions.',
  },
  {
    title: 'Timetable Maker',
    href: '/timetable-maker',
    description: 'Create a printable timetable for school, college, work, study, or personal planning.',
  },
  {
    title: 'College Schedule Maker',
    href: '/college-schedule-maker',
    description: 'Organize college classes, labs, office hours, study time, and exam preparation.',
  },
  {
    title: 'Employee Schedule Creator',
    href: '/employee-schedule-creator',
    description: 'Create employee work schedules, weekly rosters, departments, and shift assignments.',
  },
];

export default function ToolsHubPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header />

      <section className="bg-white border-b border-slate-200 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 font-bold text-xs mb-6 border border-indigo-100">
              <Calendar className="h-4 w-4" />
              Free scheduling tools
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-5">
              Free Schedule Makers and Timetable Tools
            </h1>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              Choose a schedule maker for school, work, staff planning, study routines, workouts, daily tasks, or rotating shifts. Every tool works online and can export a clean PNG schedule.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Main Schedule Tools</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PRIMARY_TOOLS.map((tool) => (
              <Link key={tool.href} href={tool.href} className="group bg-white border border-slate-200 rounded-lg p-5 hover:border-indigo-400 transition">
                <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center justify-between">
                  {tool.title}
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition" />
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">{tool.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-6 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Specialized Schedule Makers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROGRAMMATIC_PAGES.map((page) => (
              <Link key={page.slug} href={`/tools/${page.slug}`} className="group bg-slate-50 border border-slate-200 rounded-lg p-5 hover:border-indigo-400 transition">
                <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center justify-between">
                  {page.heading}
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition" />
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">{page.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

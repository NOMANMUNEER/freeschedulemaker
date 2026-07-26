import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CalendarDays, Download, Palette } from 'lucide-react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

export const metadata: Metadata = {
  title: 'Free Schedule Templates and Timetable Examples',
  description: 'Browse free schedule template ideas for students, weekly planning, employee shifts, time blocking, workouts, and study routines.',
  alternates: {
    canonical: 'https://www.freeschedulemaker.com/templates',
  },
  openGraph: {
    title: 'Free Schedule Templates and Timetable Examples | FreeScheduleMaker',
    description: 'Useful schedule template ideas you can recreate and download with FreeScheduleMaker.',
    url: 'https://www.freeschedulemaker.com/templates',
    type: 'website',
  },
};

const TEMPLATES = [
  {
    title: 'Weekly Planner Template',
    href: '/weekly-schedule-maker',
    accent: 'bg-emerald-500',
    description: 'A balanced weekly layout for work, meals, chores, workouts, errands, and personal reset time.',
    blocks: ['Work', 'Lunch', 'Errands', 'Workout', 'Admin', 'Reset'],
    tips: ['Use one color for work and another for personal routines.', 'Keep Friday afternoon lighter if the week often changes.'],
  },
  {
    title: 'Student Class Timetable',
    href: '/class-schedule-maker',
    accent: 'bg-indigo-500',
    description: 'A student timetable for lectures, labs, study blocks, office hours, assignments, and club activities.',
    blocks: ['Math', 'Lab', 'Reading', 'Study', 'Office Hours', 'Essay'],
    tips: ['Add review blocks after important classes.', 'Keep assignment work separate from exam revision.'],
  },
  {
    title: 'Employee Shift Schedule',
    href: '/employee-schedule-creator',
    accent: 'bg-sky-500',
    description: 'A small-team schedule for morning, afternoon, evening, opening, closing, and weekend coverage.',
    blocks: ['Opening', 'Front Desk', 'Break', 'Rush Cover', 'Closing', 'Handoff'],
    tips: ['Mark role coverage inside each shift.', 'Add short handoff blocks for teams that overlap.'],
  },
  {
    title: 'Study Revision Plan',
    href: '/revision-timetable-maker',
    accent: 'bg-violet-500',
    description: 'A revision timetable for practice questions, flashcards, topic review, mock tests, and breaks.',
    blocks: ['Physics', 'Flashcards', 'Practice', 'Break', 'Essay Plan', 'Mock Test'],
    tips: ['Repeat difficult topics across several days.', 'Use active recall instead of only reading notes.'],
  },
  {
    title: 'Workout Schedule',
    href: '/tools/workout-schedule-maker',
    accent: 'bg-rose-500',
    description: 'A weekly fitness plan for strength training, cardio, mobility, rest days, and meal prep.',
    blocks: ['Upper Body', 'Walk', 'Mobility', 'Rest', 'Lower Body', 'Meal Prep'],
    tips: ['Place hard sessions away from your busiest work days.', 'Schedule rest days so they are not forgotten.'],
  },
  {
    title: 'Time Blocking Template',
    href: '/guides/time-blocking-guide',
    accent: 'bg-amber-500',
    description: 'A focused day plan for deep work, meetings, admin, errands, creative work, and shutdown routines.',
    blocks: ['Deep Work', 'Email', 'Meeting', 'Lunch', 'Admin', 'Shutdown'],
    tips: ['Name the outcome of each block.', 'Leave buffers after meetings and travel.'],
  },
];

export default function TemplatesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header />

      <section className="bg-white border-b border-slate-200 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 text-sky-700 font-bold text-xs mb-6 border border-sky-100">
              <CalendarDays className="h-4 w-4" />
              Template ideas
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-5">
              Free Schedule Templates and Timetable Examples
            </h1>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              Use these examples as starting points for your own schedule. Each template idea can be recreated in the free builder, customized with your own colors, and downloaded as a PNG image.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6">
          {TEMPLATES.map((template) => (
            <article key={template.title} className="bg-white border border-slate-200 rounded-lg overflow-hidden">
              <div className="grid sm:grid-cols-[220px_1fr]">
                <div className="bg-slate-100 p-5 border-b sm:border-b-0 sm:border-r border-slate-200">
                  <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-sm">
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      {['Mon', 'Tue', 'Wed', 'Thu'].map((day) => (
                        <div key={day} className="text-[10px] font-bold text-slate-500 text-center py-1 bg-slate-50 rounded">
                          {day}
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {template.blocks.map((block, index) => (
                        <div key={block} className="min-h-12 rounded border border-slate-200 bg-slate-50 p-2">
                          <div className={`h-1.5 w-10 rounded-full mb-2 ${index % 2 === 0 ? template.accent : 'bg-slate-300'}`} />
                          <p className="text-[10px] font-bold text-slate-700 leading-tight">{block}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-bold text-slate-900 mb-3">{template.title}</h2>
                  <p className="text-sm text-slate-600 leading-7 mb-5">{template.description}</p>

                  <div className="space-y-3 mb-6">
                    {template.tips.map((tip) => (
                      <p key={tip} className="text-xs text-slate-700 leading-relaxed flex gap-2">
                        <Palette className="h-4 w-4 text-sky-600 shrink-0 mt-0.5" />
                        {tip}
                      </p>
                    ))}
                  </div>

                  <Link href={template.href} className="inline-flex items-center gap-2 text-sm font-bold text-sky-700 hover:text-sky-800">
                    Use this template idea
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-14 px-6 bg-white border-y border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <Download className="h-10 w-10 text-sky-600 mx-auto mb-5" />
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Create your own downloadable schedule</h2>
          <p className="text-sm text-slate-600 leading-7 mb-7">
            Pick a layout, add your activities, choose colors, and export a clean schedule image for school, work, study, fitness, or daily planning.
          </p>
          <Link href="/builder" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition">
            Open Free Builder
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

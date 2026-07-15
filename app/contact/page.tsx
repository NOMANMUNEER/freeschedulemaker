import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Calendar, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | FreeScheduleMaker',
  description: 'Get in touch with the FreeScheduleMaker team about the free online schedule maker, timetable creator, and rota planning tools.',
  alternates: {
    canonical: 'https://www.freeschedulemaker.com/contact',
  },
  openGraph: {
    title: 'Contact Us | FreeScheduleMaker',
    description: 'Get in touch with the FreeScheduleMaker team.',
    url: 'https://www.freeschedulemaker.com/contact',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200 text-slate-800 text-center">
        <div className="flex justify-center mb-6">
          <div className="h-16 w-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center">
            <Mail className="h-8 w-8" />
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Contact FreeScheduleMaker</h1>
        
        <div className="space-y-6 text-slate-600 leading-relaxed text-left">
          <p className="text-lg">Have feedback, a feature request, or a question about using our <strong>free online schedule maker</strong>? We are happy to hear from you.</p>
          
          <p>FreeScheduleMaker is built for students, teams, managers, and anyone who needs a simple way to create weekly schedules, class timetables, work rotas, and shift plans without signing up.</p>

          <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 mt-8 text-center">
            <h3 className="font-bold text-indigo-900 text-lg mb-2">Before you contact us</h3>
            <p className="text-indigo-700 mb-6">The fastest way to get started is to open the schedule builder, choose a template, add your events, and export your finished timetable as a PNG.</p>
            <Link 
              href="/builder" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition shadow-sm"
            >
              Open Schedule Maker <Calendar className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 pt-8 border-t border-slate-200 text-center">
            <Link href="/" className="text-indigo-600 font-medium hover:underline">&larr; Back to Home</Link>
          </div>
        </div>
      </div>
    </main>
  );
}

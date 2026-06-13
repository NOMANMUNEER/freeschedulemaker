import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Users, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | FreeScheduleMaker',
  description: 'Get in touch with the FreeScheduleMaker team.',
  alternates: {
    canonical: 'https://freeschedulemaker.com/contact',
  },
  openGraph: {
    title: 'Contact Us | FreeScheduleMaker',
    description: 'Get in touch with the FreeScheduleMaker team.',
    url: 'https://freeschedulemaker.com/contact',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200 text-slate-800 text-center">
        <div className="flex justify-center mb-6">
          <div className="h-16 w-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center">
            <Users className="h-8 w-8" />
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">About ScheduleBuilder Online</h1>
        
        <div className="space-y-6 text-slate-600 leading-relaxed text-left">
          <p className="text-lg">Our mission is simple: to provide the easiest, fastest, and most visually appealing <strong>free online schedule maker</strong> on the internet.</p>
          
          <p>Time management is the key to success, whether you are a college student juggling classes, a manager creating an employee shift calendar, or simply someone trying to organize a weekly workout and meal prep routine. However, most scheduling tools require paid subscriptions, mandatory account creation, or are clunky to use.</p>

          <p>We built ScheduleBuilder Online to change that. Our tool is 100% free, requires absolutely no sign-up, and runs entirely in your browser. With a few clicks, you can block out your time, customize your colors, and instantly export a beautiful image of your timetable.</p>

          <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 mt-8 text-center">
            <h3 className="font-bold text-indigo-900 text-lg mb-2">Ready to take control of your time?</h3>
            <p className="text-indigo-700 mb-6">Join thousands of users organizing their lives effectively.</p>
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
    </div>
  );
}
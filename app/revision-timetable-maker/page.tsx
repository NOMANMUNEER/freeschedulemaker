import React from 'react';
import Link from 'next/link';
import { 
  Calendar, Clock, Users, BookOpen, 
  CheckCircle, Layout, PlusCircle, Palette, 
  Download, Star, HelpCircle, ChevronRight,
  GraduationCap
} from 'lucide-react';
import type { Metadata } from 'next';

// 🚀 NICHE SEO METADATA
export const metadata: Metadata = {
  title: 'Revision Timetable Maker | Free Online Generator',
  description: 'Create the perfect study schedule with our free revision timetable maker. Perfect for GCSE, A-Level, IB, and University exam revision planning.',
  keywords: 'revision timetable maker, revision timetable generator free, online revision timetable generator, gcse revision timetable generator, a level revision timetable maker, automatic revision timetable maker, exam revision timetable maker, revision planner generator, university revision timetable generator, revision schedule maker',
  alternates: {
    canonical: 'https://freeschedulemaker.com/revision-timetable-maker',
  },
  openGraph: {
    title: 'Revision Timetable Maker | Free Online Generator',
    description: 'Create the perfect study schedule with our free revision timetable maker. Perfect for GCSE, A-Level, IB, and University exam revision planning.',
    type: 'website',
    url: 'https://freeschedulemaker.com/revision-timetable-maker',
    images: ['/og-image.png'],
  }
};

export default function RevisionTimetableMakerPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100">
      
      {/* 🌟 HERO SECTION */}
      <header className="bg-white border-b border-slate-200 pt-24 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 font-bold text-sm mb-6 border border-indigo-100 shadow-sm">
            <Star className="h-4 w-4 fill-indigo-600 text-indigo-600" />
            #1 Exam Study Planner
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
            Free Revision Timetable Maker
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Ace your exams without the stress. Build a highly organized, color-coded study plan using our <strong>online revision timetable generator</strong>. Completely free, perfect for GCSEs, A-Levels, and University finals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <Link 
              href="/builder" 
              className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-lg flex items-center justify-center gap-2"
            >
              Start Your Revision Plan <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="flex items-center justify-center gap-6 text-sm font-medium text-slate-500">
            <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-emerald-500" /> Best for GCSE & A-Level</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-emerald-500" /> 100% Free forever</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-emerald-500" /> Auto-formatting</span>
          </div>
        </div>
      </header>

      {/* 🚀 LONG-TAIL KEYWORD TAGS */}
      <section className="py-8 bg-indigo-900 border-y border-indigo-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'A Level Revision Timetable Maker', 
              'GCSE Revision Timetable Generator', 
              'Automatic Revision Timetable Maker', 
              'IB Revision Timetable Generator', 
              'University Revision Timetable Generator', 
              'Revision Planner Generator'
            ].map((tag) => (
              <span key={tag} className="px-4 py-2 bg-indigo-800/50 text-indigo-100 text-sm font-medium rounded-lg border border-indigo-700/50 hover:bg-indigo-700 transition cursor-default">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 📚 4-STEP HOW TO USE */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How to Make a Revision Timetable</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">A good study schedule balances subjects and prevents burnout. Here is how to use our weekly revision timetable maker.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 relative pt-12">
              <div className="absolute top-0 left-6 -translate-y-1/2 h-12 w-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center shadow-lg">
                <Layout className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">1. Set Study Hours</h3>
              <p className="text-slate-600 leading-relaxed">Choose your grid format. Setting realistic study blocks (like 4 PM to 8 PM on weekdays) is the first step to successful revision.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 relative pt-12">
              <div className="absolute top-0 left-6 -translate-y-1/2 h-12 w-12 bg-blue-500 text-white rounded-xl flex items-center justify-center shadow-lg">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">2. Add Subjects</h3>
              <p className="text-slate-600 leading-relaxed">Click into the calendar to add your revision blocks. Allocate specific topics (e.g., 'Biology - Cell Structure') rather than broad subjects.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 relative pt-12">
              <div className="absolute top-0 left-6 -translate-y-1/2 h-12 w-12 bg-emerald-500 text-white rounded-xl flex items-center justify-center shadow-lg">
                <Palette className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">3. Color-Code Exams</h3>
              <p className="text-slate-600 leading-relaxed">Use different colors for different exams or difficulty levels. Visualizing your revision planner makes it much easier to stick to.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 relative pt-12">
              <div className="absolute top-0 left-6 -translate-y-1/2 h-12 w-12 bg-purple-500 text-white rounded-xl flex items-center justify-center shadow-lg">
                <Download className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">4. Save & Print</h3>
              <p className="text-slate-600 leading-relaxed">Export your revision schedule creator grid as a high-quality PNG. Print it out and stick it above your desk!</p>
            </div>
          </div>
        </div>
      </section>

      {/* ⭐ SOCIAL PROOF / FEATURES */}
      <section className="py-20 px-6 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">The Best Revision Timetable Maker</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1"><GraduationCap className="h-6 w-6 text-indigo-600" /></div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Tailored for Students</h3>
                  <p className="text-slate-600">Whether you need an A Level revision timetable maker or a university revision timetable generator, our tool scales to fit your exact academic needs.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1"><CheckCircle className="h-6 w-6 text-indigo-600" /></div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Automatic & Easy</h3>
                  <p className="text-slate-600">Don't waste an hour making an Excel sheet. As an automatic revision timetable maker, it perfectly aligns your study blocks automatically.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1"><CheckCircle className="h-6 w-6 text-indigo-600" /></div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">100% Free & No Signups</h3>
                  <p className="text-slate-600">Students shouldn't have to pay to organize their studying. Our revision schedule maker is completely free and requires no account.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Block */}
          <div className="w-full lg:w-1/3 bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm relative">
            <div className="text-5xl text-indigo-200 absolute top-4 left-6 font-serif">"</div>
            <div className="relative z-10 pt-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />)}
              </div>
              <p className="text-slate-700 italic mb-6 leading-relaxed">
                I was incredibly stressed about my GCSEs. I used this gcse revision timetable generator to map out my weekends and evenings, color-coded by subject. It saved me so much anxiety.
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center font-bold text-indigo-700">ES</div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">Emily S.</p>
                  <p className="text-slate-500 text-xs">Year 11 Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ❓ FAQ SECTION */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Revision Planner FAQ</h2>
            <p className="text-slate-600">Tips and answers for creating your ultimate study schedule.</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Is this revision timetable generator free?",
                a: "Yes, it is a completely free online revision timetable generator. You don't have to pay a single penny to create, customize, or download your schedule."
              },
              {
                q: "How many subjects can I add?",
                a: "There is no limit! You can add as many revision blocks and subjects as you need to cover your entire syllabus."
              },
              {
                q: "Can I use this for university exams?",
                a: "Absolutely. Many students use our university revision timetable generator to manage their finals, coursework deadlines, and lecture schedules."
              },
              {
                q: "How do I print my timetable?",
                a: "Once you have filled out your schedule, click the 'Export' button. The app will generate an image file that you can easily print at home or in the library."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-2 flex items-start gap-2">
                  <HelpCircle className="h-5 w-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                  {faq.q}
                </h3>
                <p className="text-slate-600 pl-7">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/builder" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition shadow-lg"
            >
              Start Planning Revision <BookOpen className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 🏁 FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-white font-bold text-lg">
            <Calendar className="h-6 w-6 text-indigo-500" />
            ScheduleBuilder Online
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="/about" className="hover:text-white transition">About Us</Link>
            <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms of Conditions</Link>
            <Link href="/contact" className="hover:text-white transition">Contact</Link>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 text-center text-sm border-t border-slate-800 pt-8">
          <p>© {new Date().getFullYear()} ScheduleBuilder. The best free revision timetable maker online.</p>
        </div>
      </footer>
    </main>
  );
}

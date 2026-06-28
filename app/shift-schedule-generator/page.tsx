import React from 'react';
import Link from 'next/link';
import { 
  Calendar, Clock, Users, BookOpen, 
  CheckCircle, Layout, PlusCircle, Palette, 
  Download, Star, HelpCircle, ChevronRight,
  RefreshCcw, Briefcase
} from 'lucide-react';
import type { Metadata } from 'next';

// 🚀 NICHE SEO METADATA
export const metadata: Metadata = {
  title: 'Shift Schedule Generator | Free Work Shift Creator',
  description: 'Design perfect employee shifts with our free shift schedule generator. Supports 24/7 rotating shifts, automatic shift calendars, and Excel alternatives.',
  keywords: 'shift schedule generator, employee shift schedule generator, automatic shift schedule generator, work shift schedule generator, free employee shift schedule generator, free shift schedule generator, shift schedule generator excel, shift work calendar generator, work shift creator, employee shift generator',
  alternates: {
    canonical: 'https://freeschedulemaker.com/shift-schedule-generator',
  },
  openGraph: {
    title: 'Shift Schedule Generator | Free Work Shift Creator',
    description: 'Design perfect employee shifts with our free shift schedule generator. Supports 24/7 rotating shifts, automatic shift calendars, and Excel alternatives.',
    type: 'website',
    url: 'https://freeschedulemaker.com/shift-schedule-generator',
    images: ['/og-image.png'],
  }
};

export default function ShiftScheduleGeneratorPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100">
      
      {/* 🌟 HERO SECTION */}
      <header className="bg-white border-b border-slate-200 pt-24 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 font-bold text-sm mb-6 border border-indigo-100 shadow-sm">
            <Star className="h-4 w-4 fill-indigo-600 text-indigo-600" />
            #1 Employee Shift Generator
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
            Free Shift Schedule Generator
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Ditch the complicated Excel templates. Build, color-code, and manage your team's shifts instantly with our powerful <strong>work shift schedule generator</strong>. Completely free, no login required.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <Link 
              href="/builder" 
              className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-lg flex items-center justify-center gap-2"
            >
              Start Generating Shifts <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="flex items-center justify-center gap-6 text-sm font-medium text-slate-500">
            <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-emerald-500" /> No signup required</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-emerald-500" /> Free Excel alternative</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-emerald-500" /> Automatic formatting</span>
          </div>
        </div>
      </header>

      {/* 🚀 LONG-TAIL KEYWORD TAGS */}
      <section className="py-8 bg-indigo-900 border-y border-indigo-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Employee Shift Schedule Generator', 
              'Automatic Shift Schedule Generator', 
              'Free Employee Shift Schedule Generator', 
              'Shift Schedule Generator Excel', 
              'Shift Work Calendar Generator', 
              'Work Shift Creator'
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How to Use the Shift Calendar Generator</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Create everything from standard 9-5 rotations to complex 24/7 coverage. Follow these steps to generate your shift patterns.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 relative pt-12">
              <div className="absolute top-0 left-6 -translate-y-1/2 h-12 w-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center shadow-lg">
                <Layout className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">1. Set Business Hours</h3>
              <p className="text-slate-600 leading-relaxed">Choose a standard 12-hour grid for daytime shifts, or switch to a 24-hour layout for overnight and graveyard coverage.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 relative pt-12">
              <div className="absolute top-0 left-6 -translate-y-1/2 h-12 w-12 bg-blue-500 text-white rounded-xl flex items-center justify-center shadow-lg">
                <Briefcase className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">2. Assign Employees</h3>
              <p className="text-slate-600 leading-relaxed">Click any timeslot to create a new shift block. Enter your employee's name and set exact start and end times down to the minute.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 relative pt-12">
              <div className="absolute top-0 left-6 -translate-y-1/2 h-12 w-12 bg-emerald-500 text-white rounded-xl flex items-center justify-center shadow-lg">
                <Palette className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">3. Color-Code Roles</h3>
              <p className="text-slate-600 leading-relaxed">Prevent confusion by color-coding different departments or roles (e.g., Red for Management, Blue for Floor Staff, Green for Kitchen).</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 relative pt-12">
              <div className="absolute top-0 left-6 -translate-y-1/2 h-12 w-12 bg-purple-500 text-white rounded-xl flex items-center justify-center shadow-lg">
                <Download className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">4. Download & Send</h3>
              <p className="text-slate-600 leading-relaxed">Hit export to save your shift schedule as a high-quality image file. It's perfectly formatted to be sent via WhatsApp, Slack, or Email.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ⭐ SOCIAL PROOF / FEATURES */}
      <section className="py-20 px-6 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Why Managers Choose Our Shift Creator</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1"><CheckCircle className="h-6 w-6 text-indigo-600" /></div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Better Than Excel</h3>
                  <p className="text-slate-600">Stop fighting with merged cells and row heights. Our free shift schedule generator excel alternative automatically calculates overlaps and formats everything beautifully.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1"><RefreshCcw className="h-6 w-6 text-indigo-600" /></div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Supports Rotating Shifts</h3>
                  <p className="text-slate-600">Easily manage complex rotating shift patterns or varying days off. Just click to copy shifts across multiple days effortlessly.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1"><CheckCircle className="h-6 w-6 text-indigo-600" /></div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">No Accounts Needed</h3>
                  <p className="text-slate-600">Your employees don't need to download a specialized app or create accounts just to see when they work. You just send them the image file.</p>
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
                We have a 24/7 security team and I was paying $30/month for shift software. I switched to this automatic shift schedule generator and it does exactly what I need for free.
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center font-bold text-indigo-700">MR</div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">Marcus R.</p>
                  <p className="text-slate-500 text-xs">Security Director</p>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Shift Schedule Generator FAQ</h2>
            <p className="text-slate-600">Answers to common questions about managing employee shifts.</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Is this a true shift schedule generator excel alternative?",
                a: "Yes! Creating visual grids in Excel is incredibly tedious. Our builder acts as an automatic shift schedule generator that handles all the spacing, heights, and overlaps for you."
              },
              {
                q: "Can I use it to make a shift work calendar generator for a whole month?",
                a: "Currently, our tool is optimized for weekly and daily schedule generations, which is the most common format for shift workers. You can generate a new image for each week."
              },
              {
                q: "Is it really a free employee shift schedule generator?",
                a: "Yes, 100% free forever. No credit cards, no premium tiers, and no sign-up forms."
              },
              {
                q: "How do overlapping shifts look?",
                a: "Our engine automatically detects when two employees work the same shift or overlapping hours. It will neatly position their blocks side-by-side so everything remains readable."
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
              Start Generating Shifts <Calendar className="h-5 w-5" />
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
          <p>© {new Date().getFullYear()} ScheduleBuilder. The best free employee shift schedule generator.</p>
        </div>
      </footer>
    </main>
  );
}

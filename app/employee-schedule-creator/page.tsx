import React from 'react';
import Link from 'next/link';
import { 
  Calendar, Clock, Users, BookOpen, 
  CheckCircle, Layout, PlusCircle, Palette, 
  Download, Star, HelpCircle, ChevronRight,
  Briefcase
} from 'lucide-react';
import type { Metadata } from 'next';

// 🚀 NICHE SEO METADATA
export const metadata: Metadata = {
  title: 'Employee Schedule Creator | Free Online App',
  description: 'Manage your staff with our employee schedule creator free. An automated employee schedule generator and builder designed for small businesses.',
  keywords: 'employee schedule generator free, free schedule generator for employees, schedule generator for employees free, employee schedule creator free, employee schedule builder free, free employee schedule creator, online employee schedule maker, app to make schedule for employees, app to make employee schedule, schedule generator for employees, automated employee schedule generator, automatic employee schedule generator',
  alternates: {
    canonical: 'https://freeschedulemaker.com/employee-schedule-creator',
  },
  openGraph: {
    title: 'Employee Schedule Creator | Free Online App',
    description: 'Manage your staff with our employee schedule creator free. An automated employee schedule generator and builder designed for small businesses.',
    type: 'website',
    url: 'https://freeschedulemaker.com/employee-schedule-creator',
    images: ['/og-image.png'],
  }
};

export default function EmployeeScheduleCreatorPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100">
      
      {/* 🌟 HERO SECTION */}
      <header className="bg-white border-b border-slate-200 pt-24 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 font-bold text-sm mb-6 border border-indigo-100 shadow-sm">
            <Star className="h-4 w-4 fill-indigo-600 text-indigo-600" />
            #1 Employee Schedule Maker
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
            Employee Schedule Creator Free
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Organize your staff efficiently with our automated <strong>employee schedule generator free</strong> of charge. The fastest web app to make employee schedules, completely free and instantly accessible.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <Link 
              href="/builder" 
              className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-lg flex items-center justify-center gap-2"
            >
              Start Creating Schedules <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="flex items-center justify-center gap-6 text-sm font-medium text-slate-500">
            <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-emerald-500" /> No signup required</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-emerald-500" /> No app installation</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-emerald-500" /> Completely Free</span>
          </div>
        </div>
      </header>

      {/* 🚀 LONG-TAIL KEYWORD TAGS */}
      <section className="py-8 bg-indigo-900 border-y border-indigo-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'App To Make Schedule For Employees', 
              'Automated Employee Schedule Generator', 
              'Free Employee Schedule Creator', 
              'Employee Schedule Builder Free', 
              'Online Employee Schedule Maker', 
              'Schedule Generator For Employees Free'
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How to Use the Employee Schedule Builder</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Create beautiful, readable schedules for your staff in minutes. Say goodbye to messy whiteboards and confusing spreadsheets.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 relative pt-12">
              <div className="absolute top-0 left-6 -translate-y-1/2 h-12 w-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center shadow-lg">
                <Layout className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">1. Define the Week</h3>
              <p className="text-slate-600 leading-relaxed">Select the days your business is open and set your operating hours. The automated employee schedule generator instantly builds your grid.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 relative pt-12">
              <div className="absolute top-0 left-6 -translate-y-1/2 h-12 w-12 bg-blue-500 text-white rounded-xl flex items-center justify-center shadow-lg">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">2. Add Your Staff</h3>
              <p className="text-slate-600 leading-relaxed">Click any day and time to add an employee. Input their name, role, and shift duration. Overlapping shifts are handled automatically.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 relative pt-12">
              <div className="absolute top-0 left-6 -translate-y-1/2 h-12 w-12 bg-emerald-500 text-white rounded-xl flex items-center justify-center shadow-lg">
                <Palette className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">3. Customize Design</h3>
              <p className="text-slate-600 leading-relaxed">Make it readable by assigning custom colors to different employees or departments. Choose clean fonts and layouts.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 relative pt-12">
              <div className="absolute top-0 left-6 -translate-y-1/2 h-12 w-12 bg-purple-500 text-white rounded-xl flex items-center justify-center shadow-lg">
                <Download className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">4. Share the Roster</h3>
              <p className="text-slate-600 leading-relaxed">Export your completed schedule as a PNG file. You can easily print it for the breakroom or email it directly to your employees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ⭐ SOCIAL PROOF / FEATURES */}
      <section className="py-20 px-6 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">The Best App to Make Schedule for Employees</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1"><CheckCircle className="h-6 w-6 text-indigo-600" /></div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">Completely Web-Based</h4>
                  <p className="text-slate-600">No need to download a heavy app to make employee schedules. Our online employee schedule maker runs right in your browser.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1"><CheckCircle className="h-6 w-6 text-indigo-600" /></div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">Visual and Automated</h4>
                  <p className="text-slate-600">This automated employee schedule generator instantly snaps shift blocks into the correct time slots, perfectly aligning everything so you don't have to.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1"><CheckCircle className="h-6 w-6 text-indigo-600" /></div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">No Login Walls</h4>
                  <p className="text-slate-600">Many tools claim to be an employee schedule generator free, but force you to pay to export. We let you export an unlimited number of schedules totally free.</p>
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
                I looked everywhere for a free schedule generator for employees without a subscription fee. This app is incredibly fast and produces the cleanest schedules I've ever made.
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center font-bold text-indigo-700">KL</div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">Karen L.</p>
                  <p className="text-slate-500 text-xs">Retail Store Manager</p>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Employee Schedule Creator FAQ</h2>
            <p className="text-slate-600">Answers to your questions about our schedule generator for employees.</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Is this employee schedule creator actually free?",
                a: "Yes. Our tool is 100% free. You can use it as a schedule generator for employees free forever without any hidden costs."
              },
              {
                q: "Do my employees need to download an app to see their schedule?",
                a: "No! Unlike other platforms, you don't need a special app to make schedule for employees. You export the schedule as an image and text/email it to them directly."
              },
              {
                q: "What makes it an automated employee schedule generator?",
                a: "You just provide the start and end times, and our engine automatically calculates block sizes, handles overlaps, and aligns everything flawlessly on the grid."
              },
              {
                q: "Can I manage multiple departments at once?",
                a: "Yes. The best way to do this is to use different color palettes for different departments (e.g., Sales in Blue, Inventory in Green) on the same schedule."
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
              Start Creating Schedules <Users className="h-5 w-5" />
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
          <p>© {new Date().getFullYear()} ScheduleBuilder. The top employee schedule creator free.</p>
        </div>
      </footer>
    </div>
  );
}

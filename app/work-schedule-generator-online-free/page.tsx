import React from 'react';
import Link from 'next/link';
import { 
  Calendar, Clock, Users, BookOpen, 
  CheckCircle, Layout, PlusCircle, Palette, 
  Download, Star, HelpCircle, ChevronRight
} from 'lucide-react';
import type { Metadata } from 'next';

// 🚀 NICHE SEO METADATA
export const metadata: Metadata = {
  title: 'Work Schedule Generator Online Free | Auto Shift Creator',
  description: 'Manage employee shifts seamlessly with our work schedule generator online free. Generate rotating shifts and work schedules instantly.',
  keywords: 'work schedule generator online free, free automatic schedule generator online, rotating schedule generator free, work schedule generator free',
  alternates: {
    canonical: 'https://freeschedulemaker.com/work-schedule-generator-online-free',
  },
  openGraph: {
    title: 'Work Schedule Generator Online Free | Auto Shift Creator',
    description: 'Manage employee shifts seamlessly with our work schedule generator online free. Generate rotating shifts and work schedules instantly.',
    type: 'website',
    url: 'https://freeschedulemaker.com/work-schedule-generator-online-free',
    images: ['/og-image.png'],
  }
};

export default function WorkScheduleGeneratorOnlineFreePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100">
      
      {/* 🌟 HERO SECTION */}
      <header className="bg-white border-b border-slate-200 pt-24 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 font-bold text-sm mb-6 border border-indigo-100 shadow-sm">
            <Star className="h-4 w-4 fill-indigo-600 text-indigo-600" />
            #1 Online Employee Scheduler
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
            Work Schedule Generator Online Free
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Stop struggling with spreadsheets. Build and manage employee shifts instantly using our powerful <strong>work schedule generator online free</strong>. No credit card, no sign-up, just easy scheduling.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <Link 
              href="/builder" 
              className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-lg flex items-center justify-center gap-2"
            >
              Start Generating <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="flex items-center justify-center gap-6 text-sm font-medium text-slate-500">
            <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-emerald-500" /> No account needed</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-emerald-500" /> 100% Free forever</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-emerald-500" /> Download & Share instantly</span>
          </div>
        </div>
      </header>

      {/* 🚀 LONG-TAIL KEYWORD TAGS */}
      <section className="py-8 bg-indigo-900 border-y border-indigo-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Rotating Schedule Generator Free', 
              'Free Automatic Schedule Generator Online', 
              'Employee Shift Schedule Generator', 
              'Work Schedule Creator', 
              'Automatic Schedule Generator Free', 
              'Shift Schedule Generator'
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How to Generate Your Work Schedule</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Creating an employee roster has never been this easy. Follow these four simple steps to generate your ideal work schedule online for free.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 relative pt-12">
              <div className="absolute top-0 left-6 -translate-y-1/2 h-12 w-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center shadow-lg">
                <Layout className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">1. Set Up the Grid</h3>
              <p className="text-slate-600 leading-relaxed">Select the days your business operates, configure 12h or 24h time formats, and outline your standard business hours.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 relative pt-12">
              <div className="absolute top-0 left-6 -translate-y-1/2 h-12 w-12 bg-blue-500 text-white rounded-xl flex items-center justify-center shadow-lg">
                <PlusCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">2. Add Employee Shifts</h3>
              <p className="text-slate-600 leading-relaxed">Click any time slot to add a shift. Assign employee names, set their start and end times, and configure repeating days if needed.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 relative pt-12">
              <div className="absolute top-0 left-6 -translate-y-1/2 h-12 w-12 bg-emerald-500 text-white rounded-xl flex items-center justify-center shadow-lg">
                <Palette className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">3. Color-Code Roles</h3>
              <p className="text-slate-600 leading-relaxed">Assign unique colors to different departments or roles (e.g., green for kitchen staff, blue for front desk) to make the schedule visually clear.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 relative pt-12">
              <div className="absolute top-0 left-6 -translate-y-1/2 h-12 w-12 bg-purple-500 text-white rounded-xl flex items-center justify-center shadow-lg">
                <Download className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">4. Export & Share</h3>
              <p className="text-slate-600 leading-relaxed">Download your completed roster as a crisp PNG file, perfect for emailing to your team, printing for the breakroom, or sending via group chat.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ⭐ SOCIAL PROOF / FEATURES */}
      <section className="py-20 px-6 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">The Best Tool to Generate Schedules</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1"><CheckCircle className="h-6 w-6 text-indigo-600" /></div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Frictionless Generation</h3>
                  <p className="text-slate-600">No complex onboarding or tutorials needed. Our generator is designed to get you from a blank canvas to a completed schedule in record time.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1"><CheckCircle className="h-6 w-6 text-indigo-600" /></div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Highly Customizable</h3>
                  <p className="text-slate-600">Whether you need a classic 9-to-5 grid, a 24/7 rotating shift layout, or a split-shift setup, our tool adapts to your business needs.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1"><CheckCircle className="h-6 w-6 text-indigo-600" /></div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Completely Free</h3>
                  <p className="text-slate-600">Why pay for bulky scheduling software when you only need a simple, visual roster? Enjoy all features completely free.</p>
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
                I manage a small café and used to spend hours messing with Excel templates. This work schedule generator online free changed everything. It takes me 10 minutes now.
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center font-bold text-indigo-700">JT</div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">Jessica T.</p>
                  <p className="text-slate-500 text-xs">Café Manager</p>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Work Schedule Generator FAQ</h2>
            <p className="text-slate-600">Common questions about generating your work schedules.</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Is this work schedule generator truly free?",
                a: "Yes! There are no limits on how many schedules you can create, download, or edit. It's completely free forever."
              },
              {
                q: "Can I use this for rotating shifts?",
                a: "Absolutely. You can customize the layout to accommodate rotating schedules, night shifts, and flexible hours."
              },
              {
                q: "How do I share the schedule with my employees?",
                a: "Once you finish designing the schedule, click the 'Export' button to download it as a PNG image. You can then easily email it or share it in your team's group chat."
              },
              {
                q: "Do my employees need an account to view it?",
                a: "No. Since you download and send them an image file, they can view it on any device without needing to sign up or log in to any software."
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
          <p>© {new Date().getFullYear()} ScheduleBuilder. The best free work schedule generator online.</p>
        </div>
      </footer>
    </main>
  );
}

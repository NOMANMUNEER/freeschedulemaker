import React from 'react';
import Link from 'next/link';
import { 
  Calendar, Clock, Users, BookOpen, 
  CheckCircle, Layout, PlusCircle, Palette, 
  Download, Star, HelpCircle, ChevronRight,
  RefreshCcw
} from 'lucide-react';
import type { Metadata } from 'next';

// 🚀 NICHE SEO METADATA
export const metadata: Metadata = {
  title: 'Rotating Schedule Generator Free | Shift Pattern Maker',
  description: 'Create complex shift patterns easily with our rotating schedule generator free. Perfect for 24/7 businesses, hospitals, and shift workers.',
  keywords: 'rotating schedule generator free, shift schedule generator, employee shift schedule generator, 24/7 shift generator, free shift pattern maker',
  alternates: {
    canonical: 'https://freeschedulemaker.com/rotating-schedule-generator-free',
  },
  openGraph: {
    title: 'Rotating Schedule Generator Free | Shift Pattern Maker',
    description: 'Create complex shift patterns easily with our rotating schedule generator free. Perfect for 24/7 businesses, hospitals, and shift workers.',
    type: 'website',
    url: 'https://freeschedulemaker.com/rotating-schedule-generator-free',
    images: ['/og-image.png'],
  }
};

export default function RotatingScheduleGeneratorFreePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100">
      
      {/* 🌟 HERO SECTION */}
      <header className="bg-white border-b border-slate-200 pt-24 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 font-bold text-sm mb-6 border border-indigo-100 shadow-sm">
            <Star className="h-4 w-4 fill-indigo-600 text-indigo-600" />
            #1 Shift Pattern Maker
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
            Rotating Schedule Generator Free
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Managing 24/7 operations, night shifts, or flexible teams? Build complex shift patterns instantly with our <strong>rotating schedule generator free</strong> of charge. No sign-up required.
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
            <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-emerald-500" /> No sign-up required</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-emerald-500" /> 100% Free forever</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-emerald-500" /> Export to PNG instantly</span>
          </div>
        </div>
      </header>

      {/* 🚀 LONG-TAIL KEYWORD TAGS */}
      <section className="py-8 bg-indigo-900 border-y border-indigo-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Shift Schedule Generator', 
              'Employee Shift Schedule Generator', 
              '24/7 Schedule Maker', 
              'Night Shift Planner', 
              'Work Schedule Generator Online Free', 
              'Rotating Shift Pattern Maker'
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How to Generate Rotating Shifts</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Tackle complex 24-hour operations or alternating days off. Create a crystal clear visual schedule for your team in four easy steps.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 relative pt-12">
              <div className="absolute top-0 left-6 -translate-y-1/2 h-12 w-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center shadow-lg">
                <RefreshCcw className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">1. Set the Timeline</h3>
              <p className="text-slate-600 leading-relaxed">Choose your grid setup. For 24/7 businesses, set your start and end times to cover all shifts, ensuring no gaps in your visual roster.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 relative pt-12">
              <div className="absolute top-0 left-6 -translate-y-1/2 h-12 w-12 bg-blue-500 text-white rounded-xl flex items-center justify-center shadow-lg">
                <PlusCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">2. Plot the Shifts</h3>
              <p className="text-slate-600 leading-relaxed">Click to add morning, swing, and night shifts. Assign employee names, roles, and specify exact start and end times for overlapping hours.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 relative pt-12">
              <div className="absolute top-0 left-6 -translate-y-1/2 h-12 w-12 bg-emerald-500 text-white rounded-xl flex items-center justify-center shadow-lg">
                <Palette className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">3. Color-Code Teams</h3>
              <p className="text-slate-600 leading-relaxed">Use distinct colors for different shifts or rotating teams (e.g., Team A in Blue, Team B in Red). Visual clarity reduces missed shifts.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 relative pt-12">
              <div className="absolute top-0 left-6 -translate-y-1/2 h-12 w-12 bg-purple-500 text-white rounded-xl flex items-center justify-center shadow-lg">
                <Download className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">4. Download & Share</h3>
              <p className="text-slate-600 leading-relaxed">Export your rotating schedule as a high-quality PNG. It's ready to be emailed, printed, or sent out in your team's communication app.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ⭐ SOCIAL PROOF / FEATURES */}
      <section className="py-20 px-6 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">The Best Tool for Shift Workers</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1"><CheckCircle className="h-6 w-6 text-indigo-600" /></div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">Perfect for 24/7 Operations</h4>
                  <p className="text-slate-600">Unlike standard calendars, our builder can handle 24-hour grids, making it ideal for hospitals, security firms, and manufacturing floors.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1"><CheckCircle className="h-6 w-6 text-indigo-600" /></div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">Visual Clarity</h4>
                  <p className="text-slate-600">Rotating shifts can be confusing. Using distinct color palettes helps employees instantly recognize when they are on duty and when they have a day off.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1"><CheckCircle className="h-6 w-6 text-indigo-600" /></div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">100% Free to Use</h4>
                  <p className="text-slate-600">Stop paying monthly subscriptions for overcomplicated workforce management tools. Our shift pattern maker is entirely free.</p>
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
                As a charge nurse, managing the rotating 12-hour shifts for my unit was a nightmare. This free generator is a lifesaver. I color-code the day and night teams and text out the image!
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center font-bold text-indigo-700">SH</div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">Sarah H.</p>
                  <p className="text-slate-500 text-xs">Registered Nurse</p>
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
            <p className="text-slate-600">Everything you need to know about creating complex shift patterns.</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Can I use this rotating schedule generator for free?",
                a: "Yes! There are no hidden fees or paywalls. You can build as many shift patterns as you need completely free of charge."
              },
              {
                q: "Does it support night shifts that cross past midnight?",
                a: "Currently, our tool allows you to set shifts on specific days. For shifts crossing midnight, we recommend creating a block until midnight on Day 1, and starting a new block on Day 2, or using our 24h format."
              },
              {
                q: "Can I color-code different teams or shifts?",
                a: "Absolutely! Color coding is built-in. You can assign different colors to first shift, second shift, night shift, or distinct rotating teams like Team A and Team B."
              },
              {
                q: "Do I have to create an account to share the schedule?",
                a: "No! Just click export to download a PNG image of your finished schedule, which you can then email or text directly to your staff."
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
          <p>© {new Date().getFullYear()} ScheduleBuilder. The top rotating schedule generator free.</p>
        </div>
      </footer>
    </div>
  );
}

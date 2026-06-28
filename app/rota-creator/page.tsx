import React from 'react';
import Link from 'next/link';
import { 
  Calendar, Clock, Users, BookOpen, 
  CheckCircle, Layout, PlusCircle, Palette, 
  Download, Star, HelpCircle, ChevronRight,
  ClipboardList
} from 'lucide-react';
import type { Metadata } from 'next';

// 🚀 NICHE SEO METADATA
export const metadata: Metadata = {
  title: 'Free Rota Creator Online | Staff Rota Maker',
  description: 'Build your weekly staff rota instantly. Our free rota creator online is the easiest way to manage shift rotas without Excel or paid software.',
  keywords: 'rota creator free, rota creator excel, rota creator online free, work rota creator, staff rota creator, shift rota creator, staff schedule creator, staff schedule generator, free staff schedule generator, shift rota generator',
  alternates: {
    canonical: 'https://freeschedulemaker.com/rota-creator',
  },
  openGraph: {
    title: 'Free Rota Creator Online | Staff Rota Maker',
    description: 'Build your weekly staff rota instantly. Our free rota creator online is the easiest way to manage shift rotas without Excel or paid software.',
    type: 'website',
    url: 'https://freeschedulemaker.com/rota-creator',
    images: ['/og-image.png'],
  }
};

export default function RotaCreatorPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100">
      
      {/* 🌟 HERO SECTION */}
      <header className="bg-white border-b border-slate-200 pt-24 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 font-bold text-sm mb-6 border border-indigo-100 shadow-sm">
            <Star className="h-4 w-4 fill-indigo-600 text-indigo-600" />
            #1 Staff Rota Builder
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
            Free Rota Creator Online
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Stop fighting with spreadsheets. Generate clear, professional weekly rotas for your team using our fast and <strong>free rota creator online</strong>. Build your roster in minutes, completely free.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <Link 
              href="/builder" 
              className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-lg flex items-center justify-center gap-2"
            >
              Start Building Rotas <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="flex items-center justify-center gap-6 text-sm font-medium text-slate-500">
            <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-emerald-500" /> Best Excel alternative</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-emerald-500" /> No signup required</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-emerald-500" /> Export instantly</span>
          </div>
        </div>
      </header>

      {/* 🚀 LONG-TAIL KEYWORD TAGS */}
      <section className="py-8 bg-indigo-900 border-y border-indigo-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Staff Rota Creator', 
              'Shift Rota Generator', 
              'Work Rota Creator', 
              'Rota Creator Excel', 
              'Staff Schedule Generator', 
              'Free Staff Schedule Generator'
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How to Use the Rota Creator</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Creating a weekly rota should not be stressful. Build a beautiful, easy-to-read shift rota in four fast steps.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 relative pt-12">
              <div className="absolute top-0 left-6 -translate-y-1/2 h-12 w-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center shadow-lg">
                <Layout className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">1. Pick Grid Format</h3>
              <p className="text-slate-600 leading-relaxed">Choose a 5-day or 7-day week, pick your business hours (12h or 24h), and the rota creator builds the skeleton automatically.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 relative pt-12">
              <div className="absolute top-0 left-6 -translate-y-1/2 h-12 w-12 bg-blue-500 text-white rounded-xl flex items-center justify-center shadow-lg">
                <ClipboardList className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">2. Assign Staff</h3>
              <p className="text-slate-600 leading-relaxed">Click any day on the rota to drop in an employee. Type their name and select their precise start and end times.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 relative pt-12">
              <div className="absolute top-0 left-6 -translate-y-1/2 h-12 w-12 bg-emerald-500 text-white rounded-xl flex items-center justify-center shadow-lg">
                <Palette className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">3. Color-Code Rotas</h3>
              <p className="text-slate-600 leading-relaxed">Make your rota visual. Assign specific colors to specific roles (e.g., Bartenders in Blue, Waiters in Green) so your staff knows exactly who is on duty.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 relative pt-12">
              <div className="absolute top-0 left-6 -translate-y-1/2 h-12 w-12 bg-purple-500 text-white rounded-xl flex items-center justify-center shadow-lg">
                <Download className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">4. Save & Print</h3>
              <p className="text-slate-600 leading-relaxed">Download a high-resolution image of your completed staff rota. Perfect for printing and pinning to the backroom noticeboard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ⭐ SOCIAL PROOF / FEATURES */}
      <section className="py-20 px-6 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Why Managers Love Our Staff Rota Creator</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1"><CheckCircle className="h-6 w-6 text-indigo-600" /></div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">The Ultimate Rota Creator Excel Alternative</h3>
                  <p className="text-slate-600">Using Excel to build rotas often results in confusing formatting and messed up printing. Our tool auto-formats everything perfectly.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1"><CheckCircle className="h-6 w-6 text-indigo-600" /></div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Designed for Shift Work</h3>
                  <p className="text-slate-600">Whether you are running a busy pub, a retail store, or a 24-hour gym, our shift rota generator handles overlapping and irregular hours smoothly.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1"><CheckCircle className="h-6 w-6 text-indigo-600" /></div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">100% Free Rota Creator</h3>
                  <p className="text-slate-600">We don't charge per user, per employee, or per location. You can build as many rotas as your business needs for absolutely free.</p>
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
                As a pub manager, doing the weekly staff rota was my least favorite job. Using this free staff schedule generator cut my planning time in half. It looks great when printed.
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center font-bold text-indigo-700">TB</div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">Thomas B.</p>
                  <p className="text-slate-500 text-xs">Pub Manager</p>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Rota Creator FAQ</h2>
            <p className="text-slate-600">Common questions about generating your staff rotas.</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Is this staff rota creator truly free?",
                a: "Yes! There are no limits on how many staff rotas you can build, download, or edit. Our work rota creator is completely free forever."
              },
              {
                q: "Why is this better than a rota creator excel sheet?",
                a: "Excel sheets are notoriously difficult to format for printing and reading on mobile phones. Our tool generates a clean, visually distinct image that looks perfect on any device."
              },
              {
                q: "Can I manage different departments on one rota?",
                a: "Absolutely. We recommend using our color-coding feature to differentiate departments, such as Kitchen Staff vs Front of House."
              },
              {
                q: "How do I share the finished rota with my staff?",
                a: "Once you are done, click the 'Export' button. This will download a PNG image of your rota. You can then drop that image directly into your team's WhatsApp or Facebook group."
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
              Start Generating Rotas <ClipboardList className="h-5 w-5" />
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
          <p>© {new Date().getFullYear()} ScheduleBuilder. The number one rota creator free for businesses.</p>
        </div>
      </footer>
    </main>
  );
}

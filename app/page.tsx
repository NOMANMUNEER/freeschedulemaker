import React from 'react';
import Link from 'next/link';
import { 
  Calendar, Clock, Users, BookOpen, 
  CheckCircle, Layout, PlusCircle, Palette, 
  Download, Star, HelpCircle, ChevronRight
} from 'lucide-react';
import type { Metadata } from 'next';

// 🚀 AGGRESSIVE SEO METADATA BASED ON 50K SEARCH VOLUME
export const metadata: Metadata = {
  title: 'Free Online Schedule Creator | Build Your Schedule for Free',
  description: 'Use our free online schedule builder to create perfect daily, weekly, or shift schedules in minutes. The easiest schedule creator free of charge.',
  keywords: 'schedule creator free, online schedule creator, free online schedule builder, schedule maker, free schedule maker, calendar maker',
  openGraph: {
    title: 'Free Online Schedule Creator — freeschedulemaker.com',
    description: 'Use our free online schedule builder to create perfect daily, weekly, or shift schedules in minutes.',
    type: 'website',
    url: 'https://freeschedulemaker.com',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Online Schedule Creator — freeschedulemaker.com',
    description: 'Use our free online schedule builder to create perfect daily, weekly, or shift schedules in minutes.',
  }
};

export default function SEOLandingPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Free Schedule Maker",
            "description": "Free online schedule maker and builder",
            "applicationCategory": "ProductivityApplication",
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
            "operatingSystem": "Web"
          })
        }}
      />
      
      {/* 🌟 HERO SECTION - Injecting 50k volume keywords */}
      <header className="bg-white border-b border-slate-200 pt-24 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 font-bold text-sm mb-6 border border-indigo-100 shadow-sm">
            <Star className="h-4 w-4 fill-indigo-600 text-indigo-600" />
            #1 Free Weekly Calendar Creator
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
            Free Online Schedule Creator
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            The fastest free online schedule maker. Create a weekly schedule, class timetable, or work roster in minutes — no account required. Your free schedule builder is ready.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <Link 
              href="/builder" 
              className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-lg flex items-center justify-center gap-2"
            >
              Start Building Now <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="flex items-center justify-center gap-6 text-sm font-medium text-slate-500">
            <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-emerald-500" /> No sign-up required</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-emerald-500" /> 100% Free forever</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-emerald-500" /> Export to PNG instantly</span>
          </div>
        </div>
      </header>

      {/* 🚀 LONG-TAIL KEYWORD TAGS (Targeting your new CSV data) */}
      <section className="py-8 bg-indigo-900 border-y border-indigo-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'schedule planner online', 
              'calendar schedule maker', 
              'weekly schedule creator', 
              'easy schedule maker', 
              'free schedule generator', 
              'free schedule builder'
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How to Create a Schedule Online</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Use our free schedule builder to create daily and weekly timetables perfectly tailored for any purpose. A more organized day is a more productive day.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 relative pt-12">
              <div className="absolute top-0 left-6 -translate-y-1/2 h-12 w-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center shadow-lg">
                <Layout className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">1. Pick Layout</h3>
              <p className="text-slate-600 leading-relaxed">Choose your preferred days, define time intervals (12h or 24h), and set your active hours for a personalized calendar grid.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 relative pt-12">
              <div className="absolute top-0 left-6 -translate-y-1/2 h-12 w-12 bg-blue-500 text-white rounded-xl flex items-center justify-center shadow-lg">
                <PlusCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">2. Insert Events</h3>
              <p className="text-slate-600 leading-relaxed">Easily click on the grid to add events. Assign titles, specify multiple days, and adjust times down to the minute.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 relative pt-12">
              <div className="absolute top-0 left-6 -translate-y-1/2 h-12 w-12 bg-emerald-500 text-white rounded-xl flex items-center justify-center shadow-lg">
                <Palette className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">3. Personalize</h3>
              <p className="text-slate-600 leading-relaxed">Express your style with a spectrum of beautiful color palettes, custom fonts, and text alignments to make your timetable truly yours.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 relative pt-12">
              <div className="absolute top-0 left-6 -translate-y-1/2 h-12 w-12 bg-purple-500 text-white rounded-xl flex items-center justify-center shadow-lg">
                <Download className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">4. Download</h3>
              <p className="text-slate-600 leading-relaxed">Save your schedule securely as a high-resolution PNG file. Perfect for printing, desktop wallpapers, or sharing with friends.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ⭐ SOCIAL PROOF / FEATURES */}
      <section className="py-20 px-6 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Why Use Our Free Online Schedule Builder?</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1"><CheckCircle className="h-6 w-6 text-indigo-600" /></div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Streamlined Scheduling</h3>
                  <p className="text-slate-600">A clean, minimalist design with intuitive controls that make creating a visual class schedule less of a chore and more of a breeze.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1"><CheckCircle className="h-6 w-6 text-indigo-600" /></div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">All-In-One Features</h3>
                  <p className="text-slate-600">Combining the best tools from top calendar making apps, providing community-suggested improvements for maximum efficiency.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1"><CheckCircle className="h-6 w-6 text-indigo-600" /></div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Fully Tailored to You</h3>
                  <p className="text-slate-600">Bid farewell to bland schedules. Customize every aspect of your timetable with vibrant colors and stylish text.</p>
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
                Since I started using this free schedule maker, I have more peace of mind. I know all my tasks, classes, and shifts are fully organized, and I can download it instantly.
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center font-bold text-indigo-700">RA</div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">Roberto A.</p>
                  <p className="text-slate-500 text-xs">University Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ❓ FAQ SECTION - Critical for Google Rich Snippets */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Your Free Schedule Creator — No Sign-Up</h2>
            <p className="text-slate-600">Everything you need to know about our free schedule generator.</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Is this Schedule Maker really free?",
                a: "Yes, our online schedule maker is 100% free to use and will remain so forever. There are no hidden fees, subscriptions, or premium tiers locking features away."
              },
              {
                q: "Can I use this as a calendar maker or timetable maker?",
                a: "Absolutely! Whether for college academic schedules, employee shift planning, professional agendas, or personal gym routines, our versatile calendar creator adapts to any scenario."
              },
              {
                q: "Do I need to create an account to use it?",
                a: "No sign-up is required! You can click 'Start Building' and instantly begin organizing your week right in your browser without handing over your email."
              },
              {
                q: "How do I save and export my schedule?",
                a: "Once generated, you can download your timetable directly to your device as a high-quality PNG image file. Simply click the 'Export as PNG' button in the sidebar."
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
              Start Making Your Schedule <Calendar className="h-5 w-5" />
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
          <p>© {new Date().getFullYear()} ScheduleBuilder. The ultimate free schedule maker and calendar creator.</p>
        </div>
      </footer>
    </main>
  );
}
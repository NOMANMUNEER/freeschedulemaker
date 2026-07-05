'use client';

import React from 'react';
import { Layout, PlusCircle, Palette, Download } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section className="py-16 px-6 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">How to Create Your Schedule</h2>
          <p className="text-sm md:text-base text-slate-600 max-w-xl mx-auto">
            Our shared schedule engine allows you to format, customize, and output professional timetables in four simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-xs border border-slate-200 relative pt-12">
            <div className="absolute top-0 left-6 -translate-y-1/2 h-12 w-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center shadow-md">
              <Layout className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">1. Pick Grid Layout</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Open the settings panel to define active workdays, configure AM/PM or 24-hour clocks, and set your starting/ending hours.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xs border border-slate-200 relative pt-12">
            <div className="absolute top-0 left-6 -translate-y-1/2 h-12 w-12 bg-blue-500 text-white rounded-xl flex items-center justify-center shadow-md">
              <PlusCircle className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">2. Insert Events</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Click directly on the timetable grid cells or press 'Create' to fill in course names, employee shifts, or study goals.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xs border border-slate-200 relative pt-12">
            <div className="absolute top-0 left-6 -translate-y-1/2 h-12 w-12 bg-emerald-500 text-white rounded-xl flex items-center justify-center shadow-md">
              <Palette className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">3. Style & Color</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Inject beautiful color palettes and adjust font families (like Roboto Slab or Inter) to color-code and organize details visually.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xs border border-slate-200 relative pt-12">
            <div className="absolute top-0 left-6 -translate-y-1/2 h-12 w-12 bg-purple-500 text-white rounded-xl flex items-center justify-center shadow-md">
              <Download className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">4. Download PNG</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Save your generated schedule securely as a high-resolution PNG image for easy printing, desktop backgrounds, or sharing with teammates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

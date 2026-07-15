'use client';

import React from 'react';
import Link from 'next/link';
import { FOOTER_NAV_LINKS, FOOTER_TOOL_LINKS } from '../../config/navigation';
import { Calendar } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-6 border-t border-slate-800 shrink-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-slate-800">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-white font-bold text-lg">
            <Calendar className="h-6 w-6 text-indigo-500" />
            FreeScheduleMaker
          </div>
          <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
            Create, style, and download custom visual timetables, student schedules, and business rotas completely free of charge. No signup required.
          </p>
        </div>

        <div>
          <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Scheduling Tools</h3>
          <ul className="space-y-2 text-xs">
            {FOOTER_TOOL_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white transition">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Company</h3>
          <ul className="space-y-2 text-xs">
            {FOOTER_NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white transition">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 text-center text-[11px] flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>Copyright {new Date().getFullYear()} FreeScheduleMaker. The ultimate free schedule maker and calendar creator.</p>
        <p className="text-slate-500 font-medium">Built with Next.js, Zustand, and Tailwind CSS.</p>
      </div>
    </footer>
  );
}

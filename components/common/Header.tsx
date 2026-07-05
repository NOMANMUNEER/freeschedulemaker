'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { HEADER_NAV } from '../../config/navigation';
import { Calendar, Menu, X, ArrowRight } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-[150] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Brand Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 font-bold text-slate-900 hover:opacity-90 transition">
              <Calendar className="h-6 w-6 text-indigo-600" />
              <span className="text-base tracking-tight">ScheduleBuilder</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {HEADER_NAV.map((item) => (
              <Link 
                key={item.href}
                href={item.href}
                className="text-xs font-semibold text-slate-600 hover:text-indigo-600 transition"
              >
                {item.label}
              </Link>
            ))}
            <Link 
              href="/builder" 
              className="inline-flex items-center gap-1 bg-indigo-600 text-white font-bold py-2 px-4 rounded-xl text-xs hover:bg-indigo-700 transition shadow-xs cursor-pointer"
            >
              Start Builder <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-500 hover:text-slate-800 p-2 rounded-lg"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-3 space-y-2.5">
          {HEADER_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-xs font-bold text-slate-700 hover:text-indigo-600 transition py-1.5"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/builder"
            onClick={() => setIsOpen(false)}
            className="block text-center bg-indigo-600 text-white font-bold py-2.5 rounded-xl text-xs shadow-xs cursor-pointer"
          >
            Start Builder
          </Link>
        </div>
      )}
    </nav>
  );
}

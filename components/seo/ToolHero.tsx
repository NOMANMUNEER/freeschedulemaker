'use client';

import React from 'react';
import { SEO_PAGES } from '../../config/seoPages';
import { BuilderVariantId } from '../../types/schedule';
import { CheckCircle, Star, Sparkles } from 'lucide-react';

interface ToolHeroProps {
  variant: BuilderVariantId;
}

export default function ToolHero({ variant }: ToolHeroProps) {
  const seoData = SEO_PAGES[variant] || SEO_PAGES.default;

  const scrollToBuilder = () => {
    const grid = document.getElementById('schedule-grid');
    if (grid) {
      grid.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <header className="bg-white border-b border-slate-200 pt-20 pb-16 px-6 text-center relative overflow-hidden">
      {/* Background radial blurs */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 font-bold text-xs mb-6 border border-indigo-100 shadow-xs">
          <Star className="h-4 w-4 fill-indigo-600 text-indigo-600" />
          {seoData.heroBadge}
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
          {seoData.heroHeading}
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          {seoData.heroSubheading}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <button 
            type="button"
            onClick={scrollToBuilder}
            className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-lg flex items-center justify-center gap-2 cursor-pointer"
          >
            Start Building Now <Sparkles className="h-5 w-5 text-amber-300" />
          </button>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-semibold text-slate-500">
          <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /> No registration required</span>
          <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /> 100% Free forever</span>
          <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /> Export to PNG instantly</span>
        </div>
      </div>
    </header>
  );
}

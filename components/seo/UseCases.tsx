'use client';

import React from 'react';
import { USE_CASES } from '../../data/useCases';
import { SEO_PAGES } from '../../config/seoPages';
import { BuilderVariantId } from '../../types/schedule';
import { CheckCircle, Star } from 'lucide-react';

interface UseCasesProps {
  variant: BuilderVariantId;
}

export default function UseCases({ variant }: UseCasesProps) {
  const cases = USE_CASES[variant] || USE_CASES.default;
  const seoData = SEO_PAGES[variant] || SEO_PAGES.default;

  return (
    <section className="py-16 px-6 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Use Cases Cards */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            {seoData.featuresHeading}
          </h2>
          <p className="text-sm text-slate-500 mb-4">{seoData.featuresIntroduction}</p>
          
          <div className="space-y-6 mt-6">
            {cases.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-950 mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Box */}
        <div className="w-full lg:w-[350px] bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-xs relative shrink-0">
          <div className="text-5xl text-indigo-200 absolute top-4 left-6 font-serif">&quot;</div>
          <div className="relative z-10 pt-6">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4.5 w-4.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-slate-700 text-xs italic mb-6 leading-relaxed">
              {seoData.testimonialText}
            </p>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 bg-indigo-100 rounded-full flex items-center justify-center font-bold text-indigo-700 text-xs uppercase">
                {seoData.testimonialAuthor.substring(0, 2)}
              </div>
              <div>
                <p className="font-bold text-slate-900 text-xs">{seoData.testimonialAuthor}</p>
                <p className="text-slate-500 text-[10px]">{seoData.testimonialRole}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

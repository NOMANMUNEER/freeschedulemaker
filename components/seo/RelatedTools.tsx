'use client';

import React from 'react';
import Link from 'next/link';
import { BUILDER_VARIANTS } from '../../config/builderVariants';
import { SEO_PAGES } from '../../config/seoPages';
import { BuilderVariantId } from '../../types/schedule';
import { ArrowRight } from 'lucide-react';

interface RelatedToolsProps {
  variant: BuilderVariantId;
}

export default function RelatedTools({ variant }: RelatedToolsProps) {
  const config = BUILDER_VARIANTS[variant] || BUILDER_VARIANTS.default;
  const relatedIds = config.relatedTools;

  return (
    <section className="py-16 px-6 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Explore Related Scheduling Tools</h2>
        <p className="text-xs text-slate-500 mb-8 max-w-lg mx-auto">
          Need a different calendar layout or work rota? Try our other specialized free scheduling templates.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
          {relatedIds.map((id) => {
            const toolConfig = BUILDER_VARIANTS[id];
            const seoConfig = SEO_PAGES[id];
            if (!toolConfig || !seoConfig) return null;

            return (
              <Link 
                key={id}
                href={seoConfig.canonicalPath}
                className="group p-5 bg-slate-50 hover:bg-indigo-50/20 border border-slate-200 hover:border-indigo-400 rounded-2xl transition flex flex-col justify-between shadow-xs cursor-pointer"
              >
                <div>
                  <h3 className="font-bold text-slate-900 group-hover:text-indigo-600 transition text-sm mb-1.5 flex items-center justify-between">
                    <span>{toolConfig.title}</span>
                    <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all shrink-0" />
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-normal">
                    {toolConfig.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-indigo-600">
                  <span>Start planning</span>
                  <span className="bg-indigo-50 px-2 py-0.5 rounded text-indigo-700 font-extrabold uppercase">Free</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

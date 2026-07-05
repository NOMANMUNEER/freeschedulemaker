'use client';

import React, { useState } from 'react';
import { FAQS } from '../../data/faqs';
import { SEO_PAGES } from '../../config/seoPages';
import { BuilderVariantId } from '../../types/schedule';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQSectionProps {
  variant: BuilderVariantId;
}

export default function FAQSection({ variant }: FAQSectionProps) {
  const list = FAQS[variant] || FAQS.default;
  const seoData = SEO_PAGES[variant] || SEO_PAGES.default;
  
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 bg-slate-50 border-b border-slate-200">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">{seoData.faqHeading}</h2>
          <p className="text-xs sm:text-sm text-slate-500">{seoData.faqIntroduction}</p>
        </div>

        <div className="space-y-3">
          {list.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  className="w-full flex items-center justify-between p-4 text-left font-bold text-slate-900 hover:bg-slate-50/50 transition cursor-pointer text-xs sm:text-sm"
                >
                  <span className="flex items-start gap-2.5">
                    <HelpCircle className="h-4.5 w-4.5 text-indigo-500 shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </span>
                  <span>
                    {isOpen ? (
                      <ChevronUp className="h-4 w-4 text-slate-500 shrink-0" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-slate-500 shrink-0" />
                    )}
                  </span>
                </button>
                
                {isOpen && (
                  <div className="px-11 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

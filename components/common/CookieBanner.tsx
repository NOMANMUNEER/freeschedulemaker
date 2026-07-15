'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    return !localStorage.getItem('cookieConsent');
  });

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-md bg-white border border-slate-200 shadow-2xl p-6 sm:rounded-2xl transition-all duration-300">
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-slate-900 font-bold text-lg mb-1">We value your privacy</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            We use cookies to enhance your browsing experience, serve personalized ads, and analyze our traffic. By clicking &quot;Accept All&quot;, you consent to our use of cookies.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <button 
            type="button"
            onClick={handleAccept}
            className="flex-1 bg-indigo-600 text-white font-bold py-2.5 px-4 rounded-xl hover:bg-indigo-700 transition text-xs cursor-pointer"
          >
            Accept All
          </button>
          <Link 
            href="/privacy-policy" 
            onClick={() => setIsVisible(false)}
            className="flex-1 flex items-center justify-center bg-slate-100 text-slate-700 font-medium py-2.5 px-4 rounded-xl hover:bg-slate-200 transition text-xs cursor-pointer"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}

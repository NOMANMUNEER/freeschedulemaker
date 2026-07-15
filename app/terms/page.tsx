import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | FreeScheduleMaker',
  description: 'Terms of Service and Conditions for using FreeScheduleMaker.',
  alternates: {
    canonical: 'https://www.freeschedulemaker.com/terms',
  },
  openGraph: {
    title: 'Terms of Service | FreeScheduleMaker',
    description: 'Terms of Service and Conditions for using FreeScheduleMaker.',
    url: 'https://www.freeschedulemaker.com/terms',
    type: 'website',
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200 text-slate-800">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-12 w-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center">
            <BookOpen className="h-6 w-6" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900">Terms of Conditions</h1>
        </div>

        <div className="space-y-6 text-slate-600 leading-relaxed">
          <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
          
          <p>Welcome to FreeScheduleMaker. By accessing this website, we assume you accept these terms and conditions. Do not continue to use FreeScheduleMaker if you do not agree to take all of the terms and conditions stated on this page.</p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. License and Use of Service</h2>
          <p>FreeScheduleMaker grants you a non-exclusive, non-transferable, limited right to access and use our free online schedule maker for personal, academic, or internal business purposes. You may generate, download, and share your exported schedules.</p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Restrictions</h2>
          <p>You are specifically restricted from all of the following:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Selling, sublicensing, or otherwise commercializing any website material or the software source code.</li>
            <li>Using this website in any way that is or may be damaging to this website.</li>
            <li>Using this website contrary to applicable laws and regulations, or in any way may cause harm to the website, or to any person or business entity.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. No Warranties</h2>
          <p>This website is provided as is, with all faults, and FreeScheduleMaker expresses no representations or warranties, of any kind related to this website or the materials contained on this website. While we strive to ensure the tool works perfectly across all devices, we do not guarantee uninterrupted access.</p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Limitation of Liability</h2>
          <p>In no event shall FreeScheduleMaker, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website.</p>

          <div className="mt-10 pt-8 border-t border-slate-200">
            <Link href="/" className="text-indigo-600 font-medium hover:underline">&larr; Back to Home</Link>
          </div>
        </div>
      </div>
    </main>
  );
}


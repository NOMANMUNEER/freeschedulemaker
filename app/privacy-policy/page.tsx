import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | FreeScheduleMaker',
  description: 'Privacy Policy for FreeScheduleMaker.',
  alternates: {
    canonical: 'https://www.freeschedulemaker.com/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | FreeScheduleMaker',
    description: 'Privacy Policy for FreeScheduleMaker.',
    url: 'https://www.freeschedulemaker.com/privacy-policy',
    type: 'website',
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200 text-slate-800">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-12 w-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center">
            <Shield className="h-6 w-6" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900">Privacy Policy</h1>
        </div>

        <div className="space-y-6 text-slate-600 leading-relaxed">
          <p><strong>Effective Date:</strong> {new Date().toLocaleDateString()}</p>
          
          <p>At FreeScheduleMaker, one of our main priorities is the privacy of our visitors. This Privacy Policy explains the types of information collected and recorded by FreeScheduleMaker and how we use it.</p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">Log Files</h2>
          <p>FreeScheduleMaker follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.</p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">Cookies and Web Beacons</h2>
          <p>Like any other website, FreeScheduleMaker uses cookies. These cookies are used to store information including visitor preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the user experience by customizing our web page content based on visitor browser type and/or other information.</p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">Google DoubleClick DART Cookie</h2>
          <p>Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our site and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL: <a href="https://policies.google.com/technologies/ads" className="text-indigo-600 hover:underline">https://policies.google.com/technologies/ads</a></p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">Advertising Partners Privacy Policies</h2>
          <p>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on FreeScheduleMaker, which are sent directly to user browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>
          <p>Note that FreeScheduleMaker has no access to or control over these cookies that are used by third-party advertisers.</p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">Consent</h2>
          <p>By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>

          <div className="mt-10 pt-8 border-t border-slate-200">
            <Link href="/" className="text-indigo-600 font-medium hover:underline">&larr; Back to Home</Link>
          </div>
        </div>
      </div>
    </main>
  );
}


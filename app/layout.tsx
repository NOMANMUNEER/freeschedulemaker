import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import CookieBanner from "../components/common/CookieBanner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.freeschedulemaker.com'),
  alternates: {
    canonical: 'https://www.freeschedulemaker.com',
  },
  title: {
    default: 'Free Schedule Maker & Calendar Creator | FreeScheduleMaker',
    template: '%s | FreeScheduleMaker',
  },
  description: 'The ultimate free schedule maker and weekly calendar creator. Build, personalize, and export your custom timetable online. 100% Free.',
  openGraph: {
    type: 'website',
    siteName: 'FreeScheduleMaker',
    url: 'https://www.freeschedulemaker.com',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@freeschedulemaker',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}

        <CookieBanner />
      </body>
    </html>
  );
}

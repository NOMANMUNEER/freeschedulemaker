import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://freeschedulemaker.com/:path*',
        permanent: true,
      },
      // 🚀 301 Redirects for Old SEO Routes to preferred canonical pages
      {
        source: '/university-timetable-creator',
        destination: '/university-timetable-maker',
        permanent: true,
      },
      {
        source: '/rota-creator',
        destination: '/rota-maker',
        permanent: true,
      },
      {
        source: '/work-schedule-maker',
        destination: '/employee-schedule-creator',
        permanent: true,
      },
      {
        source: '/work-schedule-generator-online-free',
        destination: '/employee-schedule-creator',
        permanent: true,
      },
      {
        source: '/visual-class-schedule-maker',
        destination: '/university-timetable-maker',
        permanent: true,
      },
      {
        source: '/rotating-schedule-generator-free',
        destination: '/shift-schedule-generator',
        permanent: true,
      },
      {
        source: '/timetable-maker',
        destination: '/',
        permanent: true,
      },
      {
        source: '/schedule-creator-free',
        destination: '/',
        permanent: true,
      },
      {
        source: '/automatic-schedule-generator-online',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

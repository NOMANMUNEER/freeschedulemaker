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
        destination: 'https://www.freeschedulemaker.com/:path*',
        permanent: true,
      },
      // 301 redirects for old SEO routes to preferred canonical pages.
      {
        source: '/free-online-schedule-maker',
        destination: '/',
        permanent: true,
      },
      {
        source: '/schedule-maker-free-online',
        destination: '/',
        permanent: true,
      },
      {
        source: '/schedule-maker-online-free',
        destination: '/',
        permanent: true,
      },
      {
        source: '/free-schedule-builder',
        destination: '/',
        permanent: true,
      },
      {
        source: '/weekly-schedule-maker-online-free',
        destination: '/weekly-schedule-maker',
        permanent: true,
      },
      {
        source: '/weekly-schedule-creator',
        destination: '/weekly-schedule-maker',
        permanent: true,
      },
      {
        source: '/create-weekly-schedule',
        destination: '/weekly-schedule-maker',
        permanent: true,
      },
      {
        source: '/class-schedule-generator-online',
        destination: '/class-schedule-maker',
        permanent: true,
      },
      {
        source: '/create-class-schedule',
        destination: '/class-schedule-maker',
        permanent: true,
      },
      {
        source: '/create-class-schedule-online',
        destination: '/class-schedule-maker',
        permanent: true,
      },
      {
        source: '/free-college-schedule-maker',
        destination: '/college-schedule-maker',
        permanent: true,
      },
      {
        source: '/college-timetable-maker',
        destination: '/college-schedule-maker',
        permanent: true,
      },
      {
        source: '/timetable-maker-online-free',
        destination: '/timetable-maker',
        permanent: true,
      },
      {
        source: '/free-timetable-maker',
        destination: '/timetable-maker',
        permanent: true,
      },
      {
        source: '/class-timetable-maker',
        destination: '/tools/class-timetable-maker',
        permanent: true,
      },
      {
        source: '/course-schedule-maker',
        destination: '/tools/course-schedule-maker',
        permanent: true,
      },
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
        destination: '/tools/work-schedule-maker',
        permanent: true,
      },
      {
        source: '/work-schedule-generator-online-free',
        destination: '/tools/work-schedule-maker',
        permanent: true,
      },
      {
        source: '/employee-schedule-maker',
        destination: '/employee-schedule-creator',
        permanent: true,
      },
      {
        source: '/employee-work-schedule-maker',
        destination: '/employee-schedule-creator',
        permanent: true,
      },
      {
        source: '/free-employee-schedule-maker',
        destination: '/employee-schedule-creator',
        permanent: true,
      },
      {
        source: '/staff-schedule-maker',
        destination: '/tools/staff-schedule-maker',
        permanent: true,
      },
      {
        source: '/student-schedule-maker',
        destination: '/tools/student-schedule-maker',
        permanent: true,
      },
      {
        source: '/study-schedule-maker',
        destination: '/tools/study-schedule-maker',
        permanent: true,
      },
      {
        source: '/daily-schedule-maker',
        destination: '/tools/daily-schedule-maker',
        permanent: true,
      },
      {
        source: '/workout-schedule-maker',
        destination: '/tools/workout-schedule-maker',
        permanent: true,
      },
      {
        source: '/visual-class-schedule-maker',
        destination: '/university-timetable-maker',
        permanent: true,
      },
      {
        source: '/rotating-schedule-generator-free',
        destination: '/tools/rotating-schedule-maker',
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

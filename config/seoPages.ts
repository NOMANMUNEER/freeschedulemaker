import { BuilderVariantId } from '../types/schedule';

export interface SEOPageData {
  variantId: BuilderVariantId;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  canonicalPath: string;
  heroBadge: string;
  heroHeading: string;
  heroSubheading: string;
  featuresHeading: string;
  featuresIntroduction: string;
  testimonialText: string;
  testimonialAuthor: string;
  testimonialRole: string;
  faqHeading: string;
  faqIntroduction: string;
}

export const SEO_PAGES: Record<BuilderVariantId, SEOPageData> = {
  default: {
    variantId: 'default',
    metaTitle: 'Free Online Schedule Creator | Build Your Schedule for Free',
    metaDescription: 'Use our free online schedule builder to create perfect daily, weekly, or shift schedules in minutes. The easiest schedule creator free of charge.',
    keywords: 'schedule creator free, online schedule creator, free online schedule builder, schedule maker, free schedule maker, calendar maker',
    canonicalPath: '/',
    heroBadge: '#1 Free Calendar Creator',
    heroHeading: 'Free Online Schedule Creator',
    heroSubheading: 'The fastest free online schedule maker. Create a weekly schedule, class timetable, or work roster in minutes — no account required. Your free schedule builder is ready.',
    featuresHeading: 'Why Use Our Free Online Schedule Builder?',
    featuresIntroduction: 'Use our free schedule builder to create daily and weekly timetables perfectly tailored for any purpose. A more organized day is a more productive day.',
    testimonialText: 'Since I started using this free schedule maker, I have more peace of mind. I know all my tasks, classes, and shifts are fully organized, and I can download it instantly.',
    testimonialAuthor: 'Roberto A.',
    testimonialRole: 'Productivity Specialist',
    faqHeading: 'Your Free Schedule Creator — No Sign-Up',
    faqIntroduction: 'Everything you need to know about our free schedule generator.',
  },
  weekly: {
    variantId: 'weekly',
    metaTitle: 'Weekly Schedule Creator | Free Weekly Generator Online',
    metaDescription: 'Plan your week perfectly using our weekly schedule creator. Generate a custom weekly routine, color-code activities, and stay organized.',
    keywords: 'weekly schedule creator, weekly schedule generator, weekly schedule maker, weekly schedule maker online free, weekly timetable maker, make a weekly schedule',
    canonicalPath: '/weekly-schedule-maker',
    heroBadge: '#1 Weekly Timetable Creator',
    heroHeading: 'Free Weekly Schedule Creator',
    heroSubheading: 'Discover the easiest way to organize your week. Color-code, arrange, and build a beautiful plan with our weekly schedule maker online free. Completely free, no signup needed.',
    featuresHeading: 'Make a Weekly Schedule Online Free',
    featuresIntroduction: 'Use our weekly schedule builder free to visually create daily and weekly timetables perfectly tailored for any purpose. A more organized week is a more productive week.',
    testimonialText: 'This weekly planner is exactly what I needed. I can color-code my gym times, family hours, and work shifts in under 5 minutes.',
    testimonialAuthor: 'Sarah K.',
    testimonialRole: 'Freelance Designer',
    faqHeading: 'Free Weekly Schedule Builder Questions',
    faqIntroduction: 'Everything you need to know about organizing your week with our weekly planner.',
  },
  university: {
    variantId: 'university',
    metaTitle: 'University Timetable Maker | Create Class Schedules Online',
    metaDescription: 'Use our free university timetable maker to create clean class schedules, log lectures, labs, exams, and tutorial sessions. Print or download instantly.',
    keywords: 'university timetable maker, university schedule builder, class schedule creator, class schedule maker, college timetable maker, student schedule maker',
    canonicalPath: '/university-timetable-maker',
    heroBadge: '#1 Student Timetable Maker',
    heroHeading: 'University Timetable Maker',
    heroSubheading: 'Organize your academic life. Add classes, lectures, tutorials, break times, and exams to build a beautiful visual timetable. Keep your semester fully organized.',
    featuresHeading: 'Why Use Our University Schedule Builder?',
    featuresIntroduction: 'Create academic timetables tailored to university lecture routines. Track rooms, tutor names, and exam dates easily.',
    testimonialText: 'No more confusing spreadsheets! I put in my classes, labs, and professor offices, color-coded them, and set it as my lock screen. Saved my semester.',
    testimonialAuthor: 'Julian D.',
    testimonialRole: 'Computer Science Sophomore',
    faqHeading: 'University Timetable Creator FAQs',
    faqIntroduction: 'Find answers to common questions about setting up and using the university class schedule creator.',
  },
  rota: {
    variantId: 'rota',
    metaTitle: 'Free Rota Maker | Create Staff Rotas Online',
    metaDescription: 'Design professional staff rotas in minutes. Plan work rosters, allocate employee shifts, and export printable rota files for free.',
    keywords: 'free rota maker, online rota creator, staff roster builder, work rota generator, shift planner online, employee rota maker',
    canonicalPath: '/rota-maker',
    heroBadge: '#1 Business Rota Maker',
    heroHeading: 'Free Online Rota Maker',
    heroSubheading: 'Make shift planning effortless for your business. Allocate staff schedules, track working hours, and download clean printable rotas. No subscription required.',
    featuresHeading: 'Why Use Our Staff Rota Builder?',
    featuresIntroduction: 'Ditch the spreadsheets and quickly distribute hours to your team. Perfect for retail, hospitality, office staff, and healthcare.',
    testimonialText: 'Managing shift planning for my coffee shop used to take hours. With this rota creator, I layout employee schedules in minutes and text the PNG image directly to my staff.',
    testimonialAuthor: 'Clara M.',
    testimonialRole: 'Cafe Manager',
    faqHeading: 'Rota Creator & Staff Roster FAQs',
    faqIntroduction: 'Learn how to generate staff rotas and configure schedules for employee shifts.',
  },
  employee: {
    variantId: 'employee',
    metaTitle: 'Employee Schedule Creator | Free Team Work Rosters',
    metaDescription: 'Create employee work schedules online. Manage staff hours, assign shifts, coordinate departments, and print weekly schedules for free.',
    keywords: 'employee schedule creator, employee schedule builder, free work scheduler, team schedule maker, office rota generator, employee shift planner',
    canonicalPath: '/employee-schedule-creator',
    heroBadge: '#1 Employee Shift Scheduler',
    heroHeading: 'Employee Schedule Creator',
    heroSubheading: 'The simple way to schedule your workers. Layout weekly shifts, assign employee roles, map departments, and download ready-to-print schedules.',
    featuresHeading: 'Modern Employee Work Scheduling',
    featuresIntroduction: 'Align staff shifts, specify work locations, assign jobs, and minimize work schedule confusion.',
    testimonialText: 'The employee scheduler is intuitive. It makes it easy to assign shifts, note who is working on what line, and clear out the calendar for next week.',
    testimonialAuthor: 'Marcus T.',
    testimonialRole: 'Retail Store Manager',
    faqHeading: 'Employee Scheduler Questions',
    faqIntroduction: 'Common queries regarding employee hours, templates, and shifts.',
  },
  shift: {
    variantId: 'shift',
    metaTitle: 'Shift Schedule Generator | Free Shift Roster Builder',
    metaDescription: 'Generate custom shift schedules for your operations team. Plan morning, evening, and rotating shifts. Export high-quality schedule images.',
    keywords: 'shift schedule generator, shift schedule maker, shift planner free, rotating shift generator, shift roster creator, hourly work scheduler',
    canonicalPath: '/shift-schedule-generator',
    heroBadge: '#1 Operations Shift Generator',
    heroHeading: 'Shift Schedule Generator',
    heroSubheading: 'Simplify complex shift rosters. Design 12-hour, 8-hour, morning, evening, or overnight shifts for your teams. Clear, visual, and print-ready.',
    featuresHeading: 'Streamline Operational Shift Schedules',
    featuresIntroduction: 'Build comprehensive schedules with specific shift blocks, breaks, on-call assignments, and team rotations.',
    testimonialText: 'Our warehouse uses three rotating shifts. This tool lets us easily visualize who is on duty, track station locations, and export the entire layout instantly.',
    testimonialAuthor: 'David R.',
    testimonialRole: 'Warehouse Operations Lead',
    faqHeading: 'Shift Schedule Generator FAQs',
    faqIntroduction: 'Answers explaining how to layout rotating schedules, 24/7 coverage, and employee shifts.',
  },
  revision: {
    variantId: 'revision',
    metaTitle: 'Revision Timetable Maker | Plan Your Study Schedule',
    metaDescription: 'Create custom study plans and exam preparation calendars. Organize subjects, priority topics, tutors, and breaks with our free study planner.',
    keywords: 'revision timetable maker, study schedule creator, revision planner free, study timetable generator, exam schedule maker, gcse revision planner',
    canonicalPath: '/revision-timetable-maker',
    heroBadge: '#1 Study Timetable Planner',
    heroHeading: 'Revision Timetable Maker',
    heroSubheading: 'Achieve your academic goals. Design a personalized revision timetable by mapping out subjects, study sessions, tutor timings, and break slots.',
    featuresHeading: 'Boost Productivity With A Study Plan',
    featuresIntroduction: 'Break down your subjects into manageable study sessions. Organize by priority level and track locations (home, library, school).',
    testimonialText: 'My GCSE exam preparation was so stressful until I planned my study blocks. Color-coding subjects and adding revision tasks helped me pass with flying colors!',
    testimonialAuthor: 'Hannah W.',
    testimonialRole: 'High School Graduate',
    faqHeading: 'Study & Revision Timetable FAQs',
    faqIntroduction: 'Learn how to schedule subjects, track priority levels, and stay on track with exam planning.',
  },
};

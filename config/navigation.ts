export interface NavItem {
  label: string;
  href: string;
}

export const HEADER_NAV: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Weekly Schedule Maker', href: '/weekly-schedule-maker' },
  { label: 'Create Schedule', href: '/builder' },
  { label: 'All Tools', href: '/tools' },
  { label: 'University Timetable', href: '/university-timetable-maker' },
  { label: 'Rota Maker', href: '/rota-maker' },
];

export const FOOTER_NAV_LINKS: NavItem[] = [
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms' },
];

export const FOOTER_TOOL_LINKS: NavItem[] = [
  { label: 'Free Schedule Maker', href: '/' },
  { label: 'All Scheduling Tools', href: '/tools' },
  { label: 'Weekly Schedule Maker', href: '/weekly-schedule-maker' },
  { label: 'Timetable Maker', href: '/timetable-maker' },
  { label: 'Class Schedule Maker', href: '/class-schedule-maker' },
  { label: 'Class Timetable Maker', href: '/tools/class-timetable-maker' },
  { label: 'Course Schedule Maker', href: '/tools/course-schedule-maker' },
  { label: 'College Schedule Maker', href: '/college-schedule-maker' },
  { label: 'Work Schedule Maker', href: '/tools/work-schedule-maker' },
  { label: 'Staff Schedule Maker', href: '/tools/staff-schedule-maker' },
  { label: 'Student Schedule Maker', href: '/tools/student-schedule-maker' },
  { label: 'Study Schedule Maker', href: '/tools/study-schedule-maker' },
  { label: 'Daily Schedule Maker', href: '/tools/daily-schedule-maker' },
  { label: 'Workout Schedule Maker', href: '/tools/workout-schedule-maker' },
  { label: 'Rotating Schedule Maker', href: '/tools/rotating-schedule-maker' },
  { label: 'University Timetable Maker', href: '/university-timetable-maker' },
  { label: 'Rota Maker', href: '/rota-maker' },
  { label: 'Employee Schedule Creator', href: '/employee-schedule-creator' },
  { label: 'Shift Schedule Generator', href: '/shift-schedule-generator' },
  { label: 'Revision Timetable Maker', href: '/revision-timetable-maker' },
];

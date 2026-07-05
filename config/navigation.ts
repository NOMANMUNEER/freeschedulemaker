export interface NavItem {
  label: string;
  href: string;
}

export const HEADER_NAV: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Create Schedule', href: '/builder' },
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
  { label: 'Weekly Schedule Maker', href: '/weekly-schedule-maker' },
  { label: 'University Timetable Maker', href: '/university-timetable-maker' },
  { label: 'Rota Maker', href: '/rota-maker' },
  { label: 'Employee Schedule Creator', href: '/employee-schedule-creator' },
  { label: 'Shift Schedule Generator', href: '/shift-schedule-generator' },
  { label: 'Revision Timetable Maker', href: '/revision-timetable-maker' },
];

export type BuilderVariantId =
  | 'default'
  | 'weekly'
  | 'university'
  | 'rota'
  | 'employee'
  | 'shift'
  | 'revision';

export type ScheduleEvent = {
  id: string;
  title: string;
  days: string[];
  startTime: string;
  endTime: string;
  color: string;
  category?: string;
  location?: string;
  notes?: string;
  person?: string;
  variant?: BuilderVariantId;
};

export type ScheduleSettings = {
  showTitle: boolean;
  firstDayOfWeek: 'Monday' | 'Sunday';
  visibleDays: string[];
  showDates: boolean;
  activeWeek?: string;
  clockType: '12-Hour' | '24-Hour';
  lineSpacing: 15 | 30 | 60;
  startHour: number;
  endHour: number;
  autoSelectColor: boolean;
  showTimeInEvents: boolean;
  stretchToFit: boolean;
  centerText: boolean;
  textFont: string;
  textColor: string;
};

export interface EventLabels {
  title: string;
  person: string;
  location: string;
  category: string;
}

export interface BuilderVariantConfig {
  id: BuilderVariantId;
  title: string;
  description: string;
  audience: string;
  defaultEventTitle: string;
  primaryActionLabel: string;
  templateType: string;
  eventLabels: EventLabels;
  suggestedCategories: string[];
  relatedTools: BuilderVariantId[];
}

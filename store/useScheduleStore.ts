import { create } from 'zustand';

export interface ScheduleEvent {
  id: string;
  title: string;
  days: string[];
  startTime: string; 
  endTime: string; 
  color?: string;
}

export interface ScheduleSettings {
  // Layout Tab
  showTitle: boolean;
  firstDayOfWeek: 'Monday' | 'Sunday';
  visibleDays: string[];
  showDates: boolean;
  activeWeek: string;

  // Time Tab
  clockType: '12-Hour' | '24-Hour';
  lineSpacing: 15 | 30 | 60;
  startHour: number;
  endHour: number;

  // Event Tab
  autoSelectColor: boolean;
  showTimeInEvents: boolean;
  stretchToFit: boolean;
  centerText: boolean;

  // Font Tab
  textFont: string;
  textColor: string;
}

interface ScheduleState {
  events: ScheduleEvent[];
  settings: ScheduleSettings;
  addEvent: (event: ScheduleEvent) => void;
  removeEvent: (id: string) => void;
  clearSchedule: () => void;
  updateSettings: (newSettings: Partial<ScheduleSettings>) => void;
}

export const useScheduleStore = create<ScheduleState>((set) => ({
  events: [
    {
      id: '1',
      title: 'Evening walking',
      days: ['Monday'],
      startTime: '08:00',
      endTime: '09:00',
      color: '#ef4444',
    },
  ],
  settings: {
    showTitle: true,
    firstDayOfWeek: 'Monday',
    visibleDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    showDates: true,
    activeWeek: 'Week 26, 2026',
    clockType: '12-Hour',
    lineSpacing: 60,
    startHour: 8,
    endHour: 17,
    autoSelectColor: false,
    showTimeInEvents: true,
    stretchToFit: true,
    centerText: true,
    textFont: 'Roboto Slab',
    textColor: '#1e1b4b',
  },
  addEvent: (newEvent) => set((state) => ({ events: [...state.events, newEvent] })),
  removeEvent: (id) => set((state) => ({ events: state.events.filter((e) => e.id !== id) })),
  clearSchedule: () => set({ events: [] }),
  updateSettings: (newSettings) => set((state) => ({ settings: { ...state.settings, ...newSettings } })),
}));
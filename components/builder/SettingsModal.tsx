'use client';

import React, { useState } from 'react';
import { useScheduleStore } from '../../store/useScheduleStore';
import { ScheduleSettings } from '../../types/schedule';
import { X, Layout, Clock, Calendar, Type, Sliders } from 'lucide-react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type TabType = 'Layout' | 'Time' | 'Event' | 'Font';
type EventSettingKey = 'autoSelectColor' | 'showTimeInEvents' | 'stretchToFit' | 'centerText';
const LINE_SPACING_OPTIONS: ScheduleSettings['lineSpacing'][] = [15, 30, 60];
const EVENT_SETTINGS: { label: string; key: EventSettingKey }[] = [
  { label: 'Auto select color', key: 'autoSelectColor' },
  { label: 'Show time in events', key: 'showTimeInEvents' },
  { label: 'Stretch to fit content', key: 'stretchToFit' },
  { label: 'Center text', key: 'centerText' },
];

export default function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  const { settings, updateSettings } = useScheduleStore();
  const [activeTab, setActiveTab] = useState<TabType>('Layout');
  
  // Local temporary state initialized from our Zustand store
  const [tempSettings, setTempSettings] = useState<ScheduleSettings>(settings);

  if (!isOpen) return null;

  const handleUpdate = () => {
    updateSettings(tempSettings);
    onClose();
  };

  const toggleDay = (day: string) => {
    const currentDays = tempSettings.visibleDays;
    if (currentDays.includes(day)) {
      setTempSettings({ ...tempSettings, visibleDays: currentDays.filter((d) => d !== day) });
    } else {
      setTempSettings({ ...tempSettings, visibleDays: [...currentDays, day] });
    }
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/40 backdrop-blur-xs">
      <div className="w-[500px] bg-[#eef1f6] rounded-xl shadow-2xl border border-slate-300 overflow-hidden flex flex-col text-slate-800">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 bg-[#eef1f6] border-b border-slate-300">
          <div className="flex items-center gap-2 text-[#1e3a8a] font-bold text-lg">
            <Sliders className="h-5 w-5" />
            <span>Schedule settings</span>
          </div>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-800 transition">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Tab Selection Bar */}
        <div className="flex bg-[#eef1f6] px-4 pt-2 border-b border-slate-300 gap-1 text-sm font-medium">
          {(['Layout', 'Time', 'Event', 'Font'] as TabType[]).map((tab) => {
            const icons = {
              Layout: <Layout className="h-4 w-4" />,
              Time: <Clock className="h-4 w-4" />,
              Event: <Calendar className="h-4 w-4" />,
              Font: <Type className="h-4 w-4" />,
            };
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-t-lg border-t border-x transition-colors ${
                  activeTab === tab
                    ? 'bg-white border-slate-300 text-slate-800 shadow-[0_-2px_5px_rgba(0,0,0,0.05)]'
                    : 'border-transparent text-slate-600 hover:bg-slate-200/50'
                }`}
              >
                {icons[tab]} {tab}
              </button>
            );
          })}
        </div>

        {/* Tab Content Canvas */}
        <div className="p-6 space-y-5 flex-1 min-h-[320px] bg-white/50">
          
          {/* LAYOUT TAB CONTENT */}
          {activeTab === 'Layout' && (
            <div className="space-y-4 text-sm">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Show title</label>
                <div className="flex border border-slate-300 rounded-md overflow-hidden bg-white">
                  <button type="button" onClick={() => setTempSettings({ ...tempSettings, showTitle: true })} className={`flex-1 py-2 text-center transition ${tempSettings.showTitle ? 'bg-indigo-50 font-bold text-indigo-900' : 'hover:bg-slate-50'}`}>Yes</button>
                  <button type="button" onClick={() => setTempSettings({ ...tempSettings, showTitle: false })} className={`flex-1 py-2 text-center border-l border-slate-300 transition ${!tempSettings.showTitle ? 'bg-indigo-50 font-bold text-indigo-900' : 'hover:bg-slate-50'}`}>No</button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">First day of week</label>
                <div className="flex border border-slate-300 rounded-md overflow-hidden bg-white">
                  <button type="button" onClick={() => setTempSettings({ ...tempSettings, firstDayOfWeek: 'Monday' })} className={`flex-1 py-2 text-center transition ${tempSettings.firstDayOfWeek === 'Monday' ? 'bg-indigo-50 font-bold text-indigo-900' : 'hover:bg-slate-50'}`}>Monday</button>
                  <button type="button" onClick={() => setTempSettings({ ...tempSettings, firstDayOfWeek: 'Sunday' })} className={`flex-1 py-2 text-center border-l border-slate-300 transition ${tempSettings.firstDayOfWeek === 'Sunday' ? 'bg-indigo-50 font-bold text-indigo-900' : 'hover:bg-slate-50'}`}>Sunday</button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Day(s)</label>
                <div className="grid grid-cols-7 border border-slate-300 rounded-md overflow-hidden bg-white text-xs">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, idx) => {
                    const fullDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
                    const isSelected = tempSettings.visibleDays.includes(fullDays[idx]);
                    return (
                      <button
                        key={day}
                        type="button"
                        onClick={() => toggleDay(fullDays[idx])}
                        className={`py-2 text-center border-r border-slate-200 last:border-0 font-medium transition ${isSelected ? 'bg-indigo-50 font-bold text-indigo-900' : 'text-slate-400 bg-slate-50/50 hover:bg-slate-100'}`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Show dates</label>
                <div className="flex gap-2 items-center">
                  <div className="flex flex-1 border border-slate-300 rounded-md overflow-hidden bg-white">
                    <button type="button" onClick={() => setTempSettings({ ...tempSettings, showDates: true })} className={`flex-1 py-2 text-center transition ${tempSettings.showDates ? 'bg-indigo-50 font-bold text-indigo-900' : 'hover:bg-slate-50'}`}>Yes</button>
                    <button type="button" onClick={() => setTempSettings({ ...tempSettings, showDates: false })} className={`flex-1 py-2 text-center border-l border-slate-300 transition ${!tempSettings.showDates ? 'bg-indigo-50 font-bold text-indigo-900' : 'hover:bg-slate-50'}`}>No</button>
                  </div>
                  <input 
                    type="text" 
                    value={tempSettings.activeWeek || ''}
                    onChange={(e) => setTempSettings({ ...tempSettings, activeWeek: e.target.value })}
                    className="border border-slate-300 rounded-md px-3 py-2 bg-white text-sm w-[45%] font-medium text-slate-700 outline-none focus:border-indigo-500"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TIME TAB CONTENT */}
          {activeTab === 'Time' && (
            <div className="space-y-4 text-sm">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Clock type</label>
                <div className="flex border border-slate-300 rounded-md overflow-hidden bg-white">
                  <button type="button" onClick={() => setTempSettings({ ...tempSettings, clockType: '12-Hour' })} className={`flex-1 py-2 text-center transition ${tempSettings.clockType === '12-Hour' ? 'bg-indigo-50 font-bold text-indigo-900' : 'hover:bg-slate-50'}`}>12-Hour</button>
                  <button type="button" onClick={() => setTempSettings({ ...tempSettings, clockType: '24-Hour' })} className={`flex-1 py-2 text-center border-l border-slate-300 transition ${tempSettings.clockType === '24-Hour' ? 'bg-indigo-50 font-bold text-indigo-900' : 'hover:bg-slate-50'}`}>24-Hour</button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Line spacing (minutes)</label>
                <div className="flex border border-slate-300 rounded-md overflow-hidden bg-white">
                  {LINE_SPACING_OPTIONS.map((spacing) => (
                    <button
                      key={spacing}
                      type="button"
                      onClick={() => setTempSettings({ ...tempSettings, lineSpacing: spacing })}
                      className={`flex-1 py-2 text-center border-r last:border-0 border-slate-300 transition ${tempSettings.lineSpacing === spacing ? 'bg-indigo-50 font-bold text-indigo-900' : 'hover:bg-slate-50'}`}
                    >
                      {spacing}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Start hour - End hour</label>
                <div className="flex gap-2">
                  <input 
                    type="number" 
                    value={tempSettings.startHour} 
                    onChange={(e) => setTempSettings({ ...tempSettings, startHour: parseInt(e.target.value) || 0 })}
                    className="flex-1 border border-slate-300 rounded-md p-2 bg-white outline-none focus:border-indigo-500 text-center font-medium"
                  />
                  <input 
                    type="number" 
                    value={tempSettings.endHour}
                    onChange={(e) => setTempSettings({ ...tempSettings, endHour: parseInt(e.target.value) || 0 })}
                    className="flex-1 border border-slate-300 rounded-md p-2 bg-white outline-none focus:border-indigo-500 text-center font-medium"
                  />
                </div>
              </div>
            </div>
          )}

          {/* EVENT TAB CONTENT */}
          {activeTab === 'Event' && (
            <div className="space-y-4 text-sm">
              {EVENT_SETTINGS.map((item) => (
                <div key={item.key}>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">{item.label}</label>
                  <div className="flex border border-slate-300 rounded-md overflow-hidden bg-white">
                    <button type="button" onClick={() => setTempSettings({ ...tempSettings, [item.key]: true })} className={`flex-1 py-2 text-center transition ${tempSettings[item.key] ? 'bg-indigo-50 font-bold text-indigo-900' : 'hover:bg-slate-50'}`}>Yes</button>
                    <button type="button" onClick={() => setTempSettings({ ...tempSettings, [item.key]: false })} className={`flex-1 py-2 text-center border-l border-slate-300 transition ${!tempSettings[item.key] ? 'bg-indigo-50 font-bold text-indigo-900' : 'hover:bg-slate-50'}`}>No</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* FONT TAB CONTENT */}
          {activeTab === 'Font' && (
            <div className="space-y-4 text-sm">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Text font</label>
                <select 
                  value={tempSettings.textFont}
                  onChange={(e) => setTempSettings({ ...tempSettings, textFont: e.target.value })}
                  className="w-full border border-slate-300 rounded-md p-2.5 bg-white font-medium text-slate-700 outline-none focus:border-indigo-500"
                >
                  <option value="Roboto Slab">Roboto Slab</option>
                  <option value="Inter">Inter</option>
                  <option value="Geist">Geist Sans</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Text color</label>
                <div className="flex gap-3 items-center border border-slate-300 rounded-md p-2 bg-white">
                  <input 
                    type="color" 
                    value={tempSettings.textColor}
                    onChange={(e) => setTempSettings({ ...tempSettings, textColor: e.target.value })}
                    className="w-10 h-8 rounded border cursor-pointer border-slate-300"
                  />
                  <span className="text-sm font-mono text-slate-500 uppercase">{tempSettings.textColor}</span>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Action Trigger Footer */}
        <div className="p-4 border-t border-slate-300 bg-[#eef1f6]">
          <button 
            type="button"
            onClick={handleUpdate}
            className="w-full py-2.5 bg-[#eef1f6] text-[#1e3a8a] border border-[#1e3a8a]/30 font-bold rounded-lg hover:bg-[#1e3a8a] hover:text-white transition shadow-sm"
          >
            Update
          </button>
        </div>

      </div>
    </div>
  );
}

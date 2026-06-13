'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useScheduleStore } from '../store/useScheduleStore';
import { X, Calendar, Type, Clock, Info } from 'lucide-react';

interface AddEventModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDay?: string;
  initialTime?: string;
}

const PALETTE_COLORS = [
  '#ef4444', '#f06292', '#00796b', '#1e293b',
  '#fbc02d', '#f57c00', '#afb42b', '#ffb74d',
  '#2e3152', '#4caf50', '#880e4f', '#ce93d8'
];

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function AddEventModal({ isOpen, onClose, initialDay, initialTime }: AddEventModalProps) {
  const addEvent = useScheduleStore((state) => state.addEvent);

  const [title, setTitle] = useState('');
  const [selectedDays, setSelectedDays] = useState<string[]>(initialDay ? [initialDay] : ['Monday']);
  const [startTime, setStartTime] = useState(initialTime || '08:00');
  const [endTime, setEndTime] = useState('09:00');
  const [description, setDescription] = useState('');
  const [selectedColor, setSelectedColor] = useState('#ef4444');

  // Popover UI toggles
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showStartDropdown, setShowStartDropdown] = useState(false);
  const [showEndDropdown, setShowEndDropdown] = useState(false);

  const colorPickerRef = useRef<HTMLDivElement>(null);
  const colorButtonRef = useRef<HTMLButtonElement>(null);

  // Close color picker reliably if clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (
        colorPickerRef.current && !colorPickerRef.current.contains(target) &&
        colorButtonRef.current && !colorButtonRef.current.contains(target)
      ) {
        setShowColorPicker(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!isOpen) return null;

  const handleDayToggle = (day: string) => {
    if (selectedDays.includes(day)) {
      if (selectedDays.length > 1) {
        setSelectedDays(selectedDays.filter((d) => d !== day));
      }
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    addEvent({
      id: crypto.randomUUID(),
      title,
      days: selectedDays,
      startTime,
      endTime,
      color: selectedColor,
    });

    // Reset Form fields
    setTitle('');
    setSelectedDays(['Monday']);
    setStartTime('08:00');
    setEndTime('09:00');
    setDescription('');
    setSelectedColor('#ef4444');
    onClose();
  };

  const generateHourOptions = () => {
    const hours = [];
    for (let i = 8; i <= 17; i++) {
      hours.push(i.toString().padStart(2, '0'));
    }
    return hours;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-[460px] bg-[#eef1f6] rounded-xl shadow-2xl border border-slate-300 flex flex-col text-slate-800 relative">
        
        {/* Header section */}
        <div className="flex items-center justify-between p-4 bg-[#eef1f6] border-b border-slate-300 rounded-t-xl">
          <div className="flex items-center gap-2 text-[#1e3a8a] font-bold text-lg">
            <Calendar className="h-5 w-5" />
            <span>Add event</span>
          </div>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-800 transition">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form Inputs Container */}
        <form onSubmit={handleSubmit} className="p-5 space-y-4 bg-white/40 flex-1 rounded-b-xl">
          
          {/* Title Field Input with Color Picker integration */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Title</label>
            {/* FIX: Removed 'overflow-hidden' so the dropdown isn't clipped invisibly */}
            <div className="flex border border-slate-300 rounded-md bg-white items-center shadow-sm relative">
              <div className="p-2.5 text-slate-400 bg-slate-50 border-r border-slate-200 rounded-l-md">
                <Type className="h-4 w-4" />
              </div>
              <input 
                type="text"
                placeholder="Course or event name..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="flex-1 px-3 py-2 text-sm outline-none bg-transparent"
                required
              />
              <div className="flex items-center gap-1 pr-2">
                <button 
                  ref={colorButtonRef}
                  type="button"
                  onClick={() => setShowColorPicker(!showColorPicker)}
                  style={{ backgroundColor: selectedColor }}
                  className="px-2 py-0.5 text-xs text-white font-bold rounded border border-black/10 hover:opacity-80 transition"
                >
                  Abc
                </button>
              </div>

              {/* Popover Color Picker Modal Grid */}
              {showColorPicker && (
                <div ref={colorPickerRef} className="absolute right-0 top-12 bg-[#eef1f6] border border-slate-300 rounded-lg p-4 shadow-xl z-[100] w-64">
                  <p className="text-xs font-bold text-[#1e3a8a] mb-2 text-center">Color picker</p>
                  <div className="grid grid-cols-4 gap-2">
                    {PALETTE_COLORS.map((color) => (
                      <button
                        key={color}
                        type="button"
                        onClick={() => {
                          setSelectedColor(color);
                          setShowColorPicker(false);
                        }}
                        style={{ backgroundColor: color }}
                        className="h-8 rounded flex items-center justify-center text-[10px] text-white font-bold hover:scale-110 border border-black/10 transition-transform cursor-pointer"
                      >
                        Abc
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Days Selection Matrix */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Day(s)</label>
            <div className="grid grid-cols-7 border border-slate-300 rounded-md overflow-hidden bg-white text-xs shadow-sm">
              {DAYS.map((day) => {
                const isSelected = selectedDays.includes(day);
                return (
                  <button
                    key={day}
                    type="button"
                    onClick={() => handleDayToggle(day)}
                    className={`py-2 text-center border-r border-slate-200 last:border-0 font-medium transition ${
                      isSelected 
                        ? 'bg-indigo-50 font-bold text-indigo-900' 
                        : 'text-slate-500 hover:bg-slate-50'
                    }`}
                  >
                    {day.substring(0, 3)}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Time pickers inputs selection */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Start time - End time</label>
            {/* FIX: Removed 'overflow-hidden' from here too for the time dropdowns */}
            <div className="flex border border-slate-300 rounded-md bg-white shadow-sm relative">
              <div className="p-2.5 text-slate-400 bg-slate-50 border-r border-slate-200 rounded-l-md">
                <Clock className="h-4 w-4" />
              </div>
              
              <button 
                type="button"
                onClick={() => { setShowStartDropdown(!showStartDropdown); setShowEndDropdown(false); }}
                className="flex-1 px-3 py-2 text-sm text-left hover:bg-slate-50 flex justify-between items-center"
              >
                <span>{startTime}</span>
              </button>

              <button 
                type="button"
                onClick={() => { setShowEndDropdown(!showEndDropdown); setShowStartDropdown(false); }}
                className="flex-1 px-3 py-2 text-sm text-left hover:bg-slate-50 border-l border-slate-200 flex justify-between items-center"
              >
                <span>{endTime}</span>
              </button>

              {/* Start Dropdown Picker Options list overlay */}
              {showStartDropdown && (
                <div className="absolute left-10 top-11 bg-white border border-slate-300 shadow-xl rounded-md max-h-48 overflow-y-auto w-24 z-[100]">
                  {generateHourOptions().map((hr) => (
                    <button
                      key={hr}
                      type="button"
                      onClick={() => { setStartTime(`${hr}:00`); setShowStartDropdown(false); }}
                      className="w-full text-left px-4 py-1.5 text-xs hover:bg-indigo-600 hover:text-white"
                    >
                      {hr}:00
                    </button>
                  ))}
                </div>
              )}

              {/* End Dropdown Picker Options list overlay */}
              {showEndDropdown && (
                <div className="absolute right-0 top-11 bg-white border border-slate-300 shadow-xl rounded-md max-h-48 overflow-y-auto w-24 z-[100]">
                  {generateHourOptions().map((hr) => (
                    <button
                      key={hr}
                      type="button"
                      onClick={() => { setEndTime(`${hr}:00`); setShowEndDropdown(false); }}
                      className="w-full text-left px-4 py-1.5 text-xs hover:bg-indigo-600 hover:text-white"
                    >
                      {hr}:00
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Description Block */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Description</label>
            <div className="flex border border-slate-300 rounded-md bg-white items-start shadow-sm">
              <div className="p-2.5 text-slate-400 bg-slate-50 border-r border-slate-200 h-full min-h-[80px] rounded-l-md">
                <Info className="h-4 w-4" />
              </div>
              <textarea 
                rows={3}
                placeholder="Optional notes..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="flex-1 px-3 py-2 text-sm outline-none resize-none bg-transparent"
              />
            </div>
          </div>

          {/* Action Trigger Button */}
          <div className="pt-2">
            <button 
              type="submit"
              className="w-full py-2.5 bg-[#eef1f6] text-[#1e3a8a] border border-[#1e3a8a]/30 font-bold rounded-lg hover:bg-[#1e3a8a] hover:text-white transition shadow-sm"
            >
              Add
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useScheduleStore } from '../../store/useScheduleStore';
import { BUILDER_VARIANTS } from '../../config/builderVariants';
import { X, Calendar, Type, Clock, Info, MapPin, User, Tag } from 'lucide-react';

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
  const { currentVariant, addEvent, settings } = useScheduleStore();
  const config = BUILDER_VARIANTS[currentVariant] || BUILDER_VARIANTS.default;

  const [title, setTitle] = useState('');
  const [selectedDays, setSelectedDays] = useState<string[]>(initialDay ? [initialDay] : ['Monday']);
  const [startTime, setStartTime] = useState(initialTime || '08:00');
  const [endTime, setEndTime] = useState('09:00');
  const [person, setPerson] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [notes, setNotes] = useState('');
  
  // Custom Color Selection
  const [selectedColor, setSelectedColor] = useState(PALETTE_COLORS[0]);

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

  // Pre-load default colors based on configuration settings if auto-color is enabled
  useEffect(() => {
    if (settings.autoSelectColor) {
      // Pick a semi-random color from palette
      const hash = title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
      const colorIndex = hash % PALETTE_COLORS.length;
      setSelectedColor(PALETTE_COLORS[colorIndex]);
    }
  }, [title, settings.autoSelectColor]);

  // Set default color from config categories if possible
  useEffect(() => {
    // Pick color from settings if custom text color exists
    if (settings.textColor && settings.textColor.startsWith('#')) {
      // No-op
    }
  }, [settings.textColor]);

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
      title: title.trim(),
      days: selectedDays,
      startTime,
      endTime,
      color: selectedColor,
      person: person.trim() || undefined,
      location: location.trim() || undefined,
      category: category.trim() || undefined,
      notes: notes.trim() || undefined,
      variant: currentVariant,
    });

    // Reset Form fields
    setTitle('');
    setSelectedDays(['Monday']);
    setStartTime('08:00');
    setEndTime('09:00');
    setPerson('');
    setLocation('');
    setCategory('');
    setNotes('');
    setSelectedColor(PALETTE_COLORS[0]);
    onClose();
  };

  const generateHourOptions = () => {
    const hours = [];
    // Standard timetable hours
    for (let i = 0; i <= 23; i++) {
      hours.push(i.toString().padStart(2, '0'));
    }
    return hours;
  };

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center bg-black/40 backdrop-blur-xs">
      <div className="w-[500px] max-h-[90vh] bg-[#eef1f6] rounded-xl shadow-2xl border border-slate-300 flex flex-col text-slate-800 relative overflow-hidden">
        
        {/* Header section */}
        <div className="flex items-center justify-between p-4 bg-[#eef1f6] border-b border-slate-300 shrink-0">
          <div className="flex items-center gap-2 text-[#1e3a8a] font-bold text-lg">
            <Calendar className="h-5 w-5" />
            <span>{config.primaryActionLabel}</span>
          </div>
          <button type="button" onClick={onClose} className="text-slate-500 hover:text-slate-800 transition">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form Inputs Container */}
        <form onSubmit={handleSubmit} className="p-5 space-y-4 bg-white/40 overflow-y-auto flex-1">
          
          {/* Title Field Input with Color Picker */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">
              {config.eventLabels.title}
            </label>
            <div className="flex border border-slate-300 rounded-md bg-white items-center shadow-xs relative">
              <div className="p-2.5 text-slate-400 bg-slate-50 border-r border-slate-200 rounded-l-md">
                <Type className="h-4 w-4" />
              </div>
              <input 
                type="text"
                placeholder={`Enter ${config.eventLabels.title.toLowerCase()}...`}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="flex-1 px-3 py-2 text-sm outline-hidden bg-transparent text-slate-800 font-medium"
                required
              />
              <div className="flex items-center gap-1 pr-2">
                <button 
                  ref={colorButtonRef}
                  type="button"
                  onClick={() => setShowColorPicker(!showColorPicker)}
                  style={{ backgroundColor: selectedColor }}
                  className="px-2 py-0.5 text-xs text-white font-bold rounded border border-black/10 hover:opacity-85 transition cursor-pointer"
                >
                  Color
                </button>
              </div>

              {/* Popover Color Picker */}
              {showColorPicker && (
                <div ref={colorPickerRef} className="absolute right-0 top-12 bg-[#eef1f6] border border-slate-300 rounded-lg p-4 shadow-xl z-[350] w-64">
                  <p className="text-xs font-bold text-[#1e3a8a] mb-2 text-center">Select Event Color</p>
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
                        className="h-8 rounded flex items-center justify-center text-[10px] text-white font-bold hover:scale-105 border border-black/10 transition-transform cursor-pointer"
                      >
                        Select
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Days Selection Matrix */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Select Day(s)</label>
            <div className="grid grid-cols-7 border border-slate-300 rounded-md overflow-hidden bg-white text-xs shadow-xs">
              {DAYS.map((day) => {
                const isSelected = selectedDays.includes(day);
                return (
                  <button
                    key={day}
                    type="button"
                    onClick={() => handleDayToggle(day)}
                    className={`py-2.5 text-center border-r border-slate-200 last:border-0 font-medium transition cursor-pointer ${
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
            <label className="block text-xs font-semibold text-slate-600 mb-1">Time Block</label>
            <div className="flex border border-slate-300 rounded-md bg-white shadow-xs relative">
              <div className="p-2.5 text-slate-400 bg-slate-50 border-r border-slate-200 rounded-l-md">
                <Clock className="h-4 w-4" />
              </div>
              
              <button 
                type="button"
                onClick={() => { setShowStartDropdown(!showStartDropdown); setShowEndDropdown(false); }}
                className="flex-1 px-3 py-2 text-sm text-left hover:bg-slate-50 flex justify-between items-center text-slate-700 font-medium cursor-pointer"
              >
                <span>Start: {startTime}</span>
              </button>

              <button 
                type="button"
                onClick={() => { setShowEndDropdown(!showEndDropdown); setShowStartDropdown(false); }}
                className="flex-1 px-3 py-2 text-sm text-left hover:bg-slate-50 border-l border-slate-200 flex justify-between items-center text-slate-700 font-medium cursor-pointer"
              >
                <span>End: {endTime}</span>
              </button>

              {/* Start Dropdown */}
              {showStartDropdown && (
                <div className="absolute left-10 top-11 bg-white border border-slate-300 shadow-xl rounded-md max-h-48 overflow-y-auto w-28 z-[350]">
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

              {/* End Dropdown */}
              {showEndDropdown && (
                <div className="absolute right-0 top-11 bg-white border border-slate-300 shadow-xl rounded-md max-h-48 overflow-y-auto w-28 z-[350]">
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

          {/* Dynamic Variant Field: Person (e.g. Teacher, Employee) */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">
              {config.eventLabels.person}
            </label>
            <div className="flex border border-slate-300 rounded-md bg-white items-center shadow-xs">
              <div className="p-2.5 text-slate-400 bg-slate-50 border-r border-slate-200 rounded-l-md">
                <User className="h-4 w-4" />
              </div>
              <input 
                type="text"
                placeholder={`Enter name or role...`}
                value={person}
                onChange={(e) => setPerson(e.target.value)}
                className="flex-1 px-3 py-2 text-sm outline-hidden bg-transparent text-slate-800"
              />
            </div>
          </div>

          {/* Dynamic Variant Field: Location */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">
              {config.eventLabels.location}
            </label>
            <div className="flex border border-slate-300 rounded-md bg-white items-center shadow-xs">
              <div className="p-2.5 text-slate-400 bg-slate-50 border-r border-slate-200 rounded-l-md">
                <MapPin className="h-4 w-4" />
              </div>
              <input 
                type="text"
                placeholder={`Enter room, building, or location...`}
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="flex-1 px-3 py-2 text-sm outline-hidden bg-transparent text-slate-800"
              />
            </div>
          </div>

          {/* Dynamic Variant Field: Category & Suggestions */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">
              {config.eventLabels.category}
            </label>
            <div className="flex border border-slate-300 rounded-md bg-white items-center shadow-xs mb-2">
              <div className="p-2.5 text-slate-400 bg-slate-50 border-r border-slate-200 rounded-l-md">
                <Tag className="h-4 w-4" />
              </div>
              <input 
                type="text"
                placeholder={`Enter type or category...`}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="flex-1 px-3 py-2 text-sm outline-hidden bg-transparent text-slate-800"
              />
            </div>
            
            {/* Suggested Categories Quick Selection Tags */}
            {config.suggestedCategories.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-1.5">
                {config.suggestedCategories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setCategory(cat)}
                    className={`px-2.5 py-1 text-[10px] font-bold rounded-lg border transition cursor-pointer ${
                      category === cat 
                        ? 'bg-indigo-600 border-indigo-600 text-white shadow-xs' 
                        : 'bg-white border-slate-300 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Description/Notes Block */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Optional Notes</label>
            <div className="flex border border-slate-300 rounded-md bg-white items-start shadow-xs">
              <div className="p-2.5 text-slate-400 bg-slate-50 border-r border-slate-200 h-full min-h-[80px] rounded-l-md">
                <Info className="h-4 w-4" />
              </div>
              <textarea 
                rows={3}
                placeholder="Optional notes or details..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="flex-1 px-3 py-2 text-sm outline-hidden resize-none bg-transparent text-slate-800"
              />
            </div>
          </div>

          {/* Action Trigger Button */}
          <div className="pt-2">
            <button 
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition shadow-xs hover:shadow-md cursor-pointer"
            >
              Add Event to Schedule
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, CheckCircle, MessageSquare } from 'lucide-react';

type Step = 'rating' | 'intent' | 'feature' | 'thanks';

export default function FeedbackBox() {
  const [step, setStep] = useState<Step>('rating');
  const [isUseful, setIsUseful] = useState<boolean | null>(null);
  const [creationIntent, setCreationIntent] = useState<string>('');
  const [featureSuggestion, setFeatureSuggestion] = useState<string>('');

  const handleRating = (useful: boolean) => {
    setIsUseful(useful);
    setStep('intent');
  };

  const handleIntentSelect = (intent: string) => {
    setCreationIntent(intent);
    setStep('feature');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const feedbackData = {
      isUseful,
      creationIntent,
      featureSuggestion: featureSuggestion.trim(),
      timestamp: new Date().toISOString(),
    };

    // Save to localStorage & console.log
    try {
      const stored = localStorage.getItem('schedule_builder_feedback');
      const allFeedback = stored ? JSON.parse(stored) : [];
      allFeedback.push(feedbackData);
      localStorage.setItem('schedule_builder_feedback', JSON.stringify(allFeedback));
    } catch (err) {
      console.error('Failed to save feedback to localStorage', err);
    }

    console.log('Feedback submitted:', feedbackData);
    setStep('thanks');
  };

  const options = [
    'University timetable',
    'Staff rota',
    'Study schedule',
    'Employee shift schedule',
    'General weekly schedule',
    'Other'
  ];

  return (
    <div className="w-full max-w-2xl mx-auto bg-white border border-slate-200 rounded-2xl p-6 shadow-xs mt-6 transition-all duration-300">
      
      {/* STEP 1: WAS IT USEFUL? */}
      {step === 'rating' && (
        <div className="text-center py-2">
          <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center justify-center gap-1.5">
            <MessageSquare className="h-4.5 w-4.5 text-indigo-600" />
            Was this schedule maker useful?
          </h3>
          <div className="flex justify-center gap-4">
            <button
              type="button"
              onClick={() => handleRating(true)}
              className="flex items-center gap-2 px-5 py-2.5 bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 rounded-xl font-bold text-slate-700 hover:text-emerald-700 transition cursor-pointer text-xs"
            >
              <ThumbsUp className="h-4 w-4" /> Yes
            </button>
            <button
              type="button"
              onClick={() => handleRating(false)}
              className="flex items-center gap-2 px-5 py-2.5 bg-slate-50 hover:bg-rose-50 border border-slate-200 hover:border-rose-300 rounded-xl font-bold text-slate-700 hover:text-rose-700 transition cursor-pointer text-xs"
            >
              <ThumbsDown className="h-4 w-4" /> No
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: WHAT ARE YOU CREATING? */}
      {step === 'intent' && (
        <div>
          <h3 className="text-sm font-bold text-slate-800 text-center mb-4">
            What type of schedule are you creating?
          </h3>
          <div className="flex flex-wrap justify-center gap-2 max-w-lg mx-auto">
            {options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => handleIntentSelect(option)}
                className="px-3.5 py-2 bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-300 text-xs font-semibold text-slate-700 hover:text-indigo-700 rounded-xl transition cursor-pointer"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* STEP 3: TEXT AREA GESTURE */}
      {step === 'feature' && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="text-center">
            <h3 className="text-sm font-bold text-slate-850">
              What feature or improvement would you like us to add?
            </h3>
            <p className="text-[10px] text-slate-400 mt-1">Help us make this schedule creator better for you.</p>
          </div>
          
          <textarea
            rows={3}
            value={featureSuggestion}
            onChange={(e) => setFeatureSuggestion(e.target.value)}
            placeholder="Type your feature requests here..."
            className="w-full border border-slate-200 hover:border-slate-350 focus:border-indigo-500 bg-slate-50/50 rounded-xl p-3 text-xs text-slate-800 outline-hidden resize-none transition"
          />

          <div className="flex justify-center gap-3">
            <button
              type="button"
              onClick={() => setStep('thanks')}
              className="px-4 py-2 border border-slate-200 text-slate-500 font-bold rounded-xl text-xs hover:bg-slate-50 cursor-pointer"
            >
              Skip
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-indigo-600 text-white font-bold rounded-xl text-xs hover:bg-indigo-700 transition cursor-pointer"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      )}

      {/* STEP 4: THANK YOU */}
      {step === 'thanks' && (
        <div className="text-center py-4 flex flex-col items-center justify-center gap-2">
          <CheckCircle className="h-10 w-10 text-emerald-500 animate-scale-in" />
          <h3 className="font-bold text-slate-900 text-sm">Thank You!</h3>
          <p className="text-[10px] text-slate-400">Your feedback has been saved and helps us build better scheduling tools.</p>
        </div>
      )}

    </div>
  );
}

import React, { useState } from 'react';
import { Sparkles, X, CheckCircle2, ArrowRight } from 'lucide-react';

export default function FreelancerBanner({ onOpenBooking }) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white text-xs sm:text-sm py-2.5 px-4 sticky top-0 z-50 shadow-md border-b border-teal-500/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 flex-wrap sm:flex-nowrap">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-teal-500/20 text-teal-300 border border-teal-500/40 animate-pulse">
            <Sparkles className="w-3 h-3 mr-1" /> FREELANCE DEMO
          </span>
          <p className="text-slate-200 font-medium">
            <strong className="text-teal-300">Client Pitch Ready:</strong> High-converting dental clinic UI with live booking wizard & cost calculator.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={onOpenBooking}
            aria-label="Test Interactive Booking Wizard"
            className="inline-flex items-center gap-1 font-semibold text-teal-300 hover:text-white underline underline-offset-4 transition-colors"
          >
            Test Booking Engine <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button 
            onClick={() => setVisible(false)}
            className="text-slate-400 hover:text-white transition-colors p-0.5 rounded"
            title="Dismiss demo bar"
            aria-label="Dismiss demo bar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

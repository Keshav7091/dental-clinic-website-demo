import React from 'react';
import { Calendar, ShieldCheck, Sparkles, MessageCircle, Phone } from 'lucide-react';

export default function Footer({ onOpenBooking }) {
  const DEMO_PHONE = "+15552345678";
  const DEMO_WHATSAPP_URL = "https://wa.me/15552345678?text=Hi%20AuraDental,%20I%20want%20to%20ask%20a%20question.";

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800">
      
      {/* Top CTA Strip */}
      <div className="bg-gradient-to-r from-teal-950 via-slate-900 to-teal-950 py-8 px-4 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-teal-500/20 text-teal-300 text-xs font-bold border border-teal-500/30 mb-1">
              <Sparkles className="w-3 h-3 text-teal-400" /> Concept Website Demo
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">Experience A Modern Dental Website Workflow</h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-0.5">Explore treatment options, sample patient reviews, and instant WhatsApp communication.</p>
          </div>
          
          <div className="flex items-center gap-3">
            <a
              href={DEMO_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center gap-1.5"
              aria-label="WhatsApp Demo Link"
            >
              <MessageCircle className="w-4 h-4 fill-white" /> WhatsApp
            </a>
            <button
              onClick={onOpenBooking}
              className="px-5 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center gap-1.5"
              aria-label="Demo Booking Form Link"
            >
              <Calendar className="w-4 h-4" /> Request Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div className="space-y-3 md:col-span-1">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-teal-500 text-slate-950 font-bold flex items-center justify-center text-base">
              🦷
            </div>
            <span className="text-base font-bold text-white tracking-tight">
              Aura<span className="text-teal-400">Dental</span>
            </span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            AuraDental Studio is a fictional concept website demo created to demonstrate dental practice lead conversion UI.
          </p>
          <div className="text-[11px] text-slate-500">
            © {new Date().getFullYear()} AuraDental Studio Demo. All rights reserved.
          </div>
        </div>

        {/* Treatments */}
        <div>
          <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">Sample Treatments</h4>
          <ul className="space-y-1.5 text-xs">
            <li><a href="#treatments" className="hover:text-teal-400 transition-colors">Laser Teeth Whitening</a></li>
            <li><a href="#treatments" className="hover:text-teal-400 transition-colors">Porcelain Veneers</a></li>
            <li><a href="#treatments" className="hover:text-teal-400 transition-colors">Invisalign Clear Aligners</a></li>
            <li><a href="#treatments" className="hover:text-teal-400 transition-colors">3D Dental Implants</a></li>
            <li><a href="#treatments" className="hover:text-teal-400 transition-colors">Comfort Root Canal Care</a></li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">Concept Navigation</h4>
          <ul className="space-y-1.5 text-xs">
            <li><a href="#about-doctor" className="hover:text-teal-400 transition-colors">About Dr. Sarah Mitchell</a></li>
            <li><a href="#treatments" className="hover:text-teal-400 transition-colors">Treatments Overview</a></li>
            <li><a href="#reviews" className="hover:text-teal-400 transition-colors">Sample Reviews</a></li>
            <li><a href="#contact" className="hover:text-teal-400 transition-colors">Location & Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">Demo Contact Channels</h4>
          <div className="space-y-2 text-xs text-slate-400">
            <p><strong className="text-slate-200">Demo Phone:</strong> <a href={`tel:${DEMO_PHONE}`} className="hover:text-teal-400">+1 (555) 234-5678</a></p>
            <p><strong className="text-slate-200">WhatsApp:</strong> <a href={DEMO_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">WhatsApp Demo Link</a></p>
            <p><strong className="text-slate-200">Location:</strong> Beverly Hills, CA (Sample)</p>
            <div className="pt-2 flex items-center gap-1 text-[11px] text-teal-400 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" /> Concept Portfolio Project
            </div>
          </div>
        </div>

      </div>

    </footer>
  );
}

import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, Clock, MapPin, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [mobileMenu, setMobileMenu] = useState(false);

  const DEMO_PHONE = "+15552345678";
  const DEMO_WHATSAPP_URL = "https://wa.me/15552345678?text=Hi%20AuraDental,%20I%20want%20to%20inquire%20about%20a%20dental%20appointment.";

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Concept Demo Top Announcement Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-2">
          
          <div className="flex items-center gap-4 text-[11px] font-medium">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30">
              <Sparkles className="w-3 h-3 text-teal-400" /> Concept Website • Demo Content
            </span>
            <span className="hidden md:flex items-center gap-1 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-teal-400" /> 450 Aesthetic Way, Beverly Hills
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="hidden sm:flex items-center gap-1 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-teal-400" /> Mon - Sat: 9:00 AM - 7:00 PM
            </span>
            <a 
              href={DEMO_WHATSAPP_URL}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
              aria-label="WhatsApp Demo Contact"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-emerald-400 text-slate-900" />
              <span>WhatsApp Demo: +1 (555) 234-5678</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group" aria-label="AuraDental Home">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-600 to-cyan-500 flex items-center justify-center text-white text-xl font-bold shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform">
            🦷
          </div>
          <div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900">
              Aura<span className="text-teal-600">Dental</span>
            </span>
            <span className="text-[10px] tracking-wider uppercase font-bold text-slate-500 block -mt-1">
              Dr. Sarah Mitchell's Studio
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
          <a href="#about-doctor" className="hover:text-teal-600 transition-colors">About Doctor</a>
          <a href="#treatments" className="hover:text-teal-600 transition-colors">Treatments</a>
          <a href="#reviews" className="hover:text-teal-600 transition-colors">Sample Reviews</a>
          <a href="#contact" className="hover:text-teal-600 transition-colors">Contact Us</a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={DEMO_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-500/20 transition-all flex items-center gap-1.5"
            aria-label="Contact via WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>WhatsApp</span>
          </a>

          <a
            href={`tel:${DEMO_PHONE}`}
            className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-1.5"
            aria-label="Call Demo Phone Number"
          >
            <Phone className="w-4 h-4 text-teal-400" />
            <span>Call Now</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label={mobileMenu ? "Close menu" : "Open menu"}
        >
          {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenu && (
        <div className="md:hidden bg-white border-t border-slate-100 p-4 space-y-3 shadow-xl animate-fadeIn">
          <a 
            href="#about-doctor" 
            onClick={() => setMobileMenu(false)}
            className="block px-3 py-2 rounded-lg text-slate-700 font-semibold hover:bg-teal-50"
          >
            About Dr. Sarah Mitchell
          </a>
          <a 
            href="#treatments" 
            onClick={() => setMobileMenu(false)}
            className="block px-3 py-2 rounded-lg text-slate-700 font-semibold hover:bg-teal-50"
          >
            Treatments & Care
          </a>
          <a 
            href="#reviews" 
            onClick={() => setMobileMenu(false)}
            className="block px-3 py-2 rounded-lg text-slate-700 font-semibold hover:bg-teal-50"
          >
            Sample Reviews
          </a>
          <a 
            href="#contact" 
            onClick={() => setMobileMenu(false)}
            className="block px-3 py-2 rounded-lg text-slate-700 font-semibold hover:bg-teal-50"
          >
            Clinic Location & Contact
          </a>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href={DEMO_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-emerald-500 text-white font-bold text-center flex items-center justify-center gap-2 shadow text-sm"
              aria-label="WhatsApp Demo Chat Mobile"
            >
              <MessageCircle className="w-4 h-4 fill-white" /> WhatsApp Chat (Demo)
            </a>
            <a
              href={`tel:${DEMO_PHONE}`}
              className="w-full py-2.5 rounded-xl bg-slate-900 text-white font-bold text-center flex items-center justify-center gap-2 text-sm"
              aria-label="Call Demo Phone Number Mobile"
            >
              <Phone className="w-4 h-4 text-teal-400" /> Call +1 (555) 234-5678
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

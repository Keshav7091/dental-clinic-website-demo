import React from 'react';
import { Star, MessageCircle, Phone, Calendar, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  const DEMO_PHONE = "+15552345678";
  const DEMO_WHATSAPP_URL = "https://wa.me/15552345678?text=Hi%20Dr.%20Sarah,%20I%20want%20to%20consult%20about%20dental%20care.";

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-50/60 via-white to-slate-50 pt-8 pb-14 lg:pt-14 lg:pb-20">
      
      {/* Background Soft Glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[550px] h-[250px] bg-teal-300/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Concept Demo Rating Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-xs border border-teal-200 text-xs font-semibold text-slate-800">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-extrabold text-slate-900">Sample Rating</span>
              <span className="text-slate-300">•</span>
              <span className="text-teal-700 font-bold">Concept Website Demo</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Comfort-Focused Dental Care By <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Dr. Sarah Mitchell</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              A concept dental clinic showcase designed around patient comfort, modern dental technology, cosmetic smile makeovers, and personalized treatment planning.
            </p>

            {/* Checklist (Safe Demo Language) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 max-w-xl mx-auto lg:mx-0 text-left text-xs sm:text-sm font-semibold text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span>Comfort-Focused Procedures</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span>Modern Dental Technology</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span>Personalized Care Plan</span>
              </div>
            </div>

            {/* Contact CTAs */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <a
                href={DEMO_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm sm:text-base shadow-md shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>WhatsApp Demo</span>
              </a>

              <a
                href={`tel:${DEMO_PHONE}`}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-sm sm:text-base shadow-md transition-all flex items-center justify-center gap-2"
                aria-label="Call Demo Phone Number"
              >
                <Phone className="w-4 h-4 text-teal-400" />
                <span>Call +1 (555) 234-5678</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-teal-50 hover:bg-teal-100 text-teal-800 border border-teal-200 font-extrabold text-sm sm:text-base transition-colors flex items-center justify-center gap-2"
                aria-label="Open Demo Booking Form"
              >
                <Calendar className="w-4 h-4 text-teal-600" />
                <span>Request Appointment</span>
              </button>
            </div>

            {/* Concept Footer Note */}
            <div className="pt-3 flex items-center justify-center lg:justify-start gap-4 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <span>Sample Credentials • Fictional Demo Clinic</span>
              </div>
            </div>

          </div>

          {/* Right Doctor Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100">
                <img
                  src="/images/doctor-sarah.jpg"
                  alt="Dr. Sarah Mitchell Lead Dentist"
                  className="w-full h-[400px] sm:h-[460px] object-cover object-top"
                  onError={(e) => {
                    e.currentTarget.src = '/images/doctor-about.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="px-2.5 py-0.5 rounded-md bg-teal-500 text-white font-extrabold text-[11px] uppercase tracking-wider">
                    Lead Dentist • Demo Concept
                  </span>
                  <h3 className="text-xl font-bold mt-1">Dr. Sarah Mitchell, DDS</h3>
                  <p className="text-xs text-slate-200 mt-0.5">Specialist in Comfortable Dental & Cosmetic Care</p>
                </div>
              </div>

              {/* Stat Badge 1 */}
              <div className="absolute -top-3 -left-4 bg-white p-3 rounded-2xl shadow-lg border border-slate-100 hidden sm:flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-base">
                  ✨
                </div>
                <div>
                  <div className="text-xs font-extrabold text-slate-900">Sample Portfolio</div>
                  <div className="text-[10px] text-slate-500 font-semibold">Demo Practice Concept</div>
                </div>
              </div>

              {/* Stat Badge 2 */}
              <div className="absolute -bottom-3 -right-3 bg-slate-900 text-white p-3 rounded-2xl shadow-lg border border-slate-800 hidden sm:flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 fill-emerald-400 text-slate-900" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-medium">Demo Communication</div>
                  <div className="text-xs font-bold text-emerald-400">WhatsApp Integration</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

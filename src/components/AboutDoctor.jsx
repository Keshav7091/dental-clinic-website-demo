import React from 'react';
import { Award, GraduationCap, HeartPulse, CheckCircle2, MessageCircle, Sparkles } from 'lucide-react';

export default function AboutDoctor() {
  const DEMO_WHATSAPP_URL = "https://wa.me/15552345678?text=Hi%20Dr.%20Sarah,%20I%20have%20a%20question%20about%20dental%20care.";

  return (
    <section id="about-doctor" className="py-14 lg:py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Doctor Local Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100">
              <img
                src="/images/doctor-about.jpg"
                alt="Dr. Sarah Mitchell inside clinic"
                className="w-full h-[400px] object-cover object-center"
                onError={(e) => {
                  e.currentTarget.src = '/images/doctor-sarah.jpg';
                }}
              />
              <div className="p-5 bg-slate-900 text-white">
                <div className="flex items-center gap-1.5 text-teal-400 text-xs font-bold uppercase tracking-wider">
                  <Award className="w-4 h-4" /> Sample Credentials • Demo Concept
                </div>
                <h4 className="text-base font-bold text-white mt-1">UCLA Dental School Graduate (Sample)</h4>
                <p className="text-xs text-slate-300 mt-0.5">Focused on comfortable dental care, clear aligners, and cosmetic smile planning.</p>
              </div>
            </div>
          </div>

          {/* Bio & Philosophy Content */}
          <div className="lg:col-span-7 space-y-5">
            
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-100 text-teal-800">
                <Sparkles className="w-3.5 h-3.5" /> Concept Dental Profile
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
                About Dr. Sarah Mitchell, DDS
              </h2>
              <p className="text-base text-slate-600 mt-2 leading-relaxed font-normal">
                Dr. Sarah Mitchell believes that dental visits should be welcoming, comfortable, and centered on clear communication. This concept website demonstrates a modern dental practice workflow prioritizing patient comfort, digital smile planning, and gentle care procedures.
              </p>
            </div>

            {/* Key Qualifications (Sample Demo Wording) */}
            <div className="space-y-2.5 bg-slate-50 p-4.5 rounded-2xl border border-slate-200/80">
              <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                Sample Practice Philosophy & Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-medium text-slate-700">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span>Comprehensive Oral Health Planning</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span>Cosmetic Dentistry & Veneers</span>
                </div>
                <div className="flex items-center gap-2">
                  <HeartPulse className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span>Comfort-Oriented Treatment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span>Digital 3D Oral Scans</span>
                </div>
              </div>
            </div>

            {/* Doctor's Quote */}
            <div className="p-4 rounded-2xl bg-teal-50/70 border-l-4 border-teal-600 text-slate-700 text-xs sm:text-sm italic">
              "Our clinical goal is to combine modern technology with thoughtful, gentle care so every patient feels relaxed and supported."
            </div>

            {/* WhatsApp Contact Button */}
            <div className="pt-1">
              <a
                href={DEMO_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all"
                aria-label="Inquire via WhatsApp Demo"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Inquire On WhatsApp Demo</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

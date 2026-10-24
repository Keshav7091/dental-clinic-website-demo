import React from 'react';
import { Calendar, ArrowRight, CheckCircle2, Clock, MapPin } from 'lucide-react';
import CLINIC_CONFIG from '../config';

const TRUST_ITEMS = [
  { icon: CheckCircle2, label: 'Personalised Care' },
  { icon: CheckCircle2, label: 'Modern Equipment' },
  { icon: CheckCircle2, label: 'Comfort-Focused Visits' },
];

export default function Hero({ onOpenBooking }) {
  const handleExploreServices = (e) => {
    e.preventDefault();
    const el = document.querySelector('#services');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 76;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="pt-[76px] relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #EAF5F1 0%, #FAF9F6 55%, #FAF9F6 100%)' }}
    >
      {/* Subtle background accent */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(circle, #C8E8E0 0%, transparent 70%)',
          transform: 'translate(30%, -30%)',
        }}
        aria-hidden="true"
      />

      <div className="container-site relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-14 lg:py-20">

          {/* Left: Content */}
          <div className="space-y-6 text-center lg:text-left">

            {/* Eyebrow */}
            <p
              className="inline-block text-xs font-bold uppercase tracking-[0.18em]"
              style={{ color: '#247C78' }}
            >
              Your Smile, Our Priority
            </p>

            {/* H1 */}
            <h1
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.12] tracking-tight"
              style={{ color: '#123C3A', fontFamily: 'Manrope, sans-serif' }}
            >
              Confident Smiles{' '}
              <span className="block">Start With</span>
              <span style={{ color: '#247C78' }}>Exceptional Care.</span>
            </h1>

            {/* Supporting text */}
            <p
              className="text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
              style={{ color: '#667573', fontFamily: 'Inter, sans-serif' }}
            >
              Discover thoughtful dental care in a comfortable, welcoming environment.
              From routine checkups to smile-enhancing treatments, we're here to help
              you smile with confidence.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2">
              {TRUST_ITEMS.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5">
                  <Icon
                    className="w-4 h-4 flex-shrink-0"
                    style={{ color: '#247C78' }}
                    aria-hidden="true"
                  />
                  <span
                    className="text-sm font-semibold"
                    style={{ color: '#202D2C', fontFamily: 'Inter, sans-serif' }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-1">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-white font-bold text-sm transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 shadow-lg flex items-center justify-center gap-2"
                style={{
                  background: 'linear-gradient(135deg, #123C3A 0%, #247C78 100%)',
                  fontFamily: 'Manrope, sans-serif',
                  boxShadow: '0 8px 24px rgba(18,60,58,0.25)',
                }}
                aria-label="Book an appointment"
              >
                <Calendar className="w-4 h-4" aria-hidden="true" />
                Book an Appointment
              </button>

              <a
                href="#services"
                onClick={handleExploreServices}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 border-2"
                style={{
                  color: '#247C78',
                  borderColor: '#247C78',
                  background: 'transparent',
                  fontFamily: 'Manrope, sans-serif',
                }}
                aria-label="Explore our services"
              >
                Explore Our Services
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>

            {/* Hours snippet */}
            <div
              className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl border text-xs font-medium"
              style={{
                borderColor: '#C8E8E0',
                background: 'rgba(234,245,241,0.7)',
                color: '#667573',
              }}
            >
              <Clock className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#247C78' }} aria-hidden="true" />
              <span>Mon – Sat: 9:00 AM – 7:00 PM</span>
              <span style={{ color: '#C8E8E0' }}>|</span>
              <MapPin className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#247C78' }} aria-hidden="true" />
              <span>{CLINIC_CONFIG.city}</span>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl border-4"
              style={{ borderColor: 'white' }}
            >
              <img
                src="/images/hero-clinic.png"
                alt="Modern dental treatment room at Ivory Dental Studio"
                className="w-full h-[380px] sm:h-[460px] lg:h-[500px] object-cover"
                onError={(e) => { e.currentTarget.src = '/images/clinic-hero.jpg'; }}
                fetchPriority="high"
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(18,60,58,0.55) 0%, transparent 45%)',
                }}
                aria-hidden="true"
              />
              {/* Caption overlay */}
              <div className="absolute bottom-5 left-5 right-5">
                <p
                  className="text-xs font-bold uppercase tracking-wider mb-1"
                  style={{ color: 'rgba(234,245,241,0.9)' }}
                >
                  ✦ Demo Concept · Fictional Clinic
                </p>
                <p className="text-white font-bold text-lg leading-snug" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Ivory Dental Studio
                </p>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px' }}>
                  Noida, Uttar Pradesh
                </p>
              </div>
            </div>

            {/* Floating badge — Personalized Care */}
            <div
              className="absolute -top-4 -left-4 hidden sm:flex items-center gap-3 p-3 rounded-2xl shadow-lg border"
              style={{ background: 'white', borderColor: '#EAF5F1' }}
              aria-hidden="true"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                style={{ background: '#EAF5F1' }}
              >
                🌿
              </div>
              <div>
                <div className="text-xs font-extrabold" style={{ color: '#123C3A', fontFamily: 'Manrope, sans-serif' }}>
                  Patient-First
                </div>
                <div className="text-[10px] font-medium" style={{ color: '#667573' }}>
                  Personalised Care
                </div>
              </div>
            </div>

            {/* Floating badge — Open Hours */}
            <div
              className="absolute -bottom-4 -right-4 hidden sm:flex items-center gap-3 p-3 rounded-2xl shadow-lg border"
              style={{ background: '#123C3A', borderColor: '#1C6360' }}
              aria-hidden="true"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(36,124,120,0.3)' }}
              >
                <Clock className="w-5 h-5" style={{ color: '#9FD3C8' }} />
              </div>
              <div>
                <div className="text-[10px] font-medium" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  Open Today
                </div>
                <div className="text-xs font-bold" style={{ color: '#9FD3C8', fontFamily: 'Manrope, sans-serif' }}>
                  9 AM – 7 PM
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

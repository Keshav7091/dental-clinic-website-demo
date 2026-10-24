import React from 'react';
import { Heart, MessageSquare, ShieldCheck, ArrowRight } from 'lucide-react';

const FEATURES = [
  {
    icon: Heart,
    title: 'Patient-Focused Consultations',
    description:
      'Every visit begins with a thorough conversation about your concerns, comfort, and care preferences.',
  },
  {
    icon: MessageSquare,
    title: 'Clear Communication',
    description:
      'We walk you through treatment options in plain language so you can make informed decisions with confidence.',
  },
  {
    icon: ShieldCheck,
    title: 'Preventive Approach',
    description:
      'We emphasise early detection and oral hygiene guidance to help you maintain long-term dental health.',
  },
];

export default function About({ onOpenBooking }) {
  return (
    <section id="about" className="py-16 lg:py-24" style={{ background: 'white' }}>
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Image */}
          <div className="relative order-2 lg:order-1">
            <div
              className="rounded-3xl overflow-hidden shadow-xl border-4"
              style={{ borderColor: 'white' }}
            >
              <img
                src="/images/about-clinic.png"
                alt="Dentist in consultation with a patient at Ivory Dental Studio"
                className="w-full h-[380px] sm:h-[460px] object-cover"
                onError={(e) => { e.currentTarget.src = '/images/doctor-about.jpg'; }}
                loading="lazy"
              />
            </div>

            {/* Decorative accent */}
            <div
              className="absolute -bottom-5 -left-5 w-40 h-40 rounded-3xl -z-10"
              style={{ background: '#EAF5F1' }}
              aria-hidden="true"
            />
            <div
              className="absolute -top-5 -right-5 w-24 h-24 rounded-2xl -z-10"
              style={{ background: '#C8E8E0' }}
              aria-hidden="true"
            />
          </div>

          {/* Right: Content */}
          <div className="space-y-7 order-1 lg:order-2">

            <div>
              <p
                className="text-xs font-bold uppercase tracking-[0.16em] mb-3"
                style={{ color: '#247C78' }}
              >
                About the Clinic
              </p>
              <h2
                className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4"
                style={{ color: '#123C3A', fontFamily: 'Manrope, sans-serif' }}
              >
                A More Comfortable Dental Experience
              </h2>
              <p className="text-base leading-relaxed" style={{ color: '#667573' }}>
                At Ivory Dental Studio, we believe dental visits should feel welcoming, not
                stressful. Our approach centres on listening to your needs, explaining every
                step clearly, and creating a calm environment where you feel looked after
                from the moment you walk in.
              </p>
            </div>

            {/* Feature points */}
            <div className="space-y-5">
              {FEATURES.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: '#EAF5F1' }}
                  >
                    <Icon className="w-5 h-5" style={{ color: '#247C78' }} aria-hidden="true" />
                  </div>
                  <div>
                    <h3
                      className="text-sm font-bold mb-1"
                      style={{ color: '#123C3A', fontFamily: 'Manrope, sans-serif' }}
                    >
                      {title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#667573' }}>
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-white font-bold text-sm transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 shadow-md"
              style={{
                background: 'linear-gradient(135deg, #123C3A 0%, #247C78 100%)',
                fontFamily: 'Manrope, sans-serif',
              }}
              aria-label="Book a visit"
            >
              Book a Visit
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Users, MessageCircle, Home, Clock } from 'lucide-react';

const WHY_ITEMS = [
  {
    icon: Users,
    title: 'Personalised Consultations',
    description:
      'Each appointment is unhurried and tailored to you. We listen carefully before recommending any treatment.',
  },
  {
    icon: MessageCircle,
    title: 'Clear Treatment Explanations',
    description:
      'We explain procedures in plain language, so you always know what to expect and can ask questions freely.',
  },
  {
    icon: Home,
    title: 'A Welcoming Environment',
    description:
      'Our clinic is designed to feel calm and comfortable — a space where patients feel at ease from the first visit.',
  },
  {
    icon: Clock,
    title: 'Convenient Appointment Enquiries',
    description:
      'Reach out online or by phone to schedule at a time that suits you. We aim to respond promptly to all enquiries.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24" style={{ background: '#FAF9F6' }}>
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left: Header */}
          <div className="lg:sticky lg:top-24">
            <p
              className="text-xs font-bold uppercase tracking-[0.16em] mb-3"
              style={{ color: '#247C78' }}
            >
              Why Ivory Dental Studio
            </p>
            <h2
              className="text-3xl sm:text-4xl font-extrabold leading-tight mb-5"
              style={{ color: '#123C3A', fontFamily: 'Manrope, sans-serif' }}
            >
              Care That Puts You First
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: '#667573' }}>
              We're committed to making dental care a positive experience — one where
              you're heard, informed, and comfortable throughout.
            </p>

            {/* Decorative panel */}
            <div
              className="p-6 rounded-2xl border"
              style={{ background: '#EAF5F1', borderColor: '#C8E8E0' }}
            >
              <p
                className="text-sm font-semibold leading-relaxed italic"
                style={{ color: '#247C78' }}
              >
                "Great dental care starts with genuine listening. We take the time to
                understand your concerns so we can offer the most suitable guidance."
              </p>
              <p className="text-xs font-bold mt-3" style={{ color: '#123C3A' }}>
                — The Ivory Dental Studio Team
              </p>
            </div>
          </div>

          {/* Right: Feature list */}
          <div className="space-y-6">
            {WHY_ITEMS.map(({ icon: Icon, title, description }, idx) => (
              <div
                key={idx}
                className="flex items-start gap-5 p-6 rounded-2xl border transition-all duration-200 hover:shadow-md"
                style={{ background: 'white', borderColor: '#EAF5F1' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: '#EAF5F1' }}
                >
                  <Icon className="w-6 h-6" style={{ color: '#247C78' }} aria-hidden="true" />
                </div>
                <div>
                  <h3
                    className="text-base font-bold mb-1"
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

        </div>
      </div>
    </section>
  );
}

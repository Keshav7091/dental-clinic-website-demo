import React from 'react';
import { Heart } from 'lucide-react';

/**
 * Testimonials section — labelled as fictional sample content.
 * Follows the "Your Experience Matters" approach per spec.
 */
const SAMPLE_TESTIMONIALS = [
  {
    initials: 'SA',
    name: 'Sample Patient A',
    treatment: 'General Dentistry (Demo)',
    quote:
      'The team took time to explain everything clearly. The consultation felt unhurried and I left knowing exactly what to expect.',
  },
  {
    initials: 'SB',
    name: 'Sample Patient B',
    treatment: 'Teeth Cleaning (Demo)',
    quote:
      'A genuinely comfortable visit. The clinic is clean, calm, and the staff are attentive without being rushed.',
  },
  {
    initials: 'SC',
    name: 'Sample Patient C',
    treatment: 'Cosmetic Dentistry (Demo)',
    quote:
      'I appreciated the honest conversation about treatment options. No pressure — just clear information and helpful guidance.',
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 lg:py-24" style={{ background: 'white' }}>
      <div className="container-site">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p
            className="text-xs font-bold uppercase tracking-[0.16em] mb-3"
            style={{ color: '#247C78' }}
          >
            Patient Experience
          </p>
          <h2
            className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4"
            style={{ color: '#123C3A', fontFamily: 'Manrope, sans-serif' }}
          >
            Your Experience Matters
          </h2>
          <p className="text-base leading-relaxed mb-3" style={{ color: '#667573' }}>
            At Ivory Dental Studio, every visit is designed around your comfort and
            confidence. We listen, we explain, and we work at your pace.
          </p>
          <span
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
            style={{ background: '#EAF5F1', color: '#247C78' }}
          >
            <Heart className="w-3 h-3" aria-hidden="true" />
            Patient-First Approach
          </span>
        </div>

        {/* Sample testimonial cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAMPLE_TESTIMONIALS.map(({ initials, name, treatment, quote }) => (
            <article
              key={name}
              className="p-6 rounded-2xl border relative"
              style={{ background: '#FAF9F6', borderColor: '#EAF5F1' }}
            >
              {/* Fictional label */}
              <span
                className="absolute top-4 right-4 text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
                style={{ background: '#EAF5F1', color: '#667573' }}
              >
                Fictional Sample
              </span>

              {/* Quote */}
              <p
                className="text-sm leading-relaxed mb-5 pt-4"
                style={{ color: '#667573' }}
              >
                "{quote}"
              </p>

              {/* Attribution */}
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-extrabold"
                  style={{ background: '#EAF5F1', color: '#247C78' }}
                  aria-hidden="true"
                >
                  {initials}
                </div>
                <div>
                  <p className="text-sm font-bold" style={{ color: '#123C3A', fontFamily: 'Manrope, sans-serif' }}>
                    {name}
                  </p>
                  <p className="text-xs" style={{ color: '#247C78' }}>{treatment}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Disclosure note */}
        <p className="text-center text-xs mt-8" style={{ color: '#667573' }}>
          The above are illustrative sample cards demonstrating testimonial layout.
          They are not real patient reviews.
        </p>

      </div>
    </section>
  );
}

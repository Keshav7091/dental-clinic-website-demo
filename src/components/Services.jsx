import React from 'react';
import {
  Stethoscope,
  Sparkles,
  Smile,
  Activity,
  AlignCenter,
  Baby,
  ArrowRight,
} from 'lucide-react';

const SERVICES = [
  {
    icon: Stethoscope,
    title: 'General Dentistry',
    description:
      'Routine checkups, consultations, and preventive oral care to keep your teeth healthy at every stage of life.',
    color: '#EAF5F1',
    iconColor: '#247C78',
  },
  {
    icon: Sparkles,
    title: 'Teeth Cleaning',
    description:
      'Professional scaling and polishing combined with practical guidance on everyday oral hygiene habits.',
    color: '#EAF5F1',
    iconColor: '#247C78',
  },
  {
    icon: Smile,
    title: 'Cosmetic Dentistry',
    description:
      'Consultations about teeth whitening, bonding, and smile-enhancing options tailored to your appearance goals.',
    color: '#EAF5F1',
    iconColor: '#247C78',
  },
  {
    icon: Activity,
    title: 'Root Canal Treatment',
    description:
      'Assessment and treatment options for teeth affected by pulp infection or damage, focused on preserving your natural tooth.',
    color: '#EAF5F1',
    iconColor: '#247C78',
  },
  {
    icon: AlignCenter,
    title: 'Braces & Alignment',
    description:
      'Orthodontic consultations covering traditional braces and clear aligner options for improved teeth alignment.',
    color: '#EAF5F1',
    iconColor: '#247C78',
  },
  {
    icon: Baby,
    title: 'Pediatric Dentistry',
    description:
      'Child-friendly dental care and oral hygiene guidance in a welcoming, low-anxiety environment for young patients.',
    color: '#EAF5F1',
    iconColor: '#247C78',
  },
];

export default function Services({ onOpenBooking }) {
  return (
    <section id="services" className="py-16 lg:py-24" style={{ background: '#FAF9F6' }}>
      <div className="container-site">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p
            className="text-xs font-bold uppercase tracking-[0.16em] mb-3"
            style={{ color: '#247C78' }}
          >
            What We Offer
          </p>
          <h2
            className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4"
            style={{ color: '#123C3A', fontFamily: 'Manrope, sans-serif' }}
          >
            Complete Care for Every Smile
          </h2>
          <p className="text-base leading-relaxed" style={{ color: '#667573' }}>
            Explore dental services designed around your oral health and individual needs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(({ icon: Icon, title, description, color, iconColor }, idx) => (
            <article
              key={idx}
              className="group relative flex flex-col p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{
                background: 'white',
                borderColor: '#EAF5F1',
              }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-200"
                style={{ background: color }}
              >
                <Icon
                  className="w-6 h-6 transition-colors duration-200"
                  style={{ color: iconColor }}
                  aria-hidden="true"
                />
              </div>

              {/* Content */}
              <h3
                className="text-[1.05rem] font-bold mb-2 leading-snug"
                style={{ color: '#123C3A', fontFamily: 'Manrope, sans-serif' }}
              >
                {title}
              </h3>
              <p
                className="text-sm leading-relaxed flex-grow"
                style={{ color: '#667573' }}
              >
                {description}
              </p>

              {/* CTA */}
              <button
                onClick={() => onOpenBooking(title)}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 group/btn"
                style={{ color: '#247C78', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                aria-label={`Enquire about ${title}`}
              >
                <span className="group-hover/btn:underline">Learn More</span>
                <ArrowRight
                  className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1"
                  aria-hidden="true"
                />
              </button>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

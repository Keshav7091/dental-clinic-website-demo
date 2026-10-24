import React from 'react';
import { Calendar } from 'lucide-react';

/**
 * DEMO NOTICE: These are fictional profiles created for portfolio demonstration only.
 * Names, roles, and descriptions are illustrative. Do not present as real practitioners.
 */
const TEAM = [
  {
    name: 'Dr. Aanya Mehta',
    role: 'General Dentist',
    intro:
      'Dr. Mehta focuses on preventive care and patient education, helping individuals build long-term oral health habits through gentle and thorough examinations.',
    image: '/images/dr-aanya-mehta.png',
    fallback: '/images/doctor-sarah.jpg',
  },
  {
    name: 'Dr. Rohan Kapoor',
    role: 'Cosmetic Dentistry',
    intro:
      'Dr. Kapoor specialises in smile consultations, guiding patients through aesthetic options to help them achieve the appearance they feel confident in.',
    image: '/images/dr-rohan-kapoor.png',
    fallback: '/images/doctor-about.jpg',
  },
  {
    name: 'Dr. Neha Sharma',
    role: 'Pediatric Dentistry',
    intro:
      'Dr. Sharma creates a calm, child-friendly environment to help young patients develop positive attitudes towards their dental health from an early age.',
    image: '/images/dr-neha-sharma.png',
    fallback: '/images/doctor-sarah.jpg',
  },
];

export default function Doctors({ onOpenBooking }) {
  return (
    <section id="team" className="py-16 lg:py-24" style={{ background: '#EAF5F1' }}>
      <div className="container-site">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p
            className="text-xs font-bold uppercase tracking-[0.16em] mb-3"
            style={{ color: '#247C78' }}
          >
            The People Behind Your Care
          </p>
          <h2
            className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4"
            style={{ color: '#123C3A', fontFamily: 'Manrope, sans-serif' }}
          >
            Meet Your Dental Care Team
          </h2>
          <p className="text-base leading-relaxed" style={{ color: '#667573' }}>
            Illustrative profiles for this portfolio demo. Names and roles are fictional.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {TEAM.map(({ name, role, intro, image, fallback }) => (
            <article
              key={name}
              className="flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{ background: 'white', borderColor: '#C8E8E0' }}
            >
              {/* Portrait */}
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: '4/3', background: '#EAF5F1' }}
              >
                <img
                  src={image}
                  alt={`${name}, ${role} — fictional demo profile`}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  onError={(e) => { e.currentTarget.src = fallback; }}
                />
                {/* Demo label */}
                <span
                  className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                  style={{ background: 'rgba(18,60,58,0.85)', color: '#9FD3C8' }}
                >
                  Demo Profile
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-6">
                <div className="mb-3">
                  <h3
                    className="text-lg font-bold leading-snug"
                    style={{ color: '#123C3A', fontFamily: 'Manrope, sans-serif' }}
                  >
                    {name}
                  </h3>
                  <p
                    className="text-xs font-semibold uppercase tracking-wider mt-0.5"
                    style={{ color: '#247C78' }}
                  >
                    {role}
                  </p>
                </div>

                <p
                  className="text-sm leading-relaxed flex-grow mb-5"
                  style={{ color: '#667573' }}
                >
                  {intro}
                </p>

                <button
                  onClick={onOpenBooking}
                  className="w-full py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 border-2 transition-all duration-200 hover:text-white"
                  style={{
                    color: '#247C78',
                    borderColor: '#247C78',
                    background: 'transparent',
                    fontFamily: 'Manrope, sans-serif',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#247C78';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#247C78';
                  }}
                  aria-label={`Book a consultation — enquiry form`}
                >
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  Book a Consultation
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

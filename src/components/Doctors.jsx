import React from 'react';
import { Star, Award, Calendar, GraduationCap, CheckCircle2 } from 'lucide-react';

const DOCTORS_DATA = [
  {
    name: 'Dr. Sarah Mitchell, DDS',
    title: 'Lead Cosmetic & Laser Specialist',
    experience: '14+ Years Exp.',
    education: 'UCLA School of Dentistry • AACD Fellow',
    specialties: ['Porcelain Veneers', 'Laser Whitening', 'Digital Smile Design'],
    rating: '4.98',
    reviews: '420+',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800',
    quote: 'My philosophy is zero-pain, ultra-natural aesthetics. Every smile should reflect your authentic personality.'
  },
  {
    name: 'Dr. Alex Rivera, DMD',
    title: 'Orthodontics & Invisalign Diamond Provider',
    experience: '11+ Years Exp.',
    experienceTag: 'Invisalign Elite',
    education: 'Harvard School of Dental Medicine',
    specialties: ['Invisalign Clear Aligners', 'Airway Orthodontics', 'Retainers'],
    rating: '4.95',
    reviews: '310+',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800',
    quote: 'Discreet alignment shouldn’t interfere with your daily life. Modern invisible aligners deliver speed and comfort.'
  },
  {
    name: 'Dr. Priya Patel, BDS, MS',
    title: 'Implantologist & Oral Surgeon',
    experience: '13+ Years Exp.',
    education: 'Columbia University College of Dental Medicine',
    specialties: ['3D Implantology', 'Full Arch Restorations', 'Sedation Care'],
    rating: '4.99',
    reviews: '380+',
    image: 'https://images.unsplash.com/photo-1594824813566-78a9327702f3?auto=format&fit=crop&q=80&w=800',
    quote: 'Restoring a permanent, strong bite gives patients back their confidence to eat, smile, and live without limits.'
  }
];

export default function Doctors({ onOpenBooking }) {
  return (
    <section id="doctors" className="py-16 lg:py-24 bg-gradient-to-b from-teal-50/40 via-slate-50 to-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-100 text-teal-800">
            <Award className="w-3.5 h-3.5" /> World-Class Specialists
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Meet Our Beverly Hills Dental Team
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Board-certified cosmetic dentists, orthodontists, and oral surgeons committed to gentle, pain-free dental perfection.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {DOCTORS_DATA.map((doc, i) => (
            <div 
              key={i}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-72 overflow-hidden bg-slate-100">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    {doc.experience}
                  </div>
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-slate-900 text-xs font-extrabold px-2.5 py-1 rounded-full shadow flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{doc.rating} ({doc.reviews})</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-teal-600 transition-colors">
                      {doc.name}
                    </h3>
                    <p className="text-xs font-bold text-teal-700 mt-0.5">{doc.title}</p>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <GraduationCap className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    <span>{doc.education}</span>
                  </div>

                  <p className="text-xs text-slate-600 italic bg-slate-50 p-3 rounded-xl border border-slate-100">
                    "{doc.quote}"
                  </p>

                  <div className="space-y-1.5">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Clinical Focus</div>
                    <div className="flex flex-wrap gap-1.5">
                      {doc.specialties.map((spec, idx) => (
                        <span key={idx} className="text-xs px-2.5 py-1 bg-teal-50 text-teal-800 font-semibold rounded-lg border border-teal-100">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-3 rounded-xl bg-slate-900 hover:bg-teal-600 text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" /> Book Consultation
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

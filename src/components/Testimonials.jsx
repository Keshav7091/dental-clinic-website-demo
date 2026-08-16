import React, { useState } from 'react';
import { Star, ShieldCheck, Quote, ThumbsUp } from 'lucide-react';

const REVIEWS_DATA = [
  {
    name: 'Emily Watson',
    treatment: 'Laser Teeth Whitening',
    location: 'Beverly Hills, CA',
    rating: 5,
    date: '2 weeks ago',
    comment: 'I was terrified of dentist appointments due to past tooth sensitivity. Dr. Sarah was incredible! The laser whitening took 45 minutes, ZERO pain, and my teeth look 8 shades brighter for my wedding!',
    verified: true
  },
  {
    name: 'Marcus Vance',
    treatment: 'Porcelain Veneers',
    location: 'Los Angeles, CA',
    rating: 5,
    date: '1 month ago',
    comment: 'AuraDental completely transformed my confidence. After chipping my front tooth, Dr. Sarah designed 4 custom veneers that look completely natural. Worth every single penny!',
    verified: true
  },
  {
    name: 'Samantha Reed',
    treatment: 'Invisalign Aligners',
    location: 'Santa Monica, CA',
    rating: 5,
    date: '3 weeks ago',
    comment: 'Dr. Alex Rivera made my Invisalign journey smooth and discreet. The 3D iTero scan was so cool—no messy impression goo. 8 months later my teeth are perfectly straight!',
    verified: true
  },
  {
    name: 'David Chen',
    treatment: '3D Dental Implant',
    location: 'Culver City, CA',
    rating: 5,
    date: '2 months ago',
    comment: 'Had an emergency broken tooth on a Saturday morning. They squeezed me in within 2 hours! Dr. Priya replaced it with a permanent implant. Pain-free procedure and super friendly staff.',
    verified: true
  }
];

export default function Testimonials() {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all'
    ? REVIEWS_DATA
    : REVIEWS_DATA.filter(r => r.treatment.toLowerCase().includes(filter));

  return (
    <section id="reviews" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-100 text-teal-800">
            <Star className="w-3.5 h-3.5 fill-teal-800" /> Patient Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Loved By 15,000+ Happy Patients
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Read authentic experiences from patients who achieved their dream smiles at AuraDental Studio.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex justify-center flex-wrap gap-2 mt-8 mb-10">
          {[
            { id: 'all', label: 'All Reviews (5.0 ★)' },
            { id: 'whitening', label: 'Teeth Whitening' },
            { id: 'veneers', label: 'Porcelain Veneers' },
            { id: 'invisalign', label: 'Invisalign' },
            { id: 'implant', label: 'Dental Implants' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === item.id
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Reviews Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((rev, idx) => (
            <div key={idx} className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-teal-200/60 pointer-events-none" />
              
              <div className="space-y-4">
                {/* Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs text-slate-400 font-medium ml-2">{rev.date}</span>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-200/70 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                    <span>{rev.name}</span>
                    {rev.verified && (
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-emerald-600" /> Verified Patient
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-teal-700 font-semibold mt-0.5">
                    {rev.treatment} • {rev.location}
                  </div>
                </div>

                <div className="flex items-center gap-1 text-xs text-slate-400">
                  <ThumbsUp className="w-3.5 h-3.5 text-teal-600" /> Helpful
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

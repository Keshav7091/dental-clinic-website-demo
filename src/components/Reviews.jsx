import React from 'react';
import { Star, ShieldCheck, Quote, ThumbsUp, Sparkles } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Sample Patient A',
    treatment: 'Teeth Whitening (Demo)',
    rating: 5,
    date: 'Sample Review',
    comment: 'The team made me feel completely comfortable. The laser whitening session was smooth and easy. Highly recommend their gentle approach!',
    badge: 'Sample Review'
  },
  {
    name: 'Demo Reviewer B',
    treatment: 'Porcelain Veneers (Demo)',
    rating: 5,
    date: 'Sample Review',
    comment: 'Great attention to detail and clear communication during the smile makeover consultation. The digital scan preview was very helpful.',
    badge: 'Sample Review'
  },
  {
    name: 'Concept Patient C',
    treatment: 'Invisalign Aligners (Demo)',
    rating: 5,
    date: 'Sample Review',
    comment: 'Clear aligners process was explained thoroughly. Very modern clinic setup and friendly care coordination.',
    badge: 'Sample Review'
  },
  {
    name: 'Example Patient D',
    treatment: 'Emergency Care (Demo)',
    rating: 5,
    date: 'Sample Review',
    comment: 'Quick response for urgent tooth pain. Professional staff and comfortable care environment.',
    badge: 'Sample Review'
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-14 lg:py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-100 text-teal-800">
            <Sparkles className="w-3.5 h-3.5" /> Sample Testimonials • Demo Content
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Patient Feedback Example
          </h2>
          <p className="text-slate-600 text-base">
            Illustrative testimonials demonstrating website testimonial layout and design.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {REVIEWS.map((rev, idx) => (
            <div key={idx} className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs relative flex flex-col justify-between">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-teal-200/40 pointer-events-none" />
              
              <div className="space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs text-slate-400 font-medium ml-2">{rev.date}</span>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-200/70 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                    <span>{rev.name}</span>
                    <span className="text-[10px] bg-teal-100 text-teal-800 font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-teal-600" /> {rev.badge}
                    </span>
                  </div>
                  <div className="text-xs text-teal-700 font-semibold mt-0.5">
                    {rev.treatment}
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

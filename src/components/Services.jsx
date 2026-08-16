import React from 'react';
import { Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    title: 'Laser Teeth Whitening',
    priceLabel: 'Sample Price: $299',
    tag: 'Comfort Session',
    description: 'In-office tooth whitening designed to brighten enamel safely with protective gel technology.',
    image: '/images/teeth-whitening.jpg'
  },
  {
    title: 'Porcelain Veneers',
    priceLabel: 'Sample Price: $850 / tooth',
    tag: 'Smile Makeover',
    description: 'Custom thin ceramic shells designed to improve teeth alignment, shape, and appearance.',
    image: '/images/porcelain-veneers.jpg'
  },
  {
    title: 'Invisalign® Clear Aligners',
    priceLabel: 'Sample Price: $2,400',
    tag: 'Invisible Orthodontics',
    description: 'Custom 3D printed removable aligner trays designed for gradual teeth alignment.',
    image: '/images/invisalign-aligners.jpg'
  },
  {
    title: '3D Dental Implants',
    priceLabel: 'Sample Price: $1,200 / tooth',
    tag: 'Restorative Care',
    description: 'Titanium post implant solutions designed to replace missing teeth with natural-looking crowns.',
    image: '/images/dental-implants.jpg'
  },
  {
    title: 'Comfort Root Canal Care',
    priceLabel: 'Sample Price: $650',
    tag: 'Urgent Care',
    description: 'Targeted root canal procedure focused on relieving discomfort and preserving tooth structure.',
    image: '/images/root-canal.jpg'
  },
  {
    title: 'Checkup & Hygiene Cleaning',
    priceLabel: 'Sample Price: $149',
    tag: 'Preventive Care',
    description: 'Plaque cleaning, 3D oral examination, and preventive oral health assessment.',
    image: '/images/teeth-cleaning.jpg'
  }
];

export default function Services({ onOpenBooking }) {
  const getWhatsappServiceUrl = (serviceName) => 
    `https://wa.me/15552345678?text=Hi%20Dr.%20Sarah,%20I%20am%20interested%20in%20learning%20more%20about%20${encodeURIComponent(serviceName)}.`;

  return (
    <section id="treatments" className="py-14 lg:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-100 text-teal-800">
            <Sparkles className="w-3.5 h-3.5" /> Sample Services & Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Dental Treatments & Care Overview
          </h2>
          <p className="text-slate-600 text-base">
            Sample treatment options available at AuraDental Studio. All prices listed are fictional demo estimates.
          </p>
        </div>

        {/* Treatments Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((s, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 bg-slate-100 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = '/images/clinic-hero.jpg';
                    }}
                  />
                  <div className="absolute top-3 right-3 bg-slate-900/90 text-white backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-extrabold shadow">
                    {s.priceLabel}
                  </div>
                </div>

                <div className="p-6 space-y-2.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md border border-teal-100">
                    {s.tag}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">{s.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{s.description}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="p-6 pt-0 flex gap-2">
                <a
                  href={getWhatsappServiceUrl(s.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                  aria-label={`WhatsApp Inquiry for ${s.title}`}
                >
                  <MessageCircle className="w-4 h-4 fill-emerald-600 text-white" /> WhatsApp
                </a>
                <button
                  onClick={() => onOpenBooking(s.title)}
                  className="flex-1 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-1"
                  aria-label={`Request consultation for ${s.title}`}
                >
                  <span>Request</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

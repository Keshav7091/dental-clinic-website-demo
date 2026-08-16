import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

const FAQ_ITEMS = [
  {
    question: 'Is dental treatment at AuraDental really 100% painless?',
    answer: 'Yes! We utilize computerized local anesthesia delivery systems (The Wand), topical numbing gels, soft-tissue laser dentistry, and optional Nitrous Oxide (laughing gas) or IV sedation. You will feel relaxed and comfortable throughout.'
  },
  {
    question: 'How long does laser teeth whitening last?',
    answer: 'Results typically last 12 to 24 months depending on diet (coffee, red wine) and oral hygiene. We provide a custom take-home whitening tray and gel to maintain your bright shade effortlessly.'
  },
  {
    question: 'Do you accept dental insurance or offer financing?',
    answer: 'We accept most major PPO dental insurance plans (Delta Dental, Cigna, MetLife, Guardian, Aetna). For out-of-pocket costs, we offer 0% interest monthly payment options through CareCredit & Sunbit.'
  },
  {
    question: 'What should I do in case of a sudden dental emergency?',
    answer: 'Call our emergency hotline at (555) 234-5678 immediately. We reserve daily emergency appointment slots for toothaches, knocked-out teeth, or broken crowns with same-day pain relief.'
  },
  {
    question: 'How does the initial consultation work?',
    answer: 'During your 45-minute initial consultation, we take 3D digital oral scans, perform a comprehensive oral health exam, discuss your aesthetic goals, and present a custom treatment plan with transparent costs.'
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-100 text-teal-800">
            <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Have Questions? We Have Answers.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Everything you need to know about our painless treatments, insurance coverage, and booking process.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-5 text-left font-bold text-slate-900 text-base sm:text-lg flex justify-between items-center gap-4 hover:text-teal-600 transition-colors"
                >
                  <span>{item.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 mt-1 pt-3 animate-fadeIn">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

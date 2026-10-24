import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ_ITEMS = [
  {
    q: 'How can I request an appointment?',
    a: 'You can request an appointment using the enquiry form on this website. Fill in your name, contact details, preferred date, and the service you\'re interested in. Our team will follow up to confirm availability.',
  },
  {
    q: 'What should I bring to my first visit?',
    a: 'For your first visit, it helps to bring any previous dental records or X-rays if you have them, along with a list of any medications you currently take. Arriving a few minutes early also helps us complete a brief registration form.',
  },
  {
    q: 'How often should I schedule a dental checkup?',
    a: 'Most dental professionals recommend a routine checkup every six months. However, the right frequency for you depends on your individual oral health. Your dentist can advise on the most suitable schedule during your visit.',
  },
  {
    q: 'Can I ask about treatment options before visiting?',
    a: 'Absolutely. You\'re welcome to contact us with any preliminary questions. Please note that a proper assessment and personalised recommendations can only be made following an in-clinic examination.',
  },
  {
    q: 'Is this a real clinic I can visit?',
    a: 'No. Ivory Dental Studio is a fictional brand created for a freelance portfolio demonstration. It does not represent a real clinic. Contact details on this site are placeholders only.',
  },
  {
    q: 'How can I contact the clinic?',
    a: 'You can reach us through the contact section of this site. Phone and email links will be active once the demo is configured with real clinic details.',
  },
];

export default function Faq() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (idx) => setOpenIdx(openIdx === idx ? null : idx);

  return (
    <section id="faq" className="py-16 lg:py-24" style={{ background: '#EAF5F1' }}>
      <div className="container-site max-w-3xl">

        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-xs font-bold uppercase tracking-[0.16em] mb-3"
            style={{ color: '#247C78' }}
          >
            FAQs
          </p>
          <h2
            className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4"
            style={{ color: '#123C3A', fontFamily: 'Manrope, sans-serif' }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-base leading-relaxed" style={{ color: '#667573' }}>
            General information about visiting Ivory Dental Studio and how to get in touch.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQ_ITEMS.map(({ q, a }, idx) => {
            const isOpen = openIdx === idx;
            const headerId = `faq-head-${idx}`;
            const panelId = `faq-panel-${idx}`;
            return (
              <div
                key={idx}
                className="rounded-2xl border overflow-hidden"
                style={{ background: 'white', borderColor: isOpen ? '#247C78' : '#C8E8E0' }}
              >
                <h3>
                  <button
                    id={headerId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between text-left px-6 py-4 gap-4 transition-colors duration-200"
                    style={{
                      color: isOpen ? '#247C78' : '#202D2C',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <span
                      className="text-sm sm:text-base font-semibold leading-snug"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      {q}
                    </span>
                    <ChevronDown
                      className="w-5 h-5 flex-shrink-0 transition-transform duration-300"
                      style={{
                        color: '#247C78',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={headerId}
                    className="px-6 pb-5 pt-1 animate-fadeIn"
                  >
                    <p className="text-sm leading-relaxed" style={{ color: '#667573' }}>
                      {a}
                    </p>
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

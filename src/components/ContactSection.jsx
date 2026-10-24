import React from 'react';
import { MapPin, Phone, Mail, Clock, AlertCircle } from 'lucide-react';
import CLINIC_CONFIG from '../config';

export default function ContactSection() {
  const { phone, phoneDisplay, email, emailDisplay, address, hours, mapEmbedUrl } = CLINIC_CONFIG;

  return (
    <section id="contact" className="py-16 lg:py-24" style={{ background: '#123C3A' }}>
      <div className="container-site">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p
            className="text-xs font-bold uppercase tracking-[0.16em] mb-3"
            style={{ color: '#9FD3C8' }}
          >
            Get in Touch
          </p>
          <h2
            className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4 text-white"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Visit Our Clinic
          </h2>
          <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Use the details below to plan your visit or send an enquiry. All contact
            information shown here is a placeholder for this portfolio demo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Left: Contact details */}
          <div className="space-y-5">

            {/* Address */}
            <div
              className="flex items-start gap-4 p-5 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(36,124,120,0.3)' }}
              >
                <MapPin className="w-5 h-5" style={{ color: '#9FD3C8' }} aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: '#9FD3C8' }}>
                  Address (Placeholder)
                </p>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  {address}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div
              className="flex items-start gap-4 p-5 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(36,124,120,0.3)' }}
              >
                <Phone className="w-5 h-5" style={{ color: '#9FD3C8' }} aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: '#9FD3C8' }}>
                  Phone (Placeholder)
                </p>
                {phone ? (
                  <a
                    href={`tel:${phone}`}
                    className="text-sm hover:underline"
                    style={{ color: 'rgba(255,255,255,0.8)' }}
                  >
                    {phoneDisplay}
                  </a>
                ) : (
                  <span className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    {phoneDisplay}
                  </span>
                )}
              </div>
            </div>

            {/* Email */}
            <div
              className="flex items-start gap-4 p-5 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(36,124,120,0.3)' }}
              >
                <Mail className="w-5 h-5" style={{ color: '#9FD3C8' }} aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: '#9FD3C8' }}>
                  Email (Placeholder)
                </p>
                {email ? (
                  <a
                    href={`mailto:${email}`}
                    className="text-sm hover:underline"
                    style={{ color: 'rgba(255,255,255,0.8)' }}
                  >
                    {emailDisplay}
                  </a>
                ) : (
                  <span className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    {emailDisplay}
                  </span>
                )}
              </div>
            </div>

            {/* Hours */}
            <div
              className="p-5 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(36,124,120,0.3)' }}
                >
                  <Clock className="w-5 h-5" style={{ color: '#9FD3C8' }} aria-hidden="true" />
                </div>
                <p className="text-xs font-bold uppercase tracking-wider" style={{ color: '#9FD3C8' }}>
                  Opening Hours (Placeholder)
                </p>
              </div>
              <dl className="space-y-1.5 ml-1">
                {hours.map(({ days, time }) => (
                  <div key={days} className="flex justify-between text-sm gap-4">
                    <dt style={{ color: 'rgba(255,255,255,0.6)' }}>{days}</dt>
                    <dd className="font-semibold" style={{ color: 'rgba(255,255,255,0.85)' }}>{time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Right: Map placeholder */}
          <div>
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                height: '380px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              {mapEmbedUrl ? (
                <iframe
                  src={mapEmbedUrl}
                  title="Clinic location map"
                  className="w-full h-full"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 'none' }}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-8 text-center">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ background: 'rgba(36,124,120,0.25)' }}
                  >
                    <MapPin className="w-7 h-7" style={{ color: '#9FD3C8' }} aria-hidden="true" />
                  </div>
                  <div>
                    <p
                      className="font-bold text-base mb-2"
                      style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'Manrope, sans-serif' }}
                    >
                      Map Placeholder
                    </p>
                    <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      Replace <code className="text-xs" style={{ color: '#9FD3C8' }}>mapEmbedUrl</code> in{' '}
                      <code className="text-xs" style={{ color: '#9FD3C8' }}>src/config.js</code>{' '}
                      with a Google Maps embed URL to display the clinic location.
                    </p>
                  </div>
                  <div
                    className="flex items-center gap-2 text-xs px-3 py-2 rounded-lg"
                    style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.5)' }}
                  >
                    <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                    Portfolio demo — no real address configured
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

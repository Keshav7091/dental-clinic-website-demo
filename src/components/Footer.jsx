import React from 'react';
import { Calendar, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import CLINIC_CONFIG from '../config';

const QUICK_LINKS = [
  { label: 'Home',       href: '#home' },
  { label: 'Services',   href: '#services' },
  { label: 'Our Team',   href: '#team' },
  { label: 'About',      href: '#about' },
  { label: 'Contact',    href: '#contact' },
  { label: 'FAQs',       href: '#faq' },
];

const SERVICES_LINKS = [
  'General Dentistry',
  'Teeth Cleaning',
  'Cosmetic Dentistry',
  'Root Canal Treatment',
  'Braces & Alignment',
  'Pediatric Dentistry',
];

function scrollTo(href) {
  const el = document.querySelector(href);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 76;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

export default function Footer({ onOpenBooking, onOpenDoctorPortal }) {
  const { phone, phoneDisplay, email, emailDisplay, address, social } = CLINIC_CONFIG;

  return (
    <footer style={{ background: '#091F1E', color: 'rgba(255,255,255,0.6)' }}>

      {/* CTA Strip */}
      <div
        className="border-b"
        style={{ borderColor: 'rgba(255,255,255,0.07)', background: '#0E3230' }}
      >
        <div className="container-site py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3
              className="text-xl sm:text-2xl font-extrabold text-white mb-1"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Ready to Book Your Visit?
            </h3>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Fill in our enquiry form and we'll get back to you promptly.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white transition-all duration-200 hover:opacity-90 shadow-md flex-shrink-0"
            style={{
              background: 'linear-gradient(135deg, #247C78 0%, #123C3A 100%)',
              fontFamily: 'Manrope, sans-serif',
            }}
            aria-label="Book an appointment"
          >
            <Calendar className="w-4 h-4" aria-hidden="true" />
            Book Appointment
          </button>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="container-site py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="space-y-4 sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2.5">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-lg font-bold"
              style={{ background: 'linear-gradient(135deg, #247C78 0%, #154A47 100%)' }}
            >
              🦷
            </div>
            <div className="leading-tight">
              <span
                className="text-base font-extrabold text-white tracking-tight"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Ivory <span style={{ color: '#70BBAD' }}>Dental</span>
              </span>
              <span
                className="block text-[9px] font-semibold uppercase tracking-widest"
                style={{ color: '#667573' }}
              >
                Studio
              </span>
            </div>
          </div>
          <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Ivory Dental Studio is a fictional brand created for a freelance
            portfolio demonstration. All clinic details are placeholders.
          </p>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
            © {new Date().getFullYear()} Ivory Dental Studio Demo.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4
            className="text-xs font-bold uppercase tracking-wider mb-4 text-white"
          >
            Navigation
          </h4>
          <ul className="space-y-2.5">
            {QUICK_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => { e.preventDefault(); scrollTo(href); }}
                  className="text-xs transition-colors duration-200 hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.5)' }}
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="pt-1.5">
              <button
                onClick={onOpenDoctorPortal}
                className="text-xs font-semibold text-teal-400 hover:text-teal-200 transition-colors flex items-center gap-1.5"
              >
                <span>👨‍⚕️</span> Doctor Portal
              </button>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider mb-4 text-white">
            Services
          </h4>
          <ul className="space-y-2.5">
            {SERVICES_LINKS.map((s) => (
              <li key={s}>
                <a
                  href="#services"
                  onClick={(e) => { e.preventDefault(); scrollTo('#services'); }}
                  className="text-xs transition-colors duration-200 hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.5)' }}
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider mb-4 text-white">
            Contact
          </h4>
          <ul className="space-y-3.5">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: '#70BBAD' }} aria-hidden="true" />
              <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {address}
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#70BBAD' }} aria-hidden="true" />
              {phone ? (
                <a
                  href={`tel:${phone}`}
                  className="text-xs hover:text-white transition-colors"
                  style={{ color: 'rgba(255,255,255,0.5)' }}
                >
                  {phoneDisplay}
                </a>
              ) : (
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  {phoneDisplay}
                </span>
              )}
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#70BBAD' }} aria-hidden="true" />
              {email ? (
                <a
                  href={`mailto:${email}`}
                  className="text-xs hover:text-white transition-colors"
                  style={{ color: 'rgba(255,255,255,0.5)' }}
                >
                  {emailDisplay}
                </a>
              ) : (
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  {emailDisplay}
                </span>
              )}
            </li>
          </ul>

          {/* Social — only rendered if configured */}
          {(social?.instagram || social?.facebook || social?.twitter) && (
            <div className="mt-5 flex gap-3">
              {social.instagram && (
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-xs hover:text-white transition-colors"
                  style={{ color: 'rgba(255,255,255,0.45)' }}
                >
                  Instagram
                </a>
              )}
              {social.facebook && (
                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-xs hover:text-white transition-colors"
                  style={{ color: 'rgba(255,255,255,0.45)' }}
                >
                  Facebook
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: 'rgba(255,255,255,0.06)' }}
      >
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-[11px]" style={{ color: 'rgba(255,255,255,0.3)' }}>
            This website is a portfolio demonstration. All clinic names, profiles, and
            contact details are fictional. Do not attempt to contact the clinic using
            the placeholder information shown.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1.5 text-[11px] font-semibold flex-shrink-0 transition-colors duration-200 hover:text-white"
            style={{ color: 'rgba(255,255,255,0.4)', background: 'none', border: 'none', cursor: 'pointer' }}
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}

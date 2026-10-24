import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home',       href: '#home' },
  { label: 'Services',   href: '#services' },
  { label: 'Our Team',   href: '#team' },
  { label: 'About',      href: '#about' },
  { label: 'Contact',    href: '#contact' },
];

export default function Navbar({ onOpenBooking, onOpenDoctorPortal }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 76;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/96 backdrop-blur-md shadow-sm border-b border-teal-100'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="container-site">
        <div className="flex items-center justify-between h-[76px]">

          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group focus-visible:outline-none"
            aria-label="Ivory Dental Studio — Go to top"
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-lg font-bold flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #123C3A 0%, #247C78 100%)' }}
              aria-hidden="true"
            >
              🦷
            </div>
            <div className="leading-tight">
              <span
                className="text-[1.1rem] font-extrabold tracking-tight"
                style={{ fontFamily: 'Manrope, sans-serif', color: '#123C3A' }}
              >
                Ivory{' '}
                <span style={{ color: '#247C78' }}>Dental</span>
              </span>
              <span
                className="block text-[9px] font-semibold uppercase tracking-widest"
                style={{ color: '#667573', marginTop: '-2px' }}
              >
                Studio
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Primary navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-semibold transition-colors duration-200 hover:text-teal-600"
                style={{ color: '#202D2C', fontFamily: 'Inter, sans-serif' }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onOpenDoctorPortal}
              className="hidden lg:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all duration-200 border"
              style={{
                background: '#EAF5F1',
                borderColor: '#C8E8E0',
                color: '#123C3A',
              }}
              title="Doctor Portal"
            >
              <span>👨‍⚕️</span> Doctor Portal
            </button>

            <button
              onClick={onOpenBooking}
              className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl text-white text-sm font-bold transition-all duration-200 hover:opacity-90 hover:-translate-y-px shadow-md"
              style={{
                background: 'linear-gradient(135deg, #123C3A 0%, #247C78 100%)',
                fontFamily: 'Manrope, sans-serif',
              }}
              aria-label="Book an appointment"
            >
              <Calendar className="w-4 h-4" aria-hidden="true" />
              Book Appointment
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-200"
              style={{ color: '#123C3A' }}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t animate-slideDown"
          style={{
            borderColor: '#EAF5F1',
            background: 'white',
          }}
        >
          <nav className="container-site py-4 space-y-1" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-200 hover:bg-teal-50"
                style={{ color: '#202D2C', fontFamily: 'Inter, sans-serif' }}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 pb-1 space-y-2">
              <button
                onClick={() => { setMobileOpen(false); onOpenBooking(); }}
                className="w-full py-3 rounded-xl text-white text-sm font-bold flex items-center justify-center gap-2 shadow-md"
                style={{ background: 'linear-gradient(135deg, #123C3A 0%, #247C78 100%)' }}
                aria-label="Book an appointment"
              >
                <Calendar className="w-4 h-4" aria-hidden="true" />
                Book Appointment
              </button>

              <button
                onClick={() => { setMobileOpen(false); onOpenDoctorPortal(); }}
                className="w-full py-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-2"
                style={{
                  background: '#EAF5F1',
                  borderColor: '#C8E8E0',
                  color: '#123C3A',
                }}
              >
                <span>👨‍⚕️</span> Doctor Appointment Portal
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

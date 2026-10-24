import React, { useState, useRef, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, ArrowLeft, ShieldCheck, AlertCircle, Clock } from 'lucide-react';
import CLINIC_CONFIG from '../config';
import { saveAppointment } from '../utils/appointmentStorage';

const SERVICES_LIST = [
  'General Dentistry',
  'Teeth Cleaning',
  'Cosmetic Dentistry',
  'Root Canal Treatment',
  'Braces & Alignment',
  'Pediatric Dentistry',
  'Other / Not Sure',
];

const TIME_OPTIONS = [
  '09:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '02:00 PM', '03:00 PM',
  '04:00 PM', '05:00 PM', '06:00 PM',
];

const getTomorrow = () => {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split('T')[0];
};

const TODAY = new Date().toISOString().split('T')[0];

function FieldError({ message }) {
  if (!message) return null;
  return (
    <p role="alert" className="text-xs mt-1 font-medium" style={{ color: '#DC2626' }}>
      {message}
    </p>
  );
}

/**
 * AppointmentModal — Real appointment enquiry form.
 * Dispatches full booking details & exact booking timestamp to clinic email.
 */
export default function AppointmentModal({ isOpen, onClose, initialService = '' }) {
  const [step, setStep] = useState(1);

  // Step 1 fields
  const [service, setService] = useState('');
  const [prefDate, setPrefDate] = useState(getTomorrow());
  const [prefTime, setPrefTime] = useState('10:00 AM');

  // Step 2 fields
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);

  // Errors & submission state
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [demoRef, setDemoRef] = useState('');
  const [bookingTime, setBookingTime] = useState('');

  const modalRef = useRef(null);
  const firstFocusRef = useRef(null);

  const recipientEmail = CLINIC_CONFIG.appointmentNotification?.recipientEmail || 'keshavk1002003@gmail.com';

  // Sync initial service
  useEffect(() => {
    if (isOpen) {
      setService(initialService || SERVICES_LIST[0]);
      setStep(1);
      setErrors({});
      setSubmitted(false);
      setFullName(''); setPhone(''); setEmail('');
      setMessage(''); setConsent(false);
      setBookingTime('');
    }
  }, [isOpen, initialService]);

  // Trap focus
  useEffect(() => {
    if (isOpen && firstFocusRef.current) {
      firstFocusRef.current.focus();
    }
  }, [isOpen, step]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // --- Validation ---
  const validateStep1 = () => {
    const e = {};
    if (!service) e.service = 'Please select a service.';
    if (!prefDate) e.prefDate = 'Please choose a preferred date.';
    return e;
  };

  const validateStep2 = () => {
    const e = {};
    if (!fullName.trim()) e.fullName = 'Full name is required.';
    if (!phone.trim()) {
      e.phone = 'Phone number is required.';
    } else if (!/^[\d\s+\-()]{7,15}$/.test(phone.trim())) {
      e.phone = 'Please enter a valid phone number.';
    }
    if (!email.trim()) {
      e.email = 'Email is required so Dr. Keshav can send your appointment confirmation.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      e.email = 'Please enter a valid email address.';
    }
    if (!consent) e.consent = 'Please accept the privacy notice to continue.';
    return e;
  };

  const handleNext = () => {
    const errs = validateStep1();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStep(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validateStep2();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setSubmitting(true);

    const ref = 'IDS-' + Math.floor(100000 + Math.random() * 900000);
    const now = new Date();
    const formattedBookingTime = now.toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'medium',
    });

    // Save locally for Doctor Portal
    saveAppointment({
      ref,
      fullName: fullName.trim(),
      phone: phone.trim(),
      email: email.trim(),
      service,
      prefDate,
      prefTime,
      message: message.trim(),
      submittedAt: formattedBookingTime,
      status: 'pending',
    });

    // Generate direct Doctor Action links that Dr. Keshav can click inside his Gmail
    const origin = window.location.origin;
    const confirmUrl = `${origin}?action=confirm&ref=${ref}&name=${encodeURIComponent(fullName)}&email=${encodeURIComponent(email)}&service=${encodeURIComponent(service)}&date=${encodeURIComponent(prefDate)}&time=${encodeURIComponent(prefTime)}&phone=${encodeURIComponent(phone)}`;
    const rejectUrl = `${origin}?action=reject&ref=${ref}&name=${encodeURIComponent(fullName)}&email=${encodeURIComponent(email)}&service=${encodeURIComponent(service)}&date=${encodeURIComponent(prefDate)}&time=${encodeURIComponent(prefTime)}&phone=${encodeURIComponent(phone)}`;
    const doctorPortalUrl = `${origin}#doctor`;

    try {
      const provider = CLINIC_CONFIG.appointmentNotification?.provider || 'formsubmit';
      const web3Key = CLINIC_CONFIG.appointmentNotification?.web3formsAccessKey;

      if (provider === 'web3forms' && web3Key) {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: web3Key,
            subject: `New Patient Booking: ${fullName} - ${prefDate} (${prefTime})`,
            from_name: 'Ivory Dental Clinic Website',
            'Booking Reference': ref,
            'Patient Name': fullName,
            'Phone Number': phone,
            'Patient Email': email,
            'Service Requested': service,
            'Preferred Appointment Date': prefDate,
            'Preferred Time Slot': prefTime,
            'Additional Notes': message || 'None',
            'Booked At (Time)': formattedBookingTime,
            '⚡ CONFIRM APPOINTMENT': confirmUrl,
            '❌ REJECT APPOINTMENT': rejectUrl,
            '👨‍⚕️ DOCTOR DASHBOARD': doctorPortalUrl,
          }),
        });

        const data = await response.json().catch(() => ({}));
        if (!response.ok || data.success === false) {
          throw new Error(data.message || 'Failed to submit appointment to Web3Forms');
        }
      } else {
        // FormSubmit AJAX API — Sends directly to Dr. Keshav (keshavk1002003@gmail.com)
        const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            _subject: `New Patient Booking: ${fullName} - ${prefDate} (${prefTime})`,
            _template: 'table',
            _captcha: 'false',
            'Booking Reference': ref,
            'Patient Name': fullName,
            'Phone Number': phone,
            'Patient Email': email,
            'Service Requested': service,
            'Preferred Appointment Date': prefDate,
            'Preferred Time Slot': prefTime,
            'Patient Notes': message || 'None',
            'Booked At': formattedBookingTime,
            '⚡ CONFIRM APPOINTMENT (Click to Send Email to Patient)': confirmUrl,
            '❌ REJECT APPOINTMENT (Click to Notify Patient)': rejectUrl,
            '👨‍⚕️ DOCTOR PORTAL': doctorPortalUrl,
          }),
        });

        const data = await response.json().catch(() => ({}));
        if (!response.ok && data.success !== 'true' && data.success !== true) {
          throw new Error(data.message || 'Failed to submit appointment request');
        }
      }

      setDemoRef(ref);
      setBookingTime(formattedBookingTime);
      setSubmitted(true);
    } catch (err) {
      console.error('Email sending error:', err);
      setErrors({
        submit: 'Could not send the email notification automatically. Please check your connection or contact us directly.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(18,60,58,0.6)', backdropFilter: 'blur(6px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl flex flex-col animate-fadeIn max-h-[92vh]"
        style={{ background: 'white' }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-5"
          style={{ background: '#123C3A', color: 'white' }}
        >
          <div>
            {!submitted && (
              <p className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: '#9FD3C8' }}>
                Step {step} of 2 · Appointment Request
              </p>
            )}
            <h2
              id="modal-title"
              className="text-lg font-extrabold"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              {submitted ? 'Appointment Request Confirmed' : "Let's Plan Your Next Visit"}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close appointment form"
            className="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200"
            style={{ background: 'rgba(255,255,255,0.15)', color: 'white' }}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Progress bar */}
        {!submitted && (
          <div className="h-1" style={{ background: '#EAF5F1' }}>
            <div
              className="h-full transition-all duration-400"
              style={{ width: `${(step / 2) * 100}%`, background: '#247C78' }}
            />
          </div>
        )}

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-6">

          {/* SUCCESS STATE */}
          {submitted && (
            <div className="text-center space-y-5 py-3 animate-fadeIn">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                style={{ background: '#EAF5F1' }}
              >
                <CheckCircle2 className="w-9 h-9" style={{ color: '#247C78' }} />
              </div>

              <div>
                <span
                  className="inline-block text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2"
                  style={{ background: '#EAF5F1', color: '#247C78' }}
                >
                  Reference: {demoRef}
                </span>
                <h3
                  className="text-xl font-extrabold mb-2"
                  style={{ color: '#123C3A', fontFamily: 'Manrope, sans-serif' }}
                >
                  Appointment Request Sent to Dr. Keshav!
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#667573' }}>
                  Your appointment booking details and exact timestamp have been delivered to Dr. Keshav at{' '}
                  <strong className="text-neutral-800">{recipientEmail}</strong>. Once Dr. Keshav confirms your slot, an official confirmation email will be sent directly to <strong className="text-neutral-800">{email}</strong>.
                </p>
              </div>

              <div
                className="p-4 rounded-xl border text-left text-sm space-y-2.5"
                style={{ background: '#FAF9F6', borderColor: '#EAF5F1' }}
              >
                <div className="flex justify-between">
                  <span style={{ color: '#667573' }}>Service:</span>
                  <span className="font-semibold" style={{ color: '#123C3A' }}>{service}</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: '#667573' }}>Preferred Date:</span>
                  <span className="font-semibold" style={{ color: '#123C3A' }}>{prefDate}</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: '#667573' }}>Preferred Time:</span>
                  <span className="font-semibold" style={{ color: '#123C3A' }}>{prefTime}</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: '#667573' }}>Patient Name:</span>
                  <span className="font-semibold" style={{ color: '#123C3A' }}>{fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: '#667573' }}>Phone:</span>
                  <span className="font-semibold" style={{ color: '#123C3A' }}>{phone}</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: '#667573' }}>Confirmation Email:</span>
                  <span className="font-semibold text-xs font-mono" style={{ color: '#247C78' }}>{email}</span>
                </div>
                {bookingTime && (
                  <div className="flex justify-between pt-2 border-t border-dashed" style={{ borderColor: '#E2E8F0' }}>
                    <span className="flex items-center gap-1.5" style={{ color: '#667573' }}>
                      <Clock className="w-3.5 h-3.5" /> Booked At:
                    </span>
                    <span className="font-semibold text-xs" style={{ color: '#247C78' }}>{bookingTime}</span>
                  </div>
                )}
              </div>

              <button
                onClick={onClose}
                className="w-full py-3 rounded-xl font-bold text-sm text-white transition-all duration-200 hover:opacity-90 shadow-md"
                style={{ background: '#123C3A', fontFamily: 'Manrope, sans-serif' }}
              >
                Close & Return to Site
              </button>
            </div>
          )}

          {/* STEP 1 */}
          {!submitted && step === 1 && (
            <div className="space-y-5 animate-fadeIn">
              {/* Service */}
              <div>
                <label
                  htmlFor="modal-service"
                  className="block text-xs font-bold uppercase tracking-wider mb-1.5"
                  style={{ color: '#202D2C' }}
                >
                  Preferred Service <span aria-hidden="true">*</span>
                </label>
                <select
                  id="modal-service"
                  ref={firstFocusRef}
                  value={service}
                  onChange={(e) => { setService(e.target.value); setErrors((p) => ({ ...p, service: '' })); }}
                  className="w-full p-3 rounded-xl border text-sm font-medium transition-colors duration-200"
                  style={{
                    borderColor: errors.service ? '#DC2626' : '#C8E8E0',
                    background: '#FAF9F6',
                    color: '#202D2C',
                  }}
                  aria-required="true"
                  aria-invalid={!!errors.service}
                  aria-describedby={errors.service ? 'err-service' : undefined}
                >
                  <option value="">Select a service…</option>
                  {SERVICES_LIST.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <FieldError message={errors.service} />
              </div>

              {/* Date */}
              <div>
                <label
                  htmlFor="modal-date"
                  className="block text-xs font-bold uppercase tracking-wider mb-1.5"
                  style={{ color: '#202D2C' }}
                >
                  Preferred Date <span aria-hidden="true">*</span>
                </label>
                <input
                  id="modal-date"
                  type="date"
                  value={prefDate}
                  min={TODAY}
                  onChange={(e) => { setPrefDate(e.target.value); setErrors((p) => ({ ...p, prefDate: '' })); }}
                  className="w-full p-3 rounded-xl border text-sm font-medium"
                  style={{
                    borderColor: errors.prefDate ? '#DC2626' : '#C8E8E0',
                    background: '#FAF9F6',
                    color: '#202D2C',
                  }}
                  aria-required="true"
                  aria-invalid={!!errors.prefDate}
                />
                <FieldError message={errors.prefDate} />
              </div>

              {/* Time */}
              <div>
                <label
                  htmlFor="modal-time"
                  className="block text-xs font-bold uppercase tracking-wider mb-1.5"
                  style={{ color: '#202D2C' }}
                >
                  Preferred Time
                </label>
                <select
                  id="modal-time"
                  value={prefTime}
                  onChange={(e) => setPrefTime(e.target.value)}
                  className="w-full p-3 rounded-xl border text-sm font-medium"
                  style={{ borderColor: '#C8E8E0', background: '#FAF9F6', color: '#202D2C' }}
                >
                  {TIME_OPTIONS.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              {/* Notification notice */}
              <div
                className="flex items-center gap-2.5 p-3 rounded-xl text-xs font-medium"
                style={{ background: '#EAF5F1', color: '#247C78' }}
              >
                <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                <span>Your appointment details will be securely sent to our team ({recipientEmail}).</span>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {!submitted && step === 2 && (
            <form id="appointment-form" onSubmit={handleSubmit} noValidate className="space-y-4 animate-fadeIn">

              {/* Full Name */}
              <div>
                <label
                  htmlFor="modal-fullname"
                  className="block text-xs font-bold uppercase tracking-wider mb-1.5"
                  style={{ color: '#202D2C' }}
                >
                  Full Name <span aria-hidden="true">*</span>
                </label>
                <input
                  id="modal-fullname"
                  ref={firstFocusRef}
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Your full name"
                  value={fullName}
                  onChange={(e) => { setFullName(e.target.value); setErrors((p) => ({ ...p, fullName: '' })); }}
                  className="w-full p-3 rounded-xl border text-sm"
                  style={{
                    borderColor: errors.fullName ? '#DC2626' : '#C8E8E0',
                    background: '#FAF9F6',
                    color: '#202D2C',
                  }}
                  aria-required="true"
                  aria-invalid={!!errors.fullName}
                />
                <FieldError message={errors.fullName} />
              </div>

              {/* Phone + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="modal-phone"
                    className="block text-xs font-bold uppercase tracking-wider mb-1.5"
                    style={{ color: '#202D2C' }}
                  >
                    Phone <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="modal-phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    value={phone}
                    onChange={(e) => { setPhone(e.target.value); setErrors((p) => ({ ...p, phone: '' })); }}
                    className="w-full p-3 rounded-xl border text-sm"
                    style={{
                      borderColor: errors.phone ? '#DC2626' : '#C8E8E0',
                      background: '#FAF9F6',
                      color: '#202D2C',
                    }}
                    aria-required="true"
                    aria-invalid={!!errors.phone}
                  />
                  <FieldError message={errors.phone} />
                </div>

                <div>
                  <label
                    htmlFor="modal-email"
                    className="block text-xs font-bold uppercase tracking-wider mb-1.5"
                    style={{ color: '#202D2C' }}
                  >
                    Patient Email <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="name@example.com (for confirmation)"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: '' })); }}
                    className="w-full p-3 rounded-xl border text-sm"
                    style={{
                      borderColor: errors.email ? '#DC2626' : '#C8E8E0',
                      background: '#FAF9F6',
                      color: '#202D2C',
                    }}
                    aria-required="true"
                    aria-invalid={!!errors.email}
                  />
                  <FieldError message={errors.email} />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="modal-message"
                  className="block text-xs font-bold uppercase tracking-wider mb-1.5"
                  style={{ color: '#202D2C' }}
                >
                  Additional Notes <span className="font-normal" style={{ color: '#667573' }}>(optional)</span>
                </label>
                <textarea
                  id="modal-message"
                  rows={3}
                  placeholder="Any specific concerns or questions…"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 rounded-xl border text-sm resize-none"
                  style={{ borderColor: '#C8E8E0', background: '#FAF9F6', color: '#202D2C' }}
                />
              </div>

              {/* Consent */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    id="modal-consent"
                    checked={consent}
                    onChange={(e) => { setConsent(e.target.checked); setErrors((p) => ({ ...p, consent: '', submit: '' })); }}
                    className="mt-0.5 flex-shrink-0"
                    aria-required="true"
                    aria-invalid={!!errors.consent}
                    style={{ accentColor: '#247C78' }}
                  />
                  <span className="text-xs leading-relaxed" style={{ color: '#667573' }}>
                    I agree to share these details for appointment scheduling and confirmation.
                  </span>
                </label>
                <FieldError message={errors.consent} />
              </div>

              {/* Submit Error Banner */}
              {errors.submit && (
                <div
                  className="flex items-start gap-2.5 p-3 rounded-xl text-xs font-medium text-red-700 bg-red-50 border border-red-200"
                  role="alert"
                >
                  <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-red-600" />
                  <span>{errors.submit}</span>
                </div>
              )}
            </form>
          )}
        </div>

        {/* Footer Controls */}
        {!submitted && (
          <div
            className="flex items-center justify-between gap-3 px-6 py-4 border-t"
            style={{ borderColor: '#EAF5F1', background: '#FAF9F6' }}
          >
            {step > 1 ? (
              <button
                type="button"
                onClick={() => { setStep(1); setErrors({}); }}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl border text-sm font-semibold transition-colors duration-200 hover:bg-white"
                style={{ borderColor: '#C8E8E0', color: '#667573', background: 'transparent' }}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back
              </button>
            ) : <div />}

            {step === 1 ? (
              <button
                type="button"
                onClick={handleNext}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:opacity-90 shadow-md"
                style={{ background: '#247C78', fontFamily: 'Manrope, sans-serif' }}
              >
                Continue
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                type="submit"
                form="appointment-form"
                disabled={submitting}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:opacity-90 shadow-md disabled:opacity-60"
                style={{ background: '#123C3A', fontFamily: 'Manrope, sans-serif' }}
                aria-busy={submitting}
              >
                {submitting ? (
                  <>
                    <span
                      className="w-3.5 h-3.5 rounded-full border-2 border-white border-t-transparent animate-spin"
                      aria-hidden="true"
                    />
                    Sending Details…
                  </>
                ) : (
                  <>
                    Confirm & Send Booking
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

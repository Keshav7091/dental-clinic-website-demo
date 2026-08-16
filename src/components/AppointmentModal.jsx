import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react';

const DOCTORS_LIST = [
  { id: 'sarah', name: 'Dr. Sarah Mitchell, DDS', title: 'Lead Dentist (Sample Profile)' },
  { id: 'any', name: 'First Available Associate', title: 'Sample Clinic Schedule' },
];

const TIME_SLOTS = [
  { time: '09:30 AM', period: 'Morning' },
  { time: '11:00 AM', period: 'Morning' },
  { time: '02:00 PM', period: 'Afternoon' },
  { time: '04:30 PM', period: 'Afternoon' },
];

export default function AppointmentModal({ isOpen, onClose, initialService = '' }) {
  const [step, setStep] = useState(1);
  const [service, setService] = useState(initialService || 'Laser Teeth Whitening');
  const [doctor, setDoctor] = useState(DOCTORS_LIST[0]);
  const [date, setDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });
  const [slot, setSlot] = useState('11:00 AM');
  
  // Patient details form
  const [patientInfo, setPatientInfo] = useState({
    fullName: '',
    phone: '',
    email: '',
    notes: '',
  });

  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const handleNextStep = () => {
    if (step === 3) {
      const ref = 'DEMO-' + Math.floor(100000 + Math.random() * 900000);
      setBookingRef(ref);
      setStep(4);
    } else {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const resetAndClose = () => {
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-slate-200 flex flex-col max-h-[92vh]">
        
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-5 relative flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-teal-400">
                {step === 4 ? 'Demo Appointment Submitted' : `Step ${step} of 3 • Concept Booking Wizard`}
              </span>
            </div>
            <h3 className="text-xl font-bold mt-0.5 text-white">
              {step === 4 ? 'Demo Request Summary' : 'Request A Consultation'}
            </h3>
          </div>

          <button
            onClick={resetAndClose}
            aria-label="Close modal"
            className="w-8 h-8 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Progress Bar */}
        {step <= 3 && (
          <div className="w-full bg-slate-100 h-1 flex">
            <div 
              className="bg-gradient-to-r from-teal-500 to-cyan-500 h-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1">
          
          {/* STEP 1 */}
          {step === 1 && (
            <div className="space-y-4 animate-fadeIn">
              <div>
                <label htmlFor="modal-service" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Select Treatment / Service
                </label>
                <select
                  id="modal-service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 font-medium text-sm focus:ring-2 focus:ring-teal-500"
                >
                  <option value="Laser Teeth Whitening">Laser Teeth Whitening (Sample Price: $299)</option>
                  <option value="Invisalign Clear Aligners">Invisalign® Clear Aligners (Sample Price: $2,400)</option>
                  <option value="3D Dental Implant">3D Dental Implant (Sample Price: $1,200/tooth)</option>
                  <option value="Porcelain Veneers">Porcelain Veneers (Sample Price: $850/tooth)</option>
                  <option value="Checkup & Hygiene Cleaning">Checkup & Hygiene Cleaning (Sample Price: $149)</option>
                  <option value="Comfort Root Canal Care">Comfort Root Canal Care (Sample Price: $650)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Select Preferred Doctor
                </label>
                <div className="space-y-2">
                  {DOCTORS_LIST.map((doc) => (
                    <button
                      key={doc.id}
                      type="button"
                      onClick={() => setDoctor(doc)}
                      className={`w-full p-3 rounded-xl text-left border flex items-center justify-between transition-all ${
                        doctor.id === doc.id
                          ? 'border-teal-600 bg-teal-50/70 shadow-2xs'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div>
                        <div className="font-bold text-slate-900 text-xs sm:text-sm">{doc.name}</div>
                        <div className="text-[11px] text-slate-500">{doc.title}</div>
                      </div>
                      {doctor.id === doc.id && (
                        <CheckCircle2 className="w-4 h-4 text-teal-600" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="space-y-5 animate-fadeIn">
              <div>
                <label htmlFor="modal-date" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Select Preferred Date
                </label>
                <input
                  id="modal-date"
                  type="date"
                  value={date}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 font-semibold text-sm focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Sample Time Slots
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {TIME_SLOTS.map((t) => (
                    <button
                      key={t.time}
                      type="button"
                      onClick={() => setSlot(t.time)}
                      className={`p-2.5 rounded-xl border text-center transition-all ${
                        slot === t.time
                          ? 'border-teal-600 bg-teal-600 text-white font-bold shadow-2xs'
                          : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700 text-xs font-semibold'
                      }`}
                    >
                      <div className="text-xs font-bold">{t.time}</div>
                      <div className={`text-[10px] ${slot === t.time ? 'text-teal-100' : 'text-slate-400'}`}>
                        {t.period}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-teal-50 rounded-xl border border-teal-100 flex items-center gap-2 text-xs text-teal-800 font-medium">
                <ShieldCheck className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span>Concept Demo Wizard • No actual booking is placed.</span>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="space-y-3.5 animate-fadeIn">
              <div>
                <label htmlFor="modal-fullname" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  id="modal-fullname"
                  type="text"
                  required
                  placeholder="e.g. Michael Scott"
                  value={patientInfo.fullName}
                  onChange={(e) => setPatientInfo({ ...patientInfo, fullName: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 text-xs sm:text-sm focus:bg-white focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="modal-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <input
                    id="modal-phone"
                    type="tel"
                    required
                    placeholder="(555) 000-0000"
                    value={patientInfo.phone}
                    onChange={(e) => setPatientInfo({ ...patientInfo, phone: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 text-xs sm:text-sm focus:bg-white focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label htmlFor="modal-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={patientInfo.email}
                    onChange={(e) => setPatientInfo({ ...patientInfo, email: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 text-xs sm:text-sm focus:bg-white focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="modal-notes" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Notes (Optional)
                </label>
                <textarea
                  id="modal-notes"
                  rows="2"
                  placeholder="Enter optional sample notes..."
                  value={patientInfo.notes}
                  onChange={(e) => setPatientInfo({ ...patientInfo, notes: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 text-xs sm:text-sm focus:bg-white focus:ring-2 focus:ring-teal-500"
                ></textarea>
              </div>
            </div>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <div className="text-center space-y-4 animate-fadeIn py-2">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-xl shadow-xs">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="px-2.5 py-0.5 bg-teal-100 text-teal-800 text-[11px] font-extrabold rounded-full uppercase tracking-wider">
                  Demo Code #{bookingRef}
                </span>
                <h4 className="text-xl font-extrabold text-slate-900 mt-1">Demo Request Submitted</h4>
                <p className="text-slate-600 text-xs mt-1 max-w-md mx-auto">
                  Demo request submitted successfully. (Note: This is a concept website demo; no real appointment was placed with a live clinic.)
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left space-y-1.5 text-xs">
                <div className="flex justify-between border-b pb-1.5">
                  <span className="text-slate-500 font-medium">Selected Treatment:</span>
                  <span className="font-bold text-slate-900">{service}</span>
                </div>
                <div className="flex justify-between border-b pb-1.5">
                  <span className="text-slate-500 font-medium">Doctor:</span>
                  <span className="font-bold text-slate-900">{doctor.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Sample Date & Time:</span>
                  <span className="font-bold text-teal-700">{date} at {slot}</span>
                </div>
              </div>

              <button
                onClick={resetAndClose}
                className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors shadow-md"
              >
                Close & Return To Website
              </button>
            </div>
          )}

        </div>

        {/* Modal Footer Controls */}
        {step <= 3 && (
          <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-between gap-3">
            {step > 1 ? (
              <button
                onClick={handlePrevStep}
                className="px-4 py-2 rounded-xl bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-xs flex items-center gap-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back
              </button>
            ) : (
              <div></div>
            )}

            <button
              onClick={handleNextStep}
              className="px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-md shadow-teal-600/20 flex items-center gap-1"
            >
              <span>{step === 3 ? 'Submit Demo Request' : 'Continue'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

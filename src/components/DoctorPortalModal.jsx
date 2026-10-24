import React, { useState, useEffect } from 'react';
import {
  X,
  CheckCircle2,
  XCircle,
  Clock,
  Calendar,
  User,
  Phone,
  Mail,
  Send,
  ShieldAlert,
} from 'lucide-react';
import CLINIC_CONFIG from '../config';
import {
  getAppointments,
  updateAppointmentStatus,
  saveAppointment,
} from '../utils/appointmentStorage';

export default function DoctorPortalModal({
  isOpen,
  onClose,
  initialAction = null, // { action: 'confirm'|'reject', ref, name, email, service, date, time, phone }
}) {
  const [appointments, setAppointments] = useState([]);
  const [filter, setFilter] = useState('all'); // 'all' | 'pending' | 'confirmed' | 'rejected'
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [targetAction, setTargetAction] = useState('confirm'); // 'confirm' | 'reject'
  const [doctorNote, setDoctorNote] = useState('');
  const [sendingEmail, setSendingEmail] = useState(false);
  const [actionSuccess, setActionSuccess] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Load appointments on open
  useEffect(() => {
    if (isOpen) {
      const list = getAppointments();
      setAppointments(list);
      setActionSuccess(null);
      setErrorMessage('');

      // If opened with an action link from email
      if (initialAction && initialAction.ref) {
        // Find existing or construct item
        let existing = list.find((a) => a.ref === initialAction.ref);
        if (!existing) {
          existing = {
            ref: initialAction.ref,
            fullName: initialAction.name || 'Patient',
            email: initialAction.email || '',
            phone: initialAction.phone || '',
            service: initialAction.service || 'Dental Consultation',
            prefDate: initialAction.date || 'Upcoming',
            prefTime: initialAction.time || 'Scheduled Slot',
            status: 'pending',
            createdAt: new Date().toISOString(),
          };
          saveAppointment(existing);
          setAppointments(getAppointments());
        }
        setSelectedBooking(existing);
        setTargetAction(initialAction.action === 'reject' ? 'reject' : 'confirm');
        setDoctorNote(
          initialAction.action === 'reject'
            ? 'The requested slot is unavailable. Please call our clinic to select an alternate time.'
            : 'Your appointment has been confirmed. Please arrive 10 minutes before your slot.'
        );
      } else if (list.length > 0) {
        // default select first if available
        setSelectedBooking(list[0]);
        setTargetAction('confirm');
      } else {
        setSelectedBooking(null);
      }
    }
  }, [isOpen, initialAction]);

  if (!isOpen) return null;

  const handleSelectBooking = (item, defaultAction = 'confirm') => {
    setSelectedBooking(item);
    setTargetAction(defaultAction);
    setActionSuccess(null);
    setErrorMessage('');
    setDoctorNote(
      defaultAction === 'reject'
        ? 'The requested slot is unavailable. Please contact our clinic to reschedule.'
        : 'Your appointment is confirmed. Please arrive 10 minutes prior.'
    );
  };

  const handleSendPatientEmail = async () => {
    if (!selectedBooking) return;
    const patientEmail = selectedBooking.email;
    if (!patientEmail) {
      setErrorMessage('Patient email is missing. Unable to send confirmation email.');
      return;
    }

    setSendingEmail(true);
    setErrorMessage('');

    const isConfirm = targetAction === 'confirm';
    const emailSubject = isConfirm
      ? `✅ Appointment Confirmed: Dr. Keshav (${selectedBooking.prefDate} at ${selectedBooking.prefTime})`
      : `⚠️ Appointment Update: Ivory Dental Clinic (${selectedBooking.prefDate})`;

    const emailPayload = isConfirm
      ? {
          _subject: emailSubject,
          _template: 'table',
          _captcha: 'false',
          'Appointment Status': 'CONFIRMED ✅',
          'Doctor In-Charge': 'Dr. Keshav (Ivory Dental Studio)',
          'Patient Name': selectedBooking.fullName,
          'Service': selectedBooking.service,
          'Confirmed Date': selectedBooking.prefDate,
          'Confirmed Time': selectedBooking.prefTime,
          'Booking Reference': selectedBooking.ref,
          'Doctor Note': doctorNote || 'Please arrive 10 minutes before your appointment time.',
          'Clinic Address': CLINIC_CONFIG.address,
          'Clinic Phone': CLINIC_CONFIG.phoneDisplay,
        }
      : {
          _subject: emailSubject,
          _template: 'table',
          _captcha: 'false',
          'Appointment Status': 'DECLINED / RESCHEDULE REQUIRED ⚠️',
          'Doctor In-Charge': 'Dr. Keshav (Ivory Dental Studio)',
          'Patient Name': selectedBooking.fullName,
          'Requested Service': selectedBooking.service,
          'Requested Date & Time': `${selectedBooking.prefDate} at ${selectedBooking.prefTime}`,
          'Doctor Note': doctorNote || 'The requested slot is currently unavailable. Please contact our clinic to reschedule.',
          'Clinic Phone': CLINIC_CONFIG.phoneDisplay,
        };

    try {
      // Send email directly to the patient's email address
      const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(patientEmail)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(emailPayload),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok && data.success !== 'true' && data.success !== true) {
        throw new Error(data.message || 'Failed to dispatch email to patient');
      }

      // Update in storage
      const newStatus = isConfirm ? 'confirmed' : 'rejected';
      const updatedList = updateAppointmentStatus(selectedBooking.ref, newStatus, doctorNote);
      setAppointments(updatedList);
      setSelectedBooking((prev) => ({ ...prev, status: newStatus, doctorNote }));
      setActionSuccess({
        action: newStatus,
        patientEmail,
        patientName: selectedBooking.fullName,
      });
    } catch (err) {
      console.error('Doctor action email error:', err);
      setErrorMessage(
        'Could not send confirmation email to patient. Please check internet connection or FormSubmit verification.'
      );
    } finally {
      setSendingEmail(false);
    }
  };

  const filteredAppointments = appointments.filter((a) => {
    if (filter === 'all') return true;
    return a.status === filter;
  });

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5"
      style={{ background: 'rgba(18,60,58,0.7)', backdropFilter: 'blur(8px)' }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh] animate-fadeIn"
        style={{ background: '#FAF9F6' }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-4"
          style={{ background: '#123C3A', color: 'white' }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white shadow-inner"
              style={{ background: 'linear-gradient(135deg, #247C78 0%, #123C3A 100%)' }}
            >
              👨‍⚕️
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-bold" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Doctor Appointment Portal
                </h2>
                <span
                  className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full"
                  style={{ background: '#247C78', color: '#9FD3C8' }}
                >
                  Dr. Keshav
                </span>
              </div>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>
                Managing clinic inquiries sent to{' '}
                <strong className="text-white">keshavk1002003@gmail.com</strong>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            style={{ color: 'white' }}
            aria-label="Close Doctor Portal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Layout */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-12 min-h-0">
          {/* Left Column: Appointments List (5 cols) */}
          <div className="md:col-span-5 border-r p-4 sm:p-5 flex flex-col space-y-4" style={{ borderColor: '#EAF5F1', background: '#FFFFFF' }}>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-600">
                Patient Bookings ({filteredAppointments.length})
              </span>
              {/* Filter pills */}
              <div className="flex gap-1 text-[11px] font-semibold">
                {['all', 'pending', 'confirmed'].map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className="capitalize px-2.5 py-1 rounded-lg transition-colors"
                    style={{
                      background: filter === f ? '#123C3A' : '#F1F5F9',
                      color: filter === f ? '#FFFFFF' : '#64748B',
                    }}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* List */}
            <div className="space-y-2.5 overflow-y-auto max-h-[380px] md:max-h-[520px] pr-1">
              {filteredAppointments.length === 0 ? (
                <div className="p-6 text-center text-xs text-neutral-500 rounded-xl border border-dashed border-neutral-300">
                  No appointments found for this filter. New bookings made by patients will appear here automatically.
                </div>
              ) : (
                filteredAppointments.map((item) => {
                  const isSelected = selectedBooking?.ref === item.ref;
                  const statusColors = {
                    confirmed: { bg: '#EAF5F1', text: '#247C78', label: 'Confirmed' },
                    rejected: { bg: '#FEE2E2', text: '#B91C1C', label: 'Rejected' },
                    pending: { bg: '#FEF3C7', text: '#B45309', label: 'Pending' },
                  }[item.status || 'pending'];

                  return (
                    <div
                      key={item.ref}
                      onClick={() => handleSelectBooking(item, item.status === 'confirmed' ? 'confirm' : 'confirm')}
                      className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all duration-200 ${
                        isSelected ? 'ring-2 ring-teal-600 shadow-sm' : 'hover:border-teal-300'
                      }`}
                      style={{
                        background: isSelected ? '#FAFDFB' : '#FFFFFF',
                        borderColor: isSelected ? '#247C78' : '#E2E8F0',
                      }}
                    >
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <span className="font-bold text-sm text-neutral-900 truncate">
                          {item.fullName}
                        </span>
                        <span
                          className="text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0"
                          style={{ background: statusColors.bg, color: statusColors.text }}
                        >
                          {statusColors.label}
                        </span>
                      </div>
                      <p className="text-xs font-medium text-teal-800 mb-1.5">{item.service}</p>
                      <div className="flex items-center gap-3 text-[11px] text-neutral-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-neutral-400" /> {item.prefDate}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-neutral-400" /> {item.prefTime}
                        </span>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* Right Column: Review & Action Panel (7 cols) */}
          <div className="md:col-span-7 p-5 sm:p-6 flex flex-col justify-between overflow-y-auto">
            {selectedBooking ? (
              <div className="space-y-5">
                {/* Status banner */}
                <div className="flex items-center justify-between pb-3 border-b" style={{ borderColor: '#E2E8F0' }}>
                  <div>
                    <span className="text-[10px] font-bold tracking-wider uppercase text-neutral-400">
                      Booking Ref: {selectedBooking.ref}
                    </span>
                    <h3 className="text-lg font-extrabold text-neutral-900" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      Review Appointment Request
                    </h3>
                  </div>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full uppercase"
                    style={{
                      background: selectedBooking.status === 'confirmed' ? '#EAF5F1' : selectedBooking.status === 'rejected' ? '#FEE2E2' : '#FEF3C7',
                      color: selectedBooking.status === 'confirmed' ? '#247C78' : selectedBooking.status === 'rejected' ? '#B91C1C' : '#B45309',
                    }}
                  >
                    Current: {selectedBooking.status || 'Pending'}
                  </span>
                </div>

                {/* Patient Summary Card */}
                <div className="p-4 rounded-xl border bg-white space-y-2 text-xs" style={{ borderColor: '#EAF5F1' }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <span className="text-neutral-400 block mb-0.5">Patient Name</span>
                      <strong className="text-neutral-900 text-sm flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-teal-600" /> {selectedBooking.fullName}
                      </strong>
                    </div>
                    <div>
                      <span className="text-neutral-400 block mb-0.5">Requested Service</span>
                      <strong className="text-neutral-900 text-sm">{selectedBooking.service}</strong>
                    </div>
                    <div>
                      <span className="text-neutral-400 block mb-0.5">Preferred Slot</span>
                      <strong className="text-neutral-900 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-teal-600" /> {selectedBooking.prefDate} at {selectedBooking.prefTime}
                      </strong>
                    </div>
                    <div>
                      <span className="text-neutral-400 block mb-0.5">Phone Number</span>
                      <strong className="text-neutral-900 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-teal-600" /> {selectedBooking.phone || 'N/A'}
                      </strong>
                    </div>
                    <div className="sm:col-span-2">
                      <span className="text-neutral-400 block mb-0.5">Patient Email (Confirmation will be sent here)</span>
                      <strong className="text-neutral-900 text-sm flex items-center gap-1.5 font-mono">
                        <Mail className="w-3.5 h-3.5 text-teal-600" /> {selectedBooking.email || 'None Provided'}
                      </strong>
                    </div>
                  </div>
                  {selectedBooking.message && (
                    <div className="pt-2 border-t border-neutral-100 text-neutral-600">
                      <span className="font-semibold text-neutral-800">Patient Notes:</span> {selectedBooking.message}
                    </div>
                  )}
                </div>

                {/* Action Selector: Confirm vs Reject */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-neutral-700">
                    Doctor Decision:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setTargetAction('confirm');
                        setDoctorNote('Your appointment has been confirmed. Please arrive 10 minutes before your slot.');
                      }}
                      className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs font-bold transition-all ${
                        targetAction === 'confirm'
                          ? 'border-teal-600 bg-teal-50 text-teal-900 shadow-sm ring-1 ring-teal-600'
                          : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4 text-teal-600" />
                      Confirm & Send Mail
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setTargetAction('reject');
                        setDoctorNote('The requested slot is unavailable. Please call our clinic to reschedule.');
                      }}
                      className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs font-bold transition-all ${
                        targetAction === 'reject'
                          ? 'border-red-500 bg-red-50 text-red-900 shadow-sm ring-1 ring-red-500'
                          : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300'
                      }`}
                    >
                      <XCircle className="w-4 h-4 text-red-600" />
                      Reject / Reschedule
                    </button>
                  </div>
                </div>

                {/* Doctor Note */}
                <div>
                  <label htmlFor="doctor-note" className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-neutral-700">
                    Message / Instructions for Patient:
                  </label>
                  <textarea
                    id="doctor-note"
                    rows={2}
                    value={doctorNote}
                    onChange={(e) => setDoctorNote(e.target.value)}
                    className="w-full p-2.5 rounded-xl border text-xs bg-white text-neutral-800 focus:outline-teal-600 resize-none"
                    style={{ borderColor: '#CBD5E1' }}
                    placeholder="Enter any instructions for the patient (e.g. bring past X-rays)..."
                  />
                </div>

                {/* Success alert */}
                {actionSuccess && (
                  <div className="p-3 rounded-xl bg-teal-50 border border-teal-200 text-teal-900 text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                    <span>
                      Success! An email was sent to <strong>{actionSuccess.patientEmail}</strong> informing{' '}
                      {actionSuccess.patientName} that their appointment has been{' '}
                      <strong>{actionSuccess.action}</strong>.
                    </span>
                  </div>
                )}

                {/* Error alert */}
                {errorMessage && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Submit Action Button */}
                <button
                  type="button"
                  onClick={handleSendPatientEmail}
                  disabled={sendingEmail || !selectedBooking.email}
                  className="w-full py-3 rounded-xl font-bold text-xs text-white flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90 shadow-md disabled:opacity-50"
                  style={{
                    background: targetAction === 'confirm' ? '#123C3A' : '#DC2626',
                    fontFamily: 'Manrope, sans-serif',
                  }}
                >
                  {sendingEmail ? (
                    <>
                      <span className="w-3.5 h-3.5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      Sending Email to Patient ({selectedBooking.email})…
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      {targetAction === 'confirm'
                        ? `Send Confirmation Email to ${selectedBooking.email}`
                        : `Send Slot Unavailable Email to ${selectedBooking.email}`}
                    </>
                  )}
                </button>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 text-neutral-400">
                <Calendar className="w-12 h-12 mb-3 text-neutral-300" />
                <p className="text-sm font-semibold text-neutral-600 mb-1">No Appointment Selected</p>
                <p className="text-xs">Select a patient booking from the left list to review and confirm.</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t bg-white flex items-center justify-between text-xs text-neutral-500" style={{ borderColor: '#EAF5F1' }}>
          <span>Ivory Dental Studio · Doctor In-Charge Admin System</span>
          <button onClick={onClose} className="font-semibold text-neutral-700 hover:underline">
            Close Portal
          </button>
        </div>
      </div>
    </div>
  );
}

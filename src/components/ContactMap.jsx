import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function ContactMap() {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', service: 'General Enquiry', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => setFormSent(false), 5000);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Details & Hours */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-500/30">
                <MapPin className="w-3.5 h-3.5" /> Visit Our Studio
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
                Get In Touch With Our Care Team
              </h2>
              <p className="text-slate-400 text-base mt-2">
                Located conveniently in Beverly Hills with valet parking and same-day emergency appointments.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Studio Address</h4>
                  <p className="text-slate-300 mt-0.5">450 Aesthetic Way, Suite 200, Beverly Hills, CA 90210</p>
                  <span className="text-xs text-teal-400 font-semibold block mt-1">Valet Parking Available</span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Phone & Emergency Line</h4>
                  <p className="text-slate-300 mt-0.5">Appointments: (555) 234-5678</p>
                  <p className="text-xs text-rose-400 font-bold mt-1">24/7 Emergency Line: (555) 911-DENT</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="w-full">
                  <h4 className="font-bold text-white">Clinic Hours</h4>
                  <div className="grid grid-cols-2 text-xs text-slate-300 mt-1 gap-1">
                    <span>Monday - Friday:</span> <span className="font-semibold text-right">8:00 AM - 7:00 PM</span>
                    <span>Saturday:</span> <span className="font-semibold text-right">9:00 AM - 5:00 PM</span>
                    <span>Sunday:</span> <span className="text-rose-400 font-semibold text-right">Emergency Only</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-white text-slate-900 p-6 sm:p-8 rounded-3xl shadow-2xl space-y-6">
            <div>
              <h3 className="text-2xl font-extrabold text-slate-900">Send Us A Message</h3>
              <p className="text-slate-600 text-sm mt-1">
                Have a question or custom request? Fill out the form below for a response within 1 business hour.
              </p>
            </div>

            {formSent ? (
              <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-2 animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-xl font-bold text-slate-900">Message Sent Successfully!</h4>
                <p className="text-sm text-slate-600">Our patient care coordinator will call or email you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-300 bg-slate-50 text-sm focus:bg-white focus:ring-2 focus:ring-teal-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-300 bg-slate-50 text-sm focus:bg-white focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Treatment Interest
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full p-3 rounded-xl border border-slate-300 bg-slate-50 text-sm font-medium focus:bg-white focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="General Enquiry">General Consultation</option>
                    <option value="Cosmetic Whitening">Teeth Whitening</option>
                    <option value="Veneers">Porcelain Veneers</option>
                    <option value="Invisalign">Invisalign Aligners</option>
                    <option value="Implants">Dental Implants</option>
                    <option value="Emergency Relief">Emergency Pain Relief</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Message or Questions
                  </label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Tell us how we can help you..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 rounded-xl border border-slate-300 bg-slate-50 text-sm focus:bg-white focus:ring-2 focus:ring-teal-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-base shadow-xl shadow-teal-600/20 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Send Direct Inquiry
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}

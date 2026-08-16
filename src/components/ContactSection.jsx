import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Clock, Send, CheckCircle2, Sparkles } from 'lucide-react';

export default function ContactSection() {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', service: 'General Consultation', message: '' });

  const DEMO_PHONE = "+15552345678";
  const DEMO_WHATSAPP_URL = "https://wa.me/15552345678?text=Hi%20AuraDental,%20I%20want%20to%20send%20a%20demo%20inquiry.";

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <section id="contact" className="py-14 lg:py-20 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-teal-500/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Side: Contact Channels & Location */}
          <div className="lg:col-span-5 space-y-7">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-500/30">
                <MapPin className="w-3.5 h-3.5" /> Sample Location & Channels
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2.5">
                Get In Touch (Demo)
              </h2>
              <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                Connect via WhatsApp or phone, or submit a sample consultation request through the contact form.
              </p>
            </div>

            {/* Quick Contact Buttons */}
            <div className="space-y-3">
              <a
                href={DEMO_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-between"
                aria-label="WhatsApp Demo Chat"
              >
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <div className="text-left">
                    <div>WhatsApp Demo Chat</div>
                    <div className="text-[11px] text-emerald-100 font-normal">Click to test WhatsApp interaction</div>
                  </div>
                </div>
                <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded font-semibold">Demo Link</span>
              </a>

              <a
                href={`tel:${DEMO_PHONE}`}
                className="w-full p-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-extrabold text-sm transition-all flex items-center justify-between"
                aria-label="Call Demo Phone Number"
              >
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-teal-400" />
                  <div className="text-left">
                    <div>Call +1 (555) 234-5678</div>
                    <div className="text-[11px] text-slate-400 font-normal">Sample Reception Line</div>
                  </div>
                </div>
                <span className="text-[10px] bg-teal-500/20 text-teal-300 px-2 py-0.5 rounded font-semibold">Demo Call</span>
              </a>
            </div>

            {/* Address & Hours */}
            <div className="space-y-3 pt-1 text-xs sm:text-sm">
              <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-xs sm:text-sm">Studio Address (Fictional)</h4>
                  <p className="text-slate-300 text-xs mt-0.5">450 Aesthetic Way, Suite 200, Beverly Hills, CA 90210</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-start gap-3">
                <Clock className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                <div className="w-full text-xs">
                  <h4 className="font-bold text-white text-xs sm:text-sm mb-1">Sample Operating Hours</h4>
                  <div className="grid grid-cols-2 text-slate-300 gap-1">
                    <span>Monday - Friday:</span> <span className="font-bold text-right">9:00 AM - 7:00 PM</span>
                    <span>Saturday:</span> <span className="font-bold text-right">9:00 AM - 5:00 PM</span>
                    <span>Sunday:</span> <span className="text-slate-400 font-bold text-right">Closed</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side: Quick Contact Form */}
          <div className="lg:col-span-7 bg-white text-slate-900 p-6 sm:p-8 rounded-3xl shadow-2xl space-y-5">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
                Demo Form
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-1">Sample Appointment Request Form</h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                Test form fields and validation. No real data is transmitted.
              </p>
            </div>

            {formSent ? (
              <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-3 animate-fadeIn">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold text-slate-900">Demo request submitted successfully.</h4>
                <p className="text-xs text-slate-600">
                  Thank you for testing the contact form! Note: This is a concept website demo. No real message was sent to a live clinic.
                </p>
                <button
                  onClick={() => setFormSent(false)}
                  className="px-4 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors"
                >
                  Send Another Demo Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Alex Johnson"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-300 bg-slate-50 text-sm focus:bg-white focus:ring-2 focus:ring-teal-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      id="contact-phone"
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
                  <label htmlFor="contact-service" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Treatment Interest
                  </label>
                  <select
                    id="contact-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full p-3 rounded-xl border border-slate-300 bg-slate-50 text-sm font-medium focus:bg-white focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="General Consultation">General Consultation</option>
                    <option value="Teeth Whitening">Teeth Whitening</option>
                    <option value="Veneers">Porcelain Veneers</option>
                    <option value="Invisalign">Invisalign Aligners</option>
                    <option value="Dental Implants">Dental Implants</option>
                    <option value="Root Canal Care">Root Canal Care</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Message or Notes (Optional)
                  </label>
                  <textarea
                    id="contact-message"
                    rows="3"
                    placeholder="Enter any sample message or notes..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 rounded-xl border border-slate-300 bg-slate-50 text-sm focus:bg-white focus:ring-2 focus:ring-teal-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-sm shadow-md shadow-teal-600/20 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Submit Demo Request
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}

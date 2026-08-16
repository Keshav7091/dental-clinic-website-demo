import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutDoctor from './components/AboutDoctor';
import Services from './components/Services';
import Reviews from './components/Reviews';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import AppointmentModal from './components/AppointmentModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('');

  const handleOpenBooking = (serviceName = '') => {
    if (typeof serviceName === 'string' && serviceName.length > 0) {
      setPreselectedService(serviceName);
    } else {
      setPreselectedService('');
    }
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 flex flex-col selection:bg-teal-500 selection:text-white">
      {/* Header */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Landing Page Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* About Doctor Section */}
        <AboutDoctor />

        {/* Treatments Section */}
        <Services onOpenBooking={(srv) => handleOpenBooking(srv)} />

        {/* Verified Patient Reviews Section */}
        <Reviews />

        {/* Contact Form & Clinic Location */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Floating WhatsApp Quick Chat Button */}
      <WhatsAppFloat />

      {/* Booking Form Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={preselectedService}
      />
    </div>
  );
}

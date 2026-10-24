import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/AboutDoctor';
import Doctors from './components/Doctors';
import WhyChooseUs from './components/WhyChooseUs';
import AppointmentModal from './components/AppointmentModal';
import DoctorPortalModal from './components/DoctorPortalModal';
import Reviews from './components/Reviews';
import Faq from './components/Faq';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('');
  const [doctorPortalOpen, setDoctorPortalOpen] = useState(false);
  const [doctorActionData, setDoctorActionData] = useState(null);

  // Check URL for direct action links from Doctor's email (e.g. ?action=confirm&ref=...) or #doctor
  useEffect(() => {
    const checkUrlTriggers = () => {
      const params = new URLSearchParams(window.location.search);
      const action = params.get('action');
      const ref = params.get('ref');

      if (action && (action === 'confirm' || action === 'reject')) {
        setDoctorActionData({
          action,
          ref: ref || '',
          name: params.get('name') || '',
          email: params.get('email') || '',
          service: params.get('service') || '',
          date: params.get('date') || '',
          time: params.get('time') || '',
          phone: params.get('phone') || '',
        });
        setDoctorPortalOpen(true);
      } else if (window.location.hash === '#doctor') {
        setDoctorActionData(null);
        setDoctorPortalOpen(true);
      }
    };

    checkUrlTriggers();
    window.addEventListener('hashchange', checkUrlTriggers);
    return () => window.removeEventListener('hashchange', checkUrlTriggers);
  }, []);

  const handleOpenBooking = (serviceName = '') => {
    setPreselectedService(typeof serviceName === 'string' ? serviceName : '');
    setBookingOpen(true);
  };

  const handleOpenDoctorPortal = () => {
    setDoctorActionData(null);
    setDoctorPortalOpen(true);
  };

  return (
    <>
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenDoctorPortal={handleOpenDoctorPortal}
      />

      <main>
        {/* A — Hero */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* C — Services */}
        <Services onOpenBooking={handleOpenBooking} />

        {/* D — About the Clinic */}
        <About onOpenBooking={handleOpenBooking} />

        {/* E — Meet the Team */}
        <Doctors onOpenBooking={handleOpenBooking} />

        {/* F — Why Choose Us */}
        <WhyChooseUs />

        {/* H — Testimonials */}
        <Reviews />

        {/* J — FAQ */}
        <Faq />

        {/* I — Contact & Location */}
        <ContactSection />
      </main>

      <Footer
        onOpenBooking={handleOpenBooking}
        onOpenDoctorPortal={handleOpenDoctorPortal}
      />

      {/* G — Appointment Enquiry Modal */}
      <AppointmentModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialService={preselectedService}
      />

      {/* Doctor Action & Appointment Confirmation Portal */}
      <DoctorPortalModal
        isOpen={doctorPortalOpen}
        onClose={() => {
          setDoctorPortalOpen(false);
          if (window.location.hash === '#doctor') {
            window.history.replaceState(null, '', window.location.pathname + window.location.search);
          }
        }}
        initialAction={doctorActionData}
      />
    </>
  );
}

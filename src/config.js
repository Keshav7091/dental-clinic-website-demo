/**
 * Ivory Dental Studio — Site Configuration
 *
 * Replace these values with real clinic data when deploying for a client.
 * All placeholders are intentionally obvious to prevent confusion with real data.
 */

export const CLINIC_CONFIG = {
  // Brand
  name: 'Ivory Dental Studio',
  tagline: 'Thoughtful Dental Care',
  description: 'A comfortable, patient-first dental clinic offering general, cosmetic, and family dental care in Noida.',

  // Contact — replace with real values before deploying
  // Set to null or empty string to disable clickable links
  phone: null,                // e.g. '+91 98765 43210'
  phoneDisplay: '+91 XXXXX XXXXX',
  email: null,                // e.g. 'hello@ivorydental.in'
  emailDisplay: 'hello@example.com',
  whatsapp: null,             // e.g. '+919876543210'

  // Address — placeholder only
  address: '[Clinic Address], Noida, Uttar Pradesh',
  city: 'Noida, Uttar Pradesh',
  mapEmbedUrl: null,          // Replace with a real Google Maps embed URL

  // Hours
  hours: [
    { days: 'Monday – Saturday', time: '9:00 AM – 7:00 PM' },
    { days: 'Sunday',            time: 'Closed' },
  ],

  // Social — set to null to hide
  social: {
    instagram: null,
    facebook: null,
    twitter: null,
  },

  // Notification Email for Appointment Bookings
  appointmentNotification: {
    recipientEmail: 'keshavk1002003@gmail.com',
    provider: 'formsubmit', // 'formsubmit' (works out-of-the-box) or 'web3forms'
    web3formsAccessKey: '', // optional: paste Web3Forms access key if using web3forms
  },

  // SEO
  siteUrl: 'https://example.com',
};

export default CLINIC_CONFIG;

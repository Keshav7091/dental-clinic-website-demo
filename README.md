# Ivory Dental Studio — Portfolio Demo Website

A premium dental clinic website built as a **freelance portfolio demonstration** to showcase to local dental clinics in Noida, India. This is a fictional concept and does not represent a real clinic.

> ⚠️ **Portfolio Demo Notice**: Ivory Dental Studio is a fictional brand. All doctor profiles, contact details, testimonials, and clinic information are illustrative placeholders. Do not use any contact details shown on this site to attempt to reach a real clinic.

---

## Overview

**Demo brand:** Ivory Dental Studio  
**Concept:** A premium dental clinic website for a practice in Noida, Uttar Pradesh  
**Purpose:** Freelance portfolio showcase — demonstrates a complete, production-quality dental clinic website

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **React** | 19.x | UI framework |
| **Vite** | 8.x | Build tool / dev server |
| **Tailwind CSS** | 4.x | Styling (CSS-first config via `@theme`) |
| **Lucide React** | 1.31.x | Icon system |
| **clsx / tailwind-merge** | latest | Class name utilities |

**Fonts:** Manrope (headings) + Inter (body) via Google Fonts

---

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm 9+

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd dental-clinic-website-demo

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
# Opens at http://localhost:5173
```

### Production Build

```bash
npm run build
# Output in /dist
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## Project Structure

```
dental-clinic-website-demo/
├── public/
│   ├── images/           # All image assets
│   │   ├── hero-clinic.png
│   │   ├── about-clinic.png
│   │   ├── dr-aanya-mehta.png
│   │   ├── dr-rohan-kapoor.png
│   │   └── dr-neha-sharma.png
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky nav, mobile menu, smooth scroll
│   │   ├── Hero.jsx            # Hero section, trust indicators, CTAs
│   │   ├── Services.jsx        # 6-service grid with Lucide icons
│   │   ├── AboutDoctor.jsx     # About the clinic split layout
│   │   ├── Doctors.jsx         # Team profile cards
│   │   ├── WhyChooseUs.jsx     # 4 differentiators
│   │   ├── Reviews.jsx         # Testimonials (clearly labelled fictional)
│   │   ├── AppointmentModal.jsx # 2-step enquiry form with validation
│   │   ├── Faq.jsx             # Accessible accordion FAQ
│   │   ├── ContactSection.jsx  # Contact details + map placeholder
│   │   └── Footer.jsx          # Footer with links, back to top
│   ├── config.js              # ⭐ Central clinic configuration
│   ├── App.jsx                # Root component — section composition
│   ├── index.css              # Global styles, @theme tokens, animations
│   └── main.jsx               # React entry point
├── index.html                 # SEO meta, font imports
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

---

## Features Implemented

### Sections (A–K per specification)
- ✅ **A. Navigation** — Sticky, scroll-aware, mobile hamburger menu, smooth scroll
- ✅ **B. Hero** — Two-column, trust indicators, dual CTAs, floating badges
- ✅ **C. Services** — 6 cards with Lucide icons, 3/2/1 responsive grid
- ✅ **D. About the Clinic** — Split layout, 3 feature points
- ✅ **E. Team** — 3 fictional Indian doctor profiles with portraits
- ✅ **F. Why Choose Us** — 4 differentiators, sticky left panel
- ✅ **G. Appointment Enquiry** — 2-step modal with full validation
- ✅ **H. Testimonials** — "Your Experience Matters" with fictional sample cards, clearly labelled
- ✅ **I. Contact & Location** — Config-driven details, map placeholder
- ✅ **J. FAQ** — Accessible accordion with ARIA
- ✅ **K. Footer** — 4 columns, back to top, privacy disclosure

### Functionality
- ✅ Smooth scrolling with correct offset for fixed nav
- ✅ Mobile hamburger menu (open/close)
- ✅ Form validation: required fields, phone format, email format
- ✅ Inline field error messages
- ✅ Loading/spinner state during demo submission
- ✅ Success state clearly noting no real booking is made
- ✅ FAQ keyboard accessible (Enter/Space to toggle)
- ✅ ARIA attributes on modal and accordion
- ✅ Back to top button
- ✅ Responsive at 375px, 768px, 1024px, 1440px

---

## Replacing Demo Information for a Real Client

All placeholder clinic data is centralised in **`src/config.js`**. Update these values:

```js
export const CLINIC_CONFIG = {
  name: 'Your Clinic Name',
  phone: '+91 98765 43210',       // enables clickable tel: link
  email: 'hello@yourclinic.com',  // enables clickable mailto: link
  whatsapp: '+919876543210',      // for WhatsApp integration
  address: 'Block 5, Sector 62, Noida, Uttar Pradesh 201301',
  mapEmbedUrl: 'https://www.google.com/maps/embed?...', // Google Maps embed
  hours: [
    { days: 'Monday – Saturday', time: '9:00 AM – 7:00 PM' },
    { days: 'Sunday', time: 'Closed' },
  ],
  social: {
    instagram: 'https://instagram.com/yourclinic',
    facebook: 'https://facebook.com/yourclinic',
  },
};
```

### Additional steps for client deployment:
1. Replace `public/images/` with real clinic photography
2. Update doctor names/roles/photos in `src/components/Doctors.jsx`
3. Replace appointment services list in `AppointmentModal.jsx`
4. Update FAQ answers in `Faq.jsx`
5. Connect the form to a real backend (see section below)

---

## Integrations That Require a Backend

The appointment enquiry form (`AppointmentModal.jsx`) currently runs as a **frontend-only demo**. To make it functional for a real client, the `handleSubmit` function needs to connect to one of these:

- **Email:** Nodemailer via an Express/Next.js API route
- **CRM:** Zoho, HubSpot, or clinic-specific PMS webhook
- **SMS/WhatsApp:** Twilio or MSG91 API
- **Google Forms/Sheets:** Apps Script webhook

The submission handler is kept modular for easy integration. **Never expose API keys in frontend code** — route all API calls through a backend.

---

## Color Palette

| Name | Hex | Usage |
|---|---|---|
| Primary Dark Teal | `#123C3A` | Navbar, headings, CTAs |
| Secondary Teal | `#247C78` | Links, icons, accents |
| Soft Mint | `#EAF5F1` | Section backgrounds, icon containers |
| Warm Off-White | `#FAF9F6` | Page background |
| Main Text | `#202D2C` | Body text |
| Muted Text | `#667573` | Secondary copy |

---

## Disclaimer

Ivory Dental Studio is a **fictional portfolio concept**. The doctors listed (Dr. Aanya Mehta, Dr. Rohan Kapoor, Dr. Neha Sharma) are illustrative demo profiles and do not represent real practitioners. No real medical credentials, patient reviews, or clinical outcomes are claimed. Contact details shown on the site are placeholders only.

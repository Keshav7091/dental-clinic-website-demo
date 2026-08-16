# AuraDental Studio — Concept Dental Clinic Website Demo

A modern, high-converting, single-doctor dental clinic concept landing page built with **React**, **Tailwind CSS**, and **Lucide Icons**.

> **Note:** This website is a **concept demonstration / portfolio project**. All business details, ratings, testimonials, credentials, and treatment pricing are fictional sample content designed to illustrate a modern healthcare web workflow.

---

## 🌟 Key Features & Sections

- **Header & Sticky Navigation (`Navbar.jsx`)**:
  - Concept demo badge, clinic logo, quick navigation links (`#about-doctor`, `#treatments`, `#reviews`, `#contact`).
  - Direct action buttons for **WhatsApp Demo Chat** and **Phone Call**.

- **High-Converting Hero (`Hero.jsx`)**:
  - Sample star rating badge, doctor portrait photography, key comfort-focused highlights, and multi-channel CTAs.

- **About Doctor Section (`AboutDoctor.jsx`)**:
  - Doctor background (UCLA Dental School graduate concept), clinical philosophy, credentials, and practice features.

- **Sample Treatments & Pricing (`Services.jsx`)**:
  - 6 clean treatment cards (*Laser Teeth Whitening*, *Porcelain Veneers*, *Invisalign® Clear Aligners*, *3D Dental Implants*, *Comfort Root Canal Care*, *Checkup & Cleaning*) with explicit sample price estimates and direct WhatsApp inquiry links.

- **Sample Patient Reviews (`Reviews.jsx`)**:
  - Illustrative 5-star testimonial cards demonstrating patient feedback presentation.

- **Contact Hub & Form (`ContactSection.jsx`)**:
  - Direct WhatsApp chat button, phone helpline card, clinic operating hours matrix, address details, and an interactive sample callback request form with instant demo feedback.

- **Interactive Booking Wizard (`AppointmentModal.jsx`)**:
  - Multi-step appointment modal (Service & Specialist Selection → Date & Time Slots → Patient Contact Details → Demo Request Confirmation).

- **Floating WhatsApp Button (`WhatsAppFloat.jsx`)**:
  - Sticky floating action button in the bottom-right viewport for instant mobile & desktop lead conversion.

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Typography:** Plus Jakarta Sans (Google Fonts)

---

## 📁 Project Structure

```
dental-clinic-website-demo/
├── public/
│   └── images/              # Local website image assets
├── scripts/
│   └── download_images.js   # Asset downloader helper script
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Sticky navigation bar & status topbar
│   │   ├── Hero.jsx          # Main landing hero section
│   │   ├── AboutDoctor.jsx   # Doctor bio & clinical philosophy
│   │   ├── Services.jsx       # Treatment grid & sample pricing
│   │   ├── Reviews.jsx        # Sample patient testimonials
│   │   ├── ContactSection.jsx # Contact options & demo inquiry form
│   │   ├── AppointmentModal.jsx # Multi-step booking wizard
│   │   ├── WhatsAppFloat.jsx  # Floating WhatsApp action button
│   │   └── Footer.jsx         # Footer branding & quick links
│   ├── App.jsx               # Application root
│   ├── index.css             # Tailwind v4 import & custom styles
│   └── main.jsx              # React DOM render entrypoint
├── index.html                # HTML5 template with Google Fonts
├── tailwind.config.js        # Tailwind configuration
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18 or higher) installed on your machine.

### Installation & Development

```bash
# 1. Clone or navigate to the project root
cd dental-clinic-website-demo

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Open [http://localhost:5173/](http://localhost:5173/) in your browser to view the application.

### Production Build

```bash
# Compile optimized production bundle to /dist
npm run build

# Preview production build locally
npm run preview
```

---

## 📄 License & Disclaimer

This project is open-source and created for portfolio demonstration purposes. All business names, logos, photos, and prices are fictional concept assets.

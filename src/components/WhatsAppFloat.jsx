import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  const DEMO_WHATSAPP_URL = "https://wa.me/15552345678?text=Hi%20Dr.%20Sarah,%20I%20want%20to%20ask%20about%20dental%20care.";

  return (
    <a
      href={DEMO_WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Demo Chat"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 bg-emerald-500 hover:bg-emerald-600 text-white p-3 sm:px-4 sm:py-3 rounded-full shadow-2xl shadow-emerald-500/50 flex items-center gap-2 transition-all transform hover:scale-105 active:scale-95 border-2 border-white"
    >
      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-white text-emerald-600 flex-shrink-0" />
      <span className="hidden sm:inline font-extrabold text-xs sm:text-sm tracking-wide">
        WhatsApp Demo
      </span>
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-300 rounded-full border-2 border-white animate-ping"></span>
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-300 rounded-full border-2 border-white"></span>
    </a>
  );
}

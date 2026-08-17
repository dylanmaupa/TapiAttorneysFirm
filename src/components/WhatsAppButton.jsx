import React, { useState } from 'react';

const WHATSAPP_NUMBER = '263772909772'; // +263 772 909 772
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hello, I would like to enquire about your legal services.'
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const WhatsAppButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-6 right-6 z-50 flex items-center group"
      // style={{ filter: 'drop-shadow(0 4px 16px rgba(37,211,102,0.4))' }}
    >
      {/* Tooltip label */}
      <span
        className={`
          mr-3 px-3 py-1.5 rounded-lg bg-charcoal-900 text-white text-xs font-semibold
          whitespace-nowrap pointer-events-none
          transition-all duration-300
          ${hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'}
        `}
      >
        Chat with us
      </span>

      {/* Button */}
      <div className="relative">
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full animate-ping bg-[#c9a84c] opacity-30" />

       
        <div className="btn-gold w-14 h-14 rounded-full flex items-center justify-center shadow-gold-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.12 1.532 5.849L.057 23.998l6.305-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.802a9.777 9.777 0 01-5.031-1.386l-.36-.214-3.742.981 1-3.641-.235-.374A9.772 9.772 0 012.198 12C2.198 6.58 6.58 2.198 12 2.198S21.802 6.58 21.802 12 17.42 21.802 12 21.802z" />
          </svg>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;

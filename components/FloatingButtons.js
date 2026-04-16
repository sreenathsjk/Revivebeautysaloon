 import { motion } from 'framer-motion';
import { BsWhatsapp } from 'react-icons/bs';
import { FiCalendar, FiPhone } from 'react-icons/fi';

// ✅ UPDATED NUMBER
const SALON_PHONE = '916300407182';

export default function FloatingButtons() {
  return (
    <>
      {/* WhatsApp Floating Button */}
      <motion.a
        href={`https://wa.me/${SALON_PHONE}?text=Hi%20Revive%20Beauty%20Saloon!%20I%27d%20like%20to%20book%20an%20appointment.`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: 'spring', bounce: 0.5 }}
        className="whatsapp-btn"
        title="Chat on WhatsApp"
      >
        <BsWhatsapp size={26} color="white" />
      </motion.a>

      {/* Mobile Sticky Booking Bar */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="sticky-book-bar"
      >
        <div className="flex gap-3">
          <a
            href="tel:+916300407182"
            className="flex-1 btn-outline-gold py-3.5 rounded-xl text-sm font-body font-semibold flex items-center justify-center gap-2"
          >
            <FiPhone size={16} />
            Call
          </a>

          <a
            href="#booking"
            className="flex-[2] btn-gold py-3.5 rounded-xl text-sm font-body font-semibold flex items-center justify-center gap-2"
          >
            <FiCalendar size={16} />
            Book Appointment
          </a>
        </div>
      </motion.div>
    </>
  );
}

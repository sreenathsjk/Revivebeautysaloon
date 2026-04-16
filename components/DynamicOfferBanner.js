import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import { BsLightningCharge } from 'react-icons/bs';

const BANNERS = [
  { text: '🎉 New Client? Get 20% OFF your first visit! Use code: REVIVE20', link: '#booking' },
  { text: '💇 Keratin Treatment from ₹2,499 only — Limited slots this week!', link: '#booking' },
  { text: '👰 Bridal Packages starting ₹3,999 — Book 2 weeks in advance!', link: '#offers' },
  { text: '⭐ Weekend Special: Hair Spa + De-Tan + Pedicure @ ₹999', link: '#offers' },
  { text: '💳 Gold Membership: 25% OFF every visit — Join today!', link: '#offers' },
];

export default function DynamicOfferBanner() {
  const [visible, setVisible] = useState(true);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % BANNERS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="relative z-50 bg-gold-gradient text-obsidian py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <BsLightningCharge size={14} className="flex-shrink-0 animate-pulse" />
          <div className="overflow-hidden h-5 relative flex-1">
            <AnimatePresence mode="wait">
              <motion.a
                key={current}
                href={BANNERS[current].link}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-xs md:text-sm font-body font-semibold truncate block hover:underline"
              >
                {BANNERS[current].text}
              </motion.a>
            </AnimatePresence>
          </div>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="flex-shrink-0 hover:opacity-70 transition-opacity"
          aria-label="Close banner"
        >
          <FiX size={16} />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-1 mt-1">
        {BANNERS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === current ? 'w-4 bg-obsidian' : 'w-1 bg-obsidian/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiMapPin, FiClock, FiPhone, FiNavigation } from 'react-icons/fi';

const hours = [
  { day: 'Monday – Friday', time: '10:00 AM – 8:00 PM', open: true },
  { day: 'Saturday', time: '9:00 AM – 9:00 PM', open: true },
  { day: 'Sunday', time: '10:00 AM – 6:00 PM', open: true },
];

export default function Location() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="location" className="section-pad noise-bg">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Heading */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-xs tracking-[0.3em] uppercase text-gold-400 font-body mb-3"
          >
            Come Visit Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-4xl md:text-5xl text-white"
          >
            Find{' '}
            <span className="text-shimmer italic">Our Salon</span>
          </motion.h2>
          <div className="gold-divider" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Address */}
            <div className="glass-card p-6 flex gap-4">
              <div className="w-11 h-11 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 flex-shrink-0">
                <FiMapPin size={20} />
              </div>
              <div>
                <h4 className="font-display font-semibold text-white mb-1">Address</h4>
                <p className="text-sm text-white/60 font-body leading-relaxed">
                  Revive Beauty Saloon,
                  <br />
                  {/* Replace with actual address */}
                  Shop No. X, Main Road,
                  <br />
                  [Your Area], Hyderabad – 500xxx
                </p>
                <a
                  href="https://maps.app.goo.gl/YOUR_GOOGLE_MAPS_LINK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-3 text-xs font-body font-semibold text-gold-400 hover:text-gold-300 transition-colors"
                >
                  <FiNavigation size={12} />
                  Get Directions
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="glass-card p-6 flex gap-4">
              <div className="w-11 h-11 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 flex-shrink-0">
                <FiPhone size={20} />
              </div>
              <div>
                <h4 className="font-display font-semibold text-white mb-1">Contact</h4>
                <a href="tel:+919999999999" className="block text-sm text-white/60 font-body hover:text-gold-400 transition-colors">
                  +91 99999 99999
                </a>
                <a href="tel:+918888888888" className="block text-sm text-white/60 font-body hover:text-gold-400 transition-colors mt-1">
                  +91 88888 88888
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="glass-card p-6">
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 flex-shrink-0">
                  <FiClock size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="font-display font-semibold text-white mb-3">Working Hours</h4>
                  <div className="space-y-2.5">
                    {hours.map((h) => (
                      <div key={h.day} className="flex items-center justify-between">
                        <span className="text-sm text-white/60 font-body">{h.day}</span>
                        <span className="text-xs font-body font-semibold text-gold-400">
                          {h.time}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs text-emerald-400 font-body font-semibold">Open Now</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://maps.app.goo.gl/YOUR_GOOGLE_MAPS_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex items-center justify-center gap-2 w-full py-4 rounded-full font-body font-semibold"
            >
              <FiNavigation size={16} />
              Open in Google Maps
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-2xl overflow-hidden border border-gold-500/20 shadow-2xl shadow-gold-500/5 h-[420px] md:h-[500px]"
          >
            {/* Replace src with actual Google Maps embed URL */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3159674609!2d78.24323445!3d17.41259849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1707000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Revive Beauty Saloon Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';
import { GiScissors } from 'react-icons/gi';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Offers', href: '#offers' },
  { label: 'Location', href: '#location' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-obsidian/95 backdrop-blur-xl border-b border-gold-500/20 py-3 shadow-2xl'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-gold-gradient flex items-center justify-center shadow-lg">
              <GiScissors className="text-obsidian text-lg" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display font-bold text-base text-shimmer">Revive</span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-gold-400/70 font-body">
                Beauty Saloon
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-white/70 hover:text-gold-400 transition-colors duration-300 tracking-wide font-body"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+919999999999"
              className="flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors text-sm font-body"
            >
              <FiPhone size={15} />
              <span>Call Now</span>
            </a>
            <a
              href="#booking"
              className="btn-gold px-5 py-2.5 rounded-full text-sm font-body font-semibold"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white/80 hover:text-gold-400 transition-colors p-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-40 bg-obsidian/98 backdrop-blur-2xl pt-20 pb-8 px-6 md:hidden border-b border-gold-500/20"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => setMenuOpen(false)}
                  className="text-xl font-display text-white/80 hover:text-gold-400 transition-colors border-b border-white/5 pb-4"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="flex flex-col gap-3 mt-2">
                <a
                  href="tel:+919999999999"
                  className="btn-outline-gold px-6 py-3 rounded-full text-center font-body font-semibold flex items-center justify-center gap-2"
                >
                  <FiPhone /> Call Now
                </a>
                <a
                  href="#booking"
                  onClick={() => setMenuOpen(false)}
                  className="btn-gold px-6 py-3 rounded-full text-center font-body font-semibold"
                >
                  Book Appointment
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

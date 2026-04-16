import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiAward, FiShield, FiHeart, FiStar } from 'react-icons/fi';
import { MdOutlineCleaningServices } from 'react-icons/md';
import { HiOutlineSparkles } from 'react-icons/hi';

const features = [
  {
    icon: <FiAward size={28} />,
    title: 'Certified Stylists',
    desc: 'Every artist is trained by top industry professionals with 5+ years of experience.',
  },
  {
    icon: <HiOutlineSparkles size={28} />,
    title: 'Premium Products',
    desc: 'We use only international salon-grade brands — Wella, Schwarzkopf, Loreal Pro.',
  },
  {
    icon: <FiHeart size={28} />,
    title: 'Affordable Luxury',
    desc: 'Premium results at prices that won\'t break the bank. Value every rupee, every visit.',
  },
  {
    icon: <MdOutlineCleaningServices size={28} />,
    title: 'Hygiene & Safety',
    desc: 'Sanitized tools, fresh towels & PPE standards followed at every workstation.',
  },
  {
    icon: <FiStar size={28} />,
    title: 'Personalized Care',
    desc: 'We listen first, then create. Your style vision is our priority every single time.',
  },
  {
    icon: <FiShield size={28} />,
    title: 'Satisfaction Guarantee',
    desc: '100% satisfaction or we redo — your happiness is non-negotiable for us.',
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="why-us" className="section-pad noise-bg relative overflow-hidden">
      {/* BG glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-xs tracking-[0.3em] uppercase text-gold-400 font-body mb-3"
          >
            Why Revive
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-4xl md:text-5xl text-white"
          >
            The{' '}
            <span className="text-shimmer italic">Revive</span>{' '}
            Difference
          </motion.h2>
          <div className="gold-divider" />
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card glass-card-hover p-7 flex gap-5"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400">
                {f.icon}
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg text-white mb-1.5">
                  {f.title}
                </h3>
                <p className="text-sm text-white/55 font-body leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-12 rounded-2xl overflow-hidden relative"
        >
          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80"
            alt="Salon interior"
            className="w-full h-56 md:h-72 object-cover object-top"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian/90 via-obsidian/60 to-transparent flex items-center">
            <div className="px-8 md:px-14">
              <p className="font-accent italic text-gold-400 text-lg mb-2">
                "Where beauty meets expertise"
              </p>
              <h3 className="font-display font-bold text-white text-3xl md:text-4xl max-w-sm leading-tight">
                Visit Us & Experience
                <br />The Difference
              </h3>
              <a
                href="#booking"
                className="btn-gold inline-block mt-5 px-7 py-3 rounded-full text-sm font-body font-semibold"
              >
                Book a Free Consultation
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

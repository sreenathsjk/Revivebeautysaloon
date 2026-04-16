import { motion } from 'framer-motion';
import { FiPhone, FiCalendar, FiChevronDown } from 'react-icons/fi';
import { BsStarFill } from 'react-icons/bs';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&q=80"
          alt="Premium salon interior"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/80 via-obsidian/60 to-obsidian/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/70 to-transparent" />
      </div>

      {/* Decorative gold orbs */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-gold-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/5 w-48 h-48 rounded-full bg-gold-400/8 blur-[80px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 pt-24 pb-16 text-center md:text-left">
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6"
        >
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <BsStarFill key={i} className="star-filled text-xs" />
            ))}
          </div>
          <span className="text-xs text-white/70 font-body tracking-wide">
            Top Rated Salon • Hyderabad
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.25}
          className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-4"
        >
          Transform Your Look
          <br />
          <span className="text-shimmer italic">with Expert Styling</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="font-accent text-lg md:text-xl text-white/60 mb-10 max-w-xl leading-relaxed"
        >
          Premium Salon Experience Near You — where every visit is a luxury, every service is
          an art.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.55}
          className="flex flex-col sm:flex-row gap-4 items-center md:items-start justify-center md:justify-start"
        >
          <a
            href="#booking"
            className="btn-gold px-8 py-4 rounded-full font-body font-semibold text-base flex items-center gap-2.5 w-full sm:w-auto justify-center"
          >
            <FiCalendar size={18} />
            Book Appointment
          </a>
          <a
            href="tel:+919999999999"
            className="btn-outline-gold px-8 py-4 rounded-full font-body font-semibold text-base flex items-center gap-2.5 w-full sm:w-auto justify-center"
          >
            <FiPhone size={18} />
            Call Now
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.7}
          className="flex flex-wrap gap-6 mt-12 justify-center md:justify-start"
        >
          {[
            { num: '500+', label: 'Happy Clients' },
            { num: '8+', label: 'Years Experience' },
            { num: '20+', label: 'Expert Stylists' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-display font-bold text-gold-400">
                {stat.num}
              </div>
              <div className="text-xs text-white/50 font-body tracking-widest uppercase mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 text-xs font-body tracking-widest uppercase"
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FiChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}

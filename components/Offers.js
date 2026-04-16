import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiOutlineSparkles } from 'react-icons/hi';
import { FiCheck, FiPercent } from 'react-icons/fi';
import { BsLightningCharge } from 'react-icons/bs';

const offers = [
  {
    badge: '🎉 NEW CLIENT',
    title: 'First Visit Offer',
    discount: '20% OFF',
    desc: 'On any single service for new clients. Show this page at reception.',
    code: 'REVIVE20',
    cta: 'Claim Offer',
    highlight: false,
  },
  {
    badge: '⭐ BEST SELLER',
    title: 'Bridal Package',
    discount: '₹3,999',
    desc: 'Complete bridal prep: Makeup + Hairstyling + Facial + Manicure. Combo value ₹7,500.',
    code: 'BRIDAL2025',
    cta: 'Book Now',
    highlight: true,
  },
  {
    badge: '💆 SELF CARE',
    title: 'Weekend Special',
    discount: '₹999',
    desc: 'Hair Spa + De-tan + Pedicure. Saturday & Sunday only. Limited slots!',
    code: 'WEEKEND999',
    cta: 'Book This',
    highlight: false,
  },
];

const memberships = [
  {
    title: 'Silver',
    price: '₹999/month',
    perks: ['15% off all services', 'Priority booking', '1 free haircut/month', 'Birthday discount 25%'],
    color: '#c0c0c0',
  },
  {
    title: 'Gold',
    price: '₹1,999/month',
    perks: ['25% off all services', 'VIP priority booking', '2 free services/month', 'Free product samples', 'Birthday discount 40%'],
    color: '#d4a017',
    popular: true,
  },
  {
    title: 'Diamond',
    price: '₹3,499/month',
    perks: ['35% off all services', 'Dedicated stylist', '4 free services/month', 'Monthly premium facial', 'Exclusive event invites'],
    color: '#80c8e8',
  },
];

export default function Offers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="offers" className="section-pad bg-obsidian">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Heading */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-xs tracking-[0.3em] uppercase text-gold-400 font-body mb-3"
          >
            Save More, Glow More
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-4xl md:text-5xl text-white"
          >
            Exclusive{' '}
            <span className="text-shimmer italic">Offers</span>
          </motion.h2>
          <div className="gold-divider" />
        </div>

        {/* Offer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {offers.map((o, i) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative rounded-2xl p-6 overflow-hidden border transition-all duration-300 hover:-translate-y-1 ${
                o.highlight
                  ? 'bg-gradient-to-br from-gold-500/20 to-gold-600/10 border-gold-500/50 shadow-lg shadow-gold-500/10'
                  : 'glass-card border-white/10 hover:border-gold-500/30'
              }`}
            >
              {o.highlight && (
                <div className="absolute top-4 right-4">
                  <BsLightningCharge className="text-gold-400 animate-pulse" size={20} />
                </div>
              )}
              <span className="text-xs font-body font-semibold text-gold-400 tracking-widest uppercase">
                {o.badge}
              </span>
              <h3 className="font-display font-bold text-xl text-white mt-2 mb-1">{o.title}</h3>
              <div className="text-3xl font-display font-bold text-shimmer my-3">{o.discount}</div>
              <p className="text-sm text-white/60 font-body leading-relaxed mb-4">{o.desc}</p>
              <div className="bg-white/5 border border-gold-500/20 rounded-lg px-3 py-2 inline-flex items-center gap-2 mb-5">
                <FiPercent size={12} className="text-gold-400" />
                <span className="text-xs font-body font-semibold text-gold-400 tracking-widest">
                  {o.code}
                </span>
              </div>
              <br />
              <a
                href="#booking"
                className={`inline-block px-6 py-2.5 rounded-full text-sm font-body font-semibold transition-all ${
                  o.highlight
                    ? 'btn-gold'
                    : 'btn-outline-gold'
                }`}
              >
                {o.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Membership Section */}
        <div>
          <div className="text-center mb-10">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="font-display font-bold text-3xl text-white"
            >
              Salon{' '}
              <span className="text-shimmer italic">Membership</span>
            </motion.h3>
            <p className="text-white/50 font-body text-sm mt-2">
              Save more, look better, every month.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {memberships.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + i * 0.12 }}
                className={`relative rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1 ${
                  m.popular
                    ? 'bg-gradient-to-br from-gold-500/15 to-gold-600/5 border-gold-500/50 shadow-xl shadow-gold-500/10'
                    : 'glass-card border-white/10 hover:border-white/20'
                }`}
              >
                {m.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gold-gradient text-obsidian text-xs font-body font-bold px-4 py-1 rounded-full whitespace-nowrap">
                      ✨ Most Popular
                    </span>
                  </div>
                )}

                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${m.color}25`, border: `1px solid ${m.color}60` }}
                >
                  <HiOutlineSparkles size={20} style={{ color: m.color }} />
                </div>

                <h4 className="font-display font-bold text-2xl text-white">{m.title}</h4>
                <p className="font-body font-semibold mt-1 mb-5" style={{ color: m.color }}>
                  {m.price}
                </p>

                <ul className="space-y-3 mb-7">
                  {m.perks.map((p) => (
                    <li key={p} className="flex items-start gap-2.5">
                      <FiCheck size={14} className="mt-0.5 flex-shrink-0" style={{ color: m.color }} />
                      <span className="text-sm text-white/65 font-body">{p}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#booking"
                  className={`block w-full text-center py-3 rounded-full text-sm font-body font-semibold transition-all ${
                    m.popular
                      ? 'btn-gold'
                      : 'btn-outline-gold'
                  }`}
                  style={!m.popular ? { borderColor: m.color, color: m.color } : {}}
                >
                  Get {m.title} Plan
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

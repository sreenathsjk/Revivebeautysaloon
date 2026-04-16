import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BsStarFill, BsGoogle } from 'react-icons/bs';
import { FiMessageSquare } from 'react-icons/fi';

const reviews = [
  {
    name: 'Priya Sharma',
    avatar: 'P',
    rating: 5,
    time: '2 weeks ago',
    text: 'Absolutely love Revive! Got the balayage done and the result is stunning. The stylist really understood my vision. Will 100% recommend to everyone!',
    service: 'Balayage Color',
    color: '#d4a017',
  },
  {
    name: 'Sneha Reddy',
    avatar: 'S',
    rating: 5,
    time: '1 month ago',
    text: 'Best bridal makeup I\'ve ever seen. My wedding photos came out perfect! Every guest was asking who did my makeup. So happy with the team here.',
    service: 'Bridal Makeup',
    color: '#e88080',
  },
  {
    name: 'Divya Krishnamurthy',
    avatar: 'D',
    rating: 5,
    time: '3 weeks ago',
    text: 'The keratin treatment transformed my frizzy hair into silk. The staff is so professional and the ambience is super clean and premium. Coming back for sure!',
    service: 'Keratin Treatment',
    color: '#80c8e8',
  },
  {
    name: 'Meghana Rao',
    avatar: 'M',
    rating: 5,
    time: '5 days ago',
    text: 'Amazing facial! My skin was glowing for days. Very reasonable pricing for such premium services. Finally found my go-to salon in Hyderabad!',
    service: 'Skin Facial',
    color: '#a0d4a0',
  },
  {
    name: 'Ananya Bhat',
    avatar: 'A',
    rating: 5,
    time: '2 months ago',
    text: 'I was nervous about my first hair coloring but the team made me feel so comfortable. The global color looks exactly like the reference. Very skilled team!',
    service: 'Global Color',
    color: '#c880e8',
  },
  {
    name: 'Lakshmi Venkat',
    avatar: 'L',
    rating: 4,
    time: '1 week ago',
    text: 'Great experience overall! Manicure and pedicure done beautifully. The nail art was spot on. Only suggestion — need more parking space nearby. But service is top-notch!',
    service: 'Nail Art',
    color: '#e8b080',
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <BsStarFill
          key={i}
          size={13}
          className={i < count ? 'star-filled' : 'text-white/20'}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="reviews" className="section-pad bg-obsidian">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Heading */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-xs tracking-[0.3em] uppercase text-gold-400 font-body mb-3"
          >
            Client Love
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-4xl md:text-5xl text-white"
          >
            What Our{' '}
            <span className="text-shimmer italic">Clients Say</span>
          </motion.h2>
          <div className="gold-divider" />

          {/* Google rating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-3 glass-card px-5 py-3 rounded-full mt-6"
          >
            <BsGoogle size={18} className="text-[#4285f4]" />
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <BsStarFill key={i} size={14} className="star-filled" />
              ))}
            </div>
            <span className="font-display font-bold text-white text-lg">4.9</span>
            <span className="text-xs text-white/50 font-body">(120+ Reviews on Google)</span>
          </motion.div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card glass-card-hover p-6 flex flex-col gap-4"
            >
              {/* Top */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-obsidian text-lg flex-shrink-0"
                    style={{ backgroundColor: r.color }}
                  >
                    {r.avatar}
                  </div>
                  <div>
                    <p className="font-body font-semibold text-white text-sm">{r.name}</p>
                    <p className="text-xs text-white/40 font-body">{r.time}</p>
                  </div>
                </div>
                <BsGoogle size={14} className="text-[#4285f4] opacity-60" />
              </div>

              <StarRating count={r.rating} />

              <p className="text-sm text-white/65 font-body leading-relaxed flex-1">
                "{r.text}"
              </p>

              <div className="flex items-center gap-1.5">
                <FiMessageSquare size={11} className="text-gold-400" />
                <span className="text-xs text-gold-400/70 font-body">{r.service}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-10"
        >
          <a
            href="https://g.page/r/YOUR_GOOGLE_PLACE_ID/review"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold inline-flex items-center gap-2 px-7 py-3 rounded-full font-body font-semibold text-sm"
          >
            <BsGoogle size={15} />
            Leave a Google Review
          </a>
        </motion.div>
      </div>
    </section>
  );
}

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const gallery = [
  {
    before: 'https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?w=500&q=80',
    after: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&q=80',
    label: 'Hair Transformation',
  },
  {
    before: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=500&q=80',
    after: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=500&q=80',
    label: 'Balayage Color',
  },
  {
    before: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=500&q=80',
    after: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=500&q=80',
    label: 'Bridal Makeup',
  },
  {
    before: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=500&q=80',
    after: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&q=80',
    label: 'Skin Glow Facial',
  },
];

function BeforeAfterCard({ item }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative rounded-2xl overflow-hidden cursor-pointer group h-72 md:h-80"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onTouchStart={() => setHover(!hover)}
    >
      {/* Before */}
      <img
        src={item.before}
        alt={`Before ${item.label}`}
        loading="lazy"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${hover ? 'opacity-0' : 'opacity-100'}`}
      />
      {/* After */}
      <img
        src={item.after}
        alt={`After ${item.label}`}
        loading="lazy"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${hover ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent z-10" />

      {/* Labels */}
      <div className="absolute top-3 left-3 z-20">
        <span className={`text-xs font-body font-semibold px-3 py-1 rounded-full transition-all duration-500 ${
          hover ? 'bg-gold-gradient text-obsidian' : 'bg-white/20 text-white backdrop-blur-sm'
        }`}>
          {hover ? '✨ After' : '📷 Before'}
        </span>
      </div>

      {/* Tap hint */}
      <div className="absolute top-3 right-3 z-20">
        <span className="text-[10px] text-white/50 font-body">Hover/Tap</span>
      </div>

      {/* Bottom label */}
      <div className="absolute bottom-4 left-4 z-20">
        <p className="font-display font-semibold text-white">{item.label}</p>
      </div>
    </div>
  );
}

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="gallery" className="section-pad bg-obsidian">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Heading */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-xs tracking-[0.3em] uppercase text-gold-400 font-body mb-3"
          >
            Real Results
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-4xl md:text-5xl text-white"
          >
            Before &{' '}
            <span className="text-shimmer italic">After</span>
          </motion.h2>
          <div className="gold-divider" />
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-white/50 font-body text-sm mt-3 max-w-md mx-auto"
          >
            Hover or tap each card to reveal the transformation ✨
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {gallery.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <BeforeAfterCard item={item} />
            </motion.div>
          ))}
        </div>

        {/* Work samples row */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400&q=80',
            'https://images.unsplash.com/photo-1500840216050-6ffa99d75160?w=400&q=80',
            'https://images.unsplash.com/photo-1607008829749-c0f284a49fc4?w=400&q=80',
            'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=400&q=80',
          ].map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              className="rounded-xl overflow-hidden h-36 md:h-48 group"
            >
              <img
                src={src}
                alt="Salon work"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

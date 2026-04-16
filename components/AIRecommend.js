import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineSparkles } from 'react-icons/hi';
import { FiLoader } from 'react-icons/fi';

const QUESTIONS = [
  {
    key: 'goal',
    question: 'What\'s your main beauty goal today?',
    options: ['Refresh my look', 'Special occasion prep', 'Hair treatment', 'Skin care', 'Just pampering myself'],
  },
  {
    key: 'hair',
    question: 'How\'s your hair feeling lately?',
    options: ['Dry & frizzy', 'Oily & limp', 'Need a trim', 'Want a color change', 'My hair is fine'],
  },
  {
    key: 'skin',
    question: 'What about your skin?',
    options: ['Dull & tired', 'Tan & uneven tone', 'Oily & acne-prone', 'Dry & flaky', 'Skin is glowing already!'],
  },
];

const RECOMMENDATIONS = {
  default: [
    { name: 'Hair Spa', reason: 'Deeply nourishes and revitalizes tired hair', price: '₹600', emoji: '💆' },
    { name: 'Classic Facial', reason: 'Brightens skin and restores natural glow', price: '₹800', emoji: '✨' },
    { name: 'Manicure + Pedicure', reason: 'Complete hand & foot care for a refreshed feel', price: '₹700', emoji: '💅' },
  ],
  frizzy: [
    { name: 'Keratin Treatment', reason: 'Controls frizz and adds smooth shine for months', price: '₹2,500', emoji: '🌟' },
    { name: 'Hair Spa', reason: 'Intensive moisture boost for dry strands', price: '₹700', emoji: '💆' },
    { name: 'Deep Conditioning', reason: 'Restores protein balance in damaged hair', price: '₹500', emoji: '🫧' },
  ],
  occasion: [
    { name: 'Party Makeup', reason: 'Professional glam for your special day', price: '₹2,500', emoji: '💄' },
    { name: 'Hairstyling', reason: 'Elegant updo or blowout for the event', price: '₹600', emoji: '👑' },
    { name: 'Skin Brightening Facial', reason: 'Instant glow-up before your big moment', price: '₹1,200', emoji: '✨' },
  ],
  color: [
    { name: 'Balayage', reason: 'Natural-looking sun-kissed color, trending now', price: '₹4,000', emoji: '🌅' },
    { name: 'Highlights', reason: 'Adds dimension and light to your hair', price: '₹2,500', emoji: '⚡' },
    { name: 'Global Color', reason: 'Complete color refresh with premium products', price: '₹1,800', emoji: '🎨' },
  ],
};

export default function AIRecommend() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [recs, setRecs] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnswer = (key, value) => {
    const newAnswers = { ...answers, [key]: value };
    setAnswers(newAnswers);

    if (step < QUESTIONS.length - 1) {
      setStep((s) => s + 1);
    } else {
      generateRecs(newAnswers);
    }
  };

  const generateRecs = (ans) => {
    setLoading(true);
    setTimeout(() => {
      let result = RECOMMENDATIONS.default;
      if (ans.goal === 'Special occasion prep') result = RECOMMENDATIONS.occasion;
      else if (ans.goal === 'Hair treatment' && ans.hair === 'Dry & frizzy') result = RECOMMENDATIONS.frizzy;
      else if (ans.goal === 'Want a color change' || ans.hair === 'Want a color change') result = RECOMMENDATIONS.color;
      setRecs(result);
      setLoading(false);
    }, 1800);
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setRecs(null);
    setLoading(false);
  };

  return (
    <section className="section-pad bg-obsidian">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 px-4 py-2 rounded-full mb-5"
          >
            <HiOutlineSparkles className="text-gold-400" size={16} />
            <span className="text-xs text-gold-400 font-body font-semibold tracking-widest uppercase">
              AI Powered
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-4xl text-white"
          >
            Find Your{' '}
            <span className="text-shimmer italic">Perfect Service</span>
          </motion.h2>
          <div className="gold-divider" />
          <p className="text-white/50 font-body text-sm mt-3">
            Answer 3 quick questions — we'll recommend the best services for you ✨
          </p>
        </div>

        {/* Quiz Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-7 md:p-10"
        >
          <AnimatePresence mode="wait">
            {loading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-10"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                  className="inline-block text-gold-400 mb-4"
                >
                  <FiLoader size={36} />
                </motion.div>
                <p className="font-display text-white text-lg">Personalizing for you...</p>
                <p className="text-white/40 font-body text-sm mt-1">Our AI is crafting your perfect routine</p>
              </motion.div>
            ) : recs ? (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <div className="flex items-center gap-2 mb-6">
                  <HiOutlineSparkles className="text-gold-400" size={20} />
                  <h3 className="font-display font-bold text-white text-xl">
                    Your Personalized Picks
                  </h3>
                </div>
                <div className="space-y-4 mb-6">
                  {recs.map((r, i) => (
                    <motion.div
                      key={r.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.15 }}
                      className="flex items-center gap-4 bg-white/5 border border-gold-500/15 rounded-xl p-4"
                    >
                      <div className="text-3xl flex-shrink-0">{r.emoji}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-display font-semibold text-white">{r.name}</h4>
                          <span className="text-xs font-body font-bold text-gold-400">{r.price}</span>
                        </div>
                        <p className="text-xs text-white/55 font-body mt-0.5">{r.reason}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href="#booking" className="btn-gold flex-1 py-3.5 rounded-full text-sm font-body font-semibold text-center">
                    Book These Services
                  </a>
                  <button
                    onClick={reset}
                    className="btn-outline-gold px-6 py-3.5 rounded-full text-sm font-body font-semibold"
                  >
                    Retake
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={`question-${step}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                {/* Progress */}
                <div className="flex gap-2 mb-6">
                  {QUESTIONS.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                        i <= step ? 'bg-gold-500' : 'bg-white/10'
                      }`}
                    />
                  ))}
                </div>

                <p className="text-xs text-white/40 font-body uppercase tracking-widest mb-2">
                  Question {step + 1} of {QUESTIONS.length}
                </p>
                <h3 className="font-display font-bold text-white text-xl mb-6">
                  {QUESTIONS[step].question}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {QUESTIONS[step].options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleAnswer(QUESTIONS[step].key, opt)}
                      className="text-left px-4 py-3.5 rounded-xl border border-white/10 text-sm font-body text-white/70 hover:border-gold-500/50 hover:bg-gold-500/8 hover:text-white transition-all duration-300"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

 import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiUser, FiPhone, FiCalendar, FiClock, FiCheckCircle, FiLoader } from 'react-icons/fi';
import { BsWhatsapp } from 'react-icons/bs';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

const SERVICES = [
  'Haircut & Styling',
  'Hair Spa',
  'Keratin Treatment',
  'Smoothening',
  'Global Color',
  'Balayage',
  'Highlights',
  'Facial',
  'De-Tan',
  'Skin Brightening',
  'Manicure',
  'Pedicure',
  'Nail Art',
  'Bridal Makeup',
  'Party Makeup',
  'Beard Grooming',
  'Hair Cut (Men)',
  'Head Massage',
];

const TIME_SLOTS = [
  '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM',
  '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
  '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM',
  '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM',
];

// ✅ UPDATED PHONE NUMBER HERE
const SALON_PHONE = '916300407182';

export default function Booking() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: '',
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.service || !form.date || !form.time) {
      alert('Please fill in all required fields.');
      return;
    }
    setStatus('loading');
    try {
      await addDoc(collection(db, 'bookings'), {
        ...form,
        createdAt: serverTimestamp(),
        status: 'pending',
      });
      setStatus('success');
      setForm({ name: '', phone: '', service: '', date: '', time: '', notes: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  const handleWhatsApp = () => {
    const text = `Hi Revive Beauty Saloon! 🌟\n\nI'd like to book an appointment:\n\n👤 Name: ${form.name || '[Your Name]'}\n📞 Phone: ${form.phone || '[Your Phone]'}\n💇 Service: ${form.service || '[Select Service]'}\n📅 Date: ${form.date || '[Select Date]'}\n⏰ Time: ${form.time || '[Select Time]'}\n\nPlease confirm my booking. Thank you!`;
    window.open(`https://wa.me/${SALON_PHONE}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="booking" className="section-pad noise-bg relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10" ref={ref}>
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-xs tracking-[0.3em] uppercase text-gold-400 font-body mb-3"
          >
            Reserve Your Slot
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-4xl md:text-5xl text-white"
          >
            Book Your <span className="text-shimmer italic">Appointment</span>
          </motion.h2>
          <div className="gold-divider" />
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-white/50 font-body text-sm mt-3"
          >
            Fill the form or message us on WhatsApp — we confirm within 10 minutes!
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass-card p-7 md:p-10"
        >
          {status === 'success' ? (
            <div className="text-center py-12">
              <FiCheckCircle className="text-gold-400 mx-auto mb-5" size={64} />
              <h3 className="font-display font-bold text-2xl text-white mb-3">
                Booking Confirmed! 🎉
              </h3>
              <p className="text-white/60 font-body text-sm mb-6">
                We've received your request. Our team will call you shortly.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="btn-gold px-7 py-3 rounded-full font-body font-semibold text-sm"
              >
                Book Another Appointment
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required className="input-gold" />
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" required className="input-gold" />
              </div>

              <select name="service" value={form.service} onChange={handleChange} required className="input-gold">
                <option value="" disabled>Choose a service...</option>
                {SERVICES.map((s) => <option key={s}>{s}</option>)}
              </select>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input type="date" name="date" value={form.date} onChange={handleChange} min={today} required className="input-gold" />
                <select name="time" value={form.time} onChange={handleChange} required className="input-gold">
                  <option value="" disabled>Select time...</option>
                  {TIME_SLOTS.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>

              <textarea name="notes" value={form.notes} onChange={handleChange} placeholder="Any requests..." className="input-gold" />

              <div className="flex gap-3">
                <button type="submit" className="btn-gold flex-1">Confirm Booking</button>
                <button type="button" onClick={handleWhatsApp} className="bg-[#25D366] text-white px-6 rounded-full">
                  WhatsApp
                </button>
              </div>

              {status === 'error' && (
                <p className="text-red-400 text-xs text-center">Something went wrong.</p>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
            }

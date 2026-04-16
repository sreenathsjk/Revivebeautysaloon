import { FiPhone, FiMapPin, FiMail, FiInstagram, FiYoutube } from 'react-icons/fi';
import { BsWhatsapp, BsFacebook } from 'react-icons/bs';
import { GiScissors } from 'react-icons/gi';

const footerLinks = {
  Services: ['Haircut & Styling', 'Hair Coloring', 'Keratin/Smoothening', 'Facials & Skin', 'Bridal Makeup', 'Nail Art'],
  'Quick Links': ['Book Appointment', 'Gallery', 'Reviews', 'Offers & Packages', 'Membership', 'Contact Us'],
};

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/5">
      {/* Top CTA bar */}
      <div className="bg-gold-gradient py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-display font-semibold text-obsidian text-lg">
            ✨ Ready for Your Transformation?
          </p>
          <a
            href="#booking"
            className="bg-obsidian text-gold-400 px-6 py-2.5 rounded-full text-sm font-body font-semibold hover:bg-charcoal transition-colors whitespace-nowrap"
          >
            Book Now →
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-full bg-gold-gradient flex items-center justify-center">
                <GiScissors className="text-obsidian" />
              </div>
              <div>
                <div className="font-display font-bold text-gold-400">Revive</div>
                <div className="text-[9px] tracking-widest uppercase text-white/40 font-body">
                  Beauty Saloon
                </div>
              </div>
            </div>
            <p className="text-sm text-white/50 font-body leading-relaxed mb-5">
              Premium salon experience at affordable prices. Your beauty, our passion — crafted with expertise and care.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              {[
                { Icon: FiInstagram, href: 'https://instagram.com/', color: '#E1306C' },
                { Icon: BsFacebook, href: 'https://facebook.com/', color: '#1877F2' },
                { Icon: BsWhatsapp, href: 'https://wa.me/919999999999', color: '#25D366' },
                { Icon: FiYoutube, href: 'https://youtube.com/', color: '#FF0000' },
              ].map(({ Icon, href, color }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full glass-card flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ '--hover-color': color }}
                >
                  <Icon size={16} className="text-white/60 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h5 className="font-display font-semibold text-white mb-4 text-sm tracking-wide">
                {title}
              </h5>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/45 hover:text-gold-400 transition-colors font-body"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h5 className="font-display font-semibold text-white mb-4 text-sm tracking-wide">
              Contact
            </h5>
            <div className="space-y-4">
              <a href="tel:+919999999999" className="flex items-start gap-3 group">
                <FiPhone size={15} className="text-gold-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/50 group-hover:text-gold-400 transition-colors font-body">
                  +91 99999 99999
                </span>
              </a>
              <div className="flex items-start gap-3">
                <FiMapPin size={15} className="text-gold-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/50 font-body leading-relaxed">
                  [Your Address], Hyderabad, Telangana
                </span>
              </div>
              <a href="mailto:hello@revivebeautysaloon.com" className="flex items-start gap-3 group">
                <FiMail size={15} className="text-gold-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/50 group-hover:text-gold-400 transition-colors font-body break-all">
                  hello@revivebeautysaloon.com
                </span>
              </a>
            </div>

            {/* Opening hours mini */}
            <div className="mt-5 glass-card p-4 rounded-xl">
              <p className="text-xs text-gold-400 font-body font-semibold uppercase tracking-widest mb-2">
                Today's Hours
              </p>
              <p className="text-sm text-white/60 font-body">10:00 AM – 8:00 PM</p>
              <div className="flex items-center gap-1.5 mt-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-emerald-400 font-body">Open Now</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30 font-body text-center sm:text-left">
            © {new Date().getFullYear()} Revive Beauty Saloon. All rights reserved.
          </p>
          <p className="text-xs text-white/20 font-body">
            Designed with ❤️ for premium beauty experiences
          </p>
        </div>
      </div>
    </footer>
  );
}

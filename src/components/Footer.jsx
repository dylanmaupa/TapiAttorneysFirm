import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, MapPin, Phone, Mail, Clock, Linkedin, Facebook, Twitter, ArrowRight } from 'lucide-react';

const Footer = () => {
  const services = [
    'Civil & Commercial Litigation',
    'Family Law',
    'Property & Conveyancing',
    'Labour & Employment Law',
    'Criminal Law',
    'Estates & Trusts',
  ];

  const quickLinks = [
    { name: 'About Us',     href: '/about'    },
    { name: 'Our Services', href: '/services' },
    { name: 'Our Team',     href: '/team'     },
    { name: 'Insights',     href: '/blog'     },
    { name: 'Contact Us',   href: '/contact'  },
  ];

  return (
    <footer className="bg-charcoal-900 text-white">
      {/* Top CTA Banner */}
      <div className="bg-navy-600 border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-serif font-bold text-xl text-white">
                Ready to discuss your legal matter?
              </p>
              <p className="text-cream-200/70 text-sm mt-1">
                Our experienced team is available Mon–Sat for consultations.
              </p>
            </div>
            <Link
              to="/contact"
              className="btn-gold flex-shrink-0 inline-flex items-center px-6 py-3 rounded-lg font-semibold text-sm whitespace-nowrap"
            >
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Firm Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-5" aria-label="Chikwangwani Tapi Attorneys - Home">
              <img
                src="/cta-logo-white.png"
                alt="Chikwangwani Tapi Attorneys"
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-cream-300/60 text-sm leading-relaxed mb-6">
              A boutique law firm committed to exceptional legal services with integrity,
              professionalism, and personalized attention to every client.
            </p>
            {/* Social Links */}
            <div className="flex items-center space-x-3">
              {[
                { icon: Linkedin, label: 'LinkedIn', href: '#' },
                { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/p/Chikwangwani-Tapi-Attorneys-100047311796267/' },
                { icon: Twitter,  label: 'Twitter',  href: '#' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-gold-500/20 flex items-center justify-center text-cream-300/50 hover:text-gold-500 hover:border-gold-500/60 transition-all duration-200"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-cream-300/60 hover:text-gold-400 text-sm transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-3 h-px bg-gold-500/40 mr-2 group-hover:w-5 transition-all duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">
              Practice Areas
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-cream-300/60 hover:text-gold-400 text-sm transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-3 h-px bg-gold-500/40 mr-2 group-hover:w-5 transition-all duration-200" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">
              Our Offices
            </h4>
            <div className="space-y-5">

              {/* Harare — Head Office */}
              <div>
                <p className="text-gold-500 text-xs font-semibold uppercase tracking-widest mb-2">Head Office — Harare</p>
                <div className="space-y-2">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-4 w-4 text-gold-500 mt-0.5 flex-shrink-0" />
                    <p className="text-cream-300/60 text-sm">
                      2nd Floor, Red Bridge Northwing<br />
                      Eastgate Centre, Harare
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-gold-500 flex-shrink-0" />
                    <a href="tel:+2638677211814" className="text-cream-300/60 hover:text-gold-400 text-sm transition-colors">
                      +263 8677211814
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-gold-500 flex-shrink-0" />
                    <a href="mailto:info@ctattorneys.co.zw" className="text-cream-300/60 hover:text-gold-400 text-sm transition-colors">
                      info@ctattorneys.co.zw
                    </a>
                  </div>
                </div>
              </div>

              {/* Kadoma — Branch Office */}
              <div className="border-t border-gold-500/10 pt-5">
                <p className="text-cream-300/40 text-xs font-semibold uppercase tracking-widest mb-2">Branch Office — Kadoma</p>
                <div className="space-y-2">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-4 w-4 text-gold-500 mt-0.5 flex-shrink-0" />
                    <p className="text-cream-300/60 text-sm">10 Warwick Street <br/> Kadoma, Zimbabwe</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-gold-500 flex-shrink-0" />
                    <a href="mailto:kadoma.office@ctattorneys.co.zw" className="text-cream-300/60 hover:text-gold-400 text-sm transition-colors">
                      kadoma.office@ctattorneys.co.zw
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-3 border-t border-gold-500/10 pt-4">
                <Clock className="h-4 w-4 text-gold-500 mt-0.5 flex-shrink-0" />
                <p className="text-cream-300/60 text-sm">
                  Mon – Fri: 8:00 AM – 5:00 PM<br />
                  Sat: 9:00 AM – 1:00 PM
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-cream-300/40 text-xs">
            © {new Date().getFullYear()} Chikwangwani Tapi Attorneys. All rights reserved.
          </p>
          {/* <div className="flex items-center space-x-5">
            {['Privacy Policy', 'Terms of Service', 'Disclaimer'].map((item) => (
              <a key={item} href="#" className="text-cream-300/40 hover:text-gold-500 text-xs transition-colors">
                {item}
              </a>
            ))}
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
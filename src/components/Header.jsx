import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Scale, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Scroll-aware header: transparent at top → frosted glass when scrolled
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navigation = [
    { name: 'Home',     href: '/' },
    { name: 'About',    href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Team',     href: '/team' },
    { name: 'Insights', href: '/blog' },
    { name: 'Contact',  href: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass shadow-md border-b border-gold-200'
          : 'bg-cream-100/95 border-b border-cream-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">

          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0 group" aria-label="Chikwangwani Tapi Attorneys - Home">
            <img
              src="/cta-logo-white.png"
              alt="Chikwangwani Tapi Attorneys"
              className="h-12 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive(item.href)
                    ? 'text-gold-600 bg-gold-50'
                    : 'text-charcoal-700 hover:text-navy-600 hover:bg-cream-200'
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <span className="absolute bottom-0.5 left-4 right-4 h-0.5 bg-gold-500 rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="tel:+2638677211814"
              className="flex items-center space-x-2 text-sm text-navy-600 font-medium hover:text-gold-600 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>+263 8677211814</span>
            </a>
            <Link
              to="/contact"
              className="btn-gold inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-semibold"
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            id="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-navy-600 hover:bg-cream-200 transition-colors"
            aria-label="Toggle menu"
          >
            <div className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : 'rotate-0'}`}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="border-t border-cream-300 py-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                  isActive(item.href)
                    ? 'text-gold-600 bg-gold-50 border-l-2 border-gold-500'
                    : 'text-charcoal-700 hover:text-navy-600 hover:bg-cream-200'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 px-4 pb-2 border-t border-cream-300 mt-2">
              <Link
                to="/contact"
                className="btn-gold w-full flex items-center justify-center px-5 py-3 rounded-lg text-sm font-semibold"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
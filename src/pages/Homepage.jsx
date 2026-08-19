import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Scale, Users, Home, Briefcase, Shield, FileText, ChevronRight, Quote, Star, Phone } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';

/* ─── Animated Counter Hook ─── */
function useCountUp(target, duration = 2000, startTrigger = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!startTrigger) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, startTrigger]);
  return count;
}

/* ─── Stats Item ─── */
const StatItem = ({ value, suffix, label, trigger }) => {
  const count = useCountUp(value, 1800, trigger);
  return (
    <div className="text-center px-6">
      <p className="font-serif font-bold text-4xl lg:text-5xl text-gold-500">
        {count}{suffix}
      </p>
      <p className="text-cream-300/70 text-sm font-medium mt-2 uppercase tracking-widest">
        {label}
      </p>
    </div>
  );
};

/* ─── Main Component ─── */
const Homepage = () => {
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.4 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const featuredServices = [
    {
      icon: <Scale className="h-7 w-7" />,
      title: 'Civil & Commercial Litigation',
      description: 'Comprehensive representation in civil disputes, contractual claims, and urgent High Court applications.',
      href: '/services',
    },
    {
      icon: <Users className="h-7 w-7" />,
      title: 'Family Law',
      description: 'Sensitive, professional handling of divorce, custody, maintenance and domestic relation matters.',
      href: '/services',
    },
    {
      icon: <Home className="h-7 w-7" />,
      title: 'Property & Conveyancing',
      description: 'Expert guidance through property transactions, deeds registration, and conveyancing services.',
      href: '/services',
    },
    {
      icon: <Briefcase className="h-7 w-7" />,
      title: 'Labour & Employment Law',
      description: 'Protecting rights of both employers and employees in workplace disputes and compliance matters.',
      href: '/services',
    },
    {
      icon: <Shield className="h-7 w-7" />,
      title: 'Criminal Law',
      description: 'Experienced criminal defense and bail applications with focus on protecting your rights throughout.',
      href: '/services',
    },
    {
      icon: <FileText className="h-7 w-7" />,
      title: 'Estates & Trusts',
      description: 'Comprehensive will drafting, estate administration and trust formation to secure your legacy.',
      href: '/services',
    },
  ];

  const testimonials = [
    {
      name: 'T. Moyo',
      title: 'Business Owner, Harare',
      quote: 'Chikwangwani Tapi Attorneys handled our commercial dispute with exceptional professionalism. The outcome exceeded our expectations.',
      rating: 5,
    },
    {
      name: 'S. Ndlovu',
      title: 'Property Developer',
      quote: 'From conveyancing to lease agreements, their property team is second to none. Meticulous, thorough, and always on time.',
      rating: 5,
    },
    {
      name: 'R. Chirwa',
      title: 'Private Client',
      quote: 'During a very difficult family matter, the team handled everything with sensitivity and expertise. I felt truly supported.',
      rating: 5,
    },
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Understanding Your Rights in Employment Disputes',
      excerpt: 'Recent developments in labour law and what employees need to know about their rights when facing workplace disputes.',
      date: 'March 15, 2025',
      category: 'Labour Law',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'Property Transfer Procedures in Zimbabwe',
      excerpt: 'A comprehensive guide to property conveyancing and registration processes under Zimbabwean law.',
      date: 'March 10, 2025',
      category: 'Property Law',
      readTime: '7 min read',
    },
    {
      id: 3,
      title: 'Constitutional Rights and Public Interest Litigation',
      excerpt: 'Exploring the role of constitutional law in protecting citizens\' fundamental rights and freedoms.',
      date: 'March 5, 2025',
      category: 'Constitutional Law',
      readTime: '6 min read',
    },
  ];

  const categoryColors = {
    'Labour Law':       'bg-blue-50 text-blue-700',
    'Property Law':     'bg-emerald-50 text-emerald-700',
    'Constitutional Law': 'bg-purple-50 text-purple-700',
  };

  return (
    <div className="bg-cream-100">

      {/* ═══════════════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════════════ */}
      <section className="relative min-h-screen bg-charcoal-900 hero-mesh flex items-center overflow-hidden">
        {/* Decorative gold orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-navy-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="section-label fade-in mb-5">
              Zimbabwe's Premier Boutique Law Firm
            </p>

            <span className="gold-line block mb-8" />

            <h1 className="font-serif font-bold text-white leading-[1.1] mb-6 fade-in-up">
              <span className="text-5xl lg:text-7xl block">Excellence in</span>
              <span className="text-5xl lg:text-7xl block text-gold-400">Legal Practice.</span>
            </h1>

            <p className="text-lg lg:text-xl text-cream-300/70 leading-relaxed mb-10 max-w-2xl fade-in-up fade-in-delay-1">
              Chikwangwani Tapi Attorneys provides comprehensive legal services across Zimbabwe
              with unwavering commitment to client success, integrity, and measurable results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 fade-in-up fade-in-delay-2">
              <Link
                to="/contact"
                className="btn-gold inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold"
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="btn-ghost-gold inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold"
              >
                Explore Our Services
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-12 fade-in-up fade-in-delay-3">
              {['Zimbabwe Bar Certified', 'Confidential & Trusted', 'Emergency Consultations'].map((badge) => (
                <div key={badge} className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                  <span className="text-cream-300/50 text-sm">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 fade-in fade-in-delay-4 flex flex-col items-center space-y-1">
          <span className="text-cream-300/30 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-gold-500/50 to-transparent" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          STATS STRIP
          ═══════════════════════════════════════════════ */}
      <section ref={statsRef} className="bg-navy-600 border-y border-gold-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-gold-500/10">
            <StatItem value={500}  suffix="+"  label="Cases Handled"         trigger={statsVisible} />
            <StatItem value={7}    suffix=""   label="Expert Attorneys"       trigger={statsVisible} />
            <StatItem value={15}   suffix="+"  label="Years Experience"       trigger={statsVisible} />
            <StatItem value={9}    suffix=""   label="Practice Areas"         trigger={statsVisible} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          PRACTICE AREAS
          ═══════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center mb-16">
            <p className="section-label mb-3">What We Do</p>
            <h2 className="section-title text-3xl lg:text-5xl text-navy-600 mb-5">
              Our Practice Areas
            </h2>
            <p className="text-lg text-charcoal-600/60 max-w-2xl mx-auto">
              Comprehensive legal counsel across diverse practice areas — delivered with expertise,
              integrity, and personalized attention.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredServices.map((service, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <Link to={service.href} className="service-card block p-7 h-full group">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-navy-600 flex items-center justify-center text-gold-500 mb-5 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="font-serif font-bold text-lg text-navy-600 mb-3 group-hover:text-gold-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-charcoal-600/60 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-gold-600 text-sm font-semibold">
                    Learn more
                    <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation className="text-center">
            <Link
              to="/services"
              className="btn-gold inline-flex items-center px-8 py-4 rounded-xl font-semibold"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </ScrollAnimation>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          ABOUT PREVIEW
          ═══════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image side */}
            <ScrollAnimation className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-card-hover h-[480px]">
                <img
                  src="/office.png"
                  alt="Chikwangwani Tapi Attorneys office interior"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.classList.add('bg-navy-600', 'flex', 'items-center', 'justify-center');
                    e.target.parentElement.innerHTML = '<div class="text-center p-8"><div class="w-20 h-20 rounded-full bg-gold-500/10 flex items-center justify-center mx-auto mb-4"><svg xmlns=\'http://www.w3.org/2000/svg\' class=\'h-10 w-10 text-gold-500\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'><path stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3\' /></svg></div><p class=\'font-serif text-white text-lg font-bold\'>Our Office, Harare</p></div>';
                  }}
                />
                {/* Gold corner accent */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold-500 rounded-tl-2xl" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold-500 rounded-br-2xl" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 lg:-right-8 glass border border-gold-200 rounded-2xl p-5 shadow-gold">
                <p className="font-serif font-bold text-3xl text-navy-600">15+</p>
                <p className="text-charcoal-600/60 text-xs font-medium uppercase tracking-wider">Years of Excellence</p>
              </div>
            </ScrollAnimation>

            {/* Text side */}
            <ScrollAnimation delay={200} className="order-1 lg:order-2 lg:pl-4">
              <p className="section-label mb-4">About Our Firm</p>
              <span className="gold-line block mb-6" />
              <h2 className="section-title text-3xl lg:text-4xl text-navy-600 mb-6">
                Built on Trust,<br />Defined by Results
              </h2>
              <p className="text-charcoal-600/70 leading-relaxed mb-5">
                Founded on the principles of integrity, excellence, and client-centred service,
                Chikwangwani Tapi Attorneys has grown to become a respected boutique law firm
                serving clients across Zimbabwe's diverse legal landscape.
              </p>
              <p className="text-charcoal-600/70 leading-relaxed mb-8">
                Our seven experienced attorneys bring complementary expertise across nine practice
                areas — enabling us to provide comprehensive solutions while maintaining the
                personalized attention that truly defines our practice.
              </p>

              {/* Values */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { title: 'Integrity',      desc: 'Honest and transparent in all we do'           },
                  { title: 'Excellence',     desc: 'Highest professional standards at all times'   },
                  { title: 'Client Focus',   desc: 'Your objectives are our primary concern'       },
                  { title: 'Confidentiality', desc: 'Your matters handled with complete discretion'},
                ].map(({ title, desc }) => (
                  <div key={title} className="flex items-start space-x-3">
                    <div className="w-5 h-5 rounded-full bg-gold-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-gold-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy-600 text-sm">{title}</p>
                      <p className="text-charcoal-600/55 text-xs">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="btn-ghost-gold inline-flex items-center px-7 py-3.5 rounded-xl font-semibold text-sm"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          TESTIMONIALS
          ═══════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center mb-16">
            <p className="section-label mb-3">Client Testimonials</p>
            <h2 className="section-title text-3xl lg:text-5xl text-navy-600 mb-5">
              Trusted by Our Clients
            </h2>
            <p className="text-charcoal-600/60 max-w-2xl mx-auto">
              Our commitment to excellence is reflected in the experiences of those we serve.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <ScrollAnimation key={index} delay={index * 150}>
                <div className="testimonial-card p-8 h-full flex flex-col">
                  <Quote className="h-8 w-8 text-gold-400 mb-5 flex-shrink-0" />
                  <p className="text-charcoal-700 leading-relaxed mb-6 flex-grow italic">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      <p className="font-semibold text-navy-600 text-sm">{t.name}</p>
                      <p className="text-charcoal-600/50 text-xs">{t.title}</p>
                    </div>
                    <div className="flex space-x-0.5">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-gold-500 fill-gold-500" />
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          BLOG / INSIGHTS
          ═══════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <p className="section-label mb-3">Our Blog</p>
              <h2 className="section-title text-3xl lg:text-5xl text-navy-600">
                Legal Insights
              </h2>
            </div>
            <Link
              to="/blog"
              className="btn-ghost-gold inline-flex items-center px-6 py-3 rounded-xl font-semibold text-sm whitespace-nowrap"
            >
              All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <ScrollAnimation key={post.id} delay={index * 150}>
                <article className="service-card block overflow-hidden group h-full flex flex-col">
                  {/* Category bar */}
                  <div className={`px-7 py-4 border-b border-cream-200 ${categoryColors[post.category] || 'bg-gray-50 text-gray-600'}`}>
                    <span className="text-xs font-semibold uppercase tracking-widest">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-7 flex flex-col flex-grow">
                    <h3 className="font-serif font-bold text-lg text-navy-600 mb-3 line-clamp-2 group-hover:text-gold-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-charcoal-600/60 text-sm leading-relaxed mb-5 line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center space-x-3 text-xs text-charcoal-600/40">
                        <span>{post.date}</span>
                        <span>·</span>
                        <span>{post.readTime}</span>
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="text-gold-600 hover:text-gold-700 font-semibold text-sm inline-flex items-center"
                      >
                        Read
                        <ChevronRight className="h-4 w-4 ml-0.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FINAL CTA SECTION
          ═══════════════════════════════════════════════ */}
      <section className="py-20 bg-navy-gradient">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <p className="section-label mb-4">Get Started Today</p>
            <h2 className="font-serif font-bold text-3xl lg:text-5xl text-white mb-6">
              Ready to Protect Your Rights?
            </h2>
            <p className="text-cream-300/60 text-lg mb-10">
              Schedule a free consultation with our experienced legal team and let us guide
              you toward the best possible outcome for your matter.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="btn-gold inline-flex items-center px-8 py-4 rounded-xl font-semibold"
              >
                Book a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="tel:+2638677211814"
                className="inline-flex items-center space-x-2 text-cream-300/60 hover:text-gold-400 transition-colors text-sm font-medium"
              >
                <Phone className="h-5 w-5" />
                <span>Or call us: +263 86 7721 1814</span>
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FLOATING WHATSAPP CTA
          ═══════════════════════════════════════════════ */}
      {/* <a
        href="https://wa.me/263771234567"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="floating-cta"
      >
        <div className="btn-gold w-14 h-14 rounded-full flex items-center justify-center shadow-gold-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.12 1.532 5.849L.057 23.998l6.305-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.802a9.777 9.777 0 01-5.031-1.386l-.36-.214-3.742.981 1-3.641-.235-.374A9.772 9.772 0 012.198 12C2.198 6.58 6.58 2.198 12 2.198S21.802 6.58 21.802 12 17.42 21.802 12 21.802z"/>
          </svg>
        </div>
      </a> */}
    </div>
  );
};

export default Homepage;
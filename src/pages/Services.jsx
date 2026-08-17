import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, Home, Briefcase, Users, Shield, FileText, Building, Gavel, PenTool, ArrowRight, CheckCircle2 } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';

const Services = () => {
  const services = [
    {
      icon: <Scale className="h-8 w-8" />,
      title: 'Civil & Commercial Litigation',
      description: 'Comprehensive representation in civil disputes, contractual claims, commercial conflicts, and urgent High Court applications.',
      features: [
        'Contract disputes and breach claims',
        'Commercial litigation and debt recovery',
        'Urgent court applications and interdicts',
        'Alternative dispute resolution',
      ],
      color: 'from-blue-900 to-navy-600',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Family Law',
      description: 'Sensitive and professional handling of family matters with focus on protecting your interests and those of your children.',
      features: [
        'Divorce and separation proceedings',
        'Child custody and maintenance',
        'Property distribution and settlements',
        'Customary and civil marriage disputes',
      ],
      color: 'from-rose-900 to-navy-600',
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: 'Property & Conveyancing',
      description: 'Expert guidance through property transactions, ensuring smooth transfers and protecting your property rights.',
      features: [
        'Property transfers and deeds registration',
        'Residential and commercial lease agreements',
        'Due diligence in property transactions',
        'Boundary and title dispute resolution',
      ],
      color: 'from-emerald-900 to-navy-600',
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: 'Labour & Employment Law',
      description: 'Comprehensive employment law services for both employers and employees in workplace disputes and compliance.',
      features: [
        'Wrongful dismissal and termination claims',
        'Retrenchments and disciplinary processes',
        'Employment contract drafting and review',
        'Labour Court and NEC representation',
      ],
      color: 'from-amber-900 to-navy-600',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Criminal Law',
      description: 'Experienced criminal defense representation with focus on protecting your rights throughout the legal process.',
      features: [
        'Bail applications and pre-trial services',
        'Criminal trial defense representation',
        'White-collar crime and fraud matters',
        'Criminal law advisory and consultation',
      ],
      color: 'from-slate-800 to-navy-600',
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: 'Estates & Trusts',
      description: 'Comprehensive estate planning and administration services to protect your legacy and beneficiaries.',
      features: [
        'Will drafting and estate planning',
        'Administration of deceased estates',
        'Trust formation and management',
        'Inheritance and succession planning',
      ],
      color: 'from-purple-900 to-navy-600',
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: 'Corporate & Commercial Advisory',
      description: 'Strategic legal counsel for businesses from startups to established companies across various industries.',
      features: [
        'Company registration and structuring',
        'Shareholder agreements and governance',
        'Regulatory compliance and licensing',
        'Mergers and acquisitions advisory',
      ],
      color: 'from-cyan-900 to-navy-600',
    },
    {
      icon: <Gavel className="h-8 w-8" />,
      title: 'Constitutional & Public Law',
      description: 'Specialized expertise in constitutional matters and public interest litigation for protecting fundamental rights.',
      features: [
        'Human rights litigation and advocacy',
        'Judicial review of administrative action',
        'Electoral law and political disputes',
        'Constitutional interpretation and challenges',
      ],
      color: 'from-indigo-900 to-navy-600',
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: 'Notarial Services',
      description: 'Professional notarial services for document authentication and certification needs.',
      features: [
        'Document notarization and certification',
        'Antenuptial contracts and agreements',
        'Authentication of foreign documents',
        'Sworn affidavits and declarations',
      ],
      color: 'from-teal-900 to-navy-600',
    },
  ];

  return (
    <div className="bg-cream-100">
      {/* Hero */}
      <section className="relative bg-charcoal-900 hero-mesh py-20 lg:py-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl fade-in-up">
            <p className="section-label mb-4">What We Offer</p>
            <span className="gold-line block mb-6" />
            <h1 className="font-serif font-bold text-4xl lg:text-6xl text-white mb-6 leading-tight">
              Our Legal Services
            </h1>
            <p className="text-xl text-cream-300/70 leading-relaxed fade-in-up fade-in-delay-1">
              Comprehensive legal solutions across nine practice areas — delivered with
              expertise, integrity, and personalized attention to your unique situation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ScrollAnimation key={index} delay={index * 80}>
                <div className="service-card bg-white p-8 h-full group">
                  <div className="flex items-start space-x-5 mb-6">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-gold-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <div>
                      <h2 className="font-serif font-bold text-xl text-navy-600 mb-2 group-hover:text-gold-600 transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-charcoal-600/60 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-cream-200 pt-6">
                    <p className="text-xs font-semibold text-gold-600 uppercase tracking-widest mb-4">
                      Key Services Include
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, fi) => (
                        <li key={fi} className="flex items-start space-x-2">
                          <CheckCircle2 className="h-4 w-4 text-gold-500 mt-0.5 flex-shrink-0" />
                          <span className="text-charcoal-600/65 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-gradient">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <p className="section-label mb-4">Get Legal Help Today</p>
            <h2 className="font-serif font-bold text-3xl lg:text-5xl text-white mb-6">
              Need Legal Assistance?
            </h2>
            <p className="text-cream-300/60 text-lg mb-10 max-w-2xl mx-auto">
              Our experienced team is ready to provide the legal guidance and representation
              you need. Contact us today for a free initial consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-gold inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="tel:+2634123456"
                className="btn-ghost-gold inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold"
              >
                Call: +263 4 123 4567
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Services;
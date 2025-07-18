import React from 'react';
import { Scale, Home, Briefcase, Users, Shield, FileText, Building, Gavel, PenTool } from 'lucide-react';

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
        'Alternative dispute resolution'
      ]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Family Law',
      description: 'Sensitive and professional handling of family matters with focus on protecting your interests and those of your children.',
      features: [
        'Divorce and separation proceedings',
        'Child custody and maintenance',
        'Property distribution and settlements',
        'Customary and civil marriage disputes'
      ]
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: 'Property & Conveyancing',
      description: 'Expert guidance through property transactions, ensuring smooth transfers and protecting your property rights.',
      features: [
        'Property transfers and deeds registration',
        'Residential and commercial lease agreements',
        'Due diligence in property transactions',
        'Boundary and title dispute resolution'
      ]
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: 'Labour & Employment Law',
      description: 'Comprehensive employment law services for both employers and employees in workplace disputes and compliance.',
      features: [
        'Wrongful dismissal and termination claims',
        'Retrenchments and disciplinary processes',
        'Employment contract drafting and review',
        'Labour Court and NEC representation'
      ]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Criminal Law',
      description: 'Experienced criminal defense representation with focus on protecting your rights throughout the legal process.',
      features: [
        'Bail applications and pre-trial services',
        'Criminal trial defense representation',
        'White-collar crime and fraud matters',
        'Criminal law advisory and consultation'
      ]
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: 'Estates & Trusts',
      description: 'Comprehensive estate planning and administration services to protect your legacy and beneficiaries.',
      features: [
        'Will drafting and estate planning',
        'Administration of deceased estates',
        'Trust formation and management',
        'Inheritance and succession planning'
      ]
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: 'Corporate & Commercial Advisory',
      description: 'Strategic legal counsel for businesses from startups to established companies across various industries.',
      features: [
        'Company registration and structuring',
        'Shareholder agreements and governance',
        'Regulatory compliance and licensing',
        'Mergers and acquisitions advisory'
      ]
    },
    {
      icon: <Gavel className="h-8 w-8" />,
      title: 'Constitutional & Public Law',
      description: 'Specialized expertise in constitutional matters and public interest litigation for protecting fundamental rights.',
      features: [
        'Human rights litigation and advocacy',
        'Judicial review of administrative action',
        'Electoral law and political disputes',
        'Constitutional interpretation and challenges'
      ]
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: 'Notarial Services',
      description: 'Professional notarial services for document authentication and certification needs.',
      features: [
        'Document notarization and certification',
        'Antenuptial contracts and agreements',
        'Authentication of foreign documents',
        'Sworn affidavits and declarations'
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              Our Legal Services
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Comprehensive legal solutions across diverse practice areas, 
              delivered with expertise, integrity, and personalized attention.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="text-blue-600 flex-shrink-0">{service.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                <div className="border-t border-gray-100 pt-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                    Key Services Include:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-6">
            Need Legal Assistance?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Our experienced team is ready to provide the legal guidance and representation 
            you need. Contact us today for a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Schedule Consultation
            </a>
            <a
              href="tel:+263412345678"
              className="inline-flex items-center px-8 py-4 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200"
            >
              Call Now: +263 4 123 4567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
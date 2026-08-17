import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, ArrowRight, Clock } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';

const Team = () => {
  const teamMembers = [
    {
      name: 'D. Chikwangwani',
      position: 'Managing Partner',
      specialization: 'Commercial Litigation, Corporate Law',
      experience: '15+ Years',
      education: 'LLB (Hons), University of Zimbabwe',
      email: 'dchikwangwani@ctattorneys.co.zw',
      phone: '+263 77 290 9772',
      id: 'chikwangwani',
      bio: 'Leading the firm with extensive experience in commercial litigation and corporate advisory services across Zimbabwe and the region.',
      initials: 'DC',
    },
    {
      name: 'G. Mabwe',
      position: 'Partner',
      specialization: 'Legal Practitioner, Conveyancer Noatry Public',
      experience: '12+ Years',
      education: 'LLB, University of Zimbabwe',
      email: 'gmabwe@ctattorneys.co.zw',
      phone: '+263 77 396 9136',
      id: 'mabwe',
      bio: 'Specialized in family law matters with a compassionate, strategic approach to sensitive family disputes and property settlements.',
      initials: 'GM',
    },
    {
      name: 'NT. Mazungunye',
      position: 'Associate',
      specialization: 'Criminal Law, Constitutional Law',
      experience: '8+ Years',
      education: 'LLB, University of Zimbabwe',
      email: 'nt.mazungunye@ctattorneys.co.zw',
      phone: '+263 77 345 6789',
      id: 'mazungunye',
      bio: 'Experienced criminal defense attorney with strong expertise in constitutional law and public interest litigation matters.',
      initials: 'NM',
    },
    {
      name: 'M. James',
      position: 'Associate',
      specialization: 'Labour Law, Employment Relations',
      experience: '6+ Years',
      education: 'LLB, Midlands State University',
      email: 'mjames@ctattorneys.co.zw',
      phone: '+263 78 246 9146',
      id: 'james',
      bio: 'Dedicated to protecting employee rights and ensuring fair employment practices in both Labour Court and NEC proceedings.',
      initials: 'MJ',
    },
    {
      name: 'K. Masiyenyama',
      position: 'Associate',
      specialization: 'Property Law, Conveyancing',
      experience: '7+ Years',
      education: 'LLB, University of Zimbabwe',
      email: 'kudam@ctattorneys.co.zw',
      phone: '+263 77 682 8788',
      id: 'masiyenyama',
      bio: 'Expert in property transactions and conveyancing with meticulous attention to detail in every transfer and registration.',
      initials: 'KM',
    },
    {
      name: 'TL. Marezana',
      position: 'Associate',
      specialization: 'Estate Planning, Trusts',
      experience: '5+ Years',
      education: 'LLB, University of Zimbabwe',
      email: 'tlmarezana@ctattorneys.co.zw',
      phone: '+263 77 588 6434',
      id: 'marezana',
      bio: 'Specialized in estate planning and trust administration, helping clients protect their legacy and provide for their beneficiaries.',
      initials: 'TM',
    },
    {
      name: 'M. Phiri',
      position: 'Associate',
      specialization: 'Legal Practitioner',
      experience: '4+ Years',
      education: 'LLB, University of Zimbabwe',
      email: 'maxinephiri@ctattorneys.co.zw',
      phone: '+263 77 374 4728',
      id: 'phiri',
      bio: 'Providing strategic corporate and commercial legal advice to businesses, from startups to established enterprises.',
      initials: 'MP',
    },
  ];

  return (
    <div className="bg-cream-100">
      {/* Hero */}
      <section className="relative bg-charcoal-900 hero-mesh py-20 lg:py-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl fade-in-up">
            <p className="section-label mb-4">The People</p>
            <span className="gold-line block mb-6" />
            <h1 className="font-serif font-bold text-4xl lg:text-6xl text-white mb-6 leading-tight">
              Our Legal Team
            </h1>
            <p className="text-xl text-cream-300/70 leading-relaxed fade-in-up fade-in-delay-1">
              Meet our experienced attorneys — diverse expertise, unwavering commitment,
              and personalized attention on every case.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <ScrollAnimation key={index} delay={index * 80}>
                <Link
                  to={`/team/${member.id}`}
                  className="service-card bg-white overflow-hidden group h-full flex flex-col block cursor-pointer"
                >
                  {/* Avatar header */}
                  <div className="relative bg-navy-gradient h-48 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gold-500/10 border-2 border-gold-500/30 flex items-center justify-center group-hover:border-gold-500/60 transition-all duration-300">
                      <span className="font-serif font-bold text-2xl text-gold-400">
                        {member.initials}
                      </span>
                    </div>
                    {/* Decorative corners */}
                    <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-gold-500/30" />
                    <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-gold-500/30" />
                    {/* Hover overlay hint */}
                    <div className="absolute inset-0 bg-gold-500/0 group-hover:bg-gold-500/5 transition-colors duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
                      <span className="text-xs text-gold-300 font-medium tracking-widest uppercase">View Profile →</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                      <h3 className="font-serif font-bold text-xl text-navy-600 mb-1 group-hover:text-gold-600 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-gold-600 font-semibold text-sm mb-1">{member.position}</p>
                      <p className="text-charcoal-600/50 text-xs">{member.specialization}</p>
                    </div>

                    <p className="text-charcoal-600/60 text-sm leading-relaxed mb-5 flex-grow">
                      {member.bio}
                    </p>

                    {/* Meta */}
                    <div className="space-y-2 mb-5 text-xs text-charcoal-600/50">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-3.5 w-3.5 text-gold-500" />
                        <span>{member.experience} Experience</span>
                      </div>
                    </div>

                    {/* Contact — stopPropagation so clicks don't bubble to the card Link */}
                    <div className="border-t border-cream-200 pt-4 space-y-2 mb-5">
                      <a
                        href={`mailto:${member.email}`}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center space-x-2 text-xs text-charcoal-600/50 hover:text-gold-600 transition-colors"
                      >
                        <Mail className="h-3.5 w-3.5 text-gold-500" />
                        <span className="truncate">{member.email}</span>
                      </a>
                      <a
                        href={`tel:${member.phone}`}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center space-x-2 text-xs text-charcoal-600/50 hover:text-gold-600 transition-colors"
                      >
                        <Phone className="h-3.5 w-3.5 text-gold-500" />
                        <span>{member.phone}</span>
                      </a>
                    </div>

                    <span className="inline-flex items-center text-gold-600 group-hover:text-gold-700 font-semibold text-sm">
                      View Full Profile
                      <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-gradient">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <p className="section-label mb-4">Work With Us</p>
            <h2 className="font-serif font-bold text-3xl lg:text-5xl text-white mb-6">
              Work With Our Team
            </h2>
            <p className="text-cream-300/60 text-lg mb-10">
              Our diverse team is ready to provide expert guidance tailored to your specific
              legal needs. Contact us to discuss your matter confidentially.
            </p>
            <Link
              to="/contact"
              className="btn-gold inline-flex items-center px-8 py-4 rounded-xl font-semibold"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Team;
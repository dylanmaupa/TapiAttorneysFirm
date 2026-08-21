import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, ArrowRight, Clock, UserCheck } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';

const Team = () => {
  const lawyers = [
    {
      name: 'Douglas Chikwangwani',
      position: 'Managing Partner',
      specialization: 'Corporate & Commercial Law | Litigation | Dispute Resolution',
      experience: '15+ Years',
      email: 'dchikwangwani@ctattorneys.co.zw',
      phone: '+263 77 290 9772',
      id: 'chikwangwani',
      bio: 'Douglas leads the firm with a practice built around litigation, corporate advisory and strategic legal problem-solving, advising businesses, institutions and individuals across Zimbabwe.',
      initials: 'DC',
    },
    {
      name: 'Golden Mabwe',
      position: 'Partner',
      specialization: 'Conveyancing | Property Law | Deceased Estates | Corporate Governance',
      experience: '12+ Years',
      email: 'gmabwe@ctattorneys.co.zw',
      phone: '+263 77 396 9136',
      id: 'mabwe',
      bio: "Golden leads the firm's Property and Estates Department, advising on property transactions, conveyancing, real estate development and estate administration.",
      initials: 'GM',
    },
    {
      name: 'NT. Mazungunye',
      position: 'Associate',
      specialization: 'Criminal Law | Constitutional Law',
      experience: '8+ Years',
      email: 'nt.mazungunye@ctattorneys.co.zw',
      phone: '+263 77 345 6789',
      id: 'mazungunye',
      bio: 'Experienced in criminal litigation and constitutional law matters, representing clients with a focus on procedural and constitutional protections.',
      initials: 'NM',
    },
    {
      name: 'Makanaka James',
      position: 'Associate',
      specialization: 'Criminal Defence | Bail Applications | Constitutional Rights',
      experience: '6+ Years',
      email: 'mjames@ctattorneys.co.zw',
      phone: '+263 78 246 9146',
      id: 'james',
      bio: 'Makanaka represents clients in criminal trials, bail applications and appellate matters, grounding her practice in the principle that every person is entitled to a fair hearing.',
      initials: 'MJ',
    },
    {
      name: 'Kudakwashe Masiyenyama',
      position: 'Associate',
      specialization: 'Labour & Employment Law | Criminal Law | Dispute Resolution',
      experience: '7+ Years',
      email: 'kudam@ctattorneys.co.zw',
      phone: '+263 77 682 8788',
      id: 'masiyenyama',
      bio: 'Kudakwashe practises in labour and employment law and criminal law, approaching disputes with a focus on practical resolution and firm advocacy where proceedings are necessary.',
      initials: 'KM',
    },
    {
      name: 'Tashinga Lawrence Marezana',
      position: 'Associate',
      specialization: 'Civil & Commercial Litigation | Contractual Disputes | Debt Recovery',
      experience: '5+ Years',
      email: 'tlmarezana@ctattorneys.co.zw',
      phone: '+263 77 588 6434',
      id: 'marezana',
      bio: 'Tashinga represents individuals and businesses in civil and commercial litigation, combining careful legal analysis with practical strategy directed towards effective resolution.',
      initials: 'TM',
    },
    {
      name: 'Y.M. Phiri',
      position: 'Associate',
      specialization: 'Family Law | Deceased Estates | Civil Litigation',
      experience: '4+ Years',
      email: 'maxinephiri@ctattorneys.co.zw',
      phone: '+263 77 374 4728',
      id: 'phiri',
      bio: 'Y.M. Phiri advises and represents clients in family law, deceased estates and civil litigation, combining firm representation with a measured approach to sensitive matters.',
      initials: 'YP',
    },
  ];

  const supportStaff = [
    {
      name: 'Ruth Manionesa',
      position: 'Legal Support Officer',
      focus: 'Legal Research | Documentation | Litigation Support | Client Liaison',
      bio: 'Contributing to the firm\'s legal work through research, document preparation and case support. Currently completing her BLP while gaining practical experience within the firm.',
      initials: 'RM',
    },
    {
      name: 'Chenai',
      position: 'Legal Support Officer',
      focus: 'Legal Research | Documentation | Litigation Support | Client Liaison',
      bio: 'Supporting practitioners across legal research, documentation and client matter management. Currently undertaking Bar Conversion Examinations as she progresses towards qualification.',
      initials: 'C',
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

      {/* ── Lawyers Grid ── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="mb-12">
            <p className="section-label mb-2">Our Lawyers</p>
            <h2 className="section-title text-3xl text-navy-600">Legal Practitioners</h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lawyers.map((member, index) => (
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
                    <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-gold-500/30" />
                    <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-gold-500/30" />
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
                      <p className="text-charcoal-600/50 text-xs leading-relaxed">{member.specialization}</p>
                    </div>

                    <p className="text-charcoal-600/60 text-sm leading-relaxed mb-5 flex-grow">
                      {member.bio}
                    </p>

                    <div className="space-y-2 mb-5 text-xs text-charcoal-600/50">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-3.5 w-3.5 text-gold-500" />
                        <span>{member.experience} Experience</span>
                      </div>
                    </div>

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

      {/* ── Professional Support Team ── */}
      <section className="py-16 bg-navy-600/5 border-t border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="mb-10">
            <p className="section-label mb-2">Support</p>
            <h2 className="section-title text-3xl text-navy-600">Our Professional Team</h2>
            <p className="text-charcoal-600/60 text-sm mt-3 max-w-xl">
              Our legal support officers work alongside our practitioners to ensure every client
              matter receives careful attention and thorough preparation.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            {supportStaff.map((member, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <div className="service-card bg-white p-6 flex items-start space-x-5">
                  <div className="w-14 h-14 rounded-full bg-navy-600 flex items-center justify-center flex-shrink-0 border border-gold-500/20">
                    <span className="font-serif font-bold text-lg text-gold-400">{member.initials}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-navy-600 text-base mb-1">{member.name}</h3>
                    <div className="flex items-center space-x-1.5 mb-3">
                      <UserCheck className="h-3.5 w-3.5 text-gold-500" />
                      <p className="text-gold-600 text-xs font-semibold">{member.position}</p>
                    </div>
                    <p className="text-charcoal-600/60 text-sm leading-relaxed mb-3">{member.bio}</p>
                    <p className="text-charcoal-600/40 text-xs">{member.focus}</p>
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
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Mail, Phone, ArrowLeft, Award, Scale, ArrowRight } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';

const LawyerProfile = () => {
  const { lawyerId } = useParams();

  const lawyers = {
    chikwangwani: {
      name: 'D. Chikwangwani',
      initials: 'DC',
      position: 'Managing Partner',
      specialization: 'Commercial Litigation, Corporate Law',
      experience: '15+ Years',
      education: 'LLB (Hons), University of Zimbabwe',
      email: 'dchikwangwani@ctattorneys.co.zw',
      phone: '+263 77 290 9772',
      bio: 'D. Chikwangwani serves as the Managing Partner of Chikwangwani Tapi Attorneys, bringing over 15 years of extensive experience in commercial litigation and corporate law. He has successfully represented clients in complex commercial disputes, corporate restructuring, and high-stakes litigation matters across Zimbabwe.',
      expertise: [
        'Commercial Litigation and Dispute Resolution',
        'Corporate Law and Business Advisory',
        'Mergers and Acquisitions',
        'Contract Law and Commercial Transactions',
        'Regulatory Compliance and Corporate Governance',
      ],
      achievements: [
        'Successfully handled over 200 commercial litigation cases',
        'Led the firm\'s expansion into corporate advisory services',
        'Recognized as a leading commercial litigation attorney',
        'Regular speaker at legal conferences on corporate law',
      ],
      education_details: [
        'LLB (Honours), University of Zimbabwe',
        'Admitted to the High Court of Zimbabwe',
        'Member of the Law Society of Zimbabwe',
      ],
    },
    mabwe: {
      name: 'G. Mabwe',
      initials: 'GM',
      position: 'Partner',
      specialization: 'Legal Practitioner, Conveyancer & Notary Public',
      experience: '12+ Years',
      education: 'LLB, University of Zimbabwe',
      email: 'gmabwe@ctattorneys.co.zw',
      phone: '+263 77 396 9136',
      bio: 'G. Mabwe is a Partner specializing in family law and property matters. With over 12 years of experience, she brings a compassionate yet strategic approach to sensitive family disputes while ensuring clients\' interests are protected throughout the legal process.',
      expertise: [
        'Divorce and Separation Proceedings',
        'Child Custody and Maintenance',
        'Property Division and Financial Settlements',
        'Domestic Violence and Protection Orders',
        'Property Transactions and Conveyancing',
      ],
      achievements: [
        'Successfully resolved over 150 family law matters',
        'Specialized training in mediation and alternative dispute resolution',
        'Active member of the Family Law Association',
        'Advocate for children\'s rights and welfare',
      ],
      education_details: [
        'LLB, University of Zimbabwe',
        'Certificate in Family Law Practice',
        'Admitted to the High Court of Zimbabwe',
      ],
    },
    james: {
      name: 'M. James',
      initials: 'MJ',
      position: 'Associate',
      specialization: 'Labour Law, Employment Relations',
      experience: '6+ Years',
      education: 'LLB, Midlands State University',
      email: 'mjames@ctattorneys.co.zw',
      phone: '+263 78 246 9146',
      bio: 'MM. James specializes in labour and employment law, representing both employees and employers in workplace disputes. She is passionate about ensuring fair employment practices and protecting workers\' rights while helping businesses maintain compliant employment relationships.',
      expertise: [
        'Employment Contracts and Workplace Policies',
        'Wrongful Dismissal and Termination Disputes',
        'Labour Relations and Collective Bargaining',
        'Workplace Discrimination and Harassment',
        'Employment Compliance and Advisory',
      ],
      achievements: [
        'Successfully represented clients in over 100 employment disputes',
        'Expertise in both Labour Court and NEC proceedings',
        'Regular trainer on employment law compliance',
        'Active member of the Employment Lawyers Association',
      ],
      education_details: [
        'LLB, Midlands State University',
        'Certificate in Labour and Employment Law',
        'Admitted to practice before the Labour Court',
      ],
    },
    masiyenyama: {
      name: 'K. Masiyenyama',
      initials: 'KM',
      position: 'Associate',
      specialization: 'Property Law, Conveyancing',
      experience: '7+ Years',
      education: 'LLB, University of Zimbabwe',
      email: 'kudam@ctattorneys.co.zw',
      phone: '+263 77 682 8788',
      bio: 'K. Masiyenyama is an expert in property law and conveyancing with meticulous attention to detail. She has successfully handled hundreds of property transactions, ensuring smooth transfers while protecting clients\' interests in complex property matters.',
      expertise: [
        'Residential and Commercial Property Transfers',
        'Property Development and Planning Law',
        'Lease Agreements and Tenancy Disputes',
        'Property Title Registration and Disputes',
        'Real Estate Due Diligence',
      ],
      achievements: [
        'Completed over 300 successful property transfers',
        'Expertise in complex commercial property transactions',
        'Regular consultant on property development projects',
        'Member of the Property Lawyers Association',
      ],
      education_details: [
        'LLB, University of Zimbabwe',
        'Certificate in Conveyancing Practice',
        'Registered Conveyancer with the Deeds Office',
      ],
    },
    marezana: {
      name: 'TL. Marezana',
      initials: 'TM',
      position: 'Associate',
      specialization: 'Estate Planning, Trusts',
      experience: '5+ Years',
      education: 'LLB, University of Zimbabwe',
      email: 'tlmarezana@ctattorneys.co.zw',
      phone: '+263 77 588 6434',
      bio: 'TL. Marezana specializes in estate planning and trust administration, helping clients secure their legacy and protect their beneficiaries. She provides comprehensive estate planning services and guides families through the administration of deceased estates.',
      expertise: [
        'Will Drafting and Estate Planning',
        'Trust Formation and Administration',
        'Estate Administration and Probate',
        'Succession Planning for Businesses',
        'Tax Planning for Estates',
      ],
      achievements: [
        'Administered over 100 deceased estates',
        'Established numerous family and business trusts',
        'Regular presenter on estate planning seminars',
        'Member of the Estate Planning Council',
      ],
      education_details: [
        'LLB, University of Zimbabwe',
        'Certificate in Estate Planning and Trust Law',
        'Member of the Society of Trust and Estate Practitioners',
      ],
    },
    phiri: {
      name: 'M. Phiri',
      initials: 'MP',
      position: 'Associate',
      specialization: 'Legal Practitioner',
      experience: '4+ Years',
      education: 'LLB, University of Zimbabwe',
      email: 'maxinephiri@ctattorneys.co.zw',
      phone: '+263 77 374 4728',
      bio: 'YM. Phiri provides strategic corporate advice to businesses across various industries. Despite being the newest member of the team, she brings fresh perspectives and innovative solutions to complex commercial legal challenges.',
      expertise: [
        'Company Formation and Corporate Structuring',
        'Commercial Contracts and Agreements',
        'Regulatory Compliance and Licensing',
        'Mergers and Acquisitions Advisory',
        'Intellectual Property and Technology Law',
      ],
      achievements: [
        'Assisted in the establishment of over 50 companies',
        'Expertise in emerging technology and startup law',
        'Active in professional development and continuing education',
        'Rising star in commercial law practice',
      ],
      education_details: [
        'LLB, University of Zimbabwe',
        'Certificate in Corporate Law Practice',
        'Member of the Young Lawyers Association',
      ],
    },
  };

  const lawyer = lawyers[lawyerId];

  if (!lawyer) {
    return (
      <div className="min-h-screen bg-cream-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 rounded-full bg-navy-600 flex items-center justify-center mx-auto mb-5">
            <Scale className="h-10 w-10 text-gold-500" />
          </div>
          <h1 className="font-serif font-bold text-2xl text-navy-600 mb-3">Attorney Not Found</h1>
          <p className="text-charcoal-600/60 mb-6">The profile you're looking for doesn't exist.</p>
          <Link to="/team" className="btn-gold inline-flex items-center px-6 py-3 rounded-xl font-semibold text-sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Team
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cream-100">
      {/* Back Navigation */}
      <div className="bg-white border-b border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/team"
            className="inline-flex items-center text-sm font-medium text-charcoal-600/60 hover:text-gold-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Team
          </Link>
        </div>
      </div>

      {/* Profile Hero */}
      <section className="relative bg-charcoal-900 hero-mesh py-16 lg:py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 fade-in-up">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-28 h-28 lg:w-36 lg:h-36 rounded-full bg-gold-500/10 border-2 border-gold-500/40 flex items-center justify-center">
                <span className="font-serif font-bold text-4xl lg:text-5xl text-gold-400">
                  {lawyer.initials}
                </span>
              </div>
            </div>
            {/* Headline info */}
            <div>
              <p className="section-label mb-2 fade-in">{lawyer.position}</p>
              <h1 className="font-serif font-bold text-3xl lg:text-5xl text-white mb-3 leading-tight">
                {lawyer.name}
              </h1>
              <p className="text-cream-300/60 mb-5">{lawyer.specialization}</p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`mailto:${lawyer.email}`}
                  className="btn-gold inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-semibold"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  {lawyer.email}
                </a>
                <a
                  href={`tel:${lawyer.phone}`}
                  className="btn-ghost-gold inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-semibold"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  {lawyer.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Body */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Left Sidebar */}
            <div className="lg:col-span-1 space-y-6">

              {/* Quick Info Card */}
              <ScrollAnimation>
                <div className="service-card bg-white p-6">
                  <h3 className="font-semibold text-xs uppercase tracking-widest text-gold-600 mb-4">
                    Quick Info
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-navy-600 flex items-center justify-center flex-shrink-0">
                        <Award className="h-4 w-4 text-gold-500" />
                      </div>
                      <div>
                        <p className="text-xs text-charcoal-600/40 uppercase tracking-wider mb-0.5">Experience</p>
                        <p className="text-navy-600 font-semibold text-sm">{lawyer.experience}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-navy-600 flex items-center justify-center flex-shrink-0">
                        <Scale className="h-4 w-4 text-gold-500" />
                      </div>
                      <div>
                        <p className="text-xs text-charcoal-600/40 uppercase tracking-wider mb-0.5">Practice Areas</p>
                        <p className="text-navy-600 font-semibold text-sm">{lawyer.specialization}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Contact Card */}
              <ScrollAnimation delay={100}>
                <div className="service-card bg-white p-6">
                  <h3 className="font-semibold text-xs uppercase tracking-widest text-gold-600 mb-4">
                    Contact Directly
                  </h3>
                  <div className="space-y-3">
                    <a
                      href={`mailto:${lawyer.email}`}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-cream-100 hover:bg-gold-50 transition-colors group"
                    >
                      <Mail className="h-4 w-4 text-gold-500 flex-shrink-0" />
                      <span className="text-sm text-charcoal-600/70 group-hover:text-gold-600 transition-colors truncate">
                        {lawyer.email}
                      </span>
                    </a>
                    <a
                      href={`tel:${lawyer.phone}`}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-cream-100 hover:bg-gold-50 transition-colors group"
                    >
                      <Phone className="h-4 w-4 text-gold-500 flex-shrink-0" />
                      <span className="text-sm text-charcoal-600/70 group-hover:text-gold-600 transition-colors">
                        {lawyer.phone}
                      </span>
                    </a>
                  </div>
                  <Link
                    to="/contact"
                    className="btn-gold w-full flex items-center justify-center px-4 py-3 rounded-xl font-semibold text-sm mt-4"
                  >
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </ScrollAnimation>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">

              {/* Biography */}
              <ScrollAnimation>
                <div className="service-card bg-white p-8">
                  <p className="section-label mb-3">Biography</p>
                  <h2 className="section-title text-2xl text-navy-600 mb-5">
                    About {lawyer.name.split(' ')[0]}
                  </h2>
                  <p className="text-charcoal-600/70 leading-relaxed text-lg">
                    {lawyer.bio}
                  </p>
                </div>
              </ScrollAnimation>

              {/* Areas of Expertise */}
              <ScrollAnimation delay={100}>
                <div className="service-card bg-white p-8">
                  <p className="section-label mb-3">Expertise</p>
                  <h2 className="section-title text-2xl text-navy-600 mb-6">
                    Areas of Expertise
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {lawyer.expertise.map((area, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-8 h-8 rounded-lg bg-navy-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Scale className="h-4 w-4 text-gold-500" />
                        </div>
                        <span className="text-charcoal-600/70 text-sm leading-relaxed pt-1.5">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>

              {/* Key Achievements */}
              <ScrollAnimation delay={200}>
                <div className="service-card bg-white p-8">
                  <p className="section-label mb-3">Track Record</p>
                  <h2 className="section-title text-2xl text-navy-600 mb-6">
                    Key Achievements
                  </h2>
                  <ul className="space-y-4">
                    {lawyer.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start space-x-4">
                        <div className="w-8 h-8 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
                          <span className="text-gold-600 font-bold text-xs">{String(index + 1).padStart(2, '0')}</span>
                        </div>
                        <span className="text-charcoal-600/70 leading-relaxed pt-1.5">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-gradient">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <p className="section-label mb-4">Get In Touch</p>
            <h2 className="font-serif font-bold text-3xl text-white mb-5">
              Schedule a Consultation with {lawyer.name.split(' ')[0]}
            </h2>
            <p className="text-cream-300/60 mb-10">
              Contact {lawyer.name.split(' ')[0]} directly to discuss your legal matter
              and explore how their expertise can help achieve your objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${lawyer.email}`}
                className="btn-gold inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold"
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </a>
              <a
                href={`tel:${lawyer.phone}`}
                className="btn-ghost-gold inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default LawyerProfile;
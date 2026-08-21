import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Mail, Phone, ArrowLeft, Award, Scale, ArrowRight } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';

const LawyerProfile = () => {
  const { lawyerId } = useParams();

  const lawyers = {
    chikwangwani: {
      name: 'Douglas Chikwangwani',
      initials: 'DC',
      position: 'Managing Partner',
      specialization: 'Corporate & Commercial Law | Litigation | Dispute Resolution',
      experience: '15+ Years',
      email: 'dchikwangwani@ctattorneys.co.zw',
      phone: '+263 77 290 9772',
      bio: 'Douglas Chikwangwani leads Chikwangwani Tapi Attorneys with a practice built around litigation, corporate advisory and strategic legal problem-solving.\n\nHis experience cuts across different areas of law, enabling him to approach complex matters from both a legal and commercial perspective. He advises businesses, institutions and individuals on matters requiring careful legal analysis, sound judgment and an appreciation of the client\'s broader objectives.\n\nAs Managing Partner, Douglas provides strategic direction to the firm and oversees the standards of professional service delivered across its departments. His approach is grounded in understanding the client\'s objectives, identifying the legal and commercial risks involved and developing a strategy directed towards a practical result.',
      expertise: [
        'Corporate & Commercial Law',
        'Corporate Advisory',
        'Civil & Commercial Litigation',
        'Corporate Governance',
        'Dispute Resolution',
      ],
      achievements: [
        'Strategic direction and leadership of the firm',
        'Complex commercial litigation across Zimbabwe',
        'Corporate advisory to businesses and institutions',
        'Legal and commercial risk analysis and strategy',
      ],
    },
    mabwe: {
      name: 'Golden Mabwe',
      initials: 'GM',
      position: 'Partner',
      specialization: 'Conveyancing | Property Law | Deceased Estates | Corporate Governance',
      experience: '12+ Years',
      email: 'gmabwe@ctattorneys.co.zw',
      phone: '+263 77 396 9136',
      bio: 'Golden Mabwe leads the firm\'s Property and Estates Department, with a practice centred on conveyancing, real estate transactions, property development and deceased estates.\n\nHe advises clients on the acquisition, disposal and transfer of immovable property and assists in navigating the regulatory and transactional requirements associated with property development. His work recognises that property transactions frequently involve more than the transfer itself, requiring careful consideration of regulatory compliance, commercial interests and the protection of valuable assets.\n\nHis estates practice encompasses estate administration and succession-related matters. Golden also maintains an interest in corporate governance, particularly where property, business, succession and asset-protection considerations intersect.\n\nHis approach is practical and transaction-focused: identify the legal requirements, anticipate potential obstacles and move the matter towards completion while protecting the client\'s interests.',
      expertise: [
        'Conveyancing',
        'Property & Real Estate Law',
        'Property Development',
        'Deceased Estates & Succession',
        'Estate Administration',
        'Corporate Governance',
        'Asset Protection',
      ],
      achievements: [
        'Leads the firm\'s Property and Estates Department',
        'Extensive experience in property development transactions',
        'Estate administration and succession advisory',
        'Corporate governance at the intersection of property and business',
      ],
    },
    james: {
      name: 'Makanaka James',
      initials: 'MJ',
      position: 'Associate',
      specialization: 'Criminal Defence | Bail Applications | Constitutional Rights',
      experience: '6+ Years',
      email: 'mjames@ctattorneys.co.zw',
      phone: '+263 78 246 9146',
      bio: 'Makanaka James has developed her practice around criminal litigation and the protection of constitutional and fair-trial rights.\n\nShe represents clients in bail applications, criminal trials and appellate matters. Recognising the potentially serious consequences of criminal proceedings, she approaches each matter through careful preparation, close examination of the evidence and a clear understanding of the procedural and constitutional protections available to the client.\n\nHer approach to advocacy is firm and courtroom-focused. She believes that effective criminal defence requires not only an understanding of the charges and evidence but also careful attention to whether the client\'s rights have been respected throughout the criminal justice process.\n\nFor Makanaka, the starting point remains fundamental: every person is entitled to a fair hearing and effective legal representation.',
      expertise: [
        'Criminal Defence',
        'Bail Applications',
        'Criminal Trials',
        'Criminal Appeals',
        'Constitutional Rights',
        'Fair-Trial Advocacy',
      ],
      achievements: [
        'Representation in bail applications and criminal trials',
        'Criminal appellate advocacy',
        'Constitutional and fair-trial rights protection',
        'Procedural and evidence-focused defence strategy',
      ],
    },
    masiyenyama: {
      name: 'Kudakwashe Masiyenyama',
      initials: 'KM',
      position: 'Associate',
      specialization: 'Labour & Employment Law | Criminal Law | Dispute Resolution',
      experience: '7+ Years',
      email: 'kudam@ctattorneys.co.zw',
      phone: '+263 77 682 8788',
      bio: 'Kudakwashe Masiyenyama practises primarily in labour and employment law and criminal law, with a particular interest in dispute resolution.\n\nHis employment practice includes workplace disputes, disciplinary proceedings, dismissals, employment rights and collective bargaining. His experience in this area gives him an appreciation of the competing legal and practical considerations that often arise between employers and employees.\n\nKudakwashe approaches employment disputes on the basis that not every disagreement needs to develop into prolonged litigation. Where an appropriate resolution can be achieved, he seeks practical solutions that protect the client\'s interests while avoiding unnecessary escalation. Where formal proceedings become necessary, his focus shifts to firm and effective representation.\n\nHis criminal law practice complements his broader experience in contentious matters, negotiation and advocacy.',
      expertise: [
        'Labour & Employment Law',
        'Employment Disputes',
        'Disciplinary Proceedings',
        'Dismissals',
        'Collective Bargaining',
        'Workplace Rights',
        'Criminal Law',
        'Dispute Resolution',
      ],
      achievements: [
        'Extensive employment dispute representation',
        'Disciplinary proceedings and dismissal matters',
        'Practical dispute resolution and negotiation',
        'Criminal law and advocacy experience',
      ],
    },
    marezana: {
      name: 'Tashinga Lawrence Marezana',
      initials: 'TM',
      position: 'Associate',
      specialization: 'Civil & Commercial Litigation | Contractual Disputes | Debt Recovery',
      experience: '5+ Years',
      email: 'tlmarezana@ctattorneys.co.zw',
      phone: '+263 77 588 6434',
      bio: 'Tashinga Lawrence Marezana has built his practice around civil and commercial litigation, representing individuals and businesses in a broad range of contentious matters.\n\nHis practice includes contractual disputes, enforcement proceedings, debt recovery and other civil and commercial claims. He approaches litigation with the understanding that a successful legal strategy must consider not only the law, but also the client\'s broader commercial or personal objectives.\n\nTashinga combines careful legal analysis with practical litigation strategy, identifying the issues that matter most and developing an approach directed towards an effective resolution. Where disputes can be resolved without prolonged litigation, he considers practical avenues for settlement; where court proceedings are necessary, his focus is on thorough preparation and effective advocacy.\n\nHis approach is straightforward: understand the dispute, understand what the client wants to achieve, and develop the legal strategy accordingly.',
      expertise: [
        'Civil Litigation',
        'Commercial Litigation',
        'Contractual Disputes',
        'Debt Recovery',
        'Enforcement Proceedings',
        'Dispute Resolution',
      ],
      achievements: [
        'Civil and commercial litigation across a broad range of matters',
        'Contractual dispute resolution and enforcement',
        'Debt recovery and enforcement proceedings',
        'Practical settlement strategy and court advocacy',
      ],
    },
    phiri: {
      name: 'Y.M. Phiri',
      initials: 'YP',
      position: 'Associate',
      specialization: 'Family Law | Deceased Estates | Civil Litigation',
      experience: '4+ Years',
      email: 'maxinephiri@ctattorneys.co.zw',
      phone: '+263 77 374 4728',
      bio: "Y.M. Phiri's practice centres on family law, deceased estates and civil litigation, areas in which legal disputes are often closely connected to difficult personal and family circumstances.\n\nShe advises and represents clients in divorce, custody, guardianship and inheritance matters, including disputes requiring negotiated resolution or contested court proceedings.\n\nHer family law practice recognises that the consequences of a dispute can extend well beyond the courtroom. She therefore combines firm representation with a measured approach to matters involving children, matrimonial interests and family relationships.\n\nIn deceased estates and succession matters, she assists clients in navigating inheritance disputes and estate-related legal issues, with particular attention to protecting the rights and interests of those affected.\n\nHer approach combines careful client engagement with firm and effective advocacy, particularly in matters requiring both legal precision and sensitivity.",
      expertise: [
        'Family Law',
        'Divorce & Matrimonial Matters',
        'Child Custody',
        'Guardianship',
        'Deceased Estates & Succession',
        'Inheritance Disputes',
        'Civil Litigation',
        'Dispute Resolution',
      ],
      achievements: [
        'Family law representation in divorce and custody matters',
        'Deceased estates and succession advisory',
        'Inheritance dispute resolution',
        'Client-centred advocacy in sensitive personal matters',
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
                  <div className="space-y-4">
                    {lawyer.bio.split('\n\n').map((paragraph, i) => (
                      <p key={i} className="text-charcoal-600/70 leading-relaxed text-base">
                        {paragraph}
                      </p>
                    ))}
                  </div>
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
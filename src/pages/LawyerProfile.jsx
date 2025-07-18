import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Mail, Phone, ArrowLeft, Award, BookOpen, Users, Scale } from 'lucide-react';

const LawyerProfile = () => {
  const { lawyerId } = useParams();

  const lawyers = {
    chikwangwani: {
      name: 'D. Chikwangwani',
      position: 'Managing Partner',
      specialization: 'Commercial Litigation, Corporate Law',
      experience: '15+ Years',
      education: 'LLB (Hons), University of Zimbabwe',
      email: 'd.chikwangwani@ctattorneys.co.zw',
      phone: '+263 77 123 4567',
      bio: 'D. Chikwangwani serves as the Managing Partner of Chikwangwani Tapi Attorneys, bringing over 15 years of extensive experience in commercial litigation and corporate law. He has successfully represented clients in complex commercial disputes, corporate restructuring, and high-stakes litigation matters.',
      expertise: [
        'Commercial Litigation and Dispute Resolution',
        'Corporate Law and Business Advisory',
        'Mergers and Acquisitions',
        'Contract Law and Commercial Transactions',
        'Regulatory Compliance and Corporate Governance'
      ],
      achievements: [
        'Successfully handled over 200 commercial litigation cases',
        'Led the firm\'s expansion into corporate advisory services',
        'Recognized as a leading commercial litigation attorney',
        'Regular speaker at legal conferences on corporate law'
      ],
      education_details: [
        'LLB (Honours), University of Zimbabwe',
        'Admitted to the High Court of Zimbabwe',
        'Member of the Law Society of Zimbabwe'
      ]
    },
    mabwe: {
      name: 'G. Mabwe',
      position: 'Partner',
      specialization: 'Family Law, Property Law',
      experience: '12+ Years',
      education: 'LLB, University of Zimbabwe',
      email: 'g.mabwe@ctattorneys.co.zw',
      phone: '+263 77 234 5678',
      bio: 'G. Mabwe is a Partner specializing in family law and property matters. With over 12 years of experience, she brings a compassionate yet strategic approach to sensitive family disputes while ensuring clients\' interests are protected throughout the legal process.',
      expertise: [
        'Divorce and Separation Proceedings',
        'Child Custody and Maintenance',
        'Property Division and Financial Settlements',
        'Domestic Violence and Protection Orders',
        'Property Transactions and Conveyancing'
      ],
      achievements: [
        'Successfully resolved over 150 family law matters',
        'Specialized training in mediation and alternative dispute resolution',
        'Active member of the Family Law Association',
        'Advocate for children\'s rights and welfare'
      ],
      education_details: [
        'LLB, University of Zimbabwe',
        'Certificate in Family Law Practice',
        'Admitted to the High Court of Zimbabwe'
      ]
    },
    mazungunye: {
      name: 'NT. Mazungunye',
      position: 'Associate',
      specialization: 'Criminal Law, Constitutional Law',
      experience: '8+ Years',
      education: 'LLB, University of Zimbabwe',
      email: 'nt.mazungunye@ctattorneys.co.zw',
      phone: '+263 77 345 6789',
      bio: 'NT. Mazungunye is an experienced criminal defense attorney with particular expertise in constitutional law matters. He has successfully defended clients in a wide range of criminal cases while also handling constitutional challenges and human rights litigation.',
      expertise: [
        'Criminal Defense and Trial Advocacy',
        'Constitutional Law and Human Rights',
        'Bail Applications and Pre-trial Procedures',
        'White-collar Crime and Economic Offences',
        'Appeals and Review Applications'
      ],
      achievements: [
        'Successfully defended clients in high-profile criminal cases',
        'Won significant constitutional law challenges',
        'Published articles on criminal procedure and constitutional rights',
        'Regular legal aid volunteer for indigent defendants'
      ],
      education_details: [
        'LLB, University of Zimbabwe',
        'Certificate in Criminal Law Practice',
        'Member of the Criminal Defense Lawyers Association'
      ]
    },
    james: {
      name: 'MM. James',
      position: 'Associate',
      specialization: 'Labour Law, Employment Relations',
      experience: '6+ Years',
      education: 'LLB, Midlands State University',
      email: 'mm.james@ctattorneys.co.zw',
      phone: '+263 77 456 7890',
      bio: 'MM. James specializes in labour and employment law, representing both employees and employers in workplace disputes. She is passionate about ensuring fair employment practices and protecting workers\' rights while helping businesses maintain compliant employment relationships.',
      expertise: [
        'Employment Contracts and Workplace Policies',
        'Wrongful Dismissal and Termination Disputes',
        'Labour Relations and Collective Bargaining',
        'Workplace Discrimination and Harassment',
        'Employment Compliance and Advisory'
      ],
      achievements: [
        'Successfully represented clients in over 100 employment disputes',
        'Expertise in both Labour Court and NEC proceedings',
        'Regular trainer on employment law compliance',
        'Active member of the Employment Lawyers Association'
      ],
      education_details: [
        'LLB, Midlands State University',
        'Certificate in Labour and Employment Law',
        'Admitted to practice before the Labour Court'
      ]
    },
    masiyenyama: {
      name: 'K. Masiyenyama',
      position: 'Associate',
      specialization: 'Property Law, Conveyancing',
      experience: '7+ Years',
      education: 'LLB, University of Zimbabwe',
      email: 'k.masiyenyama@ctattorneys.co.zw',
      phone: '+263 77 567 8901',
      bio: 'K. Masiyenyama is an expert in property law and conveyancing with meticulous attention to detail. She has successfully handled hundreds of property transactions, ensuring smooth transfers while protecting clients\' interests in complex property matters.',
      expertise: [
        'Residential and Commercial Property Transfers',
        'Property Development and Planning Law',
        'Lease Agreements and Tenancy Disputes',
        'Property Title Registration and Disputes',
        'Real Estate Due Diligence'
      ],
      achievements: [
        'Completed over 300 successful property transfers',
        'Expertise in complex commercial property transactions',
        'Regular consultant on property development projects',
        'Member of the Property Lawyers Association'
      ],
      education_details: [
        'LLB, University of Zimbabwe',
        'Certificate in Conveyancing Practice',
        'Registered Conveyancer with the Deeds Office'
      ]
    },
    marezana: {
      name: 'TL. Marezana',
      position: 'Associate',
      specialization: 'Estate Planning, Trusts',
      experience: '5+ Years',
      education: 'LLB, University of Zimbabwe',
      email: 'tl.marezana@ctattorneys.co.zw',
      phone: '+263 77 678 9012',
      bio: 'TL. Marezana specializes in estate planning and trust administration, helping clients secure their legacy and protect their beneficiaries. She provides comprehensive estate planning services and guides families through the administration of deceased estates.',
      expertise: [
        'Will Drafting and Estate Planning',
        'Trust Formation and Administration',
        'Estate Administration and Probate',
        'Succession Planning for Businesses',
        'Tax Planning for Estates'
      ],
      achievements: [
        'Administered over 100 deceased estates',
        'Established numerous family and business trusts',
        'Regular presenter on estate planning seminars',
        'Member of the Estate Planning Council'
      ],
      education_details: [
        'LLB, University of Zimbabwe',
        'Certificate in Estate Planning and Trust Law',
        'Member of the Society of Trust and Estate Practitioners'
      ]
    },
    phiri: {
      name: 'YM. Phiri',
      position: 'Associate',
      specialization: 'Corporate Advisory, Commercial Law',
      experience: '4+ Years',
      education: 'LLB, University of Zimbabwe',
      email: 'ym.phiri@ctattorneys.co.zw',
      phone: '+263 77 789 0123',
      bio: 'YM. Phiri provides strategic corporate advice to businesses across various industries. Despite being the newest member of the team, she brings fresh perspectives and innovative solutions to complex commercial legal challenges.',
      expertise: [
        'Company Formation and Corporate Structuring',
        'Commercial Contracts and Agreements',
        'Regulatory Compliance and Licensing',
        'Mergers and Acquisitions Advisory',
        'Intellectual Property and Technology Law'
      ],
      achievements: [
        'Assisted in the establishment of over 50 companies',
        'Expertise in emerging technology and startup law',
        'Active in professional development and continuing education',
        'Rising star in commercial law practice'
      ],
      education_details: [
        'LLB, University of Zimbabwe',
        'Certificate in Corporate Law Practice',
        'Member of the Young Lawyers Association'
      ]
    }
  };

  const lawyer = lawyers[lawyerId];

  if (!lawyer) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Lawyer Not Found</h1>
          <Link to="/team" className="text-blue-600 hover:text-blue-700">
            Return to Team Page
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Back Navigation */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/team"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Team
          </Link>
        </div>
      </div>

      {/* Profile Header */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Profile Image and Basic Info */}
            <div className="lg:col-span-1">
              <div className="bg-gray-200 rounded-lg h-64 lg:h-80 flex items-center justify-center mb-6">
                <Users className="h-20 w-20 text-gray-500" />
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  {lawyer.name}
                </h1>
                <p className="text-blue-600 font-semibold mb-1">
                  {lawyer.position}
                </p>
                <p className="text-gray-600 mb-4">
                  {lawyer.specialization}
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Award className="h-4 w-4 mr-2 text-blue-600" />
                    <span className="text-gray-600">{lawyer.experience} Experience</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <BookOpen className="h-4 w-4 mr-2 text-blue-600" />
                    <span className="text-gray-600">{lawyer.education}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Mail className="h-4 w-4 mr-2 text-blue-600" />
                    <span className="text-gray-600 truncate">{lawyer.email}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Phone className="h-4 w-4 mr-2 text-blue-600" />
                    <span className="text-gray-600">{lawyer.phone}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Information */}
            <div className="lg:col-span-2 space-y-8">
              {/* Biography */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                  About {lawyer.name.split(' ')[0]}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {lawyer.bio}
                </p>
              </div>

              {/* Areas of Expertise */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Areas of Expertise
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {lawyer.expertise.map((area, index) => (
                    <div key={index} className="flex items-start">
                      <Scale className="h-4 w-4 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Key Achievements
                </h3>
                <ul className="space-y-2">
                  {lawyer.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Education & Qualifications */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Education & Qualifications
                </h3>
                <ul className="space-y-2">
                  {lawyer.education_details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <BookOpen className="h-4 w-4 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
            Schedule a Consultation
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact {lawyer.name.split(' ')[0]} directly to discuss your legal matter 
            and explore how our expertise can help achieve your objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${lawyer.email}`}
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <Mail className="mr-2 h-5 w-5" />
              Send Email
            </a>
            <a
              href={`tel:${lawyer.phone}`}
              className="inline-flex items-center px-8 py-4 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LawyerProfile;
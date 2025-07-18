import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Mail, Phone, ArrowRight } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'D. Chikwangwani',
      position: 'Managing Partner',
      specialization: 'Commercial Litigation, Corporate Law',
      experience: '15+ Years',
      education: 'LLB (Hons), University of Zimbabwe',
      email: 'd.chikwangwani@ctattorneys.co.zw',
      phone: '+263 77 123 4567',
      id: 'chikwangwani',
      bio: 'Leading the firm with extensive experience in commercial litigation and corporate advisory services.'
    },
    {
      name: 'G. Mabwe',
      position: 'Partner',
      specialization: 'Family Law, Property Law',
      experience: '12+ Years',
      education: 'LLB, University of Zimbabwe',
      email: 'g.mabwe@ctattorneys.co.zw',
      phone: '+263 77 234 5678',
      id: 'mabwe',
      bio: 'Specialized in family law matters with a compassionate approach to sensitive family disputes.'
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
      bio: 'Experienced criminal defense attorney with expertise in constitutional law matters.'
    },
    {
      name: 'MM. James',
      position: 'Associate',
      specialization: 'Labour Law, Employment Relations',
      experience: '6+ Years',
      education: 'LLB, Midlands State University',
      email: 'mm.james@ctattorneys.co.zw',
      phone: '+263 77 456 7890',
      id: 'james',
      bio: 'Dedicated to protecting employee rights and ensuring fair employment practices.'
    },
    {
      name: 'K. Masiyenyama',
      position: 'Associate',
      specialization: 'Property Law, Conveyancing',
      experience: '7+ Years',
      education: 'LLB, University of Zimbabwe',
      email: 'k.masiyenyama@ctattorneys.co.zw',
      phone: '+263 77 567 8901',
      id: 'masiyenyama',
      bio: 'Expert in property transactions and conveyancing with meticulous attention to detail.'
    },
    {
      name: 'TL. Marezana',
      position: 'Associate',
      specialization: 'Estate Planning, Trusts',
      experience: '5+ Years',
      education: 'LLB, University of Zimbabwe',
      email: 'tl.marezana@ctattorneys.co.zw',
      phone: '+263 77 678 9012',
      id: 'marezana',
      bio: 'Specialized in estate planning and trust administration to secure your legacy.'
    },
    {
      name: 'YM. Phiri',
      position: 'Associate',
      specialization: 'Corporate Advisory, Commercial Law',
      experience: '4+ Years',
      education: 'LLB, University of Zimbabwe',
      email: 'ym.phiri@ctattorneys.co.zw',
      phone: '+263 77 789 0123',
      id: 'phiri',
      bio: 'Providing strategic corporate advice to businesses across various industries.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              Our Legal Team
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Meet our experienced attorneys who bring diverse expertise, 
              unwavering commitment, and personalized attention to every case.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-200"
              >
                {/* Profile Image Placeholder */}
                <div className="bg-gray-200 h-64 flex items-center justify-center">
                  <Users className="h-16 w-16 text-gray-500" />
                </div>
                
                {/* Profile Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm mb-3">
                    {member.specialization}
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  
                  {/* Quick Contact */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Mail className="h-4 w-4 mr-2 text-blue-600" />
                      <span className="truncate">{member.email}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="h-4 w-4 mr-2 text-blue-600" />
                      <span>{member.phone}</span>
                    </div>
                  </div>
                  
                  {/* View Profile Link */}
                  <Link
                    to={`/team/${member.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    View Full Profile
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
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
            Work With Our Team
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Our diverse team of legal professionals is ready to provide expert guidance 
            tailored to your specific needs. Contact us to discuss your legal matter.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Team;
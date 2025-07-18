import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Target, Users, ArrowRight } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Excellence',
      description: 'We maintain the highest standards of legal practice and professional conduct.'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Integrity',
      description: 'We conduct our practice with honesty, transparency, and ethical responsibility.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Client Focus',
      description: 'We prioritize our clients\' needs and work tirelessly to achieve their objectives.'
    }
  ];

  const teamMembers = [
    {
      name: 'D. Chikwangwani',
      position: 'Managing Partner',
      specialization: 'Commercial Litigation, Corporate Law',
      id: 'chikwangwani'
    },
    {
      name: 'G. Mabwe',
      position: 'Partner',
      specialization: 'Family Law, Property Law',
      id: 'mabwe'
    },
    {
      name: 'NT. Mazungunye',
      position: 'Associate',
      specialization: 'Criminal Law, Constitutional Law',
      id: 'mazungunye'
    },
    {
      name: 'MM. James',
      position: 'Associate',
      specialization: 'Labour Law, Employment Relations',
      id: 'james'
    },
    {
      name: 'K. Masiyenyama',
      position: 'Associate',
      specialization: 'Property Law, Conveyancing',
      id: 'masiyenyama'
    },
    {
      name: 'TL. Marezana',
      position: 'Associate',
      specialization: 'Estate Planning, Trusts',
      id: 'marezana'
    },
    {
      name: 'YM. Phiri',
      position: 'Associate',
      specialization: 'Corporate Advisory, Commercial Law',
      id: 'phiri'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              About Our Firm
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Chikwangwani Tapi Attorneys represents the confluence of experience, 
              expertise, and unwavering commitment to legal excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded on the principles of integrity, excellence, and client-centered service, 
                Chikwangwani Tapi Attorneys has grown to become a respected boutique law firm 
                serving clients across diverse legal needs.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our firm brings together seasoned legal professionals with complementary 
                expertise, enabling us to provide comprehensive solutions while maintaining 
                the personalized attention that defines our practice.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that effective legal representation goes beyond technical knowledge—
                it requires understanding our clients' objectives, anticipating challenges, 
                and crafting strategic solutions that deliver meaningful results.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <Users className="h-16 w-16 mx-auto mb-4" />
                <p className="text-lg">Our Legal Team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our practice and define our commitment to clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center bg-white p-8 rounded-lg shadow-sm border border-gray-100"
              >
                <div className="text-blue-600 mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
              Our Legal Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seven experienced attorneys bringing diverse expertise and 
              unwavering commitment to client success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {teamMembers.slice(0, 6).map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="bg-gray-200 w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-gray-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 text-center font-medium mb-2">
                  {member.position}
                </p>
                <p className="text-gray-600 text-center text-sm mb-4">
                  {member.specialization}
                </p>
                <div className="text-center">
                  <Link
                    to={`/team/${member.id}`}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    View Profile →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/team"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Meet the Full Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
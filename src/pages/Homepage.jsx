import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Scale, Users, FileText, MessageCircle } from 'lucide-react';

const Homepage = () => {
  const featuredServices = [
    {
      icon: <Scale className="h-6 w-6" />,
      title: 'Litigation',
      description: 'Comprehensive representation in civil and commercial disputes'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Family Law',
      description: 'Sensitive handling of family matters and domestic relations'
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: 'Property Law',
      description: 'Expert guidance in property transactions and conveyancing'
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Understanding Your Rights in Employment Disputes',
      excerpt: 'Recent developments in labour law and what employees need to know...',
      date: 'March 15, 2025',
      category: 'Labour Law'
    },
    {
      id: 2,
      title: 'Property Transfer Procedures in Zimbabwe',
      excerpt: 'A comprehensive guide to property conveyancing and registration...',
      date: 'March 10, 2025',
      category: 'Property Law'
    },
    {
      id: 3,
      title: 'Constitutional Rights and Public Interest Litigation',
      excerpt: 'Exploring the role of constitutional law in protecting citizens...',
      date: 'March 5, 2025',
      category: 'Constitutional Law'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
              Excellence in
              <span className="text-blue-400"> Legal Practice</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
              Chikwangwani Tapi Attorneys provides comprehensive legal services 
              with unwavering commitment to client success and professional integrity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-200"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
              Our Practice Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide expert legal counsel across diverse practice areas, 
              ensuring comprehensive solutions for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-6">
                About Our Firm
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Established with a vision to provide exceptional legal services, 
                Chikwangwani Tapi Attorneys combines decades of collective experience 
                with a modern approach to legal practice.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our team of seven experienced attorneys brings diverse expertise 
                across multiple practice areas, ensuring comprehensive legal solutions 
                tailored to each client's unique needs.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <Scale className="h-16 w-16 mx-auto mb-4" />
                <p className="text-lg">Professional Law Firm Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
              Legal Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with our latest legal commentary, case studies, 
              and insights from our experienced team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-200"
              >
                <div className="p-6">
                  <div className="flex items-center text-sm text-blue-600 mb-2">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    {post.category}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/blog"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              View All Insights
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
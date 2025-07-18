import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Firm Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Scale className="h-8 w-8 text-blue-400" />
              <div>
                <h3 className="text-xl font-serif font-bold">Chikwangwani Tapi</h3>
                <p className="text-sm text-gray-400">Attorneys</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              A boutique law firm committed to providing exceptional legal services 
              with integrity, professionalism, and personalized attention to each client.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Services', 'Team', 'Insights', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Insights' ? '/blog' : `/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  123 Legal Avenue<br />
                  Harare, Zimbabwe
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">+263 4 123 4567</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">info@ctattorneys.co.zw</p>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Mon - Fri: 8:00 AM - 5:00 PM<br />
                  Sat: 9:00 AM - 1:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Chikwangwani Tapi Attorneys. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
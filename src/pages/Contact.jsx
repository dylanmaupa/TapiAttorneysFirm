import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', practiceArea: '', message: '', urgency: 'normal',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

  const practiceAreas = [
    'Civil & Commercial Litigation', 'Family Law', 'Property & Conveyancing',
    'Labour & Employment Law', 'Criminal Law', 'Estates & Trusts',
    'Corporate & Commercial Advisory', 'Constitutional & Public Law', 'Notarial Services', 'Other',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      const response = await fetch('https://formsubmit.co/ajax/dylanmaupa@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          urgency: formData.urgency,
          practiceArea: formData.practiceArea || 'Not specified',
          subject: formData.subject,
          message: formData.message,
          _subject: `[CT Attorneys] New Inquiry: ${formData.subject}`,
          _template: 'table',
        }),
      });
      const result = await response.json();
      if (result.success === 'true' || result.success === true) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', practiceArea: '', message: '', urgency: 'normal' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactDetails = [
    {
      icon: <MapPin className="h-5 w-5" />,
      title: 'Office Address',
      content: ['2nd Floor', 'Red Bridge Northwing','Eastgate Centre','Harare, Zimbabwe'],
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: 'Phone Numbers',
      content: ['Main: +263 8677211814', 'Mobile: +263 77 396 9136'],
      links: ['tel:+2638677211814', 'tel:+263773969136'],
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: 'Email Addresses',
      content: ['info@ctattorneys.co.zw', 'harare.office@ctattorneys.co.zw'],
      links: ['mailto:info@ctattorneys.co.zw', 'mailto:harare.office@ctattorneys.co.zw'],
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: 'Office Hours',
      content: ['Mon – Fri: 8:00 AM – 5:00 PM', 'Saturday: 9:00 AM – 1:00 PM', 'Emergency consultations available'],
    },
  ];

  return (
    <div className="bg-cream-100">
      {/* Hero */}
      <section className="relative bg-charcoal-900 hero-mesh py-20 lg:py-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl fade-in-up">
            <p className="section-label mb-4">Reach Out</p>
            <span className="gold-line block mb-6" />
            <h1 className="font-serif font-bold text-4xl lg:text-6xl text-white mb-6 leading-tight">
              Contact Us
            </h1>
            <p className="text-xl text-cream-300/70 leading-relaxed fade-in-up fade-in-delay-1">
              Ready to discuss your legal matter? Our experienced team is here to provide
              the guidance and representation you need — confidentially.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Left: Contact Details */}
            <div className="lg:col-span-1 space-y-6">
              <ScrollAnimation>
                <p className="section-label mb-2">Get In Touch</p>
                <h2 className="section-title text-2xl text-navy-600 mb-5">Our Offices</h2>
                <p className="text-charcoal-600/60 text-sm leading-relaxed mb-8">
                  We're here to help with your legal needs. Contact either office to schedule a
                  consultation and discuss how we can assist you.
                </p>
              </ScrollAnimation>

              {/* Head Office — Harare */}
              <ScrollAnimation delay={50}>
                <div className="service-card bg-white p-5">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-gold-500" />
                    <p className="text-xs font-bold text-gold-600 uppercase tracking-widest">Head Office — Harare</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-navy-600 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-4 w-4 text-gold-500" />
                      </div>
                      <p className="text-charcoal-600/60 text-sm pt-1">2nd Floor, Red Bridge Northwing<br />Eastgate Centre, Harare</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-navy-600 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-4 w-4 text-gold-500" />
                      </div>
                      <div className="text-sm">
                        <a href="tel:+2638677211814" className="block text-charcoal-600/60 hover:text-gold-600 transition-colors">+263 8677211814</a>
                        <a href="tel:+263773969136" className="block text-charcoal-600/60 hover:text-gold-600 transition-colors">+263 77 396 9136</a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-navy-600 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-4 w-4 text-gold-500" />
                      </div>
                      <div className="text-sm">
                        <a href="mailto:info@ctattorneys.co.zw" className="block text-charcoal-600/60 hover:text-gold-600 transition-colors">info@ctattorneys.co.zw</a>
                        <a href="mailto:harare.office@ctattorneys.co.zw" className="block text-charcoal-600/60 hover:text-gold-600 transition-colors">harare.office@ctattorneys.co.zw</a>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Branch Office — Kadoma */}
              <ScrollAnimation delay={150}>
                <div className="service-card bg-white p-5">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-navy-600" />
                    <p className="text-xs font-bold text-navy-600/70 uppercase tracking-widest">Branch Office — Kadoma</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-navy-600 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-4 w-4 text-gold-500" />
                      </div>
                      <p className="text-charcoal-600/60 text-sm pt-1">10 Warwick Street <br/> Kadoma, Zimbabwe</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-navy-600 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-4 w-4 text-gold-500" />
                      </div>
                      <a href="mailto:kadoma.office@ctattorneys.co.zw" className="text-charcoal-600/60 hover:text-gold-600 transition-colors text-sm">
                        kadoma.office@ctattorneys.co.zw
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Office Hours */}
              <ScrollAnimation delay={250}>
                <div className="service-card bg-white p-5">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-navy-600 flex items-center justify-center text-gold-500 flex-shrink-0">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy-600 text-sm mb-2">Office Hours</p>
                      <p className="text-sm text-charcoal-600/60">Mon – Fri: 8:00 AM – 5:00 PM</p>
                      <p className="text-sm text-charcoal-600/60">Saturday: 9:00 AM – 1:00 PM</p>
                      <p className="text-sm text-gold-600 font-medium mt-1">Emergency consultations available</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

            </div>

            {/* Right: Consultation Form */}
            <ScrollAnimation delay={200} className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-card border border-cream-200 p-8 lg:p-10">
                <p className="section-label mb-2">Free Consultation</p>
                <h2 className="section-title text-2xl text-navy-600 mb-2">Schedule a Consultation</h2>
                <p className="text-charcoal-600/50 text-sm mb-8">
                  Fill in the form below and we'll get back to you within 24 hours.
                </p>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="mb-8 p-5 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-emerald-800 font-semibold text-sm">Message received!</p>
                      <p className="text-emerald-700 text-sm mt-1">
                        Thank you for reaching out. We'll contact you within 24 hours.
                      </p>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="mb-8 p-5 bg-red-50 border border-red-200 rounded-xl flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-red-700 text-sm">
                      Sorry, there was an error sending your message. Please call us directly or try again.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-navy-600 uppercase tracking-widest mb-2">
                        Full Name <span className="text-gold-500">*</span>
                      </label>
                      <input
                        type="text" id="name" name="name" required
                        value={formData.name} onChange={handleInputChange}
                        className="form-input" placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-navy-600 uppercase tracking-widest mb-2">
                        Email Address <span className="text-gold-500">*</span>
                      </label>
                      <input
                        type="email" id="email" name="email" required
                        value={formData.email} onChange={handleInputChange}
                        className="form-input" placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-navy-600 uppercase tracking-widest mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel" id="phone" name="phone"
                        value={formData.phone} onChange={handleInputChange}
                        className="form-input" placeholder="+263 77 123 4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="urgency" className="block text-xs font-semibold text-navy-600 uppercase tracking-widest mb-2">
                        Urgency Level
                      </label>
                      <select id="urgency" name="urgency" value={formData.urgency} onChange={handleInputChange} className="form-input">
                        <option value="normal">Normal</option>
                        <option value="urgent">Urgent</option>
                        <option value="emergency">Emergency</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="practiceArea" className="block text-xs font-semibold text-navy-600 uppercase tracking-widest mb-2">
                      Practice Area
                    </label>
                    <select id="practiceArea" name="practiceArea" value={formData.practiceArea} onChange={handleInputChange} className="form-input">
                      <option value="">Select a practice area</option>
                      {practiceAreas.map((area) => (
                        <option key={area} value={area}>{area}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-navy-600 uppercase tracking-widest mb-2">
                      Subject <span className="text-gold-500">*</span>
                    </label>
                    <input
                      type="text" id="subject" name="subject" required
                      value={formData.subject} onChange={handleInputChange}
                      className="form-input" placeholder="Brief description of your legal matter"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-navy-600 uppercase tracking-widest mb-2">
                      Message <span className="text-gold-500">*</span>
                    </label>
                    <textarea
                      id="message" name="message" required rows={5}
                      value={formData.message} onChange={handleInputChange}
                      className="form-input resize-none"
                      placeholder="Please provide details about your legal matter, including any relevant dates, parties involved, and specific questions you have..."
                    />
                  </div>

                  <div className="bg-gold-50 border border-gold-200/60 rounded-xl p-4">
                    <p className="text-charcoal-600/60 text-xs leading-relaxed">
                      <span className="font-semibold text-navy-600">Privacy Notice:</span> Your information will be kept strictly confidential.
                      Submitting this form does not create an attorney-client relationship until formally established.
                    </p>
                  </div>

                  <button
                    type="submit"
                    id="submit-consultation-btn"
                    disabled={isSubmitting}
                    className="btn-gold w-full flex items-center justify-center px-8 py-4 rounded-xl font-semibold disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-charcoal-900/30 border-t-charcoal-900 rounded-full animate-spin mr-3" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center mb-10">
            <p className="section-label mb-3">Find Us</p>
            <h2 className="section-title text-2xl lg:text-3xl text-navy-600 mb-3">
              Visit Our Office
            </h2>
            <p className="text-charcoal-600/60">
              Located in the heart of Harare's legal district
            </p>
          </ScrollAnimation>

          {/* Map embed / placeholder */}
          <div className="relative rounded-2xl overflow-hidden shadow-card border border-gold-500/10 h-96">
            <iframe
              title="Chikwangwani Tapi Attorneys – Harare Office"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.0!2d31.0538!3d-17.8293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4e706b3ab79%3A0x83e937a39f84b2c2!2sEastgate%20Centre%2C%20Harare%2C%20Zimbabwe!5e0!3m2!1sen!2szw!4v1691000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
            {/* Map overlay badge */}
            <div className="absolute bottom-4 left-4 bg-charcoal-900/90 backdrop-blur-sm rounded-xl px-4 py-3 flex items-start space-x-3 border border-gold-500/20">
              <div className="w-8 h-8 rounded-lg bg-navy-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin className="h-4 w-4 text-gold-500" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold leading-tight">Head Office — Harare</p>
                <p className="text-cream-300/60 text-xs mt-0.5">2nd Floor, Red Bridge Northwing, Eastgate Centre</p>
                <a
                  href="https://maps.google.com/?q=Eastgate+Centre,+Harare,+Zimbabwe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-1.5 text-gold-400 hover:text-gold-300 text-xs font-medium transition-colors"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
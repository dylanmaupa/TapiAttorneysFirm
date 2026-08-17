import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Target, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';

const About = () => {
  const values = [
    {
      icon: <Award className="h-7 w-7" />,
      title: 'Excellence',
      description: 'We maintain the highest standards of legal practice and professional conduct in every matter we handle.',
    },
    {
      icon: <Target className="h-7 w-7" />,
      title: 'Integrity',
      description: 'We conduct our practice with honesty, transparency, and unwavering ethical responsibility at all times.',
    },
    {
      icon: <Users className="h-7 w-7" />,
      title: 'Client Focus',
      description: 'We prioritize our clients\' needs and work tirelessly to achieve their objectives with measurable results.',
    },
  ];

  const teamMembers = [
    { name: 'D. Chikwangwani', position: 'Managing Partner',  specialization: 'Commercial Litigation, Corporate Law', id: 'chikwangwani' },
    { name: 'G. Mabwe',        position: 'Partner',           specialization: 'Family Law, Property Law',             id: 'mabwe'        },
    { name: 'NT. Mazungunye',  position: 'Associate',         specialization: 'Criminal Law, Constitutional Law',     id: 'mazungunye'   },
    { name: 'MM. James',       position: 'Associate',         specialization: 'Labour Law, Employment Relations',     id: 'james'        },
    { name: 'K. Masiyenyama',  position: 'Associate',         specialization: 'Property Law, Conveyancing',          id: 'masiyenyama'  },
    { name: 'TL. Marezana',    position: 'Associate',         specialization: 'Estate Planning, Trusts',             id: 'marezana'     },
  ];

  const milestones = [
    { year: '2009', event: 'Firm founded in Harare by D. Chikwangwani' },
    { year: '2013', event: 'Expanded to include property & conveyancing practice' },
    { year: '2017', event: 'Grew to 5 attorneys, added constitutional law practice' },
    { year: '2022', event: 'Recognized among Zimbabwe\'s leading boutique firms' },
    { year: '2025', event: '7 attorneys, 9 practice areas, 500+ cases handled' },
  ];

  return (
    <div className="bg-cream-100">

      {/* Hero */}
      <section className="relative bg-charcoal-900 hero-mesh py-20 lg:py-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl fade-in-up">
            <p className="section-label mb-4">Our Story</p>
            <span className="gold-line block mb-6" />
            <h1 className="font-serif font-bold text-4xl lg:text-6xl text-white mb-6 leading-tight">
              About Our Firm
            </h1>
            <p className="text-xl text-cream-300/70 leading-relaxed fade-in-up fade-in-delay-1">
              Chikwangwani Tapi Attorneys represents the confluence of experience, expertise,
              and unwavering commitment to legal excellence across Zimbabwe.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation>
              <p className="section-label mb-4">Who We Are</p>
              <span className="gold-line block mb-6" />
              <h2 className="section-title text-3xl lg:text-4xl text-navy-600 mb-6">
                Our Story
              </h2>
              <p className="text-charcoal-600/70 leading-relaxed mb-5">
                Founded on the principles of integrity, excellence, and client-centered service,
                Chikwangwani Tapi Attorneys has grown to become a respected boutique law firm
                serving clients across diverse legal needs throughout Zimbabwe.
              </p>
              <p className="text-charcoal-600/70 leading-relaxed mb-5">
                Our firm brings together seasoned legal professionals with complementary
                expertise, enabling us to provide comprehensive solutions while maintaining
                the personalized attention that defines our practice.
              </p>
              <p className="text-charcoal-600/70 leading-relaxed mb-8">
                We believe that effective legal representation goes beyond technical knowledge —
                it requires understanding our clients' objectives, anticipating challenges,
                and crafting strategic solutions that deliver meaningful results.
              </p>

              {[
                'Zimbabwe Bar Council certified attorneys',
                'Strict attorney-client confidentiality',
                'Emergency consultation services available',
                'Transparent, fixed-fee billing options',
              ].map((item) => (
                <div key={item} className="flex items-center space-x-3 mb-2">
                  <CheckCircle2 className="h-5 w-5 text-gold-500 flex-shrink-0" />
                  <span className="text-charcoal-600/70 text-sm">{item}</span>
                </div>
              ))}
            </ScrollAnimation>

            {/* Office Image */}
            <ScrollAnimation delay={300} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-card-hover h-[500px]">
                <img
                  src="/office.png"
                  alt="Chikwangwani Tapi Attorneys Harare office"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.parentElement.className = 'relative rounded-2xl overflow-hidden bg-navy-600 h-[500px] flex items-center justify-center';
                    e.target.style.display = 'none';
                  }}
                />
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold-500 rounded-tl-2xl" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold-500 rounded-br-2xl" />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center mb-16">
            <p className="section-label mb-3">Our Journey</p>
            <h2 className="section-title text-3xl lg:text-5xl text-navy-600 mb-5">
              Milestones
            </h2>
          </ScrollAnimation>
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gold-200" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <ScrollAnimation key={i} delay={i * 100} className="relative pl-16">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-navy-600 border-4 border-gold-500 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-gold-400" />
                  </div>
                  <p className="text-gold-600 text-sm font-bold uppercase tracking-widest mb-1">{m.year}</p>
                  <p className="text-navy-600 font-medium">{m.event}</p>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center mb-16">
            <p className="section-label mb-3">What Guides Us</p>
            <h2 className="section-title text-3xl lg:text-5xl text-navy-600 mb-5">
              Our Core Values
            </h2>
            <p className="text-charcoal-600/60 max-w-2xl mx-auto">
              The principles that guide our practice and define our commitment to every client we serve.
            </p>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <ScrollAnimation key={index} delay={index * 150}>
                <div className="service-card bg-white p-8 text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-navy-600 flex items-center justify-center text-gold-500 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="font-serif font-bold text-xl text-navy-600 mb-4">{value.title}</h3>
                  <p className="text-charcoal-600/60 leading-relaxed text-sm">{value.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center mb-16">
            <p className="section-label mb-3">Meet The Team</p>
            <h2 className="section-title text-3xl lg:text-5xl text-navy-600 mb-5">
              Our Legal Team
            </h2>
            <p className="text-charcoal-600/60 max-w-2xl mx-auto">
              Seven experienced attorneys bringing diverse expertise and unwavering commitment to client success.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {teamMembers.map((member, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <Link to={`/team/${member.id}`} className="service-card bg-white p-6 block group text-center">
                  <div className="w-16 h-16 rounded-full bg-navy-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-8 w-8 text-gold-500" />
                  </div>
                  <h3 className="font-serif font-bold text-navy-600 mb-1 group-hover:text-gold-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-gold-600 text-sm font-medium mb-1">{member.position}</p>
                  <p className="text-charcoal-600/50 text-xs">{member.specialization}</p>
                </Link>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation className="text-center">
            <Link to="/team" className="btn-gold inline-flex items-center px-8 py-4 rounded-xl font-semibold">
              Meet the Full Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default About;
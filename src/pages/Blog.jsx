import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronRight, Clock, Calendar, Tag } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Labour Law', 'Property Law', 'Constitutional Law', 'Family Law', 'Criminal Law', 'Corporate Law'];

  const posts = [
    { id: 1, title: 'Understanding Your Rights in Employment Disputes', excerpt: 'Recent developments in labour law and what employees need to know about their rights when facing workplace disputes in Zimbabwe.', date: 'March 15, 2025', category: 'Labour Law', readTime: '5 min read', author: 'MM. James' },
    { id: 2, title: 'Property Transfer Procedures in Zimbabwe', excerpt: 'A comprehensive guide to property conveyancing and registration processes under Zimbabwean law — from offer to title deed.', date: 'March 10, 2025', category: 'Property Law', readTime: '7 min read', author: 'K. Masiyenyama' },
    { id: 3, title: 'Constitutional Rights and Public Interest Litigation', excerpt: 'Exploring the role of constitutional law in protecting citizens\' fundamental rights and the evolving landscape of public interest litigation.', date: 'March 5, 2025', category: 'Constitutional Law', readTime: '6 min read', author: 'NT. Mazungunye' },
    { id: 4, title: 'Navigating Divorce Proceedings in Zimbabwe', excerpt: 'A guide through the divorce process under Zimbabwean law, including property division, custody arrangements, and maintenance orders.', date: 'February 28, 2025', category: 'Family Law', readTime: '8 min read', author: 'G. Mabwe' },
    { id: 5, title: 'Criminal Defense: Know Your Rights During Arrest', excerpt: 'What you need to know about your legal rights the moment you are arrested — and why securing legal representation immediately matters.', date: 'February 20, 2025', category: 'Criminal Law', readTime: '4 min read', author: 'NT. Mazungunye' },
    { id: 6, title: 'Starting a Business in Zimbabwe: Legal Essentials', excerpt: 'Key legal considerations for entrepreneurs — from company registration to shareholder agreements and regulatory compliance requirements.', date: 'February 12, 2025', category: 'Corporate Law', readTime: '9 min read', author: 'YM. Phiri' },
  ];

  const categoryColors = {
    'Labour Law':         { bg: 'bg-blue-50',    text: 'text-blue-700',   dot: 'bg-blue-500'   },
    'Property Law':       { bg: 'bg-emerald-50', text: 'text-emerald-700', dot: 'bg-emerald-500' },
    'Constitutional Law': { bg: 'bg-purple-50',  text: 'text-purple-700', dot: 'bg-purple-500'  },
    'Family Law':         { bg: 'bg-rose-50',    text: 'text-rose-700',   dot: 'bg-rose-500'    },
    'Criminal Law':       { bg: 'bg-slate-50',   text: 'text-slate-700',  dot: 'bg-slate-500'   },
    'Corporate Law':      { bg: 'bg-amber-50',   text: 'text-amber-700',  dot: 'bg-amber-500'   },
  };

  const filtered = posts.filter(p => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory;
    const matchSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        p.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="bg-cream-100">
      {/* Hero */}
      <section className="relative bg-charcoal-900 hero-mesh py-20 lg:py-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl fade-in-up">
            <p className="section-label mb-4">Our Blog</p>
            <span className="gold-line block mb-6" />
            <h1 className="font-serif font-bold text-4xl lg:text-6xl text-white mb-6 leading-tight">
              Legal Insights
            </h1>
            <p className="text-xl text-cream-300/70 leading-relaxed fade-in-up fade-in-delay-1">
              Stay informed with our latest legal commentary, case studies, and insights
              from our experienced team of attorneys.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-white border-b border-cream-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Search */}
            <div className="relative flex-shrink-0 w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-charcoal-600/40" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="form-input pl-10 py-2.5 text-sm"
              />
            </div>

            {/* Category pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-navy-600 text-gold-400'
                      : 'bg-cream-100 text-charcoal-600/60 hover:bg-cream-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <Tag className="h-12 w-12 text-gold-400 mx-auto mb-4" />
              <p className="font-serif font-bold text-2xl text-navy-600 mb-2">No articles found</p>
              <p className="text-charcoal-600/50">Try adjusting your search or category filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((post, index) => {
                const colors = categoryColors[post.category] || { bg: 'bg-gray-50', text: 'text-gray-700', dot: 'bg-gray-500' };
                return (
                  <ScrollAnimation key={post.id} delay={index * 80}>
                    <Link
                      to={`/blog/${post.id}`}
                      className="service-card bg-white overflow-hidden group flex flex-col h-full block"
                    >
                      {/* Category Header */}
                      <div className={`px-6 py-3 border-b border-cream-200 flex items-center space-x-2 ${colors.bg}`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                        <span className={`text-xs font-semibold uppercase tracking-widest ${colors.text}`}>
                          {post.category}
                        </span>
                      </div>

                      <div className="p-7 flex flex-col flex-grow">
                        <h2 className="font-serif font-bold text-lg text-navy-600 mb-3 line-clamp-2 group-hover:text-gold-600 transition-colors leading-snug">
                          {post.title}
                        </h2>
                        <p className="text-charcoal-600/60 text-sm leading-relaxed mb-5 line-clamp-3 flex-grow">
                          {post.excerpt}
                        </p>

                        {/* Meta */}
                        <div className="flex items-center justify-between text-xs text-charcoal-600/40 mb-5">
                          <div className="flex items-center space-x-3">
                            <span className="flex items-center space-x-1">
                              <Calendar className="h-3.5 w-3.5" />
                              <span>{post.date}</span>
                            </span>
                            <span>·</span>
                            <span className="flex items-center space-x-1">
                              <Clock className="h-3.5 w-3.5" />
                              <span>{post.readTime}</span>
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-cream-200">
                          <span className="text-xs text-charcoal-600/40 font-medium">By {post.author}</span>
                          <span className="inline-flex items-center text-gold-600 group-hover:text-gold-700 font-semibold text-sm">
                            Read Article
                            <ChevronRight className="h-4 w-4 ml-0.5 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </ScrollAnimation>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
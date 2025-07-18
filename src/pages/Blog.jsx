import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    'All',
    'Commercial Law',
    'Family Law',
    'Property Law',
    'Labour Law',
    'Criminal Law',
    'Constitutional Law',
    'Estate Planning'
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Understanding Your Rights in Employment Disputes',
      excerpt: 'Recent developments in labour law and what employees need to know about their rights in the workplace. This comprehensive guide covers wrongful dismissal, discrimination, and proper procedures.',
      content: 'Full article content would go here...',
      author: 'MM. James',
      date: 'March 15, 2025',
      category: 'Labour Law',
      readTime: '5 min read',
      featured: true
    },
    {
      id: 2,
      title: 'Property Transfer Procedures in Zimbabwe',
      excerpt: 'A comprehensive guide to property conveyancing and registration processes. Learn about the essential steps, required documents, and common pitfalls to avoid.',
      content: 'Full article content would go here...',
      author: 'K. Masiyenyama',
      date: 'March 10, 2025',
      category: 'Property Law',
      readTime: '7 min read',
      featured: true
    },
    {
      id: 3,
      title: 'Constitutional Rights and Public Interest Litigation',
      excerpt: 'Exploring the role of constitutional law in protecting citizens\' rights and the importance of public interest litigation in upholding democratic principles.',
      content: 'Full article content would go here...',
      author: 'NT. Mazungunye',
      date: 'March 5, 2025',
      category: 'Constitutional Law',
      readTime: '8 min read',
      featured: false
    },
    {
      id: 4,
      title: 'Estate Planning Essentials for Young Professionals',
      excerpt: 'Why estate planning isn\'t just for the elderly. Learn about the importance of wills, trusts, and succession planning for young professionals building wealth.',
      content: 'Full article content would go here...',
      author: 'TL. Marezana',
      date: 'February 28, 2025',
      category: 'Estate Planning',
      readTime: '6 min read',
      featured: false
    },
    {
      id: 5,
      title: 'Corporate Governance Best Practices',
      excerpt: 'Essential governance principles for growing businesses. Understand shareholder rights, board responsibilities, and regulatory compliance requirements.',
      content: 'Full article content would go here...',
      author: 'YM. Phiri',
      date: 'February 25, 2025',
      category: 'Commercial Law',
      readTime: '9 min read',
      featured: false
    },
    {
      id: 6,
      title: 'Family Law: Protecting Children During Divorce',
      excerpt: 'Guidance on prioritizing children\'s welfare during divorce proceedings. Understanding custody arrangements, maintenance, and the legal framework.',
      content: 'Full article content would go here...',
      author: 'G. Mabwe',
      date: 'February 20, 2025',
      category: 'Family Law',
      readTime: '6 min read',
      featured: false
    },
    {
      id: 7,
      title: 'Criminal Defense: Your Rights During Police Interrogation',
      excerpt: 'Know your constitutional rights when dealing with law enforcement. Essential information about the right to remain silent and legal representation.',
      content: 'Full article content would go here...',
      author: 'NT. Mazungunye',
      date: 'February 15, 2025',
      category: 'Criminal Law',
      readTime: '7 min read',
      featured: false
    },
    {
      id: 8,
      title: 'Commercial Litigation: Alternative Dispute Resolution',
      excerpt: 'Exploring mediation and arbitration as cost-effective alternatives to lengthy court proceedings. When and how to pursue ADR options.',
      content: 'Full article content would go here...',
      author: 'D. Chikwangwani',
      date: 'February 10, 2025',
      category: 'Commercial Law',
      readTime: '8 min read',
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              Legal Insights
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Stay informed with expert legal commentary, case studies, and insights 
              from our experienced team of attorneys.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">
            Featured Articles
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-200"
              >
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <Tag className="h-8 w-8 mx-auto mb-2" />
                    <p className="text-sm">Featured Article</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-blue-600 mb-2">
                    <Tag className="h-4 w-4 mr-1" />
                    {post.category}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-200 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">
            All Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-200"
              >
                <div className="bg-gray-200 h-32 flex items-center justify-center">
                  <Tag className="h-6 w-6 text-gray-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-blue-600 mb-2">
                    <Tag className="h-4 w-4 mr-1" />
                    {post.category}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{post.date}</span>
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

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No articles found matching your search criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
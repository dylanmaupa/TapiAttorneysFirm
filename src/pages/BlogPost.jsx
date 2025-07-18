import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Tag, Clock, Share2,ArrowRight } from 'lucide-react';

const BlogPost = () => {
  const { postId } = useParams();

  // In a real application, this would be fetched from an API
  const posts = {
    '1': {
      title: 'Understanding Your Rights in Employment Disputes',
      author: 'MM. James',
      date: 'March 15, 2025',
      category: 'Labour Law',
      readTime: '5 min read',
      content: `
        <p>Employment disputes can be challenging and emotionally draining for all parties involved. As Zimbabwe's labor landscape continues to evolve, it's crucial for both employees and employers to understand their rights and obligations under current employment law.</p>

        <h2>Key Employee Rights</h2>
        <p>Every employee in Zimbabwe is entitled to certain fundamental rights that are protected by law. These include:</p>
        
        <h3>1. Right to Fair Treatment</h3>
        <p>All employees have the right to be treated fairly and without discrimination based on race, gender, religion, political affiliation, or other protected characteristics. This extends to all aspects of employment, from hiring and promotion to disciplinary actions and termination.</p>

        <h3>2. Right to Due Process</h3>
        <p>Before any disciplinary action or termination, employees have the right to due process. This means you must be informed of allegations against you, given an opportunity to respond, and have any disciplinary proceedings conducted fairly and impartially.</p>

        <h3>3. Right to Safe Working Conditions</h3>
        <p>Employers are legally obligated to provide a safe working environment. This includes proper safety equipment, training, and protocols to prevent workplace injuries and illnesses.</p>

        <h2>Common Employment Disputes</h2>
        <p>Understanding the most common types of employment disputes can help you recognize when your rights may have been violated:</p>

        <ul>
          <li><strong>Wrongful Dismissal:</strong> When an employee is terminated without proper procedure or just cause</li>
          <li><strong>Discrimination:</strong> Unfair treatment based on protected characteristics</li>
          <li><strong>Harassment:</strong> Unwelcome conduct that creates a hostile work environment</li>
          <li><strong>Wage and Hour Disputes:</strong> Issues related to unpaid wages, overtime, or benefits</li>
          <li><strong>Breach of Contract:</strong> When either party fails to fulfill their contractual obligations</li>
        </ul>

        <h2>Steps to Take When Facing an Employment Dispute</h2>
        <p>If you believe your employment rights have been violated, consider taking these steps:</p>

        <ol>
          <li><strong>Document Everything:</strong> Keep detailed records of incidents, communications, and any evidence relevant to your case</li>
          <li><strong>Follow Internal Procedures:</strong> Use your company's grievance procedures if available</li>
          <li><strong>Seek Legal Advice:</strong> Consult with an employment lawyer to understand your options</li>
          <li><strong>Consider Alternative Dispute Resolution:</strong> Mediation or arbitration may provide faster, less costly solutions</li>
          <li><strong>File a Complaint:</strong> If necessary, file complaints with relevant authorities or pursue legal action</li>
        </ol>

        <h2>Recent Developments in Labour Law</h2>
        <p>Zimbabwe's labour law continues to evolve, with recent amendments focusing on improving worker protections and streamlining dispute resolution processes. These changes have strengthened employee rights while also providing clearer guidelines for employers.</p>

        <p>Key recent developments include enhanced protection against unfair dismissal, improved procedures for workplace grievances, and stronger penalties for non-compliance with employment law requirements.</p>

        <h2>Conclusion</h2>
        <p>Understanding your employment rights is crucial for protecting yourself in the workplace. Whether you're an employee facing workplace issues or an employer seeking to ensure compliance, professional legal guidance can help navigate the complexities of employment law.</p>

        <p>If you're facing an employment dispute or need advice on workplace rights, don't hesitate to seek professional legal assistance. Early intervention can often prevent minor issues from escalating into major disputes.</p>
      `,
      excerpt: 'Recent developments in labour law and what employees need to know about their rights in the workplace...'
    },
    '2': {
      title: 'Property Transfer Procedures in Zimbabwe',
      author: 'K. Masiyenyama',
      date: 'March 10, 2025',
      category: 'Property Law',
      readTime: '7 min read',
      content: `
        <p>Property transactions are among the most significant financial decisions individuals and businesses make. Understanding the proper procedures for property transfer in Zimbabwe is essential for protecting your investment and ensuring a smooth transaction process.</p>

        <h2>Overview of Property Transfer Process</h2>
        <p>The property transfer process in Zimbabwe involves several critical steps, each designed to ensure the legal and proper transfer of ownership from seller to buyer. This process, known as conveyancing, requires careful attention to detail and compliance with various legal requirements.</p>

        <h2>Key Steps in Property Transfer</h2>
        
        <h3>1. Sale Agreement</h3>
        <p>The process begins with a properly drafted sale agreement that outlines the terms and conditions of the sale. This document should include:</p>
        <ul>
          <li>Property description and boundaries</li>
          <li>Purchase price and payment terms</li>
          <li>Conditions of sale</li>
          <li>Transfer and occupation dates</li>
          <li>Any special conditions or warranties</li>
        </ul>

        <h3>2. Due Diligence</h3>
        <p>Before proceeding with the transfer, comprehensive due diligence must be conducted to verify:</p>
        <ul>
          <li>Clear title and ownership</li>
          <li>Property rates and taxes status</li>
          <li>Any existing bonds or encumbrances</li>
          <li>Municipal compliance certificates</li>
          <li>Building plan approvals</li>
        </ul>

        <h3>3. Transfer Documentation</h3>
        <p>The preparation of transfer documents requires precise legal drafting and includes:</p>
        <ul>
          <li>Deed of Transfer</li>
          <li>Power of Attorney (if applicable)</li>
          <li>Supporting affidavits and declarations</li>
          <li>Tax clearance certificates</li>
        </ul>

        <h2>Required Documents</h2>
        <p>Both parties must provide various documents to facilitate the transfer process:</p>

        <h3>For the Seller:</h3>
        <ul>
          <li>Original title deed</li>
          <li>Identity documents</li>
          <li>Tax clearance certificate</li>
          <li>Municipal clearance certificate</li>
          <li>Bond cancellation figures (if applicable)</li>
        </ul>

        <h3>For the Buyer:</h3>
        <ul>
          <li>Identity documents</li>
          <li>Proof of funds or bond approval</li>
          <li>Tax registration documents</li>
          <li>Residence permit (for non-citizens)</li>
        </ul>

        <h2>Common Challenges and Solutions</h2>
        
        <h3>Title Disputes</h3>
        <p>Sometimes title issues arise that can delay or complicate transfers. These may include boundary disputes, missing documentation, or conflicting ownership claims. Professional legal assistance is crucial in resolving these matters.</p>

        <h3>Regulatory Compliance</h3>
        <p>Various regulatory requirements must be met, including compliance with municipal bylaws, environmental regulations, and foreign investment laws where applicable.</p>

        <h3>Financial Arrangements</h3>
        <p>Coordinating payment arrangements, bond registrations, and transfer costs requires careful timing and professional management to ensure all parties are protected.</p>

        <h2>Costs Involved</h2>
        <p>Property transfer costs include:</p>
        <ul>
          <li>Transfer duty (calculated on property value)</li>
          <li>Deeds office fees</li>
          <li>Legal fees for conveyancing</li>
          <li>Bond registration costs (if applicable)</li>
          <li>Municipal and other clearance certificates</li>
        </ul>

        <h2>Timeline Expectations</h2>
        <p>A typical property transfer in Zimbabwe takes between 6-12 weeks from the date of signing the sale agreement, depending on:</p>
        <ul>
          <li>Complexity of the transaction</li>
          <li>Availability of required documents</li>
          <li>Bond approval processes</li>
          <li>Deeds office processing times</li>
        </ul>

        <h2>Professional Advice</h2>
        <p>Given the complexity of property transfers and the significant financial implications, it's strongly recommended to engage qualified conveyancing attorneys who can:</p>
        <ul>
          <li>Ensure compliance with all legal requirements</li>
          <li>Protect your interests throughout the process</li>
          <li>Resolve any issues that may arise</li>
          <li>Coordinate with all parties involved</li>
        </ul>

        <p>Proper legal representation during property transfers is not just advisable—it's essential for protecting your investment and ensuring a successful transaction.</p>
      `,
      excerpt: 'A comprehensive guide to property conveyancing and registration processes...'
    }
  };

  const post = posts[postId];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <Link to="/blog" className="text-blue-600 hover:text-blue-700">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Back Navigation */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Insights
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8">
            <div className="flex items-center text-sm text-blue-600 mb-4">
              <Tag className="h-4 w-4 mr-1" />
              {post.category}
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {post.readTime}
              </div>
            </div>

            <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
              <span className="text-sm font-medium text-gray-700">Share this article:</span>
              <button className="flex items-center text-sm text-blue-600 hover:text-blue-700">
                <Share2 className="h-4 w-4 mr-1" />
                Share
              </button>
            </div>
          </header>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              lineHeight: '1.7',
              color: '#374151'
            }}
          />

          {/* Author Bio */}
          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              About the Author
            </h3>
            <p className="text-gray-600 mb-4">
              {post.author} is an experienced attorney at Chikwangwani Tapi Attorneys 
              specializing in {post.category.toLowerCase()}. With years of experience in legal practice, 
              they provide expert guidance to clients across diverse legal matters.
            </p>
            <Link
              to="/team"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              View Author Profile
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          {/* Call to Action */}
          <div className="mt-12 p-8 bg-blue-50 rounded-lg text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Need Legal Assistance?
            </h3>
            <p className="text-gray-600 mb-6">
              If you have questions about this topic or need professional legal advice, 
              our experienced team is here to help.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
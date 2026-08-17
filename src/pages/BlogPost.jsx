import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Tag, Clock, Share2, ArrowRight, CheckCircle2 } from 'lucide-react';

const BlogPost = () => {
  const { postId } = useParams();

  const posts = {
    '1': {
      title: 'Understanding Your Rights in Employment Disputes',
      author: 'MM. James',
      authorId: 'james',
      date: 'March 15, 2025',
      category: 'Labour Law',
      readTime: '5 min read',
      excerpt: 'Recent developments in labour law and what employees need to know about their rights in the workplace.',
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
    },
    '2': {
      title: 'Property Transfer Procedures in Zimbabwe',
      author: 'K. Masiyenyama',
      authorId: 'masiyenyama',
      date: 'March 10, 2025',
      category: 'Property Law',
      readTime: '7 min read',
      excerpt: 'A comprehensive guide to property conveyancing and registration processes under Zimbabwean law.',
      content: `
        <p>Property transactions are among the most significant financial decisions individuals and businesses make. Understanding the proper procedures for property transfer in Zimbabwe is essential for protecting your investment and ensuring a smooth transaction process.</p>

        <h2>Overview of Property Transfer Process</h2>
        <p>The property transfer process in Zimbabwe involves several critical steps, each designed to ensure the legal and proper transfer of ownership from seller to buyer. This process, known as conveyancing, requires careful attention to detail and compliance with various legal requirements.</p>

        <h2>Key Steps in Property Transfer</h2>

        <h3>1. Sale Agreement</h3>
        <p>The process begins with a properly drafted sale agreement that outlines the terms and conditions of the sale. This document should include the property description, purchase price, payment terms, and any special conditions.</p>

        <h3>2. Due Diligence</h3>
        <p>Before proceeding with the transfer, comprehensive due diligence must be conducted to verify clear title and ownership, property rates status, any existing encumbrances, and municipal compliance certificates.</p>

        <h3>3. Transfer Documentation</h3>
        <p>The preparation of transfer documents requires precise legal drafting, including the Deed of Transfer, Power of Attorney (if applicable), supporting affidavits, and tax clearance certificates.</p>

        <h2>Required Documents</h2>
        <p>Both parties must provide various documents to facilitate the transfer process, including identity documents, tax clearance certificates, and municipal clearance certificates.</p>

        <h2>Timeline Expectations</h2>
        <p>A typical property transfer in Zimbabwe takes between 6–12 weeks from the date of signing the sale agreement, depending on the complexity of the transaction and availability of required documents.</p>

        <h2>Professional Advice</h2>
        <p>Given the complexity of property transfers and the significant financial implications, it's strongly recommended to engage qualified conveyancing attorneys who can ensure compliance with all legal requirements and protect your interests throughout the process.</p>
      `,
    },
    '3': {
      title: 'Constitutional Rights and Public Interest Litigation',
      author: 'NT. Mazungunye',
      authorId: 'mazungunye',
      date: 'March 5, 2025',
      category: 'Constitutional Law',
      readTime: '6 min read',
      excerpt: 'Exploring the role of constitutional law in protecting citizens\' fundamental rights and the evolving landscape of public interest litigation.',
      content: `
        <p>Constitutional law forms the bedrock of Zimbabwe's legal system, providing the fundamental framework within which all other laws operate. Public interest litigation has emerged as a powerful tool for citizens and civil society organisations to hold government accountable and protect fundamental rights.</p>

        <h2>The Constitutional Framework</h2>
        <p>Zimbabwe's Constitution of 2013 enshrines a comprehensive Bill of Rights that guarantees a wide range of civil, political, economic, social, and cultural rights to all persons within Zimbabwe. These rights are justiciable and enforceable through the courts.</p>

        <h2>Key Constitutional Rights</h2>
        <p>The Constitution protects several fundamental rights including:</p>
        <ul>
          <li><strong>Right to Life:</strong> Every person has the right to life and the state must take reasonable legislative and other measures to prevent the arbitrary deprivation of life</li>
          <li><strong>Right to Personal Liberty:</strong> Every person has the right to personal liberty</li>
          <li><strong>Right to a Fair Hearing:</strong> Every person has the right to a fair, speedy, and public hearing within a reasonable time before an independent and impartial court or tribunal</li>
          <li><strong>Freedom of Expression:</strong> Every person has the right to freedom of expression, including freedom to seek, receive and communicate ideas and other information</li>
          <li><strong>Right to Education and Healthcare:</strong> Every person has the right to basic education and access to basic healthcare services</li>
        </ul>

        <h2>Public Interest Litigation</h2>
        <p>Public interest litigation (PIL) allows individuals or organisations to bring legal proceedings on behalf of the public or a section thereof to vindicate constitutional rights or challenge unconstitutional government action. PIL has been instrumental in advancing human rights protection in Zimbabwe.</p>

        <h2>Landmark Cases</h2>
        <p>Several landmark constitutional cases have shaped the protection of rights in Zimbabwe, establishing important precedents around freedom of assembly, freedom of expression, and the rights of accused persons.</p>

        <h2>Conclusion</h2>
        <p>Constitutional litigation remains one of the most powerful tools for promoting accountability and protecting fundamental rights. Citizens and civil society organisations should not hesitate to use constitutional remedies when their rights are infringed.</p>
      `,
    },
    '4': {
      title: 'Navigating Divorce Proceedings in Zimbabwe',
      author: 'G. Mabwe',
      authorId: 'mabwe',
      date: 'February 28, 2025',
      category: 'Family Law',
      readTime: '8 min read',
      excerpt: 'A guide through the divorce process under Zimbabwean law, including property division, custody arrangements, and maintenance orders.',
      content: `
        <p>Divorce is one of the most emotionally and legally complex events in a person's life. Understanding the divorce process in Zimbabwe can help you navigate these difficult circumstances with greater clarity and confidence.</p>

        <h2>Grounds for Divorce in Zimbabwe</h2>
        <p>Under the Matrimonial Causes Act, the sole ground for divorce in Zimbabwe is irretrievable breakdown of the marriage. The court must be satisfied that the marriage relationship has broken down to such an extent that there is no reasonable prospect of the restoration of a normal marriage relationship.</p>

        <h2>The Divorce Process</h2>

        <h3>1. Filing the Summons</h3>
        <p>The divorce process begins with the filing of a summons in the High Court or Magistrates Court, depending on the complexity of the matter. The summons sets out the grounds for divorce and the relief being sought.</p>

        <h3>2. Service and Response</h3>
        <p>The summons must be served on the other spouse (the defendant), who then has an opportunity to file a plea or consent to the divorce.</p>

        <h3>3. Settlement Negotiations</h3>
        <p>In many cases, the parties can negotiate a settlement agreement covering property division, custody, and maintenance. This is often preferable to contested litigation.</p>

        <h2>Property Division</h2>
        <p>Zimbabwe follows a system of out-of-community of property as the default, unless the parties are married in community of property or have an antenuptial contract. The court has discretion to make equitable orders for property redistribution.</p>

        <h2>Child Custody and Maintenance</h2>
        <p>The court's primary consideration in custody matters is the best interests of the child. Both parents have a duty to maintain their minor children, and maintenance orders are calculated based on the needs of the children and the means of the parents.</p>

        <h2>Professional Guidance</h2>
        <p>Divorce proceedings can be complex, and it is strongly advisable to seek legal representation. An experienced family law attorney can help protect your rights and those of your children throughout the process.</p>
      `,
    },
    '5': {
      title: 'Criminal Defense: Know Your Rights During Arrest',
      author: 'NT. Mazungunye',
      authorId: 'mazungunye',
      date: 'February 20, 2025',
      category: 'Criminal Law',
      readTime: '4 min read',
      excerpt: 'What you need to know about your legal rights the moment you are arrested — and why securing legal representation immediately matters.',
      content: `
        <p>Being arrested is a frightening experience. However, knowing and exercising your legal rights from the outset can make a critical difference to the outcome of your case. In Zimbabwe, persons who are arrested have specific constitutional and statutory rights that must be respected.</p>

        <h2>Your Rights Upon Arrest</h2>

        <h3>Right to Remain Silent</h3>
        <p>You have the right to remain silent. You are not obliged to say anything that may incriminate you. Exercise this right — anything you say can and will be used against you in court. Politely inform the arresting officer that you wish to exercise your right to silence.</p>

        <h3>Right to Legal Representation</h3>
        <p>You have the right to consult with a legal practitioner of your choice without delay. This is a fundamental right guaranteed by the Constitution. If you cannot afford a lawyer, you may be entitled to legal aid.</p>

        <h3>Right to be Informed of the Reason for Arrest</h3>
        <p>The arresting officer must inform you of the reason for your arrest and the charge against you, in a language you understand.</p>

        <h3>Right to be Brought Before a Court</h3>
        <p>You must be brought before a court within 48 hours of your arrest, or on the next court day if the 48-hour period expires outside court hours. This is a critical protection against unlawful detention.</p>

        <h2>What You Should Do Immediately</h2>
        <ul>
          <li>Stay calm and do not resist arrest, even if you believe it is unlawful</li>
          <li>Exercise your right to remain silent</li>
          <li>Request to contact your attorney immediately</li>
          <li>Remember the details of your arrest (time, place, officers involved)</li>
          <li>Do not sign any documents without legal advice</li>
        </ul>

        <h2>Bail Applications</h2>
        <p>If you are not released on police bail, you have the right to apply for bail in court. An experienced criminal defense attorney can present compelling arguments for your release on bail.</p>

        <h2>Conclusion</h2>
        <p>Knowing your rights is your first line of defense. Contact a criminal defense attorney as soon as possible after your arrest — early legal intervention can significantly impact the outcome of your case.</p>
      `,
    },
    '6': {
      title: 'Starting a Business in Zimbabwe: Legal Essentials',
      author: 'YM. Phiri',
      authorId: 'phiri',
      date: 'February 12, 2025',
      category: 'Corporate Law',
      readTime: '9 min read',
      excerpt: 'Key legal considerations for entrepreneurs — from company registration to shareholder agreements and regulatory compliance requirements.',
      content: `
        <p>Starting a business in Zimbabwe offers exciting opportunities, but it also comes with important legal obligations and considerations. Getting the legal foundation right from the start can save you significant time, money, and headaches down the road.</p>

        <h2>Choosing the Right Business Structure</h2>
        <p>One of the first decisions you'll need to make is what type of legal entity to use for your business. The main options in Zimbabwe include:</p>
        <ul>
          <li><strong>Private Limited Company (Pvt Ltd):</strong> The most common structure for SMEs, providing limited liability protection</li>
          <li><strong>Partnership:</strong> Suitable for professional practices, but partners have unlimited liability</li>
          <li><strong>Sole Trader:</strong> Simple to set up but offers no liability protection</li>
          <li><strong>Branch of a Foreign Company:</strong> For international businesses operating in Zimbabwe</li>
        </ul>

        <h2>Company Registration Process</h2>
        <p>To register a private company in Zimbabwe, you must:</p>
        <ol>
          <li>Reserve a company name with ZIMRA and the Companies Registry</li>
          <li>Draft and file the Memorandum and Articles of Association</li>
          <li>Register with the Companies Registry and obtain a Certificate of Incorporation</li>
          <li>Register for tax purposes with ZIMRA (income tax, VAT if applicable)</li>
          <li>Register with NSSA for social security contributions</li>
          <li>Obtain any sector-specific licences or permits required for your business</li>
        </ol>

        <h2>Shareholder Agreements</h2>
        <p>If you are starting a business with partners or co-founders, a well-drafted shareholder agreement is essential. It should cover share ownership and transfer restrictions, decision-making processes, dividend policy, dispute resolution mechanisms, and exit provisions.</p>

        <h2>Employment Considerations</h2>
        <p>When you take on employees, you must comply with Zimbabwe's labour laws, including proper employment contracts, minimum wage requirements, NSSA registration, and adherence to the Labour Act's provisions on working hours and leave.</p>

        <h2>Intellectual Property Protection</h2>
        <p>Protecting your business's intellectual property — including its name, logo, products, and processes — is an important early step. This may involve trademark registration, copyright protection, and confidentiality agreements with employees and contractors.</p>

        <h2>Conclusion</h2>
        <p>Investing in proper legal advice at the start of your business journey is one of the best decisions you can make as an entrepreneur. A well-structured legal foundation protects you, your co-founders, and your business as it grows.</p>
      `,
    },
  };

  const post = posts[postId];

  const categoryColors = {
    'Labour Law':         { bg: 'bg-blue-50',    text: 'text-blue-700'   },
    'Property Law':       { bg: 'bg-emerald-50', text: 'text-emerald-700' },
    'Constitutional Law': { bg: 'bg-purple-50',  text: 'text-purple-700' },
    'Family Law':         { bg: 'bg-rose-50',    text: 'text-rose-700'   },
    'Criminal Law':       { bg: 'bg-slate-50',   text: 'text-slate-700'  },
    'Corporate Law':      { bg: 'bg-amber-50',   text: 'text-amber-700'  },
  };

  const colors = post ? (categoryColors[post.category] || { bg: 'bg-gray-50', text: 'text-gray-600' }) : {};

  if (!post) {
    return (
      <div className="min-h-screen bg-cream-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 rounded-full bg-navy-600 flex items-center justify-center mx-auto mb-5">
            <Tag className="h-10 w-10 text-gold-500" />
          </div>
          <h1 className="font-serif font-bold text-2xl text-navy-600 mb-3">Article Not Found</h1>
          <p className="text-charcoal-600/60 mb-6">The article you're looking for doesn't exist.</p>
          <Link to="/blog" className="btn-gold inline-flex items-center px-6 py-3 rounded-xl font-semibold text-sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Insights
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cream-100">
      {/* Back Navigation */}
      <div className="bg-white border-b border-cream-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/blog"
            className="inline-flex items-center text-sm font-medium text-charcoal-600/60 hover:text-gold-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Insights
          </Link>
        </div>
      </div>

      {/* Article Hero */}
      <section className="relative bg-charcoal-900 hero-mesh py-16 lg:py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="fade-in-up">
            {/* Category Badge */}
            <span className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6 ${colors.bg} ${colors.text}`}>
              <Tag className="h-3.5 w-3.5" />
              <span>{post.category}</span>
            </span>

            <h1 className="font-serif font-bold text-3xl lg:text-5xl text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-5 text-cream-300/50 text-sm">
              <span className="flex items-center space-x-2">
                <User className="h-4 w-4 text-gold-500" />
                <span>{post.author}</span>
              </span>
              <span className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-gold-500" />
                <span>{post.date}</span>
              </span>
              <span className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-gold-500" />
                <span>{post.readTime}</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

            {/* Main content */}
            <div className="lg:col-span-3">
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Author Bio */}
              <div className="mt-12 service-card bg-white p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-navy-600 flex items-center justify-center flex-shrink-0">
                    <User className="h-6 w-6 text-gold-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-600">{post.author}</p>
                    <p className="text-charcoal-600/60 text-sm mt-1 mb-3">
                      {post.author} is an experienced attorney at Chikwangwani Tapi Attorneys
                      specializing in {post.category.toLowerCase()} matters.
                    </p>
                    <Link
                      to={`/team/${post.authorId}`}
                      className="inline-flex items-center text-gold-600 hover:text-gold-700 font-semibold text-sm"
                    >
                      View Full Profile
                      <ArrowRight className="ml-1.5 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
              {/* Need Help CTA */}
              <div className="service-card bg-navy-600 p-6 text-center sticky top-24">
                <div className="w-12 h-12 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-6 w-6 text-gold-500" />
                </div>
                <h3 className="font-serif font-bold text-white text-lg mb-3">
                  Need Legal Help?
                </h3>
                <p className="text-cream-300/60 text-sm mb-5 leading-relaxed">
                  Have questions about this topic? Our team is ready to advise you.
                </p>
                <Link
                  to="/contact"
                  className="btn-gold w-full flex items-center justify-center px-4 py-3 rounded-xl font-semibold text-sm"
                >
                  Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <a
                  href="tel:+2634123456"
                  className="block mt-3 text-cream-300/40 hover:text-gold-400 text-xs transition-colors"
                >
                  Or call: +263 4 123 4567
                </a>
              </div>

              {/* Share */}
              <div className="service-card bg-white p-5">
                <p className="text-xs font-semibold text-navy-600 uppercase tracking-widest mb-3">Share Article</p>
                <button
                  onClick={() => navigator.share?.({ title: post.title, url: window.location.href })}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg border border-cream-200 text-sm text-charcoal-600/60 hover:border-gold-400 hover:text-gold-600 transition-all"
                >
                  <Share2 className="h-4 w-4" />
                  <span>Share this article</span>
                </button>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
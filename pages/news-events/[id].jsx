import React, { useEffect, useRef } from "react";
import {
  ArrowLeftIcon,
  UserIcon,
  CalendarDaysIcon,
  ArrowTopRightOnSquareIcon,
  ShareIcon,
  BookmarkIcon,
  TagIcon,
} from "@heroicons/react/24/outline";
import {
  HeartIcon as HeartIconSolid,
  BookmarkIcon as BookmarkIconSolid,
} from "@heroicons/react/24/solid";
import TextReveal from "@/components/Text Reveal/textreveal";

const NewsDetailPage = () => {
  const headerRef = useRef(null);
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const sidebarRef = useRef(null);

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);

    // Animate elements on load
    const animateElements = () => {
      if (headerRef.current) {
        headerRef.current.style.opacity = "0";
        headerRef.current.style.transform = "translateY(-20px)";
        setTimeout(() => {
          headerRef.current.style.transition = "all 0.8s ease-out";
          headerRef.current.style.opacity = "1";
          headerRef.current.style.transform = "translateY(0)";
        }, 100);
      }

      if (heroRef.current) {
        heroRef.current.style.opacity = "0";
        heroRef.current.style.transform = "translateY(30px)";
        setTimeout(() => {
          heroRef.current.style.transition = "all 1s ease-out 0.3s";
          heroRef.current.style.opacity = "1";
          heroRef.current.style.transform = "translateY(0)";
        }, 300);
      }

      if (contentRef.current) {
        contentRef.current.style.opacity = "0";
        contentRef.current.style.transform = "translateY(40px)";
        setTimeout(() => {
          contentRef.current.style.transition = "all 1s ease-out 0.6s";
          contentRef.current.style.opacity = "1";
          contentRef.current.style.transform = "translateY(0)";
        }, 600);
      }

      if (sidebarRef.current) {
        sidebarRef.current.style.opacity = "0";
        sidebarRef.current.style.transform = "translateX(30px)";
        setTimeout(() => {
          sidebarRef.current.style.transition = "all 1s ease-out 0.9s";
          sidebarRef.current.style.opacity = "1";
          sidebarRef.current.style.transform = "translateX(0)";
        }, 900);
      }
    };

    animateElements();
  }, []);

  // Mock data
  const article = {
    id: 1,
    title: "Bar Mor named to Ynet's Disrupt 40 List for 2025",
    category: "Awards and recognitions",
    tags: ["AWARDS AND RECOGNITIONS", "INNOVATION", "LEADERSHIP"],
    author: "Danielle VanHart",
    date: "June 30, 2025",
    readTime: "5 min read",
    image: "/api/placeholder/1200/600",
    excerpt:
      "Recognition for innovation and leadership in the digital transformation space marks a significant milestone for our company.",
    content: `
      <p>We are thrilled to announce that Bar Mor, our Co-Founder and CEO, has been named to Ynet's prestigious Disrupt 40 List for 2025. This recognition highlights the innovative leadership and transformative vision that has driven our company to new heights in the digital transformation landscape.</p>
      
      <p>The Disrupt 40 List celebrates the most influential leaders who are reshaping industries and driving technological innovation across various sectors. Bar Mor's inclusion in this elite group reflects not only personal achievement but also the collective success of our entire team.</p>
      
      <h3>A Journey of Innovation</h3>
      <p>Since founding the company, Bar Mor has been at the forefront of digital transformation, pioneering solutions that bridge the gap between traditional business practices and cutting-edge technology. Under his leadership, we have successfully delivered transformative solutions to over 200+ clients worldwide.</p>
      
      <h3>Looking Forward</h3>
      <p>This recognition serves as motivation to continue pushing boundaries and exploring new frontiers in technology. As we move forward, we remain committed to our mission of empowering businesses through innovative digital solutions.</p>
      
      <p>We extend our gratitude to our clients, partners, and team members who have made this achievement possible. Together, we will continue to disrupt industries and create lasting impact in the digital world.</p>
    `,
  };

  const relatedArticles = [
    {
      id: 2,
      title: "Company expands to Australia with new teams",
      date: "May 15, 2025",
      image: "/api/placeholder/300/200",
    },
    {
      id: 3,
      title: "Forbes 30 Under 30 recognition announced",
      date: "April 01, 2025",
      image: "/api/placeholder/300/200",
    },
  ];

  return (
    <div className="min-h-screen pt-44 bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Navigation */}
      {/* <nav ref={headerRef} className="bg-black/50 backdrop-blur-xl border-b border-white/10 px-6 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <button className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 group">
            <ArrowLeftIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-medium">Back to News</span>
          </button>
          
          <div className="flex-1"></div>
          
          <div className="flex items-center gap-3">
            <button className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300">
              <ShareIcon className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300">
              <BookmarkIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-7xl mx-auto text-center">
            {/* Category and Tags */}
            {/* <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium px-4 py-2 rounded-full">
                {article.category}
              </span>
              {article.tags.map((tag, index) => (
                <span key={index} className="flex items-center gap-1 bg-white/5 backdrop-blur-md border border-white/20 text-gray-300 text-xs font-medium px-3 py-1.5 rounded-full">
                  <TagIcon className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div> */}

            {/* Title */}

            <TextReveal
              className="text-100 font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-8 leading-tight"
              animation="fadeInUp"
              stagger={0.1}
              duration={1}
            >
              <h1>{article.title}</h1>
            </TextReveal>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400 mb-12">
              <div className="flex items-center gap-2">
                <UserIcon className="w-5 h-5" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarDaysIcon className="w-5 h-5" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                <span>{article.readTime}</span>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div ref={contentRef} className="lg:col-span-2">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
                {/* Excerpt */}
                <div className="mb-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-2xl">
                  <p className="text-lg text-gray-300 leading-relaxed italic">
                    {article.excerpt}
                  </p>
                </div>

                {/* Article Content */}
                <div
                  className="prose prose-invert prose-lg max-w-none"
                  style={{
                    color: "#d1d5db",
                    lineHeight: "1.8",
                  }}
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />

                {/* Share Section */}
                <div className="mt-12 pt-8 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 font-medium">
                      Share this article
                    </span>
                    <div className="flex items-center gap-3">
                      <button className="bg-white/5 backdrop-blur-md border border-white/20 hover:bg-white/10 text-white p-3 rounded-full transition-all duration-300 hover:scale-110">
                        <ShareIcon className="w-5 h-5" />
                      </button>
                      <button className="bg-white/5 backdrop-blur-md border border-white/20 hover:bg-white/10 text-white p-3 rounded-full transition-all duration-300 hover:scale-110">
                        <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div ref={sidebarRef} className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                {/* Related Articles */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                  <h3 className="text-xl font-bold text-white mb-6">
                    Related Articles
                  </h3>
                  <div className="space-y-6">
                    {relatedArticles.map((related) => (
                      <div key={related.id} className="group cursor-pointer">
                        <div className="flex gap-4">
                          <img
                            src={related.image}
                            alt={related.title}
                            className="w-20 h-20 object-cover rounded-xl bg-white/5 border border-white/10"
                          />
                          <div className="flex-1">
                            <h4 className="text-white font-medium leading-tight group-hover:text-blue-300 transition-colors duration-300 mb-2">
                              {related.title}
                            </h4>
                            <p className="text-gray-400 text-sm">
                              {related.date}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-8 shadow-2xl">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Stay Updated
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Get the latest news and updates delivered to your inbox.
                  </p>
                  <div className="space-y-4">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full bg-white/5 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-white/40 focus:bg-white/10 transition-all outline-none"
                    />
                    <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 rounded-xl hover:scale-105 transition-transform duration-300">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style jsx>{`
        .prose h3 {
          color: #ffffff;
          font-size: 1.5rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }

        .prose p {
          margin-bottom: 1.5rem;
          line-height: 1.8;
        }
      `}</style>
    </div>
  );
};

export default NewsDetailPage;

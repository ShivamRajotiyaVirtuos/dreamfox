import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { CalendarIcon, UserIcon, TagIcon } from '@heroicons/react/24/outline';
import React, { useState, useEffect, useRef } from 'react';

const NewsCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [searchQuery, setSearchQuery] = useState('');
  const sidebarRef = useRef(null);
  const searchRef = useRef(null);
  const articlesRef = useRef(null);

  // Dummy news data
  const newsData = [
    {
      id: 1,
      title: "Bar Mor named to Ynet's Disrupt 40 List for 2025",
      category: "Awards and recognitions",
      tags: ["AWARDS AND RECOGNITIONS"],
      author: "Danielle VanHart",
      date: "Jun 30, 2025",
      image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGV2ZW50c3xlbnwwfHwwfHx8MA%3D%3D",
      imageAlt: "Disrupt 40 featuring Bar Mor Co-Founder and CEO",
      excerpt: "Recognition for innovation and leadership in the digital transformation space."
    },
    {
      id: 2,
      title: "Virtuos named one of Israel's most promising startups of 2025 - twice",
      category: "Awards and recognitions",
      tags: ["AWARDS AND RECOGNITIONS", "COMPANY NEWS"],
      author: "Danielle VanHart",
      date: "May 05, 2025",
      image: "https://images.unsplash.com/photo-1643759543584-fb6f448d42d4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGV2ZW50c3xlbnwwfHwwfHx8MA%3D%3D",
      imageAlt: "Most Promising Startups of 2025 award",
      excerpt: "Double recognition highlights our commitment to innovation and excellence."
    },
    {
      id: 3,
      title: "Virtuos co-founders named to Forbes 30 Under 30",
      category: "Awards and recognitions",
      tags: ["AWARDS AND RECOGNITIONS", "COMPANY NEWS"],
      author: "Danielle VanHart",
      date: "Apr 01, 2025",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGV2ZW50c3xlbnwwfHwwfHx8MA%3D%3D",
      imageAlt: "Forbes 30 Under 30 recognition",
      excerpt: "Celebrating young entrepreneurs making a significant impact in technology."
    },
    {
      id: 4,
      title: "Virtuos expands to Australia with new sales and support teams in Sydney and Melbourne",
      category: "Company news",
      tags: ["COMPANY NEWS", "PRESS RELEASES"],
      author: "Danielle VanHart",
      date: "Mar 31, 2025",
      image: "https://plus.unsplash.com/premium_photo-1663089174939-5870e2e8d62e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGV2ZW50c3xlbnwwfHwwfHx8MA%3D%3D",
      imageAlt: "Australia expansion announcement",
      excerpt: "Strategic expansion into the Asia-Pacific market with dedicated local teams."
    }
  ];

  const categories = [
    'All Categories',
    'Awards and recognitions',
    'Company news',
    'In the news',
    'Press releases'
  ];

  // Filter articles based on category and search
  const filteredArticles = newsData.filter(article => {
    const matchesCategory = selectedCategory === 'All Categories' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className=" py-16 lg:py-32 bg-black ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-6">
            Latest News & Events
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with our latest achievements, company news, and industry insights
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                ref={searchRef}
                type="text"
                placeholder="Search news and articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:border-white/40 focus:bg-white/10 transition-all duration-300 outline-none"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-[#ee5363] to-[#e62f8c] text-white shadow-lg transform scale-105'
                      : 'bg-white/5 backdrop-blur-xl border border-white/20 text-gray-300 hover:bg-white/10 hover:border-white/30'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div ref={articlesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {filteredArticles.map((article, index) => (
            <article
              key={article.id}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-500 shadow-2xl hover:shadow-3xl hover:transform hover:scale-[1.02]"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Category Badge */}
                {/* <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-[#ee5363] to-[#e62f8c] backdrop-blur-md text-white text-[10px] font-medium px-3 py-1.5 rounded-full border border-white/20">
                    {article.category}
                  </span>
                </div> */}
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center gap-1 text-[6px] font-medium text-gray-400 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-2 py-1"
                    >
                      <TagIcon className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white leading-tight group-hover:text-blue-300 transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    {/* <div className="flex items-center gap-1">
                      <UserIcon className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div> */}
                    <div className="flex items-center gap-1">
                      <CalendarIcon className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                  
                  {/* Read More Button */}
                  <button className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-1 group/btn">
                    <span>Read More</span>
                    <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* No Results */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-20">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 max-w-md mx-auto">
              <MagnifyingGlassIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
          </div>
        )}

        {/* Load More Button */}
        {/* {filteredArticles.length > 0 && (
          <div className="text-center mt-16">
            <button className="bg-white/5 backdrop-blur-xl border border-white/20 hover:bg-white/10 hover:border-white/30 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:transform hover:scale-105">
              Load More Articles
            </button>
          </div>
        )} */}
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
};

export default NewsCategory;
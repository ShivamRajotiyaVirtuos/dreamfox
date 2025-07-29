import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedCardsSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  const cardsData = [
    {
      id: 1,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-16 h-16 transition-colors duration-300">
          <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M12 22V12" stroke="currentColor" strokeWidth="2"/>
          <path d="M21 7L12 12L3 7" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Web Development',
      description: 'Create stunning, responsive websites with modern technologies and frameworks. Our expert team delivers high-performance web solutions.'
    },
    {
      id: 2,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-16 h-16 transition-colors duration-300">
          <path d="M3 3V21H21V3H3Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M9 9L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M15 9L9 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M3 9H21" stroke="currentColor" strokeWidth="2"/>
          <path d="M9 3V21" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and visualization tools. Make data-driven decisions that propel your business.'
    },
    {
      id: 3,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-16 h-16 transition-colors duration-300">
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 1V5" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 19V23" stroke="currentColor" strokeWidth="2"/>
          <path d="M4.22 4.22L7.04 7.04" stroke="currentColor" strokeWidth="2"/>
          <path d="M16.96 16.96L19.78 19.78" stroke="currentColor" strokeWidth="2"/>
          <path d="M1 12H5" stroke="currentColor" strokeWidth="2"/>
          <path d="M19 12H23" stroke="currentColor" strokeWidth="2"/>
          <path d="M4.22 19.78L7.04 16.96" stroke="currentColor" strokeWidth="2"/>
          <path d="M16.96 7.04L19.78 4.22" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Digital Marketing',
      description: 'Boost your online presence with comprehensive digital marketing strategies. From SEO to social media, we help you reach your target audience.'
    },
    {
      id: 4,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-16 h-16 transition-colors duration-300">
          <path d="M18 10H22V20H18V10Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M10 4H14V20H10V4Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M2 12H6V20H2V12Z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Cloud Solutions',
      description: 'Scale your business with powerful cloud infrastructure. We provide secure, reliable, and scalable cloud solutions that grow with your business.'
    }
  ];

  const handleMouseEnter = (e, index) => {
    const card = cardsRef.current[index];
    if (!card) return;

    const overlay = card.querySelector('.directional-overlay');
    const icon = card.querySelector('.card-icon svg');
    const title = card.querySelector('.card-title');
    const description = card.querySelector('.card-description');

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Determine entry direction
    const fromLeft = x < rect.width / 3;
    const fromRight = x > (rect.width * 2) / 3;
    const fromTop = y < rect.height / 3;
    const fromBottom = y > (rect.height * 2) / 3;

    let initialX = 0, initialY = 0;
    
    if (fromLeft) initialX = -100;
    else if (fromRight) initialX = 100;
    else if (fromTop) initialY = -100;
    else if (fromBottom) initialY = 100;

    // Set initial position and animate in
    gsap.set(overlay, { 
      x: `${initialX}%`, 
      y: `${initialY}%`, 
      scale: 0,
      opacity: 1 
    });
    
    gsap.to(overlay, {
      x: '0%',
      y: '0%',
      scale: 1,
      duration: 0.4,
      ease: "power2.out"
    });

    // Change text and icon colors to black
    gsap.to([icon, title, description], {
      color: '#000000',
      duration: 0.3,
      ease: "power2.out"
    });

    // Scale card slightly
    gsap.to(card, {
      scale: 1,
      y: 0,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = (e, index) => {
    const card = cardsRef.current[index];
    if (!card) return;

    const overlay = card.querySelector('.directional-overlay');
    const icon = card.querySelector('.card-icon svg');
    const title = card.querySelector('.card-title');
    const description = card.querySelector('.card-description');

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Determine exit direction
    const toLeft = x < 0;
    const toRight = x > rect.width;
    const toTop = y < 0;
    const toBottom = y > rect.height;

    let exitX = 0, exitY = 0;
    
    if (toLeft) exitX = -100;
    else if (toRight) exitX = 100;
    else if (toTop) exitY = -100;
    else if (toBottom) exitY = 100;

    // Animate out in exit direction
    gsap.to(overlay, {
      x: `${exitX}%`,
      y: `${exitY}%`,
      scale: 0,
      opacity: 0,
      duration: 0.4,
      ease: "power2.in"
    });

    // Revert text and icon colors
    gsap.to([icon, title, description], {
      color: '#ffffff',
      duration: 0.3,
      ease: "power2.out"
    });

    // Reset card scale
    gsap.to(card, {
      scale: 1,
      y: 0,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Cards animation
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(card,
            { 
              opacity: 0, 
              y: 100,
              scale: 1
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse"
              },
              delay: index * 0.1
            }
          );
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={sectionRef}
      className="py-16 lg:py-32 bg-black"
    >
      <div className="container mx-auto">
        <h2 
          ref={headingRef}
          className="text-120 font-bold text-white text-center mb-16 drop-shadow-lg"
        >
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 px-4">
          {cardsData.map((card, index) => (
            <div
              key={card.id}
              ref={el => cardsRef.current[index] = el}
              className="bg-white/5 p-8 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden shadow-2xl cursor-pointer relative transform transition-transform duration-300"
              onMouseEnter={(e) => handleMouseEnter(e, index)}
              onMouseLeave={(e) => handleMouseLeave(e, index)}
            >
              {/* Directional White Overlay */}
              <div className="directional-overlay absolute inset-0 bg-white rounded-3xl opacity-0" 
                   style={{ transform: 'scale(0)' }}></div>

              {/* Card Icon */}
              <div className="relative z-10 h-24 flex items-center justify-center p-4">
                <div className="card-icon text-white">
                  {card.icon}
                </div>
              </div>
              
              {/* Card Content */}
              <div className="relative z-10 p-6 text-center">
                <h3 className="card-title text-24 font-semibold text-white mb-3 transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="card-description text-gray-300 text-16 leading-relaxed transition-colors duration-300">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedCardsSection;
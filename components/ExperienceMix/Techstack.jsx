import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedCardsSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  const cardsData = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=200&fit=crop',
      title: 'Web Development',
      description: 'Create stunning, responsive websites with modern technologies and frameworks. Our expert team delivers high-performance web solutions tailored to your business needs.'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop',
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and visualization tools. Make data-driven decisions that propel your business forward.'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
      title: 'Digital Marketing',
      description: 'Boost your online presence with comprehensive digital marketing strategies. From SEO to social media, we help you reach and engage your target audience effectively.'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=200&fit=crop',
      title: 'Cloud Solutions',
      description: 'Migrate to the cloud with confidence. Our scalable cloud solutions ensure security, reliability, and cost-effectiveness for your business infrastructure.'
    }
  ];

  useEffect(() => {
    // Initial animations
    const tl = gsap.timeline();

    // Animate heading
    tl.from(headingRef.current, {
      duration: 1,
      y: -50,
      opacity: 0,
      ease: "power3.out"
    });

    // Animate cards
    tl.from(cardsRef.current, {
      duration: 0.8,
      y: 80,
      opacity: 0,
      stagger: 0.2,
      ease: "power3.out"
    }, "-=0.5");

    // Add subtle floating animation
    gsap.to(cardsRef.current, {
      duration: 6,
      y: "+=10",
      rotation: "+=1",
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      stagger: {
        each: 0.5,
        from: "random"
      }
    });

    return () => {
      gsap.killTweensOf([headingRef.current, ...cardsRef.current]);
    };
  }, []);

  const getEntryDirection = (e, card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const width = rect.width;
    const height = rect.height;
    
    // Calculate distances to each edge
    const top = y;
    const bottom = height - y;
    const left = x;
    const right = width - x;
    
    // Find minimum distance to determine entry side
    const min = Math.min(top, bottom, left, right);
    
    if (min === top) return 'top';
    if (min === bottom) return 'bottom';
    if (min === left) return 'left';
    return 'right';
  };

  const handleMouseEnter = (e, cardIndex) => {
    const card = cardsRef.current[cardIndex];
    const overlay = card.querySelector('.overlay');
    const overlayContent = card.querySelector('.overlay-content');
    
    const direction = getEntryDirection(e, card);
    
    // Set initial position based on entry direction
    let fromX = 0, fromY = 0;
    
    switch(direction) {
      case 'top':
        fromY = -100;
        break;
      case 'bottom':
        fromY = 100;
        break;
      case 'left':
        fromX = -100;
        break;
      case 'right':
        fromX = 100;
        break;
    }
    
    // Set initial state
    gsap.set(overlay, { 
      x: fromX + '%', 
      y: fromY + '%',
      opacity: 1 
    });
    
    gsap.set(overlayContent, { 
      opacity: 0,
      scale: 0.8
    });
    
    // Animate overlay sliding in
    gsap.to(overlay, {
      duration: 0.4,
      x: '0%',
      y: '0%',
      ease: "power2.out"
    });
    
    // Animate content appearing
    gsap.to(overlayContent, {
      duration: 0.3,
      opacity: 1,
      scale: 1,
      delay: 0.2,
      ease: "back.out(1.7)"
    });
    
    // Scale up card slightly
    gsap.to(card, {
      duration: 0.3,
      scale: 1.02,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = (e, cardIndex) => {
    const card = cardsRef.current[cardIndex];
    const overlay = card.querySelector('.overlay');
    const overlayContent = card.querySelector('.overlay-content');
    
    const direction = getEntryDirection(e, card);
    
    // Determine exit direction (opposite of entry)
    let toX = 0, toY = 0;
    
    switch(direction) {
      case 'top':
        toY = 100;
        break;
      case 'bottom':
        toY = -100;
        break;
      case 'left':
        toX = 100;
        break;
      case 'right':
        toX = -100;
        break;
    }
    
    // Animate content disappearing
    gsap.to(overlayContent, {
      duration: 0.2,
      opacity: 0,
      scale: 0.8,
      ease: "power2.in"
    });
    
    // Animate overlay sliding out
    gsap.to(overlay, {
      duration: 0.4,
      x: toX + '%',
      y: toY + '%',
      ease: "power2.in",
      delay: 0.1,
      onComplete: () => {
        gsap.set(overlay, { opacity: 0 });
      }
    });
    
    // Scale card back to normal
    gsap.to(card, {
      duration: 0.3,
      scale: 1,
      ease: "power2.out"
    });
  };

  return (
    <div 
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 py-12 px-5"
    >
      <div className="max-w-7xl mx-auto">
        <h2 
          ref={headingRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-16 drop-shadow-lg"
        >
          Our Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {cardsData.map((card, index) => (
            <div
              key={card.id}
              ref={el => cardsRef.current[index] = el}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl cursor-pointer relative transform transition-transform duration-300"
              onMouseEnter={(e) => handleMouseEnter(e, index)}
              onMouseLeave={(e) => handleMouseLeave(e, index)}
            >
              {/* Card Image */}
              <div 
                className="h-48 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${card.image})` }}
              />
              
              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
              
              {/* Overlay */}
              <div className="overlay absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center text-white opacity-0 z-10">
                <div className="overlay-content text-center">
                  <div className="text-xl font-bold">Learn More</div>
                  <div className="text-sm mt-2 opacity-90">→ Explore Details</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedCardsSection;
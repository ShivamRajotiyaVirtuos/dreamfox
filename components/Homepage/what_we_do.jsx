// 'use client';

// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// // Wider gap to begin with
// const cardWidth = 320;
// const gap = 60;

// const WhatWeDo = () => {
//   const sectionRef = useRef(null);
//   const textRef = useRef(null);
//   const cardsWrapperRef = useRef(null);
//   const cardRefs = useRef([]);

//   const slides = [
//     {
//       title: 'Brand Positioning',
//       description: 'Strategic brand positioning that resonates with your audience',
//       image: '/images/brand-positioning.jpg',
//     },
//     {
//       title: 'Visual Identity',
//       description: 'Cohesive visual systems that tell your brand story',
//       image: '/images/visual-identity.jpg',
//     },
//     {
//       title: 'Brand Guidelines',
//       description: 'Comprehensive guidelines for consistent brand application',
//       image: '/images/brand-guidelines.jpg',
//     },
//     {
//       title: 'Creative Direction',
//       description: 'Innovative direction to elevate your brand presence',
//       image: '/images/brand-guidelines.jpg',
//     },
//     {
//       title: 'Experience Design',
//       description: 'Crafting memorable interactions for your users',
//       image: '/images/brand-guidelines.jpg',
//     },
//   ];

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const totalCards = slides.length;
//       const totalWidth = totalCards * (cardWidth + gap);

//       const timeline = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: 'top top',
//           end: () => `+=${totalWidth + 1000}`, // slower and longer scroll
//           scrub: 1.5,
//           pin: true,
//           anticipatePin: 1,
//         },
//       });

//       // Reveal left text
//       timeline.from(textRef.current, {
//         opacity: 0,
//         y: 80,
//         duration: 2,
//         ease: 'power2.out',
//       });

//       // Show cards wrapper
//       timeline.to(cardsWrapperRef.current, {
//         opacity: 1,
//         duration: 1,
//       });

//       // Animate each card one-by-one to stack
//       cardRefs.current.forEach((card, i) => {
//         const delay = i * 0.3; // delay between cards
//         const overlapX = Math.min(i * (cardWidth + gap), cardWidth + 40 + i * 30);

//         timeline.to(
//           card,
//           {
//             x: () => `-${overlapX}`,
//             zIndex: i + 1,
//             ease: 'none',
//             duration: 1.2,
//             onUpdate: () => {
//               const progress = timeline.scrollTrigger.progress;
//               const activeIndex = Math.floor(progress * (totalCards - 1));
//               cardRefs.current.forEach((c, j) => {
//                 c.classList.remove('bg-[#d2448d]');
//                 if (j === activeIndex) c.classList.add('bg-[#d2448d]');
//               });
//             },
//           },
//           `+=${delay}` // stagger one-by-one
//         );
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="h-[100vh] w-full overflow-hidden bg-black text-white"
//     >
//       <div className="container mx-auto h-full flex items-center gap-12">
//         {/* Left Text */}
//         <div ref={textRef} className="w-1/3 z-10">
//           <h2 className="text-3xl font-bold text-[#DC6263] mb-4">What we do</h2>
//           <p className="text-lg leading-relaxed">
//             At DreamFox, we go far beyond simply offering digital services — we
//             architect meaningful brand journeys from the ground up. Every project
//             we take on is rooted in thoughtful strategy, bold creativity, and a
//             deep understanding of what drives modern audiences.
//           </p>
//         </div>

//         {/* Cards */}
//         <div
//           ref={cardsWrapperRef}
//           className="w-2/3 h-[450px] relative overflow-hidden opacity-0"
//         >
//           <div
//             className="flex gap-10 absolute top-0 left-0"
//             style={{ width: `${slides.length * (cardWidth + gap)}px` }}
//           >
//             {slides.map((slide, index) => (
//               <div
//                 key={index}
//                 ref={(el) => (cardRefs.current[index] = el)}
//                 className="card w-80 p-6 rounded-xl bg-gray-800 text-white flex-shrink-0 absolute top-0 transition-all duration-300"
//                 style={{ left: `${index * (cardWidth + gap)}px` }}
//               >
//                 <div
//                   className="w-full h-44 bg-cover bg-center rounded-lg mb-4"
//                   style={{ backgroundImage: `url(${slide.image})` }}
//                 ></div>
//                 <h3 className="text-xl font-bold mb-2">{slide.title}</h3>
//                 <p className="text-sm text-gray-300">{slide.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhatWeDo;


















'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cardWidth = 320;
const gap = 60;

const WhatWeDo = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const cardsWrapperRef = useRef(null);
  const cardRefs = useRef([]);

  const slides = [
    {
      title: 'Brand Positioning',
      description: 'Strategic brand positioning that resonates with your audience',
      image: '/images/brand-positioning.jpg',
    },
    {
      title: 'Visual Identity',
      description: 'Cohesive visual systems that tell your brand story',
      image: '/images/visual-identity.jpg',
    },
    {
      title: 'Brand Guidelines',
      description: 'Comprehensive guidelines for consistent brand application',
      image: '/images/brand-guidelines.jpg',
    },
    {
      title: 'Creative Direction',
      description: 'Innovative direction to elevate your brand presence',
      image: '/images/brand-guidelines.jpg',
    },
    {
      title: 'Experience Design',
      description: 'Crafting memorable interactions for your users',
      image: '/images/brand-guidelines.jpg',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalCards = slides.length;
      const scrollLength = totalCards * 400;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: `+=${scrollLength}`,
          scrub: true,
          pin: true,
        },
      });

      // Animate paragraph in
      timeline.from(textRef.current, {
        opacity: 0,
        y: 80,
        duration: 1.2,
        ease: 'power2.out',
      });

      // Reveal card container
      timeline.to(cardsWrapperRef.current, {
        opacity: 1,
        duration: 0.4,
      });

      // Animate each card individually
      slides.forEach((_, i) => {
        const card = cardRefs.current[i];
        const zIndex = 100 + i;

        timeline.fromTo(
          card,
          {
            x: '100vw',
            opacity: 0,
            zIndex,
          },
          {
            x: 0,
            opacity: 1,
            zIndex,
            duration: 1,
            ease: 'power2.out',
            onStart: () => card.classList.add('bg-[#d2448d]'),
            onReverseComplete: () => card.classList.remove('bg-[#d2448d]'),
          },
          `+=0.2` // slight delay between cards
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="h-screen w-full overflow-hidden bg-black text-white"
    >
      <div className="container mx-auto h-full flex items-center gap-12">
        {/* Left Text Column */}
        <div ref={textRef} className="w-1/3 z-10">
          <h2 className="text-3xl font-bold text-[#DC6263] mb-4">What we do</h2>
          <p className="text-lg leading-relaxed">
            At DreamFox, we go far beyond simply offering digital services — we
            architect meaningful brand journeys from the ground up. Every project
            we take on is rooted in thoughtful strategy, bold creativity, and a
            deep understanding of what drives modern audiences.
          </p>
        </div>

        {/* Right Cards Stack */}
        <div
          ref={cardsWrapperRef}
          className="w-2/3 h-[450px] relative overflow-visible opacity-0 flex items-center"
        >
          <div className="relative w-full h-full">
            {slides.map((slide, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className="card w-80 p-6 rounded-xl bg-gray-800 text-white absolute left-0 top-1/2 -translate-y-1/2 transition-colors duration-300 shadow-xl"
              >
                <div
                  className="w-full h-44 bg-cover bg-center rounded-lg mb-4"
                  style={{ backgroundImage: `url(${slide.image})` }}
                ></div>
                <h3 className="text-xl font-bold mb-2">{slide.title}</h3>
                <p className="text-sm text-gray-300">{slide.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;

'use client';

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import {
  ArrowTopRightOnSquareIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@heroicons/react/24/outline';

gsap.registerPlugin(CustomEase);

const ReviewsSection = () => {
  useEffect(() => {
    CustomEase.create('cubic', '0.83, 0, 0.17, 1');

    const splitTextIntoSpans = selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        const text = element.innerText;
        const splitText = text
          .split('')
          .map(char => `<span>${char === ' ' ? '&nbsp;' : char}</span>`)
          .join('');
        element.innerHTML = splitText;
      });
    };

    const initializeCards = () => {
      const cards = Array.from(document.querySelectorAll('.card'));
      gsap.to(cards, {
        y: i => -15 + 15 * i + '%',
        z: i => 15 * i,
        duration: 1,
        ease: 'cubic',
        stagger: -0.1,
      });
    };

    splitTextIntoSpans('.copy h1');
    initializeCards();
    gsap.set('h1 span', { y: -200 });
    gsap.set('.card:last-child h1 span', { y: 0 });
  }, []);

  const handleNext = () => {
  const slider = document.querySelector('.slider');
  const cards = Array.from(slider.querySelectorAll('.card'));
  const topCard = cards.pop(); // top card to send to back
  const nextCard = cards[cards.length - 1];

  // Animate top card's text out
  gsap.to(topCard.querySelectorAll('h1 span'), {
    y: 200,
    duration: 0.6,
    ease: 'cubic',
  });

  // Instantly move top card to the back of DOM stack
  slider.prepend(topCard);

  // Reset position immediately (so there's no jump)
  gsap.set(topCard, { y: '-150%' });

  // Animate all cards into new stacked position
  const allCards = Array.from(slider.querySelectorAll('.card'));
  gsap.to(allCards, {
    y: i => -15 + 15 * i + '%',
    z: i => 15 * i,
    duration: 1,
    ease: 'cubic',
    stagger: -0.1,
  });

  // Reset and animate next card's text in
  gsap.set(topCard.querySelectorAll('h1 span'), { y: -200 });
  gsap.to(nextCard.querySelectorAll('h1 span'), {
    y: 0,
    duration: 1,
    ease: 'cubic',
    stagger: 0.05,
  });
};


  const handlePrevious = () => {
    const slider = document.querySelector('.slider');
    const cards = Array.from(slider.querySelectorAll('.card'));
    const firstCard = cards.shift();
    const topCard = cards[cards.length - 1];

    slider.append(firstCard);

    const allCards = Array.from(slider.querySelectorAll('.card'));
    gsap.set(firstCard, { y: '-150%' });

    gsap.to(allCards, {
      y: i => -15 + 15 * i + '%',
      z: i => 15 * i,
      duration: 1,
      ease: 'cubic',
      stagger: -0.1,
    });

    gsap.set(firstCard.querySelectorAll('h1 span'), { y: -200 });
    gsap.to(topCard.querySelectorAll('h1 span'), {
      y: 0,
      duration: 1,
      ease: 'cubic',
      stagger: 0.05,
    });
  };

  const cardData = [
    {
      img: 'https://images.unsplash.com/photo-1689602037070-fec2eca3f5b2?q=80&w=2070&auto=format&fit=crop',
      text: 'Amazing',
    },
    {
      img: 'https://images.unsplash.com/photo-1718125188885-7ce699512931?q=80&w=2071&auto=format&fit=crop',
      text: 'Creative',
    },
    {
      img: 'https://images.unsplash.com/photo-1718116088537-212b192d1ad9?q=80&w=2075&auto=format&fit=crop',
      text: 'Strategic',
    },
    {
      img: 'https://images.unsplash.com/photo-1718194822494-47de8fb7922c?q=80&w=2071&auto=format&fit=crop',
      text: 'Bold Ideas',
    },
    {
      img: 'https://images.unsplash.com/photo-1713970700051-556d05c59fce?q=80&w=2070&auto=format&fit=crop',
      text: 'Beyond',
    },
  ];

  return (
    <div className="bg-[#1a1a1a] w-full min-h-[180vh] text-white flex flex-col items-center justify-start py-24 px-4">
      {/* Heading */}
      <div className="max-w-3xl text-center mb-12 z-10">
        <h2 className="text-3xl md:text-5xl font-semibold mb-4">
          Our Partners will <br /> tell you better about us
        </h2>
        <p className="text-sm md:text-base text-white/80 mb-6">
          Our clients call us their creative partner — blending strategy, speed,
          and bold ideas to deliver work that exceeds expectations.
        </p>

        <div className="flex justify-center">
          <button className="group flex items-center gap-2 rounded overflow-hidden relative cursor-pointer transition-all duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)]">
            <div className="absolute inset-0 bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[900ms] ease-[cubic-bezier(0.77,0,0.175,1)]" />
            <ArrowTopRightOnSquareIcon className="size-12 p-2 rounded bg-white text-black z-10 relative" />
            <span className="text-lg font-semibold pr-4 pl-2 text-white z-10 relative group-hover:text-black">
              Get more information
            </span>
          </button>
        </div>
      </div>

      {/* Stack & Buttons */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 md:mt-20 translate-x-20">
        {/* Cards */}
        <div
          className="slider relative w-full md:w-[600px] h-[clamp(300px,60vw,500px)]"
          style={{
            perspective: '300px',
            perspectiveOrigin: '50% 50%',
          }}
        >
          {cardData.map((card, index) => (
            <div
              key={index}
              className="card"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '100%',
                height: '100%',
                borderRadius: '12px',
                overflow: 'hidden',
                transform: 'translate(-50%, -50%)',
                backgroundColor: '#000',
              }}
            >
              {/* Image */}
              <img
                src={card.img}
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 1,
                }}
              />

              {/* Overlay */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  zIndex: 2,
                }}
              />

              {/* Text */}
              <div
                className="copy"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '90%',
                  zIndex: 3,
                }}
              >
                <h1
                  style={{
                    textAlign: 'center',
                    fontSize: 'clamp(1.5rem, 5vw, 4rem)',
                    fontWeight: '300',
                    letterSpacing: '-0.05em',
                    textTransform: 'uppercase',
                    color: '#DFE1C8',
                    lineHeight: 1.1,
                  }}
                >
                  {card.text}
                </h1>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons: show beside on md+, below on sm */}
        <div className="flex md:flex-col flex-row gap-4 mt-96 md:mt-0 ml-20">
          <button
            onClick={handlePrevious}
            className="w-10 h-10 border border-gray-400 bg-black text-white flex items-center justify-center rounded"
          >
            <ChevronUpIcon className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 border border-gray-400 bg-black text-white flex items-center justify-center rounded"
          >
            <ChevronDownIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;

import React from "react";
import Image from "next/image";

const Fun_Career = () => {
  return (
    <div className="h-screen mx-auto flex justify-center items-center bg-black overflow-hidden relative">
      {/* Floating Doodles - Career Theme */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Coffee Cup Doodle */}
        <div className="absolute top-20 left-16 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M8 12h20v16c0 2-2 4-4 4H12c-2 0-4-2-4-4V12z" stroke="#D2448D" strokeWidth="2" fill="none"/>
            <path d="M28 16h4c2 0 4 2 4 4v2c0 2-2 4-4 4h-4" stroke="#D2448D" strokeWidth="2" fill="none"/>
            <path d="M12 8v4M20 8v4M16 8v4" stroke="#D2448D" strokeWidth="2"/>
          </svg>
        </div>

        {/* Lightbulb Doodle */}
        <div className="absolute top-32 right-20 animate-pulse" style={{ animationDelay: '1s' }}>
          <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
            <circle cx="17.5" cy="15" r="8" stroke="#DC6263" strokeWidth="2" fill="none"/>
            <path d="M12 23h11M13 26h9M14 29h7" stroke="#DC6263" strokeWidth="2"/>
            <path d="M17.5 7v-3M25.5 9l2-2M28 17h3M25.5 25l2 2M9.5 9l-2-2M7 17H4M9.5 25l-2 2" stroke="#DC6263" strokeWidth="2"/>
          </svg>
        </div>

        {/* Laptop Doodle */}
        <div className="absolute bottom-24 left-20 animate-bounce" style={{ animationDelay: '2s', animationDuration: '4s' }}>
          <svg width="45" height="30" viewBox="0 0 45 30" fill="none">
            <rect x="5" y="5" width="30" height="18" rx="2" stroke="#D2448D" strokeWidth="2" fill="none"/>
            <rect x="2" y="23" width="36" height="4" rx="2" stroke="#D2448D" strokeWidth="2" fill="none"/>
            <circle cx="20" r="1" fill="#D2448D"/>
          </svg>
        </div>

        {/* Rocket Doodle */}
        <div className="absolute top-40 left-1/4 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}>
          <svg width="30" height="40" viewBox="0 0 30 40" fill="none">
            <path d="M15 2l8 20h-6v10l-2 6-2-6V22H7l8-20z" stroke="#DC6263" strokeWidth="2" fill="none"/>
            <circle cx="15" cy="12" r="2" fill="#DC6263"/>
            <path d="M7 22l-4 4M23 22l4 4" stroke="#DC6263" strokeWidth="2"/>
          </svg>
        </div>

        {/* Pizza Slice Doodle */}
        <div className="absolute bottom-32 right-16 animate-pulse" style={{ animationDelay: '1.5s' }}>
          <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
            <path d="M5 30L17.5 5L30 30z" stroke="#D2448D" strokeWidth="2" fill="none"/>
            <circle cx="15" cy="22" r="2" fill="#D2448D"/>
            <circle cx="22" cy="25" r="1.5" fill="#DC6263"/>
            <circle cx="18" cy="18" r="1" fill="#DC6263"/>
          </svg>
        </div>

        {/* Game Controller Doodle */}
        <div className="absolute top-1/2 right-12 animate-bounce" style={{ animationDelay: '2.5s', animationDuration: '3s' }}>
          <svg width="40" height="25" viewBox="0 0 40 25" fill="none">
            <rect x="5" y="8" width="30" height="12" rx="6" stroke="#D2448D" strokeWidth="2" fill="none"/>
            <rect x="2" y="12" width="8" height="4" rx="2" stroke="#D2448D" strokeWidth="2" fill="none"/>
            <rect x="30" y="12" width="8" height="4" rx="2" stroke="#D2448D" strokeWidth="2" fill="none"/>
            <circle cx="28" cy="13" r="1.5" fill="#DC6263"/>
            <circle cx="32" cy="16" r="1.5" fill="#DC6263"/>
          </svg>
        </div>

        {/* Music Note Doodle */}
        <div className="absolute bottom-40 left-1/3 animate-pulse" style={{ animationDelay: '3s' }}>
          <svg width="25" height="35" viewBox="0 0 25 35" fill="none">
            <circle cx="6" cy="28" r="4" stroke="#DC6263" strokeWidth="2" fill="none"/>
            <circle cx="19" cy="24" r="4" stroke="#DC6263" strokeWidth="2" fill="none"/>
            <path d="M10 28V8L23 5v19" stroke="#DC6263" strokeWidth="2"/>
            <path d="M10 8L23 5" stroke="#DC6263" strokeWidth="2"/>
          </svg>
        </div>

        {/* Star Doodles */}
        <div className="absolute top-16 left-1/2 animate-pulse" style={{ animationDelay: '4s' }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 2l2.5 6h6l-4.5 4 1.5 6-5-3.5L5 18l1.5-6L2 8h6L10 2z" stroke="#D2448D" strokeWidth="1.5" fill="none"/>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <h2 className="flex flex-col justify-center items-center font-bold text-white  sm:px-6 py-2 relative z-10">
        <div className="flex gap-3 sm:gap-0">
          <span
            className="inline-block text-130  sm:px-6 py-4 transition-all duration-300 hover:scale-105"
            style={{
              WebkitTextStroke: "2px #D2448D",
              WebkitTextStrokeWidth: "2px",
              WebkitTextStrokeColor: "white",
            }}
          >
            WORKING
          </span>
          <span
            className="inline-block text-130  sm:px-6 py-4 bg-clip-text text-transparent transition-all duration-300 hover:scale-105"
            style={{
              WebkitTextStroke: "2px #D2448D",
              WebkitTextStrokeWidth: "2px",
              WebkitTextStrokeColor: "white",
            }}
          >
            AT
          </span>
        </div>

        {/* Logo with enhanced styling */}
        <div className="relative group px-4 xl:px-0">
          <Image
            src={"/logos/dreamfox_logo.svg"}
            alt="DreamFox Logo"
            width={1000}
            height={1000}
            className="cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(210,68,141,0.5)]"
          />
          {/* Glow effect behind logo */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-[#DC6263] to-[#D2448D] opacity-10 blur-xl scale-110 -z-10  transition-opacity duration-500"></div> */}
        </div>

        <div className="flex gap-3 sm:gap-0">
          <span
            className="inline-block text-130  sm:px-6 py-4 bg-clip-text text-transparent transition-all duration-300 hover:scale-105"
            style={{
              WebkitTextStroke: "2px #D2448D",
              WebkitTextStrokeWidth: "2px",
              WebkitTextStrokeColor: "white",
            }}
          >
            IS
          </span>
          <span
            className="inline-block text-130  sm:px-6 py-4 transition-all duration-300 hover:scale-105"
            style={{
              WebkitTextStroke: "2px #D2448D",
              WebkitTextStrokeWidth: "2px",
              WebkitTextStrokeColor: "white",
            }}
          >
            REAL
          </span>
          <span
            className="inline-block text-130  sm:px-6 py-4 bg-clip-text text-transparent transition-all duration-300 hover:scale-105"
            style={{
              WebkitTextStroke: "2px #D2448D",
              WebkitTextStrokeWidth: "2px",
              WebkitTextStrokeColor: "white",
            }}
          >
            FUN
          </span>
        </div>

        {/* Subtitle for context */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-lg font-light tracking-wide opacity-80">
            Join our team where creativity meets innovation
          </p>
        </div>
      </h2>

      {/* Additional floating elements for atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated dots */}
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-[#D2448D] rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 right-24 w-1 h-1 bg-[#DC6263] rounded-full animate-ping" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-[#D2448D] rounded-full animate-ping" style={{ animationDelay: '6s' }}></div>
      </div>
    </div>
  );
};

export default Fun_Career;
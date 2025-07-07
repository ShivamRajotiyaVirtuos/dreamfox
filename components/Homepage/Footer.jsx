
'use client';

import { ArrowRightIcon } from '@heroicons/react/24/solid';


import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-[#1a1a1a] text-white overflow-hidden">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        {/* Left Nav */}
        {/* <div className="flex flex-col space-y-4 text-20">
          {['Home', 'Services', 'About', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href="#"
              className=" text-white group"
            >
              <span className="link-underline">{item}</span>
            </a>
          ))}
        </div> */}
        <div className="flex flex-col space-y-4 text-20">
          {[
            { name: 'Home', href: '/' },
            { name: 'Services', href: '/services' },
            { name: 'About', href: '/about' },
            { name: 'Projects', href: '/projects' },
            { name: 'Contact', href: '/contact' },
          ].map(({ name, href }) => (
            <a
              key={name}
              href={href}
              className="text-white group"
            >
              <span className="link-underline">{name}</span>
            </a>
          ))}
        </div>


        {/* Middle Links */}
        <div className="flex flex-col space-y-4 text-20">
          {[
            ['Instagram', '#'],
            ['Linkedin', '#'],
            ['Return Policy', '#'],
            ['Terms & Services', '#'],
          ].map(([name, href]) => (
            <a key={name} href={href} className="flex items-center gap-2  text-white group">
              <span className="link-underline">{name}</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform group-hover:translate-x-1"
              >
                <path
                  d="M11.1875 2H2V20.375C2 21.0712 2.27656 21.7389 2.76884 22.2312C3.26113 22.7234 3.92881 23 4.625 23H20.375C21.0712 23 21.7389 22.7234 22.2312 22.2312C22.7234 21.7389 23 21.0712 23 20.375V13.8125M8.5625 16.4375L23 2M23 2H16.4375M23 2V8.5625"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          ))}
        </div>

        {/* Right Email */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-20  uppercase tracking-widest">Drop your email</h3>
          <p className="text-20  uppercase tracking-widest">Let’s have a chat</p>
          <div className="flex items-center bg-gray-200 text-black rounded-full overflow-hidden max-w-md">
            <input
                type="email"
                placeholder="Get Started Today"
                className="px-4 py-2 w-full text-20 bg-transparent focus:outline-none"
            />
            <button className="bg-black m-3 h-13 w-13  text-white px-4 py-2 rounded-full flex items-center justify-center">
                <ArrowRightIcon className="h-5 w-5 text-white" />
            </button>
        </div>
        </div>
      </div>

      {/* Logo as cutout mask with background video */}
      <div className="mt-12 glow-svg-mask aspect-[1048/172] container overflow-hidden">
        <video
          src="https://vdc-buckett.s3.ap-south-1.amazonaws.com/videos/cohering.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        ></video>
      </div>
    </footer>
  );
};

export default Footer;



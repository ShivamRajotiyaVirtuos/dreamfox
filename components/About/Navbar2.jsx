// components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar2
 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all ${
        isScrolled ? 'backdrop-blur-md bg-black/30' : 'bg-transparent'
      }`}
    >
      <nav className="flex items-center justify-between px-6 py-4 relative">
        {/* Left Spacer */}
        <div className="w-1/3" />

        {/* Center Logo */}
        <div className="w-1/3 flex justify-center">
          <h1 className="text-white text-xl font-bold">Logo</h1>
        </div>

        {/* Right Menu */}
        <div className="w-1/3 flex justify-end relative">
         
         
          {/* <div
            className="text-white cursor-pointer font-medium relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            Menu+
            <AnimatePresence>
              {isOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute right-0 mt-2 bg-white text-black rounded-md shadow-lg p-4 w-48 space-y-2 z-50"
                >
                  {['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'].map((item, idx) => (
                    <li key={idx} className="hover:text-blue-600 transition">
                      {item}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div> */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar2
;

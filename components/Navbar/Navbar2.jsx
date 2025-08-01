import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { HomeIcon, XCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [overlayStyle, setOverlayStyle] = useState({});
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  //   const handleMouseEnter = (e) => {
  //     if (!buttonRef.current) return;

  //     const rect = buttonRef.current.getBoundingClientRect();
  //     const x = e.clientX - rect.left;
  //     const y = e.clientY - rect.top;

  //     // Calculate position as percentage
  //     const xPercent = (x / rect.width) * 100;
  //     const yPercent = (y / rect.top) * 100;

  //     setOverlayStyle({
  //       left: `${xPercent}%`,
  //       top: `${yPercent}%`,
  //       transformOrigin: `${xPercent}% ${yPercent}%`,
  //     });

  //     setIsHovered(true);
  //   };

  //   const handleMouseLeave = () => {
  //     setIsHovered(false);
  //   };
  const handleMouseEnter = (e) => {
    setIsHovered(true);
    updateOverlayPosition(e);
  };

  const handleMouseMove = (e) => {
    updateOverlayPosition(e);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const updateOverlayPosition = (e) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    setOverlayStyle({
      left: `${xPercent}%`,
      top: `${yPercent}%`,
    });
  };
  return (
    <nav
      className={`fixed top-0 mx-auto max-w-[95rem]  left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-gray-900/60 backdrop-blur-xl  border border-white/10 lg:rounded-full xl:px-6  lg:mt-4 shadow-full"
          : "lg:bg-transparent bg-gray-900/60 backdrop-blur-xl lg:backdrop-blur-none"
      }`}
    >
      <div
        className={`container mx-auto px-6 lg:px-8 transition-all duration-500 ${
          isScrolled ? "py-4" : "py-4"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={"/"} className="flex-shrink-0">
            <Image
              src={"/logos/dreamfox_emblem.svg"}
              alt="Logo"
              width={150}
              height={50}
              className="h-9 lg:h-12 w-auto"
            />
          </Link>

          {/* Desktop Menu Items - Center */}
          <div className="hidden lg:flex items-center space-x-12">
            <a
              href="/"
              className="text-white text-20 font-normal hover:text-[#ec466f] transition-all duration-300 hover:scale-105 relative group"
            >
              HOME
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ec466f] group-hover:w-full transition-all duration-300"></span>
            </a>

            <a
              href="/about"
              className="text-white text-20 font-normal hover:text-[#ec466f] transition-all duration-300 hover:scale-105 relative group"
            >
              ABOUT
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ec466f] group-hover:w-full transition-all duration-300"></span>
            </a>

            {/* Services Dropdown */}
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="text-white text-20 font-normal hover:text-[#ec466f] transition-all duration-500 ease-out hover:scale-105 relative group flex items-center gap-2">
                SERVICES
                <ChevronDownIcon
                  className={`w-4 h-4 transition-transform duration-500 ease-out ${
                    dropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ec466f] to-[#ff6b9d] group-hover:w-full transition-all duration-500 ease-out"></span>
              </button>

              {/* Dropdown Menu */}
              {/* <svg
                width="24"
                height="8"
                viewBox="0 0 10 8"
                className=" fill-gray-100 size-4 z-30 absolute -top-2 left-32  right-0"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 0L10 8H0L5 0Z" />
              </svg> */}
              <div
                className={`absolute top-full -left-20 mt-2 w-72 bg-gray-700 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 overflow-hidden transition-all duration-500 ease-out transform ${
                  dropdownOpen
                    ? "opacity-100 translate-y-0 scale-100 visible"
                    : "opacity-0 -translate-y-4 scale-95 invisible"
                }`}
              >
                <div className="p-2">
                  <a
                    href="/services/brand-advisory"
                    className="block px-6 py-3 text-white font-medium text-base hover:text-[#ec466f] hover:bg-white/10 transition-all duration-300 ease-out rounded-xl transform hover:translate-x-2"
                  >
                    BRAND STRATEGY
                  </a>

                  <a
                    href="/services/experience-mix"
                    className="block uppercase px-6 py-3 text-white font-medium text-base hover:text-[#ec466f] hover:bg-white/10 transition-all duration-300 ease-out rounded-xl transform hover:translate-x-2"
                  >
                    Experience Mix
                  </a>
                  <a
                    href="/services/digital-marketing"
                    className="block uppercase px-6 py-3 text-white font-medium text-base hover:text-[#ec466f] hover:bg-white/10 transition-all duration-300 ease-out rounded-xl transform hover:translate-x-2"
                  >
                    Digital Marketing
                  </a>
                  <a
                    href="/services/digital-media-mix"
                    className="block uppercase px-6 py-3 text-white font-medium text-base hover:text-[#ec466f] hover:bg-white/10 transition-all duration-300 ease-out rounded-xl transform hover:translate-x-2"
                  >
                    Digital Media Mix
                  </a>
                </div>
              </div>
            </div>

            <a
              href="/work-portfolio"
              className="text-white text-20 font-normal hover:text-[#ec466f] transition-all duration-300 hover:scale-105 relative group"
            >
              PORTFOLIO
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ec466f] group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          {/* Contact Button */}
          {/* <div className="hidden lg:block">
            <button
              ref={buttonRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative px-8 cursor-pointer py-4 text-white font-black text-lg border-white border-2 rounded-full overflow-hidden group hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 flex items-center gap-3"
            >
              <span className="relative z-10">CONTACT US</span>

              <span className="bg-white rounded-full relative z-10">
                <svg
                  className="size-7 bg-white text-black group-hover:bg-white  p-1 rounded-full group-hover:text-purple-400"
                  dataSlot="icon"
                  fill="none"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </span>

           
              <div
                className={`absolute inset-0 bg-gradient-to-r from-[#ef565f] to-[#e62e8c] rounded-full transition-all duration-500 ease-out ${
                  isHovered ? "scale-150 opacity-100" : "scale-0 opacity-0"
                }`}
                style={overlayStyle}
              ></div>
            </button>
          </div> */}
          <div className="hidden lg:block">
            <button
              ref={buttonRef}
              onMouseEnter={handleMouseEnter}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative px-8 cursor-pointer py-4  font-black text-lg border-[#fff] border-2 rounded-full overflow-hidden group hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 flex items-center gap-3"
            >
              {/* Overlay effect */}
              <Link
                href={"/contactus"}
                className={`absolute inset-0 bg-gradient-to-r from-[#ec466f] to-[#ff6b9d] rounded-full transition-all duration-300 ${
                  isHovered ? "opacity-100 scale-100" : "opacity-0 scale-0"
                }`}
                style={{
                  transformOrigin: `${overlayStyle.left || "50%"} ${
                    overlayStyle.top || "50%"
                  }`,
                }}
              />

              <span className="relative z-10 text-white ">CONTACT US</span>

              <span className=" rounded-full relative z-10">
                <svg
                  className="size-7 text-[#e83682] rounded-full p-1 bg-white/90 group-hover:bg-white "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
          </div>
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-300 relative w-10 h-10 flex flex-col justify-center items-center group"
            >
              <div className="relative w-6 h-5">
                {/* Top bar */}
                <div
                  className={`absolute w-6 h-0.5 bg-white rounded transition-all duration-500 ease-out transform origin-center ${
                    isMenuOpen
                      ? "rotate-45 translate-y-2"
                      : "rotate-0 translate-y-0"
                  }`}
                />

                {/* Middle bar */}
                <div
                  className={`absolute w-6 h-0.5 bg-white rounded transition-all duration-300 ease-out top-2 ${
                    isMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                  }`}
                />

                {/* Bottom bar */}
                <div
                  className={`absolute w-6 h-0.5 bg-white rounded transition-all duration-500 ease-out transform origin-center top-4 ${
                    isMenuOpen
                      ? "-rotate-45 -translate-y-2"
                      : "rotate-0 translate-y-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
            isMenuOpen ? "max-h-[29rem] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-4 pb-4 border-t border-white/10">
            <div
              className={`flex flex-col space-y-4 pt-4 px-4 transform transition-all duration-500 ease-out ${
                isMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-4 opacity-0"
              }`}
            >
              <a
                href="#"
                className="text-white text-xl font-bold hover:text-[#ec466f] transition-all duration-300 px-2 py-2 rounded-lg hover:bg-white/10 transform hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </a>

              <a
                href="#"
                className="text-white text-xl font-bold hover:text-[#ec466f] transition-all duration-300 px-2 py-2 rounded-lg hover:bg-white/10 transform hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </a>

              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={toggleDropdown}
                  className="text-white text-xl font-bold hover:text-[#ec466f] transition-all duration-300 flex items-center space-x-2 px-2 py-2 rounded-lg hover:bg-white/10 transform hover:translate-x-2 w-full text-left"
                >
                  <span>SERVICES</span>
                  <ChevronDownIcon
                    className={`w-5 h-5 transition-transform duration-300 ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Mobile Services Submenu */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    dropdownOpen
                      ? "max-h-48 opacity-100 mt-2"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pl-6 space-y-2">
                    <a
                      href="#"
                      className="block text-white/80 text-lg hover:text-[#ec466f] py-2 px-4 rounded-lg hover:bg-white/10 transition-all duration-300 ease-out transform hover:translate-x-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      BRAND STRATEGY
                    </a>
                    <a
                      href="#"
                      className="block text-white/80 text-lg hover:text-[#ec466f] py-2 px-4 rounded-lg hover:bg-white/10 transition-all duration-300 ease-out transform hover:translate-x-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      UI/UX DESIGN
                    </a>
                    <a
                      href="#"
                      className="block text-white/80 text-lg hover:text-[#ec466f] py-2 px-4 rounded-lg hover:bg-white/10 transition-all duration-300 ease-out transform hover:translate-x-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      WEB DEVELOPMENT
                    </a>
                  </div>
                </div>
              </div>

              {/* Mobile Contact Button */}
              <Link
                href={"/contactus"}
                className="relative px-6 py-3 text-white font-black text-lg bg-gradient-to-r from-[#ec466f] to-[#ff6b9d] rounded-full overflow-hidden group hover:shadow-xl transition-all duration-300 mx-2 mt-4"
              >
                <span className="relative z-10">CONTACT US</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

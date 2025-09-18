import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { HomeIcon, XCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpenAbout, setDropdownOpenAbout] = useState(false);

  const [overlayStyle, setOverlayStyle] = useState({});
  const [isHovered, setIsHovered] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [isActivea, setActive] = useState(false);

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
  const toggleDropdownAbout = () => {
    setDropdownOpenAbout(!dropdownOpenAbout);
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

  const isActive = (href) => {
    if (href === "/") {
      return router.pathname === "/";
    }
    return router.pathname.startsWith(href);
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
          <Link
            href={"/"}
            // onClick={() => {
            //   setActive("");
            // }}
            className="flex-shrink-0 flex items-center overflow-hidden"
            onMouseEnter={() => setIsLogoHovered(true)}
            onMouseLeave={() => setIsLogoHovered(false)}
          >
            {/* Container for both logos with smooth width transition */}
            <div
              className={`flex items-center transition-all duration-500 ease-in-out ${
                isLogoHovered ? "w-auto" : "w-auto"
              }`}
            >
              {/* Emblem - always visible */}
              <Image
                src={"/logos/dreamfox_emblem.svg"}
                alt="DreamFox Emblem"
                width={150}
                height={50}
                className="h-9 lg:ml-4 lg:h-12 w-auto transition-all cursor-pointer duration-300"
              />

              {/* Logo text - slides in from left */}
              <div
                className={`overflow-hidden cursor-pointer transition-all duration-500 ease-in-out ${
                  isLogoHovered
                    ? "max-w-[200px] opacity-100 ml-2"
                    : "max-w-0 opacity-0 ml-0"
                }`}
              >
                <Image
                  src={"/logos/dreamfox_logo.svg"}
                  alt="DreamFox Logo"
                  width={150}
                  height={50}
                  className={`h-9 w-auto cursor-pointer transition-all duration-500 ease-in-out transform ${
                    isLogoHovered
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-full opacity-0"
                  }`}
                />
              </div>
            </div>
          </Link>

          {/* Desktop Menu Items - Center */}
          <div className="hidden lg:flex items-center space-x-12">
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpenAbout(true)}
              onMouseLeave={() => setDropdownOpenAbout(false)}
            >
              <Link
                href={"/about"}
                // onClick={() => {
                //   setActive("services");
                // }}
                className={`${
                  isActive("/about") ? "text-[#ec466f]" : "text-[#fff]"
                } text-20 font-normal hover:text-[#ec466f] transition-all duration-500 ease-out hover:scale-105 relative group flex items-center gap-2`}
              >
                ABOUT
                <ChevronDownIcon
                  className={`w-4 h-4 transition-transform duration-500 ease-out ${
                    dropdownOpenAbout ? "rotate-180" : "rotate-0"
                  }`}
                />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ec466f] to-[#ff6b9d] group-hover:w-full transition-all duration-500 ease-out"></span>
              </Link>

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
                className={`absolute top-full -left-[83px] mt-2 w-64 bg-gray-700 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 overflow-hidden transition-all duration-500 ease-out transform ${
                  dropdownOpenAbout
                    ? "opacity-100 translate-y-0 scale-100 visible"
                    : "opacity-0 -translate-y-4 scale-95 invisible"
                }`}
              >
                <div className="p-2">
                  <Link
                    // onClick={() => {
                    //   setActive("services");
                    // }}
                    href="/about"
                    className="block px-6 uppercase py-3 text-white font-medium text-base hover:text-[#ec466f] text-center transition-all duration-300 ease-out rounded-xl transform hover:scale-110 "
                  >
                    Background
                  </Link>
                  <Link
                    // onClick={() => {
                    //   setActive("services");
                    // }}
                    href="/about/team"
                    className="block px-6 uppercase py-3 text-white font-medium text-base hover:text-[#ec466f] text-center transition-all duration-300 ease-out rounded-xl transform hover:scale-110 "
                  >
                    Our Team
                  </Link>

                  <Link
                    // onClick={() => {
                    //   setActive("services");
                    // }}
                    href="/about/careers"
                    className="block uppercase px-6 py-3 text-white font-medium text-base hover:text-[#ec466f] text-center transition-all duration-300 ease-out rounded-xl transform hover:scale-110 "
                  >
                    Careers
                  </Link>
                  <Link
                    // onClick={() => {
                    //   setActive("services");
                    // }}
                    href="/about/alliances"
                    className="block uppercase px-6 py-3 text-white font-medium text-base hover:text-[#ec466f] text-center transition-all duration-300 ease-out rounded-xl transform hover:scale-110 "
                  >
                    Alliances
                  </Link>
                  <Link
                    href="/news-events"
                    className="block uppercase px-6 py-3 text-white font-medium text-base hover:text-[#ec466f] text-center transition-all duration-300 ease-out rounded-xl transform hover:scale-110 "
                  >
                    News & Events
                  </Link>
                </div>
              </div>
            </div>

            {/* Services Dropdown */}
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link
                href={"/services"}
                // onClick={() => {
                //   setActive("services");
                // }}
                className={`${
                  isActive("/services") ? "text-[#ec466f]" : "text-[#fff]"
                } text-20 font-normal hover:text-[#ec466f] transition-all duration-500 ease-out hover:scale-105 relative group flex items-center gap-2`}
              >
                SERVICES
                <ChevronDownIcon
                  className={`w-4 h-4 transition-transform duration-500 ease-out ${
                    dropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ec466f] to-[#ff6b9d] group-hover:w-full transition-all duration-500 ease-out"></span>
              </Link>

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
                className={`absolute top-full -left-[75px] mt-2 w-64 bg-gray-700 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 overflow-hidden transition-all duration-500 ease-out transform ${
                  dropdownOpen
                    ? "opacity-100 translate-y-0 scale-100 visible"
                    : "opacity-0 -translate-y-4 scale-95 invisible"
                }`}
              >
                <div className="p-2">
                  <Link
                    // onClick={() => {
                    //   setActive("services");
                    // }}
                    href="/services"
                    className="block px-6 uppercase py-3 text-white font-medium text-base hover:text-[#ec466f] text-center transition-all duration-300 ease-out rounded-xl transform hover:scale-110 "
                  >
                    Our Work
                  </Link>
                  <Link
                    // onClick={() => {
                    //   setActive("services");
                    // }}
                    href="/services/brand-advisory"
                    className="block px-6 uppercase py-3 text-white font-medium text-base hover:text-[#ec466f] text-center transition-all duration-300 ease-out rounded-xl transform hover:scale-110 "
                  >
                    Branding
                  </Link>

                  <Link
                    // onClick={() => {
                    //   setActive("services");
                    // }}
                    href="/services/design-studio"
                    className="block uppercase px-6 py-3 text-white font-medium text-base hover:text-[#ec466f] text-center transition-all duration-300 ease-out rounded-xl transform hover:scale-110 "
                  >
                    Design
                  </Link>
                  <Link
                    // onClick={() => {
                    //   setActive("services");
                    // }}
                    href="/services/digital-marketing"
                    className="block uppercase px-6 py-3 text-white font-medium text-base hover:text-[#ec466f] text-center transition-all duration-300 ease-out rounded-xl transform hover:scale-110 "
                  >
                    Ai Marketing
                  </Link>
                  <Link
                    href="/services/digital-media-mix"
                    className="block uppercase px-6 py-3 text-white font-medium text-base hover:text-[#ec466f] text-center transition-all duration-300 ease-out rounded-xl transform hover:scale-110 "
                  >
                    Media
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/work-portfolio"
              // onClick={() => {
              //   setActive("portfolio");
              // }}
              className={`${
                isActive("/work-portfolio") ? "text-[#ec466f]" : "text-[#fff]"
              }  text-20 font-normal hover:text-[#ec466f] transition-all duration-300 hover:scale-105 relative group`}
            >
              PORTFOLIO
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ec466f] group-hover:w-full transition-all duration-300"></span>
            </Link>
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

              <Link href={"/contactus"} className="relative z-10 text-white ">
                CONTACT US
              </Link>

              <span className=" rounded-full relative z-10">
                <svg
                  data-slot="icon"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="size-8 group-hover:text-white text-[#ec466f] p-1 rounded-full "
                >
                  <path d="M3.105 2.288a.75.75 0 0 0-.826.95l1.414 4.926A1.5 1.5 0 0 0 5.135 9.25h6.115a.75.75 0 0 1 0 1.5H5.135a1.5 1.5 0 0 0-1.442 1.086l-1.414 4.926a.75.75 0 0 0 .826.95 28.897 28.897 0 0 0 15.293-7.155.75.75 0 0 0 0-1.114A28.897 28.897 0 0 0 3.105 2.288Z"></path>
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
            isMenuOpen ? "max-h-full opacity-100" : "max-h-0 opacity-0"
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
              <div>
                <button
                  onClick={toggleDropdownAbout}
                  className="text-white text-xl font-bold hover:text-[#ec466f] transition-all duration-300 flex items-center space-x-2 px-2 py-2 rounded-lg hover:bg-white/10 transform hover:translate-x-2 w-full text-left"
                >
                  <span>ABOUT</span>
                  <ChevronDownIcon
                    className={`w-5 h-5 transition-transform duration-300 ${
                      dropdownOpenAbout ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Mobile Services Submenu */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    dropdownOpenAbout
                      ? "max-h-64 opacity-100 mt-2"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-2">
                    <Link
                      // onClick={() => {
                      //   setActive("services");
                      onClick={() => setIsMenuOpen(false)}
                      // }}
                      href="/about"
                      className="block px-6 uppercase py-3 text-white font-medium text-base hover:text-[#ec466f]  transition-all duration-300 ease-out rounded-xl transform hover:scale-110 "
                    >
                      Background
                    </Link>
                    <Link
                      // onClick={() => {
                      //   setActive("services");
                      onClick={() => setIsMenuOpen(false)}
                      // }}
                      href="/about/team"
                      className="block px-6 uppercase py-3 text-white font-medium text-base hover:text-[#ec466f]  transition-all duration-300 ease-out rounded-xl transform hover:scale-110 "
                    >
                      Our Team
                    </Link>

                    <Link
                      // onClick={() => {
                      //   setActive("services");
                      onClick={() => setIsMenuOpen(false)}
                      // }}
                      href="/about/careers"
                      className="block uppercase px-6 py-3 text-white font-medium text-base hover:text-[#ec466f]  transition-all duration-300 ease-out rounded-xl transform hover:scale-110 "
                    >
                      Careers
                    </Link>
                    <Link
                      // onClick={() => {
                      //   setActive("services");
                      // }}
                      onClick={() => setIsMenuOpen(false)}
                      href="/about/alliances"
                      className="block uppercase px-6 py-3 text-white font-medium text-base hover:text-[#ec466f]  transition-all duration-300 ease-out rounded-xl transform hover:scale-110 "
                    >
                      Alliances
                    </Link>
                    <Link
                      onClick={() => setIsMenuOpen(false)}
                      href="/news-events"
                      className="block uppercase px-6 py-3 text-white font-medium text-base hover:text-[#ec466f]  transition-all duration-300 ease-out rounded-xl transform hover:scale-110 "
                    >
                      News & Events
                    </Link>
                  </div>
                </div>
              </div>

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
                      ? "max-h-64 opacity-100 mt-2"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-2">
                    <Link
                      // onClick={() => {
                      //   setActive("services");
                      // }}
                      onClick={() => setIsMenuOpen(false)}
                      href="/services"
                      className="block px-6 uppercase py-3 text-white font-medium text-base hover:text-[#ec466f]  transition-all duration-300 ease-out rounded-xl transform hover:scale-110 "
                    >
                      Our Work
                    </Link>
                    <Link
                      // onClick={() => {
                      //   setActive("services");
                      // }}
                      href="/services/brand-advisory"
                      className="block px-6 uppercase py-3 text-white font-medium text-base hover:text-[#ec466f]  transition-all duration-300 ease-out rounded-xl transform hover:scale-110 "
                    >
                      Branding
                    </Link>

                    <Link
                      // onClick={() => {
                      //   setActive("services");
                      // }}
                      onClick={() => setIsMenuOpen(false)}
                      href="/services/design-studio"
                      className="block uppercase px-6 py-3 text-white font-medium text-base hover:text-[#ec466f]  transition-all duration-300 ease-out rounded-xl transform hover:scale-110 "
                    >
                      Design
                    </Link>
                    <Link
                      // onClick={() => {
                      //   setActive("services");
                      // }}
                      onClick={() => setIsMenuOpen(false)}
                      href="/services/digital-marketing"
                      className="block uppercase px-6 py-3 text-white font-medium text-base hover:text-[#ec466f]  transition-all duration-300 ease-out rounded-xl transform hover:scale-110 "
                    >
                      Ai Marketing
                    </Link>
                    <Link
                      onClick={() => setIsMenuOpen(false)}
                      href="/services/digital-media-mix"
                      className="block uppercase px-6 py-3 text-white font-medium text-base hover:text-[#ec466f]  transition-all duration-300 ease-out rounded-xl transform hover:scale-110 "
                    >
                      Media
                    </Link>
                  </div>
                </div>
              </div>
              <Link
                href="/work-portfolio"
                className="text-white text-xl font-bold hover:text-[#ec466f] transition-all duration-300 px-2 py-2 rounded-lg hover:bg-white/10 transform hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                PORTFOLIO
              </Link>
              {/* Mobile Contact Button */}
              <Link
                href={"/contactus"}
                onClick={() => setIsMenuOpen(false)}
                className="relative px-6  w-fit py-3 text-white font-black text-lg bg-gradient-to-r from-[#ec466f] to-[#ff6b9d] rounded-full overflow-hidden group hover:shadow-xl transition-all duration-300 mx-2 mt-4"
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

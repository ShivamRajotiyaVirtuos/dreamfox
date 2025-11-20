"use client";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useMutation } from "@apollo/client";
import { SUBMIT_FORM } from "@/ContactUS/queries";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phoneNumber: "",
    message: "",
    designation: "",
    subject: "",
    country: "",
    city: "",
    address: "",
  });

  const [submitStatus, setSubmitStatus] = useState(null);
  const [locationData, setLocationData] = useState({});
  const [isClient, setIsClient] = useState(false);

  const containerRef = useRef(null);
  const formRef = useRef(null);
  const leftSideRef = useRef(null);

  // Apollo Client mutation
  const [submitForm, { loading: isSubmitting }] = useMutation(SUBMIT_FORM, {
    onCompleted: (data) => {
      setSubmitStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        phoneNumber: "",
        message: "",
        designation: "",
        subject: "",
        country: "",
        city: "",
        address: "",
      });

      // Success animation - only run on client
      if (isClient && formRef.current) {
        gsap.to(formRef.current, {
          scale: 1.02,
          duration: 0.3,
          yoyo: true,
          repeat: 1,
          ease: "power2.inOut",
        });
      }
    },
    onError: (error) => {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    },
  });

  // Check if we're on client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Get user location and IP data
  useEffect(() => {
    if (!isClient) return; // Only run on client

    const fetchLocationData = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        setLocationData(data);
      } catch (error) {
        console.error("Failed to fetch location data:", error);
      }
    };

    fetchLocationData();
  }, [isClient]);

  useEffect(() => {
    if (!isClient) return; // Only run animations on client

    // Entrance animations
    if (leftSideRef.current && formRef.current) {
      gsap.fromTo(
        leftSideRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
      );

      gsap.fromTo(
        formRef.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.3 }
      );
    }
  }, [isClient]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    // Submit animation - only run on client
    if (isClient && formRef.current) {
      gsap.to(formRef.current, {
        scale: 0.98,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut",
      });
    }

    try {
      await submitForm({
        variables: {
          ...formData,
          formType: "DREAMFOX_CONTACT_US",
          pageUrl: typeof window !== "undefined" ? window.location.href : "",
          // Map location data to supported fields
          country: locationData.country_code || formData.country || null,
          city: locationData.city || formData.city || null,
          address: locationData.region
            ? `${locationData.region}, ${locationData.country_name}`
            : formData.address || null,
        },
      });
    } catch (error) {
      console.error("Submission failed:", error);
    }
  };

  // Show loading state until client-side hydration is complete
  if (!isClient) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black relative overflow-hidden"
    >
      {/* Improved gradient glow - positioned above content area only */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#DC6263]/40 via-[#D2448D]/30 to-transparent opacity-60 blur-[120px] rounded-full"></div>

      {/* Secondary focused glow */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-[#DC6263]/30 via-[#D2448D]/20 to-transparent opacity-40 blur-[80px] rounded-full"></div>

      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-7">
        <div className="absolute top-40 left-1/2 transform -translate-x-1/2 text-[200px] font-bold text-white select-none">
          CONTACT US
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-10 sm:gap-0 lg:gap-10 max-w-7xl mx-auto px-6 py-32 sm:py-44 xl:py-24 relative z-10 min-h-screen">
        {/* Left Side - Contact Info */}
        <div ref={leftSideRef} className="flex-1 max-w-lg">
          {/* Enhanced Header Badge */}
          <div className="hidden sm:inline-flex items-center space-x-3 text-white mb-8 px-5 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full shadow-lg">
            <div className="w-4 h-4 bg-gradient-to-r from-[#DC6263] to-[#D2448D] rounded-full animate-pulse shadow-md"></div>
            <span className="text-sm font-medium tracking-wide">Contact</span>
          </div>

          <h1 className="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text ">
            Get in touch
          </h1>

          <p className="text-xl text-gray-300 mb-6 sm:mb-12 leading-relaxed">
            Have questions or ready to transform your business with AI
            automation? <br />
            <span className="text-transparent bg-gradient-to-r from-[#DC6263] to-[#D2448D] bg-clip-text font-semibold">
              Let's create something amazing together.
            </span>
          </p>

          {/* Enhanced Glassmorphism Contact Cards */}
          <div className="hidden sm:block space-y-4">
            {/* Email Card */}

            {/* Phone Card */}

            {/* Location Card */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#DC6263]/50 to-[#DC6263]/50 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl px-6 py-4 hover:bg-white/15 transition-all duration-500 cursor-pointer shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-[#DC6263] to-[#D2448D] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <svg
                        className="w-7 h-7 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">
                        Our location
                      </h3>
                      <p className="text-gray-300">
                        Virtuos Corporation, Suite 203, 2880 Zanker Road, San
                        Jose CA 95134 USA
                      </p>
                    </div>
                  </div>
                  {/* <div className="w-10 h-10 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors border border-white/20">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Enhanced Glassmorphism Form */}
        <div
          ref={formRef}
          className="sm:flex-1 w-full sm:max-w-2xl sm:ml-12 h-full flex items-center"
        >
          <div className="relative w-full">
            {/* Form outer glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#DC6263]/30 via-[#D2448D]/40 to-[#DC6263]/30 rounded-3xl blur-xl opacity-50"></div>

            {/* Main form container */}
            <div className="relative bg-white/10 backdrop-blur-3xl border border-white/20 rounded-3xl p-8 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#DC6263]/20 to-[#D2448D]/20 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="relative w-full bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-gray-300 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300 group-hover:bg-white/12 shadow-lg"
                    />
                  </div>
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#DC6263]/20 to-[#D2448D]/20 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="relative w-full bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-gray-300 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300 group-hover:bg-white/12 shadow-lg"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#DC6263]/20 to-[#D2448D]/20 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="relative w-full bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-gray-300 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300 group-hover:bg-white/12 shadow-lg"
                  />
                </div>

                {/* Phone and Company */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#DC6263]/20 to-[#D2448D]/20 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                    <input
                      type="tel"
                      name="phoneNumber"
                      placeholder="Phone Number"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="relative w-full bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-gray-300 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300 group-hover:bg-white/12 shadow-lg"
                    />
                  </div>
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#DC6263]/20 to-[#D2448D]/20 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                    <input
                      type="text"
                      name="company"
                      placeholder="Company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="relative w-full bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-gray-300 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300 group-hover:bg-white/12 shadow-lg"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#DC6263]/20 to-[#D2448D]/20 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="relative w-full bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-gray-300 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300 group-hover:bg-white/12 shadow-lg"
                  />
                </div>

                {/* Message */}
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#DC6263]/20 to-[#D2448D]/20 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="relative w-full bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-gray-300 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300 resize-none group-hover:bg-white/12 shadow-lg"
                  />
                </div>

                {/* Submit Status */}
                {submitStatus === "success" && (
                  <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-2xl">
                    <p className="text-green-300 text-center">
                      Message sent successfully!
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-2xl">
                    <p className="text-red-300 text-center">
                      Failed to send message. Please try again.
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative w-full group overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#DC6263] via-[#D2448D] to-[#DC6263] rounded-2xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#DC6263] via-[#D2448D] to-[#DC6263] rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-r from-[#DC6263] via-[#D2448D] to-[#DC6263] text-white py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-[1.02] group-active:scale-[0.98]">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="space-y-4 w-full sm:hidden">
          {/* Email Card */}

          {/* Phone Card */}

          {/* Location Card */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#DC6263]/50 to-[#DC6263]/50 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
            <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl px-6 py-4 hover:bg-white/15 transition-all duration-500 cursor-pointer shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-[#DC6263] to-[#D2448D] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">
                      Our location
                    </h3>
                    <p className="text-gray-300">
                      Virtuos Corporation, Suite 203, 2880 Zanker Road, San Jose
                      CA 95134 USA
                    </p>
                  </div>
                </div>
                {/* <div className="w-10 h-10 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors border border-white/20">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced floating refresh button */}
      <div className="fixed bottom-8 right-8 group">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#DC6263] to-[#D2448D] rounded-full blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
        <button className="relative w-16 h-16 bg-white/10 backdrop-blur-2xl hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 border border-white/20 group-hover:scale-110 shadow-2xl">
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

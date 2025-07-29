"use client";

import { useState } from "react";

const discoveryOptions = [
  "Google Search",
  "Word of mouth",
  "Behance",
  "Awwwards",
  "Dribble",
  "Other",
];
const helpOptions = [
  "Brand Identity Design",
  "Website Design",
  "Website Development",
  "Product Design",
];
const budgetOptions = [
  "$ <2500",
  "$ 2500 - $ 5000",
  "$5000 - $10000",
  "$10000 - $20000",
];

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    discovery: "",
    helpWith: [],
    budget: "",
    projectDetails: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleHelpOption = (option) => {
    setFormData((prev) => {
      const alreadySelected = prev.helpWith.includes(option);
      return {
        ...prev,
        helpWith: alreadySelected
          ? prev.helpWith.filter((item) => item !== option)
          : [...prev.helpWith, option],
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Submit logic (API call, validation, etc.) goes here
  };

  const TagButton = ({ label, active, onClick }) => (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-1 rounded-full border text-20 mb-2 mr-2 transition-all duration-300 ease-in-out
      ${
        active
          ? "bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.8)] scale-105"
          : "border-white text-white hover:bg-white hover:text-black hover:shadow-[0_0_10px_rgba(255,255,255,0.5)]"
      }
    `}
    >
      {label}
    </button>
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="min-h-screen bg-black text-white px-8 py-16 md:px-24"
    >
      <h2 className="text-60 font-semibold mb-10 leading-tight max-w-3xl">
        Join us on this remarkable journey of innovation and inspiration.
      </h2>

      {/* Name and Company */}
      <div className="flex flex-wrap gap-6 mb-6">
        <div className="flex-1 min-w-[200px]">
          <label className="block text-40 mb-8">Hi! My name is</label>
          <div className="flex gap-3">
            <input
              name="firstName"
              placeholder="first name"
              value={formData.firstName}
              onChange={handleChange}
              className="bg-transparent border-b border-white w-1/2 outline-none placeholder-white text-30"
            />
            <input
              name="lastName"
              placeholder="last name"
              value={formData.lastName}
              onChange={handleChange}
              className="bg-transparent border-b border-white w-1/2 outline-none placeholder-white text-30"
            />
          </div>
        </div>
        <div className="flex-1 min-w-[200px]">
          <label className="block text-40 mb-8">and I work at</label>
          <input
            name="company"
            placeholder="name of your company"
            value={formData.company}
            onChange={handleChange}
            className="bg-transparent border-b border-white w-full outline-none placeholder-white text-30"
          />
        </div>
      </div>

      {/* Discovery */}
      <div className="mb-6">
        <label className="block text-40 mb-8">I found you guys using</label>
        <div className="flex flex-wrap">
          {discoveryOptions.map((opt) => (
            <TagButton
              key={opt}
              label={opt}
              active={formData.discovery === opt}
              onClick={() =>
                setFormData((prev) => ({ ...prev, discovery: opt }))
              }
            />
          ))}
        </div>
      </div>

      {/* Help with */}
      <div className="mb-6">
        <label className="block text-40 mb-8">I’m looking for help with</label>
        <div className="flex flex-wrap">
          {helpOptions.map((opt) => (
            <TagButton
              key={opt}
              label={opt}
              active={formData.helpWith.includes(opt)}
              onClick={() => toggleHelpOption(opt)}
            />
          ))}
        </div>
      </div>

      {/* Budget */}
      <div className="mb-6">
        <label className="block text-40 mb-8">My Budget is around</label>
        <div className="flex flex-wrap">
          {budgetOptions.map((opt) => (
            <TagButton
              key={opt}
              label={opt}
              active={formData.budget === opt}
              onClick={() => setFormData((prev) => ({ ...prev, budget: opt }))}
            />
          ))}
        </div>
      </div>

      {/* Project Description */}
      <div className="mb-6">
        <label className="block text-40 mb-8">
          Here is what our project is about:
        </label>
        <textarea
          name="projectDetails"
          placeholder="Tell us about your project..."
          value={formData.projectDetails}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-white outline-none placeholder-white resize-none text-30"
          rows={4}
        />
      </div>

      {/* Email */}
      <div className="mb-8">
        <label className="block text-40 mb-8">You can reach me at</label>
        <input
          type="email"
          name="email"
          placeholder="Type your email"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-white outline-none placeholder-white text-30"
        />
      </div>

      <button
        type="submit"
        className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:scale-105 transition"
      >
        Submit
      </button>
    </form>
  );
}

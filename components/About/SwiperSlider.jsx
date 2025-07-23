"use client";
import React, { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { FaUser, FaQuoteLeft } from "react-icons/fa";

const SwiperSlider = () => {
  useEffect(() => {
    new Swiper(".swiper", {
      effect: "coverflow",
      loop: true,
      grabCursor: true,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      slidesPerView: 1,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        320: { slidesPerView: 1.5 },
        580: { slidesPerView: 2 },
        767: { slidesPerView: 3 },
        992: { slidesPerView: 3.5 },
        1200: { slidesPerView: 4 },
        1400: { slidesPerView: 4.5 },
      },
    });
  }, []);

  const slides = [
  {
    url: "https://cdn.josetxu.com/img/gp-tonin-rocodromo.jpg",
    name: "Rahul Mehta",
    description: "Frontend Developer specializing in React and Tailwind CSS",
  },
  {
    url: "https://cdn.josetxu.com/img/gp-normal-caliz.jpg",
    name: "Aisha Kapoor",
    description: "UI/UX Designer crafting user-centered digital experiences",
  },
  {
    url: "https://cdn.josetxu.com/img/gp-cumbre-totem.jpg",
    name: "Arjun Reddy",
    description: "Full Stack Developer with MERN expertise",
  },
  {
    url: "https://cdn.josetxu.com/img/gp-oscar-raul-hueco-hoces2.jpg",
    name: "Neha Sharma",
    description: "Cloud Engineer deploying scalable AWS infrastructure",
  },
  {
    url: "https://cdn.josetxu.com/img/gp-gallego-cueva-mora.jpg",
    name: "Kabir Singh",
    description: "Backend Developer working with Node.js and GraphQL",
  },
  {
    url: "https://cdn.josetxu.com/img/gp-chimenea-tortuga.jpg",
    name: "Sneha Iyer",
    description: "Mobile App Developer building cross-platform apps with Flutter",
  },
  {
    url: "https://cdn.josetxu.com/img/gp-blues-ojos-bonitos-tres-coronas.jpg",
    name: "Vikram Nair",
    description: "DevOps Engineer automating CI/CD pipelines",
  },
  {
    url: "https://cdn.josetxu.com/img/gp-capuchon-sarcofago.jpg",
    name: "Priya Desai",
    description: "Machine Learning Engineer solving real-world problems with AI",
  },
  {
    url: "https://cdn.josetxu.com/img/gp-rosario-cueva-mora.jpg",
    name: "Rohan Bhatt",
    description: "Cybersecurity Analyst focusing on threat detection",
  },
  {
    url: "https://cdn.josetxu.com/img/gp-me-pesa-hasta-el-aire-dehesilla.jpg",
    name: "Meera Sinha",
    description: "Data Scientist turning raw data into insights",
  },
  {
    url: "https://cdn.josetxu.com/img/gp-anonima-tres-coronas.jpg",
    name: "Aditya Verma",
    description: "Software Architect designing scalable systems",
  },
];


  return (
    <>
      <style>{`
        body {
          background: #000;
          font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
          margin: 0;
          overflow: hidden;
        }
        .full-height-container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding-top: 40px;
        }
        .slider-heading {
          color: white;
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 30px;
          letter-spacing: 1px;
          font-weight: 600;
        }
        .swiper {
          width: 100%;
          padding: 20px 0 50px;
        }
        .swiper-slide {
          background-position: center;
          background-size: cover;
          width: 400px;
          height: 500px;
          border-radius: 10px;
          overflow: hidden;
          position: relative;
        }
        .info {
          position: absolute;
          width: 100%;
          height: 40%;
          text-align: left;
          background: linear-gradient(180deg, #fff0 0, #0008 50px), linear-gradient(180deg, #fff0 , #0009);
          padding: 20px;
          bottom: -100%;
          box-sizing: border-box;
          transition: bottom 0.5s ease;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .swiper-slide-active .info {
          bottom: 0;
        }
        .info .name,
        .info .desc {
          color: #e6e6e6;
          display: flex;
          align-items: center;
          font-size: 14px;
          gap: 10px;
          text-transform: none;
        }
        .swiper-pagination-bullet {
          background: #696969;
          transition: all 0.5s ease;
          border-radius: 8px;
        }
        .swiper-pagination-bullet-active {
          background: purple !important;
          width: 30px;
        }
      `}</style>

      <div className="min-h-[50vh]">
        <p className=" text-120 text-white text-center font-semibold mb-8 2xl:mb-16"> Meet The Team</p>
        <div className="swiper">
          <div className="swiper-wrapper">
            {slides.map((slide, i) => (
              <div
                key={i}
                className="swiper-slide"
                style={{ backgroundImage: `url(${slide.url})` }}
              >
                <div className="info">
                  <div className="name ">
                    <FaUser /> <p className="text-48 "> {slide.name}</p>
                  </div>
                  <div className="desc">
                    <FaQuoteLeft /> {slide.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination" />
        </div>
      </div>
    </>
  );
};

export default SwiperSlider;

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
      name: "Carlos Rubio",
      description: "Climbing El Rocodromo, La Pedriza",
    },
    {
      url: "https://cdn.josetxu.com/img/gp-normal-caliz.jpg",
      name: "Josetxu López",
      description: "Route: Normal (Ae) at El Caliz",
    },
    {
      url: "https://cdn.josetxu.com/img/gp-cumbre-totem.jpg",
      name: "Aitor & Josefer",
      description: "Sur Clasica (6a), El Totem",
    },
    {
      url: "https://cdn.josetxu.com/img/gp-oscar-raul-hueco-hoces2.jpg",
      name: "Oscar & Raul",
      description: "Hueco de las Hoces, La Pedriza",
    },
    {
      url: "https://cdn.josetxu.com/img/gp-gallego-cueva-mora.jpg",
      name: "Jarutxi Mora",
      description: "Gallego (V+) at Cueva de la Mora",
    },
    {
      url: "https://cdn.josetxu.com/img/gp-chimenea-tortuga.jpg",
      name: "Nacho Ruiz",
      description: "Chimenea (6a) - La Tortuga",
    },
    {
      url: "https://cdn.josetxu.com/img/gp-blues-ojos-bonitos-tres-coronas.jpg",
      name: "Marino",
      description: "Blues de los ojos bonitos (6a+)",
    },
    {
      url: "https://cdn.josetxu.com/img/gp-capuchon-sarcofago.jpg",
      name: "Josetxu & Uge",
      description: "Capuchon (6a/A1), El Sarcofago",
    },
    {
      url: "https://cdn.josetxu.com/img/gp-rosario-cueva-mora.jpg",
      name: "Eloy Atajos",
      description: "Rosario (Vº) - Cueva de la Mora",
    },
    {
      url: "https://cdn.josetxu.com/img/gp-me-pesa-hasta-el-aire-dehesilla.jpg",
      name: "Indio",
      description: "Me pesa hasta el aire (A2/A3?)",
    },
    {
      url: "https://cdn.josetxu.com/img/gp-anonima-tres-coronas.jpg",
      name: "Krispin Talavera",
      description: "Anónima (6c) - Tres Coronas",
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

      <div className="full-height-container">
        <p className="slider-heading text-120 text-white text-center font-semibold "> Meet The Team</p>
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

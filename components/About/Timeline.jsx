"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "../Text Reveal/textreveal";

gsap.registerPlugin(ScrollTrigger);

const cardData = [
  {
    year: "2020",
    heading: "Started",
    description: "We laid the foundation of our journey with a clear mission.",
    image: "/images/about_timeline1.webp",
  },
  {
    year: "2021",
    heading: "Built",
    description: "Structured core teams and systems for growth.",
    image: "/images/about_timeline2.webp",
  },
  {
    year: "2022",
    heading: "Scaled",
    description: "Rapid expansion with new projects and partnerships.",
    image: "/images/about_timeline3.webp",
  },
  {
    year: "2023",
    heading: "Innovated",
    description: "Launched cutting-edge solutions impacting real change.",
    image: "/images/about_timeline4.webp",
  },
];

const StackingCards = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = document.querySelectorAll(".stacking-cards .card");
      const totalCards = cards.length - 1;
      const cardWidth = cards[0]?.offsetWidth || 0;
      const containerWidth = document.querySelector(".section-container")?.offsetWidth || 0;
      const offset = (containerWidth - cardWidth) / (totalCards || 1);
      const gap = 20;

      gsap.to(cards, {
        x: (i) => -i * cardWidth + i * offset - offset - gap * i,
        duration: (i) => 0.5 * i,
        ease: "none",
        scrollTrigger: {
          trigger: ".stacking-cards",
          pin: true,
          scrub: true,
          end: `+=${totalCards * 100}% bottom`,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      <div className="container section-container-wrapper">
        
        <div className="section-container"></div>
      </div>

      <section className="stacking-cards">

        {/* <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <TextReveal
            className="text-120 font-semibold mb-4 md:mb-6 lg:mb-8 text-white "
            animation="rotateX"
            stagger={0.1}
            duration={0.8}
          >
            Case Snapshots
          </TextReveal>
        </div> */}
        
        <div className="stacking-cards-wrapper">
          <div className="container stacking-cards-container">
            <div className="card-stack">
              {cardData.map((card, index) => (
                <div className="card card-slide" key={index}>
                  <div className="card-inner">
                    <div className="card-left">
                      <div className="card-year">{card.year}</div>
                      <div className="card-heading">{card.heading}</div>
                      <div className="card-description">{card.description}</div>
                      <div className="card-number">{index + 1}</div>
                    </div>
                    <div className="card-right">
                      <img src={card.image} alt={card.heading} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* <div className="spacer"></div> */}

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .spacer {
          height: 33vh;
        }

        .container {
          --container-padding: clamp(20px, 5vi, 80px);
          padding-inline: clamp(20px, 5vi, 80px);
        }

        .section-container-wrapper {
          position: fixed;
          top: 20px;
          width: 100%;
          height: 8px;
        }

        .section-container {
          background-color: black;
          width: 100%;
          height: 100%;
        }

        .stacking-cards {
          display: flex;
          overflow: hidden;
          position: relative;
          height: 100vh;
        }

        .stacking-cards-wrapper {
          margin-block: auto;
          width: 100%;
          height: 75%;
        }

        .stacking-cards-container {
          height: 100%;
        }

        .card-stack {
          --gap: 20px;
          display: flex;
          gap: var(--gap);
          height: 100%;
        }

        .card {
          width: 90vw;
          flex-shrink: 0;
        }

        @media (min-width: 768px) {
          .card {
            width: 55vw;
          }
        }

        .card-inner {
          border-radius: 30px;
          overflow: hidden;
          outline: 1px solid white;
          background-color: #fff;
          height: 100%;
          display: flex;
          flex-direction: row;
        }

        .card-left {
          flex: 1;
          padding: 40px 30px;
          background-color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .card-year {
          font-size: 1rem;
          font-weight: 600;
          color: #777;
        }

        .card-heading {
          font-size: 1.5rem;
          font-weight: 700;
          margin-top: 10px;
        }

        .card-description {
          font-size: 1rem;
          margin-top: auto;
          margin-bottom: auto;
          color: #444;
          line-height: 1.5;
        }

        .card-number {
          font-size: 3rem;
          font-weight: 800;
          color: #000;
          opacity: 0.1;
        }

        .card-right {
          flex: 1;
        }

        .card-right img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
};

export default StackingCards;




















//  fully overlaps

// "use client";

// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const StackingCards = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const cards = document.querySelectorAll(".stacking-cards .card");
//       const totalCards = cards.length - 1;
//       const cardWidth = cards[0]?.offsetWidth || 0;
//       const containerWidth = document.querySelector(".section-container")?.offsetWidth || 0;
//       const offset = (containerWidth - cardWidth) / (totalCards || 1);
//       const gap = 20;

//       gsap.to(cards, {
//         x: (i) => -i * cardWidth + i * offset - offset - gap * i,
//         duration: (i) => 0.5 * i,
//         ease: "none",
//         scrollTrigger: {
//           trigger: ".stacking-cards",
//           pin: true,
//           scrub: true,
//           end: `+=${totalCards * 100}% bottom`,
//         },
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div ref={containerRef}>
//       <div className="spacer"></div>
//       <div className="container section-container-wrapper">
//         <div className="section-container"></div>
//       </div>

//       <section className="stacking-cards">
//         <div className="stacking-cards-wrapper">
//           <div className="container stacking-cards-container">
//             <div className="card-stack">
//               {[1, 2, 3, 4].map((num) => (
//                 <div className="card card-slide" key={num}>
//                   <div className="card-inner">
//                     <div className="card-label">{num}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <div className="spacer"></div>

//       <style jsx>{`
//         * {
//           box-sizing: border-box;
//         }

//         .spacer {
//           height: 33vh;
//         }

//         .container {
//           --container-padding: clamp(20px, 5vi, 80px);
//           padding-inline: clamp(20px, 5vi, 80px);
//         }

//         .section-container-wrapper {
//           position: fixed;
//           top: 20px;
//           width: 100%;
//           height: 8px;
//         }

//         .section-container {
//           background-color: black;
//           width: 100%;
//           height: 100%;
//         }

//         .stacking-cards {
//           display: flex;
//           overflow: hidden;
//           position: relative;
//           height: 100vh;
//         }

//         .stacking-cards-wrapper {
//           margin-block: auto;
//           width: 100%;
//           height: 75%;
//         }

//         .stacking-cards-container {
//           height: 100%;
//         }

//         .card-stack {
//           --gap: 20px;
//           display: flex;
//           gap: var(--gap);
//           height: 100%;
//         }

//         .card {
//           width: 90vw;
//           flex-shrink: 0;
//         }

//         @media (min-width: 768px) {
//           .card {
//             width: 55vw;
//           }
//         }

//         .card-inner {
//           border-radius: 30px;
//           outline: 1px solid white;
//           background-color: #e5e5e5;
//           padding: 40px 60px;
//           height: 100%;
//           display: flex;
//           align-items: flex-start;
//           justify-content: flex-start;
//         }

//         .card-label {
//           font-size: 3rem;
//           font-weight: bold;
//           color: black;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default StackingCards;

"use client";
import React, { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import {
  HiLightBulb,
  HiAdjustmentsHorizontal,
  HiUsers,
  HiGlobeAmericas,
} from "react-icons/hi2";

const valuesData = [
  {
    icon: <HiLightBulb size={36} />,
    title: "Innovation First",
    description: "We embrace change and continuously seek creative solutions to move forward.",
  },
  {
    icon: <HiAdjustmentsHorizontal size={36} />,
    title: "Think Smart",
    description: "We approach challenges with intelligence and make data-driven decisions.",
  },
  {
    icon: <HiUsers size={36} />,
    title: "People Matter",
    description: "We support, uplift, and celebrate the diversity and passion of our people.",
  },
  {
    icon: <HiGlobeAmericas size={36} />,
    title: "Global Impact",
    description: "We aim to create a meaningful, scalable impact beyond borders.",
  },
  {
    icon: <HiGlobeAmericas size={36} />,
    title: "Global Impact",
    description: "We aim to create a meaningful, scalable impact beyond borders.",
  },
];

const CultureValuesSection = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      VanillaTilt.init(document.querySelectorAll(".card-container"), {
        reverse: false,
        max: 15,
        startX: 0,
        startY: 0,
        perspective: 1000,
        scale: 1,
        speed: 300,
        transition: true,
        axis: null,
        reset: true,
        "reset-to-start": true,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        glare: false,
        "max-glare": 1,
        "glare-prerender": false,
        "mouse-event-element": null,
        "full-page-listening": false,
        gyroscope: true,
        gyroscopeMinAngleX: -45,
        gyroscopeMaxAngleX: 45,
        gyroscopeMinAngleY: -45,
        gyroscopeMaxAngleY: 45,
        gyroscopeSamples: 10,
      });
    }
  }, []);

  return (
    <section className="w-full py-20 bg-black text-white  container ">
      <h2 className="text-center text-120 font-serif-display font-bold text-white mb-16">
        Culture & Values
      </h2>

      <div className="flex flex-wrap justify-center gap-8 px-4">
        {valuesData.map((item, index) => (
          <div
            key={index}
            className="card-container bg-neutral-900"
            data-tilt
          >
            <div className="content-area p-5 flex flex-col items-center justify-center gap-4">
              <div className="icon text-[#ed4a6dff]">{item.icon}</div>
              <h1 className="font-serif-display text-2xl sm:text-3xl font-bold text-center">
                {item.title}
              </h1>
              <p className="text-sm sm:text-base text-gray-300 text-center font-light">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .card-container {
          position: relative;
          height: 200px;
          min-width: 200px;          
          border-radius: 1.5rem;
          overflow: hidden;
          background-color: #0f0f0f;
          box-shadow:
            0 0 0 1px rgba(168, 85, 247, 0.25),
            0 0 20px 6px rgba(147, 51, 234, 0.15);
          transform-style: preserve-3d;
          transition: transform 0.5s ease, box-shadow 0.4s ease;
        }

        .card-container:hover {
          box-shadow:
            0 0 0 1.5px rgba(168, 85, 247, 0.4),
            0 0 25px 10px rgba(168, 85, 247, 0.2);
        }

        .content-area {
          transform: translateZ(60px);
          z-index: 10;
          height: 100%;
        }

        .font-serif-display {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </section>
  );
};

export default CultureValuesSection;











// "use client";
// import React, { useEffect } from "react";
// import { FaRocket, FaBrain, FaUsers, FaGlobe } from "react-icons/fa";
// import VanillaTilt from "vanilla-tilt";

// const valuesData = [
//   {
//     icon: <FaRocket size={28} />,
//     title: "Innovation First",
//     description: "We embrace change and continuously seek creative solutions to move forward.",
//     bgImage: "https://images.unsplash.com/photo-1535223289827-42f1e9919769",
//   },
//   {
//     icon: <FaBrain size={28} />,
//     title: "Think Smart",
//     description: "We approach challenges with intelligence and make data-driven decisions.",
//     bgImage: "https://static.vecteezy.com/system/resources/previews/002/409/457/large_2x/vertical-view-of-a-meeting-in-a-modern-office-photo.jpg",
//   },
//   {
//     icon: <FaUsers size={28} />,
//     title: "People Matter",
//     description: "We support, uplift, and celebrate the diversity and passion of our people.",
//     bgImage: "https://images.unsplash.com/photo-1573497491208-6b1acb260507",
//   },
//   {
//     icon: <FaGlobe size={28} />,
//     title: "Global Impact",
//     description: "We aim to create a meaningful, scalable impact beyond borders.",
//     bgImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
//   },
// ];

// const CultureValuesSection = () => {
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       VanillaTilt.init(document.querySelectorAll(".card-container"), {
//         max: 10,
//         speed: 500,
//         glare: true,
//         "max-glare": 0.1,
//         perspective: 1800,
//         scale: 1.03,
//         reset: true,
//       });
//     }
//   }, []);

//   return (
//     <section className="w-full py-20 bg-black text-white">
//       <h2 className="text-center text-120 font-serif-display font-bold text-white mb-16">
//         Culture & Values
//       </h2>

//       <div className="flex flex-wrap justify-center gap-8 px-4">
//         {valuesData.map((item, index) => (
//           <div
//             key={index}
//             className="card-container"
//             style={{ backgroundImage: `url(${item.bgImage})` }}
//             data-tilt
//             data-tilt-transform-element
//           >
//             <div className="inner-border-overlay" data-tilt-transform-element></div>

//             <div className="content-area p-4 sm:p-5 lg:p-6" data-tilt-transform-element>
//               <div className="gradient-overlay"></div>

//               <div className="text-block" data-tilt-transform-element>
//                 <h1 className="font-serif-display text-2xl sm:text-3xl font-bold mb-2">
//                   {item.title}
//                 </h1>
//                 <p className="text-sm sm:text-base text-gray-300 font-light">
//                   {item.description}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <style>{`
//         .card-container {
//           position: relative;
//           width: 100%;
//           max-width: 360px;
//           aspect-ratio: 9 / 15.5;
//           border-radius: 1.75rem;
//           overflow: hidden;
//           background-size: cover;
//           background-position: center;
//           box-shadow:
//             0 0 0 2px rgba(192, 132, 252, 0.35),
//             0 0 25px 8px rgba(168, 85, 247, 0.2);
//           transform-style: preserve-3d;
//           transition:
//             transform 0.6s cubic-bezier(0.23, 1, 0.32, 1),
//             box-shadow 0.4s ease-out,
//             background-size 1.5s ease-out;
//           cursor: grab;
//           will-change: transform, box-shadow, background-size;
//         }

//         .card-container:hover {
//           box-shadow:
//             0 0 0 3px rgba(192, 132, 252, 0.5),
//             0 0 35px 12px rgba(168, 85, 247, 0.3);
//         }

//         .inner-border-overlay {
//           position: absolute;
//           inset: 14px;
//           border-radius: 1.375rem;
//           pointer-events: none;
//           z-index: 10;
//           box-shadow:
//             inset 0.5px 0.5px 1.5px rgba(233, 213, 255, 0.5),
//             inset -1px -1px 1px rgba(147, 51, 234, 0.4),
//             inset 3px 3px 6px rgba(0, 0, 0, 0.25);
//           transform: translateZ(30px);
//           border: 1px solid rgba(192, 132, 252, 0.2);
//         }

//         .content-area {
//           position: absolute;
//           inset: 14px;
//           border-radius: 1.375rem;
//           overflow: hidden;
//           display: flex;
//           flex-direction: column;
//           justify-content: flex-end;
//           z-index: 5;
//           transform: translateZ(60px);
//         }

//         .gradient-overlay {
//           position: absolute;
//           bottom: 0; left: 0; right: 0;
//           height: 75%;
//           background: linear-gradient(to top, rgba(10, 10, 10, 0.9) 0%, rgba(10, 10, 10, 0.65) 50%, transparent 100%);
//           z-index: 15;
//           transform: translateZ(5px);
//         }

//         .text-block {
//           position: relative;
//           z-index: 20;
//           color: #f8fafc;
//           text-align: center;
//           text-shadow: 0 2px 4px rgba(0,0,0,0.5);
//           transform: translateZ(25px);
//         }

//         .text-block p {
//           color: #cbd5e1;
//         }

//         .font-serif-display {
//           font-family: 'Playfair Display', serif;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default CultureValuesSection;

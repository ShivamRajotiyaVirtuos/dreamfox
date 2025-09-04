import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Teams = () => {
  const containerRef = useRef(null);
  const teamMembersRef = useRef([]);

  const teamMembers = [
    {
      url: "/images/About/ams.webp",
      name: "Amarinder Singh",
      role: "Senior Director",
      image: "/images/About/ams.webp",
      height: "h-126",
      bgColor: "bg-purple-200",
    },
    {
      image: "/images/About/shaloo_reddi.webp",
      name: "Shaloo Reddi",
      role: "VP & Senior HR",

      height: "h-104",
      bgColor: "bg-blue-200",
    },
    {
      image: "/images/About/sc_bg.png",

      name: "Shivam Chawla",
      role: "Lead - Application Developer",

      height: "h-126",
      bgColor: "bg-pink-200",
    },
    {
      image: "/images/About/tina_sachdeva-removebg-preview.png",

      name: "Tina Sachdeva",
      role: "Customer Success Manager",

      height: "h-116",
      bgColor: "bg-green-200",
    },
    {
      image: "/images/About/shivam_rajotiya-removebg.png",

      name: "Shivam Rajotiya",
      role: "Software Engineer",

      height: "h-136",
      bgColor: "bg-yellow-200",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(teamMembersRef.current, {
        y: 100,
        opacity: 0,
        scale: 0.8,
      });

      // Create scroll-triggered animation
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => {
          gsap.to(teamMembersRef.current, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            stagger: 0.15,
            ease: "power2.out",
          });
        },
        onLeave: () => {
          gsap.to(teamMembersRef.current, {
            y: -250,
            opacity: 0.7,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.inOut",
          });
        },
        onEnterBack: () => {
          gsap.to(teamMembersRef.current, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
          });
        },
      });

      // Add hover animations
    //   teamMembersRef.current.forEach((member, index) => {
    //     if (member) {
    //       member.addEventListener("mouseenter", () => {
    //         gsap.to(member, {
    //           scale: 1.05,
    //           y: -10,
    //           duration: 0.3,
    //           ease: "power2.out",
    //         });
    //       });

    //       member.addEventListener("mouseleave", () => {
    //         gsap.to(member, {
    //           scale: 1,
    //           y: 0,
    //           duration: 0.3,
    //           ease: "power2.out",
    //         });
    //       });
    //     }
    //   });
    });

    // Cleanup function
    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className=" bg-black flex items-end justify-center p-8 pb-16">
      <div ref={containerRef} className="container w-full">
        <div className="flex items-end justify-center ">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              ref={(el) => (teamMembersRef.current[index] = el)}
              className="flex flex-col group items-center cursor-pointer"
            >
              {/* Cylindrical container with varying heights */}
              <div
                className={`relative w-56 lg:w-64 2xl:w-80 ${member.height} ${member.bgColor} rounded-t-full overflow-hidden shadow-2xl`}
              >
                {/* Member info at top */}
                <div className="absolute top-20 left-0 right-0 text-center z-10 px-4">
                  <h3 className="text-black font-bold text-24 tracking-wide leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-gray-700 text-16 mt-1 font-medium">
                    {member.role}
                  </p>
                </div>

                {/* Member image positioned at bottom */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-44 lg:w-52 h-44 lg:h-52 xl:size-64 overflow-hidden rounded-t-full group-hover:scale-120 transition-transform duration-500">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                    style={{ filter: "grayscale(100%)" }}
                  />
                </div>

                {/* Bottom rounded section */}
                {/* <div
                  className={`absolute bottom-0 left-0 right-0 h-8 ${member.bgColor} rounded-b-3xl`}
                ></div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;

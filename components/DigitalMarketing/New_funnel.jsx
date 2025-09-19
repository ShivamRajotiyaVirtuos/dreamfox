import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "../Text Reveal/textreveal";

gsap.registerPlugin(ScrollTrigger);

export default function New_Funnel() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;

    // Set initial states for cards
    gsap.set(cards, { opacity: 0 });

    // Card 1 - slide in from left
    gsap.set(cards[0], { x: -100, rotateY: -15 });

    // Card 2 - slide in from right
    gsap.set(cards[1], { x: 100, rotateY: 15 });

    // Card 3 - slide in from bottom left
    gsap.set(cards[2], { x: -80, y: 60, scale: 0.5 });

    // Card 4 - slide in from bottom
    gsap.set(cards[3], { y: 80, scale: 0.5 });

    // Card 5 - slide in from bottom right
    gsap.set(cards[4], { x: 80, y: 60, scale: 0.5 });

    // Create timeline for card animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate cards in sequence
    tl.to(cards[0], {
      opacity: 1,
      x: 0,
      rotateY: 0,
      duration: 0.8,
      ease: "power2.out",
    })
      .to(
        cards[1],
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.6"
      )
      .to(
        cards[2],
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.6"
      )
      .to(
        cards[3],
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.6"
      )
      .to(
        cards[4],
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.6"
      );

    // Parallax effect for images
    cards.forEach((card, index) => {
      const img = card.querySelector("img");
      if (img) {
        gsap.set(img, {
          yPercent: 5,
        });
        gsap.to(img, {
          yPercent: -20,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    });

    // Hover animations
    cards.forEach((card) => {
      const handleMouseEnter = () => {
        // gsap.to(card, {
        //   y: -10,
        //   scale: 1.02,
        //   duration: 0.3,
        //   ease: "power2.out",
        // });

        const img = card.querySelector("img");
        if (img) {
          gsap.to(img, {
            scale: 1.1,
            duration: 0.5,
            ease: "power2.out",
          });
        }
      };

      const handleMouseLeave = () => {
        // gsap.to(card, {
        //   y: 0,
        //   scale: 1,
        //   duration: 0.3,
        //   ease: "power2.out",
        // });

        const img = card.querySelector("img");
        if (img) {
          gsap.to(img, {
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
          });
        }
      };

      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <div className="bg-black py-24 sm:py-36 ">
      <div className="mx-auto max-w-2xl container">
        <TextReveal
          className="text-center text-120 font-bold text-white"
          style={{ pointerEvents: "none" }}
          animation="rotateX"
          stagger={0.1}
          duration={0.8}
        >
          Funnel Builder
        </TextReveal>

        <div
          ref={containerRef}
          className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2"
        >
          <div
            ref={addToRefs}
            className="relative lg:col-span-3 cursor-pointer"
          >
            <div className="absolute inset-0 rounded-lg bg-[rgba(255,255,255,0.05)] max-lg:rounded-t-4xl lg:rounded-tl-4xl " />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
              <div className="relative overflow-hidden">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1519608220182-b0ee9d0f54d6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGZ1dHVyaXN0aWN8ZW58MHx8MHx8fDA%3D"
                  className="h-80 object-cover w-full transform-gpu"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-black/10 to-none"></div>
              </div>

              <div className="p-6 pt-0 sm:p-10 sm:pt-4">
                <h3 className="text-sm/4 font-semibold text-pink-600 dark:text-pink-400">
                  Performance
                </h3>
                <p className="mt-2 text-20 font-medium tracking-tight text-white ">
                  Lightning-fast builds
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  gravida justo et nulla efficitur, maximus egestas sem
                  pellentesque.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl lg:rounded-tl-4xl dark:outline-white/15" />
          </div>

          <div
            ref={addToRefs}
            className="relative lg:col-span-3 cursor-pointer"
          >
            <div className="absolute inset-0 rounded-lg bg-[rgba(255,255,255,0.05)] lg:rounded-tr-4xl " />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
              <div className="relative overflow-hidden">
                <img
                  alt=""
                  src="https://plus.unsplash.com/premium_photo-1682124877854-17281d9072d1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fGZ1dHVyaXN0aWN8ZW58MHx8MHx8fDA%3D"
                  className="h-80 object-cover w-full transform-gpu"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-black/10 to-none"></div>
              </div>

              <div className="p-6 pt-0 sm:p-10 sm:pt-4">
                <h3 className="text-sm/4 font-semibold text-pink-600 dark:text-pink-400">
                  Releases
                </h3>
                <p className="mt-2 text-20 font-medium tracking-tight text-white ">
                  Push to deploy
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-300">
                  Curabitur auctor, ex quis auctor venenatis, eros arcu rhoncus
                  massa, laoreet dapibus ex elit vitae odio.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 lg:rounded-tr-4xl dark:outline-white/15" />
          </div>

          <div
            ref={addToRefs}
            className="relative lg:col-span-2 cursor-pointer"
          >
            <div className="absolute inset-0 rounded-lg bg-[rgba(255,255,255,0.05)] lg:rounded-bl-4xl " />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
              <div className="relative overflow-hidden">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1634834300387-8015d9fb7550?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGZ1dHVyaXN0aWN8ZW58MHx8MHx8fDA%3D"
                  className="h-80 object-cover w-full transform-gpu"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-black/10 to-none"></div>
              </div>
              <div className="p-6 pt-0 sm:p-10 sm:pt-4">
                <h3 className="text-sm/4 font-semibold text-pink-600 dark:text-pink-400">
                  Speed
                </h3>
                <p className="mt-2 text-20 font-medium tracking-tight text-white ">
                  Built for power users
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-300">
                  Sed congue eros non finibus molestie. Vestibulum euismod
                  augue.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 lg:rounded-bl-4xl dark:outline-white/15" />
          </div>

          <div
            ref={addToRefs}
            className="relative lg:col-span-2 cursor-pointer"
          >
            <div className="absolute inset-0 rounded-lg bg-[rgba(255,255,255,0.05)] " />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="relative overflow-hidden">
                <img
                  alt=""
                  src="https://media.istockphoto.com/id/1341396860/photo/abstract-3d-rendering-twisted-liquid-shape-black-background.jpg?s=612x612&w=0&k=20&c=AvQJAdcqMliI0Gw4v4nWqns7T85sMpvkunoiDTd_dVs="
                  className="h-80 object-cover w-full transform-gpu"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-black/10 to-none"></div>
              </div>
              <div className="p-6 pt-0 sm:p-10 sm:pt-4">
                <h3 className="text-sm/4 font-semibold text-pink-600 dark:text-pink-400">
                  Integrations
                </h3>
                <p className="mt-2 text-20 font-medium tracking-tight text-white ">
                  Connect your favorite tools
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-300">
                  Maecenas at augue sed elit dictum vulputate, in nisi aliquam
                  maximus arcu.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 dark:outline-white/15" />
          </div>

          <div
            ref={addToRefs}
            className="relative lg:col-span-2 cursor-pointer"
          >
            <div className="absolute inset-0 rounded-lg bg-[rgba(255,255,255,0.05)] max-lg:rounded-b-4xl lg:rounded-br-4xl " />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
              <div className="relative overflow-hidden">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1673640333938-6c071f33e4ce?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU3fHxmdXR1cmlzdGljJTIwbmV0d29ya3xlbnwwfHwwfHx8MA%3D%3D"
                  className="h-80 object-cover w-full transform-gpu"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-black/10 to-none"></div>
              </div>
              <div className="p-6 pt-0 sm:p-10 sm:pt-4">
                <h3 className="text-sm/4 font-semibold text-pink-600 dark:text-pink-400">
                  Network
                </h3>
                <p className="mt-2 text-20 font-medium tracking-tight text-white ">
                  Globally distributed CDN
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-300">
                  Aenean vulputate justo commodo auctor vehicula in malesuada
                  semper.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-br-4xl dark:outline-white/15" />
          </div>
        </div>
      </div>
    </div>
  );
}

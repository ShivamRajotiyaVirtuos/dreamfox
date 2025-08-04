
"use client";

import BannerTextReveal from "@/components/Text Reveal/bannertextreveal";
import { useEffect, useRef, useState } from "react";

const CardGrid = () => {
    const [showContent, setShowContent] = useState(false);
    const [showSkeletons, setShowSkeletons] = useState(false);
    const [showTextReveal, setShowTextReveal] = useState(false);
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);
    const containerRef = useRef(null);
    // const titleRef = useRef(null);
    const descriptionRef = useRef(null);

    const cardData = [
        {
            id: 1,
            title: "Face Follow Cursor (Mascot)",
            image: "/api/placeholder/400/200",
            bgColor: "bg-green-600",
            icon: "😊",
        },
        {
            id: 2,
            title: "Momentum Based Hover (Inertia)",
            image: "/api/placeholder/400/200",
            bgColor: "bg-gray-700",
            showTeam: true,
        },
        {
            id: 3,
            title: "Scaling Element on Scroll (GSAP Flip)",
            image: "/api/placeholder/400/200",
            bgColor: "bg-orange-100",
            textColor: "text-black",
        },
        {
            id: 4,
            title: "Falling 2D Objects (MatterJS)",
            image: "/api/placeholder/400/200",
            bgColor: "bg-orange-50",
            showMatterJS: true,
            textColor: "text-black",
        },
        {
            id: 5,
            title: "Global Parallax Setup",
            image: "/api/placeholder/400/200",
            bgColor: "bg-teal-700",
        },
        {
            id: 6,
            title: "Scaling Hamburger Navigation",
            image: "/api/placeholder/400/200",
            bgColor: "bg-gray-100",
            textColor: "text-black",
            showNav: true,
        },
        {
            id: 7,
            title: "Button with CSS Character Stagger",
            image: "/api/placeholder/400/200",
            bgColor: "bg-gray-800",
            showButton: true,
        },
        {
            id: 8,
            title: "Parallax Image Layers",
            image: "/api/placeholder/400/200",
            bgColor: "bg-blue-900",
            showParallax: true,
        },
        {
            id: 9,
            title: "Image Trail Following Cursor",
            image: "/api/placeholder/400/200",
            bgColor: "bg-gray-800",
            showImageTrail: true,
        },
    ];

    // Helper function to determine card position (left, center, right)
    const getCardPosition = (index) => {
        const col = index % 3;
        if (col === 0) return "left";
        if (col === 1) return "center";
        return "right";
    };

    // Helper function to get initial transform based on position for skeleton cards
    const getSkeletonInitialTransform = (position, index) => {
        const row = Math.floor(index / 3);
        const baseDelay = row * 200; // Stagger rows

        switch (position) {
            case "left":
                return {
                    transform: "translateX(-200px) translateY(40px) rotateY(20deg) scale(0.8)",
                    animationDelay: `${baseDelay}ms`
                };
            case "center":
                return {
                    transform: "translateY(100px) rotateX(30deg) scale(0.7)",
                    animationDelay: `${baseDelay + 100}ms`
                };
            case "right":
                return {
                    transform: "translateX(200px) translateY(40px) rotateY(-20deg) scale(0.8)",
                    animationDelay: `${baseDelay + 200}ms`
                };
            default:
                return {
                    transform: "translateY(80px) scale(0.7)",
                    animationDelay: `${baseDelay}ms`
                };
        }
    };

    const getDistance = (x1, y1, x2, y2) => {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    };

    const createRippleEffect = (centerIndex) => {
        const centerCard = cardsRef.current[centerIndex];
        if (!centerCard || !containerRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        const centerRect = centerCard.getBoundingClientRect();
        const centerX = centerRect.left + centerRect.width / 2 - containerRect.left;
        const centerY = centerRect.top + centerRect.height / 2 - containerRect.top;

        const rippleData = cardsRef.current
            .map((card, index) => {
                if (!card) return null;
                const cardRect = card.getBoundingClientRect();
                const cardX = cardRect.left + cardRect.width / 2 - containerRect.left;
                const cardY = cardRect.top + cardRect.height / 2 - containerRect.top;
                const distance = getDistance(centerX, centerY, cardX, cardY);
                const delay = Math.min(distance * 2, 1000);
                return { card, delay, distance, index };
            })
            .filter(Boolean);

        rippleData.sort((a, b) => a.distance - b.distance);

        rippleData.forEach(({ card, delay }) => {
            card.style.visibility = "visible";
            card.style.display = "block";

            setTimeout(() => {
                card.style.transition = "all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
                card.style.transform = "translateY(-10px) scale(1.05) rotateX(0deg)";
                card.style.opacity = "0.8";
                card.style.filter = "blur(2px) brightness(1.1)";

                setTimeout(() => {
                    card.style.transition = "all 0.8s cubic-bezier(0.23, 1, 0.32, 1)";
                    card.style.transform = "translateY(0px) scale(1) rotateX(0deg)";
                    card.style.opacity = "1";
                    card.style.filter = "blur(0px) brightness(1)";
                }, 200);
            }, delay);
        });
    };

    // Cascade animation - diagonal wave
    const createCascadeEffect = () => {
        if (!cardsRef.current || cardsRef.current.length === 0) return;

        cardsRef.current.forEach((card, index) => {
            if (!card) return;

            card.style.visibility = "visible";
            card.style.display = "block";

            const delay = index * 120;
            setTimeout(() => {
                card.style.transition = "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)";
                card.style.transform =
                    "translateY(0px) scale(1) rotateX(0deg) rotateZ(0deg)";
                card.style.opacity = "1";
                card.style.filter = "blur(0px) brightness(1)";
            }, delay);
        });
    };

    // Random animation selector
    const getRandomAnimation = () => {
        const animations = [createCascadeEffect];
        const randomIndex = Math.floor(Math.random() * animations.length);
        return animations[randomIndex];
    };

    // Text reveal animation
    // const animateTextReveal = () => {
    //     if (titleRef.current) {
    //         const title = titleRef.current;
    //         const text = title.textContent;
    //         title.innerHTML = '';

    //         const words = text.split(' ');
    //         words.forEach((word, wordIndex) => {
    //             const wordSpan = document.createElement('span');
    //             wordSpan.style.display = 'inline-block';
    //             wordSpan.style.overflow = 'hidden';
    //             wordSpan.style.marginRight = '0.25em';

    //             const letters = word.split('');
    //             letters.forEach((letter, letterIndex) => {
    //                 const letterSpan = document.createElement('span');
    //                 letterSpan.textContent = letter;
    //                 letterSpan.style.display = 'inline-block';
    //                 letterSpan.style.transform = 'translateY(100%) rotateX(90deg)';
    //                 letterSpan.style.opacity = '0';
    //                 letterSpan.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    //                 letterSpan.style.transitionDelay = `${(wordIndex * 0.1) + (letterIndex * 0.05)}s`;

    //                 setTimeout(() => {
    //                     letterSpan.style.transform = 'translateY(0%) rotateX(0deg)';
    //                     letterSpan.style.opacity = '1';
    //                 }, 100);

    //                 wordSpan.appendChild(letterSpan);
    //             });

    //             title.appendChild(wordSpan);
    //         });
    //     }

    //     if (descriptionRef.current) {
    //         const description = descriptionRef.current;
    //         setTimeout(() => {
    //             description.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    //             description.style.transform = 'translateY(0px)';
    //             description.style.opacity = '1';
    //             description.style.filter = 'blur(0px)';
    //         }, 800);
    //     }
    // };

    useEffect(() => {
        // Text reveal animation on component mount
        setTimeout(() => {
            setShowTextReveal(true);
            // animateTextReveal();
        }, 500);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Trigger skeleton animations immediately on scroll
                        setShowSkeletons(true);

                        // Keep skeleton visible for 3 seconds
                        setTimeout(() => {
                            // Switch to real cards
                            setShowContent(true);

                            // Small delay to ensure DOM update, then animate
                            setTimeout(() => {
                                if (cardsRef.current && cardsRef.current.length > 0) {
                                    // Use random animation each time
                                    const randomAnimation = getRandomAnimation();
                                    if (randomAnimation === createRippleEffect) {
                                        randomAnimation(0); // Pass center index for ripple
                                    } else {
                                        randomAnimation();
                                    }
                                }
                            }, 100);
                        }, 3000); // 3 second skeleton display
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const SkeletonCard = ({ index }) => {
        const position = getCardPosition(index);
        const { transform, animationDelay } = getSkeletonInitialTransform(position, index);

        return (
            <div
                className={`bg-gray-800/30 rounded-2xl p-6 h-64 backdrop-blur-sm border border-gray-700/50 relative overflow-hidden ${showSkeletons ? 'skeleton-animate' : ''
                    }`}
                style={{
                    transform: showSkeletons ? 'translateY(0px) scale(1) rotateX(0deg) rotateY(0deg)' : transform,
                    opacity: showSkeletons ? 1 : 0,
                    filter: showSkeletons ? 'blur(0px)' : 'blur(4px)',
                    transition: 'all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    transitionDelay: animationDelay,
                    transformStyle: "preserve-3d",
                    perspective: "1000px",
                }}
            >
                {/* Enhanced shimmer effect overlay */}
                <div
                    className="absolute inset-0 opacity-60"
                    style={{
                        background:
                            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
                        animation: `shimmer 2s infinite ${index * 0.2}s`,
                        transform: "translateX(-100%)",
                    }}
                ></div>

                {/* Animated skeleton content */}
                <div
                    className="h-4 bg-gray-600/50 rounded mb-4 w-3/4"
                    style={{
                        animation: `skeletonPulse 1.5s ease-in-out infinite ${index * 0.1}s`
                    }}
                ></div>
                <div
                    className="h-32 bg-gray-600/50 rounded mb-4"
                    style={{
                        animation: `skeletonPulse 1.5s ease-in-out infinite ${index * 0.1 + 0.2}s`
                    }}
                ></div>
                <div
                    className="h-3 bg-gray-600/50 rounded w-1/2"
                    style={{
                        animation: `skeletonPulse 1.5s ease-in-out infinite ${index * 0.1 + 0.4}s`
                    }}
                ></div>

                {/* Floating particles effect */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-blue-400/30 rounded-full animate-ping"></div>
                <div
                    className="absolute bottom-4 left-2 w-1 h-1 bg-purple-400/30 rounded-full animate-ping"
                    style={{ animationDelay: "1s" }}
                ></div>

                {/* Scan line effect */}
                <div
                    className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
                    style={{
                        animation: `scanLine 3s ease-in-out infinite ${index * 0.3}s`,
                    }}
                ></div>
            </div>
        );
    };

    const Card = ({ card, index }) => (
        <div
            ref={(el) => (cardsRef.current[index] = el)}
            className={`${card.bgColor
                } rounded-2xl p-6 h-64 relative overflow-hidden cursor-pointer ${card.textColor || "text-white"
                } group shadow-2xl backdrop-blur-sm`}
            style={{
                transform: "translateY(80px) scale(0.7) rotateX(30deg)",
                opacity: 0,
                filter: "blur(8px) brightness(0.7)",
                willChange: "transform, opacity, filter",
                boxShadow:
                    "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(59, 130, 246, 0.1)",
                visibility: "hidden",
            }}
        >
            {/* Ripple overlay effect */}
            <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{
                    background:
                        "radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, transparent 70%)",
                    animation: "ripple 1.5s ease-out infinite",
                }}
            ></div>

            {/* Content based on card type */}
            {card.icon && (
                <div className="text-6xl mb-4 flex items-center justify-center">
                    <div className="relative transform group-hover:scale-110 transition-all duration-500">
                        {card.icon}
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-xs">
                            <span className="animate-pulse">✨</span>
                        </div>
                    </div>
                </div>
            )}

            {card.showTeam && (
                <div className="flex justify-center mb-4">
                    <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map((i) => (
                            <div
                                key={i}
                                className="w-12 h-12 bg-gray-600 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold transform group-hover:scale-110 transition-all duration-500"
                                style={{
                                    transitionDelay: `${i * 100}ms`,
                                    boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                                }}
                            >
                                {i}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {card.showMatterJS && (
                <div className="text-center mb-4">
                    <div className="text-6xl font-bold mb-2 transform group-hover:scale-105 transition-all duration-500">
                        MatterJS
                    </div>
                    <div className="flex justify-center space-x-2">
                        {["😊", "😊", "😊"].map((emoji, i) => (
                            <span
                                key={i}
                                className="text-2xl transform group-hover:animate-bounce transition-all duration-300"
                                style={{ animationDelay: `${i * 150}ms` }}
                            >
                                {emoji}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {card.showNav && (
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-xl transform group-hover:scale-105 transition-all duration-500">
                    <div className="space-y-1">
                        {[
                            "Home",
                            "Portfolio",
                            "Our Expertise",
                            "Services",
                            "About",
                            "Contact",
                        ].map((item, i) => (
                            <div
                                key={item}
                                className="text-xs text-gray-600 transform transition-all duration-300 hover:text-gray-900 hover:translate-x-1"
                                style={{ transitionDelay: `${i * 50}ms` }}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {card.showButton && (
                <div className="flex items-center justify-center h-full">
                    <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transform hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl">
                        Staggering Button
                    </button>
                </div>
            )}

            {card.showParallax && (
                <div className="text-center">
                    <div className="text-4xl font-bold mb-4 transform group-hover:scale-105 transition-all duration-500">
                        Parallax
                    </div>
                    <div className="w-full h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg opacity-80 transform group-hover:opacity-100 transition-all duration-500 shadow-lg"></div>
                </div>
            )}

            {card.showImageTrail && (
                <div className="flex justify-center items-center h-full">
                    <div className="grid grid-cols-3 gap-2">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div
                                key={i}
                                className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded transform group-hover:scale-110 transition-all duration-500 shadow-md"
                                style={{ transitionDelay: `${i * 75}ms` }}
                            ></div>
                        ))}
                    </div>
                </div>
            )}

            <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-sm font-medium transform group-hover:translate-y-[-4px] transition-all duration-500">
                    {card.title}
                </h3>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-pink-900 text-white flex flex-col items-center justify-center p-8 relative overflow-hidden">
            {/* Custom keyframes styles */}
            <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }

        @keyframes skeletonPulse {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.02);
          }
        }

        @keyframes scanLine {
          0% {
            top: 0%;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }

        .skeleton-animate {
          animation: skeletonSlideIn 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        @keyframes skeletonSlideIn {
          0% {
            opacity: 0;
            filter: blur(6px);
          }
          60% {
            opacity: 0.8;
            filter: blur(2px);
          }
          100% {
            opacity: 1;
            filter: blur(0px);
          }
        }
      `}</style>

            <header className="flex justify-center items-center min-h-screen">
                <div className="text-center">
                    <BannerTextReveal
                        titleClassName="text-120 font-semibold "
                        descriptionClassName="text-30 max-w-7xl"
                        title="Work &nbsp;Portfolio"
                        description="Discover our latest projects and creative solutions that showcase our expertise in web development, design, and digital innovation."
                    />
                </div>
            </header>

            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
                <div
                    className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
                    style={{ animationDelay: "2s" }}
                ></div>
                <div
                    className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
                    style={{ animationDelay: "4s" }}
                ></div>
            </div>

            <div className="w-full container relative z-10 mb-48">
                <div
                    ref={containerRef}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    style={{ perspective: "1000px" }}
                >
                    {showContent
                        ? cardData.map((card, index) => (
                            <Card key={card.id} card={card} index={index} />
                        ))
                        : cardData.map((_, index) => (
                            <SkeletonCard key={index} index={index} />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default CardGrid;

// "use client";

// import { useEffect, useRef, useState } from "react";

// const CardGrid = () => {
//   const [showContent, setShowContent] = useState(false);
//   const sectionRef = useRef(null);
//   const cardsRef = useRef([]);
//   const containerRef = useRef(null);

//   const cardData = [
//     {
//       id: 1,
//       title: "Face Follow Cursor (Mascot)",
//       image: "/api/placeholder/400/200",
//       bgColor: "bg-green-600",
//       icon: "😊",
//     },
//     {
//       id: 2,
//       title: "Momentum Based Hover (Inertia)",
//       image: "/api/placeholder/400/200",
//       bgColor: "bg-gray-700",
//       showTeam: true,
//     },
//     {
//       id: 3,
//       title: "Scaling Element on Scroll (GSAP Flip)",
//       image: "/api/placeholder/400/200",
//       bgColor: "bg-orange-100",
//       textColor: "text-black",
//     },
//     {
//       id: 4,
//       title: "Falling 2D Objects (MatterJS)",
//       image: "/api/placeholder/400/200",
//       bgColor: "bg-orange-50",
//       showMatterJS: true,
//       textColor: "text-black",
//     },
//     {
//       id: 5,
//       title: "Global Parallax Setup",
//       image: "/api/placeholder/400/200",
//       bgColor: "bg-teal-700",
//     },
//     {
//       id: 6,
//       title: "Scaling Hamburger Navigation",
//       image: "/api/placeholder/400/200",
//       bgColor: "bg-gray-100",
//       textColor: "text-black",
//       showNav: true,
//     },
//     {
//       id: 7,
//       title: "Button with CSS Character Stagger",
//       image: "/api/placeholder/400/200",
//       bgColor: "bg-gray-800",
//       showButton: true,
//     },
//     {
//       id: 8,
//       title: "Parallax Image Layers",
//       image: "/api/placeholder/400/200",
//       bgColor: "bg-blue-900",
//       showParallax: true,
//     },
//     {
//       id: 9,
//       title: "Image Trail Following Cursor",
//       image: "/api/placeholder/400/200",
//       bgColor: "bg-gray-800",
//       showImageTrail: true,
//     },
//   ];

//   // Helper function to determine card position (left, center, right)
//   const getCardPosition = (index) => {
//     const col = index % 3;
//     if (col === 0) return "left";
//     if (col === 1) return "center";
//     return "right";
//   };

//   // Helper function to get initial transform based on position
//   const getInitialTransform = (position) => {
//     switch (position) {
//       case "left":
//         return "translateX(-120px) translateY(60px) rotateY(45deg) rotateX(20deg) scale(0.7)";
//       case "center":
//         return "translateY(150px) rotateX(60deg) scale(0.6)";
//       case "right":
//         return "translateX(120px) translateY(60px) rotateY(-45deg) rotateX(20deg) scale(0.7)";
//       default:
//         return "translateY(80px) scale(0.7)";
//     }
//   };

//   const getDistance = (x1, y1, x2, y2) => {
//     return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
//   };

//   const createRippleEffect = (centerIndex) => {
//     const centerCard = cardsRef.current[centerIndex];
//     if (!centerCard || !containerRef.current) return;

//     const containerRect = containerRef.current.getBoundingClientRect();
//     const centerRect = centerCard.getBoundingClientRect();
//     const centerX = centerRect.left + centerRect.width / 2 - containerRect.left;
//     const centerY = centerRect.top + centerRect.height / 2 - containerRect.top;

//     const rippleData = cardsRef.current
//       .map((card, index) => {
//         if (!card) return null;
//         const cardRect = card.getBoundingClientRect();
//         const cardX = cardRect.left + cardRect.width / 2 - containerRect.left;
//         const cardY = cardRect.top + cardRect.height / 2 - containerRect.top;
//         const distance = getDistance(centerX, centerY, cardX, cardY);
//         const delay = Math.min(distance * 2, 1000);
//         return { card, delay, distance, index };
//       })
//       .filter(Boolean);

//     rippleData.sort((a, b) => a.distance - b.distance);

//     rippleData.forEach(({ card, delay }) => {
//       card.style.visibility = "visible";
//       card.style.display = "block";

//       setTimeout(() => {
//         card.style.transition = "all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
//         card.style.transform = "translateY(-10px) scale(1.05) rotateX(0deg)";
//         card.style.opacity = "0.8";
//         card.style.filter = "blur(2px) brightness(1.1)";

//         setTimeout(() => {
//           card.style.transition = "all 0.8s cubic-bezier(0.23, 1, 0.32, 1)";
//           card.style.transform = "translateY(0px) scale(1) rotateX(0deg)";
//           card.style.opacity = "1";
//           card.style.filter = "blur(0px) brightness(1)";
//         }, 200);
//       }, delay);
//     });
//   };

//   // Cascade animation - diagonal wave
//   const createCascadeEffect = () => {
//     if (!cardsRef.current || cardsRef.current.length === 0) return;

//     cardsRef.current.forEach((card, index) => {
//       if (!card) return;

//       card.style.visibility = "visible";
//       card.style.display = "block";

//       const delay = index * 120;
//       setTimeout(() => {
//         card.style.transition = "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)";
//         card.style.transform =
//           "translateY(0px) scale(1) rotateX(0deg) rotateZ(0deg)";
//         card.style.opacity = "1";
//         card.style.filter = "blur(0px) brightness(1)";
//       }, delay);
//     });
//   };

//   // Spiral animation - from center outward
//   const createSpiralEffect = () => {
//     if (!cardsRef.current || cardsRef.current.length === 0) return;

//     const centerIndex = Math.floor(cardsRef.current.length / 2);
//     const spiralOrder = [];

//     // Create spiral pattern
//     for (let distance = 0; distance <= centerIndex; distance++) {
//       for (let i = 0; i < cardsRef.current.length; i++) {
//         if (
//           Math.abs(i - centerIndex) === distance &&
//           !spiralOrder.includes(i)
//         ) {
//           spiralOrder.push(i);
//         }
//       }
//     }

//     spiralOrder.forEach((cardIndex, spiralIndex) => {
//       const card = cardsRef.current[cardIndex];
//       if (!card) return;

//       card.style.visibility = "visible";
//       card.style.display = "block";

//       const delay = spiralIndex * 150;
//       setTimeout(() => {
//         card.style.transition = "all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)";
//         card.style.transform =
//           "translateY(0px) scale(1) rotateX(0deg) rotateY(0deg)";
//         card.style.opacity = "1";
//         card.style.filter = "blur(0px) brightness(1)";
//       }, delay);
//     });
//   };

//   // Random pop animation
//   const createRandomPopEffect = () => {
//     if (!cardsRef.current || cardsRef.current.length === 0) return;

//     const indices = [...Array(cardsRef.current.length).keys()];
//     // Shuffle array
//     for (let i = indices.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [indices[i], indices[j]] = [indices[j], indices[i]];
//     }

//     indices.forEach((cardIndex, orderIndex) => {
//       const card = cardsRef.current[cardIndex];
//       if (!card) return;

//       card.style.visibility = "visible";
//       card.style.display = "block";

//       const delay = orderIndex * 100;
//       setTimeout(() => {
//         card.style.transition =
//           "all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
//         card.style.transform = "translateY(0px) scale(1) rotateX(0deg)";
//         card.style.opacity = "1";
//         card.style.filter = "blur(0px) brightness(1)";
//       }, delay);
//     });
//   };

//   // Wave animation - left to right
//   const createWaveEffect = () => {
//     if (!cardsRef.current || cardsRef.current.length === 0) return;

//     cardsRef.current.forEach((card, index) => {
//       if (!card) return;

//       card.style.visibility = "visible";
//       card.style.display = "block";

//       const delay = (index % 3) * 200 + Math.floor(index / 3) * 100;
//       setTimeout(() => {
//         card.style.transition = "all 0.9s cubic-bezier(0.23, 1, 0.32, 1)";
//         card.style.transform = "translateY(0px) scale(1) rotateX(0deg)";
//         card.style.opacity = "1";
//         card.style.filter = "blur(0px) brightness(1)";
//       }, delay);
//     });
//   };

//   // Random animation selector
//   const getRandomAnimation = () => {
//     const animations = [createCascadeEffect];
//     const randomIndex = Math.floor(Math.random() * animations.length);
//     return animations[randomIndex];
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             // Keep skeleton visible for 1 second
//             setTimeout(() => {
//               // Switch to real cards
//               setShowContent(true);

//               // Small delay to ensure DOM update, then animate
//               setTimeout(() => {
//                 if (cardsRef.current && cardsRef.current.length > 0) {
//                   // Use random animation each time
//                   const randomAnimation = getRandomAnimation();
//                   if (randomAnimation === createRippleEffect) {
//                     randomAnimation(0); // Pass center index for ripple
//                   } else {
//                     randomAnimation();
//                   }
//                 }
//               }, 100);
//             }, 3000); // 1 second skeleton display
//           }
//         });
//       },
//       { threshold: 0.6 }
//     );

//     if (containerRef.current) {
//       observer.observe(containerRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const SkeletonCard = ({ index }) => {
//     const position = getCardPosition(index);
//     const initialTransform = getInitialTransform(position);

//     return (
//       <div
//         className="bg-gray-800/30 rounded-2xl p-6 h-64 backdrop-blur-sm border border-gray-700/50 relative overflow-hidden"
//         style={{
//           transform: initialTransform,
//           opacity: 0,
//           filter: "blur(4px)",
//           animation: `skeletonSlideIn 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards ${
//             index * 0.15
//           }s`,
//           transformStyle: "preserve-3d",
//           perspective: "1000px",
//         }}
//       >
//         {/* Shimmer effect overlay */}
//         <div
//           className="absolute inset-0 opacity-60"
//           style={{
//             background:
//               "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
//             animation: `shimmer 2s infinite ${index * 0.2}s`,
//             transform: "translateX(-100%)",
//           }}
//         ></div>

//         <div className="h-4 bg-gray-600/50 rounded mb-4 w-3/4 animate-pulse"></div>
//         <div className="h-32 bg-gray-600/50 rounded mb-4 animate-pulse"></div>
//         <div className="h-3 bg-gray-600/50 rounded w-1/2 animate-pulse"></div>

//         {/* Floating particles effect */}
//         <div className="absolute top-2 right-2 w-2 h-2 bg-blue-400/30 rounded-full animate-ping"></div>
//         <div
//           className="absolute bottom-4 left-2 w-1 h-1 bg-purple-400/30 rounded-full animate-ping"
//           style={{ animationDelay: "1s" }}
//         ></div>
//       </div>
//     );
//   };

//   const Card = ({ card, index }) => (
//     <div
//       ref={(el) => (cardsRef.current[index] = el)}
//       className={`${
//         card.bgColor
//       } rounded-2xl p-6 h-64 relative overflow-hidden cursor-pointer ${
//         card.textColor || "text-white"
//       } group shadow-2xl backdrop-blur-sm`}
//       style={{
//         transform: "translateY(80px) scale(0.7) rotateX(30deg)",
//         opacity: 0,
//         filter: "blur(8px) brightness(0.7)",
//         willChange: "transform, opacity, filter",
//         boxShadow:
//           "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(59, 130, 246, 0.1)",
//         visibility: "hidden", // default hidden, will be made visible during ripple
//       }}
//     >
//       {/* Ripple overlay effect */}
//       <div
//         className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
//         style={{
//           background:
//             "radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, transparent 70%)",
//           animation: "ripple 1.5s ease-out infinite",
//         }}
//       ></div>

//       {/* Content based on card type */}
//       {card.icon && (
//         <div className="text-6xl mb-4 flex items-center justify-center">
//           <div className="relative transform group-hover:scale-110 transition-all duration-500">
//             {card.icon}
//             <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-xs">
//               <span className="animate-pulse">✨</span>
//             </div>
//           </div>
//         </div>
//       )}

//       {card.showTeam && (
//         <div className="flex justify-center mb-4">
//           <div className="flex -space-x-2">
//             {[1, 2, 3, 4].map((i) => (
//               <div
//                 key={i}
//                 className="w-12 h-12 bg-gray-600 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold transform group-hover:scale-110 transition-all duration-500"
//                 style={{
//                   transitionDelay: `${i * 100}ms`,
//                   boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
//                 }}
//               >
//                 {i}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {card.showMatterJS && (
//         <div className="text-center mb-4">
//           <div className="text-6xl font-bold mb-2 transform group-hover:scale-105 transition-all duration-500">
//             MatterJS
//           </div>
//           <div className="flex justify-center space-x-2">
//             {["😊", "😊", "😊"].map((emoji, i) => (
//               <span
//                 key={i}
//                 className="text-2xl transform group-hover:animate-bounce transition-all duration-300"
//                 style={{ animationDelay: `${i * 150}ms` }}
//               >
//                 {emoji}
//               </span>
//             ))}
//           </div>
//         </div>
//       )}

//       {card.showNav && (
//         <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-xl transform group-hover:scale-105 transition-all duration-500">
//           <div className="space-y-1">
//             {[
//               "Home",
//               "Portfolio",
//               "Our Expertise",
//               "Services",
//               "About",
//               "Contact",
//             ].map((item, i) => (
//               <div
//                 key={item}
//                 className="text-xs text-gray-600 transform transition-all duration-300 hover:text-gray-900 hover:translate-x-1"
//                 style={{ transitionDelay: `${i * 50}ms` }}
//               >
//                 {item}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {card.showButton && (
//         <div className="flex items-center justify-center h-full">
//           <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transform hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl">
//             Staggering Button
//           </button>
//         </div>
//       )}

//       {card.showParallax && (
//         <div className="text-center">
//           <div className="text-4xl font-bold mb-4 transform group-hover:scale-105 transition-all duration-500">
//             Parallax
//           </div>
//           <div className="w-full h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg opacity-80 transform group-hover:opacity-100 transition-all duration-500 shadow-lg"></div>
//         </div>
//       )}

//       {card.showImageTrail && (
//         <div className="flex justify-center items-center h-full">
//           <div className="grid grid-cols-3 gap-2">
//             {[1, 2, 3, 4, 5, 6].map((i) => (
//               <div
//                 key={i}
//                 className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded transform group-hover:scale-110 transition-all duration-500 shadow-md"
//                 style={{ transitionDelay: `${i * 75}ms` }}
//               ></div>
//             ))}
//           </div>
//         </div>
//       )}

//       <div className="absolute bottom-4 left-4 right-4">
//         <h3 className="text-sm font-medium transform group-hover:translate-y-[-4px] transition-all duration-500">
//           {card.title}
//         </h3>
//       </div>
//     </div>
//   );

//   return (
//     <div
//       ref={containerRef}
//       className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-pink-900 text-white flex flex-col  items-center justify-center p-8 relative overflow-hidden"
//     >
//       {/* <header className="flex justify-center items-center min-h-screen">
//         <div className="text-center">
//           <h1 className="text-120 font-bold tracking-wide mb-4 text-white">
//             Work Portfolio
//           </h1>
//           <p className="text-30 text-gray-400 container">
//             Scroll down to explore the services Lorem ipsum dolor sit amet,
//             consectetur adipisicing elit. Dolorem accusantium at impedit
//             distinctio, debitis sequi excepturi ullam id inventore nisi optio
//             rem, soluta .
//           </p>
//         </div>
//       </header> */}
//       {/* Custom keyframes styles */}
//       <style jsx>{`
//         @keyframes skeletonSlideIn {
//           0% {
//             opacity: 0;
//             filter: blur(6px);
//           }
//           60% {
//             opacity: 0.8;
//             filter: blur(2px);
//           }
//           100% {
//             transform: translateY(0px) scale(1) rotateX(0deg) rotateY(0deg);
//             opacity: 1;
//             filter: blur(0px);
//           }
//         }

//         @keyframes shimmer {
//           0% {
//             transform: translateX(-100%);
//           }
//           100% {
//             transform: translateX(200%);
//           }
//         }

//         // @keyframes ripple {
//         //     0% {
//         //         transform: scale(0);
//         //         opacity: 0.8;
//         //     }
//         //     100% {
//         //         transform: scale(4);
//         //         opacity: 0;
//         //     }
//         // }
//       `}</style>

//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
//         <div
//           className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
//           style={{ animationDelay: "2s" }}
//         ></div>
//         <div
//           className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
//           style={{ animationDelay: "4s" }}
//         ></div>
//       </div>

//       <div className="w-full container relative z-10">
//         <div
//           ref={sectionRef}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//           style={{ perspective: "1000px" }}
//         >
//           {showContent
//             ? cardData.map((card, index) => (
//                 <Card key={card.id} card={card} index={index} />
//               ))
//             : cardData.map((_, index) => (
//                 <SkeletonCard key={index} index={index} />
//               ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardGrid;

// 'use client';

// import { useEffect, useRef, useState } from 'react';

// const CardGrid = () => {
//     const [showContent, setShowContent] = useState(false);
//     const sectionRef = useRef(null);
//     const cardsRef = useRef([]);
//     const containerRef = useRef(null);

//     const cardData = [
//         {
//             id: 1,
//             title: 'Face Follow Cursor (Mascot)',
//             image: '/api/placeholder/400/200',
//             bgColor: 'bg-green-600',
//             icon: '😊',
//         },
//         {
//             id: 2,
//             title: 'Momentum Based Hover (Inertia)',
//             image: '/api/placeholder/400/200',
//             bgColor: 'bg-gray-700',
//             showTeam: true,
//         },
//         {
//             id: 3,
//             title: 'Scaling Element on Scroll (GSAP Flip)',
//             image: '/api/placeholder/400/200',
//             bgColor: 'bg-orange-100',
//             textColor: 'text-black',
//         },
//         {
//             id: 4,
//             title: 'Falling 2D Objects (MatterJS)',
//             image: '/api/placeholder/400/200',
//             bgColor: 'bg-orange-50',
//             showMatterJS: true,
//             textColor: 'text-black',
//         },
//         {
//             id: 5,
//             title: 'Global Parallax Setup',
//             image: '/api/placeholder/400/200',
//             bgColor: 'bg-teal-700',
//         },
//         {
//             id: 6,
//             title: 'Scaling Hamburger Navigation',
//             image: '/api/placeholder/400/200',
//             bgColor: 'bg-gray-100',
//             textColor: 'text-black',
//             showNav: true,
//         },
//         {
//             id: 7,
//             title: 'Button with CSS Character Stagger',
//             image: '/api/placeholder/400/200',
//             bgColor: 'bg-gray-800',
//             showButton: true,
//         },
//         {
//             id: 8,
//             title: 'Parallax Image Layers',
//             image: '/api/placeholder/400/200',
//             bgColor: 'bg-blue-900',
//             showParallax: true,
//         },
//         {
//             id: 9,
//             title: 'Image Trail Following Cursor',
//             image: '/api/placeholder/400/200',
//             bgColor: 'bg-gray-800',
//             showImageTrail: true,
//         },
//     ];

//     const getDistance = (x1, y1, x2, y2) => {
//         return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
//     };

//     const createRippleEffect = (centerIndex) => {
//         const centerCard = cardsRef.current[centerIndex];
//         if (!centerCard || !containerRef.current) return;

//         const containerRect = containerRef.current.getBoundingClientRect();
//         const centerRect = centerCard.getBoundingClientRect();
//         const centerX = centerRect.left + centerRect.width / 2 - containerRect.left;
//         const centerY = centerRect.top + centerRect.height / 2 - containerRect.top;

//         const rippleData = cardsRef.current.map((card, index) => {
//             if (!card) return null;
//             const cardRect = card.getBoundingClientRect();
//             const cardX = cardRect.left + cardRect.width / 2 - containerRect.left;
//             const cardY = cardRect.top + cardRect.height / 2 - containerRect.top;
//             const distance = getDistance(centerX, centerY, cardX, cardY);
//             const delay = Math.min(distance * 2, 1000);
//             return { card, delay, distance, index };
//         }).filter(Boolean);

//         rippleData.sort((a, b) => a.distance - b.distance);

//         rippleData.forEach(({ card, delay }) => {
//             card.style.visibility = 'visible';
//             card.style.display = 'block';

//             setTimeout(() => {
//                 card.style.transition = 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
//                 card.style.transform = 'translateY(-10px) scale(1.05) rotateX(0deg)';
//                 card.style.opacity = '0.8';
//                 card.style.filter = 'blur(2px) brightness(1.1)';

//                 setTimeout(() => {
//                     card.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
//                     card.style.transform = 'translateY(0px) scale(1) rotateX(0deg)';
//                     card.style.opacity = '1';
//                     card.style.filter = 'blur(0px) brightness(1)';
//                 }, 200);
//             }, delay);
//         });
//     };

//     // Add these animation functions before the useEffect

//     // Cascade animation - diagonal wave
//     const createCascadeEffect = () => {
//         if (!cardsRef.current || cardsRef.current.length === 0) return;

//         cardsRef.current.forEach((card, index) => {
//             if (!card) return;

//             card.style.visibility = 'visible';
//             card.style.display = 'block';

//             const delay = index * 120;
//             setTimeout(() => {
//                 card.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
//                 card.style.transform = 'translateY(0px) scale(1) rotateX(0deg) rotateZ(0deg)';
//                 card.style.opacity = '1';
//                 card.style.filter = 'blur(0px) brightness(1)';
//             }, delay);
//         });
//     };

//     // Spiral animation - from center outward
//     const createSpiralEffect = () => {
//         if (!cardsRef.current || cardsRef.current.length === 0) return;

//         const centerIndex = Math.floor(cardsRef.current.length / 2);
//         const spiralOrder = [];

//         // Create spiral pattern
//         for (let distance = 0; distance <= centerIndex; distance++) {
//             for (let i = 0; i < cardsRef.current.length; i++) {
//                 if (Math.abs(i - centerIndex) === distance && !spiralOrder.includes(i)) {
//                     spiralOrder.push(i);
//                 }
//             }
//         }

//         spiralOrder.forEach((cardIndex, spiralIndex) => {
//             const card = cardsRef.current[cardIndex];
//             if (!card) return;

//             card.style.visibility = 'visible';
//             card.style.display = 'block';

//             const delay = spiralIndex * 150;
//             setTimeout(() => {
//                 card.style.transition = 'all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
//                 card.style.transform = 'translateY(0px) scale(1) rotateX(0deg) rotateY(0deg)';
//                 card.style.opacity = '1';
//                 card.style.filter = 'blur(0px) brightness(1)';
//             }, delay);
//         });
//     };

//     // Random pop animation
//     const createRandomPopEffect = () => {
//         if (!cardsRef.current || cardsRef.current.length === 0) return;

//         const indices = [...Array(cardsRef.current.length).keys()];
//         // Shuffle array
//         for (let i = indices.length - 1; i > 0; i--) {
//             const j = Math.floor(Math.random() * (i + 1));
//             [indices[i], indices[j]] = [indices[j], indices[i]];
//         }

//         indices.forEach((cardIndex, orderIndex) => {
//             const card = cardsRef.current[cardIndex];
//             if (!card) return;

//             card.style.visibility = 'visible';
//             card.style.display = 'block';

//             const delay = orderIndex * 100;
//             setTimeout(() => {
//                 card.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
//                 card.style.transform = 'translateY(0px) scale(1) rotateX(0deg)';
//                 card.style.opacity = '1';
//                 card.style.filter = 'blur(0px) brightness(1)';
//             }, delay);
//         });
//     };

//     // Wave animation - left to right
//     const createWaveEffect = () => {
//         if (!cardsRef.current || cardsRef.current.length === 0) return;

//         cardsRef.current.forEach((card, index) => {
//             if (!card) return;

//             card.style.visibility = 'visible';
//             card.style.display = 'block';

//             const delay = (index % 3) * 200 + Math.floor(index / 3) * 100;
//             setTimeout(() => {
//                 card.style.transition = 'all 0.9s cubic-bezier(0.23, 1, 0.32, 1)';
//                 card.style.transform = 'translateY(0px) scale(1) rotateX(0deg)';
//                 card.style.opacity = '1';
//                 card.style.filter = 'blur(0px) brightness(1)';
//             }, delay);
//         });
//     };

//     // Random animation selector
//     const getRandomAnimation = () => {
//         const animations = [
//             // createRippleEffect,
//             createCascadeEffect,
//             //  createSpiralEffect,
//             //   createRandomPopEffect,
//             //    createWaveEffect
//             ];
//         const randomIndex = Math.floor(Math.random() * animations.length);
//         return animations[randomIndex];
//     };

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         // Keep skeleton visible for 1 second
//                         setTimeout(() => {
//                             // Switch to real cards
//                             setShowContent(true);

//                             // Small delay to ensure DOM update, then animate
//                             setTimeout(() => {
//                                 if (cardsRef.current && cardsRef.current.length > 0) {
//                                     // Use random animation each time
//                                     const randomAnimation = getRandomAnimation();
//                                     if (randomAnimation === createRippleEffect) {
//                                         randomAnimation(0); // Pass center index for ripple
//                                     } else {
//                                         randomAnimation();
//                                     }
//                                 }
//                             }, 100);
//                         }, 1000); // 1 second skeleton display
//                     }
//                 });
//             },
//             { threshold: 0.6 }
//         );

//         if (containerRef.current) {
//             observer.observe(containerRef.current);
//         }

//         return () => observer.disconnect();
//     }, []);
//     const SkeletonCard = ({ index }) => (
//         <div
//             className="bg-gray-800/30 rounded-2xl p-6 h-64 backdrop-blur-sm border border-gray-700/50"
//             style={{
//                 animation: `pulse 2s infinite ${index * 0.15}s`,
//             }}
//         >
//             <div className="h-4 bg-gray-600/50 rounded mb-4 w-3/4 animate-pulse"></div>
//             <div className="h-32 bg-gray-600/50 rounded mb-4 animate-pulse"></div>
//             <div className="h-3 bg-gray-600/50 rounded w-1/2 animate-pulse"></div>
//         </div>
//     );

//     const Card = ({ card, index }) => (
//         <div
//             ref={el => cardsRef.current[index] = el}
//             className={`${card.bgColor} rounded-2xl p-6 h-64 relative overflow-hidden cursor-pointer ${card.textColor || 'text-white'} group shadow-2xl backdrop-blur-sm`}
//             style={{
//                 transform: 'translateY(80px) scale(0.7) rotateX(30deg)',
//                 opacity: 0,
//                 filter: 'blur(8px) brightness(0.7)',
//                 willChange: 'transform, opacity, filter',
//                 boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(59, 130, 246, 0.1)',
//                 visibility: 'hidden', // 🔧 default hidden, will be made visible during ripple
//             }}
//         >
//             {/* Ripple overlay effect */}
//             <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
//                 style={{
//                     background: 'radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, transparent 70%)',
//                     animation: 'ripple 1.5s ease-out infinite'
//                 }}>
//             </div>

//             {/* Content based on card type */}
//             {card.icon && (
//                 <div className="text-6xl mb-4 flex items-center justify-center">
//                     <div className="relative transform group-hover:scale-110 transition-all duration-500">
//                         {card.icon}
//                         <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-xs">
//                             <span className="animate-pulse">✨</span>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {card.showTeam && (
//                 <div className="flex justify-center mb-4">
//                     <div className="flex -space-x-2">
//                         {[1, 2, 3, 4].map(i => (
//                             <div
//                                 key={i}
//                                 className="w-12 h-12 bg-gray-600 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold transform group-hover:scale-110 transition-all duration-500"
//                                 style={{
//                                     transitionDelay: `${i * 100}ms`,
//                                     boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
//                                 }}
//                             >
//                                 {i}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}

//             {card.showMatterJS && (
//                 <div className="text-center mb-4">
//                     <div className="text-6xl font-bold mb-2 transform group-hover:scale-105 transition-all duration-500">MatterJS</div>
//                     <div className="flex justify-center space-x-2">
//                         {['😊', '😊', '😊'].map((emoji, i) => (
//                             <span
//                                 key={i}
//                                 className="text-2xl transform group-hover:animate-bounce transition-all duration-300"
//                                 style={{ animationDelay: `${i * 150}ms` }}
//                             >
//                                 {emoji}
//                             </span>
//                         ))}
//                     </div>
//                 </div>
//             )}

//             {card.showNav && (
//                 <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-xl transform group-hover:scale-105 transition-all duration-500">
//                     <div className="space-y-1">
//                         {['Home', 'Portfolio', 'Our Expertise', 'Services', 'About', 'Contact'].map((item, i) => (
//                             <div
//                                 key={item}
//                                 className="text-xs text-gray-600 transform transition-all duration-300 hover:text-gray-900 hover:translate-x-1"
//                                 style={{ transitionDelay: `${i * 50}ms` }}
//                             >
//                                 {item}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}

//             {card.showButton && (
//                 <div className="flex items-center justify-center h-full">
//                     <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transform hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl">
//                         Staggering Button
//                     </button>
//                 </div>
//             )}

//             {card.showParallax && (
//                 <div className="text-center">
//                     <div className="text-4xl font-bold mb-4 transform group-hover:scale-105 transition-all duration-500">Parallax</div>
//                     <div className="w-full h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg opacity-80 transform group-hover:opacity-100 transition-all duration-500 shadow-lg"></div>
//                 </div>
//             )}

//             {card.showImageTrail && (
//                 <div className="flex justify-center items-center h-full">
//                     <div className="grid grid-cols-3 gap-2">
//                         {[1, 2, 3, 4, 5, 6].map(i => (
//                             <div
//                                 key={i}
//                                 className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded transform group-hover:scale-110 transition-all duration-500 shadow-md"
//                                 style={{ transitionDelay: `${i * 75}ms` }}
//                             ></div>
//                         ))}
//                     </div>
//                 </div>
//             )}

//             <div className="absolute bottom-4 left-4 right-4">
//                 <h3 className="text-sm font-medium transform group-hover:translate-y-[-4px] transition-all duration-500">{card.title}</h3>
//             </div>
//         </div>
//     );

//     return (
//         <div
//             ref={containerRef} // ✅ Attach containerRef here
//             className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-pink-900 text-white flex items-center justify-center p-8 relative overflow-hidden"
//         >
//             <div className="absolute inset-0 opacity-10">
//                 <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
//                 <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
//                 <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
//             </div>

//             <div className="w-full max-w-7xl relative z-10">
//                 <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {showContent
//                         ? cardData.map((card, index) => (
//                             <Card key={card.id} card={card} index={index} />
//                         ))
//                         : cardData.map((_, index) => (
//                             <SkeletonCard key={index} index={index} />
//                         ))}
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default CardGrid;

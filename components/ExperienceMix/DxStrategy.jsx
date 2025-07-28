"use client";

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DxStrategy = () => {
    const containerRef = useRef(null);
    const horizontalRef = useRef(null);
    const sectionsRef = useRef([]);
    const backgroundRef = useRef(null);
    const [currentSection, setCurrentSection] = useState(0);

    const timelineData = [
        {
            id: 1,
            title: 'Discovery & Research',
            subtitle: 'Understanding Your Digital Landscape',
            color: 'from-cyan-500 to-blue-600',
            bgPattern: 'bg-gradient-to-br from-cyan-50 to-blue-100',
            bgColor: '#0891b2', // Cyan-600
            bgGradient: 'linear-gradient(135deg, #0891b2 0%, #2563eb 100%)',
            icon: '🔍',
            diagram: (
                <svg width="320" height="200" viewBox="0 0 320 200" className="w-full h-auto">
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#06b6d4" />
                            <stop offset="100%" stopColor="#2563eb" />
                        </linearGradient>
                        <marker id="arrow1" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                            <path d="M0,0 L0,6 L9,3 z" fill="url(#grad1)" />
                        </marker>
                    </defs>
                    
                    <circle cx="60" cy="100" r="35" fill="url(#grad1)" opacity="0.2"/>
                    <circle cx="60" cy="100" r="25" fill="url(#grad1)"/>
                    <text className="fill-white text-xs font-bold" x="60" y="105" textAnchor="middle">Research</text>
                    
                    <line x1="95" y1="100" x2="135" y2="100" stroke="url(#grad1)" strokeWidth="3" markerEnd="url(#arrow1)"/>
                    
                    <rect x="140" y="75" width="70" height="50" rx="10" fill="url(#grad1)" opacity="0.9"/>
                    <text className="fill-white text-xs font-bold" x="175" y="105" textAnchor="middle">Analysis</text>
                    
                    <line x1="210" y1="100" x2="250" y2="100" stroke="url(#grad1)" strokeWidth="3" markerEnd="url(#arrow1)"/>
                    
                    <polygon points="255,85 285,100 255,115" fill="url(#grad1)"/>
                    <text className="fill-white text-xs font-bold" x="270" y="105" textAnchor="middle">Insights</text>
                </svg>
            ),
            features: ['Market Analysis', 'User Research', 'Competitive Audit', 'Technology Assessment']
        },
        {
            id: 2,
            title: 'Strategy & Planning',
            subtitle: 'Crafting Your Digital Roadmap',
            color: 'from-purple-500 to-pink-600',
            bgPattern: 'bg-gradient-to-br from-purple-50 to-pink-100',
            bgColor: '#8b5cf6', // Purple-500
            bgGradient: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
            icon: '🎯',
            diagram: (
                <svg width="320" height="200" viewBox="0 0 320 200" className="w-full h-auto">
                    <defs>
                        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#8b5cf6" />
                            <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>
                    </defs>
                    
                    <rect x="30" y="40" width="80" height="40" rx="12" fill="url(#grad2)" opacity="0.8"/>
                    <text className="fill-white text-xs font-bold" x="70" y="65" textAnchor="middle">Goals</text>
                    
                    <rect x="130" y="40" width="80" height="40" rx="12" fill="url(#grad2)" opacity="0.8"/>
                    <text className="fill-white text-xs font-bold" x="170" y="65" textAnchor="middle">Strategy</text>
                    
                    <rect x="230" y="40" width="80" height="40" rx="12" fill="url(#grad2)" opacity="0.8"/>
                    <text className="fill-white text-xs font-bold" x="270" y="65" textAnchor="middle">Roadmap</text>
                    
                    <path d="M 70 80 Q 170 120 270 80" stroke="url(#grad2)" strokeWidth="3" fill="none"/>
                    <text className="fill-gray-600 text-xs" x="170" y="135" textAnchor="middle">Integrated Approach</text>
                    
                    <circle cx="70" cy="150" r="8" fill="url(#grad2)"/>
                    <circle cx="170" cy="150" r="8" fill="url(#grad2)"/>
                    <circle cx="270" cy="150" r="8" fill="url(#grad2)"/>
                </svg>
            ),
            features: ['Strategic Planning', 'Technology Stack', 'Implementation Timeline', 'Resource Allocation']
        },
        {
            id: 3,
            title: 'Implementation & Execution',
            subtitle: 'Bringing Your Vision to Life',
            color: 'from-green-500 to-emerald-600',
            bgPattern: 'bg-gradient-to-br from-green-50 to-emerald-100',
            bgColor: '#10b981', // Emerald-500
            bgGradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            icon: '⚡',
            diagram: (
                <svg width="320" height="200" viewBox="0 0 320 200" className="w-full h-auto">
                    <defs>
                        <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#10b981" />
                            <stop offset="100%" stopColor="#059669" />
                        </linearGradient>
                    </defs>
                    
                    <rect x="40" y="30" width="60" height="25" rx="6" fill="url(#grad3)"/>
                    <text className="fill-white text-xs font-bold" x="70" y="47" textAnchor="middle">Phase 1</text>
                    
                    <rect x="130" y="30" width="60" height="25" rx="6" fill="url(#grad3)"/>
                    <text className="fill-white text-xs font-bold" x="160" y="47" textAnchor="middle">Phase 2</text>
                    
                    <rect x="220" y="30" width="60" height="25" rx="6" fill="url(#grad3)"/>
                    <text className="fill-white text-xs font-bold" x="250" y="47" textAnchor="middle">Phase 3</text>
                    
                    <rect x="85" y="80" width="150" height="40" rx="12" fill="url(#grad3)" opacity="0.2"/>
                    <text className="fill-gray-700 text-sm font-bold" x="160" y="105" textAnchor="middle">Continuous Integration</text>
                    
                    <circle cx="160" cy="160" r="25" fill="url(#grad3)" opacity="0.3"/>
                    <circle cx="160" cy="160" r="15" fill="url(#grad3)"/>
                    <text className="fill-white text-xs font-bold" x="160" y="165" textAnchor="middle">Launch</text>
                </svg>
            ),
            features: ['Agile Development', 'Quality Assurance', 'Performance Optimization', 'Go-Live Support']
        },
        {
            id: 4,
            title: 'Optimization & Growth',
            subtitle: 'Continuous Improvement & Scaling',
            color: 'from-orange-500 to-red-600',
            bgPattern: 'bg-gradient-to-br from-orange-50 to-red-100',
            bgColor: '#f97316', // Orange-500
            bgGradient: 'linear-gradient(135deg, #f97316 0%, #dc2626 100%)',
            icon: '📈',
            diagram: (
                <svg width="320" height="200" viewBox="0 0 320 200" className="w-full h-auto">
                    <defs>
                        <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#f97316" />
                            <stop offset="100%" stopColor="#dc2626" />
                        </linearGradient>
                    </defs>
                    
                    <polyline points="40,150 80,120 120,100 160,80 200,60 240,40 280,30" 
                             stroke="url(#grad4)" strokeWidth="4" fill="none"/>
                    
                    <circle cx="80" cy="120" r="6" fill="url(#grad4)"/>
                    <circle cx="160" cy="80" r="6" fill="url(#grad4)"/>
                    <circle cx="240" cy="40" r="6" fill="url(#grad4)"/>
                    
                    <text className="fill-gray-600 text-xs" x="80" y="140" textAnchor="middle">Monitor</text>
                    <text className="fill-gray-600 text-xs" x="160" y="100" textAnchor="middle">Optimize</text>
                    <text className="fill-gray-600 text-xs" x="240" y="60" textAnchor="middle">Scale</text>
                    
                    <rect x="50" y="170" width="220" height="15" rx="7" fill="url(#grad4)" opacity="0.2"/>
                    <text className="fill-gray-700 text-xs font-bold" x="160" y="182" textAnchor="middle">Continuous Growth</text>
                </svg>
            ),
            features: ['Performance Analytics', 'A/B Testing', 'Feature Enhancement', 'Scalability Planning']
        }
    ];

    useEffect(() => {
        if (!containerRef.current || !horizontalRef.current) return;

        const ctx = gsap.context(() => {
            const sections = sectionsRef.current.filter(Boolean);
            const totalScrollDistance = window.innerHeight * (sections.length - 1);

            // Create one single timeline for smooth horizontal movement
            const masterTL = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: `+=${totalScrollDistance}`,
                    scrub: 0.8,
                    pin: true,
                    anticipatePin: 1,
                    fastScrollEnd: true,
                    onUpdate: (self) => {
                        const progress = self.progress;
                        const newSection = Math.min(Math.floor(progress * sections.length), sections.length - 1);
                        if (newSection !== currentSection) {
                            setCurrentSection(newSection);
                        }
                    }
                }
            });

            // Horizontal movement
            masterTL.to(horizontalRef.current, {
                x: () => -(sections.length - 1) * window.innerWidth,
                ease: "none"
            });

            // Single scroll trigger for all animations
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top top",
                end: `+=${totalScrollDistance}`,
                scrub: 0.8,
                fastScrollEnd: true,
                onUpdate: (self) => {
                    const progress = self.progress;
                    const totalSections = sections.length;

                    // Smooth background color transition
                    const currentIndex = Math.floor(progress * totalSections);
                    const nextIndex = Math.min(currentIndex + 1, totalSections - 1);
                    const localProgress = (progress * totalSections) - currentIndex;

                    // Update background colors
                    if (backgroundRef.current && timelineData[currentIndex] && timelineData[nextIndex]) {
                        const currentBg = timelineData[currentIndex].bgGradient;
                        const nextBg = timelineData[nextIndex].bgGradient;
                        
                        // Create smooth gradient transition
                        const mixedGradient = localProgress < 0.5 ? currentBg : nextBg;
                        const opacity = localProgress < 0.5 ? 1 - (localProgress * 2) : (localProgress - 0.5) * 2;
                        
                        backgroundRef.current.style.background = mixedGradient;
                        backgroundRef.current.style.opacity = 0.15 + (opacity * 0.1); // Subtle background overlay
                    }

                    sections.forEach((section, index) => {
                        if (!section) return;

                        const diagram = section.querySelector('.diagram-svg');
                        const title = section.querySelector('.section-title');
                        const subtitle = section.querySelector('.section-subtitle');
                        const features = section.querySelectorAll('.feature-item');
                        const icon = section.querySelector('.section-icon');

                        // Calculate smooth visibility for each section
                        const sectionProgress = progress * totalSections;
                        const sectionCenter = index + 0.5;
                        const distance = Math.abs(sectionProgress - sectionCenter);
                        
                        // Smoother visibility curve with wider transition zones
                        let visibility = Math.max(0, Math.min(1, 1.5 - distance));
                        
                        // Apply cubic easing for ultra-smooth transitions
                        visibility = visibility * visibility * (3 - 2 * visibility);

                        // Batch all transforms to prevent layout thrashing
                        const transforms = {
                            opacity: visibility,
                            transform: `translateY(${50 * (1 - visibility)}px) scale(${0.8 + 0.2 * visibility}) rotate(${-10 * (1 - visibility)}deg)`
                        };

                        // Apply transforms using transform3d for GPU acceleration
                        if (icon) {
                            Object.assign(icon.style, transforms);
                        }

                        if (title) {
                            title.style.opacity = visibility;
                            title.style.transform = `translate3d(0, ${40 * (1 - visibility)}px, 0) scale(${0.9 + 0.1 * visibility})`;
                        }

                        if (subtitle) {
                            subtitle.style.opacity = visibility * 0.9;
                            subtitle.style.transform = `translate3d(0, ${40 * (1 - visibility)}px, 0) scale(${0.9 + 0.1 * visibility})`;
                        }

                        if (diagram) {
                            diagram.style.opacity = visibility;
                            diagram.style.transform = `translate3d(0, ${30 * (1 - visibility)}px, 0) scale(${0.95 + 0.05 * visibility}) rotate(${5 * (1 - visibility)}deg)`;
                        }

                        // Features with optimized stagger
                        features.forEach((feature, featureIndex) => {
                            if (!feature) return;
                            const featureDelay = featureIndex * 0.05;
                            const featureProgress = Math.max(0, visibility - featureDelay);
                            
                            feature.style.opacity = featureProgress;
                            feature.style.transform = `translate3d(0, ${20 * (1 - featureProgress)}px, 0) scale(${0.98 + 0.02 * featureProgress})`;
                        });

                        // SVG animation trigger
                        if (visibility > 0.8 && !section.dataset.animated) {
                            section.dataset.animated = 'true';
                            requestAnimationFrame(() => animateSVGElements(section));
                        } else if (visibility < 0.3 && section.dataset.animated) {
                            section.dataset.animated = '';
                        }
                    });
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const animateSVGElements = (section) => {
        const svg = section.querySelector('svg');
        if (!svg) return;

        const elements = svg.querySelectorAll('rect, circle, path, polyline, polygon, line');
        const texts = svg.querySelectorAll('text');

        // Optimized SVG animations
        gsap.fromTo(elements, 
            { 
                opacity: 0, 
                scale: 0.3,
                rotation: () => gsap.utils.random(-15, 15)
            },
            {
                opacity: 1,
                scale: 1,
                rotation: 0,
                duration: 0.8,
                stagger: 0.08,
                ease: "back.out(1.5)"
            }
        );

        gsap.fromTo(texts,
            { 
                opacity: 0, 
                y: 15
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.04,
                delay: 0.2,
                ease: "power2.out"
            }
        );
    };

    return (
        <section ref={containerRef} className="relative overflow-hidden">
            {/* Dynamic Background that changes with sections */}
            <div 
                ref={backgroundRef}
                className="absolute inset-0 transition-all duration-1000 ease-out"
                style={{
                    background: timelineData[0].bgGradient,
                    opacity: 0.2
                }}
            ></div>
            
            {/* Base dark background */}
            <div className="absolute inset-0 bg-slate-900"></div>
            
            {/* Animated background elements that respond to current section */}
            <div className="absolute inset-0 opacity-30">
                <div 
                    className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl transition-all duration-1000"
                    style={{ 
                        background: `radial-gradient(circle, ${timelineData[currentSection]?.bgColor}40 0%, transparent 70%)`,
                        animation: 'pulse 4s ease-in-out infinite'
                    }}
                ></div>
                <div 
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl transition-all duration-1000 delay-500"
                    style={{ 
                        background: `radial-gradient(circle, ${timelineData[currentSection]?.bgColor}30 0%, transparent 70%)`,
                        animation: 'pulse 4s ease-in-out infinite 1s'
                    }}
                ></div>
                <div 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-2xl transition-all duration-1000 delay-1000"
                    style={{ 
                        background: `radial-gradient(circle, ${timelineData[currentSection]?.bgColor}20 0%, transparent 70%)`,
                        animation: 'pulse 4s ease-in-out infinite 0.5s'
                    }}
                ></div>
            </div>

            <div 
                ref={horizontalRef} 
                className="flex h-screen relative z-10" 
                style={{ 
                    width: `${timelineData.length * 100}vw`,
                    willChange: 'transform',
                    backfaceVisibility: 'hidden',
                    perspective: '1000px'
                }}
            >
                {timelineData.map((item, index) => (
                    <div
                        key={item.id}
                        ref={el => sectionsRef.current[index] = el}
                        className="w-screen h-screen flex items-center justify-center p-8 relative flex-shrink-0"
                        style={{ willChange: 'transform' }}
                    >
                        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                            {/* Content Side */}
                            <div className="space-y-8">
                                <div className="space-y-6">
                                    <div 
                                        className="section-icon text-6xl mb-4 inline-block p-6 rounded-3xl text-white shadow-2xl transition-all duration-500"
                                        style={{ 
                                            willChange: 'transform',
                                            background: item.bgGradient,
                                            boxShadow: `0 25px 50px ${item.bgColor}30`
                                        }}
                                    >
                                        {item.icon}
                                    </div>
                                    <h2 
                                        className="section-title text-5xl lg:text-6xl font-bold text-white leading-tight"
                                        style={{ willChange: 'transform' }}
                                    >
                                        {item.title}
                                    </h2>
                                    <p 
                                        className="section-subtitle text-xl text-gray-300 leading-relaxed"
                                        style={{ willChange: 'transform' }}
                                    >
                                        {item.subtitle}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                                    {item.features.map((feature, idx) => (
                                        <div
                                            key={idx}
                                            className="feature-item flex items-center space-x-3 p-4 backdrop-blur-sm rounded-xl border transition-all duration-500"
                                            style={{ 
                                                willChange: 'transform',
                                                backgroundColor: `${item.bgColor}15`,
                                                borderColor: `${item.bgColor}30`
                                            }}
                                        >
                                            <div 
                                                className="w-3 h-3 rounded-full"
                                                style={{ backgroundColor: item.bgColor }}
                                            ></div>
                                            <span className="text-white font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Enhanced progress indicator */}
                                <div className="flex items-center space-x-4 pt-8">
                                    <span className="text-sm text-gray-400">
                                        Step {index + 1} of {timelineData.length}
                                    </span>
                                    <div className="flex space-x-2">
                                        {timelineData.map((_, i) => (
                                            <div
                                                key={i}
                                                className="w-3 h-3 rounded-full transition-all duration-500"
                                                style={{
                                                    backgroundColor: i <= index ? item.bgColor : '#ffffff30',
                                                    boxShadow: i <= index ? `0 0 10px ${item.bgColor}60` : 'none',
                                                    transform: i === index ? 'scale(1.2)' : 'scale(1)'
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Diagram Side */}
                            <div className="flex justify-center w-full">
                                <div 
                                    className={`diagram-svg w-full relative p-8 rounded-3xl ${item.bgPattern} shadow-2xl border backdrop-blur-sm transform transition-all duration-500`}
                                    style={{ 
                                        willChange: 'transform',
                                        borderColor: `${item.bgColor}30`,
                                        boxShadow: `0 25px 50px ${item.bgColor}20`
                                    }}
                                >
                                    {item.diagram}
                                    <div 
                                        className="absolute inset-0 rounded-3xl transition-all duration-500"
                                        style={{
                                            background: `linear-gradient(135deg, ${item.bgColor}10 0%, transparent 100%)`
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Enhanced fixed navigation */}
            <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
                <div 
                    className="flex items-center space-x-4 backdrop-blur-xl rounded-full px-8 py-4 border shadow-2xl transition-all duration-500"
                    style={{
                        backgroundColor: `${timelineData[currentSection]?.bgColor}20`,
                        borderColor: `${timelineData[currentSection]?.bgColor}30`,
                        boxShadow: `0 25px 50px ${timelineData[currentSection]?.bgColor}20`
                    }}
                >
                    <span className="text-white/90 text-sm font-medium">Scroll to explore</span>
                    {/* <div className="flex space-x-3">
                        {timelineData.map((_, index) => (
                            <div
                                key={index}
                                className="w-3 h-3 rounded-full transition-all duration-500"
                                style={{
                                    backgroundColor: index === currentSection ? 'white' : `${timelineData[currentSection]?.bgColor}60`,
                                    transform: index === currentSection ? 'scale(1.25)' : 'scale(1)',
                                    boxShadow: index === currentSection ? '0 0 15px white50' : 'none'
                                }}
                            />
                        ))}
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default DxStrategy;


import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import BannerTextReveal from '@/components/Text Reveal/bannertextreveal';
import Work1 from '@/components/Work-portfolio/card_style_1';
import Work2 from '@/components/Work-portfolio/card_style_2';
import CardStyle2 from '@/components/Work-portfolio/card_style_2';
import CardStyle1 from '@/components/Work-portfolio/card_style_1';

const TariffCard = () => {
    const cardRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);
    const expandButtonRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;
        const image = imageRef.current;
        const text = textRef.current;
        const expandButton = expandButtonRef.current;

        // Set initial states
        gsap.set(text, { x: '100%', opacity: 0 });
        gsap.set(expandButton, { x: '100%', opacity: 0 });

        const handleMouseEnter = () => {
            // Create timeline for coordinated animations
            const tl = gsap.timeline();

            tl.to(image, {
                x: '-100%',
                duration: 0.3,
                ease: 'power2.out'
            })
                .to(text, {
                    x: '0%',
                    opacity: 1,
                    duration: 0.6,
                    ease: 'power2.out'
                }, 0.1)
                .to(expandButton, {
                    x: '0%',
                    opacity: 1,
                    duration: 0.4,
                    ease: 'power2.out'
                }, 0.3);
        };

        const handleMouseLeave = () => {
            // Create timeline for reverse animations
            const tl = gsap.timeline();

            tl.to(expandButton, {
                x: '100%',
                opacity: 0,
                duration: 0.3,
                ease: 'power2.in'
            })
                .to(text, {
                    x: '100%',
                    opacity: 0,
                    duration: 0.3,
                    ease: 'power2.in'
                }, 0.1)
                .to(image, {
                    x: '0%',
                    duration: 0.3,
                    ease: 'power2.in'
                }, 0.2);
        };

        if (card) {
            card.addEventListener('mouseenter', handleMouseEnter);
            card.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                card.removeEventListener('mouseenter', handleMouseEnter);
                card.removeEventListener('mouseleave', handleMouseLeave);
            };
        }
    }, []);

    return (

        <div className=" py-46 text-white  flex flex-col items-center justify-center  relative overflow-hidden">


            <header className="flex justify-center">
                <div className="text-center">
                    <BannerTextReveal
                        titleClassName="text-120 font-semibold "
                        descriptionClassName="text-30 max-w-7xl px-4 mt-4"
                        title="Client Portfolio"
                        description="Discover our latest projects and creative solutions that showcase our expertise in web development, design, and digital innovation."
                    />
                </div>
            </header>


            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 !gap-8 xl:!gap-12 mt-16 xl:mt-32">
                <CardStyle1
                    title="Digital Marketing Revolution"
                    description="Exploring the latest trends in digital marketing and how brands are adapting to the changing landscape of consumer engagement and transformation."
                    tag="Marketing Study"
                    backgroundImage="/work/work1.png"
                    onCardClick={() => console.log('Card clicked')}
                    className=""
                    url='/work-portfolio/work-1'
                />


                <CardStyle2
                    title="Digital Marketing Revolution"
                    description="Exploring the latest trends in digital marketing and how brands are adapting to the changing landscape of consumer engagement and digital transformation."
                    tag="Marketing Study"
                    backgroundImage="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8NDJ8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
                    onCardClick={() => console.log('Card clicked')}
                    className=""
                    url='/work-portfolio/work-2'

                />
                <CardStyle1
                    title="AI & Future of Work"
                    description="An in-depth analysis of how artificial intelligence is transforming workplace dynamics and creating new opportunities for businesses."
                    tag="Technology Report"
                    backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29ycG9yYXRlfGVufDB8fDB8fHww"
                    onCardClick={() => console.log('AI card clicked')}
                    url='/work-portfolio/work-3'

                />

                <CardStyle2
                    title="Digital Marketing Revolution"
                    description="Exploring the latest trends in digital marketing and how brands are adapting to the changing landscape of consumer engagement and digital transformation."
                    tag="Marketing Study"
                    backgroundImage="https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
                    onCardClick={() => console.log('Card clicked')}
                    className=""
                /><CardStyle1
                    title="AI & Future of Work"
                    description="An in-depth analysis of how artificial intelligence is transforming workplace dynamics and creating new opportunities for businesses."
                    tag="Technology Report"
                    backgroundImage="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
                    onCardClick={() => console.log('AI card clicked')}
                />
                <CardStyle2
                    title="Digital Marketing Revolution"
                    description="Exploring the latest trends in digital marketing and how brands are adapting to the changing landscape of consumer engagement and digital transformation."
                    tag="Marketing Study"
                    backgroundImage="https://plus.unsplash.com/premium_photo-1673603988651-99f79e4ae7d3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
                    onCardClick={() => console.log('Card clicked')}
                    className=""
                />
                <CardStyle1
                    title="AI & Future of Work"
                    description="An in-depth analysis of how artificial intelligence is transforming workplace dynamics and creating new opportunities for businesses."
                    tag="Technology Report"
                    backgroundImage="https://images.unsplash.com/photo-1573164574472-797cdf4a583a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvcnBvcmF0ZXxlbnwwfHwwfHx8MA%3D%3D"
                    onCardClick={() => console.log('AI card clicked')}
                />
                <CardStyle2
                    title="Digital Marketing Revolution"
                    description="Exploring the latest trends in digital marketing and how brands are adapting to the changing landscape of consumer engagement and digital transformation."
                    tag="Marketing Study"
                    backgroundImage="https://images.unsplash.com/photo-1682685797439-a05dd915cee9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8Njl8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
                    onCardClick={() => console.log('Card clicked')}
                    className=""
                />
            </div>
        </div>

    );
};

export default TariffCard;
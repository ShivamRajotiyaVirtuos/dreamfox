

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
                <CardStyle2
                className='text-white'

                    title="VSYS"
                    description="Assimilate and compose Talent, Skills, Culture, and Performance into one growth system. The Systems Company."
                    tag="Technology"
                    backgroundImage="/images/case_study/vsys.webp"
                    onCardClick={() => console.log('VSYS card clicked')}
                    url='/work-portfolio/vsys-case-study'
                />

                <CardStyle1
                    title="TEKCORP"
                    description="Empowering enterprises with intelligent software, scalable cloud systems, and transformative digital engineering. The AI + Cloud Specialist."
                    tag="Technology"
                    backgroundImage="/images/case_study/tekcorp.webp"

                    onCardClick={() => console.log('TEKCORP card clicked')}
                    url='/work-portfolio/tekcorp-case-study'
                />

                <CardStyle2
                    title="PLUMJOB"
                className='text-white'

                    description="Connecting exceptional talent with extraordinary opportunities—where ambition meets purpose. The Talent Recruitment Platform."
                    tag="Recruitment"
                    backgroundImage="/images/case_study/plumjob.webp"

                    onCardClick={() => console.log('PLUMJOB card clicked')}
                    url='/work-portfolio/plumjob-case-study'
                />

                <CardStyle1
                    title="SWEVEN"
                    description="Reimagining Customer Relationships with AI-born Experience Intelligence that goes beyond CRM. CRM Mastermind."
                    tag="SaaS"
                    backgroundImage="/images/case_study/sweven.webp"

                    onCardClick={() => console.log('SWEVEN card clicked')}
                    url='/work-portfolio/sweven-case-study'
                />

                <CardStyle2
                className='text-white'
                    title="INDIC"
                    description="Indic launches a series of DX Platforms in the experience economy in retail, fashion, fintech, etc. Digital Experience Portfolio Company."
                    tag="Digital Platforms"
                    backgroundImage="/images/case_study/indic.webp"

                    onCardClick={() => console.log('INDIC card clicked')}
                    url='/work-portfolio/indic-case-study'
                />



                <CardStyle1
                    title="BETTER BUY CLUB"
                    description="BetterBuyClub.com has been offering curated electronics & computers for people who love discounts, and special pricing. Electronics Store Online."
                    tag="E-commerce"
                    backgroundImage="/images/case_study/betterbuy.webp"

                    onCardClick={() => console.log('BETTER BUY CLUB card clicked')}
                    url='/work-portfolio/better-buy-club-case-study'
                />
                <CardStyle2
                    title="GIFTCART"
                    description="Giftcart offers plethora of gifting experiences through its popular giftcart.com website on every occasion and for every persona. Gifting Experience Platform."
                    tag="E-commerce"
                    backgroundImage="/images/case_study/giftcart.webp"

                    onCardClick={() => console.log('GIFTCART card clicked')}
                    url='/work-portfolio/giftcart-case-study'
                />
                <CardStyle1
                    title="VDC" 
                    description="Giftcart offers plethora of gifting experiences through its popular giftcart.com website on every occasion and for every persona. Gifting Experience Platform."
                    tag="Consulting"
                    backgroundImage="/images/case_study/VDC.webp"

                    onCardClick={() => console.log('vdc card clicked')}
                    url='/work-portfolio/vdc-case-study'
                />
            </div>
        </div>

    );
};

export default TariffCard;
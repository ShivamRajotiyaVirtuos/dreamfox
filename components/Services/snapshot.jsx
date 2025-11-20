"use client";
import React, { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { FaTrophy, FaQuoteLeft } from "react-icons/fa";
import TextReveal from "../Text Reveal/textreveal";
import Link from "next/link";

const SuccessStories = () => {
  useEffect(() => {
    new Swiper(".swiper", {
      effect: "coverflow",
      loop: true,
      grabCursor: true,
      centeredSlides: true,
      autoplay: {
        delay: 0, // No delay for continuous movement
        disableOnInteraction: false,
        pauseOnMouseEnter: true, // Pause when mouse hovers
        reverseDirection: false,
      },
      speed: 3000, // Smooth slow transition speed for continuous effect
      slidesPerView: 1,
      allowTouchMove: true,
      freeMode: false,
      preventClicks: false,
      preventClicksPropagation: false,
      slideToClickedSlide: false,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      breakpoints: {
        320: { slidesPerView: 1.2 },
        580: { slidesPerView: 1.5 },
        767: { slidesPerView: 2 },
        992: { slidesPerView: 2.5 },
        1200: { slidesPerView: 3 },
        1400: { slidesPerView: 3.5 },
      },
    });
  }, []);

  const stories = [
    {
      url: "/casestudy/tvs_credit_fuels_customer_delight.webp",
      title: "TVS Credit fuels customer delight with Oracle Fusion",
      description:
        "Legacy-to-Modern CX Migration powered by Virtuos Digital boosts service agility, omnichannel excellence, and AI-readiness for TVS Credit customers.",
      logo: "/Homepage/tvscredit.svg",
      stats: "Oracle Fusion",
      category: "CX Migration",
      pageurl:
        "https://vdc.com/customers/tvs-credit-oracle-fusion-Virtuos-Digital-Customer-Success",
    },
    {
      url: "/casestudy/clp_modernizes_stakeholder_management.webp",
      title: "CLP modernizes stakeholder management with Creatio",
      description:
        "Virtuos Digital—Consultare (vdc.com) transforms legacy systems into an intelligent, no-code platform for seamless stakeholder visibility, engagement, search, and reporting.",
      logo: "/Homepage/CLP_logo.svg",
      stats: "No-Code Platform",
      category: "Legacy Transformation",
      pageurl:
        "https://vdc.com/customers/customer-success-case-study-clp-hongkong-creatio",
    },
    {
      url: "/casestudy/standard_chartered_advances_email_automation_journey.webp",
      title: "Standard Chartered advances email automation journey",
      description:
        "With Virtuos CXDesk Success Stack, Standard Chartered modernizes Verint Email Response System, ensuring continuity, automation, and AWS-based sovereign data compliance.",
      logo: "/Homepage/standard_chartered.svg",
      stats: "Email Automation",
      category: "Banking",
      pageurl:
        "https://vdc.com/customers/customer-success-standard-chartered-bank-kana",
    },
    {
      url: "/casestudy/hdfc_life_digitizes_quote_management.webp",
      title: "HDFC Life digitizes quote management",
      description:
        "Virtuos and Creatio empower HDFC Int'l Life's Sales Team with a no-code, digital quote system to streamline underwriting and approvals.",
      logo: "/Homepage/hdfc-life-logo.png",
      stats: "Digital Quotes",
      category: "Insurance",
      pageurl:
        "https://vdc.com/customershttps://vdc.com/customers-success-case-study-hdfcbank-Creatio-CRM",
    },
    {
      url: "/casestudy/kgsil_streamlines_contract_management_with_agiloft.webp",
      title: "KGiSL streamlines contract management with Agiloft",
      description:
        "Virtuos Digital—Consultare (vdc.com) implemented a tailored Agiloft solution, enhancing contract visibility, approval workflows, and productivity for a leading technology service provider.",
      logo: "/Homepage/kgisl.svg",
      stats: "Contract Intelligence",
      category: "Technology Services",
      pageurl: "https://vdc.com/customers/success-story-CLM-Agiloft-KGISL",
    },
    {
      url: "/casestudy/leading_brewery_company.webp",
      title: "A leading brewery company (LBC) automates with Agiloft CLM",
      description:
        "LBC embarks on digital contract intelligence with Agiloft CLM implemented by Virtuos Digital—Consultare.",
      logo: "/Homepage/agiloft_logo.svg",
      stats: "CLM Implementation",
      category: "Manufacturing",
      pageurl:
        "https://vdc.com/customers/Brewery-Company-Implements-Agiloft-CLM",
    },
    {
      url: "/casestudy/securitas_implements_contract_intelligence.webp",
      title: "Securitas implements contract intelligence",
      description:
        "Empowering Legal and Sales Teams with AI-Native CLM from Agiloft, implemented by Virtuos Digital—Consultare (VDC).",
      logo: "/Homepage/securitas_logo.svg",
      stats: "AI-Native CLM",
      category: "Security Services",
      pageurl: "https://vdc.com/customers/securitas-Agiloft-clm-success-story",
    },
    {
      url: "/casestudy/pickme_accelerates_customer_experience.webp",
      title: "PickMe accelerates customer experience with Creatio No-Code CRM",
      description:
        "Sri Lanka's leading mobility platform transforms service & contact centers with Virtuos Digital.",
      logo: "/Homepage/pickme.svg",
      stats: "CRM Transformation",
      category: "Mobility Platform",
      pageurl:
        "https://vdc.com/customers/pickme-implements-Creatio-No-Code-Platform",
    },
    {
      url: "/casestudy/space_ops_insights_company_integrates_smartsheet.webp",
      title: "Space Ops Insights Company Integrates Smartsheet",
      description:
        "Virtuos Digital and Smartsheet Build an Operational Framework for Mission-Critical Visibility and Coordination",
      logo: "/Homepage/smartsheet_logo.svg",
      stats: "Mission-Critical",
      category: "Space Operations",
      pageurl:
        "https://vdc.com/customers/customer-success-smartsheet-space-ops",
    },
    {
      url: "/casestudy/thomas_cook_india_creates_experience_business_with_cxdesk.webp",
      title: "Thomas Cook India Creates Experience Business with CXDesk",
      description:
        "Virtuos Digital—Consultare Helps Thomas Cook Transform CX into a Scalable, Competitive Edge",
      logo: "/Homepage/oracle_logo.svg",
      stats: "CX Excellence",
      category: "Travel & Tourism",
      pageurl: "https://vdc.com/customers/customer-success-thomas-cook-india",
    },
    {
      url: "/casestudy/barq_fintech_company_implements.webp",
      title: "Barq—Fintech Company implements Oracle Fusion CX",
      description:
        "Virtuos Digital implements Fusion Service Cloud to automate Helpdesk and create digital experiences",
      logo: "/Homepage/oracle_logo.svg",
      stats: "Fusion Service Cloud",
      category: "FinTech",
      pageurl:
        "https://vdc.com/customers/customer-success-barq-implements-oracle-fusion",
    },
    {
      url: "/casestudy/tvs_credit_fuels_customer_delight.webp",
      title: "TVS Credit fuels customer delight with Oracle Fusion",
      description:
        "Legacy-to-Modern CX Migration powered by Virtuos Digital boosts service agility, omnichannel excellence, and AI-readiness for TVS Credit customers.",
      logo: "/Homepage/tvscredit.svg",
      stats: "Oracle Fusion",
      category: "CX Migration",
      pageurl:
        "https://vdc.com/customers/tvs-credit-oracle-fusion-Virtuos-Digital-Customer-Success",
    },
    {
      url: "/casestudy/clp_modernizes_stakeholder_management.webp",
      title: "CLP modernizes stakeholder management with Creatio",
      description:
        "Virtuos Digital—Consultare (vdc.com) transforms legacy systems into an intelligent, no-code platform for seamless stakeholder visibility, engagement, search, and reporting.",
      logo: "/Homepage/CLP_logo.svg",
      stats: "No-Code Platform",
      category: "Legacy Transformation",
      pageurl:
        "https://vdc.com/customers/customer-success-case-study-clp-hongkong-creatio",
    },
    {
      url: "/casestudy/standard_chartered_advances_email_automation_journey.webp",
      title: "Standard Chartered advances email automation journey",
      description:
        "With Virtuos CXDesk Success Stack, Standard Chartered modernizes Verint Email Response System, ensuring continuity, automation, and AWS-based sovereign data compliance.",
      logo: "/Homepage/standard_chartered.svg",
      stats: "Email Automation",
      category: "Banking",
      pageurl:
        "https://vdc.com/customers/customer-success-standard-chartered-bank-kana",
    },
    {
      url: "/casestudy/hdfc_life_digitizes_quote_management.webp",
      title: "HDFC Life digitizes quote management",
      description:
        "Virtuos and Creatio empower HDFC Int'l Life's Sales Team with a no-code, digital quote system to streamline underwriting and approvals.",
      logo: "/Homepage/hdfc-life-logo.png",
      stats: "Digital Quotes",
      category: "Insurance",
      pageurl:
        "https://vdc.com/customershttps://vdc.com/customers-success-case-study-hdfcbank-Creatio-CRM",
    },
    {
      url: "/casestudy/kgsil_streamlines_contract_management_with_agiloft.webp",
      title: "KGiSL streamlines contract management with Agiloft",
      description:
        "Virtuos Digital—Consultare (vdc.com) implemented a tailored Agiloft solution, enhancing contract visibility, approval workflows, and productivity for a leading technology service provider.",
      logo: "/Homepage/kgisl.svg",
      stats: "Contract Intelligence",
      category: "Technology Services",
      pageurl: "https://vdc.com/customers/success-story-CLM-Agiloft-KGISL",
    },
    {
      url: "/casestudy/leading_brewery_company.webp",
      title: "A leading brewery company (LBC) automates with Agiloft CLM",
      description:
        "LBC embarks on digital contract intelligence with Agiloft CLM implemented by Virtuos Digital—Consultare.",
      logo: "/Homepage/agiloft_logo.svg",
      stats: "CLM Implementation",
      category: "Manufacturing",
      pageurl:
        "https://vdc.com/customers/Brewery-Company-Implements-Agiloft-CLM",
    },
    {
      url: "/casestudy/securitas_implements_contract_intelligence.webp",
      title: "Securitas implements contract intelligence",
      description:
        "Empowering Legal and Sales Teams with AI-Native CLM from Agiloft, implemented by Virtuos Digital—Consultare (VDC).",
      logo: "/Homepage/securitas_logo.svg",
      stats: "AI-Native CLM",
      category: "Security Services",
      pageurl: "https://vdc.com/customers/securitas-Agiloft-clm-success-story",
    },
    {
      url: "/casestudy/pickme_accelerates_customer_experience.webp",
      title: "PickMe accelerates customer experience with Creatio No-Code CRM",
      description:
        "Sri Lanka's leading mobility platform transforms service & contact centers with Virtuos Digital.",
      logo: "/Homepage/pickme.svg",
      stats: "CRM Transformation",
      category: "Mobility Platform",
      pageurl:
        "https://vdc.com/customers/pickme-implements-Creatio-No-Code-Platform",
    },
    {
      url: "/casestudy/space_ops_insights_company_integrates_smartsheet.webp",
      title: "Space Ops Insights Company Integrates Smartsheet",
      description:
        "Virtuos Digital and Smartsheet Build an Operational Framework for Mission-Critical Visibility and Coordination",
      logo: "/Homepage/smartsheet_logo.svg",
      stats: "Mission-Critical",
      category: "Space Operations",
      pageurl:
        "https://vdc.com/customers/customer-success-smartsheet-space-ops",
    },
    {
      url: "/casestudy/thomas_cook_india_creates_experience_business_with_cxdesk.webp",
      title: "Thomas Cook India Creates Experience Business with CXDesk",
      description:
        "Virtuos Digital—Consultare Helps Thomas Cook Transform CX into a Scalable, Competitive Edge",
      logo: "/Homepage/oracle_logo.svg",
      stats: "CX Excellence",
      category: "Travel & Tourism",
      pageurl: "https://vdc.com/customers/customer-success-thomas-cook-india",
    },
    {
      url: "/casestudy/barq_fintech_company_implements.webp",
      title: "Barq—Fintech Company implements Oracle Fusion CX",
      description:
        "Virtuos Digital implements Fusion Service Cloud to automate Helpdesk and create digital experiences",
      logo: "/Homepage/oracle_logo.svg",
      stats: "Fusion Service Cloud",
      category: "FinTech",
      pageurl:
        "https://vdc.com/customers/customer-success-barq-implements-oracle-fusion",
    },
    {
      url: "/casestudy/tvs_credit_fuels_customer_delight.webp",
      title: "TVS Credit fuels customer delight with Oracle Fusion",
      description:
        "Legacy-to-Modern CX Migration powered by Virtuos Digital boosts service agility, omnichannel excellence, and AI-readiness for TVS Credit customers.",
      logo: "/Homepage/tvscredit.svg",
      stats: "Oracle Fusion",
      category: "CX Migration",
      pageurl:
        "https://vdc.com/customers/tvs-credit-oracle-fusion-Virtuos-Digital-Customer-Success",
    },
    {
      url: "/casestudy/clp_modernizes_stakeholder_management.webp",
      title: "CLP modernizes stakeholder management with Creatio",
      description:
        "Virtuos Digital—Consultare (vdc.com) transforms legacy systems into an intelligent, no-code platform for seamless stakeholder visibility, engagement, search, and reporting.",
      logo: "/Homepage/CLP_logo.svg",
      stats: "No-Code Platform",
      category: "Legacy Transformation",
      pageurl:
        "https://vdc.com/customers/customer-success-case-study-clp-hongkong-creatio",
    },
    {
      url: "/casestudy/standard_chartered_advances_email_automation_journey.webp",
      title: "Standard Chartered advances email automation journey",
      description:
        "With Virtuos CXDesk Success Stack, Standard Chartered modernizes Verint Email Response System, ensuring continuity, automation, and AWS-based sovereign data compliance.",
      logo: "/Homepage/standard_chartered.svg",
      stats: "Email Automation",
      category: "Banking",
      pageurl:
        "https://vdc.com/customers/customer-success-standard-chartered-bank-kana",
    },
    {
      url: "/casestudy/hdfc_life_digitizes_quote_management.webp",
      title: "HDFC Life digitizes quote management",
      description:
        "Virtuos and Creatio empower HDFC Int'l Life's Sales Team with a no-code, digital quote system to streamline underwriting and approvals.",
      logo: "/Homepage/hdfc-life-logo.png",
      stats: "Digital Quotes",
      category: "Insurance",
      pageurl:
        "https://vdc.com/customershttps://vdc.com/customers-success-case-study-hdfcbank-Creatio-CRM",
    },
    {
      url: "/casestudy/kgsil_streamlines_contract_management_with_agiloft.webp",
      title: "KGiSL streamlines contract management with Agiloft",
      description:
        "Virtuos Digital—Consultare (vdc.com) implemented a tailored Agiloft solution, enhancing contract visibility, approval workflows, and productivity for a leading technology service provider.",
      logo: "/Homepage/kgisl.svg",
      stats: "Contract Intelligence",
      category: "Technology Services",
      pageurl: "https://vdc.com/customers/success-story-CLM-Agiloft-KGISL",
    },
    {
      url: "/casestudy/leading_brewery_company.webp",
      title: "A leading brewery company (LBC) automates with Agiloft CLM",
      description:
        "LBC embarks on digital contract intelligence with Agiloft CLM implemented by Virtuos Digital—Consultare.",
      logo: "/Homepage/agiloft_logo.svg",
      stats: "CLM Implementation",
      category: "Manufacturing",
      pageurl:
        "https://vdc.com/customers/Brewery-Company-Implements-Agiloft-CLM",
    },
    {
      url: "/casestudy/securitas_implements_contract_intelligence.webp",
      title: "Securitas implements contract intelligence",
      description:
        "Empowering Legal and Sales Teams with AI-Native CLM from Agiloft, implemented by Virtuos Digital—Consultare (VDC).",
      logo: "/Homepage/securitas_logo.svg",
      stats: "AI-Native CLM",
      category: "Security Services",
      pageurl: "https://vdc.com/customers/securitas-Agiloft-clm-success-story",
    },
    {
      url: "/casestudy/pickme_accelerates_customer_experience.webp",
      title: "PickMe accelerates customer experience with Creatio No-Code CRM",
      description:
        "Sri Lanka's leading mobility platform transforms service & contact centers with Virtuos Digital.",
      logo: "/Homepage/pickme.svg",
      stats: "CRM Transformation",
      category: "Mobility Platform",
      pageurl:
        "https://vdc.com/customers/pickme-implements-Creatio-No-Code-Platform",
    },
    {
      url: "/casestudy/space_ops_insights_company_integrates_smartsheet.webp",
      title: "Space Ops Insights Company Integrates Smartsheet",
      description:
        "Virtuos Digital and Smartsheet Build an Operational Framework for Mission-Critical Visibility and Coordination",
      logo: "/Homepage/smartsheet_logo.svg",
      stats: "Mission-Critical",
      category: "Space Operations",
      pageurl:
        "https://vdc.com/customers/customer-success-smartsheet-space-ops",
    },
    {
      url: "/casestudy/thomas_cook_india_creates_experience_business_with_cxdesk.webp",
      title: "Thomas Cook India Creates Experience Business with CXDesk",
      description:
        "Virtuos Digital—Consultare Helps Thomas Cook Transform CX into a Scalable, Competitive Edge",
      logo: "/Homepage/oracle_logo.svg",
      stats: "CX Excellence",
      category: "Travel & Tourism",
      pageurl: "https://vdc.com/customers/customer-success-thomas-cook-india",
    },
    {
      url: "/casestudy/barq_fintech_company_implements.webp",
      title: "Barq—Fintech Company implements Oracle Fusion CX",
      description:
        "Virtuos Digital implements Fusion Service Cloud to automate Helpdesk and create digital experiences",
      logo: "/Homepage/oracle_logo.svg",
      stats: "Fusion Service Cloud",
      category: "FinTech",
      pageurl:
        "https://vdc.com/customers/customer-success-barq-implements-oracle-fusion",
    },
  ];

  return (
    <>
      <style>{`
        .success-stories-container {
          background: #000;
          font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
        }
        .swiper {
          width: 100%;
          padding: 20px 0 50px;
        }
        .swiper-slide {
          background-position: center;
          background-size: cover;
          width: 400px;
          height: 600px;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        .swiper-slide::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(79, 70, 229, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%);
          z-index: 1;
        }
        .story-info {
          position: absolute;
          width: 100%;
          height: 35%;
          text-align: left;
          background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.4) 20%, rgba(0, 0, 0, 0.9) 100%);
          padding: 30px 25px;
          bottom: -100%;
          box-sizing: border-box;
          transition: bottom 0.5s ease;
          display: flex;
          flex-direction: column;
          gap: 15px;
          z-index: 2;
        }
        .swiper-slide-active .story-info {
          bottom: 0;
        }
        .story-stats {
          position: absolute;
          top: 20px;
          right: 20px;
          background: linear-gradient(135deg, #f0565f 0%, #e63089 100%);
          color: white;
          padding: 6px 12px;
          border-radius: 25px;
          font-size: 11px;
          font-weight: 600;
          z-index: 3;
        }
        .story-category {
          position: absolute;
          top: 20px;
          left: 20px;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 500;
          backdrop-filter: blur(10px);
          z-index: 3;
        }
        .story-title {
          color: #ffffff;
          display: flex;
          align-items: center;
          font-size: 24px;
          font-weight: 700;
          gap: 12px;
          text-transform: none;
        }
        .story-description {
          color: #e6e6e6;
          display: flex;
          align-items: flex-start;
          font-size: 15px;
          gap: 12px;
          text-transform: none;
        }
        .swiper-pagination-bullet {
          background: #696969;
          transition: all 0.5s ease;
          border-radius: 8px;
        }
        .swiper-pagination-bullet-active {
          background: linear-gradient(135deg, #f0565f 0%, #e63089 100%) !important;
          width: 30px;
        }
      `}</style>

      <div className="success-stories-container 2xl:min-h-screen pt-32 lg:py-32 3xl:pb-0">
        <TextReveal
          animation="rotateX"
          stagger={0.1}
          duration={0.8}
          className="text-120 text-white text-center font-semibold mb-4"
        >
          Success Stories
        </TextReveal>
        <div className="text-center mb-12">
          <TextReveal
            animation="rotateX"
            stagger={0.1}
            duration={0.8}
            className="text-30 font-light text-gray-300 max-w-7xl mx-auto px-4"
          >
            Real results from real partnerships. Discover how we've helped
            businesses transform their digital presence and achieve
            extraordinary growth.
          </TextReveal>
        </div>

        <div className="swiper mt-28 sm:mt-32">
          <div className="swiper-wrapper">
            {stories.map((story, i) => (
              <div
                key={i}
                className="swiper-slide"
                style={{ backgroundImage: `url(${story.url})` }}
              >
                <Link
                  href={story.pageurl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="hidden sm:block story-stats">
                    {story.stats}
                  </div>
                  <div className="story-category">{story.category}</div>
                  <div className="story-info">
                    <div className="text-24 line-clamp-2 text-white font-semibold ">
                      <span>{story.title}</span>
                    </div>
                    <div className="text-16 line-clamp-2 text-white ">
                      <span>{story.description}</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="swiper-pagination" />
        </div>
      </div>
    </>
  );
};

export default SuccessStories;

import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen relative bg-gray-950">
      <div className="bg-[url('/terms_and_condition.webp')] bg-center bg-no-repeat bg-cover sm:mt-0 flex justify-center items-end sm:h-[90vh] lg:h-[60vh] 2xxl:h-[50vh] pt-36 pb-10 sm:py-32 text-white">
        <div className="container z-30 relative">
          <p className="text-20">Last Updated: November 19, 2025</p>
          <h1 className="text-60 font-semibold mt-4">Terms of Use</h1>
        </div>
      </div>

      <div className="max-w-7xl px-4 xl:px-0 py-12 lg:py-24 mx-auto bg-gray-950">
        <div className="grid lg:grid-cols-3 gap-8 xl:gap-20">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                Terms of Use (DreamFox.com)
              </h2>
              <p className="text-gray-300 leading-relaxed text-20">
                Welcome to <strong>DreamFox.com</strong>, a digital + AI
                Marketing Agency and a trademarked brand of Virtuos
                (virtuos.com). DreamFox operates as a global Digital & AI
                Marketing agency with offices across the United States, India
                Delivery Centers, and partner regions worldwide.
              </p>
              <p className="text-gray-300 leading-relaxed text-20 mt-4">
                By accessing or using this website, you ("User", "You") agree to
                comply with these Terms of Use ("Terms"). Please read them
                carefully. If you do not agree, you must discontinue use
                immediately.
              </p>
            </section>

            {/* 1. About DreamFox */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                1. About DreamFox
              </h2>
              <p className="text-gray-300 leading-relaxed text-20">
                DreamFox specializes in blending creativity, design, branding,
                and next-generation artificial intelligence to deliver marketing
                transformation. Our services include brand naming, digital
                experience platforms (DXP), persona creation, visual design,
                media execution through our Yippee Media Division, digital
                campaigns, and end-to-end marketing strategy services.
              </p>
              <p className="text-gray-300 leading-relaxed text-20 mt-4">
                We also work closely with partner brands including Oracle,
                Salesforce, Microsoft, and others to enrich our digital content
                and service quality.
              </p>
            </section>

            {/* 2. Acceptance of Terms */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                2. Acceptance of Terms
              </h2>
              <p className="text-gray-300 leading-relaxed text-20">
                By using this website, submitting forms, engaging with content,
                downloading materials, or interacting with DreamFox digitally,
                you acknowledge that you have read, understood, and agree to be
                bound by these Terms and all applicable laws.
              </p>
            </section>

            {/* 3. Intellectual Property Rights */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                3. Intellectual Property Rights
              </h2>
              <p className="text-gray-300 leading-relaxed text-20">
                All content on this website—including text, graphics, images,
                video, icons, AI-generated assets, code, brand assets,
                trademarks, and logos—is the exclusive property of DreamFox,
                Virtuos Digital, or its affiliates. You may not copy, reproduce,
                distribute, modify, or use any part of the website content
                without explicit written permission.
              </p>
            </section>

            {/* 4. Licensed & Third-Party Content Usage */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                4. Licensed & Third-Party Content Usage
              </h2>
              <p className="text-gray-300 leading-relaxed text-20 mb-4">
                DreamFox uses images, icons, vectors, stock photography, videos,
                and illustrations sourced through licensed platforms such as
                Shutterstock, Canva, Adobe Stock, and other authorized vendors.
                We also modify, enhance, or adapt such media for brand
                storytelling, campaign execution, and design deliverables.
                Unauthorized reproduction, extraction, or modification of such
                content is prohibited.
              </p>
              <p className="text-gray-300 leading-relaxed text-20">
                In certain cases, content is provided by our partners including
                Oracle, Salesforce, Microsoft, and others with explicit
                permission. Such content remains the intellectual property of
                the respective owners.
              </p>
            </section>

            {/* 5. Website Conduct */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                5. Website Conduct
              </h2>
              <p className="text-gray-300 leading-relaxed text-20 mb-4">
                Users may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-20 ml-4">
                <li>
                  Copy or scrape website content, code, or AI-generated
                  materials
                </li>
                <li>
                  Attempt unauthorized access or disrupt website operations
                </li>
                <li>Misuse forms, bots, or automated scripts</li>
                <li>
                  Introduce malware, harmful scripts, or conduct cyber-attacks
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed text-20 mt-4">
                DreamFox employs strong cybersecurity and monitoring measures to
                detect, block, and escalate suspicious activity.
              </p>
            </section>

            {/* 6. Forms, Data, and Submissions */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                6. Forms, Data, and Submissions
              </h2>
              <p className="text-gray-300 leading-relaxed text-20 mb-4">
                When you submit data through forms (contact, inquiry,
                newsletter, downloads), you consent to DreamFox using the
                information to respond, provide services, or send updates in
                line with the{" "}
                <Link
                  className="text-pink-400 hover:text-pink-600"
                  target="_blank"
                  href={"/privacy-policy"}
                >
                  Privacy Policy.
                </Link>
              </p>
              <p className="text-gray-300 leading-relaxed text-20">
                Form submissions may trigger automated workflows for
                qualification, routing, or follow-up by our global teams.
              </p>
            </section>

            {/* 7. Marketing Communications */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                7. Marketing Communications
              </h2>
              <p className="text-gray-300 leading-relaxed text-20">
                Marketing emails and updates are strictly permission-based. If
                an email is sent unintentionally or without explicit
                subscription, recipients may use the unsubscribe link provided
                in every communication or request manual removal.
              </p>
            </section>

            {/* 8. Customer Case Studies & Portfolio Usage */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                8. Customer Case Studies & Portfolio Usage
              </h2>
              <p className="text-gray-300 leading-relaxed text-20 mb-4">
                DreamFox publishes case studies, campaign outcomes, creative
                samples, and testimonials only after customer approval.
              </p>
              <p className="text-gray-300 leading-relaxed text-20">
                We do not disclose sensitive or identifiable business data
                without prior written consent. Please read our{" "}
                <Link
                  className="text-pink-400 hover:text-pink-600"
                  target="_blank"
                  href={"/disclaimer"}
                >
                  Disclaimer policy.
                </Link>
              </p>
            </section>

            {/* 9. Limitation of Liability */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                9. Limitation of Liability
              </h2>
              <p className="text-gray-300 leading-relaxed text-20 mb-4">
                DreamFox is not responsible for damages arising from:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-20 ml-4">
                <li>The use of this website</li>
                <li>Third-party links or integrations</li>
                <li>
                  Temporary unavailability or security incidents beyond
                  reasonable control
                </li>
                <li>Errors, typos, or outdated content</li>
              </ul>
              <p className="text-gray-300 leading-relaxed text-20 mt-4">
                Use of the website is at your own risk.
              </p>
            </section>

            {/* 10. Third-Party Links */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                10. Third-Party Links
              </h2>
              <p className="text-gray-300 leading-relaxed text-20">
                The website may contain links to external sites. DreamFox does
                not endorse, control, or take responsibility for third-party
                policies, content, or actions.
              </p>
            </section>

            {/* 11. Data Preservation & Disposal */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                11. Data Preservation & Disposal
              </h2>
              <p className="text-gray-300 leading-relaxed text-20 mb-4">
                DreamFox stores collected information only for as long as
                necessary to fulfill business, legal, or operational purposes.
              </p>
              <p className="text-gray-300 leading-relaxed text-20">
                Data is disposed through secure, industry-standard destruction
                processes, including anonymization, deletion, and access
                revocation.
              </p>
            </section>

            {/* 12. Modifications to Terms */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                12. Modifications to Terms
              </h2>
              <p className="text-gray-300 leading-relaxed text-20">
                DreamFox reserves the right to update or modify these Terms at
                any time without prior notice. Continued use indicates
                acceptance of revised Terms.
              </p>
            </section>

            {/* 13. Governing Law */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                13. Governing Law
              </h2>
              <p className="text-gray-300 leading-relaxed text-20">
                These Terms are governed by the laws of the jurisdiction in
                which DreamFox operates, without conflict of law principles.
              </p>
            </section>

            {/* Closing Statement */}
            <section>
              <p className="text-gray-300 leading-relaxed text-20 font-semibold">
                By using DreamFox.com, you acknowledge your agreement with these
                Terms of Use and commit to maintaining ethical conduct, respect
                for intellectual property, and responsible digital engagement.
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 rounded-2xl p-8 shadow-xl sticky top-36 border border-gray-800">
              <button className="w-full bg-gradient-to-r from-pink-600 to-pink-500 text-white py-4 rounded-full mb-8 hover:from-pink-700 hover:to-pink-600 text-30 font-thin transition-colors ring-1 ring-pink-500/30">
                Quick Reference
              </button>

              <div className="space-y-6">
                <div>
                  <p className="text-20 text-gray-400 mb-1">Document Type</p>
                  <p className="text-24 font-semibold text-gray-200">
                    Legal Terms
                  </p>
                </div>

                <div>
                  <p className="text-20 text-gray-400 mb-1">Last Updated</p>
                  <p className="text-24 font-semibold text-gray-200">
                    November 19, 2025
                  </p>
                </div>

                <div>
                  <p className="text-20 text-gray-400 mb-1">Entity</p>
                  <p className="text-24 font-semibold text-gray-200">
                    DreamFox
                  </p>
                </div>

                <div>
                  <p className="text-20 text-gray-400 mb-1">Parent Company</p>
                  <p className="text-24 font-semibold text-gray-200">Virtuos</p>
                </div>

                <div>
                  <p className="text-20 text-gray-400 mb-1">Platform</p>
                  <p className="text-24 font-semibold text-gray-200">
                    DreamFox.com
                  </p>
                </div>

                <div>
                  <p className="text-20 text-gray-400 mb-1">Total Sections</p>
                  <p className="text-24 font-semibold text-gray-200">13</p>
                </div>

                <div className="pt-6 border-t border-gray-700">
                  <p className="text-18 text-gray-400 mb-3">
                    Related Documents
                  </p>
                  <div className="space-y-2">
                    <Link
                      href="/privacy-policy"
                      className="block text-pink-400 hover:text-pink-400 hover:underline text-18"
                    >
                      Privacy Policy →
                    </Link>
                    <Link
                      href="/safe-harbour-policy"
                      className="block text-pink-400 hover:text-pink-400 hover:underline text-18"
                    >
                      Safe Harbour Policy →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

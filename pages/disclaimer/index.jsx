import Link from "next/link";

export default function Privacy() {
  return (
    <div className="min-h-screen relative bg-gray-950">
      <div className="bg-[url('/terms_and_condition.webp')] bg-center bg-no-repeat bg-cover sm:mt-0 flex justify-center items-end sm:h-[90vh] lg:h-[60vh] 2xxl:h-[50vh] pt-36 pb-10 text-white sm:py-32">
        <div className="container z-30 relative">
          <p className="text-20">Last Updated: Nov 19, 2025</p>
          <h1 className="text-60 font-semibold mt-4">Disclaimer</h1>
        </div>
      </div>

      <div className="max-w-7xl px-4 xl:px-0 py-12 lg:py-24 mx-auto bg-gray-950">
        <div className="grid lg:grid-cols-3 gap-8 xl:gap-20">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <section>
              <p className="text-gray-300 leading-relaxed text-20">
                This Disclaimer ("Disclaimer") governs the use of DreamFox.com
                (the "Website"), operated by DreamFox, a trademark of Virtuos
                and part of the Virtuos (www.virtuos.com) group of companies,
                and other affiliated entities ("DreamFox", "we", "our", or
                "us"). By accessing this Website, you acknowledge and agree that
                the following disclaimers apply to all content, communications,
                and services offered herein.
              </p>
            </section>

            {/* 1. No Professional Advisory or Guaranteed Outcomes */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                1. No Professional Advisory or Guaranteed Outcomes
              </h2>
              <p className="text-gray-300 leading-relaxed text-20 mb-4">
                The information, insights, articles, marketing resources, design
                content, AI-generated materials, case studies, and
                recommendations published on this Website are intended solely
                for general informational purposes. Nothing on the Website
                constitutes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-20 ml-4">
                <li>Legal advice</li>
                <li>Financial advice</li>
                <li>Investment advice</li>
                <li>Tax or accounting guidance</li>
                <li>Marketing guarantees or performance warranties</li>
                <li>AI-driven outcome assurances</li>
              </ul>
              <p className="text-gray-300 leading-relaxed text-20 mt-4">
                DreamFox expressly disclaims any liability arising from reliance
                on any information presented.
              </p>
            </section>

            {/* 2. No Client–Agency Relationship */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                2. No Client–Agency Relationship
              </h2>
              <p className="text-gray-300 leading-relaxed text-20">
                Viewing or interacting with the Website does not create a
                professional, advisory, partnership, joint venture, or
                client–agency relationship. Such a relationship is formed only
                after execution of a formal Master Service Agreement (MSA),
                Statement of Work (SOW), or equivalent written instrument.
              </p>
            </section>

            {/* 3. Accuracy and Reliability of Information */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                3. Accuracy and Reliability of Information
              </h2>
              <p className="text-gray-300 leading-relaxed text-20 mb-4">
                Although DreamFox endeavors to maintain accurate and updated
                information, the Website may contain:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-20 ml-4">
                <li>Outdated material</li>
                <li>Typographical errors</li>
                <li>Inaccuracies in data or external references</li>
                <li>Third-party information provided "as-is"</li>
              </ul>
              <p className="text-gray-300 leading-relaxed text-20 mt-4">
                We make no representations or warranties, express or implied,
                regarding completeness, reliability, accuracy, or timeliness of
                the content.
              </p>
            </section>

            {/* 4. Third-Party Content and Partnerships */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                4. Third-Party Content and Partnerships
              </h2>
              <p className="text-gray-300 leading-relaxed text-20 mb-4">
                DreamFox publishes or uses content derived from:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-20 ml-4">
                <li>
                  Strategic partners including Oracle, Salesforce, Microsoft,
                  and others
                </li>
                <li>
                  Licensed providers such as Shutterstock, Canva, Adobe Stock
                </li>
                <li>AI and automation engines</li>
                <li>
                  Third-party research, reports, and public-domain resources
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed text-20 mt-4">
                We do not guarantee the accuracy, legality, or suitability of
                externally sourced content.
              </p>
            </section>

            {/* 5. Use of AI-Generated Content */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                5. Use of AI-Generated Content
              </h2>
              <p className="text-gray-300 leading-relaxed text-20 mb-4">
                DreamFox incorporates artificial intelligence technologies for
                content creation, visual generation, marketing analytics,
                predictions, persona design, and creative workflows. AI output:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-20 ml-4">
                <li>Is not guaranteed to be error-free</li>
                <li>
                  May contain algorithmic interpretation or probabilistic
                  analysis
                </li>
                <li>Must be verified independently</li>
                <li>Should not be relied upon for critical decision-making</li>
              </ul>
              <p className="text-gray-300 leading-relaxed text-20 mt-4">
                All AI-generated content is provided exclusively on an
                informational basis.
              </p>
            </section>

            {/* 6. External Links */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                6. External Links
              </h2>
              <p className="text-gray-300 leading-relaxed text-20 mb-4">
                The Website may include links to external websites, tools, or
                resources. DreamFox:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-20 ml-4">
                <li>Does not endorse such external entities</li>
                <li>
                  Has no control over their content, policies, or data practices
                </li>
                <li>
                  Disclaims all liability arising from external interactions
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed text-20 mt-4">
                Accessing external sites is at your own risk.
              </p>
            </section>

            {/* 7. Limitation of Liability */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                7. Limitation of Liability
              </h2>
              <p className="text-gray-300 leading-relaxed text-20 mb-4">
                To the maximum extent permitted by law, DreamFox, its parent
                entity Virtuos Digital, and all group affiliates expressly
                disclaim liability for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-20 ml-4">
                <li>
                  Direct, indirect, incidental, special, exemplary, or
                  consequential damages
                </li>
                <li>
                  Loss of business, profits, data, goodwill, or reputation
                </li>
                <li>
                  Cyberattacks, malware, unauthorized access, or security
                  breaches
                </li>
                <li>
                  Service interruptions, system errors, or website
                  unavailability
                </li>
                <li>Decisions made based on Website content</li>
              </ul>
              <p className="text-gray-300 leading-relaxed text-20 mt-4">
                Your sole remedy is to discontinue Website usage.
              </p>
            </section>

            {/* 8. Indemnification */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                8. Indemnification
              </h2>
              <p className="text-gray-300 leading-relaxed text-20 mb-4">
                You agree to indemnify and hold harmless DreamFox, its parent
                and affiliate entities, directors, officers, employees,
                licensors, partners, and contractors from all claims, damages,
                losses, liabilities, or expenses arising from:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-20 ml-4">
                <li>Your misuse of the Website</li>
                <li>Violation of these Terms</li>
                <li>Breach of any applicable laws</li>
                <li>Unauthorized use of copyrighted or protected material</li>
              </ul>
            </section>

            {/* 9. Jurisdiction and Governing Law */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                9. Jurisdiction and Governing Law
              </h2>
              <p className="text-gray-300 leading-relaxed text-20">
                This Disclaimer is governed by the laws of the jurisdiction in
                which DreamFox or Virtuos Digital primarily operates. All
                disputes shall be subject to exclusive jurisdiction of courts
                competent in said region.
              </p>
            </section>

            {/* 10. Amendments */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                10. Amendments
              </h2>
              <p className="text-gray-300 leading-relaxed text-20">
                DreamFox reserves the right to revise this Disclaimer at any
                time. Continued use constitutes acceptance of modified terms.
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
                    Disclaimer
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
                  <p className="text-24 font-semibold text-gray-200">10</p>
                </div>

                <div className="pt-6 border-t border-gray-700">
                  <p className="text-18 text-gray-400 mb-3">
                    Related Documents
                  </p>
                  <div className="space-y-2">
                    <Link
                      href="/terms-of-use"
                      className="block text-pink-500 hover:text-pink-400 hover:underline text-18"
                    >
                      Terms of Use →
                    </Link>
                    <Link
                      href="/privacy-policy"
                      className="block text-pink-500 hover:text-pink-400 hover:underline text-18"
                    >
                      Privacy Policy →
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

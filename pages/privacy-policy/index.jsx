import Link from "next/link";

export default function Privacy() {
  return (
    <div className="min-h-screen relative bg-gray-950">
      <div className="bg-[url('/terms_and_condition.webp')] bg-center bg-no-repeat bg-cover sm:mt-0 flex justify-center items-end sm:h-[90vh] lg:h-[60vh] 2xxl:h-[50vh] pt-36 pb-10 text-white sm:py-32">
        <div className="container z-30 relative">
          <p className="text-20">Last Updated: Nov 19, 2025</p>
          <h1 className="text-60 font-semibold mt-4">Privacy Policy</h1>
        </div>
      </div>

      <div className="max-w-7xl px-4 xl:px-0 py-12 lg:py-24 mx-auto bg-gray-950">
        <div className="grid lg:grid-cols-3 gap-8 xl:gap-20">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                Privacy Policy (DreamFox.com)
              </h2>
              <p className="text-gray-300 leading-relaxed text-20">
                This Privacy Policy explains how <strong>DreamFox</strong>, a
                trademark of Virtuos (virtuos.com), collects, processes, stores,
                and protects personal information of visitors ("Users") who
                interact with DreamFox.com.
              </p>
            </section>

            {/* 1. About DreamFox */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                1. About DreamFox
              </h2>
              <p className="text-gray-300 leading-relaxed text-20">
                DreamFox is a global Digital & AI Marketing Agency offering
                brand strategy, marketing transformation, design systems, media
                solutions (through Yippee Media Division), and AI-driven digital
                marketing services. We operate globally with teams in the US,
                India, and partner regions.
              </p>
            </section>

            {/* 2. Information We Collect */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                2. Information We Collect
              </h2>
              <p className="text-gray-300 leading-relaxed text-20 mb-4">
                We collect information in the following ways:
              </p>

              <div className="space-y-4 ml-4">
                <div>
                  <h3 className="text-24 font-semibold text-gray-200 mb-2">
                    2.1. Information You Provide
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-20 mb-3">
                    When you interact with our platform through contact forms,
                    newsletter or campaign subscriptions, download requests for
                    whitepapers, brochures, or case studies, project inquiry
                    forms, career submissions, or feedback forms.
                  </p>
                  <p className="text-gray-300 leading-relaxed text-20">
                    This may include your name, company, designation, email,
                    phone number, region, and message.
                  </p>
                </div>

                <div>
                  <h3 className="text-24 font-semibold text-gray-200 mb-2">
                    2.2. Automatically Collected Data (Cookies & Tracking Tools)
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-20 mb-3">
                    DreamFox uses cookies, analytics tools, and tracking pixels
                    to understand user behavior and improve performance.
                  </p>
                  <p className="text-gray-300 leading-relaxed text-20 mb-3">
                    Cookies help us capture: IP address, location (approximate),
                    device/browser details, session duration, pages visited,
                    click paths, and form interaction patterns.
                  </p>
                  <p className="text-gray-300 leading-relaxed text-20">
                    You may disable cookies through your browser settings.
                    Please read our cookies policy separately.
                  </p>
                </div>

                <div>
                  <h3 className="text-24 font-semibold text-gray-200 mb-2">
                    2.3. AI-Generated Behavioral Insights
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-20">
                    We may use AI tools to interpret aggregated data patterns to
                    enhance user experience, content relevance, and marketing
                    performance. This does not involve selling personal
                    information.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. How We Use Your Information */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-gray-300 leading-relaxed text-20 mb-4">
                We use collected data for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-20 ml-4">
                <li>
                  Responding to inquiries and providing requested services
                </li>
                <li>Sending permission-based marketing emails</li>
                <li>Improving website experience and content</li>
                <li>
                  Personalizing marketing and sales outreach (only with consent)
                </li>
                <li>Analyzing website traffic and campaign performance</li>
                <li>Publishing anonymized insights</li>
                <li>
                  Creating internal dashboards, reports, and service
                  improvements
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed text-20 mt-4">
                We do not sell, rent, or trade your personal data.
              </p>
            </section>

            {/* 4. Email, Marketing, and Communications */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                4. Email, Marketing, and Communications
              </h2>
              <p className="text-gray-300 leading-relaxed text-20 mb-4">
                DreamFox follows strict permission-based email policies:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-20 ml-4">
                <li>You receive marketing mails only if you subscribe</li>
                <li>
                  If an automated email reaches you unintentionally, you may
                  unsubscribe anytime
                </li>
                <li>Unsubscribe links are present in all communications</li>
                <li>
                  You may request complete removal by writing to us directly
                </li>
              </ul>
            </section>

            {/* 5. Use of Content, Images & Media */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                5. Use of Content, Images & Media
              </h2>
              <p className="text-gray-300 leading-relaxed text-20 mb-4">
                DreamFox uses content from:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-20 ml-4">
                <li>Internal creative, strategy, design, and AI teams</li>
                <li>
                  Licensed platforms: Shutterstock, Canva, Adobe Stock, Envato
                </li>
                <li>
                  Approved partner libraries from Oracle, Salesforce, Microsoft,
                  etc.
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed text-20 mt-4">
                We may use your brand logo or project work only after explicit
                written permission.
              </p>
            </section>

            {/* 6. Case Studies & Portfolio Publication */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                6. Case Studies & Portfolio Publication
              </h2>
              <p className="text-gray-300 leading-relaxed text-20">
                Case studies are created only with customer approval. We respect
                confidentiality, NDAs, copyrights, and sensitive business
                information.
              </p>
            </section>

            {/* 7. Data Security & Protection */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                7. Data Security & Protection
              </h2>
              <p className="text-gray-300 leading-relaxed text-20 mb-4">
                DreamFox uses multiple layers of cybersecurity:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-20 ml-4">
                <li>Secure servers & encrypted data channels</li>
                <li>Firewall and intrusion monitoring</li>
                <li>Multi-factor authentication</li>
                <li>Access control & privilege management</li>
                <li>Regular cybersecurity audits</li>
                <li>
                  Prevention of malware, data theft, and unauthorized access
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed text-20 mt-4">
                Despite best efforts, no digital transmission is fully secure.
                Users share data at their discretion.
              </p>
            </section>

            {/* 8. Data Retention & Disposal */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                8. Data Retention & Disposal
              </h2>
              <p className="text-gray-300 leading-relaxed text-20 mb-4">
                DreamFox retains data only for as long as required to fulfill
                business or legal obligations. When no longer needed, data is
                securely deleted using industry-standard disposal methods:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-20 ml-4">
                <li>Database wiping</li>
                <li>Access revocation</li>
                <li>Anonymization</li>
                <li>Secure deletion</li>
              </ul>
            </section>

            {/* 9. Sharing of Data */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                9. Sharing of Data
              </h2>
              <p className="text-gray-300 leading-relaxed text-20 mb-4">
                We may share minimal data with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-20 ml-4">
                <li>DreamFox internal teams</li>
                <li>Virtuos group companies</li>
                <li>Trusted service providers (CRM, Email, Hosting)</li>
                <li>Legal authorities only when required</li>
              </ul>
              <p className="text-gray-300 leading-relaxed text-20 mt-4">
                We do not engage in data selling.
              </p>
            </section>

            {/* 10. Your Rights */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                10. Your Rights
              </h2>
              <p className="text-gray-300 leading-relaxed text-20 mb-4">
                You may request:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-20 ml-4">
                <li>Access to your personal data</li>
                <li>Correction or deletion</li>
                <li>Withdrawal of consent</li>
                <li>Opt-out from marketing</li>
                <li>Limited processing</li>
              </ul>
              <p className="text-gray-300 leading-relaxed text-20 mt-4">
                Requests can be submitted via the website or email.
              </p>
            </section>

            {/* 11. International Data Transfers */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                11. International Data Transfers
              </h2>
              <p className="text-gray-300 leading-relaxed text-20">
                Data may be stored or processed in the US, India, or other
                jurisdictions where DreamFox operates. All transfers follow
                reasonable security practices.
              </p>
            </section>

            {/* 12. Updates to Policy */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                12. Updates to Policy
              </h2>
              <p className="text-gray-300 leading-relaxed text-20">
                We may update this policy periodically. Continued use indicates
                acceptance.
              </p>
            </section>

            {/* Closing Statement */}
            <section>
              <p className="text-gray-300 leading-relaxed text-20 font-semibold">
                By using DreamFox.com, you entrust us with your professional
                identity — and we honour that trust by safeguarding your privacy
                every step of the way.
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
                    Privacy Policy
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
                  <p className="text-24 font-semibold text-gray-200">12</p>
                </div>

                <div className="pt-6 border-t border-gray-700">
                  <p className="text-18 text-gray-400 mb-3">
                    Related Documents
                  </p>
                  <div className="space-y-2">
                    <Link
                      href="/terms-and-conditions"
                      className="block text-pink-400 hover:text-pink-400 hover:underline text-18"
                    >
                      Terms of Use →
                    </Link>
                    <Link
                      href="/disclaimer"
                      className="block text-pink-400 hover:text-pink-400 hover:underline text-18"
                    >
                      Disclaimer →
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

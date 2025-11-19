import Link from "next/link";

export default function SafeHarbour() {
  return (
    <div className="min-h-screen relative bg-gray-950">
      <div className="bg-[url('/terms_and_condition.webp')] bg-center bg-no-repeat bg-cover sm:mt-0 flex justify-center items-end sm:h-[90vh] lg:h-[60vh] 2xxl:h-[50vh] pt-36 pb-10 text-white sm:py-32">
        <div className="container z-30 relative">
          <p className="text-20">Last Updated: Nov 19, 2025</p>
          <h1 className="text-60 font-semibold mt-4">Safe Harbor Policy</h1>
        </div>
      </div>

      <div className="max-w-7xl px-4 xl:px-0 py-12 lg:py-24 mx-auto bg-gray-950">
        <div className="grid lg:grid-cols-3 gap-8 xl:gap-20">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <section>
              <p className="text-gray-300 leading-relaxed text-20">
                The Safe Harbor Policy outlines how DreamFox ensures compliance
                with international data protection standards, ethical data
                handling, and transparent communication practices. DreamFox, a
                division and trademark of Virtuos (virtuos.com), operates
                globally with teams across the US, India, and regional partner
                hubs.
              </p>
            </section>

            {/* Section 1 */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                1. Purpose of the Safe Harbor Policy
              </h2>
              <p className="text-gray-300 leading-relaxed text-20">
                This policy is designed to protect user data, ensure responsible
                processing, and maintain compliance with industry standards
                including GDPR-inspired principles, reasonable security
                practices, and ethical marketing operations. It governs how we
                collect, use, transfer, store, and safeguard personal
                information. You can also read our{" "}
                <Link
                  className="text-pink-400 hover:text-pink-600"
                  target="_blank"
                  href={"/gdpr-policy"}
                >
                  GDPR Policy.
                </Link>
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                2. Commitment to Data Protection
              </h2>
              <p className="text-gray-300 leading-relaxed text-20 mb-4">
                DreamFox follows the principles of:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-20 ml-4">
                <li>
                  <strong>Notice</strong> – Users are informed when data is
                  collected.
                </li>
                <li>
                  <strong>Choice</strong> – Users may opt in or out of
                  marketing.
                </li>
                <li>
                  <strong>Accountability</strong> – Data is used responsibly and
                  stored securely.
                </li>
                <li>
                  <strong>Access</strong> – Users may request details of their
                  stored information.
                </li>
                <li>
                  <strong>Integrity</strong> – Data is kept accurate and
                  updated.
                </li>
                <li>
                  <strong>Security</strong> – Technical and organizational
                  controls protect data.
                </li>
                <li>
                  <strong>Enforcement</strong> – Violations are addressed
                  promptly.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                3. Data Collection Practices
              </h2>
              <p className="text-gray-300 leading-relaxed text-20 mb-4">
                Information is collected through forms, cookies, analytics
                tools, AI insights, and user-submitted content.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-20 ml-4">
                <li>
                  All data is used strictly for professional purposes related to
                  marketing, design, strategy, and digital services.
                </li>
                <li>
                  We do not collect financial data, government-issued IDs, or
                  any sensitive PII without explicit consent.
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                4. Safe Use of AI & Automated Processing
              </h2>
              <p className="text-gray-300 leading-relaxed text-20 mb-4">
                DreamFox employs AI for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-20 ml-4">
                <li>Personalization</li>
                <li>Predictive analytics</li>
                <li>Campaign optimization</li>
                <li>Website experience improvement</li>
                <li>Persona modeling</li>
              </ul>
              <p className="text-gray-300 leading-relaxed text-20 mt-4">
                AI processing is limited to aggregated insights and does not
                identify individuals unless the user explicitly submits their
                details.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                5. Use of Content, Creative Assets & Licensing
              </h2>
              <p className="text-gray-300 leading-relaxed text-20 mb-4">
                DreamFox maintains strict compliance with creative rights:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-20 ml-4">
                <li>
                  All images, stock visuals, and videos are either internally
                  produced or sourced under valid licenses from partners like
                  Shutterstock, Canva, Adobe Stock, or other authorized
                  platforms.
                </li>
                <li>
                  Partner content from Oracle, Salesforce, Microsoft, etc., is
                  used with permission.
                </li>
                <li>
                  AI-generated assets comply with copyright and ethical
                  standards.
                </li>
                <li>
                  Case studies, testimonials, and brand-specific creatives are
                  published only with prior written approval.
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                6. Email Safety & Unsubscribe Compliance
              </h2>
              <p className="text-gray-300 leading-relaxed text-20 mb-4">
                Marketing communication respects global anti-spam standards. We
                ensure:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-20 ml-4">
                <li>Emails are permission-based</li>
                <li>Accidental dispatches include an unsubscribe option</li>
                <li>Requests for removal are honored promptly</li>
                <li>No third-party sharing of subscriber data</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                7. Security & Cyber Protection
              </h2>
              <p className="text-gray-300 leading-relaxed text-20 mb-4">
                DreamFox implements robust cybersecurity including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-20 ml-4">
                <li>SSL encryption</li>
                <li>Firewalls & intrusion detection</li>
                <li>Anti-malware systems</li>
                <li>Data access controls</li>
                <li>Employee cybersecurity training</li>
                <li>Secure development practices</li>
                <li>Regular audits</li>
              </ul>
              <p className="text-gray-300 leading-relaxed text-20 mt-4">
                Any incident or breach is managed through immediate containment,
                investigation, notification (if required), and remediation.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                8. Data Transfer & Global Operations
              </h2>
              <p className="text-gray-300 leading-relaxed text-20">
                As DreamFox operates globally, data may be processed in the US,
                India, or partner countries. Cross-border transfers follow
                industry-standard safeguards.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                9. Data Retention & Disposal
              </h2>
              <p className="text-gray-300 leading-relaxed text-20 mb-4">
                Data is retained only as long as necessary for business
                operations, analytics, or legal requirements. Secure disposal
                methods include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-20 ml-4">
                <li>Wiping databases</li>
                <li>Deleting email records</li>
                <li>Anonymizing old records</li>
                <li>Deactivating user identities</li>
              </ul>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                10. User Rights & Responsibilities
              </h2>
              <p className="text-gray-300 leading-relaxed text-20 mb-4">
                Users may:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-20 ml-4">
                <li>Request access to stored data</li>
                <li>Request corrections</li>
                <li>Withdraw consent</li>
                <li>Seek deletion</li>
                <li>Opt out of marketing communications</li>
              </ul>
              <p className="text-gray-300 leading-relaxed text-20 mt-4">
                Users must provide accurate information and avoid malicious
                inputs, spam, hacking, or misuse of DreamFox systems.
              </p>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                11. Policy Enforcement
              </h2>
              <p className="text-gray-300 leading-relaxed text-20">
                DreamFox ensures compliance through periodic reviews, training,
                and audits across Virtuos Digital group entities.
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
                    Safe Harbor Policy
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
                  <p className="text-24 font-semibold text-gray-200">11</p>
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
                      href="/terms-of-use"
                      className="block text-pink-400 hover:text-pink-400 hover:underline text-18"
                    >
                      Terms of Use →
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

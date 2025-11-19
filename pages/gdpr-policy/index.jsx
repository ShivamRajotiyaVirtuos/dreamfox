import Link from "next/link";

export default function Privacy() {
  return (
    <div className="min-h-screen relative bg-gray-950">
      <div className="bg-[url('/terms_and_condition.webp')] bg-center bg-no-repeat bg-cover sm:mt-0 flex justify-center items-end sm:h-[90vh] lg:h-[60vh] 2xxl:h-[50vh] pt-36 pb-10 text-white sm:py-32">
        <div className="container z-30 relative">
          <p className="text-20">Last Updated: 19 Nov 2025</p>
          <h1 className="text-60 font-semibold mt-4">GDPR Policy</h1>
        </div>
      </div>

      <div className="max-w-7xl px-4 xl:px-0 py-12 lg:py-24 mx-auto bg-gray-950">
        <div className="grid lg:grid-cols-3 gap-8 xl:gap-20">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <section>
              <p className="text-gray-300 leading-relaxed text-20">
                This GDPR Compliance Policy outlines DreamFox's adherence to the
                EU General Data Protection Regulation (GDPR) regarding the
                collection, processing, storage, and transfer of personal data
                belonging to EU residents.
              </p>
            </section>

            {/* 1. Legal Basis for Processing */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                1. Legal Basis for Processing
              </h2>
              <p className="text-gray-300 leading-relaxed text-20 mb-4">
                DreamFox processes personal data lawfully under the following
                bases:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-20 ml-4">
                <li>Consent</li>
                <li>Contractual necessity</li>
                <li>Legitimate business interest</li>
                <li>Compliance with legal obligations</li>
              </ul>
            </section>

            {/* 2. Rights of Data Subjects */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                2. Rights of Data Subjects
              </h2>
              <p className="text-gray-300 leading-relaxed text-20 mb-4">
                EU users have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-20 ml-4">
                <li>Access their data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion ("Right to be Forgotten")</li>
                <li>Restrict processing</li>
                <li>Object to data usage</li>
                <li>Port data elsewhere</li>
                <li>Withdraw consent at any time</li>
                <li>Lodge complaints with EU Data Protection Authorities</li>
              </ul>
              <p className="text-gray-300 leading-relaxed text-20 mt-4">
                Requests must be fulfilled within 30 days.
              </p>
            </section>

            {/* 3. Data Collected */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                3. Data Collected
              </h2>
              <p className="text-gray-300 leading-relaxed text-20 mb-4">
                We collect:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-20 ml-4">
                <li>Identity data (name, company, title)</li>
                <li>Contact data (email, phone)</li>
                <li>Behavioral analytics (via cookies)</li>
                <li>AI-measured insights</li>
                <li>Voluntary form submissions</li>
              </ul>
              <p className="text-gray-300 leading-relaxed text-20 mt-4">
                Sensitive data is not collected without explicit consent.
              </p>
            </section>

            {/* 4. Data Transfers */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                4. Data Transfers
              </h2>
              <p className="text-gray-300 leading-relaxed text-20 mb-4">
                Data may be processed in:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-20 ml-4">
                <li>The United States</li>
                <li>India</li>
                <li>Partner locations</li>
              </ul>
              <p className="text-gray-300 leading-relaxed text-20 mt-4">
                All transfers comply with Standard Contractual Clauses (SCCs) or
                equivalent safeguards.
              </p>
            </section>

            {/* 5. Security Commitments */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                5. Security Commitments
              </h2>
              <p className="text-gray-300 leading-relaxed text-20 mb-4">
                DreamFox employs:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-20 ml-4">
                <li>Encryption</li>
                <li>MFA</li>
                <li>Continuous monitoring</li>
                <li>Data access policies</li>
                <li>Cybersecurity audits</li>
                <li>Breach response mechanisms</li>
              </ul>
            </section>

            {/* 6. Data Retention */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                6. Data Retention
              </h2>
              <p className="text-gray-300 leading-relaxed text-20">
                Data is retained only as necessary for business, regulatory, or
                contractual obligations.
              </p>
            </section>

            {/* 7. Marketing Communications */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                7. Marketing Communications
              </h2>
              <p className="text-gray-300 leading-relaxed text-20 mb-4">
                GDPR-compliant email marketing includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-20 ml-4">
                <li>Explicit opt-ins</li>
                <li>Clear unsubscribe options</li>
                <li>Transparent data usage disclosure</li>
                <li>No unauthorized sharing or selling</li>
              </ul>
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
                    GDPR Policy
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
                  <p className="text-20 text-gray-400 mb-1">Regulation</p>
                  <p className="text-24 font-semibold text-gray-200">EU GDPR</p>
                </div>

                <div>
                  <p className="text-20 text-gray-400 mb-1">Total Sections</p>
                  <p className="text-24 font-semibold text-gray-200">7</p>
                </div>

                <div className="pt-6 border-t border-gray-700">
                  <p className="text-18 text-gray-400 mb-3">
                    Related Documents
                  </p>
                  <div className="space-y-2">
                    <Link
                      href="/privacy-policy"
                      className="block text-pink-500 hover:text-pink-400 hover:underline text-18"
                    >
                      Privacy Policy →
                    </Link>
                    <Link
                      href="/cookie-policy"
                      className="block text-pink-500 hover:text-pink-400 hover:underline text-18"
                    >
                      Cookie Policy →
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

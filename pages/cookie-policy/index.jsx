import Link from "next/link";

export default function Privacy() {
  return (
    <div className="min-h-screen relative bg-gray-950">
      <div className="bg-[url('/terms_and_condition.webp')] bg-center bg-no-repeat bg-cover sm:mt-0 flex justify-center items-end sm:h-[90vh] lg:h-[60vh] 2xxl:h-[50vh] pt-36 pb-10 text-white sm:py-32">
        <div className="container z-30 relative">
          <p className="text-20">Last Updated: Nov 19, 2025</p>
          <h1 className="text-60 font-semibold mt-4">Cookie Policy</h1>
        </div>
      </div>

      <div className="max-w-7xl px-4 xl:px-0 py-12 lg:py-24 mx-auto bg-gray-950">
        <div className="grid lg:grid-cols-3 gap-8 xl:gap-20">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <section>
              <p className="text-gray-300 leading-relaxed text-20">
                This Cookie Policy explains how DreamFox, a trademark of Virtuos
                Digital (VDC), uses cookies, tracking technologies, and
                data-capture tools on DreamFox.com ("Website"). By continuing to
                browse the Website, you consent to the use of cookies in
                accordance with this Policy.
              </p>
            </section>

            {/* 1. What Are Cookies? */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                1. What Are Cookies?
              </h2>
              <p className="text-gray-300 leading-relaxed text-20">
                Cookies are small text files stored on your device when you
                visit a website. They enable recognition of your device, store
                preferences, track behavior, and support analytics and marketing
                activities.
              </p>
            </section>

            {/* 2. Types of Cookies We Use */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                2. Types of Cookies We Use
              </h2>

              <div className="space-y-4 ml-4">
                <div>
                  <h3 className="text-24 font-semibold text-gray-200 mb-2">
                    2.1. Strictly Necessary Cookies
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-20">
                    Required for website functionality, security, and
                    accessibility. These cannot be disabled.
                  </p>
                </div>

                <div>
                  <h3 className="text-24 font-semibold text-gray-200 mb-2">
                    2.2. Performance & Analytics Cookies
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-20 mb-3">
                    Used to analyze user behavior, session duration, bounce
                    rates, page interactions, click paths, and navigation
                    patterns. Tools include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 text-20 ml-4">
                    <li>Google Analytics</li>
                    <li>AI-driven behavioral analysis engines</li>
                    <li>Heatmapping tools</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-24 font-semibold text-gray-200 mb-2">
                    2.3. Functional Cookies
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-20">
                    Used to store preferences such as language, region, device
                    type, and previously submitted form data.
                  </p>
                </div>

                <div>
                  <h3 className="text-24 font-semibold text-gray-200 mb-2">
                    2.4. Marketing & Advertising Cookies
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-20 mb-3">
                    Used for:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 text-20 ml-4">
                    <li>Audience segmentation</li>
                    <li>Retargeting</li>
                    <li>Conversion tracking</li>
                    <li>AI-based marketing automation</li>
                    <li>Email campaign optimization</li>
                  </ul>
                  <p className="text-gray-300 leading-relaxed text-20 mt-3">
                    May include tracking pixels from partners such as Meta,
                    Google, LinkedIn, HubSpot, or marketing automation tools.
                  </p>
                </div>

                <div>
                  <h3 className="text-24 font-semibold text-gray-200 mb-2">
                    2.5. Third-Party Cookies
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-20">
                    Placed by third-party platforms for analytics, advertising,
                    embedded media, or social sharing.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. How DreamFox Uses Cookies */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                3. How DreamFox Uses Cookies
              </h2>
              <p className="text-gray-300 leading-relaxed text-20 mb-4">
                We use cookies to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-20 ml-4">
                <li>Enhance user experience</li>
                <li>Measure website performance</li>
                <li>Personalize marketing campaigns</li>
                <li>Improve content relevance</li>
                <li>Analyze aggregate behavior</li>
                <li>Enable secure sessions</li>
                <li>Support AI-driven analytics and predictions</li>
              </ul>
              <p className="text-gray-300 leading-relaxed text-20 mt-4">
                Data collected is not sold or misused.
              </p>
            </section>

            {/* 4. Managing Cookies */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                4. Managing Cookies
              </h2>
              <p className="text-gray-300 leading-relaxed text-20 mb-4">
                You may accept, decline, or customize cookie preferences via:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-20 ml-4">
                <li>Browser settings</li>
                <li>Cookie banners</li>
                <li>Privacy tools</li>
              </ul>
              <p className="text-gray-300 leading-relaxed text-20 mt-4">
                Declining cookies may impact website functionality.
              </p>
            </section>

            {/* 5. Use of Third-Party Technologies */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                5. Use of Third-Party Technologies
              </h2>
              <p className="text-gray-300 leading-relaxed text-20 mb-4">
                DreamFox may integrate plugins, APIs, scripts, and pixels from:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-20 ml-4">
                <li>Oracle</li>
                <li>Salesforce</li>
                <li>Microsoft</li>
                <li>LinkedIn</li>
                <li>Google</li>
                <li>Adobe</li>
                <li>HubSpot</li>
                <li>Marketing automation platforms</li>
              </ul>
              <p className="text-gray-300 leading-relaxed text-20 mt-4">
                These third parties may collect independent data subject to
                their own privacy policies.
              </p>
            </section>

            {/* 6. Data Retention */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                6. Data Retention
              </h2>
              <p className="text-gray-300 leading-relaxed text-20">
                Cookie data is retained only for the period necessary for
                analytics, operations, or compliance.
              </p>
            </section>

            {/* 7. International Transfers */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                7. International Transfers
              </h2>
              <p className="text-gray-300 leading-relaxed text-20">
                Cookie-based data may be transferred to the US, India, or other
                operational jurisdictions following industry-standard
                safeguards.
              </p>
            </section>

            {/* 8. Updates */}
            <section>
              <h2 className="text-30 font-semibold text-white mb-4">
                8. Updates
              </h2>
              <p className="text-gray-300 leading-relaxed text-20">
                The Cookie Policy may be revised periodically without prior
                notice.
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
                    Cookie Policy
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
                  <p className="text-24 font-semibold text-gray-200">
                    Virtuos Digital
                  </p>
                </div>

                <div>
                  <p className="text-20 text-gray-400 mb-1">Platform</p>
                  <p className="text-24 font-semibold text-gray-200">
                    DreamFox.com
                  </p>
                </div>

                <div>
                  <p className="text-20 text-gray-400 mb-1">Total Sections</p>
                  <p className="text-24 font-semibold text-gray-200">8</p>
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
                      href="/terms-of-use"
                      className="block text-pink-500 hover:text-pink-400 hover:underline text-18"
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

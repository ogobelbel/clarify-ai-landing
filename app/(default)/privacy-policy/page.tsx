'use client'
import PageIllustration from "@/components/page-illustration";

export default function PrivacyPolicy() {
  return (
      <section className="relative">
        <PageIllustration />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Content */}
          <div className="pb-12 pt-32 md:pb-5 md:pt-40">
            {/* Section header */}
            <div className="pb-12 text-center md:pb-16">
              <h1
                  className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
                  data-aos="zoom-y-out"
                  data-aos-delay={150}
              >
                Privacy Policy
              </h1>
              <div className="mx-auto max-w-3xl text-left">
                {/* Introduction */}
                <div className="mb-8" data-aos="zoom-y-out" data-aos-delay={200}>
                  <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                  <p className="text-lg text-gray-700">
                    Clarify AI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our Clarify AI extension ("the Extension"). By using the Extension, you agree to the collection and use of information in accordance with this policy.
                  </p>
                </div>

                {/* Information We Collect */}
                <div className="mb-8" data-aos="zoom-y-out" data-aos-delay={250}>
                  <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
                  <h3 className="text-xl font-semibold mb-2">Personal Data:</h3>
                  <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
                    <li>Google Authentication Data: We collect your name and email address through Google authentication.</li>
                  </ul>
                  <h3 className="text-xl font-semibold mb-2">Subscription Data:</h3>
                  <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
                    <li>Subscription Status: We collect and store information about your subscription status (free trial, active, cancelled), subscription type (monthly/yearly), and subscription dates (start date, renewal date, trial end date).</li>
                    <li>Payment Processing: We do NOT collect or store your payment card details, billing address, or any sensitive payment information. All payment processing is handled securely by our third-party payment processor, Stripe.</li>
                  </ul>
                  <h3 className="text-xl font-semibold mb-2">Usage Data:</h3>
                  <ul className="list-disc list-inside text-lg text-gray-700">
                    <li>Viewed Videos: We collect data about videos you have processed, including video names and durations.</li>
                    <li>Location Data: We collect information about your country to select the appropriate language.</li>
                    <li>Device Information: We gather device details for statistical purposes.</li>
                  </ul>
                </div>

                {/* How We Use Information */}
                <div className="mb-8" data-aos="zoom-y-out" data-aos-delay={300}>
                  <h2 className="text-2xl font-bold mb-4">3. How We Use Information</h2>
                  <p className="text-lg text-gray-700 mb-4">We use the collected data to:</p>
                  <ul className="list-disc list-inside text-lg text-gray-700">
                    <li>Enhance your experience within the Extension</li>
                    <li>Manage your subscription and provide access to premium features</li>
                    <li>Send you subscription-related notifications (activation confirmations, renewal notices)</li>
                    <li>Send you promotional communications about new features, plan upgrades, and special offers (you can opt out at any time)</li>
                    <li>Conduct general statistical analysis in rare cases</li>
                    <li>Send you notifications about important events or updates</li>
                  </ul>
                </div>

                {/* Data Sharing and Disclosure */}
                <div className="mb-8" data-aos="zoom-y-out" data-aos-delay={350}>
                  <h2 className="text-2xl font-bold mb-4">4. Data Sharing and Disclosure</h2>
                  <p className="text-lg text-gray-700 mb-4">
                    We do not share, sell, or disclose your personal information to third parties, except:
                  </p>
                  <ul className="list-disc list-inside text-lg text-gray-700">
                    <li><strong>Payment Processing</strong>: We use Stripe as our payment processor. When you make a purchase, you will be directed to Stripe's secure checkout page. Stripe may collect and process your payment information according to their privacy policy. We do not receive or store your payment card information.</li>
                  </ul>
                </div>

                {/* Use of Cookies and Similar Technologies */}
                <div className="mb-8" data-aos="zoom-y-out" data-aos-delay={400}>
                  <h2 className="text-2xl font-bold mb-4">5. Use of Cookies and Similar Technologies</h2>
                  <p className="text-lg text-gray-700">
                    We do not use cookies within our Extension. However, Google may use cookies for authentication purposes, and Stripe may use cookies during the payment process.
                  </p>
                </div>

                {/* Third-Party Services */}
                <div className="mb-8" data-aos="zoom-y-out" data-aos-delay={450}>
                  <h2 className="text-2xl font-bold mb-4">6. Third-Party Services</h2>
                  <p className="text-lg text-gray-700 mb-4">
                    We use the following third-party services:
                  </p>
                  <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
                    <li><strong>Google Services</strong>: For authentication and Google's Gemini service for generating summaries. These services may collect certain data under Google's Privacy Policy.</li>
                    <li><strong>Stripe</strong>: For payment processing and subscription management. When you subscribe to our service, you will interact directly with Stripe's secure payment system. Stripe's Privacy Policy governs their collection and use of your payment information. You can review Stripe's Privacy Policy at: <a href="https://stripe.com/privacy" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">https://stripe.com/privacy</a></li>
                  </ul>
                  <p className="text-lg text-gray-700">
                    All payment data is securely processed and stored by Stripe. We only receive confirmation of your subscription status and non-sensitive transaction details.
                  </p>
                </div>

                {/* Data Security */}
                <div className="mb-8" data-aos="zoom-y-out" data-aos-delay={500}>
                  <h2 className="text-2xl font-bold mb-4">7. Data Security</h2>
                  <p className="text-lg text-gray-700">
                    We implement security measures to protect your data, including encryption and secure servers. Authentication is handled through Google integration for secure, passwordless access. Data is stored on encrypted servers located in Europe with high levels of protection provided by MongoDB. Your payment information is processed through Stripe's PCI-DSS compliant infrastructure, ensuring the highest level of payment security.
                  </p>
                </div>

                {/* Data Retention */}
                <div className="mb-8" data-aos="zoom-y-out" data-aos-delay={550}>
                  <h2 className="text-2xl font-bold mb-4">8. Data Retention</h2>
                  <p className="text-lg text-gray-700">
                    We retain user data until you request deletion or after one year of inactivity. Subscription status information may be retained for legal and accounting purposes as required by applicable laws. You can request deletion of your data by contacting us at support@clarify-ai.org.
                  </p>
                </div>

                {/* User Rights and Choices */}
                <div className="mb-8" data-aos="zoom-y-out" data-aos-delay={600}>
                  <h2 className="text-2xl font-bold mb-4">9. User Rights and Choices</h2>
                  <p className="text-lg text-gray-700 mb-4">You have the right to:</p>
                  <ul className="list-disc list-inside text-lg text-gray-700">
                    <li>Access and correct your personal information</li>
                    <li>Request deletion of your data (contact us at support@clarify-ai.org)</li>
                    <li>Manage your subscription, view billing history, and cancel your subscription through the subscription management link provided in the Extension</li>
                    <li>Opt out of promotional emails at any time by using the unsubscribe link in our emails</li>
                    <li>Continue using the free version of the Extension without providing payment information</li>
                  </ul>
                </div>

                {/* Free Trial */}
                <div className="mb-8" data-aos="zoom-y-out" data-aos-delay={650}>
                  <h2 className="text-2xl font-bold mb-4">10. Free Trial</h2>
                  <p className="text-lg text-gray-700">
                    We offer a 3-day free trial that does not require payment information. No charges will be applied during the trial period. After the trial ends, you can choose to subscribe to a paid plan or continue with limited free features.
                  </p>
                </div>

                {/* Compliance with Laws */}
                <div className="mb-8" data-aos="zoom-y-out" data-aos-delay={700}>
                  <h2 className="text-2xl font-bold mb-4">11. Compliance with Laws</h2>
                  <p className="text-lg text-gray-700">
                    Our services are available to users worldwide. We are committed to complying with all applicable data protection laws, including GDPR.
                  </p>
                </div>

                {/* Children's Privacy */}
                <div className="mb-8" data-aos="zoom-y-out" data-aos-delay={750}>
                  <h2 className="text-2xl font-bold mb-4">12. Children's Privacy</h2>
                  <p className="text-lg text-gray-700">
                    Our Extension does not have age restrictions and can be used by children if necessary. We do not share data with third parties (except for payment processing through Stripe for adult subscribers), and all data is securely stored. Subscription purchases require a valid payment method and should be made by adults only.
                  </p>
                </div>

                {/* Changes to This Privacy Policy */}
                <div className="mb-8" data-aos="zoom-y-out" data-aos-delay={800}>
                  <h2 className="text-2xl font-bold mb-4">13. Changes to This Privacy Policy</h2>
                  <p className="text-lg text-gray-700">
                    We will notify you of any changes to this privacy policy via email and through updates in the web interface. Changes will take effect immediately upon posting on this page.
                  </p>
                </div>

                {/* Contact Information */}
                <div className="mb-8" data-aos="zoom-y-out" data-aos-delay={850}>
                  <h2 className="text-2xl font-bold mb-4">14. Contact Information</h2>
                  <p className="text-lg text-gray-700">
                    If you have any questions or concerns about this Privacy Policy, please contact us at:
                  </p>
                  <p className="text-lg text-gray-700">Email: support@clarify-ai.org</p>
                </div>

                {/* Notifications */}
                <div className="mb-8" data-aos="zoom-y-out" data-aos-delay={900}>
                  <h2 className="text-2xl font-bold mb-4">15. Notifications</h2>
                  <p className="text-lg text-gray-700 mb-4">We may send you:</p>
                  <ul className="list-disc list-inside text-lg text-gray-700">
                    <li>Important notifications regarding changes to our services or other significant information</li>
                    <li>Subscription-related emails (activation confirmations, trial expiration notices)</li>
                    <li>Promotional emails about features and offers (with opt-out option)</li>
                  </ul>
                </div>

                {/* Last Updated */}
                <div className="text-lg text-gray-700" data-aos="zoom-y-out" data-aos-delay={950}>
                  <p>Last updated: 16.08.2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
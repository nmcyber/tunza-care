import { Link } from "react-router-dom";

export default function TermsConditions() {
  return (
    <main className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="mb-8">
        <Link href="/" className="text-[#1a6b9f] hover:underline mb-4 inline-flex items-center">
          ← Back to Home
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Terms and Conditions</h1>
        <p className="text-gray-500">
          Last Updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>
            Welcome to Tunza Care Services. These Terms and Conditions govern your use of our services and website. By
            accessing our services or website, you agree to be bound by these Terms and Conditions.
          </p>
          <p>
            Please read these Terms and Conditions carefully before engaging our services. If you do not agree with any
            part of these terms, please do not use our services or website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Service Agreement</h2>
          <p>
            Our services are provided under a Service Agreement that outlines the specific care and support services to
            be delivered, the terms of service delivery, and the associated fees and charges.
          </p>
          <p>
            The Service Agreement forms part of these Terms and Conditions. In the event of any inconsistency between
            these Terms and Conditions and the Service Agreement, the Service Agreement will prevail to the extent of
            the inconsistency.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. NDIS Participants</h2>
          <p>
            For clients who are NDIS participants, our services are provided in accordance with the NDIS Price Guide and
            Support Catalogue, the NDIS Terms of Business, and the NDIS Code of Conduct.
          </p>
          <p>
            We will work with you to ensure that the services we provide align with your NDIS plan goals and are
            delivered within the funding available in your plan.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Our Services</h2>
          <p>
            Tunza Care Services provides a range of disability support and care services, including but not limited to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Personal care and daily living assistance</li>
            <li>Transport options</li>
            <li>24/7 support</li>
            <li>Social and community participation</li>
            <li>Employment support</li>
            <li>Individual living options (ILO)</li>
            <li>Supporting independent living (SIL)</li>
            <li>Level 2 Support Coordination</li>
            <li>Respite care</li>
          </ul>
          <p>The specific services to be provided to you will be detailed in your Service Agreement.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Your Responsibilities</h2>
          <p>As a client of Tunza Care Services, you agree to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide accurate and complete information about your needs, preferences, and health conditions</li>
            <li>Treat our staff with respect and dignity</li>
            <li>Provide a safe working environment for our staff in your home</li>
            <li>Give reasonable notice for cancellations or changes to scheduled services</li>
            <li>Pay for services in accordance with the agreed payment terms</li>
            <li>Inform us promptly of any changes to your NDIS plan or funding</li>
            <li>Participate in the planning and review of your services</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Our Responsibilities</h2>
          <p>Tunza Care Services commits to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide services with care, skill, and diligence</li>
            <li>Respect your privacy, dignity, and independence</li>
            <li>Protect your personal and health information</li>
            <li>Respond promptly to your inquiries and concerns</li>
            <li>Provide trained and qualified staff</li>
            <li>Comply with all relevant laws, regulations, and standards</li>
            <li>Maintain appropriate insurance coverage</li>
            <li>Continuously improve our services</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Fees and Payment</h2>
          <p>
            Our fees are based on the NDIS Price Guide for NDIS participants or as specified in your Service Agreement
            for private clients.
          </p>
          <p>
            Payment terms, methods, and conditions are outlined in your Service Agreement. We reserve the right to
            suspend services if payments are not made in accordance with the agreed terms.
          </p>
          <p>
            Additional charges may apply for services provided outside of regular hours, on public holidays, or for
            specialized support.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Cancellations and Changes</h2>
          <p>
            We understand that circumstances may change, requiring adjustments to scheduled services. Our cancellation
            policy is as follows:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>For NDIS participants, cancellations are managed in accordance with the NDIS Price Guide</li>
            <li>For private clients, cancellation terms are specified in your Service Agreement</li>
          </ul>
          <p>
            We reserve the right to change, suspend, or discontinue any aspect of our services at any time, including
            hours of availability and content. We will provide reasonable notice of any such changes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Termination of Services</h2>
          <p>
            Either party may terminate the Service Agreement by providing notice as specified in the Agreement. We
            reserve the right to terminate services immediately if:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>You breach these Terms and Conditions or your Service Agreement</li>
            <li>Your behavior poses a risk to our staff or others</li>
            <li>Your NDIS funding is exhausted or withdrawn</li>
            <li>We are unable to meet your needs safely and effectively</li>
          </ul>
          <p>Upon termination, you will be responsible for payment of any outstanding fees for services provided.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Feedback and Complaints</h2>
          <p>
            We value your feedback and are committed to resolving any concerns or complaints promptly and fairly. If you
            have a complaint about our services, please:
          </p>
          <ol className="list-decimal pl-6 mb-4">
            <li>Discuss your concerns with your support worker or coordinator</li>
            <li>If the issue is not resolved, contact our management team</li>
            <li>
              If you are still not satisfied, you may contact the NDIS Quality and Safeguards Commission or other
              relevant external bodies
            </li>
          </ol>
          <p>Our detailed Complaints Handling Policy is available upon request.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">11. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Tunza Care Services excludes all liability for any loss, damage, or
            injury arising from the use of our services or website. Where liability cannot be excluded, our liability is
            limited to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              In the case of services, the re-supply of those services or the cost of having those services re-supplied
            </li>
            <li>
              In the case of goods, the replacement or repair of the goods or the cost of replacing or repairing the
              goods
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">12. Indemnity</h2>
          <p>
            You agree to indemnify and hold harmless Tunza Care Services, its officers, employees, and agents from and
            against any claims, liabilities, damages, losses, and expenses arising out of or in any way connected with
            your use of our services or breach of these Terms and Conditions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">13. Intellectual Property</h2>
          <p>
            All content on our website, including text, graphics, logos, images, and software, is the property of Tunza
            Care Services or its content suppliers and is protected by Australian and international copyright laws.
          </p>
          <p>
            You may not reproduce, distribute, modify, or create derivative works from any content without our prior
            written consent.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">14. Governing Law</h2>
          <p>
            These Terms and Conditions are governed by the laws of Western Australia, Australia. Any disputes arising
            under these Terms and Conditions will be subject to the exclusive jurisdiction of the courts of Western
            Australia.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">15. Changes to Terms and Conditions</h2>
          <p>
            We may update these Terms and Conditions from time to time to reflect changes in our practices or for other
            operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new
            Terms and Conditions on our website and updating the "Last Updated" date.
          </p>
          <p>
            Your continued use of our services after any such changes constitutes your acceptance of the new Terms and
            Conditions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">16. Contact Us</h2>
          <p>If you have any questions or concerns about these Terms and Conditions, please contact us at:</p>
          <div className="mt-4">
            <p>
              <strong>Tunza Care Services</strong>
            </p>
            <p>6/15 Pattie Street</p>
            <p>Cannington WA 6107</p>
            <p>Phone: 08 9387 6326</p>
            <p>Email: info@tunzacare.com.au</p>
          </div>
        </section>
      </div>
    </main>
  )
}


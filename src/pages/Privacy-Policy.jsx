import React from 'react'
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <main className="container mx-auto px-4 pt-24 pb-16 md:max-w-4xl 2xl:max-w-6xl">
      <div className="mb-8">
        <Link to="/" className="text-[#1a6b9f] hover:underline mb-4 inline-flex items-center">
          ← Back to Home
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Privacy Policy</h1>
        <p className="text-gray-500">
          Last Updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>
            Tunza Care Services ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your information when you use our services or visit
            our website.
          </p>
          <p>
            We understand the importance of privacy, particularly when it comes to health and personal care information.
            We are bound by the Australian Privacy Principles (APPs) contained in the Privacy Act 1988 (Cth) and other
            applicable laws governing the protection of personal and health information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <h3 className="text-xl font-medium mt-4 mb-2">2.1 Personal Information</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Name, address, email address, and phone number</li>
            <li>Date of birth and gender</li>
            <li>Emergency contact details</li>
            <li>Financial information for billing purposes</li>
            <li>NDIS plan details and reference numbers</li>
            <li>Government-issued identification</li>
          </ul>

          <h3 className="text-xl font-medium mt-4 mb-2">2.2 Health Information</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Medical history and conditions</li>
            <li>Disability information</li>
            <li>Treatment plans and care requirements</li>
            <li>Medication information</li>
            <li>Healthcare provider details</li>
          </ul>

          <h3 className="text-xl font-medium mt-4 mb-2">2.3 Website Usage Information</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>IP address and browser type</li>
            <li>Pages visited and time spent on our website</li>
            <li>Referring website or source</li>
            <li>Device information</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. How We Collect Information</h2>
          <p>We collect information through:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Direct interactions when you register for our services</li>
            <li>Intake and assessment processes</li>
            <li>Communications with our staff</li>
            <li>Referrals from healthcare providers or the NDIS</li>
            <li>Our website and online forms</li>
            <li>Cookies and similar technologies</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide and manage our care services</li>
            <li>Develop personalized care plans</li>
            <li>Communicate with you about your care</li>
            <li>Process payments and handle billing</li>
            <li>Comply with NDIS requirements and other legal obligations</li>
            <li>Improve our services and develop new offerings</li>
            <li>Ensure the safety and security of our clients and staff</li>
            <li>Respond to your inquiries and provide customer support</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Disclosure of Your Information</h2>
          <p>We may share your information with:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Healthcare providers involved in your care</li>
            <li>The National Disability Insurance Agency (NDIA) and NDIS Quality and Safeguards Commission</li>
            <li>Government agencies when required by law</li>
            <li>
              Third-party service providers who assist us in operating our business (e.g., payment processors, IT
              services)
            </li>
            <li>Emergency services when necessary</li>
          </ul>
          <p>
            We will not sell, trade, or otherwise transfer your information to outside parties for marketing purposes
            without your consent.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information from unauthorized access,
            alteration, disclosure, or destruction. These measures include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Secure storage systems for physical and electronic records</li>
            <li>Access controls and authentication procedures</li>
            <li>Staff training on privacy and data protection</li>
            <li>Regular security assessments and updates</li>
          </ul>
          <p>
            While we strive to use commercially acceptable means to protect your information, no method of transmission
            over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Your Rights and Choices</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate or incomplete information</li>
            <li>Withdraw consent for certain data processing activities</li>
            <li>Lodge a complaint about how we handle your information</li>
            <li>Request deletion of your information (subject to legal requirements)</li>
          </ul>
          <p>To exercise these rights, please contact us using the details provided in the "Contact Us" section.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Retention of Information</h2>
          <p>
            We retain your personal information for as long as necessary to fulfill the purposes outlined in this
            Privacy Policy, unless a longer retention period is required or permitted by law. For example, we may need
            to retain health records for a minimum period to comply with healthcare regulations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices or for other
            operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new
            Privacy Policy on this page and updating the "Last Updated" date.
          </p>
          <p>
            We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting
            your information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
          </p>
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


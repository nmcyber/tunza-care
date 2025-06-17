import ContactSection from "@/components/Contact/contact-section"
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Tunza Care Home Care Support Services</title>
        <meta name="description" content="Get in touch with Tunza Care. We're here to answer your questions about our home care support services." />
        <meta name="keywords" content="contact Tunza Care, care support contact, healthcare inquiry, service information, location details" />
        <link rel="canonical" href="http://192.168.28.25:5174/contact" />
      </Helmet>
    <main className="min-h-screen relative mt-20 md:mt-20 ">
      <div className="bg-primary text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            We're here to help. Reach out to us with any questions or inquiries.
          </p>
        </div>
      </div>

      <ContactSection />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Office Hours</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are available to assist you during the following hours. For emergencies outside these hours, please
              call our emergency support line.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Office Hours</h3>
              <p className="text-gray-600">Monday - Friday: 8:30 AM - 5:00 PM</p>
              <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Support Hours</h3>
              <p className="text-gray-600">24/7 Support Available</p>
              <p className="text-gray-600">Support Line: 0469 842 289</p>
              <p className="text-gray-600 mt-2">For non-urgent matters, please use the contact form.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Emergency Line</h3>
              <p className="text-gray-600">24/7</p>
              <p className="text-gray-600">Call:  0469 842 289</p>
              <p className="text-gray-600">Life threating, call: 000</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Service Areas</h3>
              <p className="text-gray-600">Perth Metropolitan Area</p>
              <p className="text-gray-600">Cunderdin</p>
              <p className="text-gray-600">Kojonup</p>
              <p className="text-gray-600 mt-2">And surrounding areas</p>
            </div>
          </div>
        </div>
      </section>

      <section className="h-[400px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13799.40866685036!2d115.9214863!3d-32.0651359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32bcd0f3e1f9d1%3A0x504f0b535df4880!2sCanning%20Vale%20WA%206155%2C%20Australia!5e0!3m2!1sen!2sus!4v1648226723553!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Tunza Care Services Location"
        ></iframe>
      </section>
    </main>
    {/* 6/15 Pattie Street */}
    </>
  )
}


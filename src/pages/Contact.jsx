import ContactSection from "@/components/Contact/contact-section"
import { CONTACT_INFO, MAP_EMBED_URL } from '@/constants';
import { Helmet } from 'react-helmet-async';

const PageHeader = ({ title, description }) => (
  <div className="bg-primary text-white py-16 px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
      <p className="text-xl max-w-2xl mx-auto">{description}</p>
    </div>
  </div>
);

const InfoCard = ({ icon: Icon, title, children }) => (
  <div className="bg-gray-50 p-6 rounded-xl text-center">
    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
      <Icon className="h-8 w-8 text-primary" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    {children}
  </div>
);

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Tunza Care Home Care Support Services</title>
        <meta name="description" content="Get in touch with Tunza Care. We're here to answer your questions about our home care support services." />
        <meta name="keywords" content="contact Tunza Care, care support contact, healthcare inquiry, service information, location details" />
        <link rel="canonical" href=" https://tunza-care.nmcyber.com/contact-us" />
      </Helmet>
      <main className="min-h-screen relative mt-20">
        <PageHeader 
          title="Contact Us"
          description="We're here to help. Reach out to us with any questions or inquiries."
        />

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
              {Object.values(CONTACT_INFO).map(({ icon, title, details }) => (
                <InfoCard key={title} icon={icon} title={title}>
                  {details.map((detail, index) => (
                    <p 
                      key={index} 
                      className={`text-gray-600 ${index === details.length - 1 ? 'mt-2' : ''}`}
                    >
                      {detail}
                    </p>
                  ))}
                </InfoCard>
              ))}
            </div>
          </div>
        </section>

        <section className="h-[400px] relative">
          <iframe
            src={MAP_EMBED_URL}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Tunza Care Services Location"
          />
        </section>
      </main>
    </>
  )
}


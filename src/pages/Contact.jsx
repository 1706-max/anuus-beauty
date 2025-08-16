import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../utils/constants';

// --- SVG Icons for Reusability ---
const LocationIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const EmailIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const HoursIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const CheckIcon = () => (
  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const SpinnerIcon = () => (
  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);

// --- Main Component ---
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Animation on load
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission (Replace with actual API call)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
      // Here you would typically send formData to your backend
      // const response = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
      // if (!response.ok) throw new Error('Network response was not ok');
      
      setIsSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
      // Handle error (e.g., show error message to user)
    } finally {
      setIsLoading(false);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }
  };

  // Service options
  const serviceOptions = [
    'Beauty Services',
    'Fashion Design',
    'Bridal Package',
    'Spa Treatment',
    'Hair Styling',
    'Makeup Application',
    'Nail Art',
    'Consultation',
    'Other'
  ];

  return (
    <div className="bg-cream-white">
      {/* Hero Section */}
      <section className="relative bg-primary-pink py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="heading-1 text-deep-rose mb-6 animate-fade-in-up">Get In Touch</h1>
          <p className="body-large text-charcoal-gray max-w-3xl mx-auto animate-fade-in-up animation-delay-100">
            We'd love to hear from you. Reach out to schedule an appointment or ask any questions
            about our beauty and fashion services.
          </p>
        </div>
      </section>

      {/* Contact Content - Corrected Layout */}
      <section className={`section transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto px-4">
          {/* Changed grid to a single column layout since the form is removed */}
          <div className="grid grid-cols-1 gap-12"> 

            {/* Combined Contact Info, Social Media, and Quick Contact into one column */}
            <div>
              {/* Contact Us Card */}
              <div className="card card-padding mb-8">
                <h2 className="heading-2 text-deep-rose mb-8">Contact Us</h2>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-pink rounded-full flex items-center justify-center mr-6 flex-shrink-0 text-deep-rose">
                      <LocationIcon />
                    </div>
                    <div>
                      <h3 className="heading-4 text-deep-rose mb-2">Our Location</h3>
                      <p className="text-charcoal-gray">
                        {BUSINESS_INFO.address}<br />
                        {BUSINESS_INFO.city}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-pink rounded-full flex items-center justify-center mr-6 flex-shrink-0 text-deep-rose">
                      <PhoneIcon />
                    </div>
                    <div>
                      <h3 className="heading-4 text-deep-rose mb-2">Phone</h3>
                      <p className="text-charcoal-gray">
                        <a
                          href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
                          className="hover:text-deep-rose transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-deep-rose"
                        >
                          {BUSINESS_INFO.phone}
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-pink rounded-full flex items-center justify-center mr-6 flex-shrink-0 text-deep-rose">
                      <EmailIcon />
                    </div>
                    <div>
                      <h3 className="heading-4 text-deep-rose mb-2">Email</h3>
                      <p className="text-charcoal-gray">
                        <a
                          href={`mailto:${BUSINESS_INFO.email}`}
                          className="hover:text-deep-rose transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-deep-rose"
                        >
                          {BUSINESS_INFO.email}
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-pink rounded-full flex items-center justify-center mr-6 flex-shrink-0 text-deep-rose">
                      <HoursIcon />
                    </div>
                    <div>
                      <h3 className="heading-4 text-deep-rose mb-2">Business Hours</h3>
                      <div className="text-charcoal-gray space-y-1">
                        {Object.entries(BUSINESS_INFO.hours).map(([day, hours]) => (
                          <div key={day} className="flex justify-between">
                            <span className="capitalize">{day}:</span>
                            <span>{hours}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Follow Me Card */}
              <div className="card card-padding mb-8"> {/* Added mb-8 for spacing */}
                <h3 className="heading-3 text-deep-rose mb-6">Follow Me</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/anuusboutique/" // Removed extra spaces
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-instagram rounded-full flex items-center justify-center text-white hover:bg-instagram/80 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-instagram"
                    aria-label="Visit our Instagram"
                  >
                    <InstagramIcon />
                  </a>
                  <a
                    href="https://facebook.com/anuusboutique" // Removed extra spaces
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-facebook rounded-full flex items-center justify-center text-white hover:bg-facebook/80 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-facebook"
                    aria-label="Visit our Facebook"
                  >
                    <FacebookIcon />
                  </a>
                  <a
                    href={BUSINESS_INFO.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-whatsapp rounded-full flex items-center justify-center text-white hover:bg-whatsapp/80 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-whatsapp"
                    aria-label="Chat with us on WhatsApp"
                  >
                    <WhatsAppIcon />
                  </a>
                </div>
              </div>

              {/* Quick Contact Card - Moved inside the main left column div */}
              <div className="card card-padding"> {/* Removed mt-8, added mb-8 to the Follow Me card instead */}
                <h3 className="heading-3 text-deep-rose mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <a
                    href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
                    className="flex items-center p-4 bg-primary-pink rounded-lg hover:bg-primary-pink/80 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-deep-rose"
                  >
                    <div className="w-10 h-10 bg-deep-rose rounded-full flex items-center justify-center mr-4 text-white flex-shrink-0">
                      <PhoneIcon />
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal-gray">Call Us Now</p>
                      <p className="text-sm text-medium-gray">{BUSINESS_INFO.phone}</p>
                    </div>
                  </a>

                  <a
                    href={BUSINESS_INFO.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-primary-pink rounded-lg hover:bg-primary-pink/80 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-deep-rose"
                  >
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-4 text-white flex-shrink-0">
                      <WhatsAppIcon />
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal-gray">WhatsApp Us</p>
                      <p className="text-sm text-medium-gray">Quick response</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* The entire right column div (containing the form) was removed */}
          </div>
        </div>
      </section>

      {/* Google Maps Section - No changes needed here */}
      <section className="section bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-deep-rose mb-4">Find Us</h2>
            <p className="body-large text-charcoal-gray max-w-3xl mx-auto">
              Visit our beautiful salon and boutique for a personalized consultation.
            </p>
          </div>

          <div className="card overflow-hidden">
            {/* Embedded Google Map - Corrected attributes and style */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d480.8032181036637!2d79.50602951149145!3d15.407556086737136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4b2fb6ce9b5033%3A0x4e4b57a3cb65296b!2sANU&#39;S%20BEAUTY%20PARLOUR!5e0!3m2!1sen!2sin!4v1755327571159!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: '0' }} // Corrected style prop
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" // Corrected attribute name
              title="Anuus Beauty Parlour & Boutique Location"
              className="w-full"
            ></iframe>

            <div className="p-6 bg-white">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h3 className="heading-4 text-deep-rose mb-2">Anuus Beauty Parlor & Boutique</h3>
                  <p className="text-charcoal-gray">
                    {BUSINESS_INFO.address}<br />
                    {BUSINESS_INFO.city}
                  </p>
                </div>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(BUSINESS_INFO.address + ', ' + BUSINESS_INFO.city)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-deep-rose"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - No changes needed here */}
      <section className="section bg-deep-rose">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-2 text-white mb-6">Ready to Get Started?</h2>
          <p className="body-large text-cream-white mb-8 max-w-3xl mx-auto">
            Book your appointment today and experience the Anuus difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
              className="btn-secondary btn-large focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              Call Now
            </a>
            <a
              href={BUSINESS_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost btn-large text-white border-white hover:bg-white hover:text-deep-rose focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              WhatsApp Chat
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
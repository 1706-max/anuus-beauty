import React, { useState } from 'react'
import { BUSINESS_INFO } from '../utils/constants'

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 1500);
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
          <h1 className="heading-1 text-deep-rose mb-6">Get In Touch</h1>
          <p className="body-large text-charcoal-gray max-w-3xl mx-auto">
            We'd love to hear from you. Reach out to schedule an appointment or ask any questions 
            about our beauty and fashion services.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div>
              <div className="card card-padding mb-8">
                <h2 className="heading-2 text-deep-rose mb-8">Contact Information</h2>
                
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex">
                    <div className="w-12 h-12 bg-primary-pink rounded-full flex items-center justify-center mr-6 flex-shrink-0 text-deep-rose">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
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
                  <div className="flex">
                    <div className="w-12 h-12 bg-primary-pink rounded-full flex items-center justify-center mr-6 flex-shrink-0 text-deep-rose">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="heading-4 text-deep-rose mb-2">Phone</h3>
                      <p className="text-charcoal-gray">
                        <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`} className="hover:text-deep-rose transition-colors">
                          {BUSINESS_INFO.phone}
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  {/* Email */}
                  <div className="flex">
                    <div className="w-12 h-12 bg-primary-pink rounded-full flex items-center justify-center mr-6 flex-shrink-0 text-deep-rose">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="heading-4 text-deep-rose mb-2">Email</h3>
                      <p className="text-charcoal-gray">
                        <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-deep-rose transition-colors">
                          {BUSINESS_INFO.email}
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  {/* Hours */}
                  <div className="flex">
                    <div className="w-12 h-12 bg-primary-pink rounded-full flex items-center justify-center mr-6 flex-shrink-0 text-deep-rose">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
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
              
              {/* Social Media */}
              <div className="card card-padding">
                <h3 className="heading-3 text-deep-rose mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-instagram rounded-full flex items-center justify-center text-white hover:bg-instagram/80 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-facebook rounded-full flex items-center justify-center text-white hover:bg-facebook/80 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a 
                    href={BUSINESS_INFO.whatsapp} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-whatsapp rounded-full flex items-center justify-center text-white hover:bg-whatsapp/80 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <div className="card card-padding">
                <h2 className="heading-2 text-deep-rose mb-8">Send us a Message</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="heading-3 text-deep-rose mb-4">Message Sent!</h3>
                    <p className="text-charcoal-gray mb-8">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="btn-primary"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="form-label">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="form-label">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="form-input"
                          placeholder="Enter your email"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="form-label">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="form-label">Service Interested In</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="form-input"
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="form-label">Your Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="form-input"
                        placeholder="Tell us about your requirements..."
                      ></textarea>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="privacy"
                        required
                        className="w-4 h-4 text-deep-rose border-gray-300 rounded focus:ring-deep-rose"
                      />
                      <label htmlFor="privacy" className="ml-2 text-charcoal-gray">
                        I agree to the <a href="#" className="text-deep-rose hover:underline">Privacy Policy</a>
                      </label>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="btn-primary w-full btn-large"
                    >
                      {isLoading ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </form>
                )}
              </div>
              
              {/* Quick Contact */}
              <div className="card card-padding mt-8">
                <h3 className="heading-3 text-deep-rose mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <a 
                    href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`} 
                    className="flex items-center p-4 bg-primary-pink rounded-lg hover:bg-primary-pink/80 transition-colors"
                  >
                    <div className="w-10 h-10 bg-deep-rose rounded-full flex items-center justify-center mr-4 text-white">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
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
                    className="flex items-center p-4 bg-primary-pink rounded-lg hover:bg-primary-pink/80 transition-colors"
                  >
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-4 text-white">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal-gray">WhatsApp Us</p>
                      <p className="text-sm text-medium-gray">Quick response</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="section bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-deep-rose mb-4">Find Us</h2>
            <p className="body-large text-charcoal-gray max-w-3xl mx-auto">
              Visit our beautiful salon and boutique for a personalized consultation.
            </p>
          </div>
          
          <div className="card overflow-hidden">
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 text-charcoal-gray mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-charcoal-gray font-semibold">Google Maps Integration</p>
                <p className="text-medium-gray mt-2">Interactive map will be displayed here</p>
              </div>
            </div>
            
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
                  href="#" 
                  className="btn-outline"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-deep-rose">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-2 text-white mb-6">Ready to Get Started?</h2>
          <p className="body-large text-cream-white mb-8 max-w-3xl mx-auto">
            Book your appointment today and experience the Anuus difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`} 
              className="btn-secondary btn-large"
            >
              Call Now
            </a>
            <a 
              href={BUSINESS_INFO.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-ghost btn-large text-white border-white hover:bg-white hover:text-deep-rose"
            >
              WhatsApp Chat
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
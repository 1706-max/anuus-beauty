import React from 'react'

export default function Contact() {
  return (
    <div className="section-padding">
      <div className="container">
        <h1 className="heading-2 text-deep-rose mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="heading-3 text-deep-rose mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <p className="text-charcoal-gray">
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
              <p className="text-charcoal-gray">
                <strong>Email:</strong> info@anuusbeauty.com
              </p>
              <p className="text-charcoal-gray">
                <strong>Address:</strong> 123 Beauty Street, Fashion District, New York, NY 10001
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="heading-3 text-deep-rose mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-deep-rose"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-deep-rose"
              />
              <textarea 
                placeholder="Your Message" 
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-deep-rose"
              ></textarea>
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
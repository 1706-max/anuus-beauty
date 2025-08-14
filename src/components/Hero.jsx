import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative bg-primary-pink overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gold rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-deep-rose rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-cream-white rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <div className="inline-block bg-deep-rose/10 text-deep-rose px-4 py-2 rounded-full text-sm font-medium mb-6">
              Luxury Beauty & Fashion
            </div>
            
            <h1 className="heading-1 text-deep-rose mb-6">
              Transform Your 
              <span className="block text-gold">Beauty & Style</span>
            </h1>
            
            <p className="body-large text-charcoal-gray mb-8 max-w-2xl mx-auto lg:mx-0">
              Experience premium beauty treatments and custom fashion design at Anuus Beauty Parlor & Boutique. 
              Where elegance meets expertise for your complete transformation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                to="/contact" 
                className="btn-primary btn-large transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
              >
                Book Appointment
                <svg className="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <Link 
                to="/gallery" 
                className="btn-outline btn-large transform hover:scale-105 transition-transform duration-300"
              >
                View Our Work
                <svg className="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </Link>
            </div>
            
            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6 opacity-80">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm text-charcoal-gray">5000+ Happy Clients</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-charcoal-gray">Certified Experts</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="flex justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Decorative circles */}
              <div className="w-80 h-80 bg-gold rounded-full absolute -top-6 -left-6 opacity-20"></div>
              <div className="w-80 h-80 bg-deep-rose rounded-full absolute -bottom-6 -right-6 opacity-20"></div>
              
              {/* Main hero image container */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl border-8 border-white">
                <div className="w-full h-full bg-gradient-to-br from-primary-pink to-cream-white flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-deep-rose rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-charcoal-gray font-semibold">Hero Image</p>
                    <p className="text-sm text-medium-gray mt-1">Professional beauty transformation</p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce">
                <svg className="w-8 h-8 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce" style={{ animationDelay: '0.5s' }}>
                <svg className="w-6 h-6 text-deep-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
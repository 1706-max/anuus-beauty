import React from 'react'
import { Link } from 'react-router-dom'
// Import your hero image
import heroImage from '../assets/images/hero/heroImage.png' // Update with your image path

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-pink via-cream-white to-primary-pink overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gold rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-deep-rose rounded-full opacity-5 blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 py-16 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content - Enhanced */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm border border-white">
              <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
              <span className="text-deep-rose">Luxury Beauty & Fashion</span>
            </div>
            
            <h1 className="heading-1 text-deep-rose mb-6 leading-tight">
              Transform Your 
              <span className="block text-gold relative inline-block">
                Natural Beauty
                <span className="absolute bottom-1 left-0 w-full h-1 bg-gold/20"></span>
              </span>
            </h1>
            
            <p className="body-large text-charcoal-gray mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Experience premium beauty treatments and custom fashion design at Anuus Beauty Parlor & Boutique. 
              Where <span className="font-semibold text-deep-rose">elegance</span> meets <span className="font-semibold text-gold">expertise</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link 
                to="/contact" 
                className="btn-primary btn-large transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
              >
                <span className="relative z-10">Book Appointment</span>
                <span className="absolute inset-0 bg-deep-rose/90 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
              
              <Link 
                to="/gallery" 
                className="btn-outline btn-large transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center">
                  View Our Work
                  <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </div>
            
            {/* Trust Elements */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 opacity-90">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-charcoal-gray text-sm">5000+ Happy Clients</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 bg-deep-rose/10 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-deep-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-charcoal-gray text-sm">Certified Experts</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Hero Image - Enhanced */}
          <div className="flex justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-gold rounded-full opacity-10 blur-xl animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-deep-rose rounded-full opacity-10 blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              {/* Main image container with enhanced styling */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-8 border-white/20 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-gray/20 to-transparent z-10"></div>
                <img 
                  src={heroImage} 
                  alt="Professional beauty transformation at Anuus Beauty Parlor & Boutique"
                  className="w-full h-full object-cover"
                  loading="lazy"

                />
                
                {/* Floating badge */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-gold mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-semibold text-charcoal-gray">Premium</span>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce border-2 border-gold">
                <svg className="w-8 h-8 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 fill-current text-cream-white">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </section>
  )
}
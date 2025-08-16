import React from 'react'
import { Link } from 'react-router-dom'

// Import Beauty Service Images
import bridalMakeupImg from '../assets/images/services/bridalmakeup2.jpg'
import eyebrowsImg from '../assets/images/services/eyebrows.jpg'
import facialImg from '../assets/images/services/facial.jpeg'
import haircutImg from '../assets/images/services/haircut.jpeg'
import hairTreatmentImg from '../assets/images/services/hairtreatment.jpeg'
import mehndiImg from '../assets/images/services/mehndi.jpeg'
import pedicureImg from '../assets/images/services/pedicure.jpeg'
import waxingImg from '../assets/images/services/waxing.jpeg'

export default function Services() {
  // Beauty Services Data with Images
  const beautyServices = [
    {
      id: 1,
      title: "Bridal Makeup",
      description: "Complete bridal beauty transformation including trial sessions, professional makeup application, and touch-up kit for your special day.",
      price: "₹2,500 - ₹5,000",
      duration: "2-3 hours",
      image: bridalMakeupImg,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Eyebrow Shaping",
      description: "Professional eyebrow threading, waxing, and shaping to enhance your facial features with perfectly defined brows.",
      price: "₹300 - ₹800",
      duration: "30-45 minutes",
      image: eyebrowsImg,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Facial Treatments",
      description: "Customized facials including deep cleansing, anti-aging treatments, and specialized skincare routines for all skin types.",
      price: "₹1,200 - ₹3,500",
      duration: "1-1.5 hours",
      image: facialImg,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Haircut & Styling",
      description: "Professional hair cutting, trimming, and styling for all hair types and preferences including updos for special occasions.",
      price: "₹500 - ₹2,000",
      duration: "45-90 minutes",
      image: haircutImg,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Hair Treatment",
      description: "Deep conditioning, keratin treatments, and specialized hair care to restore health and shine to your hair.",
      price: "₹1,000 - ₹4,000",
      duration: "1-2 hours",
      image: hairTreatmentImg,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Mehndi Design",
      description: "Beautiful henna application for weddings, festivals, and special occasions with intricate traditional and modern designs.",
      price: "₹800 - ₹3,000",
      duration: "1-3 hours",
      image: mehndiImg,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    {
      id: 7,
      title: "Pedicure & Manicure",
      description: "Luxury nail care including nail shaping, cuticle care, moisturizing massage, and polish application with gel options.",
      price: "₹600 - ₹1,500",
      duration: "45-75 minutes",
      image: pedicureImg,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      id: 8,
      title: "Waxing Services",
      description: "Professional waxing for face and body using high-quality products for smooth, hair-free skin that lasts weeks.",
      price: "₹400 - ₹1,200",
      duration: "30-60 minutes",
      image: waxingImg,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  // Boutique Services Data (Icons Only for Now)
  const boutiqueServices = [
    {
      id: 1,
      title: "Custom Dress Design",
      description: "Personalized dress creation from concept to completion. Perfect for weddings, parties, and special occasions.",
      price: "₹5,000 - ₹25,000",
      duration: "2-4 weeks",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Alterations & Modifications",
      description: "Professional alterations to perfect fit including hemming, resizing, and style modifications.",
      price: "₹500 - ₹3,000",
      duration: "3-7 days",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Fashion Consultation",
      description: "Personalized style consultation to help you discover your unique fashion identity and wardrobe planning.",
      price: "₹1,500 - ₹3,000",
      duration: "1-2 hours",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Bridal Gown Design",
      description: "Custom bridal gown creation with personalized fittings, design consultations, and accessory coordination.",
      price: "₹15,000 - ₹50,000",
      duration: "4-8 weeks",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Wardrobe Styling",
      description: "Complete wardrobe assessment and styling services to maximize your existing clothing and accessories.",
      price: "₹2,500 - ₹5,000",
      duration: "2-3 hours",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Fashion Show Styling",
      description: "Professional styling services for fashion shows, photo shoots, and modeling portfolios.",
      price: "₹10,000 - ₹30,000",
      duration: "Varies",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
        </svg>
      )
    }
  ];

  // // Special Packages
  // const specialPackages = [
  //   {
  //     id: 1,
  //     title: "Complete Transformation Package",
  //     description: "Full beauty and fashion transformation including makeup, hair, skincare, and custom outfit design.",
  //     price: "₹8,000 - ₹15,000",
  //     features: [
  //       "Professional makeup & hair styling",
  //       "Custom skincare routine",
  //       "Personalized fashion consultation",
  //       "Custom outfit design",
  //       "Photo session styling"
  //     ],
  //     popular: true
  //   },
  //   {
  //     id: 2,
  //     title: "Bridal Bliss Package",
  //     description: "Everything a bride needs for her special day including trials, wedding day services, and accessories.",
  //     price: "₹15,000 - ₹30,000",
  //     features: [
  //       "3 makeup & hair trials",
  //       "Wedding day beauty services",
  //       "Custom bridal gown design",
  //       "Accessory coordination",
  //       "Emergency touch-up kit"
  //     ],
  //     popular: true
  //   },
  //   {
  //     id: 3,
  //     title: "Glamour Session",
  //     description: "Quick beauty transformation for photoshoots, parties, or special events.",
  //     price: "₹2,500 - ₹4,500",
  //     features: [
  //       "Professional makeup application",
  //       "Hair styling",
  //       "Basic skincare prep",
  //       "Photo-ready finish"
  //     ],
  //     popular: false
  //   }
  // ];

  return (
    <div className="bg-cream-white">
      {/* Hero Section */}
      <section className="relative bg-primary-pink py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="heading-1 text-deep-rose mb-6">Our Premium Services</h1>
          <p className="body-large text-charcoal-gray max-w-3xl mx-auto">
            Discover our comprehensive range of luxury beauty treatments and custom fashion design services, 
            each crafted to enhance your natural beauty and unique style.
          </p>
        </div>
      </section>

      {/* Beauty Services Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-deep-rose/10 text-deep-rose px-4 py-2 rounded-full text-sm font-medium mb-4">
              BEAUTY PARLOR SERVICES
            </div>
            <h2 className="heading-2 text-deep-rose mb-4">Professional Beauty Treatments</h2>
            <p className="body-large text-charcoal-gray max-w-3xl mx-auto">
              Expert beauty services using premium products and techniques for flawless results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beautyServices.map((service) => (
              <div key={service.id} className="card overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Service Image */}
                <div className="aspect-video bg-gray-200 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={`${service.title} service at Anuus Beauty Parlor & Boutique`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Service Content */}
                <div className="card-padding">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-pink rounded-full flex items-center justify-center mr-4 text-deep-rose">
                      {service.icon}
                    </div>
                    <h3 className="heading-3 text-deep-rose mb-0">{service.title}</h3>
                  </div>
                  
                  <p className="body-medium text-charcoal-gray mb-4">
                    {service.description}
                  </p>
                  
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-light-gray">
                    <div>
                      <p className="font-semibold text-deep-rose">{service.price}</p>
                      <p className="text-sm text-medium-gray">{service.duration}</p>
                    </div>
                    <Link to="/contact" className="btn-outline btn-small">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Boutique Services Section */}
      <section className="section bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-gold/10 text-gold px-4 py-2 rounded-full text-sm font-medium mb-4">
              BOUTIQUE SERVICES
            </div>
            <h2 className="heading-2 text-deep-rose mb-4">Custom Fashion Design</h2>
            <p className="body-large text-charcoal-gray max-w-3xl mx-auto">
              Personalized fashion services to create your unique look for any occasion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boutiqueServices.map((service) => (
              <div key={service.id} className="card card-padding hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-primary-pink rounded-full flex items-center justify-center mb-6 text-deep-rose">
                  {service.icon}
                </div>
                <h3 className="heading-3 text-deep-rose mb-4">{service.title}</h3>
                <p className="body-medium text-charcoal-gray mb-4">
                  {service.description}
                </p>
                <div className="flex justify-between items-center mt-6 pt-4 border-t border-light-gray">
                  <div>
                    <p className="font-semibold text-deep-rose">{service.price}</p>
                    <p className="text-sm text-medium-gray">{service.duration}</p>
                  </div>
                  <Link to="/contact" className="btn-outline btn-small">
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Packages Section
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-gold/10 text-gold px-4 py-2 rounded-full text-sm font-medium mb-4">
              SPECIAL PACKAGES
            </div>
            <h2 className="heading-2 text-deep-rose mb-4">Complete Transformation Deals</h2>
            <p className="body-large text-charcoal-gray max-w-3xl mx-auto">
              Curated combinations of our services for complete transformations and special occasions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {specialPackages.map((packageItem) => (
              <div 
                key={packageItem.id} 
                className={`card overflow-hidden ${packageItem.popular ? 'ring-2 ring-gold ring-opacity-50 transform hover:scale-105' : ''} transition-all duration-300`}
              >
                {packageItem.popular && (
                  <div className="bg-gold text-charcoal-gray py-2 text-center font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="card-padding">
                  <h3 className="heading-3 text-deep-rose mb-4">{packageItem.title}</h3>
                  <p className="body-medium text-charcoal-gray mb-6">
                    {packageItem.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-charcoal-gray mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {packageItem.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-gold mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-charcoal-gray">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-light-gray">
                    <p className="font-semibold text-deep-rose text-xl">{packageItem.price}</p>
                    <Link to="/contact" className="btn-primary">
                      Book Package
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="section bg-deep-rose">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-2 text-white mb-6">Ready to Experience Our Services?</h2>
          <p className="body-large text-cream-white mb-8 max-w-3xl mx-auto">
            Book your appointment today and let our experts create the perfect look for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary btn-large">
              Book Appointment
            </Link>
            <Link to="/gallery" className="btn-ghost btn-large text-white border-white hover:bg-white hover:text-deep-rose">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
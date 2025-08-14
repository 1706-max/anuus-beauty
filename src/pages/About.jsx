import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "Sri Latha Yanamala",
      role: "Founder & Lead Designer",
      bio: "With over 19 years of experience in beauty and fashion, Mrs.Latha brings passion and expertise to every client.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      name: "Swathi Reddy",
      role: "Senior Beauty Specialist",
      bio: "Certified makeup artist and skincare expert specializing in bridal and special occasion beauty.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      name: "Rohini Rao",
      role: "Fashion Designer",
      bio: "designer with expertise in custom couture and traditional Indian wear.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  // Values data
  const values = [
    {
      title: "Excellence",
      description: "We strive for perfection in every service, ensuring exceptional results that exceed expectations.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Personalization",
      description: "Every client receives customized services tailored to their unique beauty and style preferences.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: "Integrity",
      description: "We maintain the highest ethical standards and transparency in all our professional relationships.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "Innovation",
      description: "We stay ahead of industry trends and continuously update our techniques and knowledge.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  // Milestones data
  const milestones = [
    { year: "2006", event: "Founded Anuus Beauty Parlor" },
    { year: "2012", event: "Expanded to boutique services" },
    { year: "2015", event: "Opened second location" },
    { year: "2018", event: "Launched online booking system" },
    { year: "2020", event: "Won 'Best Beauty Salon' award" },
    { year: "2023", event: "Celebrated 5000+ satisfied clients" }
  ];

  return (
    <div className="bg-cream-white">
      {/* Hero Section */}
      <section className="relative bg-primary-pink py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="heading-1 text-deep-rose mb-6">Our Story</h1>
              <p className="body-large text-charcoal-gray mb-8">
                Anuus Beauty Parlor & Boutique was born from a passion for enhancing natural beauty 
                and creating custom fashion that reflects individual style and personality.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">
                  Book Appointment
                </Link>
                <Link to="/services" className="btn-outline">
                  Our Services
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-gold rounded-full absolute -top-4 -left-4 opacity-20"></div>
                <div className="w-64 h-64 md:w-80 md:h-80 bg-deep-rose rounded-full absolute -bottom-4 -right-4 opacity-20"></div>
                <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                  <span className="text-charcoal-gray">Founder Photo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-2 text-deep-rose mb-4">Meet Our Founder</h2>
              <p className="body-large text-charcoal-gray">
                The vision behind Anuus Beauty Parlor & Boutique
              </p>
            </div>
            
            <div className="card card-padding">
              <div className="prose prose-lg max-w-none">
                <h3 className="heading-3 text-deep-rose mb-6">Sri Latha Yanamala</h3>
                <p className="text-charcoal-gray mb-6">
                  With over 19 years of experience in the beauty and fashion industry, Mrs.Latha 
                  founded Anuus Beauty Parlor & Boutique with a simple mission: to help every person 
                  feel confident and beautiful in their own skin.
                </p>
                <p className="text-charcoal-gray mb-6">
                  Starting her career as a Beautician, Anuus quickly gained recognition 
                  for her innovative techniques and personalized approach. Her passion for fashion 
                  design led her to expand services to include custom clothing and styling.
                </p>
                <p className="text-charcoal-gray mb-6">
                  Today, Anuus leads a team of talented professionals who share her commitment to 
                  excellence and client satisfaction. Her hands-on approach ensures that every service 
                  meets the highest standards of quality and care.
                </p>
                <blockquote className="border-l-4 border-gold pl-6 italic text-charcoal-gray my-8">
                  "Beauty is not just about appearance; it's about confidence, self-expression, 
                  and feeling truly yourself. That's what we strive to bring to every client."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-deep-rose mb-4">Our Core Values</h2>
            <p className="body-large text-charcoal-gray max-w-3xl mx-auto">
              The principles that guide everything we do at Anuus Beauty Parlor & Boutique
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card card-padding text-center hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-primary-pink rounded-full flex items-center justify-center mx-auto mb-6 text-deep-rose">
                  {value.icon}
                </div>
                <h3 className="heading-3 text-deep-rose mb-4">{value.title}</h3>
                <p className="body-medium text-charcoal-gray">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-deep-rose mb-4">Meet Our Team</h2>
            <p className="body-large text-charcoal-gray max-w-3xl mx-auto">
              The talented professionals who make Anuus Beauty Parlor & Boutique exceptional
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="card overflow-hidden">
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <span className="text-charcoal-gray">Team Photo</span>
                </div>
                <div className="card-padding">
                  <h3 className="heading-3 text-deep-rose mb-2">{member.name}</h3>
                  <p className="text-gold font-semibold mb-4">{member.role}</p>
                  <p className="text-charcoal-gray">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section bg-primary-pink">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-deep-rose mb-4">Our Journey</h2>
            <p className="body-large text-charcoal-gray max-w-3xl mx-auto">
              Key milestones in the growth of Anuus Beauty Parlor & Boutique
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-deep-rose transform md:-translate-x-1/2"></div>
              
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`relative mb-12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}
                >
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:float-left md:pr-8' : 'md:float-right md:pl-8'}`}>
                    <div className="bg-white rounded-lg shadow-md p-6 relative">
                      <div className="absolute -left-12 md:left-auto md:-right-12 top-6 w-8 h-8 bg-deep-rose rounded-full flex items-center justify-center text-white font-bold">
                        {milestone.year.substring(2)}
                      </div>
                      <h3 className="heading-4 text-deep-rose mb-2">{milestone.year}</h3>
                      <p className="text-charcoal-gray">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="clear-both"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-deep-rose mb-4">Why Choose Anuus Beauty?</h2>
            <p className="body-large text-charcoal-gray max-w-3xl mx-auto">
              What makes us different and why our clients choose us again and again
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex">
                  <div className="w-12 h-12 bg-primary-pink rounded-full flex items-center justify-center mr-6 flex-shrink-0 text-deep-rose">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="heading-4 text-deep-rose mb-2">Premium Quality Products</h3>
                    <p className="text-charcoal-gray">
                      We use only the finest, dermatologically-tested products from leading international brands.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-12 h-12 bg-primary-pink rounded-full flex items-center justify-center mr-6 flex-shrink-0 text-deep-rose">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="heading-4 text-deep-rose mb-2">Personalized Approach</h3>
                    <p className="text-charcoal-gray">
                      Every service is customized to your unique features, preferences, and lifestyle.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-12 h-12 bg-primary-pink rounded-full flex items-center justify-center mr-6 flex-shrink-0 text-deep-rose">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="heading-4 text-deep-rose mb-2">Expert Team</h3>
                    <p className="text-charcoal-gray">
                      Our certified professionals bring years of experience and continuous training to every service.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-12 h-12 bg-primary-pink rounded-full flex items-center justify-center mr-6 flex-shrink-0 text-deep-rose">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="heading-4 text-deep-rose mb-2">Luxury Experience</h3>
                    <p className="text-charcoal-gray">
                      From ambiance to service, we create an indulgent experience that makes you feel special.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 bg-gold rounded-lg opacity-20 absolute -top-4 -left-4"></div>
                <div className="w-64 h-64 bg-deep-rose rounded-lg opacity-20 absolute -bottom-4 -right-4"></div>
                <div className="relative w-64 h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-charcoal-gray">Why Choose Us Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-deep-rose">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-2 text-white mb-6">Experience the Anuus Difference</h2>
          <p className="body-large text-cream-white mb-8 max-w-3xl mx-auto">
            Join our community of satisfied clients who have discovered their best look with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary btn-large">
              Book Your Visit
            </Link>
            <Link to="/gallery" className="btn-ghost btn-large text-white border-white hover:bg-white hover:text-deep-rose">
              See Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
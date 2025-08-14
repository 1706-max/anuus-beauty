import React, { useState } from 'react'
import { Link } from 'react-router-dom'
//Later add the photos to the asstes pages according to the catgory and delete the placeholder items given below. that are mentioned with ids
//import beauty1 from '../assets/images/gallery/beauty/beauty1.jpg'
//import fashion1 from '../assets/images/gallery/fashion/fashion1.jpg'
// ... import all your images
export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all')
  
  // Gallery categories
  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'beauty', name: 'Beauty' },
    { id: 'fashion', name: 'Fashion Design' },
    { id: 'before-after', name: 'Before & After' }
  ]

  // Gallery items (using placeholder images for now)
  const galleryItems = [
    {
      id: 1,
      category: 'beauty',
      title: 'Bridal Makeup',
      description: 'Complete bridal beauty transformation',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c5ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      category: 'fashion',
      title: 'Custom Wedding Dress',
      description: 'Handcrafted bridal gown design',
      image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      category: 'before-after',
      title: 'Skincare Transformation',
      description: '4-week skincare treatment results',
      image: 'https://images.unsplash.com/photo-1598974357801-cbca100e65d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      category: 'beauty',
      title: 'Evening Glam',
      description: 'Red carpet makeup application',
      image: 'https://images.unsplash.com/photo-1591369822091-658b8d0d8c4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      category: 'fashion',
      title: 'Cocktail Dress Design',
      description: 'Custom party dress creation',
      image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      category: 'before-after',
      title: 'Hair Transformation',
      description: 'Complete hair styling makeover',
      image: 'https://images.unsplash.com/photo-1599594882389-9f8462c5f60a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 7,
      category: 'beauty',
      title: 'Spa Treatment',
      description: 'Relaxing facial and massage session',
      image: 'https://images.unsplash.com/photo-1577222282862-98c49046b550?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 8,
      category: 'fashion',
      title: 'Formal Wear',
      description: 'Custom business attire design',
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 9,
      category: 'before-after',
      title: 'Nail Art Design',
      description: 'Luxury manicure and pedicure',
      image: 'https://images.unsplash.com/photo-1600133161762-0a2d38a8c6d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 10,
      category: 'beauty',
      title: 'Bridal Hair',
      description: 'Elegant bridal hairstyle',
      image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 11,
      category: 'fashion',
      title: 'Evening Gown',
      description: 'Custom formal evening dress',
      image: 'https://images.unsplash.com/photo-1534525439824-9d0d01a2a3c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 12,
      category: 'before-after',
      title: 'Makeup Artistry',
      description: 'Professional makeup transformation',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ]

  // Filter gallery items based on active category
  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)

  return (
    <div className="bg-cream-white">
      {/* Hero Section */}
      <section className="relative bg-primary-pink py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="heading-1 text-deep-rose mb-6">Our Gallery</h1>
          <p className="body-large text-charcoal-gray max-w-3xl mx-auto">
            Explore our portfolio of beauty transformations and custom fashion designs. 
            Each image represents our commitment to excellence and attention to detail.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-deep-rose text-white shadow-md'
                    : 'bg-white text-charcoal-gray hover:bg-light-gray border border-light-gray'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          {/* Replace existing gallery grid with enhanced version */}
          <div className="grid-masonry-gallery gap-md">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                                      src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-gray/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                  <p className="text-cream-white text-xs">{item.description}</p>
                </div>
                              </div>
              ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="btn-outline btn-large">
              Load More
            </button>
          </div>
        </div>
      </section>

      {/* Instagram Feed Preview */}
      <section className="section bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-deep-rose mb-4">Follow Us on Instagram</h2>
            <p className="body-large text-charcoal-gray max-w-3xl mx-auto">
              For daily updates, behind-the-scenes content, and real-time transformations.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-square overflow-hidden rounded-lg">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-charcoal-gray text-sm">Instagram Post {item}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-deep-rose font-semibold hover:text-deep-rose/80 transition-colors"
            >
              Follow @anuusbeauty on Instagram
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-deep-rose">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-2 text-white mb-6">Love What You See?</h2>
          <p className="body-large text-cream-white mb-8 max-w-3xl mx-auto">
            Book your appointment today and let us create your own transformation story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary btn-large">
              Book Appointment
            </Link>
            <Link to="/services" className="btn-ghost btn-large text-white border-white hover:bg-white hover:text-deep-rose">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
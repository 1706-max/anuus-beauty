import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { importGalleryImages, getGalleryCategories } from '../utils/imageImporter'

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [galleryItems, setGalleryItems] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    console.log('Gallery component mounting...');
    try {
      const images = importGalleryImages();
      console.log('Imported images:', images);
      setGalleryItems(images);
      
      const cats = getGalleryCategories(images);
      console.log('Generated categories:', cats);
      setCategories(cats);
    } catch (error) {
      console.error('Error in Gallery useEffect:', error);
      setGalleryItems([]);
      setCategories([{ id: 'all', name: 'All Work' }]);
    }
  }, []);

  // Filter gallery items based on active category
  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)

  console.log('Rendering gallery with items:', galleryItems);
  console.log('Active category:', activeCategory);
  console.log('Filtered items:', filteredItems);

  return (
    <div className="bg-cream-white">
      {/* Hero Section */}
      <section className="relative bg-primary-pink py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="heading-1 text-deep-rose mb-6">Our Gallery</h1>
          <p className="body-large text-charcoal-gray max-w-3xl mx-auto">
            Explore our portfolio of beauty transformations and custom fashion designs.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section py-8">
        <div className="container mx-auto px-4">
          {categories.length > 1 && (
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
          )}

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <div 
                  key={item.id} 
                  className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    {item.image ? (
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          console.log('Image failed to load:', item.image);
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div 
                      className={`w-full h-full flex items-center justify-center ${item.image ? 'hidden' : 'flex'}`}
                      style={{ backgroundColor: '#F8E1E7' }}
                    >
                      <div className="text-center p-2">
                        <div className="w-12 h-12 bg-deep-rose rounded-full flex items-center justify-center mx-auto mb-2">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <h3 className="font-semibold text-deep-rose text-sm">{item.title}</h3>
                        <p className="text-xs text-charcoal-gray mt-1">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <div className="w-24 h-24 bg-primary-pink rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-deep-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="heading-3 text-deep-rose mb-4">No Images Found</h3>
                <p className="text-charcoal-gray">
                  We're working on adding amazing work to our portfolio.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-deep-rose">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-2 text-white mb-6">See Our Work</h2>
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
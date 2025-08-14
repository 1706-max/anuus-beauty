import React from 'react'

export default function Gallery() {
  return (
    <div className="section-padding">
      <div className="container">
        <h1 className="heading-2 text-deep-rose mb-8">Our Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-200 aspect-square rounded-lg flex items-center justify-center">
            <span className="text-charcoal-gray">Beauty Work</span>
          </div>
          <div className="bg-gray-200 aspect-square rounded-lg flex items-center justify-center">
            <span className="text-charcoal-gray">Dress Designs</span>
          </div>
          <div className="bg-gray-200 aspect-square rounded-lg flex items-center justify-center">
            <span className="text-charcoal-gray">Before/After</span>
          </div>
        </div>
      </div>
    </div>
  )
}
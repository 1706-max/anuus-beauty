import React from 'react'

export default function Services() {
  return (
    <div className="section-padding">
      <div className="container">
        <h1 className="heading-2 text-deep-rose mb-8">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card p-6">
            <h3 className="heading-3 text-deep-rose mb-4">Beauty Services</h3>
            <p className="text-charcoal-gray">Professional makeup, skincare, and beauty treatments</p>
          </div>
          <div className="card p-6">
            <h3 className="heading-3 text-deep-rose mb-4">Boutique Services</h3>
            <p className="text-charcoal-gray">Custom fashion design and alterations</p>
          </div>
          <div className="card p-6">
            <h3 className="heading-3 text-deep-rose mb-4">Special Packages</h3>
            <p className="text-charcoal-gray">Complete beauty and fashion transformation packages</p>
          </div>
        </div>
      </div>
    </div>
  )
}
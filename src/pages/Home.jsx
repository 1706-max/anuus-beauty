import React from 'react'

export default function Home() {
  return (
    <div className="min-h-screen bg-primary-pink flex flex-col items-center justify-center p-8">
      <h1 className="heading-1 text-deep-rose mb-4 text-center">
        Anuus Beauty Parlor & Boutique
      </h1>
      <p className="body-large text-charcoal-gray mb-8 text-center max-w-2xl">
        Welcome to our luxury beauty and fashion destination
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <button className="btn-primary btn-large">
          Book Appointment
        </button>
        <button className="btn-secondary btn-large">
          View Gallery
        </button>
      </div>
    </div>
  )
}
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NAVIGATION } from '../utils/constants'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <Link 
            to="/" 
            className="text-2xl font-serif font-bold text-deep-rose hover:text-deep-rose/80 transition-colors"
            onClick={closeMenu}
          >
            Anuus Beauty
          </Link>

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAVIGATION.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-deep-rose font-semibold'
                    : 'text-charcoal-gray hover:text-deep-rose'
                }`}
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Book Now Button - Hidden on mobile */}
          <button className="hidden md:block btn-primary text-sm py-2 px-6">
            Book Now
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-charcoal-gray hover:text-deep-rose focus:outline-none focus:ring-2 focus:ring-deep-rose"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              // Close icon (X)
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`py-2 px-4 rounded-lg font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'bg-primary-pink text-deep-rose font-semibold'
                      : 'text-charcoal-gray hover:bg-light-gray'
                  }`}
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              ))}
              <button className="btn-primary w-full mt-2">
                Book Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
import React from 'react'
import Hero from '../components/Hero'
import FeaturedCars from '../components/FeaturedCars'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import { featuredCars } from '../data/cars'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <FeaturedCars cars={featuredCars} />
      <Services />
      <Testimonials />
      
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Vehicle?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Visit our showroom today or browse our online inventory to discover your next dream car.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/cars" 
              className="bg-white text-blue-600 hover:bg-gray-100 py-3 px-8 rounded-md font-medium transition-colors"
            >
              Browse Inventory
            </a>
            <a 
              href="/contact" 
              className="bg-transparent hover:bg-blue-700 text-white border border-white py-3 px-8 rounded-md font-medium transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage

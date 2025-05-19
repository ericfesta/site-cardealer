import React from 'react'
import { Link } from 'react-router-dom'
import CarCard from './CarCard'
import { Car } from '../types/Car'

interface FeaturedCarsProps {
  cars: Car[]
}

const FeaturedCars: React.FC<FeaturedCarsProps> = ({ cars }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Vehicles</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our handpicked selection of premium vehicles, each offering exceptional quality, performance, and value.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/cars" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-md font-medium transition-colors"
          >
            View All Vehicles
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedCars

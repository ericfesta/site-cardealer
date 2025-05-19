import React from 'react'
import { Link } from 'react-router-dom'
import { Fuel, Calendar, Gauge, ArrowRight } from 'lucide-react'
import { Car } from '../types/Car'

interface CarCardProps {
  car: Car
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={car.imageUrl} 
          alt={`${car.make} ${car.model}`} 
          className="w-full h-full object-cover"
        />
        {car.featured && (
          <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 text-sm font-semibold">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900">{car.make} {car.model}</h3>
          <p className="text-lg font-bold text-blue-600">${car.price.toLocaleString()}</p>
        </div>
        
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="flex items-center text-gray-600">
            <Calendar className="h-4 w-4 mr-1" />
            <span className="text-sm">{car.year}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Fuel className="h-4 w-4 mr-1" />
            <span className="text-sm">{car.fuelType}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Gauge className="h-4 w-4 mr-1" />
            <span className="text-sm">{car.mileage.toLocaleString()} mi</span>
          </div>
        </div>
        
        <Link 
          to={`/cars/${car.id}`} 
          className="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium transition-colors"
        >
          View Details
          <ArrowRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
    </div>
  )
}

export default CarCard

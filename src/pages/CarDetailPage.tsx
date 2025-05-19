import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { 
  Calendar, 
  Fuel, 
  Gauge, 
  Shield, 
  Car, 
  Settings, 
  Tag, 
  ArrowLeft,
  Phone,
  Mail
} from 'lucide-react'
import { allCars } from '../data/cars'
import ContactForm from '../components/ContactForm'

const CarDetailPage = () => {
  const { id } = useParams<{ id: string }>()
  const car = allCars.find(car => car.id === id)
  
  if (!car) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Vehicle Not Found</h2>
        <p className="text-gray-600 mb-8">The vehicle you're looking for doesn't exist or has been removed.</p>
        <Link 
          to="/cars" 
          className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Inventory
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link 
            to="/cars" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            <ArrowLeft className="h-5 w-5 mr-1" />
            Back to Inventory
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="h-96 lg:h-auto">
              <img 
                src={car.imageUrl} 
                alt={`${car.make} ${car.model}`} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">{car.make} {car.model}</h1>
                  <p className="text-gray-600">{car.year} • {car.bodyType}</p>
                </div>
                <div className="text-2xl font-bold text-blue-600">${car.price.toLocaleString()}</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-gray-700">
                  <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                  <div>
                    <p className="font-medium">Year</p>
                    <p>{car.year}</p>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-700">
                  <Fuel className="h-5 w-5 mr-2 text-blue-600" />
                  <div>
                    <p className="font-medium">Fuel Type</p>
                    <p>{car.fuelType}</p>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-700">
                  <Gauge className="h-5 w-5 mr-2 text-blue-600" />
                  <div>
                    <p className="font-medium">Mileage</p>
                    <p>{car.mileage.toLocaleString()} miles</p>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-700">
                  <Settings className="h-5 w-5 mr-2 text-blue-600" />
                  <div>
                    <p className="font-medium">Transmission</p>
                    <p>{car.transmission}</p>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-700">
                  <Car className="h-5 w-5 mr-2 text-blue-600" />
                  <div>
                    <p className="font-medium">Body Type</p>
                    <p>{car.bodyType}</p>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-700">
                  <Tag className="h-5 w-5 mr-2 text-blue-600" />
                  <div>
                    <p className="font-medium">VIN</p>
                    <p>{car.vin}</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
                <p className="text-gray-700">{car.description}</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+1234567890" 
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md font-medium transition-colors flex items-center justify-center"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Us
                </a>
                <a 
                  href="#inquiry-form" 
                  className="flex-1 bg-gray-800 hover:bg-gray-900 text-white py-3 px-4 rounded-md font-medium transition-colors flex items-center justify-center"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Inquire Now
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Features & Specifications</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Performance</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <Shield className="h-5 w-5 mr-2 text-blue-600" />
                      {car.features.engine}
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Shield className="h-5 w-5 mr-2 text-blue-600" />
                      {car.features.horsepower} Horsepower
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Shield className="h-5 w-5 mr-2 text-blue-600" />
                      {car.features.acceleration} 0-60 mph
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Comfort & Convenience</h3>
                  <ul className="space-y-2">
                    {car.features.comfort.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <Shield className="h-5 w-5 mr-2 text-blue-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Safety</h3>
                  <ul className="space-y-2">
                    {car.features.safety.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <Shield className="h-5 w-5 mr-2 text-blue-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Technology</h3>
                  <ul className="space-y-2">
                    {car.features.technology.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <Shield className="h-5 w-5 mr-2 text-blue-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div id="inquiry-form">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarDetailPage

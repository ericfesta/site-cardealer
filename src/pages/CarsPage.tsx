import React, { useState } from 'react'
import { Filter, Search } from 'lucide-react'
import CarCard from '../components/CarCard'
import { allCars } from '../data/cars'

const CarsPage = () => {
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    make: '',
    priceRange: '',
    bodyType: '',
    year: '',
    fuelType: ''
  })

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    setFilters(prev => ({ ...prev, [name]: value }))
  }

  const resetFilters = () => {
    setFilters({
      make: '',
      priceRange: '',
      bodyType: '',
      year: '',
      fuelType: ''
    })
  }

  // Apply filters
  const filteredCars = allCars.filter(car => {
    if (filters.make && car.make !== filters.make) return false
    if (filters.bodyType && car.bodyType !== filters.bodyType) return false
    if (filters.fuelType && car.fuelType !== filters.fuelType) return false
    if (filters.year && car.year.toString() !== filters.year) return false
    if (filters.priceRange) {
      const maxPrice = parseInt(filters.priceRange)
      if (car.price > maxPrice) return false
    }
    return true
  })

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Inventory</h1>
          <p className="text-lg text-gray-600">
            Browse our extensive collection of premium vehicles. Use the filters to find your perfect match.
          </p>
        </div>
        
        <div className="mb-8">
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium transition-colors"
          >
            <Filter className="h-5 w-5 mr-2" />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
          
          {showFilters && (
            <div className="mt-4 p-6 bg-white rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-4">
                <div>
                  <label htmlFor="make" className="block text-gray-700 font-medium mb-2">Make</label>
                  <select
                    id="make"
                    name="make"
                    value={filters.make}
                    onChange={handleFilterChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="">All Makes</option>
                    <option value="Audi">Audi</option>
                    <option value="BMW">BMW</option>
                    <option value="Mercedes">Mercedes</option>
                    <option value="Tesla">Tesla</option>
                    <option value="Toyota">Toyota</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="priceRange" className="block text-gray-700 font-medium mb-2">Price Range</label>
                  <select
                    id="priceRange"
                    name="priceRange"
                    value={filters.priceRange}
                    onChange={handleFilterChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Any Price</option>
                    <option value="20000">Under $20,000</option>
                    <option value="30000">Under $30,000</option>
                    <option value="50000">Under $50,000</option>
                    <option value="100000">Under $100,000</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="bodyType" className="block text-gray-700 font-medium mb-2">Body Type</label>
                  <select
                    id="bodyType"
                    name="bodyType"
                    value={filters.bodyType}
                    onChange={handleFilterChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="">All Types</option>
                    <option value="Sedan">Sedan</option>
                    <option value="SUV">SUV</option>
                    <option value="Coupe">Coupe</option>
                    <option value="Truck">Truck</option>
                    <option value="Convertible">Convertible</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="year" className="block text-gray-700 font-medium mb-2">Year</label>
                  <select
                    id="year"
                    name="year"
                    value={filters.year}
                    onChange={handleFilterChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="">All Years</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="fuelType" className="block text-gray-700 font-medium mb-2">Fuel Type</label>
                  <select
                    id="fuelType"
                    name="fuelType"
                    value={filters.fuelType}
                    onChange={handleFilterChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="">All Fuel Types</option>
                    <option value="Gasoline">Gasoline</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Electric">Electric</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>
              </div>
              
              <div className="flex justify-between">
                <button
                  onClick={resetFilters}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Reset Filters
                </button>
                
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium transition-colors flex items-center"
                >
                  <Search className="h-5 w-5 mr-2" />
                  Apply Filters
                </button>
              </div>
            </div>
          )}
        </div>
        
        <div className="mb-6">
          <p className="text-gray-600">Showing {filteredCars.length} vehicles</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.length > 0 ? (
            filteredCars.map(car => (
              <CarCard key={car.id} car={car} />
            ))
          ) : (
            <div className="col-span-3 py-12 text-center">
              <h3 className="text-xl font-medium text-gray-900 mb-2">No vehicles found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your filters to see more results.</p>
              <button
                onClick={resetFilters}
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CarsPage

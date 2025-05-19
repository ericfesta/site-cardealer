import React from 'react'
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'

const Hero = () => {
  return (
    <div className="relative h-[600px] bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')",
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Find Your Perfect Drive
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Explore our premium selection of vehicles. Quality, luxury, and performance await you at AutoElite.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link 
              to="/cars" 
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-medium text-lg transition-colors"
            >
              Browse Inventory
            </Link>
            <Link 
              to="/contact" 
              className="bg-transparent hover:bg-white/10 text-white border border-white py-3 px-6 rounded-md font-medium text-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option value="">All Makes</option>
                  <option value="audi">Audi</option>
                  <option value="bmw">BMW</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="tesla">Tesla</option>
                  <option value="toyota">Toyota</option>
                </select>
              </div>
              <div className="flex-1">
                <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option value="">Price Range</option>
                  <option value="20000">Under $20,000</option>
                  <option value="30000">Under $30,000</option>
                  <option value="50000">Under $50,000</option>
                  <option value="100000">Under $100,000</option>
                </select>
              </div>
              <div className="flex-1">
                <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option value="">Body Type</option>
                  <option value="sedan">Sedan</option>
                  <option value="suv">SUV</option>
                  <option value="coupe">Coupe</option>
                  <option value="truck">Truck</option>
                  <option value="convertible">Convertible</option>
                </select>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-md font-medium transition-colors flex items-center justify-center">
                <Search className="h-5 w-5 mr-2" />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

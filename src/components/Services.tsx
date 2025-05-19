import React from 'react'
import { Car, DollarSign, Wrench, ShieldCheck } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Car className="h-10 w-10 text-blue-600" />,
      title: 'Wide Selection',
      description: 'Browse our extensive inventory of new and pre-owned vehicles from top manufacturers.'
    },
    {
      icon: <DollarSign className="h-10 w-10 text-blue-600" />,
      title: 'Financing Options',
      description: 'We offer competitive financing rates and flexible terms to fit your budget and needs.'
    },
    {
      icon: <Wrench className="h-10 w-10 text-blue-600" />,
      title: 'Service & Maintenance',
      description: 'Our certified technicians provide expert maintenance and repair services for all makes and models.'
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-blue-600" />,
      title: 'Extended Warranty',
      description: 'Protect your investment with our comprehensive extended warranty options.'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At AutoElite, we're committed to providing exceptional service throughout your car buying journey and beyond.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

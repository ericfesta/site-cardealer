import React from 'react'
import { Shield, Award, Users, ThumbsUp } from 'lucide-react'

const AboutPage = () => {
  const values = [
    {
      icon: <Shield className="h-10 w-10 text-blue-600" />,
      title: 'Integrity',
      description: 'We believe in transparency and honesty in every interaction. No hidden fees, no pressure tactics.'
    },
    {
      icon: <Award className="h-10 w-10 text-blue-600" />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from our vehicle selection to our customer service.'
    },
    {
      icon: <Users className="h-10 w-10 text-blue-600" />,
      title: 'Customer Focus',
      description: "Our customers are at the heart of our business. We're dedicated to exceeding your expectations."
    },
    {
      icon: <ThumbsUp className="h-10 w-10 text-blue-600" />,
      title: 'Quality',
      description: 'We offer only the highest quality vehicles that meet our rigorous standards for performance and reliability.'
    }
  ]

  const team = [
    {
      name: 'Robert Johnson',
      position: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      bio: 'With over 20 years in the automotive industry, Robert founded AutoElite with a vision to provide exceptional vehicles and service.'
    },
    {
      name: 'Emily Chen',
      position: 'Sales Director',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      bio: 'Emily leads our sales team with enthusiasm and expertise, ensuring every customer finds their perfect vehicle match.'
    },
    {
      name: 'Marcus Williams',
      position: 'Service Manager',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      bio: 'Marcus oversees our service department, bringing technical expertise and a commitment to quality maintenance and repairs.'
    }
  ]

  return (
    <div>
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">About AutoElite</h1>
            <p className="text-xl text-gray-300">
              Delivering exceptional vehicles and service since 2005. We're passionate about helping you find your perfect drive.
            </p>
          </div>
        </div>
      </div>
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2005, AutoElite began with a simple mission: to provide high-quality vehicles and exceptional service to our community. What started as a small dealership with just 15 cars has grown into one of the region's premier automotive retailers.
              </p>
              <p className="text-gray-700 mb-4">
                Our founder, Robert Johnson, brought over two decades of experience in the automotive industry when he established AutoElite. His vision was to create a dealership that prioritized customer satisfaction above all else, offering transparent pricing and a pressure-free buying experience.
              </p>
              <p className="text-gray-700">
                Today, we continue to uphold these founding principles while expanding our inventory and services to meet the evolving needs of our customers. We're proud to have served thousands of satisfied clients over the years, many of whom return to us for their second, third, or even fourth vehicle purchase.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                alt="Luxury car at AutoElite dealership" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do at AutoElite, from how we select our inventory to how we interact with our customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our dedicated team of professionals is committed to providing you with the best car buying experience possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the AutoElite Difference?</h2>
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

export default AboutPage

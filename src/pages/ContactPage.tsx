import React from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import ContactForm from '../components/ContactForm'

const ContactPage = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions or want to schedule a test drive? We're here to help. Reach out to us using any of the methods below.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <MapPin className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Visit Us</h2>
            </div>
            <p className="text-gray-600 mb-2">123 Auto Boulevard</p>
            <p className="text-gray-600 mb-2">Cartown, CT 12345</p>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
              Get Directions
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Phone className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Call Us</h2>
            </div>
            <p className="text-gray-600 mb-2">Sales: (555) 123-4567</p>
            <p className="text-gray-600 mb-2">Service: (555) 123-4568</p>
            <p className="text-gray-600">Parts: (555) 123-4569</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Mail className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Email Us</h2>
            </div>
            <p className="text-gray-600 mb-2">Sales: sales@autoelite.com</p>
            <p className="text-gray-600 mb-2">Service: service@autoelite.com</p>
            <p className="text-gray-600">General: info@autoelite.com</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-blue-600 mr-2" />
                <h2 className="text-xl font-semibold text-gray-900">Business Hours</h2>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <p className="text-gray-600">Monday - Friday:</p>
                <p className="text-gray-800 font-medium">9:00 AM - 8:00 PM</p>
                
                <p className="text-gray-600">Saturday:</p>
                <p className="text-gray-800 font-medium">10:00 AM - 6:00 PM</p>
                
                <p className="text-gray-600">Sunday:</p>
                <p className="text-gray-800 font-medium">11:00 AM - 5:00 PM</p>
              </div>
            </div>
            
            <div className="bg-blue-600 p-6 rounded-lg shadow-md text-white">
              <h2 className="text-xl font-semibold mb-4">Schedule a Test Drive</h2>
              <p className="mb-4">
                Ready to experience one of our vehicles in person? Schedule a test drive today!
              </p>
              <a 
                href="/cars" 
                className="inline-block bg-white text-blue-600 hover:bg-gray-100 py-2 px-6 rounded-md font-medium transition-colors"
              >
                Browse Inventory
              </a>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
        
        <div className="rounded-lg overflow-hidden shadow-lg h-96">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573036935!2d-73.98784368459377!3d40.758895879326224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="AutoElite Location"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default ContactPage

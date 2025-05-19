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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Our Location</h3>
                    <p className="text-gray-600">123 Dealership Avenue, Autoville, CA 90210</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+1234567890" className="hover:text-blue-600">(123) 456-7890</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@autoelite.com" className="hover:text-blue-600">info@autoelite.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <div className="text-gray-600">
                      <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                      <p>Saturday: 10:00 AM - 6:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Departments</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Sales Department</h3>
                  <p className="text-gray-600 mb-1">
                    <a href="tel:+1234567891" className="hover:text-blue-600">(123) 456-7891</a>
                  </p>
                  <p className="text-gray-600">
                    <a href="mailto:sales@autoelite.com" className="hover:text-blue-600">sales@autoelite.com</a>
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Service Center</h3>
                  <p className="text-gray-600 mb-1">
                    <a href="tel:+1234567892" className="hover:text-blue-600">(123) 456-7892</a>
                  </p>
                  <p className="text-gray-600">
                    <a href="mailto:service@autoelite.com" className="hover:text-blue-600">service@autoelite.com</a>
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Parts Department</h3>
                  <p className="text-gray-600 mb-1">
                    <a href="tel:+1234567893" className="hover:text-blue-600">(123) 456-7893</a>
                  </p>
                  <p className="text-gray-600">
                    <a href="mailto:parts@autoelite.com" className="hover:text-blue-600">parts@autoelite.com</a>
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Financing</h3>
                  <p className="text-gray-600 mb-1">
                    <a href="tel:+1234567894" className="hover:text-blue-600">(123) 456-7894</a>
                  </p>
                  <p className="text-gray-600">
                    <a href="mailto:finance@autoelite.com" className="hover:text-blue-600">finance@autoelite.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <ContactForm />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 h-96">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27405770525!2d-118.69192047471653!3d34.02016130653294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1619377323831!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="AutoElite Location"
            ></iframe>
          </div>
        </div>
        
        <div className="mt-12 bg-blue-600 text-white p-8 rounded-lg shadow-md">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Schedule a Test Drive</h2>
            <p className="text-lg mb-6">
              Ready to experience one of our vehicles in person? Schedule a test drive today!
            </p>
            <a 
              href="tel:+1234567890" 
              className="inline-block bg-white text-blue-600 hover:bg-gray-100 py-3 px-8 rounded-md font-medium transition-colors"
            >
              Call Now: (123) 456-7890
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage

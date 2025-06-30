import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Leaf } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container-max">
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold text-white">Suraj Cashew</span>
                  <div className="text-xs text-gray-400">Premium Quality</div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Premium quality cashews, cashew oil, and paint products. Your trusted partner for natural and quality products from Ratnagiri.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/cashews" className="text-gray-300 hover:text-white transition-colors">
                    Cashews
                  </Link>
                </li>
                <li>
                  <Link to="/cashew-oil" className="text-gray-300 hover:text-white transition-colors">
                    Cashew Oil
                  </Link>
                </li>
                <li>
                  <Link to="/paint" className="text-gray-300 hover:text-white transition-colors">
                    Paint
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Products */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Products</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Normal Cashews (₹800-1000/kg)</li>
                <li>Salted Cashews (₹1100/kg)</li>
                <li>Spicy Cashews (₹1000/kg)</li>
                <li>Pure Cashew Oil (₹250/litre)</li>
                <li>Quality Paint (₹150/unit)</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-gray-300">+91 8291061982</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-gray-300">sidak4712@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-gray-300">Ratnagiri, Maharashtra, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Suraj Cashew. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Support</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


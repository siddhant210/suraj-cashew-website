import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for any inquiries about our products or services. 
            We're here to help you with all your cashew, oil, and paint needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-6 w-6 text-green-600" />
                    <CardTitle>Phone</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">8291061982</p>
                  <p className="text-gray-600">Call us for immediate assistance</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-6 w-6 text-blue-600" />
                    <CardTitle>Email</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">sidak4712@gmail.com</p>
                  <p className="text-gray-600">Send us your queries anytime</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-6 w-6 text-red-600" />
                    <CardTitle>Location</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">India</p>
                  <p className="text-gray-600">We deliver across India</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-6 w-6 text-orange-600" />
                    <CardTitle>Business Hours</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    <p><span className="font-medium">Monday - Friday:</span> 9:00 AM - 6:00 PM</p>
                    <p><span className="font-medium">Saturday:</span> 9:00 AM - 4:00 PM</p>
                    <p><span className="font-medium">Sunday:</span> Closed</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please describe your inquiry in detail..."
                    />
                  </div>

                  <Button type="submit" className="w-full flex items-center justify-center space-x-2">
                    <Send className="h-4 w-4" />
                    <span>Send Message</span>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-green-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Why Choose Suraj Cashew?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="font-semibold mb-2">Quality Assurance</h3>
              <p className="text-gray-600">
                We ensure the highest quality standards for all our products through rigorous testing and quality control.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">Customer Support</h3>
              <p className="text-gray-600">
                Our dedicated customer support team is always ready to assist you with your queries and concerns.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                We provide quick and reliable delivery services across India with proper packaging and tracking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact


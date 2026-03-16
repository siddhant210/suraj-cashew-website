import React, { useState } from 'react'
import axios from 'axios'
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

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {

      await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, formData)

      alert("Message sent successfully!")

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })

    } catch (error) {

      console.error(error)
      alert("Error sending message")

    }
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for any inquiries about our products or services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Info */}

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
                  <p>Monday - Friday: 9 AM - 6 PM</p>
                  <p>Saturday: 9 AM - 4 PM</p>
                  <p>Sunday: Closed</p>
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
                  Fill out the form and we'll get back to you.
                </CardDescription>
              </CardHeader>

              <CardContent>

                <form onSubmit={handleSubmit} className="space-y-4">

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Full Name *
                      </label>

                      <Input
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                      />

                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Phone
                      </label>

                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone number"
                      />

                    </div>

                  </div>

                  <div>

                    <label className="text-sm font-medium mb-2 block">
                      Email *
                    </label>

                    <Input
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                    />

                  </div>

                  <div>

                    <label className="text-sm font-medium mb-2 block">
                      Subject *
                    </label>

                    <Input
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Subject"
                    />

                  </div>

                  <div>

                    <label className="text-sm font-medium mb-2 block">
                      Message *
                    </label>

                    <Textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Write your message..."
                    />

                  </div>

                  <Button type="submit" className="w-full flex items-center justify-center gap-2">
                    <Send className="h-4 w-4"/>
                    Send Message
                  </Button>

                </form>

              </CardContent>

            </Card>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Contact
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { useCart } from '../context/CartContext'
import { CreditCard, Truck, MapPin, Phone, Mail, User } from 'lucide-react'

const Checkout = () => {
  const { items, getTotalPrice, clearCart } = useCart()
  const navigate = useNavigate()
  
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Shipping Address
    address: '',
    city: '',
    state: '',
    pincode: '',
    
    // Payment Method
    paymentMethod: 'cod',
    
    // Special Instructions
    specialInstructions: ''
  })

  const [orderPlaced, setOrderPlaced] = useState(false)
  const [orderId, setOrderId] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handlePaymentMethodChange = (value) => {
    setFormData(prev => ({
      ...prev,
      paymentMethod: value
    }))
  }

  const generateOrderId = () => {
    return 'SC' + Date.now().toString().slice(-8)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Generate order ID
    const newOrderId = generateOrderId()
    setOrderId(newOrderId)
    
    // Simulate order processing
    setTimeout(() => {
      setOrderPlaced(true)
      clearCart()
    }, 1000)
  }

  if (items.length === 0 && !orderPlaced) {
    navigate('/cart')
    return null
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 mb-8">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-green-800 mb-4">Order Confirmed!</h1>
              <p className="text-lg text-green-700 mb-4">
                Thank you for your order. Your order has been successfully placed.
              </p>
              <div className="bg-white rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600">Order ID</p>
                <p className="text-xl font-bold text-gray-800">{orderId}</p>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Truck className="h-5 w-5" />
                  <span>Delivery Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-left space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <p className="font-medium">Order Confirmed</p>
                      <p className="text-sm text-gray-600">Your order has been received and is being processed</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-gray-600 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-600">Preparing for Dispatch</p>
                      <p className="text-sm text-gray-600">We'll prepare your order for shipping</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-gray-600 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-600">Out for Delivery</p>
                      <p className="text-sm text-gray-600">Your order is on its way to you</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-gray-600 font-bold text-sm">4</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-600">Delivered</p>
                      <p className="text-sm text-gray-600">Order delivered to your address</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
                  <p className="text-sm text-yellow-800">
                    <strong>Estimated Delivery:</strong> 3-5 business days
                  </p>
                  <p className="text-sm text-yellow-800 mt-1">
                    You will receive SMS updates on your registered mobile number.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Button onClick={() => navigate('/')} className="flex-1">
                    Continue Shopping
                  </Button>
                  <Button variant="outline" onClick={() => navigate('/contact')} className="flex-1">
                    Contact Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Personal Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <User className="h-5 w-5" />
                    <span>Personal Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Enter first name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Enter last name"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
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
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter phone number"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Shipping Address */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5" />
                    <span>Shipping Address</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="address">Street Address *</Label>
                    <Textarea
                      id="address"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Enter your complete address"
                      rows={3}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="City"
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State *</Label>
                      <Input
                        id="state"
                        name="state"
                        required
                        value={formData.state}
                        onChange={handleInputChange}
                        placeholder="State"
                      />
                    </div>
                    <div>
                      <Label htmlFor="pincode">PIN Code *</Label>
                      <Input
                        id="pincode"
                        name="pincode"
                        required
                        value={formData.pincode}
                        onChange={handleInputChange}
                        placeholder="PIN Code"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CreditCard className="h-5 w-5" />
                    <span>Payment Method</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={formData.paymentMethod} onValueChange={handlePaymentMethodChange}>
                    <div className="flex items-center space-x-2 p-4 border rounded-lg">
                      <RadioGroupItem value="gpay" id="gpay" />
                      <Label htmlFor="gpay" className="flex-1 cursor-pointer">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 font-bold text-sm">G</span>
                          </div>
                          <div>
                            <p className="font-medium">Google Pay (GPay)</p>
                            <p className="text-sm text-gray-600">Pay using GPay: 8291061982</p>
                          </div>
                        </div>
                      </Label>
                    </div>
                    
                    <div className="flex items-center space-x-2 p-4 border rounded-lg">
                      <RadioGroupItem value="cod" id="cod" />
                      <Label htmlFor="cod" className="flex-1 cursor-pointer">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <Truck className="h-4 w-4 text-green-600" />
                          </div>
                          <div>
                            <p className="font-medium">Cash on Delivery</p>
                            <p className="text-sm text-gray-600">Pay when your order is delivered</p>
                          </div>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>

                  {formData.paymentMethod === 'gpay' && (
                    <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>Payment Instructions:</strong>
                      </p>
                      <ol className="list-decimal list-inside text-sm text-blue-700 mt-2 space-y-1">
                        <li>Send payment to GPay number: <strong>8291061982</strong></li>
                        <li>Use your order ID as reference</li>
                        <li>Take a screenshot of the payment confirmation</li>
                        <li>Send the screenshot to our WhatsApp: 8291061982</li>
                      </ol>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Special Instructions */}
              <Card>
                <CardHeader>
                  <CardTitle>Special Instructions (Optional)</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    name="specialInstructions"
                    value={formData.specialInstructions}
                    onChange={handleInputChange}
                    placeholder="Any special delivery instructions or notes..."
                    rows={3}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {items.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-gray-600">Qty: {item.quantity}</p>
                        </div>
                        <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal:</span>
                      <span>₹{getTotalPrice().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Shipping:</span>
                      <span className="text-green-600">Free</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Tax:</span>
                      <span>₹0.00</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total:</span>
                      <span>₹{getTotalPrice().toFixed(2)}</span>
                    </div>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Place Order
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Checkout


import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useCart } from '../context/CartContext'
import { ShoppingCart, Palette, Shield, Clock } from 'lucide-react'

const Paint = () => {
  const { addToCart } = useCart()

  const paintProduct = {
    id: 'quality-paint-150',
    name: 'Quality Paint',
    price: 150,
    image: '/images/paint/paint_1.jpg',
    description: 'High-quality paint suitable for interior and exterior applications with excellent coverage and durability.',
    unit: 'litre'
  }

  const features = [
    {
      icon: <Palette className="h-6 w-6 text-blue-500" />,
      title: 'Rich Colors',
      description: 'Vibrant and long-lasting colors that maintain their brilliance over time.'
    },
    {
      icon: <Shield className="h-6 w-6 text-green-500" />,
      title: 'Weather Resistant',
      description: 'Excellent protection against weather conditions and environmental factors.'
    },
    {
      icon: <Clock className="h-6 w-6 text-orange-500" />,
      title: 'Quick Drying',
      description: 'Fast-drying formula that saves time and ensures smooth application.'
    }
  ]

  const handleAddToCart = () => {
    addToCart(paintProduct)
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Quality Paint</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transform your spaces with our premium quality paint, designed to provide 
            excellent coverage, durability, and beautiful finish for all your painting needs.
          </p>
        </div>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="flex justify-center">
            <img 
              src={paintProduct.image} 
              alt={paintProduct.name}
              className="w-full max-w-md h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">{paintProduct.name}</h2>
            <p className="text-2xl font-semibold text-blue-600 mb-4">
              ₹{paintProduct.price}/{paintProduct.unit}
            </p>
            <p className="text-gray-600 mb-6 text-lg">
              {paintProduct.description}
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Product Specifications:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Premium quality acrylic-based formula</li>
                <li>Suitable for interior and exterior use</li>
                <li>Excellent coverage and hiding power</li>
                <li>Low VOC and eco-friendly</li>
                <li>Available in multiple color options</li>
                <li>Easy application and cleanup</li>
              </ul>
            </div>

            <Button 
              onClick={handleAddToCart}
              size="lg"
              className="flex items-center justify-center space-x-2 w-full md:w-auto"
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Add to Cart</span>
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Application Guide */}
        <div className="bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Application Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-3 text-lg">Surface Preparation:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Clean the surface thoroughly</li>
                <li>Remove any loose or flaking paint</li>
                <li>Fill cracks and holes with appropriate filler</li>
                <li>Sand smooth surfaces for better adhesion</li>
                <li>Apply primer if necessary</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-lg">Application Tips:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Stir paint thoroughly before use</li>
                <li>Apply in thin, even coats</li>
                <li>Use quality brushes or rollers</li>
                <li>Allow proper drying time between coats</li>
                <li>Clean tools immediately after use</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-yellow-100 rounded-lg">
            <h4 className="font-semibold mb-2">Coverage:</h4>
            <p className="text-gray-700">
              Approximately 120-140 sq ft per litre on smooth surfaces. 
              Coverage may vary depending on surface texture and application method.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Paint


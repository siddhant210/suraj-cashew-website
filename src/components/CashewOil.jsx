import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useCart } from '../context/CartContext'
import { ShoppingCart, Droplets, Heart, Sparkles } from 'lucide-react'

const CashewOil = () => {
  const { addToCart } = useCart()

  const cashewOilProduct = {
    id: 'cashew-oil-250',
    name: 'Pure Cashew Oil',
    price: 250,
    image: '/images/cashew_oil/cashew_oil_1.jpg',
    description: 'Premium quality pure cashew oil, cold-pressed to retain all natural nutrients and flavor.',
    unit: 'litre'
  }

  const benefits = [
    {
      icon: <Heart className="h-6 w-6 text-red-500" />,
      title: 'Heart Healthy',
      description: 'Rich in monounsaturated fats that support cardiovascular health.'
    },
    {
      icon: <Sparkles className="h-6 w-6 text-yellow-500" />,
      title: 'Skin & Hair Care',
      description: 'Natural moisturizing properties for healthy skin and hair.'
    },
    {
      icon: <Droplets className="h-6 w-6 text-blue-500" />,
      title: 'Pure & Natural',
      description: 'Cold-pressed extraction ensures maximum purity and nutrition.'
    }
  ]

  const handleAddToCart = () => {
    addToCart(cashewOilProduct)
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Pure Cashew Oil</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the natural goodness of our premium cashew oil, cold-pressed to preserve 
            all the essential nutrients and natural flavor.
          </p>
        </div>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="flex justify-center">
            <img 
              src={cashewOilProduct.image} 
              alt={cashewOilProduct.name}
              className="w-full max-w-md h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">{cashewOilProduct.name}</h2>
            <p className="text-2xl font-semibold text-green-600 mb-4">
              ₹{cashewOilProduct.price}/{cashewOilProduct.unit}
            </p>
            <p className="text-gray-600 mb-6 text-lg">
              {cashewOilProduct.description}
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Product Features:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>100% Pure and Natural</li>
                <li>Cold-pressed extraction method</li>
                <li>Rich in essential fatty acids</li>
                <li>No artificial additives or preservatives</li>
                <li>Suitable for cooking and cosmetic use</li>
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

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Health Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Usage Instructions */}
        <div className="bg-amber-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-center">How to Use</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-3 text-lg">For Cooking:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Perfect for sautéing and light frying</li>
                <li>Adds a subtle nutty flavor to dishes</li>
                <li>Use in salad dressings and marinades</li>
                <li>Ideal for Asian and Indian cuisine</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-lg">For Beauty Care:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Apply directly to skin as a moisturizer</li>
                <li>Use as a hair oil for nourishment</li>
                <li>Mix with other oils for massage</li>
                <li>Natural remedy for dry skin conditions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CashewOil


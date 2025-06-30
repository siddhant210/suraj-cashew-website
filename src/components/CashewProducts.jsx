import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Star, ShoppingCart, ArrowLeft } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

const CashewProducts = () => {
  const { addToCart } = useCart()

  const cashewProducts = [
    {
      id: 1,
      name: 'Premium Normal Cashews',
      price: 1000,
      originalPrice: 1200,
      image: '/images/cashews/normal/normal_cashew_1.png',
      description: 'Hand-selected premium quality normal cashews from Ratnagiri. Rich in nutrients and perfect for snacking.',
      features: ['Premium Quality', 'Hand Selected', 'Rich in Protein', 'Natural & Fresh'],
      rating: 4.8,
      reviews: 156,
      badge: 'Best Seller'
    },
    {
      id: 2,
      name: 'Standard Normal Cashews',
      price: 900,
      originalPrice: 1000,
      image: '/images/cashews/normal/normal_cashew_2.jpg',
      description: 'Good quality normal cashews perfect for daily consumption and cooking purposes.',
      features: ['Good Quality', 'Value for Money', 'Fresh & Natural', 'Perfect for Cooking'],
      rating: 4.6,
      reviews: 89,
      badge: 'Popular'
    },
    {
      id: 3,
      name: 'Economy Normal Cashews',
      price: 800,
      originalPrice: 900,
      image: '/images/cashews/normal/normal_cashew_3.jpg',
      description: 'Budget-friendly normal cashews without compromising on taste and quality.',
      features: ['Budget Friendly', 'Good Taste', 'Natural', 'Bulk Purchase'],
      rating: 4.4,
      reviews: 203,
      badge: 'Value'
    },
    {
      id: 4,
      name: 'Premium Salted Cashews',
      price: 1100,
      originalPrice: 1300,
      image: '/images/cashews/salted/salted_cashew_1.png',
      description: 'Perfectly salted premium cashews with the right balance of salt and natural cashew flavor.',
      features: ['Perfect Salt Balance', 'Premium Quality', 'Ready to Eat', 'Party Snack'],
      rating: 4.9,
      reviews: 134,
      badge: 'Premium'
    },
    {
      id: 5,
      name: 'Spicy Cashews',
      price: 1000,
      originalPrice: 1200,
      image: '/images/cashews/spicy/spicy_cashew_1.jpg',
      description: 'Deliciously spiced cashews with a perfect blend of Indian spices for a flavorful experience.',
      features: ['Spicy Flavor', 'Indian Spices', 'Crunchy Texture', 'Snack Time Favorite'],
      rating: 4.7,
      reviews: 98,
      badge: 'Spicy'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="section-padding gradient-primary">
        <div className="container-max">
          <div className="text-center text-white space-y-content">
            <div className="flex items-center justify-center mb-6">
              <Link to="/" className="btn-secondary bg-white/10 text-white border-white/20 hover:bg-white/20 mr-4">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </div>
            <h1 className="heading-primary">Premium Cashews</h1>
            <p className="text-large text-white/90 max-w-2xl mx-auto">
              Discover our range of premium quality cashews from Ratnagiri. Hand-selected for freshness and taste.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="product-grid">
            {cashewProducts.map((product) => (
              <Card key={product.id} className="product-card hover-lift">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="product-image"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`badge ${
                      product.badge === 'Best Seller' ? 'badge-success' :
                      product.badge === 'Premium' ? 'badge-info' :
                      product.badge === 'Spicy' ? 'badge-warning' :
                      'badge-info'
                    }`}>
                      {product.badge}
                    </span>
                  </div>
                  {product.originalPrice > product.price && (
                    <div className="absolute top-4 left-4">
                      <span className="badge bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400">
                        Save ₹{product.originalPrice - product.price}
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="product-content">
                  <div className="space-y-tight">
                    <CardHeader className="p-0">
                      <CardTitle className="heading-tertiary">{product.name}</CardTitle>
                      <div className="flex items-center space-x-2">
                        <CardDescription className="text-2xl font-bold text-primary">
                          ₹{product.price}/kg
                        </CardDescription>
                        {product.originalPrice > product.price && (
                          <span className="text-sm text-muted-foreground line-through">
                            ₹{product.originalPrice}/kg
                          </span>
                        )}
                      </div>
                    </CardHeader>
                    
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) 
                              ? 'fill-yellow-400 text-yellow-400' 
                              : 'text-gray-300'
                          }`} 
                        />
                      ))}
                      <span className="text-sm text-muted-foreground ml-2">
                        ({product.rating}) • {product.reviews} reviews
                      </span>
                    </div>

                    <p className="text-body text-sm">{product.description}</p>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-foreground">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {product.features.map((feature, index) => (
                          <span key={index} className="text-xs text-muted-foreground">
                            • {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => addToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.image,
                      unit: 'kg'
                    })}
                    className="btn-primary w-full mt-4"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="section-padding gradient-secondary">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center space-y-content">
            <h2 className="heading-secondary">Why Choose Our Cashews?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <h3 className="heading-tertiary mb-2">Premium Quality</h3>
                <p className="text-body">Hand-selected cashews from the finest farms in Ratnagiri</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="heading-tertiary mb-2">Fresh & Natural</h3>
                <p className="text-body">No artificial preservatives, just pure natural goodness</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <ArrowLeft className="h-8 w-8 text-primary" />
                </div>
                <h3 className="heading-tertiary mb-2">Best Prices</h3>
                <p className="text-body">Competitive pricing with no compromise on quality</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CashewProducts


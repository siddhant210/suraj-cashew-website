import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Star, Truck, Shield, Award, Users, ShoppingCart, Phone } from 'lucide-react'
import { useCart } from '../context/CartContext'

const Home = () => {
  const { addToCart } = useCart()

  const featuredProducts = [
    {
      id: 1,
      name: 'Premium Normal Cashews',
      price: 1000,
      image: '/images/cashews/normal/normal_cashew_1.png',
      category: 'cashews',
      badge: 'Best Seller',
      rating: 4.8,
      reviews: 156
    },
    {
      id: 2,
      name: 'Pure Cashew Oil',
      price: 250,
      image: '/images/cashew_oil/cashew_oil_1.jpg',
      category: 'oil',
      badge: 'Premium',
      rating: 4.9,
      reviews: 89
    },
    {
      id: 3,
      name: 'Quality Paint',
      price: 150,
      image: '/images/paint/paint_1.jpg',
      category: 'paint',
      badge: 'Popular',
      rating: 4.7,
      reviews: 203
    }
  ]

  const stats = [
    { number: '10,000+', label: 'Happy Customers', icon: <Users className="h-8 w-8" /> },
    { number: '5+', label: 'Years Experience', icon: <Award className="h-8 w-8" /> },
    { number: '100%', label: 'Quality Assured', icon: <Shield className="h-8 w-8" /> },
    { number: '24/7', label: 'Support Available', icon: <Truck className="h-8 w-8" /> }
  ]

  const features = [
    {
      title: 'Premium Quality',
      description: 'Hand-selected cashews and carefully processed oil for the best quality.',
      icon: <Award className="h-8 w-8 text-primary" />
    },
    {
      title: 'Fast Delivery',
      description: 'Quick and reliable delivery to your doorstep with tracking.',
      icon: <Truck className="h-8 w-8 text-primary" />
    },
    {
      title: 'Secure Payment',
      description: 'Multiple payment options including GPay and Cash on Delivery.',
      icon: <Shield className="h-8 w-8 text-primary" />
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding gradient-hero relative overflow-hidden">
        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-content">
              <h1 className="heading-primary text-white animate-fade-in-up">
                Welcome to <span className="text-yellow-300">Suraj Cashew</span>
              </h1>
              <p className="text-large text-white/90 animate-fade-in-up animation-delay-200">
                Premium quality cashews, pure cashew oil, and reliable paint products. Your trusted source for natural and quality products from Ratnagiri.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-400">
                <Button asChild size="lg" className="btn-primary">
                  <Link to="/cashews">
                    Shop Cashews <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" className="btn-secondary bg-white/10 text-white border-white/20 hover:bg-white/20">
                  <Link to="/contact">
                    Contact Us <Phone className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end animate-fade-in-up animation-delay-600">
              <div className="relative">
                <img 
                  src="/images/cashews/normal/normal_cashew_1.png" 
                  alt="Premium Cashews" 
                  className="w-full max-w-md rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
                />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary">
                  {stat.icon}
                </div>
                <div className="heading-tertiary mb-2">{stat.number}</div>
                <div className="text-body">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding gradient-secondary">
        <div className="container-max space-y-content">
          <div className="text-center">
            <h2 className="heading-secondary mb-4">Why Choose Us</h2>
            <p className="text-large max-w-2xl mx-auto">
              We're committed to providing the highest quality products with exceptional service
            </p>
          </div>
          <div className="feature-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card hover-lift">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="heading-tertiary mb-4">{feature.title}</h3>
                <p className="text-body">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-background">
        <div className="container-max space-y-content">
          <div className="text-center">
            <h2 className="heading-secondary mb-4">Featured Products</h2>
            <p className="text-large max-w-2xl mx-auto">
              Discover our most popular products, carefully selected for quality and value
            </p>
          </div>
          <div className="product-grid">
            {featuredProducts.map((product) => (
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
                      'badge-warning'
                    }`}>
                      {product.badge}
                    </span>
                  </div>
                </div>
                <div className="product-content">
                  <div className="space-y-tight">
                    <CardHeader className="p-0">
                      <CardTitle className="heading-tertiary">{product.name}</CardTitle>
                      <CardDescription className="text-2xl font-bold text-primary">
                        ₹{product.price} /{product.category === 'cashews' ? 'kg' : product.category === 'oil' ? 'litre' : 'unit'}
                      </CardDescription>
                    </CardHeader>
                    
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm text-muted-foreground ml-2">({product.rating}) • {product.reviews} reviews</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 mt-4">
                    <Button 
                      onClick={() => addToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                        unit: product.category === 'cashews' ? 'kg' : product.category === 'oil' ? 'litre' : 'unit'
                      })}
                      className="btn-primary flex-1"
                    >
                      <ShoppingCart className="h-4 w-4" />
                      Add to Cart
                    </Button>
                    <Button asChild variant="outline" className="btn-outline">
                      <Link to={`/${product.category === 'cashews' ? 'cashews' : product.category === 'oil' ? 'cashew-oil' : 'paint'}`}>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
        <div className="container-max relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-content">
            <h2 className="heading-secondary text-white">About Suraj Cashew</h2>
            <p className="text-large text-white/90">
              We are a trusted supplier of premium cashews, pure cashew oil, and quality paint products from Ratnagiri. 
              With years of experience in the industry, we are committed to providing our customers with 
              the finest products at competitive prices. Our focus on quality and customer satisfaction 
              has made us a preferred choice for customers across India.
            </p>
            <Button asChild size="lg" className="btn-secondary bg-white text-slate-900 hover:bg-white/90">
              <Link to="/contact">
                Learn More About Us <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home


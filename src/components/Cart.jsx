import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useCart } from '../context/CartContext'
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react'

const Cart = () => {
  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart()

  if (items.length === 0) {
    return (
      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          <div className="text-center py-16">
            <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-6" />
            <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Button asChild size="lg">
              <Link to="/">
                Continue Shopping
              </Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Shopping Cart</h1>
          <Button 
            variant="outline" 
            onClick={clearCart}
            className="text-red-600 hover:text-red-700"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Clear Cart
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    {/* Product Image */}
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    
                    {/* Product Details */}
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-gray-600">₹{item.price}/{item.unit}</p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-12 text-center font-medium">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Item Total */}
                    <div className="text-right">
                      <p className="text-lg font-semibold">
                        ₹{(item.price * item.quantity).toFixed(2)}
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-600 hover:text-red-700 mt-2"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>{item.name} × {item.quantity}</span>
                      <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t pt-4">
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

                <Button asChild className="w-full" size="lg">
                  <Link to="/checkout" className="flex items-center justify-center space-x-2">
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>

                <Button asChild variant="outline" className="w-full">
                  <Link to="/">
                    Continue Shopping
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart


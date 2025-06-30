import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, Menu, X, Leaf } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCart } from '../context/CartContext'
import ThemeToggle from './ThemeToggle'

const Header = () => {
  const { getTotalItems } = useCart()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="bg-background/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-border">
      <div className="container-max">
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 md:space-x-3 group" onClick={closeMobileMenu}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Leaf className="h-5 w-5 md:h-7 md:w-7 text-white" />
            </div>
            <div>
              <span className="text-lg md:text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Suraj Cashew
              </span>
              <div className="text-xs text-muted-foreground font-medium hidden sm:block">Premium Quality from Ratnagiri</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            <Link to="/" className="nav-link text-sm xl:text-base">
              Home
            </Link>
            <Link to="/cashews" className="nav-link text-sm xl:text-base">
              Cashews
            </Link>
            <Link to="/cashew-oil" className="nav-link text-sm xl:text-base">
              Cashew Oil
            </Link>
            <Link to="/paint" className="nav-link text-sm xl:text-base">
              Paint
            </Link>
            <Link to="/contact" className="nav-link text-sm xl:text-base">
              Contact
            </Link>
          </nav>

          {/* Right side controls */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Theme Toggle - Hidden on small screens */}
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>
            
            {/* Cart Icon */}
            <Link to="/cart" className="relative group" onClick={closeMobileMenu}>
              <Button variant="outline" size="sm" className="relative h-9 md:h-10">
                <ShoppingCart className="h-4 w-4" />
                <span className="hidden md:inline ml-2 text-sm">Cart</span>
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold shadow-lg">
                    {getTotalItems()}
                  </span>
                )}
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button 
              variant="outline" 
              size="sm" 
              className="lg:hidden h-9 w-9 p-0"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <nav className="py-4 space-y-2">
              <Link 
                to="/" 
                className="block px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link 
                to="/cashews" 
                className="block px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                onClick={closeMobileMenu}
              >
                Cashews
              </Link>
              <Link 
                to="/cashew-oil" 
                className="block px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                onClick={closeMobileMenu}
              >
                Cashew Oil
              </Link>
              <Link 
                to="/paint" 
                className="block px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                onClick={closeMobileMenu}
              >
                Paint
              </Link>
              <Link 
                to="/contact" 
                className="block px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
              <div className="px-4 py-2 sm:hidden">
                <ThemeToggle />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header


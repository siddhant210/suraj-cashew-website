import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import CashewProducts from './components/CashewProducts'
import CashewOil from './components/CashewOil'
import Paint from './components/Paint'
import Contact from './components/Contact'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen bg-background text-foreground">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cashews" element={<CashewProducts />} />
                <Route path="/cashew-oil" element={<CashewOil />} />
                <Route path="/paint" element={<Paint />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </ThemeProvider>
  )
}

export default App


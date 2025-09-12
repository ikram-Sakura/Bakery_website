// App.js (FIXED)
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import './App.css';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;

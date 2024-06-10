// App.js
import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Info from './components/Info';
import Order from './components/Order';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="App">
      <Header cart={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/info" element={<Info />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route
          path="/checkout"
          element={<Checkout totalPrice={calculateTotalPrice()} />}
        />
        {/* Redirect to Checkout when clicking on the checkout button */}
        <Route path="/redirect-to-checkout" element={<Navigate to="/checkout" />} />
      </Routes>
    </div>
  );
};

export default App;

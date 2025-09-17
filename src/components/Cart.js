import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import '../styles/Cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="empty-cart"
          >
            <ShoppingBag size={80} className="empty-icon" />
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added any delicious cakes yet!</p>
            <Link to="/products" className="btn btn-primary">
              Browse Cakes
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="cart-header"
        >
          <h1 className="section-title">Your Cart</h1>
          <p className="section-subtitle">
            Review your delicious selections
          </p>
        </motion.div>

        <div className="cart-content">
          <div className="cart-items">
            <AnimatePresence>
              {cart.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5 }}
                  className="cart-item"
                >
                  <div className="item-image">
                    <img src={item.imgSrc} alt={item.title} />
                  </div>
                  
                  <div className="item-details">
                    <h3>{item.title}</h3>
                    <p className="item-price">${item.price}</p>
                    <p className="item-description">
                      {item.description.substring(0, 60)}...
                    </p>
                  </div>
                  
                  <div className="item-quantity">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="quantity-btn"
                    >
                      <Minus size={16} />
                    </button>
                    
                    <span className="quantity-number">{item.quantity}</span>
                    
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="quantity-btn"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  
                  <div className="item-total">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="remove-btn"
                  >
                    <Trash2 size={20} />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="cart-summary"
          >
            <div className="summary-card">
              <h3>Order Summary</h3>
              
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
              
              <div className="summary-row">
                <span>Shipping</span>
                <span>$5.00</span>
              </div>
              
              <div className="summary-row">
                <span>Tax</span>
                <span>${(getTotalPrice() * 0.08).toFixed(2)}</span>
              </div>
              
              <div className="summary-divider"></div>
              
              <div className="summary-row total">
                <span>Total</span>
                <span>${(getTotalPrice() + 5 + getTotalPrice() * 0.08).toFixed(2)}</span>
              </div>
              
              <Link to="/checkout" className="btn btn-primary checkout-btn">
                Proceed to Checkout
              </Link>
              
              <button onClick={clearCart} className="btn btn-secondary clear-btn">
                Clear Cart
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Apple } from 'lucide-react';
import { FaPaypal } from 'react-icons/fa'; // Using Font Awesome for PayPal icon
import '../styles/Checkout.css';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const { getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const handlePayment = () => {
    // Simulate payment processing
    setTimeout(() => {
      clearCart();
      navigate('/checkout/success');
    }, 2000);
  };

  const totalPrice = getTotalPrice();
  const tax = totalPrice * 0.08;
  const shipping = 5.00;
  const finalTotal = totalPrice + tax + shipping;

  return (
    <div className="checkout-page">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="checkout-header"
        >
          <h1 className="section-title">Checkout</h1>
          <p className="section-subtitle">Complete your purchase</p>
        </motion.div>

        <div className="checkout-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="checkout-summary"
          >
            <div className="summary-card">
              <h3>Order Summary</h3>
              
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              
              <div className="summary-row">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              
              <div className="summary-row">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              
              <div className="summary-divider"></div>
              
              <div className="summary-row total">
                <span>Total</span>
                <span>${finalTotal.toFixed(2)}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="checkout-form"
          >
            <div className="form-section">
              <h3>Payment Method</h3>
              
              <div className="payment-options">
                <label className={`payment-option ${paymentMethod === 'credit-card' ? 'active' : ''}`}>
                  <input
                    type="radio"
                    name="payment"
                    value="credit-card"
                    checked={paymentMethod === 'credit-card'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <CreditCard size={24} />
                  <span>Credit Card</span>
                </label>
                
                <label className={`payment-option ${paymentMethod === 'paypal' ? 'active' : ''}`}>
                  <input
                    type="radio"
                    name="payment"
                    value="paypal"
                    checked={paymentMethod === 'paypal'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <FaPaypal size={24} />
                  <span>PayPal</span>
                </label>
                
                <label className={`payment-option ${paymentMethod === 'apple-pay' ? 'active' : ''}`}>
                  <input
                    type="radio"
                    name="payment"
                    value="apple-pay"
                    checked={paymentMethod === 'apple-pay'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <Apple size={24} />
                  <span>Apple Pay</span>
                </label>
              </div>
            </div>

            {paymentMethod === 'credit-card' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.5 }}
                className="form-section"
              >
                <h3>Card Details</h3>
                
                <div className="form-group">
                  <label>Card Number</label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="form-input"
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Expiry Date</label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="form-input"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>CVV</label>
                    <input
                      type="text"
                      placeholder="123"
                      className="form-input"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Cardholder Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="form-input"
                  />
                </div>
              </motion.div>
            )}

            <button
              onClick={handlePayment}
              className="btn btn-primary payment-btn"
            >
              Pay ${finalTotal.toFixed(2)}
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
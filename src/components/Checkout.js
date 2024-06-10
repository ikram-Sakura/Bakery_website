import React from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ totalPrice }) => {
  const navigate = useNavigate();

  const handlePayment = () => {
    // Implement your payment logic here, e.g., redirecting to a payment gateway
    console.log('Payment processed successfully');
    navigate('/redirect-to-checkout');
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <p>Total Amount: ${totalPrice}</p>
      <h3>Payment Options:</h3>
      <div className="payment-options">
        <button onClick={handlePayment} className="payment-button">Pay with Credit Card</button>
        <button onClick={handlePayment} className="payment-button">Pay with PayPal</button>
        <button onClick={handlePayment} className="payment-button">Pay with Apple Pay</button>
        {/* Add more payment options as needed */}
      </div>
    </div>
  );
};

export default Checkout;

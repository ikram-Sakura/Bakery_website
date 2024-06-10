import React, { useState } from 'react';

const Cart = ({ cart, removeFromCart }) => {
  // State to manage the quantity of each item
  const [quantities, setQuantities] = useState({});

  // Function to handle quantity change
  const handleQuantityChange = (event, index) => {
    const value = parseInt(event.target.value);
    setQuantities({ ...quantities, [index]: value });
  };

  // Function to calculate total price
  const totalPrice = cart.reduce((total, item, index) => total + item.price * (quantities[index] || 1), 0);

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul className="cart-items">
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.imgSrc} alt={item.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <p className="cart-item-title">{item.title}</p>
                  <p className="cart-item-price">${item.price}</p>
                  <div className="quantity-selector">
                    <label htmlFor={`quantity-${index}`}>Quantity:</label>
                    <input
                      type="number"
                      id={`quantity-${index}`}
                      min="1"
                      value={quantities[index] || 1}
                      onChange={(e) => handleQuantityChange(e, index)}
                    />
                  </div>
                  <button onClick={() => removeFromCart(index)} className="remove-button">Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-footer">
            <p className="cart-total">Total: ${totalPrice}</p>
            <button className="checkout-button">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

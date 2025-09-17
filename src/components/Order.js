import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, User, Cake } from 'lucide-react';
import '../styles/Order.css';

const Order = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    address: '',
    phone: '',
    cake: ''
  });

  const cakeOptions = [
    'Chocolate Cake',
    'Vanilla Cake',
    'Strawberry Cake',
    'Lemon Cake',
    'White Chocolate Cake',
    'Red Velvet Cake',
    'Matcha Cake',
    'Caramel Cake',
    'Chocolate Vanilla Mixed Cake',
    'Pistachio Cake',
    'Banana Cake',
    'Black Forest Cake'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Order submitted:', formData);
    alert('Thank you for your order! We will contact you to confirm the details.');
    setFormData({
      name: '',
      email: '',
      date: '',
      time: '',
      address: '',
      phone: '',
      cake: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="order-page">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-header"
        >
          <h1 className="section-title">Place Your Order</h1>
          <p className="section-subtitle">
            Fill out the form below to place your cake order. We'll contact you to confirm the details.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-form-container"
        >
          <form onSubmit={handleSubmit} className="order-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">
                  <User size={18} />
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">
                  <User size={18} />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="date">
                  <Calendar size={18} />
                  Delivery Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="time">
                  <Clock size={18} />
                  Delivery Time
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="address">
                <MapPin size={18} />
                Delivery Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="Enter your delivery address"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">
                  <User size={18} />
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="cake">
                  <Cake size={18} />
                  Cake Selection
                </label>
                <select
                  id="cake"
                  name="cake"
                  value={formData.cake}
                  onChange={handleChange}
                  required
                  className="form-input"
                >
                  <option value="">Select a cake</option>
                  {cakeOptions.map((cake, index) => (
                    <option key={index} value={cake}>
                      {cake}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">
                <User size={18} />
                Special Instructions (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                rows="4"
                placeholder="Any special requests or instructions for your order..."
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary submit-btn">
              Place Order
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="order-info"
        >
          <h3>Order Information</h3>
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">
                <Clock size={32} />
              </div>
              <h4>Delivery Time</h4>
              <p>Orders must be placed at least 24 hours in advance for standard cakes. Custom cakes may require more time.</p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">
                <MapPin size={32} />
              </div>
              <h4>Delivery Area</h4>
              <p>We deliver within a 20-mile radius. Additional charges may apply for deliveries outside this area.</p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">
                <Cake size={32} />
              </div>
              <h4>Custom Orders</h4>
              <p>For custom cake designs, please contact us directly to discuss your requirements and pricing.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Order;
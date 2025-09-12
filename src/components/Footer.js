import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { MapPin, Phone, Mail } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="footer-section"
          >
            <div className="footer-logo">
              <div className="logo-icon">🎂</div>
              <span className="logo-text">Sweet Cake</span>
            </div>
            <p className="footer-description">
              Creating delicious memories one cake at a time. 
              We specialize in handcrafted cakes made with love 
              and the finest ingredients.
            </p>
            <div className="social-links">
  <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
    <FaFacebook size={20} />
  </a>
  <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
    <FaInstagram size={20} />
  </a>
  <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
    <FaTwitter size={20} />
  </a>
</div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="footer-section"
          >
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">Our Cakes</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/cart">Cart</Link></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="footer-section"
          >
            <h3>Contact Info</h3>
            <div className="contact-info">
              <div className="contact-item">
                <MapPin size={18} />
                <span>123 Bakery Street, Sweet City</span>
              </div>
              <div className="contact-item">
                <Phone size={18} />
                <span>+1 (555) 123-CAKE</span>
              </div>
              <div className="contact-item">
                <Mail size={18} />
                <span>hello@sweetcake.com</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="footer-section"
          >
            <h3>Newsletter</h3>
            <p>Subscribe to get updates on new flavors and special offers</p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="footer-bottom"
        >
          <p>&copy; {currentYear} Sweet Cake Bakery. All rights reserved.</p>
          <p>Made with ❤️ by Sweet Cake Team</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
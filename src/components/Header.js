// components/Header.js (NEW)
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import '../styles/Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getTotalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <div className="logo-icon">🎂</div>
            <span className="logo-text">Sweet Cake</span>
          </Link>

          <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Link>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
              About
            </Link>
            <Link to="/products" className={location.pathname === '/products' ? 'active' : ''}>
              Products
            </Link>
            <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
              Contact
            </Link>
          </nav>

          <div className="header-actions">
            <Link to="/cart" className="cart-btn">
              <ShoppingCart size={24} />
              {getTotalItems() > 0 && (
                <span className="cart-badge">{getTotalItems()}</span>
              )}
            </Link>

            <button 
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
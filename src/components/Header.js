import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';
import '../styles/header.css';
import logo from './Sweet Cake.png';

const Header = ({ cart }) => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} width="150px" height="100px" style={{ cursor: 'pointer' }} alt="Sweet Cake" />
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/info">Info</Link></li>
          <li>
            <Link to="/cart">
              <FaShoppingCart />
              {/* Display the number of items in the cart if available */}
              {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
            </Link>
          </li>
        </ul>
      </nav>
      
    </header>
  );
};

export default Header;

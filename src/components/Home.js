// components/Home.js (NEW)
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Truck, Heart, Shield, Palette, Leaf } from 'lucide-react';
import '../styles/Home.css';

const Home = () => {
  const features = [
    { icon: <Star size={32} />, title: 'Premium Quality', description: 'Made with the finest ingredients' },
    { icon: <Truck size={32} />, title: 'Fast Delivery', description: 'Fresh cakes delivered to your door' },
    { icon: <Heart size={32} />, title: 'Made with Love', description: 'Every cake crafted with passion' },
    { icon: <Shield size={32} />, title: '100% Guarantee', description: 'Satisfaction guaranteed' },
    { icon: <Palette size={32} />, title: 'Custom Designs', description: 'Tailored cakes for every occasion' },
    { icon: <Leaf size={32} />, title: 'Eco-Friendly Packaging', description: 'Sustainable and safe for the environment' },
  ];

  const popularCakes = [
    { image: 'https://images.unsplash.com/photo-1709195902163-7eee13e78970?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hvY2xhdGUlMjBjYWtlfGVufDB8fDB8fHww', name: 'Chocolate Dream', price: '$35' },
    { image: 'https://plus.unsplash.com/premium_photo-1663839331564-2a43583cea49?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8VmFuaWxsYSUyMENha2V8ZW58MHx8MHx8fDA%3D', name: 'Vanilla Bliss', price: '$15' },
    { image: 'https://images.unsplash.com/photo-1622621746668-59fb299bc4d7?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U3RyYXdiZXJyeSUyMENha2V8ZW58MHx8MHx8fDA%3D', name: 'Strawberry Delight', price: '$20' }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-title"
            >
              Sweet Moments <br />
              <span className="highlight">Made with Love</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-subtitle"
            >
              Discover our handcrafted cakes made with the finest ingredients 
              and a whole lot of love. Perfect for every celebration.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-actions"
            >
              <Link to="/products" className="btn btn-primary">
                Explore Cakes <ArrowRight size={20} />
              </Link>
              <Link to="/about" className="btn btn-secondary">
                Learn More
              </Link>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="hero-image"
          >
            <img src="https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNha2V8ZW58MHx8MHx8fDA%3D" alt="Beautiful cake" />
          </motion.div>
        </div>
        
        <div className="hero-scroll-indicator">
          <div className="scroll-dot"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Sweet Cake</h2>
          <p className="section-subtitle">
            We put love and care into every cake we make, ensuring each bite is pure bliss
          </p>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="feature-card"
              >
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="popular-section">
        <div className="container">
          <h2 className="section-title">Customer Favorites</h2>
          <p className="section-subtitle">
            Discover our most loved cakes that keep customers coming back for more
          </p>
          
          <div className="products-grid">
            {popularCakes.map((cake, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="product-card"
              >
                <div className="product-image">
                  <img src={cake.image} alt={cake.name} />
                  <div className="product-overlay">
                    <Link to="/products" className="btn btn-primary">
                      View Details
                    </Link>
                  </div>
                </div>
                <div className="product-info">
                  <h3>{cake.name}</h3>
                  <span className="product-price">{cake.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link to="/products" className="btn btn-primary">
              View All Cakes <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="cta-content"
          >
            <h2>Ready to Sweeten Your Day?</h2>
            <p>Browse our collection or place a custom order for your special occasion</p>
            <div className="cta-actions">
              <Link to="/products" className="btn btn-primary">
                Shop Now
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
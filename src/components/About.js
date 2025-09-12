// components/About.js (NEW)
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Heart, Clock } from 'lucide-react';
import '../styles/About.css';

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: <Award size={32} />, number: '500+', label: 'Cakes Sold' },
    { icon: <Users size={32} />, number: '200+', label: 'Happy Customers' },
    { icon: <Heart size={32} />, number: '50+', label: 'Custom Orders' },
    { icon: <Clock size={32} />, number: '2+', label: 'Years Experience' }
  ];

  const services = [
    {
      image: 'https://plus.unsplash.com/premium_photo-1667761255134-30193517a3d8?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q3VzdG9tJTIwQ2FrZXN8ZW58MHx8MHx8fDA%3D',
      title: 'Custom Cakes',
      description: 'We create custom cakes for all your special occasions, tailored to your specifications.'
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1674498802496-c9a5983ef176?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8V2VkZGluZyUyMENha2VzfGVufDB8fDB8fHww',
      title: 'Wedding Cakes',
      description: 'Our beautiful wedding cakes will make your big day even more memorable.'
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1661719343992-d0504b2d766d?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmFraW5nJTIwQ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D',
      title: 'Baking Classes',
      description: 'Join our baking classes to learn the art of baking from our expert bakers.'
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1664297836401-d0a2e3cefacf?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RGVsaXZlcnklMjBTZXJ2aWNlfGVufDB8fDB8fHww',
      title: 'Delivery Service',
      description: 'We offer reliable delivery services to ensure your cakes arrive fresh and on time.'
    },
    {
      image: 'https://images.unsplash.com/photo-1677676700414-ff5d6302a978?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RXZlbnQlMjBDYXRlcmluZ3xlbnwwfHwwfHx8MA%3D%3D',
      title: 'Event Catering',
      description: 'We provide catering services for events of all sizes, offering a variety of sweet treats.'
    },
    {
      image: 'https://images.unsplash.com/photo-1740818576358-7596eb883cf3?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YktFUlklMjBDb25zdWx0YXRpb24lMjBTZXJ2aWNlc3xlbnwwfHwwfHx8MA%3D%3D',
      title: 'Consultation Services',
      description: 'Our experts are here to help you plan the perfect cake for your event.'
    }
  ];

  const slides = [
    '/img/images (6).jpeg',
    '/img/download - Copy.jpeg',
    '/img/download (4).jpeg'
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="about-hero-content"
          >
            <h1 className="section-title">About Sweet Cake</h1>
            <p className="section-subtitle">
              Where every cake tells a story of love, joy, and cherished memories
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="story-text"
            >
              <h2>Our Sweet Journey</h2>
              <p>
                Welcome to Sweet Cake, your ultimate destination for all things sweet and delightful. 
                At Sweet Cake, we believe that every moment is worth celebrating, and what better way 
                to celebrate than with our exquisite range of cakes and desserts.
              </p>
              <p>
                Our journey began in 2024 with a simple yet ambitious goal: to redefine the art of 
                baking and elevate it to new heights. Founded by Ikram Bachar, a passionate baker 
                with a vision for excellence, Sweet Cake quickly gained recognition for its unparalleled 
                craftsmanship and commitment to quality.
              </p>
              <p>
                What started as a humble home kitchen operation soon blossomed into a thriving 
                online store, serving customers across the nation with delicious, handcrafted cakes 
                made with love and the finest ingredients.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="story-slider"
            >
              <div className="slider-container">
                <div 
                  className="slides"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {slides.map((slide, index) => (
                    <div key={index} className="slide">
                      <img src={slide} alt={`Cake ${index + 1}`} />
                    </div>
                  ))}
                </div>
                <div className="slider-dots">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      className={`dot ${index === currentSlide ? 'active' : ''}`}
                      onClick={() => setCurrentSlide(index)}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="stat-card"
              >
                <div className="stat-icon">
                  {stat.icon}
                </div>
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="services-header"
          >
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              From custom creations to baking classes, we offer everything for cake lovers
            </p>
          </motion.div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="service-card"
              >
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mission-content"
          >
            <h2>Our Mission</h2>
            <p>
              At Sweet Cake, our mission is to spread joy, one slice at a time. We're committed to 
              creating exceptional cakes that not only taste incredible but also create lasting 
              memories. From sourcing the finest ingredients to employing skilled artisans, we 
              spare no effort in delivering a product that exceeds your expectations.
            </p>
            <p>
              We take pride in our commitment to sustainability and ethical practices, ensuring 
              that every cake is not only delicious but also environmentally conscious. Join us 
              on this delicious journey and let us make your moments sweeter than ever before.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
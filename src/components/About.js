import React, { useEffect, useState } from 'react';
import '../styles/about.css';
//import '../styles/slider.css';
//import '../styles/services.css';

const About = () => {
  const [counter, setCounter] = useState(0);

  const showSlide = (index) => {
    const slides = document.querySelector('.slides');
    const autoBtns = document.querySelectorAll('.auto-btn');

    slides.style.transform = `translateX(${-index * 100}%)`;
    autoBtns.forEach((btn, i) => {
      btn.style.background = i === index ? '#333' : '#ddd';
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => (prevCounter + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    showSlide(counter);
  }, [counter]);

  return (
    <div className="about-container">
      <div className="card">
        <h1>About Sweet Cake</h1>
        <div className="slider" id="slider">
          <div className="slides">
            <img src="/img/images (6).jpeg" alt="Cake Image 1" />
            <img src="/img/download - Copy.jpeg" alt="Cake Image 2" />
            <img src="/img/download (4).jpeg" alt="Cake Image 3" />
            <img src="/img/download (6).jpeg" alt="Cake Image 4" />
            <img src="/img/download (7).jpeg" alt="Cake Image 5" />
            <img src="/img/images (1) - Copy.jpeg" alt="Cake Image 6" />
            <img src="/img/images (4).copy.jpeg" alt="Cake Image 7" />
            <img src="/img/download (3).jpeg" alt="Cake Image 8" />
            <img src="/img/download (5).jpeg" alt="Cake Image 9" />
            <img src="/img/images (10).jpeg" alt="Cake Image 10" />
            <img src="/img/download.jpeg" alt="Cake Image 11" />
            <img src="/img/images (2) - Copy.jpeg" alt="Cake Image 12" />
          </div>
          <div className="navigation-auto">
            <button className="auto-btn"></button>
            <button className="auto-btn"></button>
            <button className="auto-btn"></button>
          </div>
        </div>
        <div className="about-text">
        <p>Welcome to Sweet Cake, your ultimate destination for all things sweet and delightful. At Sweet Cake, we believe that every moment is worth celebrating, and what better way to celebrate than with our exquisite range of cakes and desserts. From decadent chocolate creations to light and fluffy confections, we pride ourselves on offering a diverse selection of treats to satisfy every palate.</p>

<p>Our journey began in 2024 with a simple yet ambitious goal: to redefine the art of baking and elevate it to new heights. Founded by Ikram Bachar, a passionate baker with a vision for excellence, Sweet Cake quickly gained recognition for its unparalleled craftsmanship and commitment to quality. What started as a humble home kitchen operation soon blossomed into a thriving online store, serving customers across the nation.</p>

<p>At Sweet Cake, we believe that every cake tells a story – a story of love, joy, and cherished memories. That's why we pour our heart and soul into every creation, ensuring that each bite is a moment of pure bliss. From weddings and birthdays to anniversaries and special occasions, our cakes are designed to be the highlight of your event, leaving a lasting impression on you and your guests.</p>

<p>But our dedication to excellence goes beyond just taste – it extends to every aspect of our business. From sourcing the finest ingredients to employing skilled artisans, we spare no effort in delivering a product that exceeds your expectations. We take pride in our commitment to sustainability and ethical practices, ensuring that every cake is not only delicious but also environmentally conscious.</p>

<p>As we continue to grow and evolve, our mission remains the same: to spread joy, one slice at a time. Whether you're celebrating a milestone or simply indulging your sweet tooth, we invite you to experience the magic of Sweet Cake. Join us on this delicious journey and let us make your moments sweeter than ever before.</p>

<p>Thank you for choosing Sweet Cake – where every cake is a masterpiece, and every moment is a celebration.</p>

<p>Sincerely,</p>
<p>Ikram Bachar, Founder</p>

        </div>
      </div>
      <h2>Our Services</h2>
      <div className="services-container">
        <div className="service-card">
          <img src="/img/costume.jpeg" alt="Custom Cakes" />
          <h3>Custom Cakes</h3>
          <p>We create custom cakes for all your special occasions, tailored to your specifications.</p>
        </div>
        <div className="service-card">
          <img src="/img/wedding.jpeg" alt="Wedding Cakes" />
          <h3>Wedding Cakes</h3>
          <p>Our beautiful wedding cakes will make your big day even more memorable.</p>
        </div>
        <div className="service-card">
          <img src="/img/cup.jpeg" alt="Cupcakes" />
          <h3>Cupcakes</h3>
          <p>Delicious and beautifully decorated cupcakes for any event or just to enjoy.</p>
        </div>
        <div className="service-card">
          <img src="/img/class.jpeg" alt="Baking Classes" />
          <h3>Baking Classes</h3>
          <p>Join our baking classes to learn the art of baking from our expert bakers.</p>
        </div>
      </div>
    </div>
  );
};

export default About;

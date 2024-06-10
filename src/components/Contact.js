import React from 'react';
//import { Link } from 'react-router-dom'; 
import '../styles/contact.css';

const Contact = () => {
  return (
    <div>
     

      <div className="container">
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            <p className="text">
              Sweet Cake Bakery is located at 123 Main Street, in the heart of downtown.
              For more information, feel free to contact us anytime.
            </p>

            <div className="info">
              <div className="information">
                <p>Email: sweetcakebakery@gmail.com</p>
              </div>

              <div className="information">
                <p> {' Phone Number : '}05 10 12 37 95</p>
              </div>
            </div>

            <div className="social-media">
              <p>Connect with us :</p>
              <div className="social-icons">
                <a href="ikram">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="ikram">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="ikram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="ikram">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <br />
              <div className="credit">Made with <span style={{ color: 'tomato' }}>❤</span> by SweetCake</div>
            </div>
          </div>

          <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>

            <form action="index.html" autoComplete="off">
              <h3 className="title">Contact us</h3>
              <div className="input-container">
                <input type="text" name="name" className="input" />
                <label htmlFor="name">Username</label>
                <span>Username</span>
              </div>
              <div className="input-container">
                <input type="email" name="email" className="input" />
                <label htmlFor="email">Email</label>
                <span>Email</span>
              </div>
              <div className="input-container">
                <input type="tel" name="phone" className="input" />
                <label htmlFor="phone">Phone</label>
                <span>Phone</span>
              </div>
              <div className="input-container textarea">
                <textarea name="message" className="input"></textarea>
                <label htmlFor="message">Message</label>
                <span>Message</span>
              </div>
              <input type="submit" value="Send" className="btn" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';
//import 'font-awesome/css/font-awesome.css';
//import 'font-awesome/css/all.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Home = () => {
  return (
    <div>
      
      <div className="content">
        <p>
          Let's have a good time and be hyper together<br />
          with some sugary and delicious cake,<br />
          don't waste time.<br />
          Hurry up!
        </p>
        <Link to="/products" className="button">
          Check Products <i className="fa fa-eye" aria-hidden="true" style={{ fontSize: '20px', color: 'rgb(186, 102, 241)' }}></i>
        </Link>
        <Link to="/order" className="button">
          Order Now <i className="fa fa-cart-arrow-down" aria-hidden="true" style={{ fontSize: '20px', color: 'rgb(186, 102, 241)' }}></i>
        </Link>
      </div>
    </div>
  );
};

export default Home;

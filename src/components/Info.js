import React from 'react'; // Import React
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/info.css'; // Import CSS file

const Info = () => {
  return (
    <div>
     

      <main>
        <div className="cardI" id="about">
          <p className="card-title">About Sweet Cake Bakery</p>
          <p className="small-desc">Welcome to Sweet Cake Bakery! We are a local bakery that specializes in creating delicious and beautiful cakes. Our cakes are made from the finest ingredients and are baked fresh to order. We believe in using traditional baking methods and time-honored recipes to create our cakes, ensuring that each one is not only a treat for the taste buds but a work of art. Whether you're looking for a party cake, or simply a special treat, we have something for everyone.</p>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </div>
        <div className="cardI" id="products">
          <p className="card-title">Our Products</p>
          <p className="small-desc">All of our cakes are customizable, so you can create a unique design to suit your occasion. We also offer a variety of flavors, fillings, and frostings to choose from. Whether you prefer classic flavors like vanilla and chocolate, or more adventurous options like lemon and hazelnut, we have something to suit everyone's tastes.</p>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </div>
        <div className="cardI" id="location">
          <p className="card-title">Location</p>
          <p className="small-desc">Sweet Cake Bakery is located at 123 Main Street, in the heart of downtown. We are open Monday to Saturday from 9am to 6pm, and Sunday from 10am to 5pm. Come visit us today and treat yourself to a sweet treat!</p>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </div>
        <div className="cardI" id="contact">
          <p className="card-title">Contact Us</p>
          <p className="small-desc">For more information or to place an order, please call us at 06 45 64 75 98 or send us an email at sweetcakebakery@gmail.com. We look forward to hearing from you!</p>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </div>
      </main>

      <footer>
        <p>Copyright &copy; Sweet Cake Bakery 2024</p>
      </footer>
    </div>
  );
};

export default Info;

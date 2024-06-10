import React from 'react';
import '../styles/order.css';

const Order = () => {
  return (
    <div className="card">
      <h2>Order Now</h2>
      <form>
        <label htmlFor="n" className="form-label">Name</label>
        <input type="text" className="form-control" id="n" placeholder="Enter your name" name="n" /><br />
        
        <label htmlFor="Email" className="form-label">Email</label>
        <input type="email" className="form-control" id="Email" placeholder="Enter your email" name="Email" /><br />
        
        <label htmlFor="d" className="form-label">Date</label><br />
        <input type="date" id="d" name="d" className="form-control" /><br />
        
        <label htmlFor="t" className="form-label">Time</label><br />
        <input type="time" id="t" name="t" className="form-control" /><br />
        
        <label htmlFor="Address" className="form-label">Address</label>
        <input type="text" className="form-control" id="Address" placeholder="Enter your Address" name="Address" /><br />
        
        <label htmlFor="phone" className="form-label">Phone number</label>
        <input type="text" className="form-control" id="phone" placeholder="Enter your phone number" name="phone" /><br />
        
        <label htmlFor="Cake" className="form-label">Your Cake</label>
        <select id="Cake" name="Cake" className="form-select">
          <option>Chocolate Cake</option>
          <option>Vanilla Cake</option>
          <option>Strawberry Cake</option>
          <option>Lemon Cake</option>
          <option>White Chocolate Cake</option>
          <option>Red Velvet Cake</option>
          <option>Matcha Cake</option>
          <option>Caramel Cake</option>
          <option>Chocolate Vanilla Mixed Cake</option>
          <option>Pistachio Cake</option>
          <option>Banana Cake</option>
          <option>Black Forest Cake</option>
        </select><br />
        
        <input type="submit" value="Make A Reservation" />
      </form>
    </div>
  );
};

export default Order;

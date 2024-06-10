import React, { useState } from 'react';
import '../styles/products.css'; 

const menuItems = [ 
  { 
    imgSrc: '/img/images (6).jpeg', 
    title: 'Chocolate Cake', 
    price: 35, 
    description: 'Indulge in the rich and moist layers of our Chocolate Cake, crafted with the finest cocoa and topped with a velvety chocolate ganache. Perfect for any chocolate lover, this cake promises a decadent experience with every bite.'
  },
  { 
    imgSrc: '/img/download - Copy.jpeg', 
    title: 'Vanilla Cake', 
    price: 15, 
    description: 'Our Vanilla Cake is a light and fluffy delight, made with pure vanilla extract and frosted with a smooth vanilla buttercream. Ideal for any occasion, this classic cake is sure to please everyone with its subtle sweetness and airy texture.'
  },
  { 
    imgSrc: '/img/download (4).jpeg', 
    title: 'Strawberry Cake', 
    price: 20, 
    description: 'Experience the taste of summer with our Strawberry Cake, filled with layers of fresh strawberries and creamy strawberry frosting. This cake is a perfect balance of sweetness and tanginess, making it a favorite for berry lovers.'
  },
  { 
    imgSrc: '/img/download (3).jpeg', 
    title: 'Lemon Cake', 
    price: 20, 
    description: 'Our Lemon Cake is a zesty treat that combines the tartness of lemons with a delicate sweetness. Topped with a tangy lemon glaze, this cake is refreshing and light, perfect for those who enjoy a citrusy dessert.'
  },
  { 
    imgSrc: '/img/download (7).jpeg', 
    title: 'White Chocolate Cake', 
    price: 20, 
    description: 'Delight in the creamy goodness of our White Chocolate Cake. This luxurious cake is layered with white chocolate mousse and covered in a silky white chocolate frosting, making it an exquisite choice for white chocolate enthusiasts.'
  },
  { 
    imgSrc: '/img/download (5).jpeg', 
    title: 'Red Velvet Cake', 
    price: 30, 
    description: 'Our Red Velvet Cake is a classic favorite, known for its vibrant red color and moist, tender crumb. Paired with a rich cream cheese frosting, this cake is both beautiful and delicious, making it perfect for any celebration.'
  },
  { 
    imgSrc: '/img/images (2) - Copy.jpeg', 
    title: 'Matcha Cake', 
    price: 20, 
    description: 'For a unique and delightful experience, try our Matcha Cake. Made with premium matcha green tea powder, this cake offers a delicate earthy flavor and is frosted with a light matcha buttercream. A must-try for matcha lovers.'
  },
  { 
    imgSrc: '/img/images (3) - Copy.jpeg', 
    title: 'Caramel Cake', 
    price: 20, 
    description: 'Indulge in the rich flavors of our Caramel Cake. This cake features layers of moist cake infused with caramel sauce and is frosted with a luscious caramel buttercream. Perfect for those who love the sweet, buttery taste of caramel.'
  },
  { 
    imgSrc: '/img/images (1) - Copy.jpeg', 
    title: 'Chocolate Vanilla Mixed Cake', 
    price: 25, 
    description: 'Can\'t decide between chocolate and vanilla? Our Chocolate Vanilla Mixed Cake offers the best of both worlds. With alternating layers of chocolate and vanilla cake, and frosted with a creamy blend of chocolate and vanilla buttercream, this cake is a crowd-pleaser.'
  },
  { 
    imgSrc: '/img/pista.jpeg', 
    title: 'Pistachio Cake', 
    price: 15, 
    description: 'Enjoy the nutty and rich flavors of our Pistachio Cake. Made with finely ground pistachios and frosted with a light pistachio buttercream, this cake is both unique and delicious, offering a delightful alternative to traditional cake flavors.'
  },
  { 
    imgSrc: '/img/banana.jpeg', 
    title: 'Banana Cake', 
    price: 20, 
    description: 'Our Banana Cake is moist and flavorful, made with ripe bananas and topped with a creamy banana frosting. This cake is a wonderful choice for banana lovers, offering a sweet and fruity dessert that is sure to satisfy.'
  },
  { 
    imgSrc: '/img/black.jpeg', 
    title: 'Black Forest Cake', 
    price: 35, 
    description: 'Experience the classic taste of our Black Forest Cake, featuring layers of chocolate cake, fresh cherries, and whipped cream. Topped with chocolate shavings and more cherries, this cake is a delightful combination of rich and fruity flavors.'
  }
];

const Products = ({ addToCart }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="menu-container">
      {menuItems.map((item, index) => (
        <div className="menu-card" key={index}>
          <img src={item.imgSrc} alt={item.title} />
          <h2>{item.title}</h2>
          <p className="price">${item.price}</p>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
          <button onClick={() => openModal(item)} className="view-details">View Details</button>
        </div>
      ))}
      {selectedProduct && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={selectedProduct.imgSrc} alt={selectedProduct.title} />
            <h3>{selectedProduct.title}</h3>
            <p className="price">${selectedProduct.price}</p>
            <p>{selectedProduct.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;

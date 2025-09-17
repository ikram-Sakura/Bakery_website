import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Plus, Eye, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import '../styles/Products.css';

const menuItems = [ 
  { 
    id: 1,
    imgSrc: 'https://images.unsplash.com/photo-1709195902163-7eee13e78970?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hvY2xhdGUlMjBjYWtlfGVufDB8fDB8fHww', 
    title: 'Chocolate Cake', 
    price: 35, 
    description: 'Indulge in the rich and moist layers of our Chocolate Cake, crafted with the finest cocoa and topped with a velvety chocolate ganache. Perfect for any chocolate lover, this cake promises a decadent experience with every bite.'
    
  },
  { 
    id: 2,
    imgSrc: 'https://plus.unsplash.com/premium_photo-1663839331564-2a43583cea49?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8VmFuaWxsYSUyMENha2V8ZW58MHx8MHx8fDA%3D', 
    title: 'Vanilla Cake', 
    price: 15, 
    description: 'Our Vanilla Cake is a light and fluffy delight, made with pure vanilla extract and frosted with a smooth vanilla buttercream. Ideal for any occasion, this classic cake is sure to please everyone with its subtle sweetness and airy texture.'
  },
  { 
    id: 3,
    imgSrc: 'https://images.unsplash.com/photo-1622621746668-59fb299bc4d7?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U3RyYXdiZXJyeSUyMENha2V8ZW58MHx8MHx8fDA%3D', 
    title: 'Strawberry Cake', 
    price: 20, 
    description: 'Experience the taste of summer with our Strawberry Cake, filled with layers of fresh strawberries and creamy strawberry frosting. This cake is a perfect balance of sweetness and tanginess, making it a favorite for berry lovers.'
  },
  { 
    id: 4,
    imgSrc: 'https://plus.unsplash.com/premium_photo-1716918178946-5922b4e8645d?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TGVtb24lMjBDYWtlfGVufDB8fDB8fHww', 
    title: 'Lemon Cake', 
    price: 20, 
    description: 'Our Lemon Cake is a zesty treat that combines the tartness of lemons with a delicate sweetness. Topped with a tangy lemon glaze, this cake is refreshing and light, perfect for those who enjoy a citrusy dessert.'
  },
  { 
    id: 5,
    imgSrc: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8V2hpdGUlMjBDaG9jb2xhdGUlMjBjYWtlfGVufDB8fDB8fHww', 
    title: 'White Chocolate Cake', 
    price: 20, 
    description: 'Delight in the creamy goodness of our White Chocolate Cake. This luxurious cake is layered with white chocolate mousse and covered in a silky white chocolate frosting, making it an exquisite choice for white chocolate enthusiasts.'
  },
  { 
    id: 6,
    imgSrc: 'https://plus.unsplash.com/premium_photo-1713920189815-876dbdf5f56e?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UmVkJTIwVmVsdmV0JTIwQ2FrZXxlbnwwfHwwfHx8MA%3D%3D', 
    title: 'Red Velvet Cake', 
    price: 30, 
    description: 'Our Red Velvet Cake is a classic favorite, known for its vibrant red color and moist, tender crumb. Paired with a rich cream cheese frosting, this cake is both beautiful and delicious, making it perfect for any celebration.'
  },
  { 
    id: 7,
    imgSrc: 'https://plus.unsplash.com/premium_photo-1679047666503-28884e055869?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fE1hdGNoYSUyMENha2V8ZW58MHx8MHx8fDA%3D', 
    title: 'Matcha Cake', 
    price: 20, 
    description: 'For a unique and delightful experience, try our Matcha Cake. Made with premium matcha green tea powder, this cake offers a delicate earthy flavor and is frosted with a light matcha buttercream. A must-try for matcha lovers.'
  },
  { 
    id: 8,
    imgSrc: 'https://images.unsplash.com/photo-1619868208769-66d64945f214?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q2FyYW1lbCUyMENha2V8ZW58MHx8MHx8fDA%3D', 
    title: 'Caramel Cake', 
    price: 20, 
    description: 'Indulge in the rich flavors of our Caramel Cake. This cake features layers of moist cake infused with caramel sauce and is frosted with a luscious caramel buttercream. Perfect for those who love the sweet, buttery taste of caramel.'
  },
  { 
    id: 9,
    imgSrc: 'https://images.unsplash.com/photo-1715533482956-4a8a362b863c?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fENob2NvbGF0ZSUyMFZhbmlsbGElMjBNaXhlZCUyMENha2V8ZW58MHx8MHx8fDA%3D', 
    title: 'Chocolate Vanilla Mixed Cake', 
    price: 25, 
    description: 'Can\'t decide between chocolate and vanilla? Our Chocolate Vanilla Mixed Cake offers the best of both worlds. With alternating layers of chocolate and vanilla cake, and frosted with a creamy blend of chocolate and vanilla buttercream, this cake is a crowd-pleaser.'
  },
  { 
    id: 10,
    imgSrc: 'https://images.unsplash.com/photo-1603379421561-6837bc0ee23d?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8UGlzdGFjaGlvJTIwQ2FrZXxlbnwwfHwwfHx8MA%3D%3D', 
    title: 'Pistachio Cake', 
    price: 15, 
    description: 'Enjoy the nutty and rich flavors of our Pistachio Cake. Made with finely ground pistachios and frosted with a light pistachio buttercream, this cake is both unique and delicious, offering a delightful alternative to traditional cake flavors.'
  },
  { 
    id: 11,
    imgSrc: 'https://images.unsplash.com/photo-1504387720438-88468770d0fc?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QmFuYW5hJTIwQ2FrZXxlbnwwfHwwfHx8MA%3D%3D', 
    title: 'Banana Cake', 
    price: 20, 
    description: 'Our Banana Cake is moist and flavorful, made with ripe bananas and topped with a creamy banana frosting. This cake is a wonderful choice for banana lovers, offering a sweet and fruity dessert that is sure to satisfy.'
  },
  { 
    id: 12,
    imgSrc: 'https://images.unsplash.com/photo-1605807646983-377bc5a76493?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QmxhY2slMjBGb3Jlc3QlMjBDYWtlfGVufDB8fDB8fHww', 
    title: 'Black Forest Cake', 
    price: 35, 
    description: 'Experience the classic taste of our Black Forest Cake, featuring layers of chocolate cake, fresh cherries, and whipped cream. Topped with chocolate shavings and more cherries, this cake is a delightful combination of rich and fruity flavors.'
  },
  {
    id: 13,
    imgSrc: 'https://plus.unsplash.com/premium_photo-1667899298118-24a6cad326ec?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fENoZWVzZWNha2V8ZW58MHx8MHx8fDA%3D',
    title: 'Cheesecake',
    price: 25,
    description: 'Indulge in the rich and creamy flavors of our Cheesecake. Made with a buttery graham cracker crust and a smooth cream cheese filling, this dessert is a classic favorite that never goes out of style.'
  },
  {
    id: 14,
    imgSrc: 'https://plus.unsplash.com/premium_photo-1715030176164-7ba7e3298856?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGVjYW4lMjBQaWV8ZW58MHx8MHx8fDA%3D',
    title: 'Pecan Pie',
    price: 30,
    description: 'Savor the rich and nutty flavors of our Pecan Pie. Made with a buttery crust and a gooey filling packed with toasted pecans, this dessert is a true Southern classic that will delight your taste buds.'
  },
  {
    id: 15,
    imgSrc: 'https://media.istockphoto.com/id/585303220/photo/sprinkles.webp?a=1&b=1&s=612x612&w=0&k=20&c=DQHOGuh4_f1hAOMlD-_0OEDxbpP6BmFLJBkaw9o3tnU=',
    title: 'Cupcake',
    price: 35,
    description: 'Experience the delightful fusion of flavors with our Cupcake. This unique dessert features a moist cupcake base topped with a swirl of creamy frosting, offering a perfect balance of sweetness and texture.'
  },
  {
    id: 16,
    imgSrc: 'https://images.unsplash.com/photo-1558326567-98ae2405596b?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFjYXJvbnxlbnwwfHwwfHx8MA%3D%3D',
    title: 'Macaroon',
    price: 35,
    description: 'Delight in the colorful and flavorful world of Macaroons. These delicate French confections are made with almond flour, egg whites, and sugar, filled with a variety of luscious fillings like buttercream, ganache, or fruit preserves.'
  },
  {
    id: 17,
    imgSrc: 'https://images.unsplash.com/photo-1702745100328-fe7a353d11e9?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3JhbmdlJTIwQ2FrZXxlbnwwfHwwfHx8MA%3D%3D',
    title: 'Orange Cake',
    price: 35,
    description: 'Indulge in the exquisite flavors of our Orange Cake. This delightful dessert features a moist orange-flavored cake layered with zesty orange frosting, offering a refreshing and vibrant taste experience.'
  },
  {
    id: 18,
    imgSrc: 'https://images.unsplash.com/photo-1702744998351-090b3ee4e976?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRpcmFtaXN1fGVufDB8fDB8fHww',
    title: 'Tiramisu',
    price: 40,
    description: 'Savor the rich and creamy layers of our Tiramisu. This classic Italian dessert features espresso-soaked ladyfingers layered with a velvety mascarpone cream, dusted with cocoa powder for a delightful finish.'
  }
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useCart();

  const filteredProducts = menuItems.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = (product, e) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="products-page">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="products-header"
        >
          <h1 className="section-title">Our Delicious Cakes</h1>
          <p className="section-subtitle">
            Discover our handcrafted cakes made with love and the finest ingredients
          </p>
          
          <div className="search-container">
            <Search size={20} className="search-icon" />
            <input
              type="text"
              placeholder="Search cakes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </motion.div>

        <div className="products-grid">
          <AnimatePresence>
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="product-card"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="product-image">
                  <img src={product.imgSrc} alt={product.title} />
                  <div className="product-overlay">
                    <button 
                      className="action-btn"
                      onClick={(e) => handleAddToCart(product, e)}
                    >
                      <Plus size={20} />
                    </button>
                    <button className="action-btn">
                      <Eye size={20} />
                    </button>
                  </div>
                </div>
                <div className="product-info">
                  <h3>{product.title}</h3>
                  <p className="product-price">${product.price}</p>
                  <p className="product-description">
                    {product.description.substring(0, 80)}...
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="no-results"
          >
            <p>No cakes found matching your search.</p>
          </motion.div>
        )}

        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="modal-overlay"
              onClick={() => setSelectedProduct(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="modal-close"
                  onClick={() => setSelectedProduct(null)}
                >
                  ×
                </button>
                
                <div className="modal-body">
                  <div className="modal-image">
                    <img src={selectedProduct.imgSrc} alt={selectedProduct.title} />
                  </div>
                  
                  <div className="modal-info">
                    <h2>{selectedProduct.title}</h2>
                    <p className="modal-price">${selectedProduct.price}</p>
                    <p className="modal-description">{selectedProduct.description}</p>
                    
                    <button 
                      className="btn btn-primary modal-add-btn"
                      onClick={() => {
                        addToCart(selectedProduct);
                        setSelectedProduct(null);
                      }}
                    >
                      <ShoppingCart size={20} />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Products;
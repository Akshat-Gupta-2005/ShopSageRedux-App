import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import ProductCard from '../../components/Card/Card';
import { products } from '../../data/product';
import './Home.css';

const Home = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="home">
      <div className="home-header">
        <h1>Our Products</h1>
        <p>Discover amazing products at great prices</p>
      </div>
      
      <div className="products-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
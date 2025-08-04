import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, updateQuantity } from '../../store/cartSlice'; // adjust path
import 'boxicons/css/boxicons.min.css';
import './Card.css';

const ProductCard = ({
  id = 'product-1',
  image = 'logo512.png',
  title = 'Product Name',
  description = 'Product description goes here',
  price = '0.00',
}) => {
  const dispatch = useDispatch();
  const cartItem = useSelector(state => state.cart.items.find(item => item.id === id));
  const [quantity, setQuantity] = useState(cartItem?.quantity || 1);

  useEffect(() => {
    if (cartItem) {
      setQuantity(cartItem.quantity);
    }
  }, [cartItem]);

  const handleAddToCart = () => {
    dispatch(addToCart({ id, title, price, image }));
  };

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    dispatch(updateQuantity({ id, quantity: newQuantity }));
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  const handleRemove = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={image} alt={title} className="product-image" />
      </div>

      <div className="product-content">
        <h3 className="product-title">{title}</h3>
        <p className="product-description">{description}</p>
        <div className="product-footer">
          <span className="product-price">₹{price}</span>


          {cartItem ? (
            <div className="horizontal-card-controls">
              <div className="quantity-controls">
                <button
                  className="quantity-btn decrease"
                  onClick={handleDecrease}
                  disabled={quantity <= 1}
                >
                  <i className="bx bx-minus"></i>
                </button>

                <span className="quantity-display">{quantity}</span>

                <button
                  className="quantity-btn increase"
                  onClick={handleIncrease}
                >
                  <i className="bx bx-plus"></i>
                </button>
              </div>

              <button
                className="remove-btn"
                onClick={handleRemove}
                title="Remove item"
              >
                <i className="bx bx-trash"></i>
              </button>
            </div>
          ) : (
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              <i className="bx bx-cart-add"></i> Add to Cart
            </button>

          )}
        </div>

      </div>
    </div>
  );
};

export default ProductCard;

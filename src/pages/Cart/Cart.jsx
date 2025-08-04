import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from '../../store/cartSlice';
import HorizontalCard from '../../components/HorizontalCard/HorizontalCard';
import './Cart.css';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector(state => state.cart);

  const handleQuantityChange = (data) => {
    dispatch(updateQuantity({ id: data.id, quantity: data.quantity }));
  };

  const handleRemove = (data) => {
    dispatch(removeFromCart(data.id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (items.length === 0) {
    return (
      <div className="cart">
        <div className="cart-empty">
          <i className="bx bx-cart-alt empty-cart-icon"></i>
          <h2>Your cart is empty</h2>
          <p>Add some products to get started!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="cart-header">
        <h1>Shopping Cart</h1>
        <button className="clear-cart-btn" onClick={handleClearCart}>
          <i className="bx bx-trash"></i>
          Clear Cart
        </button>
      </div>

      <div className="cart-content">
        <div className="cart-items">
          {items.map(item => (
            <HorizontalCard
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              initialQuantity={item.quantity}
              onQuantityChange={handleQuantityChange}
              onRemove={handleRemove}
            />
          ))}
        </div>

        <div className="cart-summary">
          <div className="summary-card">
            <h3>Order Summary</h3>
            <div className="summary-row">
              <span>Total Items:</span>
              <span>{totalQuantity}</span>
            </div>
            <div className="summary-row total">
              <span>Total Amount:</span>
              <span>₹{totalAmount}</span>
            </div>
            <button className="checkout-btn">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
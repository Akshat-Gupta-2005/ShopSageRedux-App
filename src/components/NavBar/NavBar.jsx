import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';
import './NavBar.css';

const NavBar = () => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-brand">
          <i className="bx bx-package brand-icon"></i>
          <span className="brand-text">Redux Cart</span>
        </Link>
        <Link to="/" className="products-link">
          Products
        </Link>
      </div>
      
      <div className="navbar-right">
        <Link to="/cart" className="cart-button">
          <i className="bx bx-cart cart-icon"></i>
          <span className="cart-text">Cart</span>
          <span className="cart-count">{totalQuantity}</span>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
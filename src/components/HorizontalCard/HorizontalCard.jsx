import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css';
import './HorizontalCard.css';

const HorizontalCard = ({
    id = 'product-1',
    image = '/api/placeholder/80/80',
    title = 'Product Name',
    price = '0.00',
    initialQuantity = 1,
    onQuantityChange = null,
    onRemove = null,
}) => {
    const [quantity, setQuantity] = useState(initialQuantity);

    const handleIncrease = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        if (onQuantityChange) {
            onQuantityChange({ id, quantity: newQuantity, title, price, image });
        }
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            if (onQuantityChange) {
                onQuantityChange({ id, quantity: newQuantity, title, price, image });
            }
        }
    };

    const handleRemove = () => {
        if (onRemove) {
            onRemove({ id, title, price, image });
        }
    };

    return (
        <div className="horizontal-card">
            <div className="horizontal-card-image-container">
                <img
                    src={image}
                    alt={title}
                    className="horizontal-card-image"
                />
            </div>

            <div className="horizontal-card-content">
                <div className="horizontal-card-info">
                    <h3 className="horizontal-card-title">{title}</h3>
                    <span className="horizontal-card-price">₹{price}</span>
                </div>

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
            </div>
        </div>
    );
};

export default HorizontalCard;
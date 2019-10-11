import React from 'react';
import "./CheckoutItem.scss";
;
const CheckoutItem = ({ cartItem: { name, quantity , imageUrl, price}}) => {
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="name">{name}</span>
            <div className="remove-button">&#10005;</div>

        </div>
    )
}

export default CheckoutItem;

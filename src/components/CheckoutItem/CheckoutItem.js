import React from 'react';
import "./CheckoutItem.scss";
import { connect } from "react-redux";
import { removeCartItem, removeItem, addCartItem } from '../../redux/Cart/CartAction';

const CheckoutItem = ({ cartItem, clearItem, increaseItemCount , removeItem}) => {
    const { name, quantity , imageUrl, price} = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity"> 
                <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => increaseItemCount(cartItem)}>&#10095;</div>
             </span>
            <span className="name">${price}</span>
            <div className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</div>

        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(removeCartItem(item)),
    removeItem: item => dispatch(removeItem(item)),
    increaseItemCount: item => dispatch(addCartItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);

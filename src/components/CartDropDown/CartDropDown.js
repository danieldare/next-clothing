import React from 'react';
import "./CartDropDown.scss";
import Button from '../Button/Button';

const CartDropDown = () => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items" />
            <Button>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropDown;

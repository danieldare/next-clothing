import React from 'react';
import "./CartDropDown.scss";
import Button from '../Button/Button';
import { connect } from "react-redux";
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../redux/Cart/CartSelector';

const CartDropDown = ({cartItems}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                }
            </div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropDown);

import React from 'react';
import "./CartDropDown.scss";
import Button from '../Button/Button';
import { connect } from "react-redux";
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../redux/Cart/CartSelector';
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from '../../redux/Cart/CartAction';

const CartDropDown = ({cartItems, history, dispatch}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ? 
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                    :
                    <span className="empty-message">Your cart is empty</span>
                }
            </div>
            <Button onClick={() => {
                history.push("/checkout")
                dispatch(toggleCartHidden())
        }}>GO TO CHECKOUT</Button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropDown));

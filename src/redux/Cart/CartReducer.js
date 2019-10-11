import { CartActionTypes } from "./CartTypes";
import { addItemToCart, decreaseItemCount } from "./CartUtils";


const initialState = {
    hidden: true,
    cartItems: []
};

const CartReducer = (state = initialState , action) => {
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_CART_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.REMOVE_ITEM:
            return{
                ...state,
                cartItems: decreaseItemCount(state.cartItems, action.payload)
            }
        case CartActionTypes.REMOVE_CART_ITEM:
            return{
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        default: 
            return state;
    }
}

export default CartReducer;
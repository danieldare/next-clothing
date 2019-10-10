import { CartActionTypes } from "./CartTypes";

const initialState = {
    hidden: true
};

const CartReducer = (state = initialState , action) => {
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
    }
}

export default CartReducer;
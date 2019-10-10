import { CartActionTypes } from "./CartTypes";

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addCartItem = item => ({
    type: CartActionTypes.ADD_CART_ITEM,
    payload: item
})
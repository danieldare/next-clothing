import ShopActionTypes from "./ShopTypes";

const initialState = {
    collections: null
}

export const ShopReducer = (state = initialState, action) => {
    switch(action.type){
        case ShopActionTypes.UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.payload
            }
        default:
            return state
    }
}

export default ShopReducer;
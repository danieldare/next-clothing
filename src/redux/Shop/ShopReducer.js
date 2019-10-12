import ShopData from "../../ShopService";

const initialState = {
    collections: ShopData
}

export const ShopReducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state
    }
}

export default ShopReducer;
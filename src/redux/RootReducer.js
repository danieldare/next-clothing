import { combineReducers } from "redux";
import UserReducer from "./User/UserReducer";
import CartReducer from "./Cart/CartReducer";

export default combineReducers({
    user: UserReducer,
    cart: CartReducer
})
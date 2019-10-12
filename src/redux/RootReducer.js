import { combineReducers } from "redux";
import UserReducer from "./User/UserReducer";
import CartReducer from "./Cart/CartReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"
import DirectoryReducer from "./DIrectory/DirectoryReducer";
import ShopReducer from "./Shop/ShopReducer";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"]
}

const rootReducer = combineReducers({
    user: UserReducer,
    cart: CartReducer,
    directory: DirectoryReducer,
    shop: ShopReducer
})

export default persistReducer(persistConfig , rootReducer);
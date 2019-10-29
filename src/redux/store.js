import { createStore , applyMiddleware } from "redux";
import logger from "redux-logger";
import RootReducer from "./RootReducer";
import { persistStore } from  "redux-persist";

const middlewares = [];
console.log("process" ,process.env.NODE_ENV)
if(process.env.NODE_ENV === "development"){
    middlewares.push(logger);
}

const store = createStore(RootReducer, applyMiddleware(...middlewares))

const persistor = persistStore(store);

export default { store , persistor };
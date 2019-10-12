import { createStore , applyMiddleware } from "redux";
import logger from "redux-logger";
import RootReducer from "./RootReducer";
import { persistStore } from  "redux-persist";

const middlewares = [logger];

const store = createStore(RootReducer, applyMiddleware(...middlewares))

const persistor = persistStore(store);

export default { store , persistor };